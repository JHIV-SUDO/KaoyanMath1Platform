#!/usr/bin/env node
/**
 * absorb-repo-notes.mjs —— 把三个知识笔记仓库转换为平台结构化笔记数据。
 *
 * 数据源（只读，不修改）：
 *   R01: kaoyanMATH                —— 4 篇考研数学讲义笔记（Markdown）
 *   R05: gaoshu-zhangyu-30         —— MkDocs 站点（docs/ 下有效内容）
 *   R08: Didnelpsun-Math           —— LaTeX 知识/习题笔记（.tex）
 *
 * 输出：
 *   data/seed/repo-notes.js          （ESM，export default 数组）
 *   data/seed/repo-notes-manifest.json
 *
 * 用法：node tools/absorb-repo-notes.mjs [--src <KaoyanMath1-GitHubSources 目录>]
 * 零第三方依赖，可重复运行（幂等，输出完全覆盖）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');

/* ---------------------------- 命令行参数 ---------------------------- */
function parseArgs(argv) {
  const args = { src: 'D:/ClaudeWorkspace/Downloads/KaoyanMath1-GitHubSources' };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--src') args.src = argv[++i];
  }
  return args;
}
const ARGS = parseArgs(process.argv);

const REPOS = {
  R01: path.join(ARGS.src, 'kaoyanMATH'),
  R05: path.join(ARGS.src, 'gaoshu-zhangyu-30'),
  R08: path.join(ARGS.src, 'Didnelpsun-Math'),
};

// Small, replayable corrections for source errors found during acceptance.
// Math review in this pass checked only these claims and nearby derivations:
// Didnelpsun-Math/advanced-math/exercise/1-limit/limit.tex: 72-145, 396-415;
// advanced-math/exercise/3-differentiation-of-functions-of-single-variable/
// differentiation-of-functions-of-single-variable.tex: 33-130, 130-160,
// 305-375, 395-430. This is a scoped review, not a validation of all repo notes.
const NOTE_REVISIONS = {
  'rnote-r08-advanced-math-exercise-1-limit-limit-s1-5': `夹逼准则可用于证明不等式或计算极限，关键是建立有效的上下界。

例题：求 $\\lim_{x\\to0}x\\left[\\dfrac{10}{x}\\right]$，其中 $[\\cdot]$ 为取整符号。

由 $u-1<[u]\\le u$ 得 $\\dfrac{10}{x}-1<[\\dfrac{10}{x}]\\le\\dfrac{10}{x}$。当 $x>0$ 时乘以 $x$ 不改变不等号方向，故 $10-x<x[\\dfrac{10}{x}]\\le10$，从而右极限为 $10$。

当 $x<0$ 时乘以 $x$ 必须反向不等号，得到 $10-x>x[\\dfrac{10}{x}]\\ge10$，即 $10\\le x[\\dfrac{10}{x}]<10-x$，从而左极限也为 $10$。因此双侧极限为 $10$。源文将第二种情形误写为 $x>0$，并把“乘以 $x$”误写成“乘以10”。`,
  'rnote-r08-advanced-math-exercise-1-limit-limit-s1-6': `拉格朗日中值定理不能用于任意函数。若 $f$ 在闭区间 $[a,b]$ 上连续、在开区间 $(a,b)$ 上可导，且 $a\\ne b$，则存在严格位于 $a,b$ 之间的 $\\xi$，使 $f(a)-f(b)=f'(\\xi)(a-b)$（交换端点时同样成立）。例如 $|x|$ 在 $[-1,1]$ 上连续但在区间内部的 $0$ 处不可导，不能对整个区间套用该定理。

对本条例题，$f(x)=\\arctan x$ 在相关区间可导。取 $a=2/n$、$b=2/(n+1)$，有 $f(a)-f(b)=f'(\\xi)(a-b)$，其中 $2/(n+1)<\\xi<2/n$。由于 $f'(\\xi)=1/(1+\\xi^2)\\to1$，且 $n^2(a-b)=2n/(n+1)\\to2$，原极限为 $2$。`,
  'rnote-r08-advanced-math-exercise-1-limit-limit-s1-8': `泰勒公式可用于满足相应可导性或余项条件的函数展开；复合函数并非不能展开，可以先求复合函数的导数，或代入内层展开并核对余项。它也不局限于 $0-0$ 型，是否适用取决于问题和展开点。

例题：求 $\\lim_{x\\to0}\\dfrac{\\arcsin x-\\arctan x}{\\sin x-\\tan x}$。由麦克劳林展开，$\\arcsin x-\\arctan x=\\dfrac12x^3+o(x^3)$，$\\sin x-\\tan x=-\\dfrac12x^3+o(x^3)$，所以极限为 $-1$。源文分子末行误写为 $\\dfrac{1}{x}x^3+o(x^3)$，正确系数应为 $\\dfrac12$。`,
  'rnote-r08-advanced-math-exercise-1-limit-limit-s1-7': `洛必达法则不是“降低幂次”的通用规则，也不是高次极限必用的方法。它只适用于满足定理条件的未定式：在所考察的去心邻域内，分子、分母可导，且分母导数不为零；商为 $0/0$ 或 $\\infty/\\infty$ 型；并且导数之比的极限存在（有限值或正负无穷）。满足条件时，自变量可以趋于有限点（包括非零点）或趋于正负无穷，按相应单侧或双侧极限判断。

例如 $\\lim_{x\\to1}\\dfrac{\\ln x}{x-1}$ 是 $0/0$ 型，导数之比为 $1/x$，故极限为 $1$。

原资料所举 $\\lim_{x\\to1}\\dfrac{x^2-x+1}{(x-1)^2}$ 的分子趋于 $1$，不是未定式，不能直接使用洛必达；其极限为 $+\\infty$。选择洛必达前应先核对未定式与可导等条件；高次本身不构成使用理由。`,
  'rnote-r08-advanced-math-exercise-1-limit-limit-s2-5': `本条源 TeX 的例题题干与后续分解不一致，以下先按源文件明示的五次分母保留题干并更正结论：

例题：求 $\\lim_{x\\to4}\\dfrac{x^2-6x+8}{x^5-5x+4}$。

分子在 $x=4$ 时为 $0$，分母为 $4^5-5\\cdot4+4=1008\\ne0$。由多项式函数连续，极限为 $0$。源文件后续把分母当作 $x^2-5x+4=(x-1)(x-4)$，这与题干五次多项式不同；该分解和 $2/3$ 结论不能用于当前题干。若原题本意确为二次分母，须回到原始题源确认后另行更正题干。

同一源节的另一个例题写作 $\\lim_{x\\to-\\infty}[\\sqrt{4x^2+x}\\ln(2+1/x)+2\\ln(2x)]$，其中 $\\ln(2x)$ 在负的 $x$ 上没有实数定义，且后续推导将其改写成含 $2x\\ln2$ 的项，二者并不等价。故按现存源题无法得到其实数极限，不能沿用源文件的推导或答案；须核对原始题页后再恢复此例。`,
  'rnote-r08-advanced-math-exercise-1-limit-limit-s3-1': `常见未定式包括 $0/0$、$\\infty/\\infty$、$0\\cdot\\infty$、$\\infty-\\infty$、$1^\\infty$、$0^0$、$\\infty^0$。它们提示需要进一步变形，不是可直接运算的数值等式，也不意味着每道题都必须化成商。

若 $u\\to0$、$v\\to\\pm\\infty$，且在去心邻域内 $v\\ne0$，可按恒等式 $uv=u/(1/v)$ 改写为 $0/0$ 型；若 $u\\ne0$，也可用 $uv=v/(1/u)$ 改写为 $\\infty/\\infty$ 型。这些是邻域内的代数变形，不是 $0/0=\\infty/\\infty$ 之类的数值等式。$\\infty-\\infty$ 可在定义域和分母条件允许时通分、因式分解或有理化。

对幂指形式，只有底数 $u>0$ 时才可在实数范围写成 $u^v=e^{v\\ln u}$。再用 $\\ln u\\sim u-1$ 时，须确认 $u\\to1$ 且相应乘积 $v(u-1)$ 的极限确实存在或可判定；不能把 $\\lim v\\ln u$ 无条件替换为 $\\lim v(u-1)$。`,
  'rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s1-1': `连续性不能推出函数在该点的去心邻域内可导。若要使用结论 $f'(x_0)=\\lim_{x\\to x_0}f'(x)$，需另行保证 $f$ 在包含 $x_0$ 的去心邻域内可导、在 $x_0$ 连续，并且导数极限存在且有限；由中值定理可推出 $f$ 在 $x_0$ 可导且导数等于该极限。

本条 $f(x)=\\ln(1-x)/x$ 的例子可在 $x_0=0$ 使用这一结论，因为显式表达式在 $0$ 的去心邻域（并满足 $x<1$）可导，且前文已确定连续延拓值 $f(0)=-1$。但“在 $0$ 连续”本身不足以推出邻域可导或导数极限存在。`,
  'rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s1-2': `例题：设 $f(x)=x^2$（$x\\le0$），$f(x)=x^\\alpha\\sin(1/x)$（$x>0$）。求 $f'$ 在 $0$ 连续时 $\\alpha$ 的条件。

右侧对 $x>0$ 求导得 $f'(x)=x^{\\alpha-2}(\\alpha x\\sin(1/x)-\\cos(1/x))$，而 $f'(0)=0$（当 $\\alpha>1$ 时由导数定义可得）。括号中的 $\\alpha x\\sin(1/x)$ 趋于 $0$，但 $-\\cos(1/x)$ 有界振荡，并非常数。若 $\\alpha>2$，括号有界且 $x^{\\alpha-2}\\to0$，故右导数趋于 $0$。若 $\\alpha=2$，取 $1/x=2k\\pi$ 与 $(2k+1)\\pi$ 两列，导数分别趋于 $-1$ 与 $1$；若 $\\alpha<2$，同样两列给出无界的相反值。因此 $f'$ 在 $0$ 连续当且仅当 $\\alpha>2$。`,
  'rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-1': `对 $y=x^{\\sin x}$（$x>0$）取对数得 $\\ln y=\\sin x\\ln x$，所以

$\\dfrac{y'}{y}=\\cos x\\ln x+\\dfrac{\\sin x}{x}$，即 $y'=x^{\\sin x}(\\cos x\\ln x+\\dfrac{\\sin x}{x})$。

等价地，写成 $x^{\\sin x}=e^{\\sin x\\ln x}$ 后求导，结果相同。源文漏写了 $\\cos x$ 后乘的 $x$ 因子。`,
  'rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3': `高阶导数基本公式（在各函数定义域内）：

- $(e^x)^{(n)}=e^x$。
- $(a^x)^{(n)}=a^x(\\ln a)^n$（$a>0$）。
- $(\\ln x)^{(n)}=(-1)^{n-1}(n-1)!x^{-n}$（$x>0$）。
- $\\left(\\dfrac{1}{1+x}\\right)^{(n)}=(-1)^n\\dfrac{n!}{(1+x)^{n+1}}$。
- $\\left(\\dfrac{1}{1-x}\\right)^{(n)}=\\dfrac{n!}{(1-x)^{n+1}}$。
- $(\\sin x)^{(n)}=\\sin(x+\\dfrac{n\\pi}{2})$。
- $(\\cos x)^{(n)}=\\cos(x+\\dfrac{n\\pi}{2})$。
- $\\{f(ax+b)\\}^{(n)}=a^nf^{(n)}(ax+b)$（在复合函数相应阶导数存在处）。

源文两个倒数函数公式的分母幂次少了 $1$。`,
  'rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3-3': `若 $u,v$ 在某区间内具有所需的 $n$ 阶导数，则在该区间内逐点有莱布尼茨公式

$(uv)^{(n)}(x)=\\sum_{k=0}^{n}\\binom{n}{k}u^{(k)}(x)v^{(n-k)}(x)$。

该公式适用于求函数 $x$ 上的 $n$ 阶导数；要求某点 $x_0$ 的值时，再代入 $x=x_0$。泰勒展开中的系数是 $f^{(n)}(x_0)/n!$，但这不意味着莱布尼茨公式只能用于单点求值。`,
  'rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-4': `设参数方程 $x=x(t),y=y(t)$。若 $x$ 在 $t_0$ 的某邻域内连续可导，且 $x'(t_0)\\ne0$，则缩小邻域后 $x'(t)$ 不为零，$x(t)$ 局部可逆。若 $y$ 在 $t_0$ 可导，便可在对应点用链式法则得到

$\\dfrac{dy}{dx}\\bigg|_{t=t_0}=\\dfrac{y'(t_0)}{x'(t_0)}=\\dfrac{dy/dt}{dx/dt}$。

更一般地，若 $x,y$ 在该邻域内均为 $n$ 次连续可导，$n\\ge1$，且 $x'(t)\\ne0$，则

$\\dfrac{d^n y}{dx^n}=\\left(\\dfrac{1}{x'(t)}\\dfrac{d}{dt}\\right)^n y(t)$，

其中右侧算子按复合算子迭代作用于 $y(t)$。因此参数商公式需检查邻域可逆性和分母非零，单独知道 $x'(t_0)\\ne0$ 而没有邻域正则条件不足以推出局部可逆。若 $x'(t_0)=0$，公式不能直接使用；例如 $x=t^2,y=t$ 在 $t=0$ 的参数商无定义，且曲线附近不能表示成单值的 $y(x)$。`,
};

