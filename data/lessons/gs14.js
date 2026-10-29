export default {
  "id": "gs14",
  "subject": "gaoshu",
  "no": 14,
  "title": "二重积分",
  "subtitle": "第14讲",
  "hours": 6,
  "syllabusRef": "hm6",
  "goal": [
    "理解二重积分的累加意义及基本性质",
    "会用直角坐标与极坐标计算",
    "运用对称性计算面积、体积和质量"
  ],
  "concepts": [
    {
      "name": "定义与意义",
      "body": "把平面区域 $D$ 分成小块，取样后求和 $\\sum f(\\xi_i,\\eta_i)\\Delta A_i$；当最大分块直径趋于零且和有唯一极限时，得到 $\\iint_D f\\,dA$。非负函数的二重积分表示曲面下的体积。"
    },
    {
      "name": "直角坐标累次积分",
      "body": "若 $D=\\{(x,y):a\\le x\\le b,\\ \\varphi_1(x)\\le y\\le\\varphi_2(x)\\}$，可先对 $y$ 积分，再对 $x$ 积分。选择次序前先画区域；边界变化时需分段。"
    },
    {
      "name": "极坐标",
      "body": "使用 $x=r\\cos\\theta,y=r\\sin\\theta$ 时，面积元是 $dA=r\\,dr\\,d\\theta$，其中 $r\\ge0$。适合圆、扇形及只含 $x^2+y^2$ 的被积式。"
    },
    {
      "name": "对称性",
      "body": "若区域关于 $y$ 轴对称且被积函数对 $x$ 为奇函数，则积分为零；其他对称轴同理。交换 $x,y$ 后区域不变时，可比较两个积分。"
    },
    {
      "name": "质量与形心",
      "body": "薄片面密度为 $\\rho(x,y)$ 时，质量 $M=\\iint_D\\rho\\,dA$，质心坐标 $\\bar x=M^{-1}\\iint_D x\\rho\\,dA$、$\\bar y=M^{-1}\\iint_D y\\rho\\,dA$，要求 $M>0$。"
    },
    {
      "name": "一般变量替换",
      "body": "变量变换 $x=x(u,v),y=y(u,v)$ 会改变区域和面积尺度。面积元乘雅可比行列式绝对值 $|\\partial(x,y)/\\partial(u,v)|$；变换需在所用区域内满足适当的可逆和光滑条件。"
    }
  ],
  "theorems": [
    {
      "name": "线性与保序",
      "statement": "二重积分具有线性性；若 $f\\le g$ 于 $D$，则 $\\iint_D f\\le\\iint_D g$。",
      "conditions": "被积函数在有界区域上可积。",
      "remark": "上下界估计可直接积分常数。"
    },
    {
      "name": "二重积分中值定理",
      "statement": "若 $f$ 连续，存在 $\\xi\\in D$ 使 $\\iint_D f\\,dA=f(\\xi)\\operatorname{area}(D)$。",
      "conditions": "$D$ 为有界闭区域，面积存在且 $f$ 在其上连续。",
      "remark": "中值点是二维点。"
    },
    {
      "name": "直角坐标计算",
      "statement": "$\\iint_D f\\,dA=\\int_a^b dx\\int_{\\varphi_1(x)}^{\\varphi_2(x)}f(x,y)dy$。",
      "conditions": "$D$ 为上述简单区域且 $f$ 连续。",
      "remark": "先读内层边界，外层范围随后确定。"
    },
    {
      "name": "极坐标换元",
      "statement": "$\\iint_D f(x,y)dxdy=\\iint_{D'}f(r\\cos\\theta,r\\sin\\theta)r\\,dr\\,d\\theta$。",
      "conditions": "极坐标区域对原区域覆盖一次，忽略面积为零的边界。",
      "remark": "雅可比因子 $r$ 不可遗漏。"
    },
    {
      "name": "区域加法",
      "statement": "若区域分成内部不重叠的有限个可积子区域，则整体积分是各子区域积分之和。",
      "conditions": "公共边界不影响面积积分。",
      "remark": "复杂区域常按交点分段。"
    },
    {
      "name": "面积与体积",
      "statement": "$A(D)=\\iint_D1\\,dA$；当 $f\\ge0$ 时，曲面 $z=f(x,y)$ 下方、$D$ 上方的体积是 $\\iint_D f\\,dA$。",
      "conditions": "区域有界，函数可积。",
      "remark": "若函数变号，积分为带符号体积。"
    }
  ],
  "examples": [
    {
      "title": "例1 三角区域",
      "level": "基础",
      "problem": "计算 $\\iint_D(x+y)dA$，其中 $D=\\{x\\ge0,y\\ge0,x+y\\le1\\}$。",
      "solution": [
        "积分范围为 $0\\le x\\le1,\\ 0\\le y\\le1-x$。",
        "内层积分为 $x(1-x)+(1-x)^2/2=(1-x^2)/2$。",
        "再对 $x$ 从 $0$ 到 $1$ 积分，得到 $1/3$。"
      ],
      "tip": "先画区域，再写累次积分。"
    },
    {
      "title": "例2 极坐标",
      "level": "基础",
      "problem": "求单位圆盘 $x^2+y^2\\le1$ 上 $\\iint_D(x^2+y^2)dA$。",
      "solution": [
        "令 $x=r\\cos\\theta,y=r\\sin\\theta$，范围 $0\\le r\\le1,0\\le\\theta\\le2\\pi$。",
        "积分变成 $\\int_0^{2\\pi}d\\theta\\int_0^1 r^2\\cdot r\\,dr$。",
        "因此结果为 $2\\pi/4=\\pi/2$。"
      ],
      "tip": "极坐标被积函数与面积元各有一个转换。"
    },
    {
      "title": "例3 交换次序",
      "level": "强化",
      "problem": "将 $\\int_0^1dx\\int_x^1 f(x,y)dy$ 改为先对 $x$ 积分。",
      "solution": [
        "区域满足 $0\\le x\\le y\\le1$。",
        "固定 $y$ 时，$0\\le y\\le1$ 且 $0\\le x\\le y$。",
        "因此等于 $\\int_0^1dy\\int_0^y f(x,y)dx$。"
      ],
      "tip": "交换积分次序要重写区域，不只是交换符号。"
    },
    {
      "title": "例4 薄片质心",
      "level": "强化",
      "problem": "均匀三角薄片 $x\\ge0,y\\ge0,x+y\\le1$ 的质心在哪里？",
      "solution": [
        "面积为 $1/2$；对称性给出 $\\bar x=\\bar y$。",
        "$\\iint_Dx\\,dA=\\int_0^1x(1-x)dx=1/6$。",
        "因此 $\\bar x=\\bar y=(1/6)/(1/2)=1/3$。"
      ],
      "tip": "先计算质量，再计算一阶矩。"
    },
    {
      "title": "例5 对称性",
      "level": "强化",
      "problem": "求 $\\iint_{x^2+y^2\\le1}x e^{x^2+y^2}dA$。",
      "solution": [
        "圆盘关于 $y$ 轴对称。",
        "被积函数对 $x$ 是奇函数。",
        "对应点的贡献相消，故积分为 $0$。"
      ],
      "tip": "同时检查区域和被积函数的对称性。"
    }
  ],
  "methods": [
    "画区域并选择方便的积分次序。",
    "圆形区域优先考虑极坐标并乘雅可比因子。",
    "先检查奇偶和区域对称性。",
    "求质心时区分质量与一阶矩。"
  ],
  "pitfalls": [
    "直角坐标边界和极坐标边界不能混写。",
    "极坐标的面积元含 $r$。",
    "变号函数的积分不等于几何体积。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "求单位圆盘的面积。",
      "answer": "$\\pi$",
      "solution": "$\\int_0^{2\\pi}d\\theta\\int_0^1rdr=\\pi$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "求 $\\int_0^1dx\\int_0^2dy$。",
      "answer": "$2$",
      "solution": "内层积分为 $2$，再对长度为 $1$ 的区间积分得 $2$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "求 $\\iint_{[-1,1]^2}xy\\,dA$。",
      "answer": "$0$",
      "solution": "区域关于 $y$ 轴对称，被积函数对 $x$ 为奇函数。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "求 $\\iint_{x^2+y^2\\le4}1\\,dA$。",
      "answer": "$4\\pi$",
      "solution": "极坐标范围 $0\\le r\\le2$，面积为 $2\\pi\\int_0^2rdr=4\\pi$。"
    },
    {
      "no": 5,
      "level": "强化",
      "problem": "求 $\\int_0^1dx\\int_0^x y\\,dy$。",
      "answer": "$1/6$",
      "solution": "先对 $y$ 积分得到 $x^2/2$，再积分得到 $1/6$。"
    }
  ]
};
