export default {
  "id": "gl07",
  "subject": "gailv",
  "no": 7,
  "title": "参数估计",
  "subtitle": "第7章",
  "hours": 5,
  "syllabusRef": "pr7",
  "goal": [
    "理解点估计、估计量与估计值的概念",
    "熟练掌握矩估计法与最大似然估计法的完整流程",
    "理解估计量的评选标准（无偏性、有效性、一致性）并会验证无偏性",
    "掌握单个正态总体均值与方差的置信区间，了解两总体均值差与方差比的置信区间"
  ],
  "concepts": [
    {
      "name": "点估计的基本思想",
      "body": "设总体分布含未知参数 $\\theta$，用统计量 $\\hat\\theta=T(X_1,\\dots,X_n)$ 去估计它：$T$ 称为**估计量**（随机变量），代入样本观测值后得到**估计值**。\n两大构造方法：矩估计（用样本矩替总体矩）与最大似然估计（让样本出现概率最大的 $\\theta$）。"
    },
    {
      "name": "矩估计法",
      "body": "用样本矩替换总体矩解出参数：$E(X)=A_1=\\bar X$；两参数时联立 $E(X)=\\bar X$ 与 $E(X^2)=A_2=\\dfrac1n\\sum X_i^2$（或用方差 $D(X)=B_2$）。\n要点：有几个未知参数就用到几阶矩；一阶矩失灵（如期望与参数无关）时升级二阶矩。"
    },
    {
      "name": "最大似然估计法",
      "body": "似然函数 $L(\\theta)=\\prod_{i=1}^nf(x_i;\\theta)$（离散型用概率 $P(X=x_i;\\theta)$）。\n流程四步：写 $L$ → 取对数 $\\ln L$ → 令 $\\dfrac{d\\ln L}{d\\theta}=0$ 解出 $\\hat\\theta$ → 必要时验证最大（二阶导或边界讨论）。\n驻点不存在时（如均匀分布）改用**定义法**：直接看 $L(\\theta)$ 关于 $\\theta$ 的最大值位置。"
    },
    {
      "name": "无偏性",
      "body": "$E(\\hat\\theta)=\\theta$ 称 $\\hat\\theta$ 为 $\\theta$ 的**无偏估计**。\n常用事实：$\\bar X$ 是 $\\mu$ 的无偏估计；$S^2$（分母 $n-1$）是 $\\sigma^2$ 的无偏估计；$\\dfrac1n\\sum(X_i-\\bar X)^2$ **不是**（偏小 $\\dfrac{n-1}{n}$ 倍）；$E|X|$ 型估计常需分段计算验证。"
    },
    {
      "name": "有效性与一致性",
      "body": "**有效性**：两个无偏估计中方差小者更有效（$D(\\hat\\theta_1)<D(\\hat\\theta_2)$）。\n**一致性（相合性）**：$\\hat\\theta\\xrightarrow{P}\\theta\\ (n\\to\\infty)$。$\\bar X$ 对 $\\mu$、$S^2$（或 $B_2$）对 $\\sigma^2$ 都相合（大数定律/切比雪夫）。"
    },
    {
      "name": "区间估计",
      "body": "构造随机区间 $[\\hat\\theta_1,\\hat\\theta_2]$ 使 $P(\\hat\\theta_1\\le\\theta\\le\\hat\\theta_2)=1-\\alpha$（**置信水平**，常取 $0.95$）。\n正态总体 $\\mu$ 的置信区间：$\\sigma^2$ 已知用 $z$：$\\bar X\\pm\\dfrac{\\sigma}{\\sqrt n}z_{\\alpha/2}$；$\\sigma^2$ 未知用 $t$：$\\bar X\\pm\\dfrac{S}{\\sqrt n}t_{\\alpha/2}(n-1)$。$\\sigma^2$ 的置信区间基于 $\\chi^2$：$\\left[\\dfrac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)},\\ \\dfrac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)}\\right]$。"
    }
  ],
  "theorems": [
    {
      "name": "矩估计的一般流程",
      "statement": "一个参数：解 $\\hat\\mu=A_1=\\bar X$。两个参数：解 $\\begin{cases}\\hat\\mu=\\bar X\\\\ \\hat{\\mu_2}=A_2\\end{cases}$（$\\mu_2=E(X^2)$）。",
      "conditions": "总体矩存在",
      "remark": "常见结果：均匀分布 $U(a,b)$ 的矩估计 $\\hat a=\\bar X-\\sqrt3B_2^{1/2}$ 型（由 $\\bar X$ 与 $B_2$ 反解 $a,b$）；指数分布 $\\hat\\lambda=1/\\bar X$。"
    },
    {
      "name": "最大似然估计的不变性",
      "statement": "若 $\\hat\\theta$ 是 $\\theta$ 的 MLE，则 $g(\\hat\\theta)$ 是 $g(\\theta)$ 的 MLE（$g$ 为一一映射或单调）。",
      "conditions": "",
      "remark": "例：$\\lambda$ 的 MLE 为 $1/\\bar X$，则 $\\dfrac1\\lambda$ 的 MLE 为 $\\bar X$。避免重复计算。"
    },
    {
      "name": "正态参数 MLE 的标准结果",
      "statement": "$\\mu$ 的 MLE：$\\hat\\mu=\\bar X$；$\\sigma^2$ 的 MLE：$\\hat\\sigma^2=\\dfrac1n\\sum(X_i-\\bar X)^2=B_2$（分母 $n$，**有偏**）。",
      "conditions": "",
      "remark": "MLE 的 $\\hat\\sigma^2$ 是有偏的（$E=B_2=\\frac{n-1}{n}\\sigma^2\\ne\\sigma^2$），矩估计同理。对比记忆：无偏用 $S^2$，MLE 用 $B_2$。"
    },
    {
      "name": "单个正态总体均值的置信区间",
      "statement": "$$\\sigma^2\\text{ 已知：}\\left(\\bar X-\\frac{\\sigma}{\\sqrt n}z_{\\alpha/2},\\ \\bar X+\\frac{\\sigma}{\\sqrt n}z_{\\alpha/2}\\right)$$ $$\\sigma^2\\text{ 未知：}\\left(\\bar X-\\frac{S}{\\sqrt n}t_{\\alpha/2}(n-1),\\ \\bar X+\\frac{S}{\\sqrt n}t_{\\alpha/2}(n-1)\\right)$$",
      "conditions": "正态总体（或 $n$ 大时近似）",
      "remark": "推导骨架：枢轴量 $\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)$ 或 $\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$，解不等式分离 $\\mu$。"
    },
    {
      "name": "方差与方差比的置信区间",
      "statement": "$\\sigma^2$：$\\left(\\dfrac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)},\\dfrac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)}\\right)$；两总体方差比：$\\left(\\dfrac{S_1^2}{S_2^2}\\cdot\\dfrac{1}{F_{\\alpha/2}(m-1,n-1)},\\ \\dfrac{S_1^2}{S_2^2}\\cdot F_{\\alpha/2}(n-1,m-1)\\right)$。",
      "conditions": "",
      "remark": "枢轴量分别是 $\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$ 与 $\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\sim F$。注意 χ² 不对称、上下限分子分母颠倒。"
    },
    {
      "name": "无偏性的验证方法",
      "statement": "验证 $E(\\hat\\theta)=\\theta$：通常用期望线性性 + 数字特征基本结论；含 $S^2$ 的组合利用 $E(S^2)=\\sigma^2$、$E(\\bar X)=\\mu$。",
      "conditions": "",
      "remark": "对称组合题套路：$E(a\\bar X+bS^2+c)=a\\mu+b\\sigma^2+c$，令其等于目标参数解系数。"
    }
  ],
  "examples": [
    {
      "title": "例1 矩估计（一个参数）",
      "level": "基础",
      "problem": "总体 $X$ 的密度 $f(x;\\lambda)=\\lambda e^{-\\lambda x}\\ (x>0)$，$X_1,\\dots,X_n$ 为样本，求 $\\lambda$ 的矩估计。",
      "solution": [
        "$E(X)=\\dfrac1\\lambda$。令 $\\dfrac1{\\hat\\lambda}=\\bar X$，得 $\\hat\\lambda_{矩}=\\dfrac{1}{\\bar X}$。"
      ],
      "tip": "指数分布的矩估计与 MLE 结果相同，都是 $1/\\bar X$——\"均值倒数\"要形成直觉。"
    },
    {
      "title": "例2 最大似然估计（连续型）",
      "level": "基础",
      "problem": "同上题，求 $\\lambda$ 的最大似然估计。",
      "solution": [
        "$L(\\lambda)=\\prod\\lambda e^{-\\lambda x_i}=\\lambda^ne^{-\\lambda\\sum x_i}$。",
        "$\\ln L=n\\ln\\lambda-\\lambda\\sum x_i$，令 $\\dfrac{d\\ln L}{d\\lambda}=\\dfrac n\\lambda-\\sum x_i=0$，得 $\\hat\\lambda=\\dfrac{n}{\\sum x_i}=\\dfrac1{\\bar x}$。",
        "验证 $\\dfrac{d^2\\ln L}{d\\lambda^2}=-\\dfrac{n}{\\lambda^2}<0$，确为最大值。"
      ],
      "tip": "连续型 MLE 四步标准化书写是解答题的采分点：$L$ → $\\ln L$ → 一阶条件 → 解出并（最好）验证最大。"
    },
    {
      "title": "例3 MLE 的定义法（均匀分布）",
      "level": "强化",
      "problem": "总体 $X\\sim U(0,\\theta)$，$x_1,\\dots,x_n$ 为观测值，求 $\\theta$ 的 MLE。",
      "solution": [
        "$L(\\theta)=\\prod\\dfrac1\\theta\\cdot\\mathbf{1}(0\\le x_i\\le\\theta)=\\dfrac{1}{\\theta^n}\\ (\\theta\\ge\\max x_i)$。",
        "$L$ 关于 $\\theta$ 单调递减，故 $\\theta$ 取最小允许值时 $L$ 最大：$\\hat\\theta=\\max(x_1,\\dots,x_n)=x_{(n)}$。",
        "注意 $E(\\hat\\theta)=\\dfrac{n}{n+1}\\theta\\ne\\theta$，MLE 有偏（矩估计 $\\hat\\theta=2\\bar X$ 无偏但方差更大）。"
      ],
      "tip": "驻点方程无解时（似然函数单调/有边界），MLE 由\"边界\"取得——均匀分布是标准考题，注意 $\\theta\\ge\\max x_i$ 的约束与\"减函数取最小\"的逻辑。"
    },
    {
      "title": "例4 两参数的矩估计",
      "level": "强化",
      "problem": "总体 $X\\sim U(a,b)$，用矩法估计 $a,b$。",
      "solution": [
        "$E(X)=\\dfrac{a+b}{2}$，$D(X)=\\dfrac{(b-a)^2}{12}$。令 $\\dfrac{\\hat a+\\hat b}{2}=\\bar X$，$\\dfrac{(\\hat b-\\hat a)^2}{12}=B_2$（$B_2=\\dfrac1n\\sum(X_i-\\bar X)^2$）。",
        "解得 $\\hat a=\\bar X-\\sqrt{3B_2}$，$\\hat b=\\bar X+\\sqrt{3B_2}$。"
      ],
      "tip": "两参数矩估计联立\"均值 + 二阶矩（或方差）\"；解出后根号前正负号按 $a<b$ 确定。"
    },
    {
      "title": "例5 无偏性的验证与组合",
      "level": "强化",
      "problem": "设 $X_1,\\dots,X_n$ 来自 $N(\\mu,\\sigma^2)$。问 $a,b$ 取何值时 $T=a\\bar X+bS^2$ 是 $\\mu+\\sigma^2$ 的无偏估计？并求 $E(T)$ 一般式。",
      "solution": [
        "$E(T)=aE(\\bar X)+bE(S^2)=a\\mu+b\\sigma^2$。",
        "要求 $E(T)=\\mu+\\sigma^2$ 对一切 $\\mu,\\sigma^2$ 成立：$a=1,\\ b=1$。即 $T=\\bar X+S^2$ 是 $\\mu+\\sigma^2$ 的无偏估计。"
      ],
      "tip": "无偏性组合题：把 $E(T)$ 表达成 $\\mu,\\sigma^2$ 的线性式，对比目标系数。核心储备：$E(\\bar X)=\\mu,\\ E(S^2)=\\sigma^2$。"
    },
    {
      "title": "例6 正态均值置信区间",
      "level": "冲刺",
      "problem": "某零件长度 $X\\sim N(\\mu,\\sigma^2)$，抽 16 件测得 $\\bar x=12.1$，$s=0.2$。求 $\\mu$ 的置信水平 0.95 的置信区间（$t_{0.025}(15)=2.132$）。",
      "solution": [
        "$\\sigma^2$ 未知，用 $t$ 分布：区间为 $\\bar x\\pm\\dfrac{s}{\\sqrt n}t_{0.025}(15)=12.1\\pm\\dfrac{0.2}{4}\\times2.132=12.1\\pm0.1066$。",
        "故置信区间为 $(11.99,\\ 12.21)$。含义：反复抽样构造的区间中约 95% 覆盖真值。"
      ],
      "tip": "$\\sigma$ 未知 → $t$；$\\sigma$ 已知 → $z$。查表用 $\\alpha/2$（双侧）。解读置信区间时说\"区间覆盖 $\\mu$ 的概率为 0.95\"而不是\"$\\mu$ 落入区间的概率\"（$\\mu$ 是常数）。"
    }
  ],
  "methods": [
    "矩估计：矩对矩（一阶对均值、二阶对方差），参数个数决定用几阶。",
    "MLE 连续型四步：$L\\to\\ln L\\to$ 求导置零 → 解出；离散型 $L=\\prod P(x_i;\\theta)$ 同流程。",
    "MLE 驻点不存在 → 定义法：找 $L$ 的单调性与边界约束（均匀分布 $\\max x_i$）。",
    "验证无偏：$E(\\hat\\theta)$ 与目标对照；组合估计令系数匹配。",
    "置信区间：认枢轴量（$z$/$t$/$\\chi^2$/$F$）→ 解不等式；$\\sigma$ 未知一律 $t$。",
    "区间宽度与 $n$、置信水平的关系：$n$ 越大越窄；置信水平越高越宽。"
  ],
  "pitfalls": [
    "MLE 的 $\\hat\\sigma^2$ 用分母 $n$（有偏），无偏估计 $S^2$ 用 $n-1$——两者勿混。",
    "似然函数是联合概率（密度），不是概率之和；取对数后求导才方便。",
    "均匀分布 $U(0,\\theta)$ 的 MLE 是 $\\max x_i$ 而不是 $2\\bar X$（后者是矩估计）。",
    "无偏性是估计量的性质（对一切 $\\theta$），不是对特定样本的陈述。",
    "置信区间解读：置信水平描述\"构造方法\"的长期覆盖率，不能说 $\\theta$ 落入该具体区间的概率。",
    "χ² 置信区间上下限的自由度与系数 $(n-1)$ 容易漏；$F$ 区间的自由度上下要交换。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "总体 $X\\sim B(1,p)$（0-1 分布），$x_1,\\dots,x_n$ 为观测值，求 $p$ 的矩估计与 MLE。",
      "answer": "两者都是 $\\bar X$",
      "solution": "矩估计：$E(X)=p$，故估计为 $\\bar x$。似然函数为 $L(p)=p^{\\sum x_i}(1-p)^{n-\\sum x_i}$；当 $0<\\sum x_i<n$ 时，求对数似然的驻点得到 $\\hat p=\\bar x$。若所有观测值全为 $0$ 或全为 $1$，且参数空间是 $[0,1]$，最大值分别在端点 $0$ 或 $1$ 取得，仍为 $\\bar x$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "总体 $X\\sim P(\\lambda)$，样本观测均值为 $\\bar x=2.5$，求 $\\lambda$ 的 MLE，并求 $P(X=0)$ 的 MLE。",
      "answer": "$\\hat\\lambda=2.5$；$\\widehat{P(X=0)}=e^{-2.5}\\approx0.082$",
      "solution": "$L=\\prod\\dfrac{\\lambda^{x_i}e^{-\\lambda}}{x_i!}=e^{-n\\lambda}\\dfrac{\\lambda^{\\sum x_i}}{\\prod x_i!}$，$\\dfrac{d\\ln L}{d\\lambda}=-n+\\dfrac{\\sum x_i}{\\lambda}=0\\Rightarrow\\hat\\lambda=\\bar x=2.5$。由不变性，$P(X=0)=e^{-\\lambda}$ 的 MLE 为 $e^{-2.5}$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "设总体 $X$ 的密度 $f(x;\\theta)=\\begin{cases}\\theta x^{\\theta-1},&0<x<1\\\\0,&\\text{其他}\\end{cases}$（$\\theta>0$），求 $\\theta$ 的 MLE。",
      "answer": "$\\hat\\theta=-\\dfrac{n}{\\sum\\ln x_i}$",
      "solution": "$L=\\theta^n\\left(\\prod x_i\\right)^{\\theta-1}$，$\\ln L=n\\ln\\theta+(\\theta-1)\\sum\\ln x_i$。一阶条件 $\\dfrac n\\theta+\\sum\\ln x_i=0\\Rightarrow\\hat\\theta=\\dfrac{-n}{\\sum\\ln x_i}$（分母为负故估计为正）。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "设 $X_1,\\dots,X_n$ 来自 $N(\\mu,\\sigma^2)$，$\\mu$ 已知。证明 $\\hat\\sigma^2=\\dfrac1n\\sum(X_i-\\mu)^2$ 是 $\\sigma^2$ 的无偏估计。",
      "answer": "见解析",
      "solution": "$\\sum(X_i-\\mu)^2=\\sigma^2\\sum\\left(\\dfrac{X_i-\\mu}{\\sigma}\\right)^2\\sim\\sigma^2\\chi^2(n)$（$\\mu$ 已知无自由度损失），期望 $=n\\sigma^2$，故 $E(\\hat\\sigma^2)=\\sigma^2$。对比 $\\mu$ 未知时的 $S^2\\sim\\dfrac{\\sigma^2}{n-1}\\chi^2(n-1)$：自由度从 $n$ 降为 $n-1$。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "设 $\\bar X$ 与 $\\bar Y$ 分别是来自 $N(\\mu,\\sigma^2)$ 的容量 $n_1,n_2$ 的两个独立样本均值。证明 $T=a\\bar X+b\\bar Y$（$a,b\\ge0,\\ a+b=1$）都是 $\\mu$ 的无偏估计，并求 $D(T)$ 最小的 $a,b$。",
      "answer": "$a=\\dfrac{n_1}{n_1+n_2},\\ b=\\dfrac{n_2}{n_1+n_2}$",
      "solution": "$E(T)=a\\mu+b\\mu=\\mu$ ✓。$D(T)=a^2\\dfrac{\\sigma^2}{n_1}+b^2\\dfrac{\\sigma^2}{n_2}$（独立）。令 $b=1-a$，对 $a$ 求导置零：$\\dfrac{2a}{n_1}=\\dfrac{2(1-a)}{n_2}\\Rightarrow a=\\dfrac{n_1}{n_1+n_2}$，即按样本量加权合并。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "设 $X\\sim N(\\mu,4)$，$n=25$，$\\bar x=10.2$。求 $\\mu$ 的置信水平 0.95 的置信区间（$z_{0.025}=1.96$）。",
      "answer": "$(9.42,\\ 10.98)$",
      "solution": "$\\sigma=2$ 已知，区间 $10.2\\pm\\dfrac{2}{5}\\times1.96=10.2\\pm0.784$，即 $(9.416,\\ 10.984)$。"
    }
  ]
};