const MAX_ENTRY_CHARS = 4000;      // 单条正文长度上限（超出按段落拆分）
const MIN_ENTRY_CHARS = 30;        // 低于该长度且无数学公式的条目丢弃
const VALID_LESSONS = new Set([
  ...Array.from({ length: 18 }, (_, i) => 'gs' + String(i + 1).padStart(2, '0')),
  ...Array.from({ length: 6 }, (_, i) => 'xd' + String(i + 1).padStart(2, '0')),
  ...Array.from({ length: 8 }, (_, i) => 'gl' + String(i + 1).padStart(2, '0')),
]);

/* ---------------------- 主题词 → 平台讲 映射规则 ---------------------- *
 * 顺序即优先级：越具体（多字词/专名）越靠前，泛化词靠后。
 * topic 用于条目主题词；lessons 用于 relatedLessons 映射。            */
const TOPIC_RULES = [
  // —— 多元积分学（最具体优先）——
  { re: /斯托克斯/, topic: '斯托克斯公式', lessons: ['gs18'] },
  { re: /高斯公式/, topic: '高斯公式', lessons: ['gs18'] },
  { re: /格林公式/, topic: '格林公式', lessons: ['gs18'] },
  { re: /曲面积分/, topic: '曲面积分', lessons: ['gs18'] },
  { re: /曲线积分/, topic: '曲线积分', lessons: ['gs18'] },
  { re: /三重积分/, topic: '三重积分', lessons: ['gs18'] },
  { re: /散度|旋度/, topic: '散度与旋度', lessons: ['gs18'] },
  { re: /二重积分|积分次序/, topic: '二重积分', lessons: ['gs14'] },
  // —— 级数 ——
  { re: /傅里叶/, topic: '傅里叶级数', lessons: ['gs16'] },
  { re: /幂级数|收敛半径|收敛域/, topic: '幂级数', lessons: ['gs16'] },
  { re: /正项级数|交错级数|数项级数|常数项级数|级数收敛|敛散/, topic: '常数项级数', lessons: ['gs16'] },
  { re: /无穷级数|级数/, topic: '无穷级数', lessons: ['gs16'] },
  // —— 微分方程 ——
  { re: /一阶线性|可分离变量|齐次方程|伯努利方程|全微分方程|二阶常系数|常系数线性|差分方程|微分方程|特征方程/, topic: '微分方程', lessons: ['gs15'] },
  // —— 多元微分 ——
  { re: /方向导数|梯度|偏导数|多元函数|偏导|二元函数|全微分|条件极值|拉格朗日乘数|切平面|多元微分/, topic: '多元函数微分学', lessons: ['gs13'] },
  // —— 一元积分应用 ——
  { re: /旋转体|旋转曲面|弧长|弧微分|平面图形的面积|截面面积/, topic: '定积分几何应用', lessons: ['gs10'] },
  { re: /积分等式|积分不等式/, topic: '积分等式与积分不等式', lessons: ['gs11'] },
  { re: /做功|抽水|静压力|闸门|引力|质心|形心|转动惯量|均方根|平均值|牛顿第二定律/, topic: '定积分物理应用', lessons: ['gs12'] },
  // —— 一元积分概念与计算 ——
  { re: /基本积分|点火公式|华里士|瓦里斯|伽马公式/, topic: '基本积分公式与华里士公式', lessons: ['gs09'] },
  { re: /换元积分|分部积分|不定积分|有理函数|凑微分|积分法|积分的计算/, topic: '一元积分的计算', lessons: ['gs09'] },
  { re: /定积分|可积|牛顿.{0,2}莱布尼茨|变限积分|变上限积分|反常积分|广义积分|积分中值|积分的性质/, topic: '一元积分的概念与性质', lessons: ['gs08'] },
  // —— 中值定理 ——
  { re: /中值定理|罗尔|拉格朗日中值|柯西中值|泰勒中值|费马引理|微分等式|微分不等式/, topic: '中值定理', lessons: ['gs06'] },
  { re: /零点定理|介值定理/, topic: '闭区间连续函数性质', lessons: ['gs01'] },
  // —— 一元微分应用 ——
  { re: /曲率|渐近线|凹凸|拐点|函数图形|描绘/, topic: '一元微分几何应用', lessons: ['gs05'] },
  { re: /相关变化率|变化率|边际|弹性|最值问题|优化问题/, topic: '一元微分物理与优化应用', lessons: ['gs07'] },
  { re: /极值|最值|单调性/, topic: '一元微分几何应用', lessons: ['gs05'] },
  // —— 求导计算 ——
  { re: /复合函数求导|隐函数求导|参数方程求导|对数求导|反函数求导|高阶导数|求导法则|求导|莱布尼茨公式|n阶导/, topic: '一元函数微分学的计算', lessons: ['gs04'] },
  // —— 导数与微分概念 ——
  { re: /导数定义|可导|可微|导数与微分|微分的定义|切线/, topic: '一元函数微分学的概念', lessons: ['gs03'] },
  // —— 极限 ——
  { re: /洛必达|未定式/, topic: '洛必达法则', lessons: ['gs01'] },
  { re: /等价无穷小|无穷小|无穷大/, topic: '等价无穷小', lessons: ['gs01'] },
  { re: /泰勒公式|泰勒展开|麦克劳林|佩亚诺/, topic: '泰勒公式', lessons: ['gs01'] },
  { re: /夹逼|单调有界|两个重要极限|重要极限|收敛准则/, topic: '极限存在准则', lessons: ['gs01', 'gs02'] },
  { re: /数列极限|数列的极限|递推|数列/, topic: '数列极限', lessons: ['gs02'] },
  { re: /极限|连续|间断|邻域/, topic: '函数极限与连续', lessons: ['gs01'] },
  { re: /函数|映射|反函数|复合函数|初等函数|三角函数|反三角/, topic: '函数概念', lessons: ['gs01'] },
  // —— 向量代数与空间解析几何 ——
  { re: /数量积|向量积|混合积|向量运算|向量的模|单位向量|方向余弦|方向角|向量及其|向量的线性运算/, topic: '向量代数', lessons: ['gs17'] },
  { re: /平面方程|直线方程|曲面方程|空间曲面|柱面|二次曲面|球面|空间解析|位置关系|点到平面|点到直线/, topic: '空间解析几何', lessons: ['gs17'] },
  // —— 线性代数 ——
  { re: /二次型|正定|合同变换|合同|标准形|规范形|惯性定理/, topic: '二次型', lessons: ['xd06'] },
  { re: /特征值|特征向量|相似对角化|相似|若尔当|施密特|正交矩阵|正交化|正交/, topic: '特征值与特征向量', lessons: ['xd05'] },
  { re: /线性方程组|齐次线性方程|非齐次线性|基础解系|增广矩阵|解的结构/, topic: '线性方程组', lessons: ['xd04'] },
  { re: /矩阵的秩/, topic: '矩阵的秩', lessons: ['xd02'] },
  { re: /向量组|线性相关|线性无关|极大无关|线性表示|极大线性无关|基变换|过渡矩阵|维数/, topic: '向量组', lessons: ['xd03'] },
  { re: /逆矩阵|伴随矩阵|初等变换|初等矩阵|分块矩阵|矩阵乘法|转置|对称矩阵|可逆|矩阵的运算/, topic: '矩阵运算', lessons: ['xd02'] },
  { re: /矩阵|伴随/, topic: '矩阵', lessons: ['xd02'] },
  { re: /行列式|克拉默|克莱姆|余子式|代数余子式|范德蒙德|爪形|三对角/, topic: '行列式', lessons: ['xd01'] },
  { re: /排列|逆序/, topic: '排列与逆序数', lessons: ['xd01'] },
  { re: /基坐标|基底/, topic: '向量组的基与坐标', lessons: ['xd03'] },
  { re: /解的判定/, topic: '线性方程组解的判定', lessons: ['xd04'] },
  // 泛化“向量”兜底（向量组/特征向量等已被上面更早的规则截获）
  { re: /向量/, topic: '向量代数', lessons: ['gs17'] },
  // —— 函数图像与初等基础（perprepare）——
  { re: /直角坐标系图像|极坐标系图像|极直互化|图像变换|描点法|坐标轴移动|平移变换|伸缩变换|指数运算法则|一元二次方程|运算关系/, topic: '函数图像与初等基础', lessons: ['gs01'] },
  // —— 概率统计 ——
  { re: /假设检验|显著性|两类错误|拒绝域|检验水平|U检验|T检验/, topic: '假设检验', lessons: ['gl08'] },
  { re: /区间估计|置信区间|置信度/, topic: '区间估计', lessons: ['gl07'] },
  { re: /点估计|矩估计|最大似然|极大似然|估计量|无偏性|有效性|一致性/, topic: '参数估计', lessons: ['gl07'] },
  { re: /样本|统计量|抽样分布|卡方|χ\s*2|t\s*分布|F\s*分布|分位数|正态总体|自由度|总体/, topic: '数理统计基本概念', lessons: ['gl06'] },
  { re: /大数定律|中心极限|依概率收敛|切比雪夫/, topic: '大数定律与中心极限定理', lessons: ['gl05'] },
  { re: /协方差|相关系数|期望|方差|数字特征|原点矩|中心矩/, topic: '随机变量的数字特征', lessons: ['gl04'] },
  { re: /联合分布|边缘分布|条件分布|二维随机|相互独立|两个随机变量|卷积|二维正态|联合密度/, topic: '多维随机变量及其分布', lessons: ['gl03'] },
  { re: /分布函数|密度函数|分布律|概率密度|二项分布|泊松分布|指数分布|均匀分布|正态分布|一维随机|随机变量/, topic: '一维随机变量及其分布', lessons: ['gl02'] },
  { re: /全概率|贝叶斯|条件概率|古典概型|几何概型|伯努利|事件的关系|加法公式|随机事件|对立事件|互斥|独立|随机试验|捆绑法|插空法|插板法/, topic: '随机事件与概率', lessons: ['gl01'] },
  { re: /概率|排列组合/, topic: '随机事件与概率', lessons: ['gl01'] },
];

