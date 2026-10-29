export default {
  "id": "gs18",
  "subject": "gaoshu",
  "no": 18,
  "title": "多元函数积分学",
  "subtitle": "第18讲",
  "hours": 8,
  "syllabusRef": "hm6",
  "goal": [
    "使用直角、柱面和球坐标计算三重积分",
    "区分两类曲线与曲面积分及方向",
    "运用格林、高斯和斯托克斯公式"
  ],
  "concepts": [
    {
      "name": "三重积分",
      "body": "$\\iiint_\\Omega f\\,dV$ 由空间小体积上的加权和取极限得到。密度为 $\\rho$ 时质量为 $\\iiint_\\Omega\\rho\\,dV$；若 $f=1$，积分给出区域体积。"
    },
    {
      "name": "柱面与球坐标",
      "body": "柱面坐标 $x=r\\cos\\theta,y=r\\sin\\theta,z=z$，体积元为 $r\\,dr\\,d\\theta\\,dz$。球坐标取 $x=\\rho\\sin\\varphi\\cos\\theta,y=\\rho\\sin\\varphi\\sin\\theta,z=\\rho\\cos\\varphi$，其中 $\\rho\\ge0,0\\le\\varphi\\le\\pi$，体积元为 $\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$。"
    },
    {
      "name": "第一类曲线积分",
      "body": "$\\int_L f\\,ds$ 对弧长积分，与曲线取向无关。若 $\\mathbf r(t)$ 正则且分段光滑，$ds=|\\mathbf r'(t)|dt$；它可表示线密度给出的质量。"
    },
    {
      "name": "第二类曲线积分",
      "body": "$\\int_L Pdx+Qdy+Rdz=\\int_L\\mathbf F\\cdot d\\mathbf r$ 表示沿有向曲线的功或环流。参数化 $\\mathbf r(t)$ 后计算 $\\int \\mathbf F(\\mathbf r(t))\\cdot\\mathbf r'(t)dt$；反转方向会变号。"
    },
    {
      "name": "保守场与路径无关",
      "body": "若 $\\mathbf F=\\nabla\\Phi$，则线积分等于势函数的终值减初值。在平面单连通区域、偏导连续的条件下，$P_y=Q_x$ 可保证 $Pdx+Qdy$ 为全微分。"
    },
    {
      "name": "第一类曲面积分",
      "body": "$\\iint_S f\\,dS$ 按面积累积，不依赖法向方向。若曲面是 $z=z(x,y)$，则 $dS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy$。"
    },
    {
      "name": "第二类曲面积分",
      "body": "$\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS$ 是穿过指定侧的通量，反转法向会变号。对图形曲面向上侧，可用 $(P,Q,R)\\cdot(-z_x,-z_y,1)\\,dxdy$ 计算。"
    },
    {
      "name": "散度与旋度",
      "body": "$\\operatorname{div}\\mathbf F=P_x+Q_y+R_z$ 描述局部源汇；$\\operatorname{curl}\\mathbf F=\\nabla\\times\\mathbf F$ 与局部旋转有关。公式使用前须检查区域、光滑性和方向。"
    }
  ],
  "theorems": [
    {
      "name": "第一类曲线积分参数化",
      "statement": "$\\int_L f\\,ds=\\int_a^bf(\\mathbf r(t))|\\mathbf r'(t)|dt$。",
      "conditions": "参数化在 $[a,b]$ 分段光滑且恰覆盖曲线一次。",
      "remark": "不依赖方向。"
    },
    {
      "name": "格林公式",
      "statement": "$\\oint_{\\partial D}Pdx+Qdy=\\iint_D(Q_x-P_y)dxdy$。",
      "conditions": "$D$ 为适当平面区域，边界取正向，$P,Q$ 在包含区域的开集有连续一阶偏导。",
      "remark": "正向表示行进时区域在左侧；带洞区域的内边界方向相反。"
    },
    {
      "name": "高斯公式",
      "statement": "$\\iint_{\\partial\\Omega}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_\\Omega\\operatorname{div}\\mathbf F\\,dV$。",
      "conditions": "区域有分段光滑闭边界，$\\mathbf n$ 为外法向，向量场在区域邻域连续可微。",
      "remark": "开曲面使用时须补面，并减去补面的通量。"
    },
    {
      "name": "斯托克斯公式",
      "statement": "$\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS$。",
      "conditions": "曲面有一致定向，边界方向依右手定则匹配，向量场在邻域连续可微。",
      "remark": "曲面与边界方向不能独立选取。"
    },
    {
      "name": "势函数基本定理",
      "statement": "若 $\\mathbf F=\\nabla\\Phi$，则 $\\int_A^B\\mathbf F\\cdot d\\mathbf r=\\Phi(B)-\\Phi(A)$。",
      "conditions": "路径位于势函数定义域内且分段光滑。",
      "remark": "闭合路径的积分为零。"
    },
    {
      "name": "图形曲面面积元",
      "statement": "对于 $z=z(x,y)$，有 $dS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy$。",
      "conditions": "曲面可在投影区域表示为连续可微的单值函数。",
      "remark": "这是第一类面积元；通量还需指定法向。"
    },
    {
      "name": "坐标体积元",
      "statement": "柱面坐标为 $dV=r\\,dr\\,d\\theta\\,dz$；上述球坐标为 $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$。",
      "conditions": "采用本讲规定的角度定义且区域被覆盖一次。",
      "remark": "更换球坐标角度约定时要同步调整公式。"
    }
  ],
  "examples": [
    {
      "title": "例1 球体体积",
      "level": "基础",
      "problem": "用球坐标求半径 $R>0$ 的球体体积。",
      "solution": [
        "范围为 $0\\le\\rho\\le R,0\\le\\varphi\\le\\pi,0\\le\\theta\\le2\\pi$。",
        "体积为 $\\int_0^{2\\pi}d\\theta\\int_0^\\pi\\sin\\varphi\\,d\\varphi\\int_0^R\\rho^2d\\rho$。",
        "计算得到 $4\\pi R^3/3$。"
      ],
      "tip": "先固定球坐标的角度定义。"
    },
    {
      "title": "例2 弧长积分",
      "level": "基础",
      "problem": "求单位圆周上的 $\\int_L 1\\,ds$。",
      "solution": [
        "参数化为 $\\mathbf r(t)=(\\cos t,\\sin t)$，$0\\le t\\le2\\pi$。",
        "$|\\mathbf r'(t)|=1$。",
        "积分为 $\\int_0^{2\\pi}dt=2\\pi$。"
      ],
      "tip": "第一类曲线积分不因方向改变而变号。"
    },
    {
      "title": "例3 格林公式",
      "level": "强化",
      "problem": "$L$ 为单位圆逆时针方向，求 $\\oint_L(-y\\,dx+x\\,dy)$。",
      "solution": [
        "取 $P=-y,Q=x$，有 $Q_x-P_y=1-(-1)=2$。",
        "单位圆盘面积为 $\\pi$。",
        "由格林公式，积分为 $2\\pi$。"
      ],
      "tip": "确认边界正向和偏导的顺序。"
    },
    {
      "title": "例4 高斯公式",
      "level": "强化",
      "problem": "$S$ 为半径 $R$ 的球面外侧，求 $\\iint_S(x,y,z)\\cdot\\mathbf n\\,dS$。",
      "solution": [
        "向量场的散度为 $1+1+1=3$。",
        "球体体积为 $4\\pi R^3/3$。",
        "通量为 $3\\cdot4\\pi R^3/3=4\\pi R^3$。"
      ],
      "tip": "闭曲面且外法向时可直接使用高斯公式。"
    },
    {
      "title": "例5 斯托克斯公式",
      "level": "强化",
      "problem": "单位圆 $x^2+y^2=1,z=0$ 从 $z$ 轴正向看为逆时针。求向量场 $\\mathbf F=(-y,x,0)$ 沿圆周的环流。",
      "solution": [
        "取向上单位圆盘作为曲面，其边界方向满足右手定则。",
        "$\\nabla\\times\\mathbf F=(0,0,2)$。",
        "环流等于 $\\iint_D2\\,dA=2\\pi$。"
      ],
      "tip": "先选择与边界方向一致的曲面法向。"
    },
    {
      "title": "例6 路径无关",
      "level": "强化",
      "problem": "从 $(0,0)$ 到 $(1,2)$ 计算 $\\int_L(2x\\,dx+2y\\,dy)$。",
      "solution": [
        "被积式是 $d(x^2+y^2)$，势函数可取 $\\Phi=x^2+y^2$。",
        "故积分只取决于端点。",
        "结果为 $\\Phi(1,2)-\\Phi(0,0)=5$。"
      ],
      "tip": "求出势函数后直接比较端点。"
    }
  ],
  "methods": [
    "三重积分先确定投影、上下界及坐标体积元。",
    "曲线积分先区分对弧长还是对坐标微分。",
    "使用格林、高斯、斯托克斯公式时先画出方向。",
    "场有奇点时先检查公式所需区域内的光滑性。"
  ],
  "pitfalls": [
    "第一类积分与方向无关，第二类积分依赖方向。",
    "高斯公式直接适用于闭曲面，开曲面需补面。",
    "偏导相等并不单独保证非单连通区域上的路径无关。",
    "球坐标体积元不可漏掉 $\\rho^2\\sin\\varphi$。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "求边长为 $2$ 的立方体的 $\\iiint_\\Omega1\\,dV$。",
      "answer": "$8$",
      "solution": "积分等于体积，故为 $2^3=8$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "求 $\\mathbf F=(x,y,z)$ 的散度。",
      "answer": "$3$",
      "solution": "$\\operatorname{div}\\mathbf F=1+1+1=3$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "求平面 $z=x+y$ 在 $0\\le x\\le1,0\\le y\\le1$ 上方部分的面积。",
      "answer": "$\\sqrt3$",
      "solution": "面积元为 $dS=\\sqrt{1+1^2+1^2}\\,dxdy=\\sqrt3\\,dxdy$，投影区域面积为 $1$，所以曲面面积为 $\\sqrt3$。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "求从 $(0,0)$ 到 $(2,1)$ 的 $\\int_L(2x\\,dx+2y\\,dy)$。",
      "answer": "$5$",
      "solution": "该微分是 $d(x^2+y^2)$，端点势差为 $2^2+1^2=5$。"
    },
    {
      "no": 5,
      "level": "强化",
      "problem": "求单位球面外侧上 $\\iint_S(x,y,z)\\cdot\\mathbf n\\,dS$。",
      "answer": "$4\\pi$",
      "solution": "散度为 $3$，乘以单位球体积 $4\\pi/3$ 得 $4\\pi$。"
    },
    {
      "no": 6,
      "level": "强化",
      "problem": "$\\mathbf F=(-y,x,0)$ 的旋度是什么？",
      "answer": "$(0,0,2)$",
      "solution": "按 $\\nabla\\times\\mathbf F$ 的坐标公式计算，第三分量为 $\\partial x/\\partial x-\\partial(-y)/\\partial y=2$。"
    }
  ]
};
