export default {
  "id": "xd02",
  "subject": "xiandai",
  "no": 2,
  "title": "矩阵",
  "subtitle": "第2章",
  "hours": 6,
  "syllabusRef": "la2",
  "goal": [
    "掌握矩阵的线性运算、乘法、转置及其运算规律，明确矩阵乘法不满足交换律与消去律",
    "理解逆矩阵的概念与可逆的充要条件，熟练用伴随矩阵法和初等变换法求逆",
    "掌握伴随矩阵的全部重要公式，会处理含 $A^*$ 的综合题",
    "理解初等矩阵与初等变换的对应关系，会用初等变换求秩和逆",
    "掌握矩阵秩的性质与不等式，理解分块矩阵的运算法则"
  ],
  "concepts": [
    {
      "name": "矩阵与矩阵运算",
      "body": "$m\\times n$ 个数排成的矩形表称为 $m\\times n$ 矩阵。**同型矩阵**才能相加。数乘 $kA$ 是每个元素都乘 $k$。\n矩阵乘法 $AB$：$A$ 的列数必须等于 $B$ 的行数，$(AB)_{ij}=\\sum_k a_{ik}b_{kj}$。\n**三条铁律**：① $AB\\neq BA$（一般不交换）；② $AB=O\\not\\Rightarrow A=O$ 或 $B=O$；③ $AB=AC$ 且 $A$ 不可逆时不能推出 $B=C$（无消去律）。这三条是抽象题的常见陷阱。"
    },
    {
      "name": "方阵的幂与多项式",
      "body": "$A^n=A\\cdot A\\cdots A$（$n$ 个）。若 $AB=BA$，则 $(A+B)^2=A^2+2AB+B^2$、$(AB)^n=A^nB^n$ 等公式才成立——没有交换性时二项式定理**不成立**，展开只能用逐项乘。\n矩阵多项式 $f(A)=a_mA^m+\\cdots+a_1A+a_0E$ 仍可交换（$A$ 与 $f(A)$ 交换），常用于特征值问题。"
    },
    {
      "name": "逆矩阵",
      "body": "对 $n$ 阶方阵 $A$，若存在 $B$ 使 $AB=BA=E$，则称 $A$ **可逆**，$B$ 为 $A$ 的逆矩阵 $A^{-1}$，且逆矩阵唯一。\n$A$ 可逆 $\\iff |A|\\neq0\\iff r(A)=n\\iff$ 行（列）向量组线性无关 $\\iff Ax=0$ 只有零解 $\\iff A$ 的特征值全不为 $0$。\n逆矩阵运算：$(A^{-1})^{-1}=A$；$(AB)^{-1}=B^{-1}A^{-1}$（**顺序颠倒**）；$(A^T)^{-1}=(A^{-1})^T$；$(kA)^{-1}=\\frac{1}{k}A^{-1}$。"
    },
    {
      "name": "伴随矩阵 A*",
      "body": "$A^*$ 由代数余子式构成：$A^*=(A_{ji})$，即**第 $(i,j)$ 元是 $A_{ji}$**（转置放置）。核心恒等式：\n$$AA^*=A^*A=|A|E$$\n由它推出整套公式（见定理部分）。$A^*$ 与 $A$ 的秩关系、行列式关系是考研高频考点。"
    },
    {
      "name": "初等变换与初等矩阵",
      "body": "三种初等行（列）变换：① 对换两行；② 某行乘非零常数 $k$；③ 某行的 $k$ 倍加到另一行。\n**初等矩阵**是单位矩阵经过一次初等变换得到的矩阵。核心对应：对 $A$ 作一次初等**行**变换 = 在 $A$ **左乘**相应的初等矩阵；作列变换 = **右乘**初等矩阵。\n初等矩阵都可逆，且其逆仍是同类型的初等矩阵。"
    },
    {
      "name": "矩阵的秩",
      "body": "矩阵中非零子式的最高阶数称为**秩** $r(A)$。$r(A)=n\\iff A$ 可逆（满秩）。\n初等变换不改变秩，故求秩用行变换化阶梯形数非零行个数。\n重要事实：$r(A)=r(A^T)=r(A^TA)$；$r(kA)=r(A)\\ (k\\neq0)$；$r(A+B)\\le r(A)+r(B)$；$r(AB)\\le\\min\\{r(A),r(B)\\}$；$A$ 可逆时 $r(AB)=r(B)$（左乘可逆阵不改变秩）。"
    },
    {
      "name": "分块矩阵",
      "body": "用横竖线把矩阵分成若干小块，每一小块当作一个\"元素\"参与运算（乘法要注意块的尺寸匹配）。\n常用结论：主对角分块的逆 $\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}^{-1}=\\begin{pmatrix}A^{-1}&O\\\\O&B^{-1}\\end{pmatrix}$；副对角分块 $\\begin{pmatrix}O&A\\\\B&O\\end{pmatrix}^{-1}=\\begin{pmatrix}O&B^{-1}\\\\A^{-1}&O\\end{pmatrix}$。\n分块思想在证明秩的不等式、求高阶矩阵的逆与幂时极有效。"
    }
  ],
  "theorems": [
    {
      "name": "可逆的充要条件（核心定理）",
      "statement": "$n$ 阶方阵 $A$ 可逆 $\\iff$ 存在 $B$ 使 $AB=E$（单侧即可）$\\iff |A|\\neq0\\iff r(A)=n\\iff Ax=0$ 只有零解。",
      "conditions": "",
      "remark": "单侧可逆即双侧可逆（方阵情形）：\"若 $AB=E$ 则 $A$ 可逆且 $B=A^{-1}$\"，这一结论在抽象证明题中反复使用。"
    },
    {
      "name": "伴随矩阵公式体系",
      "statement": "$$AA^*=A^*A=|A|E$$ $$A^{-1}=\\frac{A^*}{|A|},\\quad A^*=|A|A^{-1},\\quad (A^*)^{-1}=\\frac{A}{|A|}$$ $$(A^*)^*=|A|^{n-2}A\\ (n\\ge2),\\quad |A^*|=|A|^{n-1}$$ $$(AB)^*=B^*A^*,\\quad (A^T)^*=(A^*)^T$$",
      "conditions": "$n\\ge 2$ 阶方阵；$|A^*|=|A|^{n-1}$ 对任意 $A$（含不可逆）成立",
      "remark": "秩的关系：$r(A^*)=\\begin{cases}n,&r(A)=n\\\\1,&r(A)=n-1\\\\0,&r(A)<n-1\\end{cases}$，必须完整记住三段。"
    },
    {
      "name": "初等矩阵求逆与求秩",
      "statement": "对横向增广矩阵 $(A\\mid E)$ 施行行变换，可化为 $(E\\mid A^{-1})$；对纵向增广矩阵 $\\begin{pmatrix}A\\\\E\\end{pmatrix}$ 施行列变换，可化为 $\\begin{pmatrix}E\\\\A^{-1}\\end{pmatrix}$。",
      "conditions": "",
      "remark": "等价表述：存在初等矩阵 $P_1,\\dots,P_s$ 使 $P_s\\cdots P_1A=E$，则 $A^{-1}=P_s\\cdots P_1$。此法计算量小，是最实用的求逆法。"
    },
    {
      "name": "秩的 Sylvester 不等式",
      "statement": "$$r(A_{m\\times n}B_{n\\times s})\\ge r(A)+r(B)-n$$",
      "conditions": "",
      "remark": "与 $r(AB)\\le\\min\\{r(A),r(B)\\}$ 联立得夹逼。推论：$A_{m\\times n}B=O\\Rightarrow r(A)+r(B)\\le n$，这是抽象题的最强工具之一。"
    },
    {
      "name": "矩阵等价",
      "statement": "$A\\simeq B\\iff$ 可通过初等变换互化 $\\iff r(A)=r(B)$（同型时）。",
      "conditions": "同型矩阵",
      "remark": "等价、相似、合同三个概念要区分：等价只需秩相同；相似、合同要求更强（第5、6章）。"
    },
    {
      "name": "幂的计算三板斧",
      "statement": "① 秩 1 矩阵：$A=\\alpha\\beta^T\\Rightarrow A^n=(\\beta^T\\alpha)^{n-1}A=\\lambda^{n-1}A$；② 相似对角化：$A=P\\Lambda P^{-1}\\Rightarrow A^n=P\\Lambda^nP^{-1}$；③ 拆分法：$A=B+kE$，$B$ 幂次低时展开（$B^2=O$ 型二项式失效，需 $B$ 与 $E$ 交换——总成立）。",
      "conditions": "",
      "remark": "③ 中 $(B+kE)^n=\\sum C_n^i k^{n-i}B^i$ 合法，因为 $B$ 与 $E$ 可交换。"
    }
  ],
  "examples": [
    {
      "title": "例1 含 $A^*$ 的行列式计算",
      "level": "基础",
      "problem": "设 $A$ 为 3 阶矩阵，$|A|=\\dfrac{1}{2}$，求 $|(3A)^{-1}-2A^*|$。",
      "solution": [
        "$(3A)^{-1}=\\dfrac{1}{3}A^{-1}$；又 $A^*=|A|A^{-1}=\\dfrac{1}{2}A^{-1}$，故 $2A^*=A^{-1}$。",
        "$(3A)^{-1}-2A^*=\\dfrac{1}{3}A^{-1}-A^{-1}=-\\dfrac{2}{3}A^{-1}$。",
        "取行列式：$\\left|-\\dfrac{2}{3}A^{-1}\\right|=\\left(-\\dfrac{2}{3}\\right)^3|A|^{-1}=-\\dfrac{8}{27}\\cdot 2=-\\dfrac{16}{27}$。"
      ],
      "tip": "所有含 $A^*$ 的式子，第一步都是用 $A^*=|A|A^{-1}$（$|A|\\ne0$ 时）把 $A^*$ 化成 $A^{-1}$ 统一处理。"
    },
    {
      "title": "例2 求逆矩阵（伴随法+初等变换法）",
      "level": "基础",
      "problem": "求 $A=\\begin{pmatrix}1&2&0\\\\2&3&0\\\\3&4&2\\end{pmatrix}$ 的逆矩阵。",
      "solution": [
        "初等变换法：$(A\\mid E)=\\begin{pmatrix}1&2&0&1&0&0\\\\2&3&0&0&1&0\\\\3&4&2&0&0&1\\end{pmatrix}$。",
        "$r_2-2r_1,\\ r_3-3r_1$：$\\begin{pmatrix}1&2&0&1&0&0\\\\0&-1&0&-2&1&0\\\\0&-2&2&-3&0&1\\end{pmatrix}$。",
        "$r_2\\times(-1),\\ r_3-2r_2$：$\\begin{pmatrix}1&2&0&1&0&0\\\\0&1&0&2&-1&0\\\\0&0&2&1&-2&1\\end{pmatrix}$，$r_1-2r_2$，$r_3\\div2$：",
        "$\\begin{pmatrix}1&0&0&-3&2&0\\\\0&1&0&2&-1&0\\\\0&0&1&1/2&-1&1/2\\end{pmatrix}$，故 $A^{-1}=\\begin{pmatrix}-3&2&0\\\\2&-1&0\\\\1/2&-1&1/2\\end{pmatrix}$。",
        "验证：$AA^{-1}=E$ ✓。"
      ],
      "tip": "求逆后**必须验证** $AA^{-1}=E$（哪怕抽查一两个元素）。初等变换法比伴随法更不易出错。"
    },
    {
      "title": "例3 解矩阵方程",
      "level": "强化",
      "problem": "设 $A=\\begin{pmatrix}1&1&-1\\\\0&2&2\\\\1&-1&0\\end{pmatrix}$，且 $AX=E+A^2X$（$E$ 为 3 阶单位阵），求 $X$。",
      "solution": [
        "移项得 $(A-A^2)X=E$。只要 $A-A^2$ 可逆，就有 $X=(A-A^2)^{-1}$。",
        "计算 $A^2=\\begin{pmatrix}0&4&1\\\\2&2&4\\\\1&-1&-3\\end{pmatrix}$，故 $A-A^2=\\begin{pmatrix}1&-3&-2\\\\-2&0&-2\\\\0&0&3\\end{pmatrix}$。",
        "该矩阵行列式为 $-18\\ne0$，其逆为 $X=\\frac16\\begin{pmatrix}0&-3&-2\\\\-2&-1&-2\\\\0&0&2\\end{pmatrix}$。直接相乘可验证 $(A-A^2)X=E$。"
      ],
      "tip": "矩阵方程三大类型：$AXB=C\\Rightarrow X=A^{-1}CB^{-1}$。先整理出 $X$ 的显式表达式再求逆，切忌直接对 $AX=E+A^2X$ 两边\"除以 A\"。"
    },
    {
      "title": "例4 秩 1 矩阵的幂",
      "level": "强化",
      "problem": "设 $\\alpha=(1,2,3)^T$，$\\beta=(1,\\tfrac12,\\tfrac13)^T$，$A=\\alpha\\beta^T$，求 $A^n$。",
      "solution": [
        "$A$ 是秩 1 矩阵。计算 $\\beta^T\\alpha=1\\cdot1+\\tfrac12\\cdot2+\\tfrac13\\cdot3=3$（标量）。",
        "由结合律：$A^n=(\\alpha\\beta^T)^n=\\alpha(\\beta^T\\alpha)^{n-1}\\beta^T=3^{n-1}\\alpha\\beta^T=3^{n-1}A$。",
        "即 $A^n=3^{n-1}\\begin{pmatrix}1&1/2&1/3\\\\2&1&2/3\\\\3&3/2&1\\end{pmatrix}$。"
      ],
      "tip": "秩 1 矩阵 $A=\\alpha\\beta^T$ 的幂公式 $A^n=(\\beta^T\\alpha)^{n-1}A$ 是考研最常用的幂公式；$\\beta^T\\alpha$ 恰是 $A$ 的迹（特征值之和）。"
    },
    {
      "title": "例5 伴随矩阵的秩与行列式",
      "level": "强化",
      "problem": "设 $A$ 为 4 阶矩阵，$r(A)=2$，求 $r(A^*)$ 与 $|A^*|$。",
      "solution": [
        "$r(A)=2<n-1=3$，由秩的三段结论得 $r(A^*)=0$，即 $A^*=O$，故 $|A^*|=0$。",
        "另证 $|A^*|\\colon$ 公式 $|A^*|=|A|^{n-1}=|A|^3$，而 $r(A)=2$ 意味着 $|A|=0$（不满秩），故 $|A^*|=0$。两法一致。"
      ],
      "tip": "看到 $A^*$ 立即想两件事：$r(A^*)$ 三段结论、$|A^*|=|A|^{n-1}$。$r(A)=n-1$ 时 $r(A^*)=1$ 是最常见的考点设置。"
    },
    {
      "title": "例6 分块矩阵求逆与幂",
      "level": "冲刺",
      "problem": "设 $A=\\begin{pmatrix}2&1&0&0\\\\0&2&0&0\\\\0&0&3&0\\\\0&0&1&3\\end{pmatrix}$，求 $A^n$（$n\\ge2$）。",
      "solution": [
        "分块：$A=\\begin{pmatrix}A_1&O\\\\O&A_2\\end{pmatrix}$，$A_1=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}=2E+B$，$B=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$，$B^2=O$。",
        "$A_1^n=(2E+B)^n=2^nE+n2^{n-1}B=\\begin{pmatrix}2^n&n2^{n-1}\\\\0&2^n\\end{pmatrix}$（$B$ 与 $2E$ 交换，二项式合法）。",
        "$A_2=\\begin{pmatrix}3&0\\\\1&3\\end{pmatrix}=3E+C$，$C=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$，$C^2=O$，同理 $A_2^n=\\begin{pmatrix}3^n&0\\\\n3^{n-1}&3^n\\end{pmatrix}$。",
        "故 $A^n=\\begin{pmatrix}2^n&n2^{n-1}&0&0\\\\0&2^n&0&0\\\\0&0&3^n&0\\\\0&0&n3^{n-1}&3^n\\end{pmatrix}$。"
      ],
      "tip": "若尔当型小块 $\\lambda E+B$（$B^2=O$）的幂是超高频模型，结论 $(\\lambda E+B)^n=\\lambda^nE+n\\lambda^{n-1}B$ 要形成条件反射。"
    }
  ],
  "methods": [
    "求逆首选初等变换法 $(A|E)\\to(E|A^{-1})$；二阶矩阵用口诀\"主对角互换、副对角变号\"直接写出。",
    "含 $A^*$ 的问题：一律先用 $A^*=|A|A^{-1}$（可逆时）化简；不可逆时用定义 $AA^*=|A|E=O$ 分析。",
    "矩阵方程：先把 $X$ 整理成 $X=A^{-1}CB^{-1}$ 型显式解，注意左乘右乘顺序不可颠倒。",
    "求 $A^n$：识别秩 1 / 相似对角化 / 拆分 $B+kE$ 三种模型；分块矩阵按块求幂。",
    "证明秩的等式或不等式：联用 $r(AB)\\le\\min$、Sylvester 下界、$AB=O\\Rightarrow r(A)+r(B)\\le n$、可逆阵不改变秩。",
    "抽象矩阵等式证明题：从 $AA^*=|A|E$ 出发，用\"左乘右乘\"技巧构造 $E$ 或可逆因子。"
  ],
  "pitfalls": [
    "矩阵乘法没有交换律：$(A+B)^2\\ne A^2+2AB+B^2$（除非 $AB=BA$）；$(AB)^T=B^TA^T$（转置要反序）。",
    "消去律不成立：$AB=O$ 时 $A$、$B$ 都可能非零（例如 $A=\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix},B=\\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$）。",
    "$(AB)^{-1}=B^{-1}A^{-1}$、$(AB)^*=B^*A^*$、$(AB)^T=B^TA^T$——三个\"反序\"公式要一起记。",
    "$A^*$ 的元素是 $A_{ji}$（行列转置放置），直接按 $(i,j)$ 位置放 $A_{ij}$ 是常见错误。",
    "$|A+B|\\ne|A|+|B|$；$|kA|=k^n|A|$ 不要写成 $k|A|$。",
    "初等变换求逆时行列变换不能混用：求逆只用行变换（$(A|E)$ 行变换），列变换对应另一种拼块方式。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "设 $A$ 为 3 阶方阵，$|A|=2$，求 $|3A|$、$|A^*|$、$|-A^{-1}|$。",
      "answer": "$54$；$4$；$-1/2$",
      "solution": "$|3A|=3^3|A|=27\\cdot2=54$；$|A^*|=|A|^{n-1}=|A|^2=4$；$|-A^{-1}|=(-1)^3|A|^{-1}=-\\dfrac12$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "已知 $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$，求 $A^{-1}$。",
      "answer": "$\\begin{pmatrix}-2&1\\\\3/2&-1/2\\end{pmatrix}$",
      "solution": "二阶逆口诀：$|A|=4-6=-2\\ne0$，$A^{-1}=\\dfrac{1}{-2}\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}=\\begin{pmatrix}-2&1\\\\1.5&-0.5\\end{pmatrix}$。验证 $AA^{-1}=E$ ✓。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "设 $n$ 阶矩阵 $A$ 满足 $A^2-3A+2E=O$，证明 $A$ 可逆并求 $A^{-1}$。",
      "answer": "$A^{-1}=\\dfrac{3E-A}{2}$",
      "solution": "由 $A^2-3A=-2E$ 得 $A(3E-A)=2E$，即 $A\\cdot\\dfrac{3E-A}{2}=E$。由单侧可逆即双侧可逆知 $A$ 可逆，且 $A^{-1}=\\dfrac{3E-A}{2}$。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "设 $A$ 为 $n$ 阶可逆矩阵，交换 $A$ 的第 1、2 行得矩阵 $B$，证明 $AB^{-1}$ 为初等矩阵并写出其形式。",
      "answer": "见解析",
      "solution": "交换 1、2 行的初等矩阵记 $P$，则 $B=PA$，$P=P^{-1}=P^T$。$B^{-1}=A^{-1}P^{-1}=A^{-1}P$，故 $AB^{-1}=AA^{-1}P=P$，它正是交换 1、2 行的初等矩阵。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "设 $A$ 为 $m\\times n$ 矩阵，$B$ 为 $n\\times m$ 矩阵，$m>n$。证明 $|AB|=0$。",
      "answer": "见解析",
      "solution": "$r(AB)\\le\\min\\{r(A),r(B)\\}\\le n<m$，故 $AB$ 是 $m$ 阶方阵但秩小于 $m$，不满秩，从而 $|AB|=0$。本题是\"长方形矩阵乘积必降秩\"的典型应用。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "设 $A=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\-1&2&4\\end{pmatrix}$，求 $(A^*)^{-1}$。",
      "answer": "$\\dfrac{1}{4}A$",
      "solution": "$A$ 是下三角矩阵，$|A|=1\\cdot1\\cdot4=4$。由 $A^*=|A|A^{-1}$ 得 $(A^*)^{-1}=\\dfrac{1}{|A|}A=\\dfrac14A$。"
    }
  ]
};