/* ---------------------------- 工具函数 ---------------------------- */

function readText(file) {
  let s = fs.readFileSync(file, 'utf8');
  if (s.charCodeAt(0) === 0xfeff) s = s.slice(1); // 去 BOM
  return s.replace(/\r\n?/g, '\n');
}

function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36).padStart(7, '0').slice(0, 7);
}

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/** 生成文件级 slug：保留 ASCII 字母数字，中文剔除；太短则补 hash。 */
function slugForRelPath(relPath) {
  const base = relPath.replace(/\.[^.]+$/, '');
  let s = base
    .replace(/[^A-Za-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
  s = s.replace(/-md$/, '').replace(/-$/, '');
  if (s.length < 2) s = 'f-' + fnv1a(relPath);
  return s;
}

/** 读平衡大括号组：s[i] 应为 '{'，返回 [content, nextIndex]。 */
function readGroup(s, i) {
  if (s[i] !== '{') return [null, i];
  let depth = 0, start = i + 1;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (c === '\\') { j++; continue; }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return [s.slice(start, j), j + 1];
    }
  }
  return [null, i]; // 不平衡
}

/* ------------------------ TeX 宏收集与展开 ------------------------ */

function collectMacros(src) {
  const macros = new Map(); // name -> { nargs, body }
  const re = /\\(?:newcommand|renewcommand)\s*\*?\s*/g;
  let m;
  while ((m = re.exec(src))) {
    let i = m.index + m[0].length;
    let name, nargs = 0, body;
    if (src[i] === '{') {
      const [g, ni] = readGroup(src, i);
      if (!g) { re.lastIndex = i; continue; }
      name = g.replace(/\\/, '').trim(); i = ni;
    } else if (src[i] === '\\') {
      const nm = /^\\([a-zA-Z]+)/.exec(src.slice(i));
      if (!nm) continue;
      name = nm[1]; i += nm[0].length;
    } else continue;
    const opt = /^\s*\[(\d)\]/.exec(src.slice(i));
    if (opt) { nargs = parseInt(opt[1], 10); i += opt[0].length; }
    const opt2 = /^\s*\[[^\]\n]*\]/.exec(src.slice(i));
    if (opt2 && nargs > 0) i += opt2[0].length;
    if (src[i] === '{') {
      const [g, ni] = readGroup(src, i);
      if (!g) { re.lastIndex = i; continue; }
      body = g; i = ni;
    } else continue;
    if (name && body != null && !macros.has(name)) macros.set(name, { nargs, body });
    re.lastIndex = i;
  }
  return macros;
}

