// 人工核验修订（可重放）：在所有内容加载器中于导入题库之后应用。
// - fields: 直接覆盖字段（在重新导入后依然生效，导入工具无需感知）。
// - patches: 精确 find/replace 子串修补（必须全文唯一命中，加载器会校验）。
// - clearRenderWarning: 该题渲染与数学均已核验，移除"排版待核对"提示。
// 每条 entry 的 reason 记录核验依据；日期为核验完成日。
export default {
  version: 1,
  updated: '2026-10-29',
  note: '修订由逐题人工推导与 KaTeX 机器校验（tests/formula-check.mjs）双重确认；未核实条目不转为自动判分。',
  /** 在内容加载时应用修订；幂等可重跑。patches 必须在原文中唯一命中，否则告警跳过（不静默错改）。 */
  apply(list) {
    if (!Array.isArray(list)) return 0;
    let n = 0;
    for (const q of list) {
      const c = this.entries?.[q?.id];
      if (!c) continue;
      for (const p of c.patches || []) {
        const count = q.sourceSolution === undefined && q.problem === undefined ? 0 :
          countOccurrences(q.sourceSolution, p.find) + countOccurrences(q.problem, p.find);
        if (count === 1) {
          if (q.sourceSolution?.includes(p.find)) q.sourceSolution = q.sourceSolution.replace(p.find, p.replace);
          else q.problem = q.problem.replace(p.find, p.replace);
        } else {
          console.warn(`[corrections] ${q.id} 补丁命中 ${count} 次（应为 1），已跳过：${p.find.slice(0, 60)}…`);
          continue;
        }
      }
      for (const [k, v] of Object.entries(c.fields || {})) q[k] = v;
      if (c.clearRenderWarning) delete q.renderWarning;
      n++;
    }
    return n;
  },
  entries: {
    'book1000-c09-q023': {
      reason: '来源缺解析与答案。人工推导：A 变限积分定理成立；B 反例 sgn x（可积但含跳跃间断点，达布定理⇒无原函数）不成立；C 奇函数对称区间为 0；D 周期平移公式成立。答案 B，转自动判分。',
      fields: {
        type: 'choice',
        answer: 'B',
        analysis: {
          intent: '考查"原函数存在性"与变限积分、对称区间、周期平移三条性质的辨析，要求挑出唯一不成立的命题；干扰来自把"可积"与"连续"的条件混为一谈。',
          clue: 'A 的条件是连续＋变限积分，直接对上原函数存在定理；B 只有"可积"，要立刻想到用反例（含第一类间断点的可积函数）检验；C 是奇函数配对称区间；D 是周期函数积分的平移不变性。',
          steps: [
            'A 成立：f 在 [a,b] 连续时，F(x)=∫ₐˣf(t)dt 可导且 F\'(x)=f(x)，故 F 是 f 的一个原函数（变限积分求导定理）。',
            'B 不成立：取 f(x)=sgn x（x∈[-1,1]），仅 x=0 是跳跃间断点，函数可积；若存在 F 使 F\'=f，由达布定理导函数不能有第一类间断点，而 f 在 x=0 处有跳跃间断，矛盾。故 f 在 (-1,1) 内不存在原函数。',
            'C 成立：∫₋ₐᵃf(x)dx 中令 x=-t，得 ∫₋ₐ⁰f(x)dx=-∫₀ᵃf(t)dt，与 ∫₀ᵃf(x)dx 相加为零。',
            'D 成立：∫ₐ^{a+T}f(x)dx=∫ₐ⁰f dx+∫₀ᵀf dx+∫ᵀ^{a+T}f dx，对最后一项令 u=x-T 得 ∫₀ᵃf(u)du，恰与 ∫ₐ⁰f dx 相消。',
          ],
          trap: '最常见的错误是记住"可积⇒有原函数"。牛顿-莱布尼茨公式要求的条件是 f 连续（或 f 本身存在原函数）；可积只保证变限积分连续，不保证它可导。注意区分：跳跃间断点处原函数一定不存在；可去间断点处原函数可能存在（例如 x²sin(1/x) 的导数在 0 处有可去间断）。',
          check: '对 B 的反例做直接验证：若有 F\'=sgn x，则在 x≠0 上 F=±|x|+C 分段线性；由 F 在 0 处连续，左右导数分别为 +1 与 -1，F\'(0) 不存在，而 sgn 0=0 需要导数值存在，矛盾成立。',
          transfer: '判据链"连续⇒有原函数；有跳跃（或无穷）间断点⇒无原函数；可去间断点⇒可能有原函数"适用于全部原函数存在性选择题；周期平移公式 ∫ₐ^{a+T}=∫₀ᵀ 是比较不同区间定积分与反常积分判敛的常用工具。',
        },
      },
    },
    'book1000-c09-q024': {
      reason: '来源缺解析与答案。人工推导：f(u)=4/(u²-25)，积分区间换元后为 t∈[1,3]，奇点 ±5 不在内，不是反常积分；值为 (1/5)ln(3/8)≈-0.196。来源选项 C（值 10）与 D（值 π/4）均与核验值不符，故不转自动判分，保留自评并明确标注差异。',
      fields: {
        renderWarning: '⚠ 经人工核验：本题正确结论是"不是反常积分，其值为 (1/5)ln(3/8)"；来源选项 C 与 D 虽然都写"不是反常积分"，但所给数值均与推导不符。本题保留自评，不参与自动判分。',
        analysis: {
          intent: '考查反常积分的识别与定积分计算：先由复合关系求出 f 的表达式，再检查奇点是否落入积分区间；干扰项利用"分母在某点为零"诱导误判为反常积分。',
          clue: '两个动作：一是令 u=x-5 解出 f(u)；二是令 t=2x+1 化简积分上下限。奇点 t=±5 是否落在 [1,3] 内决定"是否反常"。',
          steps: [
            '由 x²-10x=(x-5)²-25，令 u=x-5 得 f(u)=4/(u²-25)。',
            '令 t=2x+1：x∈[0,1] 对应 t∈[1,3]，dx=dt/2，原式=(1/2)∫₁³f(t)dt=2∫₁³ dt/(t²-25)。',
            't∈[1,3] 时 t²-25∈[-24,-16] 恒不为零，被积函数在区间上连续——这不是反常积分。',
            '用 ∫dt/(t²-a²)=(1/(2a))ln|(t-a)/(t+a)|+C（a=5）：原式=2·(1/10)[ln|(t-5)/(t+5)|]₁³=(1/5)(ln(2/8)-ln(4/6))=(1/5)ln(3/8)≈-0.196。',
          ],
          trap: '看到 4/(x²-10x) 的分母在 x=0、x=5 处为零，容易直接判"反常"；但换元后积分变量是 t，x=0、1 对应 t=1、3，奇点 t=±5 都不在区间内。另一处易错是漏掉 dx=dt/2 的系数 1/2。',
          check: '被积函数 4/(t²-25) 在 [1,3] 上恒为负，积分应为负值；(1/5)ln(3/8)≈-0.196<0，符号一致。再用中点近似 (1/2)·2·4/(2²-25)=-8/21≈-0.381 为中点值，与精确值同量级同号。',
          transfer: '判断反常积分的第一步永远是"找出无穷间断点并检查是否落在积分区间内（含端点）"；复合函数定积分先换元再判断，可避免被原表达式的形式迷惑。',
        },
      },
    },
    'book1000-c09-q025': {
      reason: '来源缺解析与答案。人工推导：A 在 [π,2π] 上 |sin x|≥sin²x，方向反了；B 左侧奇函数积 0，右侧正偶函数积分大于 0，成立；C 缺 f≥0 前提，f=-1 反例；D 需 |f| 为偶函数，f(x)=x+1 反例。答案 B，转自动判分。',
      fields: {
        type: 'choice',
        answer: 'B',
        analysis: {
          intent: '定积分大小比较综合题：四个选项分别考查绝对值与平方的大小关系、对称区间奇偶性、区间包含比较的符号前提、偶函数性前提。',
          clue: '对称区间先做奇偶化简；含 |sin x| 与 sin²x 比较时用 0≤|sin x|≤1；区间包含的不等式必须检查被积函数符号；等式 ∫₋₁¹|f|=2∫₀¹|f| 需要偶函数性。',
          steps: [
            'A 错误：在 [π,2π] 上记 u=|sin x|∈[0,1]，则 sin²x=u²≤u=|sin x|（仅端点取等），故 ∫|sin x|dx ≥ ∫sin²x dx，与所给不等式方向相反。取 x=3π/2：|sin|=1 而 sin²=0，立见其伪。',
            'B 正确：x/(1+cos x) 是奇函数，对称区间积分为 0；(sin x)/(1+x⁴) 是奇函数积分为 0；1/(1+x²) 是正的偶函数，∫_{-π/4}^{π/4}dx/(1+x²)=2arctan(π/4)>0。所以左=0<右。',
            'C 错误：f 连续但未必非负。取 f=-1、[a,b]⊂[c,d]：∫ₐᵇf=-(b-a)≥-(d-c)=∫_c^d f，不等号反向。正确的命题需要加"f≥0"。',
            'D 错误：等式成立需要 |f| 为偶函数（即 f 为奇函数或偶函数）。取 f(x)=x+1：左=∫₋₁¹(x+1)dx=2，右=2∫₀¹(x+1)dx=3，不相等。',
          ],
          trap: 'A 的方向搞反是最常见错误——记住在 [0,1] 上 u²≤u；C 容易默认 f 非负；D 容易把"区间对称"当成"函数偶"。',
          check: 'B 两侧分别用奇偶性化简后，右侧=2arctan(π/4)≈1.51>0=左侧，数值核对一致。',
          transfer: '对称区间定积分比较的标准流程：先奇偶化简，再比较剩余偶函数部分；区间包含型比较必须验证被积函数符号；涉及 |f| 的等式要先问"|f| 是否偶函数"。',
        },
      },
    },
    'book1000-c01-q005': {
      reason: '原解析用 {array}+\\overline 排版长除法，KaTeX 无法渲染；机器校验报错。改写为因式分解推导（λ=2 为零点，三次式除以 λ-2 得 λ²-λ-8，与原答案一致），数学已独立复核。',
      clearRenderWarning: true,
      fields: {
        sourceSolution: '$$\\frac{\\lambda^4-3\\lambda^3-6\\lambda^2+16\\lambda}{\\lambda^2-2\\lambda}=\\frac{\\lambda\\left(\\lambda^3-3\\lambda^2-6\\lambda+16\\right)}{\\lambda(\\lambda-2)},$$\n$\\lambda=2$ 是 $\\lambda^3-3\\lambda^2-6\\lambda+16$ 的零点（代入得 0），故三次式含因式 $\\lambda-2$，用逐次消去或待定系数得\n$$\\lambda^3-3\\lambda^2-6\\lambda+16=(\\lambda-2)\\left(\\lambda^2-\\lambda-8\\right),$$\n（验证：$(\\lambda-2)(\\lambda^2-\\lambda-8)=\\lambda^3-\\lambda^2-8\\lambda-2\\lambda^2+2\\lambda+16=\\lambda^3-3\\lambda^2-6\\lambda+16$。）\n于是当 $\\lambda\\neq 0,2$ 时，分子分母中的公因式 $\\lambda(\\lambda-2)$ 可约去：\n$$\\frac{\\lambda^4-3\\lambda^3-6\\lambda^2+16\\lambda}{\\lambda^2-2\\lambda}=\\frac{(\\lambda-2)\\left(\\lambda^2-\\lambda-8\\right)}{\\lambda-2}=\\lambda^2-\\lambda-8.$$\n\n【注】对于多项式 $f(x),g(x)$，称次数最高的公共因式为最大公因式；如 $f(x)=x^3(x^2-1)$ 与 $g(x)=2x^2(x+1)$ 的最大公因式为 $x^2(x+1)$。一般记首项系数为 1 的最大公因式为 $(f(x),g(x))$；若 $(f(x),g(x))=1$，称 $f(x)$ 与 $g(x)$ 互质，如 $(x^2,x+1)=1$。',
      },
    },
    'book1000-c14-q014': {
      reason: '原解析面积段一处 \\left|…\\right| 括号不配对（\\right| 多出一个），KaTeX 报错。修补该行并规范间距；内容（S=1/8、V=π/54）已独立复核正确。',
      clearRenderWarning: true,
      patches: [
        {
          find: '=\\left|\\frac{1}{2}\\int_{0}^{1}\\ln x\\,\\mathrm{d}\\left(\\frac{1}{2}x^{2}\\right)\\right|=\\left|\\frac{1}{4}x^{2}\\ln x\\right|_{0}^{1}-\\frac{1}{4}\\int_{0}^{1}x\\mathrm{d}x\\right|',
          replace: '=\\left|\\frac{1}{2}\\int_{0}^{1}\\ln x\\,\\mathrm{d}\\left(\\frac{x^{2}}{2}\\right)\\right|=\\left|\\frac{1}{4}x^{2}\\ln x\\Big|_{0}^{1}-\\frac{1}{4}\\int_{0}^{1}x\\,\\mathrm{d}x\\right|',
        },
      ],
    },
    'book1000-c14-q021': {
      reason: '原解析 \\end{cases} 后多一个右花括号，KaTeX 报错；修补。最值推导（驻点 (0,±1)，边界为 0，最大值 1，故 k≥1）已独立复核正确。',
      clearRenderWarning: true,
      patches: [
        { find: '\\end{cases}}', replace: '\\end{cases}' },
      ],
    },
    'book1000-c44-q003': {
      reason: '题干 ① 中 \\lim 连续两个 \\limits 造成双下标，KaTeX 报错；合并为单下标。核验：①连续（|f|≤(|x|+|y|)²）②∂f/∂x(0,0)=0 ③∂f/∂y(0,0)=0（非 1，命题错误）④可微且 df=0；正确命题 3 个，答案 (C)。转自动判分。',
      clearRenderWarning: true,
      patches: [
        { find: '\\lim\\limits_{x\\to 0}\\limits_{y\\to 0}f(x,y)=f(0,0)', replace: '\\lim\\limits_{x\\to 0,\\,y\\to 0}f(x,y)=f(0,0)' },
      ],
      fields: {
        type: 'choice',
        answer: 'C',
        analysis: {
          intent: '以绝对值定义的二元函数为载体，综合考查连续、偏导数定义、可微性判断；四个命题各设一个常见误区。',
          clue: '含绝对值的函数在各象限是多项式，重点在 (0,0)：连续用放缩，偏导用定义（沿坐标轴），可微用 Δf−df 与 ρ 之比的极限。',
          steps: [
            '① f(0,0)=0，且 |f(x,y)|≤|x|²+2|x||y|+|y|²=(|x|+|y|)²→0，故极限存在且等于 0，①正确。',
            '② ∂f/∂x(0,0)=lim_{x→0}[f(x,0)−f(0,0)]/x=lim x|x|/x=lim|x|=0，②正确。',
            '③ 同理 ∂f/∂y(0,0)=lim_{y→0}y|y|/y=lim|y|=0，命题称其为 1，③错误。',
            '④ Δf=(Δx+Δy)(|Δx|+|Δy|)，且 0≤|Δf|/ρ≤|Δx|/ρ·(|Δx|+|Δy|)+|Δy|/ρ·(|Δx|+|Δy|)≤2(|Δx|+|Δy|)→0，故可微且 df(0,0)=0·Δx+0·Δy=0，④正确。',
          ],
          trap: '③ 是本题的干扰核心：把 f(0,y)=y|y| 误当成 y（漏掉绝对值）会得导数 1。注意 y|y| 在 y→0 时一阶项抵消，导数是 0。可微性不要用"偏导存在"来断言，必须回到定义式。',
          check: '④ 的放缩用 |Δx|≤ρ、|Δy|≤ρ 逐步收紧，极限为 0；也可沿 y=kx 验证 Δf/ρ=(1+k)(1+|k|)x²/(|x|√(1+k²))→0 与路径无关。',
          transfer: '判断分段定义二元函数在原点的性质，标准顺序：连续（放缩）→偏导（定义）→可微（Δf−df 与 ρ 之比）。绝对值函数沿坐标轴的偏导常出人意料，务必用定义计算。',
        },
      },
    },
    'book1000-c57-q017': {
      reason: '原解析两处显示公式之间出现 $$$$ 连写，KaTeX 定界符配对失败；在两段之间断开。数学内容（a=-4、通解 (1,0,0)ᵀ+k(1,1,1)ᵀ、特征值 6,-6,0 与正交矩阵）已独立复核正确。',
      clearRenderWarning: true,
      patches: [
        { find: '\\end{pmatrix}$$$$\\to\\begin{pmatrix}2&2&a', replace: '\\end{pmatrix}.$$\n$$\\to\\begin{pmatrix}2&2&a' },
      ],
    },
    'booknote-强化篇-gaoshu-15-36': {
      reason: '基线标记的公式问题经 KaTeX 机器校验未复现（全字段可渲染），且答案与解析由独立推导确认正确：y=cosh x（由 √(1+y\'²)=y\'\' 与初始条件解出），S=3/4，x̄=ln2−1/3，ȳ=ln2/3+5/16。移除过时的排版警告。',
      clearRenderWarning: true,
    },
  },
};

function countOccurrences(text, sub) {
  if (!text || typeof text !== 'string' || !sub) return 0;
  let n = 0, i = text.indexOf(sub);
  while (i !== -1) { n++; i = text.indexOf(sub, i + 1); }
  return n;
}
