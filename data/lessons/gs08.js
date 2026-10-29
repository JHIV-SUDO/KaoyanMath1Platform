export default {
  "id": "gs08",
  "subject": "gaoshu",
  "no": 8,
  "title": "一元积分的概念与性质",
  "subtitle": "第8讲",
  "hours": 6,
  "syllabusRef": "hm3",
  "goal": [
    "理解原函数、不定积分和黎曼定积分",
    "掌握定积分性质与积分中值定理",
    "运用变上限积分及牛顿莱布尼茨公式"
  ],
  "concepts": [
    {
      "name": "原函数与不定积分",
      "body": "若在区间 $I$ 上 $F'=f$，则 $F$ 是 $f$ 的原函数，全部原函数记为 $\\int f(x)dx=F(x)+C$。$C$ 是任意常数；原函数依赖所在区间。"
    },
    {
      "name": "定积分",
      "body": "定积分是分割区间后取样形成的黎曼和在最大分割长度趋零时的极限。它表示带符号的累积量，不一定等于几何面积。"
    },
    {
      "name": "可积性",
      "body": "闭区间上的连续函数可积；有界且只有有限个间断点的函数也可积。某个点的函数值改变不影响定积分，但不应把所有不连续函数都当成可积。"
    },
    {
      "name": "变上限积分",
      "body": "$F(x)=\\int_a^x f(t)dt$ 记录从固定起点到 $x$ 的累积量。若 $f$ 连续，$F'(x)=f(x)$；上下限都是函数时要对两个端点分别应用链式法则。"
    },
    {
      "name": "反常积分",
      "body": "积分区间无界或被积函数无界时，用相应单侧极限定义反常积分。必须各部分极限独立存在并有限，才能称积分收敛。"
    }
  ],
  "theorems": [
    {
      "name": "线性与区间可加",
      "statement": "$\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^b f+\\beta\\int_a^b g$；$\\int_a^c f+\\int_c^b f=\\int_a^b f$。",
      "conditions": "相关函数可积。",
      "remark": "交换上下限会改变符号。"
    },
    {
      "name": "积分保序",
      "statement": "若 $f(x)\\le g(x)$，则 $\\int_a^b f\\le\\int_a^b g$。",
      "conditions": "$a\\le b$ 且两函数可积。",
      "remark": "反向积分时不等号方向需重新处理。"
    },
    {
      "name": "积分中值定理",
      "statement": "存在 $\\xi\\in[a,b]$ 使 $\\int_a^b f(x)dx=f(\\xi)(b-a)$。",
      "conditions": "$f$ 在 $[a,b]$ 连续。",
      "remark": "它给出的点一般不唯一。"
    },
    {
      "name": "微积分基本定理",
      "statement": "若 $f$ 在区间连续，则 $F(x)=\\int_a^x f(t)dt$ 满足 $F'(x)=f(x)$。",
      "conditions": "上限所在区间内 $f$ 连续。",
      "remark": "积分变量是哑变量，不与上限混淆。"
    },
    {
      "name": "牛顿莱布尼茨公式",
      "statement": "若 $F'=f$，则 $\\int_a^b f(x)dx=F(b)-F(a)$。",
      "conditions": "$f$ 在闭区间连续；更一般情形需满足相应可积条件。",
      "remark": "先确认原函数适用于整个区间。"
    },
    {
      "name": "对称区间",
      "statement": "在 $[-a,a]$ 上，奇函数的积分为 $0$；偶函数的积分为 $2\\int_0^a f(x)dx$。",
      "conditions": "函数可积且 $a\\ge0$。",
      "remark": "对称区间和奇偶性缺一不可。"
    }
  ],
  "examples": [
    {
      "title": "例1 求原函数",
      "level": "基础",
      "problem": "求 $\\int(2x+\\cos x)dx$。",
      "solution": [
        "$x^2$ 的导数为 $2x$，$\\sin x$ 的导数为 $\\cos x$。",
        "由积分线性性相加并加入任意常数。",
        "结果为 $x^2+\\sin x+C$。"
      ],
      "tip": "通过求导检查原函数。"
    },
    {
      "title": "例2 定积分",
      "level": "基础",
      "problem": "计算 $\\int_0^1(x^2+1)dx$。",
      "solution": [
        "一个原函数为 $x^3/3+x$。",
        "代入上、下限：$(1/3+1)-0$。",
        "结果为 $4/3$。"
      ],
      "tip": "定积分结果不含积分常数。"
    },
    {
      "title": "例3 变限求导",
      "level": "强化",
      "problem": "求 $F(x)=\\int_0^{x^2}\\sin t\\,dt$ 的导数。",
      "solution": [
        "先把上限记为 $u$，基本定理给出对 $u$ 的导数为 $\\sin u$。",
        "$u=x^2$ 的导数为 $2x$。",
        "由链式法则 $F'(x)=2x\\sin(x^2)$。"
      ],
      "tip": "不要忘记上限的导数。"
    },
    {
      "title": "例4 奇偶对称",
      "level": "基础",
      "problem": "计算 $\\int_{-2}^2(x^3+x^2)dx$。",
      "solution": [
        "$x^3$ 为奇函数，关于零对称区间的积分为 $0$。",
        "$x^2$ 为偶函数，其积分为 $2\\int_0^2x^2dx=2\\cdot8/3$。",
        "结果为 $16/3$。"
      ],
      "tip": "拆成奇、偶部分分别处理。"
    }
  ],
  "methods": [
    "先判断不定积分还是定积分。",
    "定积分可利用线性、对称和区间可加性。",
    "变限积分求导必须再乘上下限导数。",
    "反常积分按极限定义分别处理各奇点。"
  ],
  "pitfalls": [
    "定积分是带符号累积，不一定是面积。",
    "原函数公式不能跨越函数无定义或奇异的点直接套用。",
    "定积分结果不需要加 $C$。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "求 $\\int e^x dx$。",
      "answer": "$e^x+C$",
      "solution": "因为 $(e^x)'=e^x$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "求 $\\int_0^\\pi\\sin x\\,dx$。",
      "answer": "$2$",
      "solution": "原函数为 $-\\cos x$，上下限相减得到 $2$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "求 $\\dfrac{d}{dx}\\int_x^{x^2} e^t dt$。",
      "answer": "$2xe^{x^2}-e^x$",
      "solution": "上限贡献 $2xe^{x^2}$，下限贡献 $-e^x$。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "求 $\\int_{-1}^1(x^5+3)dx$。",
      "answer": "$6$",
      "solution": "奇函数 $x^5$ 的积分为零，常数项积分为 $3\\cdot2=6$。"
    }
  ]
};
