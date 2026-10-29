// 本文件由 tools/build-knowledge-map.mjs 自动生成：学科 → 章节 → 概念/定理 → 方法 → 题型的立体知识架构。
// 确定性生成（无时间戳），可重跑且幂等；请勿手工编辑。
export default {
 "version": 1,
 "generatedBy": "tools/build-knowledge-map.mjs",
 "entities": [
  {
   "id": "k-subject-gailv",
   "kind": "subject",
   "name": "概率论与数理统计",
   "subject": "gailv",
   "lessons": [
    "gl01",
    "gl02",
    "gl03",
    "gl04",
    "gl05",
    "gl06",
    "gl07",
    "gl08"
   ],
   "summary": "考研数学一三大科目之一（约 20%）；考纲共 8 章，从「一、随机事件和概率」到「八、假设检验（数一特有）」。",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-subject-gaoshu",
   "kind": "subject",
   "name": "高等数学",
   "subject": "gaoshu",
   "lessons": [
    "gs01",
    "gs02",
    "gs03",
    "gs04",
    "gs05",
    "gs06",
    "gs07",
    "gs08",
    "gs09",
    "gs10",
    "gs11",
    "gs12",
    "gs13",
    "gs14",
    "gs15",
    "gs16",
    "gs17",
    "gs18"
   ],
   "summary": "考研数学一三大科目之一（约 60%）；考纲共 8 章，从「一、函数、极限、连续」到「八、常微分方程」。",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-subject-xiandai",
   "kind": "subject",
   "name": "线性代数",
   "subject": "xiandai",
   "lessons": [
    "xd01",
    "xd02",
    "xd03",
    "xd04",
    "xd05",
    "xd06"
   ],
   "summary": "考研数学一三大科目之一（约 20%）；考纲共 6 章，从「一、行列式」到「六、二次型」。",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm1",
   "kind": "chapter",
   "name": "一、函数、极限、连续",
   "subject": "gaoshu",
   "lessons": [
    "gs01",
    "gs02"
   ],
   "summary": "函数的概念及表示法；函数的有界性、单调性、周期性和奇偶性；复合函数、反函数、分段函数和隐函数；基本初等函数的性质及其图形；初等函数；函数关系的建立",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm2",
   "kind": "chapter",
   "name": "二、一元函数微分学",
   "subject": "gaoshu",
   "lessons": [
    "gs03",
    "gs04",
    "gs05",
    "gs06",
    "gs07"
   ],
   "summary": "导数和微分的概念；导数的几何意义和物理意义；函数的可导性与连续性之间的关系；平面曲线的切线和法线；导数和微分的四则运算；基本初等函数的导数；复合函数、反函数、隐函数以及参数方程所确定的函数的微分法；高阶导数；一阶微分形式的不变性",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm3",
   "kind": "chapter",
   "name": "三、一元函数积分学",
   "subject": "gaoshu",
   "lessons": [
    "gs08",
    "gs09",
    "gs10",
    "gs11",
    "gs12"
   ],
   "summary": "原函数和不定积分的概念；不定积分的基本性质；基本积分公式；定积分的概念和基本性质；定积分中值定理；积分上限的函数及其导数；牛顿—莱布尼茨公式；不定积分和定积分的换元积分法与分部积分法；有理函数、三角函数的有理式和简单无理函数的积分；反常（广义）积分；定积分的应用",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm4",
   "kind": "chapter",
   "name": "四、向量代数和空间解析几何（数一特有）",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "向量的概念；向量的线性运算；向量的数量积、向量积和混合积；两向量垂直、平行的条件；两向量的夹角；向量的坐标表达式及其运算；单位向量；方向数与方向余弦",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm5",
   "kind": "chapter",
   "name": "五、多元函数微分学",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "多元函数的概念；二元函数的几何意义；二元函数的极限与连续的概念；有界闭区域上二元连续函数的性质；多元函数的偏导数和全微分；全微分存在的必要条件和充分条件",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm6",
   "kind": "chapter",
   "name": "六、多元函数积分学",
   "subject": "gaoshu",
   "lessons": [
    "gs14",
    "gs18"
   ],
   "summary": "二重积分与三重积分的概念、性质、计算和应用；两类曲线积分的概念、性质及计算；两类曲线积分的关系；格林公式；平面曲线积分与路径无关的条件；二元函数全微分的原函数；两类曲面积分的概念、性质及计算；两类曲面积分的关系；高斯公式；斯托克斯公式；散度、旋度的概念及计算；曲线积分和曲面积分的应用",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm7",
   "kind": "chapter",
   "name": "七、无穷级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "常数项级数的收敛与发散的概念；收敛级数的和的概念；级数的基本性质与收敛的必要条件；几何级数与 p 级数及其收敛性；正项级数收敛性的判别法；交错级数与莱布尼茨定理；任意项级数的绝对收敛与条件收敛",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-hm8",
   "kind": "chapter",
   "name": "八、常微分方程",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "常微分方程的基本概念；变量可分离的微分方程；齐次微分方程；一阶线性微分方程；伯努利方程（数一特有）；全微分方程（数一特有）；可用简单的变量代换求解的某些微分方程；可降阶的高阶微分方程；线性微分方程解的性质及解的结构定理；二阶常系数齐次线性微分方程；高于二阶的某些常系数齐次线性微分方程；简单的二阶常系数非齐次线性微分方程…",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-la1",
   "kind": "chapter",
   "name": "一、行列式",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "行列式的概念和基本性质；行列式按行（列）展开定理；克拉默法则",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-la2",
   "kind": "chapter",
   "name": "二、矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "矩阵的概念；矩阵的线性运算；矩阵的乘法；方阵的幂；方阵乘积的行列式；矩阵的转置；逆矩阵的概念和性质；矩阵可逆的充分必要条件；伴随矩阵；矩阵的初等变换；初等矩阵；矩阵的秩；矩阵的等价；分块矩阵及其运算",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-la3",
   "kind": "chapter",
   "name": "三、向量",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "向量的概念；向量的线性组合与线性表示；向量组的线性相关与线性无关；向量组的极大线性无关组；等价向量组；向量组的秩；向量组的秩与矩阵的秩之间的关系；向量的内积；线性无关向量组的正交规范化方法（施密特正交化）",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-la4",
   "kind": "chapter",
   "name": "四、线性方程组",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "线性方程组的克拉默法则；线性方程组有解和无解的判定；齐次线性方程组的基础解系和通解；非齐次线性方程组的解与相应的齐次线性方程组（导出组）的解之间的关系；非齐次线性方程组的通解",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-la5",
   "kind": "chapter",
   "name": "五、矩阵的特征值和特征向量",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "矩阵的特征值和特征向量的概念、性质；相似变换、相似矩阵的概念及性质；矩阵可相似对角化的充分必要条件及相似对角矩阵；实对称矩阵的特征值和特征向量及其相似对角矩阵",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-la6",
   "kind": "chapter",
   "name": "六、二次型",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "二次型及其矩阵表示；合同变换与合同矩阵；二次型的秩；惯性定理；二次型的标准形和规范形；用正交变换和配方法化二次型为标准形；二次型及其矩阵的正定性",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr1",
   "kind": "chapter",
   "name": "一、随机事件和概率",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "随机事件与样本空间；事件的关系与运算；完备事件组；概率的概念；概率的基本性质；古典型概率；几何型概率；条件概率；概率的基本公式：加法公式、减法公式、乘法公式、全概率公式和贝叶斯公式；事件的独立性；独立重复试验",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr2",
   "kind": "chapter",
   "name": "二、一维随机变量及其分布",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "随机变量；随机变量分布函数的概念及其性质；离散型随机变量的概率分布；连续型随机变量的概率密度；常见随机变量的分布：0-1分布、二项分布 B(n,p)、泊松分布 P(λ)、几何分布、均匀分布 U(a,b)、指数分布 E(λ)、正态分布 N(μ,σ²)；随机变量函数的分布",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr3",
   "kind": "chapter",
   "name": "三、多维随机变量及其分布",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "多维随机变量及其分布；二维离散型随机变量的概率分布、边缘分布和条件分布；二维连续型随机变量的概率密度、边缘密度和条件密度；随机变量的独立性和不相关性；常用二维随机变量的分布；两个及两个以上随机变量简单函数的分布",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr4",
   "kind": "chapter",
   "name": "四、随机变量的数字特征",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "随机变量的数学期望（均值）、方差、标准差及其性质；随机变量函数的数学期望；矩、协方差、相关系数及其性质",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr5",
   "kind": "chapter",
   "name": "五、大数定律和中心极限定理",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "切比雪夫不等式；切比雪夫大数定律；伯努利大数定律；辛钦大数定律；棣莫弗—拉普拉斯定理；列维—林德伯格定理",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr6",
   "kind": "chapter",
   "name": "六、数理统计的基本概念（数一特有）",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "总体；个体；简单随机样本；统计量；样本均值；样本方差和样本矩；χ² 分布；t 分布；F 分布；分位数；正态总体的常用抽样分布",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr7",
   "kind": "chapter",
   "name": "七、参数估计（数一特有）",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "点估计的概念；估计量与估计值；矩估计法；最大似然估计法；估计量的评选标准：无偏性、有效性、一致性（相合性）；区间估计的概念；单个正态总体的均值和方差的置信区间；两个正态总体的均值差和方差比的置信区间",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-chapter-pr8",
   "kind": "chapter",
   "name": "八、假设检验（数一特有）",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "显著性检验；假设检验的两类错误；单个及两个正态总体的均值和方差的假设检验",
   "source": "data/seed/syllabus.js"
  },
  {
   "id": "k-concept-gl01-006bce40",
   "kind": "concept",
   "name": "独立性与伯努利概型",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "$P(AB)=P(A)P(B)$ 称 $A,B$ **独立**。$A$ 与 $B$ 独立 $\\iff$ $A$ 与 $\\bar B$、$\\bar A$ 与 $B$、$\\bar A$ 与 $\\bar B$ 都独立。 注意：独立与互斥是不同概念！$P(A)>0,P(B)>0$ 时互斥必不独立（…",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-concept-gl01-11ca261e",
   "kind": "concept",
   "name": "古典概型与几何概型",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "**古典概型**：样本点有限且等可能，$P(A)=\\dfrac{|A|}{|\\Omega|}$。核心工具是排列组合。 **几何概型**：样本点无限且均匀分布，$P(A)=\\dfrac{A\\text{的测度}}{\\Omega\\text{的测度}}$（长度/面积/体积）。典型例子：会面问题、蒲丰投针。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-concept-gl01-192a68e8",
   "kind": "concept",
   "name": "事件的关系与运算",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "**包含** $A\\subset B$：$A$ 发生必导致 $B$ 发生。**相等** $A=B$。**和** $A\\cup B$：至少一个发生。**积** $A\\cap B$（记 $AB$）：同时发生。**差** $A-B=A\\bar{B}$：$A$ 发生而 $B$ 不发生。**互斥（互不相容）**…",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-concept-gl01-41abeb4e",
   "kind": "concept",
   "name": "概率的定义与性质",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "公理化定义：$P(\\cdot)$ 是事件到 $[0,1]$ 的映射，满足非负性、规范性 $P(\\Omega)=1$、可列可加性。 基本性质：$P(\\varnothing)=0$；有限可加；$P(\\bar A)=1-P(A)$；单调性 $A\\subset B\\Rightarrow P(A)\\le P(B)…",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-concept-gl01-83d9e983",
   "kind": "concept",
   "name": "条件概率",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "$P(B|A)=\\dfrac{P(AB)}{P(A)}\\ (P(A)>0)$：已知 $A$ 发生后 $B$ 发生的概率，相当于把样本空间缩小到 $A$。 条件概率仍是概率，满足全部概率性质：如 $P(\\bar B|A)=1-P(B|A)$，且固定 $A$ 后 $P(\\cdot|A)$ 可作为新的概率测度使用。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-concept-gl01-cc842752",
   "kind": "concept",
   "name": "样本空间与随机事件",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "随机试验 $E$ 的所有可能结果组成的集合称为**样本空间** $\\Omega$，其中每个元素（基本结果）称**样本点**。样本空间的子集称为**随机事件**，单个样本点构成的事件称**基本事件**。 两个特殊事件：$\\Omega$（必然事件，每次试验必发生）、$\\varnothing$（不可能事件）。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-concept-gl02-12e0a25a",
   "kind": "concept",
   "name": "常见连续分布",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "**均匀分布** $U(a,b)$：密度 $\\dfrac{1}{b-a}$ 于 $(a,b)$，落在子区间的概率只与区间长度成正比。**指数分布** $E(\\lambda)$：密度 $\\lambda e^{-\\lambda x}\\ (x>0)$，$F(x)=1-e^{-\\lambda x}$，描述\"寿命/等待时间\"，具…",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-concept-gl02-21551547",
   "kind": "concept",
   "name": "常见离散分布",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "**0-1 分布**：$P(X=1)=p$。**二项分布** $B(n,p)$：$n$ 重伯努利中成功次数 $P(X=k)=C_n^kp^kq^{n-k}$。**泊松分布** $P(\\lambda)$：$P(X=k)=\\dfrac{\\lambda^ke^{-\\lambda}}{k!}$，描述单位时间计数（电话呼叫、事故…",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-concept-gl02-392bdff0",
   "kind": "concept",
   "name": "连续型与概率密度",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "若存在 $f(x)\\ge0$ 使 $F(x)=\\int_{-\\infty}^{x}f(t)dt$，称 $X$ 为连续型，$f$ 为**概率密度**。 密度性质：$f\\ge0$，$\\int_{-\\infty}^{+\\infty}f=1$；$P(a<X\\le b)=\\int_a^bf(x)dx$；在 $f$ 的连续点…",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-concept-gl02-397fa17b",
   "kind": "concept",
   "name": "离散型与分布律",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "离散型随机变量只取有限或可列个值，由**分布律** $P(X=x_i)=p_i$ 完全确定，需满足 $p_i\\ge0$ 且 $\\sum p_i=1$。 分布函数与分布律互推：$F(x)=\\sum_{x_i\\le x}p_i$（跳跃累积），$p_i=F(x_i)-F(x_i-0)$。",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-concept-gl02-7d573d79",
   "kind": "concept",
   "name": "随机变量与分布函数",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "把样本点映射为实数的函数 $X=X(\\omega)$ 称为**随机变量**。分布函数 $$F(x)=P(X\\le x),\\quad x\\in\\mathbb{R}$$ 完整刻画了 $X$ 的概率规律。 $F(x)$ 的性质：① 单调不减；② $0\\le F\\le1$，$F(-\\infty)=0…",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-concept-gl02-8ec9c8c0",
   "kind": "concept",
   "name": "正态分布与标准化",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "$X\\sim N(\\mu,\\sigma^2)\\Rightarrow\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1)$（标准化）。$F(x)=\\Phi\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$，一切计算归结为查 $\\Phi$ 表。 $\\Phi$ 的性质…",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-concept-gl02-d7a3a017",
   "kind": "concept",
   "name": "随机变量函数的分布",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "已知 $X$ 的分布，求 $Y=g(X)$ 的分布。**分布函数法**（万能）：从 $F_Y(y)=P(g(X)\\le y)$ 出发，解出关于 $X$ 的不等式转化为 $X$ 的概率计算。 **公式法**（单调时）：$g$ 严格单调、可导，则 $f_Y(y)=f_X[h(y)]|h'(y)|$，其中…",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-concept-gl03-1861c644",
   "kind": "concept",
   "name": "独立性与不相关性",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "$X,Y$ **独立** $\\iff F(x,y)=F_X(x)F_Y(y)$ $\\iff$ $f(x,y)=f_X(x)f_Y(y)$（连续型）$\\iff$ $p_{ij}=p_{i\\cdot}p_{\\cdot j}$（离散型）。 **不相关**：$\\operatorname{Cov}(X,Y)=0$（即…",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-concept-gl03-420424dd",
   "kind": "concept",
   "name": "二维正态分布",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "$(X,Y)\\sim N(\\mu_1,\\mu_2;\\sigma_1^2,\\sigma_2^2;\\rho)$，五个参数：两个均值、两个方差、相关系数 $\\rho$。 核心性质：① 边缘分布都是一维正态（由 $\\mu_i,\\sigma_i$ 决定，与 $\\rho$ 无关）；② $X,Y$ 独立 $\\iff\\rho=0$（*…",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-concept-gl03-64e014af",
   "kind": "concept",
   "name": "联合分布函数",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "$(X,Y)$ 的联合分布函数 $F(x,y)=P(X\\le x,Y\\le y)$。性质：对每个变量单调不减、右连续；$F(-\\infty,y)=F(x,-\\infty)=0$，$F(+\\infty,+\\infty)=1$。 **边缘分布**：$F_X(x)=F(x,+\\infty)…",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-concept-gl03-a276b4c5",
   "kind": "concept",
   "name": "二维离散型",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "联合分布律 $P(X=x_i,Y=y_j)=p_{ij}$，需 $p_{ij}\\ge0$、$\\sum\\sum p_{ij}=1$（表格形式最直观）。 边缘分布律：按行/列求和 $p_{i\\cdot}=\\sum_jp_{ij}$。 条件分布…",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-concept-gl03-d06c89d1",
   "kind": "concept",
   "name": "二维均匀分布",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "平面有界区域 $D$ 上 $f(x,y)=\\dfrac{1}{S_D}$（$S_D$ 为面积），$(x,y)\\in D$。 概率 = 目标区域与 $D$ 交集面积占比，把几何概型\"代数化\"。落在 $D$ 内子区域的概率只与其面积有关。",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-concept-gl03-ecbcca61",
   "kind": "concept",
   "name": "两个随机变量函数的分布",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "**和** $Z=X+Y$：连续型 $f_Z(z)=\\int_{-\\infty}^{+\\infty}f(x,z-x)dx$；独立时 $f_Z(z)=\\int f_X(x)f_Y(z-x)dx$（卷积）。 **最大值/最小值**（独立时）：$F_{\\max}(z)=F_X(z)F_Y(z)…",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-concept-gl03-f4b02af8",
   "kind": "concept",
   "name": "二维连续型",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "联合密度 $f(x,y)$：$F(x,y)=\\int_{-\\infty}^x\\int_{-\\infty}^yf(u,v)dudv$，$f\\ge0$ 且 $\\int\\!\\int f=1$。 边缘密度：$f_X(x)=\\int_{-\\infty}^{+\\infty}f(x,y)dy$（固定 $x$ 对 $y$ 积分）。 条…",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-concept-gl04-0e8711a5",
   "kind": "concept",
   "name": "常用分布的期望方差速查",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "以下六行必须背到条件反射（选择题与综合题的基石）： 二项 $B(n,p)$：$E=np$，$D=np(1-p)$ 泊松 $P(\\lambda)$：$E=\\lambda$，$D=\\lambda$ 几何 $G(p)$：$E=\\dfrac1p$，$D=\\dfrac{1-p}{p^2}$ 均匀 $U(a,b)…",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-concept-gl04-17955f51",
   "kind": "concept",
   "name": "协方差",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "$$\\operatorname{Cov}(X,Y)=E[(X-EX)(Y-EY)]=E(XY)-E(X)E(Y)$$ 性质：$\\operatorname{Cov}(X,X)=D(X)$；$\\operatorname{Cov}(aX,bY)=ab\\operatorname{Cov}(X,Y)…",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-concept-gl04-47e07469",
   "kind": "concept",
   "name": "矩",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "**原点矩** $\\nu_k=E(X^k)$，**中心矩** $\\mu_k=E[X-E(X)]^k$。一阶原点矩即期望，二阶中心矩即方差。协方差是 $(X,Y)$ 的二阶混合中心矩。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-concept-gl04-7905deff",
   "kind": "concept",
   "name": "相关系数",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "$$\\rho_{XY}=\\frac{\\operatorname{Cov}(X,Y)}{\\sqrt{D(X)}\\sqrt{D(Y)}}\\quad(|\\rho|\\le1)$$ $\\rho$ 是去掉量纲的\"线性相关程度\"：$|\\rho|=1\\iff$ 存在常数 $a\\ne0,b$ 使 $P(Y=aX+b)=1$（概率 1 线…",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-concept-gl04-de145cb2",
   "kind": "concept",
   "name": "方差与标准差",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "$$D(X)=E[X-E(X)]^2=E(X^2)-[E(X)]^2$$ 标准差 $\\sigma(X)=\\sqrt{D(X)}$，与 $X$ 同量纲。 $D(X)$ 刻画取值的分散程度；$D=0\\iff X$ 以概率 1 为常数。 计算套路：先求 $E(X)$，再求 $E(X^2)$（用函数期望公式），两者相减。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-concept-gl04-ee7f641d",
   "kind": "concept",
   "name": "数学期望",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "离散型 $E(X)=\\sum x_ip_i$；连续型 $E(X)=\\int xf(x)dx$（要求级数/积分绝对收敛）。期望是\"加权平均\"，刻画分布的中心位置。 函数的期望（**不必求 $g(X)$ 的分布**）：$$E[g(X)]=\\sum g(x_i)p_i,\\qquad E[g(X)]=\\int g(x)f(x)…",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-concept-gl05-297aaffc",
   "kind": "concept",
   "name": "切比雪夫不等式",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "$$P\\{|X-E(X)|\\ge\\varepsilon\\}\\le\\frac{D(X)}{\\varepsilon^2},\\qquad P\\{|X-E(X)|<\\varepsilon\\}\\ge1-\\frac{D(X)}{\\varepsilon^2}$$ 含义：不管 $X$ 服从什么分布，只要期望方差存在，$X$ 偏离期望超…",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-concept-gl05-4511b051",
   "kind": "concept",
   "name": "大数定律",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "共同结论形式：$n$ 个随机变量的**算术平均** $\\bar X_n$ 依概率收敛于期望（或其真值）。 ① 切比雪夫大数定律：两两不相关、方差一致有界时 $\\dfrac1n\\sum X_i\\xrightarrow{P}\\dfrac1n\\sum E(X_i)$； ② 辛钦大数定律：独立同分布且…",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-concept-gl05-b4ddff83",
   "kind": "concept",
   "name": "依概率收敛",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "若对任意 $\\varepsilon>0$，$\\lim_{n\\to\\infty}P\\{|X_n-a|\\ge\\varepsilon\\}=0$，称序列 $X_n$ **依概率收敛**于 $a$，记 $X_n\\xrightarrow{P}a$。 直观：$n$ 大时 $X_n$ 与 $a$ 的偏差大于任何…",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-concept-gl05-d23f0463",
   "kind": "concept",
   "name": "中心极限定理",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "**列维—林德伯格（独立同分布 CLT）**：$X_1,\\dots,X_n$ 独立同分布，$E(X_i)=\\mu,\\ D(X_i)=\\sigma^2>0$，则 $n$ 充分大时 $$\\sum_{i=1}^nX_i\\ \\dot\\sim\\ N(n\\mu,n\\sigma^2),\\qquad \\frac{\\sum X_i-n\\…",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-concept-gl06-1c3c47ec",
   "kind": "concept",
   "name": "t 分布",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "**典型模式**：$Z\\sim N(0,1)$，$Y\\sim\\chi^2(n)$，且独立，则 $$T=\\frac{Z}{\\sqrt{Y/n}}\\sim t(n)$$ 密度关于原点对称（奇数阶矩为零），$n$ 大时趋于 $N(0,1)$；$E(T)=0$（$n>1$），$D(T)=\\dfrac{n}{n-2}$（…",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-concept-gl06-3fccf741",
   "kind": "concept",
   "name": "总体与样本",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "研究对象的某数量指标值的全体称为**总体**，用一个分布 $F(x)$ 刻画；从总体中抽取的 $n$ 个独立同分布个体 $X_1,\\dots,X_n$ 称为**简单随机样本**（容量 $n$）。 样本的**观测值**记 $x_1,\\dots,x_n$。样本二重性：抽样前是随机向量，抽样后是一组数。",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-concept-gl06-44345b15",
   "kind": "concept",
   "name": "F 分布",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "**典型模式**：$Y_1\\sim\\chi^2(n_1)$，$Y_2\\sim\\chi^2(n_2)$ 独立，则 $$F=\\frac{Y_1/n_1}{Y_2/n_2}\\sim F(n_1,n_2)$$ 性质：$\\dfrac1F\\sim F(n_2,n_1)$（自由度颠倒）；$T^2\\sim F(1,n)$（$t$ 的平…",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-concept-gl06-57c3d79a",
   "kind": "concept",
   "name": "χ² 分布",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "**典型模式**：$Z_1,\\dots,Z_n$ 独立同 $N(0,1)$，则 $\\chi^2=\\sum Z_i^2\\sim\\chi^2(n)$（自由度 $n$）。 性质：$E(\\chi^2(n))=n$，$D(\\chi^2(n))=2n$；可加性…",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-concept-gl06-64f18aee",
   "kind": "concept",
   "name": "分位数",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "上侧 $\\alpha$ 分位数 $\\chi^2_\\alpha(n)$、$t_\\alpha(n)$、$F_\\alpha(n_1,n_2)$ 定义为 $P(X>x_\\alpha)=\\alpha$。标准正态记 $z_\\alpha$（或 $u_\\alpha$）。 对称性…",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-concept-gl06-ed5c4bc4",
   "kind": "concept",
   "name": "统计量",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "不含未知参数的样本函数称为统计量。核心三个： 样本均值 $\\bar X=\\dfrac1n\\sum X_i$ 样本方差 $S^2=\\dfrac{1}{n-1}\\sum(X_i-\\bar X)^2$（**分母 $n-1$**，保证无偏） 样本 $k$ 阶（原点）矩 $A_k=\\dfrac1n\\sum X_i^k$ 样本标准…",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-concept-gl07-38b4eabc",
   "kind": "concept",
   "name": "矩估计法",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "用样本矩替换总体矩解出参数：$E(X)=A_1=\\bar X$；两参数时联立 $E(X)=\\bar X$ 与 $E(X^2)=A_2=\\dfrac1n\\sum X_i^2$（或用方差 $D(X)=B_2$）。 要点：有几个未知参数就用到几阶矩；一阶矩失灵（如期望与参数无关）时升级二阶矩。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-concept-gl07-54bf1556",
   "kind": "concept",
   "name": "点估计的基本思想",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "设总体分布含未知参数 $\\theta$，用统计量 $\\hat\\theta=T(X_1,\\dots,X_n)$ 去估计它：$T$ 称为**估计量**（随机变量），代入样本观测值后得到**估计值**。 两大构造方法：矩估计（用样本矩替总体矩）与最大似然估计（让样本出现概率最大的 $\\theta$）。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-concept-gl07-8bbb88f3",
   "kind": "concept",
   "name": "有效性与一致性",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "**有效性**：两个无偏估计中方差小者更有效（$D(\\hat\\theta_1)<D(\\hat\\theta_2)$）。 **一致性（相合性）**：$\\hat\\theta\\xrightarrow{P}\\theta\\ (n\\to\\infty)$。$\\bar X$ 对 $\\mu$、$S^2$（或 $B_2$）对…",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-concept-gl07-cf3229c8",
   "kind": "concept",
   "name": "无偏性",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "$E(\\hat\\theta)=\\theta$ 称 $\\hat\\theta$ 为 $\\theta$ 的**无偏估计**。 常用事实：$\\bar X$ 是 $\\mu$ 的无偏估计；$S^2$（分母 $n-1$）是 $\\sigma^2$ 的无偏估计；$\\dfrac1n\\sum(X_i-\\bar X)^2$ **不是**（偏小…",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-concept-gl07-cfe1678b",
   "kind": "concept",
   "name": "区间估计",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "构造随机区间 $[\\hat\\theta_1,\\hat\\theta_2]$ 使 $P(\\hat\\theta_1\\le\\theta\\le\\hat\\theta_2)=1-\\alpha$（**置信水平**，常取 $0.95$）。 正态总体 $\\mu$ 的置信区间：$\\sigma^2$ 已知用 $z…",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-concept-gl07-f1b705b4",
   "kind": "concept",
   "name": "最大似然估计法",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "似然函数 $L(\\theta)=\\prod_{i=1}^nf(x_i;\\theta)$（离散型用概率 $P(X=x_i;\\theta)$）。 流程四步：写 $L$ → 取对数 $\\ln L$ → 令 $\\dfrac{d\\ln L}{d\\theta}=0$ 解出 $\\hat\\theta$ → 必要时验证最大（二阶导或边界…",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-concept-gl08-15cefe54",
   "kind": "concept",
   "name": "假设检验的基本思想",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "对参数提出一对假设：**原假设 $H_0$**（默认成立、受保护）与**备择假设 $H_1$**。 思想是**小概率反证法**：假定 $H_0$ 成立，构造检验统计量，若本次样本使\"小概率事件\"发生了（统计量落入**拒绝域**），则与\"小概率原理\"矛盾，拒绝 $H_0$；否则没有充分理由拒绝（接受/不拒绝 $H_0$）…",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-concept-gl08-1af4cb1c",
   "kind": "concept",
   "name": "单侧与双侧检验",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "$H_1: \\mu\\ne\\mu_0$ 为**双侧**（拒绝域两侧，各 $\\alpha/2$）；$H_1: \\mu>\\mu_0$（或 $<$）为**单侧**（拒绝域一侧，面积 $\\alpha$）。 单侧检验的原假设常写为 $H_0:\\mu\\le\\mu_0$，拒绝域方向与 $H_1$ 方向一致。",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-concept-gl08-2dd24872",
   "kind": "concept",
   "name": "均值检验的枢轴量选择",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "$\\sigma$ 已知：$Z=\\dfrac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)$，$z$ 检验；$\\sigma$ 未知：$T=\\dfrac{\\bar X-\\mu_0}{S/\\sqrt n}\\sim t(n-1)$，$t$ 检验。 大样本非正态：由 CLT 近似用 $z$ 检…",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-concept-gl08-61d32af4",
   "kind": "concept",
   "name": "假设检验五步法",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "① 提出成对假设 $H_0/H_1$；② 选检验统计量（$z$/$t$/$\\chi^2$/$F$，在 $H_0$ 下分布已知）；③ 定显著性水平 $\\alpha$，查分位数写拒绝域；④ 代入样本算统计量值；⑤ 下结论：落入拒绝域则拒绝 $H_0$，否则不拒绝。",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-concept-gl08-8d5ca077",
   "kind": "concept",
   "name": "方差检验",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "单个总体方差：$H_0:\\sigma^2=\\sigma_0^2$，统计量 $\\chi^2=\\dfrac{(n-1)S^2}{\\sigma_0^2}\\sim\\chi^2(n-1)$，双侧拒绝域 $\\chi^2<\\chi^2_{1-\\alpha/2}$ 或 $>\\chi^2_{\\alpha/2}$。 两总体方差比较…",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-concept-gl08-995d0290",
   "kind": "concept",
   "name": "两类错误",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "**第一类错误（弃真）**：$H_0$ 真却拒绝了，概率 $=\\alpha$（显著性水平直接控制它）。 **第二类错误（取伪）**：$H_0$ 假却接受了，概率 $=\\beta$。样本量固定时 $\\alpha$ 与 $\\beta$ 此消彼长；想同时减小只能增大 $n$。 考试要求：理解定义与方向（谁弃真谁取伪）…",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-concept-gs01-635aede5",
   "kind": "concept",
   "name": "函数性质",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "偶函数满足 $f(-x)=f(x)$，奇函数满足 $f(-x)=-f(x)$，先要求定义域关于原点对称。有界性、单调性和周期性均相对于给定定义域或区间讨论。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-concept-gs01-68223506",
   "kind": "concept",
   "name": "单侧极限和无穷小",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "左、右极限分别限制 $x<a$ 与 $x>a$。极限为零的量称无穷小；若 $\\alpha/\\beta\\to1$，则称 $\\alpha$ 与 $\\beta$ 等价，记 $\\alpha\\sim\\beta$，替换时应先把表达式整理成乘积或商。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-concept-gs01-84f22c70",
   "kind": "concept",
   "name": "函数极限",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "$x\\to a$ 时 $f(x)\\to L$ 意为：对任意 $\\varepsilon>0$，存在 $\\delta>0$，当 $0<|x-a|<\\delta$ 时有 $|f(x)-L|<\\varepsilon$。极限只由去心邻域决定，不要求 $f(a)$ 存在。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-concept-gs01-ae1014d5",
   "kind": "concept",
   "name": "连续与间断点",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "$f$ 在 $a$ 连续指 $f(a)$ 有定义且 $\\lim_{x\\to a}f(x)=f(a)$。极限存在但函数值缺失或不等于极限为可去间断；左右极限存在但不相等为跳跃间断；其他间断点如无穷间断属第二类。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-concept-gs01-fd33cfa5",
   "kind": "concept",
   "name": "函数与定义域",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "函数是在指定定义域上，对每个输入唯一确定输出的对应关系。复合函数 $f(g(x))$ 的定义域既要满足 $x$ 属于 $g$ 的定义域，也要满足 $g(x)$ 属于 $f$ 的定义域；反函数存在通常需将原函数限制在一一对应的区间。本平台的 $\\log x$ 表示自然对数。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-concept-gs02-1b6d40b0",
   "kind": "concept",
   "name": "数列与收敛",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "数列是定义在正整数集上的函数。$a_n\\to A$ 指任给 $\\varepsilon>0$，存在正整数 $N$，使 $n>N$ 时 $|a_n-A|<\\varepsilon$；极限关注尾部，有限项不改变敛散性。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-concept-gs02-2f6ecd5f",
   "kind": "concept",
   "name": "有界与单调",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "若存在 $M$ 使所有 $|a_n|\\le M$，则数列有界。单调不减指 $a_{n+1}\\ge a_n$；单调性和有界性结合可证明极限存在。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-concept-gs02-adaae5d7",
   "kind": "concept",
   "name": "子列",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "从数列中按递增下标选取的数列称子列。若原数列收敛，则任何子列收敛到同一极限；两个子列极限不同可证明原数列不收敛。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-concept-gs02-c05cfa28",
   "kind": "concept",
   "name": "阶与渐近",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "$a_n\\sim b_n$ 表示 $a_n/b_n\\to1$；$a_n=o(b_n)$ 表示比值趋于零。它们是关于 $n\\to\\infty$ 的关系，使用时应确认分母最终非零。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-concept-gs02-d6312cf0",
   "kind": "concept",
   "name": "递推数列",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "递推式通过前一项确定下一项。先验证数列有定义，再用归纳法找上下界或不变区间，分析单调性；只有先证明极限存在，才可代入递推式求候选值。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-concept-gs03-1e8e0958",
   "kind": "concept",
   "name": "单侧导数",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "左、右导数分别取 $h\\to0-$ 和 $h\\to0+$。内点处可导当且仅当两个单侧导数都存在且相等；端点通常仅讨论对应的单侧导数。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-concept-gs03-9e88bde6",
   "kind": "concept",
   "name": "变化率与导数",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "函数在 $x_0$ 的导数定义为 $f'(x_0)=\\lim_{h\\to0}[f(x_0+h)-f(x_0)]/h$，要求极限为有限值。它是瞬时变化率，也是曲线在该点非竖直切线的斜率。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-concept-gs03-ad5683c1",
   "kind": "concept",
   "name": "高阶导数",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "若导函数仍可导，其导数为二阶导数 $f''$；继续求导得到高阶导数。运动中若 $s(t)$ 是位置，则 $s'(t)$ 为速度，$s''(t)$ 为加速度。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-concept-gs03-da04a736",
   "kind": "concept",
   "name": "微分",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "若增量可写成 $\\Delta y=A\\Delta x+o(\\Delta x)$，线性主部 $A\\Delta x$ 叫微分，记 $dy=f'(x)dx$。一元函数在内点可微与可导等价。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-concept-gs03-e5f3853e",
   "kind": "concept",
   "name": "可导与连续",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "可导意味着增量可写成 $\\Delta f=f'(x_0)h+o(h)$，所以函数在该点连续。连续不能反推出可导，例如 $|x|$ 在原点连续但两侧导数不同。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-concept-gs04-437e20d4",
   "kind": "concept",
   "name": "复合与链式法则",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "若 $y=f(u),u=g(x)$，则 $dy/dx=f'(g(x))g'(x)$。多层复合应由外到内逐层求导，注意每层的自变量。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-concept-gs04-62df076f",
   "kind": "concept",
   "name": "隐函数求导",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "方程 $F(x,y)=0$ 在适当条件下确定 $y(x)$。对两侧关于 $x$ 求导时，$y$ 也随 $x$ 变化，得到 $F_x+F_y y'=0$。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-concept-gs04-9e9ec25d",
   "kind": "concept",
   "name": "参数和反函数",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "若 $x=x(t),y=y(t)$ 且 $x'(t)\\ne0$，则 $dy/dx=y'(t)/x'(t)$。反函数求导是同一思想：互换自变量和因变量，再取导数倒数。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-concept-gs04-ae55f9f2",
   "kind": "concept",
   "name": "求导基本法则",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "常数、和、乘积及商分别按相应法则求导。例如 $(uv)'=u'v+uv'$；商的分母在考察点必须非零。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-concept-gs04-f4be1c01",
   "kind": "concept",
   "name": "对数求导和高阶导",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "对正函数的乘积、商或变指数幂，可先取对数，再用链式法则。高阶导数可重复求导，也可利用标准形式、归纳或莱布尼茨公式。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-concept-gs05-280fe907",
   "kind": "concept",
   "name": "单调性与驻点",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "在区间内 $f'>0$ 可推出严格递增，$f'<0$ 可推出严格递减。满足 $f'=0$ 的点是驻点；极值还可能出现在不可导的内点，最值还需考虑端点。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-concept-gs05-5f2789ee",
   "kind": "concept",
   "name": "曲线凹凸与拐点",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "本讲将 $f''>0$ 的图形称为向上凸，即图形局部位于切线上方；$f''<0$ 时图形局部位于切线下方。拐点是凹凸性发生改变的点，$f''=0$ 仅是常见候选条件。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-concept-gs05-9faa6156",
   "kind": "concept",
   "name": "渐近线",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "若 $x\\to x_0$ 时 $|f(x)|\\to\\infty$，则 $x=x_0$ 是竖直渐近线。若 $x\\to\\pm\\infty$ 时 $f(x)-(kx+b)\\to0$，则 $y=kx+b$ 是对应方向上的渐近线。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-concept-gs05-a83faa2b",
   "kind": "concept",
   "name": "最值问题",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "连续函数在闭区间上一定取得最值。找出区间内部驻点、不可导点和两个端点，比较函数值；开放区域上的最值必须另行说明边界行为或给出全局不等式。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-concept-gs05-bd064159",
   "kind": "concept",
   "name": "曲率与弧微分",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "可微曲线 $y=f(x)$ 的弧微分为 $ds=\\sqrt{1+(f')^2}\\,dx$。曲率衡量切线方向相对弧长的变化率，曲率越大通常弯曲越明显。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-concept-gs06-3529ef43",
   "kind": "concept",
   "name": "中值定理的作用",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "中值定理把整个区间的变化与某个中间点的导数联系起来。证明存在某个 $\\xi$ 满足等式时，通常先识别目标式，再构造符合定理端点条件的函数。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-concept-gs06-3c27fcde",
   "kind": "concept",
   "name": "洛必达法则",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "该法则把满足条件的 $0/0$ 或 $\\infty/\\infty$ 极限转化为导数之比的极限。其他形式需先变形，且导数之比的极限存在只是常用充分条件。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-concept-gs06-e44cd9b8",
   "kind": "concept",
   "name": "泰勒近似",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "在展开点附近，足够光滑的函数可写成多项式加余项。证明局部性质或计算相消型极限时，应展开到第一个不会抵消的阶数。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-concept-gs06-fc6ee1df",
   "kind": "concept",
   "name": "函数不等式",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "固定参数后构造差函数，再研究其导数符号与端点值，可证明整段不等式。若导数符号难判，可尝试二阶导数、积分或中值定理。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-concept-gs06-ffd5fdba",
   "kind": "concept",
   "name": "辅助函数",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "若目标含 $f'(\\xi)-k$，可考虑 $F(x)=f(x)-kx$；若有指数或积分项，尝试使目标成为某个函数的导数。构造后必须检查连续、可导及端点值。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-concept-gs07-3bbe3adb",
   "kind": "concept",
   "name": "误差与微分",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "若输入产生小误差 $\\Delta x$，则输出误差近似为 $dy=f'(x)\\Delta x$。相对误差需进一步除以原量，并注意所用模型仅适用于局部小变化。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-concept-gs07-85aae79f",
   "kind": "concept",
   "name": "相关变化率",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "多个量由几何或物理方程联系，且均随时间变化。先建立各量的关系，再对时间求导，最后代入所给时刻的数据和单位。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-concept-gs07-9ca37b21",
   "kind": "concept",
   "name": "约束优化建模",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "根据条件选变量并明确取值范围，消去约束后得到一元目标函数。除驻点外，还必须检查边界或证明边界不可能取得更优值。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-concept-gs07-b5ce1e57",
   "kind": "concept",
   "name": "瞬时速度与加速度",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "位置 $s(t)$ 的瞬时速度 $v=ds/dt$，加速度 $a=dv/dt$。速度的符号表示方向；路程变化率是速率 $|v|$，不能总把位移当路程。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-concept-gs07-dde78b5b",
   "kind": "concept",
   "name": "边际量",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "若成本 $C(q)$、收益 $R(q)$ 随产量变化，则导数 $C'(q)$、$R'(q)$ 描述单位产量附近的变化率。实际离散变化可用微分近似，不能把近似等同于精确增量。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-concept-gs08-1286d19a",
   "kind": "concept",
   "name": "变上限积分",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "$F(x)=\\int_a^x f(t)dt$ 记录从固定起点到 $x$ 的累积量。若 $f$ 连续，$F'(x)=f(x)$；上下限都是函数时要对两个端点分别应用链式法则。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-concept-gs08-5429f707",
   "kind": "concept",
   "name": "定积分",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "定积分是分割区间后取样形成的黎曼和在最大分割长度趋零时的极限。它表示带符号的累积量，不一定等于几何面积。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-concept-gs08-c37953b5",
   "kind": "concept",
   "name": "可积性",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "闭区间上的连续函数可积；有界且只有有限个间断点的函数也可积。某个点的函数值改变不影响定积分，但不应把所有不连续函数都当成可积。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-concept-gs08-e3806441",
   "kind": "concept",
   "name": "原函数与不定积分",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "若在区间 $I$ 上 $F'=f$，则 $F$ 是 $f$ 的原函数，全部原函数记为 $\\int f(x)dx=F(x)+C$。$C$ 是任意常数；原函数依赖所在区间。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-concept-gs08-ece29066",
   "kind": "concept",
   "name": "反常积分",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "积分区间无界或被积函数无界时，用相应单侧极限定义反常积分。必须各部分极限独立存在并有限，才能称积分收敛。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-concept-gs09-0cd11f45",
   "kind": "concept",
   "name": "分部积分",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "从乘积求导公式反推：$\\int u\\,dv=uv-\\int v\\,du$。选取 $u$ 后应使剩余积分更简单，而不是机械套用。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-concept-gs09-3db7f8fd",
   "kind": "concept",
   "name": "换元积分",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "利用复合函数求导的逆过程，将积分变量变为更方便的变量。不定积分最后要回代；定积分则应同时把两个端点转换到新变量。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-concept-gs09-8273c13b",
   "kind": "concept",
   "name": "反常积分判敛",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "无穷区间积分与无界函数积分由极限定义。比较法和 $p$ 积分可快速判断敛散，但数值计算仍须正确处理极限和分段。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-concept-gs09-aaf0c1b7",
   "kind": "concept",
   "name": "有理函数",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "有理式先作多项式除法，再将真分式按实线性因子及实不可约二次因子分解。简单分式通过对数、反正切或换元计算。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-concept-gs09-d3457a03",
   "kind": "concept",
   "name": "三角与根式",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "含 $\\sin x,\\cos x$ 的表达式可借助恒等式、换元或万能代换。含 $\\sqrt{a^2-x^2}$ 等根式可考虑三角代换，同时记录变量范围以处理绝对值。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-concept-gs10-1552852b",
   "kind": "concept",
   "name": "平面图形面积（直角坐标）",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "上下结构：$S=\\int_a^b\\left[f_{上}(x)-f_{下}(x)\\right]dx$；左右结构：$S=\\int_c^d\\left[\\varphi_{右}(y)-\\psi_{左}(y)\\right]dy$。 曲线与曲线围成时，先求交点定限；被积函数\"上减下\"，若不确定谁在上，用绝对值…",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-concept-gs10-665b0f35",
   "kind": "concept",
   "name": "旋转体体积",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "曲线 $y=f(x)\\ (f\\ge0)$ 在 $[a,b]$ 上绕 $x$ 轴旋转：**圆盘法** $V=\\pi\\int_a^bf^2(x)dx$。 绕 $y$ 轴旋转：**柱壳法** $V=2\\pi\\int_a^b x|f(x)|dx$（薄柱壳：周长 $2\\pi x$ × 高 $f$ × 厚 $dx$）。 绕任意直线…",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-concept-gs10-8d428417",
   "kind": "concept",
   "name": "极坐标下的面积",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "由曲线 $r=r(\\theta)$ 与两条射线 $\\theta=\\alpha,\\theta=\\beta$ 围成的\"曲边扇形\"：$$S=\\frac12\\int_\\alpha^\\beta r^2(\\theta)\\,d\\theta$$ 微元是细扇形 $\\tfrac12r^2d\\theta$（三角形近似）。心形线…",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-concept-gs10-aa80acc1",
   "kind": "concept",
   "name": "微元法（元素法）",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "求量 $Q$ 的通用流程：① 选取积分变量 $x\\in[a,b]$；② 取代表性区间 $[x,x+dx]$，写出微元 $dQ=f(x)dx$（该小区间上 $Q$ 的近似增量）；③ 积分 $Q=\\int_a^bf(x)dx$。 几何应用（面积、体积、弧长、侧面积）全部由微元法导出，理解微元比背公式更可靠。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-concept-gs10-dcf03d35",
   "kind": "concept",
   "name": "已知平行截面面积的体积",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "立体被垂直于 $x$ 轴的平面所截，截面面积 $A(x)$ 已知，则 $V=\\int_a^bA(x)dx$。 典型：椭球体（截面椭圆）、劈锥、用平面截圆柱/球。此法与旋转体互为推广：旋转体截面是圆 $A=\\pi r^2$。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-concept-gs10-f503d7c9",
   "kind": "concept",
   "name": "弧长与旋转曲面面积",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "弧长：直角 $s=\\int_a^b\\sqrt{1+y'^2}dx$；参数 $s=\\int_\\alpha^\\beta\\sqrt{x'^2(t)+y'^2(t)}\\,dt$；极坐标 $s=\\int_\\alpha^\\beta\\sqrt{r^2+r'^2}\\,d\\theta$（由参数式代入 $x=r\\cos\\theta$ 导出…",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-concept-gs11-7dce7958",
   "kind": "concept",
   "name": "积分中值定理及其推广",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "标准形式：$f\\in C[a,b]\\Rightarrow\\exists\\xi\\in[a,b]$ 使 $\\int_a^bf(x)dx=f(\\xi)(b-a)$。 **推广（第一中值定理的一般式）**：$f$ 连续、$g$ 不变号可积，则 $\\int_a^bf(x)g(x)dx=f(\\xi)\\int_a^bg(x)dx$。…",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-concept-gs11-af0c0eec",
   "kind": "concept",
   "name": "对称性与周期性",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "对称：$\\int_{-a}^af(x)dx=\\int_0^a[f(x)+f(-x)]dx$（奇偶分半）；$f$ 关于 $x=c$ 对称则 $\\int_a^b f = $（以 $c$ 为界的对称求和）。 周期：$f$ 以 $T$ 为周期则 $\\int_a^{a+T}f=\\int_0^Tf$（与起点无关）…",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-concept-gs11-e6852d3f",
   "kind": "concept",
   "name": "积分不等式的四大方法",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "① **单调性法**：构造 $F(x)=\\int_a^x f(t)dt-\\cdots$，证 $F'\\ge0$ 且 $F(a)\\ge0$；② **常数变易（换积分上限）**：把常数 $b$ 换成 $x$ 化为函数不等式；③ **柯西—施瓦茨**…",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-concept-gs11-fc66e028",
   "kind": "concept",
   "name": "证明积分等式的工具箱",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "① **换元法**：改变积分变量结构（如令 $x=a+b-t$ 产生\"区间再现\"）；② **分部积分**：把导数转移到另一因子；③ **构造辅助函数**：设 $F(x)=\\int_{a}^{x}f(t)dt$ 或含参积分 $G(x)=\\int_a^b f(t,x)dt$，用微分学工具（单调、极值、中值定理）研究；④ *…",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-concept-gs11-ffc900d2",
   "kind": "concept",
   "name": "区间再现公式",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "$$\\int_a^bf(x)dx=\\int_a^bf(a+b-x)dx$$ 代换 $x=a+b-t$ 把区间映到自身，常用于配对：两式相加得 $2I=\\int_a^b[f(x)+f(a+b-x)]dx$，当和为简单函数时秒解（如…",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-concept-gs12-11fe7a90",
   "kind": "concept",
   "name": "变力做功",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "力 $F(x)$ 随位置变化，沿 $x$ 轴从 $a$ 移到 $b$：$$W=\\int_a^bF(x)\\,dx$$ 两大经典：① **拉弹簧**（胡克定律 $F=kx$）：$W=\\int_0^skx\\,dx=\\dfrac12ks^2$；② **抽水**：把各层水提升到出口，$dW=\\rho g\\cdot($水层体积…",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-concept-gs12-15ad5a8e",
   "kind": "concept",
   "name": "液体静压力",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "平板竖直浸在密度 $\\rho$ 的液体中，深度 $h$ 处压强 $p=\\rho gh$。深度带 $[y,y+dy]$ 上的压力微元 $$dP=\\rho g\\cdot y\\cdot w(y)\\,dy$$ 其中 $w(y)$ 为该深度处平板的水平宽度。 注意：压力与平板形状（宽度函数）有关，与\"总的液体量\"无关；常取坐标原…",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-concept-gs12-3a0cbd05",
   "kind": "concept",
   "name": "万有引力（细棒对质点）",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "长 $l$ 的细棒（线密度 $\\mu$）对质量 $m$、距离 $a$ 的质点：把棒分成小段 $dx$，每段视为质点，$$dF=\\frac{Gm\\mu\\,dx}{r^2}$$ 沿指定方向**分解**后积分（斜向引力必须投影到坐标轴上再积分，直接把距离代入会漏方向）。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-concept-gs12-5bf13f3f",
   "kind": "concept",
   "name": "平均值与函数的加权平均",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "连续函数在 $[a,b]$ 上的平均值 $\\bar f=\\dfrac{1}{b-a}\\int_a^bf(x)dx$，即积分中值定理的 $f(\\xi)$。 有效值、均方根：$\\sqrt{\\dfrac1{b-a}\\int f^2}$。交流电有效值 $I_{有效}=\\dfrac{I_m}{\\sqrt2}$ 由此而来。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-concept-gs12-c2e3f77d",
   "kind": "concept",
   "name": "质心与转动惯量",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "细棒（线密度 $\\mu(x)$）质心：$\\bar x=\\dfrac{\\int x\\mu(x)dx}{\\int\\mu(x)dx}$。平面薄片、平面图形同理（对两轴分别算）。 转动惯量：$I=\\int r^2\\,dm$，细棒对过端点垂轴…",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-concept-gs12-ced63e6d",
   "kind": "concept",
   "name": "微元法的物理化",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "物理量 $Q$ 的微元 $dQ$ = \"密度（强度）× 几何微元\"。如压力微元 $dP=\\rho g h\\cdot dA$（压强×面积微元）、功微元 $dW=F\\cdot ds$。 要点：物理量沿某坐标分布 → 切片 → 每片内物理量近似均匀 → 写微元 → 积分。所有物理应用题都是这一句话。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-concept-gs13-439bf934",
   "kind": "concept",
   "name": "二重极限与连续",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "二重极限 $\\lim\\limits_{(x,y)\\to(x_0,y_0)}f(x,y)=A$ 要求点 $(x,y)$ **以任意方式**趋于 $(x_0,y_0)$ 时函数都趋于 $A$。 证明极限不存在：找两条不同路径极限不同（如沿 $y=kx$ 得到含 $k$ 的结果）。连续…",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-concept-gs13-4e40ae1c",
   "kind": "concept",
   "name": "偏导数",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "$$\\frac{\\partial z}{\\partial x}=\\lim_{\\Delta x\\to0}\\frac{f(x_0+\\Delta x,y_0)-f(x_0,y_0)}{\\Delta x}$$ 求 $\\partial z/\\partial x$ 时把 $y$ 当常数，对 $x$ 用一元求导法则即可。 高阶偏导…",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-concept-gs13-551de7fe",
   "kind": "concept",
   "name": "极值与条件极值",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "极值必要条件：$f_x=f_y=0$（驻点）。二元极值充分条件：$AC-B^2$ 判别（$A=f_{xx},B=f_{xy},C=f_{yy}$）：$>0$ 且 $A>0$ 极小、$A<0$ 极大；$<0$ 非极值；$=0$ 失效需另判。 条件极值：拉格朗日乘数法，构造 $L=f+\\lambda\\varphi$，解…",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-concept-gs13-77e06638",
   "kind": "concept",
   "name": "隐函数求导",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "一个方程 $F(x,y,z)=0$：$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x}{F_z}$，$\\dfrac{\\partial z}{\\partial y}=-\\dfrac{F_y}{F_z}$（$F_z\\ne0$）。 方程组（如…",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-concept-gs13-c9a591ee",
   "kind": "concept",
   "name": "全微分与可微",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "$$dz=\\frac{\\partial z}{\\partial x}dx+\\frac{\\partial z}{\\partial y}dy$$ 若 $\\Delta z-\\left(z_x\\Delta x+z_y\\Delta y\\right)=o(\\rho)$（…",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-concept-gs13-ea9f675c",
   "kind": "concept",
   "name": "复合函数链式法则",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "全导数：$z=f(u,v)$，$u=u(t),v=v(t)$，则 $\\dfrac{dz}{dt}=\\dfrac{\\partial z}{\\partial u}\\dfrac{du}{dt}+\\dfrac{\\partial z}{\\partial v}\\dfrac{dv}{dt}$（\"连线相乘、分线相加\"）。 偏导链…",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-concept-gs13-fd9fd344",
   "kind": "concept",
   "name": "方向导数与梯度（数一）",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "方向导数 $\\dfrac{\\partial f}{\\partial l}=f_x\\cos\\alpha+f_y\\cos\\beta+f_z\\cos\\gamma$（$\\mathbf e_l=(\\cos\\alpha,\\cos\\beta,\\cos\\gamma)$ 为单位方向向量），是 $f$ 沿方向 $\\mathbf e_l$…",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-concept-gs14-adedc46c",
   "kind": "concept",
   "name": "质量与形心",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "薄片面密度为 $\\rho(x,y)$ 时，质量 $M=\\iint_D\\rho\\,dA$，质心坐标 $\\bar x=M^{-1}\\iint_D x\\rho\\,dA$、$\\bar y=M^{-1}\\iint_D y\\rho\\,dA$，要求 $M>0$。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-concept-gs14-b726028a",
   "kind": "concept",
   "name": "一般变量替换",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "变量变换 $x=x(u,v),y=y(u,v)$ 会改变区域和面积尺度。面积元乘雅可比行列式绝对值 $|\\partial(x,y)/\\partial(u,v)|$；变换需在所用区域内满足适当的可逆和光滑条件。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-concept-gs14-c5193b95",
   "kind": "concept",
   "name": "对称性",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "若区域关于 $y$ 轴对称且被积函数对 $x$ 为奇函数，则积分为零；其他对称轴同理。交换 $x,y$ 后区域不变时，可比较两个积分。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-concept-gs14-cbfcae26",
   "kind": "concept",
   "name": "定义与意义",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "把平面区域 $D$ 分成小块，取样后求和 $\\sum f(\\xi_i,\\eta_i)\\Delta A_i$；当最大分块直径趋于零且和有唯一极限时，得到 $\\iint_D f\\,dA$。非负函数的二重积分表示曲面下的体积。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-concept-gs14-ce0e428e",
   "kind": "concept",
   "name": "极坐标",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "使用 $x=r\\cos\\theta,y=r\\sin\\theta$ 时，面积元是 $dA=r\\,dr\\,d\\theta$，其中 $r\\ge0$。适合圆、扇形及只含 $x^2+y^2$ 的被积式。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-concept-gs14-f5047b8f",
   "kind": "concept",
   "name": "直角坐标累次积分",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "若 $D=\\{(x,y):a\\le x\\le b,\\ \\varphi_1(x)\\le y\\le\\varphi_2(x)\\}$，可先对 $y$ 积分，再对 $x$ 积分。选择次序前先画区域；边界变化时需分段。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-concept-gs15-0b4049ad",
   "kind": "concept",
   "name": "一阶线性与伯努利",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "$y'+P(x)y=Q(x)$ 可乘积分因子 $\\mu=e^{\\int Pdx}$。伯努利方程 $y'+Py=Qy^n$（$n\\ne0,1$）在非零解区间令 $v=y^{1-n}$ 可化为一阶线性方程。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-concept-gs15-17ca4c8d",
   "kind": "concept",
   "name": "方程与解",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "微分方程含未知函数及其导数，最高导数阶数称方程的阶。含适当数量独立任意常数的解族称通解；把初始条件代入可确定相应特解。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-concept-gs15-2c077327",
   "kind": "concept",
   "name": "降阶与欧拉方程",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "若方程不显含 $y$，可令 $p=y'$；若不显含 $x$，可令 $p(y)=y'$，则 $y''=p\\,dp/dy$。欧拉方程在 $x>0$ 上可用 $t=\\log x$ 转为常系数方程。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-concept-gs15-9db3d01f",
   "kind": "concept",
   "name": "齐次与全微分方程",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "若 $y'=F(y/x)$，可令 $y=ux$ 转换为可分离方程。$Mdx+Ndy=0$ 若在单连通区域内满足 $M_y=N_x$ 并有连续偏导，则存在势函数 $\\Phi$ 使 $d\\Phi=Mdx+Ndy$，解为 $\\Phi=C$。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-concept-gs15-dbbadf04",
   "kind": "concept",
   "name": "变量可分离",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "形如 $y'=g(x)h(y)$ 的方程，在 $h(y)\\ne0$ 的区间上可写成 $dy/h(y)=g(x)dx$ 再积分。被除掉的零点可能给出常值解，须单独检查。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-concept-gs15-e6bf48c4",
   "kind": "concept",
   "name": "高阶线性方程",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "线性非齐次方程的通解等于对应齐次方程通解加一个特解。二阶常系数齐次方程由特征方程的实根、重根或共轭复根分别构造解。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-concept-gs16-081dfe81",
   "kind": "concept",
   "name": "幂级数和函数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "在收敛半径内部，幂级数可逐项求导和积分，结果收敛半径不变。逐项积分产生常数时，可用 $x=a$ 的函数值确定。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-concept-gs16-4e28ab68",
   "kind": "concept",
   "name": "幂级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "幂级数 $\\sum c_n(x-a)^n$ 在中心附近有收敛半径 $R$：$|x-a|<R$ 时绝对收敛，$|x-a|>R$ 时发散。两个端点需各自代入原级数判断。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-concept-gs16-54ad30c2",
   "kind": "concept",
   "name": "傅里叶级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "定义在 $[-l,l]$ 的函数可作周期为 $2l$ 的延拓，其傅里叶级数为 $a_0/2+\\sum_{n\\ge1}[a_n\\cos(n\\pi x/l)+b_n\\sin(n\\pi x/l)]$。系数由一个完整周期上的正交积分得到。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-concept-gs16-6eac22ec",
   "kind": "concept",
   "name": "奇偶延拓与收敛",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "在 $[0,l]$ 上作奇延拓得到正弦级数，作偶延拓得到余弦级数。在分段光滑等狄利克雷条件下，级数在连续点收敛到函数值，在跳跃点收敛到左右极限的平均值。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-concept-gs16-e775729a",
   "kind": "concept",
   "name": "正项级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "正项级数的部分和单调不减，收敛等价于部分和有上界。比较判别、比值判别和根值判别常用于正项级数，判别极限为 $1$ 时比值法和根值法通常无结论。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-concept-gs16-fbf38cf0",
   "kind": "concept",
   "name": "交错与绝对收敛",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "如果 $\\sum|a_n|$ 收敛，则 $\\sum a_n$ 绝对收敛，因而收敛。原级数收敛但绝对值级数发散时称条件收敛。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-concept-gs16-ffe82e9a",
   "kind": "concept",
   "name": "数项级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "级数 $\\sum a_n$ 的部分和 $S_N=\\sum_{n=1}^N a_n$ 若趋于有限极限 $S$，称级数收敛且和为 $S$。若 $a_n$ 不趋于零则级数必发散；反过来不成立。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-concept-gs17-105173ca",
   "kind": "concept",
   "name": "空间直线",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "过点 $P_0$ 且方向向量为 $\\mathbf v\\ne0$ 的直线可写为 $\\mathbf r=\\mathbf r_0+t\\mathbf v$。对称式只在对应方向分量非零时直接使用；零分量应写成坐标保持常数。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs17-433ee2e3",
   "kind": "concept",
   "name": "距离与夹角",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "点到平面距离是点法式左端绝对值除以法向量模。点到直线距离可由连接向量与方向向量的叉积求得；直线与平面夹角使用方向向量与法向量夹角的余角。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs17-45b2bc8e",
   "kind": "concept",
   "name": "曲面与曲线",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "球面 $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ 表示中心 $(a,b,c)$、半径 $R$ 的球面。方程中缺少某一坐标常描述母线平行该坐标轴的柱面；旋转曲面以距旋转轴的距离构造。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs17-78fcdda3",
   "kind": "concept",
   "name": "向量与方向",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "向量由大小和方向决定，可用坐标 $\\mathbf a=(a_1,a_2,a_3)$ 表示，模为 $|\\mathbf a|=\\sqrt{a_1^2+a_2^2+a_3^2}$。非零向量的单位方向向量为 $\\mathbf a/|\\mathbf a|$。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs17-a4f22735",
   "kind": "concept",
   "name": "点积与夹角",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$\\mathbf a\\cdot\\mathbf b=a_1b_1+a_2b_2+a_3b_3=|\\mathbf a||\\mathbf b|\\cos\\theta$。非零向量垂直当且仅当点积为零；投影的符号取决于方向。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs17-b2ec42ec",
   "kind": "concept",
   "name": "平面",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "经过点 $P_0(x_0,y_0,z_0)$ 且法向量为 $\\mathbf n=(A,B,C)\\ne0$ 的平面满足 $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$。平面间夹角可由法向量求出。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs17-b9ae1893",
   "kind": "concept",
   "name": "常见二次曲面与投影",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$x^2/a^2+y^2/b^2+z^2/c^2=1$ 是椭球面；$z=x^2+y^2$ 是旋转抛物面。空间曲线在坐标平面上的投影可消去相应坐标，同时保留剩余坐标的可取范围。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs17-f1526931",
   "kind": "concept",
   "name": "叉积与混合积",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$\\mathbf a\\times\\mathbf b$ 垂直于两向量，模为 $|\\mathbf a||\\mathbf b|\\sin\\theta$，方向由右手法则确定。$\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)$ 的绝对值是平行六面体体积。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-concept-gs18-3a1f824e",
   "kind": "concept",
   "name": "柱面与球坐标",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "柱面坐标 $x=r\\cos\\theta,y=r\\sin\\theta,z=z$，体积元为 $r\\,dr\\,d\\theta\\,dz$。球坐标取 $x=\\rho\\sin\\varphi\\cos\\theta,y=\\rho\\sin\\varphi\\sin\\theta,z=\\rho\\cos\\varphi$，其中…",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-gs18-3ba43fdd",
   "kind": "concept",
   "name": "保守场与路径无关",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "若 $\\mathbf F=\\nabla\\Phi$，则线积分等于势函数的终值减初值。在平面单连通区域、偏导连续的条件下，$P_y=Q_x$ 可保证 $Pdx+Qdy$ 为全微分。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-gs18-7fbde9b7",
   "kind": "concept",
   "name": "三重积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\iiint_\\Omega f\\,dV$ 由空间小体积上的加权和取极限得到。密度为 $\\rho$ 时质量为 $\\iiint_\\Omega\\rho\\,dV$；若 $f=1$，积分给出区域体积。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-gs18-bdd63ccd",
   "kind": "concept",
   "name": "第二类曲面积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS$ 是穿过指定侧的通量，反转法向会变号。对图形曲面向上侧，可用 $(P,Q,R)\\cdot(-z_x,-z_y,1)\\,dxdy$ 计算。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-gs18-d1ddcac0",
   "kind": "concept",
   "name": "第二类曲线积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\int_L Pdx+Qdy+Rdz=\\int_L\\mathbf F\\cdot d\\mathbf r$ 表示沿有向曲线的功或环流。参数化 $\\mathbf r(t)$ 后计算 $\\int \\mathbf F(\\mathbf r(t))\\cdot\\mathbf r'(t)dt$；反转方向会变号。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-gs18-e8ad0277",
   "kind": "concept",
   "name": "第一类曲线积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\int_L f\\,ds$ 对弧长积分，与曲线取向无关。若 $\\mathbf r(t)$ 正则且分段光滑，$ds=|\\mathbf r'(t)|dt$；它可表示线密度给出的质量。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-gs18-f3578803",
   "kind": "concept",
   "name": "散度与旋度",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\operatorname{div}\\mathbf F=P_x+Q_y+R_z$ 描述局部源汇；$\\operatorname{curl}\\mathbf F=\\nabla\\times\\mathbf F$ 与局部旋转有关。公式使用前须检查区域、光滑性和方向。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-gs18-f6618fc4",
   "kind": "concept",
   "name": "第一类曲面积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\iint_S f\\,dS$ 按面积累积，不依赖法向方向。若曲面是 $z=z(x,y)$，则 $dS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy$。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-concept-xd01-3efe03d4",
   "kind": "concept",
   "name": "余子式与代数余子式",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "在 $n$ 阶行列式中，划去元素 $a_{ij}$ 所在的第 $i$ 行、第 $j$ 列，剩下的 $(n-1)^2$ 个元素按原位置组成的 $n-1$ 阶行列式称为 $a_{ij}$ 的**余子式** $M_{ij}$；称 $A_{ij}=(-1)^{i+j}M_{ij}$ 为**代数余子式**。 代数余子式的重要特点…",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-concept-xd01-59a218de",
   "kind": "concept",
   "name": "n阶行列式的定义",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "$$\\det A=\\begin{vmatrix}a_{11}&a_{12}&\\cdots&a_{1n}\\\\a_{21}&a_{22}&\\cdots&a_{2n}\\\\\\vdots&\\vdots&&\\vdots\\\\a_{n1}&a_{n2}&\\cdots&a_{nn}\\end{vmatrix}=\\sum_{p_1p_2\\c…",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-concept-xd01-85e53c7c",
   "kind": "concept",
   "name": "排列与逆序数",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "由 $1,2,\\dots,n$ 组成的一个有序数组称为一个 $n$ 级排列。在一个排列中，若一对数的前后位置与大小顺序相反（前面的数大于后面的数），则它们构成一个**逆序**。排列中逆序的总数称为该排列的**逆序数**，记作 $\\tau(p_1p_2\\cdots p_n)$。 逆序数为奇数的排列叫**奇排列**，为偶数…",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-concept-xd01-dccf53ec",
   "kind": "concept",
   "name": "行列式的几何意义",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "二阶行列式 $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}$ 的绝对值等于以向量 $(a,c)$、$(b,d)$ 为邻边的平行四边形的**面积**；三阶行列式的绝对值等于三个向量张成的平行六面体的**体积**。 行列式为 $0$ 意味着这些向量**线性相关**（共线或共面），这一几何直观在后…",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-concept-xd01-e2145c8a",
   "kind": "concept",
   "name": "特殊行列式的值",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "上三角或下三角行列式等于主对角线元素之积。若 $n$ 阶矩阵只有副对角线元素 $a_1,\\ldots,a_n$ 非零，其行列式为 $(-1)^{n(n-1)/2}a_1\\cdots a_n$。分块三角矩阵 $\\begin{pmatrix}A&O\\\\C&B\\end{pmatrix}$ 的行列式为 $|A||B|$，其中…",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-concept-xd02-1475924e",
   "kind": "concept",
   "name": "矩阵与矩阵运算",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "$m\\times n$ 个数排成的矩形表称为 $m\\times n$ 矩阵。**同型矩阵**才能相加。数乘 $kA$ 是每个元素都乘 $k$。 矩阵乘法 $AB$：$A$ 的列数必须等于 $B$ 的行数，$(AB)_{ij}=\\sum_k a_{ik}b_{kj}$。 **三条铁律**：① $AB\\neq BA$（一般…",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-concept-xd02-1704302c",
   "kind": "concept",
   "name": "伴随矩阵 A*",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "$A^*$ 由代数余子式构成：$A^*=(A_{ji})$，即**第 $(i,j)$ 元是 $A_{ji}$**（转置放置）。核心恒等式： $$AA^*=A^*A=|A|E$$ 由它推出整套公式（见定理部分）。$A^*$ 与 $A$ 的秩关系、行列式关系是考研高频考点。",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-concept-xd02-2bc565ab",
   "kind": "concept",
   "name": "方阵的幂与多项式",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "$A^n=A\\cdot A\\cdots A$（$n$ 个）。若 $AB=BA$，则 $(A+B)^2=A^2+2AB+B^2$、$(AB)^n=A^nB^n$ 等公式才成立——没有交换性时二项式定理**不成立**，展开只能用逐项乘。 矩阵多项式 $f(A)=a_mA^m+\\cdots+a_1A+a_0E$ 仍可交换（…",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-concept-xd02-7feea929",
   "kind": "concept",
   "name": "初等变换与初等矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "三种初等行（列）变换：① 对换两行；② 某行乘非零常数 $k$；③ 某行的 $k$ 倍加到另一行。 **初等矩阵**是单位矩阵经过一次初等变换得到的矩阵。核心对应：对 $A$ 作一次初等**行**变换 = 在 $A$ **左乘**相应的初等矩阵；作列变换 = **右乘**初等矩阵。 初等矩阵都可逆，且其逆仍是同类型的初…",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-concept-xd02-90c0bfd3",
   "kind": "concept",
   "name": "分块矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "用横竖线把矩阵分成若干小块，每一小块当作一个\"元素\"参与运算（乘法要注意块的尺寸匹配）。 常用结论：主对角分块的逆 $\\begin{pmatrix}A&O\\\\O&B\\end{pmatrix}^{-1}=\\begin{pmatrix}A^{-1}&O\\\\O&B^{-1}\\end{pmatrix}$；副对角分块…",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-concept-xd02-bbee40d1",
   "kind": "concept",
   "name": "逆矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "对 $n$ 阶方阵 $A$，若存在 $B$ 使 $AB=BA=E$，则称 $A$ **可逆**，$B$ 为 $A$ 的逆矩阵 $A^{-1}$，且逆矩阵唯一。 $A$ 可逆 $\\iff |A|\\neq0\\iff r(A)=n\\iff$ 行（列）向量组线性无关 $\\iff Ax=0$ 只有零解 $\\iff A$ 的特征值…",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-concept-xd02-cd90afbe",
   "kind": "concept",
   "name": "矩阵的秩",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "矩阵中非零子式的最高阶数称为**秩** $r(A)$。$r(A)=n\\iff A$ 可逆（满秩）。 初等变换不改变秩，故求秩用行变换化阶梯形数非零行个数。 重要事实：$r(A)=r(A^T)=r(A^TA)$；$r(kA)=r(A)\\ (k\\neq0)$；$r(A+B)\\le r(A)+r(B)…",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-concept-xd03-309de2fa",
   "kind": "concept",
   "name": "线性相关与线性无关",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "存在**不全为零**的数 $k_1,\\dots,k_s$ 使 $k_1\\alpha_1+\\cdots+k_s\\alpha_s=0$，称向量组**线性相关**；否则（只有全零系数）称**线性无关**。 等价刻画：① 相关 $\\iff$ 至少一个向量可由其余向量线性表示；② 无关 $\\iff$ 任一向量都不能由其余表示；③…",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-concept-xd03-392f927b",
   "kind": "concept",
   "name": "n维向量与线性组合",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "$n$ 个有序数组成的数组 $\\alpha=(a_1,\\dots,a_n)^T$ 称为 $n$ 维列向量。若 $\\beta=k_1\\alpha_1+\\cdots+k_s\\alpha_s$，称 $\\beta$ 可由 $\\alpha_1,\\dots,\\alpha_s$ **线性表示**。 方程观点：$\\beta$ 可由…",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-concept-xd03-3b4a5e4b",
   "kind": "concept",
   "name": "向量组的等价",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "两组向量能互相线性表示称为**等价**。等价向量组秩相同；但秩相同**不一定**等价（例如 $\\{(1,0)^T\\}$ 与 $\\{(0,1)^T\\}$ 秩都是 1 却互相表示不了）。 向量组 $I$ 能由 $II$ 表示 $\\Rightarrow r(I)\\le r(II)$——这是秩比较定理，是抽象题的关键武器。",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-concept-xd03-6354c93d",
   "kind": "concept",
   "name": "极大线性无关组",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "向量组的**极大线性无关组**：一个部分组，它本身线性无关，且再添加原组中任一向量都线性相关。它所含向量个数就是向量组的**秩** $r(I)$。 极大无关组一般不唯一（但所含向量个数即秩唯一）。求法：把向量按列拼成矩阵作初等行变换化阶梯形，主元所在列对应**原向量**构成一个极大无关组（注意用列向量拼接、且主元列的判…",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-concept-xd03-84c4cf39",
   "kind": "concept",
   "name": "正交矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "满足 $A^TA=E$ 的实方阵称**正交矩阵**。等价刻画：列（行）向量组是标准正交组；$A^{-1}=A^T$；$A$ 的各列长度为 1 且两两正交。 正交变换 $y=Ax$ 保持内积与长度不变（$\\|Ay\\|=\\|y\\|$）——这是二次型用正交变换保持几何形状不变的原因（第6章）。",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-concept-xd03-9a7acb9d",
   "kind": "concept",
   "name": "内积与正交",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "内积 $(\\alpha,\\beta)=\\alpha^T\\beta=\\sum a_ib_i$。长度 $\\|\\alpha\\|=\\sqrt{(\\alpha,\\alpha)}$。$(\\alpha,\\beta)=0$ 称 $\\alpha$ 与 $\\beta$ **正交**。 **标准正交基**：两两正交且长度为 1 的基。将线性…",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-concept-xd04-1a2d92d4",
   "kind": "concept",
   "name": "基础解系",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "齐次方程组 $Ax=0$ 解集的**极大无关组**称为基础解系，含 $n-r(A)$ 个解向量 $\\xi_1,\\dots,\\xi_{n-r}$。 齐次通解：$x=k_1\\xi_1+\\cdots+k_{n-r}\\xi_{n-r}$（$k_i$ 任意）。 基础解系不唯一，但它必须满足：① 每个都是解；② 线性无关；③ 个数…",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-concept-xd04-3dabdc84",
   "kind": "concept",
   "name": "解的三种情形",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "对 $n$ 元方程组 $Ax=b$（$A$ 为 $m\\times n$ 矩阵），记 $r(A)=r$，$r(A,b)$ 为增广矩阵的秩： ① **无解** $\\iff r(A)<r(A,b)$（出现矛盾方程 $0=d,\\ d\\neq0$）； ② **唯一解** $\\iff r(A)=r(A,b)=n$； ③ **无穷多…",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-concept-xd04-83e4c141",
   "kind": "concept",
   "name": "公共解与同解",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "**公共解**：同时满足两个方程组的解。求法：联立两个方程组；或求出 $A$ 的通解代入 $B$ 定参数。 **同解**：两个方程组解集完全相同。必要条件：$r(A)=r(B)$（不充分）。$A$、$B$ 同解 $\\iff r\\begin{pmatrix}A\\\\B\\end{pmatrix}=r(A)=r(B)$（同解方…",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-concept-xd04-8d740eca",
   "kind": "concept",
   "name": "几何直观（n=3）",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "齐次方程组的解空间是 $\\mathbb{R}^3$ 中过原点的**直线或平面**（维数 $n-r$）。非齐次 $Ax=b$ 的解集是不过原点的平面/直线（有解时）——特解把它从原点\"平移\"出去。无解即平面/直线不相交（平行）。这一直观帮助理解\"特解 + 齐次通解\"的平移结构。",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-concept-xd04-ce21a0ea",
   "kind": "concept",
   "name": "解的结构",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "非齐次 $Ax=b$ 的通解 = **一个特解 $\\eta^*$** + **对应齐次 $Ax=0$ 的通解**： $$x=\\eta^*+k_1\\xi_1+\\cdots+k_{n-r}\\xi_{n-r}$$ 解的性质：$\\eta_1,\\eta_2$ 是 $Ax=b$ 的解，则 $\\eta_1-\\eta_2$ 是…",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-concept-xd05-097e26e1",
   "kind": "concept",
   "name": "特征多项式与特征方程",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "$f(\\lambda)=|\\lambda E-A|$ 是 $\\lambda$ 的 $n$ 次多项式，**首项系数为 1**，常数项 $=(-1)^n|A|$。 展开式：$f(\\lambda)=\\lambda^n-(\\operatorname{tr}A)\\lambda^{n-1}+\\cdots+(-1)^n|A|$。 由…",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-concept-xd05-24433f22",
   "kind": "concept",
   "name": "特征值的几何直观",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "$A\\xi=\\lambda\\xi$ 表示：矩阵 $A$ 作用在向量 $\\xi$ 上只做了\"伸缩\"，方向不变——特征向量就是 $A$ 变换下的**不变方向**，$\\lambda$ 是伸缩倍数。$|\\lambda|>1$ 伸长、$|\\lambda|<1$ 压缩、$\\lambda<0$ 反向。对角化 = 把空间扭到所有不变方…",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-concept-xd05-50b820a4",
   "kind": "concept",
   "name": "相似对角化",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "若 $A\\sim\\Lambda=\\mathrm{diag}(\\lambda_1,\\dots,\\lambda_n)$，即 $P^{-1}A P=\\Lambda$，则 $P$ 的第 $i$ 列恰是 $\\lambda_i$ 的特征向量。 **可对角化充要条件**：$A$ 有 $n$ 个线性无关的特征向量。 **充分条件**…",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-concept-xd05-8c8e2242",
   "kind": "concept",
   "name": "相似矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "若存在可逆矩阵 $P$ 使 $P^{-1}AP=B$，称 $A$ 与 $B$ **相似**，记 $A\\sim B$。 相似必有的相同量：特征多项式（从而特征值、迹、行列式）、秩、各特征值的线性无关特征向量个数。 **但特征值相同不一定相似**（反例…",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-concept-xd05-bde5923f",
   "kind": "concept",
   "name": "实对称矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "实对称矩阵三大性质：① 特征值全为实数；② **不同特征值的特征向量自动正交**；③ 必可**正交**对角化：存在正交阵 $Q$ 使 $Q^TAQ=Q^{-1}AQ=\\Lambda$。 计算流程：求特征值 → 求各特征向量 → （重特征值内部）施密特正交化 → 全部单位化 → 按列拼成 $Q$。",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-concept-xd05-df6b1488",
   "kind": "concept",
   "name": "特征值与特征向量的定义",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "若存在数 $\\lambda$ 和**非零**向量 $\\xi$ 使 $$A\\xi=\\lambda\\xi$$ 则称 $\\lambda$ 为 $A$ 的特征值，$\\xi$ 为属于 $\\lambda$ 的特征向量。 求法：解特征方程 $|\\lambda E-A|=0$ 得特征值；对每个 $\\lambda$ 解…",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-concept-xd06-47513a51",
   "kind": "concept",
   "name": "正交变换法",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "对实对称矩阵 $A$，存在正交矩阵 $Q$ 使 $Q^TAQ=\\Lambda=\\mathrm{diag}(\\lambda_1,\\dots,\\lambda_n)$。令 $x=Qy$，则 $f=y^T\\Lambda y=\\lambda_1y_1^2+\\cdots+\\lambda_ny_n^2$。 **标准形系数恰是…",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-concept-xd06-82497064",
   "kind": "concept",
   "name": "配方法",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "含平方项时：先把所有含 $x_1$ 的项配方 $a_{11}\\left(x_1+\\frac{a_{12}}{a_{11}}x_2+\\cdots\\right)^2$，再对剩余变量继续；完全无平方项时先作代换 $x_1=y_1+y_2,\\ x_2=y_1-y_2$ 制造平方项。配方法得到的标准形系数**不是**特征值，但正…",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-concept-xd06-8807192e",
   "kind": "concept",
   "name": "标准形与规范形",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "只含平方项的二次型 $f=k_1y_1^2+\\cdots+k_ny_n^2$ 称为**标准形**；系数只取 $1,-1,0$ 的标准形称为**规范形**。 惯性定理：无论用何种可逆线性变换化标准形，正系数个数 $p$（正惯性指数）与负系数个数 $q$（负惯性指数）都不变，$p+q=r(A)$。规范形由 $p,q$ 唯一…",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-concept-xd06-8d1823b6",
   "kind": "concept",
   "name": "二次型及其矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "含 $n$ 个变量的二次齐次多项式 $$f(x_1,\\dots,x_n)=\\sum_{i\\le j}a_{ij}x_ix_j$$ 称为 $n$ 元二次型。规定 $A=(a_{ij})$ **对称**（$a_{ij}=a_{ji}$，交叉项系数各分一半），则 $f=x^TAx$。 二次型与对称矩阵一一对应：$A$ 称为二…",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-concept-xd06-9c7cd04c",
   "kind": "concept",
   "name": "正定性",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "对任意 $x\\ne0$ 都有 $f=x^TAx>0$，称二次型（或 $A$）**正定**。正定 $\\iff$ 各阶顺序主子式全为正 $\\iff$ 特征值全为正 $\\iff$ 正惯性指数 $p=n\\iff$ 存在可逆阵 $C$ 使 $A=C^TC\\iff A\\simeq E$。 几何意义：正定的 $f=1$ 是椭球面；负…",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-concept-xd06-c8e7e1a1",
   "kind": "concept",
   "name": "合同变换",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "$B=C^TAC$（$C$ 可逆）称 $A$ 与 $B$ **合同**。可逆线性变换保持二次型的合同关系。 三种关系对比：**等价**（秩相同，最弱）；**相似**（特征值相同，$P^{-1}AP$）；**合同**（正负惯性指数相同，$C^TAC$）。正交变换 $Q^TAQ=\\Lambda$ 同时是相似与合同（…",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-theorem-gl01-4f390b66",
   "kind": "theorem",
   "name": "独立性的判定链",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "$A,B$ 独立 $\\iff P(AB)=P(A)P(B)$ $\\iff$ $P(B|A)=P(B)$（$P(A)>0$）。三事件独立需要**四个**等式：两两独立（三个）+ $P(ABC)=P(A)P(B)P(C)$。",
   "matchText": "独立性的判定链 $A,B$ 独立 $\\iff P(AB)=P(A)P(B)$ $\\iff$ $P(B|A)=P(B)$（$P(A)>0$）。三事件独立需要**四个**等式：两两独立（三个）+ $P(ABC)=P(A)P(B)P(C)$。 两两独立推不出相互独立（经典反例：扔两枚硬币，$A=$第一枚正面，$B=$第二枚正面，$C=$结果相同）。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-theorem-gl01-75d00867",
   "kind": "theorem",
   "name": "减法公式",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "$$P(A-B)=P(A\\bar B)=P(A)-P(AB)$$",
   "matchText": "减法公式 $$P(A-B)=P(A\\bar B)=P(A)-P(AB)$$ 特别地 $P(A)=P(AB)+P(A\\bar B)$——把 $A$ 按\"是否伴随 $B$\"分解，是拆分概率的基本手法。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-theorem-gl01-885fcc9f",
   "kind": "theorem",
   "name": "加法公式",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "$$P(A\\cup B)=P(A)+P(B)-P(AB)$$ $$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$$",
   "matchText": "加法公式 $$P(A\\cup B)=P(A)+P(B)-P(AB)$$ $$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$$ 互斥时 $P(A\\cup B)=P(A)+P(B)$。三事件容斥的正负号\"加减交替\"要记牢。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-theorem-gl01-cd851af9",
   "kind": "theorem",
   "name": "贝叶斯公式",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "条件同上，$$P(B_j|A)=\\frac{P(B_j)P(A|B_j)}{\\sum\\limits_{i}P(B_i)P(A|B_i)}$$",
   "matchText": "贝叶斯公式 条件同上，$$P(B_j|A)=\\frac{P(B_j)P(A|B_j)}{\\sum\\limits_{i}P(B_i)P(A|B_i)}$$ 完备事件组，$P(A)>0$ \"执果溯因\"：结果已发生，反推是哪个原因导致的。分母恰是全概率公式。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-theorem-gl01-d195e8ae",
   "kind": "theorem",
   "name": "乘法公式",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "$$P(AB)=P(A)P(B|A)=P(B)P(A|B)\\quad(P(A)>0,P(B)>0)$$ 推广：$P(A_1A_2\\cdots A_n)=P(A_1)P(A_2|A_1)P(A_3|A_1A_2)\\cdots$",
   "matchText": "乘法公式 $$P(AB)=P(A)P(B|A)=P(B)P(A|B)\\quad(P(A)>0,P(B)>0)$$ 推广：$P(A_1A_2\\cdots A_n)=P(A_1)P(A_2|A_1)P(A_3|A_1A_2)\\cdots$ \"串联\"事件用乘法：逐个发生、逐步缩小样本空间。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-theorem-gl01-fadc1523",
   "kind": "theorem",
   "name": "全概率公式",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "若 $B_1,B_2,\\dots,B_n$ 是**完备事件组**（两两互斥、并集为 $\\Omega$，$P(B_i)>0$），则 $$P(A)=\\sum_{i=1}^nP(B_i)P(A|B_i)$$",
   "matchText": "全概率公式 若 $B_1,B_2,\\dots,B_n$ 是**完备事件组**（两两互斥、并集为 $\\Omega$，$P(B_i)>0$），则 $$P(A)=\\sum_{i=1}^nP(B_i)P(A|B_i)$$ 完备事件组 \"由因求果\"：按不同原因分支计算结果概率。分清谁是\"原因\"（$B_i$）谁是\"结果\"（$A$）是解题关键。",
   "source": "data/lessons/gl01.js"
  },
  {
   "id": "k-theorem-gl02-202e4707",
   "kind": "theorem",
   "name": "泊松定理",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "若 $n p_n\\to\\lambda>0$，则对每个固定非负整数 $k$，$\\binom nk p_n^k(1-p_n)^{n-k}\\to e^{-\\lambda}\\lambda^k/k!$。",
   "matchText": "泊松定理 若 $n p_n\\to\\lambda>0$，则对每个固定非负整数 $k$，$\\binom nk p_n^k(1-p_n)^{n-k}\\to e^{-\\lambda}\\lambda^k/k!$。 $n\\to\\infty$，$0\\le p_n\\le1$，$np_n\\to\\lambda$。 实用形式：$B(n,p)\\approx P(\\lambda),\\ \\lambda=np$。例：1000 人投保每人出险率 0.002，出险人数近似 $P(2)$。",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-theorem-gl02-7439a7ef",
   "kind": "theorem",
   "name": "分布函数的性质定理",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "$F$ 是某随机变量的分布函数 $\\iff$ $F$ 单调不减、右连续、$F(-\\infty)=0,\\ F(+\\infty)=1$。",
   "matchText": "分布函数的性质定理 $F$ 是某随机变量的分布函数 $\\iff$ $F$ 单调不减、右连续、$F(-\\infty)=0,\\ F(+\\infty)=1$。 此定理用于\"验证给定的函数能否作为分布函数\"与\"由 $F$ 反求参数\"（通常用右连续与端点极限列方程）。",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-theorem-gl02-812e678f",
   "kind": "theorem",
   "name": "正态分布标准化定理",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "$X\\sim N(\\mu,\\sigma^2)$（$\\sigma>0$）则 $Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1)$，且 $P(X\\le x)=\\Phi\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$。",
   "matchText": "正态分布标准化定理 $X\\sim N(\\mu,\\sigma^2)$（$\\sigma>0$）则 $Z=\\dfrac{X-\\mu}{\\sigma}\\sim N(0,1)$，且 $P(X\\le x)=\\Phi\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$。 逆用：$\\Phi$ 表只给标准正态；含参数正态先标准化。$\\Phi(-x)=1-\\Phi(x)$ 处理负值查表。",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-theorem-gl02-90555bf0",
   "kind": "theorem",
   "name": "指数分布的无记忆性",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "$X\\sim E(\\lambda)\\Rightarrow P(X>s+t|X>s)=P(X>t)$。",
   "matchText": "指数分布的无记忆性 $X\\sim E(\\lambda)\\Rightarrow P(X>s+t|X>s)=P(X>t)$。 几何分布也有无记忆性（离散版）。常以\"已用 $s$ 小时还能再用 $t$ 小时\"的实际情境命题。",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-theorem-gl02-f055bab5",
   "kind": "theorem",
   "name": "单调函数的密度公式",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "$y=g(x)$ 严格单调、可导，反函数 $x=h(y)$，则 $Y=g(X)$ 的密度 $$f_Y(y)=\\begin{cases}f_X[h(y)]\\,|h'(y)|, & y\\in(\\alpha,\\beta)\\\\0,&\\text{其他}\\end{cases}$$ 其中 $(\\alpha,\\beta)$ 为…",
   "matchText": "单调函数的密度公式 $y=g(x)$ 严格单调、可导，反函数 $x=h(y)$，则 $Y=g(X)$ 的密度 $$f_Y(y)=\\begin{cases}f_X[h(y)]\\,|h'(y)|, & y\\in(\\alpha,\\beta)\\\\0,&\\text{其他}\\end{cases}$$ 其中 $(\\alpha,\\beta)$ 为 $g$ 的值域。 $g$ 严格单调可导 不单调时（如 $Y=X^2$）必须用分布函数法分段处理：$F_Y(y)=P(-\\sqrt y\\le X\\le\\sqrt y)$。",
   "source": "data/lessons/gl02.js"
  },
  {
   "id": "k-theorem-gl03-23ff5231",
   "kind": "theorem",
   "name": "边缘密度公式",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "$f_X(x)=\\int_{-\\infty}^{+\\infty}f(x,y)dy,\\qquad f_Y(y)=\\int_{-\\infty}^{+\\infty}f(x,y)dx$",
   "matchText": "边缘密度公式 $f_X(x)=\\int_{-\\infty}^{+\\infty}f(x,y)dy,\\qquad f_Y(y)=\\int_{-\\infty}^{+\\infty}f(x,y)dx$ \"知联合求边缘\"积分即可；\"知边缘求联合\"一般不行（需独立性或条件分布补充信息）——这是考试最爱设的陷阱。",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-theorem-gl03-98bb55bb",
   "kind": "theorem",
   "name": "独立性判定定理",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "连续型：$f(x,y)=f_X(x)f_Y(y)$ 几乎处处成立 $\\iff$ 独立。离散型：对**所有** $i,j$ 有 $p_{ij}=p_{i\\cdot}p_{\\cdot j}$ $\\iff$ 独立。",
   "matchText": "独立性判定定理 连续型：$f(x,y)=f_X(x)f_Y(y)$ 几乎处处成立 $\\iff$ 独立。离散型：对**所有** $i,j$ 有 $p_{ij}=p_{i\\cdot}p_{\\cdot j}$ $\\iff$ 独立。 实用判据：① 联合密度能\"分离变量\"且定义域为矩形（乘积型区域）→ 独立；② 定义域含 $x<y$ 之类的耦合 → 不独立。",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-theorem-gl03-a1ce518a",
   "kind": "theorem",
   "name": "卷积公式",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "独立时 $Z=X+Y$ 的密度：$$f_Z(z)=\\int_{-\\infty}^{+\\infty}f_X(x)f_Y(z-x)dx$$",
   "matchText": "卷积公式 独立时 $Z=X+Y$ 的密度：$$f_Z(z)=\\int_{-\\infty}^{+\\infty}f_X(x)f_Y(z-x)dx$$ $X,Y$ 独立 重要特例：$X\\sim N(\\mu_1,\\sigma_1^2),Y\\sim N(\\mu_2,\\sigma_2^2)$ 独立 $\\Rightarrow X+Y\\sim N(\\mu_1+\\mu_2,\\sigma_1^2+\\sigma_2^2)$；独立正态的线性组合仍正态。",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-theorem-gl03-a37ad76b",
   "kind": "theorem",
   "name": "max/min 分布公式",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "$X_1,\\dots,X_n$ 独立同分布 $F$：$$F_{\\max}(z)=[F(z)]^n,\\quad F_{\\min}(z)=1-[1-F(z)]^n$$",
   "matchText": "max/min 分布公式 $X_1,\\dots,X_n$ 独立同分布 $F$：$$F_{\\max}(z)=[F(z)]^n,\\quad F_{\\min}(z)=1-[1-F(z)]^n$$ 独立（同分布时公式最简） 直观：max 全部 $\\le z$ 要求每个都 $\\le z$（乘法）；min 至少一个 $>z$ 用对立。寿命问题、系统可靠性问题的模型。",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-theorem-gl03-cefa061d",
   "kind": "theorem",
   "name": "条件分布",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "离散：$P(X=x_i|Y=y_j)=\\dfrac{p_{ij}}{p_{\\cdot j}}$。连续：$f_{X|Y}(x|y)=\\dfrac{f(x,y)}{f_Y(y)}$。",
   "matchText": "条件分布 离散：$P(X=x_i|Y=y_j)=\\dfrac{p_{ij}}{p_{\\cdot j}}$。连续：$f_{X|Y}(x|y)=\\dfrac{f(x,y)}{f_Y(y)}$。 分母大于零 $X|Y=y$ 是一个完整的一维分布（可求其期望方差）；\"独立时条件分布 = 边缘分布\"。",
   "source": "data/lessons/gl03.js"
  },
  {
   "id": "k-theorem-gl04-1909d3dc",
   "kind": "theorem",
   "name": "二维正态的数字特征",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "$(X,Y)\\sim N$ 时 $\\operatorname{Cov}(X,Y)=\\rho\\sigma_1\\sigma_2$；独立 $\\iff\\rho=0\\iff$ 不相关（二维正态特有）。",
   "matchText": "二维正态的数字特征 $(X,Y)\\sim N$ 时 $\\operatorname{Cov}(X,Y)=\\rho\\sigma_1\\sigma_2$；独立 $\\iff\\rho=0\\iff$ 不相关（二维正态特有）。 $\\rho$ 就是相关系数本身，参数表直接给出协方差结构。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-theorem-gl04-1f912150",
   "kind": "theorem",
   "name": "期望的性质",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "① $E(C)=C$；② $E(aX+bY)=aE(X)+bE(Y)$（**线性性，无条件成立**）；③ $X,Y$ 独立 $\\Rightarrow E(XY)=E(X)E(Y)$；④ 柯西不等式 $[E(XY)]^2\\le E(X^2)E(Y^2)$。",
   "matchText": "期望的性质 ① $E(C)=C$；② $E(aX+bY)=aE(X)+bE(Y)$（**线性性，无条件成立**）；③ $X,Y$ 独立 $\\Rightarrow E(XY)=E(X)E(Y)$；④ 柯西不等式 $[E(XY)]^2\\le E(X^2)E(Y^2)$。 线性性不需要独立！这是与\"积的期望\"最大的区别。求复杂期望第一步永远是拆线性。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-theorem-gl04-5a5eafcc",
   "kind": "theorem",
   "name": "常见函数的期望技巧",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "$E(X^2)=D(X)+[E(X)]^2$；$X\\sim N(0,1)$ 时 $E(X^2)=1,\\ E(X^4)=3$；对称分布 $E(X^{2k+1})=0$（若存在）。",
   "matchText": "常见函数的期望技巧 $E(X^2)=D(X)+[E(X)]^2$；$X\\sim N(0,1)$ 时 $E(X^2)=1,\\ E(X^4)=3$；对称分布 $E(X^{2k+1})=0$（若存在）。 正态各阶矩：$E(Z^{2k})=(2k-1)!!$。对称分布奇数次矩为零可大幅简化计算。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-theorem-gl04-611b9c98",
   "kind": "theorem",
   "name": "方差的性质",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "① $D(C)=0$；② $D(aX+b)=a^2D(X)$；③ $D(X\\pm Y)=D(X)+D(Y)\\pm2\\operatorname{Cov}(X,Y)$；④ 独立时 $D(X\\pm Y)=D(X)+D(Y)$；⑤ $D(X)\\ge E[X-C]^2$ 取 $C=E(X)$ 时最小。",
   "matchText": "方差的性质 ① $D(C)=0$；② $D(aX+b)=a^2D(X)$；③ $D(X\\pm Y)=D(X)+D(Y)\\pm2\\operatorname{Cov}(X,Y)$；④ 独立时 $D(X\\pm Y)=D(X)+D(Y)$；⑤ $D(X)\\ge E[X-C]^2$ 取 $C=E(X)$ 时最小。 ④ 中\"独立时和差方差都是相加\"——减法也加！这是选择题陷阱。⑤ 说明期望是均方误差最优常数。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-theorem-gl04-7ebc55a5",
   "kind": "theorem",
   "name": "独立 ⇒ 不相关",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "$X,Y$ 独立 $\\Rightarrow\\operatorname{Cov}(X,Y)=0\\Rightarrow\\rho=0$；反之不成立（反例：$X\\sim U(-1,1)$，$Y=X^2$，$E(XY)=E(X^3)=0=E(X)E(Y)$ 不相关，但有精确二次关系）。",
   "matchText": "独立 ⇒ 不相关 $X,Y$ 独立 $\\Rightarrow\\operatorname{Cov}(X,Y)=0\\Rightarrow\\rho=0$；反之不成立（反例：$X\\sim U(-1,1)$，$Y=X^2$，$E(XY)=E(X^3)=0=E(X)E(Y)$ 不相关，但有精确二次关系）。 反例模板 \"$Y=X^2+X$ 的对称分布\"要记住，证明题与选择题反复出现。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-theorem-gl04-b9e2f4c7",
   "kind": "theorem",
   "name": "切比雪夫不等式（预备）",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "$$P(|X-E(X)|\\ge\\varepsilon)\\le\\frac{D(X)}{\\varepsilon^2}$$",
   "matchText": "切比雪夫不等式（预备） $$P(|X-E(X)|\\ge\\varepsilon)\\le\\frac{D(X)}{\\varepsilon^2}$$ 用方差控制偏离概率，是第 5 章大数定律的工具，此处先记形式。",
   "source": "data/lessons/gl04.js"
  },
  {
   "id": "k-theorem-gl05-297aaffc",
   "kind": "theorem",
   "name": "切比雪夫不等式",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "对任何 $\\varepsilon>0$：$P(|X-EX|\\ge\\varepsilon)\\le\\dfrac{DX}{\\varepsilon^2}$。",
   "matchText": "切比雪夫不等式 对任何 $\\varepsilon>0$：$P(|X-EX|\\ge\\varepsilon)\\le\\dfrac{DX}{\\varepsilon^2}$。 $E(X),D(X)$ 存在（有限） 证明：把 $\\sigma^2=\\int(x-\\mu)^2f\\,dx\\ge\\int_{|x-\\mu|\\ge\\varepsilon}\\varepsilon^2f\\,dx=\\varepsilon^2P(\\cdots)$。应用：① 不查分布粗估概率；② 证明切比雪夫大数定律。",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-theorem-gl05-30191c9c",
   "kind": "theorem",
   "name": "伯努利大数定律",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "$n_A$ 为 $n$ 次独立重复试验中 $A$ 发生的次数，$p=P(A)$，则 $\\dfrac{n_A}{n}\\xrightarrow{P}p$。",
   "matchText": "伯努利大数定律 $n_A$ 为 $n$ 次独立重复试验中 $A$ 发生的次数，$p=P(A)$，则 $\\dfrac{n_A}{n}\\xrightarrow{P}p$。 频率稳定性的严格数学表述，也是\"用频率估计概率\"（数理统计中矩估计）的合法性来源。",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-theorem-gl05-6d031588",
   "kind": "theorem",
   "name": "切比雪夫大数定律",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "$X_1,\\dots,X_n$ 两两不相关，$E(X_i)=\\mu_i$，$D(X_i)\\le C$（一致有界），则 $$\\frac1n\\sum_{i=1}^nX_i\\xrightarrow{P}\\frac1n\\sum_{i=1}^n\\mu_i$$",
   "matchText": "切比雪夫大数定律 $X_1,\\dots,X_n$ 两两不相关，$E(X_i)=\\mu_i$，$D(X_i)\\le C$（一致有界），则 $$\\frac1n\\sum_{i=1}^nX_i\\xrightarrow{P}\\frac1n\\sum_{i=1}^n\\mu_i$$ 两两不相关 + 方差一致有界 证明就是切比雪夫不等式套在 $\\bar X_n$ 上：$D(\\bar X_n)\\le\\dfrac{C}{n}\\to0$。同分布时右端即 $\\mu$。",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-theorem-gl05-72b53152",
   "kind": "theorem",
   "name": "列维—林德伯格 CLT",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "独立同分布 + 期望方差存在，则 $\\dfrac{\\sum X_i-n\\mu}{\\sqrt{n}\\sigma}$ 以分布收敛于 $N(0,1)$；实用式 $\\sum X_i\\approx N(n\\mu,n\\sigma^2)$、$\\bar X\\approx N(\\mu,\\sigma^2/n)$。",
   "matchText": "列维—林德伯格 CLT 独立同分布 + 期望方差存在，则 $\\dfrac{\\sum X_i-n\\mu}{\\sqrt{n}\\sigma}$ 以分布收敛于 $N(0,1)$；实用式 $\\sum X_i\\approx N(n\\mu,n\\sigma^2)$、$\\bar X\\approx N(\\mu,\\sigma^2/n)$。 独立同分布，$\\sigma^2>0$ 应用三步：标准化 → 查 $\\Phi$ 表 → 写结论。样本均值的近似分布是数理统计章节的接口。",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-theorem-gl05-8193ef57",
   "kind": "theorem",
   "name": "辛钦大数定律",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "$X_1,\\dots,X_n$ **独立同分布**且 $E(X_i)=\\mu$ 存在，则 $\\bar X_n=\\dfrac1n\\sum X_i\\xrightarrow{P}\\mu$。",
   "matchText": "辛钦大数定律 $X_1,\\dots,X_n$ **独立同分布**且 $E(X_i)=\\mu$ 存在，则 $\\bar X_n=\\dfrac1n\\sum X_i\\xrightarrow{P}\\mu$。 独立同分布 + 期望存在（方差可不存在） 与切比雪夫版对比：不要求方差，但要求同分布。条件\"独立同分布\"缺一不可，选择题常考\"把同分布去掉/把方差条件加上\"的辨析。",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-theorem-gl05-a6aee51d",
   "kind": "theorem",
   "name": "棣莫弗—拉普拉斯 CLT",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "$\\eta_n\\sim B(n,p)$，则 $\\dfrac{\\eta_n-np}{\\sqrt{np(1-p)}}\\dot\\sim N(0,1)$。",
   "matchText": "棣莫弗—拉普拉斯 CLT $\\eta_n\\sim B(n,p)$，则 $\\dfrac{\\eta_n-np}{\\sqrt{np(1-p)}}\\dot\\sim N(0,1)$。 大量重复独立试验中成功次数的近似。与泊松近似的分工：$p$ 不小、$n$ 大用 CLT；$p$ 很小用泊松。",
   "source": "data/lessons/gl05.js"
  },
  {
   "id": "k-theorem-gl06-0eb68061",
   "kind": "theorem",
   "name": "顺序统计量与经验分布函数",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "将样本排序为 $X_{(1)}\\le\\cdots\\le X_{(n)}$。经验分布函数为 $F_n(x)=n^{-1}\\sum_{i=1}^{n}\\mathbf 1_{\\{X_i\\le x\\}}$。",
   "matchText": "顺序统计量与经验分布函数 将样本排序为 $X_{(1)}\\le\\cdots\\le X_{(n)}$。经验分布函数为 $F_n(x)=n^{-1}\\sum_{i=1}^{n}\\mathbf 1_{\\{X_i\\le x\\}}$。 对独立同分布样本和每个固定 $x$，由大数定律有 $F_n(x)\\xrightarrow{P}F(x)$。更强的格里汶科定理给出一致收敛。",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-theorem-gl06-661347f9",
   "kind": "theorem",
   "name": "两正态总体的抽样分布",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "总体 $N(\\mu_1,\\sigma_1^2)$、$N(\\mu_2,\\sigma_2^2)$，样本 $m,n$ 个： $$\\frac{(\\bar X-\\bar Y)-(\\mu_1-\\mu_2)}{\\sqrt{\\dfrac{\\sigma_1^2}{m}+\\dfrac{\\sigma_2^2}{n}}}\\sim N(0,1)…",
   "matchText": "两正态总体的抽样分布 总体 $N(\\mu_1,\\sigma_1^2)$、$N(\\mu_2,\\sigma_2^2)$，样本 $m,n$ 个：\n$$\\frac{(\\bar X-\\bar Y)-(\\mu_1-\\mu_2)}{\\sqrt{\\dfrac{\\sigma_1^2}{m}+\\dfrac{\\sigma_2^2}{n}}}\\sim N(0,1)$$ $\\sigma_1^2=\\sigma_2^2=\\sigma^2$ 时 $$\\frac{(\\bar X-\\bar Y)-(\\mu_1-\\mu_2)}{S_w\\sqrt{\\dfrac1m+\\dfrac1n}}\\sim t(m+n-2),\\quad S_w^2=\\frac{(m-1)S_1^2+(n-1)S_2^2}{m+n-2}$$ $$\\frac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\sim F(m-1,n-1)$$ 两总体独立且正态 三个公式分别服务：均值差的检验（$\\sigma$ 已知/未知 pooled）、方差比检验。合并方差 $S_w^2$ 的加权结构要记牢。",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-theorem-gl06-8695f79c",
   "kind": "theorem",
   "name": "样本均值的数字特征",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "$E(\\bar X)=\\mu,\\ D(\\bar X)=\\dfrac{\\sigma^2}{n},\\ E(S^2)=\\sigma^2$（无论什么总体，后一条即无偏性）。",
   "matchText": "样本均值的数字特征 $E(\\bar X)=\\mu,\\ D(\\bar X)=\\dfrac{\\sigma^2}{n},\\ E(S^2)=\\sigma^2$（无论什么总体，后一条即无偏性）。 $E(S^2)=\\sigma^2$ 对**任何**总体成立（不只正态）；而 $E\\left[\\dfrac1n\\sum(X_i-\\bar X)^2\\right]=\\dfrac{n-1}{n}\\sigma^2\\ne\\sigma^2$，这就是分母取 $n-1$ 的原因。",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-theorem-gl06-c692addb",
   "kind": "theorem",
   "name": "正态总体抽样分布四大结论",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "设 $X_1,\\dots,X_n$ 来自 $N(\\mu,\\sigma^2)$： ① $\\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)$； ② $\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$； ③ $\\bar X$ 与 $S^2$…",
   "matchText": "正态总体抽样分布四大结论 设 $X_1,\\dots,X_n$ 来自 $N(\\mu,\\sigma^2)$：\n① $\\bar X\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)$；\n② $\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$；\n③ $\\bar X$ 与 $S^2$ **独立**；\n④ $\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$。 正态总体 ②的自由度是 $n-1$（损失一维估计 $\\mu$）；③的独立性是④的基础，也是\"样本均值与样本方差独立\"这一正态总体特有性质。",
   "source": "data/lessons/gl06.js"
  },
  {
   "id": "k-theorem-gl07-100889f3",
   "kind": "theorem",
   "name": "矩估计的一般流程",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "一个参数：解 $\\hat\\mu=A_1=\\bar X$。两个参数：解 $\\begin{cases}\\hat\\mu=\\bar X\\\\ \\hat{\\mu_2}=A_2\\end{cases}$（$\\mu_2=E(X^2)$）。",
   "matchText": "矩估计的一般流程 一个参数：解 $\\hat\\mu=A_1=\\bar X$。两个参数：解 $\\begin{cases}\\hat\\mu=\\bar X\\\\ \\hat{\\mu_2}=A_2\\end{cases}$（$\\mu_2=E(X^2)$）。 总体矩存在 常见结果：均匀分布 $U(a,b)$ 的矩估计 $\\hat a=\\bar X-\\sqrt3B_2^{1/2}$ 型（由 $\\bar X$ 与 $B_2$ 反解 $a,b$）；指数分布 $\\hat\\lambda=1/\\bar X$。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-theorem-gl07-2441f541",
   "kind": "theorem",
   "name": "单个正态总体均值的置信区间",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "$$\\sigma^2\\text{ 已知：}\\left(\\bar X-\\frac{\\sigma}{\\sqrt n}z_{\\alpha/2},\\ \\bar X+\\frac{\\sigma}{\\sqrt n}z_{\\alpha/2}\\right)$$ $$\\sigma^2\\text{ 未知：}\\left(\\bar X-\\fra…",
   "matchText": "单个正态总体均值的置信区间 $$\\sigma^2\\text{ 已知：}\\left(\\bar X-\\frac{\\sigma}{\\sqrt n}z_{\\alpha/2},\\ \\bar X+\\frac{\\sigma}{\\sqrt n}z_{\\alpha/2}\\right)$$ $$\\sigma^2\\text{ 未知：}\\left(\\bar X-\\frac{S}{\\sqrt n}t_{\\alpha/2}(n-1),\\ \\bar X+\\frac{S}{\\sqrt n}t_{\\alpha/2}(n-1)\\right)$$ 正态总体（或 $n$ 大时近似） 推导骨架：枢轴量 $\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}\\sim N(0,1)$ 或 $\\dfrac{\\bar X-\\mu}{S/\\sqrt n}\\sim t(n-1)$，解不等式分离 $\\mu$。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-theorem-gl07-5cfd04db",
   "kind": "theorem",
   "name": "方差与方差比的置信区间",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "$\\sigma^2$：$\\left(\\dfrac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)},\\dfrac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)}\\right)$；两总体方差比…",
   "matchText": "方差与方差比的置信区间 $\\sigma^2$：$\\left(\\dfrac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)},\\dfrac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)}\\right)$；两总体方差比：$\\left(\\dfrac{S_1^2}{S_2^2}\\cdot\\dfrac{1}{F_{\\alpha/2}(m-1,n-1)},\\ \\dfrac{S_1^2}{S_2^2}\\cdot F_{\\alpha/2}(n-1,m-1)\\right)$。 枢轴量分别是 $\\dfrac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$ 与 $\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}\\sim F$。注意 χ² 不对称、上下限分子分母颠倒。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-theorem-gl07-6902c608",
   "kind": "theorem",
   "name": "正态参数 MLE 的标准结果",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "$\\mu$ 的 MLE：$\\hat\\mu=\\bar X$；$\\sigma^2$ 的 MLE：$\\hat\\sigma^2=\\dfrac1n\\sum(X_i-\\bar X)^2=B_2$（分母 $n$，**有偏**）。",
   "matchText": "正态参数 MLE 的标准结果 $\\mu$ 的 MLE：$\\hat\\mu=\\bar X$；$\\sigma^2$ 的 MLE：$\\hat\\sigma^2=\\dfrac1n\\sum(X_i-\\bar X)^2=B_2$（分母 $n$，**有偏**）。 MLE 的 $\\hat\\sigma^2$ 是有偏的（$E=B_2=\\frac{n-1}{n}\\sigma^2\\ne\\sigma^2$），矩估计同理。对比记忆：无偏用 $S^2$，MLE 用 $B_2$。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-theorem-gl07-7accefb2",
   "kind": "theorem",
   "name": "无偏性的验证方法",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "验证 $E(\\hat\\theta)=\\theta$：通常用期望线性性 + 数字特征基本结论；含 $S^2$ 的组合利用 $E(S^2)=\\sigma^2$、$E(\\bar X)=\\mu$。",
   "matchText": "无偏性的验证方法 验证 $E(\\hat\\theta)=\\theta$：通常用期望线性性 + 数字特征基本结论；含 $S^2$ 的组合利用 $E(S^2)=\\sigma^2$、$E(\\bar X)=\\mu$。 对称组合题套路：$E(a\\bar X+bS^2+c)=a\\mu+b\\sigma^2+c$，令其等于目标参数解系数。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-theorem-gl07-7fc9e470",
   "kind": "theorem",
   "name": "最大似然估计的不变性",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "若 $\\hat\\theta$ 是 $\\theta$ 的 MLE，则 $g(\\hat\\theta)$ 是 $g(\\theta)$ 的 MLE（$g$ 为一一映射或单调）。",
   "matchText": "最大似然估计的不变性 若 $\\hat\\theta$ 是 $\\theta$ 的 MLE，则 $g(\\hat\\theta)$ 是 $g(\\theta)$ 的 MLE（$g$ 为一一映射或单调）。 例：$\\lambda$ 的 MLE 为 $1/\\bar X$，则 $\\dfrac1\\lambda$ 的 MLE 为 $\\bar X$。避免重复计算。",
   "source": "data/lessons/gl07.js"
  },
  {
   "id": "k-theorem-gl08-5761de02",
   "kind": "theorem",
   "name": "方差 χ² 检验与 F 检验",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "单个：$\\chi^2=\\dfrac{(n-1)S^2}{\\sigma_0^2}$。两个：$F=\\dfrac{S_1^2}{S_2^2}$（$H_0:\\sigma_1^2=\\sigma_2^2$ 时 $\\sim F(m-1,n-1)$）。",
   "matchText": "方差 χ² 检验与 F 检验 单个：$\\chi^2=\\dfrac{(n-1)S^2}{\\sigma_0^2}$。两个：$F=\\dfrac{S_1^2}{S_2^2}$（$H_0:\\sigma_1^2=\\sigma_2^2$ 时 $\\sim F(m-1,n-1)$）。 正态总体 F 检验在教材中常约定\"大者作分子\"（单侧化），考试按定义式直接写拒绝域即可。",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-theorem-gl08-5c2e0fe0",
   "kind": "theorem",
   "name": "p 值思想（拓展了解）",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "p 值 = 在 $H_0$ 下，出现\"当前或更极端\"样本的概率。$p<\\alpha\\iff$ 统计量落入拒绝域。",
   "matchText": "p 值思想（拓展了解） p 值 = 在 $H_0$ 下，出现\"当前或更极端\"样本的概率。$p<\\alpha\\iff$ 统计量落入拒绝域。 现代软件输出 p 值；考研以拒绝域法为主，但理解 p 值有助于读题（\"拒绝/不拒绝\"的另一种表述）。",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-theorem-gl08-bf692ec3",
   "kind": "theorem",
   "name": "两均值比较检验",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "独立两正态总体：$\\sigma_1^2,\\sigma_2^2$ 已知用 $z=\\dfrac{\\bar X-\\bar Y}{\\sqrt{\\sigma_1^2/m+\\sigma_2^2/n}}$；$\\sigma_1^2=\\sigma_2^2$ 未知用…",
   "matchText": "两均值比较检验 独立两正态总体：$\\sigma_1^2,\\sigma_2^2$ 已知用 $z=\\dfrac{\\bar X-\\bar Y}{\\sqrt{\\sigma_1^2/m+\\sigma_2^2/n}}$；$\\sigma_1^2=\\sigma_2^2$ 未知用 $t=\\dfrac{\\bar X-\\bar Y}{S_w\\sqrt{1/m+1/n}}\\sim t(m+n-2)$。 两总体独立正态 $t$ 版本要先用 $F$ 检验确认方差可视为相等，再合并方差 $S_w^2=\\dfrac{(m-1)S_1^2+(n-1)S_2^2}{m+n-2}$。",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-theorem-gl08-d09879fc",
   "kind": "theorem",
   "name": "均值 z 检验（σ 已知）",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "$H_0:\\mu=\\mu_0$。统计量 $Z=\\dfrac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)$（$H_0$ 下）。双侧拒绝域 $|Z|>z_{\\alpha/2}$；右侧 $Z>z_\\alpha$；左侧 $Z<-z_\\alpha$。",
   "matchText": "均值 z 检验（σ 已知） $H_0:\\mu=\\mu_0$。统计量 $Z=\\dfrac{\\bar X-\\mu_0}{\\sigma/\\sqrt n}\\sim N(0,1)$（$H_0$ 下）。双侧拒绝域 $|Z|>z_{\\alpha/2}$；右侧 $Z>z_\\alpha$；左侧 $Z<-z_\\alpha$。 正态总体或大样本 与 $\\mu$ 的置信区间一一对应：双侧检验不拒绝 $\\iff \\mu_0$ 落入置信水平 $1-\\alpha$ 的置信区间。",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-theorem-gl08-f9383ed7",
   "kind": "theorem",
   "name": "均值 t 检验（σ 未知）",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "$T=\\dfrac{\\bar X-\\mu_0}{S/\\sqrt n}\\sim t(n-1)$，双侧拒绝域 $|T|>t_{\\alpha/2}(n-1)$。",
   "matchText": "均值 t 检验（σ 未知） $T=\\dfrac{\\bar X-\\mu_0}{S/\\sqrt n}\\sim t(n-1)$，双侧拒绝域 $|T|>t_{\\alpha/2}(n-1)$。 正态总体 实际应用最常用（$\\sigma$ 几乎总未知）。查表用 $n-1$ 自由度、$\\alpha/2$。",
   "source": "data/lessons/gl08.js"
  },
  {
   "id": "k-theorem-gs01-1ada545b",
   "kind": "theorem",
   "name": "左右极限判定",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "$\\lim_{x\\to a}f(x)=L$ 当且仅当左右极限都存在且等于 $L$。",
   "matchText": "左右极限判定 $\\lim_{x\\to a}f(x)=L$ 当且仅当左右极限都存在且等于 $L$。 在该点两侧的去心邻域中讨论。 分段函数先分别求左右极限，再核对函数值。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-theorem-gs01-26023002",
   "kind": "theorem",
   "name": "闭区间连续函数性质",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "若 $f$ 在 $[a,b]$ 上连续，则有界并取得最大、最小值，且取得两端函数值之间的所有值。",
   "matchText": "闭区间连续函数性质 若 $f$ 在 $[a,b]$ 上连续，则有界并取得最大、最小值，且取得两端函数值之间的所有值。 区间必须闭且有界，连续性覆盖整个区间。 介值定理提供存在性，不保证唯一性。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-theorem-gs01-41201d65",
   "kind": "theorem",
   "name": "夹逼准则",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "若在去心邻域有 $u(x)\\le f(x)\\le v(x)$，且 $u(x),v(x)\\to L$，则 $f(x)\\to L$。",
   "matchText": "夹逼准则 若在去心邻域有 $u(x)\\le f(x)\\le v(x)$，且 $u(x),v(x)\\to L$，则 $f(x)\\to L$。 比较关系在充分靠近目标点时成立。 振荡项常先取绝对值。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-theorem-gs01-75cd414f",
   "kind": "theorem",
   "name": "极限四则运算",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "若 $f\\to A,g\\to B$，则 $f\\pm g\\to A\\pm B$，$fg\\to AB$；当 $B\\ne0$ 时 $f/g\\to A/B$。",
   "matchText": "极限四则运算 若 $f\\to A,g\\to B$，则 $f\\pm g\\to A\\pm B$，$fg\\to AB$；当 $B\\ne0$ 时 $f/g\\to A/B$。 所列有限极限存在，除法的分母极限非零。 未定式需要进一步变形，不能直接代入。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-theorem-gs01-7de4dd31",
   "kind": "theorem",
   "name": "两个重要极限",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "$\\lim_{x\\to0}\\sin x/x=1$；$\\lim_{t\\to0}(1+t)^{1/t}=e$。",
   "matchText": "两个重要极限 $\\lim_{x\\to0}\\sin x/x=1$；$\\lim_{t\\to0}(1+t)^{1/t}=e$。 三角函数用弧度；幂式在实数范围内有定义。 还可写成 $\\log(1+t)/t\\to1$。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-theorem-gs01-893491db",
   "kind": "theorem",
   "name": "复合函数极限",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "若 $g(x)\\to b$，且 $f$ 在 $b$ 连续，则 $f(g(x))\\to f(b)$。",
   "matchText": "复合函数极限 若 $g(x)\\to b$，且 $f$ 在 $b$ 连续，则 $f(g(x))\\to f(b)$。 复合在充分靠近目标点处有定义。 不能将外层函数的连续性漏掉。",
   "source": "data/lessons/gs01.js"
  },
  {
   "id": "k-theorem-gs02-078a80e1",
   "kind": "theorem",
   "name": "斯托尔茨定理",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "若 $b_n$ 严格递增且 $b_n\\to+\\infty$，且 $(a_{n+1}-a_n)/(b_{n+1}-b_n)\\to L$，则 $a_n/b_n\\to L$。",
   "matchText": "斯托尔茨定理 若 $b_n$ 严格递增且 $b_n\\to+\\infty$，且 $(a_{n+1}-a_n)/(b_{n+1}-b_n)\\to L$，则 $a_n/b_n\\to L$。 差分比极限存在，可以是广义极限。 先检查分母序列的单调性与发散性。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-theorem-gs02-186b0183",
   "kind": "theorem",
   "name": "常见增长关系",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "对 $p>0,a>1$，有 $n^p/a^n\\to0$，且 $\\log n/n^p\\to0$。",
   "matchText": "常见增长关系 对 $p>0,a>1$，有 $n^p/a^n\\to0$，且 $\\log n/n^p\\to0$。 $n\\to\\infty$。 指数增长快于任意固定正幂，正幂快于对数。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-theorem-gs02-6d236cf3",
   "kind": "theorem",
   "name": "收敛数列性质",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "收敛数列有界且极限唯一；若 $a_n\\to A$，则任意子列也趋于 $A$。",
   "matchText": "收敛数列性质 收敛数列有界且极限唯一；若 $a_n\\to A$，则任意子列也趋于 $A$。 实数数列。 有界不保证收敛，如交错数列。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-theorem-gs02-c2744109",
   "kind": "theorem",
   "name": "平均值收敛",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "若 $a_n\\to A$，则 $(a_1+\\cdots+a_n)/n\\to A$。",
   "matchText": "平均值收敛 若 $a_n\\to A$，则 $(a_1+\\cdots+a_n)/n\\to A$。 原数列收敛。 其逆命题一般不成立。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-theorem-gs02-d0d328cd",
   "kind": "theorem",
   "name": "单调有界准则",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "单调不减且有上界的数列收敛；单调不增且有下界的数列收敛。",
   "matchText": "单调有界准则 单调不减且有上界的数列收敛；单调不增且有下界的数列收敛。 单调性和对应的界均须证明。 收敛后再求其极限。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-theorem-gs02-f2984461",
   "kind": "theorem",
   "name": "夹逼准则",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "若从某项起 $a_n\\le b_n\\le c_n$，且 $a_n,c_n\\to L$，则 $b_n\\to L$。",
   "matchText": "夹逼准则 若从某项起 $a_n\\le b_n\\le c_n$，且 $a_n,c_n\\to L$，则 $b_n\\to L$。 比较式最终成立即可。 绝对值估计常用于消除振荡。",
   "source": "data/lessons/gs02.js"
  },
  {
   "id": "k-theorem-gs03-1b2773da",
   "kind": "theorem",
   "name": "一阶微分形式不变性",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "若 $y=f(u)$，$u=g(x)$ 均可微，则 $dy=f'(u)du=f'(g(x))g'(x)dx$。",
   "matchText": "一阶微分形式不变性 若 $y=f(u)$，$u=g(x)$ 均可微，则 $dy=f'(u)du=f'(g(x))g'(x)dx$。 复合链中各函数在相应点可微。 这是链式法则的微分表达。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-theorem-gs03-21e4596e",
   "kind": "theorem",
   "name": "导数存在判据",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "$f'(x_0)$ 存在当且仅当左右差商的有限极限都存在且相等。",
   "matchText": "导数存在判据 $f'(x_0)$ 存在当且仅当左右差商的有限极限都存在且相等。 $x_0$ 是定义域内点。 先保证函数值存在。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-theorem-gs03-7bffcda5",
   "kind": "theorem",
   "name": "切线与法线",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "若 $f'(x_0)=k$，切线为 $y-f(x_0)=k(x-x_0)$；$k\\ne0$ 时法线斜率为 $-1/k$。",
   "matchText": "切线与法线 若 $f'(x_0)=k$，切线为 $y-f(x_0)=k(x-x_0)$；$k\\ne0$ 时法线斜率为 $-1/k$。 讨论非竖直切线。 $k=0$ 时法线为 $x=x_0$。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-theorem-gs03-a7fc1aca",
   "kind": "theorem",
   "name": "可导推出连续",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "若 $f$ 在 $x_0$ 可导，则 $f$ 在 $x_0$ 连续。",
   "matchText": "可导推出连续 若 $f$ 在 $x_0$ 可导，则 $f$ 在 $x_0$ 连续。 导数为有限值。 由 $\\Delta f=(\\Delta f/\\Delta x)\\Delta x\\to0$。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-theorem-gs03-d1e8b591",
   "kind": "theorem",
   "name": "微分近似",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "$f(x_0+h)=f(x_0)+f'(x_0)h+o(h)$。",
   "matchText": "微分近似 $f(x_0+h)=f(x_0)+f'(x_0)h+o(h)$。 $f$ 在 $x_0$ 可导。 小量余项相对于 $h$ 趋于零。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-theorem-gs03-d398141f",
   "kind": "theorem",
   "name": "费马定理",
   "subject": "gaoshu",
   "lessons": [
    "gs03"
   ],
   "summary": "若 $f$ 在内点 $x_0$ 取得局部极值且在该点可导，则 $f'(x_0)=0$。",
   "matchText": "费马定理 若 $f$ 在内点 $x_0$ 取得局部极值且在该点可导，则 $f'(x_0)=0$。 极值点是内点且可导。 驻点只是候选点，不一定是极值点。",
   "source": "data/lessons/gs03.js"
  },
  {
   "id": "k-theorem-gs04-27278fd0",
   "kind": "theorem",
   "name": "参数二阶导数",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "$d^2y/dx^2=[d(y'/x')/dt]/x'$。",
   "matchText": "参数二阶导数 $d^2y/dx^2=[d(y'/x')/dt]/x'$。 $x,y$ 至少二阶可导且 $x'\\ne0$，右侧撇号对 $t$ 求导。 二阶导数不是 $y''(t)/x''(t)$。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-theorem-gs04-3ff41327",
   "kind": "theorem",
   "name": "基本导数",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "$(x^\\alpha)'=\\alpha x^{\\alpha-1}$，$(e^x)'=e^x$，$(\\log x)'=1/x$，$(\\sin x)'=\\cos x$，$(\\cos x)'=-\\sin x$。",
   "matchText": "基本导数 $(x^\\alpha)'=\\alpha x^{\\alpha-1}$，$(e^x)'=e^x$，$(\\log x)'=1/x$，$(\\sin x)'=\\cos x$，$(\\cos x)'=-\\sin x$。 在各函数及导数有定义的区间内使用。 幂函数的定义域随实指数变化。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-theorem-gs04-73957fc8",
   "kind": "theorem",
   "name": "链式法则",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "$(f\\circ g)'(x)=f'(g(x))g'(x)$。",
   "matchText": "链式法则 $(f\\circ g)'(x)=f'(g(x))g'(x)$。 内函数在该点可导，外函数在对应点可导。 不要漏掉内层导数。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-theorem-gs04-84a3062f",
   "kind": "theorem",
   "name": "莱布尼茨公式",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "$(uv)^{(n)}=\\sum_{k=0}^n {n\\choose k}u^{(k)}v^{(n-k)}$。",
   "matchText": "莱布尼茨公式 $(uv)^{(n)}=\\sum_{k=0}^n {n\\choose k}u^{(k)}v^{(n-k)}$。 两函数具有所需的各阶导数。 当一个因子是低次多项式时，许多项为零。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-theorem-gs04-9b0d637e",
   "kind": "theorem",
   "name": "商法则",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "$(u/v)'=(u'v-uv')/v^2$。",
   "matchText": "商法则 $(u/v)'=(u'v-uv')/v^2$。 $u,v$ 可导且 $v\\ne0$。 分子次序不要颠倒。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-theorem-gs04-b09a7cdd",
   "kind": "theorem",
   "name": "隐函数导数",
   "subject": "gaoshu",
   "lessons": [
    "gs04"
   ],
   "summary": "$y'=-F_x/F_y$。",
   "matchText": "隐函数导数 $y'=-F_x/F_y$。 $F$ 在邻域具有连续偏导且所求点 $F_y\\ne0$。 二阶导数对第一次求导所得等式继续求导。",
   "source": "data/lessons/gs04.js"
  },
  {
   "id": "k-theorem-gs05-25da7f5c",
   "kind": "theorem",
   "name": "曲率公式",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "$\\kappa=|f''(x)|/[1+(f'(x))^2]^{3/2}$，当 $\\kappa>0$ 时曲率半径 $R=1/\\kappa$。",
   "matchText": "曲率公式 $\\kappa=|f''(x)|/[1+(f'(x))^2]^{3/2}$，当 $\\kappa>0$ 时曲率半径 $R=1/\\kappa$。 平面曲线在该点二阶可导。 切线斜率变化不是曲率本身，还需按弧长归一化。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-theorem-gs05-2a278aa4",
   "kind": "theorem",
   "name": "一阶导数判别",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "内点 $x_0$ 两侧导数由正变负，则为局部极大点；由负变正，则为局部极小点。",
   "matchText": "一阶导数判别 内点 $x_0$ 两侧导数由正变负，则为局部极大点；由负变正，则为局部极小点。 函数在点附近连续并在两侧可导。 仅有导数为零不能判断极值。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-theorem-gs05-576bd7eb",
   "kind": "theorem",
   "name": "二阶导数判别",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "若 $f'(x_0)=0$ 且 $f''(x_0)>0$，则 $x_0$ 为严格局部极小点；$f''(x_0)<0$ 时为严格局部极大点。",
   "matchText": "二阶导数判别 若 $f'(x_0)=0$ 且 $f''(x_0)>0$，则 $x_0$ 为严格局部极小点；$f''(x_0)<0$ 时为严格局部极大点。 所需导数存在。 $f''(x_0)=0$ 时该判别法无结论。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-theorem-gs05-72aa34e1",
   "kind": "theorem",
   "name": "闭区间最值",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "连续函数在闭区间上的最值必在内部可导驻点、内部不可导点或端点处取得。",
   "matchText": "闭区间最值 连续函数在闭区间上的最值必在内部可导驻点、内部不可导点或端点处取得。 函数在整个闭区间连续。 候选点代回原函数比较。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-theorem-gs05-7b886b9a",
   "kind": "theorem",
   "name": "斜渐近线",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "若 $k=\\lim f(x)/x$ 且 $b=\\lim[f(x)-kx]$ 都为有限数，则 $y=kx+b$ 为相应方向的渐近线。",
   "matchText": "斜渐近线 若 $k=\\lim f(x)/x$ 且 $b=\\lim[f(x)-kx]$ 都为有限数，则 $y=kx+b$ 为相应方向的渐近线。 $x$ 趋向某一无穷方向，两个极限存在。 正无穷与负无穷应分别考察。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-theorem-gs05-dc1a8877",
   "kind": "theorem",
   "name": "凹凸与导数",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "在区间内 $f''>0$ 时函数的导数递增，图形位于切线上方；$f''<0$ 时相反。",
   "matchText": "凹凸与导数 在区间内 $f''>0$ 时函数的导数递增，图形位于切线上方；$f''<0$ 时相反。 函数在区间内二阶可导。 不同教材对凹凸名称约定不同，可直接描述图形位置。",
   "source": "data/lessons/gs05.js"
  },
  {
   "id": "k-theorem-gs06-3c27fcde",
   "kind": "theorem",
   "name": "洛必达法则",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "在适用条件下，若 $f/g$ 为 $0/0$ 或 $\\infty/\\infty$ 型且 $f'/g'\\to L$，则 $f/g\\to L$。",
   "matchText": "洛必达法则 在适用条件下，若 $f/g$ 为 $0/0$ 或 $\\infty/\\infty$ 型且 $f'/g'\\to L$，则 $f/g\\to L$。 邻域内可导、$g'\\ne0$，所述导数之比极限存在，并满足对应端点条件。 先识别未定式，每次使用前重新检查。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-theorem-gs06-528a81d0",
   "kind": "theorem",
   "name": "罗尔定理",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "若 $f(a)=f(b)$，则存在 $\\xi\\in(a,b)$ 使 $f'(\\xi)=0$。",
   "matchText": "罗尔定理 若 $f(a)=f(b)$，则存在 $\\xi\\in(a,b)$ 使 $f'(\\xi)=0$。 $f$ 在 $[a,b]$ 连续，在 $(a,b)$ 可导，且端点值相等。 结论是至少存在一个点。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-theorem-gs06-54566b06",
   "kind": "theorem",
   "name": "常见局部展开",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "$e^x=1+x+x^2/2+o(x^2)$，$\\sin x=x-x^3/6+o(x^3)$，$\\log(1+x)=x-x^2/2+o(x^2)$。",
   "matchText": "常见局部展开 $e^x=1+x+x^2/2+o(x^2)$，$\\sin x=x-x^3/6+o(x^3)$，$\\log(1+x)=x-x^2/2+o(x^2)$。 $x\\to0$。 在相减前保留足够阶数。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-theorem-gs06-5c4642d3",
   "kind": "theorem",
   "name": "拉格朗日中值定理",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "存在 $\\xi\\in(a,b)$，使 $f'(\\xi)=[f(b)-f(a)]/(b-a)$。",
   "matchText": "拉格朗日中值定理 存在 $\\xi\\in(a,b)$，使 $f'(\\xi)=[f(b)-f(a)]/(b-a)$。 $a<b$，闭区间连续，开区间可导。 导数等于割线斜率。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-theorem-gs06-9972b77f",
   "kind": "theorem",
   "name": "柯西中值定理",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "存在 $\\xi\\in(a,b)$，使 $[f(b)-f(a)]g'(\\xi)=[g(b)-g(a)]f'(\\xi)$。",
   "matchText": "柯西中值定理 存在 $\\xi\\in(a,b)$，使 $[f(b)-f(a)]g'(\\xi)=[g(b)-g(a)]f'(\\xi)$。 $f,g$ 在闭区间连续且在开区间可导。 交叉相乘形式无需先假定分母非零。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-theorem-gs06-c07efaed",
   "kind": "theorem",
   "name": "泰勒公式",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "$f(x)=\\sum_{k=0}^{n}f^{(k)}(a)(x-a)^k/k!+o((x-a)^n)$。",
   "matchText": "泰勒公式 $f(x)=\\sum_{k=0}^{n}f^{(k)}(a)(x-a)^k/k!+o((x-a)^n)$。 例如 $f$ 在 $a$ 的邻域具有至 $n$ 阶导数且 $f^{(n)}$ 在 $a$ 连续。 按需要展开，余项阶数必须足够。",
   "source": "data/lessons/gs06.js"
  },
  {
   "id": "k-theorem-gs07-7a62d90b",
   "kind": "theorem",
   "name": "导数变化率",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "若 $y=f(x(t))$，则 $dy/dt=f'(x(t))\\,dx/dt$。",
   "matchText": "导数变化率 若 $y=f(x(t))$，则 $dy/dt=f'(x(t))\\,dx/dt$。 有关函数在该时刻可导。 等式两边量纲应一致。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-theorem-gs07-a609ef7d",
   "kind": "theorem",
   "name": "微分误差估计",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "$\\Delta y=f'(x)\\Delta x+o(\\Delta x)$。",
   "matchText": "微分误差估计 $\\Delta y=f'(x)\\Delta x+o(\\Delta x)$。 $f$ 在工作点可导且输入误差趋于零。 给出的是一阶近似。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-theorem-gs07-bcb56d3c",
   "kind": "theorem",
   "name": "单调性法",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "若目标在某点前导数为正、之后为负，则该点是区间上的严格最大点。",
   "matchText": "单调性法 若目标在某点前导数为正、之后为负，则该点是区间上的严格最大点。 导数符号覆盖可行区间。 只求出驻点还不够。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-theorem-gs07-d36d0cb5",
   "kind": "theorem",
   "name": "最优必要条件",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "若可导目标在可行区间的内点取得局部极值，则该点的导数为零。",
   "matchText": "最优必要条件 若可导目标在可行区间的内点取得局部极值，则该点的导数为零。 最优点是内点且目标可导。 还需比较边界并判定全局性。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-theorem-gs07-ea3af184",
   "kind": "theorem",
   "name": "平均与瞬时速度",
   "subject": "gaoshu",
   "lessons": [
    "gs07"
   ],
   "summary": "平均速度为 $[s(t_2)-s(t_1)]/(t_2-t_1)$；瞬时速度为其在 $t_2\\to t_1$ 时的极限。",
   "matchText": "平均与瞬时速度 平均速度为 $[s(t_2)-s(t_1)]/(t_2-t_1)$；瞬时速度为其在 $t_2\\to t_1$ 时的极限。 位置函数在相应时刻可导。 平均速率要使用路程而不是位移。",
   "source": "data/lessons/gs07.js"
  },
  {
   "id": "k-theorem-gs08-134b630d",
   "kind": "theorem",
   "name": "微积分基本定理",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "若 $f$ 在区间连续，则 $F(x)=\\int_a^x f(t)dt$ 满足 $F'(x)=f(x)$。",
   "matchText": "微积分基本定理 若 $f$ 在区间连续，则 $F(x)=\\int_a^x f(t)dt$ 满足 $F'(x)=f(x)$。 上限所在区间内 $f$ 连续。 积分变量是哑变量，不与上限混淆。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-theorem-gs08-24afa57d",
   "kind": "theorem",
   "name": "牛顿莱布尼茨公式",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "若 $F'=f$，则 $\\int_a^b f(x)dx=F(b)-F(a)$。",
   "matchText": "牛顿莱布尼茨公式 若 $F'=f$，则 $\\int_a^b f(x)dx=F(b)-F(a)$。 $f$ 在闭区间连续；更一般情形需满足相应可积条件。 先确认原函数适用于整个区间。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-theorem-gs08-38270a46",
   "kind": "theorem",
   "name": "积分中值定理",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "存在 $\\xi\\in[a,b]$ 使 $\\int_a^b f(x)dx=f(\\xi)(b-a)$。",
   "matchText": "积分中值定理 存在 $\\xi\\in[a,b]$ 使 $\\int_a^b f(x)dx=f(\\xi)(b-a)$。 $f$ 在 $[a,b]$ 连续。 它给出的点一般不唯一。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-theorem-gs08-8098c1ab",
   "kind": "theorem",
   "name": "线性与区间可加",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "$\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^b f+\\beta\\int_a^b g$；$\\int_a^c f+\\int_c^b f=\\int_a^b f$。",
   "matchText": "线性与区间可加 $\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^b f+\\beta\\int_a^b g$；$\\int_a^c f+\\int_c^b f=\\int_a^b f$。 相关函数可积。 交换上下限会改变符号。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-theorem-gs08-d565383d",
   "kind": "theorem",
   "name": "积分保序",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "若 $f(x)\\le g(x)$，则 $\\int_a^b f\\le\\int_a^b g$。",
   "matchText": "积分保序 若 $f(x)\\le g(x)$，则 $\\int_a^b f\\le\\int_a^b g$。 $a\\le b$ 且两函数可积。 反向积分时不等号方向需重新处理。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-theorem-gs08-f27daeec",
   "kind": "theorem",
   "name": "对称区间",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "在 $[-a,a]$ 上，奇函数的积分为 $0$；偶函数的积分为 $2\\int_0^a f(x)dx$。",
   "matchText": "对称区间 在 $[-a,a]$ 上，奇函数的积分为 $0$；偶函数的积分为 $2\\int_0^a f(x)dx$。 函数可积且 $a\\ge0$。 对称区间和奇偶性缺一不可。",
   "source": "data/lessons/gs08.js"
  },
  {
   "id": "k-theorem-gs09-4db4faba",
   "kind": "theorem",
   "name": "零点附近 $p$ 积分",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "$\\int_0^1 x^{-p}dx$ 当且仅当 $p<1$ 收敛；收敛时值为 $1/(1-p)$。",
   "matchText": "零点附近 $p$ 积分 $\\int_0^1 x^{-p}dx$ 当且仅当 $p<1$ 收敛；收敛时值为 $1/(1-p)$。 实数 $p$。 与无穷区间的判别方向相反。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-theorem-gs09-6194c143",
   "kind": "theorem",
   "name": "换元公式",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "$\\int f(g(x))g'(x)dx=\\int f(u)du$，其中 $u=g(x)$。",
   "matchText": "换元公式 $\\int f(g(x))g'(x)dx=\\int f(u)du$，其中 $u=g(x)$。 复合及原函数在讨论区间内有定义。 定积分可直接更换积分上下限。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-theorem-gs09-923b0989",
   "kind": "theorem",
   "name": "三角基本积分",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "$\\int\\sin x\\,dx=-\\cos x+C$，$\\int\\cos x\\,dx=\\sin x+C$，$\\int dx/(1+x^2)=\\arctan x+C$。",
   "matchText": "三角基本积分 $\\int\\sin x\\,dx=-\\cos x+C$，$\\int\\cos x\\,dx=\\sin x+C$，$\\int dx/(1+x^2)=\\arctan x+C$。 在实数范围内。 可通过求导检验符号。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-theorem-gs09-a2f18e0a",
   "kind": "theorem",
   "name": "无穷区间 $p$ 积分",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "$\\int_1^\\infty x^{-p}dx$ 当且仅当 $p>1$ 收敛；收敛时值为 $1/(p-1)$。",
   "matchText": "无穷区间 $p$ 积分 $\\int_1^\\infty x^{-p}dx$ 当且仅当 $p>1$ 收敛；收敛时值为 $1/(p-1)$。 实数 $p$。 边界 $p=1$ 发散。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-theorem-gs09-bbe04576",
   "kind": "theorem",
   "name": "基本积分",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "$\\int x^\\alpha dx=x^{\\alpha+1}/(\\alpha+1)+C$（$\\alpha\\ne-1$）；$\\int dx/x=\\log|x|+C$。",
   "matchText": "基本积分 $\\int x^\\alpha dx=x^{\\alpha+1}/(\\alpha+1)+C$（$\\alpha\\ne-1$）；$\\int dx/x=\\log|x|+C$。 在对应函数有定义的区间内。 特殊指数 $-1$ 必须单独处理。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-theorem-gs09-eddb9110",
   "kind": "theorem",
   "name": "分部积分公式",
   "subject": "gaoshu",
   "lessons": [
    "gs09"
   ],
   "summary": "$\\int_a^b u\\,dv=[uv]_a^b-\\int_a^b v\\,du$。",
   "matchText": "分部积分公式 $\\int_a^b u\\,dv=[uv]_a^b-\\int_a^b v\\,du$。 函数满足相应连续可导条件。 选 $u$ 时考虑其导数是否简化。",
   "source": "data/lessons/gs09.js"
  },
  {
   "id": "k-theorem-gs10-4b5b433c",
   "kind": "theorem",
   "name": "面积的基本公式",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "$$S=\\int_a^b|f(x)-g(x)|\\,dx;\\qquad S=\\frac12\\int_\\alpha^\\beta r^2(\\theta)\\,d\\theta$$",
   "matchText": "面积的基本公式 $$S=\\int_a^b|f(x)-g(x)|\\,dx;\\qquad S=\\frac12\\int_\\alpha^\\beta r^2(\\theta)\\,d\\theta$$ 直角坐标需确定上下（左右）关系与交点；极坐标需 $\\theta$ 的范围 被积函数加绝对值是\"保险丝\"：实际操作中先画图定正负再拆绝对值。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-theorem-gs10-4cc62626",
   "kind": "theorem",
   "name": "形心（质心）公式",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "平面图形对坐标轴的静矩 $S_y=\\int x\\,dA$，形心 $$\\bar x=\\frac{\\int_a^bx\\left[f_{上}-f_{下}\\right]dx}{S}$$",
   "matchText": "形心（质心）公式 平面图形对坐标轴的静矩 $S_y=\\int x\\,dA$，形心 $$\\bar x=\\frac{\\int_a^bx\\left[f_{上}-f_{下}\\right]dx}{S}$$ 匀质图形的形心与质心重合。古尔丁定理：平面图形绕不与其相交的轴旋转，$V=2\\pi\\bar d\\cdot S$（$\\bar d$ 为形心到轴距离）——可快速求形心或体积。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-theorem-gs10-665c3757",
   "kind": "theorem",
   "name": "旋转曲面面积",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "$$S=2\\pi\\int_a^b |f(x)|\\sqrt{1+\\left(f'(x)\\right)^2}\\,dx\\quad(\\text{绕 }x\\text{ 轴})$$",
   "matchText": "旋转曲面面积 $$S=2\\pi\\int_a^b |f(x)|\\sqrt{1+\\left(f'(x)\\right)^2}\\,dx\\quad(\\text{绕 }x\\text{ 轴})$$ 微元 = $2\\pi\\times$半径 $\\times ds$。参数形式 $2\\pi\\int|y(t)|\\sqrt{x'^2+y'^2}\\,dt$。球面（半圆绕直径）面积 $4\\pi R^2$ 可作检验。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-theorem-gs10-68751f85",
   "kind": "theorem",
   "name": "旋转体体积（圆盘法）",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "$$V_x=\\pi\\int_a^b f^2(x)\\,dx;\\qquad V_y=\\pi\\int_c^d\\varphi^2(y)\\,dy$$",
   "matchText": "旋转体体积（圆盘法） $$V_x=\\pi\\int_a^b f^2(x)\\,dx;\\qquad V_y=\\pi\\int_c^d\\varphi^2(y)\\,dy$$ $f(x)\\ge0$，绕对应坐标轴旋转 圆盘法要求旋转轴与积分变量\"垂直\"：绕 $x$ 轴就对 $x$ 积分。两曲线之间旋转用大平方减小平方 $\\pi\\int[f^2-g^2]dx$。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-theorem-gs10-846110b5",
   "kind": "theorem",
   "name": "弧长公式三连",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "$$s=\\int_a^b\\sqrt{1+\\left(f'(x)\\right)^2}\\,dx=\\int_\\alpha^\\beta\\sqrt{\\left(x'(t)\\right)^2+\\left(y'(t)\\right)^2}\\,dt=\\int_\\alpha^\\beta\\sqrt{r^2(\\theta)+\\left(r'…",
   "matchText": "弧长公式三连 $$s=\\int_a^b\\sqrt{1+\\left(f'(x)\\right)^2}\\,dx=\\int_\\alpha^\\beta\\sqrt{\\left(x'(t)\\right)^2+\\left(y'(t)\\right)^2}\\,dt=\\int_\\alpha^\\beta\\sqrt{r^2(\\theta)+\\left(r'(\\theta)\\right)^2}\\,d\\theta$$ 被积函数连续；直角坐标要求 $f$ 可导 三式同源：弧微元 $ds=\\sqrt{dx^2+dy^2}$。摆线一拱长 $8a$、心形线周长 $8a$ 是经典结论。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-theorem-gs10-fbce87c0",
   "kind": "theorem",
   "name": "旋转体体积（柱壳法）",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "$$V=2\\pi\\int_a^b x\\,|f(x)|\\,dx\\quad(\\text{绕 } y \\text{ 轴})$$",
   "matchText": "旋转体体积（柱壳法） $$V=2\\pi\\int_a^b x\\,|f(x)|\\,dx\\quad(\\text{绕 } y \\text{ 轴})$$ 绕 $y$ 轴、对 $x$ 积分 柱壳法绕开了\"反解 $x=g(y)$\"的麻烦，当 $f$ 不易反解或反解多支时特别好用。绕 $x$ 轴的对称版本：$2\\pi\\int y|g(y)|dy$。",
   "source": "data/lessons/gs10.js"
  },
  {
   "id": "k-theorem-gs11-4b15353f",
   "kind": "theorem",
   "name": "积分第一中值定理（推广式）",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "$$\\int_a^bf(x)g(x)dx=f(\\xi)\\int_a^bg(x)dx,\\ \\xi\\in[a,b]$$ 其中 $f$ 连续、$g$ 可积且不变号。",
   "matchText": "积分第一中值定理（推广式） $$\\int_a^bf(x)g(x)dx=f(\\xi)\\int_a^bg(x)dx,\\ \\xi\\in[a,b]$$ 其中 $f$ 连续、$g$ 可积且不变号。 $g(x)$ 不变号（如恒正） 不可变号！若 $g$ 变号则结论可能失效。用于证明\"$\\xi$ 的存在性\"类证明题与估计积分值。",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-theorem-gs11-71692eee",
   "kind": "theorem",
   "name": "柯西—施瓦茨积分不等式",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "$$\\left(\\int_a^bf(x)g(x)dx\\right)^2\\le\\int_a^bf^2(x)dx\\cdot\\int_a^bg^2(x)dx$$",
   "matchText": "柯西—施瓦茨积分不等式 $$\\left(\\int_a^bf(x)g(x)dx\\right)^2\\le\\int_a^bf^2(x)dx\\cdot\\int_a^bg^2(x)dx$$ 平方可积 取 $g\\equiv1$ 得 $\\left(\\int f\\right)^2\\le(b-a)\\int f^2$——\"积分平方 ≤ 区间长 × 平方积分\"，考研高频引用。",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-theorem-gs11-a2da7b68",
   "kind": "theorem",
   "name": "Wallis（点火）公式及其应用",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "$$\\int_0^{\\pi/2}\\sin^nx\\,dx=\\int_0^{\\pi/2}\\cos^nx\\,dx=\\begin{cases}\\dfrac{(n-1)!!}{n!!}\\cdot\\dfrac{\\pi}{2},&n\\text{ 偶}\\\\[2pt]\\dfrac{(n-1)!!}{n!!},&n\\text{ 奇}\\en…",
   "matchText": "Wallis（点火）公式及其应用 $$\\int_0^{\\pi/2}\\sin^nx\\,dx=\\int_0^{\\pi/2}\\cos^nx\\,dx=\\begin{cases}\\dfrac{(n-1)!!}{n!!}\\cdot\\dfrac{\\pi}{2},&n\\text{ 偶}\\\\[2pt]\\dfrac{(n-1)!!}{n!!},&n\\text{ 奇}\\end{cases}$$ $n$ 为正整数 证明积分等式时常\"两边都化到点火公式\"比较；$n!!$ 表示隔项连乘。",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-theorem-gs11-b5821b83",
   "kind": "theorem",
   "name": "变限积分求导（证等式的发动机）",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "若 $F(x)=\\int_{\\varphi(x)}^{\\psi(x)}f(t)\\,dt$，则 $F'(x)=f[\\psi(x)]\\psi'(x)-f[\\varphi(x)]\\varphi'(x)$。",
   "matchText": "变限积分求导（证等式的发动机） 若 $F(x)=\\int_{\\varphi(x)}^{\\psi(x)}f(t)\\,dt$，则 $F'(x)=f[\\psi(x)]\\psi'(x)-f[\\varphi(x)]\\varphi'(x)$。 $f$ 连续，$\\varphi,\\psi$ 可导 证明含变限积分的等式/不等式，标准套路是构造差函数后求导，化积分问题为微分问题。",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-theorem-gs11-b82740fa",
   "kind": "theorem",
   "name": "积分不等式的放缩原则",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "保序性：$f\\le g\\Rightarrow\\int f\\le\\int g$；估值：$m(b-a)\\le\\int_a^bf\\le M(b-a)$（$m,M$ 为最小最大值）；绝对值：$\\left|\\int f\\right|\\le\\int|f|$。",
   "matchText": "积分不等式的放缩原则 保序性：$f\\le g\\Rightarrow\\int f\\le\\int g$；估值：$m(b-a)\\le\\int_a^bf\\le M(b-a)$（$m,M$ 为最小最大值）；绝对值：$\\left|\\int f\\right|\\le\\int|f|$。 放缩目标是\"消去难积因子\"或\"造出已知常数\"；常与中值定理、单调有界联用。",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-theorem-gs11-df11c20f",
   "kind": "theorem",
   "name": "区间再现（配对）公式",
   "subject": "gaoshu",
   "lessons": [
    "gs11"
   ],
   "summary": "$$\\int_a^bf(x)dx=\\int_a^bf(a+b-x)dx$$",
   "matchText": "区间再现（配对）公式 $$\\int_a^bf(x)dx=\\int_a^bf(a+b-x)dx$$ 典型应用：$I=\\int_0^{\\pi/2}\\dfrac{\\sin x}{\\sin x+\\cos x}dx$，换 $x\\to\\tfrac\\pi2-x$ 后相加得 $2I=\\int_0^{\\pi/2}dx=\\tfrac\\pi2$，$I=\\tfrac\\pi4$。",
   "source": "data/lessons/gs11.js"
  },
  {
   "id": "k-theorem-gs12-0942a4de",
   "kind": "theorem",
   "name": "变力做功公式",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "$$W=\\int_a^bF(x)\\,dx$$",
   "matchText": "变力做功公式 $$W=\\int_a^bF(x)\\,dx$$ 力沿运动方向（或取投影） 方向变化的力必须先投影到运动方向。胡克定律弹簧功 $\\tfrac12ks^2$、克服重力 $W=mgh$（恒力特例）。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-theorem-gs12-527ac0f3",
   "kind": "theorem",
   "name": "引力分解公式",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "细棒上小段 $dx$ 对质点 $m$ 的引力大小 $dF=\\dfrac{Gm\\mu\\,dx}{r^2(x)}$，沿轴向分量 $$F_{\\parallel}=\\int dF\\cos\\theta(x)$$",
   "matchText": "引力分解公式 细棒上小段 $dx$ 对质点 $m$ 的引力大小 $dF=\\dfrac{Gm\\mu\\,dx}{r^2(x)}$，沿轴向分量 $$F_{\\parallel}=\\int dF\\cos\\theta(x)$$ 斜向引力必须分解 质点在棒的中垂线上时，垂直分量抵消、只剩轴向分量（乘 $\\cos$ 或 $\\sin$ 因子）；质点在棒的延长线上则无需分解。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-theorem-gs12-7fa896fb",
   "kind": "theorem",
   "name": "静压力公式",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "$$P=\\int_{h_1}^{h_2}\\rho g\\,y\\,w(y)\\,dy$$",
   "matchText": "静压力公式 $$P=\\int_{h_1}^{h_2}\\rho g\\,y\\,w(y)\\,dy$$ $y$ 为深度（从液面往下量），$w(y)$ 为宽度 若坐标从池底往上取，深度 $=H-y$，公式变为 $\\rho g(H-y)w(y)dy$——坐标选择写清楚即可。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-theorem-gs12-a9796483",
   "kind": "theorem",
   "name": "平均值公式",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "$$\\bar f=\\frac1{b-a}\\int_a^bf(x)dx;\\qquad f_{rms}=\\sqrt{\\frac1{b-a}\\int_a^bf^2(x)dx}$$",
   "matchText": "平均值公式 $$\\bar f=\\frac1{b-a}\\int_a^bf(x)dx;\\qquad f_{rms}=\\sqrt{\\frac1{b-a}\\int_a^bf^2(x)dx}$$ '平均值'考题常配以\"电流/速度\"情境；正弦量 $\\sin$ 在半周期平均 $=2/\\pi$、均方根 $=1/\\sqrt2$。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-theorem-gs12-c2e3f77d",
   "kind": "theorem",
   "name": "质心与转动惯量",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "$$\\bar x=\\frac{\\int x\\,dm}{\\int dm};\\qquad I=\\int r^2\\,dm$$",
   "matchText": "质心与转动惯量 $$\\bar x=\\frac{\\int x\\,dm}{\\int dm};\\qquad I=\\int r^2\\,dm$$ 细棒均质：对端点垂轴 $\\tfrac13ml^2$、对中心垂轴 $\\tfrac1{12}ml^2$、圆环对中心轴 $mR^2$、圆盘 $\\tfrac12mR^2$——四个特例值得记住。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-theorem-gs12-d4add7df",
   "kind": "theorem",
   "name": "抽水做功微元",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "容器中把水面降到某高度，取深度层 $[y,y+dy]$：$$dW=\\rho g\\,(y-y_0)\\,A(y)\\,dy$$ 其中 $A(y)$ 为该层横截面积，$y-y_0$ 为提升高度。",
   "matchText": "抽水做功微元 容器中把水面降到某高度，取深度层 $[y,y+dy]$：$$dW=\\rho g\\,(y-y_0)\\,A(y)\\,dy$$ 其中 $A(y)$ 为该层横截面积，$y-y_0$ 为提升高度。 先建立坐标系确定 $y$ 的正方向与 $y_0$ 易错点：提升高度是\"该层到出口的距离\"，不是统一值；坐标系取在池底还是液面直接影响被积函数。",
   "source": "data/lessons/gs12.js"
  },
  {
   "id": "k-theorem-gs13-031d7701",
   "kind": "theorem",
   "name": "混合偏导相等定理",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "$z_{xy}$ 与 $z_{yx}$ 都在点 $P$ 连续 $\\Rightarrow z_{xy}(P)=z_{yx}(P)$。",
   "matchText": "混合偏导相等定理 $z_{xy}$ 与 $z_{yx}$ 都在点 $P$ 连续 $\\Rightarrow z_{xy}(P)=z_{yx}(P)$。 混合偏导连续 考研常用它求待定系数：设含参数的函数满足 $z_{xy}=z_{yx}$ 处处成立，列方程解参数。",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-theorem-gs13-28fb4cf4",
   "kind": "theorem",
   "name": "拉格朗日乘数法",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "求 $f(x,y)$ 在约束 $\\varphi(x,y)=0$ 下的极值：解 $\\begin{cases}f_x+\\lambda\\varphi_x=0\\\\f_y+\\lambda\\varphi_y=0\\\\\\varphi=0\\end{cases}$，候选点中比较目标值。",
   "matchText": "拉格朗日乘数法 求 $f(x,y)$ 在约束 $\\varphi(x,y)=0$ 下的极值：解 $\\begin{cases}f_x+\\lambda\\varphi_x=0\\\\f_y+\\lambda\\varphi_y=0\\\\\\varphi=0\\end{cases}$，候选点中比较目标值。 实际应用题常由实际意义判定最大/最小（如\"材料一定求最大容积\"），无须二阶判别。闭区域最值 = 内部驻点 + 边界（条件极值）候选点比较。",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-theorem-gs13-4d0429e8",
   "kind": "theorem",
   "name": "隐函数存在定理",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "$F(x_0,y_0)=0$，$F_y(x_0,y_0)\\ne0$，$F$ 在邻域内偏导连续 $\\Rightarrow$ 存在唯一的 $y=y(x)$ 使 $y(x_0)=y_0$，且 $\\dfrac{dy}{dx}=-\\dfrac{F_x}{F_y}$。",
   "matchText": "隐函数存在定理 $F(x_0,y_0)=0$，$F_y(x_0,y_0)\\ne0$，$F$ 在邻域内偏导连续 $\\Rightarrow$ 存在唯一的 $y=y(x)$ 使 $y(x_0)=y_0$，且 $\\dfrac{dy}{dx}=-\\dfrac{F_x}{F_y}$。 隐函数定理条件 方程组情形用雅可比行列式 $J=\\dfrac{\\partial(F,G)}{\\partial(u,v)}\\ne0$ 保证 $u,v$ 能表示为 $x,y$ 的函数。",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-theorem-gs13-65d65713",
   "kind": "theorem",
   "name": "可微的充分条件",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "$f_x,f_y$ 在点 $(x_0,y_0)$ 的某邻域内存在且在该点**连续** $\\Rightarrow f$ 在该点可微。",
   "matchText": "可微的充分条件 $f_x,f_y$ 在点 $(x_0,y_0)$ 的某邻域内存在且在该点**连续** $\\Rightarrow f$ 在该点可微。 偏导连续 判断可微的实际流程：先求偏导 → 看是否连续（常用初等函数连续性）→ 不连续时用定义验证极限。",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-theorem-gs13-698b4da3",
   "kind": "theorem",
   "name": "可微的必要条件",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "$f$ 在点 $(x_0,y_0)$ 可微 $\\Rightarrow f$ 在该点连续且各偏导存在。",
   "matchText": "可微的必要条件 $f$ 在点 $(x_0,y_0)$ 可微 $\\Rightarrow f$ 在该点连续且各偏导存在。 逆命题均不成立：连续不可微（如 $\\sqrt{x^2+y^2}$ 在原点）、偏导存在不可微（如 $\\dfrac{xy}{x^2+y^2}$ 在原点）反例要熟。",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-theorem-gs13-db19cdd9",
   "kind": "theorem",
   "name": "二元极值充分条件",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "驻点处记 $A=f_{xx},B=f_{xy},C=f_{yy}$：$AC-B^2>0$ 且 $A>0$（极小）、$A<0$（极大）；$AC-B^2<0$ 非极值；$=0$ 不能判定。",
   "matchText": "二元极值充分条件 驻点处记 $A=f_{xx},B=f_{xy},C=f_{yy}$：$AC-B^2>0$ 且 $A>0$（极小）、$A<0$（极大）；$AC-B^2<0$ 非极值；$=0$ 不能判定。 二阶偏导连续 记忆：$\\Delta=AC-B^2$ 像\"判别式\"——$\\Delta>0$ 定性质看 $A$，$\\Delta<0$ 鞍点，$\\Delta=0$ 失效。",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-theorem-gs13-f27b8ab5",
   "kind": "theorem",
   "name": "方向导数与偏导的关系",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "若函数在一点可微，则沿任意单位方向 $\\mathbf e$ 的方向导数存在且等于 $\\nabla f\\cdot\\mathbf e$。沿所有方向的方向导数存在可推出各偏导数存在，但不一定推出可微。",
   "matchText": "方向导数与偏导的关系 若函数在一点可微，则沿任意单位方向 $\\mathbf e$ 的方向导数存在且等于 $\\nabla f\\cdot\\mathbf e$。沿所有方向的方向导数存在可推出各偏导数存在，但不一定推出可微。 可微 选择题常考：\"方向导数存在 ⇏ 可微\"、\"偏导存在 ⇏ 方向导数存在（一般方向）\"。",
   "source": "data/lessons/gs13.js"
  },
  {
   "id": "k-theorem-gs14-152433d2",
   "kind": "theorem",
   "name": "面积与体积",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "$A(D)=\\iint_D1\\,dA$；当 $f\\ge0$ 时，曲面 $z=f(x,y)$ 下方、$D$ 上方的体积是 $\\iint_D f\\,dA$。",
   "matchText": "面积与体积 $A(D)=\\iint_D1\\,dA$；当 $f\\ge0$ 时，曲面 $z=f(x,y)$ 下方、$D$ 上方的体积是 $\\iint_D f\\,dA$。 区域有界，函数可积。 若函数变号，积分为带符号体积。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-theorem-gs14-ba94dc6b",
   "kind": "theorem",
   "name": "二重积分中值定理",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "若 $f$ 连续，存在 $\\xi\\in D$ 使 $\\iint_D f\\,dA=f(\\xi)\\operatorname{area}(D)$。",
   "matchText": "二重积分中值定理 若 $f$ 连续，存在 $\\xi\\in D$ 使 $\\iint_D f\\,dA=f(\\xi)\\operatorname{area}(D)$。 $D$ 为有界闭区域，面积存在且 $f$ 在其上连续。 中值点是二维点。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-theorem-gs14-c72c796c",
   "kind": "theorem",
   "name": "区域加法",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "若区域分成内部不重叠的有限个可积子区域，则整体积分是各子区域积分之和。",
   "matchText": "区域加法 若区域分成内部不重叠的有限个可积子区域，则整体积分是各子区域积分之和。 公共边界不影响面积积分。 复杂区域常按交点分段。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-theorem-gs14-cc91a3e6",
   "kind": "theorem",
   "name": "线性与保序",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "二重积分具有线性性；若 $f\\le g$ 于 $D$，则 $\\iint_D f\\le\\iint_D g$。",
   "matchText": "线性与保序 二重积分具有线性性；若 $f\\le g$ 于 $D$，则 $\\iint_D f\\le\\iint_D g$。 被积函数在有界区域上可积。 上下界估计可直接积分常数。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-theorem-gs14-e89b31bb",
   "kind": "theorem",
   "name": "直角坐标计算",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "$\\iint_D f\\,dA=\\int_a^b dx\\int_{\\varphi_1(x)}^{\\varphi_2(x)}f(x,y)dy$。",
   "matchText": "直角坐标计算 $\\iint_D f\\,dA=\\int_a^b dx\\int_{\\varphi_1(x)}^{\\varphi_2(x)}f(x,y)dy$。 $D$ 为上述简单区域且 $f$ 连续。 先读内层边界，外层范围随后确定。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-theorem-gs14-eaf1f8d1",
   "kind": "theorem",
   "name": "极坐标换元",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "$\\iint_D f(x,y)dxdy=\\iint_{D'}f(r\\cos\\theta,r\\sin\\theta)r\\,dr\\,d\\theta$。",
   "matchText": "极坐标换元 $\\iint_D f(x,y)dxdy=\\iint_{D'}f(r\\cos\\theta,r\\sin\\theta)r\\,dr\\,d\\theta$。 极坐标区域对原区域覆盖一次，忽略面积为零的边界。 雅可比因子 $r$ 不可遗漏。",
   "source": "data/lessons/gs14.js"
  },
  {
   "id": "k-theorem-gs15-4e6a9dd7",
   "kind": "theorem",
   "name": "一阶线性通解",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "$y=\\mu^{-1}[\\int\\mu Q\\,dx+C]$，其中 $\\mu=e^{\\int Pdx}$。",
   "matchText": "一阶线性通解 $y=\\mu^{-1}[\\int\\mu Q\\,dx+C]$，其中 $\\mu=e^{\\int Pdx}$。 $P,Q$ 在所讨论区间连续。 先计算积分因子，再把左侧合成乘积导数。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-theorem-gs15-5d05bc28",
   "kind": "theorem",
   "name": "常系数齐次方程",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "$y''+ay'+by=0$ 的特征方程 $r^2+ar+b=0$。不同实根给 $C_1e^{r_1x}+C_2e^{r_2x}$；重根 $r$ 给 $(C_1+C_2x)e^{rx}$。",
   "matchText": "常系数齐次方程 $y''+ay'+by=0$ 的特征方程 $r^2+ar+b=0$。不同实根给 $C_1e^{r_1x}+C_2e^{r_2x}$；重根 $r$ 给 $(C_1+C_2x)e^{rx}$。 系数为常数。 若根为 $\\alpha\\pm i\\beta$，实通解为 $e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-theorem-gs15-73f6c5e5",
   "kind": "theorem",
   "name": "可分离形式",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "$\\int dy/h(y)=\\int g(x)dx+C$。",
   "matchText": "可分离形式 $\\int dy/h(y)=\\int g(x)dx+C$。 在 $h(y)\\ne0$ 的解区间上。 另外检验 $h(y)=0$ 给出的常值解。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-theorem-gs15-7aac783f",
   "kind": "theorem",
   "name": "全微分判据",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "若 $\\Phi_x=M,\\Phi_y=N$，则 $Mdx+Ndy=0$ 的积分为 $\\Phi=C$。",
   "matchText": "全微分判据 若 $\\Phi_x=M,\\Phi_y=N$，则 $Mdx+Ndy=0$ 的积分为 $\\Phi=C$。 $\\Phi$ 在所讨论区域存在；常见充分条件为单连通区域内 $M_y=N_x$。 求势函数后必须核对两个偏导。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-theorem-gs15-80c85db6",
   "kind": "theorem",
   "name": "待定系数共振",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "对于指数、多项式及三角函数形式的右端，可选同类形式试探特解；若与齐次解重复，乘足够次的 $x$。",
   "matchText": "待定系数共振 对于指数、多项式及三角函数形式的右端，可选同类形式试探特解；若与齐次解重复，乘足够次的 $x$。 右端属于待定系数法适用的有限组合。 代回原方程确定系数。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-theorem-gs15-98ce9551",
   "kind": "theorem",
   "name": "非齐次解结构",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "$y=y_h+y_p$，其中 $y_h$ 是对应齐次方程通解，$y_p$ 是任意一个非齐次特解。",
   "matchText": "非齐次解结构 $y=y_h+y_p$，其中 $y_h$ 是对应齐次方程通解，$y_p$ 是任意一个非齐次特解。 线性方程在同一区间上讨论。 两个非齐次解的差满足齐次方程。",
   "source": "data/lessons/gs15.js"
  },
  {
   "id": "k-theorem-gs16-00ac2b1a",
   "kind": "theorem",
   "name": "比值判别",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "若正项满足 $a_{n+1}/a_n\\to L$，则 $L<1$ 时收敛，$L>1$ 时发散；$L=1$ 时无结论。",
   "matchText": "比值判别 若正项满足 $a_{n+1}/a_n\\to L$，则 $L<1$ 时收敛，$L>1$ 时发散；$L=1$ 时无结论。 各项最终为正，极限存在。 阶乘与指数型项常适用。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs16-4b0bdbe3",
   "kind": "theorem",
   "name": "莱布尼茨判别",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "若 $b_n\\ge0$ 单调趋于零，则 $\\sum(-1)^{n-1}b_n$ 收敛，截断误差绝对值不超过下一项 $b_{N+1}$。",
   "matchText": "莱布尼茨判别 若 $b_n\\ge0$ 单调趋于零，则 $\\sum(-1)^{n-1}b_n$ 收敛，截断误差绝对值不超过下一项 $b_{N+1}$。 单调性最终成立即可。 要判断绝对收敛，仍须另看 $\\sum b_n$。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs16-5708899e",
   "kind": "theorem",
   "name": "傅里叶收敛",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "满足分段光滑等狄利克雷条件时，级数在 $x$ 处收敛到 $[f(x-)+f(x+)]/2$。",
   "matchText": "傅里叶收敛 满足分段光滑等狄利克雷条件时，级数在 $x$ 处收敛到 $[f(x-)+f(x+)]/2$。 左右极限按周期延拓理解。 周期端点也要考虑延拓后的左右极限。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs16-ab26d5e3",
   "kind": "theorem",
   "name": "根值判别",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "若 $\\sqrt[n]{|a_n|}\\to L$，则 $L<1$ 时级数绝对收敛，$L>1$ 时发散；$L=1$ 时无结论。",
   "matchText": "根值判别 若 $\\sqrt[n]{|a_n|}\\to L$，则 $L<1$ 时级数绝对收敛，$L>1$ 时发散；$L=1$ 时无结论。 极限存在。 指数型通项常适用。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs16-c2a2f418",
   "kind": "theorem",
   "name": "比较判别",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "对非负项，若最终 $a_n\\le b_n$ 且 $\\sum b_n$ 收敛，则 $\\sum a_n$ 收敛；若 $a_n\\ge b_n$ 且 $\\sum b_n$ 发散，则 $\\sum a_n$ 发散。",
   "matchText": "比较判别 对非负项，若最终 $a_n\\le b_n$ 且 $\\sum b_n$ 收敛，则 $\\sum a_n$ 收敛；若 $a_n\\ge b_n$ 且 $\\sum b_n$ 发散，则 $\\sum a_n$ 发散。 比较关系从某项开始成立即可。 同阶比较常可使用极限比值。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs16-c51bf77f",
   "kind": "theorem",
   "name": "几何级数与 $p$ 级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "$\\sum_{n=0}^{\\infty}q^n=1/(1-q)$ 当 $|q|<1$；$\\sum_{n=1}^{\\infty}n^{-p}$ 当且仅当 $p>1$ 收敛。",
   "matchText": "几何级数与 $p$ 级数 $\\sum_{n=0}^{\\infty}q^n=1/(1-q)$ 当 $|q|<1$；$\\sum_{n=1}^{\\infty}n^{-p}$ 当且仅当 $p>1$ 收敛。 几何级数求和须 $|q|<1$。 调和级数 $p=1$ 发散。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs16-c5d7db97",
   "kind": "theorem",
   "name": "傅里叶系数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "$a_n=l^{-1}\\int_{-l}^l f(x)\\cos(n\\pi x/l)dx$（$n\\ge0$），$b_n=l^{-1}\\int_{-l}^l f(x)\\sin(n\\pi x/l)dx$（$n\\ge1$）。",
   "matchText": "傅里叶系数 $a_n=l^{-1}\\int_{-l}^l f(x)\\cos(n\\pi x/l)dx$（$n\\ge0$），$b_n=l^{-1}\\int_{-l}^l f(x)\\sin(n\\pi x/l)dx$（$n\\ge1$）。 函数在一个周期内可积。 奇函数的 $a_n$ 为零；偶函数的 $b_n$ 为零。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs16-d8892834",
   "kind": "theorem",
   "name": "常用幂级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "$e^x=\\sum_{n=0}^\\infty x^n/n!$；$\\sin x=\\sum_{n=0}^\\infty(-1)^nx^{2n+1}/(2n+1)!$；$\\cos x=\\sum_{n=0}^\\infty(-1)^nx^{2n}/(2n)!$。另有…",
   "matchText": "常用幂级数 $e^x=\\sum_{n=0}^\\infty x^n/n!$；$\\sin x=\\sum_{n=0}^\\infty(-1)^nx^{2n+1}/(2n+1)!$；$\\cos x=\\sum_{n=0}^\\infty(-1)^nx^{2n}/(2n)!$。另有 $\\log(1+x)=\\sum_{n=1}^\\infty(-1)^{n-1}x^n/n$ 和 $(1+x)^\\alpha=\\sum_{n=0}^\\infty\\binom\\alpha n x^n$，后二式在 $|x|<1$ 成立。 各式在其收敛域内使用，端点需单独分析。 可通过代换、逐项积分和求导得到更多展开。",
   "source": "data/lessons/gs16.js"
  },
  {
   "id": "k-theorem-gs17-1e029763",
   "kind": "theorem",
   "name": "叉积长度",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$|\\mathbf a\\times\\mathbf b|$ 等于由两向量张成的平行四边形面积。",
   "matchText": "叉积长度 $|\\mathbf a\\times\\mathbf b|$ 等于由两向量张成的平行四边形面积。 两个向量为三维实向量。 叉积顺序反转会改变方向。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-theorem-gs17-2908f2a3",
   "kind": "theorem",
   "name": "点到平面距离",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$d=|Ax_0+By_0+Cz_0+D|/\\sqrt{A^2+B^2+C^2}$。",
   "matchText": "点到平面距离 $d=|Ax_0+By_0+Cz_0+D|/\\sqrt{A^2+B^2+C^2}$。 平面 $Ax+By+Cz+D=0$ 且 $(A,B,C)\\ne0$。 分母是法向量的模。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-theorem-gs17-48d5e505",
   "kind": "theorem",
   "name": "点到直线距离",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$d=|\\overrightarrow{P_0P}\\times\\mathbf v|/|\\mathbf v|$。",
   "matchText": "点到直线距离 $d=|\\overrightarrow{P_0P}\\times\\mathbf v|/|\\mathbf v|$。 $P_0$ 在直线上，$\\mathbf v$ 为非零方向向量。 分子是平行四边形面积。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-theorem-gs17-7dc67a57",
   "kind": "theorem",
   "name": "直线与平面夹角",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$\\sin\\alpha=|\\mathbf v\\cdot\\mathbf n|/(|\\mathbf v||\\mathbf n|)$，其中 $0\\le\\alpha\\le\\pi/2$。",
   "matchText": "直线与平面夹角 $\\sin\\alpha=|\\mathbf v\\cdot\\mathbf n|/(|\\mathbf v||\\mathbf n|)$，其中 $0\\le\\alpha\\le\\pi/2$。 直线方向向量和法向量均非零。 这是正弦而不是余弦。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-theorem-gs17-92679042",
   "kind": "theorem",
   "name": "向量夹角",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$\\cos\\theta=(\\mathbf a\\cdot\\mathbf b)/(|\\mathbf a||\\mathbf b|)$。",
   "matchText": "向量夹角 $\\cos\\theta=(\\mathbf a\\cdot\\mathbf b)/(|\\mathbf a||\\mathbf b|)$。 两向量均非零，$0\\le\\theta\\le\\pi$。 方向角与直线之间通常取锐角的约定要区分。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-theorem-gs17-d9900999",
   "kind": "theorem",
   "name": "混合积",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "$|\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)|$ 是平行六面体体积；混合积为零当且仅当三向量线性相关。",
   "matchText": "混合积 $|\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)|$ 是平行六面体体积；混合积为零当且仅当三向量线性相关。 三维欧氏空间。 行列式可用于坐标计算。",
   "source": "data/lessons/gs17.js"
  },
  {
   "id": "k-theorem-gs18-122b1334",
   "kind": "theorem",
   "name": "图形曲面面积元",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "对于 $z=z(x,y)$，有 $dS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy$。",
   "matchText": "图形曲面面积元 对于 $z=z(x,y)$，有 $dS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy$。 曲面可在投影区域表示为连续可微的单值函数。 这是第一类面积元；通量还需指定法向。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-theorem-gs18-1e53e74c",
   "kind": "theorem",
   "name": "格林公式",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\oint_{\\partial D}Pdx+Qdy=\\iint_D(Q_x-P_y)dxdy$。",
   "matchText": "格林公式 $\\oint_{\\partial D}Pdx+Qdy=\\iint_D(Q_x-P_y)dxdy$。 $D$ 为适当平面区域，边界取正向，$P,Q$ 在包含区域的开集有连续一阶偏导。 正向表示行进时区域在左侧；带洞区域的内边界方向相反。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-theorem-gs18-24afa7a3",
   "kind": "theorem",
   "name": "第一类曲线积分参数化",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\int_L f\\,ds=\\int_a^bf(\\mathbf r(t))|\\mathbf r'(t)|dt$。",
   "matchText": "第一类曲线积分参数化 $\\int_L f\\,ds=\\int_a^bf(\\mathbf r(t))|\\mathbf r'(t)|dt$。 参数化在 $[a,b]$ 分段光滑且恰覆盖曲线一次。 不依赖方向。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-theorem-gs18-a4a4f522",
   "kind": "theorem",
   "name": "斯托克斯公式",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS$。",
   "matchText": "斯托克斯公式 $\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS$。 曲面有一致定向，边界方向依右手定则匹配，向量场在邻域连续可微。 曲面与边界方向不能独立选取。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-theorem-gs18-b7a0686a",
   "kind": "theorem",
   "name": "势函数基本定理",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "若 $\\mathbf F=\\nabla\\Phi$，则 $\\int_A^B\\mathbf F\\cdot d\\mathbf r=\\Phi(B)-\\Phi(A)$。",
   "matchText": "势函数基本定理 若 $\\mathbf F=\\nabla\\Phi$，则 $\\int_A^B\\mathbf F\\cdot d\\mathbf r=\\Phi(B)-\\Phi(A)$。 路径位于势函数定义域内且分段光滑。 闭合路径的积分为零。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-theorem-gs18-ddc7d3b0",
   "kind": "theorem",
   "name": "高斯公式",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "$\\iint_{\\partial\\Omega}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_\\Omega\\operatorname{div}\\mathbf F\\,dV$。",
   "matchText": "高斯公式 $\\iint_{\\partial\\Omega}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_\\Omega\\operatorname{div}\\mathbf F\\,dV$。 区域有分段光滑闭边界，$\\mathbf n$ 为外法向，向量场在区域邻域连续可微。 开曲面使用时须补面，并减去补面的通量。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-theorem-gs18-dde98ea4",
   "kind": "theorem",
   "name": "坐标体积元",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "柱面坐标为 $dV=r\\,dr\\,d\\theta\\,dz$；上述球坐标为 $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$。",
   "matchText": "坐标体积元 柱面坐标为 $dV=r\\,dr\\,d\\theta\\,dz$；上述球坐标为 $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$。 采用本讲规定的角度定义且区域被覆盖一次。 更换球坐标角度约定时要同步调整公式。",
   "source": "data/lessons/gs18.js"
  },
  {
   "id": "k-theorem-xd01-168189b4",
   "kind": "theorem",
   "name": "性质4：某行为两组数之和可拆分",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "若某行元素都是两数之和，则行列式可拆成两个行列式之和。",
   "matchText": "性质4：某行为两组数之和可拆分 若某行元素都是两数之和，则行列式可拆成两个行列式之和。 只能按**一行**拆分，拆分后其余各行保持不变 这是\"拆分法\"的理论依据，处理含 $\\lambda$、字母参数的行列式非常有效。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd01-1dd73182",
   "kind": "theorem",
   "name": "性质2：两行（列）互换变号",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "交换行列式的两行（列），行列式变号。",
   "matchText": "性质2：两行（列）互换变号 交换行列式的两行（列），行列式变号。 推论：若行列式有两行（列）完全相同，则行列式为 $0$。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd01-2abf4178",
   "kind": "theorem",
   "name": "性质1：转置不变",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "$$|A^T|=|A|$$",
   "matchText": "性质1：转置不变 $$|A^T|=|A|$$ 对任意 $n$ 阶方阵成立 说明行列式中\"行\"具有的性质对\"列\"同样成立，故下面性质凡对行成立的对列也成立。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd01-34873036",
   "kind": "theorem",
   "name": "性质5：倍加变换不变",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "把某行（列）的 $k$ 倍加到另一行（列）上，行列式不变。",
   "matchText": "性质5：倍加变换不变 把某行（列）的 $k$ 倍加到另一行（列）上，行列式不变。 这是**计算行列式最常用的性质**：用倍加把行列式化为上三角或爪形。注意：倍加不改变值，但\"互换\"和\"倍乘\"都会改变值，做初等变换时要分清哪类变换。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd01-3f1d9828",
   "kind": "theorem",
   "name": "性质3：某行公因子可提出",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "$$\\begin{vmatrix}a_{11}&\\cdots&a_{1n}\\\\ ka_{i1}&\\cdots&ka_{in}\\\\ \\vdots&&\\vdots\\end{vmatrix}=k\\begin{vmatrix}a_{11}&\\cdots&a_{1n}\\\\a_{i1}&\\cdots&a_{in}\\\\\\vdots&…",
   "matchText": "性质3：某行公因子可提出 $$\\begin{vmatrix}a_{11}&\\cdots&a_{1n}\\\\ ka_{i1}&\\cdots&ka_{in}\\\\ \\vdots&&\\vdots\\end{vmatrix}=k\\begin{vmatrix}a_{11}&\\cdots&a_{1n}\\\\a_{i1}&\\cdots&a_{in}\\\\\\vdots&&\\vdots\\end{vmatrix}$$ 推论1：某行元素全为 $0$，则行列式为 $0$。推论2：两行对应元素成比例，则行列式为 $0$。注意 $|kA|=k^n|A|$（$n$ 阶），与性质3不要混淆。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd01-5d6ba247",
   "kind": "theorem",
   "name": "拉普拉斯定理（两行展开，考研拓展）",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "取定 $k$ 行，其所有 $k$ 阶子式 $N_1,N_2,\\dots$ 与各自的代数余子式乘积之和等于行列式的值。",
   "matchText": "拉普拉斯定理（两行展开，考研拓展） 取定 $k$ 行，其所有 $k$ 阶子式 $N_1,N_2,\\dots$ 与各自的代数余子式乘积之和等于行列式的值。 最常用特例即分块行列式公式 $\\begin{vmatrix}O&A\\\\B&O\\end{vmatrix}=(-1)^{mn}|A||B|$，可直接当结论记忆使用。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd01-d154c3ed",
   "kind": "theorem",
   "name": "按行（列）展开定理",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "$$|A|=a_{i1}A_{i1}+a_{i2}A_{i2}+\\cdots+a_{in}A_{in}=\\sum_{j=1}^n a_{ij}A_{ij}$$ $$|A|=a_{1j}A_{1j}+a_{2j}A_{2j}+\\cdots+a_{nj}A_{nj}$$",
   "matchText": "按行（列）展开定理 $$|A|=a_{i1}A_{i1}+a_{i2}A_{i2}+\\cdots+a_{in}A_{in}=\\sum_{j=1}^n a_{ij}A_{ij}$$\n$$|A|=a_{1j}A_{1j}+a_{2j}A_{2j}+\\cdots+a_{nj}A_{nj}$$ 对任意一行或一列展开，结果相同 错位相加为零：$\\sum_{j}a_{ij}A_{kj}=0\\ (i\\neq k)$，即某行元素乘**另一行**对应代数余子式之和为 $0$。合起来有 $AA^*=|A|E$。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd01-e972f87d",
   "kind": "theorem",
   "name": "克拉默法则",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "若线性方程组 $\\begin{cases}a_{11}x_1+\\cdots+a_{1n}x_n=b_1\\\\ \\vdots\\\\ a_{n1}x_1+\\cdots+a_{nn}x_n=b_n\\end{cases}$ 的系数行列式 $D\\neq 0$，则方程组有唯一解：$$x_j=\\frac{D_j}{D}$$ 其中…",
   "matchText": "克拉默法则 若线性方程组 $\\begin{cases}a_{11}x_1+\\cdots+a_{1n}x_n=b_1\\\\ \\vdots\\\\ a_{n1}x_1+\\cdots+a_{nn}x_n=b_n\\end{cases}$ 的系数行列式 $D\\neq 0$，则方程组有唯一解：$$x_j=\\frac{D_j}{D}$$ 其中 $D_j$ 是把 $D$ 的第 $j$ 列换成常数项 $b_1,\\dots,b_n$ 后的行列式。 方程个数 = 未知数个数 = $n$，且 $D\\neq0$ 齐次方程组（$b=0$）有非零解 $\\iff D=0$。克拉默法则理论价值大于计算价值：它给出了\"唯一解\"的行列式判据。",
   "source": "data/lessons/xd01.js"
  },
  {
   "id": "k-theorem-xd02-055430a9",
   "kind": "theorem",
   "name": "秩的 Sylvester 不等式",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "$$r(A_{m\\times n}B_{n\\times s})\\ge r(A)+r(B)-n$$",
   "matchText": "秩的 Sylvester 不等式 $$r(A_{m\\times n}B_{n\\times s})\\ge r(A)+r(B)-n$$ 与 $r(AB)\\le\\min\\{r(A),r(B)\\}$ 联立得夹逼。推论：$A_{m\\times n}B=O\\Rightarrow r(A)+r(B)\\le n$，这是抽象题的最强工具之一。",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-theorem-xd02-2dabaec0",
   "kind": "theorem",
   "name": "幂的计算三板斧",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "① 秩 1 矩阵：$A=\\alpha\\beta^T\\Rightarrow A^n=(\\beta^T\\alpha)^{n-1}A=\\lambda^{n-1}A$；② 相似对角化：$A=P\\Lambda P^{-1}\\Rightarrow A^n=P\\Lambda^nP^{-1}$；③ 拆分法：$A=B+kE$，$B$ 幂…",
   "matchText": "幂的计算三板斧 ① 秩 1 矩阵：$A=\\alpha\\beta^T\\Rightarrow A^n=(\\beta^T\\alpha)^{n-1}A=\\lambda^{n-1}A$；② 相似对角化：$A=P\\Lambda P^{-1}\\Rightarrow A^n=P\\Lambda^nP^{-1}$；③ 拆分法：$A=B+kE$，$B$ 幂次低时展开（$B^2=O$ 型二项式失效，需 $B$ 与 $E$ 交换——总成立）。 ③ 中 $(B+kE)^n=\\sum C_n^i k^{n-i}B^i$ 合法，因为 $B$ 与 $E$ 可交换。",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-theorem-xd02-406e9b6e",
   "kind": "theorem",
   "name": "可逆的充要条件（核心定理）",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "$n$ 阶方阵 $A$ 可逆 $\\iff$ 存在 $B$ 使 $AB=E$（单侧即可）$\\iff |A|\\neq0\\iff r(A)=n\\iff Ax=0$ 只有零解。",
   "matchText": "可逆的充要条件（核心定理） $n$ 阶方阵 $A$ 可逆 $\\iff$ 存在 $B$ 使 $AB=E$（单侧即可）$\\iff |A|\\neq0\\iff r(A)=n\\iff Ax=0$ 只有零解。 单侧可逆即双侧可逆（方阵情形）：\"若 $AB=E$ 则 $A$ 可逆且 $B=A^{-1}$\"，这一结论在抽象证明题中反复使用。",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-theorem-xd02-4c44dc73",
   "kind": "theorem",
   "name": "初等矩阵求逆与求秩",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "对横向增广矩阵 $(A\\mid E)$ 施行行变换，可化为 $(E\\mid A^{-1})$；对纵向增广矩阵 $\\begin{pmatrix}A\\\\E\\end{pmatrix}$ 施行列变换，可化为 $\\begin{pmatrix}E\\\\A^{-1}\\end{pmatrix}$。",
   "matchText": "初等矩阵求逆与求秩 对横向增广矩阵 $(A\\mid E)$ 施行行变换，可化为 $(E\\mid A^{-1})$；对纵向增广矩阵 $\\begin{pmatrix}A\\\\E\\end{pmatrix}$ 施行列变换，可化为 $\\begin{pmatrix}E\\\\A^{-1}\\end{pmatrix}$。 等价表述：存在初等矩阵 $P_1,\\dots,P_s$ 使 $P_s\\cdots P_1A=E$，则 $A^{-1}=P_s\\cdots P_1$。此法计算量小，是最实用的求逆法。",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-theorem-xd02-66ed12d4",
   "kind": "theorem",
   "name": "矩阵等价",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "$A\\simeq B\\iff$ 可通过初等变换互化 $\\iff r(A)=r(B)$（同型时）。",
   "matchText": "矩阵等价 $A\\simeq B\\iff$ 可通过初等变换互化 $\\iff r(A)=r(B)$（同型时）。 同型矩阵 等价、相似、合同三个概念要区分：等价只需秩相同；相似、合同要求更强（第5、6章）。",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-theorem-xd02-cecba71d",
   "kind": "theorem",
   "name": "伴随矩阵公式体系",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "$$AA^*=A^*A=|A|E$$ $$A^{-1}=\\frac{A^*}{|A|},\\quad A^*=|A|A^{-1},\\quad (A^*)^{-1}=\\frac{A}{|A|}$$ $$(A^*)^*=|A|^{n-2}A\\ (n\\ge2),\\quad |A^*|=|A|^{n-1}$$ $$(AB)^*=…",
   "matchText": "伴随矩阵公式体系 $$AA^*=A^*A=|A|E$$ $$A^{-1}=\\frac{A^*}{|A|},\\quad A^*=|A|A^{-1},\\quad (A^*)^{-1}=\\frac{A}{|A|}$$ $$(A^*)^*=|A|^{n-2}A\\ (n\\ge2),\\quad |A^*|=|A|^{n-1}$$ $$(AB)^*=B^*A^*,\\quad (A^T)^*=(A^*)^T$$ $n\\ge 2$ 阶方阵；$|A^*|=|A|^{n-1}$ 对任意 $A$（含不可逆）成立 秩的关系：$r(A^*)=\\begin{cases}n,&r(A)=n\\\\1,&r(A)=n-1\\\\0,&r(A)<n-1\\end{cases}$，必须完整记住三段。",
   "source": "data/lessons/xd02.js"
  },
  {
   "id": "k-theorem-xd03-10f5207f",
   "kind": "theorem",
   "name": "三秩相等",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "矩阵 $A$ 的秩 = 行向量组的秩 = 列向量组的秩。",
   "matchText": "三秩相等 矩阵 $A$ 的秩 = 行向量组的秩 = 列向量组的秩。 因此求向量组的秩可转化为矩阵的秩，用初等行变换即可。注意：行变换后**行**向量组已改变，只能用于判断**列**向量组的极大无关组。",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-theorem-xd03-2344aeb2",
   "kind": "theorem",
   "name": "正交向量组线性无关",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "两两正交的非零向量组必线性无关。",
   "matchText": "正交向量组线性无关 两两正交的非零向量组必线性无关。 每个向量非零 证明：设 $\\sum k_i\\alpha_i=0$，两边与 $\\alpha_j$ 作内积得 $k_j(\\alpha_j,\\alpha_j)=0$，由 $(\\alpha_j,\\alpha_j)>0$ 得 $k_j=0$。",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-theorem-xd03-4fc175cc",
   "kind": "theorem",
   "name": "秩的比较定理",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "$\\beta$ 组可由 $\\alpha$ 组线性表示 $\\Rightarrow r(\\beta)\\le r(\\alpha)$。",
   "matchText": "秩的比较定理 $\\beta$ 组可由 $\\alpha$ 组线性表示 $\\Rightarrow r(\\beta)\\le r(\\alpha)$。 推论：等价向量组秩相等。证明思路：$\\alpha$ 组的极大无关组加上 $\\beta$ 组仍可由 $\\alpha$ 极大无关组表示，故个数不超。",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-theorem-xd03-5f566805",
   "kind": "theorem",
   "name": "相关性的基本判别定理",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "① $n+1$ 个 $n$ 维向量必线性相关；② 部分相关则整体相关；整体无关则部分无关；③ 无关组添分量（增加维数）仍无关；④ $\\alpha_1,\\dots,\\alpha_s$ 无关，$\\alpha_1,\\dots,\\alpha_s,\\beta$ 相关 $\\iff\\beta$ 可由…",
   "matchText": "相关性的基本判别定理 ① $n+1$ 个 $n$ 维向量必线性相关；② 部分相关则整体相关；整体无关则部分无关；③ 无关组添分量（增加维数）仍无关；④ $\\alpha_1,\\dots,\\alpha_s$ 无关，$\\alpha_1,\\dots,\\alpha_s,\\beta$ 相关 $\\iff\\beta$ 可由 $\\alpha_1,\\dots,\\alpha_s$ 唯一线性表示。 ④ 是\"添加一个向量\"问题的核心结论，选填题高频。",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-theorem-xd03-681fcd9b",
   "kind": "theorem",
   "name": "施密特正交化",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "线性无关组 $\\alpha_1,\\dots,\\alpha_s$ 经施密特正交化 + 单位化可得等价的标准正交组。",
   "matchText": "施密特正交化 线性无关组 $\\alpha_1,\\dots,\\alpha_s$ 经施密特正交化 + 单位化可得等价的标准正交组。 原向量组线性无关 考试常与\"求正交矩阵使 $A$ 对角化\"结合：求出特征向量后对**同一特征值的不同特征向量**也要正交化（若该特征值重数 > 1）。",
   "source": "data/lessons/xd03.js"
  },
  {
   "id": "k-theorem-xd04-6456e90c",
   "kind": "theorem",
   "name": "解的判定定理",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "$Ax=b$：$r(A)=r(A,b)=n\\iff$ 唯一解；$r(A)=r(A,b)<n\\iff$ 无穷多解；$r(A)<r(A,b)\\iff$ 无解。",
   "matchText": "解的判定定理 $Ax=b$：$r(A)=r(A,b)=n\\iff$ 唯一解；$r(A)=r(A,b)<n\\iff$ 无穷多解；$r(A)<r(A,b)\\iff$ 无解。 方阵情形 $|A|\\ne0\\iff$ 唯一解（克拉默）；$|A|=0$ 时要么无解要么无穷多解。",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-theorem-xd04-b6b2f936",
   "kind": "theorem",
   "name": "两个方程组解集的包含关系",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "$A$ 的解都是 $B$ 的解 $\\iff Bx=0$ 的解空间包含 $Ax=0$ 的解空间 $\\iff r\\begin{pmatrix}A\\\\B\\end{pmatrix}=r(B)$。",
   "matchText": "两个方程组解集的包含关系 $A$ 的解都是 $B$ 的解 $\\iff Bx=0$ 的解空间包含 $Ax=0$ 的解空间 $\\iff r\\begin{pmatrix}A\\\\B\\end{pmatrix}=r(B)$。 齐次方程组 同解 $\\iff$ 互相包含 $\\iff r(A)=r\\begin{pmatrix}A\\\\B\\end{pmatrix}=r(B)$。抽象证明题利器。",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-theorem-xd04-c323c210",
   "kind": "theorem",
   "name": "解的结构定理",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "$Ax=b$ 的通解 = 特解 + 齐次通解：$x=\\eta^*+\\sum k_i\\xi_i$，$\\{\\xi_i\\}$ 为 $Ax=0$ 的基础解系。",
   "matchText": "解的结构定理 $Ax=b$ 的通解 = 特解 + 齐次通解：$x=\\eta^*+\\sum k_i\\xi_i$，$\\{\\xi_i\\}$ 为 $Ax=0$ 的基础解系。 $Ax=b$ 有解 证明用解的性质：$\\eta_i-\\eta_1$（$i=2,\\dots$）都是齐次解，且可验证无关性传递。",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-theorem-xd04-e4920921",
   "kind": "theorem",
   "name": "基础解系存在定理",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "$Ax=0$（$A$ 为 $m\\times n$）若有非零解，则基础解系存在且含 $n-r(A)$ 个向量。",
   "matchText": "基础解系存在定理 $Ax=0$（$A$ 为 $m\\times n$）若有非零解，则基础解系存在且含 $n-r(A)$ 个向量。 解空间维数 $=n-r(A)$，这是线性代数最重要公式之一。$n-r$ 也等于自由未知量个数。",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-theorem-xd04-f493d19d",
   "kind": "theorem",
   "name": "方阵行列式与解",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "$A$ 为 $n$ 阶方阵时：$Ax=0$ 有非零解 $\\iff |A|=0\\iff r(A)<n\\iff A$ 不可逆。",
   "matchText": "方阵行列式与解 $A$ 为 $n$ 阶方阵时：$Ax=0$ 有非零解 $\\iff |A|=0\\iff r(A)<n\\iff A$ 不可逆。 把\"方程组有非零解\"翻译为\"行列式为零\"或\"矩阵不可逆\"，是跨章节综合题的通道。",
   "source": "data/lessons/xd04.js"
  },
  {
   "id": "k-theorem-xd05-8a445a31",
   "kind": "theorem",
   "name": "特征值的多项式/函数变换",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "$\\lambda$ 是 $A$ 的特征值 $\\Rightarrow$ $f(\\lambda)$ 是 $f(A)=a_mA^m+\\cdots+a_1A+a_0E$ 的特征值。特例：$A^{-1}$ 的特征值为 $1/\\lambda$；$A^*$ 的为 $|A|/\\lambda$；$A^k$ 的为 $\\lambda^k$。",
   "matchText": "特征值的多项式/函数变换 $\\lambda$ 是 $A$ 的特征值 $\\Rightarrow$ $f(\\lambda)$ 是 $f(A)=a_mA^m+\\cdots+a_1A+a_0E$ 的特征值。特例：$A^{-1}$ 的特征值为 $1/\\lambda$；$A^*$ 的为 $|A|/\\lambda$；$A^k$ 的为 $\\lambda^k$。 特征向量不变（同一 $\\xi$）。反向不真：$f(\\mu)$ 是 $f(A)$ 的特征值推不出 $\\mu$ 是 $A$ 的。",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-theorem-xd05-8e27785c",
   "kind": "theorem",
   "name": "实对称正交对角化定理",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "实对称矩阵 $A$ 必存在正交矩阵 $Q$ 使 $Q^TAQ=\\mathrm{diag}(\\lambda_1,\\dots,\\lambda_n)$。",
   "matchText": "实对称正交对角化定理 实对称矩阵 $A$ 必存在正交矩阵 $Q$ 使 $Q^TAQ=\\mathrm{diag}(\\lambda_1,\\dots,\\lambda_n)$。 $A^T=A$ 实矩阵 流程五步：特征值 → 特征向量 → 重根内正交化 → 单位化 → 拼 $Q$。$Q$ 的列顺序与 $\\Lambda$ 对角元顺序对应，交换列顺序不改变正确性。",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-theorem-xd05-9a8cb7fc",
   "kind": "theorem",
   "name": "特征值基本恒等式",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "$$\\lambda_1+\\lambda_2+\\cdots+\\lambda_n=\\operatorname{tr}(A),\\qquad \\lambda_1\\lambda_2\\cdots\\lambda_n=|A|$$",
   "matchText": "特征值基本恒等式 $$\\lambda_1+\\lambda_2+\\cdots+\\lambda_n=\\operatorname{tr}(A),\\qquad \\lambda_1\\lambda_2\\cdots\\lambda_n=|A|$$ 推论：$A$ 可逆 $\\iff$ 特征值全不为零；$A$ 不可逆 $\\iff 0$ 是特征值。这两条恒等式是\"知部分求部分\"的核心（知道 $n-1$ 个特征值即可求最后一个）。",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-theorem-xd05-a1fb4f5a",
   "kind": "theorem",
   "name": "不同特征值的特征向量无关",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "属于**不同**特征值的特征向量线性无关；推广：$k$ 个不同特征值各取若干个线性无关特征向量，合在一起仍线性无关。",
   "matchText": "不同特征值的特征向量无关 属于**不同**特征值的特征向量线性无关；推广：$k$ 个不同特征值各取若干个线性无关特征向量，合在一起仍线性无关。 这是对角化充分条件（互异特征值）的理论根基，也是抽象证明中\"拼向量组\"的合法性来源。",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-theorem-xd05-b4819435",
   "kind": "theorem",
   "name": "可对角化充要条件",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "$n$ 阶矩阵 $A$ 可对角化 $\\iff$ $A$ 有 $n$ 个线性无关特征向量 $\\iff$ 对每个 $k_i$ 重特征值 $\\lambda_i$，有 $n-r(\\lambda_iE-A)=k_i$。",
   "matchText": "可对角化充要条件 $n$ 阶矩阵 $A$ 可对角化 $\\iff$ $A$ 有 $n$ 个线性无关特征向量 $\\iff$ 对每个 $k_i$ 重特征值 $\\lambda_i$，有 $n-r(\\lambda_iE-A)=k_i$。 几何重数 = 代数重数。判别流程：求特征值 → 对每个重特征值验证 $n-r(\\lambda E-A)=k$ → 全部通过才可对角化。",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-theorem-xd05-d377405e",
   "kind": "theorem",
   "name": "相似的性质",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "$A\\sim B\\Rightarrow$：① $|\\lambda E-A|=|\\lambda E-B|$；② $r(A)=r(B)$；③ $|A|=|B|$；④ $A^m\\sim B^m$；⑤ $A$ 可逆则 $A^{-1}\\sim B^{-1}$；⑥ $f(A)\\sim f(B)$。",
   "matchText": "相似的性质 $A\\sim B\\Rightarrow$：① $|\\lambda E-A|=|\\lambda E-B|$；② $r(A)=r(B)$；③ $|A|=|B|$；④ $A^m\\sim B^m$；⑤ $A$ 可逆则 $A^{-1}\\sim B^{-1}$；⑥ $f(A)\\sim f(B)$。 ①②③④ 常用于\"已知相似反求参数\"：设特征多项式相等（或迹、行列式相等）列方程。",
   "source": "data/lessons/xd05.js"
  },
  {
   "id": "k-theorem-xd06-40765193",
   "kind": "theorem",
   "name": "必要条件速判",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "$f$ 正定 $\\Rightarrow$ $a_{ii}>0$（主对角元全正）且 $|A|>0$。",
   "matchText": "必要条件速判 $f$ 正定 $\\Rightarrow$ $a_{ii}>0$（主对角元全正）且 $|A|>0$。 逆否用于快速排除：某主对角元 $\\le0$ 或 $|A|\\le0$ 则不正定。这常用于选择题秒杀。",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-theorem-xd06-5d2c1011",
   "kind": "theorem",
   "name": "惯性定理",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "实二次型经任意可逆线性变换化为标准形，正惯性指数 $p$、负惯性指数 $q$ 是不变量。",
   "matchText": "惯性定理 实二次型经任意可逆线性变换化为标准形，正惯性指数 $p$、负惯性指数 $q$ 是不变量。 两个实对称矩阵合同 $\\iff p,q$ 都相同。规范形：$y_1^2+\\cdots+y_p^2-y_{p+1}^2-\\cdots-y_{p+q}^2$。",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-theorem-xd06-7b2f11c0",
   "kind": "theorem",
   "name": "主轴定理（正交变换化标准形）",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "实对称矩阵 $A$ 存在正交矩阵 $Q$ 使 $Q^TAQ=\\mathrm{diag}(\\lambda_1,\\dots,\\lambda_n)$，从而 $f\\xrightarrow{x=Qy}\\sum\\lambda_iy_i^2$。",
   "matchText": "主轴定理（正交变换化标准形） 实对称矩阵 $A$ 存在正交矩阵 $Q$ 使 $Q^TAQ=\\mathrm{diag}(\\lambda_1,\\dots,\\lambda_n)$，从而 $f\\xrightarrow{x=Qy}\\sum\\lambda_iy_i^2$。 $A$ 实对称 标准形系数 = 特征值；正（负）惯性指数 = 正（负）特征值个数。这是可对角化理论的应用。",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-theorem-xd06-8a65a197",
   "kind": "theorem",
   "name": "合同与正定的传递性质",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "正定矩阵的逆、伴随矩阵仍正定；$A$ 正定、$B$ 正定则 $A+B$ 正定；$A$ 正定 $\\Rightarrow$ $|A|>0$、$\\operatorname{tr}A>0$、主对角元全正。",
   "matchText": "合同与正定的传递性质 正定矩阵的逆、伴随矩阵仍正定；$A$ 正定、$B$ 正定则 $A+B$ 正定；$A$ 正定 $\\Rightarrow$ $|A|>0$、$\\operatorname{tr}A>0$、主对角元全正。 $A$ 正定 $\\Rightarrow A^{-1}$ 正定：$A^{-1}=(A^{-1})^TA(A^{-1})$。伴随矩阵：$A^*=|A|A^{-1}$，$|A|>0$ 故也正定。",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-theorem-xd06-97e9485e",
   "kind": "theorem",
   "name": "正定判别定理",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "$n$ 阶实对称 $A$ 正定 $\\iff$ ① 各阶顺序主子式 $\\Delta_i>0$；② 特征值全正；③ $p=n$；④ $A=C^TC$（$C$ 可逆）；⑤ $A\\simeq E$；⑥ 对任意 $x\\ne0$，$x^TAx>0$（定义）。",
   "matchText": "正定判别定理 $n$ 阶实对称 $A$ 正定 $\\iff$ ① 各阶顺序主子式 $\\Delta_i>0$；② 特征值全正；③ $p=n$；④ $A=C^TC$（$C$ 可逆）；⑤ $A\\simeq E$；⑥ 对任意 $x\\ne0$，$x^TAx>0$（定义）。 $A$ 必须先是对称矩阵 最常用于计算的判别法是①；抽象证明题常用③④。注意\"实对称\"是前提，不对称谈不上正定。",
   "source": "data/lessons/xd06.js"
  },
  {
   "id": "k-method-gailv-34739293",
   "kind": "method",
   "name": "参数估计",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "#### 矩估计法",
   "matchText": "参数估计 #### 矩估计法\n\n使用替换思想，用样本距来估计总体距。\n\n- 写出总体$k$阶矩$\\mu_k=E(X^k)$，其中$\\mu$含有参数$\\theta$。\n\n- 写出样本$k$阶矩$A_k=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX^k$，$A_k$只与样本有关。\n\n- 令总体$k$阶矩=样本$k$阶矩，即$E(X^k)=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX^k$，就得到了$\\theta$的方程。\n\n例题：来自总体的$X$的简单随机样本$X_1,X_2,\\cdots,X_n$，总体$X$的概率分布为$X\\sim\\left(\\begin{array}{ccc}\n    -1 & 0 & 2 \\\\\n    2\\theta & \\theta & 1-3\\theta\n\\end{array}\\right)$，其中$0<\\theta<\\dfrac{1}{3}$，求参数$\\theta$的矩估计量。\n\n解：令$\\overline{X}=EX$，即$\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i=(-1)2\\theta+0\\theta+2(1-3\\theta)=2-8\\theta$。\n\n所以$\\hat{\\theta}=\\dfrac{2-\\overline{X}}{8}$。\n\n例题：来自总体的$X$的概率密度为$f(x)=\\lef",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gailv-49680aa0",
   "kind": "method",
   "name": "函数概念",
   "subject": "gailv",
   "lessons": [
    "gs01"
   ],
   "summary": "这里所说的分布函数都是不定式，需要利用分布函数性质来换算。",
   "matchText": "函数概念 这里所说的分布函数都是不定式，需要利用分布函数性质来换算。\n\n例题：随机变量$X$的概率密度函数$f(x)$满足$f(1+x)=f(1-x)$，且$\\int_1^2f(x)\\,\\textrm{d}x=0.3$，则求分布函数$F(0)$的值。\n\n解：已知$f(1+x)=f(1-x)$，所以$f(x)$关于$x=1$对称。所以$\\int_1^{+\\infty}f(x)\\,\\textrm{d}x=\\int_1^{-\\infty}f(x)\\,\\textrm{d}x=\\dfrac{1}{2}$。\n\n所以$\\int_1^2f(x)\\,\\textrm{d}x=\\int_0^1f(x)\\,\\textrm{d}x=0.3$。\n\n$F(0)=\\int_{-\\infty}^0f(x)\\,\\textrm{d}x=1-\\int_0^{+\\infty}f(x)\\,\\textrm{d}x=1-\\int_1^{+\\infty}f(x)\\,\\textrm{d}x-\\int_0^1f(x)\\,\\textrm{d}x=0.2$。 函数概念 例题：已知随机变量$X$的概率分布为：\n\n$X$ ｜ 1 ｜ 2 ｜ 3\n$P\\{X=k\\}$ ｜$\\theta^2$ ｜$2\\theta(1-\\theta)$ ｜$(1-\\theta)^2$\n\n且$P\\{X\\geqslant2\\}=\\dfrac{3}{4}$，求未知参数$\\theta$与$X$的分布函数$F(x)$。\n\n解：$\\because P\\{X\\geqslant2\\}=\\dfrac{3}{4}$，$\\therefore 2\\theta(1-\\theta)+(1-\\theta)^2=\\dfrac{3}{4}$，解得$\\theta=\\dfrac{1}{2}$，$-\\dfrac{1}{2}$舍。 函数概念 例题：已知随机变量$X$的概率密度为$\\left\\{\\begin{array}{ll}\n    Ax, & 1<x<2 \\\\\n    B, & 2\\leqslant x<3 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，且$P\\{1<X<2\\}=P\\{2<X<3\\}$，求常数$AB$，分布函数$F(x)$以及概率$P\\{2<X<4\\}$。\n\n解：由于归一性$\\int_{-\\infty}^{+\\infty}f(x)\\,\\textrm{d}x=1$，$\\therefore\\int_1^2Ax\\,\\textrm{d}x+\\int_2^2B\\,\\textrm{d}x=1$。\n\n$\\therefore\\dfrac{3}{2}A+B=1$。又$P\\{1<X<2\\}=P\\{2<X<3\\}$。\n\n$\\therefore\\int_1^2Ax\\,\\textrm{d}x=\\int_2^3B\\,\\textrm{d}x$，即$\\therefore\\int_1^2Ax\\,\\textrm{d}x=\\int_2^2B\\,\\textrm{d}x=\\dfrac{1}{2}$，$A=\\dfrac{1}{3}$，$B=\\dfrac{1}{2}$。\n\n$f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{3}x, & 1<x<2  \\\\\n    \\d",
   "source": "data/seed/repo-notes.js（kind=方法 × 3 条）"
  },
  {
   "id": "k-method-gailv-dd1f86d4",
   "kind": "method",
   "name": "一维随机变量及其分布",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "例题：随机变量$X$的分布函数和概率密度函数为$F(x)$，$f(x)$，求$-X$的分布函数和概率密度。",
   "matchText": "一维随机变量及其分布 例题：随机变量$X$的分布函数和概率密度函数为$F(x)$，$f(x)$，求$-X$的分布函数和概率密度。\n\n解：已知$F(x)=P\\{X\\leqslant x\\}$，则$F'(-x)=\\{-X\\leqslant x\\}$，即$F'(-x)=P\\{X\\geqslant-x\\}=1-P\\{X\\leqslant-x\\}=1-F(-x)$。\n\n对$F'(-x)$进行求导：$[1-F(-x)]'=f(-x)$。\n\n例题：随机变量$X$的概率密度为$f(x)$，求随机变量$2X+3$的概率密度函数。\n\n解：设$Y=2X+3$，所以$Y$的分布函数$F_Y(y)$为$F_Y(x)=P\\{Y\\leqslant x\\}=P\\{2X+3\\leqslant x\\}=P\\left\\{X\\leqslant\\dfrac{x-3}{2}\\right\\}=\\int_{-\\infty}^{\\frac{t-3}{2}}f(x)\\,\\textrm{d}x$。\n\n所以其概率密度为$f_Y(x)=(\\int_{-\\infty}^{\\frac{x-3}{2}}f(x)\\,\\textrm{d}x)'=\\dfrac{1}{2}f\\left(\\dfrac{x-3}{2}\\right)$。",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-0d95d7b0",
   "kind": "method",
   "name": "常数项级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "可以直接通过计算反常积分判断收敛或发散。但是只有少数反常积分能直接计算出来。比较判敛就是不计算反常积分的原函数，而是通过与其他已知敛散性的积分进行对比来判断积分的敛散性。",
   "matchText": "常数项级数 可以直接通过计算反常积分判断收敛或发散。但是只有少数反常积分能直接计算出来。比较判敛就是不计算反常积分的原函数，而是通过与其他已知敛散性的积分进行对比来判断积分的敛散性。\n\n#### 无穷区间\n\n#### 无界函数",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-13e4550c",
   "kind": "method",
   "name": "空间解析几何",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "\\leavevmode",
   "matchText": "空间解析几何 \\leavevmode\n\n若二重积分部分$\\iint\\limits_{D_{xy}}\\textrm{d}\\sigma$适用于极坐标系（即与圆相关），使用极坐标系表示，令$x=r\\cos\\theta$，$y=r\\sin\\theta$，便有$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z=\\iiint\\limits_\\Omega f(r\\cos\\theta,r\\sin\\theta,z)r\\,$\n$\\textrm{d}r\\textrm{d}\\theta\\textrm{d}z$。这就是柱面坐标系下三重积分的计算。\n\n适用场合：被积函数含有$x^2+y^2$，积分区域为圆或部分圆。\n\n即一个定积分加上一个极坐标系下的二重积分。\n\n例题：计算$\\iiint\\limits_\\Omega(x^2+y^2)\\,\\textrm{d}v$，其中$\\Omega$是$\\left\\{\\begin{array}{ll}\n    y^2=2z \\\\\n    x=0\n\\end{array}\\right.$绕$z$轴旋转一周形成的曲面与平面$z=8$所围成的区域。\n\n解：已知平面曲线绕$z$轴旋转，首先求这个旋转曲面。\n\n首先令$P_1(x_1,y_1,z_1)$在该曲线上，即得到两个方程：$y_1^2=2z_1$，$x_1=0$。\n\n",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-17c81be0",
   "kind": "method",
   "name": "中值定理",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "1. 涉及 $f(x)$ 的应用",
   "matchText": "中值定理 1. 涉及 $f(x)$ 的应用\n\n2. 罗尔定理的应用\n  $F(a) = F(b) \\Rightarrow F'(\\xi) = 0$\n    - 构造辅助函数 $F(x)$\n        - 求导公式 $(u \\cdot v)' = u'v+uv'$ 逆用\n            - 见 $F'(\\xi)=f'(\\xi)\\cdot \\xi+f(\\xi)=0$，构造 $F(x)=f(x)x$\n            - 见 $F'(\\xi)=[f'(\\xi)+f(\\xi)]e^{\\xi}=0$，构造 $F(x)=f(x) e^x$\n            - 见 $F'(\\xi)=[f'(\\xi)+f(\\xi) \\varphi'(\\xi)] e^{\\varphi(\\xi)}=0$，构造 $F(x)=f(x) e^{\\varphi(x)}$\n            - 见  $F'(\\xi)=f''(x)+g(x)f'(x)=0$,构造 $F(x)=f'(x) e^{\\int g(x)\\text{d}x}$\n            - 见 $F'(\\xi)=f(x)+g(x) \\int_0^x f(t)\\text{d}t =0$，构造 $F(x)=\\int_0^x f(t)\\text{d}t \\cdot e^{\\int g(x) \\text{d}x}$\n            - 中值定理 微分若是出单独的计算很可能是物理应用问题，如计算速度增量、面积增量等，但是对于数一而言单独考的概率不大。\n\n微分一般都是微分不等式的形式进行出题，即含有微分的不等式证明。",
   "source": "data/seed/repo-notes.js（kind=方法 × 2 条）"
  },
  {
   "id": "k-method-gaoshu-1c7d8dbc",
   "kind": "method",
   "name": "二重积分",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "曲面 $z=z(x,y)$，取上侧（法向量 $z$ 分量为正）：",
   "matchText": "二重积分 曲面 $z=z(x,y)$，取上侧（法向量 $z$ 分量为正）：\n\n$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy = \\iint_{D_{xy}} [-P z_x - Q z_y + R]\\,dxdy\n$$\n\n**转换投影法口诀：一投、二代、三定号**\n\n常见方向判断：\n- 上侧 / 下侧 → $z$ 分量正/负\n- 外侧 / 内侧 → 闭曲面的外法向/内法向 二重积分 二重积分若是累次积分形式出现，则计算可以使用上面两种方法简便运算。 二重积分 #### 体积\n\n#### 形心公式\n\n直角坐标系和极坐标系的形心公式都是一样的，使用极坐标系可以转换。\n\n例题：求曲线$ay=x^2$与$x+y=2a$所围平面区域$D$的形心坐标。\n\n解：根据表达式可知有两个交点$(-2a,4a)$、$(a,a)$，形心公式：\n\n$\\overline{x}=\\dfrac{\\iint\\limits_Dx\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_{-2a}^ax\\,\\textrm{d}x\\int_{\\frac{x^2}{a}}^{-x+2a}\\textrm{d}y}{\\int_{-2a}^a\\,\\textrm{d}x\\int_{\\frac{x^2}{a}}^{-x+2a}\\textrm{d}y}=\\dfrac{\\int_{-2a}^a(-\\dfrac{x^3}{a}-x^2+2ax)\\textrm{d}x}{\\int_{-2a}^a(-\\dfrac{x^2}{a}-x+2a)\\textrm{d}x}=-\\dfrac{1}{2}a$\n\n$\\overline{y}=\\dfrac{\\iint\\limits_Dy\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_{-2a}^a\\,\\textrm{ 二重积分 按积分区域与极点位置关系的不同，将二重积分计算分为三种情况：\n\n根据$\\theta$按角度切割区间，然后从极点开始按$\\textrm{d}r$切割，变成一个个类似矩形的图形。图形一边为切割半径的改变量$\\textrm{d}r$，另一条边为圆弧，等于半径乘改变角度$r\\textrm{d}\\theta$，所以最后$\\textrm{d}\\sigma=r\\textrm{d}r\\textrm{d}\\theta$。\n\n基本上都是先积$r$后积$\\theta$。\n\n从射线刚开始接触区域$D$的射线记为$\\theta=\\alpha$，要离开区域$D$的射线记为$\\theta=\\beta$，中间移动的射线为$\\theta=\\theta$。$\\theta=\\alpha$与$\\theta=\\beta$与$D$相交于两点，两点内靠近极点的$D$的边为内曲线，远离极点的边为外曲线。$\\theta=\\theta$与内曲线交于$r=r_1(\\theta)$，与外曲线交于$r=r_2(\\theta)$。\n\n- 极点$O$在区域$D$外部：$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=\\int_\\alpha^\\beta\\textrm{d}\\theta\\int_{r_1(\\theta)}^{r_2(\\theta)}f(r\\cos\\theta,r\\sin\\theta)r\\,\\textr 二重积分 积分次序即区域类型选择的问题，目的是为了简化计算，使得积分的函数更简单。\n\n从另一方面，也很可能是积分函数无法按此次序进行积分，所以需要更换积分顺序。\n\n存在许多有原函数但求不出初等函数形式的原函数。如$\\dfrac{\\sin x}{x}$、$\\dfrac{\\cos x}{x}$、$\\dfrac{\\tan x}{x}$、$\\dfrac{e^x}{x}$、$\\sin x^2$、$\\cos x^2$、$\\tan x^2$、$e^{ax^2+bx+c}$、$\\dfrac{1}{\\ln x}$等。\n\n例题：计算$\\displaystyle{\\int_1^2\\textrm{d}x\\int_{\\sqrt{x}}^x\\sin\\dfrac{\\pi x}{2y}\\textrm{d}y+\\int_2^4\\textrm{d}x\\int_{\\sqrt{x}}^2\\sin\\dfrac{\\pi x}{2y}\\textrm{d}y}$。\n\n解：首先可以看出积分函数都是一样的，只是积分区域不同所以分开了，可见该函数的积分区域较复杂。\n\n积分函数为$\\sin\\dfrac{\\pi x}{2y}$，若对$y$进行积分，则可以类比求$\\displaystyle{\\int\\sin\\dfrac{1}{x}\\,\\textrm{d}x}$，这个是积分积不出来的。所以必须更换积分顺序。先积$x$。\n\n首先根据被积函数上下限得到积分 二重积分 #### 体积\n\n#### 形心公式\n\n对于直角坐标系和参数方程：\n\n$\\overline{x}=\\dfrac{\\iint\\limits_Dx\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int x(t)y(t)x'(t)\\,\\textrm{d}t}{\\int y(t)x'(t)\\,\\textrm{d}t}$，$\\overline{y}=\\dfrac{\\iint\\limits_Dy\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int y(t)^tx'(t)\\,\\textrm{d}t}{\\int y(t)x'(t)\\,\\textrm{d}t}$。 二重积分 #### 二重积分法\n\n还是一投二代三计算。\n\n- 对$\\Sigma$作图。\n\n- 查看图形的奇偶性和对称性，如果对称则消去对应$x$、$y$、$z$的奇数次项。如果图形关于$xOy$对称，则出现$z$的奇数次项就去掉；同理关于$yOz$存在$x$的奇数次项就去掉，$xOz$存在$y$的奇数次项就去掉。\n\n- 查看是否可以将题目中的常数项式子对$I$化简。\n\n- 投影，如将$\\Sigma$投影到$xOy$平面，$z=\\psi(x,y)$，$(x,y)\\in D_{xy}$。\n\n- 求$\\dfrac{\\partial z}{\\partial x}$、$\\dfrac{\\partial z}{\\partial y}$，$\\textrm{d}s=\\sqrt{1+\\left(\\dfrac{\\partial z}{\\partial x}\\right)^2+\\left(\\dfrac{\\partial z}{\\partial y}\\right)^2}\\textrm{d}\\sigma$。\n\n- 代入$\\displaystyle{\\iint\\limits_\\Sigma f(x,y,z)\\,\\textrm{d}s=\\iint\\limits_{D_{xy}}f[x,y,\\psi(x,y)]\\sqrt{1+\\left(\\dfrac{\\partial z}{\\partial x}\\right)^2+\\left",
   "source": "data/seed/repo-notes.js（kind=方法 × 7 条）"
  },
  {
   "id": "k-method-gaoshu-2b059a1f",
   "kind": "method",
   "name": "曲线积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "| 曲线形式 | 弧长微元 | |---------|----------| | $y=y(x)$ | $ds=\\sqrt{1+[y'(x)]^2}\\,dx$ | | $x=x(y)$ | $ds=\\sqrt{1+[x'(y)]^2}\\,dy$ | | $x=x(t),\\ y=y(t)$ |…",
   "matchText": "曲线积分 | 曲线形式 | 弧长微元 |\n|---------|----------|\n| $y=y(x)$ | $ds=\\sqrt{1+[y'(x)]^2}\\,dx$ |\n| $x=x(y)$ | $ds=\\sqrt{1+[x'(y)]^2}\\,dy$ |\n| $x=x(t),\\ y=y(t)$ | $ds=\\sqrt{x'^2(t)+y'^2(t)}\\,dt$ |\n| 极坐标 $r=r(\\theta)$ | $ds=\\sqrt{r^2+[r'(\\theta)]^2}\\,d\\theta$ |\n| 空间参数式 | $ds=\\sqrt{x'^2(t)+y'^2(t)+z'^2(t)}\\,dt$ |\n\n**核心：** 第一型曲线积分统一化为一元定积分。 曲线积分 - **记号：** $\\displaystyle\\int_L P(x,y)\\,dx + Q(x,y)\\,dy$\n- **物理意义：** 变力沿曲线做的**功**\n- **计算核心：** 参数化法 $x=x(t), y=y(t)$，代入化为定积分\n- **⚠️ 与 $L$ 方向有关！** 反向取负号 曲线积分 是第二型曲线积分的应用。使用的是斯托克斯公式。",
   "source": "data/seed/repo-notes.js（kind=方法 × 3 条）"
  },
  {
   "id": "k-method-gaoshu-3642b38d",
   "kind": "method",
   "name": "函数图像与初等基础",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "对于极坐标系转换到直角坐标系：$x=r\\cos\\theta$，$y=r\\sin\\theta$。",
   "matchText": "函数图像与初等基础 对于极坐标系转换到直角坐标系：$x=r\\cos\\theta$，$y=r\\sin\\theta$。\n\n例题：设区域$D=\\{(x,y)|x^2+y^2\\leqslant R^2\\}$，计算$\\displaystyle{\\iint\\limits_D\\left(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}\\right)\\textrm{d}x\\textrm{d}y}$。\n\n解：互换积分变量：$I=\\displaystyle{\\iint\\limits_D\\left(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}\\right)\\textrm{d}x\\textrm{d}y}=\\displaystyle{\\iint\\limits_D\\left(\\dfrac{y^2}{a^2}+\\dfrac{x^2}{b^2}\\right)\\textrm{d}x\\textrm{d}y}$。\n\n$\\therefore2I=\\left(\\dfrac{1}{a^2}+\\dfrac{1}{b^2}\\right)\\displaystyle{\\iint\\limits_D(x^2+y^2)\\textrm{d}x\\textrm{d}y}$，$\\therefore I=\\dfrac{1}{2}\\left(\\dfrac{1}{a^2}+\\dfrac{1}{b^2}\\right)\\displays",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-4224e876",
   "kind": "method",
   "name": "函数概念",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "| 方法 | 适用场景 | 公式要点 | |------|---------|---------| | **直角坐标法** | 一般空间区域 | 先一后二、先二后一 | | **柱面坐标法** | 投影为圆、圆环、扇形 |…",
   "matchText": "函数概念 | 方法 | 适用场景 | 公式要点 |\n|------|---------|---------|\n| **直角坐标法** | 一般空间区域 | 先一后二、先二后一 |\n| **柱面坐标法** | 投影为圆、圆环、扇形 | $x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z,\\ dV=r\\,dr\\,d\\theta\\,dz$ |\n| **球面坐标法** | 球、球壳、圆锥区域 | $x=\\rho\\sin\\varphi\\cos\\theta,\\ y=\\rho\\sin\\varphi\\sin\\theta,\\ z=\\rho\\cos\\varphi$ |\n| **换元法** | 区域或函数经变量代换后变简单 | 乘雅可比绝对值 |\n\n球面坐标体积元：\n\n$$\ndV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta\n$$\n\n**选法口诀：** 直角坐标看截面，柱面坐标看投影圆，球面坐标看球与锥。",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-443fa9bb",
   "kind": "method",
   "name": "曲面积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "若曲面为 $z=z(x,y)$，投影区域为 $D_{xy}$，则",
   "matchText": "曲面积分 若曲面为 $z=z(x,y)$，投影区域为 $D_{xy}$，则\n\n$$\ndS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy\n$$\n\n因此\n\n$$\n\\iint_\\Sigma f(x,y,z)\\,dS\n=\\iint_{D_{xy}} f(x,y,z(x,y))\\sqrt{1+z_x^2+z_y^2}\\,dxdy\n$$\n\n类似地：\n\n| 曲面形式 | 面积微元 |\n|---------|----------|\n| $z=z(x,y)$ | $dS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy$ |\n| $x=x(y,z)$ | $dS=\\sqrt{1+x_y^2+x_z^2}\\,dydz$ |\n| $y=y(z,x)$ | $dS=\\sqrt{1+y_z^2+y_x^2}\\,dzdx$ |\n\n**核心：** 第一型曲面积分化为二重积分。\n\n--- 曲面积分 - **记号：** $\\displaystyle\\iint_\\Sigma P\\,dy\\,dz + Q\\,dz\\,dx + R\\,dx\\,dy$\n- **物理意义：** **通量（流量）**——流体穿过曲面的流量\n- **⚠️ 与曲面侧（方向）有关！** 取外法向为正\n- **计算核心：** 分项投影法（分别投影到 $yOz$, $zOx$, $xOy$ 面）\n- 张宇强调：**一投、二代、三定号** 曲面积分 包括二重积分、三重积分、一型曲线积分、一型曲面积分四个部分。",
   "source": "data/seed/repo-notes.js（kind=方法 × 3 条）"
  },
  {
   "id": "k-method-gaoshu-52e60eb1",
   "kind": "method",
   "name": "高斯公式",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "检查对称性/奇偶性 $\\to$ 代入曲线/曲面方程化简 $\\to$",
   "matchText": "高斯公式 检查对称性/奇偶性 $\\to$ 代入曲线/曲面方程化简 $\\to$\n\n- **三重积分：** 选坐标系（直角/柱/球）\n- **曲线积分：** 格林公式（可补线）$\\to$ 参数化法 $\\to$ 凑微分\n- **曲面积分：** 高斯公式（可补面）$\\to$ 投影法 $\\to$ 分项计算\n\n--- 高斯公式 #### 二重积分法\n\n曲面积分的二重积分法较复杂。将积分化为不同面的投影。为什么会带一个正负号？因为前面的$\\textrm{d}x\\textrm{d}y\\textrm{d}z$表示投影，其值可正可负，而后面的$\\textrm{d}x\\textrm{d}y\\textrm{d}z$表示面积，必然为正。\n\n-$\\oiint_\\Sigma P(x,y,z)\\,\\textrm{d}y\\textrm{d}z$：用$yz$表示$x$：$\\Sigma:x=\\phi(y,z)$，$(y,z)\\in D_{yz}$，\n$\\iint_\\Sigma P(x,y,z)\\,\\textrm{d}y\\textrm{d}z=\\pm\\iint_{D_{yz}}P[\\phi(y,z),y,z]\\textrm{d}y\\textrm{d}z$。前正后负。\n\n-$\\oiint_\\Sigma Q(x,y,z)\\,\\textrm{d}z\\textrm{d}x$：用$xz$表示$y$：$\\Sigma:y=\\phi(z,x)$，$(z,x)\\in D_{zx}$，\n$\\iint_\\Sigma Q(x,y,z)\\,\\textrm{d}z\\textrm{d}x=\\pm\\iint_{D_{zx}}Q[x,\\phi(z,x),z]\\textrm{d}z\\textrm{d}x$。右正左负。\n\n-$\\oiint_\\Sigma R(x,y,z)",
   "source": "data/seed/repo-notes.js（kind=方法 × 2 条）"
  },
  {
   "id": "k-method-gaoshu-89325102",
   "kind": "method",
   "name": "一元微分几何应用",
   "subject": "gaoshu",
   "lessons": [
    "gs05"
   ],
   "summary": "凹凸性 $\\frac{f(x_1)+f(x_2)}{2} \\gt f(\\frac{x_1+x_2}{2}) \\iff$ 凹 $\\frac{f(x_1)+f(x_2)}{2} \\lt f(\\frac{x_1+x_2}{2}) \\iff$ 凸 判别方法 设 $f(x)$ 在 $D$ 上二阶可导 若…",
   "matchText": "一元微分几何应用 - 凹凸性\n  $\\frac{f(x_1)+f(x_2)}{2} \\gt f(\\frac{x_1+x_2}{2}) \\iff$ 凹\n  $\\frac{f(x_1)+f(x_2)}{2} \\lt f(\\frac{x_1+x_2}{2}) \\iff$ 凸\n    - 判别方法\n      设 $f(x)$ 在 $D$ 上二阶可导\n        - 若 $f''(x) \\gt 0 ,\\, \\forall x \\in D$，则 $f(x)$ 凹\n        - 若 $f''(x) \\lt 0 ,\\, \\forall x \\in D$，则 $f(x)$ 凸\n- 拐点\n  连续曲线凹凸弧的连接点（分界点）\n    - 判别方法\n        1. 设 $f(x)$ 在 $D$ 上二阶可导\n          若 $f‘’(x)$ 在 $x_0$ 点的左右邻域内变号，则 $(x_0,f(x_0))$是拐点\n        2. 设 $f(x)$ 在 $D$ 上三阶可导\n          若 $f''(x_0) = 0$，$f'''(x_0) \\ne 0 $，则 $(x_0,f(x_0))$是拐点\n\n- 渐近线\n    - 铅锤渐近线\n      若 $\\lim_{x \\to x_0^-} f(x) = \\infty$ 或$\\lim_{x \\to x_0^+} f(x) = \\infty 一元微分几何应用 主要是曲率的应用。\n\n曲率公式：$k=\\left\\lvert\\dfrac{\\textrm{d}\\alpha}{\\textrm{d}s}\\right\\rvert=\\dfrac{\\vert y''\\vert}{(1+y'^2)^{\\frac{3}{2}}}$。曲率半径：$r=\\dfrac{1}{k}$。\n\n#### 一般计算\n\n例题：求$y=\\sin x$在$x=\\dfrac{\\pi}{4}$对应的曲率\n\n解：$y'=\\cos x$，$y'(\\dfrac{\\pi}{4})=\\dfrac{\\sqrt{2}}{2}$。\n\n$y''=-\\sin x$，$y''(\\dfrac{\\pi}{4})=-\\dfrac{\\sqrt{2}}{2}$。\n\n$\\therefore k=\\dfrac{\\dfrac{\\sqrt{2}}{2}}{\\dfrac{3}{2}\\cdot\\sqrt{\\dfrac{3}{2}}}=\\dfrac{2\\sqrt{3}}{9}$。\n\n所以$y=\\sin x$在$x=\\dfrac{\\pi}{4}$的点$(\\dfrac{\\pi}{4},\\dfrac{\\sqrt{2}}{2})$的曲率为$\\dfrac{2\\sqrt{3}}{9}$。\n\n#### 最值\n\n例题：求$y=x^2-4x+11$曲率最大值所在的点。\n\n解：简单得$y'=2x-4$，$y''=2$。\n\n曲率为$\\dfrac{2}{ 一元微分几何应用 - 确定函数定义域，并考察其奇偶性与周期性。\n\n- 求出一阶导数与二阶导数，并计算导数为0与不存在的点。\n\n- 根据导数判断增减性与凹凸性，并求出极值与拐点。\n\n- 求出渐近线。\n\n- 确定另外的特殊点。 一元微分几何应用 - 若$\\lim\\limits_{x\\to\\infty}f(x)=A$，那么$y=A$就是水平渐近线。\n\n- 若$\\lim\\limits_{x\\to x_0}f(x)=\\infty$，那么$x=x_0$就是垂直渐近线。\n\n- 若$\\lim\\limits_{x\\to\\infty}\\dfrac{f(x)}{x}=a,b=\\lim\\limits_{x\\to\\infty}(f(x)-ax)$，那么$y=ax+b$就是斜渐近线。\n\n考的比较多的是斜渐进性，计算较复杂，如果能写成$y=f(x)=ax+b+o(x)$，$o(x)$为$x\\to\\infty$的高阶无穷小，则能快速得到斜渐进线。",
   "source": "data/seed/repo-notes.js（kind=方法 × 4 条）"
  },
  {
   "id": "k-method-gaoshu-95a407b4",
   "kind": "method",
   "name": "函数极限与连续",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "1. **化简先行**（等价无穷小替换、恒等变形、消去更高阶无穷小） $Term + Term \\iff Term \\cdot Term$ 通过构造**项累乘**、创造分母**通分**，将式子最终化简为 $\\frac{A}{B}$ 类型 **设置简单因式为分母，可使求导结果简单**（简单：$x^{\\alpha}…",
   "matchText": "函数极限与连续 1. **化简先行**（等价无穷小替换、恒等变形、消去更高阶无穷小）\n  $Term + Term \\iff Term \\cdot Term$\n  通过构造**项累乘**、创造分母**通分**，将式子最终化简为 $\\frac{A}{B}$ 类型\n  **设置简单因式为分母，可使求导结果简单**（简单：$x^{\\alpha}$、$e^{\\beta x}$；复杂：$\\ln{x}$、$\\arcsin{x}$、$\\arctan{x}$）\n  同类间比较，保留主要因素，消去更高阶无穷小\n2. **判别类型**（$\\frac{0}{0}$、$\\frac{\\infty}{\\infty}$、$\\infty \\cdot 0$、$\\infty-\\infty$、$\\infty^0$、$0^0$、$1^{\\infty}$）\n  $u^v = e^{v \\ln{u}}$\n3. **使用工具**（换元法、洛必达法则、**泰勒展开相消**）\n  泰勒展开相消时，注意保持分式**上下同阶**\n4. **注意条件**（总结错误点）\n  利用题目**已给数值条件**或关系条件 函数极限与连续 课本上极限计算可以使用的主要计算方式： 函数极限与连续 极限相关计算形式主要分为下面六种：\n\n- 未定式：直接根据式子计算极限值。\n\n- 极限转换：根据已知的极限值计算目标极限值。\n\n- 求参数：已知式子的极限值，计算式子中未知的参数。\n\n- 极限存在性：根据式子以及极限存在性计算极限或参数。\n\n- 极限唯一性：式子包含参数，根据唯一性计算两侧极限并求出参数与极限值。\n\n- 函数连续性：根据连续性与附加条件计算极限值或参数。\n\n- 迭代式数列：根据数列迭代式计算极限值。\n\n- 变限积分：根据变限积分计算极限值。 函数极限与连续 不用计算积分值，直接通过函数的极限来代替积分。\n\n#### 判断方法\n\n- 等价无穷小：对于无穷小，高阶吸收低阶。\n\n- 对于每个瑕点或无限区间都要对区域进行划分。\n\n- 对于无限反常积分$\\int_a^{+\\infty}f(x)\\,\\textrm{d}x$，$f(x)$在$[a,+\\infty)$上连续非负，对于常数$\\rho$：若存在$\\rho>1$，使得$\\lim\\limits_{x\\to+\\infty}x^\\rho f(x)=c<+\\infty$，则积分收敛。若只存在$\\rho=1$，使得$\\lim\\limits_{x\\to+\\infty}xf(x)=c>0$或为$-\\infty$，则积分发散。\n\n- 对于瑕积分$\\int_a^bf(x)\\,\\textrm{d}x$，其中$a$为瑕点，$f(x)$在$[a,b]$上连续非负，对于常数$\\rho$：若存在$0<\\rho<1$，使得$\\lim\\limits_{x\\to a^+}(x-a)^\\rho f(x)=c$存在，则积分收敛。若只存在$\\rho=1$，使得$\\lim\\limits_{x\\to a^+}(x-a)f(x)=c>0$或为$+\\infty$，则积分发散。\n\n#### 幂函数\n\n对判断方法进行特殊化：\n\n- 无限反常积分$\\displaystyle{\\int_a^{+\\infty}\\dfrac{1}{x^\\rho}\\",
   "source": "data/seed/repo-notes.js（kind=方法 × 4 条）"
  },
  {
   "id": "k-method-gaoshu-999bd780",
   "kind": "method",
   "name": "数列极限",
   "subject": "gaoshu",
   "lessons": [
    "gs02"
   ],
   "summary": "1. 若 $x_n$ 易于连续化，转换为函数极限计算 2. 若 $x_n$ 不易于连续化，用 “夹逼准则”（或定积分定义） 3. 若 $\\{x_n\\}$ 由递推式 $x_n = f(x_{n-1})$ 给出，用“单调有界准则” > **单调有界准则**：若 $x_n$ **单调**，且**有界**，则…",
   "matchText": "数列极限 1. 若 $x_n$ 易于连续化，转换为函数极限计算\n2. 若 $x_n$ 不易于连续化，用 “夹逼准则”（或定积分定义）\n3. 若 $\\{x_n\\}$ 由递推式 $x_n = f(x_{n-1})$ 给出，用“单调有界准则”\n> **单调有界准则**：若 $x_n$ **单调**，且**有界**，则 $\\lim_{n \\to \\infty}$ 存在，$x_n$ 收敛\n> - 判断单调：$x_{n+1}-x_n \\overset{?}{=} 0 $ 或 $\\frac{x_{n+1}}{x_n} \\overset{?}{=} 1$\n>   常用**数学归纳法**\n> - 求上下界：**放缩法**",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-b3ffd6eb",
   "kind": "method",
   "name": "三重积分",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "三重积分的核心思想：**化为一个二重积分 + 一个定积分**",
   "matchText": "三重积分 三重积分的核心思想：**化为一个二重积分 + 一个定积分**\n\n#### 直角坐标法\n\n**先一后二法（投影法）：**\n\n$$\n\\Omega = \\{(x,y,z)\\mid (x,y)\\in D,\\ z_1(x,y)\\le z\\le z_2(x,y)\\}\n$$\n\n$$\n\\iiint_\\Omega f\\,dV = \\iint_D \\left[\\int_{z_1(x,y)}^{z_2(x,y)} f(x,y,z)\\,dz\\right] dxdy\n$$\n\n适合\"上、下曲面\"容易写出的区域。\n\n**先二后一法（截面法）：**\n\n$$\n\\iiint_\\Omega f\\,dV = \\int_a^b \\iint_{D_z} f(x,y,z)\\,dxdy\\,dz\n$$\n\n适合截面形状简单的区域。\n\n#### 柱面坐标法\n\n$$\nx = r\\cos\\theta,\\quad y = r\\sin\\theta,\\quad z = z\n$$\n\n$$\ndV = r\\,dr\\,d\\theta\\,dz\n$$\n\n适合：\n- 投影到 $xOy$ 面后是圆、圆环、扇形\n- 区域由圆柱面、旋转曲面确定\n- 被积函数含 $x^2+y^2$\n\n#### 球面坐标法\n\n$$\nx = \\rho\\sin\\varphi\\cos\\theta,\\quad\ny = \\rho\\sin\\varphi\\sin\\theta,\\quad\nz = \\ 三重积分 基本思想还是三重积分化为一重积分。",
   "source": "data/seed/repo-notes.js（kind=方法 × 2 条）"
  },
  {
   "id": "k-method-gaoshu-baedfa75",
   "kind": "method",
   "name": "定积分几何应用",
   "subject": "gaoshu",
   "lessons": [
    "gs10"
   ],
   "summary": "$y=y_1(x)$、$y=y_2(x)$、$x=a$、$x=b$（$a \\lt b$）所围成的平面图形",
   "matchText": "定积分几何应用 - $y=y_1(x)$、$y=y_2(x)$、$x=a$、$x=b$（$a \\lt b$）所围成的平面图形\n\n  $\\int_a^b |y_2(x)-y_1(x)| \\text{d}x$ 定积分几何应用 切片、铺开\n\n- $y=f(x)$ 与 $x=a$、$x=b$（$a \\lt b$）及x轴所围图形绕x轴旋转一周所得旋转体的体积\n\n  $V_x = \\int_a^b \\pi y^2(x) \\text{d}x$\n\n- $y=f(x)$ 与 $x=a$、$x=b$（$a \\lt b$）及x轴所围图形绕y轴旋转一周所得旋转体的体积\n\n  $V_y = \\int_a^b 2\\pi x |f(x)| \\text{d}x$ 定积分几何应用 - 求弧长\n- 求线质量\n- 求质心\n- 求转动惯量\n\n--- 定积分几何应用 重点是形心公式和弧长公式。 定积分几何应用 \\leavevmode\n\n对于一条曲线$y=f(x)$以及$x=a$，$x=b$（$a<b$）所围成的平面绕$x$轴进行旋转，可以看作从$x$轴沿$y$轴水平切割旋转体，就得到了以$x$轴为中心的一个圆柱，底边半径为$f(x)$，高度为$\\textrm{d}x$，所以$\\textrm{d}V_x=\\pi f^2(x)\\,\\textrm{d}x$，所以$V_x=\\pi\\int_a^bf^2(x)\\,\\textrm{d}x$（如果用$y(x)$表达，就是$V_x=\\pi\\int_c^d\\varphi^2(y)\\,\\textrm{d}y$）。\n\n对于一条曲线$y=f(x)$以及$x=a$，$x=b$（$a<b$）所围成的平面绕$y$轴进行旋转，可以看作从旋转中心向外围按同样的半径切割环形体，这个环形体从里到外半径与体积都在不断变大，然后将这个环形体展开为长方体来计算体积，其中长度为原来圆周$2\\pi x$，宽度为$f(x)$，高度为$\\textrm{d}x$，所以$\\textrm{d}V_y=2\\pi xf(x)\\,\\textrm{d}x$，所以$V_y=2\\pi\\int_a^bx\\vert f(x)\\vert\\,\\textrm{d}x$。（柱壳法）（同理也可以使用$y(x)$来表达）\n\n对于两条曲线$y=f_1(x)\\geqslant0$，$y=f_2(x)\\geqslant0$以及$ 定积分几何应用 圆的周长可以用内接正多边形的周长当边数趋于无穷大的极限来表示，同理弧长也可以同样表示。\n\n在弧长中插入$n$个点$M_1,M_2,\\cdots,M_{i-1},M_i,\\cdots,M_n$。\n\n$S_n=\\sum\\limits_{i=1}^n\\Vert\\overline{M_{i-1}M_{i}}\\Vert$，$S=\\lim\\limits_{\\delta\\to 0}S_n=\\lim\\limits_{\\delta\\to 0}\\sum\\limits_{i=1}^n\\Vert\\overline{M_{i-1}M_{i}}\\Vert$。\n\n对于弧长采用弧微分的方式进行计算：$S=\\int_a^b\\sqrt{1+y'^2}\\,\\textrm{d}x$。\n\n如果是参数方程，则$S=\\int_\\alpha^\\beta\\sqrt{x'^2+y'^2}\\,\\textrm{d}t$。\n\n如果是极坐标方程，则$S=\\int_\\alpha^\\beta\\sqrt{\\rho^2+\\rho'^2}\\,\\textrm{d}\\theta$。 定积分几何应用 #### 变力沿直线做功\n\n设方向沿$x$轴正向的力函数为$F(x)$（$a\\leqslant x\\leqslant b$），则物体沿$x$轴从点$a$移动到点$b$时，变力$F(x)$所做的功为$W=\\int_a^bF(x)\\,\\textrm{d}x$，功的元素$\\textrm{d}W=F(x)\\,\\textrm{d}x$。\n\n#### 抽水做功\n\n将容器中的水全部抽出所做的功为$W=\\rho g\\int_a^bxA(x)\\,\\textrm{d}x$，其中$\\rho$为水的密度，$g$为重力加速度。\n\n功的元素$\\textrm{d}W=\\rho gxA(x)\\,\\textrm{d}x$为位于$x$处厚度为$\\textrm{d}x$，水平截面面积为$A(x)$的一层水被抽出（路径为$x$）所做的功。\n\n#### 水压力\n\n垂直浸没于水中的平板$ABCD$的一侧收到的水压力为$P=\\rho g\\int_a^bx[f(x)-h(x)]\\,\\textrm{d}x$，其中$\\rho$为水的密度，$g$为重力加速度。\n\n压力元素$\\textrm{d}P=\\rho gx[f(x)-h(x)]\\,\\textrm{d}x$是受到的压力，$x$表示水深，$f(x)-h(x)$是矩形的宽度，$\\textrm{d}x$是矩形的高度，总高度为$\\vert a-b\\vert$。",
   "source": "data/seed/repo-notes.js（kind=方法 × 7 条）"
  },
  {
   "id": "k-method-gaoshu-d1ebe7c7",
   "kind": "method",
   "name": "微分方程",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "使用换元法$x=e^t$将欧拉方程换为二阶常系数非齐次线性方程。",
   "matchText": "微分方程 使用换元法$x=e^t$将欧拉方程换为二阶常系数非齐次线性方程。\n\n当$x>0$时，令$x=e^t$，则$t=\\ln x$，$\\dfrac{\\textrm{d}t}{\\textrm{d}x}=\\dfrac{1}{x}$，$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{\\textrm{d}y}{\\textrm{d}t}\\dfrac{\\textrm{d}t}{\\textrm{d}x}=\\dfrac{1}{x}\\dfrac{\\textrm{d}y}{\\textrm{d}t}$，$\\dfrac{\\textrm{d}^2y}{\\textrm{d}x^2}=\\dfrac{\\textrm{d}}{\\textrm{d}x}\\left(\\dfrac{1}{x}\\dfrac{\\textrm{d}y}{\\textrm{d}t}\\right)=-\\dfrac{1}{x^2}\\dfrac{\\textrm{d}y}{\\textrm{d}t}+\\dfrac{1}{x}\\dfrac{\\textrm{d}}{\\textrm{d}x}\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}t}\\right)=-\\dfrac{1}{x^2}\\dfrac{\\textrm{d}y}{\\textrm{d}t}+\\dfrac{1}{x^2}\\dfrac{\\textrm{d}^2",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-d370b796",
   "kind": "method",
   "name": "斯托克斯公式",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "| 题型 | 优先工具 | |------|----------| | 三重积分 | 直角、柱面、球面坐标 | | 第一型曲线积分 | 参数化 | | 第一型曲面积分 | 投影到坐标面 | | 平面第二型曲线积分 | 参数化、格林公式 | | 第二型曲面积分 | 投影法、高斯公式 | | 空间第二型曲线积分 | 参数化…",
   "matchText": "斯托克斯公式 | 题型 | 优先工具 |\n|------|----------|\n| 三重积分 | 直角、柱面、球面坐标 |\n| 第一型曲线积分 | 参数化 |\n| 第一型曲面积分 | 投影到坐标面 |\n| 平面第二型曲线积分 | 参数化、格林公式 |\n| 第二型曲面积分 | 投影法、高斯公式 |\n| 空间第二型曲线积分 | 参数化、斯托克斯公式 |\n\n--- 斯托克斯公式 拿到积分题先判断类型（看积分微元）$\\to$ 再利用对称性代入化简 $\\to$ 选择计算方法：\n\n- **三重积分：** 先试直角坐标 → 柱面对称用柱坐标 → 球对称用球坐标\n- **第一型曲线积分：** 统一化为定积分\n- **第一型曲面积分：** 统一投影为二重积分\n- **平面第二型曲线积分：** 闭曲线优先格林公式 → 非闭参数化\n- **第二型曲面积分：** 闭曲面优先高斯公式 → 非闭投影法\n- **空间第二型曲线积分：** 闭曲线优先斯托克斯公式 → 非闭参数化\n\n---",
   "source": "data/seed/repo-notes.js（kind=方法 × 2 条）"
  },
  {
   "id": "k-method-gaoshu-d752a805",
   "kind": "method",
   "name": "一元积分的概念与性质",
   "subject": "gaoshu",
   "lessons": [
    "gs08"
   ],
   "summary": "参数化 $x=x(t), y=y(t)$：",
   "matchText": "一元积分的概念与性质 参数化 $x=x(t), y=y(t)$：\n\n$$\n\\int_L P\\,dx+Q\\,dy = \\int_\\alpha^\\beta [P(x(t),y(t))x'(t) + Q(x(t),y(t))y'(t)]\\,dt\n$$ 一元积分的概念与性质 - 反常积分就是取极限，基本计算方法一样。反常积分的计算就是判敛，如果存在就计算其值。\n\n- 瑕积分的瑕点可能在积分区间内，此时需要根据瑕点分隔积分区间。\n\n- 反常积分只有收敛才能使用奇偶性。\n\n处理方法：\n\n- 判断$f(x)$有几个可能反常的点。包括$\\infty$和无穷间断点。每次研究一个点。\n\n- 由于使用等价无穷小替换，或乘以非零常数都不影响敛散性，所以使用这两种方法对$f(x)$化简。 一元积分的概念与性质 对比不定积分的直接数学计算，定积分的实际应用要广许多，往往可以用来解决几何、物理等问题。\n\n对于定积分概念的引入就是对求面积采用元素法，即将曲边多边形无限次的分割得到每一片的平均值再求和得到近似解。\n\n元素法也叫微元法，是分析、解决物理问题中的常用方法，也是从部分到整体的思维方法。用该方法可以使一些复杂的物理过程用我们熟悉的物理规律迅速地加以解决，使所求的问题简单化。在使用元素法处理问题时，需将其分解为众多微小的“元过程”，而且每个“元过程”所遵循的规律是相同的，这样，我们只需分析这些“元过程”，然后再将“元过程”进行必要的数学方法或物理思想处理，进而使问题求解。\n\n数一基本上只考几何应用不考物理应用。 一元积分的概念与性质 \\leavevmode\n\n即求两条曲线$y=y_1(x)$、$y=y_2(x)$与积分上下限$x=a$与$x=b$所围成的平面图像面积$S=\\int_a^b\\vert y_1(x)-y_2(x)\\vert\\,\\textrm{d}x$。\n\n若没有指定积分上下限，还要根据两条曲线的图像先确定上下限即$x$的范围。\n\n同理也可以对$y$使用微元法。使用的方法与$x$一致",
   "source": "data/seed/repo-notes.js（kind=方法 × 4 条）"
  },
  {
   "id": "k-method-gaoshu-d9ddb534",
   "kind": "method",
   "name": "多元函数微分学",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "与无条件极值一样，在边界就是显函数可以直接求，在区域内就是隐函数需要求出可疑点再计算可疑点的二阶导数值判断。",
   "matchText": "多元函数微分学 与无条件极值一样，在边界就是显函数可以直接求，在区域内就是隐函数需要求出可疑点再计算可疑点的二阶导数值判断。\n\n#### 闭区域边界\n\n即使用拉格朗日乘数法。\n\n#### 闭区域内\n\n- 对原式$f(x,y)$分别对$x,y$求偏导并令为0得到区域内可疑点。\n\n- 使用拉格朗日乘数法对$f(x,y)$求出边界上可疑点。\n\n- 将所有可疑点代入原函数，计算出所有的值并进行比较。",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-gaoshu-e71e94f4",
   "kind": "method",
   "name": "定积分物理应用",
   "subject": "gaoshu",
   "lessons": [
    "gs12"
   ],
   "summary": "$f(x)$ 在 $[a,b]$上的平均值 $\\overline{y} \\triangleq \\frac{\\int_a^b f(x) \\text{d}x}{b-a}$",
   "matchText": "定积分物理应用 $f(x)$ 在 $[a,b]$上的平均值 $\\overline{y} \\triangleq \\frac{\\int_a^b f(x) \\text{d}x}{b-a}$ 定积分物理应用 | 应用 | 公式 |\n|------|------|\n| 体积 | $V=\\iiint_\\Omega 1\\,dV$ |\n| 质量 | $m=\\iiint_\\Omega \\rho\\,dV$ |\n| 质心 | $\\bar x=\\frac{1}{m}\\iiint_\\Omega x\\rho\\,dV$，$\\bar y,\\bar z$ 同理 |\n| 转动惯量 | $I_z=\\iiint_\\Omega (x^2+y^2)\\rho\\,dV$ |\n\n--- 定积分物理应用 | 应用 | 公式 |\n|:----|:-----|\n| 体积 | $V = \\iiint_\\Omega 1\\,dV$ |\n| 质量 | $m = \\iiint_\\Omega \\rho(x,y,z)\\,dV$ |\n| 质心 | $\\bar x = \\frac{1}{m}\\iiint_\\Omega x\\rho\\,dV$ |\n| 转动惯量 | $I_x = \\iiint_\\Omega (y^2+z^2)\\rho\\,dV$ |\n\n--- 定积分物理应用 #### 变力沿直线做功\n\n#### 抽水做功\n\n例题：有一个半径为$4m$的半球形水池蓄满了水，现在要将水全部抽取到距水池原水面$6m$高的水箱中，求需要做多少功。（水的密度为$1000kg/m^3$，重力加速度$g=9.8m/s^2$）\n\n解：令水池是竖直的，所以以$y$为积分的方向。\n\n根据原水平面为半径为4的圆的面积，得到$x^2+y^2=16$，解得$x^2=16-y^2$，$A(y)=\\pi x^2=\\pi(16-y^2)$。\n\n$\\rho gA(y)\\,\\textrm{d}y=\\rho g\\pi(16-y^2)\\,\\textrm{d}y$\n\n要将水提到$6m$，即路径为$6-y$，所以$\\rho g\\pi(16-y^2)(6-y)\\,\\textrm{d}y$。\n\n又$y$从最开始的0到抽干的-4，所以得到$w=\\int_{-4}^0\\rho g\\pi(16-y^2)(6-y)\\,\\textrm{d}y$。\n\n#### 水压力 定积分物理应用 #### 基础方法\n\n即化为定积分。一投（投影）二代（代入关系方程）三计算（$\\textrm{d}s$转换为$\\textrm{d}x$等）。\n\n-$L:y=g(x)$（$a\\leqslant x\\leqslant b$），$\\int_Lf(x,y)\\,\\textrm{d}s=\\int_a^bf[x,g(x)]\\sqrt{1+g'^2(x)}\\textrm{d}x$。\n\n-$L:\\left\\{\\begin{array}{c}\n        x=\\phi(t) \\\\\n        y=\\psi(t)\n    \\end{array}\\right.$（$\\alpha\\leqslant t\\leqslant\\beta$），$\\int_Lf(x,y)\\,\\textrm{d}s=\\int_\\alpha^\\beta f[\\phi(t),\\psi(t)]\\\\\\sqrt{\\phi'^2(t)+\\psi'^2(t)}\\textrm{d}t$。\n\n#### 平面\n \\leavevmode\n\n例题：计算$\\oint\\limits_\\Gamma\\vert y\\vert\\,\\textrm{d}s$，其中$\\Gamma$为球面$x^2+y^2+z^2=2$与平面$x=y$的交线。\n\n解：根据普通对称性，对于$\\vert y\\vert$而言，其他象限的函数值都与第一象限区域的函数相等。令第一象限区域为$\\Gam",
   "source": "data/seed/repo-notes.js（kind=方法 × 5 条）"
  },
  {
   "id": "k-method-gaoshu-ee5aa147",
   "kind": "method",
   "name": "格林公式",
   "subject": "gaoshu",
   "lessons": [
    "gs18"
   ],
   "summary": "对于不封闭曲线使用定积分法，对于封闭曲线或封闭曲线部分使用二重积分法。",
   "matchText": "格林公式 对于不封闭曲线使用定积分法，对于封闭曲线或封闭曲线部分使用二重积分法。\n\n#### 定积分法\n\n由于第二类曲线积分积分值可正可负，所以只需要关心其起点$x=a$，其终点$x=b$。\n\n-$L:y=g(x)$（$x$起于$x=a$终于$x=b$），$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\int_a^bP[x,g(x)]\\,\\textrm{d}x+Q[x,g(x)]g'(x)\\,\\textrm{d}x$。\n\n-$L:\\left\\{\\begin{array}{c}\n        x=\\phi(t) \\\\\n        y=\\psi(t)\n    \\end{array}\\right.$（$t$起于$\\alpha$终于$\\beta$），$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\\\\\int_\\alpha^\\beta P[\\phi(t),\\psi(t)]\\phi'(t)\\,\\textrm{d}t+Q[\\phi(t),\\psi(t)]\\psi'(t)\\textrm{d}t$。\n\n#### 二重积分法\n\n是考试的重点，基本上都会考到，非常重要。\n\n#### 背景\n \\leavevmode\n\n复平面上的一个区域$G$，如果在其中任做一条简单闭曲线，而闭曲线的内部总属于$G$，就称$G$为单",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-xiandai-55bdad23",
   "kind": "method",
   "name": "二次型",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "也称为拉格朗日配方法。配方法与前面的特征值、相似、正交理论无关，是通过配方找到一个可逆的合同矩阵。",
   "matchText": "二次型 也称为拉格朗日配方法。配方法与前面的特征值、相似、正交理论无关，是通过配方找到一个可逆的合同矩阵。\n\n任何二次型均可通过配方法（做可逆线性变换）化为标准形与规范形，即对于任何实对称矩阵$A$，必存在可逆矩阵$C$，使得$C^TAC=\\Lambda$，其中：\n\n$\\Lambda=\\left(\\begin{array}{cccc}\n    d_1 \\\\\n     & d_2 \\\\\n     & & \\ddots \\\\\n     & & & d_n\n\\end{array}\\right)$或$\\Lambda=\\left(\\begin{array}{ccccccccc}\n    A \\\\\n     & B \\\\\n     & & C \\\\\n\\end{array}\\right)$，$A=\\left(\\begin{array}{ccc}\n    1 \\\\\n     & \\ddots \\\\\n     & & 1 \\\\\n\\end{array}\\right)$，$B=\\left(\\begin{array}{ccc}\n    -1 \\\\\n     & \\ddots \\\\\n     & & -1 \\\\\n\\end{array}\\right)$，$C=\\left(\\begin{array}{ccc}\n    0 \\\\\n     & \\ddots \\\\\n     & & 0 \\\\\n\\end{array}\\rig",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-xiandai-582fe9b2",
   "kind": "method",
   "name": "微分方程",
   "subject": "xiandai",
   "lessons": [
    "gs15"
   ],
   "summary": "即$Ax=b$，$b$为不全为0的列向量。",
   "matchText": "微分方程 即$Ax=b$，$b$为不全为0的列向量。\n\n#### 有解条件\n\n$A=[\\alpha_1,\\alpha_2,\\cdots,\\alpha_n]$，其中$\\alpha_j=[a_{1j},a_{2j},\\cdots,a_{mj}]^T$，$j=1,2,\\cdots,n$。\n\n当$r(A)\\neq r([A,b])$时（$r(A)+1=r([A,b])$），即$b$不能被$A$线性表出，则方程组无解。\n\n当$r(A)=r([A,b])=n$时，即$b$能被$A$线性表出，$A$线性无关，$[A,b]$线性相关，矩阵列满秩，则方程组有唯一解。\n\n当$r(A)=r([A,b])=r<n$时，即$b$能被$A$线性表出，$A$线性相关，矩阵列降秩，则方程组有无穷多解。\n\n#### 解的性质\n\n若$\\eta_1,\\eta_2,\\eta$是非齐次线性方程组$Ax=b$的解，$\\xi$是对应齐次线性方程组$Ax=0$的解，则：\n\n①$\\eta_1-\\eta_2$是$Ax=0$的通解。\n\n②$k\\xi+\\eta$是$Ax=b$的解。\n\n#### 求解过程\n\n将系数矩阵和常数项矩阵合并为一个增广矩阵，对增广矩阵进行行变换变为阶梯形矩阵，求出对应齐次线性方程组的通解，最后假设一个非齐次线性方程组的特解。\n\n- 写出$Ax=b$的导出方程组$Ax=0$并求出其通解$k_1\\xi_1+k_2\\xi_2+\\",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-xiandai-5ebb5383",
   "kind": "method",
   "name": "线性方程组",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "如果只给出了基础解系，则令他们相等，并求出参数。",
   "matchText": "线性方程组 如果只给出了基础解系，则令他们相等，并求出参数。 线性方程组 若该矩阵$A$是可逆矩阵，就将$AX=B$的增广矩阵$(A,B)$化为最简形矩阵，从而得到方程解。\n\n$\\because P_i\\cdots P_2P_1A=E$，$P_i\\cdots P_2P_1E=A^{-1}$。\n\n$\\left[A\\vdots B\\right]\\overset{r}{\\sim}\\left[E\\vdots A^{-1}\\right]$，$\\left[\\begin{array}{c}\n    A \\\\\n    B\n\\end{array}\\right]\\overset{c}{\\sim}\\left[\\begin{array}{c}\n    E \\\\\n    A^{-1}\n\\end{array}\\right]$。\n\n例题：求解矩阵方程$AX=B$，$A=\\left(\\begin{array}{ccc}\n    2 & 1 & -3 \\\\\n    1 & 2 & -2 \\\\\n    -1 & 3 & 2\n\\end{array}\\right)$，$B=\\left(\\begin{array}{cc}\n    1 & -1 \\\\\n    2 & 0 \\\\\n    -2 & 5\n\\end{array}\\right)$。\n\n解：因为$AX=B$，所以左乘$A^{-1}$：$A^{-1}AX=EX=A^{-1}B$，增广矩阵行变换：\n\n$(A,B)=\\left(\\begin{arr 线性方程组 - 求两个方程组解的交集部分。可以联立两个方程求解。\n\n- 求出$A_{m\\times n}x=0$的通解$k_1\\xi_1+k_2\\xi_2+\\cdots+k_s\\xi_s$，这些$k$本来是独立的，然后代入$B_{m\\times n}x=0$，求出$k_i(i=1,2,\\cdots,s)$之间的关系，再代回$A_{m\\times n}x=0$的通解中就得到公共解。\n\n- 给出$A_{m\\times n}x=0$的通解与$B_{m\\times n}x=0$的通解联立：$k_1\\xi_1+k_2\\xi_2+\\cdots+k_s\\xi_s=l_1\\eta_1+l_2\\eta_2+\\cdots+l_s\\eta_s=0$，能解出$k_i$和$l_i$。\n\n这种方法可以求出公共解，不过比较麻烦。\n\n如果已经给出原方程的基础解系而没有给出矩阵，则这个方法解出公共解较好。\n\n例题：已知线性方程组$A=\\left\\{\\begin{array}{l}\n    x_1+x_2=0 \\\\\n    x_2-x_4=0\n\\end{array}\\right.$，$B=\\left\\{\\begin{array}{l}\n    x_1-x_2+x_3=0 \\\\\n    x_2-x_3+x_4=0\n\\end{array}\\right.$，求方程组的公共解。\n\n解：$A=\\left(\\begin{array}{ccc",
   "source": "data/seed/repo-notes.js（kind=方法 × 3 条）"
  },
  {
   "id": "k-method-xiandai-8f383651",
   "kind": "method",
   "name": "排列与逆序数",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "逆序一般只会考一个数列的逆序数，一般以自然数从小到大为标准次序。",
   "matchText": "排列与逆序数 逆序一般只会考一个数列的逆序数，一般以自然数从小到大为标准次序。\n\n对于逆序数的计算一般是数，假设一共有$n$项，则需要依次从$i$向后判断各项与当前项的大小，最后相加。",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-xiandai-9a998c80",
   "kind": "method",
   "name": "向量组",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "使用行列式不等于$0$的方法最方便，但是有时候行列不同就不能这么做了。",
   "matchText": "向量组 使用行列式不等于$0$的方法最方便，但是有时候行列不同就不能这么做了。 向量组 极大线性无关组一般与向量组秩在一起使用。一般解出极大线性无关组与秩，还要用极大线性无关组表示出其余的向量，基本步骤：\n\n- 将向量组拼接为矩阵$A$，对$A$进行初等行变换，化为最简行阶梯形矩阵，确定矩阵秩$r(A)$。\n\n- 在最简行阶梯矩阵中按列找出一个秩为$r(A)$的子矩阵，即在每个台阶上找一列列向量，找$r(A)$列构成一个新矩阵，其就是一个极大线性无关组。\n\n- 将其余向量依次与极大线性无关组进行对比解出表示方法。\n\n注意：求向量组的秩可以进行初等变换，包括行变换和列变换。但是求极大线性无关组时最好只使用行变换，因为列变换会改变方程的解。从而解方程组只能做行变换。 向量组 - 向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$（$n\\geqslant2$）线性相关的充要条件是向量组中至少有一个向量可由其他$n-1$个向量线性表出。若$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关的充要条件是向量组的任何一个向量都不能被其他$n-1$个向量线性表出。\n\n- 向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关，而$\\beta,\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性相关，则$\\beta$可由$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性表示，且表示方法唯一。\n\n- 向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$可由向量组$\\beta_1,\\beta_2,\\cdots,\\beta_s$线性表示，且$n>s$，则$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性相关。（以少表多，多的相关）若向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$可由向量组$\\beta_1,\\beta_2,\\cdots,\\beta_s$线性表示，$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关，则$n\\leqslant s$。",
   "source": "data/seed/repo-notes.js（kind=方法 × 3 条）"
  },
  {
   "id": "k-method-xiandai-badb323a",
   "kind": "method",
   "name": "特征值与特征向量",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "首先根据$\\vert\\lambda E-A\\vert=0$求出$\\lambda$，然后把$\\lambda$逐个带入$(\\lambda E-A)x=0$，根据齐次方程求解方法进行初等变换求出基础解系。这个基础解系就是当前特征值的特征向量。",
   "matchText": "特征值与特征向量 首先根据$\\vert\\lambda E-A\\vert=0$求出$\\lambda$，然后把$\\lambda$逐个带入$(\\lambda E-A)x=0$，根据齐次方程求解方法进行初等变换求出基础解系。这个基础解系就是当前特征值的特征向量。",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-xiandai-c7410e7e",
   "kind": "method",
   "name": "矩阵",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "要求$A$和$B$的非零公共解，即求联立矩阵$\\left(\\begin{array}{c} A \\\\ B \\end{array}\\right)x=0$的非零解。对这个矩阵求出基础解系。",
   "matchText": "矩阵 要求$A$和$B$的非零公共解，即求联立矩阵$\\left(\\begin{array}{c}\n    A \\\\\n    B\n\\end{array}\\right)x=0$的非零解。对这个矩阵求出基础解系。\n\n如果直接给出矩阵，则这种方法可以不用求出基础解系就能得到公共解。",
   "source": "data/seed/repo-notes.js（kind=方法 × 1 条）"
  },
  {
   "id": "k-method-xiandai-dab23216",
   "kind": "method",
   "name": "行列式",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "包含直接计算行列式的值和已知行列式值计算参数值两种体型，基本上求解方式一致。",
   "matchText": "行列式 包含直接计算行列式的值和已知行列式值计算参数值两种体型，基本上求解方式一致。\n\n证明行列式值与计算行列式值的题型不同的是，其行列式的值是固定给出的，一方面虽然约束了解题思路，一方面也给出了解题的方向，需要结果与给定值“靠近”。 行列式 基本的计算方式是对角线法则计算与行列式展开两种方法。若符合基本特殊行列式的可以按照公式。\n\n但是对于一般的高阶行列式而言计算方式如下：\n\n- 通过行列式的对换让一行或一列只有一个元素不为0，进行行列式展开不断降阶，最后变成第三阶的时候使用对角线法则。\n\n- 通过行列式的对换从上往下让行列式变成上三角行列式，对角线相乘就得到结果。\n\n这两种方式可以混合使用，直接展开可以在有足够多的0的情况下使用或阶数较低的情况下使用。\n\n例题：计算$\\left|\\begin{array}{cccccc} \n    a & b & 0 & \\cdots & 0 & 0 \\\\\n    0 & a & b & \\cdots & 0 & 0 \\\\\n    0 & 0 & a & \\cdots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\\n    0 & 0 & 0 & \\cdots & a & b \\\\\n    b & 0 & 0 & \\cdots & 0 & a\n\\end{array}\\right|$。\n\n解：直接按第一列展开：\n\n$=a(-1)^{1+1}\\left|\\begin{array}{ccccc} \n    a & b & \\cdots & 0 & 0 \\\\\n    0 & a & \\cdots & ",
   "source": "data/seed/repo-notes.js（kind=方法 × 2 条）"
  },
  {
   "id": "k-method-xiandai-db6625b4",
   "kind": "method",
   "name": "矩阵运算",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "在行列式的时候提到了分块行列式，分块行列式计算时要求对应的零行列式必须是行列数相等的，而对于分块矩阵而言则不要求，且不一定要零矩阵。",
   "matchText": "矩阵运算 在行列式的时候提到了分块行列式，分块行列式计算时要求对应的零行列式必须是行列数相等的，而对于分块矩阵而言则不要求，且不一定要零矩阵。\n\n对于行列数较多的矩阵常使用分块法，将大矩阵化为小矩阵。将矩阵用横纵线分为多个小矩阵，每个矩阵成为矩阵的子块，以子块为元素的矩阵就是分块矩阵。 矩阵运算 分块矩阵的计算法则与普通矩阵计算类似。\n\n定理：若$AB$矩阵行列数相同，采用相同的分块法，则\n\n$A=\\left(\n    \\begin{array}{ccc}\n        A_{11} & \\cdots & A_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        A_{s1} & \\cdots & A_{sr}\n    \\end{array}\n\\right)\\text{，}B=\\left(\n    \\begin{array}{ccc}\n        B_{11} & \\cdots & B_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        B_{s1} & \\cdots & B_{sr}\n    \\end{array}\n\\right)$\n\n$A+B=\\left(\n    \\begin{array}{ccc}\n        A_{11}+B_{11} & \\cdots & A_{1r}+B_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        A_{s1}+B_{s1} & \\cdots & A_{sr}+B_{sr}\n    \\end{array}\n\\right)\\text{。}$\n\n定理：设$A=\\left(\n    \\begin{array}{ccc}\n ",
   "source": "data/seed/repo-notes.js（kind=方法 × 2 条）"
  },
  {
   "id": "k-qtype-continuity",
   "kind": "qtype",
   "name": "间断点与连续性讨论",
   "subject": "gaoshu",
   "lessons": [
    "gs01"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 4 处，并关联到书籍题目；示例：gs01·例3、gs01·例4、书·第1章 函数极限与连续·第19题、书·第1章 函数极限与连续·第20题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs01·例3",
    "gs01·例4",
    "书·第1章 函数极限与连续·第19题",
    "书·第1章 函数极限与连续·第20题"
   ]
  },
  {
   "id": "k-qtype-derivative-calc",
   "kind": "qtype",
   "name": "导数与高阶导数计算",
   "subject": "gaoshu",
   "lessons": [
    "gs04",
    "gs07"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 6 处，并关联到书籍题目；示例：gs04·例1、gs04·例2、gs07·例1、书·第4章 一元函数微分学的计算·第10题、书·第4章 一元函数微分学的计算·第5题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs04·例1",
    "gs04·例2",
    "gs07·例1",
    "书·第4章 一元函数微分学的计算·第10题",
    "书·第4章 一元函数微分学的计算·第5题"
   ]
  },
  {
   "id": "k-qtype-derivative-concept",
   "kind": "qtype",
   "name": "导数定义与可导性",
   "subject": "gaoshu",
   "lessons": [
    "gs03",
    "gs06",
    "gs07"
   ],
   "summary": "考研数学一常见题型：在 3 讲的例题与练习中出现 8 处，并关联到书籍题目；示例：gs03·例2、gs03·例3、gs06·例1、gs07·练习4、书·第3章 一元函数微分学的概念·第2题、书·第3章 一元函数微分学的概念·第4题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs03·例2",
    "gs03·例3",
    "gs06·例1",
    "gs07·练习4",
    "书·第3章 一元函数微分学的概念·第2题",
    "书·第3章 一元函数微分学的概念·第4题"
   ]
  },
  {
   "id": "k-qtype-determinant",
   "kind": "qtype",
   "name": "行列式计算与按行列展开",
   "subject": "xiandai",
   "lessons": [
    "xd01"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 11 处，并关联到书籍题目；示例：xd01·例1、xd01·例2、书·第1章 行列式·第1题、书·第1章 行列式·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "xd01·例1",
    "xd01·例2",
    "书·第1章 行列式·第1题",
    "书·第1章 行列式·第2题"
   ]
  },
  {
   "id": "k-qtype-double-integral",
   "kind": "qtype",
   "name": "二重积分计算与换序",
   "subject": "gaoshu",
   "lessons": [
    "gs14"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 4 处，并关联到书籍题目；示例：gs14·例1、gs14·例2、书·第14章 二重积分·第6题、书·第14章 二重积分·第10题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs14·例1",
    "gs14·例2",
    "书·第14章 二重积分·第6题",
    "书·第14章 二重积分·第10题"
   ]
  },
  {
   "id": "k-qtype-eigen",
   "kind": "qtype",
   "name": "特征值、特征向量与相似对角化",
   "subject": "xiandai",
   "lessons": [
    "xd05"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 12 处，并关联到书籍题目；示例：xd05·例1、xd05·例2、书·第5章 特征值与特征向量·第1题、书·第5章 特征值与特征向量·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "xd05·例1",
    "xd05·例2",
    "书·第5章 特征值与特征向量·第1题",
    "书·第5章 特征值与特征向量·第2题"
   ]
  },
  {
   "id": "k-qtype-estimation",
   "kind": "qtype",
   "name": "参数估计（矩估计与最大似然）",
   "subject": "gailv",
   "lessons": [
    "gl07"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 9 处，并关联到书籍题目；示例：gl07·例1、gl07·例2、书·第9章 参数估计与假设检验·第1题、书·第9章 参数估计与假设检验·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl07·例1",
    "gl07·例2",
    "书·第9章 参数估计与假设检验·第1题",
    "书·第9章 参数估计与假设检验·第2题"
   ]
  },
  {
   "id": "k-qtype-event-prob",
   "kind": "qtype",
   "name": "随机事件与概率计算",
   "subject": "gailv",
   "lessons": [
    "gl01"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 11 处，并关联到书籍题目；示例：gl01·例2、gl01·例3、书·第1章 随机事件与概率·第3题、书·第1章 随机事件与概率·第9题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl01·例2",
    "gl01·例3",
    "书·第1章 随机事件与概率·第3题",
    "书·第1章 随机事件与概率·第9题"
   ]
  },
  {
   "id": "k-qtype-hypothesis",
   "kind": "qtype",
   "name": "假设检验",
   "subject": "gailv",
   "lessons": [
    "gl08"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 12 处，并关联到书籍题目；示例：gl08·例1、gl08·例2。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl08·例1",
    "gl08·例2"
   ]
  },
  {
   "id": "k-qtype-inequality",
   "kind": "qtype",
   "name": "微分与积分不等式证明",
   "subject": "gaoshu",
   "lessons": [
    "gs07",
    "gs11"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 3 处，并关联到书籍题目；示例：gs07·例3、gs11·例6、gs11·练习5。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs07·例3",
    "gs11·例6",
    "gs11·练习5"
   ]
  },
  {
   "id": "k-qtype-integral-calc",
   "kind": "qtype",
   "name": "积分计算（换元与分部）",
   "subject": "gaoshu",
   "lessons": [
    "gs10",
    "gs11"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 2 处，并关联到书籍题目；示例：gs10·例6、gs11·例4、书·第11章 一元函数积分学的应用(二)——积分等式与积分不等式·第2题、书·一元函数积分学的应用（一）几何应用·第22题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs10·例6",
    "gs11·例4",
    "书·第11章 一元函数积分学的应用(二)——积分等式与积分不等式·第2题",
    "书·一元函数积分学的应用（一）几何应用·第22题"
   ]
  },
  {
   "id": "k-qtype-integral-geometry",
   "kind": "qtype",
   "name": "定积分几何应用（面积/体积/弧长）",
   "subject": "gaoshu",
   "lessons": [
    "gs10",
    "gs12"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 14 处，并关联到书籍题目；示例：gs10·例1、gs10·例2、gs12·例2、gs12·例3、书·第10章 一元函数积分学的应用(一)——几何应用·第1题、书·第10章 一元函数积分学的应用(一)——几何应用·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs10·例1",
    "gs10·例2",
    "gs12·例2",
    "gs12·例3",
    "书·第10章 一元函数积分学的应用(一)——几何应用·第1题",
    "书·第10章 一元函数积分学的应用(一)——几何应用·第2题"
   ]
  },
  {
   "id": "k-qtype-integral-physics",
   "kind": "qtype",
   "name": "定积分物理应用",
   "subject": "gaoshu",
   "lessons": [
    "gs11",
    "gs12"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 9 处，并关联到书籍题目；示例：gs11·例2、gs12·例3、gs12·例4、书·第12章 一元函数积分学的应用(三)——物理应用·第1题、书·第12章 一元函数积分学的应用(三)——物理应用·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs11·例2",
    "gs12·例3",
    "gs12·例4",
    "书·第12章 一元函数积分学的应用(三)——物理应用·第1题",
    "书·第12章 一元函数积分学的应用(三)——物理应用·第2题"
   ]
  },
  {
   "id": "k-qtype-joint-distribution",
   "kind": "qtype",
   "name": "多维随机变量及其独立性",
   "subject": "gailv",
   "lessons": [
    "gl03"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 6 处，并关联到书籍题目；示例：gl03·例1、gl03·例2、书·第3章 多维随机变量及其分布·第10题、书·第3章 多维随机变量及其分布·第11题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl03·例1",
    "gl03·例2",
    "书·第3章 多维随机变量及其分布·第10题",
    "书·第3章 多维随机变量及其分布·第11题"
   ]
  },
  {
   "id": "k-qtype-limit-calc",
   "kind": "qtype",
   "name": "极限计算",
   "subject": "gaoshu",
   "lessons": [
    "gs01",
    "gs02"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 8 处，并关联到书籍题目；示例：gs01·例3、gs01·练习1、gs02·例2、gs02·例4、书·函数、极限与连续·第6题、书·函数、极限与连续·第7题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs01·例3",
    "gs01·练习1",
    "gs02·例2",
    "gs02·例4",
    "书·函数、极限与连续·第6题",
    "书·函数、极限与连续·第7题"
   ]
  },
  {
   "id": "k-qtype-limit-theorem",
   "kind": "qtype",
   "name": "大数定律与中心极限定理",
   "subject": "gailv",
   "lessons": [
    "gl05"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 6 处，并关联到书籍题目；示例：gl05·例1、gl05·例3、书·第5章 大数定律与中心极限定理·第1题、书·第5章 大数定律与中心极限定理·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl05·例1",
    "gl05·例3",
    "书·第5章 大数定律与中心极限定理·第1题",
    "书·第5章 大数定律与中心极限定理·第2题"
   ]
  },
  {
   "id": "k-qtype-linear-system",
   "kind": "qtype",
   "name": "线性方程组解的判定与求解",
   "subject": "xiandai",
   "lessons": [
    "xd04"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 11 处，并关联到书籍题目；示例：xd04·例1、xd04·例2、书·第4章 线性方程组·第1题、书·第4章 线性方程组·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "xd04·例1",
    "xd04·例2",
    "书·第4章 线性方程组·第1题",
    "书·第4章 线性方程组·第2题"
   ]
  },
  {
   "id": "k-qtype-matrix",
   "kind": "qtype",
   "name": "矩阵运算、逆矩阵与秩",
   "subject": "xiandai",
   "lessons": [
    "xd02"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 9 处，并关联到书籍题目；示例：xd02·例1、xd02·例2、书·第2章 矩阵·第1题、书·第2章 矩阵·第4题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "xd02·例1",
    "xd02·例2",
    "书·第2章 矩阵·第1题",
    "书·第2章 矩阵·第4题"
   ]
  },
  {
   "id": "k-qtype-mean-value",
   "kind": "qtype",
   "name": "中值定理与存在性证明",
   "subject": "gaoshu",
   "lessons": [
    "gs06"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 2 处，并关联到书籍题目；示例：gs06·例1、gs06·练习4、书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第5题、书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第12题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs06·例1",
    "gs06·练习4",
    "书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第5题",
    "书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第12题"
   ]
  },
  {
   "id": "k-qtype-numeric-expect",
   "kind": "qtype",
   "name": "期望方差与协方差计算",
   "subject": "gailv",
   "lessons": [
    "gl04"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 4 处，并关联到书籍题目；示例：gl04·例2、gl04·例4、书·第4章 随机变量的数字特征·第5题、书·第4章 随机变量的数字特征·第6题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl04·例2",
    "gl04·例4",
    "书·第4章 随机变量的数字特征·第5题",
    "书·第4章 随机变量的数字特征·第6题"
   ]
  },
  {
   "id": "k-qtype-ode",
   "kind": "qtype",
   "name": "微分方程求解",
   "subject": "gaoshu",
   "lessons": [
    "gs15"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 7 处，并关联到书籍题目；示例：gs15·例6、gs15·练习1、书·第15章 微分方程·第3题、书·第15章 微分方程·第4题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs15·例6",
    "gs15·练习1",
    "书·第15章 微分方程·第3题",
    "书·第15章 微分方程·第4题"
   ]
  },
  {
   "id": "k-qtype-partial",
   "kind": "qtype",
   "name": "多元函数偏导与全微分",
   "subject": "gaoshu",
   "lessons": [
    "gs13"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 5 处，并关联到书籍题目；示例：gs13·例2、gs13·例3、书·第13章 多元函数微分学·第7题、书·第13章 多元函数微分学·第10题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs13·例2",
    "gs13·例3",
    "书·第13章 多元函数微分学·第7题",
    "书·第13章 多元函数微分学·第10题"
   ]
  },
  {
   "id": "k-qtype-power-series",
   "kind": "qtype",
   "name": "幂级数与傅里叶级数",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 4 处，并关联到书籍题目；示例：gs16·例3、gs16·例5、书·第16章 无穷级数·第8题、书·第16章 无穷级数·第9题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs16·例3",
    "gs16·例5",
    "书·第16章 无穷级数·第8题",
    "书·第16章 无穷级数·第9题"
   ]
  },
  {
   "id": "k-qtype-quadratic",
   "kind": "qtype",
   "name": "二次型化标准形与正定性",
   "subject": "xiandai",
   "lessons": [
    "xd06"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 10 处，并关联到书籍题目；示例：xd06·例2、xd06·例3、书·第6章 二次型·第2题、书·第6章 二次型·第3题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "xd06·例2",
    "xd06·例3",
    "书·第6章 二次型·第2题",
    "书·第6章 二次型·第3题"
   ]
  },
  {
   "id": "k-qtype-rv-distribution",
   "kind": "qtype",
   "name": "随机变量及其分布",
   "subject": "gailv",
   "lessons": [
    "gl02"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 7 处，并关联到书籍题目；示例：gl02·例1、gl02·例2、书·第2章 一维随机变量及其分布·第1题、书·第2章 一维随机变量及其分布·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl02·例1",
    "gl02·例2",
    "书·第2章 一维随机变量及其分布·第1题",
    "书·第2章 一维随机变量及其分布·第2题"
   ]
  },
  {
   "id": "k-qtype-sampling",
   "kind": "qtype",
   "name": "抽样分布与统计量",
   "subject": "gailv",
   "lessons": [
    "gl06"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 9 处，并关联到书籍题目；示例：gl06·例1、gl06·例2、书·第6章 数理统计·第1题、书·第6章 数理统计·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gl06·例1",
    "gl06·例2",
    "书·第6章 数理统计·第1题",
    "书·第6章 数理统计·第2题"
   ]
  },
  {
   "id": "k-qtype-series",
   "kind": "qtype",
   "name": "级数敛散性判别",
   "subject": "gaoshu",
   "lessons": [
    "gs16"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 9 处，并关联到书籍题目；示例：gs16·例1、gs16·例2、书·第16章 无穷级数·第1题、书·第16章 无穷级数·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs16·例1",
    "gs16·例2",
    "书·第16章 无穷级数·第1题",
    "书·第16章 无穷级数·第2题"
   ]
  },
  {
   "id": "k-qtype-shape-analysis",
   "kind": "qtype",
   "name": "单调性、极值、凹凸与渐近线",
   "subject": "gaoshu",
   "lessons": [
    "gs05",
    "gs07"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 7 处，并关联到书籍题目；示例：gs05·例1、gs05·例3、gs07·例3、书·第5章 一元函数微分学的应用(一)——几何应用·第2题、书·第5章 一元函数微分学的应用(一)——几何应用·第5题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs05·例1",
    "gs05·例3",
    "gs07·例3",
    "书·第5章 一元函数微分学的应用(一)——几何应用·第2题",
    "书·第5章 一元函数微分学的应用(一)——几何应用·第5题"
   ]
  },
  {
   "id": "k-qtype-space-geometry",
   "kind": "qtype",
   "name": "向量与空间解析几何（数一）",
   "subject": "gaoshu",
   "lessons": [
    "gs17"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 8 处，并关联到书籍题目；示例：gs17·例1、gs17·例2、书·第17章 多元函数积分学的预备知识·第3题、书·第17章 多元函数积分学的预备知识·第4题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs17·例1",
    "gs17·例2",
    "书·第17章 多元函数积分学的预备知识·第3题",
    "书·第17章 多元函数积分学的预备知识·第4题"
   ]
  },
  {
   "id": "k-qtype-taylor",
   "kind": "qtype",
   "name": "泰勒公式展开与近似",
   "subject": "gaoshu",
   "lessons": [
    "gs03",
    "gs06"
   ],
   "summary": "考研数学一常见题型：在 2 讲的例题与练习中出现 3 处，并关联到书籍题目；示例：gs03·例1、gs03·例4、gs06·练习1、书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第12题、书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "gs03·例1",
    "gs03·例4",
    "gs06·练习1",
    "书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第12题",
    "书·第6章 一元函数微分学的应用(二)——中值定理、微分等式与微分不等式·第2题"
   ]
  },
  {
   "id": "k-qtype-vector-rank",
   "kind": "qtype",
   "name": "向量组线性相关性与极大无关组",
   "subject": "xiandai",
   "lessons": [
    "xd03"
   ],
   "summary": "考研数学一常见题型：在 1 讲的例题与练习中出现 7 处，并关联到书籍题目；示例：xd03·例1、xd03·例3、书·第3章 向量组·第1题、书·第3章 向量组·第2题。",
   "source": "tools/build-knowledge-map.mjs 题型规则表（匹配讲义例题/练习与书籍题原文）",
   "samples": [
    "xd03·例1",
    "xd03·例3",
    "书·第3章 向量组·第1题",
    "书·第3章 向量组·第2题"
   ]
  }
 ],
 "edges": [
  {
   "from": "k-chapter-hm1",
   "to": "k-chapter-hm2",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-hm1",
   "to": "k-chapter-hm7",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-hm2",
   "to": "k-chapter-hm3",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-hm2",
   "to": "k-chapter-hm5",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-hm3",
   "to": "k-chapter-hm6",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-hm3",
   "to": "k-chapter-hm8",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-hm5",
   "to": "k-chapter-hm6",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-la1",
   "to": "k-chapter-la2",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-la2",
   "to": "k-chapter-la3",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-la2",
   "to": "k-chapter-la4",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-la3",
   "to": "k-chapter-la4",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-la4",
   "to": "k-chapter-la5",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-la5",
   "to": "k-chapter-la6",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr1",
   "to": "k-chapter-pr2",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr2",
   "to": "k-chapter-pr3",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr2",
   "to": "k-chapter-pr4",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr2",
   "to": "k-chapter-pr6",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr3",
   "to": "k-chapter-pr4",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr4",
   "to": "k-chapter-pr5",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr6",
   "to": "k-chapter-pr7",
   "rel": "prerequisite"
  },
  {
   "from": "k-chapter-pr7",
   "to": "k-chapter-pr8",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl01-006bce40",
   "to": "k-concept-gl02-7d573d79",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl01-11ca261e",
   "to": "k-concept-gl01-83d9e983",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl01-192a68e8",
   "to": "k-concept-gl01-41abeb4e",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl01-41abeb4e",
   "to": "k-concept-gl01-11ca261e",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl01-83d9e983",
   "to": "k-concept-gl01-006bce40",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl01-cc842752",
   "to": "k-concept-gl01-192a68e8",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl02-12e0a25a",
   "to": "k-concept-gl02-8ec9c8c0",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl02-392bdff0",
   "to": "k-concept-gl02-d7a3a017",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl02-392bdff0",
   "to": "k-concept-gl03-64e014af",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl02-397fa17b",
   "to": "k-concept-gl02-392bdff0",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl02-7d573d79",
   "to": "k-concept-gl02-397fa17b",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl02-8ec9c8c0",
   "to": "k-concept-gl06-3fccf741",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl03-64e014af",
   "to": "k-concept-gl03-f4b02af8",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl03-f4b02af8",
   "to": "k-concept-gl04-ee7f641d",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl04-17955f51",
   "to": "k-concept-gl04-7905deff",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl04-7905deff",
   "to": "k-concept-gl05-b4ddff83",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl04-de145cb2",
   "to": "k-concept-gl04-17955f51",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl04-de145cb2",
   "to": "k-concept-gl05-297aaffc",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl04-ee7f641d",
   "to": "k-concept-gl04-de145cb2",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl05-297aaffc",
   "to": "k-concept-gl05-4511b051",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl05-4511b051",
   "to": "k-concept-gl05-d23f0463",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl05-b4ddff83",
   "to": "k-concept-gl05-4511b051",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl06-1c3c47ec",
   "to": "k-concept-gl06-44345b15",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl06-3fccf741",
   "to": "k-concept-gl06-ed5c4bc4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl06-44345b15",
   "to": "k-concept-gl07-54bf1556",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl06-57c3d79a",
   "to": "k-concept-gl06-1c3c47ec",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl06-ed5c4bc4",
   "to": "k-concept-gl06-57c3d79a",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl07-38b4eabc",
   "to": "k-concept-gl07-f1b705b4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl07-54bf1556",
   "to": "k-concept-gl07-38b4eabc",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl07-cf3229c8",
   "to": "k-concept-gl07-cfe1678b",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl07-cfe1678b",
   "to": "k-concept-gl08-15cefe54",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl07-f1b705b4",
   "to": "k-concept-gl07-cf3229c8",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl08-15cefe54",
   "to": "k-concept-gl08-61d32af4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs01-84f22c70",
   "to": "k-concept-gs01-ae1014d5",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs01-84f22c70",
   "to": "k-concept-gs02-1b6d40b0",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs01-ae1014d5",
   "to": "k-concept-gs03-9e88bde6",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs01-ae1014d5",
   "to": "k-concept-gs03-e5f3853e",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs02-1b6d40b0",
   "to": "k-concept-gs02-d6312cf0",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs02-1b6d40b0",
   "to": "k-concept-gs16-ffe82e9a",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs03-9e88bde6",
   "to": "k-concept-gs03-da04a736",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs03-9e88bde6",
   "to": "k-concept-gs08-5429f707",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs04-437e20d4",
   "to": "k-concept-gs06-3529ef43",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs04-437e20d4",
   "to": "k-concept-gs13-ea9f675c",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs04-62df076f",
   "to": "k-concept-gs13-77e06638",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs04-ae55f9f2",
   "to": "k-concept-gs04-437e20d4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs05-280fe907",
   "to": "k-concept-gs05-a83faa2b",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs06-3529ef43",
   "to": "k-concept-gs05-280fe907",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs06-3529ef43",
   "to": "k-theorem-gs06-3c27fcde",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs08-1286d19a",
   "to": "k-concept-gs08-e3806441",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs08-5429f707",
   "to": "k-concept-gs08-1286d19a",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs08-5429f707",
   "to": "k-concept-gs14-f5047b8f",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs08-e3806441",
   "to": "k-concept-gs15-17ca4c8d",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs08-ece29066",
   "to": "k-concept-gs09-8273c13b",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs09-0cd11f45",
   "to": "k-concept-gs10-aa80acc1",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs09-3db7f8fd",
   "to": "k-concept-gs09-0cd11f45",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs10-aa80acc1",
   "to": "k-concept-gs10-665b0f35",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs10-aa80acc1",
   "to": "k-concept-gs12-ced63e6d",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs13-4e40ae1c",
   "to": "k-concept-gs13-c9a591ee",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs13-4e40ae1c",
   "to": "k-concept-gs13-fd9fd344",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs13-c9a591ee",
   "to": "k-concept-gs13-ea9f675c",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs13-ea9f675c",
   "to": "k-concept-gs13-551de7fe",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs14-ce0e428e",
   "to": "k-concept-gs14-b726028a",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs14-f5047b8f",
   "to": "k-concept-gs14-ce0e428e",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs14-f5047b8f",
   "to": "k-concept-gs18-7fbde9b7",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs15-0b4049ad",
   "to": "k-concept-gs15-e6bf48c4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs15-17ca4c8d",
   "to": "k-concept-gs15-0b4049ad",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs16-4e28ab68",
   "to": "k-concept-gs16-081dfe81",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs16-e775729a",
   "to": "k-concept-gs16-fbf38cf0",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs16-fbf38cf0",
   "to": "k-concept-gs16-4e28ab68",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs16-ffe82e9a",
   "to": "k-concept-gs16-e775729a",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs17-78fcdda3",
   "to": "k-concept-gs17-a4f22735",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs17-a4f22735",
   "to": "k-concept-gs17-f1526931",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs17-b2ec42ec",
   "to": "k-concept-gs17-105173ca",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs17-f1526931",
   "to": "k-concept-gs17-b2ec42ec",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gs18-7fbde9b7",
   "to": "k-concept-gs18-3a1f824e",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd01-3efe03d4",
   "to": "k-concept-xd02-bbee40d1",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd01-59a218de",
   "to": "k-concept-xd01-3efe03d4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd01-85e53c7c",
   "to": "k-concept-xd01-59a218de",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd02-7feea929",
   "to": "k-concept-xd02-cd90afbe",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd02-bbee40d1",
   "to": "k-concept-xd02-1704302c",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd02-bbee40d1",
   "to": "k-concept-xd02-7feea929",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd02-cd90afbe",
   "to": "k-concept-xd03-309de2fa",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd03-309de2fa",
   "to": "k-concept-xd03-6354c93d",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd03-6354c93d",
   "to": "k-concept-xd04-1a2d92d4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd03-9a7acb9d",
   "to": "k-concept-xd03-84c4cf39",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd04-1a2d92d4",
   "to": "k-concept-xd04-ce21a0ea",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd04-ce21a0ea",
   "to": "k-concept-xd05-097e26e1",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd05-097e26e1",
   "to": "k-concept-xd05-50b820a4",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd05-50b820a4",
   "to": "k-concept-xd06-8807192e",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd05-bde5923f",
   "to": "k-theorem-xd05-8e27785c",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd06-47513a51",
   "to": "k-theorem-xd06-7b2f11c0",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd06-8807192e",
   "to": "k-concept-xd06-9c7cd04c",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd06-8d1823b6",
   "to": "k-concept-xd06-8807192e",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-xd06-c8e7e1a1",
   "to": "k-concept-xd06-9c7cd04c",
   "rel": "prerequisite"
  },
  {
   "from": "k-theorem-gl01-fadc1523",
   "to": "k-theorem-gl01-cd851af9",
   "rel": "prerequisite"
  },
  {
   "from": "k-theorem-gs06-3c27fcde",
   "to": "k-concept-gs06-e44cd9b8",
   "rel": "prerequisite"
  },
  {
   "from": "k-theorem-gs06-528a81d0",
   "to": "k-theorem-gs06-5c4642d3",
   "rel": "prerequisite"
  },
  {
   "from": "k-theorem-gs06-5c4642d3",
   "to": "k-theorem-gs06-9972b77f",
   "rel": "prerequisite"
  },
  {
   "from": "k-theorem-gs08-134b630d",
   "to": "k-theorem-gs08-24afa57d",
   "rel": "prerequisite"
  },
  {
   "from": "k-theorem-xd01-e972f87d",
   "to": "k-concept-xd04-3dabdc84",
   "rel": "prerequisite"
  },
  {
   "from": "k-theorem-xd05-8e27785c",
   "to": "k-concept-xd06-47513a51",
   "rel": "prerequisite"
  },
  {
   "from": "k-concept-gl01-006bce40",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl01-11ca261e",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl01-41abeb4e",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl01-83d9e983",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl02-392bdff0",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl02-397fa17b",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl02-7d573d79",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl02-8ec9c8c0",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl02-d7a3a017",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl03-1861c644",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl03-420424dd",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl03-64e014af",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl03-a276b4c5",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl03-d06c89d1",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl03-f4b02af8",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl04-0e8711a5",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl04-17955f51",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl04-7905deff",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl04-de145cb2",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl04-ee7f641d",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl05-297aaffc",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl05-4511b051",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl05-b4ddff83",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl05-d23f0463",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl06-1c3c47ec",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl06-3fccf741",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl06-44345b15",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl06-57c3d79a",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl06-64f18aee",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl06-ed5c4bc4",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl07-38b4eabc",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl07-cf3229c8",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl07-f1b705b4",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl08-15cefe54",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl08-1af4cb1c",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl08-2dd24872",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl08-61d32af4",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl08-8d5ca077",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl08-995d0290",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs01-68223506",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs01-84f22c70",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs01-ae1014d5",
   "to": "k-qtype-continuity",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs03-1e8e0958",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs03-da04a736",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs03-e5f3853e",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs04-62df076f",
   "to": "k-qtype-derivative-calc",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs04-ae55f9f2",
   "to": "k-qtype-derivative-calc",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs04-f4be1c01",
   "to": "k-qtype-derivative-calc",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs05-280fe907",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs05-5f2789ee",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs05-9faa6156",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs05-a83faa2b",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs05-bd064159",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs06-3529ef43",
   "to": "k-qtype-mean-value",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs06-e44cd9b8",
   "to": "k-qtype-taylor",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs06-ffd5fdba",
   "to": "k-qtype-mean-value",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs07-3bbe3adb",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs10-1552852b",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs10-665b0f35",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs10-8d428417",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs10-dcf03d35",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs10-f503d7c9",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs11-e6852d3f",
   "to": "k-qtype-inequality",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs12-11fe7a90",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs12-15ad5a8e",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs12-3a0cbd05",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs12-5bf13f3f",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs12-c2e3f77d",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs13-4e40ae1c",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs13-c9a591ee",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs13-fd9fd344",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs14-ce0e428e",
   "to": "k-qtype-double-integral",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs14-f5047b8f",
   "to": "k-qtype-double-integral",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs15-0b4049ad",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs15-2c077327",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs15-9db3d01f",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-081dfe81",
   "to": "k-qtype-power-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-081dfe81",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-4e28ab68",
   "to": "k-qtype-power-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-4e28ab68",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-54ad30c2",
   "to": "k-qtype-power-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-54ad30c2",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-6eac22ec",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-e775729a",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-fbf38cf0",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs16-ffe82e9a",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs17-433ee2e3",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs17-45b2bc8e",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs17-78fcdda3",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs17-a4f22735",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs17-b9ae1893",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-gs17-f1526931",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd01-3efe03d4",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd01-59a218de",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd01-85e53c7c",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd01-dccf53ec",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd01-e2145c8a",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd02-1475924e",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd02-1704302c",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd02-7feea929",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd02-90c0bfd3",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd02-bbee40d1",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd02-cd90afbe",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd03-309de2fa",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd03-392f927b",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd03-3b4a5e4b",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd03-6354c93d",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd04-1a2d92d4",
   "to": "k-qtype-linear-system",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd04-83e4c141",
   "to": "k-qtype-linear-system",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd05-24433f22",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd05-50b820a4",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd05-8c8e2242",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd05-df6b1488",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd06-47513a51",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd06-8807192e",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd06-8d1823b6",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd06-9c7cd04c",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-concept-xd06-c8e7e1a1",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-method-gailv-34739293",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-method-gailv-dd1f86d4",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-0d95d7b0",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-13e4550c",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-17c81be0",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-17c81be0",
   "to": "k-qtype-mean-value",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-1c7d8dbc",
   "to": "k-qtype-double-integral",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-89325102",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-95a407b4",
   "to": "k-qtype-continuity",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-95a407b4",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-999bd780",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-baedfa75",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-d1ebe7c7",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-d9ddb534",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-e71e94f4",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-method-gaoshu-e71e94f4",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-55bdad23",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-582fe9b2",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-5ebb5383",
   "to": "k-qtype-linear-system",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-8f383651",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-9a998c80",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-badb323a",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-c7410e7e",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-dab23216",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-method-xiandai-db6625b4",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl01-4f390b66",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl01-75d00867",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl01-cd851af9",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl01-fadc1523",
   "to": "k-qtype-event-prob",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl02-202e4707",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl02-7439a7ef",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl02-812e678f",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl02-90555bf0",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl02-f055bab5",
   "to": "k-qtype-rv-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl03-23ff5231",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl03-98bb55bb",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl03-cefa061d",
   "to": "k-qtype-joint-distribution",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl04-1909d3dc",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl04-1f912150",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl04-5a5eafcc",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl04-611b9c98",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl04-b9e2f4c7",
   "to": "k-qtype-numeric-expect",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl05-297aaffc",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl05-30191c9c",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl05-6d031588",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl05-8193ef57",
   "to": "k-qtype-limit-theorem",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl06-0eb68061",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl06-661347f9",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl06-8695f79c",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl06-c692addb",
   "to": "k-qtype-sampling",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl07-100889f3",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl07-2441f541",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl07-5cfd04db",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl07-6902c608",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl07-7accefb2",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl07-7fc9e470",
   "to": "k-qtype-estimation",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl08-5761de02",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl08-5c2e0fe0",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl08-bf692ec3",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl08-d09879fc",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gl08-f9383ed7",
   "to": "k-qtype-hypothesis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-1ada545b",
   "to": "k-qtype-continuity",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-1ada545b",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-26023002",
   "to": "k-qtype-continuity",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-41201d65",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-75cd414f",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-7de4dd31",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-893491db",
   "to": "k-qtype-continuity",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs01-893491db",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs02-078a80e1",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs02-6d236cf3",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs02-d0d328cd",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs02-f2984461",
   "to": "k-qtype-limit-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs03-1b2773da",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs03-7bffcda5",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs03-a7fc1aca",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs03-d1e8b591",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs03-d398141f",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs04-27278fd0",
   "to": "k-qtype-derivative-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs04-84a3062f",
   "to": "k-qtype-derivative-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs04-b09a7cdd",
   "to": "k-qtype-derivative-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs05-25da7f5c",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs05-2a278aa4",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs05-72aa34e1",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs05-7b886b9a",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs05-dc1a8877",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-3c27fcde",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-3c27fcde",
   "to": "k-qtype-mean-value",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-528a81d0",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-528a81d0",
   "to": "k-qtype-mean-value",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-54566b06",
   "to": "k-qtype-taylor",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-5c4642d3",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-5c4642d3",
   "to": "k-qtype-mean-value",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-9972b77f",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-9972b77f",
   "to": "k-qtype-mean-value",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs06-c07efaed",
   "to": "k-qtype-taylor",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs07-7a62d90b",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs07-a609ef7d",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs07-bcb56d3c",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs07-d36d0cb5",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs07-d36d0cb5",
   "to": "k-qtype-shape-analysis",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs07-ea3af184",
   "to": "k-qtype-derivative-concept",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs10-4b5b433c",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs10-4cc62626",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs10-665c3757",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs10-68751f85",
   "to": "k-qtype-integral-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs10-68751f85",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs10-846110b5",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs10-fbce87c0",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs11-71692eee",
   "to": "k-qtype-inequality",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs11-b5821b83",
   "to": "k-qtype-inequality",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs11-b5821b83",
   "to": "k-qtype-integral-calc",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs11-b82740fa",
   "to": "k-qtype-inequality",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs12-0942a4de",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs12-527ac0f3",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs12-7fa896fb",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs12-a9796483",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs12-c2e3f77d",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs12-d4add7df",
   "to": "k-qtype-integral-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs12-d4add7df",
   "to": "k-qtype-integral-physics",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs13-031d7701",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs13-4d0429e8",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs13-65d65713",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs13-698b4da3",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs13-db19cdd9",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs13-f27b8ab5",
   "to": "k-qtype-partial",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs14-ba94dc6b",
   "to": "k-qtype-double-integral",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs14-cc91a3e6",
   "to": "k-qtype-double-integral",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs14-eaf1f8d1",
   "to": "k-qtype-double-integral",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs15-4e6a9dd7",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs15-5d05bc28",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs15-80c85db6",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs15-98ce9551",
   "to": "k-qtype-ode",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-00ac2b1a",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-4b0bdbe3",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-5708899e",
   "to": "k-qtype-power-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-5708899e",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-ab26d5e3",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-c2a2f418",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-c51bf77f",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-c5d7db97",
   "to": "k-qtype-power-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-d8892834",
   "to": "k-qtype-power-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs16-d8892834",
   "to": "k-qtype-series",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs17-1e029763",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs17-2908f2a3",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs17-48d5e505",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs17-7dc67a57",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs17-92679042",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-gs17-d9900999",
   "to": "k-qtype-space-geometry",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-168189b4",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-1dd73182",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-2abf4178",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-34873036",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-3f1d9828",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-5d6ba247",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-d154c3ed",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd01-e972f87d",
   "to": "k-qtype-determinant",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd02-055430a9",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd02-2dabaec0",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd02-406e9b6e",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd02-4c44dc73",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd02-66ed12d4",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd02-cecba71d",
   "to": "k-qtype-matrix",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd03-10f5207f",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd03-2344aeb2",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd03-4fc175cc",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd03-5f566805",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd03-681fcd9b",
   "to": "k-qtype-vector-rank",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd04-b6b2f936",
   "to": "k-qtype-linear-system",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd04-c323c210",
   "to": "k-qtype-linear-system",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd04-e4920921",
   "to": "k-qtype-linear-system",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd04-f493d19d",
   "to": "k-qtype-linear-system",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd05-8a445a31",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd05-8e27785c",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd05-9a8cb7fc",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd05-a1fb4f5a",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd05-b4819435",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd05-d377405e",
   "to": "k-qtype-eigen",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd06-40765193",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd06-5d2c1011",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd06-7b2f11c0",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd06-8a65a197",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-theorem-xd06-97e9485e",
   "to": "k-qtype-quadratic",
   "rel": "applies"
  },
  {
   "from": "k-concept-gl02-392bdff0",
   "to": "k-concept-gs08-5429f707",
   "rel": "cross",
   "note": "概率密度在区间上积分得概率"
  },
  {
   "from": "k-concept-gl04-ee7f641d",
   "to": "k-concept-gs16-ffe82e9a",
   "rel": "cross",
   "note": "离散型期望定义为级数求和"
  },
  {
   "from": "k-concept-gl05-b4ddff83",
   "to": "k-concept-gs02-1b6d40b0",
   "rel": "cross",
   "note": "依概率收敛是数列收敛概念的推广"
  },
  {
   "from": "k-concept-gl07-f1b705b4",
   "to": "k-concept-gs03-9e88bde6",
   "rel": "cross",
   "note": "最大似然估计用求导求极值"
  },
  {
   "from": "k-concept-gs13-fd9fd344",
   "to": "k-concept-xd03-9a7acb9d",
   "rel": "cross",
   "note": "方向导数等于梯度与方向向量的内积"
  },
  {
   "from": "k-concept-xd01-59a218de",
   "to": "k-concept-gs14-b726028a",
   "rel": "cross",
   "note": "二重/三重积分一般变量替换的雅可比式是行列式"
  },
  {
   "from": "k-concept-xd03-392f927b",
   "to": "k-concept-gs17-78fcdda3",
   "rel": "cross",
   "note": "向量的线性运算与内积在线代与空间解析几何中一致"
  },
  {
   "from": "k-concept-xd06-47513a51",
   "to": "k-concept-gs17-a4f22735",
   "rel": "cross",
   "note": "正交变换基于内积与正交概念"
  }
 ]
}