const MACRO_DEF_RE = /\\(?:newcommand|renewcommand)\s*\*?\s*(?:\{\\[a-zA-Z]+\}|\\[a-zA-Z]+)\s*(?:\[\d\])?\s*(?:\[[^\]\n]*\])?\s*\{(?:[^{}]|\{[^{}]*\})*\}\s*?/g;

/** 展开 \name{a1}..{an}（平衡括号），迭代至不动点（上限 8 轮）。 */
function expandMacros(text, macros) {
  if (!macros.size) return text.replace(MACRO_DEF_RE, '');
  const names = [...macros.keys()].filter((n) => n !== 'baselinestretch' && n !== 'arraystretch').sort((a, b) => b.length - a.length);
  if (names.length) {
    const pattern = new RegExp('\\\\(' + names.map(escapeRe).join('|') + ')(?![a-zA-Z])', 'g');
    for (let round = 0; round < 8; round++) {
      let changed = false;
      text = text.replace(pattern, (full, name, offset) => {
        const def = macros.get(name);
        let i = offset + full.length;
        const args = [];
        for (let k = 0; k < def.nargs; k++) {
          while (i < text.length && /\s/.test(text[i])) i++;
          if (text[i] === '{') {
            const [g, ni] = readGroup(text, i);
            if (!g) return full;
            args.push(g); i = ni;
          } else if (i < text.length && /[^\s{}]/.test(text[i])) {
            args.push(text[i]); i += 1;
          } else return full;
        }
        changed = true;
        let body = def.body;
        for (let k = args.length; k >= 1; k--) body = body.split('#' + k).join(args[k - 1] ?? '');
        return body;
      });
      if (!changed) break;
    }
  }
  // 删除宏定义本身（可能跨行）
  text = text.replace(MACRO_DEF_RE, '');
  return text;
}

/** 去除 TeX 正文开头的版面命令（\maketitle/\tableofcontents/\newpage 等）。 */
function stripTexFrontMatter(body) {
  return body
    .replace(/\\(?:maketitle|tableofcontents|listoffigures|listoftables|newpage|clearpage|pagebreak)\b/g, '')
    .replace(/\\(?:pagestyle|thispagestyle|setcounter|setlength|geometry|definecolor|vspace|hspace)\s*\{[^{}]*\}\s*(?:\{[^{}]*\})?\s*(?:\{[^{}]*\})?/g, '')
    .replace(MACRO_DEF_RE, '');
}

/* --------------------- 数学感知的文本处理辅助 --------------------- */

const MATH_SPLIT_RE = /(\$\$[\s\S]*?\$\$|\$[^$\n]*\$)/g;

/** 把文本按数学/非数学分段：[{math:bool, text}]；re 可换多行感知版本。 */
function segmentMath(text, re = MATH_SPLIT_RE) {
  const segs = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last) segs.push({ math: false, text: text.slice(last, m.index) });
    segs.push({ math: true, text: m[0] });
    last = m.index + m[0].length;
  }
  if (last < text.length) segs.push({ math: false, text: text.slice(last) });
  return segs;
}

