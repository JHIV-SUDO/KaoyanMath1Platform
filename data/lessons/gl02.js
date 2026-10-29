export default {
  "id": "gl02",
  "subject": "gailv",
  "no": 2,
  "title": "一维随机变量及其分布",
  "subtitle": "第2章",
  "hours": 6,
  "syllabusRef": "pr2",
  "goal": [
    "理解随机变量与分布函数的概念，掌握分布函数的性质与计算",
    "掌握离散型随机变量的分布律及常见离散分布（0-1、二项、泊松、几何）",
    "掌握连续型随机变量的概率密度及常见连续分布（均匀、指数、正态）",
    "会用分布函数法与公式法求随机变量函数 $Y=g(X)$ 的分布"
  ],
  "concepts": [
    {
      "name": "随机变量与分布函数",
      "body": "把样本点映射为实数的函数 $X=X(\\omega)$ 称为**随机变量**。分布函数 $$F(x)=P(X\\le x),\\quad x\\in\\mathbb{R}$$ 完整刻画了 $X$ 的概率规律。\n$F(x)$ 的性质：① 单调不减；② $0\\le F\\le1$，$F(-\\infty)=0$，$F(+\\infty)=1$；③ **右连续**；④ $P(a<X\\le b)=F(b)-F(a)$。\n离散型 $F$ 是阶梯函数；连续型 $F$ 是连续函数。"
    },
    {
      "name": "离散型与分布律",
      "body": "离散型随机变量只取有限或可列个值，由**分布律** $P(X=x_i)=p_i$ 完全确定，需满足 $p_i\\ge0$ 且 $\\sum p_i=1$。\n分布函数与分布律互推：$F(x)=\\sum_{x_i\\le x}p_i$（跳跃累积），$p_i=F(x_i)-F(x_i-0)$。"
    },
    {
      "name": "连续型与概率密度",
      "body": "若存在 $f(x)\\ge0$ 使 $F(x)=\\int_{-\\infty}^{x}f(t)dt$，称 $X$ 为连续型，$f$ 为**概率密度**。\n密度性质：$f\\ge0$，$\\int_{-\\infty}^{+\\infty}f=1$；$P(a<X\\le b)=\\int_a^bf(x)dx$；在 $f$ 的连续点 $F'(x)=f(x)$。\n**重要事实**：连续型随机变量取任何单点的概率为 $0$，故 $P(a<X<b)=P(a\\le X\\le b)$，区间端点开闭无所谓；\"$P(X=x_0)=0$\" 不意味着 \"$X=x_0$ 不可能\"。"
    },
    {
      "name": "常见离散分布",
      "body": "**0-1 分布**：$P(X=1)=p$。**二项分布** $B(n,p)$：$n$ 重伯努利中成功次数 $P(X=k)=C_n^kp^kq^{n-k}$。**泊松分布** $P(\\lambda)$：$P(X=k)=\\dfrac{\\lambda^ke^{-\\lambda}}{k!}$，描述单位时间计数（电话呼叫、事故数），$\\lambda=E(X)$。**几何分布**：首次成功所需次数 $P(X=k)=(1-p)^{k-1}p$，具有\"无记忆性\"。\n**泊松定理**：$n$ 大、$p$ 小、$np=\\lambda$ 适中时 $B(n,p)\\approx P(np)$，用于近似计算。"
    },
    {
      "name": "常见连续分布",
      "body": "**均匀分布** $U(a,b)$：密度 $\\dfrac{1}{b-a}$ 于 $(a,b)$，落在子区间的概率只与区间长度成正比。**指数分布** $E(\\lambda)$：密度 $\\lambda e^{-\\lambda x}\\ (x>0)$，$F(x)=1-e^{-\\lambda x}$，描述\"寿命/等待时间\"，具有无记忆性 $P(X>s+t|X>s)=P(X>t)$。**正态分布** $N(\\mu,\\sigma^2)$：密度钟形曲线，$\\mu$ 定位置、$\\sigma$ 定胖瘦。"
    },
    {
      "name": "正态分布与标准化",
      "body": "$X\\sim N(\\mu,\\sigma^2)\\Rightarrow\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1)$（标准化）。$F(x)=\\Phi\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$，一切计算归结为查 $\\Phi$ 表。\n$\\Phi$ 的性质：$\\Phi(-x)=1-\\Phi(x)$；对称性 $P(|X|\\le a)=2\\Phi(a)-1$；线性组合保持正态。$3\\sigma$ 原则：$P(\\mu-3\\sigma<X<\\mu+3\\sigma)\\approx0.9973$。"
    },
    {
      "name": "随机变量函数的分布",
      "body": "已知 $X$ 的分布，求 $Y=g(X)$ 的分布。**分布函数法**（万能）：从 $F_Y(y)=P(g(X)\\le y)$ 出发，解出关于 $X$ 的不等式转化为 $X$ 的概率计算。\n**公式法**（单调时）：$g$ 严格单调、可导，则 $f_Y(y)=f_X[h(y)]|h'(y)|$，其中 $h=g^{-1}$，$y$ 取 $g$ 的值域。"
    }
  ],
  "theorems": [
    {
      "name": "分布函数的性质定理",
      "statement": "$F$ 是某随机变量的分布函数 $\\iff$ $F$ 单调不减、右连续、$F(-\\infty)=0,\\ F(+\\infty)=1$。",
      "conditions": "",
      "remark": "此定理用于\"验证给定的函数能否作为分布函数\"与\"由 $F$ 反求参数\"（通常用右连续与端点极限列方程）。"
    },
    {
      "name": "泊松定理",
      "statement": "若 $n p_n\\to\\lambda>0$，则对每个固定非负整数 $k$，$\\binom nk p_n^k(1-p_n)^{n-k}\\to e^{-\\lambda}\\lambda^k/k!$。",
      "conditions": "$n\\to\\infty$，$0\\le p_n\\le1$，$np_n\\to\\lambda$。",
      "remark": "实用形式：$B(n,p)\\approx P(\\lambda),\\ \\lambda=np$。例：1000 人投保每人出险率 0.002，出险人数近似 $P(2)$。"
    },
    {
      "name": "正态分布标准化定理",
      "statement": "$X\\sim N(\\mu,\\sigma^2)$（$\\sigma>0$）则 $Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1)$，且 $P(X\\le x)=\\Phi\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$。",
      "conditions": "",
      "remark": "逆用：$\\Phi$ 表只给标准正态；含参数正态先标准化。$\\Phi(-x)=1-\\Phi(x)$ 处理负值查表。"
    },
    {
      "name": "单调函数的密度公式",
      "statement": "$y=g(x)$ 严格单调、可导，反函数 $x=h(y)$，则 $Y=g(X)$ 的密度 $$f_Y(y)=\\begin{cases}f_X[h(y)]\\,|h'(y)|, & y\\in(\\alpha,\\beta)\\\\0,&\\text{其他}\\end{cases}$$ 其中 $(\\alpha,\\beta)$ 为 $g$ 的值域。",
      "conditions": "$g$ 严格单调可导",
      "remark": "不单调时（如 $Y=X^2$）必须用分布函数法分段处理：$F_Y(y)=P(-\\sqrt y\\le X\\le\\sqrt y)$。"
    },
    {
      "name": "指数分布的无记忆性",
      "statement": "$X\\sim E(\\lambda)\\Rightarrow P(X>s+t|X>s)=P(X>t)$。",
      "conditions": "",
      "remark": "几何分布也有无记忆性（离散版）。常以\"已用 $s$ 小时还能再用 $t$ 小时\"的实际情境命题。"
    }
  ],
  "examples": [
    {
      "title": "例1 由分布函数求参数与概率",
      "level": "基础",
      "problem": "设 $F(x)=\\begin{cases}0,&x<0\\\\ ax, & 0\\le x<1\\\\ 1, & x\\ge1\\end{cases}$，① 求 $a$；② 判断 $X$ 是什么类型并写出密度/分布律；③ 求 $P(X=0.5)$ 与 $P(0.25<X\\le0.5)$。",
      "solution": [
        "① $F$ 处处连续（$x\\to1^-$ 时 $ax\\to a$，需 $a=1$），故 $a=1$。",
        "② $F$ 连续且除 $x=0,1$ 外可导，为连续型。密度 $f=F'=\\begin{cases}1,&0<x<1\\\\0,&\\text{其他}\\end{cases}$，即 $X\\sim U(0,1)$。",
        "③ 连续型单点概率为 0：$P(X=0.5)=0$；$P(0.25<X\\le0.5)=F(0.5)-F(0.25)=0.25$。"
      ],
      "tip": "含参分布函数定参数：找\"连续点\"或\"右连续点\"列方程。$U(0,1)$ 的分布函数就是 $F(x)=x\\ (0\\le x\\le1)$，要眼熟。"
    },
    {
      "title": "例2 二项分布与泊松近似",
      "level": "基础",
      "problem": "某设备同时独立运行 80 个元件，每个元件故障率 0.01。① 求恰有 2 个故障的概率；② 用泊松分布近似计算。",
      "solution": [
        "① $X\\sim B(80,0.01)$，$P(X=2)=C_{80}^2(0.01)^2(0.99)^{78}\\approx3160\\times10^{-4}\\times0.4563\\approx0.1442$。",
        "② 泊松近似 $\\lambda=np=0.8$：$P(X=2)\\approx\\dfrac{0.8^2e^{-0.8}}{2}=\\dfrac{0.64\\times0.4493}{2}\\approx0.1438$。两法结果吻合。"
      ],
      "tip": "$n$ 大 $p$ 小时泊松近似大幅降低计算量。记住 $e^{-0.8}\\approx0.449$，$e^{-1}\\approx0.368$。"
    },
    {
      "title": "例3 正态分布计算",
      "level": "基础",
      "problem": "设 $X\\sim N(3,4)$。① 求 $P(1<X<5)$；② 求 $c$ 使 $P(X>c)=P(X\\le c)$；③ 已知 $P(X>d)=0.05$（$\\Phi(1.65)=0.95$），求 $d$。",
      "solution": [
        "① $\\dfrac{X-3}{2}\\sim N(0,1)$：$P(1<X<5)=\\Phi(1)-\\Phi(-1)=2\\Phi(1)-1\\approx2\\times0.8413-1=0.6826$。",
        "② 由对称性 $c=\\mu=3$。",
        "③ $P(X>d)=1-\\Phi\\left(\\dfrac{d-3}{2}\\right)=0.05\\Rightarrow\\Phi\\left(\\dfrac{d-3}{2}\\right)=0.95\\Rightarrow\\dfrac{d-3}{2}=1.65\\Rightarrow d=6.3$。"
      ],
      "tip": "正态计算流水线：标准化 → 查 $\\Phi$ → 用 $\\Phi(-x)=1-\\Phi(x)$。对称问题直接答 $x=\\mu$。"
    },
    {
      "title": "例4 求随机变量函数的分布（非单调）",
      "level": "强化",
      "problem": "设 $X\\sim U(0,2)$，求 $Y=X^2$ 的概率密度。",
      "solution": [
        "$X$ 的密度 $f_X(x)=\\tfrac12\\ (0<x<2)$。$Y=X^2$ 的取值范围 $(0,4)$。",
        "分布函数法：$F_Y(y)=P(X^2\\le y)$。$y\\le0$ 时 $F_Y=0$；$y>4$ 时 $F_Y=1$；$0<y<4$ 时 $F_Y=P(0\\le X\\le\\sqrt y)=\\dfrac{\\sqrt y}{2}$。",
        "求导：$f_Y(y)=\\dfrac{1}{4\\sqrt y}\\ (0<y<4)$，其他为 $0$。"
      ],
      "tip": "$X^2$ 型：$X$ 取值非负时 $P(X^2\\le y)=P(X\\le\\sqrt y)$；$X$ 可正可负时要拆 $-\\sqrt y\\le X\\le\\sqrt y$。先定 $Y$ 的值域再分段。"
    },
    {
      "title": "例5 单调函数的密度（公式法）",
      "level": "强化",
      "problem": "设 $X\\sim E(2)$，求 $Y=e^X$ 的密度。",
      "solution": [
        "$f_X(x)=2e^{-2x}\\ (x>0)$。$y=e^x$ 严格增，反函数 $x=\\ln y$，$h'(y)=\\dfrac1y$，值域 $(1,+\\infty)$。",
        "$$f_Y(y)=f_X(\\ln y)\\cdot\\left|\\frac1y\\right|=\\frac{2e^{-2\\ln y}}{y}=\\frac{2}{y^3},\\quad y>1$$ 其他为 $0$。验证：$\\int_1^\\infty\\dfrac{2}{y^3}dy=\\left[-\\dfrac{1}{y^2}\\right]_1^\\infty=1$ ✓。"
      ],
      "tip": "公式法三要素：反函数、导数绝对值、值域。最后用\"密度积分=1\"验证是良好习惯。"
    },
    {
      "title": "例6 反正弦分布（分段积分求分布函数）",
      "level": "冲刺",
      "problem": "设 $X$ 的密度 $f(x)=\\begin{cases}\\dfrac{1}{\\pi\\sqrt{1-x^2}},&|x|<1\\\\0,&\\text{其他}\\end{cases}$，求 $F(x)$ 并求 $P\\left(|X|<\\tfrac12\\right)$。",
      "solution": [
        "当 $-1<x<1$：$F(x)=\\displaystyle\\int_{-1}^{x}\\frac{dt}{\\pi\\sqrt{1-t^2}}=\\frac{1}{\\pi}\\arcsin t\\Big|_{-1}^{x}=\\frac{1}{\\pi}\\arcsin x+\\frac12$。",
        "故 $F(x)=\\begin{cases}0,&x\\le-1\\\\\\tfrac12+\\tfrac{1}{\\pi}\\arcsin x,&-1<x<1\\\\1,&x\\ge1\\end{cases}$（$x=\\pm1$ 处连续，端点归并无妨）。",
        "$P\\left(|X|<\\tfrac12\\right)=F(\\tfrac12)-F(-\\tfrac12)=\\dfrac{2}{\\pi}\\arcsin\\dfrac12=\\dfrac{2}{\\pi}\\cdot\\dfrac{\\pi}{6}=\\dfrac13$。"
      ],
      "tip": "反正弦/反正切密度是经典模型，积分结果 $\\tfrac12+\\tfrac{1}{\\pi}\\arcsin x$、$\\tfrac12+\\tfrac{1}{\\pi}\\arctan x$ 建议记结论。对称密度可用对称性：$P(|X|<a)=2F(a)-1$。"
    }
  ],
  "methods": [
    "定参数：分布律用归一性 $\\sum p_i=1$；密度用 $\\int f=1$；分布函数用连续性/右连续/端点极限。",
    "正态一切计算先标准化 $\\dfrac{X-\\mu}{\\sigma}$；查表结合 $\\Phi(-x)=1-\\Phi(x)$。",
    "求函数分布优先判单调：单调用公式法，非单调（平方、绝对值、取整）用分布函数法分段。",
    "离散型求 $P(g(X)=y)$：把 $X$ 的每个取值代入 $g$ 列表合并同值项。",
    "指数分布：$F(x)=1-e^{-\\lambda x}$，无记忆性直接用。",
    "泊松近似：$n$ 大 $p$ 小取 $\\lambda=np$；记住 $e^{-1}=0.368,e^{-0.5}=0.607$。"
  ],
  "pitfalls": [
    "连续型随机变量 $P(X=a)=0$，但不\"不可能\"；反之 $P(A)=0$ 不一定是不可能事件。",
    "分布函数右连续：离散型在跳跃点 $F(x_i)=P(X\\le x_i)$ 包含该点概率，$P(X<x_i)=F(x_i-0)$。",
    "密度不是概率！$f(x)$ 可以大于 1，$P(X\\in dx)\\approx f(x)dx$。",
    "正态分布 $N(\\mu,\\sigma^2)$ 第二个参数是方差；标准化除以 $\\sigma$ 不是 $\\sigma^2$。",
    "函数分布先求值域再写分段，值域端点处的开闭按连续型习惯（不影响概率）。",
    "$B(n,p)$ 与 $P(\\lambda)$ 勿混：二项有组合数，泊松只有 $\\lambda^k/k!e^{-\\lambda}$。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "设离散型 $X$ 的分布律为 $P(X=-1)=\\tfrac16,\\ P(X=1)=\\tfrac13,\\ P(X=2)=\\tfrac12$，求 $F(x)$ 并求 $P(0.5<X\\le2)$。",
      "answer": "$F(x)=\\begin{cases}0,&x<-1\\\\\\tfrac16,&-1\\le x<1\\\\\\tfrac12,&1\\le x<2\\\\1,&x\\ge2\\end{cases}$；$P(0.5<X\\le2)=\\tfrac56$",
      "solution": "阶梯累积：$x<-1$ 为 0；$[-1,1)$ 累积 $\\tfrac16$；$[1,2)$ 累积 $\\tfrac16+\\tfrac13=\\tfrac12$；$x\\ge2$ 为 1。$P(0.5<X\\le2)=F(2)-F(0.5)=1-\\tfrac16=\\tfrac56$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "设 $X\\sim U(0,5)$，求方程 $4t^2+4Xt+X+2=0$ 有实根的概率。",
      "answer": "$\\dfrac35$",
      "solution": "实根 $\\iff\\Delta=16X^2-16(X+2)\\ge0\\iff X^2-X-2\\ge0\\iff X\\le-1$ 或 $X\\ge2$。$X\\sim U(0,5)$ 只能取 $X\\ge2$，$P=\\dfrac{5-2}{5}=\\dfrac35$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "设 $X\\sim N(0,1)$，求 $Y=|X|$ 的密度。",
      "answer": "$f_Y(y)=\\sqrt{\\dfrac{2}{\\pi}}e^{-y^2/2}\\ (y>0)$",
      "solution": "$y\\le0$：$F_Y=0$；$y>0$：$F_Y(y)=P(|X|\\le y)=2\\Phi(y)-1$，求导 $f_Y(y)=2\\varphi(y)=\\sqrt{\\tfrac2\\pi}e^{-y^2/2}$（标准正态密度 $\\varphi(y)=\\tfrac{1}{\\sqrt{2\\pi}}e^{-y^2/2}$）。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "某路公交车每 10 分钟一班（到站即走），乘客到达时刻均匀分布。设乘客等待时间为 $Y$，求 $P(Y\\le 6)$ 与 $P(Y>3)$。",
      "answer": "$0.6；0.7$",
      "solution": "等待时间 $Y\\sim U(0,10)$，密度 $\\tfrac1{10}$。$P(Y\\le6)=\\dfrac{6}{10}=0.6$；$P(Y>3)=1-P(Y\\le3)=1-0.3=0.7$。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "设 $X$ 的密度 $f(x)=\\begin{cases}\\dfrac{c}{1+x^2},&x>0\\\\0,&x\\le0\\end{cases}$，求 $c$ 与 $Y=\\dfrac1X$ 的密度。",
      "answer": "$c=\\dfrac2\\pi$；$f_Y(y)=\\dfrac{2}{\\pi(1+y^2)}\\ (y>0)$",
      "solution": "$\\int_0^\\infty\\dfrac{dx}{1+x^2}=\\dfrac\\pi2\\Rightarrow c=\\dfrac2\\pi$。$y=1/x$ 严格减，$x=1/y$，$|dx/dy|=1/y^2$，值域 $y>0$：$f_Y(y)=\\dfrac{2/\\pi}{1+1/y^2}\\cdot\\dfrac1{y^2}=\\dfrac{2}{\\pi(y^2+1)}\\ (y>0)$。即 $1/X$ 与 $X$ 同分布（对柯西型分布）。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "设 $X\\sim B(2,p)$，$Y\\sim B(4,p)$ 独立，已知 $P(X\\ge1)=\\tfrac59$，求 $P(Y\\ge1)$。",
      "answer": "$\\dfrac{65}{81}$",
      "solution": "$P(X\\ge1)=1-(1-p)^2=\\tfrac59\\Rightarrow(1-p)^2=\\tfrac49\\Rightarrow 1-p=\\tfrac23\\Rightarrow p=\\tfrac13$。$P(Y\\ge1)=1-(1-p)^4=1-\\left(\\tfrac23\\right)^4=1-\\tfrac{16}{81}=\\tfrac{65}{81}$。"
    }
  ]
};
