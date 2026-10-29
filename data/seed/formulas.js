export default {
  "groups": [
    {
      "id": "f1",
      "name": "极限与等价无穷小",
      "subject": "gaoshu",
      "items": [
        {
          "title": "两个重要极限",
          "tex": "$$\\lim_{x\\to 0}\\frac{\\sin x}{x}=1,\\qquad \\lim_{x\\to\\infty}\\left(1+\\frac{1}{x}\\right)^x=e$$"
        },
        {
          "title": "常用等价无穷小（x→0）",
          "tex": "$$\\sin x\\sim x,\\ \\tan x\\sim x,\\ \\arcsin x\\sim x,\\ \\arctan x\\sim x$$ $$1-\\cos x\\sim\\frac{x^2}{2},\\quad e^x-1\\sim x,\\quad \\ln(1+x)\\sim x$$ $$(1+x)^\\alpha-1\\sim \\alpha x,\\quad a^x-1\\sim x\\ln a$$"
        },
        {
          "title": "更高阶等价",
          "tex": "$$\\tan x-\\sin x\\sim\\frac{x^3}{2},\\quad x-\\sin x\\sim\\frac{x^3}{6},\\quad \\tan x-x\\sim\\frac{x^3}{3}$$"
        },
        {
          "title": "无穷小比较定义",
          "tex": "$$\\lim\\frac{\\beta}{\\alpha}=0\\Rightarrow\\beta=o(\\alpha);\\quad =c\\neq 0\\Rightarrow\\beta\\text{与}\\alpha\\text{同阶}$$"
        },
        {
          "title": "泰勒公式（佩亚诺余项）",
          "tex": "$$f(x)=f(x_0)+f'(x_0)(x-x_0)+\\cdots+\\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+o((x-x_0)^n)$$"
        },
        {
          "title": "常用麦克劳林展开",
          "tex": "$$e^x=1+x+\\frac{x^2}{2!}+\\cdots,\\quad \\sin x=x-\\frac{x^3}{3!}+\\cdots$$ $$\\cos x=1-\\frac{x^2}{2!}+\\cdots,\\quad \\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$$"
        },
        {
          "title": "夹逼准则与单调有界",
          "tex": "$$y_n\\le x_n\\le z_n,\\ \\lim y_n=\\lim z_n=a\\Rightarrow\\lim x_n=a$$"
        },
        {
          "title": "洛必达法则",
          "tex": "$$\\lim\\frac{f}{g}=\\lim\\frac{f'}{g'}\\quad(\\frac{0}{0}\\text{或}\\frac{\\infty}{\\infty}\\text{型，右端存在时})$$"
        }
      ]
    },
    {
      "id": "f2",
      "name": "导数与微分",
      "subject": "gaoshu",
      "items": [
        {
          "title": "导数定义",
          "tex": "$$f'(x_0)=\\lim_{\\Delta x\\to 0}\\frac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$$"
        },
        {
          "title": "基本求导公式",
          "tex": "$$(x^\\alpha)'=\\alpha x^{\\alpha-1},\\ (a^x)'=a^x\\ln a,\\ (\\log_a x)'=\\frac{1}{x\\ln a}$$ $$(\\sin x)'=\\cos x,\\ (\\cos x)'=-\\sin x,\\ (\\tan x)'=\\sec^2 x$$ $$(\\arcsin x)'=\\frac{1}{\\sqrt{1-x^2}},\\ (\\arctan x)'=\\frac{1}{1+x^2}$$"
        },
        {
          "title": "四则与链式法则",
          "tex": "$$(uv)'=u'v+uv',\\quad \\left(\\frac{u}{v}\\right)'=\\frac{u'v-uv'}{v^2}$$ $$\\{f[g(x)]\\}'=f'[g(x)]\\cdot g'(x)$$"
        },
        {
          "title": "反函数与参数方程求导",
          "tex": "$$\\frac{dy}{dx}=\\frac{1}{dx/dy},\\qquad \\frac{dy}{dx}=\\frac{\\varphi'(t)}{\\psi'(t)},\\quad \\frac{d^2y}{dx^2}=\\frac{d}{dt}\\left(\\frac{\\varphi'(t)}{\\psi'(t)}\\right)\\cdot\\frac{1}{\\psi'(t)}$$"
        },
        {
          "title": "常用高阶导数",
          "tex": "$$(\\sin x)^{(n)}=\\sin\\left(x+\\frac{n\\pi}{2}\\right),\\quad (e^x)^{(n)}=e^x$$ $$\\left(\\frac{1}{x+a}\\right)^{(n)}=\\frac{(-1)^n n!}{(x+a)^{n+1}}$$"
        },
        {
          "title": "莱布尼茨公式",
          "tex": "$$(uv)^{(n)}=\\sum_{k=0}^{n}C_n^k u^{(n-k)}v^{(k)}$$"
        },
        {
          "title": "微分与可导关系",
          "tex": "$$dy=f'(x)dx;\\quad \\text{一元函数：可微}\\iff\\text{可导}\\iff\\text{切线存在}$$"
        },
        {
          "title": "曲率",
          "tex": "$$K=\\frac{|y''|}{(1+y'^2)^{3/2}},\\qquad R=\\frac{1}{K}$$"
        }
      ]
    },
    {
      "id": "f3",
      "name": "中值定理",
      "subject": "gaoshu",
      "items": [
        {
          "title": "罗尔定理",
          "tex": "$$f\\in C[a,b]\\cap D(a,b),\\ f(a)=f(b)\\Rightarrow\\exists\\xi\\in(a,b),\\ f'(\\xi)=0$$"
        },
        {
          "title": "拉格朗日中值定理",
          "tex": "$$f(b)-f(a)=f'(\\xi)(b-a),\\ \\xi\\in(a,b)$$"
        },
        {
          "title": "柯西中值定理",
          "tex": "$$\\frac{f(b)-f(a)}{g(b)-g(a)}=\\frac{f'(\\xi)}{g'(\\xi)},\\quad g'(x)\\neq 0$$"
        },
        {
          "title": "泰勒公式（拉格朗日余项）",
          "tex": "$$f(x)=\\sum_{k=0}^{n}\\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$$"
        },
        {
          "title": "积分中值定理",
          "tex": "$$\\int_a^b f(x)dx=f(\\xi)(b-a),\\ \\xi\\in[a,b]\\ (f\\text{连续})$$"
        },
        {
          "title": "构造辅助函数常用思路",
          "tex": "$$\\xi f'(\\xi)+f(\\xi)=0\\Rightarrow [xf(x)]'=0\\Rightarrow F(x)=xf(x)$$ $$f'(\\xi)+\\lambda f(\\xi)=0\\Rightarrow F(x)=e^{\\lambda x}f(x)$$"
        }
      ]
    },
    {
      "id": "f4",
      "name": "积分公式",
      "subject": "gaoshu",
      "items": [
        {
          "title": "基本积分表",
          "tex": "$$\\int x^\\alpha dx=\\frac{x^{\\alpha+1}}{\\alpha+1}+C,\\quad \\int\\frac{dx}{x}=\\ln|x|+C$$ $$\\int e^x dx=e^x+C,\\quad \\int a^x dx=\\frac{a^x}{\\ln a}+C$$ $$\\int\\frac{dx}{1+x^2}=\\arctan x+C,\\quad \\int\\frac{dx}{\\sqrt{1-x^2}}=\\arcsin x+C$$"
        },
        {
          "title": "三角积分",
          "tex": "$$\\int\\tan x\\,dx=-\\ln|\\cos x|+C,\\quad \\int\\cot x\\,dx=\\ln|\\sin x|+C$$ $$\\int\\sec x\\,dx=\\ln|\\sec x+\\tan x|+C$$"
        },
        {
          "title": "分部积分",
          "tex": "$$\\int u\\,dv=uv-\\int v\\,du$$"
        },
        {
          "title": "换元法典型",
          "tex": "$$\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\arcsin\\frac{x}{a}+C$$ $$\\int\\frac{dx}{x^2+a^2}=\\frac{1}{a}\\arctan\\frac{x}{a}+C$$ $$\\int\\frac{dx}{x^2-a^2}=\\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right|+C$$"
        },
        {
          "title": "牛顿—莱布尼茨 / 变限积分求导",
          "tex": "$$\\int_a^b f=F(b)-F(a);\\qquad \\frac{d}{dx}\\int_{\\varphi(x)}^{\\psi(x)}f(t)dt=f[\\psi(x)]\\psi'(x)-f[\\varphi(x)]\\varphi'(x)$$"
        },
        {
          "title": "定积分恒等式",
          "tex": "$$\\int_a^b f(x)dx=\\int_a^b f(a+b-x)dx$$ $$\\int_{-a}^{a}f(x)dx=\\begin{cases}2\\int_0^a f(x)dx, & f\\text{偶}\\\\ 0, & f\\text{奇}\\end{cases}$$"
        },
        {
          "title": "华里士公式（点火公式）",
          "tex": "$$\\int_0^{\\pi/2}\\sin^nx\\,dx=\\int_0^{\\pi/2}\\cos^nx\\,dx=\\frac{n-1}{n}\\cdot\\frac{n-3}{n-2}\\cdots$$"
        },
        {
          "title": "常用反常积分",
          "tex": "$$\\int_0^{+\\infty}e^{-x^2}dx=\\frac{\\sqrt{\\pi}}{2},\\qquad \\int_1^{+\\infty}\\frac{dx}{x^p}\\ (p>1)\\text{收敛}$$"
        },
        {
          "title": "弧长 / 旋转体",
          "tex": "$$s=\\int_a^b\\sqrt{1+y'^2}\\,dx;\\qquad V=\\pi\\int_a^b y^2dx$$"
        }
      ]
    },
    {
      "id": "f5",
      "name": "多元微分与重积分",
      "subject": "gaoshu",
      "items": [
        {
          "title": "可微条件",
          "tex": "$$dz=\\frac{\\partial z}{\\partial x}dx+\\frac{\\partial z}{\\partial y}dy;\\quad \\text{偏导连续}\\Rightarrow\\text{可微}\\Rightarrow\\text{偏导存在、连续}$$"
        },
        {
          "title": "链式法则",
          "tex": "$$\\frac{dz}{dt}=\\frac{\\partial z}{\\partial u}\\frac{du}{dt}+\\frac{\\partial z}{\\partial v}\\frac{dv}{dt}$$"
        },
        {
          "title": "隐函数求导",
          "tex": "$$F(x,y,z)=0:\\quad \\frac{\\partial z}{\\partial x}=-\\frac{F_x}{F_z},\\quad \\frac{\\partial z}{\\partial y}=-\\frac{F_y}{F_z}$$"
        },
        {
          "title": "方向导数与梯度",
          "tex": "$$\\frac{\\partial f}{\\partial l}=f_x\\cos\\alpha+f_y\\cos\\beta+f_z\\cos\\gamma;\\quad \\mathbf{grad}\\,f=\\left(\\frac{\\partial f}{\\partial x},\\frac{\\partial f}{\\partial y},\\frac{\\partial f}{\\partial z}\\right)$$"
        },
        {
          "title": "无条件极值判别",
          "tex": "$$AC-B^2\\begin{cases}>0:\\ A>0\\text{ 极小},\\ A<0\\text{ 极大}\\\\ <0:\\ \\text{非极值}\\\\ =0:\\ \\text{失效}\\end{cases}$$"
        },
        {
          "title": "二重积分换序/极坐标",
          "tex": "$$\\iint_D f\\,d\\sigma=\\int_{\\alpha}^{\\beta}d\\theta\\int_{r_1(\\theta)}^{r_2(\\theta)}f(r\\cos\\theta,r\\sin\\theta)\\,r\\,dr$$"
        },
        {
          "title": "三重积分（先二后一 / 球坐标）",
          "tex": "$$\\iiint_\\Omega f\\,dV=\\int_{c_1}^{c_2}dz\\iint_{D_z}f\\,dxdy$$ $$x=r\\sin\\varphi\\cos\\theta,\\ y=r\\sin\\varphi\\sin\\theta,\\ z=r\\cos\\varphi;\\ dV=r^2\\sin\\varphi\\,drd\\varphi d\\theta$$"
        },
        {
          "title": "对称性",
          "tex": "$$D\\text{关于}y\\text{轴对称},\\ f(-x,y)=-f(x,y)\\Rightarrow\\iint_D f\\,d\\sigma=0$$"
        }
      ]
    },
    {
      "id": "f6",
      "name": "曲线曲面积分（数一）",
      "subject": "gaoshu",
      "items": [
        {
          "title": "格林公式",
          "tex": "$$\\oint_L Pdx+Qdy=\\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dxdy\\quad(L\\text{取正向})$$"
        },
        {
          "title": "路径无关条件",
          "tex": "$$\\frac{\\partial Q}{\\partial x}=\\frac{\\partial P}{\\partial y}\\ (D\\text{单连通})\\iff \\oint_L Pdx+Qdy=0$$"
        },
        {
          "title": "两类曲线积分关系",
          "tex": "$$\\int_L Pdx+Qdy=\\int_L(P\\cos\\alpha+Q\\cos\\beta)\\,ds$$"
        },
        {
          "title": "高斯公式",
          "tex": "$$\\oiint_\\Sigma Pdydz+Qdzdx+Rdxdy=\\iiint_\\Omega\\left(\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}\\right)dV$$"
        },
        {
          "title": "斯托克斯公式",
          "tex": "$$\\oint_\\Gamma Pdx+Qdy+Rdz=\\iint_\\Sigma\\begin{vmatrix}dydz & dzdx & dxdy\\\\ \\frac{\\partial}{\\partial x}&\\frac{\\partial}{\\partial y}&\\frac{\\partial}{\\partial z}\\\\ P&Q&R\\end{vmatrix}$$"
        },
        {
          "title": "散度与旋度",
          "tex": "$$\\operatorname{div}\\mathbf{F}=\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}$$ $$\\operatorname{rot}\\mathbf{F}=\\left(R_y-Q_z,\\ P_z-R_x,\\ Q_x-P_y\\right)$$"
        },
        {
          "title": "第一类曲面积分（投影）",
          "tex": "$$\\iint_\\Sigma f\\,dS=\\iint_D f(x,y,\\sqrt{1+z_x^2+z_y^2})dxdy$$"
        }
      ]
    },
    {
      "id": "f7",
      "name": "无穷级数",
      "subject": "gaoshu",
      "items": [
        {
          "title": "几何级数 / p 级数",
          "tex": "$$\\sum_{n=0}^{\\infty}aq^n=\\frac{a}{1-q}\\ (|q|<1);\\qquad \\sum\\frac{1}{n^p}\\ (p>1)\\text{收敛}$$"
        },
        {
          "title": "莱布尼茨判别法",
          "tex": "$$u_n\\downarrow 0\\Rightarrow\\sum(-1)^{n-1}u_n\\ (u_n>0)\\text{收敛}$$"
        },
        {
          "title": "比较 / 比值 / 根值判别法",
          "tex": "$$\\lim\\frac{u_{n+1}}{u_n}=\\rho\\begin{cases}<1\\text{ 收敛}\\\\ >1\\text{ 发散}\\end{cases};\\qquad \\lim\\sqrt[n]{u_n}=\\rho\\ (\\text{同})$$"
        },
        {
          "title": "收敛半径",
          "tex": "$$R=\\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n+1}}\\right|;\\quad \\text{收敛域}=\\text{收敛区间}\\pm\\text{端点判定}$$"
        },
        {
          "title": "逐项求导 / 积分",
          "tex": "$$S'(x)=\\sum n a_n x^{n-1},\\qquad \\int_0^x S(t)dt=\\sum\\frac{a_n}{n+1}x^{n+1}\\ (|x|<R)$$"
        },
        {
          "title": "常用和函数",
          "tex": "$$\\sum_{n=1}^{\\infty}\\frac{x^n}{n}=-\\ln(1-x)\\ (-1\\le x<1);\\qquad \\sum_{n=0}^{\\infty}\\frac{x^n}{n!}=e^x$$"
        },
        {
          "title": "傅里叶系数（数一）",
          "tex": "$$a_n=\\frac{1}{l}\\int_{-l}^{l}f(x)\\cos\\frac{n\\pi x}{l}dx,\\quad b_n=\\frac{1}{l}\\int_{-l}^{l}f(x)\\sin\\frac{n\\pi x}{l}dx$$"
        },
        {
          "title": "狄利克雷收敛定理（数一）",
          "tex": "$$S(x)=\\frac{f(x+0)+f(x-0)}{2};\\ \\text{连续点处} S(x)=f(x)$$"
        }
      ]
    },
    {
      "id": "f8",
      "name": "常微分方程",
      "subject": "gaoshu",
      "items": [
        {
          "title": "一阶线性方程",
          "tex": "$$y'+P(x)y=Q(x):\\quad y=e^{-\\int Pdx}\\left[\\int Q e^{\\int Pdx}dx+C\\right]$$"
        },
        {
          "title": "伯努利方程（数一）",
          "tex": "$$y'+P(x)y=Q(x)y^n\\ \\xrightarrow{\\ z=y^{1-n}\\ }\\ \\frac{dz}{dx}+(1-n)Pz=(1-n)Q$$"
        },
        {
          "title": "可降阶",
          "tex": "$$y''=f(x,y'):\\ 令\\ p=y';\\qquad y''=f(y,y'):\\ 令\\ p=y',\\ y''=p\\frac{dp}{dy}$$"
        },
        {
          "title": "二阶常系数齐次（不同实根）",
          "tex": "$$y''+py'+qy=0:\\quad r^2+pr+q=0\\Rightarrow y=C_1e^{r_1x}+C_2e^{r_2x}$$"
        },
        {
          "title": "非齐次特解设法",
          "tex": "$$f(x)=e^{\\lambda x}P_m(x):\\ y^*=x^ke^{\\lambda x}Q_m(x)\\ (k=\\lambda\\text{为特征根的重数})$$ $$f(x)=e^{\\lambda x}[A\\cos\\omega x+B\\sin\\omega x]:\\ y^*=x^ke^{\\lambda x}(M\\cos\\omega x+N\\sin\\omega x)$$"
        },
        {
          "title": "解的结构",
          "tex": "$$y=Y+y^*;\\quad \\text{齐次通解}Y=C_1y_1+C_2y_2\\ (y_1,y_2\\text{线性无关})$$"
        },
        {
          "title": "欧拉方程（数一）",
          "tex": "$$x^2y''+pxy'+qy=f(x)\\ \\xrightarrow{\\ x=e^t\\ }\\ \\frac{d^2y}{dt^2}+(p-1)\\frac{dy}{dt}+qy=f(e^t)$$"
        }
      ]
    },
    {
      "id": "f9",
      "name": "空间解析几何（数一）",
      "subject": "gaoshu",
      "items": [
        {
          "title": "数量积 / 向量积 / 混合积",
          "tex": "$$\\mathbf{a}\\cdot\\mathbf{b}=|\\mathbf{a}||\\mathbf{b}|\\cos\\theta$$ $$\\mathbf{a}\\times\\mathbf{b}=\\begin{vmatrix}\\mathbf{i}&\\mathbf{j}&\\mathbf{k}\\\\ a_x&a_y&a_z\\\\ b_x&b_y&b_z\\end{vmatrix};\\qquad [\\mathbf{abc}]=\\begin{vmatrix}a_x&a_y&a_z\\\\ b_x&b_y&b_z\\\\ c_x&c_y&c_z\\end{vmatrix}$$"
        },
        {
          "title": "平面方程",
          "tex": "$$\\text{点法式：}A(x-x_0)+B(y-y_0)+C(z-z_0)=0;\\ \\text{截距式/一般式}$$"
        },
        {
          "title": "直线方程",
          "tex": "$$\\frac{x-x_0}{m}=\\frac{y-y_0}{n}=\\frac{z-z_0}{p};\\qquad d=\\frac{|\\overrightarrow{M_0M_1}\\times\\mathbf{s}|}{|\\mathbf{s}|}\\ (\\text{点到直线})$$"
        },
        {
          "title": "点到平面距离",
          "tex": "$$d=\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}$$"
        },
        {
          "title": "常用二次曲面",
          "tex": "$$\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1\\ (\\text{椭球});\\quad \\frac{x^2}{a^2}+\\frac{y^2}{b^2}-\\frac{z^2}{c^2}=1\\ (\\text{单叶双曲面})$$ $$z=x^2+y^2\\ (\\text{旋转抛物面});\\quad z^2=x^2+y^2\\ (\\text{锥面})$$"
        }
      ]
    },
    {
      "id": "f10",
      "name": "行列式与矩阵",
      "subject": "xiandai",
      "items": [
        {
          "title": "行列式性质速记",
          "tex": "$$|kA|=k^n|A|;\\quad |AB|=|A||B|;\\quad |A^T|=|A|;\\quad |A^*|=|A|^{n-1}$$ $$|A^{-1}|=|A|^{-1};\\qquad |A|\\neq 0\\iff A\\text{可逆}$$"
        },
        {
          "title": "按行展开",
          "tex": "$$|A|=a_{i1}A_{i1}+a_{i2}A_{i2}+\\cdots+a_{in}A_{in}$$ $$\\sum_{j}a_{ij}A_{kj}=0\\ (i\\neq k)$$"
        },
        {
          "title": "克拉默法则",
          "tex": "$$x_i=\\frac{D_i}{D}\\ (D\\neq 0)$$"
        },
        {
          "title": "伴随矩阵",
          "tex": "$$AA^*=A^*A=|A|E;\\quad A^{-1}=\\frac{1}{|A|}A^*;\\quad (A^*)^{-1}=\\frac{A}{|A|}$$ $$(A^*)^*=|A|^{n-2}A;\\quad r(A^*)=\\begin{cases}n,&r(A)=n\\\\1,&r(A)=n-1\\\\0,&r(A)<n-1\\end{cases}$$"
        },
        {
          "title": "秩的性质",
          "tex": "$$r(A+B)\\le r(A)+r(B);\\quad r(AB)\\le\\min\\{r(A),r(B)\\}$$ $$r(A_{m\\times n})\\le\\min\\{m,n\\};\\quad A\\text{可逆}:\\ r(AB)=r(B)$$"
        },
        {
          "title": "初等变换求逆",
          "tex": "$$(A\\mid E)\\xrightarrow{\\text{行变换}}(E\\mid A^{-1})$$"
        },
        {
          "title": "分块求逆",
          "tex": "$$\\begin{pmatrix}A&O\\\\ C&B\\end{pmatrix}^{-1}=\\begin{pmatrix}A^{-1}&O\\\\ -B^{-1}CA^{-1}&B^{-1}\\end{pmatrix}$$"
        }
      ]
    },
    {
      "id": "f11",
      "name": "向量组与线性方程组",
      "subject": "xiandai",
      "items": [
        {
          "title": "线性相关判别",
          "tex": "$$\\alpha_1,\\dots,\\alpha_s\\text{相关}\\iff\\exists\\text{不全为零的}k_i:\\ \\sum k_i\\alpha_i=0$$ $$n+1\\text{个}n\\text{维向量必相关}$$"
        },
        {
          "title": "解的结构",
          "tex": "$$Ax=0:\\ \\text{基础解系含}\\ n-r(A)\\text{个向量};\\quad \\xi=k_1\\xi_1+\\cdots+k_{n-r}\\xi_{n-r}$$ $$Ax=b:\\ x=\\eta^*+\\xi\\ (\\text{特解}+\\text{齐次通解})$$"
        },
        {
          "title": "解的判定",
          "tex": "$$Ax=b:\\ r(A)=r(A,b)=n\\text{唯一};\\ =r<n\\text{无穷};\\ r(A)<r(A,b)\\text{无解}$$"
        },
        {
          "title": "秩与线性表示",
          "tex": "$$\\beta\\text{可由}\\alpha_1,\\dots,\\alpha_s\\text{线性表示}\\iff r(\\alpha_1,\\dots,\\alpha_s)=r(\\alpha_1,\\dots,\\alpha_s,\\beta)$$"
        },
        {
          "title": "施密特正交化",
          "tex": "$$\\beta_1=\\alpha_1,\\quad \\beta_2=\\alpha_2-\\frac{(\\alpha_2,\\beta_1)}{(\\beta_1,\\beta_1)}\\beta_1,\\ \\cdots$$"
        }
      ]
    },
    {
      "id": "f12",
      "name": "特征值与二次型",
      "subject": "xiandai",
      "items": [
        {
          "title": "特征值定义与求法",
          "tex": "$$A\\xi=\\lambda\\xi\\ (\\xi\\neq 0);\\qquad |\\lambda E-A|=0$$"
        },
        {
          "title": "重要性质",
          "tex": "$$\\sum\\lambda_i=\\operatorname{tr}(A);\\quad \\prod\\lambda_i=|A|$$ $$\\lambda\\text{为}A\\text{的特征值}\\Rightarrow f(\\lambda)\\text{为}f(A)\\text{的特征值}$$ $$A\\sim B\\Rightarrow\\lambda\\text{相同、}|A|\\text{相同、}r(A)=r(B)$$"
        },
        {
          "title": "可对角化条件",
          "tex": "$$A\\text{有}n\\text{个线性无关特征向量}\\iff\\text{每个}k\\text{重特征值有}k\\text{个无关特征向量}$$"
        },
        {
          "title": "实对称矩阵",
          "tex": "$$A^T=A\\Rightarrow\\text{特征值全实、不同特征值的特征向量正交、必可正交对角化}$$"
        },
        {
          "title": "二次型标准形（正交变换）",
          "tex": "$$f=x^TAx\\xrightarrow{Q^TAQ=\\Lambda}f=\\lambda_1y_1^2+\\cdots+\\lambda_ny_n^2$$"
        },
        {
          "title": "惯性定理与正定",
          "tex": "$$\\text{正惯性指数}p\\text{不变};\\quad f\\text{正定}\\iff A\\text{各阶顺序主子式}>0\\iff p=n\\iff A=E^TE$$"
        },
        {
          "title": "合同",
          "tex": "$$B=C^TAC;\\quad \\text{正交变换保持合同与相似}$$"
        }
      ]
    },
    {
      "id": "f13",
      "name": "概率基础与常见分布",
      "subject": "gailv",
      "items": [
        {
          "title": "五大公式",
          "tex": "$$P(A\\cup B)=P(A)+P(B)-P(AB)$$ $$P(A\\bar B)=P(A)-P(AB);\\quad P(AB)=P(A)P(B|A)$$ $$P(A)=\\sum_iP(A|C_i)P(C_i);\\quad P(C_i|A)=\\frac{P(A|C_i)P(C_i)}{\\sum_jP(A|C_j)P(C_j)}$$"
        },
        {
          "title": "古典与几何概型",
          "tex": "$$P(A)=\\frac{m}{n};\\qquad P(A)=\\frac{S_A}{S_\\Omega}$$"
        },
        {
          "title": "二项 / 泊松",
          "tex": "$$P(X=k)=C_n^kp^k(1-p)^{n-k};\\qquad P(X=k)=\\frac{\\lambda^k}{k!}e^{-\\lambda}$$"
        },
        {
          "title": "几何分布 / 超几何",
          "tex": "$$P(X=k)=(1-p)^{k-1}p,\\ k=1,2,\\dots$$"
        },
        {
          "title": "均匀 / 指数",
          "tex": "$$f(x)=\\begin{cases}\\frac{1}{b-a},&x\\in(a,b)\\\\0,&\\text{其他}\\end{cases};\\qquad f(x)=\\begin{cases}\\lambda e^{-\\lambda x},&x>0\\\\0,&x\\le 0\\end{cases}$$"
        },
        {
          "title": "正态分布标准化",
          "tex": "$$X\\sim N(\\mu,\\sigma^2):\\quad \\frac{X-\\mu}{\\sigma}\\sim N(0,1);\\quad F(x)=\\Phi\\left(\\frac{x-\\mu}{\\sigma}\\right)$$"
        },
        {
          "title": "分布函数性质",
          "tex": "$$F(-\\infty)=0,\\ F(+\\infty)=1,\\ \\text{单调不减、右连续};\\quad P(a<X\\le b)=F(b)-F(a)$$"
        },
        {
          "title": "二维正态",
          "tex": "$$(X,Y)\\sim N(\\mu_1,\\mu_2;\\sigma_1^2,\\sigma_2^2;\\rho):\\ X,Y\\text{独立}\\iff\\rho=0$$"
        }
      ]
    },
    {
      "id": "f14",
      "name": "数字特征",
      "subject": "gailv",
      "items": [
        {
          "title": "期望与方差定义",
          "tex": "$$E(X)=\\sum x_ip_i\\ \\text{或}\\ \\int xf(x)dx;\\quad D(X)=E[X-E(X)]^2=E(X^2)-[E(X)]^2$$"
        },
        {
          "title": "方差性质",
          "tex": "$$D(C)=0;\\ D(aX+b)=a^2D(X);\\ \\text{独立}:\\ D(X\\pm Y)=D(X)+D(Y)$$"
        },
        {
          "title": "常用分布的期望方差",
          "tex": "$$B(n,p):\\ np,\\ np(1-p);\\quad P(\\lambda):\\ \\lambda,\\ \\lambda;\\quad G(p):\\ \\frac{1}{p},\\ \\frac{1-p}{p^2}$$ $$U(a,b):\\ \\frac{a+b}{2},\\ \\frac{(b-a)^2}{12};\\quad E(\\lambda):\\ \\frac{1}{\\lambda},\\ \\frac{1}{\\lambda^2}$$ $$N(\\mu,\\sigma^2):\\ \\mu,\\ \\sigma^2$$"
        },
        {
          "title": "协方差",
          "tex": "$$\\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y);\\quad D(X\\pm Y)=D(X)+D(Y)\\pm 2\\operatorname{Cov}(X,Y)$$"
        },
        {
          "title": "相关系数",
          "tex": "$$\\rho_{XY}=\\frac{\\operatorname{Cov}(X,Y)}{\\sqrt{D(X)D(Y)}};\\quad |\\rho|\\le 1;\\quad \\rho=\\pm 1\\iff P(Y=aX+b)=1$$"
        },
        {
          "title": "独立 ⇒ 不相关",
          "tex": "$$X,Y\\text{独立}\\Rightarrow\\operatorname{Cov}(X,Y)=0;\\quad \\text{反之不然（正态例外：等价）}$$"
        },
        {
          "title": "随机变量函数的期望",
          "tex": "$$E[g(X)]=\\int g(x)f(x)dx;\\quad E[g(X,Y)]=\\int\\!\\!\\int g(x,y)f(x,y)dxdy$$"
        }
      ]
    },
    {
      "id": "f15",
      "name": "大数定律与抽样分布",
      "subject": "gailv",
      "items": [
        {
          "title": "切比雪夫不等式",
          "tex": "$$P(|X-E(X)|\\ge\\varepsilon)\\le\\frac{D(X)}{\\varepsilon^2}$$"
        },
        {
          "title": "两大中心极限定理",
          "tex": "$$\\text{独立同分布（列维—林德伯格）：}\\frac{\\sum X_i-n\\mu}{\\sqrt{n}\\sigma}\\xrightarrow{a}N(0,1)$$ $$\\text{二项（棣莫弗—拉普拉斯）：}\\frac{\\sum X_i-np}{\\sqrt{np(1-p)}}\\xrightarrow{a}N(0,1)$$"
        },
        {
          "title": "三大抽样分布",
          "tex": "$$\\chi^2(n)=X_1^2+\\cdots+X_n^2\\ (X_i\\sim N(0,1));\\quad E\\chi^2=n,\\ D\\chi^2=2n$$ $$T=\\frac{X}{\\sqrt{Y/n}}\\sim t(n);\\qquad F=\\frac{X/n_1}{Y/n_2}\\sim F(n_1,n_2)$$"
        },
        {
          "title": "正态总体抽样分布",
          "tex": "$$\\bar X\\sim N\\left(\\mu,\\frac{\\sigma^2}{n}\\right);\\quad \\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$$ $$\\frac{\\bar X-\\mu}{S/\\sqrt{n}}\\sim t(n-1);\\quad \\bar X\\perp S^2$$"
        }
      ]
    },
    {
      "id": "f16",
      "name": "参数估计与假设检验（数一）",
      "subject": "gailv",
      "items": [
        {
          "title": "矩估计",
          "tex": "$$\\hat\\mu=A_1=\\bar X;\\qquad \\hat\\sigma^2=\\frac{1}{n}\\sum(X_i-\\bar X)^2$$"
        },
        {
          "title": "最大似然估计步骤",
          "tex": "$$L(\\theta)=\\prod f(x_i;\\theta)\\Rightarrow\\frac{d\\ln L}{d\\theta}=0$$"
        },
        {
          "title": "无偏性",
          "tex": "$$E(\\hat\\theta)=\\theta;\\qquad E(S^2)=\\sigma^2\\ (\\text{样本方差是无偏的})$$"
        },
        {
          "title": "置信区间（σ²未知，μ 的置信区间）",
          "tex": "$$\\left(\\bar X-\\frac{S}{\\sqrt{n}}t_{\\alpha/2}(n-1),\\ \\bar X+\\frac{S}{\\sqrt{n}}t_{\\alpha/2}(n-1)\\right)$$"
        },
        {
          "title": "假设检验两类错误",
          "tex": "$$\\text{第一类：}\\ H_0\\text{真而拒}\\implies\\alpha;\\quad \\text{第二类：}\\ H_0\\text{假而纳}\\implies\\beta$$"
        }
      ]
    }
  ]
};
