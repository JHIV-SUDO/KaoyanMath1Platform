export default {
  "id": "gs04",
  "subject": "gaoshu",
  "no": 4,
  "title": "一元函数微分学的计算",
  "subtitle": "第4讲",
  "hours": 6,
  "syllabusRef": "hm2",
  "goal": [
    "掌握基本求导公式和链式法则",
    "计算隐函数、参数方程与反函数导数",
    "处理高阶导数和对数求导"
  ],
  "concepts": [
    {
      "name": "求导基本法则",
      "body": "常数、和、乘积及商分别按相应法则求导。例如 $(uv)'=u'v+uv'$；商的分母在考察点必须非零。"
    },
    {
      "name": "复合与链式法则",
      "body": "若 $y=f(u),u=g(x)$，则 $dy/dx=f'(g(x))g'(x)$。多层复合应由外到内逐层求导，注意每层的自变量。"
    },
    {
      "name": "隐函数求导",
      "body": "方程 $F(x,y)=0$ 在适当条件下确定 $y(x)$。对两侧关于 $x$ 求导时，$y$ 也随 $x$ 变化，得到 $F_x+F_y y'=0$。"
    },
    {
      "name": "参数和反函数",
      "body": "若 $x=x(t),y=y(t)$ 且 $x'(t)\\ne0$，则 $dy/dx=y'(t)/x'(t)$。反函数求导是同一思想：互换自变量和因变量，再取导数倒数。"
    },
    {
      "name": "对数求导和高阶导",
      "body": "对正函数的乘积、商或变指数幂，可先取对数，再用链式法则。高阶导数可重复求导，也可利用标准形式、归纳或莱布尼茨公式。"
    }
  ],
  "theorems": [
    {
      "name": "基本导数",
      "statement": "$(x^\\alpha)'=\\alpha x^{\\alpha-1}$，$(e^x)'=e^x$，$(\\log x)'=1/x$，$(\\sin x)'=\\cos x$，$(\\cos x)'=-\\sin x$。",
      "conditions": "在各函数及导数有定义的区间内使用。",
      "remark": "幂函数的定义域随实指数变化。"
    },
    {
      "name": "商法则",
      "statement": "$(u/v)'=(u'v-uv')/v^2$。",
      "conditions": "$u,v$ 可导且 $v\\ne0$。",
      "remark": "分子次序不要颠倒。"
    },
    {
      "name": "链式法则",
      "statement": "$(f\\circ g)'(x)=f'(g(x))g'(x)$。",
      "conditions": "内函数在该点可导，外函数在对应点可导。",
      "remark": "不要漏掉内层导数。"
    },
    {
      "name": "隐函数导数",
      "statement": "$y'=-F_x/F_y$。",
      "conditions": "$F$ 在邻域具有连续偏导且所求点 $F_y\\ne0$。",
      "remark": "二阶导数对第一次求导所得等式继续求导。"
    },
    {
      "name": "参数二阶导数",
      "statement": "$d^2y/dx^2=[d(y'/x')/dt]/x'$。",
      "conditions": "$x,y$ 至少二阶可导且 $x'\\ne0$，右侧撇号对 $t$ 求导。",
      "remark": "二阶导数不是 $y''(t)/x''(t)$。"
    },
    {
      "name": "莱布尼茨公式",
      "statement": "$(uv)^{(n)}=\\sum_{k=0}^n {n\\choose k}u^{(k)}v^{(n-k)}$。",
      "conditions": "两函数具有所需的各阶导数。",
      "remark": "当一个因子是低次多项式时，许多项为零。"
    }
  ],
  "examples": [
    {
      "title": "例1 链式求导",
      "level": "基础",
      "problem": "求 $y=\\sin(x^2)$ 的导数。",
      "solution": [
        "外层 $\\sin u$ 的导数为 $\\cos u$，内层 $u=x^2$ 的导数为 $2x$。",
        "由链式法则 $y'=\\cos(x^2)\\cdot2x$。",
        "结果为 $2x\\cos(x^2)$。"
      ],
      "tip": "保留内层表达式直到全部求导完成。"
    },
    {
      "title": "例2 隐函数",
      "level": "强化",
      "problem": "由 $x^2+y^2=5$ 确定的曲线，在 $y\\ne0$ 处求 $dy/dx$。",
      "solution": [
        "对两边关于 $x$ 求导：$2x+2yy'=0$。",
        "由 $y\\ne0$ 解得 $y'=-x/y$。",
        "该式适用于满足原方程且 $y\\ne0$ 的点。"
      ],
      "tip": "隐函数求导必须把 $y$ 看作 $x$ 的函数。"
    },
    {
      "title": "例3 参数曲线",
      "level": "强化",
      "problem": "$x=t^2,y=t^3$，求 $t\\ne0$ 时的二阶导数。",
      "solution": [
        "$dy/dx=(3t^2)/(2t)=3t/2$。",
        "对 $t$ 求导为 $3/2$，再除以 $dx/dt=2t$。",
        "因此 $d^2y/dx^2=3/(4t)$。"
      ],
      "tip": "每次从对 $t$ 求导转换为对 $x$ 求导都要除以 $x'(t)$。"
    },
    {
      "title": "例4 对数求导",
      "level": "强化",
      "problem": "求 $y=x^x$ 在 $x>0$ 的导数。",
      "solution": [
        "取对数得 $\\log y=x\\log x$。",
        "两边求导：$y'/y=\\log x+1$。",
        "所以 $y'=x^x(1+\\log x)$。"
      ],
      "tip": "变指数幂适合先取对数。"
    }
  ],
  "methods": [
    "复合函数按外层到内层逐层求导。",
    "隐函数先求导，再代入给定点。",
    "参数曲线二阶导数需再次除以参数的横坐标导数。",
    "乘积、商或变指数幂可考虑对数求导。"
  ],
  "pitfalls": [
    "隐函数公式的分母必须非零。",
    "对数求导需先确定所取对数有意义。",
    "参数求导不能用二阶参数导数直接相除。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "求 $(\\log(1+x^2))'$。",
      "answer": "$2x/(1+x^2)$",
      "solution": "应用链式法则得到 $(1+x^2)^{-1}\\cdot2x$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "求 $(e^{2x}\\cos x)'$。",
      "answer": "$e^{2x}(2\\cos x-\\sin x)$",
      "solution": "乘积法则给出 $2e^{2x}\\cos x-e^{2x}\\sin x$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "若 $x+y+e^y=0$，求 $y'$。",
      "answer": "$-1/(1+e^y)$",
      "solution": "隐式求导得 $1+y'+e^y y'=0$，因 $1+e^y>0$，解得结论。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "求 $x^2e^x$ 的二阶导数。",
      "answer": "$e^x(x^2+4x+2)$",
      "solution": "第一次求导为 $e^x(x^2+2x)$，再次用乘积法则得到所示结果。"
    }
  ]
};
