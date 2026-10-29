export default {
  "id": "gl03",
  "subject": "gailv",
  "no": 3,
  "title": "多维随机变量及其分布",
  "subtitle": "第3章",
  "hours": 6,
  "syllabusRef": "pr3",
  "goal": [
    "理解联合分布、边缘分布、条件分布的概念与相互转化关系",
    "掌握二维离散型（联合分布律）与二维连续型（联合密度）的计算",
    "深刻理解独立性与不相关性的区别，掌握独立的判定与推论",
    "掌握二维均匀分布、二维正态分布的性质",
    "会求两个（多个）随机变量简单函数的分布（和、max、min）"
  ],
  "concepts": [
    {
      "name": "联合分布函数",
      "body": "$(X,Y)$ 的联合分布函数 $F(x,y)=P(X\\le x,Y\\le y)$。性质：对每个变量单调不减、右连续；$F(-\\infty,y)=F(x,-\\infty)=0$，$F(+\\infty,+\\infty)=1$。\n**边缘分布**：$F_X(x)=F(x,+\\infty)$，$F_Y(y)=F(+\\infty,y)$——把另一个变量\"积掉\"。"
    },
    {
      "name": "二维离散型",
      "body": "联合分布律 $P(X=x_i,Y=y_j)=p_{ij}$，需 $p_{ij}\\ge0$、$\\sum\\sum p_{ij}=1$（表格形式最直观）。\n边缘分布律：按行/列求和 $p_{i\\cdot}=\\sum_jp_{ij}$。\n条件分布：$P(X=x_i|Y=y_j)=\\dfrac{p_{ij}}{p_{\\cdot j}}$——在表格某列内做归一化。"
    },
    {
      "name": "二维连续型",
      "body": "联合密度 $f(x,y)$：$F(x,y)=\\int_{-\\infty}^x\\int_{-\\infty}^yf(u,v)dudv$，$f\\ge0$ 且 $\\int\\!\\int f=1$。\n边缘密度：$f_X(x)=\\int_{-\\infty}^{+\\infty}f(x,y)dy$（固定 $x$ 对 $y$ 积分）。\n条件密度：$f_{X|Y}(x|y)=\\dfrac{f(x,y)}{f_Y(y)}\\ (f_Y(y)>0)$。\n矩形区域概率直接二重积分；非常用\"先定区域再积分\"。"
    },
    {
      "name": "独立性与不相关性",
      "body": "$X,Y$ **独立** $\\iff F(x,y)=F_X(x)F_Y(y)$ $\\iff$ $f(x,y)=f_X(x)f_Y(y)$（连续型）$\\iff$ $p_{ij}=p_{i\\cdot}p_{\\cdot j}$（离散型）。\n**不相关**：$\\operatorname{Cov}(X,Y)=0$（即 $\\rho=0$）。独立 $\\Rightarrow$ 不相关；反之不然（除非联合正态）。\n直观：不相关只排除了\"线性关系\"，独立排除了一切关系。"
    },
    {
      "name": "二维均匀分布",
      "body": "平面有界区域 $D$ 上 $f(x,y)=\\dfrac{1}{S_D}$（$S_D$ 为面积），$(x,y)\\in D$。\n概率 = 目标区域与 $D$ 交集面积占比，把几何概型\"代数化\"。落在 $D$ 内子区域的概率只与其面积有关。"
    },
    {
      "name": "二维正态分布",
      "body": "$(X,Y)\\sim N(\\mu_1,\\mu_2;\\sigma_1^2,\\sigma_2^2;\\rho)$，五个参数：两个均值、两个方差、相关系数 $\\rho$。\n核心性质：① 边缘分布都是一维正态（由 $\\mu_i,\\sigma_i$ 决定，与 $\\rho$ 无关）；② $X,Y$ 独立 $\\iff\\rho=0$（**二维正态中不相关与独立等价**）；③ 线性组合 $aX+bY$ 仍服从正态。"
    },
    {
      "name": "两个随机变量函数的分布",
      "body": "**和** $Z=X+Y$：连续型 $f_Z(z)=\\int_{-\\infty}^{+\\infty}f(x,z-x)dx$；独立时 $f_Z(z)=\\int f_X(x)f_Y(z-x)dx$（卷积）。\n**最大值/最小值**（独立时）：$F_{\\max}(z)=F_X(z)F_Y(z)$；$F_{\\min}(z)=1-[1-F_X(z)][1-F_Y(z)]$。\n离散型：枚举 $Z$ 的可能取值，逐值求对应 $(X,Y)$ 联合概率之和。"
    }
  ],
  "theorems": [
    {
      "name": "边缘密度公式",
      "statement": "$f_X(x)=\\int_{-\\infty}^{+\\infty}f(x,y)dy,\\qquad f_Y(y)=\\int_{-\\infty}^{+\\infty}f(x,y)dx$",
      "conditions": "",
      "remark": "\"知联合求边缘\"积分即可；\"知边缘求联合\"一般不行（需独立性或条件分布补充信息）——这是考试最爱设的陷阱。"
    },
    {
      "name": "独立性判定定理",
      "statement": "连续型：$f(x,y)=f_X(x)f_Y(y)$ 几乎处处成立 $\\iff$ 独立。离散型：对**所有** $i,j$ 有 $p_{ij}=p_{i\\cdot}p_{\\cdot j}$ $\\iff$ 独立。",
      "conditions": "",
      "remark": "实用判据：① 联合密度能\"分离变量\"且定义域为矩形（乘积型区域）→ 独立；② 定义域含 $x<y$ 之类的耦合 → 不独立。"
    },
    {
      "name": "卷积公式",
      "statement": "独立时 $Z=X+Y$ 的密度：$$f_Z(z)=\\int_{-\\infty}^{+\\infty}f_X(x)f_Y(z-x)dx$$",
      "conditions": "$X,Y$ 独立",
      "remark": "重要特例：$X\\sim N(\\mu_1,\\sigma_1^2),Y\\sim N(\\mu_2,\\sigma_2^2)$ 独立 $\\Rightarrow X+Y\\sim N(\\mu_1+\\mu_2,\\sigma_1^2+\\sigma_2^2)$；独立正态的线性组合仍正态。"
    },
    {
      "name": "max/min 分布公式",
      "statement": "$X_1,\\dots,X_n$ 独立同分布 $F$：$$F_{\\max}(z)=[F(z)]^n,\\quad F_{\\min}(z)=1-[1-F(z)]^n$$",
      "conditions": "独立（同分布时公式最简）",
      "remark": "直观：max 全部 $\\le z$ 要求每个都 $\\le z$（乘法）；min 至少一个 $>z$ 用对立。寿命问题、系统可靠性问题的模型。"
    },
    {
      "name": "条件分布",
      "statement": "离散：$P(X=x_i|Y=y_j)=\\dfrac{p_{ij}}{p_{\\cdot j}}$。连续：$f_{X|Y}(x|y)=\\dfrac{f(x,y)}{f_Y(y)}$。",
      "conditions": "分母大于零",
      "remark": "$X|Y=y$ 是一个完整的一维分布（可求其期望方差）；\"独立时条件分布 = 边缘分布\"。"
    }
  ],
  "examples": [
    {
      "title": "例1 联合分布律与边缘、独立性",
      "level": "基础",
      "problem": "袋中 2 红 2 白球不放回取两次，$X=$ 第一次红球数（0/1），$Y=$ 两次红球总数（0/1/2）。写出联合分布律、边缘分布律并判断独立性。",
      "solution": [
        "枚举：$P(X=0,Y=0)=\\dfrac26\\cdot\\dfrac15=\\dfrac{2}{6}\\cdot\\dfrac15$，即第一次白第二次白 $\\tfrac{2}{4}\\cdot\\tfrac13=\\tfrac16$；$P(X=0,Y=1)=\\tfrac24\\cdot\\tfrac23=\\tfrac13$；$P(X=1,Y=1)=\\tfrac24\\cdot\\tfrac23=\\tfrac13$；$P(X=1,Y=2)=\\tfrac24\\cdot\\tfrac13=\\tfrac16$；其余 $(X=0,Y=2),(X=1,Y=0)$ 为 0。",
        "边缘：$P(X=0)=\\tfrac12,\\ P(X=1)=\\tfrac12$；$P(Y=0)=\\tfrac16,\\ P(Y=1)=\\tfrac23,\\ P(Y=2)=\\tfrac16$。",
        "独立性检验：$P(X=0,Y=0)=\\tfrac16\\ne P(X=0)P(Y=0)=\\tfrac12\\cdot\\tfrac16=\\tfrac1{12}$，故**不独立**（$Y$ 的分布依赖 $X$，显然）。"
      ],
      "tip": "不放回试验的联合分布律按\"路径概率\"（逐步条件概率相乘）填表；判独立只需找**一个**反例格 $p_{ij}\\ne p_{i\\cdot}p_{\\cdot j}$。"
    },
    {
      "title": "例2 由联合密度求边缘与条件密度",
      "level": "基础",
      "problem": "设 $f(x,y)=\\begin{cases}3x,&0<x<1,\\ 0<y<x\\\\0,&\\text{其他}\\end{cases}$，求 $f_X(x),\\ f_Y(y)$ 与 $f_{X|Y}(x|y)$。",
      "solution": [
        "定义域是三角形 $:0<y<x<1$。",
        "$f_X(x)=\\int_0^x3x\\,dy=3x^2\\ (0<x<1)$，其他为 0。",
        "$f_Y(y)=\\int_y^13x\\,dx=\\dfrac{3(1-y^2)}{2}\\ (0<y<1)$，其他为 0。",
        "条件密度（$0<y<1$）：$f_{X|Y}(x|y)=\\dfrac{3x}{\\tfrac32(1-y^2)}=\\dfrac{2x}{1-y^2}\\ (y<x<1)$。"
      ],
      "tip": "边缘密度积分上下限由定义域切片决定：固定 $x$ 切竖线得 $y\\in(0,x)$；固定 $y$ 切横线得 $x\\in(y,1)$。画图定限是关键。"
    },
    {
      "title": "例2b 判断独立性",
      "level": "强化",
      "problem": "承接上例，判断 $X,Y$ 是否独立。",
      "solution": [
        "定义域 $0<y<x<1$ 不是矩形区域（$x$ 与 $y$ 相互约束），立即得**不独立**。",
        "代数验证：$f_X(x)f_Y(y)=3x^2\\cdot\\tfrac32(1-y^2)$。在 $(x,y)=(0.8,0.2)$ 处，该乘积为 $1.92\\cdot1.44=2.7648$，与联合密度 $3x=2.4$ 不同，因此不独立。"
      ],
      "tip": "独立性的\"秒判\"：定义域是矩形且密度可写成 $g(x)h(y)$ → 独立；定义域含耦合（三角、圆盘等）→ 必不独立。"
    },
    {
      "title": "例3 二维正态与线性组合",
      "level": "强化",
      "problem": "设 $(X,Y)\\sim N(1,2;4,9;0)$，即 $\\mu_1=1,\\mu_2=2,\\sigma_1^2=4,\\sigma_2^2=9,\\rho=0$。① $X,Y$ 是否独立？② 求 $P(X<1,Y<2)$；③ 求 $Z=2X+Y$ 的分布。",
      "solution": [
        "① $\\rho=0$ 且二维正态，故 $X,Y$ **独立**（二维正态中 $\\rho=0\\iff$ 独立）。$X\\sim N(1,4)$，$Y\\sim N(2,9)$。",
        "② 由独立性 $P(X<1,Y<2)=P(X<1)P(Y<2)=\\tfrac12\\times\\tfrac12=\\tfrac14$。",
        "③ 正态线性组合：$Z\\sim N(2\\mu_1+\\mu_2,\\ 4\\sigma_1^2+\\sigma_2^2)=N(4,25)$。"
      ],
      "tip": "$\\rho=0$ 在一般分布中推不出独立，但二维正态可以——这个\"例外\"是选择题常客。线性组合 $aX+bY\\sim N(a\\mu_1+b\\mu_2,a^2\\sigma_1^2+b^2\\sigma_2^2)$ 直接背。"
    },
    {
      "title": "例4 和的分布（卷积）",
      "level": "强化",
      "problem": "设 $X,Y$ 独立且都服从 $(0,1)$ 上的均匀分布，求 $Z=X+Y$ 的密度。",
      "solution": [
        "卷积：$f_Z(z)=\\int f_X(x)f_Y(z-x)dx$，被积函数非零要求 $0<x<1$ 且 $0<z-x<1$，即 $\\max(0,z-1)<x<\\min(1,z)$。",
        "$0<z\\le1$：积分限 $(0,z)$，$f_Z(z)=\\int_0^zdx=z$。",
        "$1<z<2$：积分限 $(z-1,1)$，$f_Z(z)=\\int_{z-1}^1dx=2-z$。",
        "$$f_Z(z)=\\begin{cases}z,&0<z\\le1\\\\2-z,&1<z<2\\\\0,&\\text{其他}\\end{cases}$$（三角形分布，验证积分 $\\tfrac12+\\tfrac12=1$ ✓）"
      ],
      "tip": "卷积的核心是\"被积函数非零区域\"的划分：用 $z$ 的范围切分积分限。两个均匀分布之和得三角分布，是标准结论。"
    },
    {
      "title": "例5 max/min 的应用",
      "level": "强化",
      "problem": "系统由两个独立元件构成，寿命 $X,Y$ 均服从 $E(0.1)$（单位：千小时）。① 并联系统（寿命 = max）的分布与平均寿命；② 串联系统（寿命 = min）呢？",
      "solution": [
        "共同分布函数 $F(x)=1-e^{-0.1x}\\ (x>0)$。",
        "① 并联 $Z=\\max(X,Y)$：$F_Z(z)=[F(z)]^2=(1-e^{-0.1z})^2$，密度 $f_Z=2(1-e^{-0.1z})\\cdot0.1e^{-0.1z}$。平均寿命 $E(Z)=\\dfrac{1}{0.1}\\left(1+\\dfrac12\\right)=15$ 千小时（公式 $E(\\max)=\\dfrac1\\lambda+\\dfrac{1}{2\\lambda}$）。",
        "② 串联 $W=\\min(X,Y)$：$F_W=1-[1-F]^2=1-e^{-0.2z}$，即 $W\\sim E(0.2)$，平均寿命 $5$ 千小时。"
      ],
      "tip": "指数分布的 min 仍是指数分布（参数相加），max 不是；独立同分布 $n$ 个 $E(\\lambda)$ 的 min $\\sim E(n\\lambda)$。系统可靠性问题先判串并联再套 max/min。"
    },
    {
      "title": "例6 离散型函数分布与条件分布综合",
      "level": "冲刺",
      "problem": "设 $X,Y$ 独立，分布律分别为 $P(X=0)=0.4,P(X=1)=0.6$ 与 $P(Y=-1)=0.5,P(Y=1)=0.5$，求 $Z=XY$ 的分布律与 $P(X=1|Z=1)$。",
      "solution": [
        "$Z=XY$ 的可能取值 $-1,0,1$。",
        "$P(Z=1)=P(X=1)P(Y=1)=0.6\\times0.5=0.3$；$P(Z=-1)=P(X=1)P(Y=-1)=0.3$；$P(Z=0)=P(X=0)=0.4$（$X=0$ 时 $XY=0$ 与 $Y$ 无关）。",
        "$P(X=1|Z=1)=\\dfrac{P(X=1,Z=1)}{P(Z=1)}=\\dfrac{0.3}{0.3}=1$（$Z=1$ 必然意味着 $X=1$）。"
      ],
      "tip": "离散函数分布逐值枚举 $(X,Y)$ 组合；条件概率的分子常是\"包含关系\"事件（$\\{Z=1\\}\\subset\\{X=1\\}$），此时条件概率为 1。"
    }
  ],
  "methods": [
    "联合 → 边缘：离散按行列求和，连续切片积分（画定义域图定限）。",
    "独立性秒判：矩形定义域 + 可分离密度；否则找反例格或代入验证。",
    "条件分布 = 联合除以边缘（归一化到一条线/列上）。",
    "正态问题：先认出二维正态，用 $\\rho=0\\iff$ 独立 + 线性组合公式。",
    "卷积：$f_Z(z)=\\int f_X(x)f_Y(z-x)dx$，按 $z$ 分段确定积分限。",
    "max/min：独立时用 $F$ 的乘积/补集公式；多个同分布直接 $n$ 次方。",
    "二维均匀分布：概率 = 面积比，充分利用几何直观。"
  ],
  "pitfalls": [
    "由边缘分布一般推不出联合分布；$f_X,f_Y$ 相同的两组 $(X,Y)$ 联合可以完全不同。",
    "连续型联合密度在\"单点/一条线\"上的取值不影响概率，分段定义域边界归哪边无所谓。",
    "\"不相关\"与\"独立\"不等价，除二维正态外都可能出现不相关却不独立。",
    "$\\rho=0\\Rightarrow$ 独立只对二维正态成立，其他分布不能套用。",
    "卷积公式要求**独立**；不独立时 $f_Z(z)=\\int f(x,z-x)dx$ 用的仍是联合密度。",
    "条件密度 $f_{X|Y}(x|y)$ 中 $y$ 是固定常数，定义域仍是 $x$ 的范围（受联合定义域约束）。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "设 $(X,Y)$ 的联合分布律为：$P(1,1)=\\tfrac14,\\ P(1,2)=\\tfrac14,\\ P(2,1)=\\tfrac18,\\ P(2,2)=\\tfrac{3}{8}$。求边缘分布律并判断独立性。",
      "answer": "$P(X=1)=\\tfrac12,\\ P(X=2)=\\tfrac12$；$P(Y=1)=\\tfrac38,\\ P(Y=2)=\\tfrac58$；不独立",
      "solution": "边缘按行列求和：$P(X=1)=\\tfrac14+\\tfrac14=\\tfrac12$，$P(X=2)=\\tfrac12$；$P(Y=1)=\\tfrac14+\\tfrac18=\\tfrac38$，$P(Y=2)=\\tfrac58$。独立要求每格 $p_{ij}=p_{i\\cdot}p_{\\cdot j}$，而 $P(1,1)=\\tfrac14\\ne P(X=1)P(Y=1)=\\tfrac12\\cdot\\tfrac38=\\tfrac{3}{16}$，故**不独立**。（联合律归一性 $\\tfrac14+\\tfrac14+\\tfrac18+\\tfrac38=1$ ✓，说明分布律本身合法。）"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "设 $f(x,y)=\\begin{cases}e^{-(x+y)},&x>0,y>0\\\\0,&\\text{其他}\\end{cases}$，求 $P(X+Y\\le1)$。",
      "answer": "$1-2e^{-1}$",
      "solution": "积分区域 $x>0,y>0,x+y\\le1$（直角三角形）：$\\displaystyle\\int_0^1\\int_0^{1-x}e^{-x}e^{-y}dydx=\\int_0^1e^{-x}(1-e^{-(1-x)})dx=\\int_0^1(e^{-x}-e^{-1})dx=1-e^{-1}-e^{-1}=1-2e^{-1}$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "设 $X,Y$ 独立同分布于 $U(0,1)$，求 $Z=X/Y$ 的密度。",
      "answer": "$f_Z(z)=\\begin{cases}\\tfrac12,&0<z<1\\\\\\tfrac{1}{2z^2},&z\\ge1\\\\0,&\\text{其他}\\end{cases}$",
      "solution": "用商公式或分布函数法：$F_Z(z)=P(X\\le zY)$。$0<z<1$：区域 $\\{x\\le zy\\}$ 在单位正方形内是下三角，面积 $z/2$；$z\\ge1$：$1-P(Y<X/z)=1-\\dfrac{1}{2z}$。求导得密度：$0<z<1$ 为 $\\tfrac12$；$z>1$ 为 $\\dfrac{1}{2z^2}$。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "设 $X,Y$ 独立，$X\\sim U(0,1)$，$Y\\sim E(1)$，求 $Z=X+Y$ 的密度。",
      "answer": "$f_Z(z)=\\begin{cases}1-e^{-z},&0<z<1\\\\(e-1)e^{-z},&z\\ge1\\\\0,&\\text{其他}\\end{cases}$",
      "solution": "$f_Z(z)=\\int_0^{\\min(1,z)}1\\cdot e^{-(z-x)}dx$。$0<z<1$：$\\int_0^ze^{-(z-x)}dx=1-e^{-z}$；$z\\ge1$：$\\int_0^1e^{-(z-x)}dx=e^{-z}(e-1)$。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "设 $(X,Y)\\sim N(0,0;1,1;\\rho)$，求 $P\\left(\\dfrac{X}{Y}>0\\right)$。",
      "answer": "$\\dfrac12+\\dfrac{\\arcsin\\rho}{\\pi}$",
      "solution": "$\\dfrac XY>0\\iff X,Y$ 同号。$P(X>0,Y>0)=\\dfrac14+\\dfrac{\\arcsin\\rho}{2\\pi}$（二维正态象限概率公式），对称地 $P(X<0,Y<0)$ 相同，相加得 $\\dfrac12+\\dfrac{\\arcsin\\rho}{\\pi}$。验证 $\\rho=0$（独立）：$\\dfrac12$ ✓；$\\rho=1$：$1$ ✓。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "设 $X,Y$ 独立且同分布，$P(X=i)=\\tfrac13\\ (i=1,2,3)$，求 $Z=\\max(X,Y)$ 的分布律与 $P(Z=2|X=2)$。",
      "answer": "$P(Z=1)=\\tfrac19,P(Z=2)=\\tfrac39,P(Z=3)=\\tfrac59$；$P(Z=2|X=2)=\\tfrac23$",
      "solution": "$P(Z\\le k)=P(X\\le k)P(Y\\le k)=\\left(\\tfrac{k}{3}\\right)^2$，故 $P(Z=k)=\\dfrac{k^2-(k-1)^2}{9}=\\dfrac{2k-1}{9}$：$k=1,2,3$ 得 $\\tfrac19,\\tfrac39,\\tfrac59$。$P(Z=2|X=2)=\\dfrac{P(X=2,Y\\le2)}{P(X=2)}=P(Y\\le2)=\\tfrac23$。"
    }
  ]
};
