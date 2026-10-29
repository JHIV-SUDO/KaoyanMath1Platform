export default {
  "id": "mock2",
  "title": "数学一 全真模拟卷（二）",
  "duration": 180,
  "sections": [
    {
      "type": "选择",
      "scoreEach": 5,
      "problems": [
        {
          "no": 1,
          "level": "强化",
          "problem": "$\\lim_{x\\to0}(e^x-1-x-x^2/2)/x^3$ 等于",
          "options": [
            "(A) $1/2$",
            "(B) $1/3$",
            "(C) $1/6$",
            "(D) $0$"
          ],
          "answer": "C",
          "solution": "泰勒展开 $e^x=1+x+x^2/2+x^3/6+o(x^3)$，故极限为 $1/6$。"
        },
        {
          "no": 2,
          "level": "强化",
          "problem": "函数 $f(x)=\\log x/x$（$x>0$）的最大值为",
          "options": [
            "(A) $e$",
            "(B) $1$",
            "(C) $0$",
            "(D) $1/e$"
          ],
          "answer": "D",
          "solution": "$f'(x)=(1-\\log x)/x^2$，在 $x=e$ 前正后负，最大值为 $1/e$。"
        },
        {
          "no": 3,
          "level": "强化",
          "problem": "设 $F(x)=\\int_x^{x^2}\\cos(t^2)dt$，则 $F'(1)$ 为",
          "options": [
            "(A) $\\cos1$",
            "(B) $2\\cos1$",
            "(C) $0$",
            "(D) $-\\cos1$"
          ],
          "answer": "A",
          "solution": "$F'(x)=2x\\cos(x^4)-\\cos(x^2)$，代入 $x=1$ 得 $\\cos1$。"
        },
        {
          "no": 4,
          "level": "强化",
          "problem": "反常积分 $\\int_0^\\infty xe^{-x}dx$ 的值为",
          "options": [
            "(A) $0$",
            "(B) $1$",
            "(C) $2$",
            "(D) 发散"
          ],
          "answer": "B",
          "solution": "分部积分得 $\\int_0^Rxe^{-x}dx=1-(R+1)e^{-R}$，令 $R\\to\\infty$ 得 $1$。"
        },
        {
          "no": 5,
          "level": "强化",
          "problem": "级数 $\\sum_{n=1}^\\infty(-1)^{n-1}/n$",
          "options": [
            "(A) 绝对收敛",
            "(B) 发散",
            "(C) 条件收敛",
            "(D) 通项不趋于零"
          ],
          "answer": "C",
          "solution": "由莱布尼茨判别法收敛；其绝对值级数为发散的调和级数，故条件收敛。"
        },
        {
          "no": 6,
          "level": "基础",
          "problem": "矩阵 $\\begin{pmatrix}1&t\\\\t&1\\end{pmatrix}$ 不可逆的条件是",
          "options": [
            "(A) $t=\\pm1$",
            "(B) $t=0$",
            "(C) $t=1$",
            "(D) $t=-1$"
          ],
          "answer": "A",
          "solution": "行列式为 $1-t^2$，不可逆当且仅当 $t=\\pm1$。"
        },
        {
          "no": 7,
          "level": "基础",
          "problem": "矩阵 $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ 的较小特征值为",
          "options": [
            "(A) $0$",
            "(B) $2$",
            "(C) $3$",
            "(D) $1$"
          ],
          "answer": "D",
          "solution": "特征方程 $(2-\\lambda)^2-1=0$ 的根为 $1,3$，较小者为 $1$。"
        },
        {
          "no": 8,
          "level": "基础",
          "problem": "若 $P(A)=0.4,P(B|A)=0.3$，则 $P(AB)$ 为",
          "options": [
            "(A) $0.7$",
            "(B) $0.12$",
            "(C) $0.1$",
            "(D) $0.3$"
          ],
          "answer": "B",
          "solution": "乘法公式给出 $P(AB)=P(A)P(B|A)=0.12$。"
        },
        {
          "no": 9,
          "level": "强化",
          "problem": "若 $X\\sim B(4,1/2)$，则 $P(X=2)$ 为",
          "options": [
            "(A) $1/4$",
            "(B) $1/2$",
            "(C) $3/8$",
            "(D) $1/8$"
          ],
          "answer": "C",
          "solution": "二项分布公式给出 $\\binom42(1/2)^4=6/16=3/8$。"
        },
        {
          "no": 10,
          "level": "强化",
          "problem": "$X,Y$ 相互独立且都服从 $U(0,1)$，则 $P(X+Y\\le1)$ 为",
          "options": [
            "(A) $1/2$",
            "(B) $1/4$",
            "(C) $3/4$",
            "(D) $1$"
          ],
          "answer": "A",
          "solution": "区域 $x+y\\le1$ 占单位正方形面积的一半，所以概率为 $1/2$。"
        }
      ]
    },
    {
      "type": "填空",
      "scoreEach": 5,
      "problems": [
        {
          "no": 11,
          "level": "基础",
          "problem": "求 $\\lim_{x\\to0}(1-\\cos2x)/x^2$。请填整数。",
          "answer": "2",
          "solution": "$1-\\cos2x\\sim(2x)^2/2=2x^2$，故极限为 $2$。"
        },
        {
          "no": 12,
          "level": "强化",
          "problem": "求 $\\int_0^1x(1+x^2)^2dx$。请填最简分数。",
          "answer": "7/6",
          "solution": "令 $u=1+x^2$，结果为 $\\frac12\\int_1^2u^2du=(8-1)/6=7/6$。"
        },
        {
          "no": 13,
          "level": "强化",
          "problem": "单位球体上半部分的体积为 $k\\pi$，求 $k$。请填最简分数。",
          "answer": "2/3",
          "solution": "单位球体体积为 $4\\pi/3$，上半球占一半，所以 $k=2/3$。"
        },
        {
          "no": 14,
          "level": "基础",
          "problem": "矩阵 $\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ 的秩是多少？请填整数。",
          "answer": "1",
          "solution": "矩阵非零，两行相同，因此秩为 $1$。"
        },
        {
          "no": 15,
          "level": "基础",
          "problem": "方程组 $x+y=3,x-y=1$ 的解中，$x$ 是多少？请填整数。",
          "answer": "2",
          "solution": "两式相加得 $2x=4$，所以 $x=2$。"
        },
        {
          "no": 16,
          "level": "强化",
          "problem": "若 $E(X)=1,D(X)=2$，求 $E(X^2)$。请填整数。",
          "answer": "3",
          "solution": "由 $D(X)=E(X^2)-[E(X)]^2$ 得 $E(X^2)=2+1=3$。"
        }
      ]
    },
    {
      "type": "解答",
      "problems": [
        {
          "no": 17,
          "score": 10,
          "level": "强化",
          "problem": "对 $x>-1$，证明 $x-\\log(1+x)\\ge0$，并求 $\\lim_{x\\to0}[x-\\log(1+x)]/x^2$。",
          "answer": "不等式成立，等号仅在 $x=0$；极限为 $1/2$。",
          "solution": "令 $g(x)=x-\\log(1+x)$，则 $g'(x)=x/(1+x)$。在 $(-1,0)$ 上递减，在 $(0,\\infty)$ 上递增，所以 $g$ 的全局最小值为 $g(0)=0$。又 $\\log(1+x)=x-x^2/2+o(x^2)$，故极限为 $1/2$。"
        },
        {
          "no": 18,
          "score": 12,
          "level": "强化",
          "problem": "设均匀薄片区域 $D$ 由 $y=x^2$ 与 $y=2x$ 围成，求面积及其形心坐标。",
          "answer": "面积 $4/3$，形心 $(1,8/5)$。",
          "solution": "交点对应 $x=0,2$，区域为 $0\\le x\\le2,x^2\\le y\\le2x$。面积 $A=\\int_0^2(2x-x^2)dx=4/3$。关于 $y$ 轴的一阶矩 $\\int_0^2x(2x-x^2)dx=4/3$，故 $\\bar x=1$；关于 $x$ 轴的一阶矩 $\\frac12\\int_0^2[(2x)^2-x^4]dx=32/15$，故 $\\bar y=(32/15)/(4/3)=8/5$。"
        },
        {
          "no": 19,
          "score": 12,
          "level": "强化",
          "problem": "解初值问题 $y''+y=\\sin x$，$y(0)=0,y'(0)=0$。",
          "answer": "$y=(\\sin x-x\\cos x)/2$",
          "solution": "齐次解为 $C_1\\cos x+C_2\\sin x$。右端与齐次解共振，试特解 $-x\\cos x/2$，代入可得 $y_p''+y_p=\\sin x$。由 $y(0)=0$ 得 $C_1=0$，由 $y'(0)=0$ 得 $C_2=1/2$。"
        },
        {
          "no": 20,
          "score": 12,
          "level": "冲刺",
          "problem": "求幂级数 $\\sum_{n=1}^\\infty x^n/[n(n+1)]$ 的收敛域，并在 $|x|<1$ 求和函数。",
          "answer": "收敛域为 $[-1,1]$；$x\\ne0$ 时和为 $1+(1/x-1)\\log(1-x)$，$x=0$ 时和为 $0$。",
          "solution": "比值法给收敛半径 $1$。当 $x=\\pm1$，绝对值级数均由 $\\sum1/[n(n+1)]$ 收敛，因此端点均包含。利用 $1/[n(n+1)]=1/n-1/(n+1)$ 和 $\\sum_{n\\ge1}x^n/n=-\\log(1-x)$，相减可得所列和函数；$x=0$ 由原级数直接得到 $0$。"
        },
        {
          "no": 21,
          "score": 12,
          "level": "强化",
          "problem": "对实对称矩阵 $A=\\begin{pmatrix}3&0&0\\\\0&2&1\\\\0&1&2\\end{pmatrix}$，求特征值和一组标准正交特征向量。",
          "answer": "特征值为 $3,3,1$；对应可取 $(1,0,0)^T$、$(0,1,1)^T/\\sqrt2$、$(0,1,-1)^T/\\sqrt2$。",
          "solution": "矩阵由标量块 $3$ 和 $2\\times2$ 块 $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ 组成。后者特征值为 $3,1$，特征向量分别为 $(1,1)^T,(1,-1)^T$。将其嵌入后两个坐标并单位化，与 $(1,0,0)^T$ 组成标准正交组。"
        },
        {
          "no": 22,
          "score": 12,
          "level": "强化",
          "problem": "$X,Y$ 独立且均服从参数为 $1$ 的指数分布，令 $T=\\min(X,Y)$。求 $T$ 的分布、$E(T)$ 和 $P(X<Y)$。",
          "answer": "$T\\sim E(2)$，$E(T)=1/2$，$P(X<Y)=1/2$。",
          "solution": "当 $t\\ge0$，$P(T>t)=P(X>t,Y>t)=e^{-t}e^{-t}=e^{-2t}$，因此 $T$ 的分布函数为 $1-e^{-2t}$，$t<0$ 时为 $0$，即参数为 $2$ 的指数分布，期望 $1/2$。由独立同分布对称性及连续性，$P(X<Y)=P(Y<X)=1/2$。"
        }
      ]
    }
  ]
};
