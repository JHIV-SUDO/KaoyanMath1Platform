import { S } from '../store.js';
import { el, setMd } from '../util.js';
import { learningLinks } from '../learning-links.js';

const SUBJECTS = {
  gaoshu: { name: '高等数学', color: '#59d8ed', longitude: 0 },
  xiandai: { name: '线性代数', color: '#f3bd67', longitude: 120 },
  gailv: { name: '概率统计', color: '#f18aa4', longitude: -120 },
};
const STATUS = ['未学习', '学习中', '已学完'];

function chapterFor(lesson) {
  const subject = S.content.syllabus.subjects.find(s => s.id === lesson.subject);
  const refs = Array.isArray(lesson.syllabusRef) ? lesson.syllabusRef : [lesson.syllabusRef];
  for (const ref of refs) {
    const chapter = subject?.chapters.find(c => c.id === ref);
    if (chapter) return chapter;
  }
  return null;
}

function detailFor(lesson) {
  const chapter = chapterFor(lesson);
  const state = S.db.lessonStatus[lesson.id]?.status ?? 0;
  const panel = el('div', { class: 'knowledge-detail' },
    el('div', { class: 'knowledge-eyebrow' }, `${SUBJECTS[lesson.subject].name} · ${lesson.subtitle} · ${STATUS[state] || STATUS[0]}`),
    el('h2', {}, lesson.title),
    el('p', { class: 'knowledge-chapter' }, chapter ? `对应考纲：${chapter.name}` : '对应考纲：待关联'),
    el('div', { class: 'knowledge-counts' },
      el('span', {}, `${lesson.concepts.length} 个概念`), el('span', {}, `${lesson.theorems.length} 条定理`),
      el('span', {}, `${lesson.examples.length} 个例题`), el('span', {}, `${lesson.exercises.length} 道练习`)),
    el('button', { class: 'btn primary', onclick: () => { location.hash = '#/lessons/' + lesson.id; } }, '进入完整讲义 →'));

  const goals = el('ul', { class: 'knowledge-goals' });
  for (const goal of lesson.goal) goals.append(el('li', {}, goal));
  panel.append(el('h3', {}, '学习目标'), goals);

  // 知识图谱：本章的先修章节与相关题型（真实数据关系，点击 App 内跳转）
  const map = S.content.knowledgeMap;
  if (map && chapter) {
    const chapterEntity = map.entities.find(e => e.kind === 'chapter' && e.subject === lesson.subject && e.name === chapter.name);
    const graphBox = el('div', { class: 'knowledge-fold-body' });
    if (chapterEntity) {
      const prereqIn = map.edges.filter(e => e.rel === 'prerequisite' && e.to === chapterEntity.id)
        .map(e => map.entities.find(x => x.id === e.from)).filter(Boolean);
      const prereqOut = map.edges.filter(e => e.rel === 'prerequisite' && e.from === chapterEntity.id)
        .map(e => map.entities.find(x => x.id === e.to)).filter(Boolean);
      const row = (label, items) => {
        if (!items.length) return;
        graphBox.append(el('p', { style: 'margin:6px 0' }, el('b', {}, label + '：'),
          ...items.flatMap((c, i) => [
            ...(i ? [el('span', {}, '、')] : []),
            el('a', { href: '#/lessons/' + (c.lessons?.[0] || ''), style: 'color:var(--accent)', onclick: e => { if (!c.lessons?.[0]) e.preventDefault(); } }, c.name),
          ])));
      };
      row('先修章节', prereqIn);
      row('后续章节', prereqOut);
    }
    const qtypes = map.entities.filter(e => e.kind === 'qtype' && e.lessons.includes(lesson.id));
    if (qtypes.length) {
      graphBox.append(el('p', { style: 'margin:6px 0' }, el('b', {}, '典型题型：'),
        ...qtypes.flatMap((q, i) => [...(i ? [el('span', {}, '、')] : []),
          el('a', { href: '#/practice', style: 'color:var(--accent)' }, q.name)])));
    }
    if (graphBox.children.length) {
      const fold = el('details', { class: 'knowledge-fold', open: true }, el('summary', {}, '知识图谱 · 先修与题型'));
      fold.append(graphBox);
      panel.append(fold);
    }
  }

  const concepts = el('details', { class: 'knowledge-fold', open: true }, el('summary', {}, `核心概念 · ${lesson.concepts.length}`));
  for (const concept of lesson.concepts) {
    const body = el('div'); setMd(body, concept.body);
    concepts.append(el('div', { class: 'knowledge-entry' }, el('b', {}, concept.name), body));
  }
  panel.append(concepts);

  const theorems = el('details', { class: 'knowledge-fold' }, el('summary', {}, `定理与公式 · ${lesson.theorems.length}`));
  for (const theorem of lesson.theorems) {
    const body = el('div'); setMd(body, theorem.statement);
    const entry = el('div', { class: 'knowledge-entry' }, el('b', {}, theorem.name), body);
    if (theorem.conditions) { const conditions = el('div', { class: 'knowledge-condition' }); setMd(conditions, '适用条件：' + theorem.conditions); entry.append(conditions); }
    theorems.append(entry);
  }
  panel.append(theorems);

  if (chapter) {
    const outline = el('details', { class: 'knowledge-fold' }, el('summary', {}, '考纲内容与要求'));
    for (const text of chapter.contents) outline.append(el('p', {}, text));
    const req = el('ul'); for (const text of chapter.requirements) req.append(el('li', {}, text));
    outline.append(el('b', {}, '考试要求'), req);
    panel.append(outline);
  }

  const links = el('div', { class: 'knowledge-links' });
  for (const link of learningLinks(lesson)) links.append(el('a', {
    href: link.hash,
  }, el('b', {}, link.title), el('span', {}, ' · ' + link.detail)));
  panel.append(el('h3', {}, '继续学习（App 内）'), links);
  return panel;
}

