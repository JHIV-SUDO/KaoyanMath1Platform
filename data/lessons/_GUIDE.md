# 讲义内容编写规范（内容智能体必读）

## 目标
为"考研数学一学习平台"编写**完全自成体系**的原创讲义。学生只看平台内容即可完成该章学习，无需任何课外资料。内容必须是你原创撰写的讲解（可讲授标准数学知识与通用事实，但**严禁抄录任何已出版教辅的原文/原题**）。

> 注：本规范约束**原创讲义通道**（data/lessons/*.js）。平台另有**授权资料通道**（用户已授权其仓库与资料中的题目、解析、知识笔记，经 `tools/absorb-repo-notes.mjs` 与题库导入器进入 data/seed/，并保留来源身份）。两个通道分开维护：讲义保持原创；授权内容按其来源与许可处理，不得反向混入讲义冒充原创。

## 文件格式
- 每讲一个文件：`data/lessons/<id>.js`（ESM，UTF-8 无 BOM）
- 文件结尾：`export default { ... }`（对象结构见下）
- 数学公式一律用 KaTeX：行内 `$...$`，独立公式 `$$...$$`
- **在 JS 模板字符串（反引号）中写 LaTeX，反斜杠必须双写**：`\frac` 要写成 `\\frac`，`\int` 写成 `\\int`，`\left(` 写成 `\\left(`。未双写会渲染失败——写完自查。
- 正文用轻量 Markdown：`**加粗**`、`- 列表`、普通换行。不要用标题符号（#）。

## 对象结构（字段全部必填）
```js
export default {
  id: "gs01",                      // 讲次id（见任务分配）
  subject: "gaoshu",               // gaoshu | xiandai | gailv
  no: 1,                           // 学科内序号
  title: "函数极限与连续",
  subtitle: "第1讲",               // "第N讲" 或 "第N章"
  hours: 6,                        // 建议学习课时(90分钟=1课时)
  syllabusRef: "hm1",              // 对应考纲章节id（见映射表，可多个用数组）
  goal: ["目标1", "目标2", "目标3"],            // 3-5条学习目标
  concepts: [                                   // 4-8个核心概念
    { name: "函数极限的定义", body: `2-6句讲解，含公式、几何直观、为什么要引入`, },
  ],
  theorems: [                                   // 5-10条定理/公式/性质
    { name: "洛必达法则",
      statement: `$$\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}$$`,  // 完整数学陈述
      conditions: `使用前提逐条列出`,
      remark: `证明思路/记忆法/使用注意` },
  ],
  examples: [                                   // 4-6道例题精讲（覆盖本章主要题型）
    { title: "例1 求未定式极限", level: "基础",       // 基础|强化|冲刺
      problem: `完整题干（含公式）`,
      solution: [`分析思路`, `推演步骤（可多步，含公式）`, `结论`],
      tip: `此类题的方法提炼` },
  ],
  methods: ["方法总结1", "方法总结2"],           // 3-6条
  pitfalls: ["易错点1", "易错点2"],              // 2-4条
  exercises: [                                  // 4-6道随堂练习（原创，覆盖基本题型）
    { no: 1, level: "基础", problem: `题干`,
      answer: `最终答案（简短）`,
      solution: `完整解答（可含公式，1-4句或分步）` },
  ],
}
```

## 质量红线
1. **数学正确第一**：每个公式、每步推导自查一遍；条件不明的定理必须写清使用前提。
2. 自成体系：概念从定义讲起，不出现"见教材第X页""参考XX书"之类外链。
3. 例题/练习覆盖考纲要求的主要题型，难度标注真实（基础=直接套用，强化=综合两三个知识点，冲刺=技巧性/压轴）。
4. 语言：简体中文，术语规范（如"无穷小量""特征多项式"），讲解有教学感（先动机后定义、给几何/物理直观）。
5. 体量：每讲正文总量不低于 150 行。

## 考纲章节映射（syllabusRef 可选值）
- `hm1` 函数极限连续  `hm2` 一元函数微分学  `hm3` 一元函数积分学
- `hm4` 向量代数与空间解析几何  `hm5` 多元函数微分学  `hm6` 多元函数积分学
- `hm7` 无穷级数  `hm8` 常微分方程
- `la1` 行列式  `la2` 矩阵  `la3` 向量  `la4` 线性方程组  `la5` 特征值与特征向量  `la6` 二次型
- `pr1` 随机事件与概率  `pr2` 一维随机变量  `pr3` 多维随机变量  `pr4` 数字特征
- `pr5` 大数定律与中心极限定理  `pr6` 数理统计基本概念  `pr7` 参数估计  `pr8` 假设检验

## 完成后自检（每写完一讲执行）
```bash
node -e "import('file:///D:/ClaudeWorkspace/Projects/KaoyanMath1Platform/data/lessons/<id>.js').then(m=>{const L=m.default;const need=['id','subject','no','title','subtitle','hours','syllabusRef','goal','concepts','theorems','examples','methods','pitfalls','exercises'];for(const k of need)if(!(k in L))throw new Error('缺字段'+k);console.log('OK',L.id,L.title,L.concepts.length,L.theorems.length,L.examples.length,L.exercises.length)})"
```
