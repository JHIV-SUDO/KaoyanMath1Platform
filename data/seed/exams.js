// 数学一历年真题元信息（1987年统考开始；2021年起题型改革：10选择+6填空+6解答）
const STRUCT_NEW = '10选择(50)+6填空(30)+6解答(70)';
const STRUCT_2016_2020 = '8选择(32)+6填空(24)+9解答(94)';
const STRUCT_OLD = '老题型（选择+填空+解答）';
const YEARS = [];
for (let y = 2026; y >= 1987; y--) {
  YEARS.push({
    year: y,
    structure: y >= 2021 ? STRUCT_NEW : (y >= 2016 ? STRUCT_2016_2020 : STRUCT_OLD),
    label: `${y}年 考研数学一真题`,
  });
}
export default YEARS;
