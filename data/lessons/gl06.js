export default {
  "id": "gl06",
  "subject": "gailv",
  "no": 6,
  "title": "数理统计的基本概念",
  "subtitle": "第6章",
  "hours": 5,
  "syllabusRef": "pr6",
  "goal": [
    "理解总体、样本、统计量的概念，掌握样本均值与样本方差的定义",
    "掌握 χ²、t、F 三大抽样分布的典型模式与性质",
    "掌握正态总体下样本均值、样本方差的抽样分布（四大结论）",
    "了解分位数（上侧 α 分位数）的定义并会查表"
  ],
  "concepts": [
    {
      "name": "总体与样本",
      "body": "研究对象的某数量指标值的全体称为**总体**，用一个分布 $F(x)$ 刻画；从总体中抽取的 $n$ 个独立同分布个体 $X_1,\\dots,X_n$ 称为**简单随机样本**（容量 $n$）。\n样本的**观测值**记 $x_1,\\dots,x_n$。样本二重性：抽样前是随机向量，抽样后是一组数。"
    },
    {
      "name": "统计量",
      "body": "不含未知参数的样本函数称为统计量。核心三个：\n- 样本均值 $\\bar X=\\dfrac1n\\sum X_i$\n- 样本方差 $S^2=\\dfrac{1}{n-1}\\sum(X_i-\\bar X)^2$（**分母 $n-1$**，保证无偏）\n- 样本 $k$ 阶（原点）矩 $A_k=\\dfrac1n\\sum X_i^k$\n样本标准差 $S$、样本二阶中心矩 $B_2=\\dfrac1n\\sum(X_i-\\bar X)^2=\\dfrac{n-1}{n}S^2$（与 $S^2$ 差个系数，容易混）。"
    },
    {
      "name": "χ² 分布",
      "body": "**典型模式**：$Z_1,\\dots,Z_n$ 独立同 $N(0,1)$，则 $\\chi^2=\\sum Z_i^2\\sim\\chi^2(n)$（自由度 $n$）。\n性质：$E(\\chi^2(n))=n$，$D(\\chi^2(n))=2n$；可加性 $\\chi_1^2\\sim\\chi^2(m),\\ \\chi_2^2\\sim\\chi^2(n)$ 独立 $\\Rightarrow\\chi_1^2+\\chi_2^2\\sim\\chi^2(m+n)$。"
    },
    {
      "name": "t 分布",
      "body": "**典型模式**：$Z\\sim N(0,1)$，$Y\\sim\\chi^2(n)$，且独立，则 $$T=\\frac{Z}{\\sqrt{Y/n}}\\sim t(n)$$\n密度关于原点对称（奇数阶矩为零），$n$ 大时趋于 $N(0,1)$；$E(T)=0$（$n>1$），$D(T)=\\dfrac{n}{n-2}$（$n>2$）。"
    },
    {
      "name": "F 分布",
      "body": "**典型模式**：$Y_1\\sim\\chi^2(n_1)$，$Y_2\\sim\\chi^2(n_2)$ 独立，则 $$F=\\frac{Y_1/n_1}{Y_2/n_2}\\sim F(n_1,n_2)$$\n性质：$\\dfrac1F\\sim F(n_2,n_1)$（自由度颠倒）；$T^2\\sim F(1,n)$（$t$ 的平方是自由度 $(1,n)$ 的 $F$）。"
    },
    {
      "name": "分位数",
      "body": "上侧 $\\alpha$ 分位数 $\\chi^2_\\alpha(n)$、$t_\\alpha(n)$、$F_\\alpha(n_1,n_2)$ 定义为 $P(X>x_\\alpha)=\\alpha$。标准正态记 $z_\\alpha$（或 $u_\\alpha$）。\n对称性：$t_{1-\\alpha}(n)=-t_\\alpha(n)$；$F_{1-\\alpha}(n_1,n_2)=\\dfrac{1}{F_\\alpha(n_2,n_1)}$（倒数关系）；$z_{1-\\alpha}=-z_\\alpha$。χ² 无对称性，注意区分上/下侧。"
    }
  ],
  "theorems": [
    {
      "name": "正态总体抽样分布四大结论",
      "statement": "设 $X_1,\\dots,X_n$ 来自 $N(\\mu,\\sigma^2)$：\n① $\\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)$；\n② $\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$；\n③ $\\bar X$ 与 $S^2$ **独立**；\n④ $\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$。",
      "conditions": "正态总体",
      "remark": "②的自由度是 $n-1$（损失一维估计 $\\mu$）；③的独立性是④的基础，也是\"样本均值与样本方差独立\"这一正态总体特有性质。"
    },
    {
      "name": "两正态总体的抽样分布",
      "statement": "总体 $N(\\mu_1,\\sigma_1^2)$、$N(\\mu_2,\\sigma_2^2)$，样本 $m,n$ 个：\n$$\\frac{(\\bar X-\\bar Y)-(\\mu_1-\\mu_2)}{\\sqrt{\\dfrac{\\sigma_1^2}{m}+\\dfrac{\\sigma_2^2}{n}}}\\sim N(0,1)$$ $\\sigma_1^2=\\sigma_2^2=\\sigma^2$ 时 $$\\frac{(\\bar X-\\bar Y)-(\\mu_1-\\mu_2)}{S_w\\sqrt{\\dfrac1m+\\dfrac1n}}\\sim t(m+n-2),\\quad S_w^2=\\frac{(m-1)S_1^2+(n-1)S_2^2}{m+n-2}$$ $$\\frac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\sim F(m-1,n-1)$$",
      "conditions": "两总体独立且正态",
      "remark": "三个公式分别服务：均值差的检验（$\\sigma$ 已知/未知 pooled）、方差比检验。合并方差 $S_w^2$ 的加权结构要记牢。"
    },
    {
      "name": "样本均值的数字特征",
      "statement": "$E(\\bar X)=\\mu,\\ D(\\bar X)=\\dfrac{\\sigma^2}{n},\\ E(S^2)=\\sigma^2$（无论什么总体，后一条即无偏性）。",
      "conditions": "",
      "remark": "$E(S^2)=\\sigma^2$ 对**任何**总体成立（不只正态）；而 $E\\left[\\dfrac1n\\sum(X_i-\\bar X)^2\\right]=\\dfrac{n-1}{n}\\sigma^2\\ne\\sigma^2$，这就是分母取 $n-1$ 的原因。"
    },
    {
      "name": "顺序统计量与经验分布函数",
      "statement": "将样本排序为 $X_{(1)}\\le\\cdots\\le X_{(n)}$。经验分布函数为 $F_n(x)=n^{-1}\\sum_{i=1}^{n}\\mathbf 1_{\\{X_i\\le x\\}}$。",
      "conditions": "",
      "remark": "对独立同分布样本和每个固定 $x$，由大数定律有 $F_n(x)\\xrightarrow{P}F(x)$。更强的格里汶科定理给出一致收敛。"
    }
  ],
  "examples": [
    {
      "title": "例1 计算样本均值与样本方差",
      "level": "基础",
      "problem": "样本观测值为 $2,4,3,5,6$，求 $\\bar x$ 与 $s^2$。",
      "solution": [
        "$\\bar x=\\dfrac{2+4+3+5+6}{5}=4$。",
        "$s^2=\\dfrac{1}{4}\\left[(2-4)^2+(4-4)^2+(3-4)^2+(5-4)^2+(6-4)^2\\right]=\\dfrac{4+0+1+1+4}{4}=2.5$。"
      ],
      "tip": "牢记分母 $n-1=4$。若题目给的是二阶中心矩 $B_2=2$，则 $s^2=\\dfrac{n}{n-1}B_2$ 换算。"
    },
    {
      "title": "例2 构造 χ² / t / F 统计量",
      "level": "基础",
      "problem": "设 $X_1,\\dots,X_6$ 来自 $N(0,4)$。写出 $\\dfrac{1}{4}\\sum X_i^2$ 的分布，以及 $\\dfrac{X_1+X_2+X_3}{\\sqrt{X_4^2+X_5^2+X_6^2}}$ 的分布（含系数修正）。",
      "solution": [
        "$X_i\\sim N(0,4)\\Rightarrow\\dfrac{X_i}{2}\\sim N(0,1)$，故 $\\dfrac14\\sum X_i^2=\\sum\\left(\\dfrac{X_i}2\\right)^2\\sim\\chi^2(6)$。",
        "分子标准化：$X_1+X_2+X_3\\sim N(0,12)$，故 $\\dfrac{X_1+X_2+X_3}{2\\sqrt3}\\sim N(0,1)$。分母：$\\dfrac{X_4^2+X_5^2+X_6^2}{4}\\sim\\chi^2(3)$。",
        "按 $t$ 分布定义拼装：$$T=\\frac{\\dfrac{X_1+X_2+X_3}{2\\sqrt3}}{\\sqrt{\\dfrac{(X_4^2+X_5^2+X_6^2)/4}{3}}}=\\frac{\\dfrac{X_1+X_2+X_3}{2\\sqrt3}}{\\dfrac{\\sqrt{X_4^2+X_5^2+X_6^2}}{2\\sqrt3}}=\\frac{X_1+X_2+X_3}{\\sqrt{X_4^2+X_5^2+X_6^2}}\\sim t(3)$$ 系数恰好为 $1$（分子分母的 $2\\sqrt3$ 互相抵消）。"
      ],
      "tip": "构造统计量的套路：分子标准化成 $N(0,1)$，分母配成 $\\sqrt{\\chi^2/\\text{自由度}}$，整体对齐 t 分布定义式——拼装后系数自动约简，务必最后化简核对。"
    },
    {
      "title": "例3 求正态总体下概率",
      "level": "强化",
      "problem": "设 $X_1,\\dots,X_{16}$ 来自 $N(\\mu,\\sigma^2)$，求 $P\\left(\\dfrac{S^2}{\\sigma^2}>1.5\\right)$ 的表达（用分位数表示）与 $P(|\\bar X-\\mu|<\\sigma/2)$（$\\sigma$ 已知，$\\Phi(2)=0.9772$）。",
      "solution": [
        "由结论②，$\\dfrac{15S^2}{\\sigma^2}\\sim\\chi^2(15)$，故 $P\\left(\\dfrac{S^2}{\\sigma^2}>1.5\\right)=P\\left(\\dfrac{15S^2}{\\sigma^2}>22.5\\right)=1-\\chi^2_{0.95}(15)$ 的补：即 $P=1-F_{\\chi^2(15)}(22.5)$，查表可得（如 $\\chi^2_{0.1}(15)=22.307$，故 $P\\approx0.1$）。",
        "$\\bar X\\sim N(\\mu,\\sigma^2/16)$：$P(|\\bar X-\\mu|<\\sigma/2)=2\\Phi\\left(\\dfrac{\\sigma/2}{\\sigma/4}\\right)-1=2\\Phi(2)-1=0.9544$。"
      ],
      "tip": "含 $S^2$ 的概率题：先标准化为 $\\chi^2$ 或 $t$，再化作分位数比较。含 $\\bar X$ 且 $\\sigma$ 已知时直接用 $N(\\mu,\\sigma^2/n)$。"
    },
    {
      "title": "例4 两总体的 F 统计量",
      "level": "强化",
      "problem": "设 $X_1,\\dots,X_8$ 来自 $N(\\mu_1,\\sigma^2)$，$Y_1,\\dots,Y_{10}$ 来自 $N(\\mu_2,\\sigma^2)$，两样本独立，$S_1^2,S_2^2$ 为各自样本方差。求常数 $c$ 使 $c\\cdot\\dfrac{S_1^2}{S_2^2}\\sim F(7,9)$。",
      "solution": [
        "由结论②：$\\dfrac{7S_1^2}{\\sigma^2}\\sim\\chi^2(7)$，$\\dfrac{9S_2^2}{\\sigma^2}\\sim\\chi^2(9)$，且独立。",
        "由定义 $F=\\frac{(7S_1^2/\\sigma^2)/7}{(9S_2^2/\\sigma^2)/9}=\\frac{S_1^2}{S_2^2}\\sim F(7,9)$。",
        "系数恰为 $c=1$（$\\chi^2$ 的自由度除法把 $7,9$ 都约掉了）。"
      ],
      "tip": "方差比问题：$\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\sim F(m-1,n-1)$。方差相等（$\\sigma$ 相同）时 $\\dfrac{S_1^2}{S_2^2}$ 直接就是 $F$。"
    },
    {
      "title": "例5 由统计量分布反求总体参数",
      "level": "冲刺",
      "problem": "设 $X_1,\\dots,X_n$ 来自 $N(\\mu,\\sigma^2)$，已知 $\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$。对 $n=9$，$P(\\bar X>\\mu+kS)=0.05$（$t_{0.05}(8)=1.86$），求 $k$。",
      "solution": [
        "$$P(\\bar X>\\mu+kS)=P\\left(\\frac{\\bar X-\\mu}{S/3}>3k\\right)=0.05$$ 左侧即 $t(8)$ 超过 $3k$ 的概率，故 $3k=t_{0.05}(8)=1.86$，$k=0.62$。"
      ],
      "tip": "反求常数：把目标事件改写成已知统计量的形式（分子凑 $\\bar X-\\mu$、分母凑 $S$），再对齐分位数定义。"
    },
    {
      "title": "例6 样本方差的期望（无偏性验证）",
      "level": "冲刺",
      "problem": "证明对任意总体（期望方差存在）：$E(S^2)=\\sigma^2$。",
      "solution": [
        "$$\\sum(X_i-\\bar X)^2=\\sum(X_i-\\mu)^2-n(\\bar X-\\mu)^2$$（交叉项为零）。",
        "取期望：$E\\sum(X_i-\\mu)^2=n\\sigma^2$；$E(\\bar X-\\mu)^2=D(\\bar X)=\\dfrac{\\sigma^2}{n}$。",
        "故 $E\\sum(X_i-\\bar X)^2=n\\sigma^2-\\dfrac{\\sigma^2}{n}=\\dfrac{(n-1)\\sigma^2}{n}\\cdot n$，即 $E\\left[\\dfrac{1}{n-1}\\sum(X_i-\\bar X)^2\\right]=\\sigma^2$。∎"
      ],
      "tip": "关键恒等式 $\\sum(X_i-\\bar X)^2=\\sum(X_i-\\mu)^2-n(\\bar X-\\mu)^2$ 在证明与计算中反复出现，务必掌握。"
    }
  ],
  "methods": [
    "三大分布都从\"典型模式\"反推：χ² = 标准正态平方和；t = 标准正态 / √(χ²/df)；F = 两个 χ² 各除自由度之比。",
    "含 $\\bar X$ 且 $\\sigma$ 已知 → 正态；含 $S$ → t；含 $S^2$ → χ²；含两个 $S^2$ 之比 → F。",
    "系数凑型：先把每个成分标准化，再按定义式乘除常数对齐。",
    "分位数运算：$t$ 对称、$F$ 取倒数、$z$ 对称；上侧分位数 $P(X>x_\\alpha)=\\alpha$。",
    "样本数字特征：$\\bar X$ 的期望方差用第 4 章结论；$S^2$ 无偏性证明用分解恒等式。"
  ],
  "pitfalls": [
    "样本方差分母是 $n-1$ 不是 $n$；$\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$ 自由度是 $n-1$。",
    "$\\bar X$ 与 $S^2$ 独立仅对正态总体成立，一般总体不独立。",
    "$t$ 分布分母的 χ² 自由度：$\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$（不是 $t(n)$）。",
    "$F$ 的自由度顺序：$F(m-1,n-1)$ 分子是第一个总体；取倒数时自由度也要颠倒。",
    "上侧分位数与下侧分位数容易查反表，做题先确认教材/试卷用哪种约定。",
    "$\\chi^2$ 的期望 $n$、方差 $2n$ 与自由度直接挂钩，考选择题频率极高。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "设 $X\\sim N(0,1)$，$Y\\sim\\chi^2(5)$ 且独立，写出 $\\dfrac{X}{\\sqrt{Y/5}}$ 的分布；若再问 $\\dfrac{X^2}{Y/5}$ 呢？",
      "answer": "第一个 $\\sim t(5)$；第二个 $\\sim F(1,5)$",
      "solution": "t 分布定义直接给出 $T=\\dfrac{X}{\\sqrt{Y/5}}\\sim t(5)$。平方后 $T^2=\\dfrac{X^2}{Y/5}$，分子 $X^2\\sim\\chi^2(1)$，故 $T^2\\sim F(1,5)$——\"$t^2=F(1,n)$\"的实例。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "样本 $2,4,6$ 与 $3,5$ 来自同方差正态总体，求合并方差 $S_w^2$。",
      "answer": "$\\dfrac{8+2}{3}=\\dfrac{10}{3}$",
      "solution": "$s_1^2=\\dfrac{(2-4)^2+(4-4)^2+(6-4)^2}{2}=4$，$s_2^2=\\dfrac{(3-4)^2+(5-4)^2}{1}=2$。$S_w^2=\\dfrac{(3-1)\\cdot4+(2-1)\\cdot2}{3+2-2}=\\dfrac{10}{3}$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "设 $X_1,\\dots,X_{10}$ 来自 $N(\\mu,\\sigma^2)$，$\\bar X,S^2$ 为其样本均值与方差。求 $E\\left(\\dfrac{S^2}{\\sigma^2}\\right)$ 与 $D\\left(\\dfrac{S^2}{\\sigma^2}\\right)$。",
      "answer": "$E=1$；$D=\\dfrac{2}{9}$",
      "solution": "$\\dfrac{9S^2}{\\sigma^2}\\sim\\chi^2(9)$，其期望 $9$、方差 $18$。故 $E\\left(\\dfrac{S^2}{\\sigma^2}\\right)=\\dfrac19\\cdot9=1$；$D=\\dfrac{1}{81}\\cdot18=\\dfrac29$。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "设总体 $X\\sim N(\\mu,\\sigma^2)$，$\\sigma^2$ 未知，样本容量 $n$。写出含 $\\bar X$ 与 $S$ 的、服从 $t(n-1)$ 的统计量；并用 $t_{0.025}(15)=2.132$ 求 $n=16$ 时 $P(|\\bar X-\\mu|<2.132S/4)$。",
      "answer": "$T=\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$；$P=0.95$",
      "solution": "$n=16$ 时 $T\\sim t(15)$，事件 $\\{|\\bar X-\\mu|<2.132S/4\\}=\\{|T|<2.132\\}=1-2\\times0.025=0.95$。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "设 $X_1,\\dots,X_n$ 来自 $N(\\mu,1)$，证明：当 $n\\to\\infty$ 时 $\\bar X\\xrightarrow{P}\\mu$，且 $\\dfrac{\\bar X-\\mu}{1/\\sqrt n}$ 的分布仍为正态（精确而非近似），说明这里为何不需要 CLT。",
      "answer": "见解析",
      "solution": "正态总体下 $\\bar X$ **精确地**服从 $N(\\mu,1/n)$，标准化后精确为 $N(0,1)$，线性组合保持正态，不需要中心极限定理（CLT 是给非正态总体用的）。相合性由切比雪夫不等式：$P(|\\bar X-\\mu|\\ge\\varepsilon)\\le\\dfrac{1}{n\\varepsilon^2}\\to0$。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "设 $X_1,\\dots,X_{16}$ 来自 $N(\\mu,\\sigma^2)$，记 $Y=\\dfrac{4(\\bar X-\\mu)}{S}$。写出 $Y$ 的分布并求 $P(Y<1.753)$（$t_{0.05}(15)=1.753$）。",
      "answer": "$Y\\sim t(15)$；$P=0.95$",
      "solution": "$\\dfrac{\\bar X-\\mu}{S/4}=Y\\sim t(15)$。$P(Y<1.753)=1-P(Y\\ge1.753)=1-0.05=0.95$。"
    }
  ]
};
