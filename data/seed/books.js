// 书目资料：B盘PDF元信息 + 张宇1000题（数学一）章节结构与页码（实测自试题册书签）
// 页码为试题册PDF页码，可直接在平台阅读器跳转
export default {
  media: [
    {
      key: 'jichu30.pdf', title: '张宇基础30讲（高数）', subject: 'gaoshu',
      path: 'B:\\27张宇基础30讲（高数）.pdf', pages: 586, note: '扫描版，578页正文',
    },
    {
      key: 'shiti.pdf', title: '张宇1000题 数一·试题册', subject: 'mixed',
      path: 'B:\\27张宇1000题数一【试题册】.pdf', pages: 195, note: '目录页码可靠，正文为扫描图',
    },
    {
      key: 'jiexi.pdf', title: '张宇1000题 数一·解析册', subject: 'mixed',
      path: 'B:\\27张宇1000题数一【解析册】.pdf', pages: 568, note: '无书签，按内容检索',
    },
  ],
  drill: {
    基础篇: [
      {
        subject: 'gaoshu', label: '高等数学', chapters: [
          { id: 'jc-gs-0', title: '零基础', pages: [9, 10] },
          { id: 'jc-gs-1', title: '第1章 函数极限与连续', pages: [11, 12] },
          { id: 'jc-gs-2', title: '第2章 数列极限', pages: [13, 13] },
          { id: 'jc-gs-3', title: '第3章 一元函数微分学的概念', pages: [14, 15] },
          { id: 'jc-gs-4', title: '第4章 一元函数微分学的计算', pages: [16, 16] },
          { id: 'jc-gs-5', title: '第5章 一元函数微分学的应用（一）几何应用', pages: [17, 20] },
          { id: 'jc-gs-6', title: '第6章 一元函数微分学的应用（二）中值定理、微分等式与微分不等式', pages: [21, 22] },
          { id: 'jc-gs-7', title: '第7章 一元函数微分学的应用（三）物理应用', pages: [23, 23] },
          { id: 'jc-gs-8', title: '第8章 一元函数积分学的概念与性质', pages: [24, 26] },
          { id: 'jc-gs-9', title: '第9章 一元函数积分学的计算', pages: [27, 29] },
          { id: 'jc-gs-10', title: '第10章 一元函数积分学的应用（一）几何应用', pages: [30, 32] },
          { id: 'jc-gs-11', title: '第11章 一元函数积分学的应用（二）积分等式与积分不等式', pages: [33, 33] },
          { id: 'jc-gs-12', title: '第12章 一元函数积分学的应用（三）物理应用', pages: [34, 35] },
          { id: 'jc-gs-13', title: '第13章 多元函数微分学', pages: [36, 38] },
          { id: 'jc-gs-14', title: '第14章 二重积分', pages: [39, 41] },
          { id: 'jc-gs-15', title: '第15章 微分方程', pages: [42, 43] },
          { id: 'jc-gs-16', title: '第16章 无穷级数', pages: [44, 46] },
          { id: 'jc-gs-17', title: '第17章 多元函数积分学的预备知识', pages: [47, 48] },
          { id: 'jc-gs-18', title: '第18章 多元函数积分学', pages: [49, 50] },
        ],
      },
      {
        subject: 'xiandai', label: '线性代数', chapters: [
          { id: 'jc-xd-1', title: '第1章 行列式', pages: [51, 52] },
          { id: 'jc-xd-2', title: '第2章 矩阵', pages: [53, 55] },
          { id: 'jc-xd-3', title: '第3章 向量组', pages: [56, 57] },
          { id: 'jc-xd-4', title: '第4章 线性方程组', pages: [58, 61] },
          { id: 'jc-xd-5', title: '第5章 特征值与特征向量', pages: [62, 64] },
          { id: 'jc-xd-6', title: '第6章 二次型', pages: [65, 68] },
        ],
      },
      {
        subject: 'gailv', label: '概率统计', chapters: [
          { id: 'jc-gl-1', title: '第1章 随机事件与概率', pages: [69, 69] },
          { id: 'jc-gl-2', title: '第2章 一维随机变量及其分布', pages: [70, 71] },
          { id: 'jc-gl-3', title: '第3章 多维随机变量及其分布', pages: [72, 74] },
          { id: 'jc-gl-4', title: '第4章 随机变量的数字特征', pages: [75, 77] },
          { id: 'jc-gl-5', title: '第5章 大数定律与中心极限定理', pages: [78, 78] },
          { id: 'jc-gl-6', title: '第6章 数理统计', pages: [79, 82] },
        ],
      },
    ],
    强化篇: [
      {
        subject: 'gaoshu', label: '高等数学', chapters: [
          { id: 'qh-gs-1', title: '第1章 函数极限与连续', pages: [84, 87] },
          { id: 'qh-gs-2', title: '第2章 数列极限', pages: [88, 89] },
          { id: 'qh-gs-3', title: '第3章 一元函数微分学的概念', pages: [90, 92] },
          { id: 'qh-gs-4', title: '第4章 一元函数微分学的计算', pages: [93, 94] },
          { id: 'qh-gs-5', title: '第5章 一元函数微分学的应用（一）几何应用', pages: [95, 98] },
          { id: 'qh-gs-6', title: '第6章 一元函数微分学的应用（二）中值定理、微分等式与微分不等式', pages: [99, 101] },
          { id: 'qh-gs-7', title: '第7章 一元函数微分学的应用（三）物理应用', pages: [102, 102] },
          { id: 'qh-gs-8', title: '第8章 一元函数积分学的概念与性质', pages: [103, 105] },
          { id: 'qh-gs-9', title: '第9章 一元函数积分学的计算', pages: [106, 107] },
          { id: 'qh-gs-10', title: '第10章 一元函数积分学的应用（一）几何应用', pages: [108, 110] },
          { id: 'qh-gs-11', title: '第11章 一元函数积分学的应用（二）积分等式与积分不等式', pages: [111, 111] },
          { id: 'qh-gs-12', title: '第12章 一元函数积分学的应用（三）物理应用', pages: [112, 113] },
          { id: 'qh-gs-13', title: '第13章 多元函数微分学', pages: [114, 117] },
          { id: 'qh-gs-14', title: '第14章 二重积分', pages: [118, 121] },
          { id: 'qh-gs-15', title: '第15章 微分方程', pages: [122, 125] },
          { id: 'qh-gs-16', title: '第16章 无穷级数', pages: [126, 130] },
          { id: 'qh-gs-17', title: '第17章 多元函数积分学的预备知识', pages: [131, 133] },
          { id: 'qh-gs-18', title: '第18章 多元函数积分学', pages: [134, 137] },
        ],
      },
      {
        subject: 'xiandai', label: '线性代数', chapters: [
          { id: 'qh-xd-1', title: '第1章 行列式', pages: [138, 139] },
          { id: 'qh-xd-2', title: '第2章 余子式和代数余子式的计算', pages: [140, 140] },
          { id: 'qh-xd-3', title: '第3章 矩阵运算', pages: [141, 142] },
          { id: 'qh-xd-4', title: '第4章 矩阵的秩', pages: [143, 144] },
          { id: 'qh-xd-5', title: '第5章 线性方程组', pages: [145, 147] },
          { id: 'qh-xd-6', title: '第6章 向量组', pages: [148, 149] },
          { id: 'qh-xd-7', title: '第7章 特征值与特征向量', pages: [150, 151] },
          { id: 'qh-xd-8', title: '第8章 相似理论', pages: [152, 154] },
          { id: 'qh-xd-9', title: '第9章 二次型', pages: [155, 158] },
        ],
      },
      {
        subject: 'gailv', label: '概率统计', chapters: [
          { id: 'qh-gl-1', title: '第1章 随机事件和概率', pages: [159, 159] },
          { id: 'qh-gl-2', title: '第2章 一维随机变量及其分布', pages: [160, 161] },
          { id: 'qh-gl-3', title: '第3章 一维随机变量函数的分布', pages: [162, 162] },
          { id: 'qh-gl-4', title: '第4章 多维随机变量及其分布', pages: [163, 164] },
          { id: 'qh-gl-5', title: '第5章 多维随机变量函数的分布', pages: [165, 166] },
          { id: 'qh-gl-6', title: '第6章 数字特征', pages: [167, 169] },
          { id: 'qh-gl-7', title: '第7章 大数定律与中心极限定理', pages: [170, 170] },
          { id: 'qh-gl-8', title: '第8章 统计量及其分布', pages: [171, 172] },
          { id: 'qh-gl-9', title: '第9章 参数估计与假设检验', pages: [173, 178] },
        ],
      },
    ],
    综合篇: [
      {
        subject: 'mixed', label: '测试卷', chapters: [
          { id: 'zh-v1', title: '测试卷一', pages: [180, 183] },
          { id: 'zh-v2', title: '测试卷二', pages: [184, 187] },
          { id: 'zh-v3', title: '测试卷三', pages: [188, 191] },
          { id: 'zh-v4', title: '测试卷四', pages: [192, 195] },
        ],
      },
    ],
  },
  // 30讲（高数）目录——章节标题与1000题基础篇一致，页码待用户在阅读器中标注
  jichu30Toc: [
    { no: 1, title: '函数极限与连续' }, { no: 2, title: '数列极限' },
    { no: 3, title: '一元函数微分学的概念' }, { no: 4, title: '一元函数微分学的计算' },
    { no: 5, title: '一元函数微分学的应用（一）几何应用' },
    { no: 6, title: '一元函数微分学的应用（二）中值定理、微分等式与微分不等式' },
    { no: 7, title: '一元函数微分学的应用（三）物理应用' },
    { no: 8, title: '一元函数积分学的概念与性质' }, { no: 9, title: '一元函数积分学的计算' },
    { no: 10, title: '一元函数积分学的应用（一）几何应用' },
    { no: 11, title: '一元函数积分学的应用（二）积分等式与积分不等式' },
    { no: 12, title: '一元函数积分学的应用（三）物理应用' },
    { no: 13, title: '多元函数微分学' }, { no: 14, title: '二重积分' },
    { no: 15, title: '微分方程' }, { no: 16, title: '无穷级数' },
    { no: 17, title: '多元函数积分学的预备知识' }, { no: 18, title: '多元函数积分学' },
  ],
};
