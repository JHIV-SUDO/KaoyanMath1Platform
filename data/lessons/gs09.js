export default {
  "id": "gs09",
  "subject": "gaoshu",
  "no": 9,
  "title": "一元积分的计算",
  "subtitle": "第9讲",
  "hours": 6,
  "syllabusRef": "hm3",
  "goal": [
    "熟练使用换元与分部积分",
    "计算简单有理式及三角积分",
    "判断并计算常见反常积分"
  ],
  "concepts": [
    {
      "name": "换元积分",
      "body": "利用复合函数求导的逆过程，将积分变量变为更方便的变量。不定积分最后要回代；定积分则应同时把两个端点转换到新变量。"
    },
    {
      "name": "分部积分",
      "body": "从乘积求导公式反推：$\\int u\\,dv=uv-\\int v\\,du$。选取 $u$ 后应使剩余积分更简单，而不是机械套用。"
    },
    {
      "name": "有理函数",
      "body": "有理式先作多项式除法，再将真分式按实线性因子及实不可约二次因子分解。简单分式通过对数、反正切或换元计算。"
    },
    {
      "name": "三角与根式",
      "body": "含 $\\sin x,\\cos x$ 的表达式可借助恒等式、换元或万能代换。含 $\\sqrt{a^2-x^2}$ 等根式可考虑三角代换，同时记录变量范围以处理绝对值。"
    },
    {
      "name": "反常积分判敛",
      "body": "无穷区间积分与无界函数积分由极限定义。比较法和 $p$ 积分可快速判断敛散，但数值计算仍须正确处理极限和分段。"
    }
  ],
  "theorems": [
    {
      "name": "换元公式",
      "statement": "$\\int f(g(x))g'(x)dx=\\int f(u)du$，其中 $u=g(x)$。",
      "conditions": "复合及原函数在讨论区间内有定义。",
      "remark": "定积分可直接更换积分上下限。"
    },
    {
      "name": "分部积分公式",
      "statement": "$\\int_a^b u\\,dv=[uv]_a^b-\\int_a^b v\\,du$。",
      "conditions": "函数满足相应连续可导条件。",
      "remark": "选 $u$ 时考虑其导数是否简化。"
    },
    {
      "name": "基本积分",
      "statement": "$\\int x^\\alpha dx=x^{\\alpha+1}/(\\alpha+1)+C$（$\\alpha\\ne-1$）；$\\int dx/x=\\log|x|+C$。",
      "conditions": "在对应函数有定义的区间内。",
      "remark": "特殊指数 $-1$ 必须单独处理。"
    },
    {
      "name": "三角基本积分",
      "statement": "$\\int\\sin x\\,dx=-\\cos x+C$，$\\int\\cos x\\,dx=\\sin x+C$，$\\int dx/(1+x^2)=\\arctan x+C$。",
      "conditions": "在实数范围内。",
      "remark": "可通过求导检验符号。"
    },
    {
      "name": "无穷区间 $p$ 积分",
      "statement": "$\\int_1^\\infty x^{-p}dx$ 当且仅当 $p>1$ 收敛；收敛时值为 $1/(p-1)$。",
      "conditions": "实数 $p$。",
      "remark": "边界 $p=1$ 发散。"
    },
    {
      "name": "零点附近 $p$ 积分",
      "statement": "$\\int_0^1 x^{-p}dx$ 当且仅当 $p<1$ 收敛；收敛时值为 $1/(1-p)$。",
      "conditions": "实数 $p$。",
      "remark": "与无穷区间的判别方向相反。"
    }
  ],
  "examples": [
    {
      "title": "例1 换元",
      "level": "基础",
      "problem": "求 $\\int 2x\\cos(x^2)dx$。",
      "solution": [
        "令 $u=x^2$，则 $du=2x\\,dx$。",
        "积分变为 $\\int\\cos u\\,du=\\sin u+C$。",
        "回代得 $\\sin(x^2)+C$。"
      ],
      "tip": "被积式中识别内层函数及其导数。"
    },
    {
      "title": "例2 分部积分",
      "level": "基础",
      "problem": "求 $\\int xe^x dx$。",
      "solution": [
        "取 $u=x$，$dv=e^x dx$，则 $du=dx,v=e^x$。",
        "代入得 $xe^x-\\int e^x dx$。",
        "结果为 $(x-1)e^x+C$。"
      ],
      "tip": "多项式和指数的乘积可让多项式降次。"
    },
    {
      "title": "例3 分式积分",
      "level": "强化",
      "problem": "求 $\\int dx/(x^2-1)$，在不穿过奇点的区间上讨论。",
      "solution": [
        "部分分式为 $1/(x^2-1)=\\tfrac12[1/(x-1)-1/(x+1)]$。",
        "逐项积分得 $\\tfrac12\\log|x-1|-\\tfrac12\\log|x+1|+C$。",
        "即 $\\tfrac12\\log|\\frac{x-1}{x+1}|+C$，各连通区间的常数可不同。"
      ],
      "tip": "分式分解前确认定义域。"
    },
    {
      "title": "例4 反常积分",
      "level": "强化",
      "problem": "计算 $\\int_1^\\infty x^{-2}dx$。",
      "solution": [
        "根据定义，先算 $\\int_1^R x^{-2}dx=1-1/R$。",
        "令 $R\\to\\infty$，极限为 $1$。",
        "该反常积分收敛且值为 $1$。"
      ],
      "tip": "无穷端点不能直接当作普通端点。"
    }
  ],
  "methods": [
    "识别内层导数，优先尝试换元。",
    "乘积积分尝试通过分部使被积式简化。",
    "有理函数先拆分再积分。",
    "反常积分先分割奇点并判断各极限是否存在。"
  ],
  "pitfalls": [
    "换元时定积分的上下限要同步变换。",
    "积分 $1/x$ 的原函数是 $\\log|x|+C$。",
    "对称的正负无穷抵消不等于反常积分收敛。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "求 $\\int x/(1+x^2)dx$。",
      "answer": "$\\frac12\\log(1+x^2)+C$",
      "solution": "令 $u=1+x^2$，则 $du=2x dx$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "求 $\\int_0^1 xe^x dx$。",
      "answer": "$1$",
      "solution": "原函数为 $(x-1)e^x$，代入 $0,1$ 得 $0-(-1)=1$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "判断 $\\int_1^\\infty dx/x$ 是否收敛。",
      "answer": "发散",
      "solution": "$\\int_1^R dx/x=\\log R\\to\\infty$，故发散。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "计算 $\\int_0^1 x^{-1/2}dx$。",
      "answer": "$2$",
      "solution": "将下限取为 $\\varepsilon>0$，积分为 $2(1-\\sqrt\\varepsilon)$，令 $\\varepsilon\\to0+$ 得 $2$。"
    }
  ]
};
