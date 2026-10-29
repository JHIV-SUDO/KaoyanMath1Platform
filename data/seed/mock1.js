export default {
  "id": "mock1",
  "title": "数学一 全真模拟卷（一）",
  "duration": 180,
  "sections": [
    {
      "type": "选择",
      "scoreEach": 5,
      "problems": [
        {
          "no": 1,
          "level": "强化",
          "problem": "$\\lim_{x\\to0}(\\sin 3x-3x)/x^3$ 等于",
          "options": [
            "(A) $-9/2$",
            "(B) $-3/2$",
            "(C) $0$",
            "(D) $9/2$"
          ],
          "answer": "A",
          "solution": "$\\sin(3x)=3x-(3x)^3/6+o(x^3)$，所以极限为 $-27/6=-9/2$。"
        },
        {
          "no": 2,
          "level": "基础",
          "problem": "函数 $f(x)=\\log(1+x^2)$ 在 $x=1$ 处的导数是",
          "options": [
            "(A) $0$",
            "(B) $1$",
            "(C) $2$",
            "(D) $1/2$"
          ],
          "answer": "B",
          "solution": "$f'(x)=2x/(1+x^2)$，所以 $f'(1)=1$。"
        },
        {
          "no": 3,
          "level": "强化",
          "problem": "函数 $f(x)=x^3-3x$ 的局部极大值为",
          "options": [
            "(A) $-2$",
            "(B) $-1$",
            "(C) $2$",
            "(D) $3$"
          ],
          "answer": "C",
          "solution": "$f'(x)=3(x-1)(x+1)$，在 $x=-1$ 处由正变负，极大值 $f(-1)=2$。"
        },
        {
          "no": 4,
          "level": "基础",
          "problem": "$\\int_0^1 xe^{x^2}dx$ 等于",
          "options": [
            "(A) $e-1$",
            "(B) $1/2$",
            "(C) $e/2$",
            "(D) $(e-1)/2$"
          ],
          "answer": "D",
          "solution": "令 $u=x^2$，则积分为 $\\frac12\\int_0^1e^u du=(e-1)/2$。"
        },
        {
          "no": 5,
          "level": "强化",
          "problem": "$\\sum_{n=1}^{\\infty}1/[n(n+1)]$ 的和为",
          "options": [
            "(A) $1$",
            "(B) $1/2$",
            "(C) $2$",
            "(D) 发散"
          ],
          "answer": "A",
          "solution": "$1/[n(n+1)]=1/n-1/(n+1)$，部分和为 $1-1/(N+1)$，极限为 $1$。"
        },
        {
          "no": 6,
          "level": "基础",
          "problem": "$A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$，则 $|A|$ 为",
          "options": [
            "(A) $2$",
            "(B) $-2$",
            "(C) $5$",
            "(D) $-5$"
          ],
          "answer": "B",
          "solution": "$|A|=1\\cdot4-2\\cdot3=-2$。"
        },
        {
          "no": 7,
          "level": "强化",
          "problem": "$A$ 是 $3\\times4$ 矩阵且 $r(A)=2$，则齐次方程组 $Ax=0$ 的解空间维数是",
          "options": [
            "(A) $1$",
            "(B) $3$",
            "(C) $2$",
            "(D) $4$"
          ],
          "answer": "C",
          "solution": "未知量个数为 $4$，由秩与零空间维数关系得 $4-2=2$。"
        },
        {
          "no": 8,
          "level": "基础",
          "problem": "$A,B$ 独立，$P(A)=0.4,P(B)=0.5$，则 $P(A\\cup B)$ 为",
          "options": [
            "(A) $0.2$",
            "(B) $0.5$",
            "(C) $0.9$",
            "(D) $0.7$"
          ],
          "answer": "D",
          "solution": "$P(AB)=0.4\\cdot0.5=0.2$，故并集概率为 $0.4+0.5-0.2=0.7$。"
        },
        {
          "no": 9,
          "level": "基础",
          "problem": "若 $D(X)=3$，则 $D(2X+1)$ 等于",
          "options": [
            "(A) $12$",
            "(B) $7$",
            "(C) $6$",
            "(D) $3$"
          ],
          "answer": "A",
          "solution": "方差不受常数平移影响，且 $D(aX+b)=a^2D(X)=12$。"
        },
        {
          "no": 10,
          "level": "强化",
          "problem": "$X,Y$ 相互独立且都服从 $U(0,1)$，则 $P(X<Y)$ 等于",
          "options": [
            "(A) $1/4$",
            "(B) $1/2$",
            "(C) $3/4$",
            "(D) $1$"
          ],
          "answer": "B",
          "solution": "单位正方形被 $x=y$ 平分，连续分布下相等的概率为零，因此 $P(X<Y)=1/2$。"
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
          "problem": "计算 $\\int_0^\\pi\\sin x\\,dx$。请填整数。",
          "answer": "2",
          "solution": "积分等于 $[-\\cos x]_0^\\pi=2$。"
        },
        {
          "no": 12,
          "level": "强化",
          "problem": "由 $x^2+y^2=5$ 确定的曲线在 $(1,2)$ 处的导数 $dy/dx$ 为多少？请填最简分数。",
          "answer": "-1/2",
          "solution": "隐式求导得到 $y'=-x/y$，代入 $(1,2)$ 得 $-1/2$。"
        },
        {
          "no": 13,
          "level": "强化",
          "problem": "设单位圆盘 $D=\\{x^2+y^2\\le1\\}$，$\\iint_D(x^2+y^2)dA=k\\pi$。求 $k$，请填最简分数。",
          "answer": "1/2",
          "solution": "极坐标积分为 $\\int_0^{2\\pi}d\\theta\\int_0^1r^3dr=\\pi/2$，所以 $k=1/2$。"
        },
        {
          "no": 14,
          "level": "基础",
          "problem": "矩阵 $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ 的较大特征值是多少？请填整数。",
          "answer": "3",
          "solution": "特征多项式为 $(2-\\lambda)^2-1$，两根为 $3,1$。"
        },
        {
          "no": 15,
          "level": "基础",
          "problem": "求 $\\begin{vmatrix}1&0&1\\\\0&1&1\\\\1&1&0\\end{vmatrix}$。请填整数。",
          "answer": "-2",
          "solution": "按首行展开得 $1(0-1)+1(0-1)=-2$。"
        },
        {
          "no": 16,
          "level": "强化",
          "problem": "若 $X$ 服从参数为 $\\lambda$ 的指数分布，且 $E(X)=2$，求 $\\lambda$。请填最简分数。",
          "answer": "1/2",
          "solution": "指数分布的期望为 $1/\\lambda$，因此 $\\lambda=1/2$。"
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
          "problem": "第一象限内的矩形一顶点为原点，对角顶点 $(x,y)$ 在椭圆 $x^2+4y^2=4$ 上。求矩形面积的最大值及取到该值时的 $x,y$。",
          "answer": "最大面积 $1$；$x=\\sqrt2,y=1/\\sqrt2$。",
          "solution": "令 $u=x,v=2y$，则 $u,v\\ge0$ 且 $u^2+v^2=4$。由 $(u-v)^2\\ge0$，得 $2uv\\le4$，故 $xy=uv/2\\le1$。当 $u=v=\\sqrt2$ 时取等号，因而 $x=\\sqrt2,y=1/\\sqrt2$。"
        },
        {
          "no": 18,
          "score": 12,
          "level": "强化",
          "problem": "设 $D$ 由 $y=x^2$ 与 $y=x$ 围成，求 $\\iint_D(x+y)dA$。",
          "answer": "$3/20$",
          "solution": "两曲线交于 $x=0,1$，故 $D=\\{0\\le x\\le1,x^2\\le y\\le x\\}$。先对 $y$ 积分得 $x(x-x^2)+(x^2-x^4)/2=3x^2/2-x^3-x^4/2$；再积分得 $1/2-1/4-1/10=3/20$。"
        },
        {
          "no": 19,
          "score": 12,
          "level": "强化",
          "problem": "求初值问题 $y''-3y'+2y=e^x$，$y(0)=0,y'(0)=0$ 的解。",
          "answer": "$y=e^{2x}-(1+x)e^x$",
          "solution": "齐次特征根为 $1,2$，齐次解为 $C_1e^x+C_2e^{2x}$。右端与 $e^x$ 共振，设特解 $Axe^x$，代入得到 $A=-1$。通解为 $C_1e^x+C_2e^{2x}-xe^x$。初值给 $C_1+C_2=0$、$C_1+2C_2-1=0$，故 $C_1=-1,C_2=1$。"
        },
        {
          "no": 20,
          "score": 12,
          "level": "强化",
          "problem": "$L$ 是圆 $x^2+y^2=4$ 的逆时针方向边界，计算 $\\oint_L(-y\\,dx+x\\,dy)$。",
          "answer": "$8\\pi$",
          "solution": "由格林公式，取 $P=-y,Q=x$，则 $Q_x-P_y=2$。圆盘面积为 $4\\pi$，故积分为 $2\\cdot4\\pi=8\\pi$。逆时针方向与格林公式的正向一致。"
        },
        {
          "no": 21,
          "score": 12,
          "level": "强化",
          "problem": "对称矩阵 $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$。求特征值并找正交矩阵 $Q$ 使 $Q^TAQ$ 为对角矩阵。",
          "answer": "特征值为 $3,1$；可取 $Q=2^{-1/2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$，$Q^TAQ=\\operatorname{diag}(3,1)$。",
          "solution": "特征方程 $(2-\\lambda)^2-1=0$ 给出 $3,1$。相应特征向量可取 $(1,1)^T$ 和 $(1,-1)^T$，它们正交且长度均为 $\\sqrt2$。单位化后按列构成 $Q$，即可得到所列对角化结果。"
        },
        {
          "no": 22,
          "score": 12,
          "level": "强化",
          "problem": "$X,Y$ 相互独立且均服从 $U(0,1)$，令 $Z=\\max(X,Y)$。求 $Z$ 的分布函数、期望和 $P(Z<1/2)$。",
          "answer": "$F_Z(z)=0$（$z\\le0$），$z^2$（$0<z<1$），$1$（$z\\ge1$）；$E(Z)=2/3$，$P(Z<1/2)=1/4$。",
          "solution": "对 $0<z<1$，由独立性 $F_Z(z)=P(X\\le z,Y\\le z)=z^2$，区间外按取值范围补齐。密度 $f_Z(z)=2z$（$0<z<1$），所以 $E(Z)=\\int_0^1z\\cdot2z\\,dz=2/3$。最后 $P(Z<1/2)=(1/2)^2=1/4$。"
        }
      ]
    }
  ]
};
