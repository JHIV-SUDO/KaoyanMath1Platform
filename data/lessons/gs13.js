export default {
  "id": "gs13",
  "subject": "gaoshu",
  "no": 13,
  "title": "多元函数微分学",
  "subtitle": "第13讲",
  "hours": 6,
  "syllabusRef": "hm5",
  "goal": [
    "理解多元函数极限与连续的概念，会判断二重极限存在性",
    "掌握偏导数、全微分的概念与计算，理清\"可微、偏导存在、连续\"的逻辑关系",
    "熟练掌握多元复合函数与隐函数的求导法则（链式法则、隐函数定理）",
    "掌握方向导数与梯度（数一特有）的计算与关系",
    "会求无条件极值与条件极值（拉格朗日乘数法），解简单最值应用题"
  ],
  "concepts": [
    {
      "name": "二重极限与连续",
      "body": "二重极限 $\\lim\\limits_{(x,y)\\to(x_0,y_0)}f(x,y)=A$ 要求点 $(x,y)$ **以任意方式**趋于 $(x_0,y_0)$ 时函数都趋于 $A$。\n证明极限不存在：找两条不同路径极限不同（如沿 $y=kx$ 得到含 $k$ 的结果）。连续：$\\lim f=f(x_0,y_0)$。多元初等函数在其定义区域内连续。"
    },
    {
      "name": "偏导数",
      "body": "$$\\frac{\\partial z}{\\partial x}=\\lim_{\\Delta x\\to0}\\frac{f(x_0+\\Delta x,y_0)-f(x_0,y_0)}{\\Delta x}$$ 求 $\\partial z/\\partial x$ 时把 $y$ 当常数，对 $x$ 用一元求导法则即可。\n高阶偏导：$\\dfrac{\\partial^2z}{\\partial x\\partial y}$ 表示先 $x$ 后 $y$。**混合偏导连续时相等**（$z_{xy}=z_{yx}$），二阶混合偏导连续与否是经典考点。"
    },
    {
      "name": "全微分与可微",
      "body": "$$dz=\\frac{\\partial z}{\\partial x}dx+\\frac{\\partial z}{\\partial y}dy$$ 若 $\\Delta z-\\left(z_x\\Delta x+z_y\\Delta y\\right)=o(\\rho)$（$\\rho=\\sqrt{\\Delta x^2+\\Delta y^2}$），称 $z$ 可微。\n**逻辑关系**：偏导连续 $\\Rightarrow$ 可微 $\\Rightarrow$ 偏导存在且连续（每个变量方向）；可微 $\\Rightarrow$ 连续。**反向都不成立**！判断可微用定义：算极限 $\\lim_{\\rho\\to0}\\dfrac{\\Delta z-[z_x\\Delta x+z_y\\Delta y]}{\\rho}$ 是否为 0。"
    },
    {
      "name": "复合函数链式法则",
      "body": "全导数：$z=f(u,v)$，$u=u(t),v=v(t)$，则 $\\dfrac{dz}{dt}=\\dfrac{\\partial z}{\\partial u}\\dfrac{du}{dt}+\\dfrac{\\partial z}{\\partial v}\\dfrac{dv}{dt}$（\"连线相乘、分线相加\"）。\n偏导链：$z=f(u,v),u=u(x,y),v=v(x,y)$：$z_x=f_u\\cdot u_x+f_v\\cdot v_x$。\n抽象函数记号要规范：$f_1'$ 表示对第一个位置变量求导，避免与外层变量混淆。"
    },
    {
      "name": "隐函数求导",
      "body": "一个方程 $F(x,y,z)=0$：$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x}{F_z}$，$\\dfrac{\\partial z}{\\partial y}=-\\dfrac{F_y}{F_z}$（$F_z\\ne0$）。\n方程组（如 $\\begin{cases}F(x,y,u,v)=0\\\\G(x,y,u,v)=0\\end{cases}$）：对 $x$ 求导解线性方程组，或用雅可比行列式。核心思想：隐函数显化后再求导。"
    },
    {
      "name": "方向导数与梯度（数一）",
      "body": "方向导数 $\\dfrac{\\partial f}{\\partial l}=f_x\\cos\\alpha+f_y\\cos\\beta+f_z\\cos\\gamma$（$\\mathbf e_l=(\\cos\\alpha,\\cos\\beta,\\cos\\gamma)$ 为单位方向向量），是 $f$ 沿方向 $\\mathbf e_l$ 的变化率。\n梯度 $\\mathbf{grad}\\,f=\\nabla f=(f_x,f_y,f_z)$。**关系**：可微时方向导数存在且 $\\dfrac{\\partial f}{\\partial l}=\\nabla f\\cdot\\mathbf e_l$；梯度方向是增长最快的方向，最大变化率 $|\\nabla f|$；沿等值面法向。"
    },
    {
      "name": "极值与条件极值",
      "body": "极值必要条件：$f_x=f_y=0$（驻点）。二元极值充分条件：$AC-B^2$ 判别（$A=f_{xx},B=f_{xy},C=f_{yy}$）：$>0$ 且 $A>0$ 极小、$A<0$ 极大；$<0$ 非极值；$=0$ 失效需另判。\n条件极值：拉格朗日乘数法，构造 $L=f+\\lambda\\varphi$，解 $L_x=L_y=L_\\lambda=0$。多个约束加多个乘子。"
    }
  ],
  "theorems": [
    {
      "name": "可微的必要条件",
      "statement": "$f$ 在点 $(x_0,y_0)$ 可微 $\\Rightarrow f$ 在该点连续且各偏导存在。",
      "conditions": "",
      "remark": "逆命题均不成立：连续不可微（如 $\\sqrt{x^2+y^2}$ 在原点）、偏导存在不可微（如 $\\dfrac{xy}{x^2+y^2}$ 在原点）反例要熟。"
    },
    {
      "name": "可微的充分条件",
      "statement": "$f_x,f_y$ 在点 $(x_0,y_0)$ 的某邻域内存在且在该点**连续** $\\Rightarrow f$ 在该点可微。",
      "conditions": "偏导连续",
      "remark": "判断可微的实际流程：先求偏导 → 看是否连续（常用初等函数连续性）→ 不连续时用定义验证极限。"
    },
    {
      "name": "混合偏导相等定理",
      "statement": "$z_{xy}$ 与 $z_{yx}$ 都在点 $P$ 连续 $\\Rightarrow z_{xy}(P)=z_{yx}(P)$。",
      "conditions": "混合偏导连续",
      "remark": "考研常用它求待定系数：设含参数的函数满足 $z_{xy}=z_{yx}$ 处处成立，列方程解参数。"
    },
    {
      "name": "隐函数存在定理",
      "statement": "$F(x_0,y_0)=0$，$F_y(x_0,y_0)\\ne0$，$F$ 在邻域内偏导连续 $\\Rightarrow$ 存在唯一的 $y=y(x)$ 使 $y(x_0)=y_0$，且 $\\dfrac{dy}{dx}=-\\dfrac{F_x}{F_y}$。",
      "conditions": "隐函数定理条件",
      "remark": "方程组情形用雅可比行列式 $J=\\dfrac{\\partial(F,G)}{\\partial(u,v)}\\ne0$ 保证 $u,v$ 能表示为 $x,y$ 的函数。"
    },
    {
      "name": "方向导数与偏导的关系",
      "statement": "若函数在一点可微，则沿任意单位方向 $\\mathbf e$ 的方向导数存在且等于 $\\nabla f\\cdot\\mathbf e$。沿所有方向的方向导数存在可推出各偏导数存在，但不一定推出可微。",
      "conditions": "可微",
      "remark": "选择题常考：\"方向导数存在 ⇏ 可微\"、\"偏导存在 ⇏ 方向导数存在（一般方向）\"。"
    },
    {
      "name": "二元极值充分条件",
      "statement": "驻点处记 $A=f_{xx},B=f_{xy},C=f_{yy}$：$AC-B^2>0$ 且 $A>0$（极小）、$A<0$（极大）；$AC-B^2<0$ 非极值；$=0$ 不能判定。",
      "conditions": "二阶偏导连续",
      "remark": "记忆：$\\Delta=AC-B^2$ 像\"判别式\"——$\\Delta>0$ 定性质看 $A$，$\\Delta<0$ 鞍点，$\\Delta=0$ 失效。"
    },
    {
      "name": "拉格朗日乘数法",
      "statement": "求 $f(x,y)$ 在约束 $\\varphi(x,y)=0$ 下的极值：解 $\\begin{cases}f_x+\\lambda\\varphi_x=0\\\\f_y+\\lambda\\varphi_y=0\\\\\\varphi=0\\end{cases}$，候选点中比较目标值。",
      "conditions": "",
      "remark": "实际应用题常由实际意义判定最大/最小（如\"材料一定求最大容积\"），无须二阶判别。闭区域最值 = 内部驻点 + 边界（条件极值）候选点比较。"
    }
  ],
  "examples": [
    {
      "title": "例1 二重极限的存在性",
      "level": "基础",
      "problem": "判断极限 $\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{xy}{x^2+y^2}$ 是否存在。",
      "solution": [
        "沿 $y=kx$：极限 $=\\lim\\limits_{x\\to0}\\dfrac{kx^2}{x^2+k^2x^2}=\\dfrac{k}{1+k^2}$，随 $k$ 变化（$k=0$ 得 0，$k=1$ 得 $\\tfrac12$）。",
        "不同路径极限不同，故**二重极限不存在**。",
        "对比：$\\lim\\dfrac{x^2y}{x^2+y^2}=0$ 存在（$\\left|\\dfrac{x^2y}{x^2+y^2}\\right|\\le|y|\\to0$，夹逼）。"
      ],
      "tip": "\"沿 $y=kx$ 得到含 $k$ 的结果\"是证不存在的标准手法；证存在则常用夹逼或极坐标 $\\left(\\left|f(r,\\theta)\\right|\\le g(r),\\ g\\to0\\right)$。"
    },
    {
      "title": "例2 判断连续性、偏导存在性与可微性",
      "level": "强化",
      "problem": "设 $f(x,y)=\\begin{cases}\\dfrac{xy}{\\sqrt{x^2+y^2}},&(x,y)\\ne(0,0)\\\\0,&(0,0)\\end{cases}$，讨论 $f$ 在原点的连续性、偏导存在性与可微性。",
      "solution": [
        "连续性：$\\left|\\dfrac{xy}{\\sqrt{x^2+y^2}}\\right|\\le\\dfrac{\\frac12(x^2+y^2)}{\\sqrt{x^2+y^2}}=\\tfrac12\\rho\\to0$，故 $\\lim f=0=f(0,0)$，连续。",
        "偏导：$f_x(0,0)=\\lim\\limits_{x\\to0}\\dfrac{f(x,0)-0}{x}=\\lim\\dfrac{0}{x}=0$，同理 $f_y(0,0)=0$，偏导存在。",
        "可微性：检验 $\\lim\\limits_{\\rho\\to0}\\dfrac{\\Delta z-[f_x\\Delta x+f_y\\Delta y]}{\\rho}=\\lim\\dfrac{\\frac{\\Delta x\\Delta y}{\\rho}}{\\rho}=\\lim\\dfrac{\\Delta x\\Delta y}{\\rho^2}$。沿 $y=x$：$=\\dfrac{x^2}{2x^2}=\\tfrac12\\ne0$，不可微。",
        "结论：连续、偏导存在、但**不可微**。"
      ],
      "tip": "可微性判定就是算一个极限：$\\lim\\dfrac{\\Delta z-z_x\\Delta x-z_y\\Delta y}{\\rho}$。此题三概念齐活，是\"概念辨析\"标准题。"
    },
    {
      "title": "例3 复合函数求导（含抽象函数）",
      "level": "强化",
      "problem": "设 $z=f(xy,g(x,y))$，其中 $f$ 与 $g$ 具有所需的连续二阶偏导，求 $z_x$ 与 $z_{xy}$。",
      "solution": [
        "记 $u=xy,v=g(x,y)$，$f_1,f_2$ 表示 $f$ 对第一、第二个变量的偏导。由链式法则 $z_x=yf_1+g_xf_2$。",
        "对 $y$ 求导：$z_{xy}=f_1+y(xf_{11}+g_yf_{12})+g_{xy}f_2+g_x(xf_{21}+g_yf_{22})$。",
        "由 $f_{12}=f_{21}$，得到 $z_{xy}=f_1+xyf_{11}+(yg_y+xg_x)f_{12}+g_xg_yf_{22}+g_{xy}f_2$，各偏导在 $(xy,g(x,y))$ 处取值。"
      ],
      "tip": "抽象复合函数二阶导的规范流程：一阶结果 $f_1',f_2'$ 仍是 $f(u,v)$ 的复合，再对它们用一次链式法则；$f_{12}=f_{21}$ 合并同类项。"
    },
    {
      "title": "例4 隐函数求导（方程组）",
      "level": "强化",
      "problem": "设 $x+y+z=0$ 与 $x^2+y^2+z^2=1$ 在 $z\\ne y$ 的点附近确定隐函数 $z=z(x),y=y(x)$，求 $dz/dx$。",
      "solution": [
        "方程组两边对 $x$ 求导（$y,z$ 都是 $x$ 的函数）：",
        "$$\\begin{cases}1+y'+z'=0\\\\ 2x+2yy'+2zz'=0\\end{cases}$$",
        "从第一式 $y'=-1-z'$ 代入第二式：$x+y(-1-z')+zz'=0\\Rightarrow z'(z-y)=y-x$，故 $\\dfrac{dz}{dx}=\\dfrac{y-x}{z-y}$。"
      ],
      "tip": "对每个方程求导后解线性方程组；$z\\ne y$ 保证相应雅可比行列式非零。"
    },
    {
      "title": "例5 梯度与方向导数",
      "level": "强化",
      "problem": "设 $f(x,y,z)=x^2+y^2+z^2$，点 $P_0(1,1,1)$。求梯度、沿方向 $\\mathbf l=(1,2,2)$ 的方向导数，以及增长最快的方向和最大变化率。",
      "solution": [
        "① $\\nabla f=(2x,2y,2z)$，在 $P_0$：$\\nabla f(P_0)=(2,2,2)$。",
        "② $|\\mathbf l|=\\sqrt{1+4+4}=3$，单位向量 $\\mathbf e_l=\\left(\\tfrac13,\\tfrac23,\\tfrac23\\right)$。$\\dfrac{\\partial f}{\\partial l}=\\nabla f\\cdot\\mathbf e_l=2\\cdot\\tfrac13+2\\cdot\\tfrac23+2\\cdot\\tfrac23=\\dfrac{10}{3}$。",
        "③ 沿梯度方向 $(1,1,1)$ 增长最快，最大变化率 $|\\nabla f|=2\\sqrt3$。"
      ],
      "tip": "方向导数 $=\\nabla f\\cdot\\mathbf e_l$（$\\mathbf e_l$ 必须单位化！忘除模长是最高频错误）。最大增长沿梯度，速率为 $|\\nabla f|$。"
    },
    {
      "title": "例6 条件极值（拉格朗日乘数法）",
      "level": "冲刺",
      "problem": "求表面积一定（设为 $a^2$）时长方体体积的最大值。",
      "solution": [
        "设三棱长 $x,y,z>0$，约束 $2(xy+yz+zx)=a^2$，目标 $V=xyz$。",
        "构造 $L=xyz-\\lambda\\left(xy+yz+zx-\\dfrac{a^2}{2}\\right)$，令偏导为零：",
        "$$yz=\\lambda(y+z),\\quad xz=\\lambda(x+z),\\quad xy=\\lambda(x+y)$$",
        "三式两两相减：$yz-xz=\\lambda(y-x)\\Rightarrow (y-x)(z-\\lambda)=0$；同理得 $x=y=z$（容积最大不可能 $z=\\lambda$ 退化情形，可验证）。",
        "代入约束：$6x^2=a^2\\Rightarrow x=\\dfrac{a}{\\sqrt6}$，$V_{\\max}=\\left(\\dfrac{a}{\\sqrt6}\\right)^3=\\dfrac{a^3}{6\\sqrt6}$（正方体）。"
      ],
      "tip": "拉格朗日方程组常用\"两两相减提公因式\"技巧（$x=y=z$ 的对称解）；应用题由实际意义取最值即可，不必二阶判别。对称约束的最优解常是对称点。"
    }
  ],
  "methods": [
    "证极限不存在：找两条路径极限不同；证存在：夹逼/极坐标 + $\\rho\\to0$。",
    "可微判定：先求偏导，连续则可微；不连续则用定义算 $\\lim\\dfrac{\\Delta z-z_x\\Delta x-z_y\\Delta y}{\\rho}$。",
    "抽象复合二阶导：一阶结果仍是复合函数，逐层链式 + 合并 $f_{12}=f_{21}$。",
    "隐函数：一个方程用 $-F_x/F_z$；方程组求导解线性方程组。",
    "方向导数：单位化方向向量再点乘梯度；最速下降用负梯度。",
    "条件极值：拉格朗日乘数法，对称约束用相减技巧找对称解。",
    "闭区域最值：内部驻点与边界候选点（条件极值）逐一代入比较。"
  ],
  "pitfalls": [
    "方向向量必须单位化再点乘；$\\mathbf l=(1,2,2)$ 直接点乘是错的。",
    "\"偏导存在\"推不出\"连续\"，\"连续\"推不出\"偏导存在\"——四个概念两两关系要画清楚。",
    "二元极值判别中 $B=f_{xy}$（混合偏导），别取成 $f_{xx}$。",
    "拉格朗日乘数法的候选点必须代回目标函数比较，不能只解方程。",
    "抽象函数 $f(xy, x+y)$ 求导时 $f_1',f_2'$ 对应位置变量，与外层变量 $x,y$ 无关，混写必错。",
    "隐函数求导中把 $y$ 当常数（对 $x$ 求导时 $y$ 若是隐函数则不能当常数）——先明确谁是自变量谁是谁的函数。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "求 $z=x^2y+\\sin(xy)$ 的两个偏导数与全微分。",
      "answer": "$z_x=2xy+y\\cos(xy),\\ z_y=x^2+x\\cos(xy)$；$dz=z_xdx+z_ydy$",
      "solution": "对 $x$ 求导把 $y$ 视为常数：$z_x=2xy+y\\cos(xy)$；对 $y$：$z_y=x^2+x\\cos(xy)$。全微分为二者与 $dx,dy$ 的组合。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "设 $z=u^2v$，$u=x\\cos y$，$v=x\\sin y$，求 $\\dfrac{\\partial z}{\\partial x}$。",
      "answer": "$z_x=3x^2\\sin y\\cos^2y$",
      "solution": "直接代入得 $z=(x\\cos y)^2(x\\sin y)=x^3\\cos^2y\\sin y$，将 $y$ 视为常数求导，得到 $z_x=3x^2\\cos^2y\\sin y$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "设 $z=f(2x-y)+g(x,xy)$，其中 $f$ 二阶可导，$g$ 有连续二阶偏导，求 $\\dfrac{\\partial^2 z}{\\partial x \\partial y}$。",
      "answer": "$-2f''(2x-y)+g_2+xg_{12}+xyg_{22}$",
      "solution": "先求 $z_x=2f'(2x-y)+g_1+yg_2$，再对 $y$ 求导：$z_{xy}=-2f''(2x-y)+xg_{12}+g_2+xyg_{22}$，其中 $g$ 的偏导在 $(x,xy)$ 处取值。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "设 $z=z(x,y)$ 由 $x^2+y^2+z^2=4z$ 确定，求 $\\dfrac{\\partial z}{\\partial x}$ 与 $\\dfrac{\\partial^2z}{\\partial x^2}$。",
      "answer": "$z_x=\\dfrac{x}{2-z}$；$z_{xx}=\\dfrac{(2-z)^2+x^2}{(2-z)^3}$",
      "solution": "$F=x^2+y^2+z^2-4z$，$F_x=2x$，$F_z=2z-4$，$z_x=-\\dfrac{F_x}{F_z}=\\dfrac{x}{2-z}$。再求导：$z_{xx}=\\dfrac{(2-z)+xz_x}{(2-z)^2}=\\dfrac{2-z+\\frac{x^2}{2-z}}{(2-z)^2}=\\dfrac{(2-z)^2+x^2}{(2-z)^3}$。"
    },
    {
      "no": 5,
      "level": "冲刺",
      "problem": "求函数 $f(x,y)=x^3+y^3-3xy$ 的极值。",
      "answer": "$f(1,1)=-1$ 为极小值；$(0,0)$ 不是极值点",
      "solution": "驻点：$3x^2-3y=0,\\ 3y^2-3x=0\\Rightarrow y=x^2,\\ x=y^2\\Rightarrow x^4=x\\Rightarrow x=0,1$。驻点 $(0,0),(1,1)$。$A=6x,B=-3,C=6y$。$(0,0)$：$AC-B^2=-9<0$，非极值。$(1,1)$：$AC-B^2=36-9=27>0$，$A=6>0$，极小值 $f(1,1)=1+1-3=-1$。"
    },
    {
      "no": 6,
      "level": "冲刺",
      "problem": "求内接于半径为 $R$ 的球面且体积最大的长方体的尺寸与最大体积。",
      "answer": "棱长均为 $\\dfrac{2R}{\\sqrt3}$，$V_{max}=\\dfrac{8R^3}{3\\sqrt3}$",
      "solution": "设长方体在第一卦限的顶点 $(x,y,z)$，约束 $x^2+y^2+z^2=R^2$，$V=8xyz$。拉格朗日：$8yz=2\\lambda x,\\ 8xz=2\\lambda y,\\ 8xy=2\\lambda z$，两两相除得 $x=y=z=\\dfrac{R}{\\sqrt3}$。$V_{max}=8\\cdot\\dfrac{R^3}{3\\sqrt3}=\\dfrac{8R^3}{3\\sqrt3}$。"
    }
  ]
};
