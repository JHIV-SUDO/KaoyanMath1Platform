export default {
  "id": "gs12",
  "subject": "gaoshu",
  "no": 12,
  "title": "一元函数积分学的应用（三）——物理应用",
  "subtitle": "第12讲",
  "hours": 5,
  "syllabusRef": "hm3",
  "goal": [
    "掌握变力沿直线做功的计算（含抽水做功、克服重力做功）",
    "掌握液体静压力的计算（平板竖直浸入液体）",
    "掌握细棒对质点的引力计算",
    "掌握质心（形心）与转动惯量的积分求法",
    "熟练运用微元法把物理量\"切片求和\""
  ],
  "concepts": [
    {
      "name": "微元法的物理化",
      "body": "物理量 $Q$ 的微元 $dQ$ = \"密度（强度）× 几何微元\"。如压力微元 $dP=\\rho g h\\cdot dA$（压强×面积微元）、功微元 $dW=F\\cdot ds$。\n要点：物理量沿某坐标分布 → 切片 → 每片内物理量近似均匀 → 写微元 → 积分。所有物理应用题都是这一句话。"
    },
    {
      "name": "变力做功",
      "body": "力 $F(x)$ 随位置变化，沿 $x$ 轴从 $a$ 移到 $b$：$$W=\\int_a^bF(x)\\,dx$$\n两大经典：① **拉弹簧**（胡克定律 $F=kx$）：$W=\\int_0^skx\\,dx=\\dfrac12ks^2$；② **抽水**：把各层水提升到出口，$dW=\\rho g\\cdot($水层体积$)\\times($提升高度$)$。"
    },
    {
      "name": "液体静压力",
      "body": "平板竖直浸在密度 $\\rho$ 的液体中，深度 $h$ 处压强 $p=\\rho gh$。深度带 $[y,y+dy]$ 上的压力微元 $$dP=\\rho g\\cdot y\\cdot w(y)\\,dy$$ 其中 $w(y)$ 为该深度处平板的水平宽度。\n注意：压力与平板形状（宽度函数）有关，与\"总的液体量\"无关；常取坐标原点在液面或池底，建立 $y$ 与深度的关系。"
    },
    {
      "name": "万有引力（细棒对质点）",
      "body": "长 $l$ 的细棒（线密度 $\\mu$）对质量 $m$、距离 $a$ 的质点：把棒分成小段 $dx$，每段视为质点，$$dF=\\frac{Gm\\mu\\,dx}{r^2}$$ 沿指定方向**分解**后积分（斜向引力必须投影到坐标轴上再积分，直接把距离代入会漏方向）。"
    },
    {
      "name": "质心与转动惯量",
      "body": "细棒（线密度 $\\mu(x)$）质心：$\\bar x=\\dfrac{\\int x\\mu(x)dx}{\\int\\mu(x)dx}$。平面薄片、平面图形同理（对两轴分别算）。\n转动惯量：$I=\\int r^2\\,dm$，细棒对过端点垂轴 $I=\\int_0^l\\mu x^2dx=\\dfrac{\\mu l^3}{3}=\\dfrac13ml^2$；对过质心垂轴 $=\\dfrac{1}{12}ml^2$。"
    },
    {
      "name": "平均值与函数的加权平均",
      "body": "连续函数在 $[a,b]$ 上的平均值 $\\bar f=\\dfrac{1}{b-a}\\int_a^bf(x)dx$，即积分中值定理的 $f(\\xi)$。\n有效值、均方根：$\\sqrt{\\dfrac1{b-a}\\int f^2}$。交流电有效值 $I_{有效}=\\dfrac{I_m}{\\sqrt2}$ 由此而来。"
    }
  ],
  "theorems": [
    {
      "name": "变力做功公式",
      "statement": "$$W=\\int_a^bF(x)\\,dx$$",
      "conditions": "力沿运动方向（或取投影）",
      "remark": "方向变化的力必须先投影到运动方向。胡克定律弹簧功 $\\tfrac12ks^2$、克服重力 $W=mgh$（恒力特例）。"
    },
    {
      "name": "抽水做功微元",
      "statement": "容器中把水面降到某高度，取深度层 $[y,y+dy]$：$$dW=\\rho g\\,(y-y_0)\\,A(y)\\,dy$$ 其中 $A(y)$ 为该层横截面积，$y-y_0$ 为提升高度。",
      "conditions": "先建立坐标系确定 $y$ 的正方向与 $y_0$",
      "remark": "易错点：提升高度是\"该层到出口的距离\"，不是统一值；坐标系取在池底还是液面直接影响被积函数。"
    },
    {
      "name": "静压力公式",
      "statement": "$$P=\\int_{h_1}^{h_2}\\rho g\\,y\\,w(y)\\,dy$$",
      "conditions": "$y$ 为深度（从液面往下量），$w(y)$ 为宽度",
      "remark": "若坐标从池底往上取，深度 $=H-y$，公式变为 $\\rho g(H-y)w(y)dy$——坐标选择写清楚即可。"
    },
    {
      "name": "引力分解公式",
      "statement": "细棒上小段 $dx$ 对质点 $m$ 的引力大小 $dF=\\dfrac{Gm\\mu\\,dx}{r^2(x)}$，沿轴向分量 $$F_{\\parallel}=\\int dF\\cos\\theta(x)$$",
      "conditions": "斜向引力必须分解",
      "remark": "质点在棒的中垂线上时，垂直分量抵消、只剩轴向分量（乘 $\\cos$ 或 $\\sin$ 因子）；质点在棒的延长线上则无需分解。"
    },
    {
      "name": "质心与转动惯量",
      "statement": "$$\\bar x=\\frac{\\int x\\,dm}{\\int dm};\\qquad I=\\int r^2\\,dm$$",
      "conditions": "",
      "remark": "细棒均质：对端点垂轴 $\\tfrac13ml^2$、对中心垂轴 $\\tfrac1{12}ml^2$、圆环对中心轴 $mR^2$、圆盘 $\\tfrac12mR^2$——四个特例值得记住。"
    },
    {
      "name": "平均值公式",
      "statement": "$$\\bar f=\\frac1{b-a}\\int_a^bf(x)dx;\\qquad f_{rms}=\\sqrt{\\frac1{b-a}\\int_a^bf^2(x)dx}$$",
      "conditions": "",
      "remark": "'平均值'考题常配以\"电流/速度\"情境；正弦量 $\\sin$ 在半周期平均 $=2/\\pi$、均方根 $=1/\\sqrt2$。"
    }
  ],
  "examples": [
    {
      "title": "例1 拉弹簧做功",
      "level": "基础",
      "problem": "弹簧每拉长 1 cm 需力 5 N（胡克定律），求把弹簧从原长拉长 6 cm 所做的功。",
      "solution": [
        "$F=kx$，$k=\\dfrac{5\\text{ N}}{0.01\\text{ m}}=500$ N/m。",
        "$W=\\displaystyle\\int_0^{0.06}500x\\,dx=250x^2\\Big|_0^{0.06}=250\\times0.0036=0.9$ J。"
      ],
      "tip": "单位统一（cm→m）是第一件事；$W=\\tfrac12ks^2$ 可直接检验：$\\tfrac12\\times500\\times0.0036=0.9$ ✓。"
    },
    {
      "title": "例2 抽水做功（圆柱水池）",
      "level": "强化",
      "problem": "圆柱形水池半径 2 m、深 5 m，池中水深 3 m，求把水全部抽到池口所做的功（$\\rho=1000$ kg/m³，$g=9.8$）。",
      "solution": [
        "取坐标：池口为原点向下为正，水深层位置 $y\\in[2,5]$（池底在 $y=5$，水面在 $y=2$）。提升高度 $=y$，水层截面 $A=\\pi\\cdot2^2=4\\pi$。",
        "$$W=\\int_2^5\\rho g\\cdot y\\cdot4\\pi\\,dy=4\\pi\\rho g\\cdot\\frac{y^2}{2}\\Big|_2^5=2\\pi\\rho g(25-4)=42\\pi\\rho g$$",
        "代入：$42\\times3.14\\times1000\\times9.8\\approx1.29\\times10^6$ J。"
      ],
      "tip": "抽水功三要素：哪层水（截面积）、提多高（该层到出口距离）、多少水（$\\rho\\times$体积微元）。坐标系任取，但\"提升高度\"表达式必须配套。"
    },
    {
      "title": "例3 闸门静压力",
      "level": "强化",
      "problem": "一矩形闸门宽 2 m、高 3 m，竖直放置，上边与水面齐平。求闸门一侧所受水压力。",
      "solution": [
        "以水面向下为 $h$，$h\\in[0,3]$，宽度 $w=2$：",
        "$$P=\\int_0^3\\rho g h\\cdot2\\,dh=\\rho g\\cdot h^2\\Big|_0^3=9\\rho g=9\\times1000\\times9.8=8.82\\times10^4\\text{ N}$$"
      ],
      "tip": "矩形闸门可先用平均压强验算：中心深度 1.5 m，$P=\\rho g\\bar h\\cdot A=1000\\times9.8\\times1.5\\times6=8.82\\times10^4$ ✓（梯形/矩形可用形心法快算，曲边必须积分）。"
    },
    {
      "title": "例4 细棒对质点的引力（延长线方向）",
      "level": "强化",
      "problem": "长为 $l$、线密度 $\\mu$ 的均匀细棒置于 $x$ 轴 $[0,l]$，质量为 $m$ 的质点位于 $x=l+a$（$a>0$）。求棒对质点的引力。",
      "solution": [
        "微元 $[x,x+dx]$ 到质点距离 $l+a-x$：$dF=\\dfrac{Gm\\mu\\,dx}{(l+a-x)^2}$，方向沿 $x$ 轴负向（无需分解）。",
        "$$F=\\int_0^l\\frac{Gm\\mu}{(l+a-x)^2}dx=Gm\\mu\\left[\\frac{1}{l+a-x}\\right]_0^l=Gm\\mu\\left(\\frac1a-\\frac{1}{a+l}\\right)=\\frac{Gm\\mu l}{a(a+l)}$$ 方向指向细棒。"
      ],
      "tip": "质点在棒的延长线上时引力沿轴向，直接积 $1/r^2$；当 $a\\gg l$ 时 $F\\approx\\dfrac{Gm\\mu l}{a^2}=\\dfrac{GmM}{a^2}$（$M=\\mu l$ 为棒总质量）——退化为质点公式，可作检验。"
    },
    {
      "title": "例5 细棒对质点的引力（中垂线方向，需分解）",
      "level": "冲刺",
      "problem": "长为 $2l$、线密度 $\\mu$ 的均匀细棒位于 $x\\in[-l,l]$，质量 $m$ 的质点位于 $y$ 轴上 $(0,a)$。求棒对质点的引力沿 $y$ 方向的分量。",
      "solution": [
        "微元 $[x,x+dx]$ 到质点距离 $r=\\sqrt{x^2+a^2}$，$dF=\\dfrac{Gm\\mu\\,dx}{x^2+a^2}$，方向沿从质点指向微元。",
        "$y$ 方向分量：$dF_y=dF\\cdot\\cos\\theta=dF\\cdot\\dfrac{a}{\\sqrt{x^2+a^2}}=\\dfrac{Gm\\mu a\\,dx}{(x^2+a^2)^{3/2}}$。",
        "$$F_y=\\int_{-l}^{l}\\frac{Gm\\mu a\\,dx}{(x^2+a^2)^{3/2}}=2Gm\\mu a\\cdot\\left[\\frac{x}{a^2\\sqrt{x^2+a^2}}\\right]_0^l=\\frac{2Gm\\mu l}{a\\sqrt{l^2+a^2}}$$（$x$ 分量由对称性抵消。）"
      ],
      "tip": "斜向引力\"先分解后积分\"是铁律：$dF_y=dF\\cos\\theta$，$\\cos\\theta=\\dfrac{a}{r}$。对称结构垂直分量自动为零可省一半计算。"
    },
    {
      "title": "例6 平均值与均方根",
      "level": "冲刺",
      "problem": "交流电流 $i(t)=I_m\\sin\\omega t$，求它在半个周期 $\\left[0,\\dfrac{\\pi}{\\omega}\\right]$ 上的平均值与有效值（均方根）。",
      "solution": [
        "平均值：$\\bar i=\\dfrac{\\omega}{\\pi}\\int_0^{\\pi/\\omega}I_m\\sin\\omega t\\,dt=\\dfrac{\\omega I_m}{\\pi}\\cdot\\dfrac{2}{\\omega}=\\dfrac{2I_m}{\\pi}$。",
        "有效值：$i^2$ 平均 $=\\dfrac{\\omega}{\\pi}\\int_0^{\\pi/\\omega}I_m^2\\sin^2\\omega t\\,dt=\\dfrac{I_m^2}{2}$（半周期上 $\\sin^2$ 平均仍为 $\\tfrac12$），故 $i_{rms}=\\dfrac{I_m}{\\sqrt2}$。"
      ],
      "tip": "平均值与有效值是两个不同概念（算术平均 vs 均方根）；正弦量平均值 $2/\\pi\\approx0.637$、有效值 $1/\\sqrt2\\approx0.707$，注意区分。"
    }
  ],
  "methods": [
    "物理应用统一套路：建坐标系 → 切片写微元（密度×几何微元）→ 定积分限 → 积分。",
    "做功：恒力 $Fs$；变力 $\\int Fdx$；抽水 $\\rho g\\times$体积微元×提升高度。",
    "压力：$\\int\\rho g\\times$深度×宽度 $dh$；矩形可用形心处压强×面积验算。",
    "引力：先写 $dF=Gm\\,dm/r^2$，斜向必须乘方向余弦分解后积分。",
    "质心/转动惯量：$\\bar x=\\int x\\,dm/\\int dm$，$I=\\int r^2dm$；记住四个标准特例。",
    "检验习惯：结果量纲对不对；特殊情形（质点化、无限远）退化是否合理。"
  ],
  "pitfalls": [
    "抽水做功的提升高度随层变化，用统一的 $h$ 是最常见的错。",
    "压力公式中\"深度\"必须从液面算起，坐标原点在池底时要换算 $H-y$。",
    "引力问题必须分解方向：斜向直接积 $1/r^2$ 会把垂直分量也算进去。",
    "弹簧功是 $\\tfrac12ks^2$ 不是 $ks^2$（积分而非乘积）。",
    "平均值是 $\\frac{1}{b-a}\\int f$，别忘除以区间长度。",
    "单位制（cm/m、kg/g、N/kgf）不统一是计算错误的头号来源。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "一物体按规律 $x=t^3$（$t\\ge0$）做直线运动，介质阻力大小与速度成正比，比例系数为 $k>0$。求物体从 $x=0$ 移到 $x=a>0$ 时克服阻力所做的功。",
      "answer": "$W=\\frac{9k}{5}a^{5/3}$",
      "solution": "$v=3t^2$，阻力 $F=kv=3kt^2$。位移微元 $dx=3t^2dt$。$W=\\int F\\,dx=\\int_0^{a^{1/3}}3kt^2\\cdot3t^2dt=9k\\cdot\\dfrac{t^5}{5}\\Big|_0^{a^{1/3}}=\\dfrac{9k}{5}a^{5/3}$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "半径为 $R$ 的半球形水池盛满水，求把水全部抽出水池所做的功（以池口为参考）。",
      "answer": "$W=\\dfrac{\\pi\\rho gR^4}{4}$",
      "solution": "取水面向下的深度 $y\\in[0,R]$。半球球心位于池口平面，所以深度 $y$ 处截面面积为 $\\pi(R^2-y^2)$，该层提升高度为 $y$。因此 $W=\\rho g\\pi\\int_0^R y(R^2-y^2)dy=\\pi\\rho gR^4/4$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "等腰三角形闸门底边在上、与水面齐平，底宽 $2a$、高 $h$，竖直放置。求闸门一侧的水压力。",
      "answer": "$P=\\dfrac{\\rho g a h^2}{3}$",
      "solution": "在水面下深度 $y\\in[0,h]$ 处，三角形水平宽度为 $2a(1-y/h)$，压强为 $\\rho gy$。因此 $P=\\rho g\\int_0^h y\\,2a(1-y/h)dy=\\rho gah^2/3$。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "设有一长度为 $l$、线密度为 $\\mu$ 的均匀细棒，求它对过其一端且垂直于棒的轴的转动惯量。",
      "answer": "$\\dfrac13\\mu l^3=\\dfrac13ml^2$",
      "solution": "$I=\\int_0^l\\mu x^2dx=\\dfrac{\\mu l^3}{3}=\\dfrac13ml^2$。对过中点的轴则为 $\\int_{-l/2}^{l/2}\\mu x^2dx=\\dfrac{\\mu l^3}{12}=\\dfrac{1}{12}ml^2$。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "一底为 $b$、高为 $h$ 的三角形薄板竖直沉于水中，顶点朝下、底边与水面平行且位于水面下深度 $d$ 处（$d>h$）。求薄板一侧所受水压力。",
      "answer": "$P=\\frac{\\rho gbh}{2}(d+\\frac h3)$",
      "solution": "以水面为原点、向下为正方向。三角形底边位于深度 $d$，顶点朝下位于 $d+h$。令 $u=y-d\\in[0,h]$，水平宽度为 $b(1-u/h)$，压强为 $\\rho g(d+u)$。因此 $P=\\rho gb\\int_0^h(d+u)(1-u/h)du=\\frac{\\rho gbh}{2}(d+h/3)$。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "半径为 $R$、面密度 $\\sigma$ 的均匀圆盘，求它对过圆心且垂直盘面的轴的转动惯量。",
      "answer": "$\\dfrac12\\sigma\\pi R^4=\\dfrac12mR^2$",
      "solution": "取半径 $r$ 处宽 $dr$ 的细圆环，$dm=\\sigma\\cdot2\\pi r\\,dr$，$I=\\int_0^Rr^2\\sigma 2\\pi r\\,dr=2\\pi\\sigma\\cdot\\dfrac{R^4}{4}=\\dfrac{\\pi\\sigma R^4}{2}=\\dfrac12mR^2$（$m=\\sigma\\pi R^2$）。"
    }
  ]
};