export async function knowledge(main) {
  const lessons = S.lessonList();
  const scene = el('div', { class: 'knowledge-scene', 'aria-label': '可旋转的三维知识地球' });
  const tooltip = el('div', { class: 'knowledge-tooltip', hidden: true });
  const message = el('div', { class: 'knowledge-scene-message' }, '正在构建知识地球…');
  const controls = el('div', { class: 'knowledge-controls' });
  const detail = el('aside', { class: 'knowledge-panel', 'aria-live': 'polite' });
  const tabs = el('div', { class: 'knowledge-tabs', role: 'group', 'aria-label': '按科目筛选' });
  const list = el('div', { class: 'knowledge-list' });
  const query = el('input', { type: 'search', placeholder: '搜索讲义或知识点', 'aria-label': '搜索讲义或知识点' });
  let filter = 'all', selected = lessons[0]?.id;
  let focusNode = () => {}, setRotation = () => {};
  let rotating = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const rotateButton = el('button', { type: 'button', class: 'knowledge-action', 'aria-pressed': String(rotating), onclick: () => {
    rotating = !rotating; rotateButton.setAttribute('aria-pressed', String(rotating));
    rotateButton.textContent = rotating ? '暂停旋转' : '继续旋转'; setRotation(rotating);
  } }, rotating ? '暂停旋转' : '继续旋转');
  controls.append(rotateButton);
  scene.append(message, tooltip, controls);
  const legend = el('div', { class: 'knowledge-legend' },
    ...Object.values(SUBJECTS).map(s => el('span', {}, el('i', { style: `background:${s.color}` }), s.name)),
    el('span', { class: 'knowledge-legend-note' }, '连线表示同科目的讲义顺序'));
  const sceneColumn = el('section', { class: 'knowledge-scene-column' }, scene, legend,
    el('p', { class: 'knowledge-help' }, '拖动旋转 · 滚轮或双指缩放 · 点击节点查看详情；也可使用下方列表。'));
  const catalog = el('section', { class: 'knowledge-catalog' },
    el('div', { class: 'knowledge-catalog-head' }, el('div', {}, el('h2', {}, '知识目录'), el('p', {}, '科目 → 考纲章节 → 讲义 → 概念、定理与练习')), query), tabs, list);
  main.append(el('div', { class: 'knowledge-page' },
    el('div', { class: 'page-head' }, el('h1', {}, '知识地球'), el('span', { class: 'sub' }, '从整体结构进入每一个考点')),
    el('div', { class: 'knowledge-layout' }, sceneColumn, detail), catalog));

  function select(id, focus = true) {
    const lesson = lessons.find(item => item.id === id);
    if (!lesson) return;
    selected = id;
    detail.replaceChildren(detailFor(lesson));
    if (focus) { rotating = false; rotateButton.setAttribute('aria-pressed', 'false'); rotateButton.textContent = '继续旋转'; setRotation(false); focusNode(id); }
    for (const button of list.querySelectorAll('button')) button.classList.toggle('on', button.dataset.id === selected);
  }

  function drawList() {
    const term = query.value.trim().toLowerCase();
    const visible = lessons.filter(lesson => (filter === 'all' || lesson.subject === filter) &&
      (!term || [lesson.title, lesson.subtitle, ...lesson.concepts.map(c => c.name)].join(' ').toLowerCase().includes(term)));
    list.replaceChildren();
    if (!visible.length && !term) { list.append(el('p', { class: 'knowledge-empty' }, '没有找到匹配的知识点。')); return; }
    for (const lesson of visible) {
      const state = S.db.lessonStatus[lesson.id]?.status ?? 0;
      list.append(el('button', { type: 'button', class: 'knowledge-list-item' + (lesson.id === selected ? ' on' : ''), 'data-id': lesson.id, onclick: () => select(lesson.id) },
        el('i', { style: `background:${SUBJECTS[lesson.subject].color}` }),
        el('span', {}, el('b', {}, lesson.title), el('small', {}, `${SUBJECTS[lesson.subject].name} · ${lesson.subtitle}`)),
        el('em', {}, STATUS[state] || STATUS[0])));
    }
    // 知识图谱实体搜索：概念/定理/方法/题型（点击进入对应讲义或练习，全部 App 内）
    if (term && S.content.knowledgeMap) {
      const KINDS = { concept: '概念', theorem: '定理', method: '方法', qtype: '题型' };
      const hits = S.content.knowledgeMap.entities.filter(e =>
        KINDS[e.kind] && (filter === 'all' || e.subject === filter) && String(e.name).toLowerCase().includes(term)).slice(0, 24);
      if (hits.length) {
        list.append(el('p', { class: 'knowledge-empty', style: 'margin-top:10px' }, `图谱匹配 ${hits.length} 项（按类型）`));
        for (const e of hits) {
          const target = e.lessons[0] ? '#/lessons/' + e.lessons[0] : '#/practice';
          list.append(el('button', { type: 'button', class: 'knowledge-list-item', onclick: () => { location.hash = target; } },
            el('i', { style: `background:${SUBJECTS[e.subject]?.color || '#888'}` }),
            el('span', {}, el('b', {}, e.name), el('small', {}, `${KINDS[e.kind]}${e.lessons.length ? ' · ' + e.lessons.map(id => lessons.find(l => l.id === id)?.subtitle).filter(Boolean).join('/') : ''}`)),
            el('em', {}, e.lessons[0] ? '进入讲义' : '去练习')));
        }
      }
    }
  }

  function drawTabs() {
    tabs.replaceChildren();
    for (const [key, label] of [['all', '全部'], ...Object.entries(SUBJECTS).map(([key, s]) => [key, s.name])]) {
      tabs.append(el('button', { type: 'button', class: 'knowledge-tab' + (filter === key ? ' on' : ''), 'aria-pressed': String(filter === key), onclick: () => {
        filter = key; drawTabs(); drawList();
        const first = list.querySelector('button'); if (first) select(first.dataset.id);
      } }, label));
    }
  }
  query.addEventListener('input', drawList);
  drawTabs(); drawList(); if (selected) select(selected, false);

  try {
    const [THREE, orbit] = window.CloudPlatform?.loadThree ? await window.CloudPlatform.loadThree() : await Promise.all([
      import('/vendor/three/three.module.js'), import('/vendor/three/OrbitControls.js'),
    ]);
    if (!scene.isConnected) return;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x0a1329, 0);
    scene.prepend(renderer.domElement);
    const world = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    camera.position.set(0, 0.25, 4.3);
    const orbitControls = new orbit.OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true; orbitControls.enablePan = false;
    orbitControls.minDistance = 2.35; orbitControls.maxDistance = 6;
    orbitControls.autoRotate = rotating; orbitControls.autoRotateSpeed = 0.35;
    world.add(new THREE.AmbientLight(0x9db9e3, 1.15));
    const light = new THREE.DirectionalLight(0xbcefff, 2.2); light.position.set(3, 4, 5); world.add(light);
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 40), new THREE.MeshPhongMaterial({ color: 0x102f53, shininess: 48, emissive: 0x04172b }));
    world.add(sphere);
    const glow = new THREE.Mesh(new THREE.SphereGeometry(1.1, 48, 32), new THREE.ShaderMaterial({
      uniforms: {}, vertexShader: 'varying vec3 n; void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
      fragmentShader: 'varying vec3 n; void main(){float a=pow(0.7-abs(dot(n,vec3(0.,0.,1.))),2.0);gl_FragColor=vec4(0.15,0.55,1.0,a*0.32);}',
      transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    world.add(glow);

    function position(lat, lon, radius = 1.025) {
      const a = THREE.MathUtils.degToRad(lat), b = THREE.MathUtils.degToRad(lon);
      return new THREE.Vector3(radius * Math.cos(a) * Math.sin(b), radius * Math.sin(a), radius * Math.cos(a) * Math.cos(b));
    }
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x75b8d9, transparent: true, opacity: 0.14 });
    for (let lat = -60; lat <= 60; lat += 30) {
      const points = []; for (let lon = -180; lon <= 180; lon += 5) points.push(position(lat, lon, 1.004));
      world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial));
    }
    for (let lon = 0; lon < 180; lon += 30) {
      const points = []; for (let lat = -90; lat <= 90; lat += 5) points.push(position(lat, lon, 1.004));
      for (let lat = 90; lat >= -90; lat -= 5) points.push(position(lat, lon + 180, 1.004));
      world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial));
    }
    const dots = [], locations = new Map();
    for (const [subject, config] of Object.entries(SUBJECTS)) {
      const group = lessons.filter(lesson => lesson.subject === subject);
      const cols = subject === 'gaoshu' ? 6 : 4, rows = Math.ceil(group.length / cols);
      group.forEach((lesson, index) => {
        const row = Math.floor(index / cols), col = index % cols;
        const lat = rows === 1 ? 0 : 42 - row * (84 / (rows - 1));
        const lon = config.longitude + (col - (cols - 1) / 2) * 15 + (row % 2 ? 4 : 0);
        const point = position(lat, lon);
        locations.set(lesson.id, point);
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.024, 12, 10), new THREE.MeshBasicMaterial({ color: config.color }));
        dot.position.copy(point); dot.userData.lessonId = lesson.id; world.add(dot); dots.push(dot);
        if (index > 0) {
          const previous = locations.get(group[index - 1].id), points = [];
          for (let step = 0; step <= 30; step++) {
            const t = step / 30;
            points.push(previous.clone().lerp(point, t).normalize().multiplyScalar(1.035 + 0.045 * Math.sin(Math.PI * t)));
          }
          world.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: config.color, transparent: true, opacity: 0.48 })));
        }
      });
    }
    const selectedRing = new THREE.Mesh(new THREE.RingGeometry(0.038, 0.048, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
    world.add(selectedRing);
    function highlight(id) {
      const point = locations.get(id); if (!point) return;
      selectedRing.position.copy(point.clone().normalize().multiplyScalar(1.045));
      selectedRing.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), point.clone().normalize());
      dots.forEach(dot => dot.scale.setScalar(dot.userData.lessonId === id ? 1.55 : 1));
    }
    focusNode = id => {
      highlight(id); const point = locations.get(id); if (!point) return;
      camera.position.copy(point.clone().normalize().multiplyScalar(camera.position.length())); orbitControls.update();
    };
    setRotation = value => { orbitControls.autoRotate = value; };
    highlight(selected);
    const ray = new THREE.Raycaster(), pointer = new THREE.Vector2();
    let down = null;
    const hitAt = event => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
      ray.setFromCamera(pointer, camera);
      return ray.intersectObjects(dots).find(item => item.point.distanceTo(camera.position) < camera.position.length());
    };
    const onDown = event => { down = { x: event.clientX, y: event.clientY }; };
    const onUp = event => {
      if (!down || Math.hypot(event.clientX - down.x, event.clientY - down.y) > 6) return;
      const hit = hitAt(event);
      if (hit) select(hit.object.userData.lessonId);
    };
    const onMove = event => {
      if (event.pointerType === 'touch') return;
      const hit = hitAt(event), lesson = hit && lessons.find(item => item.id === hit.object.userData.lessonId);
      tooltip.hidden = !lesson; renderer.domElement.style.cursor = lesson ? 'pointer' : 'grab';
      if (lesson) { const rect = scene.getBoundingClientRect(); tooltip.textContent = `${lesson.subtitle} ${lesson.title}`; tooltip.style.left = (event.clientX - rect.left + 12) + 'px'; tooltip.style.top = (event.clientY - rect.top + 12) + 'px'; }
    };
    const onLeave = () => { tooltip.hidden = true; };
    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointerup', onUp);
    renderer.domElement.addEventListener('pointermove', onMove);
    renderer.domElement.addEventListener('pointerleave', onLeave);
    const resize = () => {
      const width = scene.clientWidth, height = scene.clientHeight; if (!width || !height) return;
      camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false);
    };
    const observer = window.ResizeObserver ? new ResizeObserver(resize) : null;
    if (observer) observer.observe(scene); else window.addEventListener('resize', resize);
    resize(); message.hidden = true;
    let frame = 0;
    const animate = () => { frame = requestAnimationFrame(animate); orbitControls.update(); renderer.render(world, camera); };
    animate();
    return () => {
      cancelAnimationFrame(frame); observer?.disconnect(); window.removeEventListener('resize', resize);
      renderer.domElement.removeEventListener('pointerdown', onDown); renderer.domElement.removeEventListener('pointerup', onUp);
      renderer.domElement.removeEventListener('pointermove', onMove); renderer.domElement.removeEventListener('pointerleave', onLeave);
      orbitControls.dispose(); world.traverse(object => { object.geometry?.dispose(); if (Array.isArray(object.material)) object.material.forEach(material => material.dispose()); else object.material?.dispose(); });
      renderer.dispose();
    };
  } catch (error) {
    console.error('知识地球渲染失败', error);
    message.textContent = '当前设备无法显示 3D 球体，可继续通过下方知识目录学习。';
  }
}
