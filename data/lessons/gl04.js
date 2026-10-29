export default {
  "id": "gl04",
  "subject": "gailv",
  "no": 4,
  "title": "随机变量的数字特征",
  "subtitle": "第4章",
  "hours": 6,
  "syllabusRef": "pr4",
  "goal": [
    "理解期望、方差、标准差的概念与性质，掌握常用分布的全部数字特征",
    "会求随机变量函数的期望（含二维）",
    "掌握协方差与相关系数的计算与性质，理解\"独立与不相关\"的关系",
    "会利用期望方差性质做抽象证明与快速计算"
  ],
  "concepts": [
    {
      "name": "数学期望",
      "body": "离散型 $E(X)=\\sum x_ip_i$；连续型 $E(X)=\\int xf(x)dx$（要求级数/积分绝对收敛）。期望是\"加权平均\"，刻画分布的中心位置。\n函数的期望（**不必求 $g(X)$ 的分布**）：$$E[g(X)]=\\sum g(x_i)p_i,\\qquad E[g(X)]=\\int g(x)f(x)dx$$ 二维：$E[g(X,Y)]=\\int\\!\\!\\int g(x,y)f(x,y)dxdy$。"
    },
    {
      "name": "方差与标准差",
      "body": "$$D(X)=E[X-E(X)]^2=E(X^2)-[E(X)]^2$$ 标准差 $\\sigma(X)=\\sqrt{D(X)}$，与 $X$ 同量纲。\n$D(X)$ 刻画取值的分散程度；$D=0\\iff X$ 以概率 1 为常数。\n计算套路：先求 $E(X)$，再求 $E(X^2)$（用函数期望公式），两者相减。"
    },
    {
      "name": "协方差",
      "body": "$$\\operatorname{Cov}(X,Y)=E[(X-EX)(Y-EY)]=E(XY)-E(X)E(Y)$$\n性质：$\\operatorname{Cov}(X,X)=D(X)$；$\\operatorname{Cov}(aX,bY)=ab\\operatorname{Cov}(X,Y)$；$\\operatorname{Cov}(X,Y)=\\operatorname{Cov}(Y,X)$；可加性 $\\operatorname{Cov}(X_1+X_2,Y)=\\operatorname{Cov}(X_1,Y)+\\operatorname{Cov}(X_2,Y)$。\n双线性是化简复杂协方差表达式的利器。"
    },
    {
      "name": "相关系数",
      "body": "$$\\rho_{XY}=\\frac{\\operatorname{Cov}(X,Y)}{\\sqrt{D(X)}\\sqrt{D(Y)}}\\quad(|\\rho|\\le1)$$\n$\\rho$ 是去掉量纲的\"线性相关程度\"：$|\\rho|=1\\iff$ 存在常数 $a\\ne0,b$ 使 $P(Y=aX+b)=1$（概率 1 线性关系）；$\\rho=0$ 称不相关。"
    },
    {
      "name": "常用分布的期望方差速查",
      "body": "以下六行必须背到条件反射（选择题与综合题的基石）：\n- 二项 $B(n,p)$：$E=np$，$D=np(1-p)$\n- 泊松 $P(\\lambda)$：$E=\\lambda$，$D=\\lambda$\n- 几何 $G(p)$：$E=\\dfrac1p$，$D=\\dfrac{1-p}{p^2}$\n- 均匀 $U(a,b)$：$E=\\dfrac{a+b}{2}$，$D=\\dfrac{(b-a)^2}{12}$\n- 指数 $E(\\lambda)$：$E=\\dfrac1\\lambda$，$D=\\dfrac{1}{\\lambda^2}$\n- 正态 $N(\\mu,\\sigma^2)$：$E=\\mu$，$D=\\sigma^2$"
    },
    {
      "name": "矩",
      "body": "**原点矩** $\\nu_k=E(X^k)$，**中心矩** $\\mu_k=E[X-E(X)]^k$。一阶原点矩即期望，二阶中心矩即方差。协方差是 $(X,Y)$ 的二阶混合中心矩。"
    }
  ],
  "theorems": [
    {
      "name": "期望的性质",
      "statement": "① $E(C)=C$；② $E(aX+bY)=aE(X)+bE(Y)$（**线性性，无条件成立**）；③ $X,Y$ 独立 $\\Rightarrow E(XY)=E(X)E(Y)$；④ 柯西不等式 $[E(XY)]^2\\le E(X^2)E(Y^2)$。",
      "conditions": "",
      "remark": "线性性不需要独立！这是与\"积的期望\"最大的区别。求复杂期望第一步永远是拆线性。"
    },
    {
      "name": "方差的性质",
      "statement": "① $D(C)=0$；② $D(aX+b)=a^2D(X)$；③ $D(X\\pm Y)=D(X)+D(Y)\\pm2\\operatorname{Cov}(X,Y)$；④ 独立时 $D(X\\pm Y)=D(X)+D(Y)$；⑤ $D(X)\\ge E[X-C]^2$ 取 $C=E(X)$ 时最小。",
      "conditions": "",
      "remark": "④ 中\"独立时和差方差都是相加\"——减法也加！这是选择题陷阱。⑤ 说明期望是均方误差最优常数。"
    },
    {
      "name": "独立 ⇒ 不相关",
      "statement": "$X,Y$ 独立 $\\Rightarrow\\operatorname{Cov}(X,Y)=0\\Rightarrow\\rho=0$；反之不成立（反例：$X\\sim U(-1,1)$，$Y=X^2$，$E(XY)=E(X^3)=0=E(X)E(Y)$ 不相关，但有精确二次关系）。",
      "conditions": "",
      "remark": "反例模板 \"$Y=X^2+X$ 的对称分布\"要记住，证明题与选择题反复出现。"
    },
    {
      "name": "切比雪夫不等式（预备）",
      "statement": "$$P(|X-E(X)|\\ge\\varepsilon)\\le\\frac{D(X)}{\\varepsilon^2}$$",
      "conditions": "",
      "remark": "用方差控制偏离概率，是第 5 章大数定律的工具，此处先记形式。"
    },
    {
      "name": "二维正态的数字特征",
      "statement": "$(X,Y)\\sim N$ 时 $\\operatorname{Cov}(X,Y)=\\rho\\sigma_1\\sigma_2$；独立 $\\iff\\rho=0\\iff$ 不相关（二维正态特有）。",
      "conditions": "",
      "remark": "$\\rho$ 就是相关系数本身，参数表直接给出协方差结构。"
    },
    {
      "name": "常见函数的期望技巧",
      "statement": "$E(X^2)=D(X)+[E(X)]^2$；$X\\sim N(0,1)$ 时 $E(X^2)=1,\\ E(X^4)=3$；对称分布 $E(X^{2k+1})=0$（若存在）。",
      "conditions": "",
      "remark": "正态各阶矩：$E(Z^{2k})=(2k-1)!!$。对称分布奇数次矩为零可大幅简化计算。"
    }
  ],
  "examples": [
    {
      "title": "例1 由分布求期望方差",
      "level": "基础",
      "problem": "设 $X$ 的分布律为 $P(X=1)=0.2,\\ P(X=2)=0.3,\\ P(X=3)=0.5$，求 $E(X),\\ D(X)$。",
      "solution": [
        "$E(X)=1\\times0.2+2\\times0.3+3\\times0.5=0.2+0.6+1.5=2.3$。",
        "$E(X^2)=1\\times0.2+4\\times0.3+9\\times0.5=5.9$。",
        "$D(X)=5.9-2.3^2=5.9-5.29=0.61$。"
      ],
      "tip": "三步曲：$E\\to E^2\\to D$。表格题把 $x_i^2p_i$ 一列算完再求和，避免中间舍入。"
    },
    {
      "title": "例2 连续型（均匀+函数期望）",
      "level": "基础",
      "problem": "设 $X\\sim U(0,1)$，求 $E(e^X)$ 与 $D(e^X)$。",
      "solution": [
        "$E(e^X)=\\int_0^1e^xdx=e-1$。",
        "$E(e^{2X})=\\int_0^1e^{2x}dx=\\dfrac{e^2-1}{2}$。",
        "$D(e^X)=E(e^{2X})-[E(e^X)]^2=\\dfrac{e^2-1}{2}-(e-1)^2=\\dfrac{e^2-1-2e^2+4e-2}{2}=\\dfrac{-(e^2-4e+3)}{2}=\\dfrac{4e-e^2-3}{2}$。"
      ],
      "tip": "函数期望公式直接积分，**不要**先求 $Y=e^X$ 的分布再求期望（绕远路）。$D$ 用 $E(Y^2)-E^2(Y)$。"
    },
    {
      "title": "例3 常见分布数字特征的综合",
      "level": "基础",
      "problem": "设 $X\\sim B(3,0.5)$，$Y\\sim P(2)$，$X$ 与 $Y$ 独立。求 $E(2X-Y)$ 与 $D(2X-Y)$。",
      "solution": [
        "$E(X)=3\\times0.5=1.5$，$D(X)=3\\times0.5\\times0.5=0.75$；$E(Y)=D(Y)=2$。",
        "$E(2X-Y)=2E(X)-E(Y)=3-2=1$。",
        "独立时协方差为零：$D(2X-Y)=4D(X)+D(Y)=3+2=5$。"
      ],
      "tip": "常见分布 $E,D$ 背表直接写；独立时 $D(aX\\pm bY)=a^2D(X)+b^2D(Y)$（$Y$ 的系数平方后仍为正）。"
    },
    {
      "title": "例4 协方差与相关系数",
      "level": "强化",
      "problem": "设 $(X,Y)$ 的联合密度 $f(x,y)=\\begin{cases}2-x-y,&0<x<1,\\ 0<y<1\\\\0,&\\text{其他}\\end{cases}$，求 $\\operatorname{Cov}(X,Y)$ 与 $\\rho_{XY}$。",
      "solution": [
        "$E(X)=\\int_0^1\\int_0^1x(2-x-y)dydx=\\int_0^1\\left[x(2-x)-\\frac{x}{2}\\right]dx=\\int_0^1\\left(\\frac{3x}{2}-x^2\\right)dx=\\frac34-\\frac13=\\frac{5}{12}$。由对称性 $E(Y)=\\dfrac{5}{12}$。",
        "$E(XY)=\\int_0^1\\!\\!\\int_0^1xy(2-x-y)\\,dy\\,dx$。先对 $y$ 积分：$\\int_0^1xy(2-x-y)dy=x(2-x)\\cdot\\tfrac12-x\\cdot\\tfrac13$；再对 $x$：$\\int_0^1\\left[\\tfrac{x(2-x)}{2}-\\tfrac{x}{3}\\right]dx=\\tfrac12\\left(1-\\tfrac13\\right)-\\tfrac16=\\tfrac13-\\tfrac16=\\tfrac16$。故 $E(XY)=\\dfrac16$。",
        "$\\operatorname{Cov}=E(XY)-EX\\cdot EY=\\dfrac16-\\dfrac{25}{144}=\\dfrac{24-25}{144}=-\\dfrac{1}{144}$。",
        "$D(X)=E(X^2)-E^2(X)$：$E(X^2)=\\int_0^1x^2\\left(\\frac{3}{2}-x\\right)dx=\\frac12-\\frac14=\\frac14$，$D(X)=\\dfrac14-\\dfrac{25}{144}=\\dfrac{11}{144}$（对称 $D(Y)$ 同）。$\\rho=\\dfrac{-1/144}{11/144}=-\\dfrac{1}{11}$。"
      ],
      "tip": "连续型协方差计算量大，技巧：利用密度关于 $x,y$ 对称性减少一半积分；最后 $\\rho$ 的分子分母常同时含因子可约简。"
    },
    {
      "title": "例5 不相关但不独立的反例",
      "level": "强化",
      "problem": "设 $X\\sim U(-1,1)$，$Y=X^2$。证明 $X,Y$ 不相关但不独立。",
      "solution": [
        "不相关：$E(X)=0$（对称），$E(XY)=E(X^3)=0$（奇函数在对称区间积分为零），故 $\\operatorname{Cov}=E(XY)-E(X)E(Y)=0$。",
        "不独立：令 $A=\\{|X|<1/2\\}$，$B=\\{Y<1/2\\}$。因为 $A\\subset B$，所以 $P(A\\cap B)=1/2$；而 $P(A)P(B)=(1/2)(1/\\sqrt2)=1/(2\\sqrt2)\\ne1/2$。故 $X,Y$ 不独立。"
      ],
      "tip": "标准反例结构：\"对称分布 + $Y=X^2$\"。证明不相关用奇偶性，证明不独立可用事件法或 $E(Y|X)$ 依赖 $X$。"
    },
    {
      "title": "例6 抽象题：用期望性质定参数",
      "level": "冲刺",
      "problem": "设随机变量 $X$ 的密度 $f(x)=\\dfrac{1}{2}e^{-|x-\\mu|}$（拉普拉斯分布），求 $E(X)$ 与 $D(X)$。",
      "solution": [
        "密度关于 $x=\\mu$ 对称（$f(\\mu+t)=f(\\mu-t)$），对称中心即期望：$E(X)=\\mu$。",
        "$D(X)=E(X-\\mu)^2=\\int_{-\\infty}^{+\\infty}t^2\\cdot\\dfrac12e^{-|t|}dt=\\int_0^{+\\infty}t^2e^{-t}dt=2!=2$（伽马积分 $\\int_0^\\infty t^2e^{-t}dt=2$）。",
        "故 $E(X)=\\mu,\\ D(X)=2$，与 $\\mu$ 无关。"
      ],
      "tip": "含绝对值/分段对称密度：先用对称性定期望，方差换元 $t=x-\\mu$ 后变成标准积分。$\\int_0^\\infty t^ne^{-t}dt=n!$ 是常用结论。"
    }
  ],
  "methods": [
    "$D(X)$ 计算永远走 $E(X^2)-E^2(X)$；直接按定义展开 $E[X-E(X)]^2$ 反而易错。",
    "函数期望不需求新分布：$E[g(X)]=\\sum g(x_i)p_i$ 或 $\\int g f$。",
    "期望线性性无条件使用；积的期望、和的方差需要独立性（或协方差修正项）。",
    "协方差化简用双线性展开；含 $X,Y$ 的一次式先整体展开再代数值。",
    "对称分布：期望 = 对称中心；奇次原点矩为零。",
    "常用分布 $E,D$ 表烂熟于心，见分布直接写结果。",
    "独立性缺失时用 $D(X\\pm Y)=D(X)+D(Y)\\pm2\\operatorname{Cov}(X,Y)$ 修正。"
  ],
  "pitfalls": [
    "$D(X)=0$ 只能推出 $X$ 以概率 1 为常数，不是处处为常数。",
    "$E(XY)=E(X)E(Y)$ 与 $D(X+Y)=D(X)+D(Y)$ 都需要独立性（或协方差为零），缺一不可乱用。",
    "方差没有线性性：$D(aX+b)=a^2D(X)$，$b$ 消失、$a$ 平方。",
    "\"不相关\"不排除非线性关系；\"$\\rho=0$\" 写成 \"$X,Y$ 独立\" 是常见错误。",
    "$\\operatorname{Cov}(X,Y)$ 可正可负可为零，且量纲是 $X,Y$ 量纲之积；$\\rho$ 才是无量纲的。",
    "连续型期望要求绝对收敛，个别病态分布（如柯西）期望不存在，考研正题中一般回避。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "设 $X\\sim P(\\lambda)$，求 $E[X(X-1)]$。",
      "answer": "$\\lambda^2$",
      "solution": "$E[X(X-1)]=E(X^2)-E(X)=\\lambda+\\lambda^2-\\lambda=\\lambda^2$（利用 $P(\\lambda)$ 的 $E=D=\\lambda$）。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "设 $X\\sim U(-1,2)$，求 $E(X),\\ D(X),\\ E(|X|)$。",
      "answer": "$0.5；0.75；\\tfrac56$",
      "solution": "$E(X)=\\tfrac{-1+2}{2}=\\tfrac12$；$D(X)=\\dfrac{(2+1)^2}{12}=\\dfrac34$；$E(|X|)=\\displaystyle\\frac13\\left[\\int_{-1}^0(-x)dx+\\int_0^2xdx\\right]=\\frac13\\left(\\frac12+2\\right)=\\frac56$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "设 $X$ 与 $Y$ 独立，$X\\sim N(1,2)$，$Y\\sim P(3)$，求 $E(2X+Y^2)$ 与 $D(X-2Y)$。",
      "answer": "$14；14$",
      "solution": "$E(Y^2)=D(Y)+E^2(Y)=3+9=12$，故 $E(2X+Y^2)=2\\cdot1+12=14$。$D(X-2Y)=D(X)+4D(Y)=2+12=14$（独立）。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "设 $X\\sim B(1,p)$（0-1 分布），求 $E(X^k)$ 与 $\\operatorname{Cov}(X,1-X)$。",
      "answer": "$E(X^k)=p$；$\\operatorname{Cov}=-p(1-p)$",
      "solution": "$X^k$ 与 $X$ 同分布（$X$ 只取 0/1），故 $E(X^k)=p$。$\\operatorname{Cov}(X,1-X)=E[X(1-X)]-E(X)E(1-X)$：由 $X^2=X$ 得 $E[X(1-X)]=0$，而 $E(X)E(1-X)=p(1-p)$，故 $\\operatorname{Cov}=-p(1-p)=-D(X)$（互补事件天然负相关）。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "设 $(X,Y)$ 在圆域 $x^2+y^2\\le1$ 上均匀分布，判断 $X,Y$ 是否相关、是否独立。",
      "answer": "不相关且不独立",
      "solution": "圆域对称，$E(X)=E(Y)=0$；$E(XY)=\\displaystyle\\frac{1}{\\pi}\\int\\!\\!\\int_{x^2+y^2\\le1}xy\\,dxdy=0$（被积函数关于 $x$ 或 $y$ 均为奇函数，圆域对称），故不相关。独立性：边缘 $f_X(x)=\\dfrac{2}{\\pi}\\sqrt{1-x^2}\\ (|x|<1)$，联合 $f=\\dfrac1\\pi\\ne f_Xf_Y$，且定义域为圆盘（非矩形），不独立。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "设 $X_1,\\dots,X_n$ 独立同分布，$E(X_i)=\\mu,\\ D(X_i)=\\sigma^2$，记 $\\bar X=\\dfrac1n\\sum X_i$。求 $E(\\bar X)$ 与 $D(\\bar X)$，并求 $\\operatorname{Cov}(X_1,\\bar X)$。",
      "answer": "$E(\\bar X)=\\mu,\\ D(\\bar X)=\\dfrac{\\sigma^2}{n}$；$\\operatorname{Cov}(X_1,\\bar X)=\\dfrac{\\sigma^2}{n}$",
      "solution": "线性性 $E(\\bar X)=\\mu$；独立时方差相加 $D(\\bar X)=\\dfrac{1}{n^2}\\cdot n\\sigma^2=\\dfrac{\\sigma^2}{n}$（样本均值的两大性质）。$\\operatorname{Cov}(X_1,\\bar X)=\\dfrac1n\\sum_i\\operatorname{Cov}(X_1,X_i)=\\dfrac1n\\operatorname{Cov}(X_1,X_1)=\\dfrac{\\sigma^2}{n}$（$i\\ne1$ 项独立协方差为零）。"
    }
  ]
};