/** TeX 源的行内数学允许跨行（如多行 array），用多行感知的定界配对。 */
const MATH_SPLIT_TEX_RE = /(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/g;

/** 只在非数学段上执行替换。 */
function mapProse(text, fn) {
  return segmentMath(text, MATH_SPLIT_TEX_RE).map((seg) => (seg.math ? seg.text : fn(seg.text))).join('');
}

/** 数学段内的 KaTeX 兼容归一：只动书写格式，不改数学语义（TeX 与 Markdown 清洗共用）。 */
function mathCompat(text, re = MATH_SPLIT_TEX_RE) {
  return segmentMath(text, re).map((seg) => {
    if (!seg.math) return seg.text;
    let t = seg.text;
    t = t.replace(/\\(?:medskip|bigskip|smallskip|noindent|qedhere)\b/g, '');
    t = t.replace(/\\wideparen\s*/g, '\\overline ');
    t = t.replace(/\\time(?![a-zA-Z])/g, '\\times ');
    t = t.replace(/\\ +(?=(?:begin|end)\{)/g, '\\');
    t = t.replace(/\\,'/g, "'");
    // KaTeX 不支持 @{...} 列说明符（LaTeX 去边距写法）
    t = t.replace(/@\{[^{}]*\}/g, '');
    return t;
  }).join('');
}

/* --------------------------- TeX 清洗 --------------------------- */

/** 提取 \begin{env}...\end{env} 的 span（支持同名牌一层嵌套）。 */
function findEnvSpan(text, from, env) {
  const open = '\\begin{' + env + '}';
  const close = '\\end{' + env + '}';
  const start = text.indexOf(open, from);
  if (start < 0) return null;
  let depth = 1, i = start + open.length;
  while (i < text.length) {
    if (text.startsWith(open, i)) { depth++; i += open.length; continue; }
    if (text.startsWith(close, i)) {
      depth--;
      if (depth === 0) return { start, end: i + close.length, inner: text.slice(start + open.length, i) };
      i += close.length; continue;
    }
    i++;
  }
  return { start, end: text.length, inner: text.slice(start + open.length) };
}

/** tabular 环境内部 → 可读行（单元格用 ｜ 分隔）。 */
function convertTabular(inner) {
  let s = inner;
  s = s.replace(/^\s*\{[^}]*\}/, '');                 // 列格式参数
  s = s.replace(/\\(?:multirow|multicolumn)\s*\{\d+\}\s*\{\*?\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/gi, '$1');
  s = s.replace(/\\(?:multirow|multicolumn)\s*\{\d+\}\s*\{\*?\}/gi, '');
  s = s.replace(/\\(?:multirow|multicolumn)\s*\{\d+\}\s*\{([^{}]*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/gi, '$2');
  s = s.replace(/\\hline/g, '');
  s = s.replace(/\\cl[ai]ne\{[^}]*\}/g, '');
  s = s.replace(/&/g, ' ｜ ');
  s = s.replace(/\\\\\s*(\n)?/g, '\n');
  return s.split('\n').map((l) => l.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n');
}

/** TeX 正文 → 平台文本（数学保留为 $...$ / $$...$$）。 */
function texToText(body) {
  let s = body;
  // 0) 全局（含数学段内）：矩阵/表格装饰命令 → 保留内容或剔除
  s = s.replace(/\\(?:multirow|multicolumn)\s*\{\d+\}\s*\{\*?[^{}]*\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$1');
  s = s.replace(/\\(?:multirow|multicolumn)\s*\{\d+\}\s*\{\*?[^{}]*\}/g, '');
  s = s.replace(/\\(?:hline|cdashline|cline|hdashline|vline|arraybackslash)\b\s*(\{[^{}]*\})?/g, '');
  // pifont 圈号：\ding{172}..\ding{181} → ①..⑩，其余剔除
  s = s.replace(/\\ding\{(\d+)\}/g, (_m, n) => {
    const k = parseInt(n, 10);
    return k >= 172 && k <= 181 ? String.fromCharCode(0x2460 + (k - 172)) : '';
  });
  // 版面填充命令（数学段内外都可能残留）
  s = s.replace(/\\(?:hfill|vfill|hfil|vfil|hfilll)\b/g, ' ');
  // 颜色包装 → 保留内容（含数学段内）
  s = s.replace(/\\textcolor\s*\{[^{}]*\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$1');

  // 1) 数学定界符统一
  // 保护性归一（必须在显示数学转换之前）：\\[2mm] 是换行+间距，不是定界符 \[
  s = s.replace(/\\\\\s*\[[^\]\n]*\]/g, '\\\\');
  // 旋转盒内层 $...$ 拆解：外层已在数学内，内层美元符会破坏配对（如 $\ddots$ → \ddots）
  s = s.replace(/\\begin\{turn\}\s*\{[^{}]*\}\$([^$]+)\$\\end\{turn\}/g, '$1');
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, (_m, inner) => '$$\n' + inner.trim() + '\n$$');
  s = s.replace(/\\\(([\s\S]*?)\\\)/g, (_m, inner) => '$' + inner.trim() + '$');
  s = s.replace(/\\begin\{equation\}([\s\S]*?)\\end\{equation\}/g, (_m, inner) => '$$\n' + inner.trim() + '\n$$');
  s = s.replace(/\\begin\{align\}([\s\S]*?)\\end\{align\}/g, (_m, inner) => '$$\n\\begin{aligned}' + inner.trim() + '\\end{aligned}\n$$');
  s = s.replace(/\\\\\s*\[[^\]\n]*\]/g, '\\\\');

  // 2) 整块剔除图形类环境（内容为矢量绘图代码，无文本价值）
  for (const env of ['figure', 'tikzpicture', 'filecontents']) {
    let from = 0;
    for (;;) {
      const span = findEnvSpan(s, from, env);
      if (!span) break;
      s = s.slice(0, span.start) + (env === 'figure' ? '\n（图示略）\n' : '') + s.slice(span.end);
      from = span.start;
    }
  }

  // 3) tabular → 可读行
  for (;;) {
    const span = findEnvSpan(s, 0, 'tabular');
    if (!span) break;
    s = s.slice(0, span.start) + '\n' + convertTabular(span.inner) + '\n' + s.slice(span.end);
  }

  // 4) 包裹型环境：去标签留内容
  s = s.replace(/\\begin\{(?:center|minipage|multicols|turn|scope|vcenterbox)\}(?:\s*\{[^{}]*\}|\s*\[[^\]\n]*\])*/g, '');
  s = s.replace(/\\end\{(?:center|minipage|multicols|turn|scope|vcenterbox)\}/g, '');

  // 5) 列表环境
  s = s.replace(/\\begin\{(?:itemize|enumerate|description)\}(?:\s*\[[^\]\n]*\])?/g, '');
  s = s.replace(/\\end\{(?:itemize|enumerate|description)\}/g, '');
  s = mapProse(s, (t) => t.replace(/\\item\s*/g, '\n- '));

  // 6) 残余标题命令 → Markdown 标记（进入条目正文的下级标题）
  s = s.replace(/\\subsubsection\s*\{([^{}]*)\}/g, '\n#### $1\n');
  s = s.replace(/\\paragraph\s*\{([^{}]*)\}/g, '\n#### $1\n');
  s = s.replace(/\\section\s*\*?\s*\{([^{}]*)\}/g, '\n## $1\n');
  s = s.replace(/\\subsection\s*\{([^{}]*)\}/g, '\n### $1\n');

  // 7) 非数学段清理
  s = mapProse(s, (t) => {
    t = t.replace(/\\textcolor\s*\{[^{}]*\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$1');
    t = t.replace(/\\textcolor\s*\{[^{}]*\}\s*/g, '');
    t = t.replace(/\\(?:textbf|textit|texttt|textrm|textsf|textsl|textsc|textup|textmd|textnormal|underline|emph|mbox)\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, '$1');
    // 嵌套命令剥离后残留的“纯中文花括号” → 去括号（如 {定义：}）
    t = t.replace(/\{([一-鿿][^{}$\\]{0,40})\}/g, '$1');
    t = t.replace(/\\(?:footnote|label|ref|eqref|cite|vspace|hspace|setlength|pagestyle|thispagestyle|setcounter|colorbox)\s*\{[^{}]*\}\s*(?:\{[^{}]*\})?/g, '');
    t = t.replace(/\\(?:medskip|bigskip|smallskip|noindent|indent|centering|clearpage|newline|qedhere|arraystretch|baselinestretch|parindent|par)\b/g, '');
    // KaTeX 不支持的命令：弧长记号 \wideparen → \overline；笔误 \time → \times
    t = t.replace(/\\wideparen\s*/g, '\\overline ');
    t = t.replace(/\\time\b/g, '\\times ');
    t = t.replace(/\\doublebar\|?\s*/g, '\\| ');
    t = t.replace(/\\\\/g, '\n');
    t = t.replace(/\\quad|\\qquad|\\enspace|\\thinspace/g, ' ');
    t = t.replace(/\\~/g, ' ');
    t = t.replace(/\\%/g, '%');
    t = t.replace(/[ \t]+/g, ' ');
    t = t.replace(/[ \t]+$/gm, '');
    return t;
  });

  // 7b) 数学段清理：仅做 KaTeX 兼容归一，不改数学语义（TeX 与 Markdown 清洗共用）
  s = mathCompat(s);

  // 8) 收尾
  s = s.replace(/^%.*$/gm, '');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

/* --------------------------- Markdown 清洗 --------------------------- */

function cleanMarkdown(text) {
  let s = text;
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<div[^>]*>[\s\S]*?<\/div>/gi, '');
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, '');            // 图片
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');          // 链接 → 文本
  s = s.replace(/\[\[([^\]]+)\]\]/g, '$1');               // 双链 → 文本
  s = s.replace(/<[^>\n]{1,160}>/g, '');                  // 残余 HTML 标签
  s = s.replace(/&nbsp;/g, ' ');
  s = s.replace(/[ \t]+$/gm, '');
  s = mathCompat(s); // KaTeX 兼容归一（R01 笔记含 TeX 数学）
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

/* --------------------- 超长条目按段落再拆 --------------------- */

/** 依空行拆段（不切断 $$...$$ 数学块），再贪心合并到 max 以内。 */
function splitByParagraphs(text, max) {
  // 先把数学段替换为无换行占位符，保证拆分永不切断公式（跨行行内数学也受保护）
  const segs = [];
  const prot = text.replace(MATH_SPLIT_TEX_RE, (m) => { segs.push(m); return '\u0000S' + (segs.length - 1) + '\u0000'; });
  const restore = (chunk) => chunk.replace(/\u0000S(\d+)\u0000/g, (_, i) => segs[+i] ?? '');
  const lines = prot.split('\n');
  const blocks = [];
  let cur = [];
  for (const line of lines) {
    cur.push(line);
    if (line.trim() === '') { blocks.push(cur); cur = []; }
  }
  if (cur.length) blocks.push(cur);
  const chunks = [];
  let buf = '';
  for (const b of blocks) {
    const blk = restore(b.join('\n')).replace(/^\n+|\n+$/g, '');
    if (!blk) continue;
    if (blk.length > max) {
      if (buf) { chunks.push(buf); buf = ''; }
      chunks.push(...hardSplit(blk, max));
      continue;
    }
    if (buf && buf.length + 2 + blk.length > max) { chunks.push(buf); buf = blk; }
    else buf = buf ? buf + '\n\n' + blk : blk;
  }
  if (buf.trim()) chunks.push(buf);
  return chunks.filter((c) => c.trim());
}
function hardSplit(text, max) {
  const out = [];
  let rest = text;
  while (rest.length > max) {
    let cut = rest.lastIndexOf('\n', max);
    if (cut < max * 0.5) cut = rest.lastIndexOf('。', max);
    if (cut < max * 0.5) cut = max;
    out.push(rest.slice(0, cut + 1).trim());
    rest = rest.slice(cut + 1).trim();
  }
  if (rest) out.push(rest);
  return out;
}

/* ------------------------- 分类：kind / topic ------------------------- */

function detectKind(title, text, isExerciseFile) {
  const t = title || '';
  if (/例\s*[0-9一二三四五六七八九十]+|例题|典型例|习题/.test(t)) return '例题';
  if (/(定义|概念|邻域|的含义)/.test(t)) return '概念';
  if (/(定理|法则|公式|准则|性质|推论|判别)/.test(t)) return '定理';
  if (/(方法|计算|求解|步骤|技巧|解法|流程|套路|应用)/.test(t)) return '方法';
  if (/(总结|对比|易错|记忆|归纳)/.test(t)) return '总结';
  const head = text.slice(0, 600);
  const exCount = (head.match(/例题|例\s*[0-9一二三四五六七八九十]/g) || []).length;
  if (exCount >= 2 || (isExerciseFile && exCount >= 1)) return '例题';
  if (/(定义|^设|称|概念)/.test(head) && !/(定理|法则)/.test(head)) return '概念';
  if (/(定理|法则|准则|公式)/.test(head)) return '定理';
  if (/(方法|求解|计算|步骤)/.test(head)) return '方法';
  if (isExerciseFile) return '例题';
  return '总结';
}

function detectTopic(title, text) {
  // 先按标题匹配（标题是最强信号），再退回到标题+正文前 1200 字
  for (const pass of [(title || ''), (title || '') + ' ' + text.slice(0, 1200)]) {
    for (const rule of TOPIC_RULES) {
      if (rule.re.test(pass)) return { topic: rule.topic, lessons: rule.lessons.filter((l) => VALID_LESSONS.has(l)) };
    }
  }
  const fallback = (title || '').replace(/^[0-9一二三四五六七八九十]+[、.．]\s*/, '').trim().slice(0, 12);
  return { topic: fallback || '综合笔记', lessons: [] };
}

/* --------------------------- 条目装配 --------------------------- */

function makeEntries({ repo, relPath, subject, fileKey, sections, isExerciseFile, usedIds }) {
  const entries = [];
  for (const sec of sections) {
    const text = sec.text;
    if (!text || !text.trim()) continue;
    // 剔除数学与空白标点后的“真实文字”太少的微条目丢弃
    const pure = text.replace(/\$[^$]*\$/g, '').replace(/[\s—–\-·•|★*#\d.,;:、()（）%？！?!'"“”‘’、]/g, '');
    if (text.length < MIN_ENTRY_CHARS && pure.length < 10) continue;

    const baseSlug = fileKey + '-' + sec.slugTail;
    let id = 'rnote-' + repo.toLowerCase() + '-' + baseSlug;
    let n = 1;
    while (usedIds.has(id)) id = 'rnote-' + repo.toLowerCase() + '-' + baseSlug + '-' + (++n);
    usedIds.add(id);

    const chunks = splitByParagraphs(text, MAX_ENTRY_CHARS);
    chunks.forEach((chunk, ci) => {
      const { topic, lessons } = detectTopic(sec.title, chunk);
      const kind = detectKind(sec.title, chunk, isExerciseFile);
      entries.push({
        id: ci === 0 ? id : id + '-' + (ci + 1),
        repo,
        source: relPath + '#' + (sec.title || '正文'),
        subject,
        topic,
        title: sec.title || '概述',
        kind,
        text: chunk,
        relatedLessons: lessons,
        raw: false,
      });
    });
  }
  return entries;
}

/* --------------------------- Markdown 拆分 --------------------------- */

/** Markdown 按二级/三级标题拆节。返回 [{title, text, slugTail, level}] */
function splitMarkdown(text) {
  const lines = text.split('\n');
  const sections = [];
  let cur = { level: 1, title: '概述', lines: [], h2: 0, h3: 0 };
  const flush = (sec) => {
    const body = cleanMarkdown(sec.lines.join('\n'));
    if (!body) return;
    let slugTail;
    if (sec.level === 1) slugTail = 'h0';
    else if (sec.level === 2) slugTail = 'h' + sec.h2;
    else slugTail = 'h' + sec.h2 + '-s' + sec.h3;
    sections.push({ title: sec.title, text: body, slugTail, level: sec.level });
  };
  for (const line of lines) {
    const m = /^(#{1,4})\s+(.*?)\s*$/.exec(line);
    if (m && m[1].length >= 2 && m[1].length <= 3) {
      const level = m[1].length;
      flush(cur);
      if (level === 1) cur = { level: 1, title: m[2], lines: [], h2: 0, h3: 0 };
      else if (level === 2) cur = { level: 2, title: m[2], lines: [], h2: cur.h2 + 1, h3: 0 };
      else cur = { level: 3, title: m[2], lines: [], h2: cur.h2, h3: cur.h3 + 1 };
      continue;
    }
    cur.lines.push(line);
  }
  flush(cur);

  // 超长的二级节按其下的三级标题再拆
  const result = [];
  for (const sec of sections) {
    if (sec.level === 2 && sec.text.length > MAX_ENTRY_CHARS && /(^|\n)###\s/.test(sec.text)) {
      const subs = [];
      let curSub = { title: sec.title, lines: [], slugTail: sec.slugTail };
      let si = 0;
      for (const line of sec.text.split('\n')) {
        const m = /^###\s+(.*?)\s*$/.exec(line);
        if (m) {
          subs.push(curSub);
          curSub = { title: m[1], lines: [], slugTail: sec.slugTail + '-s' + (++si) };
          continue;
        }
        curSub.lines.push(line);
      }
      subs.push(curSub);
      const cleaned = subs
        .map((s) => ({ ...s, text: cleanMarkdown(s.lines.join('\n')) }))
        .filter((s) => s.text);
      if (cleaned.length > 1) { result.push(...cleaned); continue; }
    }
    result.push(sec);
  }
  return result;
}

/* --------------------------- TeX 拆分 --------------------------- */

/**
 * TeX 拆节：先在“宏展开后、标签转换前”的原始行上按 \section/\subsection
 * 边界切块，再对每块做 texToText；超长且含 ####（原 \subsubsection）再细分。
 */
function splitTex(src) {
  const docStart = src.indexOf('\\begin{document}');
  const preamble = docStart >= 0 ? src.slice(0, docStart) : '';
  let body = docStart >= 0 ? src.slice(docStart + '\\begin{document}'.length) : src;
  body = body.replace(/\\end\{document\}[\s\S]*$/, '');
  body = body.replace(/^%.*$/gm, '');

  const titleM = /\\title\s*\{([^{}]*)\}/.exec(preamble);
  const docTitle = titleM ? titleM[1].trim() : '';
  const macros = collectMacros(preamble + body);
  body = expandMacros(body, macros);
  body = stripTexFrontMatter(body);

  const lines = body.split('\n');
  const units = []; // { level: 0|1|2|3|9, title, lines[] }
  let cur = { level: 0, title: docTitle || '概述', lines: [] };
  let s1 = 0, s2 = 0, s3 = 0;
  // 注意：无条件压栈（空内容块在装配末段按空文本剔除），
  // 否则“\section 后紧跟 \subsection”的章节会整体丢失。
  const flush = () => units.push(cur);
  for (const line of lines) {
    const m = /^\s*\\(section|subsection|subsubsection|paragraph)\*?\s*\{([^{}]*)\}\s*$/.exec(line);
    if (m) {
      flush();
      const lvl = m[1] === 'section' ? 1 : m[1] === 'subsection' ? 2 : 3;
      const title = m[2].trim();
      if (!title) { cur = { level: 9, title: '(空标题)', lines: [] }; continue; } // 空标题内容跳过
      if (lvl === 1) { s1++; s2 = 0; s3 = 0; cur = { level: 1, title, lines: [], s1 }; }
      else if (lvl === 2) { s2++; s3 = 0; cur = { level: 2, title, lines: [], s1, s2 }; }
      else { s3++; cur = { level: 3, title, lines: [], s1, s2, s3 }; }
      continue;
    }
    cur.lines.push(line);
  }
  flush();

  /* 组装条目块：
     - level0（文档开头导言）→ 独立条目 s0
     - level1 节：若其下无 level2 → 整节一条（含直接挂的 level3）
                  若有 level2 → 节导言一条 + 每个 level2 一条（其下 level3 并入） */
  const blocks = [];
  let i = 0;
  while (i < units.length && units[i].level === 0) {
    blocks.push({ title: units[i].title, lines: units[i].lines, slugTail: 's0', level: 0 });
    i++;
  }
  while (i < units.length) {
    const sec = units[i];
    if (sec.level !== 1) { i++; continue; } // 防御：孤立 level2/3
    const group = { sec, intro: null, subs: [], direct3: [] };
    i++;
    while (i < units.length && units[i].level > 1) {
      const u = units[i];
      if (u.level === 2) group.subs.push({ sec: u, intro: null, subs3: [] });
      else if (u.level === 3) {
        if (group.subs.length) group.subs[group.subs.length - 1].subs3.push(u);
        else group.direct3.push(u);
      } else if (u.level === 0) { /* 不应出现 */ }
      i++;
    }
    if (!group.subs.length) {
      const all = [...(group.sec.lines || []), ...group.direct3.flatMap((u) => ['\\subsubsection{' + u.title + '}', ...u.lines])];
      blocks.push({ title: group.sec.title, lines: all, slugTail: 's' + group.sec.s1, level: 1 });
    } else {
      if (group.sec.lines.some((l) => l.trim())) {
        blocks.push({ title: group.sec.title, lines: group.sec.lines, slugTail: 's' + group.sec.s1 + '-0', level: 1 });
      }
      for (const sub of group.subs) {
        const all = [...sub.sec.lines, ...sub.subs3.flatMap((u) => ['\\subsubsection{' + u.title + '}', ...u.lines])];
        blocks.push({ title: sub.sec.title, lines: all, slugTail: 's' + group.sec.s1 + '-' + sub.sec.s2, level: 2 });
      }
    }
  }

  // texToText + 超长的 ####（原 \subsubsection）细分
  const sections = [];
  for (const b of blocks) {
    const text = texToText(b.lines.join('\n'));
    if (!text) continue;
    if (text.length > MAX_ENTRY_CHARS && /(^|\n)####\s/.test(text)) {
      const subs = [];
      let curSub = { title: b.title, lines: [], slugTail: b.slugTail };
      let si = 0;
      for (const line of text.split('\n')) {
        const m = /^\s*####\s+(.*?)\s*$/.exec(line);
        if (m && m[1]) {
          subs.push(curSub);
          curSub = { title: m[1], lines: [], slugTail: b.slugTail + '-' + (++si) };
          continue;
        }
        curSub.lines.push(line);
      }
      subs.push(curSub);
      const cleaned = subs.map((s) => ({ ...s, text: (s.lines.join('\n')).trim() })).filter((s) => s.text);
      if (cleaned.length > 1) { sections.push(...cleaned); continue; }
    }
    sections.push({ title: b.title, text, slugTail: b.slugTail, level: b.level });
  }
  return { sections, docTitle };
}

/** 残留 LaTeX 检查：无法清干净 → raw。 */
function looksUnparsed(text) {
  if (/\\begin\{(?!array|aligned|alignedat|gathered|cases|matrix|pmatrix|bmatrix|vmatrix|Bmatrix|Vmatrix|equation|align|split)/.test(text)) return true;
  if (/\\(multirow|multicolumn|tabincell|hline|cline|textcolor|colorbox|rowcolor|resizebox|includegraphics|ding|pifont)/.test(text)) return true;
  return false;
}

/* --------------------------- 仓库遍历 --------------------------- */

function walkFiles(root) {
  const out = [];
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    let items;
    try { items = fs.readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const e of items) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name === '.git') continue;
        stack.push(p);
      } else out.push(p);
    }
  }
  return out.sort();
}

const norm = (p) => p.split(path.sep).join('/');

/* ------------------------------ 主流程 ------------------------------ */

function main() {
  const manifest = { generatedAt: new Date().toISOString(), repos: {}, bySubject: {}, byKind: {}, byLesson: {}, notes: [] };
  const allEntries = [];
  const usedIds = new Set();
  const usedFileKeys = new Set();

  for (const repo of ['R01', 'R05', 'R08']) {
    const root = REPOS[repo];
    const info = { files: 0, entries: 0, droppedEmptyEntries: 0, skipped: [] };
    if (!fs.existsSync(root)) {
      info.skipped.push({ file: root, reason: '仓库目录不存在' });
      manifest.repos[repo] = info;
      continue;
    }
    const files = walkFiles(root);

    for (const file of files) {
      const rel = norm(path.relative(root, file));
      const ext = path.extname(file).toLowerCase();

      /* —— 文件分类（非学习资产 → skipped）—— */
      if (repo === 'R01') {
        if (!/^[0-9]{2}.*\.md$/.test(path.basename(file))) {
          info.skipped.push({ file: rel, reason: ext === '.md' ? '仓库自述文件，非学习内容' : '非笔记文件' });
          continue;
        }
      } else if (repo === 'R05') {
        if (/\.(yml|yaml|txt|json|html|js|css)$/.test(ext) || path.basename(file) === '.gitignore') {
          info.skipped.push({ file: rel, reason: '站点构建/配置文件' }); continue;
        }
        if (ext !== '.md') { info.skipped.push({ file: rel, reason: '非 Markdown 文件' }); continue; }
        if (rel.includes('通信原理知识点总结')) { info.skipped.push({ file: rel, reason: '与本平台无关（通信原理课程内容）' }); continue; }
      } else if (repo === 'R08') {
        if (ext === '.md') { info.skipped.push({ file: rel, reason: '仓库自述文件，非学习内容' }); continue; }
        if (ext !== '.tex') { info.skipped.push({ file: rel, reason: '非 TeX 文件' }); continue; }
        const top = rel.split('/')[0];
        if (top === 'model') { info.skipped.push({ file: rel, reason: '模板/非数学一内容（model 目录）' }); continue; }
        const okDir = /^\/(advanced-math|linear-algebra|probability-theory-and-mathematical-statistics)\/(knowledge|exercise)\//.test('/' + rel);
        if (!okDir) { info.skipped.push({ file: rel, reason: '不在 knowledge/exercise 目录内' }); continue; }
      }

      /* —— 读取（损坏记 skipped）—— */
      let raw;
      try { raw = readText(file); } catch (e) {
        info.skipped.push({ file: rel, reason: '文件读取失败：' + e.message });
        continue;
      }

      if (repo === 'R05') {
        // 先按“原始行”剔除链接行/图片行，再清洗 —— 否则导航目录的链接文本会伪装成正文
        const noLinkRaw = raw.split('\n').filter((l) => !/\]\(/.test(l) && !/!\[/.test(l)).join('\n');
        const probe = cleanMarkdown(noLinkRaw);
        const hasDisplayMath = /\$\$/.test(probe);
        const noMath = probe.replace(/\$\$[\s\S]*?\$\$/g, '').replace(/\$[^$\n]*\$/g, '');
        const noTableLines = noMath.split('\n').filter((l) => !/^\s*\|/.test(l)).join('\n');
        if (/待更新|陆续更新中|即将上线/.test(probe) && noTableLines.trim().length < 120) {
          info.skipped.push({ file: rel, reason: '占位页（内容待更新）' }); continue;
        }
        if (noTableLines.trim().length < 60 && !hasDisplayMath) {
          info.skipped.push({ file: rel, reason: '站点目录导航页/占位页' }); continue;
        }
      }

      /* —— subject 判定 —— */
      let subject;
      if (repo === 'R01') subject = 'gaoshu';
      else if (repo === 'R05') {
        subject = rel.includes('高等数学') ? 'gaoshu' : rel.includes('线性代数') ? 'xiandai' : rel.includes('概率论') ? 'gailv' : 'mixed';
      } else {
        const top = rel.split('/')[0];
        subject = top === 'advanced-math' ? 'gaoshu' : top === 'linear-algebra' ? 'xiandai' : top === 'probability-theory-and-mathematical-statistics' ? 'gailv' : 'mixed';
      }

      let fileKey = slugForRelPath(rel);
      if (usedFileKeys.has(fileKey)) fileKey = fileKey + '-' + fnv1a(rel);
      usedFileKeys.add(fileKey);

      /* —— 解析 —— */
      let sections, docTitle = '', parseFailed = false;
      try {
        if (ext === '.tex') {
          const r = splitTex(raw);
          sections = r.sections; docTitle = r.docTitle;
        } else {
          sections = splitMarkdown(raw);
        }
      } catch (e) {
        parseFailed = true;
        sections = [{ title: docTitle || path.basename(file), text: cleanTextSafe(raw).slice(0, 20000), slugTail: 'raw', level: 1 }];
      }

      const isExerciseFile = /(^|\/)exercise\//.test('/' + rel);
      let entries;
      try {
        entries = makeEntries({ repo, relPath: rel, subject, fileKey, sections, isExerciseFile, usedIds });
      } catch (e) {
        info.skipped.push({ file: rel, reason: '解析失败：' + e.message });
        continue;
      }

      if (parseFailed) {
        entries.forEach((en) => { en.kind = '总结'; en.raw = true; en.relatedLessons = []; en.topic = '未解析笔记'; });
      }

      /* —— raw 残留检查与空条目剔除 —— */
      const kept = [];
      for (const en of entries) {
        if (looksUnparsed(en.text)) { en.raw = true; en.kind = '总结'; }
        const stripped = en.text.replace(/\s/g, '');
        const hasMath = /\$[^$]+\$/.test(en.text);
        if (stripped.length < 12 && !hasMath) { info.droppedEmptyEntries++; continue; }
        if (en.raw && en.text.length > 30000) en.text = en.text.slice(0, 30000) + '\n（超长未解析内容已截断）';
        kept.push(en);
      }

      if (!kept.length) { info.skipped.push({ file: rel, reason: '无有效学习内容（仅标题/空壳）' }); continue; }

      allEntries.push(...kept);
      info.files++;
      info.entries += kept.length;
    }
    manifest.repos[repo] = info;
  }

  for (const entry of allEntries) {
    if (NOTE_REVISIONS[entry.id]) entry.text = NOTE_REVISIONS[entry.id];
  }

  /* —— 统计 —— */
  for (const en of allEntries) {
    manifest.bySubject[en.subject] = (manifest.bySubject[en.subject] || 0) + 1;
    manifest.byKind[en.kind] = (manifest.byKind[en.kind] || 0) + 1;
    for (const l of en.relatedLessons) manifest.byLesson[l] = (manifest.byLesson[l] || 0) + 1;
  }
  manifest.notes = allEntries.map((en) => ({
    id: en.id, repo: en.repo, source: en.source, subject: en.subject, topic: en.topic,
    title: en.title, kind: en.kind, relatedLessons: en.relatedLessons, raw: en.raw,
    textLength: en.text.length,
  }));

  /* —— 落盘 —— */
  const seedDir = path.join(PROJECT_ROOT, 'data', 'seed');
  fs.mkdirSync(seedDir, { recursive: true });
  const jsPath = path.join(seedDir, 'repo-notes.js');
  fs.writeFileSync(jsPath,
    '// 本文件由 tools/absorb-repo-notes.mjs 自动生成，勿手工编辑。\n' +
    '// 来源仓库：R01 kaoyanMATH / R05 gaoshu-zhangyu-30 / R08 Didnelpsun-Math\n' +
    '// 生成时间：' + manifest.generatedAt + '\n' +
    '// 条目数：' + allEntries.length + '\n' +
    'export default ' + JSON.stringify(allEntries, null, 1) + '\n', 'utf8');
  const jsonPath = path.join(seedDir, 'repo-notes-manifest.json');
  fs.writeFileSync(jsonPath, JSON.stringify(manifest, null, 1), 'utf8');

  console.log('repo-notes entries:', allEntries.length);
  console.log('byRepo:', JSON.stringify(Object.fromEntries(Object.entries(manifest.repos).map(([k, v]) => [k, v.entries]))));
  console.log('bySubject:', JSON.stringify(manifest.bySubject));
  console.log('byKind:', JSON.stringify(manifest.byKind));
  console.log('skipped total:', Object.values(manifest.repos).reduce((a, b) => a + b.skipped.length, 0));
  console.log('written:', norm(path.relative(PROJECT_ROOT, jsPath)), '|', norm(path.relative(PROJECT_ROOT, jsonPath)));
}

function cleanTextSafe(raw) {
  return raw.replace(/\r\n?/g, '\n').replace(/^%.*$/gm, '').replace(/\n{3,}/g, '\n\n');
}

main();
