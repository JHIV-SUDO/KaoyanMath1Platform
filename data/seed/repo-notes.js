// 本文件由 tools/absorb-repo-notes.mjs 自动生成，勿手工编辑。
// 来源仓库：R01 kaoyanMATH / R05 gaoshu-zhangyu-30 / R08 Didnelpsun-Math
// 生成时间：2026-10-29T06:28:46.056Z
// 条目数：833
export default [
 {
  "id": "rnote-r01-01-h1",
  "repo": "R01",
  "source": "01 第一讲 极限.md#一、极限定义",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "一、极限定义",
  "kind": "概念",
  "text": "对任意小的一个波动（$\\forall \\varepsilon \\gt 0$），都存在一个对应的 $x$ 的波动半径（$\\exists \\delta \\gt 0$），使得当 $x$ 在 $x_0 - \\delta$ 到 $x_0+\\delta$ 这个范围内波动时（$0 \\lt |x-x_0| \\lt \\delta$），函数值 $f(x)$ 可以在 $A-\\varepsilon$ 到 $A+\\varepsilon$ 这个范围内波动（$|f(x)-A| \\lt \\varepsilon$）\n- 函数的极限\n  $$\\lim_{x \\to x_0} f(x) = A \\iff \\forall \\varepsilon \\gt 0 ,\\, \\exists \\delta \\gt 0 ,\\, 0 \\lt |x - x_0| \\lt \\delta ,\\, |f(x)-A| \\lt \\varepsilon $$\n- 数列的极限\n  $$\\lim_{n \\to \\infty} x_n = a \\iff \\forall \\varepsilon \\gt 0 ,\\, \\exists N \\gt 0 ,\\, n \\gt N ,\\, |x_n - a| \\lt \\varepsilon $$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h2",
  "repo": "R01",
  "source": "01 第一讲 极限.md#二、极限性质",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "二、极限性质",
  "kind": "定理",
  "text": "1. 唯一性\n  若 $\\lim_{x \\to x_0} f(x) = A$ 存在，则$A$唯一\n> 左右极限相等：$\\lim_{x \\to x_0^-}f(x) = \\lim_{x \\to x_0^+}f(x) = A$\n> 常见： 指数函数、反三角函数、绝对值函数等的  $\\lim_{x \\to \\infty}$ 不存在\n\n2. **局部有界性**\n  若   $\\lim_{x \\to x_0} f(x) = A$，则 $\\exists M \\gt 0,\\delta \\gt 0$，当 $0 \\lt |x-x_0| \\lt \\delta$ 时，恒有 $|f(x)| \\lt M$\n> 讨论 $f(x)$ 在 $I$ 上的有界性：\n> - 若 $I$ 为 $[a,b]$，“连续函数 $f(x)$ 在 $[a,b]$ 上必有界”\n> - 若 $I$ 为 $(a,b)$，则需满足条件：\n>     1. $f(x)$ 在 $(a,b)$ 内连续\n>     2. $\\lim_{x \\to a^+}f(x)$ 存在\n>     3. $\\lim_{x \\to b^-}f(x)$ 存在\n> - 若 $\\lim_{x \\to ?} f(x)$ 不存在，看能否将 $f(x)$拆分为有限个有界函数相加或相乘\n>   $有界\\pm 有界 = 有界$\n>   $有界 \\times 有界 = 有界$\n\n3. 局部保号性\n  若    $\\lim_{x \\to x_0} f(x) = A \\gt 0$，则 $x \\to x_0$ 时，$f(x) \\gt 0$\n> 推论：若  $\\exists \\delta \\gt 0$，$0 \\lt |x-x0| \\lt \\delta$ 时，$f(x) \\ge 0$，则 $ \\lim_{x \\to x_0} f(x) = A \\ge 0$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h3",
  "repo": "R01",
  "source": "01 第一讲 极限.md#三、洛必达法则",
  "subject": "gaoshu",
  "topic": "洛必达法则",
  "title": "三、洛必达法则",
  "kind": "定理",
  "text": "$$\\lim_{x \\to ?} \\frac{f(x)}{g(x)} \\xlongequal [\\frac{\\infty}{\\infty}] {\\frac{0}{0}} \\lim_{x \\to ?} \\frac{f'(x)}{g'(x)}$$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h4",
  "repo": "R01",
  "source": "01 第一讲 极限.md#四、泰勒公式",
  "subject": "gaoshu",
  "topic": "泰勒公式",
  "title": "四、泰勒公式",
  "kind": "定理",
  "text": "$x \\to 0$时，\n1. $$\\sin{x} = x - \\frac{1}{6}x^3 + o(x^3)$$\n2. $$\\cos{x} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} + o(x^4)$$\n3. $$\\tan{x} = x + \\frac{x^3}{3} + o(x^3)$$\n4. $$\\arcsin{x} = x + \\frac{1}{6}x^3 + o(x^3)$$\n5. $$\\arctan{x} = x - \\frac{x^3}{3} + o(x^3)$$\n6. $$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} +o(x^4)$$\n7. $$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ... +\\frac{x^n}{n!}$$\n8. $$\\frac{1}{1-x} = 1 +x +x^2 + ... + x^n ,\\,(|x| \\lt 1)$$\n9. $$(1+x)^{\\alpha} = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 +o(x^2)$$\n    $$\\sqrt{1+x} = 1+ \\frac{x}{2} - \\frac{x^2}{8} + o(x^2)$$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h5",
  "repo": "R01",
  "source": "01 第一讲 极限.md#五、常用等价无穷小",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "五、常用等价无穷小",
  "kind": "总结",
  "text": "$$\\lim_{x \\to 0} \\frac{A}{B} = 1 \\iff A \\sim B$$\n| $e^x-1 \\sim x$                   | $\\ln(1+x) \\sim x$                      |\n| -------------------------------- | -------------------------------------- |\n| $\\sin{x} \\sim x$                 | $x - \\sin{x} \\sim \\frac{1}{6}x^3$      |\n| $\\arcsin{x} \\sim x$              | $x - \\arcsin{x} \\sim -\\frac{1}{6}x^3 $ |\n| $\\tan{x} \\sim x$                 | $x - \\tan{x} \\sim -\\frac{1}{3}x^3$     |\n| $\\arctan{x} \\sim x$              | $x - \\arctan{x} \\sim \\frac{1}{3}x^3$   |\n| $1-\\cos{x} \\sim \\frac{1}{2}x^2$  | $x^2-sin^2{x} \\sim \\frac{1}{3}x^4$     |\n| $(1+x)^{\\alpha}-1 \\sim \\alpha x$ | $x+\\sin{x} \\sim 2x$ |",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h6",
  "repo": "R01",
  "source": "01 第一讲 极限.md#六、函数极限的计算",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "六、函数极限的计算",
  "kind": "方法",
  "text": "1. **化简先行**（等价无穷小替换、恒等变形、消去更高阶无穷小）\n  $Term + Term \\iff Term \\cdot Term$\n  通过构造**项累乘**、创造分母**通分**，将式子最终化简为 $\\frac{A}{B}$ 类型\n  **设置简单因式为分母，可使求导结果简单**（简单：$x^{\\alpha}$、$e^{\\beta x}$；复杂：$\\ln{x}$、$\\arcsin{x}$、$\\arctan{x}$）\n  同类间比较，保留主要因素，消去更高阶无穷小\n2. **判别类型**（$\\frac{0}{0}$、$\\frac{\\infty}{\\infty}$、$\\infty \\cdot 0$、$\\infty-\\infty$、$\\infty^0$、$0^0$、$1^{\\infty}$）\n  $u^v = e^{v \\ln{u}}$\n3. **使用工具**（换元法、洛必达法则、**泰勒展开相消**）\n  泰勒展开相消时，注意保持分式**上下同阶**\n4. **注意条件**（总结错误点）\n  利用题目**已给数值条件**或关系条件",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h7",
  "repo": "R01",
  "source": "01 第一讲 极限.md#七、数列极限的计算",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "七、数列极限的计算",
  "kind": "方法",
  "text": "1. 若 $x_n$ 易于连续化，转换为函数极限计算\n2. 若 $x_n$ 不易于连续化，用 “夹逼准则”（或定积分定义）\n3. 若 $\\{x_n\\}$ 由递推式 $x_n = f(x_{n-1})$ 给出，用“单调有界准则”\n> **单调有界准则**：若 $x_n$ **单调**，且**有界**，则 $\\lim_{n \\to \\infty}$ 存在，$x_n$ 收敛\n> - 判断单调：$x_{n+1}-x_n \\overset{?}{=} 0 $ 或 $\\frac{x_{n+1}}{x_n} \\overset{?}{=} 1$\n>   常用**数学归纳法**\n> - 求上下界：**放缩法**",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h8",
  "repo": "R01",
  "source": "01 第一讲 极限.md#八、函数的连续",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "八、函数的连续",
  "kind": "概念",
  "text": "若 $\\lim_{x \\to x_0} f(x) = f(x_0)$，则称 $f(x)$ 在 $x_0$ 处连续\n> 而由函数极限存在条件（即左右极限存在且相等）可推之，\n> - 函数连续的充要条件：\n>   $ \\lim_{x \\to x_0^-} f(x) =   \\lim_{x \\to x_0^+} f(x) = f(x_0) $",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-01-h9",
  "repo": "R01",
  "source": "01 第一讲 极限.md#九、函数的间断",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "九、函数的间断",
  "kind": "概念",
  "text": "设 $f(x)$ 在 $x_0$ 点的某去心邻域内有定义（前提）\n- **第一类**间断点（ $ \\lim_{x \\to x_0^-} f(x)$ 和  $ \\lim_{x \\to x_0^+} f(x)$均存在）\n    - **跳跃**间断点： $ \\lim_{x \\to x_0^-} f(x) \\ne   \\lim_{x \\to x_0^+} f(x)$\n      如：$$\\lim_{x \\to 0} \\text{sgn}x$$\n    - **可去**间断点： $ \\lim_{x \\to x_0} f(x) \\ne   f(x_0)$  （函数在此点可无定义）\n      如：$$\\lim_{x \\to 1} \\frac{x^2-1}{x-1}$$\n- **第二类**间断点（ $ \\lim_{x \\to x_0^-} f(x)$ 和 $ \\lim_{x \\to x_0^+} f(x)$ 至少有一个不存在）\n    - **无穷**间断点：$\\lim_{x \\to x_0} f(x) = \\infty$\n      如：$$\\lim_{x \\to \\frac{\\pi}{2}} \\tan{x}$$\n    - **振荡**间断点：$\\lim_{x \\to x_0} f(x)$ 振荡不存在\n      如：$$\\lim_{x \\to 0} \\sin{\\frac{1}{x}}$$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h1",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#一、导数定义",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "一、导数定义",
  "kind": "概念",
  "text": "$$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$$\n\n- 导数存在的充要条件\n$$f'(x) \\,\\exists \\iff f'_-(x_0) = f'_+(x_0)$$\n\n> 左导数 $f'_-(x_0) - \\lim_{\\Delta x \\to 0^+} \\frac{f(x_0 +\\Delta x) - f(x_0)}{\\Delta x}$\n> 右导数 $f'_+(x_0) = \\lim_{\\Delta x \\to 0^+} \\frac{f(x_0 +\\Delta x) - f(x_0)}{\\Delta x}$\n\n- 插值形式\n  $$f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$$\n\n- $\\Delta x$ 的广义化\n  $$f'(x_0) = \\lim_{狗 \\to 0} \\frac{f(x_0 +狗) - f(x_0)}{狗}$$\n\n- 一静一动原则\n  例如 $\\lim_{2\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0 - \\Delta x)}{2\\Delta x} \\ne f'(x_0)$ （不成立）",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h2",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#二、基本求导公式",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "二、基本求导公式",
  "kind": "定理",
  "text": "- $(x^\\alpha)' = \\alpha x^{\\alpha-1}$\n  $(a^x)' = a^x \\ln{a}$\n  $(e^x)' = e^x \\ln{e} = e^x$\n- $(\\ln{x})' = \\frac{1}{x}$\n- $(\\sin{x})' = \\cos{x}$\n  $(\\cos{x})' = - \\sin{x}$\n- $(\\tan{x})' = \\sec^2{x}$\n  $(cot{x})' = -\\csc^2{x}$\n- $(\\sec{x})' = \\sec{x} \\tan{x}$\n  $(\\csc{x})' = -\\csc{x} \\cot{x}$\n- $(\\arcsin{x})' = \\frac{1}{\\sqrt{1-x^2}}$\n  $(\\arccos{x})' = - \\frac{1}{\\sqrt{1-x^2}}$\n- $(\\arctan{x})' = \\frac{1}{1+x^2}$\n  $(\\arccot{x})' = -\\frac{1}{1+x^2}$\n- $[\\ln{(x + \\sqrt{x^2+1})}]' = \\frac{1}{\\sqrt{x^2+1}}$\n  $[\\ln{(x + \\sqrt{x^2-1})}]' = \\frac{1}{\\sqrt{x^2-1}}$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h3-s1",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#3.1 复合函数求导",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "3.1 复合函数求导",
  "kind": "总结",
  "text": "$$\\{f[g(x)]\\}' = f'[g(x)] g'(x)$$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h3-s3",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#3.3 对数求导",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "3.3 对数求导",
  "kind": "总结",
  "text": "对于多项相乘、多项相除、开方、乘方的式子，先取对数，再求导\n$(\\ln{|u|})'_x = \\frac{1}{u} \\cdot u'$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h4-s1",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#4.1 定理总结",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "4.1 定理总结",
  "kind": "定理",
  "text": "#### 4.1.1 涉及 $f(x)$ 的定理\n设 $f(x)$ 在 $[a,b]$ 上连续，则\n1. 有界性定理\n  $$\\exists K \\gt 0 ,\\, |f(x)| \\le K ,\\, \\forall x \\in[a,b]$$\n2. 最值定理\n  $$m \\le f(x) \\le M ,\\, m = \\min{f(x)} ,\\, M = \\max{f(x)} ,\\, \\forall x \\in [a,b]$$\n3. 介值定理\n  若 $m \\le \\mu \\le M$，则 $\\exists \\xi \\in [a,b]$，使 $f(\\xi) = \\mu$\n4. 零点定理\n  若 $f(a) \\cdot f(b) \\lt 0$，则 $\\exists \\xi \\in (a,b)$，使 $f(\\xi) = 0$\n\n#### 4.1.2 涉及 $f'(x)$ 的定理\n\n1. 费马定理\n  若 $f(x)$ 在 $x=x_0$ 处**可导**且能**取极值**，则 $f'(x_0) = 0$\n\n2. 罗尔定理\n  若 $f(x)$ 满足以下三个条件：\n    - **在 $[a,b]$ 上连续**\n    - **在 $(a,b)$ 内可导**\n    - **$f(a) = f(b)$**\n\n  则 $\\exists \\xi \\in (a,b)$，使 $f'(\\xi) = 0$\n\n3. 拉格朗日中值定理\n  若 $f(x)$ 满足以下两个条件：\n    - **在 $[a,b]$ 上连续**\n    - **在 $(a,b)$ 内可导**\n\n  则 $\\exists \\xi \\in (a,b)$，使 $f'(\\xi) = \\frac{f(b)-f(a)}{b-a}$\n> （罗尔定理是拉格朗日中值定理的特例）\n\n4. 柯西中值定理\n  设 $f(x)$和 $g(x)$ 满足条件：\n    - **在 $[a,b]$ 上连续**\n    - **在 $(a,b)$ 内可导**\n    - **$g'(x) \\ne 0$**\n\n  则 $\\exists \\xi \\in (a,b)$，使 $\\frac{f(b)-f(a)}{g(b)-g(a)} = \\frac{f'(\\xi)}{g'(\\xi)}$\n> - 若 $g(x) = x$，则 $\\frac{f(b)-f(a)}{g(b)-g(a)} = \\frac{f'(\\xi)}{1}$，即拉格朗日中值定理\n> - 柯西 > 拉格朗日 > 罗尔\n\n5. 泰勒公式\n  任何可导函数 $f(x) = \\sum a_n x^n$\n    - 带拉格朗日余项的Taylor公式\n        $$f(x) = f(x_0) + f'(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + ... + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1} ,\\, \\xi \\in(x,x_0)$$\n          如：若 $f(x)$ 三阶可导，则\n          $f(x) = f(x_0) + f'(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\frac{f'''(\\xi)}{3!}(x-x_0)^3$\n          其中，当 $x_0 = 0$ 时，则得到**麦克劳林公式**\n          $f(x) = f(0) +f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(\\xi)}{3!}x^3 ,\\, \\xi \\in (x,0)$\n    - 带佩亚诺余项的Taylor公式（$f(x)$ n阶可导）\n        $$f(x) = f(x_0) + f'(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + ... + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + o[(x-x_0)^n]$$\n          如：当 $f(x)$ 三阶可导时，\n          $f(x) = f(x_0) + f'(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\frac{f'''(x_0)}{3!}(x-x_0)^3 + o[(x-x_0)^3]$\n          其中，若 $x_0 - 0$，则得到**麦克劳林公式**\n          $f(x) = f(0) +f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + o(x^3)$\n    - 常用麦克劳林公式\n        - $$e^x = 1 + x + \\frac{1}{2!}x^2 + ... + \\frac{1}{n!}x^n + o(x^n)$$\n        - $$\\ln{(1+x)} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - ... + (-1)^n \\frac{x^{n+1}}{n+1} + o(x^{n+1})$$\n        - $$\\sin{x} = x - \\frac{1}{3!}x^3 + ... + (-1)^n \\frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+1})$$\n          $\\sin{x} = x - \\frac{1}{6}x^3 + o(x^3)$\n        - $$\\cos{x} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - ... + (-1)^n \\frac{x^{2n}}{(2n)!} + o(x^{2n})$$\n        - $$(1+x)^{\\alpha} = 1 + \\alpha x + \\frac{\\alpha(\\alpha-1)}{2!}x^2 + ... + \\frac{\\alpha(\\alpha-1)...(\\alpha -n+1)}{n!} x^n + o(x^n)$$\n        - $$\\frac{1}{1-x} = 1 + x + x^2 + ... + x^n + o(x^n)$$\n        - $$\\frac{1}{1+x} = 1 - x + x^2 - ... + (-1)^n x^n + o(x^n)$$",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h4-s2",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#4.2 五大方面的应用",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "4.2 五大方面的应用",
  "kind": "方法",
  "text": "1. 涉及 $f(x)$ 的应用\n\n2. 罗尔定理的应用\n  $F(a) = F(b) \\Rightarrow F'(\\xi) = 0$\n    - 构造辅助函数 $F(x)$\n        - 求导公式 $(u \\cdot v)' = u'v+uv'$ 逆用\n            - 见 $F'(\\xi)=f'(\\xi)\\cdot \\xi+f(\\xi)=0$，构造 $F(x)=f(x)x$\n            - 见 $F'(\\xi)=[f'(\\xi)+f(\\xi)]e^{\\xi}=0$，构造 $F(x)=f(x) e^x$\n            - 见 $F'(\\xi)=[f'(\\xi)+f(\\xi) \\varphi'(\\xi)] e^{\\varphi(\\xi)}=0$，构造 $F(x)=f(x) e^{\\varphi(x)}$\n            - 见  $F'(\\xi)=f''(x)+g(x)f'(x)=0$,构造 $F(x)=f'(x) e^{\\int g(x)\\text{d}x}$\n            - 见 $F'(\\xi)=f(x)+g(x) \\int_0^x f(t)\\text{d}t =0$，构造 $F(x)=\\int_0^x f(t)\\text{d}t \\cdot e^{\\int g(x) \\text{d}x}$\n            - 见 $F'(\\xi)=f'(x)+g(x)[f(x)-1]=0$，构造 $F(x)=[f(x)-1] \\cdot e^{\\int g(x)\\text{d}x}$\n        - 积分还原法\n            1. 将欲证结论中的 $\\xi$ 改为 $x$\n            2. 积分之（为了简单，令 $c=0$）\n            3. 移项使等式一端为0，另一端记为 $F(x)$\n\n3. 拉氏中值定理的应用\n  $f'(\\xi) = \\frac{f(b)-f(a)}{b-a}$ 或 $f(b)-f(a) = f'(\\xi)(b-a)$\n  命题角度：\n    - 将 $f$ 复杂化（构造 $F(x)$）\n    - 给出相对高阶条件，证低阶不等式\n    - 给出相对低阶条件，证高阶不等式\n    - 具体化函数 $f$\n\n4. 柯西中值定理的应用\n  $\\frac{f(b)-f(a)}{g(b)-g(a)} = \\frac{f'(\\xi)}{g'(\\xi)} ,\\, \\frac{f-抽象}{g-具体}$\n    - 双中值（$\\zeta ,\\, \\eta$），有可能相等？\n        1. 无 $\\zeta \\ne \\eta$ 要求：在同一区间 $[a,b]$ 上用两次中值定理\n        2. 有 $\\zeta \\ne \\eta$ 要求：将区间 $[a,b]$ 分为 $[a,c]$ 和 $[c,b]$\n\n5. 泰勒公式的应用\n  展开成高阶",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h5-s1",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#5.1 极值与单调性",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "5.1 极值与单调性",
  "kind": "概念",
  "text": "- 极值定义\n    - 广义极值\n      存在 $x_0$ 的某个邻域，$\\forall x \\in U(x_0,\\delta) ,\\, f(x) \\le f(x_0)$，则称 $x_0$ 为 $f(x)$ 的广义极大值点\n    - 严格极值\n      存在 $x_0$ 的某个去心邻域，$\\forall x \\in \\mathring{U}(x_0,\\delta) ,\\, f(x) \\lt f(x_0)$，则称 $x_0$ 为 $f(x)$ 的严格极大值点\n\n- 单调性与极值判别\n    - 判法一：\n      若 $f'(x) \\gt 0 ,\\, \\forall x \\in I$，则 $f(x)$递增\n    - 判法二：\n      若 $f(x)$ 在 $x_0$ 处连续，在 $\\mathring{U}(x_0,\\delta)$ 内可导，\n        1. 在 $(x_0-\\delta,x_0)$ 内 $f'(x) \\lt 0$，在 $(x_0,x_0+\\delta)$ 内 $f'(x) \\gt 0$，则有极小值\n        2. 在 $(x_0-\\delta,x_0)$ 内 $f'(x) \\gt 0$，在 $(x_0,x_0+\\delta)$ 内 $f'(x) \\lt 0$，则有极大值\n    - 判法三：\n      若 $f(x)$ 在 $x_0$ 处二阶可导，$f'(x_0)=0$，$f''(x_0) \\ne 0$\n        1. $f''(x) \\gt 0$，极小\n        2. $f''(x) \\lt 0$，极大\n          > 证：\n          > 泰勒展开，得 $f(x) = f(x_0) +f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2} (x-x_0)^2 + o[(x-x_0)^2]$\n          > 因 $f'(x_0) = 0$，$f''(x_0) \\gt 0$\n          > 故 $f(x) - f(x_0) = \\frac{f''(x_0)}{2} (x-x_0)^2 + o[(x-x_0)^2] \\gt 0$\n          > $x=x_0$ 处取极大值",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h5-s2",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#5.2 凹凸性与拐点",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "5.2 凹凸性与拐点",
  "kind": "方法",
  "text": "- 凹凸性\n  $\\frac{f(x_1)+f(x_2)}{2} \\gt f(\\frac{x_1+x_2}{2}) \\iff$ 凹\n  $\\frac{f(x_1)+f(x_2)}{2} \\lt f(\\frac{x_1+x_2}{2}) \\iff$ 凸\n    - 判别方法\n      设 $f(x)$ 在 $D$ 上二阶可导\n        - 若 $f''(x) \\gt 0 ,\\, \\forall x \\in D$，则 $f(x)$ 凹\n        - 若 $f''(x) \\lt 0 ,\\, \\forall x \\in D$，则 $f(x)$ 凸\n- 拐点\n  连续曲线凹凸弧的连接点（分界点）\n    - 判别方法\n        1. 设 $f(x)$ 在 $D$ 上二阶可导\n          若 $f‘’(x)$ 在 $x_0$ 点的左右邻域内变号，则 $(x_0,f(x_0))$是拐点\n        2. 设 $f(x)$ 在 $D$ 上三阶可导\n          若 $f''(x_0) = 0$，$f'''(x_0) \\ne 0 $，则 $(x_0,f(x_0))$是拐点\n\n- 渐近线\n    - 铅锤渐近线\n      若 $\\lim_{x \\to x_0^-} f(x) = \\infty$ 或$\\lim_{x \\to x_0^+} f(x) = \\infty$\n      则 $x = x_0$ 为铅锤渐近线\n      （一般出现在：**无定义点**或**区间端点**）\n    - 水平渐近线\n      若  $\\lim_{x \\to -\\infty} f(x) = A$ 或 $\\lim_{x \\to -\\infty} f(x) = A$\n      则 $y=A$ 为水平渐近线\n    - 斜渐近线\n      若 $\\lim_{x \\to \\pm \\infty} \\frac{f(x)}{x} = a \\ne 0$，且 $ \\lim_{x \\to \\pm \\infty} |f(x)-ax| = b $ 存在，\n      则 $y = ax+b$ 是 $f(x)$ 的一条斜渐近线\n\n- 最值\n    - 闭区间 $[a,b]$ 上连续函数 $f(x)$ 的最值\n        1. 求 $f'x)=0$（驻点）、$f'(x)$不存在（不可导点）、$f(a)$和$f(b)$（端点）\n        2. 比较以上所求得的函数值，得\n          最大值 $\\max(f(x_0),f(x_1),f(a),f(b)$，\n          最小值 $\\max(f(x_0),f(x_1),f(a),f(b)$\n    - 开区间 $(a,b)$\n      记 $\\lim_{x \\to a^+} f(x) = A$， $\\lim_{x \\to b^-} f(x) = B$\n      比较 驻点、不可导点和A、B的值",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h6-s1",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#6.1 中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "6.1 中值定理",
  "kind": "定理",
  "text": "- 研究对象的复杂化\n- 区间的复杂化",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-02-h6-s2",
  "repo": "R01",
  "source": "02 第二讲 一元函数微分学.md#6.2 方程的根 $f(x)=0$",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "6.2 方程的根 $f(x)=0$",
  "kind": "定理",
  "text": "- 存在性\n    1. 零点定理 $f(a)f(b) \\lt 0 \\iff f(\\xi)=0$\n    2. 罗尔定理 $f'(\\xi)=0$\n- 唯一性\n    - 单调性\n    - 罗尔定理：\n      若 $f'(x)=0$ 至多0个根，则 $f(x)=0$ 至多1个根\n      **若 $f^{(n)}(x)=0$ 至多k个根，则 $f^{(n-1)}(x)=0$ 至多 $k+1$ 个根 **",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h1",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#零、基本积分公式",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "零、基本积分公式",
  "kind": "定理",
  "text": "- $\\int x^k\\text{d}x = \\frac{1}{k+1} x^{k+1} +C \\, (k \\ne -1)$\n\n    - $\\int \\frac{1}{x^2}\\text{d}x=-\\frac{1}{x}+C$\n\n    - $\\int \\frac{1}{\\sqrt{x}} \\text{d}x = 2\\sqrt{x} +C$\n\n- $\\int \\frac{1}{x} \\text{d}x = \\ln{|x|} + C$\n\n    - $[\\ln|u(x)|]_x' = \\frac{u_x'}{u(x)}$\n\n- $\\int a^x \\text{d}x = \\frac{1}{\\ln{a}} a^x+ C$\n\n    - $\\int e^x \\text{d}x = e^x + C$\n\n- $\\int \\sin{x} \\text{d}x = -\\cos{x} + C$\n\n- $\\int \\cos{x} \\text{d}x = \\sin{x} + C$\n\n- $\\int \\tan{x} \\text{d}x = -\\ln{|\\cos{x}|} + C$\n\n- $\\int \\cot{x} \\text{d}x = \\ln{|\\sin{x}|} + C$\n\n- $\\int \\sec{x} \\text{d}x = \\ln{|\\sec{x}+\\tan{x}|} + C$\n\n- $\\int \\csc{x} \\text{d}x = \\ln{|\\csc{x}-\\cot{x}|} + C$\n\n- $\\int \\sec^2{x} \\text{d}x = \\tan{x} + C$\n\n- $\\int \\csc^2{x} \\text{d}x = -\\cot{x} + C$\n\n- $\\int \\sec{x}\\tan{x} \\text{d}x = \\sec{x} + C$\n\n- $\\int \\csc{x}\\cot{x} \\text{d}x = -\\csc{x} + C$\n\n- $\\int \\frac{1}{\\sqrt{1-x^2}} \\text{d}x = \\arcsin{x} + C$\n\n- $\\int \\frac{1}{\\sqrt{a^2-x^2}} \\text{d}x = \\arcsin{\\frac{x}{a}} + C$\n\n- $\\int \\frac{1}{\\sqrt{x^2+a^2}} \\text{d}x = \\ln{(x+\\sqrt{x^2+a^2})} + C$\n\n- $\\int \\frac{1}{\\sqrt{x^2-a^2}} \\text{d}x = \\ln{|x+\\sqrt{x^2-a^2}|} + C$\n\n- $\\int \\frac{1}{1+x^2} \\text{d}x = \\arctan{x} + C$\n\n- $\\int \\frac{1}{a^2+x^2} \\text{d}x = \\frac{1}{a} \\arctan{\\frac{x}{a}} + C$\n\n- $\\int \\frac{1}{a^2-x^2} \\text{d}x = \\frac{1}{2a} \\ln{|\\frac{a+x}{a-x}|} + C$\n\n- $\\int \\frac{1}{x^2-a^2} \\text{d}x = \\frac{1}{2a} \\ln{|\\frac{x-a}{x+a}|} + C$\n\n- $\\int \\sqrt{a^2-x^2} \\text{d}x = \\frac{a^2}{2} \\arcsin{\\frac{x}{a}} + \\frac{x}{2} \\sqrt{a^2-x^2} + C$",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h2-s1",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#1.1 不定积分的定义",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "1.1 不定积分的定义",
  "kind": "概念",
  "text": "$\\forall x \\in I$，使 $F'(x)=f(x)$，则称 $F(x)$ 是 $f(x)$ 在 $I$ 上的**一个原函数**\n\n全体原函数就叫**不定积分**，记为 $\\int f(x) \\text{d}x=F(x)+C$\n\n> $\\int f(x)\\text{d}x$ 函数族\n\n> $\\int_a^b f(x) \\text{d}x$ 面积值（一个数）",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h2-s2",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#1.2 微积分基本定理",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "1.2 微积分基本定理",
  "kind": "定理",
  "text": "若 $f(x)$ 在 $[a,b]$ 上**连续**，则 $F(x)=\\int_a^x f(t) \\mathrm{d}t$ **可导**\n\n若 $f(x)$ 在 $[a,b]$ 上**可积**，则 $F(x)=\\int_a^x f(t) \\mathrm{d}t$ **连续**（可以有不可导点）",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h2-s3",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#1.3 原函数（不定积分）存在定理",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "1.3 原函数（不定积分）存在定理",
  "kind": "定理",
  "text": "- **连续**函数**必有**原函数\n\n- 含**跳跃**、**可去**、**无穷**间断点的 $f(x)$ 在包含该间断点的区间内**无**原函数\n\n- 含**振荡**间断点的 $f(x)$ 在该区间内**可能有**原函数",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h3",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#二、定积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "二、定积分",
  "kind": "定理",
  "text": "N-L公式：$\\int_a^b f(x) \\text{d}x = F(x)|_a^b=F(b)-F(a)$\n\nTODO：寻找原函数F(x)",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h3-s1",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#2.1 定积分精确定义",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "2.1 定积分精确定义",
  "kind": "概念",
  "text": "$$\\lim_{n\\to\\infty} \\sum_{i=1}^n f(a+\\frac{b-a}{n}i) \\frac{b-a}{n} = \\int_a^b f(x) \\mathrm{d}x$$\n\n三部曲：\n\n1. 先提出 $\\frac{1}{n}$\n\n2. 再凑出 $\\frac{i}{n}$\n\n3. $\\frac{1}{n}$ 读作 $\\int_0^1$ 上的 $\\mathrm{d}x$\n\n  $\\frac{i}{n}$ 读作 $\\int_0^1$ 上的 $x$",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h3-s2",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#2.2 可积（定积分存在）定理",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "2.2 可积（定积分存在）定理",
  "kind": "定理",
  "text": "- 若 $f(x)$ 在 $[a.b]$ 上**连续**，则可积（$\\int_a^b f(x) \\mathrm{d}x$ 存在）\n\n- 若 $f(x)$ 在 $[a.b]$ 上**有界**，且**只有有限个间断点**，则可积\n\n- 若 $f(x)$ 在 $[a.b]$ 上**单调**，则可积",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h4",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#三、变限积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "三、变限积分",
  "kind": "定理",
  "text": "$\\int_a^x f(t) \\mathrm{d}t$——变上限积分函数\n\n$\\int_x^b f(t) \\mathrm{d}t$——变下限积分函数\n\n$\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(t) \\mathrm{d}t$——变限积分\n\n- 求导公式\n\n  $$(\\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(t) \\mathrm{d}t)_x' = f[\\varphi_2(x)] \\varphi_2'(x) - f[\\varphi_1(x)] \\varphi_1(x)$$",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h5",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#四、反常积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "四、反常积分",
  "kind": "总结",
  "text": "- 无穷区间的反常积分——破坏 $[a,b]$ 有限性（$\\infty \\cdot 0 = C$)\n\n  $\\int_a^{+\\infty} f(x) \\mathrm{d}x$、$\\int_{+\\infty}^b f(x) \\mathrm{d}x$、$\\int_{\\infty}^{+\\infty} f(x) \\mathrm{d}x$\n\n- 无界函数的反常积分——破坏 $f(x)$ 的有界性\n\n  $\\int_1^{+\\infty} \\frac{1}{x^2} \\mathrm{d}x = 1$，而 $\\int_1^{+\\infty} \\frac{1}{x} \\mathrm{d}x = +\\infty$\n\n  瑕点$b$：$\\lim_{x \\to b^-} f(x) = \\infty$\n\n- 判别依据\n\n  对 $\\int_1^{+\\infty} \\frac{1}{x^p} \\mathrm{d}x$，\n\n  当 $p \\gt 1$，收敛\n\n  当 $p \\le 1$，发散",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h6-s1",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#5.1 奇偶性",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "5.1 奇偶性",
  "kind": "概念",
  "text": "- 可导 $f(x)$ 奇，则 $f'(x)$ 偶\n\n  可导 $f(x)$ 偶，则 $f'(x)$ 奇\n\n  > 证明方法：导数定义法\n\n- 可积 $f(x)$ 奇，则 $F(x) = \\int_0^x f(t) \\mathrm{d}t$ 偶，$F(x) = \\int_a^x f(t) \\mathrm{d}t$ 偶\n\n  可导 $f(x)$ 偶，则 $F(x) = \\int_0^x f(t) \\mathrm{d}t$ 奇，$F(x) = \\int_a^x f(t) \\mathrm{d}t$ 不确定",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h6-s2",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#5.2 周期性",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "5.2 周期性",
  "kind": "总结",
  "text": "- 可导 $f(x)$ 以 $T$ 为周期，则 $f'(x)$ 以 $T$ 为周期\n\n- 可积 $f(x)$ 以 $T$ 为周期，则 $f'(x)$ 以 $T$ 为周期的充要条件：$\\int_0^T f(x) \\mathrm{d}x = 0$",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h7-s1",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#6.1 凑微分法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "6.1 凑微分法",
  "kind": "总结",
  "text": "$$\\mathrm{d} u = u' \\mathrm{d}x$$",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h7-s2",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#6.2 换元法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "6.2 换元法",
  "kind": "总结",
  "text": "当凑微分不成功时，考虑换元\n\n- 三角换元\n\n  当 $f(x)$ 中含有 $\\sqrt{a^2-x^2}$、$\\sqrt{a^2+x^2}$、$\\sqrt{x^2-a^2}$，可作如下换元：\n\n  $\\sqrt{a^2-x^2} \\iff$ 令 $x = a\\sin{t} ,\\, t \\in (-\\frac{\\pi}{2},\\frac{\\pi}{2})$\n\n  $\\sqrt{a^2+x^2} \\iff$ 令 $x = a\\tan{t} ,\\, t \\in (-\\frac{\\pi}{2},\\frac{\\pi}{2})$\n\n  $\\sqrt{x^2-a^2} \\iff$ 令 $x = a\\sec{t} ,\\, t \\in (0,\\frac{\\pi}{2})\\cup(\\frac{\\pi}{2},\\pi)$\n\n  > 若见到 $\\sqrt{ax^2+bx+c}$\n\n  > 化为 $\\sqrt{\\varphi^2(x)-k^2}$、$\\sqrt{k^2-\\varphi^2(x)}$、$\\sqrt{\\varphi^2(x)+k^2}$ 再作三角换元\n\n- 倒代换\n\n  分子次数明显低于分母次数时使用，令 $t = \\frac{1}{x}$\n\n- 复杂部分代换\n\n  $\\int 狗 猫 \\text{d}x$（$猫 \\text{d}x=\\text{d}狗$，令 $t=猫$）\n\n  $\\sqrt[n]{ax+b} = t$\n\n  $\\sqrt{\\frac{ax+b}{cx+a}} = t$\n\n  $\\sqrt{a e^{bx}+c} = t$\n\n  $\\ln{x} = t$\n\n  $a^x =t$\n\n  $\\arcsin{x} = t$",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h7-s3",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#6.3 分部积分法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "6.3 分部积分法",
  "kind": "总结",
  "text": "$\\int u \\text{d}v = uv - \\int v \\text{d}u$（$难 \\iff 易$）\n\n反、对、幂、指/三",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h7-s4",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#6.4 有理函数积分",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "6.4 有理函数积分",
  "kind": "概念",
  "text": "- 定义：形如 $\\int \\frac{P_n(x)}{Q_m(x)} \\text{d}x \\, (n \\lt m)$\n\n- 方法：\n\n    1. 将 $Q_m(x)$ 因式分解\n\n    2. 将 $\\frac{P_n(x)}{Q_m(x)}$ 拆成若干最简有理分式之和\n\n    3. 拆分原则：\n\n        - $Q_m(x)$ 分解出 $(ax+b)^k$ 时，产生k项\n\n          $\\frac{A_1}{ax+b} + \\frac{A_2}{ax+b)^2} + ... + \\frac{A_k}{(ax+b)^k} ,\\, k=1,2,...$\n\n          如：$\\frac{P_n(x)}{(2x-1)^2} = \\frac{A_1}{2x-1} + \\frac{A_k}{(2x-1)^2}$\n\n        - $Q_m(x)$ 分解出 $(px^2+qx+r)^k$时，产生k项\n\n          $\\frac{A_1 x+B_1}{px^2+qx+r} + \\frac{A_2 x+B_2}{(px^2+qx+r)^2} + ... + \\frac{A_k+B_k}{(px^2+qx+r)^k}$\n\n    4. 由恒等式 列方程组，或代入特殊值直接得出系数",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h8-s1",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#7.1 N-L 公式",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "7.1 N-L 公式",
  "kind": "定理",
  "text": "$$\\int_a^b f(x) \\text{d}x = F(x)|_a^b=F(b)-F(a)$$\n\n1. 先按四大基本积分法求得原函数 $F(x)$\n\n2. 代入上下限\n\n  $$\\int_a^b f(x) \\text{d}x \\xlongequal[]{令x=\\varphi(t)} \\int_{\\varphi^{-1}(a)}^{\\varphi^{-1}(b)} f[\\varphi(t)] \\varphi'(t) \\text{d}t$$\n\n  要求 $\\varphi'(x)$ 连续，且 $x = \\varphi(t)$ 不超出区间 $[a,b]$\n\n$\\int_a^b f(x) \\mathrm{d}x = \\int_a^b f(a+b-x) \\mathrm{d}x$",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h8-s2",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#7.2 点火公式",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "7.2 点火公式",
  "kind": "定理",
  "text": "设 $I = \\int_0^{\\frac{\\pi}{2}} \\sin^n{x} \\mathrm{d}x$\n\n当n为偶数，$I_n = \\frac{n-1}{n} \\frac{n-3}{n-2} ... \\frac{1}{2} \\cdot \\frac{\\pi}{2}$\n\n当n为奇数，$I_n = \\frac{n-1}{n} \\frac{n-3}{n-2} ... \\frac{2}{3} \\cdot 1$",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h9-s1",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#8.1 用积分表达和计算平面图形的面积",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "8.1 用积分表达和计算平面图形的面积",
  "kind": "方法",
  "text": "- $y=y_1(x)$、$y=y_2(x)$、$x=a$、$x=b$（$a \\lt b$）所围成的平面图形\n\n  $\\int_a^b |y_2(x)-y_1(x)| \\text{d}x$",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h9-s2",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#8.2 用积分表达和计算旋转体的体积",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "8.2 用积分表达和计算旋转体的体积",
  "kind": "方法",
  "text": "切片、铺开\n\n- $y=f(x)$ 与 $x=a$、$x=b$（$a \\lt b$）及x轴所围图形绕x轴旋转一周所得旋转体的体积\n\n  $V_x = \\int_a^b \\pi y^2(x) \\text{d}x$\n\n- $y=f(x)$ 与 $x=a$、$x=b$（$a \\lt b$）及x轴所围图形绕y轴旋转一周所得旋转体的体积\n\n  $V_y = \\int_a^b 2\\pi x |f(x)| \\text{d}x$",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-03-h9-s3",
  "repo": "R01",
  "source": "03 第三讲 一元函数积分学.md#8.3 用积分表达和计算函数的平均值",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "8.3 用积分表达和计算函数的平均值",
  "kind": "方法",
  "text": "$f(x)$ 在 $[a,b]$上的平均值 $\\overline{y} \\triangleq \\frac{\\int_a^b f(x) \\text{d}x}{b-a}$",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-04-h1-s1",
  "repo": "R01",
  "source": "04 第四讲 多元函数微分学.md#1.1 极限的存在性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "1.1 极限的存在性",
  "kind": "定理",
  "text": "设二元函数 $f(P) = f(x,y)$ 的定义域为 $D$，$P_0 (x_0,y_0)$ 为 $D$ 的聚点。若存在常数 $A$，对任意给定正数 $\\varepsilon$，总存在正数 $\\delta$，使得当点 $P(x,y) \\in D \\cap \\mathring{U}(P_0,\\delta)$ 时，都有 $|f(P)-A| = |d(x,y)-A| \\lt \\varepsilon$，则称常数 $A$ 为函数 $f(x,y)$ 当 $(x,y) \\to (x_0,y_0)$ 时的极限，记作 $\\lim_{(x,y) \\to (x_0,y_0)} f(x,y) = A$\n\n- 除 ~~洛必达法则~~、~~单调有界准则~~、~~穷举法~~以外，可照搬一元函数求极限的方法，如：\n\n    - 等价无穷小替换\n\n    - $无穷小 \\times 有界 = 无穷小$\n\n    - 夹逼准则",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-04-h1-s2",
  "repo": "R01",
  "source": "04 第四讲 多元函数微分学.md#1.2 连续性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "1.2 连续性",
  "kind": "概念",
  "text": "若 $\\lim_{(x,y) \\to (x_0,y_0)} f(x,y) = f(x_0,y_0)$，则称 $f(x,y)$ 在 $(x_0,y_0)$ 处连续\n\n若间断，则就是间断，不讨论间断类型",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-04-h1-s3",
  "repo": "R01",
  "source": "04 第四讲 多元函数微分学.md#1.3 偏导数",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "1.3 偏导数",
  "kind": "概念",
  "text": "- 水平偏导数\n\n  $$f_x'(x_0,y_0) = \\frac{\\partial{f(x_0,y_0)}}{\\partial{x}} \\triangleq \\lim_{\\Delta x \\to 0} \\frac{f(x_0+\\Delta x,y_0) - f(x_0,y_0)}{\\Delta x}$$\n\n- 铅垂偏导数\n\n  $$f_y'(x_0,y_0) = \\frac{\\partial{f(x_0,y_0)}}{\\partial{y}} \\triangleq \\lim_{\\Delta y \\to 0} \\frac{f(x_0,y_0+\\Delta y) - f(x_0,y_0)}{\\Delta y}$$\n\n- 偏导数的连续性\n  若 $ \\begin{cases}  \\lim_{\\Delta x \\to 0 \\atop \\Delta y \\to 0} f'_x(x,y) = f'_x(x_0,y_0) \\\\  \\lim_{\\Delta x \\to 0 \\atop \\Delta y \\to 0} f'_y(x,y) = f'_y(x_0,y_0) \\\\ \\end{cases} $，则称 $f(x,y)$ 在 $(x_0,y_0)$  处的偏导数连续",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r01-04-h1-s4",
  "repo": "R01",
  "source": "04 第四讲 多元函数微分学.md#1.4 可微性",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "1.4 可微性",
  "kind": "总结",
  "text": "- $\\Delta z = f(x_0+\\Delta x,y_0+\\Delta y) - f(x_0,y_0)$\n\n- 线性增量 $A \\Delta x + B \\Delta y ,\\, \\begin{cases}A=f_x'(x_0,y_0)\\\\B=f_y'(x_0,y_0)\\\\\\end{cases}$\n\n- 若 $\\lim_{\\Delta x \\to 0 \\atop \\Delta y \\to 0} \\frac{\\Delta z - (A \\Delta x + B \\Delta y)}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}} = 0$，则 $f(x,y)$ 在 $(x_0,y_0)$ 可微\n\n- $\\Delta z = (A \\Delta x + B \\Delta y) + o(\\sqrt{(\\Delta x)^2+(\\Delta y)^2})$\n\n- 全微分 $\\mathrm{d}z|_{(x_0,y_0)} = f'_x(x_0,y_0) \\mathrm{d}x + f'_y(x_0,y_0) \\mathrm{d}y$",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h0",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#概述",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "概述",
  "kind": "总结",
  "text": "# 第18讲：多元函数积分学 总结",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#一、本章概览",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "一、本章概览",
  "kind": "定理",
  "text": "第18讲是多元函数积分学的综合章节，核心是把**区域积分、曲线积分、曲面积分**统一起来，并通过格林公式、高斯公式、斯托克斯公式完成相互转化。\n\n**考查内容：** 三重积分、第一型曲线积分、第一型曲面积分、第二型曲线积分、第二型曲面积分、空间第二型曲线积分。\n\n**重难点：** 第二型曲线积分、第二型曲面积分、格林公式、高斯公式、斯托克斯公式。\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h2-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#1. 概念与几何意义",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "1. 概念与几何意义",
  "kind": "概念",
  "text": "- 记号：三重积分记作\n\n$$\n\\iiint_\\Omega f(x,y,z)\\,dV\n$$\n\n- 区域：Ω 为空间区域\n- 几何意义：当 $f=1$ 时，积分值为区域体积\n- 物理意义：若 $f$ 为密度，则积分值为空间物体质量\n\n$$\nV=\\iiint_\\Omega 1\\,dV,\\qquad m=\\iiint_\\Omega \\rho(x,y,z)\\,dV\n$$",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h2-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#2. 性质与对称性",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "2. 性质与对称性",
  "kind": "定理",
  "text": "| 性质 | 结论 |\n|------|------|\n| 线性性 | $\\iiint_\\Omega (af+bg)\\,dV=a\\iiint_\\Omega f\\,dV+b\\iiint_\\Omega g\\,dV$ |\n| 区域可加性 | 区域可拆，则积分可拆 |\n| 保号性 | 若 $f\\ge 0$，则 $\\iiint_\\Omega f\\,dV\\ge 0$ |\n| 估值性 | 若 $m\\le f\\le M$，则 $mV(\\Omega)\\le \\iiint_\\Omega f\\,dV\\le MV(\\Omega)$ |\n\n**普通对称性：**\n\n- 区域关于 $x=0$ 对称，且 $f(-x,y,z)=-f(x,y,z)$，则积分为 0\n- 区域关于 $x=0$ 对称，且 $f(-x,y,z)=f(x,y,z)$，则可取半区域再乘 2\n- 关于 $y,z$ 的情形同理\n\n**轮换对称性：**\n\n若区域关于 $x,y,z$ 轮换不变，则\n\n$$\n\\iiint_\\Omega x^2\\,dV=\\iiint_\\Omega y^2\\,dV=\\iiint_\\Omega z^2\\,dV\n$$\n\n张宇提醒：先看区域对称，再看被积函数奇偶，能消就先消。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h2-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#3. 计算方法",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "3. 计算方法",
  "kind": "方法",
  "text": "| 方法 | 适用场景 | 公式要点 |\n|------|---------|---------|\n| **直角坐标法** | 一般空间区域 | 先一后二、先二后一 |\n| **柱面坐标法** | 投影为圆、圆环、扇形 | $x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z,\\ dV=r\\,dr\\,d\\theta\\,dz$ |\n| **球面坐标法** | 球、球壳、圆锥区域 | $x=\\rho\\sin\\varphi\\cos\\theta,\\ y=\\rho\\sin\\varphi\\sin\\theta,\\ z=\\rho\\cos\\varphi$ |\n| **换元法** | 区域或函数经变量代换后变简单 | 乘雅可比绝对值 |\n\n球面坐标体积元：\n\n$$\ndV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta\n$$\n\n**选法口诀：** 直角坐标看截面，柱面坐标看投影圆，球面坐标看球与锥。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h2-s4",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#4. 应用",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "4. 应用",
  "kind": "方法",
  "text": "| 应用 | 公式 |\n|------|------|\n| 体积 | $V=\\iiint_\\Omega 1\\,dV$ |\n| 质量 | $m=\\iiint_\\Omega \\rho\\,dV$ |\n| 质心 | $\\bar x=\\frac{1}{m}\\iiint_\\Omega x\\rho\\,dV$，$\\bar y,\\bar z$ 同理 |\n| 转动惯量 | $I_z=\\iiint_\\Omega (x^2+y^2)\\rho\\,dV$ |\n\n---",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h3-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#1. 概念、性质与对称性",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "1. 概念、性质与对称性",
  "kind": "概念",
  "text": "第一型曲线积分是**对弧长的积分**：\n\n$$\n\\int_L f(x,y)\\,ds\n$$\n\n空间曲线中写作：\n\n$$\n\\int_L f(x,y,z)\\,ds\n$$\n\n- 当 $f=1$ 时，积分值为曲线弧长\n- 当 $f$ 为线密度时，积分值为曲线质量\n- 与曲线方向无关\n- 可利用普通对称性和轮换对称性",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h3-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#2. 计算方法",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "2. 计算方法",
  "kind": "方法",
  "text": "| 曲线形式 | 弧长微元 |\n|---------|----------|\n| $y=y(x)$ | $ds=\\sqrt{1+[y'(x)]^2}\\,dx$ |\n| $x=x(y)$ | $ds=\\sqrt{1+[x'(y)]^2}\\,dy$ |\n| $x=x(t),\\ y=y(t)$ | $ds=\\sqrt{x'^2(t)+y'^2(t)}\\,dt$ |\n| 极坐标 $r=r(\\theta)$ | $ds=\\sqrt{r^2+[r'(\\theta)]^2}\\,d\\theta$ |\n| 空间参数式 | $ds=\\sqrt{x'^2(t)+y'^2(t)+z'^2(t)}\\,dt$ |\n\n**核心：** 第一型曲线积分统一化为一元定积分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h3-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#3. 应用",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "3. 应用",
  "kind": "方法",
  "text": "- 求弧长\n- 求线质量\n- 求质心\n- 求转动惯量\n\n---",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h4-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#1. 概念、性质与对称性",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "1. 概念、性质与对称性",
  "kind": "概念",
  "text": "第一型曲面积分是**对面积的积分**：\n\n$$\n\\iint_\\Sigma f(x,y,z)\\,dS\n$$\n\n- 当 $f=1$ 时，积分值为曲面面积\n- 当 $f$ 为面密度时，积分值为曲面质量\n- 与曲面侧无关\n- 可用对称性化简",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h4-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#2. 计算方法",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "2. 计算方法",
  "kind": "方法",
  "text": "若曲面为 $z=z(x,y)$，投影区域为 $D_{xy}$，则\n\n$$\ndS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy\n$$\n\n因此\n\n$$\n\\iint_\\Sigma f(x,y,z)\\,dS\n=\\iint_{D_{xy}} f(x,y,z(x,y))\\sqrt{1+z_x^2+z_y^2}\\,dxdy\n$$\n\n类似地：\n\n| 曲面形式 | 面积微元 |\n|---------|----------|\n| $z=z(x,y)$ | $dS=\\sqrt{1+z_x^2+z_y^2}\\,dxdy$ |\n| $x=x(y,z)$ | $dS=\\sqrt{1+x_y^2+x_z^2}\\,dydz$ |\n| $y=y(z,x)$ | $dS=\\sqrt{1+y_z^2+y_x^2}\\,dzdx$ |\n\n**核心：** 第一型曲面积分化为二重积分。\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h5-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#1. 概念与物理意义",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "1. 概念与物理意义",
  "kind": "概念",
  "text": "平面第二型曲线积分是**向量场沿有向曲线做功**：\n\n$$\n\\int_L P(x,y)\\,dx+Q(x,y)\\,dy\n$$\n\n其中 $\\vec F=P\\vec i+Q\\vec j$，微位移 $d\\vec s=(dx,dy)$。\n\n$$\n\\int_L P\\,dx+Q\\,dy=\\int_L \\vec F\\cdot d\\vec s\n$$\n\n⚠️ 第二型曲线积分与方向有关，反向取负号。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h5-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#2. 基本计算",
  "subject": "gaoshu",
  "topic": "基本计算",
  "title": "2. 基本计算",
  "kind": "方法",
  "text": "若 $x=x(t),\\ y=y(t)$，$t:\\alpha\\to\\beta$，则\n\n$$\n\\int_L P\\,dx+Q\\,dy\n=\\int_\\alpha^\\beta [P(x(t),y(t))x'(t)+Q(x(t),y(t))y'(t)]\\,dt\n$$\n\n**核心：** 一投二代三看方向。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h5-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#3. 格林公式",
  "subject": "gaoshu",
  "topic": "格林公式",
  "title": "3. 格林公式",
  "kind": "定理",
  "text": "若 $L$ 为区域 $D$ 的正向边界，则\n\n$$\n\\oint_L P\\,dx+Q\\,dy\n=\\iint_D\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dxdy\n$$\n\n**使用条件：**\n\n- $L$ 必须是闭曲线\n- 正向为逆时针方向\n- $P,Q$ 在区域内有连续一阶偏导数\n\n**张宇核心提示：** 不闭合就补线，补完用格林公式，再减去补线积分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h5-s4",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#4. 路径无关",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "4. 路径无关",
  "kind": "总结",
  "text": "在单连通区域内，若\n\n$$\n\\frac{\\partial P}{\\partial y}=\\frac{\\partial Q}{\\partial x}\n$$\n\n则 $\\int_L P\\,dx+Q\\,dy$ 与路径无关。\n\n若存在原函数 $u(x,y)$，使\n\n$$\ndu=P\\,dx+Q\\,dy\n$$\n\n则\n\n$$\n\\int_A^B P\\,dx+Q\\,dy=u(B)-u(A)\n$$\n\n---",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h6-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#1. 概念与物理意义",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "1. 概念与物理意义",
  "kind": "概念",
  "text": "第二型曲面积分是**向量场通过有向曲面的通量**：\n\n$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy\n$$\n\n若 $\\vec F=P\\vec i+Q\\vec j+R\\vec k$，则\n\n$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy\n=\\iint_\\Sigma \\vec F\\cdot \\vec n\\,dS\n$$\n\n⚠️ 第二型曲面积分与曲面侧有关，换侧取负号。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h6-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#2. 与第一型曲面积分的关系",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "2. 与第一型曲面积分的关系",
  "kind": "总结",
  "text": "若 $\\vec n=(\\cos\\alpha,\\cos\\beta,\\cos\\gamma)$，则\n\n$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy\n=\\iint_\\Sigma (P\\cos\\alpha+Q\\cos\\beta+R\\cos\\gamma)\\,dS\n$$",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h6-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#3. 投影计算法",
  "subject": "gaoshu",
  "topic": "投影计算法",
  "title": "3. 投影计算法",
  "kind": "方法",
  "text": "若曲面为 $z=z(x,y)$，取上侧，则\n\n$$\n\\vec n\\,dS=(-z_x,-z_y,1)\\,dxdy\n$$\n\n所以\n\n$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy\n=\\iint_{D_{xy}}(-Pz_x-Qz_y+R)\\,dxdy\n$$\n\n取下侧时结果取相反数。\n\n**张宇口诀：** 一投、二代、三定号。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h6-s4",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#4. 高斯公式",
  "subject": "gaoshu",
  "topic": "高斯公式",
  "title": "4. 高斯公式",
  "kind": "定理",
  "text": "若 Σ 是闭曲面，取外侧，则\n\n$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy\n=\\iiint_\\Omega\\left(\\frac{\\partial P}{\\partial x}\n+\\frac{\\partial Q}{\\partial y}\n+\\frac{\\partial R}{\\partial z}\\right)dV\n$$\n\n**使用条件：**\n\n- 曲面必须封闭\n- 方向必须取外法向\n- $P,Q,R$ 在区域内有连续一阶偏导数\n\n**张宇核心提示：** 不封闭就补面，补完用高斯公式，再减去补面通量。\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h7-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#1. 概念",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "1. 概念",
  "kind": "概念",
  "text": "空间第二型曲线积分表示空间向量场沿有向空间曲线做功：\n\n$$\n\\int_\\Gamma P\\,dx+Q\\,dy+R\\,dz\n$$",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h7-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#2. 参数化计算",
  "subject": "gaoshu",
  "topic": "参数化计算",
  "title": "2. 参数化计算",
  "kind": "方法",
  "text": "若\n\n$$\nx=x(t),\\quad y=y(t),\\quad z=z(t)\n$$\n\n则\n\n$$\n\\int_\\Gamma P\\,dx+Q\\,dy+R\\,dz\n=\\int_\\alpha^\\beta [Px'(t)+Qy'(t)+Rz'(t)]\\,dt\n$$\n\n其中 $P,Q,R$ 都要代入 $x(t),y(t),z(t)$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h7-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#3. 斯托克斯公式",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "3. 斯托克斯公式",
  "kind": "定理",
  "text": "若 $\\Gamma$ 是有向曲面 $\\Sigma$ 的边界，且方向满足右手法则，则\n\n$$\n\\oint_\\Gamma P\\,dx+Q\\,dy+R\\,dz\n=\\iint_\\Sigma (\\nabla\\times \\vec F)\\cdot \\vec n\\,dS\n$$\n\n展开式为\n\n$$\n\\oint_\\Gamma P\\,dx+Q\\,dy+R\\,dz\n=\\iint_\\Sigma\n\\left(\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z}\\right)dy\\,dz\n+\\left(\\frac{\\partial P}{\\partial z}-\\frac{\\partial R}{\\partial x}\\right)dz\\,dx\n+\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dx\\,dy\n$$\n\n**张宇核心提示：** 斯托克斯公式本质是把空间闭曲线积分化为曲面积分。\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h8",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#八、五类积分对比",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "八、五类积分对比",
  "kind": "总结",
  "text": "| 类型 | 记号 | 对象 | 是否有方向 | 常见意义 |\n|------|------|------|------------|----------|\n| 三重积分 | $\\iiint_\\Omega f\\,dV$ | 空间区域 | 无 | 体积、质量 |\n| 第一型曲线积分 | $\\int_L f\\,ds$ | 曲线 | 无 | 弧长、线质量 |\n| 第一型曲面积分 | $\\iint_\\Sigma f\\,dS$ | 曲面 | 无 | 面积、面质量 |\n| 第二型曲线积分 | $\\int_L P\\,dx+Q\\,dy$ | 有向曲线 | 有 | 做功 |\n| 第二型曲面积分 | $\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy$ | 有向曲面 | 有 | 通量 |\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h9",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#九、三大公式总表",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "九、三大公式总表",
  "kind": "定理",
  "text": "| 公式 | 沟通关系 | 关键词 |\n|------|----------|--------|\n| **格林公式** | 平面第二型曲线积分 $\\leftrightarrow$ 二重积分 | 补线、闭曲线、逆时针 |\n| **高斯公式** | 第二型曲面积分 $\\leftrightarrow$ 三重积分 | 补面、闭曲面、外法向 |\n| **斯托克斯公式** | 空间第二型曲线积分 $\\leftrightarrow$ 第二型曲面积分 | 右手法则、边界曲线 |\n\n记忆：\n\n$$\n\\text{格林：线变面}\\qquad\n\\text{高斯：面变体}\\qquad\n\\text{斯托克斯：空间线变面}\n$$\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h10",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#十、张宇特别强调的易错点",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "十、张宇特别强调的易错点",
  "kind": "总结",
  "text": "1. **第一型无方向，第二型有方向。**\n2. **第二型曲线积分反向取负号。**\n3. **第二型曲面积分换侧取负号。**\n4. **格林公式必须闭曲线，不闭合要补线。**\n5. **高斯公式必须闭曲面，不闭合要补面。**\n6. **斯托克斯公式要检查曲线方向与曲面法向是否满足右手法则。**\n7. **曲线/曲面积分可用曲线或曲面方程代入化简，被积区域上的二重/三重积分不能乱代。**\n8. **柱面坐标别漏 $r$，球面坐标别漏 $\\rho^2\\sin\\varphi$。**\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h11-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#1. 先识别积分类型",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "1. 先识别积分类型",
  "kind": "总结",
  "text": "- 出现 $dV$：三重积分\n- 出现 $ds$：第一型曲线积分\n- 出现 $dS$：第一型曲面积分\n- 出现 $dx,dy,dz$：第二型曲线积分\n- 出现 $dy\\,dz,dz\\,dx,dx\\,dy$：第二型曲面积分",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h11-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#2. 再看能否化简",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "2. 再看能否化简",
  "kind": "概念",
  "text": "检查顺序：\n\n对称性 $\\to$ 奇偶性 $\\to$ 曲线/曲面方程代入 $\\to$ 换元 $\\to$ 三大公式",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h11-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#3. 最后选计算工具",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "3. 最后选计算工具",
  "kind": "方法",
  "text": "| 题型 | 优先工具 |\n|------|----------|\n| 三重积分 | 直角、柱面、球面坐标 |\n| 第一型曲线积分 | 参数化 |\n| 第一型曲面积分 | 投影到坐标面 |\n| 平面第二型曲线积分 | 参数化、格林公式 |\n| 第二型曲面积分 | 投影法、高斯公式 |\n| 空间第二型曲线积分 | 参数化、斯托克斯公式 |\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-h12",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学-重写总结.md#十二、与第17讲的联系",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "十二、与第17讲的联系",
  "kind": "概念",
  "text": "- 第17讲二重积分是基础，本讲把积分对象推广到空间区域、曲线、曲面。\n- 三重积分是“二重积分的空间版”。\n- 第一型曲线/曲面积分本质是“带弧长/面积微元的重积分”。\n- 第二型曲线/曲面积分引入方向，是后续格林、高斯、斯托克斯公式的核心。\n\n一句话总结：第18讲的主线就是 **积分类型识别 + 对称性化简 + 坐标/参数化计算 + 三大公式转化**。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h0",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#概述",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "概述",
  "kind": "总结",
  "text": "# 第18讲：多元函数积分学 总结",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#一、本章概览",
  "subject": "gaoshu",
  "topic": "本章概览",
  "title": "一、本章概览",
  "kind": "定理",
  "text": "本讲是高等数学的**核心难点之一**，涵盖三大积分类型及其计算方法、物理几何意义、以及三大著名公式。\n\n---",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h2-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#1. 定义与几何意义",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "1. 定义与几何意义",
  "kind": "概念",
  "text": "- 被积函数 $f(x,y,z)$ 是空间区域 $\\Omega$ 上的函数\n- 几何意义：空间区域的**质量**（当 $f=1$ 时数值等于体积）",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h2-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#2. 计算方法",
  "subject": "gaoshu",
  "topic": "计算方法",
  "title": "2. 计算方法",
  "kind": "方法",
  "text": "| 方法 | 适用场景 | 公式要点 |\n|------|---------|---------|\n| **直角坐标法** | 一般区域 | 先一后二（先 $z$ 后 $xy$）、先二后一（截面法） |\n| **柱坐标法** | 投影为圆/圆形区域 | $x=r\\cos\\theta,\\ y=r\\sin\\theta,\\ z=z$，$dV=r\\,dr\\,d\\theta\\,dz$ |\n| **球坐标法** | 球/球壳/圆锥区域 | $x=\\rho\\sin\\varphi\\cos\\theta,\\ y=\\rho\\sin\\varphi\\sin\\theta,\\ z=\\rho\\cos\\varphi$，$dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$ |\n\n**张宇口诀：** 直角坐标看截面，柱坐标看投影圆，球坐标看旋转锥。\n\n---",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h3-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#1. 第一类曲线积分（对弧长的曲线积分）",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "1. 第一类曲线积分（对弧长的曲线积分）",
  "kind": "概念",
  "text": "- **记号：** $\\displaystyle\\int_L f(x,y)\\,ds$\n- **物理意义：** 曲线质量（$f$ 为线密度）\n- **计算核心：** $ds = \\sqrt{(dx)^2+(dy)^2} = \\sqrt{1+y'^2}\\,dx$（显式）或 $\\sqrt{x'^2(t)+y'^2(t)}\\,dt$（参数式）\n- **对称性：** 与路径方向无关，$f$ 为奇/偶函数可利用对称性简化",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h3-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#2. 第二类曲线积分（对坐标的曲线积分）",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "2. 第二类曲线积分（对坐标的曲线积分）",
  "kind": "方法",
  "text": "- **记号：** $\\displaystyle\\int_L P(x,y)\\,dx + Q(x,y)\\,dy$\n- **物理意义：** 变力沿曲线做的**功**\n- **计算核心：** 参数化法 $x=x(t), y=y(t)$，代入化为定积分\n- **⚠️ 与 $L$ 方向有关！** 反向取负号",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h3-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#3. 两者关系",
  "subject": "gaoshu",
  "topic": "向量代数",
  "title": "3. 两者关系",
  "kind": "总结",
  "text": "$$\n\\int_L P\\,dx+Q\\,dy = \\int_L (P\\cos\\alpha+Q\\cos\\beta)\\,ds\n$$\n\n其中 $\\cos\\alpha,\\cos\\beta$ 为切向量的方向余弦。\n\n---",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h4-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#1. 第一类曲面积分（对面积的曲面积分）",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "1. 第一类曲面积分（对面积的曲面积分）",
  "kind": "概念",
  "text": "- **记号：** $\\displaystyle\\iint_\\Sigma f(x,y,z)\\,dS$\n- **物理意义：** 曲面质量（$f$ 为面密度）\n- **计算核心：** 投影到 $xOy$ 面 $\\to$ $dS = \\sqrt{1+z_x^2+z_y^2}\\,dxdy$\n- **对称性丰富**，与曲面侧无关",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h4-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#2. 第二类曲面积分（对坐标的曲面积分）",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "2. 第二类曲面积分（对坐标的曲面积分）",
  "kind": "方法",
  "text": "- **记号：** $\\displaystyle\\iint_\\Sigma P\\,dy\\,dz + Q\\,dz\\,dx + R\\,dx\\,dy$\n- **物理意义：** **通量（流量）**——流体穿过曲面的流量\n- **⚠️ 与曲面侧（方向）有关！** 取外法向为正\n- **计算核心：** 分项投影法（分别投影到 $yOz$, $zOx$, $xOy$ 面）\n- 张宇强调：**一投、二代、三定号**",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h4-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#3. 两者关系",
  "subject": "gaoshu",
  "topic": "两者关系",
  "title": "3. 两者关系",
  "kind": "总结",
  "text": "$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy = \\iint_\\Sigma (P\\cos\\alpha+Q\\cos\\beta+R\\cos\\gamma)\\,dS\n$$\n\n---",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h5",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#五、三大公式（张宇重点中的重点）",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "五、三大公式（张宇重点中的重点）",
  "kind": "定理",
  "text": "| 公式 | 沟通关系 | 表达式 |\n|------|---------|--------|\n| **格林公式 Green** | 二重积分 $\\leftrightarrow$ 第二类曲线积分 | $\\displaystyle\\iint_D\\Big(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\Big)dxdy = \\oint_L P\\,dx+Q\\,dy$ |\n| **高斯公式 Gauss** | 三重积分 $\\leftrightarrow$ 第二类曲面积分 | $\\displaystyle\\iiint_\\Omega\\Big(\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}\\Big)dV = \\oiint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy$ |\n| **斯托克斯公式 Stokes** | 曲面积分 $\\leftrightarrow$ 第二类曲线积分 | $\\displaystyle\\iint_\\Sigma\\Big(\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z}\\Big)dy\\,dz+\\cdots = \\oint_L P\\,dx+Q\\,dy+R\\,dz$ |\n\n**张宇核心提示：**\n- 格林公式——**补线法**（当 $L$ 不封闭时补直线/折线）\n- 高斯公式——**补面法**（当 $\\Sigma$ 不封闭时补平面）\n- 三者都是 **积分与路径/曲面无关的条件** 的桥梁\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h6",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#六、场论初步",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "六、场论初步",
  "kind": "概念",
  "text": "| 概念 | 定义 | 公式 |\n|------|------|------|\n| **梯度 gradient** | $\\text{grad}\\,u$ | $\\displaystyle\\Big(\\frac{\\partial u}{\\partial x},\\frac{\\partial u}{\\partial y},\\frac{\\partial u}{\\partial z}\\Big)$ |\n| **散度 divergence** | $\\text{div}\\,\\vec{F}$ | $\\displaystyle\\frac{\\partial P}{\\partial x}+\\frac{\\partial Q}{\\partial y}+\\frac{\\partial R}{\\partial z}$ |\n| **旋度 curl** | $\\text{rot}\\,\\vec{F}$ | $\\displaystyle\\Big(\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z},\\ \\frac{\\partial P}{\\partial z}-\\frac{\\partial R}{\\partial x},\\ \\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\Big)$ |\n\n**物理对应：**\n- 散度 $\\to$ 高斯公式左边 = 通量密度\n- 旋度 $\\to$ 斯托克斯公式左边 = 环量密度\n- 梯度 $\\to$ 方向导数的最大值\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h7",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#七、张宇特别强调的易错点",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "七、张宇特别强调的易错点",
  "kind": "总结",
  "text": "1. **曲线/曲面积分代入性**：可用积分曲线/曲面方程简化被积函数（⚠️ 二重/三重积分不能这样代入！）\n2. **第二类曲面积分\"侧\"的判断**：上/下、前/后、左/右 $\\to$ 左手法则\n3. **奇偶性 + 对称性**：三重积分/第一类曲线曲面积分用**对称性**消项；第二类曲线/曲面积分用**奇偶性**时注意方向\n4. **化简优先**：拿到积分题先看对称性 $\\to$ 代入化简 $\\to$ 再选计算方法\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h8",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#八、典型题解题流程",
  "subject": "gaoshu",
  "topic": "高斯公式",
  "title": "八、典型题解题流程",
  "kind": "方法",
  "text": "检查对称性/奇偶性 $\\to$ 代入曲线/曲面方程化简 $\\to$\n\n- **三重积分：** 选坐标系（直角/柱/球）\n- **曲线积分：** 格林公式（可补线）$\\to$ 参数化法 $\\to$ 凑微分\n- **曲面积分：** 高斯公式（可补面）$\\to$ 投影法 $\\to$ 分项计算\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-18-1sc6ei3-h9",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第18讲-多元函数积分学.md#九、与其他讲的联系",
  "subject": "gaoshu",
  "topic": "高斯公式",
  "title": "九、与其他讲的联系",
  "kind": "定理",
  "text": "- **第17讲**（二重积分）是基础 $\\to$ 三维拓展到三重积分、线面积分\n- **三大公式**完美连接了 重积分 $\\leftrightarrow$ 线积分 $\\leftrightarrow$ 面积分，是多元函数积分的**灵魂**\n- 考研中第18讲常以**一道综合大题（10-12分）**形式出现，尤其是高斯公式 + 补面法 + 三重积分混合题",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h0",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#概述",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "概述",
  "kind": "总结",
  "text": "# 第18讲：多元函数积分学（详细版）\n\n> 基于张宇《基础30讲》第488-545页整理，覆盖考纲全部要求。\n\n---",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h1-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#考纲内容",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "考纲内容",
  "kind": "定理",
  "text": "三重积分、第一型曲线积分、第一型曲面积分、第二型曲线积分、第二型曲面积分，以及配套的格林公式、高斯公式、斯托克斯公式。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h1-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#重难点星级",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "重难点星级",
  "kind": "定理",
  "text": "| 内容 | 难度 | 核心工具 |\n|------|:----:|:--------:|\n| 三重积分 | ★★ | 直角/柱/球坐标、换元法 |\n| 第一型曲线积分 | ★★ | 化为定积分 |\n| 第一型曲面积分 | ★★ | 化为二重积分 |\n| **平面第二型曲线积分** | ★★★ | **格林公式** |\n| **第二型曲面积分** | ★★★★★ | **高斯公式** |\n| **空间第二型曲线积分** | ★★★ | **斯托克斯公式** |",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h1-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#重要分类",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "重要分类",
  "kind": "总结",
  "text": "- **1、2、3类积分**（三重积分、第一型曲线积分、第一型曲面积分）→ 数量函数 → **具有几何意义**\n- **4、5、6类积分**（第二型曲线积分、第二型曲面积分）→ 向量函数 → **具有物理意义**\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h2-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#1.1 概念",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "1.1 概念",
  "kind": "概念",
  "text": "三重积分是二重积分在空间区域上的推广：\n\n$$\n\\iiint_\\Omega f(x,y,z)\\,dV\n$$\n\n其中 $\\Omega$ 为空间闭区域，$f(x,y,z)$ 为空间点函数。\n\n**意义：**\n- $f=1$ 时，三重积分 $=$ 区域 $\\Omega$ 的体积\n- $f$ 为密度时，三重积分 $=$ 空间物体质量\n- 可进一步求质心、转动惯量、引力等",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h2-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#1.2 性质",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "1.2 性质",
  "kind": "定理",
  "text": "常用性质与二重积分类似：\n\n- **线性性：** $\\iiint_\\Omega (af+bg)\\,dV = a\\iiint_\\Omega f\\,dV + b\\iiint_\\Omega g\\,dV$\n- **区域可加性：** $\\Omega = \\Omega_1 \\cup \\Omega_2$ 且不重叠，则积分等于两部分之和\n- **保号性：** $f\\ge 0 \\Rightarrow \\iiint_\\Omega f\\,dV \\ge 0$\n- **估值性质：** $m\\le f\\le M \\Rightarrow m V(\\Omega) \\le \\iiint_\\Omega f\\,dV \\le M V(\\Omega)$\n- **积分中值定理：** $\\iiint_\\Omega f\\,dV = f(\\xi) V(\\Omega)$",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h2-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#1.3 对称性",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "1.3 对称性",
  "kind": "概念",
  "text": "#### 普通对称性\n若 $\\Omega$ 关于 $x=0$ 对称：\n- $f$ 为 $x$ 的奇函数（$f(-x,y,z)=-f$）$\\Rightarrow$ 积分为 $0$\n- $f$ 为 $x$ 的偶函数（$f(-x,y,z)=f$）$\\Rightarrow$ 积分为半区域的 $2$ 倍\n\n同理可用于 $y$、$z$ 变量。\n\n#### 轮换对称性\n若 $\\Omega$ 在 $x,y,z$ 轮换下不变，则可轮换变量：\n\n$$\n\\iiint_\\Omega x^2\\,dV = \\iiint_\\Omega y^2\\,dV = \\iiint_\\Omega z^2\\,dV\n$$\n\n常用于球、圆锥等对称区域。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h2-s4",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#1.4 计算方法",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "1.4 计算方法",
  "kind": "方法",
  "text": "三重积分的核心思想：**化为一个二重积分 + 一个定积分**\n\n#### 直角坐标法\n\n**先一后二法（投影法）：**\n\n$$\n\\Omega = \\{(x,y,z)\\mid (x,y)\\in D,\\ z_1(x,y)\\le z\\le z_2(x,y)\\}\n$$\n\n$$\n\\iiint_\\Omega f\\,dV = \\iint_D \\left[\\int_{z_1(x,y)}^{z_2(x,y)} f(x,y,z)\\,dz\\right] dxdy\n$$\n\n适合\"上、下曲面\"容易写出的区域。\n\n**先二后一法（截面法）：**\n\n$$\n\\iiint_\\Omega f\\,dV = \\int_a^b \\iint_{D_z} f(x,y,z)\\,dxdy\\,dz\n$$\n\n适合截面形状简单的区域。\n\n#### 柱面坐标法\n\n$$\nx = r\\cos\\theta,\\quad y = r\\sin\\theta,\\quad z = z\n$$\n\n$$\ndV = r\\,dr\\,d\\theta\\,dz\n$$\n\n适合：\n- 投影到 $xOy$ 面后是圆、圆环、扇形\n- 区域由圆柱面、旋转曲面确定\n- 被积函数含 $x^2+y^2$\n\n#### 球面坐标法\n\n$$\nx = \\rho\\sin\\varphi\\cos\\theta,\\quad\ny = \\rho\\sin\\varphi\\sin\\theta,\\quad\nz = \\rho\\cos\\varphi\n$$\n\n$$\ndV = \\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta\n$$\n\n适合：\n- 区域由球面、球壳、圆锥面围成\n- 被积函数含 $x^2+y^2+z^2$\n- 区域具有球对称性\n\n**常用转化：**\n- 球面 $x^2+y^2+z^2=a^2 \\Rightarrow \\rho=a$\n- 圆锥面常化为 $\\varphi=$ 常数\n- 上半空间 $z\\ge0 \\Rightarrow 0\\le\\varphi\\le\\pi/2$\n\n#### 换元法（一般情形）\n\n$$\n\\iiint_\\Omega f(x,y,z)\\,dxdydz = \\iiint_{\\Omega'} f(x(u,v,w),\\cdots) \\left|\\frac{\\partial(x,y,z)}{\\partial(u,v,w)}\\right| du\\,dv\\,dw\n$$\n\n**重点：** 正确计算雅可比行列式，不要漏绝对值。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h2-s5",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#1.5 应用",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "1.5 应用",
  "kind": "方法",
  "text": "| 应用 | 公式 |\n|:----|:-----|\n| 体积 | $V = \\iiint_\\Omega 1\\,dV$ |\n| 质量 | $m = \\iiint_\\Omega \\rho(x,y,z)\\,dV$ |\n| 质心 | $\\bar x = \\frac{1}{m}\\iiint_\\Omega x\\rho\\,dV$ |\n| 转动惯量 | $I_x = \\iiint_\\Omega (y^2+z^2)\\rho\\,dV$ |\n\n---",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h3-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#2.1 概念",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "2.1 概念",
  "kind": "概念",
  "text": "$$\n\\int_\\Gamma f(x,y)\\,ds \\quad\\text{或}\\quad \\int_\\Gamma f(x,y,z)\\,ds\n$$\n\n**核心思想：化为定积分**\n\n- $f=1$：积分 $=$ 曲线弧长\n- $f$ 为线密度：积分 $=$ 曲线质量",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h3-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#2.2 性质",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "2.2 性质",
  "kind": "定理",
  "text": "- 与曲线方向无关：$\\int_{\\Gamma_{AB}} f\\,ds = \\int_{\\Gamma_{BA}} f\\,ds$\n- 对称性用法与三重积分类似",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h3-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#2.3 计算方法",
  "subject": "gaoshu",
  "topic": "3 计算方法",
  "title": "2.3 计算方法",
  "kind": "方法",
  "text": "#### 平面情形\n\n| 形式 | 公式 |\n|:----|:-----|\n| **显式** $y=y(x)$ | $ds = \\sqrt{1+y'^2}\\,dx$，$\\int_a^b f(x,y(x))\\sqrt{1+y'^2}\\,dx$ |\n| **参数式** $x=x(t), y=y(t)$ | $ds = \\sqrt{x'^2+y'^2}\\,dt$ |\n| **极坐标** $r=r(\\theta)$ | $ds = \\sqrt{r^2+(r')^2}\\,d\\theta$ |\n\n#### 空间情形（参数式）\n\n$$\nds = \\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2}\\,dt\n$$\n\n---",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h4-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#3.1 概念",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "3.1 概念",
  "kind": "概念",
  "text": "$$\n\\iint_\\Sigma f(x,y,z)\\,dS\n$$\n\n**核心思想：化为二重积分**\n\n- $f=1$：积分 $=$ 曲面面积\n- $f$ 为面密度：积分 $=$ 曲面质量",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h4-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#3.2 性质",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "3.2 性质",
  "kind": "定理",
  "text": "- 与曲面取向无关\n- 对称性与三重积分类似",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h4-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#3.3 计算方法",
  "subject": "gaoshu",
  "topic": "3 计算方法",
  "title": "3.3 计算方法",
  "kind": "方法",
  "text": "#### 显式曲面 $z=z(x,y)$\n\n$$\ndS = \\sqrt{1+z_x^2+z_y^2}\\,dxdy\n$$\n\n$$\n\\iint_\\Sigma f\\,dS = \\iint_{D_{xy}} f(x,y,z(x,y)) \\sqrt{1+z_x^2+z_y^2}\\,dxdy\n$$\n\n类似地可处理 $x=x(y,z)$ 和 $y=y(z,x)$ 的情形。\n\n#### 参数曲面\n\n$$\ndS = |\\mathbf r_u \\times \\mathbf r_v|\\,du\\,dv\n$$\n\n---",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h5-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#4.1 物理背景：变力沿曲线做功",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "4.1 物理背景：变力沿曲线做功",
  "kind": "概念",
  "text": "设向量场 $\\mathbf F = P\\mathbf i + Q\\mathbf j$，质点沿有向曲线 $L$ 从 $A$ 到 $B$：\n\n$$\nW = \\int_L \\mathbf F \\cdot d\\mathbf s = \\int_L P\\,dx + Q\\,dy\n$$",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h5-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#4.2 性质",
  "subject": "gaoshu",
  "topic": "2 性质",
  "title": "4.2 性质",
  "kind": "定理",
  "text": "- **方向性（关键区别！）：** $\\int_{L_{BA}} = -\\int_{L_{AB}}$\n- 线性性：与第一型相同",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h5-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#4.3 基本计算：化为定积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "4.3 基本计算：化为定积分",
  "kind": "方法",
  "text": "参数化 $x=x(t), y=y(t)$：\n\n$$\n\\int_L P\\,dx+Q\\,dy = \\int_\\alpha^\\beta [P(x(t),y(t))x'(t) + Q(x(t),y(t))y'(t)]\\,dt\n$$",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h5-s4",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#4.4 格林公式（核心工具）",
  "subject": "gaoshu",
  "topic": "格林公式",
  "title": "4.4 格林公式（核心工具）",
  "kind": "定理",
  "text": "设 $D$ 为平面单连通区域，$L=\\partial D$ 取逆时针正向：\n\n$$\n\\oint_L P\\,dx + Q\\,dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dxdy\n$$\n\n**使用要点：**\n1. 必须是闭曲线 → 非闭曲线需补线\n2. 外边界逆时针，内边界顺时针\n3. 有洞区域按复连通处理\n4. 被积函数复杂但 $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}$ 简单时→优先格林公式",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h5-s5",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#4.5 曲线积分与路径无关",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "4.5 曲线积分与路径无关",
  "kind": "总结",
  "text": "在单连通区域 $D$ 内，$P,Q$ 有连续一阶偏导数，以下等价：\n\n1. $\\int_L P\\,dx+Q\\,dy$ 与路径无关\n2. $\\oint_C P\\,dx+Q\\,dy = 0$ 对任意闭曲线 $C$\n3. 存在 $u$ 使 $du = P\\,dx + Q\\,dy$\n4. $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$\n\n若找到原函数 $u$，则 $\\int_A^B P\\,dx+Q\\,dy = u(B)-u(A)$。\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h6-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#5.1 物理背景：向量场的通量",
  "subject": "gaoshu",
  "topic": "向量代数",
  "title": "5.1 物理背景：向量场的通量",
  "kind": "概念",
  "text": "设空间向量场 $\\mathbf F = P\\mathbf i + Q\\mathbf j + R\\mathbf k$，通过有向曲面 $\\Sigma$ 的通量：\n\n$$\n\\iint_\\Sigma \\mathbf F \\cdot d\\mathbf S = \\iint_\\Sigma P\\,dy\\,dz + Q\\,dz\\,dx + R\\,dx\\,dy\n$$\n\n其中 $d\\mathbf S = \\mathbf n^\\circ dS = (dy\\,dz,\\ dz\\,dx,\\ dx\\,dy)$。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h6-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#5.2 性质",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "5.2 性质",
  "kind": "定理",
  "text": "- **与曲面方向有关（关键区别！）：** 换侧取负\n- 线性性与第二型曲线积分类似",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h6-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#5.3 基本计算：化为二重积分",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "5.3 基本计算：化为二重积分",
  "kind": "方法",
  "text": "曲面 $z=z(x,y)$，取上侧（法向量 $z$ 分量为正）：\n\n$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy = \\iint_{D_{xy}} [-P z_x - Q z_y + R]\\,dxdy\n$$\n\n**转换投影法口诀：一投、二代、三定号**\n\n常见方向判断：\n- 上侧 / 下侧 → $z$ 分量正/负\n- 外侧 / 内侧 → 闭曲面的外法向/内法向",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h6-s4",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#5.4 高斯公式（核心工具）",
  "subject": "gaoshu",
  "topic": "高斯公式",
  "title": "5.4 高斯公式（核心工具）",
  "kind": "定理",
  "text": "设 $\\Omega$ 为空间闭区域，$\\Sigma = \\partial\\Omega$ 取外侧：\n\n$$\n\\oiint_\\Sigma P\\,dy\\,dz + Q\\,dz\\,dx + R\\,dx\\,dy = \\iiint_\\Omega \\left(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}\\right) dV\n$$\n\n**使用要点：**\n1. 曲面必须封闭 → 非封闭需补面\n2. 取外侧\n3. 有奇点时需挖去\n4. 散度简单时优先高斯公式",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h6-s5",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#5.5 与第一型曲面积分的关系",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "5.5 与第一型曲面积分的关系",
  "kind": "总结",
  "text": "$$\n\\iint_\\Sigma P\\,dy\\,dz+Q\\,dz\\,dx+R\\,dx\\,dy = \\iint_\\Sigma (P\\cos\\alpha+Q\\cos\\beta+R\\cos\\gamma)\\,dS\n$$\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h7-s1",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#6.1 概念",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "6.1 概念",
  "kind": "概念",
  "text": "$$\n\\int_\\Gamma P\\,dx + Q\\,dy + R\\,dz\n$$\n\n表示空间向量场沿有向曲线的做功。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h7-s2",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#6.2 基本计算：参数化",
  "subject": "gaoshu",
  "topic": "2 基本计算：参数化",
  "title": "6.2 基本计算：参数化",
  "kind": "方法",
  "text": "$$\n\\int_\\Gamma P\\,dx+Q\\,dy+R\\,dz = \\int_\\alpha^\\beta [P x'(t) + Q y'(t) + R z'(t)]\\,dt\n$$",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h7-s3",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#6.3 斯托克斯公式（核心工具）",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "6.3 斯托克斯公式（核心工具）",
  "kind": "定理",
  "text": "设 $\\Sigma$ 是以 $\\Gamma$ 为边界的有向曲面，方向满足右手法则：\n\n$$\n\\oint_\\Gamma P\\,dx+Q\\,dy+R\\,dz = \\iint_\\Sigma\n\\left(\\frac{\\partial R}{\\partial y}-\\frac{\\partial Q}{\\partial z}\\right)dy\\,dz +\n\\left(\\frac{\\partial P}{\\partial z}-\\frac{\\partial R}{\\partial x}\\right)dz\\,dx +\n\\left(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\right)dx\\,dy\n$$\n\n向量形式：\n\n$$\n\\oint_\\Gamma \\mathbf F \\cdot d\\mathbf r = \\iint_\\Sigma (\\nabla \\times \\mathbf F) \\cdot \\mathbf n \\, dS\n$$\n\n**使用要点：**\n1. 曲线必须是某曲面的边界\n2. 方向满足右手法则\n3. 可自由选择计算更简单的曲面\n4. 旋度简单时优先斯托克斯公式\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h8",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#七、五类积分横向对比",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "七、五类积分横向对比",
  "kind": "总结",
  "text": "| 类型 | 记号 | 被积对象 | 有无方向 | 意义 | 核心工具 |\n|:----|:----|:--------:|:--------:|:----|:--------|\n| 三重积分 | $\\iiint_\\Omega f\\,dV$ | 数量 | 无 | 体积/质量 | 直角/柱/球坐标 |\n| 第一型曲线积分 | $\\int_\\Gamma f\\,ds$ | 数量 | 无 | 弧长/线质量 | 化为定积分 |\n| 第一型曲面积分 | $\\iint_\\Sigma f\\,dS$ | 数量 | 无 | 面积/面质量 | 化为二重积分 |\n| 第二型曲线积分 ★ | $\\int_L P\\,dx+Q\\,dy$ | 向量 | **有** | 做功 | **格林公式** |\n| 第二型曲面积分 ★★★ | $\\iint_\\Sigma P\\,dy\\,dz+\\cdots$ | 向量 | **有** | 通量 | **高斯公式** |\n| 空间第二型曲线积分 ★ | $\\int_\\Gamma P\\,dx+Q\\,dy+R\\,dz$ | 向量 | **有** | 做功 | **斯托克斯公式** |\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h9",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#八、解题流程",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "八、解题流程",
  "kind": "方法",
  "text": "拿到积分题先判断类型（看积分微元）$\\to$ 再利用对称性代入化简 $\\to$ 选择计算方法：\n\n- **三重积分：** 先试直角坐标 → 柱面对称用柱坐标 → 球对称用球坐标\n- **第一型曲线积分：** 统一化为定积分\n- **第一型曲面积分：** 统一投影为二重积分\n- **平面第二型曲线积分：** 闭曲线优先格林公式 → 非闭参数化\n- **第二型曲面积分：** 闭曲面优先高斯公式 → 非闭投影法\n- **空间第二型曲线积分：** 闭曲线优先斯托克斯公式 → 非闭参数化\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h10",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#九、易错点",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "九、易错点",
  "kind": "总结",
  "text": "1. 第一型无方向，第二型有方向\n2. 第二型曲线积分反向取负，第二型曲面积分换侧取负\n3. 格林公式要求闭曲线；不封闭要补线\n4. 高斯公式要求闭曲面；不封闭要补面，**记得减去补面的贡献**\n5. 斯托克斯公式要检查右手法则\n6. 第二型曲面积分投影最容易错符号\n7. 曲线/曲面积分中可用曲线/曲面方程化简被积函数\n8. 换元时不要漏雅可比因子：柱坐标有 $r$，球坐标有 $\\rho^2\\sin\\varphi$\n9. 对称性使用前必须同时检查\"区域对称性\"和\"函数奇偶性\"\n10. 路径无关判定不能只看 $\\partial P/\\partial y = \\partial Q/\\partial x$，还要区域单连通\n\n---",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r05-docs-18-h11",
  "repo": "R05",
  "source": "docs/高等数学/第18讲-多元函数积分学（仅数学一）/第十八讲详细版.md#十、记忆抓手",
  "subject": "gaoshu",
  "topic": "斯托克斯公式",
  "title": "十、记忆抓手",
  "kind": "总结",
  "text": "- **三重积分：** 三维版二重积分，化为\"一重+二重\"\n- **第一型曲线积分：** 沿曲线累加数量，$ds$ 微元\n- **第一型曲面积分：** 沿曲面累加数量，$dS$ 微元\n- **第二型曲线积分：** 向量场沿曲线做功，有方向\n- **第二型曲面积分：** 向量场穿过曲面通量，有方向\n- **格林公式：** 平面闭曲线 $\\leftrightarrow$ 二重积分\n- **高斯公式：** 闭曲面通量 $\\leftrightarrow$ 三重积分\n- **斯托克斯公式：** 空间闭曲线 $\\leftrightarrow$ 曲面旋度",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s0",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#极限",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限",
  "kind": "例题",
  "text": "极限运算分为函数极限和数列极限，数列极限和函数极限可以相互转化，这里主要以函数极限作为示例。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-0",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#基本计算方式",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "基本计算方式",
  "kind": "方法",
  "text": "课本上极限计算可以使用的主要计算方式：",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#基础四则运算",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "基础四则运算",
  "kind": "例题",
  "text": "只有式子的极限各自存在才能使用四则运算，使用的频率较少。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#重要极限",
  "subject": "gaoshu",
  "topic": "极限存在准则",
  "title": "重要极限",
  "kind": "例题",
  "text": "重要极限有两个，但是$\\lim\\limits_{x\\to 0}\\dfrac{\\sin x}{x}=1$这个很少用，因为往往用等价无穷小替代了，而$\\lim\\limits_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x=e$则用的较多，当出现分数幂的幂指函数时，不要先去取对数，而是使用重要极限看看能不能转换。\n\n例题：求$\\lim\\limits_{x\\to\\infty}\\left(\\dfrac{3+x}{6+x}\\right)^{\\frac{x-1}{2}}$。\n\n解：$=\\lim\\limits_{x\\to\\infty}\\left(1-\\dfrac{3}{6+x}\\right)^{\\frac{6+x}{-3}\\cdot\\frac{-3}{6+x}\\cdot\\frac{x-1}{2}}=\\lim\\limits_{x\\to\\infty}e^{\\frac{-3}{6+x}\\cdot\\frac{x-1}{2}}=\\lim\\limits_{x\\to\\infty}e^{-\\frac{3}{2}\\cdot\\frac{x-1}{x+6}}=e^{-\\frac{3}{2}}$。\n\n例题：求$\\lim\\limits_{x\\to\\infty}\\left(\\dfrac{2x+3}{2x+1}\\right)^{x+1}$。\n\n解：$=\\lim\\limits_{x\\to\\infty}\\left(\\dfrac{2x+3}{2x+1}\\right)^x\\cdot\\dfrac{2x+3}{2x+1}=\\lim\\limits_{x\\to\\infty}\\left(\\dfrac{2x+3}{2x+1}\\right)^x$\n\n$=\\lim\\limits_{x\\to\\infty}\\left(\\dfrac{1+\\dfrac{3}{2x}}{1+\\dfrac{1}{2x}}\\right)^x=\\lim\\limits_{x\\to\\infty}\\dfrac{\\left(1+\\dfrac{3}{2x}\\right)^x}{\\left(1+\\dfrac{1}{2x}\\right)^x}$\n\n$=\\lim\\limits_{x\\to\\infty}\\dfrac{\\left[\\left(1+\\dfrac{3}{2x}\\right)^{\\frac{2x}{3}}\\right]^{\\frac{3}{2}}}{\\left[\\left(1+\\dfrac{1}{2x}\\right)^{2x}\\right]^{\\frac{1}{2}}}=\\dfrac{e^{\\frac{3}{2}}}{e^{\\frac{1}{2}}}=e$。",
  "relatedLessons": [
   "gs01",
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-3",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#导数定义",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "导数定义",
  "kind": "概念",
  "text": "极限转换以及连续性的时候会用到，但是使用的频率也较小。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-4",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#等价无穷小替换",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "等价无穷小替换",
  "kind": "例题",
  "text": "当看到复杂的式子，且不论要求的极限值的趋向，而只要替换的式子是$\\Delta\\to 0$时的无穷小，就使用等价无穷小进行替换。\n\n注意：替换的必然是整个求极限的乘或除的因子，一般加减法与部分的因子不能进行等价无穷小替换。如果是判断等价无穷小的阶数则可以，因为只会相差一个更高阶的无穷小，不影响整体。\n\n对于无法直接得出变换式子的，可以对对应参数进行凑，以达到目标的可替换的等价无穷小。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-5",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#夹逼准则",
  "subject": "gaoshu",
  "topic": "极限存在准则",
  "title": "夹逼准则",
  "kind": "定理",
  "text": "夹逼准则可用于证明不等式或计算极限，关键是建立有效的上下界。\n\n例题：求 $\\lim_{x\\to0}x\\left[\\dfrac{10}{x}\\right]$，其中 $[\\cdot]$ 为取整符号。\n\n由 $u-1<[u]\\le u$ 得 $\\dfrac{10}{x}-1<[\\dfrac{10}{x}]\\le\\dfrac{10}{x}$。当 $x>0$ 时乘以 $x$ 不改变不等号方向，故 $10-x<x[\\dfrac{10}{x}]\\le10$，从而右极限为 $10$。\n\n当 $x<0$ 时乘以 $x$ 必须反向不等号，得到 $10-x>x[\\dfrac{10}{x}]\\ge10$，即 $10\\le x[\\dfrac{10}{x}]<10-x$，从而左极限也为 $10$。因此双侧极限为 $10$。源文将第二种情形误写为 $x>0$，并把“乘以 $x$”误写成“乘以10”。",
  "relatedLessons": [
   "gs01",
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-6",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#拉格朗日中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "拉格朗日中值定理",
  "kind": "定理",
  "text": "拉格朗日中值定理不能用于任意函数。若 $f$ 在闭区间 $[a,b]$ 上连续、在开区间 $(a,b)$ 上可导，且 $a\\ne b$，则存在严格位于 $a,b$ 之间的 $\\xi$，使 $f(a)-f(b)=f'(\\xi)(a-b)$（交换端点时同样成立）。例如 $|x|$ 在 $[-1,1]$ 上连续但在区间内部的 $0$ 处不可导，不能对整个区间套用该定理。\n\n对本条例题，$f(x)=\\arctan x$ 在相关区间可导。取 $a=2/n$、$b=2/(n+1)$，有 $f(a)-f(b)=f'(\\xi)(a-b)$，其中 $2/(n+1)<\\xi<2/n$。由于 $f'(\\xi)=1/(1+\\xi^2)\\to1$，且 $n^2(a-b)=2n/(n+1)\\to2$，原极限为 $2$。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-7",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#洛必达法则",
  "subject": "gaoshu",
  "topic": "洛必达法则",
  "title": "洛必达法则",
  "kind": "定理",
  "text": "洛必达法则不是“降低幂次”的通用规则，也不是高次极限必用的方法。它只适用于满足定理条件的未定式：在所考察的去心邻域内，分子、分母可导，且分母导数不为零；商为 $0/0$ 或 $\\infty/\\infty$ 型；并且导数之比的极限存在（有限值或正负无穷）。满足条件时，自变量可以趋于有限点（包括非零点）或趋于正负无穷，按相应单侧或双侧极限判断。\n\n例如 $\\lim_{x\\to1}\\dfrac{\\ln x}{x-1}$ 是 $0/0$ 型，导数之比为 $1/x$，故极限为 $1$。\n\n原资料所举 $\\lim_{x\\to1}\\dfrac{x^2-x+1}{(x-1)^2}$ 的分子趋于 $1$，不是未定式，不能直接使用洛必达；其极限为 $+\\infty$。选择洛必达前应先核对未定式与可导等条件；高次本身不构成使用理由。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s1-8",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#泰勒公式",
  "subject": "gaoshu",
  "topic": "泰勒公式",
  "title": "泰勒公式",
  "kind": "定理",
  "text": "泰勒公式可用于满足相应可导性或余项条件的函数展开；复合函数并非不能展开，可以先求复合函数的导数，或代入内层展开并核对余项。它也不局限于 $0-0$ 型，是否适用取决于问题和展开点。\n\n例题：求 $\\lim_{x\\to0}\\dfrac{\\arcsin x-\\arctan x}{\\sin x-\\tan x}$。由麦克劳林展开，$\\arcsin x-\\arctan x=\\dfrac12x^3+o(x^3)$，$\\sin x-\\tan x=-\\dfrac12x^3+o(x^3)$，所以极限为 $-1$。源文分子末行误写为 $\\dfrac{1}{x}x^3+o(x^3)$，正确系数应为 $\\dfrac12$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#对数法则",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "对数法则",
  "kind": "定理",
  "text": "如$\\log_n(a\\cdot b)=\\log_n a+\\log_n b$，$\\log_n\\dfrac{a}{b}=\\log_na-\\log_nb$。\n\n换底公式：对于$a,c\\in(0,1)\\cup(1,+\\infty)$且$b\\in(0,+\\infty)$时，有$\\log_ab=\\dfrac{\\log_nb}{\\log_na}$。\n\n例题：求$\\lim\\limits_{x\\to 0}\\dfrac{(e^{x^2}-1)(\\sqrt{1+x}-\\sqrt{1-x})}{[\\ln(1-x)+\\ln(1+x)]\\sin\\dfrac{x}{x+1}}$。\n\n注意在积或商的时候不能把对应的部分替换为0，如分母部分的$[\\ln(1-x)+\\ln(1+x)]$就无法使用$\\ln(1+x)\\sim x$替换为$-x+x$，这样底就是0了，无法求得最后的极限。\n\n解：这时可以尝试变形，如对数函数相加等于对数函数内部式子相乘：$\\ln(1-x)+\\ln(1+x)=\\ln(1-x^2)\\sim-x^2$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#指数法则",
  "subject": "gaoshu",
  "topic": "洛必达法则",
  "title": "指数法则",
  "kind": "定理",
  "text": "当出现$f(x)^{g(x)}$的类似幂函数与指数函数类型的式子，需要使用$u^v=e^{v\\ln u}$。\n\n一般需要与洛必达法则配合使用。\n\n例题：求$\\lim\\limits_{x\\to+\\infty}(x+\\sqrt{1+x^2})^{\\frac{1}{x}}$。\n\n解：$\\lim\\limits_{x\\to+\\infty}(x+\\sqrt{1+x^2})^{\\frac{1}{x}}=e^{\\lim\\limits_{x\\to+\\infty}\\frac{\\ln(x+\\sqrt{1+x^2})}{x}} \\left(\\ln(x+\\sqrt{1+x^2})'=\\dfrac{1}{\\sqrt{1+x^2}}\\right)$\n\n$=e^{\\lim\\limits_{x\\to+\\infty}\\frac{1}{\\sqrt{1+x^2}}}=e^0=1$\n\n例题：求$\\lim\\limits_{x\\to 0}\\left(\\dfrac{a^x+b^x+c^x}{3}\\right)^{\\frac{1}{x}}(a>0,b>0,c>0)$。\n\n解：$=e^{\\lim\\limits_{x\\to 0}\\frac{\\ln\\left(\\frac{a^x+b^x+c^x}{3}\\right)}{x}}=e^{\\lim\\limits_{x\\to 0}\\frac{\\ln(a^x+b^x+c^x)-\\ln 3}{x}}=e^{\\lim\\limits_{x\\to 0}\\frac{a^x\\ln a+b^x\\ln b+c^x\\ln c}{a^x+b^x+c^x}}$（洛必达法则）\n\n$=e^{\\lim\\limits_{x\\to 0}\\frac{\\ln a+\\ln b+\\ln c}{1+1+1}}=e^{\\lim\\limits_{x\\to 0}\\frac{\\ln(abc)}{3}}=\\sqrt[3]{abc}$。\n\n例题：求$\\lim\\limits_{n\\to\\infty}n\\left[\\left(1+\\dfrac{1}{n}\\right)^{\\frac{n}{2}}-\\sqrt{e}\\right]$。\n\n解：首先对于幂指函数需要取指数，所以$\\left(1+\\dfrac{1}{n}\\right)^{\\frac{n}{2}}=e^{\\frac{n}{2}\\ln(1+\\frac{1}{n})}$。\n\n而后面的多一个$\\sqrt{e}$导致整个式子变为一个复杂的式子，而与$e^x$相关的是$e^x-1\\sim x$。\n\n所以$e^{\\frac{n}{2}\\ln(1+\\frac{1}{n})}-\\sqrt{e}=e^{\\frac{1}{2}}\\cdot\\left(e^{\\frac{n}{2}\\ln(1+\\frac{1}{n})-\\frac{1}{2}}-1\\right)=e^{\\frac{1}{2}}\\cdot\\left[\\dfrac{n}{2}\\ln(1+\\dfrac{1}{n})-\\dfrac{1}{2}\\right]$。\n\n综上：\n\n$\\lim\\limits_{n\\to\\infty}n\\left[\\left(1+\\dfrac{1}{n}\\right)^{\\frac{n}{2}}-\\sqrt{e}\\right]=\\lim\\limits_{n\\to\\infty}n\\left(e^{\\frac{n}{2}\\ln(1+\\frac{1}{n})}-\\sqrt{e}\\right)$\n\n$=\\lim\\limits_{n\\to\\infty}n\\left[e^{\\frac{1}{2}}\\cdot\\left(e^{\\frac{n}{2}\\ln(1+\\frac{1}{n})-\\frac{1}{2}}-1\\right)\\right]=\\dfrac{e^{\\frac{1}{2}}}{2}\\lim\\limits_{n\\to\\infty}n^2\\left[\\ln\\left(1+\\frac{1}{n}\\right)-\\dfrac{1}{n}\\right]$\n\n$=\\dfrac{e^{\\frac{1}{2}}}{2}\\lim\\limits_{n\\to\\infty}\\dfrac{\\dfrac{1}{n}-\\dfrac{1}{2n^2}-\\dfrac{1}{n}}{\\dfrac{1}{n^2}}=\\dfrac{e^{\\frac{1}{2}}}{2}\\cdot\\left(-\\dfrac{1}{2}\\right)=-\\dfrac{\\sqrt{e}}{4}$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#三角函数关系式",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "三角函数关系式",
  "kind": "例题",
  "text": "例题：求极限$\\lim\\limits_{x\\to 0}\\left(\\dfrac{1}{\\sin^2x}-\\dfrac{\\cos^2x}{x^2}\\right)$。\n\n解：$\\lim\\limits_{x\\to 0}\\left(\\dfrac{1}{\\sin^2x}-\\dfrac{\\cos^2x}{x^2}\\right)=\\lim\\limits_{x\\to 0}\\dfrac{x^2-\\sin^2x\\cos^2x}{\\sin^2x\\cdot x^2} (\\sin x\\sim x)$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{x^2-\\sin^2x\\cos^2x}{x^4} (\\sin x\\cos x\\sim\\dfrac{1}{2}\\sin 2x)=\\lim\\limits_{x\\to 0}\\dfrac{x^2-\\dfrac{1}{4}\\sin^22x}{x^4}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{2x-\\dfrac{1}{4}\\cdot 2\\sin 2x\\cdot\\cos 2x\\cdot 2}{4x^3} (\\sin x\\cos x\\sim\\dfrac{1}{2}\\sin 2x)=\\lim\\limits_{x\\to 0}\\dfrac{2x-\\dfrac{1}{2}\\sin 4x}{4x^3}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{2-\\dfrac{1}{2}\\cos 4x\\cdot 4}{12x^2}=\\dfrac{1}{6}\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos 4x}{x^2} (1-\\cos x\\sim \\dfrac{1}{2}x^2)=\\dfrac{4}{3}$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-4",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#提取常数因子",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "提取常数因子",
  "kind": "例题",
  "text": "提取常数因子就是提取出能转换为常数的整个极限式子的因子。这个因子必然在自变量的趋向时会变为非0的常数，那么这个式子就可以作为常数提出。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-5",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#提取公因子",
  "subject": "gaoshu",
  "topic": "洛必达法则",
  "title": "提取公因子",
  "kind": "例题",
  "text": "本条源 TeX 的例题题干与后续分解不一致，以下先按源文件明示的五次分母保留题干并更正结论：\n\n例题：求 $\\lim_{x\\to4}\\dfrac{x^2-6x+8}{x^5-5x+4}$。\n\n分子在 $x=4$ 时为 $0$，分母为 $4^5-5\\cdot4+4=1008\\ne0$。由多项式函数连续，极限为 $0$。源文件后续把分母当作 $x^2-5x+4=(x-1)(x-4)$，这与题干五次多项式不同；该分解和 $2/3$ 结论不能用于当前题干。若原题本意确为二次分母，须回到原始题源确认后另行更正题干。\n\n同一源节的另一个例题写作 $\\lim_{x\\to-\\infty}[\\sqrt{4x^2+x}\\ln(2+1/x)+2\\ln(2x)]$，其中 $\\ln(2x)$ 在负的 $x$ 上没有实数定义，且后续推导将其改写成含 $2x\\ln2$ 的项，二者并不等价。故按现存源题无法得到其实数极限，不能沿用源文件的推导或答案；须核对原始题页后再恢复此例。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-6",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#有理化",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "有理化",
  "kind": "例题",
  "text": "当遇到带有根号的式子可以使用等价无穷小，但是只针对形似$(1+x)a-1\\sim ax$的式子，而针对$x^a\\pm x^b$的式子则无法替换，必须使用有理化来将单个式子变为商的形式。\n\n#### 和差形式\n\n如$\\sqrt{a}\\pm\\sqrt{b}=\\dfrac{a+b}{\\sqrt{a}\\mp\\sqrt{b}}$。\n\n例题：求极限$\\lim\\limits_{x\\to-\\infty}x(\\sqrt{x^2+100}+x)$。\n\n解：首先定性分析：$\\lim\\limits_{x\\to-\\infty}x\\cdot(\\sqrt{x^2+100}+x)$。\n\n在$x\\to-\\infty$趋向时，$x$就趋向无穷大。\n\n而$\\sqrt{x^2+100}$为一次，所以$\\sqrt{x^2+100}+x$趋向0。\n\n又$\\sqrt{x^2+100}$在$x\\to-\\infty$时本质为根号差，所以有理化：\n\n$\\lim\\limits_{x\\to-\\infty}x(\\sqrt{x^2+100}+x)=\\lim\\limits_{x\\to-\\infty}x\\dfrac{x^2+100-x^2}{\\sqrt{x^2+100}-x}=\\lim\\limits_{x\\to-\\infty}\\dfrac{100x}{\\sqrt{x^2+100}-x}$\n\n$\\xRightarrow{\\text{令}x=-t}\\lim\\limits_{t\\to+\\infty}\\dfrac{-100t}{\\sqrt{t^2+100}+t}=\\lim\\limits_{t\\to+\\infty}\\dfrac{-100}{\\sqrt{1+\\dfrac{100}{t^2}}+1}=-50$\n\n例题：求$\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{1+\\tan x}-\\sqrt{1+\\sin x}}{x\\sqrt{1+\\sin^2x}-x}$。\n\n解：$=\\lim\\limits_{x\\to 0}\\sqrt{1+\\tan x}-\\sqrt{1+\\sin x}\\cdot\\lim\\limits_{x\\to 0}\\dfrac{1}{x\\sqrt{1+\\sin^2x}-x}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-\\sin x}{\\sqrt{1+\\tan x}+\\sqrt{1+\\sin x}}\\cdot\\lim\\limits_{x\\to 0}\\dfrac{x\\sqrt{1+\\sin^2x}+x}{x^2(1+\\sin^2x)-x^2}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-\\sin x}{\\sqrt{1+\\tan x}+\\sqrt{1+\\sin x}}\\cdot\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{1+\\sin^2x}+1}{x\\sin^2x}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-\\sin x}{2}\\cdot\\lim\\limits_{x\\to 0}\\dfrac{2}{x\\sin^2x}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{\\tan x-\\sin x}{x\\sin^2x}=\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos x}{x\\cos x\\sin x}=\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{1}{2}x^2}{x^2}=\\dfrac{1}{2}$。\n\n#### 乘积形式\n\n此时带有根号的式子只有单个没有加上或减去另一个式子，所以就需要将其转换为和差形式，如三角函数中$x\\pm n\\pi$结果不变。\n\n例题：求极限$\\lim\\limits_{n\\to\\infty}\\sin^2(\\pi\\sqrt{n^2+n})$。\n\n解：由于$\\sin(x+n\\pi)=\\pm\\sin x$，而$\\sin^2(x+n\\pi)=\\sin^2x$。\n\n原式$=\\lim\\limits_{n\\to\\infty}\\sin^2[\\pi(\\sqrt{n^2+n}-n)]=\\lim\\limits_{n\\to\\infty}\\sin^2\\dfrac{n\\pi}{\\sqrt{n^2+n}+n}=\\lim\\limits_{n\\to\\infty}\\\\\\sin^2\\dfrac{\\pi}{\\sqrt{1+1/n}+1}=\\lim\\limits_{n\\to\\infty}\\sin^2\\dfrac{\\pi}{2}=1$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-7",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#换元法",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "换元法",
  "kind": "例题",
  "text": "换元法本身没什么技巧性，主要是更方便计算。最重要的是获取到共有的最大因子进行替换。\n\n例题：求极限$\\lim\\limits_{x\\to 1^-}\\ln x\\ln(1-x)$。\n\n解：当$x\\to 1^-$时，$\\ln x$趋向0，$\\ln(1-x)$趋向$-\\infty$。\n\n又$x\\to 0$，$\\ln(1+x)\\sim x$，所以$x\\to 1$，$\\ln x\\sim x-1$：\n\n$\\lim\\limits_{x\\to 1^-}\\ln x\\ln(1-x)=\\lim\\limits_{x\\to 1^-}(x-1)\\ln(1-x)\\xRightarrow{令t=1-x} =-\\lim\\limits_{t\\to 0^+}t\\ln t$\n\n$=-\\lim\\limits_{t\\to 0^+}\\dfrac{\\ln t}{\\dfrac{1}{t}}=-\\lim\\limits_{t\\to 0^+}\\dfrac{\\dfrac{1}{t}}{-\\dfrac{1}{t^2}}=\\lim\\limits_{t\\to 0^+}t=0$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-8",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#倒代换",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "倒代换",
  "kind": "例题",
  "text": "#### 含有分式\n\n当极限式子中含有分式中一般都需要用其倒数，把分式换成整式方便计算。\n\n例题：求极限$\\lim\\limits_{x\\to 0}\\dfrac{e^{-\\frac{1}{x^2}}}{x^{100}}$\n\n解：$\\lim\\limits_{x\\to 0}\\dfrac{e^{-\\frac{1}{x^2}}}{x^{100}}=\\lim\\limits_{x\\to 0}\\dfrac{e^{-\\frac{1}{x^2}}\\cdot 2x^{-3}}{100x^{99}}=\\lim\\limits_{x\\to 0}\\dfrac{1}{50}\\lim\\limits_{x\\to 0}\\dfrac{e^{-\\frac{1}{x^2}}}{x^{102}}$\n\n使用洛必达法则下更复杂，因为分子的幂次为负数，导致求导后幂次绝对值越来越大，不容易计算。\n\n使用倒代换再洛必达降低幂次，令$t=\\dfrac{1}{x^2}$\n\n$\\lim\\limits_{x\\to 0}\\dfrac{e^{-\\frac{1}{x^2}}}{x^{100}}=\\lim\\limits_{t\\to+\\infty}\\dfrac{e^{-t}}{t^{-50}}=\\lim\\limits_{t\\to+\\infty}\\dfrac{t^{50}}{e^t}=\\lim\\limits_{t\\to+\\infty}\\dfrac{50t^{49}}{e^t}$\n\n$=\\cdots$\n\n$=\\lim\\limits_{t\\to+\\infty}\\dfrac{50!}{e^t}=0$\n\n例题：求极限$\\lim\\limits_{x\\to+\\infty}[x^2(e^{\\frac{1}{x}}-1)-x]$。\n\n解：该式子含有分数，所以尝试使用倒数代换：\n\n$\\lim\\limits_{x\\to+\\infty}[x^2(e^{\\frac{1}{x}}-1)-x]\\xRightarrow{\\text{令}x=\\frac{1}{t}}\\lim\\limits_{t\\to 0^+}\\left(\\dfrac{e^t-1}{t^2}-\\dfrac{1}{t}\\right)=\\lim\\limits_{t\\to 0^+}\\dfrac{e^t-1-t}{t^2}$\n\n$\\xRightarrow{\\text{泰勒展开}e^t}\\lim\\limits_{t\\to 0^+}\\dfrac{\\dfrac{1}{2}t^2}{t^2}=\\dfrac{1}{2}$\n\n\\subsubsection{\\texorpdfstring{$\\infty-\\infty$}\\ 型}\n\n\\subsubsection{\\texorpdfstring{$\\infty\\cdot\\infty$}\\ 型}",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-9",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#拆项",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "拆项",
  "kind": "例题",
  "text": "拆项需要根据式子形式进行，所以很难找到普遍规律。\n\n#### 积拆项\n\n例题：求$\\lim\\limits_{n\\to\\infty}\\dfrac{(n+1)(n+2)(n+3)\\cdots(n+6)}{6n^6}$。\n\n解：需要将分子和分母都拆为6项：\n\n$=\\dfrac{1}{6}\\lim\\limits_{n\\to\\infty}\\dfrac{n+1}{n}\\times\\dfrac{n+2}{n}\\times\\cdots\\dfrac{n+6}{n}=\\dfrac{1}{6}\\lim\\limits_{n\\to\\infty}(1+\\dfrac{1}{n})(1+\\dfrac{2}{n})\\cdots(1+\\dfrac{6}{n})=\\dfrac{1}{6}$。\n\n当极限式子中出现不知道项数的$n$时，一般需要使用拆项，把项重新组合。一般的组合是根据等价无穷小。\n\n#### 和拆项\n\n而对于复杂的具有同一结构的和的式子也可以考虑拆项。\n\n例题：求极限$\\lim\\limits_{x\\to 0}\\left(\\dfrac{e^x+e^{2x}+\\cdots+e^{nx}}{n}\\right)^{\\frac{e}{x}}$。（$n\\in N^+$）\n\n解：这里可以使用等价无穷小$e^x-1\\sim x$。\n\n$\\lim\\limits_{x\\to 0}\\left(\\dfrac{e^x+e^{2x}+\\cdots+e^{nx}}{n}\\right)^{\\frac{e}{x}}=e^{\\lim\\limits_{x\\to 0}\\frac{e}{x}\\ln\\left(\\frac{e^x+e^{2x}+\\cdots+e^{nx}}{n}\\right)}$\n\n$=e^{\\lim\\limits_{x\\to 0}\\frac{e}{x}\\left(\\frac{e^x+e^{2x}+\\cdots+e^{nx}}{n}-1\\right)}=e^{\\lim\\limits_{x\\to 0}\\frac{e}{x}\\left(\\frac{e^x+e^{2x}+\\cdots+e^{nx}-n}{n}\\right)}$\n\n$=e^{\\frac{e}{n}\\lim\\limits_{x\\to 0}\\left(\\frac{e^x-1}{x}+\\frac{e^{2x}-1}{x}+\\cdots+\\frac{e^{nx}-1}{x}\\right)}=e^{\\frac{e}{n}[1+2+\\cdots+n]}=e^{\\frac{e}{n}\\cdot\\frac{n(1+n)}{2}}=e^{\\frac{e(1+n)}{2}}$\n\n例题：求$\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos x\\sqrt{\\cos 2x}\\sqrt[3]{\\cos 3x}}{\\ln\\cos x}$\n\n解：可以使用$\\cos x-1\\sim\\dfrac{x^2}{2}$。\n\n$\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos x\\sqrt{\\cos 2x}\\sqrt[3]{\\cos 3x}}{\\ln\\cos x}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{1-\\cos x+\\cos x-\\cos x\\sqrt{\\cos 2x}\\sqrt[3]{\\cos 3x}}{-\\dfrac{x^2}{2}}$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{x^2}{2}}{-\\dfrac{x^2}{2}}+\\dfrac{\\cos x(1-\\sqrt{\\cos 2x}\\sqrt[3]{\\cos 3x})}{-\\dfrac{x^2}{2}}$\n\n$=-1+\\lim\\limits_{x\\to 0}\\dfrac{(1-\\sqrt{\\cos 2x})+\\sqrt{\\cos 2x}-\\sqrt{\\cos 2x}\\sqrt[3]{\\cos 3x}}{-\\dfrac{x^2}{2}}$\n\n$=-1+\\lim\\limits_{x\\to 0}\\dfrac{-\\dfrac{1}{2}(\\cos 2x-1)+\\sqrt{\\cos 2x}(1-\\sqrt[3]{\\cos 3x})}{-\\dfrac{x^2}{2}}$\n\n$=-1+\\lim\\limits_{x\\to 0}\\dfrac{-\\dfrac{1}{2}(-\\dfrac{4x^2}{2})+\\left(-\\dfrac{1}{3}\\right)\\left(-\\dfrac{9x^2}{2}\\right)}{-\\dfrac{x^2}{2}}=-6$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s2-10",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#脱帽法",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "脱帽法",
  "kind": "例题",
  "text": "即函数中有$f(x)$，且$f(x)$无法转换出常数项。则将$f(x)$利用已知的极限值转换为一个函数加上高阶无穷小的形式。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-0",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#极限计算形式",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限计算形式",
  "kind": "方法",
  "text": "极限相关计算形式主要分为下面六种：\n\n- 未定式：直接根据式子计算极限值。\n\n- 极限转换：根据已知的极限值计算目标极限值。\n\n- 求参数：已知式子的极限值，计算式子中未知的参数。\n\n- 极限存在性：根据式子以及极限存在性计算极限或参数。\n\n- 极限唯一性：式子包含参数，根据唯一性计算两侧极限并求出参数与极限值。\n\n- 函数连续性：根据连续性与附加条件计算极限值或参数。\n\n- 迭代式数列：根据数列迭代式计算极限值。\n\n- 变限积分：根据变限积分计算极限值。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#极限不定式类型",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限不定式类型",
  "kind": "定理",
  "text": "常见未定式包括 $0/0$、$\\infty/\\infty$、$0\\cdot\\infty$、$\\infty-\\infty$、$1^\\infty$、$0^0$、$\\infty^0$。它们提示需要进一步变形，不是可直接运算的数值等式，也不意味着每道题都必须化成商。\n\n若 $u\\to0$、$v\\to\\pm\\infty$，且在去心邻域内 $v\\ne0$，可按恒等式 $uv=u/(1/v)$ 改写为 $0/0$ 型；若 $u\\ne0$，也可用 $uv=v/(1/u)$ 改写为 $\\infty/\\infty$ 型。这些是邻域内的代数变形，不是 $0/0=\\infty/\\infty$ 之类的数值等式。$\\infty-\\infty$ 可在定义域和分母条件允许时通分、因式分解或有理化。\n\n对幂指形式，只有底数 $u>0$ 时才可在实数范围写成 $u^v=e^{v\\ln u}$。再用 $\\ln u\\sim u-1$ 时，须确认 $u\\to1$ 且相应乘积 $v(u-1)$ 的极限确实存在或可判定；不能把 $\\lim v\\ln u$ 无条件替换为 $\\lim v(u-1)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#极限转换",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限转换",
  "kind": "例题",
  "text": "#### 整体换元\n\n最常用的方式就是将目标值作为一个部分，然后对已知的式子进行替换。\n\n例题：已知$\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1-x)+xf(x)}{x^2}=0$，求$\\lim\\limits_{x\\to 0}\\dfrac{f(x)-1}{x}$。\n\n解：令目标$\\dfrac{f(x)-1}{x}=t$，$\\therefore f(x)=tx+1$。\n\n$\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1-x)+xf(x)}{x^2}=\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1-x)+tx^2+x}{x^2} (\\text{泰勒展开})$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{-x-\\dfrac{x^2}{2}+tx^2+x}{x^2}=\\lim\\limits_{x\\to 0}\\dfrac{\\left(t-\\dfrac{1}{2}\\right)x^2}{x^2}=\\lim\\limits_{x\\to 0}\\left(t-\\dfrac{1}{2}\\right)=0$\n\n$\\therefore\\lim\\limits_{x\\to 0}t=\\lim\\limits_{x\\to 0}\\dfrac{f(x)-1}{x}=\\dfrac{1}{2}$。\n\n如果是已知值中含有目标值的关系式，可以将已知值作为一个整体来换算为目标值。\n\n例题：已知$\\lim\\limits_{n\\to\\infty}(a_n+b_n)=1$，$\\lim\\limits_{n\\to\\infty}(a_n-b_n)=3$，求出$\\{a_n\\}$，$\\{b_n\\}$的极限值。\n\n解：设$u_n=a_n+b_n$，$v_n=a_n-b_n$，则$\\lim\\limits_{n\\to\\infty}u_n=1$，$\\lim\\limits_{n\\to\\infty}v_n=3$。\n\n根据极限运算规则，若$u_n$、$v_n$存在极限，则$u_n+v_n$、$u_n-v_n$也存在极限。\n\n且$\\lim\\limits_{n\\to\\infty}(u_n+v_n)=\\lim\\limits_{n\\to\\infty}u_n+\\lim\\limits_{n\\to\\infty}v_n=1+3=4$，$\\lim\\limits_{n\\to\\infty}(u_n-v_n)=\\lim\\limits_{n\\to\\infty}u_n-\\lim\\limits_{n\\to\\infty}v_n=1-3=-2$。\n\n且$a_n=\\dfrac{1}{2}(u_n+v_n)$，$b_n=\\dfrac{1}{2}(u_n-v_n)$，所以$\\{a_n\\}$、$\\{b_n\\}$极限存在。\n\n$\\lim\\limits_{n\\to\\inf}a_n=\\dfrac{1}{2}\\times4=2$，$\\lim\\limits_{n\\to\\infty}b_n=\\dfrac{1}{2}\\times(-2)=-1$。\n\n#### 关系转换\n\n例题：如果$\\lim\\limits_{x\\to 0}\\dfrac{x-\\sin x+f(x)}{x^4}$存在，则$\\lim\\limits_{x\\to 0}\\dfrac{x^3}{f(x)}$为常数多少？\n\n解：由$\\lim\\limits_{x\\to 0}\\dfrac{x\\sin x+f(x)}{x^4}=A$，而目标是$x^3$，所以需要变形：\n\n$\\lim\\limits_{x\\to 0}\\dfrac{x\\sin x+f(x)}{x^4}=A$\n\n$\\lim\\limits_{x\\to 0}\\dfrac{x\\sin x+f(x)\\cdot x}{x^4}=A\\cdot\\lim\\limits_{x\\to 0}x=0$\n\n$\\lim\\limits_{x\\to 0}\\dfrac{x-\\sin x}{x^3}+\\lim\\limits_{x\\to 0}\\dfrac{f(x)}{x^3}=0$\n\n$\\text{泰勒展开：}x-\\sin x=\\dfrac{1}{6}x^3$\n\n$\\lim\\limits_{x\\to 0}\\dfrac{f(x)}{x^3}=-\\dfrac{1}{6}$\n\n$\\lim\\limits_{x\\to 0}\\dfrac{x^3}{f(x)}=-6$\n\n#### 脱帽法\n\n$\\lim\\limits_{x\\to x_0}f(x)\\Leftrightarrow f(x)=A+\\alpha(x),\\lim\\limits_{x\\to x_0}\\alpha(x)=0$。\n\n例题：如果$\\lim\\limits_{x\\to 0}\\dfrac{x-\\sin x+f(x)}{x^4}$存在，则$\\lim\\limits_{x\\to 0}\\dfrac{x^3}{f(x)}$为常数多少？\n\n解：由$\\lim\\limits_{x\\to 0}\\dfrac{x\\sin x+f(x)}{x^4}=A$脱帽：$\\dfrac{x\\sin x+f(x)}{x^4}=A+\\alpha$。\n\n得到：$f(x)=Ax^4+\\alpha\\cdot x^4-(x-\\sin x)$。\n\n反代入：$\\lim\\limits_{x\\to 0}\\dfrac{f(x)}{x^3}=\\lim\\limits_{x\\to 0}\\dfrac{Ax^4+\\alpha\\cdot x^4-x+\\sin x}{x^3}=0+0-\\dfrac{1}{6}=-\\dfrac{1}{6}$。\n\n$\\therefore \\lim\\limits_{x\\to 0}\\dfrac{x^3}{f(x)}=-6$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#求参数",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "求参数",
  "kind": "例题",
  "text": "因为求参数类型的题目中式子是未知的，所以求导后也是未知的，所以一般不要使用洛必达法则，而使用泰勒展开。\n\n一般极限式子右侧等于一个常数，或是表明高阶或低阶。具体的关系参考无穷小比阶。\n\n在求参数的时候要注意与0的关系。\n\n#### 常数\n\n例题：设$\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1+x)-(ax+bx^2)}{x^2}=2$，求常数a，b。\n\n解：根据泰勒展开式：$x\\to 0,\\ln(1+x)=x-\\dfrac{x^2}{x}+o(x^2)$，$x-\\ln(1+x)\\sim\\dfrac{1}{2}x^2\\sim 1-\\cos x$。\n\n$\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1+x)-(ax+bx^2)}{x^2}=2$\n\n$=\\lim\\limits_{x\\to 0}\\dfrac{(1-a)x-\\left(\\dfrac{1}{2}+b\\right)x^2+o(x^2)}{x^2}=2\\neq 0$\n\n$1-a=0;-\\left(\\dfrac{1}{2}+b\\right)=2$\n\n$\\therefore a=1;b=-\\dfrac{5}{2}$。\n\n#### 无穷小\n\n求无穷小阶数时，注意低阶吸收高阶，即面对多项式的无穷小，其阶数为幂次最低的那个，逼近0速度最慢的那个的阶数。\n\n#### 等价无穷小\n \\leavevmode\n\n等价无穷小一般不会使用$\\lim\\dfrac{f(x)}{g(x)}=1$的方式来求参数，而是直接求没有参数的极限，然后对比求出参数。\n\n例题：当$n\\to\\infty$时，$e-\\left(1+\\dfrac{1}{n}\\right)^n$与$An^{-p}$为等价无穷小，求$A$与$p$。\n\n解：$\\left(1+\\dfrac{1}{n}\\right)^n$由于是一个幂函数，所以对其取对数简化，$e-\\left(1+\\dfrac{1}{n}\\right)^n=e-e^{n\\ln(1+\\frac{1}{n})}$，又$An^{-p}$是以积的形式，所以$e-e^{n\\ln(1+\\frac{1}{n})}$的极限应该也是积的形式，提出一个$e$：$e(1-e^{n\\ln(1+\\frac{1}{n})-1})=-e(e^{n\\ln(1+\\frac{1}{n})-1}-1)$。\n\n又使用等价无穷小$e^x-1\\sim x$，$-e(e^{n\\ln(1+\\frac{1}{n})}-1)\\sim-e\\left[n\\ln\\left(1+\\dfrac{1}{n}\\right)-1\\right]$。\n\n又$n\\to\\infty$，$-e\\left[n\\ln\\left(1+\\dfrac{1}{n}\\right)-1\\right]\\sim\\dfrac{e}{2n}$。\n\n#### 某阶无穷小\n \\leavevmode\n\n若是求某个式子与另一个式子的某阶无穷小，则同右边等于常数一样，也需要使用泰勒展开。\n\n例题：确定常数$a$和$b$，使得$f(x)=x-(a+b\\cos x)\\sin x$当$x\\to 0$时关于$x$的5阶等价无穷小。\n\n解：使用泰勒展开展开到五阶：\n\n$f(x)=x-(a+b\\cos x)\\sin x$\n\n$=x-a\\left[x-\\dfrac{x^3}{3!}+\\dfrac{x^5}{5!}+o(x^5)\\right]-\\dfrac{b}{2}\\left[2x-\\dfrac{(2x)^3}{3!}+\\dfrac{(2x)^5}{5!}+o(x^5)\\right]$\n\n$=(1-a-b)x+\\left(\\dfrac{a}{6}+\\dfrac{2b}{3}\\right)x^3-\\left(\\dfrac{a}{120}+\\dfrac{2b}{15}\\right)x^5+o(x^5)$。\n\n所以若为五阶无穷小，则五阶前的常数应该都为0。\n\n所以$1-a-b=0$，$\\dfrac{a}{6}+\\dfrac{2b}{3}=0$，$\\dfrac{a}{120}+\\dfrac{2b}{15}\\neq0$。\n\n解得$a=\\dfrac{4}{3}$，$b=-\\dfrac{1}{3}$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-4",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#极限存在性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限存在性",
  "kind": "例题",
  "text": "一般会给出带有参数的例子，并给定一个点指明在该点极限存在，求参数。\n\n若该点极限存在，则该点两侧的极限都相等。\n\n例题：设函数$f(x)=\\left\\{\\begin{array}{lcl}\n    \\dfrac{\\sin x(b\\cos x-1)}{e^x+a}, & & x>0 \\\\\n    \\dfrac{\\sin x}{\\ln(1+3x)}, & & x<0\n\\end{array}\n\\right.$在$x=0$处极限存在，则$a$，$b$分别为。\n\n解：首先根据极限在$x=0$存在，且极限的唯一性。分段函数在0两侧的极限值必然相等。\n\n$\\because\\lim\\limits_{x\\to 0^-}\\dfrac{\\sin x}{\\ln(1+3x)}=\\lim\\limits_{x\\to 0^-}\\dfrac{\\sin x}{3x}=\\dfrac{1}{3}=\\lim\\limits_{x\\to 0^+}\\dfrac{\\sin x(b\\cos x-1)}{e^x+a}$。\n\n又$\\lim\\limits_{x\\to 0^+}\\dfrac{\\sin x(b\\cos x-1)}{e^x+a}$的分母的$e^x$当$x\\to 0^+$时$e^x\\to 1$，假如$a\\neq-1$，则$e^x+a\\neq 0$，则为一个常数。\n\n从而提取常数因子：$\\lim\\limits_{x\\to 0^+}\\dfrac{\\sin x(b\\cos x-1)}{e^x+a}=\\dfrac{1}{1+a}\\lim\\limits_{x\\to 0^+}\\sin x(b\\cos x-1)$，这时候$\\sin x$是趋向0的，而$b\\cos x-1$无论其中的$b$为何值都是趋向一个常数或0，这时候他们的乘积必然为无穷小，从而无法等于$\\dfrac{1}{3}$这个常数。\n\n$\\therefore a=-1$，从而让极限式子变为一个商的形式：\n\n$\\lim\\limits_{x\\to 0^+}\\dfrac{\\sin x(b\\cos x-1)}{e^x+a}=\\lim\\limits_{x\\to 0^+}\\dfrac{\\sin x(b\\cos x-1)}{e^x-1}=\\lim\\limits_{x\\to 0^+}\\dfrac{\\sin x(b\\cos x-1)}{x}$\n\n$=\\lim\\limits_{x\\to 0^+}b\\cos x-1=b-1=\\dfrac{1}{3}$\n\n$\\therefore a=-1,b=\\dfrac{4}{3}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-5",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#极限唯一性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限唯一性",
  "kind": "例题",
  "text": "若极限存在则必然唯一。\n\n例题：设$a$为常数，$\\lim\\limits_{x\\to 0}\\left(\\dfrac{e^{\\frac{1}{x}}-\\pi}{e^{\\frac{2}{x}}+1}+a\\cdot\\arctan\\dfrac{1}{x}\\right)$存在，求出极限值。\n\n解：因为求$x\\to 0$，所以需要分两种情况讨论：\n\n$\\lim\\limits_{x\\to 0^+}\\left(\\dfrac{e^{\\frac{1}{x}}-\\pi}{e^{\\frac{2}{x}}+1}+a\\cdot\\arctan\\dfrac{1}{x}\\right)$\n\n$=\\lim\\limits_{x\\to 0^+}\\left(\\dfrac{e^{\\frac{1}{x}}-\\pi}{e^{\\frac{2}{x}}+1}\\right)+\\lim\\limits_{x\\to 0^+}\\left(a\\cdot\\arctan\\dfrac{1}{x}\\right)$\n\n$=\\lim\\limits_{x\\to 0^+}\\left(\\dfrac{0\\cdot\\left(e^{\\frac{2}{x}}\\right)^2+e^{\\frac{1}{x}}-\\pi}{1\\cdot\\left(e^{\\frac{2}{x}}\\right)^2+1}\\right)+a\\cdot\\dfrac{\\pi}{2}=a\\cdot\\dfrac{\\pi}{2}$\n\n$\\lim\\limits_{x\\to 0^-}\\left(\\dfrac{e^{\\frac{1}{x}}-\\pi}{e^{\\frac{2}{x}}+1}+a\\cdot\\arctan\\dfrac{1}{x}\\right)=-\\pi+a\\cdot\\left(-\\dfrac{\\pi}{2}\\right)=-\\pi-\\dfrac{\\pi}{2}\\cdot a$\n\n因为极限值具有唯一性，所以$-\\pi-\\dfrac{\\pi}{2}a=\\dfrac{\\pi}{2}a$，所以$a=-1$，极限值为$-\\dfrac{\\pi}{2}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-6",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#函数连续性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "函数连续性",
  "kind": "例题",
  "text": "函数的连续性代表：极限值=函数值。所以函数的连续性需要靠极限完成。\n\n#### 极限判连续性\n\n题目给出函数，往往是分段函数，然后判断分段点的连续性。\n\n例题：讨论函数$f(x)=\\left\\{\\begin{array}{lcl}\n    \\left[\\dfrac{(1+x)^{\\frac{1}{x}}}{e}\\right]^{\\frac{1}{x}},& & x>0 \\\\\n    e^{-\\frac{1}{2}}, & & x\\leqslant 0\n\\end{array}\\right.$在$x=0$处的连续性。\n\n解：因为$\\lim\\limits_{x\\to 0^+}f(x)=\\lim\\limits_{x\\to 0^+}\\left[\\dfrac{(1+x)^{\\frac{1}{x}}}{e}\\right]^{\\frac{1}{x}}=e^{\\lim\\limits_{x\\to 0^+}\\frac{1}{x}\\ln[\\frac{(1+x)^{\\frac{1}{x}}}{e}]}$。\n\n又$\\lim\\limits_{x\\to 0^+}\\dfrac{1}{x}\\ln\\left[\\dfrac{(1+x)^{\\frac{1}{x}}}{e}\\right]=\\lim\\limits_{x\\to 0^+}\\dfrac{1}{x}\\left[\\dfrac{1}{x}\\ln(1+x)-1\\right]=\\lim\\limits_{x\\to 0^+}\\dfrac{\\ln(1+x)-x}{x^2}$\n\n$=\\lim\\limits_{x\\to 0^+}\\dfrac{\\dfrac{1}{1+x}-1}{2x}=\\lim\\limits_{x\\to 0^+}-\\dfrac{1}{2(1+x)}=-\\dfrac{1}{2}$。\n\n$\\therefore\\lim\\limits_{x\\to 0^+}f(x)=e^{-\\frac{1}{2}}$。\n\n又$\\lim\\limits_{x\\to 0^-}f(x)=\\lim\\limits_{x\\to 0^-}e^{-\\frac{1}{2}}=e^{-\\frac{1}{2}}$，且$f(0)=e^{-\\frac{1}{2}}$。\n\n从而$\\lim\\limits_{x\\to 0^+}f(x)=\\lim\\limits_{x\\to 0^-}f(x)=f(0)$，所以$f(x)$在$x=0$处连续。\n\n#### 连续性求极限\n\n例题：函数在$f(x)$在$x=1$处连续，且$f(1)=1$，求$\\lim\\limits_{x\\to+\\infty}\\ln\\left[2+f\\left(x^{\\frac{1}{x}}\\right)\\right]$。\n\n解：根据题目，所求的$\\lim\\limits_{x\\to+\\infty}\\ln\\left[2+f\\left(x^{\\frac{1}{x}}\\right)\\right]$中，唯一未知的且会随着$x\\to+\\infty$而变换就是$f\\left(x^{\\frac{1}{x}}\\right)$。如果我们可以求出这个值就可以了。\n\n而我们对于$f(x)$的具体的关系是未知的，只知道$f(1)=1$。那么先需要考察$\\lim\\limits_{x\\to+\\infty}x^{\\frac{1}{x}}$的整数最大值。\n\n$\\lim\\limits_{x\\to+\\infty}x^{\\frac{1}{x}}=e^{\\lim\\limits_{x\\to+\\infty}\\frac{\\ln x}{x}}=e^{\\lim\\limits_{x\\to+\\infty}\\frac{1}{x}}=e^0=1$\n\n$\\therefore\\lim\\limits_{x\\to+\\infty}f(x^{\\frac{1}{x}})=f(1)=1$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-7-1",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#简单递推表达式",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "简单递推表达式",
  "kind": "例题",
  "text": "最重要的是将递推式进行变形。这种递推式都是比较简单的，$a_n$和$a_{n+1}$都是一次的，可以裂项相消等将$a_n$消去。\n\n例题：数列$\\{a_n\\}$满足$a_0=0,a_1=1,2a_{n+1}=a_n+a_{n-1},n=1,2,\\cdots$。计算$\\lim\\limits_{n\\to\\infty}a_n$。\n\n解：首先看题目，给出的递推式设计到二阶递推，即存在三个数列变量，所以我们必须先求出对应的数列表达式。因为这个表达式涉及三个变量，所以尝试对其进行变型：\n\n$a_{n+1}-a_n=\\dfrac{a_{n-1}-a_n}{2}=\\left(-\\dfrac{1}{2}\\right)(a_n-a_{n-1})=\\left(-\\dfrac{1}{2}\\right)^2(a_{n-1}-a_{n-2})$\n\n$=\\cdots$\n\n$=\\left(-\\dfrac{1}{2}\\right)^n(a_1-a_0)=\\left(-\\dfrac{1}{2}\\right)^n$\n\n然后得到了$a_{n+1}-a_n=\\left(-\\dfrac{1}{2}\\right)^n$，而需要求极限，所以使用列项相消法的逆运算：\n\n$a_n=(a_n-a_{n-1})+(a_{n-1}-a_{n-2})+\\cdots+(a_1-a_0)+a_0$\n\n$=\\left(-\\dfrac{1}{2}\\right)^{n-1} + \\left(-\\dfrac{1}{2}\\right)^{n-2} + \\cdots + \\left(-\\dfrac{1}{2}\\right)^0$\n\n$=\\dfrac{1\\cdot\\left(1-\\left(-\\dfrac{1}{2}\\right)^n\\right)}{1-\\left(-\\dfrac{1}{2}\\right)}=\\dfrac{2}{3}\\left[1-\\left(-\\dfrac{1}{2}\\right)^n\\right]$\n\n$\\therefore\\lim\\limits_{n\\to\\infty}a_n=\\dfrac{2}{3}$",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-7-2",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#单调有界准则",
  "subject": "gaoshu",
  "topic": "极限存在准则",
  "title": "单调有界准则",
  "kind": "定理",
  "text": "对于无法将关系式通过变形归纳为一般式的关系式，对于其极限就必须使用单调有界准则来求出。\n\n单调有界的数列必有极限。需要证明单调性和有界性，然后对式子求极限就能求出目标极限。\n\n单调性可以通过求导来得到，有界性可以结合式子和单调性来得到，或者使用裂项相消法和放缩法来得到一个类似夹逼定理的上下界。\n\n如何判断是否使用单调有界准则？根据递推关系式，如果对两边求极限能得出极限值那么必然是单调有界准则，否则就使用递推表达式转换为等比数列或等差数列。",
  "relatedLessons": [
   "gs01",
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-7-3",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#通项公式",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "通项公式",
  "kind": "定理",
  "text": "\\leavevmode\n\n例题：$x_0=0$，$x_n=\\dfrac{1+2x_{n-1}}{1+x_{n-1}}(n\\in N*)$，求$\\lim\\limits_{n\\to\\infty}x_n$。\n\n解：首先应该知道数列的趋向都是趋向正无穷。\n\n然后对关系式进行变形：$x_n=\\dfrac{1+2x_{n-1}}{1+x_{n-1}}=1+\\dfrac{x_{n-1}}{1+x_{n-1}}=2-\\dfrac{1}{1+x_{n-1}}$。\n\n首先证明单调性，令$f(x)=2-\\dfrac{1}{1+x}$。\n\n$\\therefore f'(x)=\\dfrac{1}{(x+1)^2}>0$，则$f(x)$单调递增。\n\n所以不管$x=x_{n-1}$或其他，$f'(x)>0$，$x_n$都是单调递增，则$x_n\\geqslant x_0=0$。\n\n然后证明有界性，$\\because x_n\\geqslant 0$且单调，$\\therefore x_n=2-\\dfrac{1}{1+x_{n-1}}\\in[0,2]$。\n\n从而$x_n$有界。\n\n所以根据单调有界定理，$x_n$的极限存在。\n\n对于关系式两边取极限：\n\n$\\lim\\limits_{n\\to\\infty}x_n=\\lim\\limits_{n\\to\\infty}\\dfrac{1+2x_{n-1}}{1+x_{n-1}}=\\dfrac{1+2\\lim\\limits_{n\\to\\infty}x_{n-1}}{1+\\lim\\limits_{n\\to\\infty}x_{n-1}}=\\dfrac{1+2\\lim\\limits_{n\\to\\infty}x_n}{1+\\lim\\limits_{n\\to\\infty}x_n}$。\n\n解该一元二次方程：$\\lim\\limits_{n\\to\\infty}x_n=\\dfrac{1\\pm\\sqrt{5}}{2}$，又根据保号性，$\\lim\\limits_{n\\to\\infty}x_n>0$。\n\n$\\therefore\\lim\\limits_{n\\to\\infty}x_n=\\dfrac{1+\\sqrt{5}}{2}$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-7-4",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#复杂递推公式",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "复杂递推公式",
  "kind": "定理",
  "text": "\\leavevmode\n\n许多题目只给出样子，连通项公式都不会给出，只会给出一个复杂递推公式，其中包括开根号，倒数，甚至只是举例。这种题目就必须使用单调有界准则来完成，甚至还需要其他的技巧。\n\n难点就是确认上下界，根式用乘除，和式用加减。\n\n例题：求出数列$\\sqrt{2}$，$\\sqrt{2+\\sqrt{2}}$，$\\sqrt{2+\\sqrt{2+\\sqrt{2}}}$$\\cdots$的极限。\n\n解：根据数列样式，无法通过普通的通项公式来表达，所以需要考虑使用递推式来表示：$x_{n+1}=\\sqrt{2+x_n}$。\n\n首先证明有界性：\n\n给定一个任意的正整数$k$，再根据递推式，假定$x_k<2$，所以$x_{k+1}=\\sqrt{2+x_k}<\\sqrt{2+2}=2$。且$x_1=\\sqrt{2}$满足假定，所以$x_k<2$对于任意的正整数$k$都成立，所以$x_n$存在上界2。\n\n然后证明单调性，根据其递推式：\n\n$x_{n+1}-x_n=\\sqrt{2+x_n}-x_n=\\dfrac{2+x_n-x_n^2}{\\sqrt{2+x_n}+x_n}=\\dfrac{-(x_n-2)(x_n+1)}{\\sqrt{2+x_n}+x_n}$。\n\n又$0<x_n<2$，从而上式子大于0，从而数列单调递增。\n\n所以根据单调有界定理，数列$x_{n+1}=\\sqrt{2+x_n}$一定存在极限，令其极限值$\\lim\\limits_{n\\to\\infty}x_n=a$。\n\n将递推式两边平方并取极限：$\\lim\\limits_{n\\to\\infty}x^2_{n+1}=\\lim\\limits_{n\\to\\infty}(2+x_n)$。\n\n从而$a^2=2+a$，得出$a=2$（根据极限的保号性$-1$被舍去）。\n\n例题：已知数列$\\{a_n\\}$满足$a_1=a$（$a>0$），$a_{n+1}=\\dfrac{1}{2}\\left(a_n+\\dfrac{2}{a_n}\\right)$，证明极限$\\lim\\limits_{n\\to\\infty}a_n$存在，并求其值。\n\n证明：由于$a>0$，根据$a_{n+1}$表达式所以$a_n>0$，看到递推表达式的乘积为常数的形式可以想到使用不等式$\\dfrac{a+b}{2}\\geqslant\\sqrt{ab}$来转换：$a_{n+1}=\\dfrac{1}{2}\\left(a_n+\\dfrac{2}{a_n}\\right)\\geqslant\\sqrt{2}$。\n\n即$\\{a_n\\}$有下界$\\sqrt{2}$。\n\n又将通项相减得到相邻两项关系：$a_{n+1}-a_n=\\dfrac{1}{a_n}-\\dfrac{a_n}{2}=\\dfrac{2-a_n^2}{2a_n}\\leqslant0$（$n\\geqslant2$）。\n\n所$\\{a_n\\}$单调递减。\n\n由单调有界准则，${a_n}$存在极限$A$，且$A\\geqslant\\sqrt{2}$。\n\n对于关系式两边取极限$a_{n+1}=\\dfrac{1}{2}\\left(a_n+\\dfrac{2}{a_n}\\right)$，则$A=\\dfrac{1}{2}\\left(A+\\dfrac{2}{A}\\right)$。\n\n解得$A=\\sqrt{2}$，即$\\lim\\limits_{n\\to\\infty}a_n=\\sqrt{2}$。\n\n例题：设$x_1=\\sqrt{a}$（$a>0$），$x_{n+1}=\\sqrt{a+x_n}$，求极限。\n\n解：$x_1=\\sqrt{a}$，$x_2=\\sqrt{a+\\sqrt{a}}$，$a_n=\\sqrt{a+\\cdots\\sqrt{a+\\sqrt{a}}}$所以可得单调递增。\n\n$x_{n+1}=\\sqrt{a+x_n}$，$x_{n+1}^2=a+x_n$，$x_{n+1}=\\dfrac{a}{x_{n+1}}+\\dfrac{x_n}{x_{n+1}}$。\n\n由单调性$x_{n+1}\\geqslant x_n\\geqslant x_1=\\sqrt{a}$，$x_{n+1}\\leqslant\\dfrac{a}{x_{n+1}}+1\\leqslant\\sqrt{a}+1$，即有上界。\n\n单调有界准则，$a_n$单调增且有上界，令极限为$A$，$A=\\sqrt{a+A}$，解得$A=\\dfrac{1\\pm\\sqrt{1+4a}}{2}$，负根舍去。\n\n例题：$x_1=a\\geqslant0$，$y_1=b\\geqslant0$，$a\\leqslant b$，$x_{n+1}=\\sqrt{x_ny_n}$，$y_{n+1}=\\dfrac{x_n+y_n}{2}$（$n=1,2,\\cdots$），证明$\\lim\\limits_{n\\to\\infty}x_n=\\lim\\limits_{n\\to\\infty}y_n$。\n\n解：$x_1=a$，$x_2=\\sqrt{a\\cdot a}\\geqslant\\sqrt{a^2}=a$，$\\therefore x_n$单调递增。\n\n$y_1=b$，$y_2=\\dfrac{a+b}{2}\\leqslant\\dfrac{2b}{2}=b$，$\\therefore y_n$单调递减。\n\n$x_{n+1}^2=x_ny_n$，$x_{n+1}=\\dfrac{x_n}{x_{n+1}}y_n\\leqslant y_n=b$，$\\therefore x_n$有上界。\n\n$y_{n+1}=\\dfrac{x_n+y_n}{2}$，$x_n+y_n=2y_{n+1}$，$y_n=x_n-2y_{n+1}$，又$y_n$单调递减，所以$y_{n+1}\\leqslant y_n$，$\\therefore y_n\\geqslant x_n-2y_n$，$3y_n\\geqslant x_n$，$\\therefore y_n$有下界。\n\n所以根据单调有界准则，都有极限，令$\\lim\\limits_{n\\to\\infty}x_n=A$，$\\lim\\limits_{n\\to\\infty}y_n=B$。\n\n代入第二个式子，$B=\\dfrac{A+B}{2}$，解得$A=B$。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-1-limit-limit-s3-8",
  "repo": "R08",
  "source": "advanced-math/exercise/1-limit/limit.tex#数列和",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "数列和",
  "kind": "例题",
  "text": "使用放缩法进行夹逼定理失败时可以使用定积分定义。\n\n使用定积分的精确定义$\\displaystyle\\int_a^bf(x)\\,\\textrm{d}x=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^nf\\left(a+\\dfrac{b-a}{n}\\cdot i\\right)\\dfrac{b-a}{n}$。\n\n将$a$、$b$设为$0$和$1$可以得出普通形式$\\displaystyle\\int_0^1f(x)\\,\\textrm{d}x=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^nf\\left(\\dfrac{i}{n}\\right)\\dfrac{1}{n}$。\n\n- 提出$\\dfrac{1}{n}$。\n\n- 凑出$\\dfrac{i}{n}$。\n\n- 由于$\\dfrac{i}{n}=0=\\dfrac{1-0}{n}i$，所以$\\dfrac{i}{n}$可以读作0到1上的$x$，且$\\dfrac{1}{n}=\\dfrac{1-0}{n}$读作0到1上的$\\textrm{d}x$。\n\n例题：计算$\\lim\\limits_{n\\to\\infty}\\left(\\dfrac{n+1}{n^2+1}+\\cdots+\\dfrac{n+n}{n^2+n^2}\\right)$。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#连续",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "连续",
  "kind": "例题",
  "text": "连续则极限值等于函数值。\n\n#### 求连续区间\n\n若要考察一个函数的连续区间，必须要了解函数的所有部分，一般会给出分段函数，所以要了解分段函数的每段函数的性质。\n\n对于函数$f(x)$是个极限表达形式，我们要简化这个极限，最好得到一个$x$的表达式，从而才能判断其连续区间。\n\n例题：$f(x)=\\lim\\limits_{n\\to\\infty}\\dfrac{x+x^2e^{nx}}{1+e^{nx}}$，求函数连续区间。\n\n解：注意到函数的形式为一个极限值，其极限趋向的变量为$n$（$n\\to\\infty$指$n\\to+\\infty$）。所以在该极限式子中将$x$当作类似$t$的常数。\n\n需要先求出极限形式的$f(x)$，而$x$变量的取值会影响到极限，且求的就是$x$的取值范围。所以将其分为三段：\n\n当$x<0$时，$nx\\to-\\infty$，$\\therefore e^{nx}\\to 0$，$x^2$在这个极限式子为一个常数，$\\therefore x^2e^{nx}\\to 0$，$f(x)=\\lim\\limits_{n\\to\\infty}\\dfrac{x+x^2e^{nx}}{1+e^{nx}}=\\dfrac{x+0}{1+0}=x$。\n\n当$x=0$时，$f(x)=\\lim\\limits_{n\\to\\infty}\\dfrac{x+x^2e^{nx}}{1+e^{nx}}=\\dfrac{0}{2}=0$。\n\n当$x>0$时，$e^{nx}$在$n\\to\\infty$时为$\\infty$，上下都有这个无穷大的因子，所以上下都除以$e^{nx}$，$f(x)=\\lim\\limits_{n\\to\\infty}\\dfrac{x+x^2e^{nx}}{1+e^{nx}}=f(x)=\\lim\\limits_{n\\to\\infty}\\dfrac{xe^{-nx}+x^2}{1+e^{-nx}}=\\dfrac{0+x^2}{1}=x^2$。\n\n从而得到了$f(x)$关于$x$的表达式：\n\n$f(x)=\\left\\{\\begin{array}{lcl}\n        x,   &  & x<0 \\\\\n        0,   &  & x=0 \\\\\n        x^2, &  & x>0\n    \\end{array}\n    \\right.$\n\n又$\\lim\\limits_{x\\to 0^-}f(x)=\\lim\\limits_{x\\to 0^-}x=\\lim\\limits_{x\\to 0^+}f(x)=\\lim\\limits_{x\\to 0^-}x^2=f(0)=0$。\n\n$f(x)$在$R$上连续。\n\n#### 已知连续区间求参数\n\n一般会给出带有参数的分段函数，要计算参数就必须了解连续区间与函数之间的关系。\n\n例题：$f(x)=\\left\\{\\begin{array}{lcl}\n        6,                               &  & x\\leqslant 0 \\\\\n    \\dfrac{e^{ax^3}-1}{x-\\arcsin x}, &  & x>0\n    \\end{array}\n    \\right.$，$g(x)=\\left\\{\\begin{array}{lcl}\n        \\dfrac{3\\sin(x-1)}{x-1}, &  & x<1          \\\\\n        e^{bx}+1,                &  & x\\geqslant 1\n    \\end{array}\n    \\right.$，\n 若$f(x)+g(x)$在$R$上连续，则求$a,b$。\n\n解：已知$f(x)+g(x)$在$R$上连续，但是不能判断$f(x)$与$g(x)$的连续性。\n\n所以分开讨论。\n\n对于$f(x)$因为左侧为常数函数，所以若是$f(x)$连续，则必然：\n\n$\\lim\\limits_{x\\to 0^+}\\dfrac{e^{ax^3}-1}{x-\\arcsin x}=6$\n\n$\\therefore\\lim\\limits_{x\\to 0^+}\\dfrac{e^{ax^3}-1}{x-\\arcsin x}=\\lim\\limits_{x\\to 0^+}\\dfrac{ax^3}{x-\\arcsin x}$\n\n$\\text{令}t=\\arcsin x\\Rightarrow=\\lim\\limits_{x\\to 0^+}\\dfrac{a\\sin^3t}{\\sin t-t}=a\\lim\\limits_{x\\to 0^+}\\dfrac{t^3}{\\sin t-t}=a\\lim\\limits_{x\\to 0^+}\\dfrac{3t^2}{\\cos t-1}$\n\n$=-6a=6$。\n\n$\\therefore a=-1$时$f(x)$在$R$上连续。\n\n对于$g(x)$，当$x<1$时，$\\lim\\limits_{x\\to 1^-}\\dfrac{3\\sin(x-1)}{x-1}=\\lim\\limits_{t\\to 0^-}\\dfrac{3\\sin t}{t}=3$。\n\n$\\therefore\\lim\\limits_{x\\to 1^+}e^{bx}+1=e^b+1=3$。\n\n$\\therefore b=\\ln 2$时$g(x)$在$R$上连续。\n\n$\\therefore a=-1,b=\\ln 2$时$f(x)+g(x)$在$R$上连续。而$a\\neq -1$时$f(x)+g(x)$在$x=0$时不连续，$b\\neq\\ln 2$时$f(x)+g(x)$在$x=1$时不连续。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#间断",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "间断",
  "kind": "例题",
  "text": "#### 求间断点\n\n求间断点需要首先分析函数的表达形式。\n\n例题：设$f(x)=\\lim\\limits_{n\\to\\infty}\\dfrac{1+x}{1+x^{2n}}$，求其间断点并分析其类型。\n\n解：根据函数形式，我们需要首先回顾一下幂函数的性质，幂函数的变化趋势取决于底数。\n\n当$x=1$时，$x^n\\equiv 1$，当$x\\in(-\\infty,-1)\\cup(1,+\\infty)$时，当$n\\to\\infty$时，$x^n\\to\\infty$，而$x\\in(-1,1)$时，当$n\\to\\infty$时，$x^n\\to 0$。\n\n$\\therefore\\lim\\limits_{n\\to\\infty}\\dfrac{1+x}{1+x^{2n}}=\\left\\{\\begin{array}{lcl}\n        0,   &  & x\\in(-\\infty,-1]\\cup(1,+\\infty) \\\\\n        1,   &  & x=1                                        \\\\\n        x+1, &  & x\\in(-1,1)\n    \\end{array}\n    \\right.$\n\n所以分段点为$x=\\pm 1$。\n\n当$x=-1$时，$f(-1^+)=f(-1^-)=f(-1)=0$，所以在此处连续。\n\n当$x=1$时，$f(1^+)=0\\neq f(1^-)=2$，所以在此处简短，为跳跃间断点。\n\n#### 已知间断点求参数\n\n这种题目已知间断点，而未知式子中的参数，只用将间断点代入式子并利用极限计算间断点的类型就可以了。\n\n例题：$f(x)=\\dfrac{e^x-b}{(x-a)(x-b)}$有无穷间断点$x=e$，可去间断点$x=1$，求$ab$的值。\n\n解：已知有两个间断点$x=a,x=b$，其中无穷间断点指极限值为无穷的点，可去间断点表示极限值存在且两侧相等，但是与函数值不相等的点。\n\n已经给出两个间断点的值为$x=1$和$x=e$，所以$ab$必然对应其中一个，但是不清楚到底谁是谁。\n\n当$a=1,b=e$时，$f(x)=\\dfrac{e^x-e}{(x-1)(x-e)}$。\n\n当$x\\to 1$时，$\\lim\\limits_{x\\to 1}\\dfrac{e^x-e}{(x-1)(x-e)}$$=\\dfrac{1}{1-e}\\lim\\limits_{x\\to 1}\\dfrac{e^x-e}{x-1}$$=\\dfrac{e}{1-e}\\lim\\limits_{x\\to 1}\\dfrac{e^{x-1}-1}{x-1}$$=\\dfrac{e}{1-e}\\lim\\limits_{x\\to 1}\\dfrac{x-1}{x-1}$$=\\dfrac{e}{1-e}$。\n\n$\\therefore x=1$为可去间断点。\n\n 当$x\\to e$时，$\\lim\\limits_{x\\to e}\\dfrac{e^x-e}{(x-1)(x-e)}$$=\\dfrac{1}{e-1}\\lim\\limits_{x\\to e}\\dfrac{e^x-e}{x-e}$$=\\dfrac{e}{e-1}\\lim\\limits_{x\\to e}\\dfrac{e^{x-1}-1}{x-e}$$=\\dfrac{e}{e-1}\\lim\\limits_{x\\to e}\\dfrac{x-1}{x-e}$$=\\dfrac{e(e-1)}{e-1}\\lim\\limits_{x\\to e}\\dfrac{1}{x-e}=\\infty$。\n\n$\\therefore x=e$为无穷间断点。\n\n 当$a=e,b=1$时，$f(x)=\\dfrac{e^x-1}{(x-e)(x-1)}$。\n\n 而作为分子的$e^x-1$必然为一个常数，当式子趋向$1$或$e$的时候分母两个不等式中的一个不等式必然为一个常数，从而另一个不等式则变为了无穷小，所以$\\lim\\limits_{x\\to 1}f(x)=\\lim\\limits_{x\\to e}f(x)=\\infty$。\n\n$\\therefore a=1,b=e$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s1-3",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#有界性",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "有界性",
  "kind": "例题",
  "text": "对于一个函数和其导函数，其函数有界性和其导函数有界性不存在必然关系。\n\n对于有限区间，导函数有界是原函数有界的充分必要条件。如$f(x)=\\sqrt{x}$在$[0,a]$上有界，$f'(x)=\\dfrac{1}{2\\sqrt{x}}$在靠近0的一侧无界。如果导函数有界，则在有限区间内增加的增量必然是有界的，所以原函数必然有界。\n\n对于无限区间，导函数有界和原函数有界既非充分也非必要。如$f(x)=x$在$R$上无界，但是$f'(x)=1$有界；$f(x)=\\sin x^2$在$R$上有界，而$f'(x)=2x\\cos x^2$在$R$上无界。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-0",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "中值定理",
  "kind": "定理",
  "text": "中值定理一般用于判断不等式。\n\n一般分为连续函数闭区间上的性质（零点定理、介值定理）和微分中值定理（罗尔定理、拉格朗日中值定理、柯西中值定理、泰勒中值定理）。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#介值定理",
  "subject": "gaoshu",
  "topic": "闭区间连续函数性质",
  "title": "介值定理",
  "kind": "定理",
  "text": "适用于$\\exists\\xi\\in[a,b]$，或函数和$f(a)+f(b)$的形式。\n\n- 利用最值定理$m\\leqslant f(x)\\leqslant M$。\n\n- 利用介值定理。\n\n例题：$f(x)$、$g(x)$在$[a,b]$上连续，且$g(x)>0$，证明第二积分中值定理：存在一点$\\xi\\in[a,b]$，使得$\\int_a^bf(x)g(x)\\,\\textrm{d}=f(\\xi)\\int_a^bg(x)\\,\\textrm{d}x$。\n\n解：首先看式子形式，是积分形式，没有导数，所以不会是四大微分中值定理。\n\n首先将未知数提到一边：$f(\\xi)=\\dfrac{\\int_a^bf(x)g(x)\\,\\textrm{d}x}{\\int_a^bg(x)\\,\\textrm{d}x}$，这是一个数。\n\n又$f(x)$、$g(x)$在$[a,b]$上连续，由最值定理$m\\leqslant f(x)\\leqslant M$。\n\n由于已知$g(x)>0$，所以就要对$f(x)$进行处理，这样移动$g(x)$时不等式不会变号，如果要移动$f(x)$则要讨论$f(x)$的正负性。\n\n由保号性，对其积分$\\int_a^bg(x)\\,\\textrm{d}x>0$，从而$m\\cdot g(x)\\leqslant f(x)g(x)\\leqslant M\\cdot g(x)$。\n\n再对其积分：$m\\int_a^bg(x)\\,\\textrm{d}x\\leqslant\\int_a^bf(x)g(x)\\,\\textrm{d}x\\leqslant M\\int_a^bg(x)\\,\\textrm{d}x$。\n\n从而$m\\leqslant f(\\xi)=\\dfrac{\\int_a^bf(x)g(x)\\,\\textrm{d}x}{\\int_a^bg(x)\\,\\textrm{d}x}\\leqslant M$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#零点定理",
  "subject": "gaoshu",
  "topic": "闭区间连续函数性质",
  "title": "零点定理",
  "kind": "定理",
  "text": "适用于$\\exists\\xi\\in[a,b]$，且$f(a)$、$f(b)$已知。\n\n- 令$\\xi=x$，移项得$f(x)=0$。\n\n- 令辅助函数$F(x)=f(x)$，验证是否满足零点定理，若满足则得证。\n\n- 若不满足，令$F'(x)=f(x)$，对$f(x)$积分取$C=0$，$F(x)=\\int f(x)\\,\\textrm{d}x$，此时需要使用罗尔定理，若满足则得证。\n\n- （基本上不会考到）若不满足，令$F''(x)=f(x)$，两次积分得到$F(x)$，将$F(x)$使用泰勒展开为一阶，使用拉格朗日余项。\n\n#### 直接零点定理\n\n例题：已知函数$f(x)$在$[0,1]$上连续，且$f(0)=0$，$f(1)=1$，证明$\\exists\\xi\\in(0,1)$使得$f(\\xi)=1-\\xi$。\n\n解：构造辅助函数$F(x)=f(x)+x-1$。\n\n$F(0)=f(0)+0-1=-1<0$，$F(1)=f(1)+1-1=1>0$。\n\n根据零点定理$\\exists\\xi\\in(0,1)$使得$F(\\xi)=0$。\n\n即$\\exists\\xi\\in(0,1)$使得$f(\\xi)=1-\\xi$。\n\n#### 罗尔定理\n\n例题：设$f(x)$、$g(x)$在$[a,b]$上连续，证明$\\exists\\xi\\in(a,b)$，使得$g(\\xi)\\int_a^\\xi f(x)\\,\\textrm{d}x=f(\\xi)\\int_\\xi^bg(x)\\,\\textrm{d}x$。\n\n解：由于不含导数，所以不使用微分中值定理。\n\n首先令$\\xi=x$，移项$g(x)\\int_a^xf(t)\\,\\textrm{d}t-f(x)\\int_x^bg(t)\\,\\textrm{d}t=0$。\n\n令$F(x)=g(x)\\int_a^xf(t)\\,\\textrm{d}t-f(x)\\int_x^bg(t)\\,\\textrm{d}t$，验证是否满足零点定理。\n\n$F(a)=-f(a)\\int_a^bg(t)\\,\\textrm{d}t$，$F(b)=g(b)\\int_a^bf(t)\\,\\textrm{d}t$。零点定理无法判断。\n\n改令$F'(x)=g(x)\\int_a^xf(t)\\,\\textrm{d}t+f(x)\\int_b^xg(t)\\,\\textrm{d}t$。\n\n所以能看出$F(x)=\\int_a^xf(t)\\,\\textrm{d}t\\int_b^xg(t)\\,\\textrm{d}t$\n\n$F(a)=0$，$F(b)=0$，满足罗尔定理，所以存在$\\xi$使得$F'(\\xi)=0$，得证。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#寻找原函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "寻找原函数",
  "kind": "例题",
  "text": "- 简单型：直接可以看出。\n\n- 公式型：$f'(\\xi)+g(\\xi)f(\\xi)=0$，则令$G(x)=\\int g(x)\\,\\textrm{d}x$，$F(x)=e^{G(x)}f(x)$。\n\n通过乘积求导公式$(uv)'=u'v+uv'$的逆运算来构造辅助函数。\n\n如$f(x)f'(x)$，作$F(x)=f^2(x)$，$[f'(x)]^2+f(x)f''(x)$，作$F(x)=f(x)f'(x)$，$f'(x)+f(x)\\varphi'(x)$，作$F(x)=f(x)e^{\\varphi(x)}$。\n\n例题：设$f(x)$在$[a,b]$上连续，在$(a,b)$内可导，$f(a)=b$，$f(b)=a$，$ab$同号，证明$\\exists\\xi\\in(a,b)$使得$f'(\\xi)=\\dfrac{-f(\\xi)}{\\xi}$。\n\n解：对$f'(x)+\\dfrac{1}{x}f(x)=0$，即$g(x)=\\dfrac{1}{x}$，$G(x)=\\int\\dfrac{1}{x}\\textrm{d}x=\\ln x$，辅助函数为$F(x)=e^{\\ln x}f(x)=xf(x)$。\n\n又$f(a)=b$，$f(b)=a$，$F(a)=af(a)=ab$，$F(b)=bf(b)=ab$，所以$F(a)=F(b)$。根据罗尔定理$\\exists\\xi\\in(a,b)$使得$F'(\\xi)=0$，即$f(\\xi)+\\xi f'(\\xi)=0$。\n\n又$ab$同号，所以$ab\\neq0$，$\\xi\\neq0$，从而$f'(x)=\\dfrac{-f(\\xi)}{\\xi}$。\n\n例题：设函数$f(x)$、$g(x)$在$[a,b]$上二阶可导，且$g''(x)\\neq0$，$f(a)=f(b)=g(a)=g(b)=0$，证明：\n\n(1)在$(a,b)$内$g(x)\\neq0$。\n\n(2)在$(a,b)$内至少有一点$\\xi$，使得$\\dfrac{f(\\xi)}{g(\\xi)}=\\dfrac{f''(\\xi)}{g''(x)}$。\n\n解：\n\n(1)为了简单使用反证法。\n\n假设$\\exists c\\in(a,b)$，使得$g(c)=0$。对两边区间使用罗尔定理：\n\n$\\exists\\xi_1\\in(a,c)$使得$g'(\\xi_1)=0$，$\\exists\\xi_2\\in(a,c)$使得$g'(\\xi_2)=0$。\n\n再次使用罗尔定理$\\exists\\xi\\in(\\xi_1,\\xi_2)\\in(a,b)$使得$g''(\\xi)=0$，与题设矛盾，则假设不成立。\n\n(2)对式子交叉相乘，令$\\xi=x$，即证明$f(x)g''(x)-f''(x)g(x)=0$成立。\n\n由于公式只针对$f(x)$和$f'(x)$没有二阶导，所以将式子加上一阶导的式子并减去，来补全一阶导。\n\n即$f(x)g''(x)+f'(x)g'(x)-f'(x)g'(x)-f''(x)g(x)=0$。将其拆为两个部分$R_1-R_2$。\n\n对于$R_1=f(x)g''(x)+f'(x)g'(x)=0$即得$f'(x)+\\dfrac{g''(x)}{g'(x)}f(x)=0$。\n\n$G_1'(x)=\\ln(g'(x))$所以$R_1$原函数为$g'(x)f(x)$。\n\n对于$R2=f'(x)g'(x)-f''(x)g(x)=0$即得$f''(x)+\\dfrac{g'(x)}{g(x)}f'(x)=0$。\n\n令辅助函数为$F(x)=g'(x)f(x)-g(x)f'(x)$。\n\n$F(a)=g'(a)f(a)-g(a)f'(a)=0$，$F(b)=g'(b)f(b)-g(b)f'(b)=0$，所以根据罗尔定理$\\exists\\xi\\in(a,b)$，使得$F'(\\xi)=0$。\n\n即根据上面过程反推回去得证。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#导数值为常量",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "导数值为常量",
  "kind": "例题",
  "text": "\\leavevmode\n\n即$f^{(n)}(\\xi)=0$：\n\n-$f^{(n-1)}(x)$在$x=\\xi$处满足费马定理。\n\n-$f^{(n-1)}$在包含$x=\\xi$于其内的闭区间上满足罗尔定理（最常使用）。\n\n- 利用泰勒公式展开（基本不会考）。\n\n例题：设$f(x)$在$[0,3]$上连续，$(0,3)$上可导，且$f(0)+f(1)+f(2)=3$，$f(3)=1$，证明存在$\\xi\\in(0,3)$，使得$f'(\\xi)=0$。\n\n解：对于一个导数$f'(\\xi)=0$，只会想到罗尔定理和拉格朗日中值定理两种方式。由于这里没有差式，所以很可能是罗尔定理。所以必须找到$f(a)=f(b)$。\n\n由于题目只给出特定条件而没有给出$f(x)$的表达形式，所以无法使用求原函数的方式证明。$f(3)=1$是唯一已知固定常数值的，所以想在$(0,3)$上找到一点$c$，使得$f(c)=f(3)=1$。\n\n所以此时能用的条件就只有$f(0)+f(1)+f(2)=3$，如何转换为存在$f(c)=1$呢？\n\n已知$f(x)$在$[0,3]$上连续，$(0,3)$上可导，则一定存在最大值$M$，最小值$m$，使得$m\\leqslant f(0)\\leqslant M$，$m\\leqslant f(1)\\leqslant M$，$m\\leqslant f(2)\\leqslant M$。\n\n所以相加$m\\leqslant\\dfrac{f(0)+f(1)+f(2)}{3}=1\\leqslant M$。\n\n由介值定理，可得一定存在某点$c\\in[0,2]$，使得$f(c)=\\dfrac{f(0)+f(1)+f(2)}{3}=1$。\n\n所以$f(c)=f(3)=1$，根据罗尔定理，$\\xi\\in(c,3)$上，得证。\n\n例题：$f(x)$在$[0,2]$上连续，在$(0,2)$内二阶可导，$f(0)=f(1)$，$f(2)=2\\int_1^{\\frac{3}{2}}f(x)\\,\\textrm{d}x$，证明$\\exists\\xi\\in(0,2)$使得$f''(\\xi)=0$。\n\n解：遇到积分式子首先利用积分中值定理$f(2)=2\\int_1^{\\frac{3}{2}}f(x)\\,\\textrm{d}x=2f(\\xi')(\\dfrac{3}{2}-1)=f(\\xi')$（$1<\\xi'<\\dfrac{3}{2}$）。\n\n所以根据罗尔定理$\\exists\\xi_1\\in(\\xi',2)$使得$f'(\\xi_1)=0$。\n\n又$f(0)=f(1)$，$\\therefore\\exists\\xi_2\\in(0,1)$，罗尔定理$f'(x_2)=0$。\n\n$\\therefore f'(\\xi_1)=f'(\\xi_2)$，罗尔定理$\\exists\\xi\\in(\\xi_1,\\xi_2)$使得$f''(\\xi)=0$。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-3-4",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#导数方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "导数方程",
  "kind": "定理",
  "text": "\\leavevmode\n\n类似微分方程，代数式由$a$、$b$、$f(a)$、$f(b)$、$f(\\xi)$、$f'(\\xi)$、$\\cdots$、$f^{(n)}(\\xi)$构成。\n\n若$\\xi$是$ab$可分离的式子：\n\n- 拉格朗日中值定理：分离出$f(b)-f(a)$或$\\dfrac{f(b)-f(a)}{b-a}$。\n\n- 柯西中值定理：分离出$\\dfrac{f(b)-f(a)}{F(b)-F(a)}$。\n\n若$\\xi$是$ab$不可分离的式子：\n\n- 构造辅助函数。\n\n- 利用罗尔定理。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-3-6",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#直接式子",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "直接式子",
  "kind": "例题",
  "text": "\\leavevmode\n\n需要证明所给式子的导数是否在该区间为0即可。\n\n例题：证明多项式$f(x)=x^3-3x+a$在$[0,1]$上不可能有两个零点。\n\n证明：假设$f(x)=x^3-3x+a$在$[0,1]$有两个零点$x_1$和$x_2$，其中$x_1<x_2$。\n\n因为$f(x)=x^3-3x+a$在$[0,1]$内连续，所以$f(x)=x^3-3x+a$在$[0,1]$内可导。\n\n由罗尔定理得知$\\exists\\xi\\in(x_1,x_2)\\subset(0,1)$，使得$f'(\\xi)=0$，但是$f'(x)=3x^2-3$在$(0,1)$上不超过0，所以$\\xi$不存在，从而多项式$f(x)=x^3-3x+a$在$[0,1]$上不可能有两个零点。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-3-7",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#含参数式子",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "含参数式子",
  "kind": "例题",
  "text": "\\leavevmode\n\n若所求式子是一个含参数，那么其一定还有另一个式子约束参数，此时我们就需要构建一个新的式子来利用所给的条件，然后将新式子转换为旧式子。\n\n例题：设$a_0+\\dfrac{a_1}{2}+\\cdots+\\dfrac{a_n}{n+1}=0$，证明多项式$f(x)=a_0+a_1x+\\cdots+a_nx^n$在$(0,1)$中至少有一个零点。\n\n证明：因为所要证明零点，所以一定使用罗尔定理。所给出的约束参数式子$a_0+\\dfrac{a_1}{2}+\\cdots+\\dfrac{a_n}{n+1}=0$与所求$f(x)$之间存在一个关系。\n\n设$F(x)=a_0x+a_1\\dfrac{x^2}{2}+\\cdots+a_n\\dfrac{x^{n+1}}{n+1}$，$F'(x)=a_0+a_1x+\\cdots+a_nx^n=f(x)$。\n\n又$F(0)=0$,$F(1)=a_0+\\dfrac{a_1}{2}+\\cdots+\\dfrac{a_n}{n+1}=0$，又罗尔定理一定存在一个$\\xi\\in(0,1)$，使得$F'(\\xi)=f(\\xi)=0$。\n\n从而$f(x)=a_0+a_1x+\\cdots+a_nx^n$在$(0,1)$中至少有一个零点。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-4",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#拉格朗日中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "拉格朗日中值定理",
  "kind": "定理",
  "text": "证明不等式最重要的还是找到$f(x)$，即出现差值$f(a)-f(b)$，那么$f(x)$就是我们的目标函数，有时候不等式不存在$f(a)-f(b)$这种式子，就需要我们转换，常用的就是$f(b)=0$。\n\n注意$a$和$b$可以是常量也可以是变量，$\\xi$依赖$a$和$b$，所以$f'(\\xi)$不为常数不能随便提出来。\n\n如$f(x)-f(a)=f'(\\xi)(x-a)\\Rightarrow f(x)=f(a)+f'(\\xi)(x-a)\\nRightarrow\\int_a^bf(x)\\,\\textrm{d}x=\\int_a^bf(a)\\,\\textrm{d}x+f'(\\xi)\\int_a^b(x-a)\\,\\textrm{d}x$。\n\n#### 式子转换\n\n使用初等运算将目标式子转换减式。\n\n例题：设$f(x)$在闭区间$[0,c]$上连续，其导数$f'(x)$在开区间$(0,c)$内存在且单调减少，又$f(0)=0$，证明$f(a+b)\\leqslant f(a)+f(b)$，$0\\leqslant a\\leqslant b\\leqslant a+b\\leqslant c$。\n\n解：不存在两端点相等的条件，所以使用拉格朗日中值定理。\n\n因为所要证明的式子中含有$a$、$b$、$a+b$，$f(0)=0$，所以对这几个区间进行拉格朗日中值定理。\n\n证明式子中没有减的形式只有和的形式，所以需要对其转换。\n\n$f(a)-f(0)=f'(\\xi_1)(a-0)$，$f(a+b)-f(b)=f'(\\xi_2)(a+b-b)$。\n\n从而$f(a)=f'(\\xi_1)a$，$f(a+b)-f(b)=f'(\\xi_2)a$。\n\n又$f'(x)$单调减少，所以$f'(\\xi_1)>f'(\\xi_2)$。\n\n$f(a)\\geqslant f(a+b)-f(b)$，所以$f(a+b)\\leqslant f(a)+f(b)$。\n\n#### 求原函数\n\n这种题目就是证明某个式子成立，式子一边是常数一边是导数式子，要证明，就要将导数式子转换为原函数，方法跟罗尔定理使用的转换原函数的技巧一样。\n\n例题：设$f(x)$在$[0,1]$上连续且可导，证明存在一点$\\xi\\in(0,1)$，使得$f(1)=3\\xi^2f(\\xi)+\\xi^3f'(\\epsilon)$。\n\n证明：由$3\\xi^2f(\\xi)+\\xi^3f'(\\epsilon)$，可推出原函数为$x^3f(x)$，令$F(x)=x^3f(x)$，则其在$(0,1)$也可导。\n\n即使用拉格朗日中值定理，$F(1)-F(0)=F'(\\xi)$，$\\xi\\in(0,1)$。即$f(1)=3\\xi^2f(\\xi)+\\xi^3f'(\\epsilon)$。\n\n#### 对数函数特性\n\n对于对数函数，要记住其特定的性质：$\\log_n(\\dfrac{a}{b})=\\log_na-\\log_nb$。\n\n例题：设$a>b>0$，证明：$\\dfrac{a-b}{a}<\\ln\\dfrac{a}{b}<\\dfrac{a-b}{b}$。\n\n证明：因为$\\ln\\dfrac{a}{b}=\\ln a-\\ln b$，所以令$f(x)=\\ln x$。\n\n所以根据拉格朗日中值定理：$\\ln a-\\ln b=f'(\\xi)(a-b)$（$\\xi\\in(b,a)$）。\n\n又$f'(\\xi)=\\dfrac{1}{\\xi}$，所以$\\ln a-\\ln b=\\dfrac{a-b}{\\xi}$。\n\n又$\\xi\\in(b,a)$，所以$\\dfrac{1}{\\xi}\\in(\\dfrac{1}{a},\\dfrac{1}{b})$。\n\n所以$\\dfrac{a-b}{a}<\\dfrac{a-b}{\\xi}<\\dfrac{a-b}{b}$，从而$\\dfrac{a-b}{a}<\\ln\\dfrac{a}{b}<\\dfrac{a-b}{b}$，得证。\n\n#### 划分区间\n\n证明存在两个不同的点在同一个区间满足一个不等式。如果两个点彼此存在一定关系，如上面式子转换的例子$a+b$，$a$，$b$，那么我们可以使用转换，如果两个完全独立的变量，则这种方式没用，我们可以考虑划分区间，假定这两个点在不同的区间，中间以一个区间变量分隔，由于拉格朗日中值定理中两个变量只会出现一次，而间隔变量会出现多次，所以对其分别拉格朗日中值定理，就可以把两个变量换成以间隔变量表示的形式，将两个无关变量的式子变成一个变量的式子。\n\n例题：设函数$f(x)$在$[0,1]$上连续，在$(0,1)$内可导，且$f(0)=0$，$f(1)=1$，证明存在不同的$\\xi_1$、$\\xi_2$，使得$\\dfrac{1}{f'(\\xi_1)}+\\dfrac{1}{f'(\\xi_2)}=2$。\n\n证明：使用$\\xi$将$[0,1]$划分为$[0,\\xi]$和$[\\xi,1]$两个区间，假定$\\xi_1$、$\\xi_2$分别在这两个区间上。\n\n分别对其进行拉格朗日：$f(\\xi)-f(0)=f'(\\xi_1)(\\xi-0)$，即$\\dfrac{1}{f'(\\xi_1)}=\\dfrac{\\xi}{f(\\xi)}$，$f(1)-f(\\xi)=f'(\\xi_2)(1-\\xi)$，即$\\dfrac{1}{f'(\\xi_2)}=\\dfrac{1-\\xi}{1-f(\\xi)}$。\n\n即$\\dfrac{1}{f'(\\xi_1)}+\\dfrac{1}{f'(\\xi_2)}=\\dfrac{\\xi}{f(\\xi)}+\\dfrac{1-\\xi}{1-f(\\xi)}$，任取$f(\\xi)=\\dfrac{1}{2}$，原式等于2，得证。\n\n#### 查找特定值\n\n对于证明一种不等式，如果里面没有差式，也无法转换为差式（没有相同的$f(x)$），那么就可以考虑制造差式，对于$f(x)$一般选择更高阶的，$a$选择$x$，$b$要根据题目和不等式设置一个常数。\n\n一般是0或1。可以先尝试1。\n\n对于这种不等式子看上去一般不会想到拉格朗日中值定理。\n\n例题：当$x>1$时，证明$e^x>ex$。\n\n证明：题目中没有差式，所以需要选择一个函数作为基准函数，里面有一个指数函数和一个幂函数，所以选择$e^x$作为基准函数。\n\n然后选择一个常数作为$b$值，可以先选一个1作为$b$值：$f(x)-f(1)=f'(\\xi)(x-1)$。\n\n从而$e^x-e=e^\\xi(x-1)$，$\\xi\\in(1,x)$，所以$e^x-e>e(x-1)$，即$e^x>ex$，得证。\n\n#### 目标为常数\n\n使用拉格朗日中值定理的推论：$f(x)$在$I$上连续且可导，则$I$上$f(x)=C\\Leftrightarrow f'(x)\\equiv 0$。\n\n例题：证明$\\arctan e^x+\\arctan e^{-x}=\\dfrac{\\pi}{2}$。\n\n解：令$F(x)=\\arctan e^x+\\arctan e^{-x}-\\dfrac{\\pi}{2}$。\n\n$F'(x)=\\dfrac{e^x}{1+e^{2x}}+\\dfrac{-e^{-x}}{1+e^{-2x}}=0$。\n\n根据拉格朗日中值定理，$F(x)\\equiv C$。\n\n又$F(0)=\\arctan 1+\\arctan 1-\\dfrac{\\pi}{2}=0$，$C=0$，得证。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-5",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#柯西中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "柯西中值定理",
  "kind": "定理",
  "text": "需要找到两个函数，使得$\\dfrac{f(b)-f(a)}{F(b)-F(a)}=\\dfrac{f'(\\xi)}{F'(\\xi)}$。\n\n例题：设$0<a<b$，函数$f(x)$在$[a,b]$上连续，在$(a,b)$内可导，证明存在一点$\\xi\\in(a,b)$使得$f(b)-f(a)=\\xi f'(\\xi)\\ln\\dfrac{b}{a}$。\n\n证明：由对数函数的特性可以知道$\\dfrac{b}{a}=\\ln b-\\ln a$，所以可以令$F(x)=\\ln x$，所以$F'(x)=\\dfrac{1}{x}$。\n\n$f(b)-f(a)=\\xi f'(\\xi)\\ln\\dfrac{b}{a}=\\dfrac{f(b)-f(a)}{\\ln b-\\ln a}=\\dfrac{f'(\\xi)}{\\dfrac{1}{\\xi}}\\dfrac{f(b)-f(a)}{F(b)-F(a)}=\\dfrac{f'(\\xi)}{F'(\\xi)}$。\n\n根据柯西中值定理得证。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-6",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#泰勒中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "泰勒中值定理",
  "kind": "定理",
  "text": "-$n$阶可导则只展开到$n-1$阶，第$n$阶留给余项。\n\n- 只要给出二阶或二阶以上可导，可以先泰勒展开看看。\n\n证明$\\exists\\xi\\in(a,b)$使得$F(\\xi,f^{(n)}(\\xi))\\geqslant0$（$n\\geqslant2$）使用带拉格朗日余项的泰勒公式。\n\n- 把$f(x)$在给定信息最多的点上泰勒展开。\n\n- 若两点信息一样多，则优先在有导数信息的一点展开。\n\n- 若两点都是导数信息或函数信息，则对两点分别展开。\n\n例题：$f(x)$在$[a,b]$上二阶可导，$f'(a)=f'(b)=0$，证明$\\exists\\xi\\in(a,b)$，使得$\\vert f''(\\xi)\\vert\\geqslant4\\dfrac{\\vert f(b)-f(a)\\vert}{(b-a)^2}$。\n\n解：由于$ab$两点信息一样多，所以对两点进行泰勒一阶展开：\n\n$f(x)=f(a)+\\dfrac{f''(\\xi_1)}{2!}(x-a)^2$，$f(x)=f(b)+\\dfrac{f''(\\xi_2)}{2!}(x-b)^2$。\n\n因为最后要证明的式子里面$ab$都要有，所以代入$x=\\dfrac{a+b}{2}$：\n\n$f\\left(\\dfrac{a+b}{2}\\right)=f(a)+\\dfrac{f''(\\xi_1')}{8}(b-a)^2$，$f\\left(\\dfrac{a+b}{2}\\right)=f(b)+\\dfrac{f''(\\xi_2')}{8}(b-a)^2$（$\\xi_1$和$\\xi_2$是关于$ab$的变量，此时都发生变化了）\n\n两式相减得$f(b)-f(a)=\\dfrac{(b-a)^2}{8}[f''(\\xi_1')-f''(\\xi_2)]$，取绝对值$\\vert f(b)-f(a)\\vert=\\dfrac{(b-a)^2}{8}\\vert f''(\\xi_1')-f''(\\xi_2)\\vert\\leqslant\\dfrac{(b-a)}{8}\\vert f''(\\xi_1')\\vert+\\vert f''(\\xi_2')\\vert$。\n\n取$\\xi=\\max\\{\\xi_1',\\xi_2'\\}$，$\\dfrac{(b-a)}{4}\\vert f''(\\xi')\\vert\\geqslant\\vert f(b)-f(a)\\vert$，得证。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s2-7",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#双中值问题",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "双中值问题",
  "kind": "例题",
  "text": "即有两个值$\\xi$和$\\eta$，分离$\\xi$和$\\eta$，两边都使用一次中值定理：\n\n- 不要求$\\xi\\neq\\eta$，对$a,b$使用两次中值定理，要么两次拉格朗日中值定理，要么一次拉格朗日中值定理一次柯西中值定理。\n\n- 要求$\\xi\\neq\\eta$，找点$c$，在$(a,c)$、$c,b$区间上分别使用两次拉格朗日中值定理或一次拉格朗日中值定理一次柯西中值定理。对于$c$的取值，要么是第一问给出，要么逆推假设$c$已知根据要证的结论推出$c$。（基本上不会考到）\n\n重点关注中值项，其余不用管。\n\n#### 两次拉格朗日\n\n例题：$f(x)$在$[a,b]$上连续，$(a,b)$内可导，且$f(a)=f(b)=1$，证明存在$\\xi,\\eta\\in(a,b)$使得$e^{\\eta-\\xi}[f(\\eta)+f'(\\eta)]=1$。\n\n解：首先将$\\xi$和$\\eta$分开：$e^\\eta[f(\\eta)+f'(\\eta)]=e^\\xi$。根据拉格朗日中值定理$f'(\\xi)=\\dfrac{f(b)-f(a)}{b-a}$：\n\n对于右边$e^\\xi=t'(\\xi)$，$t(x)=\\int e^x\\,\\textrm{d}x=e^x$，$\\therefore e^\\xi=\\dfrac{e^b-e^a}{b-a}$。\n\n对于左边$e^\\eta[f(\\eta)+f'(\\eta)]=[e^xf(x)]'_{x=\\eta}$，$\\therefore e^\\eta[f(\\eta)+f'(\\eta)]=\\dfrac{e^bf(b)-e^af(a)}{b-a}\\\\=\\dfrac{e^b-e^a}{b-a}=e^\\xi$，所以等式成立，得证。\n\n#### 一次拉格朗日一次柯西\n\n例题：$f(x)$在$[a,b]$上连续，$(a,b)$内可导，且$f'(x)\\neq0$，证明存在$\\xi,\\eta\\in(a,b)$使得$\\dfrac{f'(\\xi)}{f'(\\eta)}=\\dfrac{e^b-e^a}{b-a}e^{-\\eta}$。\n\n解：首先将$\\xi$和$\\eta$分开：$f'(\\xi)=\\dfrac{e^b-e^a}{b-a}\\dfrac{e^{-\\eta}}{f'(\\eta)}$。\n\n对$f'(\\xi)$使用拉格朗日，$=\\dfrac{f(b)-f(a)}{b-a}$。对$\\dfrac{e^{-\\eta}}{f'(\\eta)}$使用柯西，$=\\dfrac{f(b)-f(a)}{e^b-e^a}$。\n\n左右相等，得证。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#单调性",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "单调性",
  "kind": "例题",
  "text": "例题：求$y=x+\\vert\\sin 2x\\vert$的单调区间。\n\n解：因为函数的定义域为$R$。\n\n又$y=\\left\\{\\begin{array}{lcl}\n    x+\\sin 2x, & & n\\pi\\leqslant x\\leqslant n\\pi+\\dfrac{\\pi}{2} \\\\\n    x-\\sin 2x, & &n\\pi+\\dfrac{\\pi}{2}\\leqslant x\\leqslant (n+1)\\pi\n\\end{array}\\right.$（$n=0,\\pm 1,\\pm2,\\cdots$）。\n\n$\\therefore y'=\\left\\{\\begin{array}{lcl}\n    1+2\\cos 2x, & & n\\pi\\leqslant x\\leqslant n\\pi+\\dfrac{\\pi}{2} \\\\\n    1-2\\cos 2x, & &n\\pi+\\dfrac{\\pi}{2}\\leqslant x\\leqslant (n+1)\\pi\n\\end{array}\\right.$（$n=0,\\pm 1,\\pm2,\\cdots$）。\n\n令$y'=0$，所以得到驻点为$x=n\\pi+\\dfrac{\\pi}{3}$和$x=n\\pi+\\dfrac{5\\pi}{6}$。\n\n分割区间：$\\left[n\\pi,n\\pi+\\dfrac{\\pi}{3}\\right]$，$\\left[n\\pi+\\dfrac{\\pi}{3},n\\pi+\\dfrac{\\pi}{2}\\right]$，$\\left[n\\pi+\\dfrac{\\pi}{2},x=n\\pi+\\dfrac{5\\pi}{6}\\right]$，\n\n$\\left[x=n\\pi+\\dfrac{5\\pi}{6},(n+1)\\pi\\right]$（$n=0,\\pm 1,\\pm2,\\cdots$）。\n\n当$x\\in\\left[n\\pi,n\\pi+\\dfrac{\\pi}{3}\\right]$，$y'>0$，所以函数在区间上单调递增。\n\n当$x\\in\\left[n\\pi+\\dfrac{\\pi}{3},n\\pi+\\dfrac{\\pi}{2}\\right]$，$y'<0$，所以函数在区间上单调递减。\n\n当$x\\in\\left[n\\pi+\\dfrac{\\pi}{2},x=n\\pi+\\dfrac{5\\pi}{6}\\right]$，$y'>0$，所以函数在区间上单调递增。\n\n当$x\\in\\left[x=n\\pi+\\dfrac{5\\pi}{6},(n+1)\\pi\\right]$，$y'<0$，所以函数在区间上单调递减。\n\n从而函数在$\\left[\\dfrac{k\\pi}{2},\\dfrac{k\\pi}{2}+\\dfrac{\\pi}{3}\\right]$时单调增加，在$\\left[\\dfrac{k\\pi}{2}+\\dfrac{\\pi}{3},\\dfrac{k\\pi}{2}+\\dfrac{\\pi}{2}\\right]$上单调减少（$k=0,\\pm 1,\\pm2,\\cdots$）。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#凹凸性",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "凹凸性",
  "kind": "例题",
  "text": "二阶导数为0处就是拐点。\n\n例题：决定曲线$y=ax^3+bx^2+cx+d$中参数，使得$x=-2$处曲线有水平切线，$(1,-10)$为拐点，且点$(-2,44)$在曲线上。\n\n解：$y'=3ax^2+2bx+c$，$y''=6ax+2b$。\n\n因为$x=-2$处曲线有水平切线，即$y'\\vert_{x=-2}=12a-4b+c=0$。\n\n$(1,-10)$为拐点，代入：$y''\\vert_{x=1}=6a+2b=0$，$y\\vert_{x=1}=a+b+c+d=-10$。\n\n又点$(-2,44)$在曲线上，所以$y\\vert_{x=-2}=-8a+4b-2c+d=44$。\n\n解得四个方程：$a=1$，$b=-3$，$c=-24$，$d=16$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#极值与最值",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "极值与最值",
  "kind": "例题",
  "text": "求极值需要考虑$y'$与点两边正负号，如果$y''$存在则可以考虑，$y''<0$则取极大值，$y''>0$则取极小值。\n\n对于最值需要考虑极值和闭区间端点两个部分。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s3-5",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#拐点",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "拐点",
  "kind": "概念",
  "text": "#### 已知二阶导函数\n\n不仅要关注$f''(x)$函数，还要关注$f''(x)$未定义的点。\n\n-$f''(x_0)=0$，且左右两边正负号发生改变。\n\n-$f''(x_0)$在$x_0$处无定义，但是左右两边正负号发生改变。\n\n#### 已知导函数\n\n要求原函数的拐点（求二阶导），就要求导函数（一阶导）的驻点（一阶导），即关心导函数的极值点。\n\n如果驻点两端的单调性相反，即是极值点，则代表这里就是拐点。\n\n#### 已知原函数\n\n要关注的是函数图像凹凸性发生变化的点。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-2-function-function-s3-6",
  "repo": "R08",
  "source": "advanced-math/exercise/2-function/function.tex#零点",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "零点",
  "kind": "定理",
  "text": "#### 基本性质\n\n- 若$f(x)$为$x$的$n$阶多项式，则$f(x)=0$至多有$n$个根。\n\n- 若$f(x)$存在因式$(x-a)^n$，则$f(a)=f'(a)=\\cdots=f^{(n-1)}(a)=0$。\n\n- 若$f(x)$为奇函数或偶函数，则只用讨论一边。\n\n#### 存在性\n\n#### 零点定理\n \\leavevmode\n\n- 若$f(x)$在$[a,b]$上连续，且$f(a)f(b)<0$，则$f(x)=0$在$(a,b)$内至少有一个根。\n\n- 若$f(x)$在$(a,b)$上连续，且$\\lim\\limits_{x\\to a^+}f(x)=\\alpha$，$\\lim\\limits_{x\\to b^-}f(x)=\\beta$，$\\alpha\\cdot\\beta<0$，则$f(x)=0$在$(a,b)$内至少有一个根。\n\n- 若$f(x)$在$(a,b)$上连续，且$\\lim\\limits_{x\\to a^+}f(x)=+\\infty/-\\infty$，$\\lim\\limits_{x\\to b^-}f(x)=-\\infty/+\\infty$，则$f(x)=0$在$(a,b)$内至少有一个根。\n\n用于证明存在某一个零点。\n\n#### 罗尔定理\n \\leavevmode\n\n如果没办法找到$f(x)=0$，就找到一个$F(x)$，使得$F'(x)=f(x)=0$。即找到$f(x)$的原函数。\n\n其中$F(x)$满足罗尔定理三个条件：连续、可导、两端点相等。\n\n#### 已知函数个数\n\n往往需要多个方法一起确定具体个数。\n\n#### 单调性\n \\leavevmode\n\n若$f(x)$在$(a,b)$内单调（$f'(x)$存在且不恒等于0），则$f(x)=0$在$(a,b)$内至多有一个根。\n\n用于证明只有一个零点。\n\n当用于证明有且仅有一个实根时需要将零点定理和单调性一同使用。\n\n#### 罗尔定理\n \\leavevmode\n\n罗尔定理也可以用于求根的个数，算出来的是至少有多少个根。\n\n例题：$f(x)=\\ln\\vert(x-1)(x-2)\\cdots(x-n)\\vert$，则求$f'(x)=0$根的个数。\n\n解：$\\because f'(x)=\\dfrac{[(x-1)(x-2)\\cdots(x-n)]'}{(x-1)(x-2)\\cdots(x-n)}=0$。\n\n令$g(x)=(x-1)(x-2)\\cdots(x-n)$，所以求$f'(x)=0$即求$g'(x)=0$。\n\n又$g(x)=0$时$x=1,2\\cdots,n$，所以依次对$(1,2)$、$(2,3)$、$\\cdots$、$(n-1,n)$使用罗尔定理，其满足$g(x)$连续，可导且两端函数值$g(x)=0$，所以每个区间内必然存在一点$\\xi$使得$g'(\\xi)=0$，即满足$f'(x)=0$的根。\n\n而一共有$n-1$个区间，所以至少有$n-1$个根。\n\n而$g(x)$为$n$次多项式，$g'(x)$为$n-1$次多项式，所以至多有$n-1$个根。\n\n所以$f'(x)=0$只有$n-1$个根。\n\n#### 罗尔原话\n \\leavevmode\n\n罗尔原话算出来的是至多有多少个根。\n\n- 罗尔原话是罗尔定理的推论。其区间为$I$。\n\n- 若$f^{(n)}(x)=0$至多有$k$个根，则$f(x)=0$至多有$k+n$个根。\n\n- 若$f^{(n)}(x)\\neq0$，则$f(x)=0$至多有$n$个根。（令$k=0$）\n\n即若$f(x)=0$至少有两个根，则$f'(x)$至少有一个根。一般证明$f(x)$至多有$k$个实根，就要求$f(x)$的$k$次导。\n\n由于罗尔原话只能推断出至多多少个实根，所以我们往往要带值进入$f(x)$计算出至少多少个实根。\n\n例题：证明方程$2^x-x^2=1$有且仅有3个实根。\n\n解：令$f(x)=2^x-x^2-1$，则$f'(x)=\\ln22^x-2x$，$f''(x)=(\\ln2)^22^x-2$，$f'''(x)=(\\ln2)^32^x\\neq 0$。\n\n所以$f'''(x)=0$至多0个根。所以根据罗尔原话$f(x)=0$至多三个根。\n\n又观察法$f(0)=0$，$f(1)=0$得到两个实根。\n\n$f(4)=-1$，$f(5)=6$，所以$(4,5)$内存在一个实根，从而一共与三个根。\n\n#### 实系数奇次方程\n \\leavevmode\n\n实系数奇次方程至少有一个实根。即$x^{2n+1}+a_1x^{2n}+\\cdots+a_{2n}x+a_{2n+1}=0$至少有一个实根。\n\n这个判断法则往往要和罗尔原话一起使用确定是否有且仅有常数个实根。\n\n例题：若$3a^2-5b<0$，则方程$x^5+2ax^3+3bx+4c=0$()。\n\n$A.\\text{无实根}$$B.\\text{有唯一实根}$$C.\\text{有三个不同实根}$$D.\\text{与五个不同实根}$\n\n解：令$f(x)=x^5+2ax^3+3bx+4c$，该实系数奇次方程至少有一个根。\n\n$f'(x)=5x^4+6ax^2+3b$，令$t=x^2$，$5t^2+6at+3b=0$。\n\n$\\Delta=36a^2-4\\cdot5\\cdot3b=36a^2-60b=12(3a^2-5b)<0$。\n\n$\\therefore f'(x)$无实根，所以$t=x^2$解不出来，所以$f'(x)\\neq0$。\n\n$f'(x)=0$至多0个根。所以根据罗尔原话$f(x)=0$至多一个根，又由上面至少一个根，所以只有一个根，选择$B$。\n\n#### 含参函数个数\n\n#### 函数含参导数不含参\n \\leavevmode\n\n参数是一个加在式子上的常数，函数求导后参数就被消掉了，所以可以在计算过程中不考虑参数，等到了最后的结果再讨论参数。\n\n当存在参数时要尽可能将参数在导数中消掉，如$e^x=kx$，$f(x)$不能是$e^x-kx$而应该是$\\dfrac{e^x}{x}-k$。\n\n例题：设常数$k>0$，函数$f(x)=\\ln x-\\dfrac{x}{e}+k$在$(0,+\\infty)$内的零点个数为()。\n\n$A.3$$B.2$$C.1$$D.0$\n\n解：$f'(x)=\\dfrac{1}{x}-\\dfrac{1}{e}$，令其为0，则$x=e$。\n\n$x\\in(0,e)$，$f'(x)>0$，$f(x)\\nearrow$，$x\\in(e,+\\infty)$，$f'(x)<0$，$f(x)\\searrow$。\n\n又$f(e)=k>0$，$\\lim\\limits_{x\\to0^+}f(x)=\\lim\\limits_{x\\to0^+}(\\ln x-\\dfrac{x}{e}+k)=-\\infty$，所以左边有一个根，$\\lim\\limits_{x\\to+\\infty}f(x)=\\lim\\limits_{x\\to+\\infty}(\\ln x-\\dfrac{x}{e}+k)=-\\infty$，所以一共有两个根。\n\n#### 函数导数含参\n \\leavevmode\n\n参数与自变量进行运算，从而求导后参数仍在式子中，计算时需要携带参数来思考。\n\n例题：求方程$k\\arctan x-x=0$的不同实根的个数，其中$k$为参数。\n\n解：令$f(x)=k\\arctan x-x$$，\\because f(-x)=-f(x)$，所以$f(x)$是一个奇函数，所以可以只要考虑一边的情况。$x=0$是函数的一个根。\n\n$f'(x)=\\dfrac{k}{1+x^2}-1=\\dfrac{k-1-x^2}{1+x^2}$。\n\n若$k-1\\leqslant0$即$k<1$则$f'(x)\\leqslant0$，所以$f(x)$单调减少，从而只有一个根。\n\n若$k-1>0$即$k>1$，令$f'(x)=0$，即$k-1-x^2=0$，$x=\\sqrt{k-1}$。\n\n$x\\in(0,\\sqrt{k-1})$，$f'(x)>0$，$f(x)\\nearrow$。$x\\in(\\sqrt{k-1},+\\infty)$，$f'(x)<0$，$f(x)\\searrow$。\n\n$\\lim\\limits_{x\\to+\\infty}(k\\arctan x-x)=-\\infty$，所以在0的右侧一定存在一个零点，同理左边也因为奇函数对称存在一个零点，所以一共有三个根。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#导数存在性",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "导数存在性",
  "kind": "例题",
  "text": "连续性不能推出函数在该点的去心邻域内可导。若要使用结论 $f'(x_0)=\\lim_{x\\to x_0}f'(x)$，需另行保证 $f$ 在包含 $x_0$ 的去心邻域内可导、在 $x_0$ 连续，并且导数极限存在且有限；由中值定理可推出 $f$ 在 $x_0$ 可导且导数等于该极限。\n\n本条 $f(x)=\\ln(1-x)/x$ 的例子可在 $x_0=0$ 使用这一结论，因为显式表达式在 $0$ 的去心邻域（并满足 $x<1$）可导，且前文已确定连续延拓值 $f(0)=-1$。但“在 $0$ 连续”本身不足以推出邻域可导或导数极限存在。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#导数连续性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "导数连续性",
  "kind": "例题",
  "text": "例题：设 $f(x)=x^2$（$x\\le0$），$f(x)=x^\\alpha\\sin(1/x)$（$x>0$）。求 $f'$ 在 $0$ 连续时 $\\alpha$ 的条件。\n\n右侧对 $x>0$ 求导得 $f'(x)=x^{\\alpha-2}(\\alpha x\\sin(1/x)-\\cos(1/x))$，而 $f'(0)=0$（当 $\\alpha>1$ 时由导数定义可得）。括号中的 $\\alpha x\\sin(1/x)$ 趋于 $0$，但 $-\\cos(1/x)$ 有界振荡，并非常数。若 $\\alpha>2$，括号有界且 $x^{\\alpha-2}\\to0$，故右导数趋于 $0$。若 $\\alpha=2$，取 $1/x=2k\\pi$ 与 $(2k+1)\\pi$ 两列，导数分别趋于 $-1$ 与 $1$；若 $\\alpha<2$，同样两列给出无界的相反值。因此 $f'$ 在 $0$ 连续当且仅当 $\\alpha>2$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#一阶导数",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "一阶导数",
  "kind": "例题",
  "text": "对 $y=x^{\\sin x}$（$x>0$）取对数得 $\\ln y=\\sin x\\ln x$，所以\n\n$\\dfrac{y'}{y}=\\cos x\\ln x+\\dfrac{\\sin x}{x}$，即 $y'=x^{\\sin x}(\\cos x\\ln x+\\dfrac{\\sin x}{x})$。\n\n等价地，写成 $x^{\\sin x}=e^{\\sin x\\ln x}$ 后求导，结果相同。源文漏写了 $\\cos x$ 后乘的 $x$ 因子。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#导数与极限",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "导数与极限",
  "kind": "例题",
  "text": "导数的定义由极限产生，所以其之间是可以互相转换的，当求一个导数时可以寻找是否能求出其极限。\n\n#### 极限求导数\n\n在导数这一章中的极限不会直接给出极限，而是会给出导数或函数的相关定义，来求极限，再根据导数定义转换为导数。同时要注意这里不止会有导数定义，还会有函数等性质。\n\n例题：已知$f(x)$是周期为5的连续函数，它在$x=0$的某个邻域内满足关系式：$f(1+\\sin x)-3f(1-\\sin x)= 8x+o(x)$，且$f(x)$在$x=1$处可导，求曲线$y=f(x)$在点$(6,f(6))$处的切线方程。\n\n解：因为这是个函数等式，而我们最后要求的是一个导数，所以先尝试对其直接求极限，令$x\\to0$：\n\n$f(1)-3f(1)=0$，从而得到了一个函数值$f(1)=0$。\n\n然后再对这个式子思考，等式右边为$8x$，而除以$x$就变成了8，而再对其求极限，右边就彻底变成了一个常数8：\n\n$\\lim\\limits_{x\\to 0}\\dfrac{f(1+\\sin x)-3f(1-\\sin x)}{x}=8$。对式子左边进行变形：\n\n$\\lim\\limits_{x\\to 0}\\dfrac{f(1+\\sin x)-3f(1-\\sin x)}{x}=\\lim\\limits_{x\\to 0}\\dfrac{f(1+\\sin x)-3f(1-\\sin x)}{\\sin x}$。\n\n令$t=\\sin x$：\n\n$=\\lim\\limits_{t\\to 0}\\dfrac{f(1+t)-3f(1-t)}{t}=\\lim\\limits_{t\\to 0}\\dfrac{f(1+t)-f(1)}{t}+3\\lim\\limits_{t\\to 0}\\dfrac{f(1-t)-f(1)}{-t}$。\n\n因为$t\\to 0$，所以$1-t$和$1+t$都是$t=1$时的导数$f'(x)$的定义：$=4f'(1)=8$，从而$f'(1)=2$。\n\n由$f(x)$的周期为5，所以$f(6)=f(1)=0$，$f'(6)=f'(1)=2$，所以曲线$y=f(x)$在$(6,f(6))$即$(6,0)$处的切线方程为$y-0=2(x-6)$即$2x-y-12=0$。\n\n#### 导数求极限\n\n题目会给出对应的导数以及相关条件，并要求求一个极限，这个极限式子并不是个随机的式子，而一个是与导数定义相关的极限式子，所需要的就是将极限式子转换为导数定义的相关式子。\n\n#### 导数定义式子\n \\leavevmode\n\n有时极限式子可以直接转换为导数定义式子，先稍微变换就可以代入导数。\n\n例题：设$f(x)$是以3为周期的可导函数，且是偶函数，$f'(-2)=-1$，求$\\lim\\limits_{h\\to 0}\\dfrac{h}{f(5-2\\sin h)-f(5)}$。\n\n解：根据导数与函数的基本性质，原函数为偶函数，则其导函数为奇函数，所以$f'(5)=f'(2)=-f'(-2)=1$。\n\n然后需要转换目标的极限式子，因为目标式子倒过来的式子类似于导数定义的$f'(x)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}$结构。所以我们可以先求其倒数式子：\n\n$=\\lim\\limits_{h\\to 0}\\dfrac{f(5-2\\sin h)-f(5)}{h}=\\lim\\limits_{h\\to 0}\\dfrac{f(5-2\\sin h)-f(5)}{-2\\sin h}\\cdot\\dfrac{-2\\sin h}{h}$\n\n$=-2f'(5)=-2\\times 1=-2$\n\n$\\therefore\\lim\\limits_{h\\to 0}\\dfrac{h}{f(5-2\\sin h)-f(5)}=-\\dfrac{1}{2}$。\n\n#### 定义近似式子\n \\leavevmode\n\n有时候极限式子不为导数定义的近似式子，这时候就需要先根据求极限的计算方式简化目标极限式子。\n\n例题：设$f(x)$在$x=0$处可导且$f(0)=1$，$f'(0)=3$，则数列极限$I=\\lim\\limits_{n\\to\\infty}\\left(f\\left(\\dfrac{1}{n}\\right)\\right)^{\\frac{\\frac{1}{n}}{1-\\cos\\frac{1}{n}}}$。\n\n解：设$\\dfrac{1}{n}=x$，则：\n\n$=\\lim\\limits_{x\\to 0}(f(x))^{\\frac{x}{1-\\cos x}}=e^{\\lim\\limits_{x\\to 0}\\frac{x}{1-\\cos x}\\ln f(x)}=e^{2\\lim\\limits_{x\\to 0}\\frac{\\ln f(x)}{x}}=e^{2\\lim\\limits_{x\\to 0}\\frac{f(x)-1}{x}}$\n\n$=e^{2\\lim\\limits_{x\\to 0}\\frac{f(x)-f(0)}{x-0}}=e^{2f'(0)}=e^6$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#高阶导数",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "高阶导数",
  "kind": "定理",
  "text": "高阶导数基本公式（在各函数定义域内）：\n\n- $(e^x)^{(n)}=e^x$。\n- $(a^x)^{(n)}=a^x(\\ln a)^n$（$a>0$）。\n- $(\\ln x)^{(n)}=(-1)^{n-1}(n-1)!x^{-n}$（$x>0$）。\n- $\\left(\\dfrac{1}{1+x}\\right)^{(n)}=(-1)^n\\dfrac{n!}{(1+x)^{n+1}}$。\n- $\\left(\\dfrac{1}{1-x}\\right)^{(n)}=\\dfrac{n!}{(1-x)^{n+1}}$。\n- $(\\sin x)^{(n)}=\\sin(x+\\dfrac{n\\pi}{2})$。\n- $(\\cos x)^{(n)}=\\cos(x+\\dfrac{n\\pi}{2})$。\n- $\\{f(ax+b)\\}^{(n)}=a^nf^{(n)}(ax+b)$（在复合函数相应阶导数存在处）。\n\n源文两个倒数函数公式的分母幂次少了 $1$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#公式法",
  "subject": "gaoshu",
  "topic": "公式法",
  "title": "公式法",
  "kind": "定理",
  "text": "适合两个因式相乘$(uv)^{(n)}=\\sum\\limits_{k=0}^nC_n^ku^{(k)}v^{(n-k)}$。\n\n例题：求$f(x)=x^2\\ln(1+x)$在$x=0$处的$n$阶导数（$n>2$）。\n\n令$u=x^2$，$v=\\ln(1+x)$。$u'=2x$，$u''=2$，$u^{(k)}=0$（$k>2$），又在$x=0$。\n\n所以$f^{(n)}(0)=C_n^2u^{(2)}(0)v^{(n-2)}(0)=2C_n^2v^{(n-2)}(0)$。\n\n$v'=(x+1)^{-1}$，$v''=(-1)(x+1)^{-2}$，$v^{(n-2)}=\\dfrac{(-1)^{n-1}(n-3)!}{(x+1)^{n-2}}$。\n\n$v^{(n-2)}(0)=(-1)^{n-1}(n-3)!$，$f^{(n)}(0)=\\dfrac{n(n-1)}{2!}2(-1)^{n-1}(n-3)!=\\dfrac{(-1)^{n+1}n!}{n-2}$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#归纳法",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "归纳法",
  "kind": "总结",
  "text": "例题：已知$f(x)=\\dfrac{x}{x^2-5x+6}$， 求$f^{(n)}(x)$。\n\n解：首先式子为多项式形式，所以先因式分解。\n\n$f(x)=\\dfrac{x}{(x-2)(x-3)}=\\dfrac{3}{x-3}-\\dfrac{2}{x-2}$。\n\n所以根据高阶导数性质$f^{(n)}(x)=\\left(\\dfrac{3}{x-3}\\right)^{(n)}-\\left(\\dfrac{2}{x-2}\\right)^{(n)}$。\n\n令$\\psi(x)=\\dfrac{1}{x-1}=(x-3)^{-1}$，$\\psi'(x)=(-1)(x-3)^{-2}$，$\\psi''(x)=(-1)(-2)(x-3)^{-3}$，归纳得出$\\psi^{(n)}(x)=(-1)^nn!(x-3)^{-(n+1)}$。\n\n然后直接将3换成2，得出$f^{(n)}(x)=\\dfrac{3(-1)^nn!}{(x-3)^{n+1}}-\\dfrac{2(-1)^nn!}{(x-2)^{n+1}}$。\n\n例题：已知$f(x)=e^x\\sin x$， 求$f^{(n)}(x)$。\n\n解：令$f'(x)=e^x\\sin x+e^x\\cos x=e^x(\\sin x+\\cos x)=\\sqrt{2}e^x\\sin\\left(x+\\dfrac{\\pi}{4}\\right)$。\n\n所以这里就使用三角公式，从而$f^{(n)}(x)=(\\sqrt{2})^ne^x\\sin\\left(x+n\\cdot\\dfrac{\\pi}{4}\\right)$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#莱布尼茨公式",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "莱布尼茨公式",
  "kind": "定理",
  "text": "若 $u,v$ 在某区间内具有所需的 $n$ 阶导数，则在该区间内逐点有莱布尼茨公式\n\n$(uv)^{(n)}(x)=\\sum_{k=0}^{n}\\binom{n}{k}u^{(k)}(x)v^{(n-k)}(x)$。\n\n该公式适用于求函数 $x$ 上的 $n$ 阶导数；要求某点 $x_0$ 的值时，再代入 $x=x_0$。泰勒展开中的系数是 $f^{(n)}(x_0)/n!$，但这不意味着莱布尼茨公式只能用于单点求值。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3-5",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#携带未知数的多项式求高阶导",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "携带未知数的多项式求高阶导",
  "kind": "例题",
  "text": "当所需要的求导的式子为一个多项式的时候，这个求导必然是有规律的。\n\n当所求高阶导数的$x$值为一个常数时，那么这个常数值代入求导的式子必然是会消去一部分的，最常用的常数为$x=0$。\n\n例题：已知$f(x)=x^2(x+1)^2(x+2)^2\\cdots(x+n)^2$，求$f''(0)$。\n\n解：因为式子中带有未知数$n$，所以结果很可能会带有$n$。\n\n而这个式子项数为$n+1$项，所以求导结果必然很大，所以一定会消去一部分。\n\n又求导的自变量$x=0$，而0代入很多式子都会被消去，所以这就是个突破口。\n\n因为求导是求二阶导数，所以很可能这种求导是消去一部分而不是得到一个规律，因为阶数太低很难看出规律。\n\n首先对$f(x)$求一阶导数（需要记住乘积的导数为各项求导的和）：\n\n$f'(x)=2x(x+1)^2(x+2)^2\\cdots(x+n)^2$\n\n$\\quad\\quad\\quad+x^22(x+1)(x+2)^2\\cdots(x+n)^2$\n\n$\\quad\\quad\\quad+x^2(x+1)^22(x+2)\\cdots(x+n)^2$\n\n$\\quad\\quad\\quad\\cdots$\n\n$\\quad\\quad\\quad+x^2(x+1)^2(x+2)^2\\cdots 2(x+n)$\n\n原式子一共1项，一阶导数后变为$n+1$项和，然后求二阶导数，会变为$(n+1)^2$项和。这时候我们应该回头看目标求的式子为$f''(0)$，而根据式子，只要乘积项中含有$x$项，那么这一整个项就都为0。\n\n一阶导数中除一项每个项都含有$x^2$，所以求二阶导数的时候，$x^2$会变为$2x$在$x=0$处二阶导数为0，所以求二阶导数的时候一次导数的第一项后面$n$项在$x=0$处都是0，可以不用考虑。\n\n而一阶导数的第一项只有对第一个$x$求导时会消去这个$x$变为$2(x+1)^2(x+2)^2\\cdots(x+n)^2$，其他的$n$项二阶导数仍然含有$x$的项，所以结果也为0。\n\n所以求$f''(0)$时，只有对一阶导数的第一项的第一个$x$求导所得到的导数项不为0，其他都是0，所以最后$f''(0)=2(x+1)^2(x+2)^2\\cdots(x+n)^2=2(n!)^2$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-3-6",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#反函数高阶导数",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "反函数高阶导数",
  "kind": "例题",
  "text": "已知一阶导数的时候，反函数的导数为原函数导数的倒数（$g'(x)=\\dfrac{1}{f'(x)}$）。\n\n因为原函数的一阶导数是$\\dfrac{\\textrm{d}y}{\\textrm{d}x}$，而反函数就是对原函数的$xy$对调，所以其反函数的一阶导数为$\\dfrac{\\textrm{d}x}{\\textrm{d}y}$。\n\n当求反函数的高阶导数时需要将分子分母同时除以$\\textrm{d}x$。\n\n例题：已知$y=x+e^x$，求其反函数的二阶导数。\n\n解：$y=x+e^x$的反函数的一阶导数为$\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\dfrac{1}{1+e^x}$。\n\n所以二阶导数为$\\dfrac{\\textrm{d}^2x}{\\textrm{d}y^2}=\\dfrac{\\textrm{d}\\left(\\dfrac{1}{1+e^{x}}\\right)}{\\textrm{d}y}=\\dfrac{\\dfrac{\\textrm{d}\\left(\\dfrac{1}{1+e^{x}}\\right)}{\\textrm{d}x}}{\\dfrac{\\textrm{d}y}{\\textrm{d}x}}=-\\dfrac{e^x}{(1+e^x)^3}$。\n\n例题：已知$\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\dfrac{1}{y'}$，求$\\dfrac{\\textrm{d}^2x}{\\textrm{d}y^2}$和$\\dfrac{\\textrm{d}^3x}{\\textrm{d}y^3}$。\n\n解：其实就是求$\\dfrac{\\textrm{d}^2x}{\\textrm{d}y^2}$和$\\dfrac{\\textrm{d}^3x}{\\textrm{d}y^3}$，$\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\dfrac{1}{y'}$这个条件只是让我们用$y'$来表示结果而已。\n\n$\\dfrac{\\textrm{d}^2x}{\\textrm{d}y^2}=\\dfrac{\\textrm{d}\\dfrac{\\textrm{d}x}{\\textrm{d}y}}{\\textrm{d}y}=\\dfrac{\\dfrac{\\textrm{d}\\dfrac{\\textrm{d}x}{\\textrm{d}y}}{\\textrm{d}x}}{\\dfrac{\\textrm{d}y}{\\textrm{d}x}}=\\dfrac{-\\dfrac{y''}{(y')^2}}{y'}=-\\dfrac{y''}{(y')^3}$。\n\n$\\dfrac{\\textrm{d}^3x}{\\textrm{d}y^3}=\\dfrac{\\textrm{d}\\dfrac{\\textrm{d}^2x}{\\textrm{d}^2y}}{\\textrm{d}y}=\\dfrac{\\dfrac{\\textrm{d}\\dfrac{\\textrm{d}^2x}{\\textrm{d}^2y}}{\\textrm{d}x}}{\\dfrac{\\textrm{d}y}{\\textrm{d}x}}=\\dfrac{-\\dfrac{y'''y'-3(y'')^2}{(y')^4}}{y'}=\\dfrac{3(y'')^2-y'y'''}{(y')^5}$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-4",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#隐函数与参数方程",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "隐函数与参数方程",
  "kind": "例题",
  "text": "设参数方程 $x=x(t),y=y(t)$。若 $x$ 在 $t_0$ 的某邻域内连续可导，且 $x'(t_0)\\ne0$，则缩小邻域后 $x'(t)$ 不为零，$x(t)$ 局部可逆。若 $y$ 在 $t_0$ 可导，便可在对应点用链式法则得到\n\n$\\dfrac{dy}{dx}\\bigg|_{t=t_0}=\\dfrac{y'(t_0)}{x'(t_0)}=\\dfrac{dy/dt}{dx/dt}$。\n\n更一般地，若 $x,y$ 在该邻域内均为 $n$ 次连续可导，$n\\ge1$，且 $x'(t)\\ne0$，则\n\n$\\dfrac{d^n y}{dx^n}=\\left(\\dfrac{1}{x'(t)}\\dfrac{d}{dt}\\right)^n y(t)$，\n\n其中右侧算子按复合算子迭代作用于 $y(t)$。因此参数商公式需检查邻域可逆性和分母非零，单独知道 $x'(t_0)\\ne0$ 而没有邻域正则条件不足以推出局部可逆。若 $x'(t_0)=0$，公式不能直接使用；例如 $x=t^2,y=t$ 在 $t=0$ 的参数商无定义，且曲线附近不能表示成单值的 $y(x)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s2-5",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#导数与积分",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "导数与积分",
  "kind": "例题",
  "text": "由于对积分求导可以直接由公式得出，所以放在导数的一章。\n\n对有积分上下限函数的求导的公式：\n\n$F(x)=\\int_{g(x)}^{h(x)}f(t)\\,\\textrm{d}t$，则$F'(x)=h'(x)f[h(x)]-g'(x)f[g(x)]$。\n\n例题：已知$y=f(x)$的反函数为$x=\\varphi(y)$，且$f(x)=\\int_1^{2x}e^{t^2}\\,\\textrm{d}t+1$，求$\\varphi''(1)$。\n\n解：由于反函数的性质，$\\varphi'(y)=\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\dfrac{1}{f'(x)}$。\n\n$\\varphi''(y)=\\dfrac{\\textrm{d}}{\\textrm{d}x}\\left[\\dfrac{1}{f'(x)}\\right]\\cdot\\dfrac{\\textrm{d}x}{\\textrm{d}y}=-\\dfrac{f''(x)}{[f'(x)]^2}\\cdot\\dfrac{1}{f'(x)}=-\\dfrac{f''(x)}{[f'(x)]^3}$。\n\n由公式可对积分$f(x)$求导$f'(x)=2e^{4x^2}$，$f''(x)=16xe^{4x^2}$。\n\n若$y=1$，则$x=\\dfrac{1}{2}$，则$\\varphi''(1)=-\\dfrac{f''\\left(\\dfrac{1}{2}\\right)}{\\left[f'\\left(\\dfrac{1}{2}\\right)\\right]^3}=-\\dfrac{8e}{8e^3}=-\\dfrac{1}{e^2}$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s3-0",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#微分不等式",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "微分不等式",
  "kind": "方法",
  "text": "微分若是出单独的计算很可能是物理应用问题，如计算速度增量、面积增量等，但是对于数一而言单独考的概率不大。\n\n微分一般都是微分不等式的形式进行出题，即含有微分的不等式证明。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#函数性态",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "函数性态",
  "kind": "例题",
  "text": "包括单调性、凹凸性与最值。\n\n例题：证明当$x>0$时$\\ln\\left(1+\\dfrac{1}{x}\\right)<\\dfrac{1}{\\sqrt{x(x+1)}}$。\n\n证明：令$F(x)=\\ln\\left(1+\\dfrac{1}{x}\\right)-\\dfrac{1}{\\sqrt{x(x+1)}}$。\n\n即证明$\\sqrt{x(x+1)}\\ln\\left(1+\\dfrac{1}{x}\\right)<1$。\n\n令$t=\\dfrac{1}{x}$，即证$\\ln(1+t)\\sqrt{\\dfrac{1}{t}\\left(\\dfrac{1}{t}+1\\right)}<1$，$\\ln(1+t)\\sqrt{1+t}<t$。\n\n令$F(t)=t-\\ln(1+t)\\sqrt{1+t}$，证明$F(t)>0$。\n\n则$F'(t)=1-\\dfrac{\\sqrt{1+t}}{1+t}-\\dfrac{\\ln(1+t)}{2\\sqrt{1+t}}=1-\\dfrac{2+\\ln(1+t)}{2\\sqrt{1+t}}>0$。\n\n$F(t)$递增，所以$F(t)>F(0)=0$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#常数变量",
  "subject": "gaoshu",
  "topic": "常数变量",
  "title": "常数变量",
  "kind": "例题",
  "text": "如果不等式中都是常数，可以将其中的一个或几个常数变量化再利用导数去证明。\n\n此外注意对式子进行化简，不要直接就计算不等式与计算导数。遇到$e^xf(x)$乘积形式就取对数让乘积变为加减法，遇到两边为平方项就两边开根号并加上绝对值。\n\n例题：设$0<a<b$，证明$\\ln\\dfrac{b}{a}>2\\dfrac{b-a}{a+b}$。\n\n因为左边含有$\\dfrac{b}{a}$不好处理，所以右边分子分母同时除以$a$全部变成统一变量：$\\ln\\dfrac{b}{a}>2\\dfrac{\\dfrac{b}{a}-1}{1+\\dfrac{b}{a}}$。然后令$x=\\dfrac{b}{a}$，所以即需要证明$\\ln x>2\\dfrac{x-1}{1+x}$，$x>1$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "中值定理",
  "kind": "定理",
  "text": "一般使用拉格朗日中值定理或泰勒公式，也可能用其他的中值定理。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s4-1",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#物理应用",
  "subject": "gaoshu",
  "topic": "物理应用",
  "title": "物理应用",
  "kind": "方法",
  "text": "考的可能性不大。\n\n如$v=\\lim\\limits_{\\Delta t\\to0}\\dfrac{\\Delta s}{\\Delta t}=s'(t)$，加速度$a(t)=\\lim\\limits_{\\Delta t\\to0}\\dfrac{\\Delta v}{\\Delta t}=v'(t)=s''(t)$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s4-2",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#相关变化律",
  "subject": "gaoshu",
  "topic": "一元微分物理与优化应用",
  "title": "相关变化律",
  "kind": "例题",
  "text": "这个部分在书上主要是跟隐函数共同出现。\n\n相关变化率含有一个最终的自变量$t$，$xy$都是关于$t$的函数。即隐函数$\\dfrac{\\textrm{d}y}{\\textrm{d}t}=\\dfrac{\\textrm{d}y}{\\textrm{d}x}\\dfrac{\\textrm{d}x}{\\textrm{d}t}$。\n\n例题：已知动点$P$在曲线$y=x^3$上运动，记坐标原点与点$P$之间的距离为$l$。若点$P$的横坐标对事件的变化率为常数$v_0$，则当$P$运动到点$(1,1)$时，求$l$对时间的变化率。\n\n解：求$l$对时间的变化率就是求$\\dfrac{\\textrm{d}l}{\\textrm{d}t}$，即求$\\dfrac{\\textrm{d}l}{\\textrm{d}x}\\dfrac{\\textrm{d}x}{\\textrm{d}t}$，且已知$\\dfrac{\\textrm{d}x}{\\textrm{d}t}=v_0$。\n\n又$l=\\sqrt{x^2+y^2}=\\sqrt{x^2+x^6}=x\\sqrt{1+x^4}$。\n\n$\\therefore\\dfrac{\\textrm{d}l}{\\textrm{d}x}=\\dfrac{1+3x^4}{\\sqrt{1+x^4}}$，所以$\\dfrac{\\textrm{d}l}{\\textrm{d}t}=\\dfrac{1+3x^4}{\\sqrt{1+x^4}}v_0$，代入$(1,1)$得到：$2\\sqrt{2}v_0$。",
  "relatedLessons": [
   "gs07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-3-differentiation-of-functions-of-single-variable-differentiation-of-functions-of-single-variable-s4-3",
  "repo": "R08",
  "source": "advanced-math/exercise/3-differentiation-of-functions-of-single-variable/differentiation-of-functions-of-single-variable.tex#几何应用",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "几何应用",
  "kind": "方法",
  "text": "主要是曲率的应用。\n\n曲率公式：$k=\\left\\lvert\\dfrac{\\textrm{d}\\alpha}{\\textrm{d}s}\\right\\rvert=\\dfrac{\\vert y''\\vert}{(1+y'^2)^{\\frac{3}{2}}}$。曲率半径：$r=\\dfrac{1}{k}$。\n\n#### 一般计算\n\n例题：求$y=\\sin x$在$x=\\dfrac{\\pi}{4}$对应的曲率\n\n解：$y'=\\cos x$，$y'(\\dfrac{\\pi}{4})=\\dfrac{\\sqrt{2}}{2}$。\n\n$y''=-\\sin x$，$y''(\\dfrac{\\pi}{4})=-\\dfrac{\\sqrt{2}}{2}$。\n\n$\\therefore k=\\dfrac{\\dfrac{\\sqrt{2}}{2}}{\\dfrac{3}{2}\\cdot\\sqrt{\\dfrac{3}{2}}}=\\dfrac{2\\sqrt{3}}{9}$。\n\n所以$y=\\sin x$在$x=\\dfrac{\\pi}{4}$的点$(\\dfrac{\\pi}{4},\\dfrac{\\sqrt{2}}{2})$的曲率为$\\dfrac{2\\sqrt{3}}{9}$。\n\n#### 最值\n\n例题：求$y=x^2-4x+11$曲率最大值所在的点。\n\n解：简单得$y'=2x-4$，$y''=2$。\n\n曲率为$\\dfrac{2}{[1+(2x-4)^2]^{\\frac{3}{2}}}$。\n\n当$2x-4=0$时即在$(2,7)$时曲率最大为2。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#存在性",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "存在性",
  "kind": "例题",
  "text": "主要是判断在指定区域内是否连续和有界。\n\n函数有有限个间断点，函数有界；函数连续，函数单调有界。\n\n一个函数，可以存在不定积分，而不存在定积分;也可以存在定积分，而不存在不定积分。一个连续函数，一定存在定积分和不定积分;若只有有限个间断点，则定积分存在;若有跳跃间断点，则原函数一定不存在，即不定积分一定不存在。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#连续性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "连续性",
  "kind": "例题",
  "text": "- 函数可积，原函数连续。\n\n- 函数连续，原函数可导（连续）。\n\n- 函数有有限个第一类间断点，则原函数连续。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#基本积分",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "基本积分",
  "kind": "例题",
  "text": "例题：汽车以20m/s的速度行驶，刹车后匀减速行驶了50m停止，求刹车加速度。\n\n解：已知题目含有两个变量：距离和时间，设距离为$s$，时间为$t$。\n\n因为汽车首先按20m/s匀速运动，所以$\\dfrac{\\textrm{d}s}{\\textrm{d}t}\\bigg\\vert_{t=0}=20$，最开始距离为0，所以$s\\vert_{t=0}=0$。\n\n又因为是匀减速的，所以速度形如：$v=\\dfrac{s}{t}=kt+b$，从而令二阶导数下$\\dfrac{\\textrm{d}^2s}{\\textrm{d}t^2}=k$。\n\n所以$\\displaystyle{\\dfrac{\\textrm{d}s}{\\textrm{d}t}=\\int\\dfrac{\\textrm{d}^2s}{\\textrm{d}t^2}\\,\\textrm{d}t=\\int k\\,\\textrm{d}t}=kt+C_1$。\n\n代入$\\dfrac{\\textrm{d}s}{\\textrm{d}t}\\bigg\\vert_{t=0}=20$，所以$C_1=20$，即$\\dfrac{\\textrm{d}s}{\\textrm{d}t}=kt+20$。\n\n所以$\\textrm{d}s=(kt+20)\\,\\textrm{d}t$，从而$s=\\displaystyle{\\int(kt+20)\\,\\textrm{d}t}=\\dfrac{1}{2}kt^2+20t+C_2$。\n\n又$s\\vert_{t=0}=0$，所以代入得$C_2=0$，所以$s=\\dfrac{1}{2}kt^2+20t$。\n\n当$s=50$时停住，所以此时$\\dfrac{\\textrm{d}s}{\\textrm{d}t}=0$，得到$t=-\\dfrac{20}{k}$。\n\n代入$s$：$50=\\dfrac{1}{2}k\\left(-\\dfrac{20}{k}\\right)^2+20\\left(-\\dfrac{20}{k}\\right)$，解得$k=-4$，即加速度为-4m/$s^2$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#凑微分法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "凑微分法",
  "kind": "例题",
  "text": "\\leavevmode\n\n将复杂的式子转换为简单的一个因式放到$\\textrm{d}$后面看作一个整体，然后利用基本积分公式计算。适用于式子近于基本公式的情况。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{x\\ln x\\ln\\ln x}}$。\n\n解：$=\\displaystyle{\\int\\dfrac{\\textrm{d}(\\ln x)}{\\ln x\\ln\\ln x}}=\\displaystyle{\\int\\dfrac{\\textrm{d}(\\ln\\ln x)}{\\ln\\ln x}}=\\ln\\vert\\ln\\ln x\\vert+C$。\n\n例题：求$\\displaystyle{\\int\\dfrac{10^{2\\arccos x}}{\\sqrt{1-x^2}}\\,\\textrm{d}x}$。\n\n解：$=-\\displaystyle{\\int10^{2\\arccos x}\\,\\textrm{d}(\\arccos x)}=-\\dfrac{1}{2}\\displaystyle{\\int10^{2\\arccos x}\\,\\textrm{d}(2\\arccos x)}$\n\n$=-\\dfrac{10^{2\\arccos x}}{2\\ln10}+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#积化和差",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "积化和差",
  "kind": "例题",
  "text": "\\leavevmode\n\n对于两个三角函数的乘积可以使用积化和差简单计算。特别是携带$\\sin2x$、$\\cos2x$、$\\sin3x$等的。\n\n例题：求$\\displaystyle{\\int\\sin2x\\cos3x\\,\\textrm{d}x}$。\n\n解：$=\\displaystyle{\\int\\cos3x\\sin2x\\,\\textrm{d}x=\\dfrac{1}{2}\\int(\\sin5x-\\sin x)\\,\\textrm{d}x}$\n\n$=\\dfrac{1}{2}\\int\\sin5x\\,\\textrm{d}x-\\dfrac{1}{2}\\int\\sin x\\,\\textrm{d}x=-\\dfrac{1}{10}\\cos5x+\\dfrac{1}{2}\\cos x+C$。\n\n例题：求$\\int\\sin x\\sin2x\\sin3x\\,\\textrm{d}x$。\n\n解：这时候需要利用积化和差。\n\n$=\\displaystyle{\\int\\dfrac{1}{2}(\\cos x-\\cos3x)\\sin3x\\,\\textrm{d}x=\\dfrac{1}{2}\\int\\cos x\\sin3x\\,\\textrm{d}x-\\dfrac{1}{2}\\int\\cos3x\\sin3x\\,\\textrm{d}x}$\n\n$=\\dfrac{1}{4}\\int(\\sin2x+\\sin4x)\\textrm{d}x-\\dfrac{1}{12}\\sin^23x=-\\dfrac{1}{16}\\cos4x-\\dfrac{1}{8}\\cos2x-\\dfrac{1}{12}\\sin^23x+C$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-4",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#三角等式",
  "subject": "gaoshu",
  "topic": "三角等式",
  "title": "三角等式",
  "kind": "例题",
  "text": "\\leavevmode\n\n主要用于$\\sec^2-1=\\tan^2x$，当出现$\\tan^2$、$\\tan^3$等与$\\sec x$在一起作为乘积时可以考虑拆分换元。同时$\\sin^2x+\\cos^2=1$，$\\csc^2x-\\cos^2x=1$。\n\n例题：$\\displaystyle{\\int\\tan^3x\\sec x\\,\\textrm{d}x}$。\n\n解：$=\\displaystyle{\\int(\\sec^2x-1)}\\tan x\\sec x\\,\\textrm{d}x=\\displaystyle{\\int(\\sec^2x-1)}\\,\\textrm{d}(\\sec x)$\n\n$=\\dfrac{1}{3}\\sec^3x-\\sec x+C$。\n\n有时需要利用到有理积分的高阶多项式分配与低阶多项式因式分解。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{(2+\\cos x)\\sin x}}$。\n\n解：将所有的$\\sin x$都变成$\\cos x$。所以分子分母都乘上$\\sin x$。\n\n$=\\displaystyle{\\int\\dfrac{\\textrm{d}(\\cos x)}{(2+\\cos x)(\\cos^2x-1)}}$，令$\\cos x=u$：$=\\displaystyle{\\int\\dfrac{\\textrm{d}u}{(2+u)(u^2-1)}}$。\n\n利用低阶多项式因式分解：$=\\displaystyle{\\int\\left[\\dfrac{1}{6(u-1)}-\\dfrac{1}{2(u+1)}+\\dfrac{1}{3(u+2)}\\right]\\textrm{d}u}$\n\n$=\\dfrac{1}{6}\\vert u-1\\vert-\\dfrac{1}{2}\\ln\\vert u+1\\vert+\\dfrac{1}{3}\\ln\\vert u+2\\vert+C=\\dfrac{1}{6}\\ln(1-\\cos x)-\\dfrac{1}{2}\\ln(1+\\cos x)+\\dfrac{1}{3}\\ln(2+\\cos x)+C$。\n\n有时还可以用二倍角公式。特别是遇到$1+\\cos x$等。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\sqrt{1+\\cos x}}{\\sin x}\\textrm{d}x}$。\n\n解：看到根号就会很自然想到使用有理换元的方式，令$\\sqrt{1+\\cos x}=u$，从而$\\sin x=\\sqrt{2u^2-u^4}$，原式$=\\displaystyle{\\int\\dfrac{u}{\\sqrt{2u^2-u^4}}\\textrm{d}u}$，这时会发现根本解不出来。\n\n这里自然会想到把根号去掉，那么还有什么方法？将$1+\\cos x$变为一个平方的形式，可以使用二倍角公式$1+\\cos x=\\cos^2\\dfrac{x}{2}$，同理分母$\\sin x=2\\sin\\dfrac{x}{2}\\cos\\dfrac{x}{2}$。\n\n$=\\displaystyle{\\int\\dfrac{\\sqrt{2}\\left\\vert\\cos\\dfrac{x}{2}\\right\\vert}{2\\sin\\dfrac{x}{2}\\cos\\dfrac{x}{2}}\\textrm{d}x=\\pm\\sqrt{2}\\int\\csc\\dfrac{x}{2}\\textrm{d}\\left(\\dfrac{x}{2}\\right)=\\pm\\sqrt{2}\\ln\\left\\vert\\csc\\dfrac{x}{2}-\\cot\\dfrac{x}{2}\\right\\vert+C}$。\n\n且$\\cos\\dfrac{x}{2}>0$为正，否则为负。\n\n又$\\ln\\left\\vert\\csc\\dfrac{x}{2}-\\cot\\dfrac{x}{2}\\right\\vert=\\ln\\dfrac{\\left\\vert1-\\cos\\dfrac{x}{2}\\right\\vert}{\\left\\vert\\sin\\dfrac{x}{2}\\right\\vert}=\\ln\\left(\\dfrac{1}{\\left\\vert\\sin\\dfrac{x}{2}\\right\\vert}-\\dfrac{\\cos\\dfrac{x}{2}}{\\left\\vert\\sin\\dfrac{x}{2}\\right\\vert}\\right)$。\n\n所以当$\\cos\\dfrac{x}{2}>0$时乘积正负号不变，$=\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert-\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)$。\n\n当$\\cos\\dfrac{x}{2}<0$时乘积正负号相反，提出负号，$=\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert+\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)$。\n\n又$\\csc^2\\dfrac{x}{2}-\\cot^2\\dfrac{x}{2}=1$，$\\therefore\\ln\\left(\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert+\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)\\cdot\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert-\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)\\right)=\\ln\\left(\\csc^2\\dfrac{x}{2}-\\cot^2\\dfrac{x}{2}\\right)=\\ln1=0$，$\\therefore\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert+\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)+\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert-\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)=0$，$\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert+\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)=-\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert-\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)$。\n\n当$\\cos\\dfrac{x}{2}>0$，$=\\sqrt{2}\\ln\\left\\vert\\csc\\dfrac{x}{2}-\\cot\\dfrac{x}{2}\\right\\vert+C=\\sqrt{2}\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert-\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)+C$。\n\n当$\\cos\\dfrac{x}{2}<0$，$=-\\sqrt{2}\\ln\\left\\vert\\csc\\dfrac{x}{2}-\\cot\\dfrac{x}{2}\\right\\vert+C=\\sqrt{2}\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert-\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)+C$。\n\n综上，$\\displaystyle{\\int\\dfrac{\\sqrt{1+\\cos x}}{\\sin x}\\textrm{d}x}=\\sqrt{2}\\ln\\left(\\left\\vert\\csc\\dfrac{x}{2}\\right\\vert-\\left\\vert\\cot\\dfrac{x}{2}\\right\\vert\\right)+C$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-5",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#反三角换元",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "反三角换元",
  "kind": "例题",
  "text": "\\leavevmode\n\n当积分式子中存在$\\arcsin x$、$\\arccos x$、$\\arctan x$这种反三角函数时，可以考虑将其令为$t$来进行简化计算。从而$x$分别为$\\sin t$、$\\cos t$、$\\tan t$。\n\n例题：求$\\int(\\arcsin x)^2\\,\\textrm{d}x$。\n\n解：令$\\arcsin x=t$，$\\therefore x=\\sin t$，$\\textrm{d}x=\\cos t\\,\\textrm{d}t$。\n\n$=\\int t^2\\cos t\\,\\textrm{d}t$。除了换元法还需要使用分部积分法，可以直接进行分部积分也可以使用下面讲到的分部积分拓展公式的表格法来计算，$\\cos t$更难求导，所以对其积分，放在下面，$t^2$容易求导，所以对其求导，放在上面：\n\n$t^2$ ｜$2t$ ｜$2$ ｜$0$\n$\\cos t$ ｜$\\sin t$ ｜$-\\cos t$ ｜$-\\sin t$\n\n$\\therefore=t^2\\sin t-2t\\cos t-\\sin t+C=(\\arcsin x)^2x+2\\arcsin x\\sqrt{1-x^2}-2x+C$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-6",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#指对换元",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "指对换元",
  "kind": "例题",
  "text": "\\leavevmode\n\n当积分式子存在指数函数$e^x$或对数函数$\\ln x$时，可以考虑令其为$t$，从而$x$分别为$\\ln t$和$e^t$。\n\n但是如果$\\ln x$、$\\arctan x$、$\\arcsin x$与$x$多项式或$e^x$做乘法时要考虑分布积分法。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-7",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#倒数换元",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "倒数换元",
  "kind": "例题",
  "text": "\\leavevmode\n\n当被积函数的分母的幂次要比分子高两次以及以上时，令$x=\\dfrac{1}{u}$。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{x^2\\sqrt{x^2-1}}}$。\n\n解：因为所有的变量都在分母，所以先进行倒代换：\n\n$=-\\displaystyle{\\int\\dfrac{u\\,\\textrm{d}u}{\\sqrt{1-u^2}}}=\\sqrt{1-u^2}+C=\\dfrac{\\sqrt{x^2-1}}{x}+C$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-8",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#有理换元",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "有理换元",
  "kind": "例题",
  "text": "\\leavevmode\n\n书上这个类型属于有理函数部分，我这里移动到第一类换元中。即将无理因式直接设为一个变量，从而提高式子的阶数，消除无理式变为有理式。\n\n有理换元时无理因式中的$x$必须是一阶的，如$\\sqrt[3]{x+6}=u$，若是二阶需要利用第二类换元（三角换元），否则则无法消去无理因式项，因为$x$不能用单个的$u$来表示，如$\\sqrt{x^3+6}=u$，$u=\\sqrt[3]{u^2-6}$。\n\n若式子是一个因式的整数次幂，则可以直接令这个因式为中间变量。\n\n当无理式子是一个分式或其他复杂形式，既可以令其整个都是中间变量，也可以先化简，但是不能将无理式子拆开，否则有理换元就无用了。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{1+\\sqrt[3]{x+1}}}$。\n\n解：令$u=\\sqrt[3]{x+1}$，从而$x=u^3-1$，$\\textrm{d}x=3u^2\\,\\textrm{d}u$。\n\n$=\\displaystyle{\\int\\dfrac{3u^2}{1+u}\\textrm{d}u=\\int\\dfrac{3u^2+3u-3u-3+3}{1+u}\\textrm{d}u=\\int\\left(3u-3+\\dfrac{3}{1+u}\\right)\\textrm{d}u}$\n\n$=\\dfrac{3}{2}u^2-3u+3\\ln\\vert1+u\\vert+C=\\dfrac{3}{2}\\sqrt[3]{(x+1)^2}-3\\sqrt[3]{x+1}+3\\ln\\vert1+\\sqrt[3]{x+1}\\vert+C$。\n\n可以和有理积分一同使用：\n\n例题：求$\\displaystyle{\\int\\sqrt{\\dfrac{1-x}{1+x}}\\dfrac{\\textrm{d}x}{x}}$。\n\n解：令$u=\\sqrt{\\dfrac{1-x}{1+x}}$，$x=\\dfrac{1-u^2}{1+u^2}$。\n\n$\\therefore\\textrm{d}x=\\textrm{d}\\left(\\dfrac{1-u^2}{1+u^2}\\right)=\\dfrac{-2u(1+u^2)-2u(1-u^2)}{(1+u^2)^2}$\n\n$=\\displaystyle{\\int u\\cdot\\dfrac{1+u^2}{1-u^2}\\cdot\\dfrac{-4u}{(1+u^2)^2}\\textrm{d}u=\\int\\dfrac{-4u^2}{(1-u)(1+u)(1+u^2)}\\textrm{d}u}$\n\n令$\\dfrac{A}{1-u}+\\dfrac{B}{1+u}+\\dfrac{Cu+D}{1+u^2}=\\dfrac{-4u^2}{(1-u)(1+u)(1+u^2)}$。\n\n通分：$A(1+u^2+u+u^3)+B(1+u^2-u-u^3)+(Cu-Cu^3+D-Du^2)$\n\n$=(A-B-C)u^3+(A+B-D)u^2+(A-B+C)u+(A+B+D)=-4u^2$\n\n$\\therefore A-B-C=0$，$A+B-D=-4$，$A-B+C=0$，$A+B+D=0$。\n\n$\\therefore A=B=-1$，$C=0$，$D=2$。\n\n原式$=\\displaystyle{\\int\\left(\\dfrac{2}{1+u^2}-\\dfrac{1}{1-u}-\\dfrac{1}{1+u}\\right)\\textrm{d}u}$\n\n$=2\\arctan u+\\ln\\vert1-u\\vert-\\ln\\vert1+u\\vert+C$\n\n$=2\\arctan\\sqrt{\\dfrac{1-x}{1+x}}+\\ln\\left\\vert\\dfrac{\\sqrt{1+x}-\\sqrt{1-x}}{\\sqrt{1+x}+\\sqrt{1-x}}\\right\\vert+C$。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{\\sqrt[3]{(x+1)^2(x-1)^4}}}$。\n\n解：由最开始分析的，有理换元需要让换元里的式子是一个一阶的，而现在里面最高四阶，所以必须想办法把这个式子转换为一阶的，这个也是本题目的难点。由于是三次根，所以可以尝试将里面的$(x+1)^2(x-1)^4$都提出三次方：\n\n$=\\displaystyle{\\int\\dfrac{1}{x^2-1}\\sqrt[3]{\\dfrac{x+1}{x-1}}\\textrm{d}x}$，令$\\sqrt[3]{\\dfrac{x+1}{x-1}}=u$，所以$x=\\dfrac{u^3+1}{u^3-1}$：\n\n$=\\displaystyle{\\int\\dfrac{u}{\\left(\\dfrac{u^3+1}{u^3-1}\\right)^2-1}\\cdot\\dfrac{-6u^2}{(u^3-1)^2}\\textrm{d}u=-\\dfrac{3}{2}\\int\\textrm{d}u}=-\\dfrac{3}{2}u+C=-\\dfrac{3}{2}\\sqrt[3]{\\dfrac{x+1}{x-1}}+C $。\n\n因为有理换元将一个复杂的式子设为$u$，所以有时可以使用分部积分法：\n\n例题：求$\\displaystyle{\\int\\sqrt{\\dfrac{a+x}{a-x}}\\textrm{d}x}$。\n\n解：令$\\sqrt{\\dfrac{a+x}{a-x}}=u$，解得$x=a\\dfrac{u^2-1}{u^2+1}$，$\\textrm{d}x=4a\\dfrac{u\\,\\textrm{d}u}{(u^2+1)^2}$。\n\n$=\\displaystyle{4a\\int\\dfrac{u^2\\,\\textrm{d}u}{(u^2+1)^2}=-2a\\int u\\,\\textrm{d}\\left(\\dfrac{1}{1+u^2}\\right)=-\\dfrac{2au}{1+u^2}+\\int\\dfrac{2a}{1+u^2}\\textrm{d}u}$\n\n$=-\\dfrac{2au}{1+u^2}+2a\\arctan u+C=(x-a)\\sqrt{\\dfrac{a+x}{a-x}}+2a\\arctan\\sqrt{\\dfrac{a+x}{a-x}}+C$\n\n$=-\\sqrt{a^2-x^2}+2a\\arctan\\sqrt{\\dfrac{a+x}{a-x}}+C$。\n\n特别是根式下是比较古怪的表达式，不能直接通过有理换元计算，可以尝试先部分积分再换元。\n\n例题：求$\\displaystyle{\\int\\dfrac{xe^x}{\\sqrt{1+e^x}}\\textrm{d}x}$。\n\n解：若首先进行换元积分法，令$\\sqrt{1+e^x}=t$，则$I=2\\int\\ln(t^2-1)\\,\\textrm{d}t$。\n\n所以先尝试换元：$\\int xe^x(1+e^x)^{-\\frac{1}{2}}\\,\\textrm{d}x=2\\int x\\,\\textrm{d}(\\sqrt{1+e^x})=2x\\sqrt{1+e^x}-2\\int\\sqrt{1+e^x}\\,\\textrm{d}x$，再令$\\sqrt{1+e^x}=t$。\n\n则$x=\\ln(t^2-1)$，$\\textrm{d}x=\\dfrac{2t}{t^2-1}\\textrm{d}t$。\n\n则$\\displaystyle{\\int\\sqrt{1+e^x}\\,\\textrm{d}x=\\int\\dfrac{2t^2}{t^2-1}\\textrm{d}t=2\\int\\dfrac{t^2-1+1}{t^2-1}\\textrm{d}t}=2\\left(t+\\dfrac{1}{2}\\ln\\left\\vert\\dfrac{t-1}{t+1}\\right\\vert\\right)+C=2\\sqrt{1+e^x}+\\ln\\dfrac{\\sqrt{1+e^x}-1}{\\sqrt{1+e^x}+1}+C$。\n\n$\\therefore=2x\\sqrt{1+e^x}-4\\sqrt{1+e^x}-2\\ln\\dfrac{\\sqrt{1+e^x}-1}{\\sqrt{1+e^x}+1}+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-9",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#万能公式",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "万能公式",
  "kind": "定理",
  "text": "\\leavevmode\n\n同样属于有理积分的内容，但是本质还是属于三角函数的部分。如果出现一个三角函数跟着常数的式子就使用万能公式。\n\n令$u=\\tan\\dfrac{x}{2}$，$\\sin x=\\dfrac{2u}{1+u^2}$，$\\cos x=\\dfrac{1-u^2}{1+u^2}$，$\\textrm{d}x=\\dfrac{2}{1+u^2}\\textrm{d}u$。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{3+\\cos x}}$。\n\n解：令$u=\\tan\\dfrac{x}{2}$，从而$\\cos x=\\dfrac{1-u^2}{1+u^2}$：\n\n$=\\displaystyle{\\int\\dfrac{1}{3+\\dfrac{1-u^2}{1+u^2}}\\cdot\\dfrac{2}{1+u^2}\\textrm{d}u=\\dfrac{1}{2+u^2}\\textrm{d}u=\\dfrac{1}{\\sqrt{2}}\\arctan\\dfrac{u}{\\sqrt{2}}+C}$\n\n$=\\dfrac{1}{\\sqrt{2}}\\arctan\\dfrac{\\tan\\dfrac{x}{2}}{\\sqrt{2}}+C$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-10",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#第二类换元",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "第二类换元",
  "kind": "例题",
  "text": "使用换元法做了换元之后是要带回式子中的，也就是说要保证反函数的存在才能代入有意义。为了保证反函数的存在，因此要保证原函数的单调性，所以要有一个规定的范围来使原函数保证单调。\n\n\\paragraph{\\texorpdfstring{$\\sqrt{a^2-x^2}$：$x=a\\sin t(a\\cos t)$}\\ } \\leavevmode\n\n若令$x=a\\sin t$，则根据$\\sin t\\in(-1,1)$得到主区间：$t\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$。\n\n若令$x=a\\cos t$，则根据$\\cos t\\in(-1,1)$，得到主区间：$t\\in(0,\\pi)$。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{1+\\sqrt{1-x^2}}}$。\n\n解：令$x=\\sin t$（$t\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$），所以$\\sqrt{1-x^2}=\\cos t$，$\\textrm{d}x=\\cos t\\,\\textrm{d}t$，$t=\\arcsin x$。\n\n因为式子$\\dfrac{1}{1+\\sqrt{1-x^2}}>0$，单调递减，所以不用讨论正负号。\n\n$=\\displaystyle{\\int\\dfrac{\\cos t}{1+\\cos t}\\textrm{d}t=\\int\\dfrac{2\\cos^2\\dfrac{t}{2}-1}{2\\cos^2\\dfrac{t}{2}}\\textrm{d}t=\\int\\textrm{d}t-\\int\\sec^2\\dfrac{t}{2}\\,\\textrm{d}t=t-\\tan}\\dfrac{t}{2}+C$\n\n$=t-\\dfrac{\\sin\\dfrac{t}{2}}{\\cos\\dfrac{t}{2}}+C=t-\\dfrac{\\sin\\dfrac{t}{2}\\cos\\dfrac{t}{2}}{\\cos^2\\dfrac{t}{2}}+C=t-\\dfrac{\\sin t}{1+\\cos t}+C$\n\n$=\\arcsin x-\\dfrac{x}{1+\\sqrt{1-x^2}}+C$。\n\n\\paragraph{\\texorpdfstring{$\\sqrt{a^2+x^2}$：$x=a\\tan t$}\\ } \\leavevmode\n\n根据$\\tan t\\in R$，从而得到主空间：$t\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$。\n\n例题：求$\\displaystyle{\\int\\dfrac{x^3+1}{(x^2+1)^2}\\textrm{d}x}$。\n\n解：虽然本题目看着可以从分母解开平方，然后低阶分配，但是这分母是平方的式子很难分配，所以需要使用换元法。\n\n令$x=\\tan t$，$t\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$，$x^2+1=\\sec^2t$，$\\textrm{d}x=\\sec^2t\\,\\textrm{d}t$。\n\n因为$(x^2+1)^2>0$，虽然$x^3+1$可能为负可能为正，但是都是单调递增的，所以不用考虑正负号。\n\n$=\\displaystyle{\\int\\dfrac{\\tan^3t+1}{\\sec^2t}\\textrm{d}t=\\int\\dfrac{\\sin^3t+\\cos^3t}{\\cos t}\\textrm{d}t=\\int\\dfrac{\\sin t(1-\\cos^2t)+\\cos^3t}{\\cos t}\\textrm{d}t}$\n\n$=\\displaystyle{\\int\\dfrac{\\cos^2t-1}{\\cos t}\\textrm{d}(\\cos t)+\\int\\dfrac{1+\\cos2t}{2}\\textrm{d}t}$\n\n$=\\displaystyle{\\int\\cos t\\,\\textrm{d}(\\cos t)-\\int\\dfrac{1}{\\cos t}\\,\\textrm{d}(\\cos t)+\\dfrac{1}{2}\\int\\textrm{d}t+\\dfrac{1}{4}\\int\\cos2t\\,\\textrm{d}(2t)}$\n\n$=\\displaystyle{\\int\\cos^t-\\ln\\cos t+\\dfrac{t}{2}+\\dfrac{1}{4}\\sin2t+C}$（$\\cos t$在$t\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$中为正）\n\n$\\because\\tan t=x$，$\\therefore\\sin t=\\dfrac{x}{\\sqrt{1+x^2}}$，$\\cos t=\\dfrac{1}{\\sqrt{1+x^2}}$。\n\n$=\\dfrac{1+x}{2(1+x^2)}+\\dfrac{1}{2}\\ln(1+x^2)+\\dfrac{1}{2}\\textrm{arctan}\\,x+C$。\n\n\\paragraph{\\texorpdfstring{$\\sqrt{x^2-a^2}$：$x=a\\sec t$}\\ } \\leavevmode\n\n根据$\\sec t\\in(-1,1)$，所以从而得到主空间：$t\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\sqrt{x^2-9}}{x}\\textrm{d}x}$。\n\n解：令$x=3\\sec t$。$\\therefore\\sqrt{x^2-9}=3\\tan t$，$\\textrm{d}x=3\\sec t\\tan t\\,\\textrm{d}t$。\n\n因为式子$\\dfrac{\\sqrt{x^2-9}}{x}$的分子必然为为正，而对于分子在0两边的单调性不同，所以需要对$x$进行正负区分，又$x\\in(-\\infty,-3]\\cup[3,+\\infty)$，所以：\n\n当$x>3$时，$\\sec t>1$，即$t\\in\\left(0,\\dfrac{\\pi}{2}\\right)$。\n\n$=\\displaystyle{\\int3\\tan^2t\\,\\textrm{d}t=3\\int(\\sec^2t-1)\\textrm{d}t}$\n\n$=3\\tan t-3t+C=\\sqrt{x^2-9}-3\\arccos\\dfrac{3}{x}+C$。\n\n当$x<-3$时，$\\sec t<-1$，即$t\\in\\left(-\\dfrac{\\pi}{2},0\\right)$。\n\n$=\\displaystyle{-\\int3\\tan^2t\\,\\textrm{d}t=-3\\int(\\sec^2t-1)\\textrm{d}t}$\n\n$=-3\\tan t+3t+C=\\sqrt{x^2-9}+3\\arccos\\dfrac{3}{x}+C$（$\\tan t<0$）\n\n$=\\sqrt{x^2-9}-3\\arccos\\dfrac{3}{-x}+3\\pi+C$（$3\\arccos\\dfrac{3}{x}=3\\pi-3\\arccos-\\dfrac{3}{x}$）\n\n$=\\sqrt{x^2-9}-3\\arccos\\dfrac{3}{-x}+C$。\n\n综上结果为$\\sqrt{x^2-9}-3\\arccos\\dfrac{3}{\\vert x\\vert}+C$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-2-11",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#辅助换元",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "辅助换元",
  "kind": "例题",
  "text": "\\leavevmode\n\n在使用换元法的时候有可能单个式子不能求出积分，而使用其他辅助式子加减在一起积分可以得到结果，从而能得到原式和辅助式子的积分结果。对于这类题目需要观察什么样的式子能让积分简单。\n\n例题：求$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{x+\\sqrt{1-x^2}}}$。\n\n解：令$x=\\sin t$，所以$\\sqrt{1-x^2}=\\cos t$，$\\textrm{d}x=\\cos t\\,\\textrm{d}t$。\n\n$\\because x+\\sqrt{1-x^2}$可能为正可能为负，正负时单调性不同，所以令$ x+\\sqrt{1-x^2}=0$，即$\\sin t=-\\dfrac{\\sqrt{2}}{2}$，从而$t\\in(-\\dfrac{\\pi}{2},-\\dfrac{\\pi}{4})\\cup(-\\dfrac{\\pi}{4},\\dfrac{\\pi}{2})$。\n\n$\\therefore=\\displaystyle{\\int\\dfrac{\\cos t}{\\sin t+\\cos t}\\textrm{d}t}$（$t\\in(-\\dfrac{\\pi}{4},\\dfrac{\\pi}{2})$）。\n\n这时你会发现使用积化和差、万能公式、倍角公式都无法解出这个积分，所以这时候就需要另外一个辅助积分式子加上或减去这个式子，从而让和以及差更容易解出积分。这里根据式子特点让辅助式子分子为$\\sin t$：\n\n令$I_1=\\displaystyle{\\int\\dfrac{\\cos t}{\\sin t+\\cos t}\\textrm{d}t}$，$I_2=\\displaystyle{\\int\\dfrac{\\sin t}{\\sin t+\\cos t}\\textrm{d}t}$。\n\n$I_1+I_2=\\displaystyle{\\int\\dfrac{\\sin t+\\cos t}{\\sin t+\\cos t}\\textrm{d}t=\\int\\textrm{d}t=t}$。\n\n$I_1-I_2=\\displaystyle{\\int\\dfrac{\\cos t-\\sin t}{\\sin t+\\cos t}\\textrm{d}t=\\int\\dfrac{\\textrm{d}(\\sin t+\\cos t)}{\\sin t+\\cos t}}=\\ln\\vert\\sin t+\\cos t\\vert +C$。\n\n所以$I_1=\\dfrac{1}{2}(\\arcsin x+\\ln\\vert x+\\sqrt{1-x^2}\\vert)+C$。\n\n同理$t\\in(-\\dfrac{\\pi}{2},-\\dfrac{\\pi}{4})$也得到同样结果。\n\n\\paragraph{\\texorpdfstring{$\\sqrt{ax^2+bx+c}$}\\ } \\leavevmode\n\n当被积函数含有根式$\\sqrt{ax^2+bx+c}$时，需要对其配方变成$\\sqrt{\\varphi^2(x)+k^2}$、$\\sqrt{\\varphi^2(x)-k^2}$、$\\sqrt{k^2-\\varphi^2(x)}$三种形式再进行三角函数换元。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#分部积分",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "分部积分",
  "kind": "例题",
  "text": "因为分部积分法使用$\\int u\\,\\textrm{d}v=uv-\\int v\\,\\textrm{d}u$，所以基本上用于两项乘积形式的积分式子。\n\n函数积分难度为：反三角函数、对数函数、幂函数、指数函数、三角函数。越往右求导越难，左边更应该当$u$进行求导，而右边更适合做$v$进行积分。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#基本分部",
  "subject": "gaoshu",
  "topic": "基本分部",
  "title": "基本分部",
  "kind": "例题",
  "text": "如果不是多次分部就是基本分部，目的都是为了降低积分式子幂次。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#非幂函数优先",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "非幂函数优先",
  "kind": "例题",
  "text": "\\leavevmode\n\n当幂函数与一些微分后能降低幂函数幂次的函数在一起时，先对非幂函数优先分部积分，结果与幂函数相乘可以消去幂次，以达到降低幂次的作用。\n\n如$\\int x^n\\ln x\\,\\textrm{d}x$，$\\int x^n\\arctan x\\,\\textrm{d}x$，$\\int x^n\\arcsin x\\,\\textrm{d}x$。\n\n例题：求$\\int x^2\\arctan x\\,\\textrm{d}x$。\n\n解：$=\\dfrac{1}{3}\\int\\arctan x\\,\\textrm{d}(x^3)=\\dfrac{1}{3}x^3\\arctan x-\\dfrac{1}{3}\\int x^3\\,\\textrm{d}(\\arctan x)$\n\n$=\\dfrac{1}{3}x^3\\arctan x-\\dfrac{1}{3}\\displaystyle{\\int\\dfrac{x^3}{1+x^2}\\textrm{d}x}=\\dfrac{1}{3}x^3\\arctan x-\\dfrac{1}{3}\\displaystyle{\\int\\dfrac{x+x^3-x}{1+x^2}\\textrm{d}x}$\n\n$=\\dfrac{1}{3}x^3\\arctan x-\\dfrac{1}{3}\\int x\\,\\textrm{d}x+\\displaystyle{\\dfrac{1}{6}\\int\\dfrac{\\textrm{d}(1+x^2)}{1+x^2}}$\n\n$=\\dfrac{1}{3}x^3\\arctan x-\\dfrac{1}{6}x^2+\\dfrac{1}{6}\\ln(1+x^2)+C$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#幂函数优先",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "幂函数优先",
  "kind": "例题",
  "text": "\\leavevmode\n\n当幂函数与三角函数在一起微分时，因为三角函数无论如何积分都不会被消去，所以应该优先消去幂函数部分，从而降低幂次。\n\n如$\\int x^a\\sin x\\,\\textrm{d}x$，$\\int x^a\\cos x\\,\\textrm{d}x$。\n\n例题：求$\\int x\\tan^2x\\,\\textrm{d}x$。\n\n解：$=\\int x(\\sec^2-1)\\,\\textrm{d}x=\\int x\\,\\textrm{d}(\\tan x)-\\dfrac{x^2}{2}=x\\tan x+\\ln\\vert\\cos x\\vert-\\dfrac{x^2}{2}+C$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-3-4",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#多次分部",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "多次分部",
  "kind": "例题",
  "text": "对于一部分通过微分形式不会发生变化的函数，所以需要多次积分，然后利用等式求出目标值。即三角函数和指数函数，这两种积分形式不变，指数函数一次积分保持不变，而三角函数两次积分保持不变。\n\n也称为积分再现、循环积分法。\n\n如：$\\int e^x\\sin x\\,\\textrm{d}x$，$\\int e^x\\cos x\\,\\textrm{d}x$。\n\n例题：求$\\int e^x\\sin^2x\\,\\textrm{d}x$。\n\n解：$=\\sin^2x\\cdot e^x-\\int e^x\\,\\textrm{d}(\\sin^2x)=\\sin^2x\\cdot e^x-\\int e^x\\cdot\\sin 2x\\,\\textrm{d}x$\n\n$=\\sin^2x\\cdot e^x-\\int\\sin2x\\,\\textrm{d}(e^x)=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+\\int e^x\\,\\textrm{d}(\\sin2x)$\n\n$=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+2\\int e^x\\cdot\\cos2x\\,\\textrm{d}x$ （①）\n\n$=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+2\\int\\cos2x\\,\\textrm{d}(e^x)$\n\n$=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+2e^x\\cos2x-2\\int e^x\\,\\textrm{d}(\\cos2x)$\n\n$=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+2e^x\\cos2x+4\\int e^x\\cdot\\sin2x\\,\\textrm{d}x$\n\n$=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+2e^x\\cos2x+4\\int\\sin2x\\,\\textrm{d}(e^x)$\n\n$=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+2e^x\\cos2x+4\\sin2x\\cdot e^x-4\\int e^x\\,\\textrm{d}(\\sin2x)$\n\n$=\\sin^2x\\cdot e^x-\\sin2x\\cdot e^x+2e^x\\cos2x+4\\sin2x\\cdot e^x-8\\int e^x\\cdot\\cos2x\\,\\textrm{d}x$ （②）\n\n然后①=②：$\\int e^x\\cdot\\cos2x\\,\\textrm{d}x=\\dfrac{e^x(\\cos2x+2\\sin2x)}{5}+C$\n\n代入①：$=\\dfrac{e^x(5\\sin^2x-5\\sin2x+2\\cos2x+4\\sin2x)}{5}+C$\n\n$=\\dfrac{e^x(5\\sin^2x-\\sin2x+2\\cos2x)}{5}+C=e^x\\left(\\dfrac{1}{2}-\\dfrac{1}{5}\\sin2x-\\dfrac{1}{10}\\cos2x\\right)+C$",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-3-5",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#分部积分推广公式",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "分部积分推广公式",
  "kind": "定理",
  "text": "分部积分法可以直接利用表格简便计算，特别是积分式子中含有$f(x)$这种不定的因子。\n\n如何得到分部积分推广公式？以三次导数的积分为例：\n\n$\\int uv'''\\,\\textrm{d}x=\\int u\\,\\textrm{d}(v'')=uv''-\\int v''u'\\,\\textrm{d}x$\n\n$\\int u'v''\\,\\textrm{d}x=\\int u'\\,\\textrm{d}(v')=u'v'-\\int v'u''\\,\\textrm{d}x$\n\n$\\int u''v'\\,\\textrm{d}x=\\int u''\\,\\textrm{d}v=u''v-\\int vu'''\\,\\textrm{d}x$\n\n$\\therefore\\int uv'''\\,\\textrm{d}x=uv''-u'v'+u''v-\\int u'''v\\,\\textrm{d}x$。\n\n所以分部积分法找到对应的规律，表格上求导，下积分：\n\n符号 ｜ + ｜ - ｜ + ｜$\\cdots$ ｜$(-1)^{n+1}$\n$u$的各阶导数 ｜$u$ ｜$u'$ ｜$u''$ ｜$\\cdots$ ｜$u^{n+1}$\n$v^{(n+1)}$的各阶原函数 ｜$v^{(n+1)}$ ｜$v^{(n)}$ ｜$v^{(n-1)}$ ｜$\\cdots$ ｜$v$\n\n以$u$为起点左上右下错位相乘，各项符号正负交错，直到$uv$的导阶数相同，最后一项是$(-1)^{n+1}\\int u^{(n+1)}v\\,\\textrm{d}x$，只要这最后一项可以解出来就可以停止了，即上下是同一类的函数或幂函数求导成0。\n\n$u$定为求导能被消去的函数，$v$定微分形式不变的函数。\n\n例题：求$\\int(x^3+2x+6)e^{2x}\\,\\textrm{d}x$。\n\n解：如果要一般求，则需要拆分：\n\n$\\int(x^3+2x+6)e^{2x}\\,\\textrm{d}x=\\int x^3e^{2x}\\,\\textrm{d}x+2\\int xe^{2x}\\,\\textrm{d}x+6\\int e^2x\\,\\textrm{d}x$。\n\n而如果使用分部积分的推广公式，令$u=x^3+2x+6$，$v=e^{2x}$。\n\n$x^3+2x+6$ ｜$3x^2+2$ ｜$6x$ ｜ 6 ｜ 0\n$e^{2x}$ ｜$\\dfrac{1}{2}e^{2x}$ ｜$\\dfrac{1}{4}e^{2x}$ ｜$\\dfrac{1}{8}e^{2x}$ ｜$\\dfrac{1}{16}e^{2x}$\n\n$\\therefore=(x^3+2x+6)\\left(\\dfrac{1}{2}e^{2x}\\right)-(3x^2+2)\\left(\\dfrac{1}{4}e^{2x}\\right)+6x\\left(\\dfrac{1}{8}e^{2x}\\right)-6\\left(\\dfrac{1}{16}e^{2x}\\right)+\\displaystyle{(-1)^{3+1}\\cdot\\int0\\cdot(\\dfrac{1}{16}e^{2x})\\,\\textrm{d}x}=\\left(\\dfrac{1}{2}x^3-\\dfrac{3}{4}x^2+\\dfrac{7}{4}x+\\dfrac{17}{8}\\right)e^{2x}+C$。\n\n例题：求$\\int x^2\\ln x\\,\\textrm{d}x$。\n\n解：\n\n$\\ln x$ ｜$\\dfrac{1}{x}$\n$x^2$ ｜$\\dfrac{1}{3}x^3$\n\n$\\therefore=\\dfrac{1}{3}x^3\\ln x-\\displaystyle{\\int\\dfrac{1}{x}\\dfrac{1}{3}x^3\\,\\textrm{d}x}=\\dfrac{1}{3}x^3\\ln x-\\dfrac{1}{9}x^3+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-3-6",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#分部与换元",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "分部与换元",
  "kind": "例题",
  "text": "分部积分法和换元积分法经常一起使用。\n\n例题：求$\\int e^{\\sqrt[3]{x}}\\,\\textrm{d}x$。\n\n解：令$\\sqrt[3]{x}=u$，从而$x=u^3$，$\\textrm{d}x=3u^2\\,\\textrm{d}u$。\n\n$=3\\int e^uu^2\\,\\textrm{d}u=3\\int u^2\\,\\textrm{d}(e^u)=3u^2e^u-3\\int e^u\\,\\textrm{d}(u^2)=3u^2e^u-6\\int e^uu\\,\\textrm{d}u$\n\n$=3u^2e^u-6\\int u\\,\\textrm{d}(e^u)=3u^2e^u-6ue^u+6\\int e^u\\,\\textrm{d}u=3u^2e^u-6ue^u+6e^u+C$\n\n$=3e^u(u^2-2u+2)+C=3e^{\\sqrt[3]{x}}(x^{\\frac{2}{3}}-2x^{\\frac{1}{3}}+2)+C$。\n\n例题：求$\\int e^{\\sqrt{3x+9}}\\,\\textrm{d}x$。\n\n解：令$\\sqrt{3x+9}=u$，从而$x=\\dfrac{1}{3}(u^2-9)$，$\\textrm{d}x=\\dfrac{2}{3}u\\,\\textrm{d}u$：\n\n$=\\displaystyle{\\dfrac{2}{3}\\int ue^u\\,\\textrm{d}u=\\dfrac{2}{3}\\int u\\,\\textrm{d}(e^u)=\\dfrac{2}{3}ue^u-\\int\\dfrac{2}{3}e^u\\,\\textrm{d}u=\\dfrac{2}{3}ue^u-\\dfrac{2}{3}e^u+C}$\n\n$=\\dfrac{2}{3}e^{\\sqrt{3x+9}}(\\sqrt{3x+9}-1)+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-4",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#有理积分",
  "subject": "gaoshu",
  "topic": "有理积分",
  "title": "有理积分",
  "kind": "例题",
  "text": "针对于多项式分式，需要将分母和分子拆解。首先需要对式子进行化简。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-4-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#高阶多项式分配",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "高阶多项式分配",
  "kind": "例题",
  "text": "当不定积分式子形如$\\displaystyle{\\int\\dfrac{f(x)}{g(x)}\\,\\textrm{d}x}$，且$f(x)$、$g(x)$都为与$x$相关的多项式，$f(x)$阶数高于或等于$g(x)$，则$f(x)$可以按照$g(x)$的形式分配，约去式子，得到最简单的表达。\n\n例题：$\\displaystyle{\\int\\dfrac{x^3}{x^2+9}\\,\\textrm{d}x}$。\n\n解：$=\\displaystyle{\\int\\dfrac{x^3+9x-9x}{x^2+9}\\,\\textrm{d}x=\\int\\dfrac{x^3+9x}{x^2+9}\\,\\textrm{d}x-\\int\\dfrac{9x}{x^2+9}\\,\\textrm{d}x}$\n\n$\\displaystyle{=\\int x\\,\\textrm{d}x-\\dfrac{9}{2}\\int\\dfrac{\\textrm{d}(x^2+9)}{x^2+9}}=\\dfrac{x^2}{2}-\\dfrac{9}{2}\\ln(9+x^2)+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-4-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#低阶多项式分解",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "低阶多项式分解",
  "kind": "例题",
  "text": "当不定积分式子形如$\\displaystyle{\\int\\dfrac{f(x)}{g(x)}\\,\\textrm{d}x}$，且$f(x)$、$g(x)$都为与$x$相关的多项式，$f(x)$阶数低于$g(x)$，且$g(x)$可以因式分解为$g(x)=g_1(x)g_2(x)\\cdots$时，先因式分解再进行运算。\n\n有理积分的拆项是最小项的最高次数不超过2。所以具体的分解基本原理：\n\n- 一次单项式$ax+b$产生一项$\\dfrac{A}{ax+b}$。\n\n-$k$重一次因式$(ax+b)^k$产生$k$项：$\\dfrac{A_1}{ax+b}+\\dfrac{A_2}{(ax+b)^2}+\\cdots+\\dfrac{A_n}{(ax+b)^n}$。\n\n- 二次因式$px^2+qx+r$产生一项：$\\dfrac{Ax+B}{px^2+qx+r}$。\n\n-$k$重二次因式$(px^2+qx+r)^k$产生$k$项：$\\dfrac{A_1x+B_1}{px^2+qx+r}+\\cdots+\\dfrac{A_nx+B_n}{(px^2+qx+r)^k}$。\n\n虽然分母可以因式分解，但是整个式子不一定能因式分解，特别是某个因子的阶数高于一阶，所以若不能因式分解则可以考虑低阶多项式分配的方式。\n\n例题：求$\\displaystyle{\\int\\dfrac{x^2+1}{(x+1)^2(x-1)}\\textrm{d}x}$。\n\n解：令$\\dfrac{A}{x+1}+\\dfrac{B}{(x+1)^2}+\\dfrac{C}{x-1}=\\dfrac{x^2+1}{(x+1)^2(x-1)}$。\n\n通分：$=A(x+1)(x-1)+B(x-1)+C(x+1)^2$\n\n$=A(x^2-1)+B(x-1)+C(x^2+2x+1)$\n\n$=(A+C)x^2+(B+2C)x+(C-A-B)=x^2+1$。\n\n从而$A+C=1$，$B+2C=0$，$C-A-B=1$。\n\n所以$A=C=\\dfrac{1}{2}$，$B=-1$，所以$\\dfrac{x^2+1}{(x+1)^2(x-1)}=\\dfrac{1}{2(x+1)}-\\dfrac{1}{(x+1)^2}+\\dfrac{1}{2(x-1)}$。\n\n$\\therefore=\\displaystyle{\\int\\left[\\dfrac{1}{2(x+1)}-\\dfrac{1}{(x+1)^2}+\\dfrac{1}{2(x-1)}\\right]\\textrm{d}x}$\n\n$=\\dfrac{1}{2}\\ln\\vert x-1\\vert+\\dfrac{1}{2}\\ln\\vert x+1\\vert+\\dfrac{1}{x+1}+C=\\dfrac{1}{2}\\ln\\vert x^2-1\\vert+\\dfrac{1}{x+1}+C$。\n\n当然也没必要将所有式子拆开再同类型合并进行相等计算，可以直接将因式的解代入令部分因式等于0来计算，如：\n\n通分：$=A(x+1)(x-1)+B(x-1)+C(x+1)^2=x^2+1$。\n\n代入$x=-1$：$B(-1-1)=-2B=(-1)^2+1$，$\\therefore B=-1$。\n\n代入$x=1$：$C(1+1)^2=1^2+1$，$\\therefore4C=2$，$C=\\dfrac{1}{2}$。\n\n代入$x=0$：$-A-B+C=1$，代入$B=-1$，$C=\\dfrac{1}{2}$，$\\therefore A=\\dfrac{1}{2}$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-4-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#低阶多项式分配",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "低阶多项式分配",
  "kind": "例题",
  "text": "当不定积分式子形如$\\displaystyle{\\int\\dfrac{f(x)}{g(x)}\\,\\textrm{d}x}$，且$f(x)$、$g(x)$都为与$x$相关的多项式，$f(x)$阶数低于$g(x)$，且$g(x)$不能因式分解为$g(x)=g_1(x)g_2(x)\\cdots$时，则可以分配式子：$\\displaystyle{\\int\\dfrac{f(x)}{g(x)}\\,\\textrm{d}x=a_1\\int\\dfrac{\\textrm{d}(f_1(x))}{g_1(x)}+a_2\\int\\dfrac{\\textrm{d}(f_2(x))}{g_2(x)}}+\\cdots$，将积分式子组合成积分结果为分式的函数，如$\\ln x$、$\\arcsin x$、$\\arctan x$等。\n\n例题：求$\\displaystyle{\\int\\dfrac{x-1}{x^2+2x+3}\\textrm{d}x}$。\n\n解：因为$x^2+2x+3$不能因式分解，所以考虑将分子按照分母形式进行分配。优先对高阶的$x$进行分配。\n\n首先因为分子最高阶为$x$只比分母最高阶$x^2$低一阶，所以考虑将$x-1$分配到微分号内。\n\n$\\because\\textrm{d}(x^2+2x+3)=2x+2$，而现在是$x-1$，所以：\n\n$=\\displaystyle{\\dfrac{1}{2}\\int\\dfrac{2x+2}{x^2+2x+3}\\textrm{d}x-2\\int\\dfrac{1}{x^2+2x+3}\\textrm{d}x}=\\displaystyle{\\dfrac{1}{2}\\int\\dfrac{\\textrm{d}(x^2+2x+3)}{x^2+2x+3}}$\n\n$-\\displaystyle{\\int\\dfrac{1}{\\left(\\dfrac{x+1}{\\sqrt{2}}\\right)^2+1}\\textrm{d}x}=\\displaystyle{\\dfrac{1}{2}\\ln(x^2x+3)-\\sqrt{2}\\int\\dfrac{\\textrm{d}\\left(\\dfrac{x+1}{\\sqrt{2}}\\right)}{\\left(\\dfrac{x+1}{\\sqrt{2}}\\right)^2+1}}$\n\n$=\\dfrac{1}{2}\\ln(x^2+2x+3)-\\sqrt{2}\\arctan\\dfrac{x+1}{\\sqrt{2}}+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-4-4",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#低阶多项式因式分解与分配",
  "subject": "gaoshu",
  "topic": "低阶多项式因式分解与分配",
  "title": "低阶多项式因式分解与分配",
  "kind": "例题",
  "text": "有时候一个式子需要同时用到因式分解和分配两种方式。\n\n例题：求$\\displaystyle{\\int\\dfrac{x^5+x^4-8}{x^3-x}\\textrm{d}x}$。\n\n解：$=\\displaystyle{\\int\\dfrac{x^5-x^3+x^4-x^2+x^3-x+x^2+x-8}{x^3-x}\\textrm{d}x}$\n\n$=\\int x^2\\,\\textrm{d}x+\\int x\\,\\textrm{d}x+\\int\\textrm{d}x+\\displaystyle{\\int\\dfrac{x^x+x-8}{x^3-x}\\textrm{d}x}=\\dfrac{x^3}{3}+\\dfrac{x^2}{2}+x+\\displaystyle{\\int\\dfrac{x^2+x-8}{x^3-x}\\textrm{d}x}$\n\n令$\\dfrac{A}{x}+\\dfrac{B}{x+1}+\\dfrac{C}{x-1}=\\dfrac{x^2+x-8}{x^3-x}$。\n\n$\\therefore(A+B+C)x^2+(C-B)x-A=x^2+x-8$。$A=8$，$B=-4$，$C=-3$。\n\n$=\\dfrac{x^3}{3}+\\dfrac{x^2}{2}+x+\\displaystyle{\\int\\dfrac{8}{x}\\textrm{d}x-\\int\\dfrac{4}{x+1}\\textrm{d}x-\\int\\dfrac{3}{x-1}\\textrm{d}x}$\n\n$=\\dfrac{x^3}{3}+\\dfrac{x^2}{2}+x+8\\ln\\vert x\\vert-4\\ln\\vert x+1\\vert-3\\ln\\vert x-1\\vert+C$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-4-5",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#有理积分与其他积分运算",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "有理积分与其他积分运算",
  "kind": "例题",
  "text": "换元积分法可以与有理积分、分部积分共同使用。\n\n例题：求$\\displaystyle{\\int\\dfrac{-x^2-2}{(x^2+x+1)^2}\\textrm{d}x}$。\n\n解：首先根据因式分解：$\\dfrac{-x^2-2}{(x^2+x+1)^2}=\\dfrac{Ax+B}{x^2+x+1}+\\dfrac{Cx+D}{(x^2+x+1)^2}$。\n\n$\\therefore Ax^3+(A+B)x^2+(A+B+C)x+(B+D)=-x^2-2$。\n\n解得：$A=0$，$B=D=-1$，$C=1$。\n\n$=\\displaystyle{\\int\\dfrac{x-1}{(x^2+x+1)^2}\\textrm{d}x-\\int\\dfrac{1}{x^2+x+1}\\textrm{d}x}$\n\n$=\\displaystyle{\\dfrac{1}{2}\\int\\dfrac{\\textrm{d}(x^2+x+1)}{(x^2+x+1)^2}-\\dfrac{3}{2}\\int\\dfrac{1}{(x^2+x+1)^2}\\textrm{d}x-\\int\\dfrac{1}{\\left(x+\\dfrac{1}{2}\\right)^2+\\left(\\dfrac{\\sqrt{3}}{2}\\right)^2}\\textrm{d}x}$\n\n$=-\\dfrac{1}{2(x^2+x+1)}\\displaystyle{-\\dfrac{3}{2}\\int\\dfrac{1}{(x^2+x+1)^2}\\textrm{d}x}-\\dfrac{2}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}$\n\n$\\because x^2+x+1=\\left(x+\\dfrac{1}{2}\\right)^2+\\left(\\dfrac{\\sqrt{3}}{2}\\right)^2$，$\\therefore$令$u=x+\\dfrac{1}{2}$，$a=\\dfrac{\\sqrt{3}}{2}$：\n\n$\\displaystyle{\\int\\dfrac{1}{(x^2+x+1)^2}\\textrm{d}x=\\int\\dfrac{1}{(u^2+a^2)^2}\\textrm{d}u=\\int\\dfrac{1}{\\left(a^2\\left(\\left(\\dfrac{u}{a}\\right)^2+1\\right)\\right)^2}}$，使用第二类换元法（三角换元）：$\\dfrac{u}{a}=\\tan t$，$u=a\\tan t$，$\\textrm{d}u=a\\sec^2t\\,\\textrm{d}t$，$t=\\arctan\\dfrac{u}{a}$。\n\n$\\therefore=\\displaystyle{\\int\\dfrac{a\\sec^2t}{a^4\\sec^4t}\\textrm{d}t=\\dfrac{1}{a^3}\\int\\dfrac{\\textrm{d}t}{sec^2t}}=\\dfrac{1}{a^3}\\int\\cos^2t\\,\\textrm{d}t=\\dfrac{1}{a^3}\\int(1+\\cos2t)\\,\\textrm{d}t$\n\n$=\\dfrac{1}{a^3}\\int\\textrm{d}t+\\dfrac{1}{2a^3}\\int\\cos2t\\,\\textrm{d}(2t)=\\dfrac{t}{a^3}+\\dfrac{\\sin2t}{2a^3}=\\dfrac{\\arctan\\dfrac{u}{a}}{a^3}+\\dfrac{\\sin t\\cos t}{a^3}$。\n\n$\\because\\tan t=\\dfrac{u}{a}$，$\\therefore\\tan^2t=\\dfrac{\\sin^2t}{\\cos^2t}=\\dfrac{1-\\cos^2t}{\\cos2t}=\\dfrac{\\sin^2t}{1-\\sin^2t}=\\dfrac{u^2}{a^2}$\n\n$\\therefore\\sin t=\\dfrac{u}{\\sqrt{a^2+u^2}}$，$\\cos t=\\dfrac{a}{\\sqrt{a^2+u^2}}$，$\\dfrac{\\sin t\\cos t}{a^3}=\\dfrac{u}{a^2(a^2+u^2)}$。\n\n$\\therefore$原式$=-\\dfrac{1}{2(x^2+x+1)}-\\dfrac{2}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}\\displaystyle{-\\dfrac{3}{2}\\int\\dfrac{1}{(x^2+x+1)^2}\\textrm{d}x}$\n\n$=-\\dfrac{1}{2(x^2+x+1)}-\\dfrac{2}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}-\\dfrac{3}{2}\\left(\\dfrac{\\arctan\\dfrac{u}{a}}{a^3}+\\dfrac{u}{a^2(a^2+u^2)}\\right)+C$\n\n$=-\\dfrac{1}{2(x^2+x+1)}-\\dfrac{2}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}$\n\n$-\\dfrac{3}{2}\\left(\\dfrac{\\arctan\\dfrac{x+\\dfrac{1}{2}}{\\dfrac{\\sqrt{3}}{2}}}{\\left(\\dfrac{\\sqrt{3}}{2}\\right)^3}+\\dfrac{x+\\dfrac{1}{2}}{\\left(\\dfrac{\\sqrt{3}}{2}\\right)^2\\left(\\left(\\dfrac{\\sqrt{3}}{2}\\right)^2+\\left(x+\\dfrac{1}{2}\\right)^2\\right)}\\right)+C$\n\n$=-\\dfrac{1}{2(x^2+x+1)}-\\dfrac{2}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}$\n\n$-\\dfrac{3}{2}\\left(\\dfrac{\\arctan\\dfrac{2x+1}{\\sqrt{3}}}{\\dfrac{3\\sqrt{3}}{8}}+\\dfrac{x+\\dfrac{1}{2}}{\\dfrac{3}{4}\\left(x^2+x+1\\right)}\\right)+C$\n\n$=-\\dfrac{1}{2(x^2+x+1)}-\\dfrac{2}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}-\\dfrac{4}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}-\\dfrac{2x+1}{x^2+x+1}+C$\n\n$=-\\dfrac{4x+3}{2(x^2+x+1)}-\\dfrac{6}{\\sqrt{3}}\\arctan\\dfrac{2x+1}{\\sqrt{3}}+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s2-5",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#不定积分等式",
  "subject": "gaoshu",
  "topic": "积分等式与积分不等式",
  "title": "不定积分等式",
  "kind": "例题",
  "text": "积分求导就得到微分，题目会给出微分和积分之间的关系式，以求相关的函数表达式。\n\n例题：已知$\\int f'(x^3)\\,\\textrm{d}x=x^3+C$，求$f(x)$表达式。\n\n解：两边求导：$f'(x^3)=3x^2$，令$x^3=t$，则$x=t^\\frac{1}{3}$，即$f'(t)=3t^\\frac{2}{3}$。\n\n所以$f(x)=\\dfrac{9}{5}x^\\frac{5}{3}+C$。",
  "relatedLessons": [
   "gs11"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-0",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#定积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "定积分",
  "kind": "定理",
  "text": "定积分计算以牛莱公式为基础。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#换元积分",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "换元积分",
  "kind": "例题",
  "text": "换元积分法基本上跟不定积分一样。\n\n例题：求$\\displaystyle{\\int_0^2\\dfrac{x\\,\\textrm{d}x}{(x^2-2x+2)^2}}$。\n\n解：从题目来看都需要使用换元积分法，因为分母比较复杂。一种思路直接令$x^2-2x+2=u$，但是这样$\\textrm{d}x$就解不出来。所以尝试将分母配方：$x^2-2x+2=(x-1)^2+1$，看到$x^2+1$的形式就想到了$\\tan^2u+1=\\sec^2u$，所以令$x-1=\\tan u$，即$x=\\tan u+1$，$\\textrm{d}x=\\sec^2u\\,\\textrm{d}u$，$(x^2-2x+2)^2=\\sec^4u$。当$x=0$，$u=-\\dfrac{\\pi}{4}$，当$x=2$，$u=\\dfrac{\\pi}{4}$。解得$=\\displaystyle{\\int_{-\\frac{\\pi}{4}}^\\frac{\\pi}{4}\\dfrac{(1+\\tan u)\\textrm{d}u}{\\sec^2u}}$\n\n$=\\int_{-\\frac{\\pi}{4}}^\\frac{\\pi}{4}\\cos^2u\\,\\textrm{d}u+\\int_{-\\frac{\\pi}{4}}^\\frac{\\pi}{4}\\cos^2u\\tan u\\,\\textrm{d}u=\\int_{-\\frac{\\pi}{4}}^\\frac{\\pi}{4}\\cos^2u\\,\\textrm{d}u+\\int_{-\\frac{\\pi}{4}}^\\frac{\\pi}{4}\\sin u\\cos u\\,\\textrm{d}u=\\int_{-\\frac{\\pi}{4}}^\\frac{\\pi}{4}\\cos^2u\\,\\textrm{d}u=2\\int_0^\\frac{\\pi}{4}\\cos^2u\\,\\textrm{d}u=2\\int_0^\\frac{\\pi}{4}(1+\\cos2u)\\,\\textrm{d}u=\\dfrac{\\pi}{4}+\\dfrac{1}{2}$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#分部积分",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "分部积分",
  "kind": "例题",
  "text": "可以使用普通的分部积分方式，也可以使用分部积分推广公式。\n\n例题：求$\\int_0^\\frac{\\pi}{2}e^{2x}\\cos x\\,\\textrm{d}x$。\n\n解：令$e^{2x}=u$，$\\cos x=v$，$\\therefore$根据积分推广公式：\n\n$e^{2x}$ ｜$2e^{2x}$ ｜$4e^{2x}$\n$\\cos x$ ｜$\\sin x$ ｜$-\\cos x$\n\n$\\therefore\\int_0^\\frac{\\pi}{2}e^{2x}\\cos x\\,\\textrm{d}x=[e^{2x}\\sin x+2e^{2x}\\cos x]_0^\\frac{\\pi}{2}-4\\int_0^\\frac{\\pi}{2}e^{2x}\\cos x\\,\\textrm{d}x$。\n\n$\\int_0^\\frac{\\pi}{2}e^{2x}\\cos x\\,\\textrm{d}x=\\dfrac{1}{5}[e^{2x}(\\sin x+2\\cos x)]_0^\\frac{\\pi}{2}=\\dfrac{1}{5}(e^\\pi-2)$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#几何意义",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "几何意义",
  "kind": "例题",
  "text": "定积分与不定积分不同的就是定积分具有几何意义，可以在计算时简化操作。\n\n例题：计算$\\int_0^1\\sqrt{2x-x^2}\\,\\textrm{d}x$。\n\n解：首先看到这个题目可能会使用换元积分法，但是尝试$t=\\sqrt{2x-x^2}$，则$x$无法用$t$表示。\n\n对$\\sqrt{2x-x^2}$进行变形，$=\\sqrt{1-(x-1)^2}$，令$x-1=t$，则$=\\int_0^1\\sqrt{1-t^2}\\,\\textrm{d}t$，根据定积分的几何意义，这是一个单位圆的四分之一，所以结果等于$\\dfrac{1}{4}\\pi$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-4",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#极限化为定积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "极限化为定积分",
  "kind": "例题",
  "text": "若极限中有$n$这种变量，也可以通过定积分的定义来做，$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^nf\\left(\\dfrac{i}{n}\\right)\\dfrac{1}{n}=\\int_1^0f(x)\\,\\textrm{d}x$。\n\n- 先提出$\\dfrac{1}{n}$。\n\n- 凑出$\\dfrac{i}{n}$。\n\n- 写出$\\int_0^1f(x)\\,\\textrm{d}x$，其中$\\dfrac{1}{n}$没有了，将所有$\\dfrac{i}{n}$换为$x$。\n\n- 将$n$消去，如将$n$极限归为1。\n\n例题：求$\\lim\\limits_{n\\to\\infty}\\left(\\dfrac{1}{n+1}+\\dfrac{1}{n+2}\\cdots+\\dfrac{1}{n+n}\\right)$。\n\n解：即求$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+i}$。如果我们要传统求的话一般使用夹逼准则，找到放缩的两个函数。\n\n所以找到两个：$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+n}<\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+i}<\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+1}$。\n\n即$\\dfrac{1}{2}<\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+i}<\\lim\\limits_{n\\to\\infty}\\dfrac{n}{n+1}=1$。夹逼准则失败。\n\n所以对$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+i}$通过定积分定义进行计算。\n\n$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+i}=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1}{n+\\dfrac{i}{n}}\\dfrac{1}{n}=\\displaystyle{\\int_0^1\\dfrac{1}{1+x}\\,\\textrm{d}x}=[\\ln(1+x)]_0^1=\\ln2$。\n\n例题：求$\\lim\\limits_{n\\to\\infty}\\left(\\dfrac{n+1}{n^2+1}+\\dfrac{n+2}{n^2+4}+\\cdots+\\dfrac{n+n}{n^2+n^2}\\right)$。\n\n解：即求$\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{n+i}{n^2+i^2}=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{n^2+ni}{n^2+i^2}\\cdot\\dfrac{1}{n}=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\dfrac{1+\\dfrac{i}{n}}{1+\\left(\\dfrac{i}{n}\\right)^2}\\cdot\\dfrac{1}{n}$\n\n$=\\displaystyle{\\int_0^1\\dfrac{1+x}{1+x^2}\\textrm{d}x}=\\displaystyle{\\int_0^1\\dfrac{1}{1+x^2}\\textrm{d}x+\\int_0^1\\dfrac{x}{1+x^2}\\textrm{d}x}$\n\n$=\\left[\\arctan x+\\dfrac{1}{2}\\ln(1+x^2)\\right]_0^1=\\dfrac{\\pi}{4}+\\dfrac{1}{2}\\ln2$。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-5",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#区间再现",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "区间再现",
  "kind": "例题",
  "text": "若函数$f(x)$为连续函数，则$\\int_a^bf(x)\\,\\textrm{d}x=\\int_a^bf(a+b-x)\\,\\textrm{d}x$。区间再现本质是一种换元法，但是实际上是显式地根据函数周期移动$x$的范围，求出另一种形式，再结合一起解出。这种方法类似多次分部积分求出两边同一个形式的不定积分然后相减的方法。\n\n基本上三角函数相关的式子可以用区间再现。如果直接求不出来就可以考虑区间再现。一般积分区间为$[0,a]$，令$x=a-t$。\n\n例题：求$\\displaystyle{\\int_0^\\frac{\\pi}{2}\\dfrac{\\sin x}{\\sin x+\\cos x}\\textrm{d}x}$。\n\n解：$=\\displaystyle{\\int_0^\\frac{\\pi}{2}\\dfrac{\\sin(\\dfrac{\\pi}{2}-x)}{\\sin(\\dfrac{\\pi}{2}-x)+\\cos(\\dfrac{\\pi}{2}-x)}\\textrm{d}x=\\int_0^\\frac{\\pi}{2}\\dfrac{\\cos x}{\\cos x+\\sin x}\\textrm{d}x}$\n\n又$\\displaystyle{\\int_0^\\frac{\\pi}{2}\\dfrac{\\sin x}{\\sin x+\\cos x}\\textrm{d}x+\\int_0^\\frac{\\pi}{2}\\dfrac{\\cos x}{\\cos x+\\sin x}\\textrm{d}x}$$=\\int_0^\\frac{\\pi}{2}\\textrm{d}x=\\dfrac{\\pi}{2}$。\n\n$\\therefore\\displaystyle{\\int_0^\\frac{\\pi}{2}\\dfrac{\\sin x}{\\cos x+\\sin x}\\textrm{d}x}=\\dfrac{\\pi}{4}$。\n\n例题：求$\\displaystyle{\\int_0^\\pi}\\dfrac{x\\sin x}{1+\\cos^2x}\\textrm{d}x$。\n\n解：首先看题目，貌似分部积分无法进行，因为式子结构不是两个部分，换元法一般的也换不了，\n\n根据区间再现公式，令$x=\\pi-t$，则$=-\\displaystyle{\\int_\\pi^0\\dfrac{(\\pi-t)\\sin(\\pi-t)}{1+\\cos^2(\\pi-t)}\\textrm{d}t}=$\n$\\displaystyle{\\int_0^\\pi\\dfrac{(\\pi-t)\\sin t}{1+\\cos^2t}\\textrm{d}t}=\\pi\\displaystyle{\\int_0^\\pi\\dfrac{\\sin t}{1+\\cos^2t}\\textrm{t}-I}$。\n\n$\\therefore=\\dfrac{1}{2}\\pi\\displaystyle{\\int_0^\\pi\\dfrac{\\sin t}{1+\\cos^2t}\\textrm{d}t}=-\\dfrac{1}{2}\\pi\\int_0^\\pi\\dfrac{\\textrm{d}\\cos t}{1+\\cos^2t}=-\\dfrac{1}{2}\\pi\\arctan\\cos t\\bigg|_0^\\pi=\\dfrac{1}{4}\\pi^2$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-6",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#定限积分等式",
  "subject": "gaoshu",
  "topic": "积分等式与积分不等式",
  "title": "定限积分等式",
  "kind": "例题",
  "text": "与不定积分等式一样，存在一些问题给出带有不定积分的等式，需要求里面的包含的函数。其中不同的是定限积分的值都是常数，所以解题时可以令其为一个参数求。\n\n#### 函数\n\n求函数时表达式中含有积分式子，这时可以令其为常数项，然后反代计算定积分。\n\n例题：设$f(x)=x^2-x\\int_0^2f(x)\\,\\textrm{d}x+2\\int_0^1f(x)\\,\\textrm{d}x$，求$f(x)$。\n\n解：令$\\int_0^2f(x)\\,\\textrm{d}x=a$，$\\int_0^1f(x)\\,\\textrm{d}x=b$。\n\n则等式变为$f(x)=x^2-ax+2b$，所以等式就可以回代到两个参数的定积分中。\n\n$\\int_0^2(x^2-ax+2b)\\,\\textrm{d}x=a$，$\\int_0^1(x^2-ax+2b)\\,\\textrm{d}x=b$。\n\n$\\left[\\dfrac{x^3}{3}-\\dfrac{ax^2}{2}+2bx\\right]_0^2=\\dfrac{8}{3}-2a+4b=a$，$\\left[\\dfrac{x^3}{3}-\\dfrac{ax^2}{2}+2bx\\right]_0^1=\\dfrac{1}{3}-\\dfrac{a}{2}+2b=b$。\n\n即$b-\\dfrac{1}{2}a=-\\dfrac{1}{3}$，$4b-3a==\\dfrac{8}{3}$，解得$a=\\dfrac{4}{3}$，$b=\\dfrac{1}{3}$。\n\n则$f(x)=x^2-\\dfrac{4}{3}x+\\dfrac{2}{3}$。\n\n#### 积分值\n\n基本上是给出一个一个已知表达式的积分并给出积分值，然后求另一个表达式的积分值。可以令这个积分表达式为$t$代入原积分表达式，也可以将积分式子初等运算。\n\n例题：$f(x)$为连续函数，$\\int_0^\\frac{\\pi}{2}f(x\\cos x)\\cos x\\,\\textrm{d}x=A$，求$\\int_0^\\frac{\\pi}{2}f(x\\cos x)x\\sin x\\,\\textrm{d}x$。\n\n解：$\\int_0^\\frac{\\pi}{2}f(x\\cos x)\\cos x\\,\\textrm{d}x-\\int_0^\\frac{\\pi}{2}f(x\\cos x)x\\sin x\\,\\textrm{d}x=\\int_0^\\frac{\\pi}{2}f(x\\cos x)(\\cos x\\,\\textrm{d}x+x\\,\\textrm{d}\\cos x)=\\int_0^\\frac{\\pi}{2}f(x\\cos x)\\textrm{d}(x\\cos x)=F(x\\cos x)\\vert_0^\\frac{\\pi}{2}=F(0)-F(0)=0$。\n\n$\\therefore\\int_0^\\frac{\\pi}{2}f(x\\cos x)\\cos x\\,\\textrm{d}x=\\int_0^\\frac{\\pi}{2}f(x\\cos x)x\\sin x\\,\\textrm{d}x=A$。",
  "relatedLessons": [
   "gs11"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-7",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#定积分不等式",
  "subject": "gaoshu",
  "topic": "积分等式与积分不等式",
  "title": "定积分不等式",
  "kind": "例题",
  "text": "主要是为了对定积分值进行对比。注意这里不用求出定积分的值，很多不等式中的定积分很难求出。主要是利用保号性根据原函数的符号判断积分的符号。\n\n对于判断$\\int f(x)\\,\\textrm{d}<a$，一般都是直接移动常数项$\\int f(x)-a\\,\\textrm{d}x$，然后对整体进行判断。\n\n#### 函数性质\n\n即对函数求导判断单调性。\n\n例题：判断$\\displaystyle{\\int_0^\\frac{\\pi}{4}\\dfrac{\\tan x}{x}\\textrm{d}x<1}$。\n\n解：将常数项变为定积分：$=\\displaystyle{\\int_0^\\frac{\\pi}{4}\\left(\\dfrac{\\tan x}{x}-\\dfrac{4}{\\pi}\\right)\\textrm{d}x}$。\n\n令$\\varphi(x)=\\dfrac{\\tan x}{x}-\\dfrac{4}{\\pi}$，其中$x\\in\\left(0,\\dfrac{\\pi}{4}\\right)$，且$\\varphi\\left(\\dfrac{\\pi}{4}\\right)=0$。\n\n求导$\\varphi'(x)=\\dfrac{x\\sec^2x-\\tan x}{x^2}=\\dfrac{x-\\sin x\\cos x}{x^2\\cos^2x}=\\dfrac{2x-\\sin 2x}{2x^2\\cos^2x}>0$。（$x\\in\\left(0,\\dfrac{\\pi}{4}\\right)$）\n\n所以原函数在$\\left(0,\\dfrac{pi}{4}\\right)$上增，$\\varphi\\left(\\dfrac{\\pi}{4}\\right)$最大，其小于0，则在该区间$\\varphi(x)<0$，所以其定积分也小于0。\n\n#### 划分区域\n\n如果要比较积分大小，要么在同一个区间内比较，如果这个区间内两个积分有时大有时小就划分区域，让区域上的积分能明确大小。",
  "relatedLessons": [
   "gs11"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s3-8",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "中值定理",
  "kind": "定理",
  "text": "中值定理一般是在微分中使用，积分中也可能考到，但是重点是将定限积分化为两个常数的差的形式，所以基本上使用拉格朗日中值定理。\n\n或者使用积分中值定理：\n\n若$f(x)$在$[a,b]$上连续，则存在$\\xi\\in[a,b]$，使得$\\int_a^bf(x)\\,\\textrm{d}x=f(\\xi)(b-a)$。\n\n若$f(x)$、$g(x)$在$[a,b]$上连续，$g(x)$不变号，则存在$\\xi\\in[a,b]$，使得$\\int_a^bf(x)g(x)\\,\\\\\\textrm{d}x=f(\\xi)\\int_a^bg(x)\\,\\textrm{d}x$。\n\n例题：设函数$f(x)$在$[0,3]$上连续，在$(0,3)$内有二阶导数，且$2f(0)=\\int_0^2f(x)\\,\\textrm{d}x=f(2)+f(3)$。\n\n证明：（1）存在$\\eta\\in(0,2)$，使得$f(\\eta)=f(0)$；（2）存在$\\xi\\in(0,3)$，使得$f''(\\xi)=0$。\n\n证明：\n\n（1）中值定理基本上是对普通函数的差式进行运算，所以令$F(x)=f_0^xf(t)\\,\\textrm{d}t$（$0\\leqslant x\\leqslant2$），所以$\\int_0^2f(x)\\,\\textrm{d}x=F(2)-F(0)$。\n\n由拉格朗日中值定理，存在$\\eta\\in(0,2)$，使得$F(2)-F(0)=F'(\\eta)(2-0)=2f(\\eta)$，即$\\int_0^2f(x)\\,\\textrm{d}x=2f(\\eta)$。\n\n题目条件可知$f(\\eta)=f(0)$。\n\n（2）还剩下等式右边的条件没有使用，且数字为2和3。如何使用？\n\n由函数导数$f''(\\xi)$为0很显然知道要使用罗尔定理，但是这是二阶导数，就要求得到$f'(0)=f'(3)$两端相等的条件。\n\n请注意这里是存在$\\xi\\in(0,3)$使得条件成立，则相等的两端不一定就等于0和3，在区间范围$(0,3)$内都成立。\n\n往往第二问的条件基于第一问的结论，看到第一问，出现了两端相等且区域$\\eta$为$(0,3)$子区间，两端相等所以得到这里有一个值的$f'(?)=0$。\n\n此时我们必须找到另一个$f'(?)=0$也成立，此时就能看到最开始剩下的条件$f(2)+f(3)=2f(0)$，这个区域正好是$(0,2)$与$(0,3)$的差集。\n\n我们需要根据这个条件知道存在一个点让$f'(?)=0$成立。即根据罗尔定理，让存在一个点使得$f(?)=f(0)$。根据右边的条件可以使用介值定理。\n\n按这个思路倒退得到证明过程。\n\n由于$f(x)$在$[0,3]$上连续则$[2,3]$上连续，则其必然存在最大值$M$和最小值$m$，使得$m\\leqslant f(2)\\leqslant M$，$m\\leqslant f(3)\\leqslant M$，所以$m\\leqslant\\dfrac{f(2)+f(3)}{2}\\leqslant M$。\n\n由介值定理可知存在$\\tau\\in[2,3]$，使得$f(\\tau)=\\dfrac{f(2)+f(3)}{2}=f(0)$。所以此时找到这个点。\n\n由（1）$f(0)=f(\\eta)=f(\\tau)$，其中$0<\\eta<2\\leqslant\\tau\\leqslant3$。\n\n根据罗尔定理，必然存在$\\xi_1\\in(0,\\eta)$，$\\xi_2\\in(\\eta,\\tau)$，使得$f'(\\xi_1)=f'(\\xi_2)=0$，再根据罗尔定理存在$\\xi\\in(\\epsilon_1,\\epsilon_2)\\subset(0,3)$使得$f''(\\xi)=0$。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s4-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#求导公式",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "求导公式",
  "kind": "定理",
  "text": "对定限积分求导公式：$(\\int_a^xf(t)\\,\\textrm{d}t)'=f(x)$。\n\n例题：求$\\dfrac{\\textrm{d}}{\\textrm{d}x}[\\int_0^xtf(x^2-t^2)\\,\\textrm{d}t]$。\n\n解：按照公式，$f(t)$里面应该只有积分变量$t$，但是此时存在求导变量$x$，所以必须将$x$移出积分函数中。\n\n使用换元法令$x^2-t^2=u$，即$-2t\\textrm{d}t=\\textrm{d}u$，当$t=0$，$u=x^2$，当$t=x$，$u=0$。\n\n所以原式$=\\dfrac{1}{2}\\dfrac{\\textrm{d}}{\\textrm{d}x}[\\int_0^{x^2}f(u)\\,\\textrm{d}u]=xf(x^2)$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s4-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#积分性质",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "积分性质",
  "kind": "定理",
  "text": "可以使用积分性质来对积分进行简化，如奇偶性（奇函数积分为0，偶函数积分为双倍；原函数为偶函数，积分$C=0$时为奇函数，原函数为奇函数，积分为偶函数）、周期性（区间减去周期积分值不变）。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s4-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#周期性",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "周期性",
  "kind": "例题",
  "text": "当积分为变限积分时，若函数为周期函数，区间长度为周期，可以直接把区间的变量$x$减掉，变成定积分。\n\n例题：求$f(x)=\\int_x^{x+2\\pi}e^{\\sin t}\\sin t\\,\\textrm{d}t$是否为常量，并判断其正负性。\n\n解：由于$\\sin x$为周期函数，$e^x$为单调函数，所以$f(x)$为周期函数，周期为$\\sin x$的周期$2\\pi$。\n\n$\\therefore f(x)=\\int_0^{2\\pi}e^{\\sin t}\\sin t\\,\\textrm{d}t=\\int_0^{2\\pi}e^{\\sin t}\\cos^2t\\,\\textrm{d}t\\geqslant0$。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s4-4",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#极限",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限",
  "kind": "例题",
  "text": "变限积分也常与极限共同出现。\n\n例题：若$f(x)$连续，$f(0)=0$，$f'(0)=\\pi$，求$\\lim\\limits_{x\\to0}\\dfrac{\\int_0^xf(t)\\,\\textrm{d}t}{x^2}$。\n\n解：$=\\lim\\limits_{x\\to0}\\dfrac{f(x)}{2x}=\\dfrac{1}{2}\\lim\\limits_{x\\to0}\\dfrac{f(x)-f(0)}{x-0}=\\dfrac{1}{2}f'(0)=\\dfrac{\\pi}{2}$。\n\n例题：若$f(x)$连续，$F(x)=\\int_0^x(x-t)f(t)\\,\\textrm{d}t$，求$F''(x)$。\n\n解：因为$x$与$t$混合在一起很麻烦，$x$为上限是常数，$t$为积分变量。\n\n$F(x)=\\int_0^xxf(t)\\,\\textrm{d}t-\\int_0^xtf(t)\\,\\textrm{d}t=x\\int_0^xf(t)\\,\\textrm{d}t-\\int_0^xtf(t)\\,\\textrm{d}t$\n\n$\\therefore F'(x)=\\int_0^xf(t)\\,\\textrm{d}t+xf(x)-xf(x)=\\int_0^xf(t)\\,\\textrm{d}t$。\n\n$\\therefore F''(x)=f(x)$。\n\n例题：设$f(x)$是定义于$x\\geqslant1$的正值连续函数，则求其相关函数$F(x)=\\displaystyle{\\int_1^x\\left[\\left(\\dfrac{2}{x}+\\ln x\\right)-\\left(\\dfrac{2}{t}+\\ln t\\right)\\right]f(t)\\,\\textrm{d}t}$（$x\\geqslant1$）的极小值点。\n\n解：按照一般函数一样求极值就是求导，注意的是$t$和$x$含义不同，若对$t$求导，则$x$作为积分上限是看作常数的，所以可以提出去：\n\n$F(x)=\\left(\\dfrac{2}{x}+\\ln x\\right)\\displaystyle{\\int_1^xf(t)\\,\\textrm{d}t-\\int_1^x\\left(\\dfrac{2}{t}+\\ln t\\right)f(t)\\,\\textrm{d}t}$。\n\n$x$求导：$F'(x)=\\left(-\\dfrac{2}{x^2}+\\dfrac{1}{x}\\right)\\int_1^xf(t)\\,\\textrm{d}t+\\left(\\dfrac{2}{x}+\\ln x\\right)f(x)-\\left(\\dfrac{2}{x}+\\ln x\\right)f(x)$\n\n$\\because f(x)$为连续正值函数，$\\therefore=\\dfrac{x-2}{x^2}\\int_1^xf(t)\\,\\textrm{d}t=\\left\\{\\begin{array}{lcl}\n    < 0, & & 1<x<2 \\\\\n    =0, & & x=2 \\\\\n    >0, & & x>2\n\\end{array}\\right.$。\n\n所以极小值为$2$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s4-5",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#连续",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "连续",
  "kind": "例题",
  "text": "例题：设$f(x)=\\left\\{\\begin{array}{ll}\n    x^2, & x\\in[0,1) \\\\\n    x, & x\\in[1,2]\n\\end{array}\\right.$，求$\\varPhi(x)=\\int_0^xf(t)\\,\\textrm{d}t$在$[0,2]$上的表达式，并讨论$\\varPhi(x)$在$(0,2)$内的连续性。\n\n解：当$x\\in[0,1)$时，$\\varPhi(x)=\\int_0^xt^2\\,\\textrm{d}t=\\dfrac{x^3}{3}$，注意的是$x\\in[1,2]$时，$\\varPhi(x)=\\int_0^1f(t)\\,\\textrm{d}t+\\int_1^xf(t)\\,\\textrm{d}t=\\int_0^1t^2\\,\\textrm{d}t+\\int_1^xt\\,\\textrm{d}t=\\left[\\dfrac{t^3}{3}\\right]_0^1+\\left[\\dfrac{t^2}{2}\\right]_1^x=\\dfrac{x^2}{2}+\\dfrac{1}{3}-\\dfrac{1}{2}=\\dfrac{x^2}{2}-\\dfrac{1}{6}$。\n\n$\\therefore\\varPhi(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{x^3}{3}, & x\\in[0,1)  \\\\\n    \\dfrac{x^2}{2}-\\dfrac{1}{6}, & x\\in[1,2]\n\\end{array}\\right.$。\n\n由于$x\\to1^-$时，$\\lim\\limits_{x\\to1^-}\\varPhi(x)=\\lim\\limits_{x\\to1^-}\\dfrac{x^3}{3}=\\dfrac{1}{3}$。$x=1$时，$\\varPhi(1)=\\dfrac{1}{2}-\\dfrac{1}{6}=\\dfrac{1}{3}$，所以$\\varPhi(x)$在$x=1$处连续，而在其他定义域都是函数，所以也连续，从而$\\varPhi(x)$在$(0,2)$上连续。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s4-6",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#无穷小比较",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "无穷小比较",
  "kind": "例题",
  "text": "当对变限积分进行无穷小进行比较时有这样的结论：\n\n定理：若$f(x)$在$x=0$的某邻域内连续，且$x\\to0$时，$f(x)$是$x$的$m$阶无穷小，$\\varphi(x)$是$x$的$n$阶无穷小，则当$x\\to0$时$F(x)=\\int_0^{\\varphi(x)}f(t)\\,\\textrm{d}t$是$x$的$n(m+1)$阶无穷小。\n\n例题：当$x\\to0^+$时，哪个无穷小量阶数最高()。\n\n$A.\\int_0^x(e^{t^2}-1)\\,\\textrm{d}t$\n\n$B.\\int_0^x\\ln(1+\\sqrt{t^3})\\,\\textrm{d}t$\n\n$C.\\int_0^{\\sin x}\\sin t^2\\,\\textrm{d}t$\n\n$D.\\int_0^{1-\\cos x}\\sqrt{\\sin^3t}\\,\\textrm{d}t$\n\n解：根据结论，$A$阶数为$1(2+1)=3$，$B$阶数为$1\\times\\left(1+\\dfrac{3}{2}\\right)=\\dfrac{5}{2}$，$C$的阶数为$1(2+1)=3$，$D$的上限为$1-\\cos x\\sim\\dfrac{x^2}{2}$，阶数为$2\\times\\left(1+\\dfrac{3}{2}\\right)=5$。所以$D$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s5-0",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#反常积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "反常积分",
  "kind": "方法",
  "text": "- 反常积分就是取极限，基本计算方法一样。反常积分的计算就是判敛，如果存在就计算其值。\n\n- 瑕积分的瑕点可能在积分区间内，此时需要根据瑕点分隔积分区间。\n\n- 反常积分只有收敛才能使用奇偶性。\n\n处理方法：\n\n- 判断$f(x)$有几个可能反常的点。包括$\\infty$和无穷间断点。每次研究一个点。\n\n- 由于使用等价无穷小替换，或乘以非零常数都不影响敛散性，所以使用这两种方法对$f(x)$化简。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s5-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#定义法",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "定义法",
  "kind": "概念",
  "text": "即可以根据不定积分求出原函数，再对原函数求极限。\n\n这种方法是定量的方法，所以比较麻烦，而下面的审敛法是定性的方法，所以更简单。\n\n如果判断敛散性则优先审敛法。如果是直接求值则用定义法。\n\n#### 求值\n\n例题：求$\\displaystyle{\\int_0^{+\\infty}\\dfrac{\\textrm{d}x}{(1+x)(1+x^2)}}$。\n\n解：这是无穷区间的反常积分，看到一个$1+x^2$因式，所以尝试使用换元积分法，令$x=\\tan u$，$1+x^2=\\sec^2u$，$\\textrm{d}x=\\sec^2u\\,\\textrm{d}u$。\n\n当$x=0$，$\\tan u=0$，$u=0$，当$x=+\\infty$，$u=+\\dfrac{\\pi}{2}$。\n\n$\\therefore=\\displaystyle{\\int_0^\\frac{\\pi}{2}\\dfrac{1}{1+\\tan u}\\textrm{d}u=\\int_0^\\frac{\\pi}{2}\\dfrac{\\cos u}{\\cos u+\\sin u}\\textrm{d}u=\\dfrac{\\pi}{4}}$。\n\n根据区间再现公式，$\\displaystyle{\\int_0^\\frac{\\pi}{2}\\dfrac{\\sin u}{\\cos u+\\sin u}\\textrm{d}u=\\int_0^\\frac{\\pi}{2}\\dfrac{\\cos u}{\\cos u+\\sin u}\\textrm{d}u=\\dfrac{\\pi}{4}}$。\n\n例题：求$\\displaystyle{\\int_0^{+\\infty}\\dfrac{xe^{-x}}{(1+e^{-x})^2}\\textrm{d}x}$。\n\n解：看到本题中没有可以换元的元素，尝试使用分部积分将分母移到积分变量中。\n\n$=\\displaystyle{\\int_0^{+\\infty}x\\textrm{d}\\left(\\dfrac{1}{1+e^{-x}}\\right)}=\\left[\\dfrac{x}{1+e^{-x}}\\right]_0^{+\\infty}-\\int_0^{+\\infty}\\dfrac{\\textrm{d}x}{1+e^{-x}}=\\lim\\limits_{x\\to+\\infty}\\dfrac{x}{1+e^{-x}}-\\int_0^{+\\infty}\\dfrac{\\textrm{d}e^x}{1+e^x}=\\lim\\limits_{x\\to+\\infty}\\left[\\dfrac{x}{1+e^{-x}}-\\ln(1+e^x)\\right]+\\ln2=\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{1+e^{-x}}[x-\\ln(1+e^x)(1+e^{-x})]+\\ln2=\\lim\\limits_{x\\to+\\infty}[x-\\ln(1+e^x)(1+e^{-x})]+\\ln2=\\lim\\limits_{x\\to+\\infty}[\\ln e^x-\\ln(1+e^x)(1+e^{-x})]+\\ln2=\\lim\\limits_{x\\to+\\infty}\\left[\\ln e^x-(1+e^x)\\dfrac{\\ln(1+e^x)}{e^x}\\right]+\\ln2=\\lim\\limits_{x\\to+\\infty}\\\\\\left[\\ln\\dfrac{e^x}{1+e^x}-\\dfrac{\\ln(1+e^x)}{e^x}\\right]+\\ln2=\\ln1-0+\\ln2=\\ln2$。\n\n#### 求参数\n\n题目会给出一个含参的式子，并给出对应的极限值，要求对应的参数值。首先必须知道对应的式子什么时候才会收敛。\n\n例题：已知$\\displaystyle{\\int_1^{+\\infty}\\left[\\dfrac{2x^2+bx+a}{x(2x+a)}-1\\right]}$，求参数。\n\n解：首先将式子化简$=\\displaystyle{\\int_1^{+\\infty}\\dfrac{(b-a)x+a}{x(2x+a)}\\textrm{d}x=\\int_1^{+\\infty}\\dfrac{b-a}{2x+a}+\\dfrac{a}{x(2x+a)}\\textrm{d}x}$。\n\n此时可以知道后面的$\\dfrac{a}{x(2x)+a}\\to\\dfrac{1}{2x^2}\\to x^{-2}$，积分结果为$\\dfrac{1}{x}$，所以这个部分的反常积分在$x\\to+\\infty$是收敛的。\n\n而前面的部分$\\dfrac{b-a}{2x+a}\\to\\dfrac{1}{x}$，积分结果为$\\ln x$，当$x\\to+\\infty$时不收敛，所以就需要把这个部分消掉，即$b-a=0$，$b=a$。\n\n所以结果变为$\\displaystyle{\\int_1^{+\\infty}\\dfrac{a}{x(2x+a)}\\textrm{d}x=\\int_1^{+\\infty}\\left[\\dfrac{1}{x}-\\dfrac{2}{2x+a}\\right]\\textrm{d}x}=\\ln\\dfrac{x}{2x+a}\\bigg\\vert_1^{+\\infty}$\n$=\\ln\\dfrac{1}{2}-\\ln\\dfrac{1}{2+a}=\\ln(2+a)-\\ln2=\\ln\\left(1+\\dfrac{a}{2}\\right)=1$，$\\therefore a=b=2(e-1)$。\n\n可能会奇怪，为什么最开始不把式子化成最简单的式子：\n\n$=\\displaystyle{\\int_1^{+\\infty}\\dfrac{b-a}{2x+a}+\\dfrac{1}{x}-\\dfrac{2}{2x+a}\\textrm{d}x=\\int_1^{+\\infty}\\dfrac{b-a-2}{2x+a}+\\dfrac{1}{x}\\textrm{d}x}$。此时前后两个式子都是发散的，所以不能求出收敛的参数。\n\n#### 递推公式\n\n例题：利用递推公式计算反常积分$I_n=\\int_0^{+\\infty}x^ne^{-x}\\,\\textrm{d}x$（$n\\in N$）。\n\n解：看到这个公式，虽然不知道如何利用递推公式得到这个反常积分的值，但是看到这个式子是由两个部分的乘积构成，所以尝试使用分部积分来计算看看：\n\n$I_n=-\\int_0^{+\\infty}x^n\\,\\textrm{d}(e^{-x})=[-x^ne^{-x}]_0^{+\\infty}+\\int_0^{+\\infty}nx^{n-1}e^{-x}\\,\\textrm{d}x=-\\lim\\limits_{x\\to+\\infty}x^ne^{-x}+n\\int_0^{+\\infty}x^{n-1}e^{-x}\\,\\textrm{d}x=n\\int_0^{+\\infty}x^{n-1}e^{-x}\\,\\textrm{d}x=nI_{n-1}$。\n\n且$I_0=\\int_0^{+\\infty}e^{-x}\\,\\textrm{d}x=[-e^{-x}]_0^{+\\infty}=1$。\n\n$\\therefore I_n=n!$。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s5-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#比较判敛",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "比较判敛",
  "kind": "方法",
  "text": "可以直接通过计算反常积分判断收敛或发散。但是只有少数反常积分能直接计算出来。比较判敛就是不计算反常积分的原函数，而是通过与其他已知敛散性的积分进行对比来判断积分的敛散性。\n\n#### 无穷区间\n\n#### 无界函数",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s5-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#极限审敛法",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限审敛法",
  "kind": "方法",
  "text": "不用计算积分值，直接通过函数的极限来代替积分。\n\n#### 判断方法\n\n- 等价无穷小：对于无穷小，高阶吸收低阶。\n\n- 对于每个瑕点或无限区间都要对区域进行划分。\n\n- 对于无限反常积分$\\int_a^{+\\infty}f(x)\\,\\textrm{d}x$，$f(x)$在$[a,+\\infty)$上连续非负，对于常数$\\rho$：若存在$\\rho>1$，使得$\\lim\\limits_{x\\to+\\infty}x^\\rho f(x)=c<+\\infty$，则积分收敛。若只存在$\\rho=1$，使得$\\lim\\limits_{x\\to+\\infty}xf(x)=c>0$或为$-\\infty$，则积分发散。\n\n- 对于瑕积分$\\int_a^bf(x)\\,\\textrm{d}x$，其中$a$为瑕点，$f(x)$在$[a,b]$上连续非负，对于常数$\\rho$：若存在$0<\\rho<1$，使得$\\lim\\limits_{x\\to a^+}(x-a)^\\rho f(x)=c$存在，则积分收敛。若只存在$\\rho=1$，使得$\\lim\\limits_{x\\to a^+}(x-a)f(x)=c>0$或为$+\\infty$，则积分发散。\n\n#### 幂函数\n\n对判断方法进行特殊化：\n\n- 无限反常积分$\\displaystyle{\\int_a^{+\\infty}\\dfrac{1}{x^\\rho}\\textrm{d}x}$当$\\rho>1$时收敛，当$\\rho\\leqslant1$时发散。\n\n- 对于瑕积分$\\displaystyle{\\int_a^b\\dfrac{1}{(x-a)^\\rho}\\textrm{d}x}$当$\\rho<1$时收敛，当$\\rho\\geqslant1$时发散。\n\n例题：判断$\\displaystyle{\\int_0^{+\\infty}\\dfrac{1}{\\sqrt{x+x^3}}}$的敛散性。\n\n解：对于$x^{-\\frac{1}{2}}$和$x^{-\\frac{3}{2}}$，当$x\\to+\\infty$时，两者都趋向于0，而$x^{-\\frac{3}{2}}$更快，所以更高阶，当$x\\to0$时，两者都趋向于$+\\infty$，而$x^{-\\frac{3}{2}}$更快，所以$x^{-\\frac{1}{2}}$更高阶（无穷小的比较是看哪个更快接近0或更慢远离0，具体的方法是取趋向于0的极限然后看值来判断）。\n\n$\\therefore x\\to+\\infty$时，$\\dfrac{1}{\\sqrt{x+x^3}}\\sim\\dfrac{1}{\\sqrt{x^3}}$，$\\therefore x\\to0$时，$\\dfrac{1}{\\sqrt{x+x^3}}\\sim\\dfrac{1}{\\sqrt{x}}$。\n\n为了方便研究，将积分拆为两个区域：$\\int_0^1f(x)\\,\\textrm{d}x+\\int_1^{+\\infty}f(x)\\,\\textrm{d}x$。\n\n$\\displaystyle{\\int_1^{+\\infty}\\dfrac{1}{x^{\\frac{3}{2}}}\\,\\textrm{d}x}$收敛，故原积分收敛，$\\displaystyle{\\int_0^1\\dfrac{1}{x^{\\frac{1}{2}}}\\,\\textrm{d}x}$收敛，故原积分收敛。\n\n故原积分收敛。\n\n例题：判断$\\displaystyle{\\int_1^{+\\infty}\\dfrac{1}{x\\sqrt{x^2-1}}\\textrm{d}x}$的敛散性。\n\n解：首先判断区域和瑕点，有$x\\to+\\infty$和$x\\to1^+$，所以拆分两个区域$\\int_1^2f(x)\\,\\textrm{d}x$、$\\int_2^{+\\infty}f(x)\\,\\textrm{d}x$。\n\n对于$x\\to+\\infty$，无穷区域所以$-1$不影响敛散性，直接去掉，$\\dfrac{1}{x\\sqrt{x^2-1}}\\sim\\dfrac{1}{x^2}$，该部分区域收敛。\n\n对于$x\\to1^+$，根据瑕点将非0部分分离出来，首先因式分解，$\\dfrac{1}{x\\sqrt{x^2-1}}=\\dfrac{1}{x\\sqrt{(x+1)(x-1)}}=\\dfrac{1}{\\sqrt{2}\\sqrt{(x-1)}}\\textrm{d}x$。\n\n常量不影响敛散性，所以$\\sim\\dfrac{1}{(x-1)^{\\frac{1}{2}}}$，所以该区域收敛。\n\n故原积分收敛。\n\n#### 指数函数\n\n指数函数增长的速度远大于幂函数。所以判断很简单。\n\n例题：判断$\\displaystyle{\\int_{-\\infty}^{+\\infty}\\dfrac{1}{x^2}e^{\\frac{1}{x}}\\textrm{d}x}$的敛散性。\n\n解：根据式子和积分上下限，所以需要关注$x\\to+\\infty$、$x\\to-\\infty$、$x\\to0$。\n\n$x\\to+\\infty$时，$\\sim\\dfrac{1}{x^2}$，收敛。\n\n$x\\to-\\infty$时，$\\sim\\dfrac{1}{x^2}$，收敛。\n\n$x\\to0^+$时，对于$\\dfrac{1}{x^2}\\sim+\\infty$，$e^{\\frac{1}{x}}\\sim+\\infty$，发散。\n\n故原积分发散。\n\n#### 对数函数\n\n对数函数增长较慢，比较较困难。若要判断$f(x)$的敛散性，当$x\\to+\\infty$或$x\\to0^+$时，则$f(x)\\ln^ax$更容易发散，因为$\\ln^ax$增速比$x$慢，$\\dfrac{f(x)}{\\ln^ax}$更容易收敛，因为$\\dfrac{1}{\\ln^ax}$增速反而更快了。\n\n若趋向于无穷小：\n\n- 当$x\\to1$时，$\\ln x\\sim x-1$。\n\n- 当$x\\to0^+$时，$\\ln(1+x)\\sim x$。\n\n若趋向于无穷大：\n\n-$\\displaystyle{\\int_a^{+\\infty}\\dfrac{1}{\\ln^\\rho x}\\textrm{d}x}$（$a>1$）无论$\\rho$取多少都发散。因为当$x\\to+\\infty$时对数函数永远小于幂级数，所以必然发散。\n\n-$\\displaystyle{\\int_0^a\\dfrac{1}{\\ln^\\rho x}\\textrm{d}x}$（$a<1$）无论$\\rho$取多少都必然收敛。因为当$x\\to0^+$时对数函数的倒数永远大于幂级数，所以必然收敛。\n\n-$\\displaystyle{\\int_a^{+\\infty}\\dfrac{\\ln^{\\rho'}x}{x^\\rho}\\textrm{d}x\\sim\\int_a^{+\\infty}\\dfrac{1}{x^\\rho}\\textrm{d}x}$（$a>0$）。\n\n-$\\displaystyle{\\int_a^{+\\infty}\\dfrac{1}{x^\\rho\\ln^{\\rho'}x}\\textrm{d}x}$，当$\\rho\\neq1$时$\\sim\\displaystyle{\\int_0^{+\\infty}\\dfrac{1}{x^\\rho}\\textrm{d}x}$，当$\\rho=1$时，$\\rho'>1$收敛，$\\rho'\\leqslant1$发散。（$a>0$且当$x\\to1$时$\\sim\\dfrac{1}{\\ln^{\\rho'}x}$）\n\n例题：判断$\\displaystyle{\\int_0^{+\\infty}\\dfrac{\\ln(1+x)}{x^{\\frac{3}{2}}}\\textrm{d}x}$的敛散性。\n\n解：当$x\\to+\\infty$时，$\\sim\\dfrac{\\ln x}{x^{\\frac{3}{2}}}\\sim\\dfrac{1}{x^{\\frac{3}{2}}}$，收敛。\n\n当$x\\to0^+$时，$\\sim\\dfrac{x}{x^{\\frac{3}{2}}}\\sim\\dfrac{1}{x^{\\frac{1}{2}}}$，收敛。\n\n积分收敛。\n\n例题：判断$\\displaystyle{\\int_0^{+\\infty}\\dfrac{\\sqrt{\\ln x}}{x\\sqrt{x}-1}\\textrm{d}x}$的敛散性。\n\n解：当$x\\to+\\infty$时，$\\sim\\dfrac{\\ln^\\frac{1}{2}x}{x^\\frac{3}{2}}\\sim\\dfrac{1}{x^{\\frac{3}{2}}}$，收敛。\n\n当$x\\to0^+$时，$\\sim-\\ln^\\frac{1}{2}x$，收敛。\n\n当$x\\to1$时，$\\sim\\dfrac{(x-1)^{\\frac{1}{2}}}{(1+x-1)^\\frac{3}{2}-1}\\sim\\dfrac{2(x-1)^{\\frac{1}{2}}}{3(x-1)}\\sim\\dfrac{1}{(x-1)^{\\frac{1}{2}}}$，收敛。\n\n积分收敛。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#几何应用",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "几何应用",
  "kind": "方法",
  "text": "重点是形心公式和弧长公式。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#直角坐标系",
  "subject": "gaoshu",
  "topic": "直角坐标系",
  "title": "直角坐标系",
  "kind": "例题",
  "text": "\\leavevmode\n\n例题：求曲线$y^2=x$与$y=x^2$所围成面积。\n\n解：首先确定$x$的范围，是$x\\in[0,1]$。\n\n第二步确立微元，即切割的微小元素，是$\\textrm{d}S=[\\sqrt{x}-x^2]\\textrm{d}x$（也可以对$y$积分：$S=\\int_0^1(\\sqrt{y}-y^2)\\,\\textrm{d}y$）。\n\n最后一步对其积分：$S=\\int_0^1(\\sqrt{x}-x^2)\\,\\textrm{d}x=\\dfrac{2}{3}-\\dfrac{1}{3}=\\dfrac{1}{3}$。\n\n例题：求曲线$y^2=2x$与$y=x-4$围成面积。\n\n解：首先确定范围，将$y=x-4$代入$y^2=2x$，从而得到$x\\in[0,8]$，$y\\in[-2,4]$。\n\n若是对$x$确立微元，则对于不同的区间，面积有不同的表达式：\n\n$S=\\int_0^22\\sqrt{2x}\\,\\textrm{d}x+\\int_2^8(\\sqrt{2x}-x+4)\\,\\textrm{d}x$。\n\n这显然很麻烦，然而如果对$y$确立微元，那么$y^2=2x$在$y\\in[-2,4]$上总是在$y=x-4$下面，所以这个面积只要一个表达式就能表达出来：\n\n$\\textrm{d}S=\\left[(y+4)-\\dfrac{y^2}{2}\\right]\\textrm{d}y$。\n\n所以$S=\\displaystyle{\\int_{-2}^4\\left[(y+4)-\\dfrac{y^2}{2}\\right]\\textrm{d}y}$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1-3",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#参数方程",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "参数方程",
  "kind": "例题",
  "text": "\\leavevmode\n\n例题：求摆线一拱$\\left\\{\\begin{array}{l}\n    x=a(t-\\sin t) \\\\\n    y=a(1-\\cos t)\n\\end{array}\n\\right.$$(0\\leqslant t\\leqslant 2\\pi)$与$x$轴所围成的面积。\n\n解：首先计算范围，代入$2\\pi$，得到$x\\in[0,2a\\pi]$。\n\n然后是找微元，这里是对$x$确立：$\\textrm{d}S=y(x)\\,\\textrm{d}x$。\n\n从而$S=\\int_0^{2a\\pi}y(x)\\,\\textrm{d}x$。\n\n因为无法计算对于$x$的表达式，所以使用参数方程代入，并改变上下限$S$：\n\n$=\\int_0^{2\\pi}a(1-\\cos t)\\,\\textrm{d}[a(t-\\sin t)]=\\int_0^{2\\pi}a^2(1-\\cos t)^2\\,\\textrm{d}t$\n\n$=a^2\\displaystyle{\\int_0^{2\\pi}\\left(2\\sin^2\\dfrac{t}{2}\\right)^2\\textrm{d}t}\\,\\text{（消去里面的1）}=4a^2\\displaystyle{\\int_0^{2\\pi}\\sin^4\\dfrac{t}{2}\\,\\textrm{d}t}$\n\n令$u=\\dfrac{t}{2}$，从而$\\textrm{d}t=2\\textrm{d}u$，从而$u\\in[0,\\pi]$。\n\n$=8a^2\\int_0^\\pi\\sin^4u\\,\\textrm{d}u=16a^2\\int_0^{\\frac{\\pi}{2}}\\sin^4u\\,\\textrm{d}u$（积分可加性拆分为两个相同限的项）\n\n$=16a^2\\cdot\\dfrac{3}{4}\\cdot\\dfrac{1}{2}\\cdot\\dfrac{\\pi}{2}=3a^2\\pi$（点火公式）。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1-4",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#极坐标",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "极坐标",
  "kind": "例题",
  "text": "\\leavevmode\n\n例题：求心形线$\\rho=a(1+\\cos\\theta)(a>0)$所围成面积。\n\n解：极角发生变化时，可以计算到心形线必然会穿过$(2a,0),(0,a),(0,0)$这三个点，而$\\cos x$是一个偶函数，所以心形线图形是上下对称的。如果要求心形线的面积，可以只用求上半部分就可以了。\n\n所以可以根据公式$S=2\\dfrac{1}{2}\\int_0^\\pi a^2(1+\\cos\\theta)^2\\,\\textrm{d}\\theta$。\n\n$=a^2\\displaystyle{\\int_0^\\pi\\left(2\\cos^2\\dfrac{\\theta}{2}\\right)^2\\textrm{d}\\theta}=4a^2\\displaystyle{\\int_0^\\pi\\cos^4\\dfrac{\\theta}{2}\\,\\textrm{d}\\theta}$\n\n令$\\dfrac{\\theta}{2}=t$，所以$\\textrm{d}\\theta=2\\textrm{d}t$，同时上下限缩小一半：$=8a^2\\int_0^{\\frac{\\pi}{2}}\\cos^4t\\,\\textrm{d}t$\n\n根据华理士公式：$=8a^2\\cdot\\dfrac{3}{4}\\cdot\\dfrac{1}{2}\\cdot\\dfrac{\\pi}{2}=\\dfrac{3}{2}a^2\\pi$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1-7",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#旋转体",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "旋转体",
  "kind": "例题",
  "text": "\\leavevmode\n\n例题：计算由椭圆$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$所围成的图形绕$x$轴旋转一周而成的体积。\n\n解：由式子得到$y^2=b^2\\left(1-\\dfrac{x^2}{b^2}\\right)$。\n\n所以旋转体体积就是两倍的第一象限的旋转体积，直接计算第一象限部分就可以了。\n\n$V_x=2\\pi\\displaystyle{\\int_0^ab^2\\left(1-\\dfrac{x^2}{a^2}\\right)\\,\\textrm{d}x}=2\\pi b^2\\left(a-\\dfrac{a}{3}\\right)=\\dfrac{4\\pi ab^2}{3}$。\n\n例题：计算摆线$\\left\\{\\begin{array}{l}\n    x=a(t-\\sin t) \\\\\n    y=a(1-\\cos t)\n\\end{array}\n\\right.$$(0\\leqslant t\\leqslant 2\\pi)$与$x$轴，$y$轴所旋转得到的体积。\n\n解：$\\because t\\in[0,2\\pi]$，$\\therefore x\\in[0,2a\\pi]$。\n\n$V_x=\\pi\\int_0^{2a\\pi}y^2\\,\\textrm{d}x$\n\n代入参数方程并改变上下限：\n\n$=\\pi\\int_0^{2\\pi}a^2(1-\\cos t)^2\\,\\textrm{d}[a(t-\\sin t)]=a^3\\pi\\int_0^{2\\pi}(1-\\cos t)^3\\,\\textrm{d}t$\n\n$=a^3\\pi\\displaystyle{\\int_0^{2\\pi}\\left(2\\sin^2\\dfrac{t}{2}\\right)^3\\textrm{d}t}=8a^3\\pi\\displaystyle{\\int_0^{2\\pi}\\sin^6\\dfrac{t}{2}\\textrm{d}t}$\n\n令$\\dfrac{\\theta}{2}=t$，所以$\\textrm{d}\\theta=2\\textrm{d}t$，同时上下限缩小一半：\n\n$=16a^3\\pi\\int_0^\\pi\\sin^6u\\,\\textrm{d}u=32a^3\\pi\\int_0^{\\frac{\\pi}{2}}\\sin^6u\\,\\textrm{d}u$\n\n华理士公式得到最后$=5a^3\\pi^2$。\n\n同理可得$y$轴旋转体积为$V_y=2\\pi\\int_0^{2\\pi}xy(x)\\,\\textrm{d}x$\n\n$=2\\pi\\int_0^{2\\pi}a(t-\\sin t)a^2(1-\\cos t)^2\\,\\textrm{d}t=2a^3\\pi\\int_0^{2\\pi}(t-\\sin t)\\cdot 4\\sin^4\\dfrac{t}{2}\\,\\textrm{d}t$\n\n然后拆开分别进行凑微分法，得到$6a^3\\pi^3$。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1-8",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#平行截面已知的立体体积",
  "subject": "gaoshu",
  "topic": "平行截面已知的立体体积",
  "title": "平行截面已知的立体体积",
  "kind": "例题",
  "text": "\\leavevmode\n\n例题：计算由$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}+\\dfrac{z^2}{c^2}=1$所围成的椭球体的体积。\n\n解：已知$\\dfrac{y^2}{b^2}+\\dfrac{z^2}{c^2}=1-\\dfrac{x^2}{a^2}$.\n\n$S(x)=\\pi bc\\left(1-\\dfrac{x^2}{a^2}\\right)$\n\n$V=2\\int_0^a\\pi bc\\left(1-\\dfrac{x^2}{a^2}\\right)\\,\\textrm{d}x$。\n\n解得$V=\\dfrac{4}{3}\\pi abc$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1-9",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#平均值",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "平均值",
  "kind": "例题",
  "text": "例题：求函数$y=\\dfrac{x^2}{\\sqrt{1-x^2}}$在区间$\\left[\\dfrac{1}{2},\\dfrac{\\sqrt{3}}{2}\\right]$上的平均值。\n\n解：$\\bar{y}=\\dfrac{1}{\\dfrac{\\sqrt{3}}{2}-\\dfrac{1}{2}}\\displaystyle{\\int_\\frac{1}{2}^\\frac{\\sqrt{3}}{2}\\dfrac{x^2}{\\sqrt{1-x^2}}\\textrm{d}x}$，令$x=\\sin t$：$=\\dfrac{2}{\\sqrt{3}-1}\\displaystyle{\\int_\\frac{\\pi}{6}^\\frac{\\pi}{3}\\dfrac{\\sin^2t}{\\cos t}\\cos t\\,\\textrm{d}t}$\n\n$=\\dfrac{2}{\\sqrt{3}-1}\\int_\\frac{\\pi}{6}^\\frac{\\pi}{3}\\sin^2t\\,\\textrm{d}t=\\dfrac{1}{\\sqrt{3}-1}\\int_\\frac{\\pi}{6}^\\frac{\\pi}{3}(1-\\cos2t)\\,\\textrm{d}t=\\dfrac{\\sqrt{3}+1}{12}\\pi$。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-1-12",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#形心坐标公式",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "形心坐标公式",
  "kind": "定理",
  "text": "例题：设曲线$L$的方程为$y=\\dfrac{1}{4}x^2-\\dfrac{1}{2}\\ln x$，$1\\leqslant x\\leqslant e$，$D$是由曲线$L$，直线$x=1$，$x=e$及$x$轴围成的平面图形，求$D$的形心横坐标。\n\n解：代入$\\overline{x}=\\dfrac{\\int_a^bxf(x)\\,\\textrm{d}x}{\\int_a^bf(x)\\,\\textrm{d}x}=\\dfrac{\\int_1^ex\\left(\\dfrac{1}{4}x^2-\\dfrac{1}{2}\\ln x\\right)\\,\\textrm{d}x}{\\int_1^e\\left(\\dfrac{1}{4}x^2-\\dfrac{1}{2}\\ln x\\right)\\,\\textrm{d}x}=\\dfrac{3(e^2+1)(e^2-3)}{4(e^3-7)}$。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s6-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#物理应用",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "物理应用",
  "kind": "方法",
  "text": "#### 变力沿直线做功\n\n#### 抽水做功\n\n例题：有一个半径为$4m$的半球形水池蓄满了水，现在要将水全部抽取到距水池原水面$6m$高的水箱中，求需要做多少功。（水的密度为$1000kg/m^3$，重力加速度$g=9.8m/s^2$）\n\n解：令水池是竖直的，所以以$y$为积分的方向。\n\n根据原水平面为半径为4的圆的面积，得到$x^2+y^2=16$，解得$x^2=16-y^2$，$A(y)=\\pi x^2=\\pi(16-y^2)$。\n\n$\\rho gA(y)\\,\\textrm{d}y=\\rho g\\pi(16-y^2)\\,\\textrm{d}y$\n\n要将水提到$6m$，即路径为$6-y$，所以$\\rho g\\pi(16-y^2)(6-y)\\,\\textrm{d}y$。\n\n又$y$从最开始的0到抽干的-4，所以得到$w=\\int_{-4}^0\\rho g\\pi(16-y^2)(6-y)\\,\\textrm{d}y$。\n\n#### 水压力",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s7-0",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#积分关系式",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "积分关系式",
  "kind": "定理",
  "text": "基本上要使用到积分中值定理。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s7-1",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#积分等式",
  "subject": "gaoshu",
  "topic": "积分等式与积分不等式",
  "title": "积分等式",
  "kind": "例题",
  "text": "包括证明带有积分的等式、方程根、积分中值定理等。\n\n对于这种等式要求其值，往往是给出部分式子的条件，所以必须想办法进行转换。\n\n一种是已知$f(x)$，式子中含有未知的$f'(x)$，一种是已知$f'(x)$（多以$f(x)=\\int f'(x)\\,\\textrm{d}x$的形式给出），式子中含有未知的$f(x)$。\n\n#### 分部积分\n\n分部积分法用于消除未知的式子的导数或者积分。\n\n例题：设$f''(u)$在区间$[0,2]$上连续，$f(2)=a$，$f'(2)=b$，$\\int_0^2f(u)\\,\\textrm{d}u=c$，求$\\int_0^1x^2f''(2x)\\,\\textrm{d}x$。\n\n解：已知条件是多个导数和一个积分的值，要将这些值换成目标积分的样式。所以要考虑换元积分或分部积分。\n\n这里目标积分的值是乘积形式且变量无法换元，且存在一个未知的$f''(2x)$，所以使用分部积分将$f''(2x)$换到$\\textrm{d}x$中降低求导幂次。\n\n$\\int_0^1x^2f''(2x)\\,\\textrm{d}x=\\dfrac{1}{2}\\int_0^1x^2\\,\\textrm{d}[f'(2x)]=\\dfrac{1}{2}[x^2f'(2x)]\\bigg\\vert_0^1-\\int_0^1xf'(2x)\\,\\textrm{d}x=\\dfrac{1}{2}f'(2)-\\dfrac{1}{2}\\int_0^1x\\,\\textrm{d}[f(2x)]=\\dfrac{b}{2}-\\dfrac{1}{2}[xf(2x)]\\bigg\\vert_0^1+\\dfrac{1}{2}\\int_0^1f(2x)\\,\\textrm{d}x=\\dfrac{b}{2}-\\dfrac{a}{2}+\\dfrac{1}{4}\\int_0^2f(u)\\,\\textrm{d}(u)=-\\dfrac{a}{2}+\\dfrac{b}{2}+\\dfrac{c}{4}$。\n\n#### 中值定理\n\n例题：设$f(x)$、$g(x)$在$[a,b]$上连续且$g(x)$不变号，证明至少存在一点$\\xi\\in[a,b]$使得$\\int_a^bf(x)g(x)\\,\\textrm{d}x=f(\\xi)\\int_a^bg(x)\\,\\textrm{d}x$。（推广中值定理）\n\n若$g(x)\\equiv1$，则结论就是$\\int_a^bf(x)\\,\\textrm{d}x=f(\\xi)(b-a)$积分中值定理。\n\n证明：若$g(x)\\equiv0$则等式显然成立。若$g(x)$不变号，则不妨设$g(x)>0$。\n\n令$F(x)=\\int_a^xf(t)g(t)\\,\\textrm{d}t$，$G(x)=\\int_a^xg(t)\\,\\textrm{d}t$。\n\n由柯西中值定理可得$\\dfrac{F(b)-F(a)}{G(b)-G(a)}=\\dfrac{F'(\\xi)}{G'(\\xi)}=\\dfrac{\\int_a^bf(x)g(x)\\,\\textrm{d}x}{\\int_a^bg(x)\\,\\textrm{d}x}=\\dfrac{f(\\xi)g(\\xi)}{g(\\xi)}$。\n\n$\\therefore\\int_a^bf(x)g(x)\\,\\textrm{d}x=f(\\xi)\\int_a^bg(x)\\,\\textrm{d}x$，$\\xi\\in(a,b)\\subset[a,b]$。\n\n同理$g(x)<0$也如此。\n\n#### 夹逼准则\n\n夹逼准则一般用于求数列极限，若极限号后面有积分号可以考虑使用夹逼准则。",
  "relatedLessons": [
   "gs11"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-4-integal-of-functions-of-single-variable-integal-of-functions-of-single-variable-s7-2",
  "repo": "R08",
  "source": "advanced-math/exercise/4-integal-of-functions-of-single-variable/integal-of-functions-of-single-variable.tex#积分不等式",
  "subject": "gaoshu",
  "topic": "积分等式与积分不等式",
  "title": "积分不等式",
  "kind": "例题",
  "text": "带积分号的不等问题。\n\n#### 函数单调性\n\n将某一限一般是上限变量化，然后移项构造辅助函数，由辅助函数的单调性来证明不等式，多用于所给条件为“$f(x)$在$[a,b]$上连续”的情况，因为函数连续必然可积分与求导。\n\n例题：设$f(x)$在$[a,b]$上连续，且$f(x)>0$，证明$\\displaystyle{\\int_a^bf(x)\\,\\textrm{d}x\\int_a^b\\dfrac{1}{f(x)}\\textrm{d}x}\\geqslant(b-a)^2$。\n\n证明：令$F(x)=\\displaystyle{\\int_a^xf(t)\\,\\textrm{d}t\\int_a^x\\dfrac{1}{f(t)}\\textrm{d}t-(x-a)^2}$。目标是证明$F(b)\\geqslant0$。\n\n$F'(x)=f(x)\\cdot\\displaystyle{\\int_a^x\\dfrac{1}{f(t)}\\textrm{d}t+\\int_a^xf(t)\\,\\textrm{d}t\\dfrac{1}{f(x)}}-2(x-a)$\n\n$=\\displaystyle{\\int_a^x\\dfrac{f(x)}{f(t)}\\textrm{d}t+\\int_a^x\\dfrac{f(t)}{f(x)}\\textrm{d}t-2(x-a)=\\int_a^x\\left[\\dfrac{f(x)}{f(t)}+\\dfrac{f(t)}{f(x)}\\right]\\textrm{d}t-2(x-a)}$\n\n又$\\dfrac{f(x)}{f(t)}+\\dfrac{f(t)}{f(x)}\\geqslant2\\sqrt{\\dfrac{f(x)}{f(t)}\\cdot\\dfrac{f(t)}{f(x)}}=2$。\n\n$\\therefore\\geqslant\\int_a^x2\\,\\textrm{d}t-2(x-a)=2(x-a)-2(x-a)=0$。\n\n从而$F'(x)\\geqslant0$，等于0不恒成立，所以$F(x)$在$[a,b]$上单调增，从而$F(b)>F(a)$，$\\displaystyle{\\int_a^xf(t)\\,\\textrm{d}t\\int_a^x\\dfrac{1}{f(t)}\\textrm{d}t-(x-a)^2}>0$。\n\n所以$\\displaystyle{\\int_a^bf(x)\\,\\textrm{d}x\\int_a^b\\dfrac{1}{f(x)}\\textrm{d}x}\\geqslant(b-a)^2$\n\n例题：设$f(x)$在$[0,1]$上连续递减，证明$0<\\lambda<1$时$\\int_0^\\lambda f(x)\\,\\textrm{d}x\\geqslant\\lambda\\int_0^1f(x)\\,\\textrm{d}x$。\n\n证明：看到$\\lambda$和1，可以做出辅助函数$\\dfrac{\\int_0^xf(t)\\,\\textrm{d}t}{x}$，即要证明$F(\\lambda)\\geqslant F(1)$。\n\n又$\\lambda<1$，所以只用证明$F(x)$在$[0,1]$上递减。\n\n则$F'(x)=\\dfrac{f(x)x-\\int_0^xf(t)\\,\\textrm{d}t}{x^2}$，又根据积分中值定理$\\int_0^xf(t)\\,\\textrm{d}t=f(\\xi)(x-0)$，$\\xi\\in(0,x)$。\n\n$\\therefore=\\dfrac{f(x)x-f(\\xi)x}{x^2}=\\dfrac{f(x)-f(\\xi)}{x}$，因为$f(x)$在$[0,1]$上递减，$\\xi<x$，$f(\\xi)>f(x)$。\n\n所以$F'(x)<0$，所以$F(x)$单调递减，从而$F(\\lambda)\\geqslant F(1)$，所以得证。\n\n#### 拉格朗日中值定理\n\n多用于所给条件为“$f(x)$一阶可导”且某一端点值较简单甚至为0的题目。\n\n一阶导数不代表导数连续，导数可能存在震荡间断点。\n\n例题：设$f(x)$在$[0,1]$上具有一阶连续导数，且$f(0)=f(1)=0$，证明：$\\vert\\int_0^1f(x)\\,\\textrm{d}x\\vert\\leqslant\\dfrac{1}{4}\\max\\limits_{x\\in[0,1]}\\{\\vert f'(x)\\vert\\}$。\n\n证明：在$[0,1]$中任意取一点$x$，进行两次拉格朗日中值定理。\n\n$f(x)-f(0)=f'(\\xi_1)(x-0)$（$\\xi_1\\in(0,x)$），$f(x)=f'(\\xi_1)x$。\n\n$f(1)-f(x)=f'(\\xi_2)(1-x)$（$\\xi_2\\in(x,1)$），$-f(x)=f'(\\xi_2)(1-x)$。\n\n根据不等式性质：$\\vert\\int_0^1f(x)\\,\\textrm{d}x\\vert=\\vert\\int_0^xf(t)\\,\\textrm{d}t+\\int_x^1f(t)\\,\\textrm{d}t\\vert$\n\n$\\leqslant\\vert\\int_0^xf(t)\\,\\textrm{d}t\\vert+\\vert\\int_x^1f(t)\\,\\textrm{d}t\\vert\\leqslant\\int_0^x\\vert f(t)\\vert\\,\\textrm{d}t+\\int_x^1\\vert f(t)\\vert\\,\\textrm{d}t$\n\n$\\xi_1\\in(0,x)$上代入$f(x)=f'(\\xi_1)x$，$\\xi_2\\in(x,1)$上代入$-f(x)=f'(\\xi_2)(1-x)$。\n\n$=\\int_0^x\\vert f'(\\xi_1)\\vert t\\,\\textrm{d}t+\\int_x^1\\vert f'(\\xi_2)\\vert(1-t)\\,\\textrm{d}t$，令$M=\\max\\limits_{x\\in[0,1]}\\{\\vert f'(x)\\vert\\}$。\n\n$\\leqslant\\int_0^xMt\\,\\textrm{d}t+\\int_x^1M(1-t)\\,\\textrm{d}t=M\\left(\\int_0^xt\\,\\textrm{d}t+\\int_x^1(1-t)\\,\\textrm{d}t\\right)$\n\n$=M\\left(\\dfrac{1}{2}x^2+\\dfrac{1}{2}(1-x)^2\\right)=M\\left(\\left(x-\\dfrac{1}{2}\\right)^2+\\dfrac{1}{4}\\right)$\n\n即$\\vert\\int_0^1f(x)\\,\\textrm{d}x\\vert\\leqslant M\\left(\\left(x-\\dfrac{1}{2}\\right)^2+\\dfrac{1}{4}\\right)$，$\\min\\left(M\\left(\\left(x-\\dfrac{1}{2}\\right)^2+\\dfrac{1}{4}\\right)\\right)=\\dfrac{1}{4}M$\n\n$\\therefore\\vert\\int_0^1f(x)\\,\\textrm{d}x\\vert\\leqslant\\dfrac{1}{4}M=\\dfrac{1}{4}\\max\\limits_{x\\in[0,1]}\\{\\vert f'(x)\\vert\\}$\n\n#### 泰勒公式\n\n多用于所给条件为“$f(x)$二阶可导”且某一端点值较简单甚至为0的题目。\n\n例题：设$f(x)$在$[0,2]$上二阶导数连续，且$f(1)=0$，当$x\\in[0,2]$时，记$M=\\max\\{\\vert f''(x)\\vert\\}$，证明$\\vert\\int_0^2f(x)\\,\\textrm{d}x\\vert\\leqslant\\dfrac{1}{3}M$。",
  "relatedLessons": [
   "gs11"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#散度与旋度",
  "subject": "gaoshu",
  "topic": "散度与旋度",
  "title": "散度与旋度",
  "kind": "例题",
  "text": "直接代入公式。\n\n例题：计算向量场$u(x,y,z)=xy^2i+ye^xj+x\\ln(1+z^2)k$在点$P(1,1,0)$的散度和旋度。\n\n解：所以$u(x,y,z)=(P,Q,R)$，$P=xy^2$，$Q=ye^x$，$R=x\\ln(1+z^2)$。\n\n$\\dfrac{\\partial P}{\\partial x}=y^2$，$\\dfrac{\\partial Q}{\\partial y}=e^x$，$\\dfrac{\\partial R}{\\partial z}=\\dfrac{2zx}{1+z^2}$。\n\n代入$P(1,1,0)$，得到散度$\\textrm{div}\\,\\vec{u}=1+e$。\n\n旋度$\\overrightarrow{\\textrm{rot}}\\,\\vec{u}=\\left\\vert\\begin{array}{ccc}\n    \\vec{i} & \\vec{j} & \\vec{k} \\\\\n    \\dfrac{\\partial}{\\partial x} & \\dfrac{\\partial}{\\partial y} & \\dfrac{\\partial}{\\partial z} \\\\\n    xy^2 & ye^x & x\\ln(1+z^2)\n\\end{array}\\right\\vert=\\dfrac{\\partial x\\ln(1+z^2)}{\\partial y}\\vec{i}+\\dfrac{\\partial xy^2}{\\partial z}\\vec{j}+\\dfrac{\\partial ye^x}{\\partial x}\\vec{k}-\\dfrac{\\partial xy^2}{\\partial y}\\vec{k}-\\dfrac{\\partial ye^x}{\\partial z}\\vec{i}-\\dfrac{\\partial x\\ln(1+z^2)}{\\partial x}\\vec{j}=0+0+ye^x\\vec{k}-2xy\\vec{k}-0-\\ln(1+z^2)\\vec{j}=-\\ln(1+z^2)\\vec{j}+(ye^x-2xy)\\vec{k}=(0,0,e-2)$。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#二元函数",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "二元函数",
  "kind": "例题",
  "text": "函数以$f(u,v)$的形式来出现，需要分别对其求偏导。\n\n例题：设$z=e^{xy}+f(x+y,xy)$，$f(u,v)$有二阶连续偏导数，求$\\dfrac{\\partial^2z}{\\partial x\\partial y}$。\n\n解：令$x+y$为$u$，$xy$为$v$，$f(u,v)$对$u$求导就是$f_1'$，对$v$求导就是$f_2'$，求$uv$依次求导就是$f_{12}''$，以此类推。\n\n首先求一次偏导：$\\dfrac{\\partial z}{\\partial x}=ye^{xy}+\\dfrac{\\partial f(u,v)}{\\partial u}\\dfrac{\\partial u}{\\partial x}+\\dfrac{\\partial f(u,v)}{\\partial v}\\dfrac{\\partial v}{\\partial x}=ye^{xy}+f_1'+f_2'y$。\n\n接着对$y$求偏导：$\\dfrac{\\partial^2z}{\\partial x\\partial y}=e^{xy}+xye^{xy}+\\dfrac{\\partial f_1'}{\\partial y}+\\dfrac{\\partial f_2'y}{\\partial y}$\n\n$=e^{xy}+xye^{xy}+\\dfrac{\\partial f_1'}{\\partial y}+\\dfrac{\\partial f_2'}{\\partial y}y+f_2'\\dfrac{\\partial y}{\\partial y}=e^{xy}+xye^{xy}+\\dfrac{\\partial f_1'}{\\partial u}\\dfrac{\\partial u}{\\partial y}+\\dfrac{\\partial f_1'}{\\partial v}\\dfrac{\\partial v}{\\partial y}+\\dfrac{\\partial f_2'}{\\partial u}\\dfrac{\\partial u}{\\partial y}y+\\dfrac{\\partial f_2'}{\\partial v}\\dfrac{\\partial v}{\\partial y}y+f_2'=e^{xy}+xye^{xy}+f_{11}''+f_{12}''x+f_{21}''y+f_{22}''xy+f_2'$。\n\n又$f(u,v)$具有两阶连续偏导数，所以$f_{12}''=f_{21}''$。\n\n即$=e^{xy}+xye^{xy}+f_{11}''+(x+y)f_{12}''+xyf_{22}''+f_2'$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#复合函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "复合函数",
  "kind": "例题",
  "text": "函数以复合函数形式$f(g(x,y))$出现，函数的变量是一个整体。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-3",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#链式法则",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "链式法则",
  "kind": "定理",
  "text": "\\leavevmode\n\n若是给出相应的不等式可以通过链式法则求出对应的表达式。\n\n例题：设$u=u(\\sqrt{x^2+y^2})$（$r=\\sqrt{x^2+y^2}>0$）有二阶连续的偏导数，且满足$\\dfrac{\\partial^2u}{\\partial x^2}+\\dfrac{\\partial^2u}{\\partial y^2}-\\dfrac{1}{x}\\dfrac{\\partial u}{\\partial x}+u=x^2+y^2$，则求$u(\\sqrt{x^2+y^2})$。\n\n解：这个函数是复合函数$u=u(r)$和$r=\\sqrt{x^2+y^2}$而成。根据复合函数求导法则：\n\n$\\dfrac{\\partial u}{\\partial x}=\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\dfrac{\\partial r}{\\partial x}=\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\dfrac{x}{\\sqrt{x^2+y^2}}=\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{x}{r}$，$\\dfrac{1}{x}\\cdot\\dfrac{\\partial u}{\\partial x}=\\dfrac{1}{r}\\cdot\\dfrac{\\textrm{d}u}{\\textrm{d}r}$。\n\n$\\dfrac{\\partial^2u}{\\partial x^2}=\\dfrac{\\partial}{\\partial x}\\left(\\dfrac{\\partial u}{\\partial x}\\right)=\\dfrac{\\partial}{\\partial x}\\left(\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{x}{r}\\right)=\\dfrac{x}{r}\\cdot\\dfrac{\\partial}{\\partial x}\\left(\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\right)+\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{\\partial}{\\partial x}\\left(\\dfrac{x}{r}\\right)=\\dfrac{x}{r}\\cdot\\dfrac{\\partial}{\\partial r}\\left(\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\right)\\dfrac{\\partial r}{\\partial x}+\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{r-x\\cdot(\\partial r/\\partial x)}{r^2}=\\dfrac{x^2}{r^2}\\cdot\\dfrac{\\textrm{d}^2u}{\\textrm{d}r^2}+\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{r^2-x^2}{r^3}$。\n\n$\\dfrac{\\partial^2u}{\\partial y^2}=\\dfrac{\\partial}{\\partial y}\\left(\\dfrac{\\partial u}{\\partial y}\\right)=\\dfrac{\\partial}{\\partial y}\\left(\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{y}{r}\\right)=\\dfrac{y}{r}\\cdot\\dfrac{\\partial}{\\partial y}\\left(\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\right)+\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{\\partial}{\\partial y}\\left(\\dfrac{y}{r}\\right)=\\dfrac{y}{r}\\cdot\\dfrac{\\partial}{\\partial r}\\left(\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\right)\\dfrac{\\partial r}{\\partial y}+\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{r-y\\cdot(\\partial r/\\partial y)}{r^2}=\\dfrac{y^2}{r^2}\\cdot\\dfrac{\\textrm{d}^2u}{\\textrm{d}r^2}+\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{r^2-x^2}{r^3}$\n\n代入不等式：$\\dfrac{x^2+y^2}{r^2}\\cdot\\dfrac{\\textrm{d}u^2}{\\textrm{d}r^2}+\\dfrac{\\textrm{d}u}{\\textrm{d}r}\\cdot\\dfrac{2r^2-x^2-y^2}{r^3}-\\dfrac{1}{r}\\cdot\\dfrac{\\textrm{d}u}{\\textrm{d}r}+u=x^2+y^2$。\n\n代入$x^2+y^2=r^2$：$\\dfrac{\\textrm{d}^2u}{\\textrm{d}r^2}+u=r^2$，为二阶线性常系数微分方程。\n\n通解为$u=C_1\\cos r+C_2\\sin r+r^2-2$。\n\n即$u(\\sqrt{x^2+y^2})=C_1\\cos\\sqrt{x^2+y^2}+C_2\\sin\\sqrt{x^2+y^2}+x^2+y^2-2$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-4",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#特殊值反代",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "特殊值反代",
  "kind": "例题",
  "text": "\\leavevmode\n\n若是给出的不等式后还给出对应的特殊值，可以直接代入然后反代求出函数，而不用链式法则。这里一般只能当一个变量为0才能带入，因为0与其他数运算后不变。\n\n例题：设$z=e^x+y^2+f(x+y)$，且当$y=0$时，$z=x^3$，则求$\\dfrac{\\partial z}{\\partial x}$。\n\n解：已知$y=0$时，$z=e^x+f(x)=x^3$，$\\therefore f(x)=x^3-e^x$，$f(x+y)=(x+y)^3-e^{x+y}$，$z=e^x+y^2+(x+y)^3-e^{x+y}$。\n\n$\\therefore\\dfrac{\\partial z}{\\partial x}=e^x+3(x+y)^2-e^{x+y}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-6",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#积分到偏导",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "积分到偏导",
  "kind": "例题",
  "text": "\\leavevmode\n\n可能一个函数是积分的形式，又包含多个变量，要求其多元偏导值。\n\n$\\dfrac{\\textrm{d}}{\\textrm{d}x}\\int_{a(x)}^{b(x)}f(t)\\,\\textrm{d}t=b'(x)f[b(x)]-a'(x)f[a(x)]$。\n\n例题：设$z=\\int_0^1\\vert xy-t\\vert f(t)\\,\\textrm{d}t$，$0\\leqslant x\\leqslant1$，$0\\leqslant y\\leqslant1$，其中$f(x)$为连续函数，求$z_{xx}''+z_{yy}''$。\n\n解：首先因为$z$是一个绝对值的形式，所以根据积分的性质可以拆开积分区间去掉绝对值：$z=\\int_0^{xy}(xy-t)f(t)\\,\\textrm{d}t+\\int_{xy}^1(t-xy)f(t)\\,\\textrm{d}t=xy\\int_0^{xy}f(t)\\,\\textrm{d}t-\\int_0^{xy}tf(t)\\,\\textrm{d}t+\\int_{xy}^1tf(t)\\,\\textrm{d}t-xy\\int_{xy}^1f(t)\\,\\textrm{d}t$。\n\n$z_x'=y\\int_0^{xy}f(t)\\,\\textrm{d}t+xy^2f(xy)-xy^2f(xy)-xy^2f(xy)-y\\int_{xy}^1f(t)\\,\\textrm{d}t+xy^2f(xy)=y\\int_0^{xy}f(t)\\,\\textrm{d}t-y\\int_{xy}^1f(t)\\,\\textrm{d}t$。\n\n$z_{xx}''=y^2f(xy)+y^2f(xy)=2y^2f(xy)$，同理根据变量对称性$z_{yy}''=2x^2f(xy)$，$z_{xx}''+z_{yy}''=2(x^2+y^2)f(xy)$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-7",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#偏导到积分",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "偏导到积分",
  "kind": "例题",
  "text": "\\leavevmode\n\n是偏导问题的逆问题。\n\n注意多元函数进行积分的适合多出来的常数$C$不再是常数，而是与积分变量相关的$C(x)$，$C(y)$，因为对其中一个变量积分时，另一个变量是看作常数的。\n\n例题：设$z=f(x,y)$满足$\\dfrac{\\partial^2z}{\\partial x\\partial y}=x+y$，且$f(x,0)=x$，$f(0,y)=y^2$，求$f(x,y)$。\n\n解：根据$\\partial x\\partial y$的求导顺序反向积分：\n\n$\\dfrac{\\partial z}{\\partial x}=\\int(x+y)\\,\\textrm{d}y=xy+\\dfrac{1}{2}y^2+C_1(x)$。（$x$看作常数）\n\n再次积分$z=\\displaystyle{\\int\\left(xy+\\dfrac{1}{2}y^2+C_1(x)\\right)\\,\\textrm{d}x}=\\dfrac{1}{2}x^2y+\\dfrac{1}{2}xy^2+\\int C_1(x)\\,\\textrm{d}x+C_2(y)$。（$y$看作常数）\n\n又$f(x,0)=x$，代入$\\int C_1(x)\\,\\textrm{d}x+C_2(0)=x$，两边求导$C_1(x)=1$，即$\\int C_1(x)\\,\\textrm{d}x=\\int\\textrm{d}x=x$，$z=\\dfrac{1}{2}x^2y+\\dfrac{1}{2}xy^2+x+C_2(y)$。\n\n又$f(0,y)=y^2$，代入$C_2(y)=y^2$。\n\n$\\therefore z=\\dfrac{1}{2}x^2y+\\dfrac{1}{2}xy^2+x+y^2$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-9",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#存在性",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "存在性",
  "kind": "例题",
  "text": "\\leavevmode\n\n即偏导数的存在性。\n\n可微则偏导数存在，但是偏导数存在不一定可微。\n\n偏导数存在则任意一侧极限存在，但是两侧极限不一定存在。\n\n即$\\lim\\limits_{x\\to x_0}f(x,y_0)=\\lim\\limits_{y\\to y_0}f(x_0,y)=f(x_0,y_0)$，而$\\lim\\limits_{(x,y)\\to(0,0)}f(x,y)$不一定存在。\n\n而偏导数存在和函数连续性无关。\n\n偏导数在该点连续是函数在该点可微的充分非必要条件。\n\n例题：求函数$f(x,y)=\\sqrt{\\vert xy\\vert}$在点$(0,0)$处偏导数是否存在，是否可微。\n\n解：对其求偏导：$f_x'(0,0)=\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(0+\\Delta x,0)-f(0,0)}{\\Delta x}=\\lim\\limits_{\\Delta x\\to0}\\dfrac{\\sqrt{\\vert\\Delta x\\cdot0\\vert}-0}{\\Delta x}\\\\=0=A$，同理$f_y'(0,0)=0=B$，所以$f(x,y)$在$(0,0)$处偏导数存在。\n\n又$\\Delta z=f(0+\\Delta x,0+\\Delta y)-f(0,0)=\\sqrt{\\vert\\Delta x\\cdot\\Delta y\\vert}$。\n\n所以$\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\dfrac{\\Delta z-A\\Delta x-B\\Delta y}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}=\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\dfrac{\\sqrt{\\vert\\Delta x\\cdot\\Delta y\\vert}}{\\sqrt{\\Delta^2x+\\Delta^2y}}$不存在，所以此点不可微。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-10",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#连续性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "连续性",
  "kind": "概念",
  "text": "\\leavevmode\n\n即偏导数的连续性。也会考察原函数的连续性。\n\n通过微分定义和极限即可证明。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1-11",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#隐函数存在定理",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "隐函数存在定理",
  "kind": "定理",
  "text": "当给出一个隐函数方程$f(x,y)$或$f(x,y,z)$时，各自对变量求偏导得到偏导函数，然后将判断的点的值代入偏导函数，若得到的值不为0则在该点的某个邻域内能确定关于这个变量的隐函数，否则不能。\n\n例题：已知方程$xy-z\\ln y+e^{xz}=1$，若存在点$(0,1,1)$的一个邻域，求该邻域内该方程能确定哪些隐函数。\n\n解：对于$F=xy-z\\ln y+e^{xz}-1$，则$F(0,1,1)=0$。\n\n分别求偏导：$F_x'=y+ze^{xz}$，$F_y'=x-\\dfrac{z}{y}$，$F_z'=-\\ln y+xe^{xz}$。\n\n代入点：$F_x'=1+1=2\\neq0$，$F_y'=-1\\neq0$，$F_z'=0$。\n\n所以根据隐函数存在定理$x$、$y$的隐函数存在。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#多元函数极限",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "多元函数极限",
  "kind": "定理",
  "text": "多元函数极限是一元函数极限的拓展，除了洛必达法则和单调有界准则外其他方法可以直接使用。\n\n用于判断该函数在某点是否可微。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#可微性",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "可微性",
  "kind": "例题",
  "text": "\\leavevmode\n\n例题：判断$f(x,y)=\\sqrt{\\vert xy\\vert}$在$(0,0)$是否可微。\n\n解：判断可微性首先要判断偏导存在性。\n\n$f_x'(0,0)=\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(0+\\Delta x,0)-f(0,0)}{\\Delta x}=\\lim\\limits_{\\Delta x\\to0}\\dfrac{\\sqrt{\\vert\\Delta x\\cdot 0}-0}{\\Delta x}=0=A$，同理$f_y'(0,0)=\\lim\\limits_{\\Delta y\\to0}\\dfrac{f(0,0+\\Delta y)-f(0,0)}{\\Delta y}=0=B$。所以偏导数存在。\n\n所以全微分为$\\Delta z=f(0+\\Delta x,0+\\Delta y)-f(0,0)=\\sqrt{\\vert\\Delta x\\cdot\\Delta y\\vert}$。\n\n判断可微$\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\dfrac{\\Delta z-A\\Delta x-B\\Delta y}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}=\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\dfrac{\\sqrt{\\vert\\Delta x\\cdot\\Delta y\\vert}}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}$，分子分母同幂次，所以极限不存在，所以该点不可微。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#多元函数连续性",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "多元函数连续性",
  "kind": "例题",
  "text": "\\leavevmode\n\n若函数$f(x,y)$在$(x_0,y_0)$存在，则函数在该点连续，$\\lim\\limits_{\\substack{x\\to x_0\\\\ y\\to y_0}}f(x,y)=f(x_0,y_0)$，即直接将该点函数值当作极限值，直接代入。\n\n例题：计算$\\lim\\limits_{(x,y)\\to(0,1)}\\dfrac{1-xy}{x^2+y^2}$。\n\n由于$(x,y)\\to(0,1)$时$x^2+y^2=1$，所以该点有意义，直接代入得1。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-4",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#转换一元函数极限",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "转换一元函数极限",
  "kind": "例题",
  "text": "\\leavevmode\n\n即换元法，要求式子十分特殊，$xy$是以同一种表达式出现，则可以作为因子，能够转换为一元函数极限。\n\n例题：计算$\\lim\\limits_{(x,y)\\to(0,1)}\\dfrac{\\arcsin xy}{e^{xy}-1}$。\n\n解：令$u=xy$，所以$(x,y)\\to(0,1)$时$u\\to0$，$=\\lim\\limits_{u\\to0}\\dfrac{\\arcsin u}{e^u-1}=\\lim\\limits_{u\\to0}\\dfrac{u}{u}=1$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-5",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#不等式放缩",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "不等式放缩",
  "kind": "例题",
  "text": "\\leavevmode\n\n使用不等式，如$x^2+y^2\\geqslant2xy$、$\\tan x\\geqslant x\\geqslant\\sin x$。\n\n为了方便计算一般式子都要带绝对值保证大于等于0。\n\n例题：$\\lim\\limits_{\\substack{x\\to+\\infty\\\\y\\to+\\infty}}\\left(\\dfrac{xy}{x^2+y^2}\\right)$。\n\n解：由于$xy$都是趋于正无穷，所以不用加绝对值，$0\\leqslant\\left(\\dfrac{xy}{x^2+y^2}\\right)^x\\leqslant\\left(\\dfrac{xy}{2xy}\\right)^x=\\left(\\dfrac{1}{2}\\right)^x\\to0$。\n\n所以极限值为0。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-6",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#极坐标替换",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "极坐标替换",
  "kind": "概念",
  "text": "\\leavevmode\n\n要求极限过程$(x,y)\\to(0,0)$，将二元函数极限转换为一元函数极限。\n\n使用极坐标替换时一定要先判断极限是否存在，否则会是错误的。（或者$\\rho$计算后被消掉，就证明极限会随着$\\theta$值变化而变化，则极限不存在）\n\n如果满足极限过程沿着任意路径趋向都是逼近0，比较分子分母幂次，如果是分子的幂次小于等于分母的幂次，则这个极限往往是不存在的。\n\n虽然极坐标替换比较好用，但是最好不要用。\n\n为什么极坐标替换可能是错的？\n\n因为多元函数极限是要求变量是沿着任意路径逼近某点极限值都存在，而使用极坐标代换实际上是固定死趋近路线为直线，所以不满足极限存在定义。但是这种任意路径是模糊的，所以存在一定的限制能使用该方法。\n\n如$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{x^3+y^3}{x^2+y}$，按照极坐标替换方式可以算出极限值为0，但是如果取$y=-x^2+x^3$时极限值为1。\n\n所以这个限制条件就是$\\theta$能在$[0,2\\pi)$中取到所有值。\n\n如上面错误的案例中，得到$\\lim\\limits_{\\rho\\to0}\\dfrac{r^2(\\cos^3\\theta+\\sin^3\\theta)}{r\\cos\\theta+\\sin\\theta}$。这里的$\\theta$是变动值，从而极限是无法求出的，所以不满足$\\theta$可以取任意值的条件。\n\n例题：计算$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{xy^2}{x^2+y^2}$。\n\n解：分子的幂次大于分母的幂次，则极限可能存在。\n\n令$x=\\rho\\cos\\theta$，$y=\\rho\\sin\\theta$，则$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{xy^2}{x^2+y^2}=\\lim\\limits_{\\rho\\to0}\\dfrac{\\rho^3\\cos\\theta\\sin^2\\theta}{\\rho^2}=\\lim\\limits_{\\rho\\to0}\\rho\\cos\\theta\\sin^2\\theta=0$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-12",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#积分法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "积分法",
  "kind": "例题",
  "text": "\\leavevmode\n\n即根据全微分计算出原函数。对偏导求积分还原$f(x)$。\n\n求原函数或求微分参数可以使用。\n\n例题：已知函数$z=f(x,y)$的全微分$\\textrm{d}z=2x\\textrm{d}x+\\sin y\\textrm{d}y$，$f(1,0)=2$，求$f(x,y)$。\n\n解：由全微分定义，可得$\\dfrac{\\partial f}{\\partial x}=2x$，$\\dfrac{\\partial f}{\\partial y}=\\sin y$。\n\n各自积分得到$f(x,y)=x^2-\\cos y+C$，代入$f(1,0)=1-1+C=2$，所以$C=2$，即$f(x,y)=x^2-\\cos y+2$。\n\n例题：设$(ax^2y^2-2xy^2)\\textrm{d}x+(2x^3y+bx^2y+1)\\textrm{d}y$是函数$f(x,y)$的全微分，求参数。\n\n解：由全微分定义可知，$f_x'=ax^2y^2-2xy^2$，$f_y'=2x^3y+bx^2y+1$。\n\n分别对其积分：$f(x,y)=\\int(ax^2y^2-2xy^2)\\textrm{d}x=\\int(2x^3y+bx^2y+1)\\textrm{d}y$。\n\n从而$\\dfrac{a}{3}x^3y^2-x^2y^2+C(y)=x^3y^2+\\dfrac{b}{2}x^2y^2+y+C(x)$，解得$a=3$，$b=-2$，$f(x)=x^3y^2-x^2y^2+y$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-13",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#偏导法",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "偏导法",
  "kind": "例题",
  "text": "\\leavevmode\n\n当原偏导很难求积分，就再次偏导。\n\n若函数连续，则利用偏导不变性$\\dfrac{\\partial f}{\\partial x\\partial y}=\\dfrac{\\partial f}{\\partial y\\partial x}$。\n\n可以求出参数。\n\n例题：已知$\\dfrac{(x+ay)\\textrm{d}x+y\\textrm{d}y}{(x+y)^2}$为全微分，求$a$。\n\n解：如果使用上面的积分法很难求出参数，采用积分法。\n\n设原函数$u(x,y)$，则$\\dfrac{\\partial u}{\\partial x}=\\dfrac{x+ay}{(x+y)^2}$，$\\dfrac{\\partial u}{\\partial y}=\\dfrac{y}{(x+y)^2}$。\n\n分别对其求偏导：$\\dfrac{\\partial^2u}{\\partial x\\partial y}=\\dfrac{a(x+y)^2-(x+ay)2(x+y)}{(x+y)^4}=\\dfrac{(a-2)x-ay}{(x+y)^3}$，$\\dfrac{\\partial u}{\\partial y}=\\dfrac{-2y}{(x+y)^3}$。\n\n所以两者相等，即$(a-2)x\\equiv(a-2)y$，所以$a=2$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-14",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#极限定义",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限定义",
  "kind": "概念",
  "text": "\\leavevmode\n\n全微分形式：$\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\dfrac{\\Delta z-(A\\Delta x+B\\Delta y)}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}$。\n\n要求$\\textrm{d}z|_{(a,b)}$，就要求$\\lim\\limits_{(x,y)\\to(a,b)}f(x,y)-f(a,b)=cx+dy+o(\\rho)$，$c$和$d$就是$\\textrm{d}x\\textrm{d}y$的参数。\n\n例题：连续函数$z=f(x,y)$满足$\\lim\\limits_{\\substack{x\\to0\\\\ y\\to1}}\\dfrac{f(x,y)-2x+y-2}{\\sqrt{x^2+(y-1)^2}}=0$，求$\\textrm{d}z|_{(0,1)}$。\n\n解：当$x\\to0$，$y\\to1$时$\\sqrt{x^2+(y-1)^2}\\to0$，又$\\lim\\limits_{\\substack{x\\to0\\\\ y\\to1}}\\dfrac{f(x,y)-2x+y-2}{\\sqrt{x^2+(y-1)^2}}=0$，$\\therefore\\lim\\limits_{\\substack{x\\to0\\\\ y\\to1}}f(x,y)-2x+y-2=0$。\n\n又$f(x,y)$连续，则$f(0,1)+1-2=0$，$f(0,1)=1$。将值代入，并按分子配方：\n\n$\\lim\\limits_{\\substack{x\\to0\\\\ y\\to1}}\\dfrac{f(x,y)-f(0,1)-2x+(y-1)}{\\sqrt{x^2+(y-1)^2}}=0$，即$f(x,y)-f(0,1)=2x-(y-1)+o(\\rho)$。\n\n根据全微分的定义偏导数就是其系数，$f_x'(0,1)=2$，$f_y'(0,1)=-1$。\n\n$\\therefore\\textrm{d}z|_{(0,1)}=2\\textrm{d}x-\\textrm{d}y$。\n\n例题：设$f(x,y)$在$(0,0)$处连续，且$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-a-bx-cy}{\\ln(1+x^2+y^2)}=1$，其中$a,b,c$为常数，求$\\textrm{d}f(x,y)|_{(0,0)}$。\n\n解：根据全微分的定义，分母应该是根号的形式，所以对于极限使用等价无穷小替换$\\ln(x+1)\\sim x$，$\\ln(1+x^2+y^2)=x^2+y^2$，$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-a-bx-cy}{x^2+y^2}=1$。\n\n又$(x,y)\\to0$时$x^2+y^2\\to0$，$\\therefore f(x,y)-a-bx-cy\\to0$。\n\n又$f(x,y)$在$(0,0)$处连续，$f(0,0)=a$。根据极限和无穷小的关系将其代回：\n\n$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{f(x,y)-f(0,0)-bx-cy}{x^2+y^2}=1+o(1)$。\n\n$\\therefore\\lim\\limits_{(x,y)\\to(0,0)}f(x,y)-f(0,0)-bx-cy=x^2+y^2+o(1)\\cdot(x^2+y^2)=o(\\rho)$。\n\n$\\therefore\\lim\\limits_{(x,y)\\to(0,0)}f(x,y)-f(0,0)=bx+cy+o(\\rho)$。\n\n即$f_x'(0,0)=b$，$f_y'(0,0)=c$。$\\textrm{d}f(x,y)|_{(0,0)}=b\\textrm{d}x+c\\textrm{d}y$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2-15",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#隐函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "隐函数",
  "kind": "例题",
  "text": "\\leavevmode\n\n二元隐函数求导公式：$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=-\\dfrac{F_x'}{F_y'}$。\n\n三元隐函数求导公式：$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x'}{F_z'}$，$\\dfrac{\\partial z}{\\partial y}=-\\dfrac{F_y'}{F_z'}$。\n\n\\subparagraph给定表达式 \\leavevmode\n\n表达式直接给出，所以直接对表达式进行偏导。\n\n例题：设$f(x,y,z)=e^x+y^2z$，其中$z=z(x,y)$由$x+y+z+xyz=0$确定，求$f_x'(0,1,-1)$。\n\n解：$f_x'(x,y,z)=e^x+y^2z_x'$。\n\n又$x+y+z+xyz=0$对$x$求导：$1+z_x'+yz+xyz_x'=0$，代入$(0,1,-1)$，$1+z_x'-1=0$，$z_x'=0$。代入$f_x'(x,y,z)=e^0=1$。\n\n\\subparagraph未定表达式 \\leavevmode\n\n表达式未直接给出，而是以$f(u,v)$的形式，此时求导要使用链式法则和隐函数法则。\n\n如果$uv$中不含有目标函数$z$则使用一般的链式求导法，如果$uv$中含有$z$则需要使用隐函数求导公式。\n\n由于$f$是未知的，所以一般$f(u,v)$对$u$求一阶导记为$f'_1$，$v$求一阶导记为$f'_2$，对$uv$各求导记为$f''_{12}$，$vu$各求导记为$f''_{21}$，对$u$求二阶导记为$f''_{11}$，$v$求二阶导记为$f''_{22}$。\n\n例题：已知$f\\left(\\dfrac{y}{x},\\dfrac{z}{x}\\right)=0$确定函数$z=z(x,y)$，$f(u,v)$可微，求$x\\dfrac{\\partial z}{\\partial x}+y\\dfrac{\\partial z}{\\partial y}$。\n\n解：如果$uv$中不含有$z$则直接使用链式法则，但是此时$v=\\dfrac{z}{x}$就不能直接使用链式法则了。\n\n$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x'}{F_z'}=-\\dfrac{-\\dfrac{y}{x^2}f_1'-\\dfrac{z}{x^2}f_2'}{\\dfrac{1}{x}f_2'}=\\dfrac{\\dfrac{y}{x}f_1'+\\dfrac{z}{x}f_2'}{f_2'}$，$\\dfrac{\\partial z}{\\partial y}=-\\dfrac{F_y'}{F_z'}=-\\dfrac{\\dfrac{1}{x}f_1'}{\\dfrac{1}{x}f_2'}=-\\dfrac{f_1'}{f_2'}$。\n\n$\\therefore x\\dfrac{\\partial z}{\\partial x}+y\\dfrac{\\partial z}{\\partial y}=\\dfrac{yf_1'+zf_2'-yf_1'}{f_2'}=z$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#无条件极值",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "无条件极值",
  "kind": "例题",
  "text": "#### 显函数\n\n首先对原式分别对$xy$求导令其为0，得到极值点。利用根的规则计算二阶微分判断点是否为极值点和为哪种极值点，最后得到极值。\n\n#### 隐函数\n\n首先对原式分别对$xy$求导，然后令$z_x'$、$z_y'$全部为0得到关系式，再把关系式带回原式得到可疑点。计算二阶微分判断点是否为极值点和为哪种极值点，最后得到极值。\n\n例题：已知对于$z=z(x,y)>0$由$x^2+y^2+z^2-2x-2y-4z-10=0$确定，求其极值。\n\n解：由于$x,y$具有对称性，所以分别求偏导得到：$\\dfrac{\\partial z}{\\partial x}=\\dfrac{1-x}{z-2}$，$\\dfrac{\\partial z}{\\partial y}=\\dfrac{1-y}{z-2}$。\n\n令偏导数等于0，则得到唯一驻点$(1,1)$。\n\n带入方程解的$(z-6)(z+2)=0$，解得$z(1,1)=6$（$z>0$）。\n\n为判断极值点，需要求二阶偏导。\n\n$\\dfrac{\\partial^2z}{\\partial x^2}=\\dfrac{-(z-2)-(1-x)\\dfrac{\\partial z}{\\partial x}}{(z-2)^2}$，所以带入$(1,1)$和$\\dfrac{\\partial z}{\\partial x}=0$，得到$A=-\\dfrac{1}{4}$。\n\n$\\dfrac{\\partial^2z}{\\partial x\\partial y}=\\dfrac{(x-1)\\dfrac{\\partial z}{\\partial y}}{(z-2)^2}$，同理得$B=0$。\n\n$\\dfrac{\\partial^2z}{\\partial y^2}=\\dfrac{-(z-2)-(1-y)\\dfrac{\\partial z}{\\partial y}}{(z-2)^2}$，同理得$C=-\\dfrac{1}{4}$。\n\n$\\Delta<0$且$A>0$，所以得到极大值6。\n\n#### 极限形式\n\n在求解选择题时常可利用满足全部题设条件的特例来确定正确的选项，是利用极限的充分必要条件来给出函数的一般表达式，然后进行分析极值情况。\n\n例题：已知$f(x,y)$在$(0,0)$某领域内连续，且$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{f(x,y)+4x^2-y^2}{x^4+x^2y^2+y^4}=1$，判断$(0,0)$是否未为函数极值点。\n\n解：即取$f(x,y)=-4x^2+y^2+x^4+x^2y^2+y^4$，求$f_x'(0,0)=f_y'(0,0)=0$，$f_{xx}''(0,0)=-8$，$f_{xy}''(0,0)=0$，$f_{yy}''(0,0)=2$，从而$(0,0)$是驻点，且$A=-8$、$B=0$、$C=2$，$\\Delta=-16<0$，所以不是极值点。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#有条件极值",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "有条件极值",
  "kind": "方法",
  "text": "与无条件极值一样，在边界就是显函数可以直接求，在区域内就是隐函数需要求出可疑点再计算可疑点的二阶导数值判断。\n\n#### 闭区域边界\n\n即使用拉格朗日乘数法。\n\n#### 闭区域内\n\n- 对原式$f(x,y)$分别对$x,y$求偏导并令为0得到区域内可疑点。\n\n- 使用拉格朗日乘数法对$f(x,y)$求出边界上可疑点。\n\n- 将所有可疑点代入原函数，计算出所有的值并进行比较。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#空间曲线的切线与法平面",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "空间曲线的切线与法平面",
  "kind": "例题",
  "text": "#### 参数方程\n\n设空间曲线$\\varGamma$由参数方程$\\left\\{\\begin{array}{l}\n    x=\\phi(t) \\\\\n    y=\\psi(t) \\\\\n    z=\\omega(t)\n\\end{array}\\right.$给出，其中$\\phi(t),\\psi(t),\\omega(t)$均可导，$P_0(x_0,y_0,z_0)$为$\\varOmega$上的点，且当$t=t_0$时，$\\phi'(t_0)$，$\\psi'(t_0)$，$\\omega'(t_0)$均不为0，则：\n\n- 曲线$\\varGamma$在点$P_0(x_0,y_0,z_0)$处的切向量为$\\vec{\\tau}=(\\phi'(t_0),\\psi'(t_0),\\omega'(t_0))$。\n\n- 曲线$\\varGamma$在点$P_0(x_0,y_0,z_0)$处的切线方程为$\\dfrac{x-x_0}{\\phi'(t_0)}=\\dfrac{y-y_0}{\\psi'(t_0)}=\\dfrac{z-z_0}{\\omega'(t_0)}$。\n\n- 曲线$\\varGamma$在点$P_0(x_0,y_0,z_0)$处的法平面（过$P_0$且与切线垂直的平面）方程为$\\phi'(t_0)(x-x_0)+\\psi'(t_0)(y-y_0)+\\omega'(t_0)(z-z_0)=0$。\n\n#### 交面式方程\n\n设空间曲线$\\varGamma$由交面方程$\\left\\{\\begin{array}{l}\n    F(x,y,z)=0 \\\\\n    G(x,y,z)=0\n\\end{array}\\right.$给出，则：\n\n- 曲线$\\varGamma$在点$P_0(x_0,y_0,z_0)$处的切向量为\n$\\vec{\\tau}=\\left(\\left\\vert\\begin{array}{cc}\n        F_y' & F_z' \\\\\n        G_y' & G_z'\n    \\end{array}\\right\\vert_{P_0},\\left\\vert\\begin{array}{ll}\n        F_z' & F_x' \\\\\n        G_z' & G_x'\n    \\end{array}\\right\\vert_{P_0},\\left\\vert\\begin{array}{ll}\n        F_x' & F_y' \\\\\n        G_x' & G_y'\n    \\end{array}\\right\\vert_{P_0}\\right)$。\n\n- 曲线$\\varGamma$在点$P_0(x_0,y_0,z_0)$处的切线方程为\n$\\dfrac{x-x_0}{\\left\\vert\\begin{array}{cc}\n        F_y' & F_z' \\\\\n        G_y' & G_z'\n    \\end{array}\\right\\vert_{P_0}},\\dfrac{y-y_0}{\\left\\vert\\begin{array}{ll}\n        F_z' & F_x' \\\\\n        G_z' & G_x'\n    \\end{array}\\right\\vert_{P_0}},\\dfrac{z-z_0}{\\left\\vert\\begin{array}{ll}\n        F_x' & F_y' \\\\\n        G_x' & G_y'\n    \\end{array}\\right\\vert_{P_0}}$。\n\n- 曲线$\\varGamma$在点$P_0(x_0,y_0,z_0)$处的法平面方程为\n$\\left\\vert\\begin{array}{cc}\n        F_y' & F_z' \\\\\n        G_y' & G_z'\n    \\end{array}\\right\\vert_{P_0}(x-x_0)+\\left\\vert\\begin{array}{ll}\n        F_z' & F_x' \\\\\n        G_z' & G_x'\n    \\end{array}\\right\\vert_{P_0}(y-y_0)+\\left\\vert\\begin{array}{ll}\n        F_x' & F_y' \\\\\n        G_x' & G_y'\n    \\end{array}\\right\\vert_{P_0}(z-z_0)=0$。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#空间曲面的切平面与法线",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "空间曲面的切平面与法线",
  "kind": "例题",
  "text": "#### 隐式\n\n设空间曲面$\\varSigma$由方程$F(x,y,z)=0$给出，$P_0(x_0,y_0,z_0)$是$\\varSigma$上的点，则：\n\n- 曲面$\\varSigma$在点$P_0(x_0,y_0,z_0)$处的法向量为$\\vec{n}=(F_x'(x_0,y_0,z_0),F_y'(x_0,y_0,z_0),$\n$F_z'(x_0,y_0,z_0))$且法线方程为$\\dfrac{x-x_0}{F_x'(x_0,y_0,z_0)}=\\dfrac{y-y_0}{F_y'(x_0,y_0,z_0)}=\\dfrac{z-z_0}{F_z'(x_0,y_0,z_0}$。\n\n- 曲面$\\varSigma$在点$P_0(x_0,y_0,z_0)$处的切平面方程为$F_x'(x_0,y_0,z_0)(x-x_0)+F_y'$\n$(x_0,y_0,z_0)(y-y_0)+F_z'(x_0,y_0,z_0)(z-z_0)=0$。\n\n#### 显式\n\n设空间曲面$\\varSigma$由方程$z=f(x,y)$给出，令$F(x,y,z)=f(x,y)-z$，假定法向量的方向向下，即其余$z$轴正向所成的角为钝角，即$z$为-1，则：\n\n- 曲面$\\varSigma$在点$P_0(x_0,y_0,z_0)$处的法向量为$\\vec{n}=(f_x'(x_0,y_0),f_y'(x_0,y_0),-1)$，且法线方程为$\\dfrac{x-x_0}{f_x'(x_0,y_0)}=\\dfrac{y-y_0}{f_y'(x_0,y_0)}=\\dfrac{z-z_0}{-1}$。\n\n- 曲面$\\varSigma$在点$P_0(x_0,y_0,z_0)$处的切平面方程为$f_x'(x_0,y_0)(x-x_0)+f_y'(x_0,y_0)$\n$(y-y_0)-(z-z_0)=0$。\n\n若是反之成锐角，则将里面所有的-1都换成1。\n\n若用$\\alpha$，$\\beta$，$\\gamma$表示曲面$z=f(x,y)$在点$(x_0,y_0,z_0)$处的法向量的方向角，并这里假定法向量的方向是向上的，即其余$z$轴正向所成的角$\\gamma$为锐角，则法向量方向余弦为$\\cos\\alpha=\\dfrac{-f_x}{\\sqrt{1+f_x^2+f_y^2}}$，$\\cos\\beta=\\dfrac{-f_y}{\\sqrt{1+f_x^2+f_y^2}}$，$\\cos\\gamma=\\dfrac{1}{\\sqrt{1+f_x^2+f_y^2}}$，其中$f_x=f_x'(x_0,y_0)$，$f_y=f_y'(x_0,y_0)$。\n\n例题：设直线$L\\left\\{\\begin{array}{l}\n    x+y+b=0 \\\\\n    x+ay-z-3=0\n\\end{array}\\right.$在平面$\\pi$上，而平面$\\pi$与曲面$z=x^2+y^2$相切于$(1,-2,5)$，求$ab$的值。\n\n解：$L$在$\\pi$上且与曲面相切，则$\\pi$为$L$的切平面。设曲面方程$F(x,y,z)=x^2+y^2-z$。\n\n曲面法向量为$\\vec{n}=\\{F_x',F_y',F_z'\\}=\\{2x,2y,-1\\}$，代入$(1,-2,5)$，则法向量为$\\{2,-4,-1\\}$。\n\n又点法式：$\\pi:2(x-1)-4(y+2)-(z-5)=0$，即$2x-4y-z-5=0$。\n\n联立直线方程，得到：$(5+a)x+4b+ab-2=0$，又$x$是任意的。\n\n解得$a=-5,b=-2$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#积分转换",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "积分转换",
  "kind": "例题",
  "text": "#### 交换积分次序\n\n#### 直角坐标系\n \\leavevmode\n\n例题：交换积分次序$\\int_0^1\\textrm{d}x\\int_0^{x^2}f(x,y)\\,\\textrm{d}y+\\int_1^3\\textrm{d}x\\int_0^{\\frac{1}{2}(3-x)}f(x,y)\\,\\textrm{d}y$。\n\n解：已知积分区域分为两个部分。将$X$型变为$Y$型。画出图形可以知道$y\\in(0,1)$，$x$的上下限由$y=x^2$和$y=\\dfrac{1}{2}(3-x)$转化为$\\sqrt{y}$和$3-2y$。\n\n所以转换为$\\int_0^1\\textrm{d}y\\int_{\\sqrt{y}}^{3-2y}f(x,y)\\,\\textrm{d}x$。\n\n#### 极坐标系\n \\leavevmode\n\n例题：对$\\int_{-\\frac{\\pi}{4}}^{\\frac{\\pi}{2}}\\textrm{d}\\theta\\int_0^{2\\cos\\theta}f(r\\cos\\theta,r\\sin\\theta)r\\,\\textrm{d}r$交换积分次序。\n\n解：对于极坐标的积分次序交换需要利用直角坐标系来画图了解，特别是对于$r$的上下限。\n\n对$\\theta=\\dfrac{\\pi}{2}$变为$y$轴，$\\theta=-\\dfrac{\\pi}{4}$变为$y=-x$。\n\n对$r=2\\cos\\theta$变为$xy$的表达式，$r^2=2\\cos\\theta$，即$x^2+y^2=2x$，$(x-1)^2+y^2=1$。\n\n所以所得到的$\\sigma$为一个圆割去一个扇形。\n\n 交换积分次序后就需要以一个长度以极点为圆心做圆，切割$\\sigma$。\n\n 由$\\sigma$可知取长度$\\sqrt{2}$可以切分。\n\n 所以$\\sigma$可以分为左边的$\\sigma_1$和右边的$\\sigma_2$。\n\n$\\sigma_1$的$r\\in[0,\\sqrt{2}]$，$\\sigma_2$的$r\\in[\\sqrt{2},2]$。\n\n$\\sigma_1$的$\\theta$下限是$y=-x$这条边，即$\\theta=-\\dfrac{\\pi}{4}$，上限是$r=2\\cos\\theta$这个圆，则$\\theta=\\arccos\\dfrac{r}{2}$。\n\n$\\sigma_2$的$\\theta$界限都是是$r=2\\cos\\theta$这个圆，此时$r>0$恒成立，但是上限是上半部分$\\theta>0$，而下限是下半部分$\\theta<0$，即上限$\\theta=\\arccos\\dfrac{r}{2}$，所以下限为$\\theta=-\\arccos\\dfrac{r}{2}$。\n\n综上交换积分次序结果为：\n\n$\\int_0^{\\sqrt{2}}r\\,\\textrm{d}r\\int_{-\\frac{\\pi}{4}}^{\\arccos\\frac{r}{2}}f(r\\cos\\theta,r\\sin\\theta)\\textrm{d}\\theta+\\int_{\\sqrt{2}}^2r\\,\\textrm{d}r\\int_{-\\arccos\\frac{r}{2}}^{\\arccos\\frac{r}{2}}f(r\\cos\\theta,r\\sin\\theta)\\textrm{d}\\theta$。\n\n#### 极直互化\n\n例题：将$I=\\int_0^{\\frac{\\sqrt{2}}{2}R}e^{-y^2}\\textrm{d}y\\int_0^ye^{-x^2}\\,\\textrm{d}x+\\int_{\\frac{\\sqrt{2}}{2}R}^Re^{-y^2}\\,\\textrm{d}y\\int_0^{\\sqrt{R^2-y^2}}e^{-x^2}\\,\\textrm{d}x$转换为极坐标系并计算结果。\n\n解：首先根据积分上下限得到积分区域$D=\\left\\{0\\leqslant y\\leqslant\\dfrac{\\sqrt{2}}{2}R,0\\leqslant x\\leqslant y\\right\\}\\cup\\left\\{\\dfrac{\\sqrt{2}}{2}R\\leqslant y\\leqslant R,0\\leqslant x\\leqslant\\sqrt{R^2-y^2}\\right\\}$，$D$为一个八分之一圆的扇形。\n\n根据$x=r\\cos\\theta$，$y=r\\sin\\theta$替换得到$D=\\left\\{(x,y)\\bigg|0\\leqslant r\\leqslant R,\\dfrac{\\pi}{4}\\leqslant\\theta\\leqslant\\dfrac{\\pi}{2}\\right\\}$。\n\n又$e^{-y^2}\\cdot e^{-x^2}=e^{-(x^2+y^2)}=e^{-r^2}$。\n\n$\\therefore I=\\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}}\\textrm{d}\\theta\\int_0^Re^{-r^2}r\\,\\textrm{d}r$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分计算",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分计算",
  "kind": "方法",
  "text": "二重积分若是累次积分形式出现，则计算可以使用上面两种方法简便运算。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#交换积分次序",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "交换积分次序",
  "kind": "例题",
  "text": "主要用于直角坐标系。\n\n当按照当前的积分次序无法算出时需要更换积分次序。主要是看$f(x,y)$是对$x$先积分更简单还是对$y$先积分更简单。\n\n例题：求$\\int_0^1\\textrm{d}y\\int_{\\arcsin y}^{\\pi-\\arcsin y}\\cos^2x\\,\\textrm{d}x$。\n\n解：首先直接对这个式子直接计算，$\\cos^2x=\\dfrac{1}{2}(1+\\cos2x)$，原式$=\\dfrac{1}{2}\\int_0^1(\\pi-2y-\\arcsin y)\\textrm{d}y$。根本无法解出。\n\n考虑交换积分次序，首先求$\\sigma$，$y\\in[0,1]$，$x\\in[\\arcsin y,\\pi-\\arcsin y]$，则$\\sin x=y$，$y=\\sin(\\pi-x)=\\sin x$即$x\\in[0,\\sin x]$。\n\n将积分区域换成$X$型：$x\\in[0,\\pi]$，$y\\in[0,\\sin x]$。\n\n$\\int_0^\\pi\\cos^2x\\,\\textrm{d}x\\int_0^{\\sin x}\\textrm{d}y=\\int_0^\\pi\\cos^2x\\sin x\\,\\textrm{d}x=-\\int_0^\\pi\\cos^2x\\,\\textrm{d}(\\cos x)=-\\dfrac{\\cos^3x}{3}\\bigg|_0^\\pi\\\\=\\dfrac{2}{3}$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#积分性质",
  "subject": "gaoshu",
  "topic": "积分性质",
  "title": "积分性质",
  "kind": "定理",
  "text": "直角坐标系和极坐标系都可以使用。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#直角坐标系",
  "subject": "gaoshu",
  "topic": "直角坐标系",
  "title": "直角坐标系",
  "kind": "概念",
  "text": "\\leavevmode\n\n主要是一般对称性（积分区域关于$x$轴对称若$y$奇则为0，关于$y$轴对称若$x$奇则为0）和轮换对称性（积分区域关于$y=x$对称则$xy$可以互换）。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-4",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#极坐标系",
  "subject": "gaoshu",
  "topic": "极坐标系",
  "title": "极坐标系",
  "kind": "例题",
  "text": "\\leavevmode\n\n主要就是指一般对称性（画图可知）。\n\n例题：求曲线$r^2=2ax^2\\cos2\\theta$（$a>0$）所围图形面积。\n\n解：即求$\\iint\\limits_D\\textrm{d}x\\textrm{d}y$。重点就是求$D$，已知$r$的表达式，要求$\\theta$的取值范围。\n\n又$r^2>0$，$x^2>0$，$a>0$，所以$\\cos2\\theta\\geqslant0$，$-\\dfrac{\\pi}{4}\\leqslant\\theta\\leqslant\\dfrac{\\pi}{4}$，$\\dfrac{3\\pi}{4}\\leqslant\\theta\\leqslant\\dfrac{5\\pi}{4}$。\n\n由对称性，所以$=4\\int_0^{\\frac{\\pi}{4}}\\textrm{d}\\theta\\int_0^{a\\sqrt{2\\cos2\\theta}}r\\,\\textrm{d}r=4a^2\\int_0^{\\frac{\\pi}{4}}\\cos2\\theta\\,\\textrm{d}\\theta=2a^2$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-5",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#切分区域",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "切分区域",
  "kind": "例题",
  "text": "主要用于直角坐标系转为极坐标系。\n\n将不规则的区域划分为圆域。\n\n例题：设$D=\\{(x,y)|0\\leqslant x\\leqslant1,0\\leqslant y\\leqslant1\\}$，求$\\displaystyle{\\iint\\limits_D\\dfrac{\\textrm{d}x\\textrm{d}y}{\\sqrt{x^2+y^2}}}$。\n\n解：由$f(x,y)=\\dfrac{1}{\\sqrt{x^2+y^2}}$，知道可以使用极坐标系来表示，但是$D$是一个正方形，无法用圆来简单表示。\n\n又$D$可以从$y=x$切割为两个部分，所以令下三角形为$D_1$，$\\displaystyle{\\iint\\limits_D\\dfrac{\\textrm{d}x\\textrm{d}y}{\\sqrt{x^2+y^2}}}=2\\displaystyle{\\iint\\limits_{D_1}\\dfrac{\\textrm{d}x\\textrm{d}y}{\\sqrt{x^2+y^2}}}$。\n\n所以$0\\leqslant y$和$y=x$可以确定$\\theta\\in\\left[0,\\dfrac{\\pi}{4}\\right]$，$0\\leqslant x\\leqslant1$可以确定$r$上界为$x=1$，即$r\\cos\\theta=1$，即$r=\\dfrac{1}{\\cos\\theta}$，确定$r\\in\\left[0,\\dfrac{1}{\\cos\\theta}\\right]$。\n\n所以$=2\\int_0^{\\frac{\\pi}{4}}\\textrm{d}\\theta\\int_0^{\\frac{1}{\\cos\\theta}}\\textrm{d}r=2\\int_0^{\\frac{\\pi}{4}}\\dfrac{\\textrm{d}\\theta}{\\cos\\theta}=2\\ln(\\sec\\theta+\\tan\\theta)|_0^{\\frac{\\pi}{4}}=2\\ln(1+\\sqrt{2})$。\n\n即对二重积分求导，需要将二重积分化为一重积分。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-6",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#坐标轴移动",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "坐标轴移动",
  "kind": "例题",
  "text": "主要用于直角坐标系转为极坐标系。\n\n面对$D$为一个圆的部分区域，而圆心不在原点，则可以坐标轴移动让圆心到原点上，从而方便积分，本质就是换元。\n\n例题：设积分区域$D=\\{(x,y)\\vert x^2+y^2\\leqslant2x+2y\\}$，求$\\iint_D(x^2+xy+y^2)\\textrm{d}\\sigma$。\n\n解：$D$为$(x-1)^2+(y-1)^2\\leqslant\\sqrt{2}$，即圆心在$(1,1)$的圆，极坐标系无法表示，所以必须平移坐标轴。\n\n令$x-1=u$，$y-1=v$，$x=u+1$，$y=v+1$，此时$D'=\\{(u,v)|u^2+v^2\\leqslant2\\}$。\n\n$\\iint\\limits_D(x^2+xy+y^2)\\textrm{d}\\sigma=\\iint\\limits_{D'}[(u+1)^2+(u+1)(v+1)+(v+1)^2]\\textrm{d}u\\textrm{d}v=\\iint\\limits_{D'}[u^2+uv+v^2+3(u+v)+3]\\textrm{d}u\\textrm{d}v=\\iint\\limits_{D'}(u^2+v^2)\\textrm{d}u\\textrm{d}v+\\iint\\limits_{D'}[uv+3(u+v)]\\textrm{d}u\\textrm{d}v+3\\iint_{D'}\\textrm{d}u\\textrm{d}v$。\n\n由于$uv+3(u+v)$是关于$u$或$v$的奇函数，且$D'$关于$uv$轴都对称，所以积分值为0。且根据二重积分的几何意义$\\iint\\limits_{D'}\\textrm{d}u\\textrm{d}v=S_{D'}=2\\pi$。\n\n所以$\\iint_D(x^2+xy+y^2)\\textrm{d}\\sigma=\\iint\\limits_{D'}(u^2+v^2)\\textrm{d}u\\textrm{d}v+6\\pi$。\n\n转换为极坐标系，$u=r\\cos\\theta$，$v=r\\sin\\theta$，则$D'=\\{(r,\\theta)|0\\leqslant\\theta\\leqslant2\\pi,0\\leqslant r\\leqslant\\sqrt{2}\\}$。\n\n$\\iint\\limits_{D'}(u^2+v^2)\\textrm{d}u\\textrm{d}v=\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^{\\sqrt{2}}r^3\\,\\textrm{d}r=2\\pi\\int_0^{\\sqrt{2}}r^3\\,\\textrm{d}r=\\dfrac{\\pi}{2}(\\sqrt{2})^4=2\\pi$。\n\n所以原式$=2\\pi+6\\pi=8\\pi$。\n\n若积分区域$\\sigma$关于$x=k_1$或$y=k_2$对称，则当$f(x,y)$含有$x-k_1$或$y-k_2$因式时重积分值为0。\n\n例题：设$D:x^2+y^2\\leqslant2x+2y$，求$\\iint\\limits_Dxy\\,\\textrm{d}x\\textrm{d}y$。\n\n解：本题目使用直角坐标系和极坐标系都不好做。所以需要利用积分性质，对$D$进行平移等操作。\n\n利用平移，由于$D:(x-1)^2+(y-1)^2=2$，令$x=1+r\\cos\\theta$，$y=1+r\\sin\\theta$，则利用极坐标，$r\\in[0,\\sqrt{2}]$，$\\theta\\in[0,2\\pi]$，$=\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^{\\sqrt{2}}((1+r\\cos\\theta)(1+r\\sin\\theta)r)\\textrm{d}r=\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^{\\sqrt{2}}(1+r\\sin\\theta+r\\cos\\theta+r^2\\sin\\theta\\cos\\theta)r\\,\\textrm{d}r$，又将$\\sin\\theta$和$\\cos\\theta$对$\\theta$在$[0,2\\pi]$进行积分全部为0，所以直接把后面的全消掉，变为$\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^{\\sqrt{2}}r\\,\\textrm{d}r=2\\pi$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-7",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#极限化为二重积分",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "极限化为二重积分",
  "kind": "例题",
  "text": "类似极限转换为定积分，有$\\lim\\limits_{n\\to\\infty}\\dfrac{1}{n^2}\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}f\\left(\\dfrac{i}{n},\\dfrac{j}{n}\\right)=\\int_0^1\\textrm{d}x\\int_0^1f(x,y)\\,\\textrm{d}y$：\n\n- 先提出$\\dfrac{1}{n^2}$。\n\n- 凑出$\\dfrac{i}{n}$和$\\dfrac{j}{n}$。\n\n- 写出$\\int_0^1\\textrm{d}x$、$\\int_0^1f(x,y)\\,\\textrm{d}y$，其中$\\dfrac{1}{n^2}$没有了，将所有$\\dfrac{i}{n}$换为$x$，$\\dfrac{j}{n}$换为$y$。\n\n例题：求$I=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^n\\dfrac{1}{\\left(1+\\dfrac{i}{n}\\right)(n^2+j^2)}$。\n\n解：首先提出$\\dfrac{1}{n^2}$，正好在分母右边等式中$=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^n\\dfrac{1}{\\left(1+\\dfrac{i}{n}\\right)(1+\\dfrac{j^2}{n^2})}\\dfrac{1}{n^2}$。\n\n已完全化为$\\dfrac{i}{n}$和$\\dfrac{j}{n}$，所以$=\\displaystyle{\\int_0^1\\dfrac{1}{1+x}\\textrm{d}x\\int_0^1\\dfrac{1}{1+y^2}\\textrm{d}y}$。\n\n$=\\ln(1+x)\\vert_0^1\\arctan y\\vert_0^1=\\dfrac{\\pi}{4}\\ln2$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-8",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分极限",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分极限",
  "kind": "例题",
  "text": "即对存在二重积分的式子求极限。当对二重积分求极限时基本上都需要使用洛必达法则对积分求导。\n\n令中间的定积分为$g(x)$，并记住$(\\int_{f(x)}^{g(x)}h(t)\\,\\textrm{d}t)'=(g'(x)-f'(x))h(x)$。上下限最好换为$x$和$0$。\n\n例题：求$\\lim\\limits_{t\\to0^+}\\dfrac{1}{t^6}\\int_0^t\\textrm{d}x\\int_x^t\\sin(xy)^2\\textrm{d}y$。\n\n解：这个式子求极限必然使用洛必达法则，而$\\int_0^t\\textrm{d}x\\int_x^t\\sin(xy)^2\\textrm{d}y$里面那层定积分的上下限不规整，所以更换积分次序变成$\\int_0^t\\textrm{d}y\\int_0^x\\sin(xy)^2\\textrm{d}x$。\n\n对其求导$\\int_0^t[\\int_0^x\\sin(xy)^2\\textrm{d}x]\\textrm{d}y$，由于该层积分变量为$y$，令$\\int_0^x\\sin(xy)^2\\textrm{d}x=g(y)$，所以$=\\int_0^tg(y)\\,\\textrm{d}y$，对其求导得$g(t)$，里面的$y$全部用$t$替换$=\\int_0^x\\sin(xt)^2\\textrm{d}x$。\n\n$=\\lim\\limits_{t\\to0^+}\\dfrac{\\int_0^t\\textrm{d}x\\int_x^t\\sin(xy)^2\\textrm{d}y}{t^6}=\\lim\\limits_{t\\to0^+}\\dfrac{\\int_0^t\\sin(xt)^2\\textrm{d}x}{6t^5}=\\lim\\limits_{t\\to0^+}\\dfrac{\\int_0^t\\sin(xt)^2\\textrm{d}(xt)}{6t^6}$。\n\n由于$x$和$t$都是变量，所以令$xt=u$，$x=\\dfrac{u}{t}$，$u\\in(0,t^2)$，$=\\lim\\limits_{t\\to0^+}\\dfrac{\\int_0^{t^2}\\sin u^2\\textrm{d}u}{6t^6}=\\lim\\limits_{t\\to0^+}\\dfrac{2t\\sin t^4}{36t^5}=\\lim\\limits_{t\\to0^+}\\dfrac{t^5}{18t^5}=\\dfrac{1}{18}$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-9",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#广义极坐标系",
  "subject": "gaoshu",
  "topic": "行列式",
  "title": "广义极坐标系",
  "kind": "例题",
  "text": "广义极坐标系是对极坐标系的延伸，极坐标系是广义坐标系的特例。极坐标系是基于直线和圆周进行积分，而广义极坐标系可以对圆锥曲线进行积分。\n\n当对面积为非圆形进行积分时可以使用广义极坐标系。\n\n$\\iint\\limits_{D_1}f(x,y)\\,\\textrm{d}x\\textrm{d}y$，$x=g(u,v)$，$y=h(u,v)$，换元为$\\iint\\limits_{D_2}f(g(u,v),h(u,v))\\vert J\\vert\\,\\textrm{d}u\\textrm{d}v$，$J$为雅可比行列式，可以看作代表$(x,y)$坐标系的面积微元和$(u,v)$坐标系的面积微元的比率：\n\n$J=\\left[\\begin{array}{cc}\n    \\dfrac{\\partial x}{\\partial u} & \\dfrac{\\partial x}{\\partial v} \\\\\n    \\dfrac{\\partial y}{\\partial u} & \\dfrac{\\partial y}{\\partial v}\n\\end{array}\\right]$。\n\n例题：设$D:\\dfrac{x^2}{a}+\\dfrac{y^2}{b}\\leqslant1$，求$\\iint\\limits_Dy^2\\,\\textrm{d}x\\textrm{d}y$。\n\n解：令$x=ar\\cos\\theta$，$y=br\\sin\\theta$，所以$D'$为$0\\leqslant r\\leqslant 1$，$0\\leqslant\\theta\\leqslant2\\pi$。\n\n变换雅可比行列式$J=\\dfrac{\\partial(x,y)}{\\partial(r,\\theta)}=\\left\\vert\\begin{array}{cc}\n    \\dfrac{\\partial x}{\\partial r} & \\dfrac{\\partial x}{\\partial\\theta} \\\\\n    \\dfrac{\\partial y}{\\partial r} & \\dfrac{\\partial y}{\\partial\\theta}\n\\end{array}\\right\\vert=\\left\\vert\\begin{array}{cc}\n    a\\cos\\theta & -ar\\sin\\theta \\\\\n    b\\sin\\theta & br\\cos\\theta\n\\end{array}\\right\\vert=abr$。\n\n所以$I=\\iint\\limits_{D'}(br\\sin\\theta)^2\\vert J\\vert\\,\\textrm{d}r\\textrm{d}\\theta=\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^1b^2r^2\\sin^2\\theta\\cdot abr\\,\\textrm{d}r=\\dfrac{\\pi ab^3}{4}$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-3",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分等式",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分等式",
  "kind": "例题",
  "text": "#### 函数\n\n例题：设$f(x,y)$为连续函数，且$f(x,y)=\\dfrac{1}{\\pi}\\sqrt{x^2+y^2}\\iint\\limits_{x^2+y^2\\leqslant1}f(x,y)\\,\\textrm{d}\\sigma+y^2$，求$f(x,y)$。\n\n解：$\\because f(x,y)$为连续函数，所以其在区间上可积且是一个常数。\n\n令$\\iint\\limits_{x^2+y^2\\leqslant1}f(x,y)\\,\\textrm{d}\\sigma=A$。对$f(x,y)=\\dfrac{A}{\\pi}\\sqrt{x^2+y^2}+y^2$两边积分：\n\n$A=\\dfrac{A}{\\pi}\\iint\\limits_{x^2+y^2\\leqslant1}\\sqrt{x^2+y^2}\\,\\textrm{d}\\sigma+\\iint\\limits_{x^2+y^2\\leqslant1}y^2\\,\\textrm{d}\\sigma$，令$x=r\\cos\\theta$，$y=r\\sin\\theta$：\n\n$A=\\dfrac{A}{\\pi}\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^1r^2\\,\\textrm{d}r+\\int_0^{2\\pi}\\sin^2\\theta\\textrm{d}\\theta\\int_0^1r^3\\,\\textrm{d}r=\\dfrac{2A}{3}+\\dfrac{\\pi}{4}$。$A=\\dfrac{3}{4}\\pi$。\n\n则代入原式$f(x,y)=\\dfrac{3}{4}\\sqrt{x^2+y^2}+y^2$。\n\n#### 极限\n\n例题：设$g(x)$有连续的导数，且$g(0)=0$，$g'(0)=a\\neq0$，$f(x,y)$在$(0,0)$的某邻域内连续，求$\\lim\\limits_{r\\to0^+}\\dfrac{\\iint\\limits_{x^2+y^2\\leqslant r^2}f(x,y)\\,\\textrm{d}x\\textrm{d}y}{g(r^2)}$。\n\n解：已知对于这个积分式子中$f(x)$和$g(x)$都是未定式，不可能求出具体的值，所以不能再用二重积分直接计算。\n\n面对这种未定式我们希望把这个式子变成我们已知的式子，也应该与$r$相关。此时我们可以想到二重积分中值定理。\n\n根据二重积分中值定理$\\iint\\limits_{x^2+y^2\\leqslant r^2}f(x,y)\\,\\textrm{d}x\\textrm{d}y=\\pi r^2f(\\xi,\\eta)$，其中$(\\xi,\\eta)$为圆域$x^2+y^2\\leqslant r^2$上的点，所以$\\lim\\limits_{r\\to0^+}f(\\xi,\\eta)=f(0,0)$。\n\n$=\\lim\\limits_{r\\to0^+}\\dfrac{\\pi r^2f(\\xi,\\eta)}{g(r^2)}=\\lim\\limits_{r\\to0^+}\\dfrac{\\pi f(0,0)2r}{2rg'(r^2)}=\\lim\\limits_{r\\to0^+}\\dfrac{\\pi f(0,0)}{g'(r^2)}=\\dfrac{\\pi f(0,0)}{g'(0)}=\\dfrac{\\pi f(0,0)}{a}$。\n\n#### 求导",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-4",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分不等式",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分不等式",
  "kind": "例题",
  "text": "即对二重积分进行对比。\n\n#### 同积分域\n\n同一积分域上二重积分大小的比较，只要比较在该区间被积函数值的大小。\n\n#### 同积分函数\n\n同一积分函数上二重积分大小的比较，要比较函数域的大小，也要注意在函数域上被积函数的符号。\n\n例题：设积分区域$D_1=\\{(x,y)|x^2+y^2\\leqslant1\\}$、$D_2=\\{(x,y)|x^2+y^2\\leqslant2\\}$、$D_3=\\left\\{(x,y)|\\dfrac{1}{2}x^2+y^2\\leqslant1\\right\\}$、$D_4=\\left\\{(x,y)|x^2+\\dfrac{1}{2}y^2\\leqslant1\\right\\}$。\n记$I_i=\\iint\\limits_{D_i}\\left[1-\\left(x^2+\\dfrac{1}{2}y^2\\right)\\right]\\textrm{d}\\sigma$（$i=1,2,3,4$），求$\\max\\{I_1,I_2,I_3,I_4\\}$。\n\n解：已知$D_1$、$D_2$分别为半径1和$\\sqrt{2}$的圆，而$D_3$、$D_4$分别为横着和竖着的椭圆。可以画出图像。\n\n被积函数$f(x,y)=1-\\left(x^2+\\dfrac{1}{2}y^2\\right)$为连续函数，只有在$D_4$上才能保证完全为正，以外的地方为负值。\n\n所以$D_1\\subset D_4$，所以$I_1<D_4$。对于$D_2$更大，$D_4\\subset D_2$，但是多余的左右部分是负值，积分值会在$D_4$的基础上减去这部分的值，同理$D_3$和$D_4$一个是横的椭圆一个是竖的椭圆，其积分值只有中间交叉的部分，还要减去两边多余的部分。\n\n所以$I_4$最大。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-5",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#一重积分化二重积分",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "一重积分化二重积分",
  "kind": "例题",
  "text": "对于一重积分的计算或证明可能比较有难度，如两个关于$x$的函数的一重积分乘积计算，可以将其中一个$x$当作$y$，从而将一重积分的乘积变为二重积分。\n\n#### 乘积化不等式\n\n例题：$f(x)$为恒大于0的连续函数，证明$\\displaystyle{\\int_a^bf(x)\\,\\textrm{d}x\\cdot\\int_a^b\\dfrac{1}{f(x)}\\textrm{d}x\\geqslant(b-a)^2}$。\n\n解：首先观察这个式子，右边是积分上下限的差的乘积，左边是两个积分的乘积，看上去貌似没什么关系，而且积分式子给出的是一个未定式$f(x)$，所以不能直接求左边值再比较大小，他们之间一定存在着某种关系。\n\n式子左边的两个函数互为倒数，所以应该要尝试将这两个式子乘在一起来利用基本不等式计算，即将一重积分乘积变为二重积分。\n\n对于一重积分而言只是一个自变量，对于二重积分而言就变成了两个自变量，需要令其中一个$f(x)$变为$y$，所以$xy$的积分区域都是一样的$[a,b]$，所以设$D=\\{(x,y)\\vert a\\leqslant x\\leqslant b,a\\leqslant y\\leqslant b\\}$。\n\n$I=\\displaystyle{\\int_a^bf(x)\\,\\textrm{d}x\\cdot\\int_a^b\\dfrac{1}{f(x)}\\textrm{d}x}=\\int_a^bf(x)\\,\\textrm{d}x\\cdot\\int_a^b\\dfrac{1}{f(y)}\\textrm{d}y=\\iint\\limits_D\\dfrac{f(x)}{f(y)}\\textrm{d}x\\textrm{d}y$。\n\n$I=\\displaystyle{\\int_a^bf(x)\\,\\textrm{d}x\\cdot\\int_a^b\\dfrac{1}{f(x)}\\textrm{d}x}=\\int_a^bf(y)\\,\\textrm{d}y\\cdot\\int_a^b\\dfrac{1}{f(x)}\\textrm{d}x=\\iint\\limits_D\\dfrac{f(y)}{f(x)}\\textrm{d}x\\textrm{d}y$。\n\n$\\therefore I=\\displaystyle{\\dfrac{1}{2}\\left[\\iint\\limits_D\\left[\\dfrac{f(x)}{f(y)}+\\dfrac{f(y)}{f(x)}\\right]\\textrm{d}x\\textrm{d}y\\right]\\geqslant\\dfrac{1}{2}\\iint\\limits_D2\\sqrt{\\dfrac{f(x)}{f(y)}\\cdot\\dfrac{f(y)}{f(x)}}\\textrm{d}x\\textrm{d}y=}\\\\\\displaystyle{\\dfrac{1}{2}\\iint\\limits_D2\\textrm{d}x\\textrm{d}y}=(b-a)^2$。\n\n#### 乘积简化计算\n\n例题：求$\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x$。\n\n解：对于这个一重积分首先看到$e^{x^2}$，肯定会想到将其幂次降低。使用分部积分法对$e^{e^2}$求导这个幂次不会降低，使用换元法$x=\\sqrt{t}$会得到$\\dfrac{1}{\\sqrt{t}}$从而无法处理，所以这些都不能计算，那么该怎么办？\n\n看到$x^2$就能想到$x^2+y^2$的形式，这样就是一个极坐标系的二重积分，所以尝试将一重积分变成二重积分，即再乘一个以$y$为自变量的原式。\n\n设$I=\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x$，显然$I>0$，将$x$换成$y$：\n\n$I^2=\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x\\cdot\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x=\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x\\cdot\\int_0^{+\\infty}e^{-y^2}\\,\\textrm{d}y$\n\n$=\\displaystyle{\\iint\\limits_{\\substack{0\\leqslant x\\leqslant+\\infty\\\\0\\leqslant y\\leqslant+\\infty}}e^{-(x^2+y^2)}\\,\\textrm{d}x\\textrm{d}y}$，令$x=r\\cos\\theta$，$y=r\\sin\\theta$：\n\n$=\\displaystyle{\\int_0^\\frac{\\pi}{2}\\textrm{d}\\theta\\int_0^{+\\infty}e^{-r^2}r\\,\\textrm{d}r=\\dfrac{\\pi}{2}\\left(-\\dfrac{1}{2}\\right)\\int_0^{+\\infty}e^{-r^2}\\,\\textrm{d}(-r^2)=-\\dfrac{\\pi}{4}e^{-r^2}\\bigg\\vert_0^{+\\infty}}=\\dfrac{\\pi}{4}$。\n\n$\\therefore I=\\dfrac{\\sqrt{\\pi}}{2}$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-6",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分应用",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分应用",
  "kind": "方法",
  "text": "#### 体积\n\n#### 形心公式\n\n直角坐标系和极坐标系的形心公式都是一样的，使用极坐标系可以转换。\n\n例题：求曲线$ay=x^2$与$x+y=2a$所围平面区域$D$的形心坐标。\n\n解：根据表达式可知有两个交点$(-2a,4a)$、$(a,a)$，形心公式：\n\n$\\overline{x}=\\dfrac{\\iint\\limits_Dx\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_{-2a}^ax\\,\\textrm{d}x\\int_{\\frac{x^2}{a}}^{-x+2a}\\textrm{d}y}{\\int_{-2a}^a\\,\\textrm{d}x\\int_{\\frac{x^2}{a}}^{-x+2a}\\textrm{d}y}=\\dfrac{\\int_{-2a}^a(-\\dfrac{x^3}{a}-x^2+2ax)\\textrm{d}x}{\\int_{-2a}^a(-\\dfrac{x^2}{a}-x+2a)\\textrm{d}x}=-\\dfrac{1}{2}a$\n\n$\\overline{y}=\\dfrac{\\iint\\limits_Dy\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_{-2a}^a\\,\\textrm{d}x\\int_{\\frac{x^2}{a}}^{-x+2a}y\\textrm{d}y}{\\int_{-2a}^a\\,\\textrm{d}x\\int_{\\frac{x^2}{a}}^{-x+2a}\\textrm{d}y}=\\dfrac{\\dfrac{1}{2}\\int_{-2a}^a(-\\dfrac{x^4}{4}+x^2-4ax+4a^2)}{\\int_{-2a}^a(-\\dfrac{x^2}{a}-x+2a)\\textrm{d}x}=\\dfrac{8}{5}a$",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分法",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分法",
  "kind": "例题",
  "text": "#### 补全区域\n\n即$L$不能构成一个完整的域，就需要按照路径对区域进行补全，然后减去这个曲线积分值。\n\n#### 不可导点\n\n即$D$中存在不可导的点，需要以不可导点为圆心做圆对$D$进行切割。\n\n例题：$I=\\displaystyle{\\oint\\limits_L\\dfrac{x\\textrm{d}y-y\\textrm{d}}{x^2+y^2}}$，$L$为不过原点的闭曲线。\n\n解：$P=-\\dfrac{y}{x^2+y^2}$，$Q=\\dfrac{x}{x^2+y^2}$。$\\dfrac{\\partial Q}{\\partial x}=\\dfrac{y^2-x^2}{(x^2+y^2)^2}$，$\\dfrac{\\partial P}{\\partial y}=\\dfrac{y^2-x^2}{(x^2+y^2)^2}$，从而$\\dfrac{\\partial Q}{\\partial x}\\equiv\\dfrac{\\partial P}{\\partial y}$。但是此时$(x,y)\\neq(0,0)$，所以格林公式无法使用。\n\n若$(0,0)\\notin D$，则可以使用格林公式，$I=\\iint\\limits_D0\\,\\textrm{d}\\sigma=0$。\n\n若$(0,0)\\in D$，不可以使用格林公式，所以重新对$D$进行划分，令$L_0:x^2+y^2=r^2$，其中$r>0$且$L_0$不超过$D$，$L_0$为逆时针。中间的环为$D_1$，最里侧的圆为$D_2$。\n\n所以对中间的环$D_1$使用格林公式：$\\oint_{L+L_0^-}=\\iint_{D_1}\\left(\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}\\right)\\textrm{d}\\sigma=0$。\n\n$\\therefore\\oint\\limits_L+\\oint\\limits_{L_0^-}=\\oint\\limits_L-\\oint\\limits_{L_0}=0$，$\\oint_L=\\oint_{L_0}$。\n\n$I=\\displaystyle{\\oint\\limits_{L_0}\\dfrac{x\\textrm{d}y-y\\textrm{d}x}{x^2+y^2}=\\dfrac{1}{r^2}\\oint\\limits_{L_0}x\\,\\textrm{d}y-y\\,\\textrm{d}x=\\dfrac{2}{r^2}\\iint\\limits_{D_2}\\textrm{d}\\sigma=2\\pi}$。\n\n例题：计算曲线积分$\\oint\\limits_L\\dfrac{x\\textrm{d}y-y\\textrm{d}x}{4^x2+y^2}$，其中$L$是以点$(1,0)$为圆心，$R\\geqslant1$为半径的圆，取逆时针方向。\n\n解：由于是逆时针在$L$上，所以是正向：$=\\displaystyle{\\oint\\limits_{L^+}\\left(\\dfrac{-y}{4x^2+y^2}\\textrm{d}x+\\dfrac{x}{4x^2+y^2}\\textrm{d}y\\right)}$。\n\n又对于$L$所围成的圆面$D$，因为$4x^2+y^2\\neq0$，所以$(0,0)$应该被挖去。\n\n因为逆时针的方向下挖去这个点做的运动顺时针是负方向的，所以令其为$C^-$。\n\n又因为格林公式$\\oint\\limits_{L^++C^-}P\\,\\textrm{d}x+Q\\,\\textrm{d}y=\\displaystyle{\\iint\\limits_D\\left(\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}\\right)\\textrm{d}\\sigma}=$\n$\\displaystyle{\\iint\\limits_D\\left(\\dfrac{4x^2+y^2-3x^2}{(4x^2+y^2)^2}-\\dfrac{-(4x^2+y^2)+2y^2}{(4x^2+y^2)^2}\\right)\\textrm{d}\\sigma}=0$。旋度为0。\n\n$=\\oint\\limits_{L^++C^-}-\\oint\\limits_{C^-}=0-\\oint\\limits_{C^-}=\\oint\\limits_{C^+}$。取$C:4x^2+y^2=\\delta^2$，$\\delta$为一个足够小的常数。（分母取$\\delta^2$）\n\n$=\\displaystyle{\\oint\\limits_{C^+}\\left(\\dfrac{-y}{4x^2+y^2}\\textrm{d}x+\\dfrac{x}{4x^2+y^2}\\textrm{d}y\\right)}=\\displaystyle{\\oint\\limits_{C^+}\\left(\\dfrac{-y}{\\delta^2}\\textrm{d}x+\\dfrac{x}{\\delta^2}\\textrm{d}y\\right)}$\n\n$=\\dfrac{1}{\\delta^2}\\oint\\limits_{C^+}-y\\,\\textrm{d}x+x\\,\\textrm{d}y$，利用格林公式，$C^+$所成区域为$D'$：$\\dfrac{1}{\\delta^2}\\oint\\limits_{D'}(1-(-1))\\,\\textrm{d}\\sigma=\\dfrac{2}{\\delta^2}D'=\\dfrac{2}{\\delta^2}\\pi\\dfrac{\\delta}{2}\\delta=\\pi$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-8-infinite-series-infinite-series-s1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/8-infinite-series/infinite-series.tex#正项级数",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "正项级数",
  "kind": "例题",
  "text": "如果题目中没有说明，要首先证明多项式为正数，否则不能使用正项级数的方法。\n\n#### 放缩法\n\n即根据收敛准则来进行判断。如果要判断原级数收敛，则辅助级数应该是对其放大，判断原级数发散，则辅助级数应该是对其缩小。\n\n#### 比较判别法\n\n都需要找到一个好的级数进行比较。常用的只有两个：\n\n$p$级数：$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{n^p}\\left\\{\\begin{array}{l}\n    p>1, \\text{收敛} \\\\\n    p\\leqslant1, \\text{发散}\n\\end{array}\\right.$。\n\n等比级数（几何级数）：$\\sum\\limits_{n=1}^\\infty\\dfrac{1}aq^{n-1}\\left\\{\\begin{array}{l}\n    \\vert q\\vert<1, \\text{收敛} \\\\\n    \\vert q\\vert\\geqslant 1, \\text{发散}\n\\end{array}\\right.$。\n\n当不知道用哪个时可以使用洛必达先计算一下极限值。\n\n#### 比值判别法\n\n适用于含有$a^n$，$n!$，$n^n$的通项。主要是$n!$。\n\n例题：判断$\\sum\\limits_{n=1}^\\infty\\dfrac{n!}{n^n}$。\n\n解：利用比值判别法，令$a_n=\\dfrac{n!}{n^n}$，$\\lim\\limits_{n\\to\\infty}\\dfrac{a_{n+1}}{a_n}=\\lim\\limits_{n\\to\\infty}\\dfrac{(n+1)!}{(n+1)^{n+1}}\\dfrac{n^n}{n!}=\\lim\\limits_{n\\to\\infty}\\dfrac{n^n}{(n+1)^n}$，注意这里幂也为变量，不是等于1而是上下同时除以$n^n$，$=\\lim\\limits_{n\\to\\infty}\\dfrac{1}{(1+\\frac{1}{n})^n}$，根据两个重要极限得到$=\\dfrac{1}{e}<1$，所以收敛。\n\n#### 根值判别法\n\n适用于含有$a^n$，$n^n$的通项。\n\n$\\lim\\limits_{n\\to\\infty}\\sqrt[n]{n}=1$。\n\n#### 积分判别法\n\n例题：判断级数$\\sum\\limits_{n=2}^\\infty\\dfrac{1}{n\\ln n}$的敛散性。\n\n解：因为$\\dfrac{1}{n\\ln n}<\\dfrac{1}{n}$，调和级数发散，所以比较判别法找不到一个较好的辅助级数。同理根据级数形式比值和根值判别法都无法使用。\n\n令$f(x)=\\dfrac{1}{x\\ln x}$，$a_n=f(n)$，在$[2,+\\infty)$上$\\dfrac{1}{n\\ln n}$单调减且非负。\n\n级数$\\sum\\limits_{n=2}^\\infty\\dfrac{1}{n\\ln n}$与$\\int_2^{+\\infty}\\dfrac{\\textrm{d}x}{x\\ln x}$同敛散。\n\n$=\\ln\\ln x\\vert_2^{+\\infty}=+\\infty$，所以原级数发散。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-8-infinite-series-infinite-series-s2-1",
  "repo": "R08",
  "source": "advanced-math/exercise/8-infinite-series/infinite-series.tex#收敛域",
  "subject": "gaoshu",
  "topic": "幂级数",
  "title": "收敛域",
  "kind": "例题",
  "text": "#### 基本方法\n\n使用比值或根值法进行求解。\n\n例题：求幂级数$\\sum\\limits_{n=1}^\\infty\\dfrac{e^n-(-1)^n}{n^2}x^n$的收敛半径。\n\n解：\n\n比值法：\n\n$\\lim\\limits_{n\\to\\infty}\\left\\vert\\dfrac{a_{n+1}}{a_n}\\right\\vert=\\lim\\limits_{n\\to\\infty}\\dfrac{e^{n+1}-(-1)^{n+1}}{(n+1)^2}\\dfrac{n^2}{e^n-(-1)^n}=\\lim\\limits_{n\\to\\infty}\\dfrac{e+(\\frac{-1}{e})^n}{1-(\\frac{-1}{e})^n}$。\n\n又$\\lim\\limits_{n\\to\\infty}x^n=\\left\\{\\begin{array}{ll}\n    0 & \\vert x\\vert<1 \\\\\n    \\infty & \\vert x\\vert\\geqslant1\n\\end{array}\\right.$，$\\lim\\limits_{n\\to\\infty}\\left(\\dfrac{-1}{e}\\right)^n=0$，原式$=e$。$R=\\dfrac{1}{e}$。\n\n根值法：\n\n$\\lim\\limits_{n\\to\\infty}\\sqrt[n]{\\vert a_n\\vert}=\\lim\\limits_{n\\to\\infty}\\sqrt[n]{\\dfrac{e^n-(-1)^n}{n^2}}=\\lim\\limits_{n\\to\\infty}\\dfrac{e\\sqrt[n]{1-(-\\frac{-1}{e})^n}}{\\sqrt[n]{n}\\sqrt[n]{n}}$，又$\\lim\\limits_{n\\to\\infty}\\sqrt[n]{n}=1$。\n\n$=\\lim\\limits_{n\\to\\infty}\\dfrac{e\\sqrt[n]{1-0}}{1\\cdot1}=e$，所以$R=\\dfrac{1}{e}$。\n\n#### 缺项变换\n\n若求$\\sum\\limits_{n=0}^\\infty a_nx^{2n+1}$或$\\sum\\limits_{n=0}^\\infty a_nx^{2n}$，则求出其$\\rho$，$R=\\sqrt{\\dfrac{1}{\\rho}}$。\n\n例题：求幂级数$\\sum\\limits_{n=1}^\\infty\\dfrac{n}{2^n+(-3)^n}x^{2n-1}$的收敛半径。\n\n解：由于分母都是幂函数，所以使用根值法：$=\\lim\\limits_{n=1}^\\infty\\sqrt[n]{\\vert a_n\\vert}=\\lim\\limits_{n=1}^\\infty\\dfrac{\\sqrt[n]{n}}{\\sqrt[n]{3^n+(-2)^n}}\\\\=\\lim\\limits_{n=1}^\\infty\\dfrac{1}{\\sqrt[n]{1+(-\\frac{2}{3})^n}}=\\dfrac{1}{3}$。\n\n所以$R=3$。注意这里是错误的，因为之前求收敛域时都是$x^n$，而这里是$x^{2n-1}$，只有奇数次项，所以幂级数的一半都没有了。\n\n$\\sum\\limits_{n=1}^\\infty a_nx^{2n}=\\sum\\limits_{n=1}^\\infty a_nx^{2n-1}=\\sum\\limits_{n=1}^\\infty a_n(x^2)^n$，当前已知收敛半径为$3$，即$\\vert x^2\\vert<3$，即$\\vert x\\vert<\\sqrt{3}$。\n\n#### 收敛域变换\n\n例题：已知幂级数$\\sum\\limits_{n=0}^\\infty a_n(x+2)^n$在$x=0$处收敛，在$x=-4$处发散，求$\\sum\\limits_{n=0}^\\infty a_n(x-3)^n$的收敛域。\n\n解：根据阿贝尔定理，已知在$x=0$处收敛，且中心点在$x=-2$，则收敛区间为$(-4,0)$，在$x=-4$处发散，则$x<-4$，$x>0$处发散。\n\n然后确定两端端点敛散性，$x=0$处收敛则收敛域包括$x=0$，$x=-4$处发散则收敛域不包括$x=-4$，得到收敛域$(-4,0]$。\n\n对于$\\sum\\limits_{n=0}^\\infty a_n(x-3)^n$的中心点为$x=3$，则根据相对位置收敛域为$(1,5]$。\n\n#### 常数项级数变换\n\n可以代入特殊点确定收敛点，将幂级数转换为常数项级数。\n\n例题：若级数$\\sum\\limits_{n=0}^\\infty a_n$条件收敛，求幂级数$\\sum\\limits_{n=0}^\\infty na_n(x-1)^n$的收敛区间。\n\n解：已知$\\sum\\limits_{n=0}^\\infty a_n$条件收敛，则对于幂级数$\\sum\\limits_{n=0}^\\infty na_n(x-1)^n$而言在$x=2$处条件收敛，即得到以中心点$x=1$的收敛区间$(0,2)$。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-8-infinite-series-infinite-series-s2-2",
  "repo": "R08",
  "source": "advanced-math/exercise/8-infinite-series/infinite-series.tex#函数展开",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "函数展开",
  "kind": "例题",
  "text": "#### 因式分解\n\n例题：将函数$f(x)=\\dfrac{1}{x^2-3x-4}$展开为$x-1$的幂级数并指出收敛区间。\n\n解：$\\dfrac{1}{x^2-3x-4}=\\dfrac{1}{5}\\left(\\dfrac{1}{x-4}-\\dfrac{1}{x+1}\\right)$。\n\n$\\dfrac{1}{x-4}=\\dfrac{1}{(x-1)-3}=-\\dfrac{1}{3}\\dfrac{1}{1-\\frac{x-1}{3}}=-\\dfrac{1}{3}\\sum\\limits_{n=0}^\\infty\\left(\\dfrac{x-1}{3}\\right)^n$，$\\left\\vert\\dfrac{x-1}{3}\\right\\vert<1$，$x\\in(-2,4)$。\n\n$\\dfrac{1}{x+1}=\\dfrac{1}{(x-1)+2}=\\dfrac{1}{2}\\dfrac{1}{1+\\frac{x-1}{2}}=\\dfrac{1}{2}\\sum\\limits_{n=0}^\\infty\\left(-\\dfrac{x-1}{2}\\right)^n$，$\\left\\vert-\\dfrac{x-1}{2}\\right\\vert<1$，$x\\in(-1,3)$。\n\n所以其幂级数就是其加和，收敛区间为$(-2,4)\\cap(-1,3)=(-1,3)$。\n\n#### 先导后积\n\n例题：求函数$f(x)=\\arctan x$在$x=0$处的幂级数展开。\n\n解：$f'(x)=(\\arctan x)'=\\dfrac{1}{1+x^2}=\\dfrac{1}{1-(-x^2)}=\\sum\\limits_{n=0}^\\infty(-1)^nx^{2n}$，$\\vert-x^2\\vert<1$。\n\n已经求得求导后的函数的幂级数展开，所以求原函数的幂级数展开只需要积分，利用先导后积公式：$f(x)=f(0)+\\int_0^xf'(t)\\,\\textrm{d}t=\\int_0^x\\sum\\limits_{n=0}^\\infty(-1)^nt^{2n}\\,\\textrm{d}t=\\sum\\limits_{n=0}^\\infty(-1)^n\\dfrac{t^{2n+1}}{2n+1}\\bigg|_0^x=\\sum\\limits_{n=0}^\\infty(-1)^n\\dfrac{x^{2n+1}}{2n+1}$。\n\n求导的级数要求$\\vert x\\vert<1$，代入$x=\\pm1$到最后结果得到两个交错级数，所以收敛域其实为$[-1,1]$（可以不写）。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-8-infinite-series-infinite-series-s2-3",
  "repo": "R08",
  "source": "advanced-math/exercise/8-infinite-series/infinite-series.tex#级数求和",
  "subject": "gaoshu",
  "topic": "无穷级数",
  "title": "级数求和",
  "kind": "例题",
  "text": "即对展开式进行逆运算，根据幂级数展开式反推原幂级数。\n\n可以利用展开式求和函数，但是很多展开式的通项都不是公式中的，就需要对通项进行变形。\n\n在求和之前要先计算收敛半径和收敛域。\n\n无论是哪个方法都要求求导和积分后系数$n+a$与幂次$n$相等，所以求导或积分的目的就是为了让他们相同，从而能被看成一个整体。\n\n#### 先导后积\n\n$\\sum\\dfrac{x^{f(n)}}{P(n)}$：$n$在分母上，先导后积。使用变限积分：$\\int_{x_0}^xS'(t)\\,\\textrm{d}t=S(x)-S(x_0)$，即$S(x)=S(x_0)+\\int_{x_0}^xS'(t)\\,\\textrm{d}t$。一般选择$x_0$为展开点。\n\n主要公式：$\\sum\\limits_{n=1}^\\infty\\dfrac{(-1)^{n-1}}{n}x^n=\\ln(1+x)$（$(-1,1]$）；$\\sum\\limits_{n=1}^\\infty\\dfrac{x^n}{n}=-\\ln(1-x)$（$[-1,1)$）。\n\n目的是让$P(n)=f(n)$。\n\n例题：求级数$\\sum\\limits_{n=0}^\\infty\\dfrac{(-1)^n}{2n+1}x^{2n}$的和函数。\n\n解：首先$\\lim\\limits_{n\\to\\infty}\\left\\vert\\dfrac{a_{n+1}}{a_n}\\right\\vert=1$，$R=1$。\n\n当$x=\\pm1$时，$x^2n=1$，所以原式$=\\sum\\limits_{n=0}^\\infty\\dfrac{(-1)^n}{2n+1}$，为交错级数，由莱布尼茨判别法可知极限为0且单调递减，从而该级数收敛。从而收敛域为$[-1,1]$。\n\n令$S(x)=\\sum\\limits_{n=0}^\\infty\\dfrac{(-1)^n}{2n+1}x^{2n}$。易得$x=0$时$S(x)=1$。\n\n当$x\\neq0$时，$S(x)=\\dfrac{1}{x}\\sum\\limits_{n=0}^\\infty\\dfrac{(-1)^n}{2n+1}x^{2n+1}=\\dfrac{1}{x}\\sum\\limits_{n=0}^\\infty\\int_0^x(-1)^nx^{2n}\\,\\textrm{d}x\\\\=\\dfrac{1}{x}\\int_0^x[\\sum\\limits_{n=0}^\\infty(-1)^nx^{2n}]\\textrm{d}x$。\n\n所以$(-1)^nx^{2n}$为一个几何级数，所以$q=\\dfrac{(-1)^{n+1}x^{2n+2}}{(-1)^nx^{2n}}=-x^2$。\n\n从而$=\\displaystyle{\\dfrac{1}{x}\\int_0^x\\dfrac{1}{1+x^2}\\textrm{d}x=\\dfrac{\\arctan x}{x}}$。\n\n#### 先积后导\n\n$\\sum P(n)x^{f(n)}$：$n$在分子上，先积后导。$(\\int S(x)\\,\\textrm{d}x)'=S(x)$。\n\n主要公式：$\\sum\\limits_{n=0}^\\infty(-1)^nx^n=\\dfrac{1}{1+x}$（$(-1,1)$）；$\\sum\\limits_{n=0}^\\infty x^n=\\dfrac{1}{1-x}$（$(-1,1)$）。\n\n目的是让$P(n)=f^{(n)}(n)\\cdots f'(n)$。\n\n例题：求级数$\\sum\\limits_{n=1}^\\infty nx^n$的和函数。\n\n解：记$S(x)=\\sum\\limits_{n=1}^\\infty nx^n=x\\sum\\limits_{n=1}^\\infty x^{n-1}=x(\\int\\sum\\limits_{n=1}^\\infty nx^{n-1}\\,\\textrm{d}x)'=x(\\sum\\limits_{n=1}^\\infty x^n)'=x\\left(\\dfrac{x}{1-x}\\right)'=\\dfrac{x}{(1-x)^2}$。收敛域为$[-1,1]$。\n\n例题：求级数$\\sum\\limits_{n=0}^\\infty(n+1)(n+3)x^n$的和函数。\n\n解：$(n+1)(n+3)$的形式可以推出$(n+1)(n+2)$是求两次导的结果，而这里是$(n+1)(n+3)$，所以拆开：$\\sum\\limits_{n=0}^\\infty(n+1)(n+2)x^n+\\sum\\limits_{n=0}^\\infty(n+1)x^n=\\left(\\sum\\limits_{n=0}^\\infty x^{n+2}\\right)''+\\left(\\sum\\limits_{n=0}^\\infty x^{n+1}\\right)=\\left(\\dfrac{x^2}{1-x}\\right)''+\\left(\\dfrac{x}{1-x}\\right)'=\\dfrac{3-x}{(1-x)^3}$，$x\\in(-1,1)$。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s1-1",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#可分离变量微分方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "可分离变量微分方程",
  "kind": "例题",
  "text": "#### 交叉积分法\n\n例题：求$y\\sin\\dfrac{x}{2}\\,\\textrm{d}x-\\cos\\dfrac{x}{2}\\,\\textrm{d}y=0$的通解。\n\n解：$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=y\\tan\\dfrac{x}{2}$，$\\dfrac{\\textrm{d}y}{y}=\\tan\\dfrac{x}{2}\\,\\textrm{d}x$，$\\displaystyle{\\int\\dfrac{\\textrm{d}y}{y}=2\\int\\tan\\dfrac{x}{2}\\,\\textrm{d}\\dfrac{x}{2}}$。\n\n解得$\\ln\\vert y\\vert=-\\ln\\left(\\cos\\dfrac{x}{2}\\right)^2+\\ln C_1$（取对数更好解），$\\vert y\\vert=\\dfrac{C_1}{\\left(\\cos\\dfrac{x}{2}\\right)^2}$。\n\n$y=\\dfrac{\\pm C_1}{\\left(\\cos\\dfrac{x}{2}\\right)^2}$，令$C=\\pm C_1$，得$y=\\dfrac{C}{1+\\cos x}$。\n\n注意在第一步时将$y$除到分母上，本来$y$为任意常数，变为$y\\neq0$，所以解得最后$C\\neq0$，而实际上$y$可以为0，所以$C$应该为任意常数。\n\n此时解为全部解，为通解加上$y=0$的奇解。\n\n#### 多项式换元法\n\n$x$和$y$是以和差作为一个整体形式。\n\n例题：求微分方程$\\textrm{d}y=\\sin(x+y+100)\\,\\textrm{d}x$的通解。\n\n解：令$u=x+y+100$，$\\dfrac{\\textrm{d}u}{\\textrm{d}x}=1+\\dfrac{\\textrm{d}y}{\\textrm{d}x}$，$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\sin(x+y+100)$，$\\therefore\\dfrac{\\textrm{d}u}{\\textrm{d}x}=1+\\sin u$。\n\n$\\dfrac{\\textrm{d}u}{1+\\sin u}=\\textrm{d}x$，$\\displaystyle{\\int\\dfrac{\\textrm{d}u}{1+\\sin u}}=\\int\\textrm{d}x$，$\\displaystyle{\\int\\dfrac{1-\\sin u}{\\cos^2u}}\\textrm{d}u=x$。\n\n$\\int\\sec^2u-\\tan u\\sec u\\,\\textrm{d}u=x$，即$\\tan u-\\sec u=x+C$。代回$u=x+y+100$：\n\n通解$\\tan(x+y+100)-\\sec(x+y+100)=x+C$。\n\n所有解：$\\tan(x+y+100)-\\sec(x+y+100)=x+C$，$x+y+100=2k\\pi-\\dfrac{\\pi}{2}$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s1-2",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#一阶线性方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "一阶线性方程",
  "kind": "例题",
  "text": "形如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}+P(x)y=Q(x)$。\n\n可以直接求也可以使用公式求。\n\n#### 交叉积分法\n\n例题：设$L$是一条平面曲线，其上任意一点$P(x,y)$（$x>0$）到坐标原点的距离恒等于该点处的切线在$y$轴上的截距，且$L$经过点$\\left(\\dfrac{1}{2},0\\right)$，求$L$的方程。\n\n解：$(x,y)$到坐标原点的距离为$\\sqrt{x^2+y^2}$。\n\n若$y=y(x)$，则切线为$Y-y=y'(X-x)$，令$X=0$，解得$Y=y-xy'$。\n\n$\\therefore\\sqrt{x^2+y^2}=y-xy'$，解得$y'=\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{y-\\sqrt{x^2+y^2}}{x}=\\dfrac{y}{x}-\\sqrt{1+\\dfrac{y^2}{x^2}}$。\n\n令$\\dfrac{y}{x}=u$，则$y=ux$，$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{\\textrm{d}u}{\\textrm{d}x}x+u$。代入$y'$：\n\n$\\dfrac{\\textrm{d}u}{\\textrm{d}x}x+u=u-\\sqrt{1+u^2}$，$\\dfrac{\\textrm{d}u}{\\sqrt{1+u^2}}=-\\dfrac{\\textrm{d}x}{x}$，$\\displaystyle{\\int\\dfrac{\\textrm{d}u}{\\sqrt{1+u^2}}=-\\int\\dfrac{\\textrm{d}x}{x}}$。\n\n$\\therefore\\ln(u+\\sqrt{1+u^2})=-\\ln x+\\ln C$，$u+\\sqrt{1+u^2}=\\dfrac{C}{x}$。\n\n代入$\\dfrac{y}{x}+\\sqrt{1+\\dfrac{y^2}{x^2}}=\\dfrac{C}{x}$，$y+\\sqrt{x^2+y^2}=C$。\n\n#### 公式法\n\n即使用非齐次和非齐次的一阶线性微分方程公式。\n\n#### 换元法\n\n如果存在$f(y)$，$y$无法提出，则使用换元法。典型的就是$e^y$。\n\n例题：求微分方程$y'+1=e^{-y}\\sin x$的通解。\n\n解：已知对$e^{-y}\\sin x$无法处理，所以必然需要对其转换，$e^yy'+e^y=\\sin x$。\n\n$\\therefore(e^y)'+e^y=\\sin x$，令$e^y=u$，$u'+u=\\sin x$，$P(x)=1$，$Q(x)=\\sin x$。\n\n$e^y=u=e^{-\\int\\textrm{d}x}(\\int e^{\\int\\textrm{d}x}\\sin x\\,\\textrm{d}x+C)=e^{-x}(\\int e^x\\sin x\\,\\textrm{d}x+C)$，积分再现表格解出$\\int e^x\\sin x\\,\\textrm{d}x$：$=e^{-x}\\left(\\dfrac{1}{2}e^x(\\sin x-\\cos x)+C\\right)$。\n\n例题：求$y'=\\dfrac{y^2-x}{2y(x+1)}$的通解。\n\n解：这个式子首先分子分母等长，$xy$都合在一起，所以很难去分离出基本的微分方程。基本的微分方程式子为$y'+P(x)y=Q(x)$，对比可以看出里面$y^2$是不能化简的，所以很容易想到把这个当作一个整体。\n\n$2y'y=\\dfrac{y^2-x}{x+1}$，此时出现了$y^2$和$y^2$的导数，令$y^2=u$，$u'=\\dfrac{u-x}{x+1}$。\n\n即$u'-\\dfrac{y}{x+1}=\\dfrac{1}{x+1}-1$，此时就化为了一般非齐次方程。\n\n根据公式算出$y=C(x+1)-(x+1)\\ln\\vert x+1\\vert-1$。\n\n#### 交换微分变量\n\n当出现$y'=\\dfrac{f(x)}{g(x)}$，$g(x)$多项式的次数远高于$f(x)$，此时就没办法分离变量了，可以用$\\dfrac{\\textrm{d}x}{\\textrm{d}y}$颠倒求导顺序。\n\n例题：求$y'=\\dfrac{y}{x+(y+1)^2}$的通解。（$y$不为常函数）\n\n解：由于$y'$对应的式子分母较复杂，而分子较简单，所以上下颠倒：\n\n$\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\dfrac{x+(y+1)^2}{y}=\\dfrac{x}{y}+y+\\dfrac{1}{y}+2$。$x'-\\dfrac{1}{y}x=y+\\dfrac{1}{y}+2$。\n\n根据公式：$x=e^{\\int\\frac{1}{y}\\,\\textrm{d}y}\\left[\\displaystyle{\\int\\left(y+\\dfrac{1}{y}+2\\right)}e^{\\int-\\frac{1}{y}\\,\\textrm{d}y}\\,\\textrm{d}y+C\\right]=y^2+2\\ln\\vert y\\vert y-1+Cy$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s1-3",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#伯努利方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "伯努利方程",
  "kind": "例题",
  "text": "形如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}+P(x)y=Q(x)y^n$。\n\n例题：求$y\\,\\textrm{d}x=(1+x\\ln y)x\\,\\textrm{d}y$（$y>0$）的通解。\n\n解：将导数放到一边：$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{y}{(1+x\\ln y)x}$，这个算式无法处理。\n\n而颠倒$\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\dfrac{(1+x\\ln y)x}{y}=\\dfrac{1}{y}x+\\dfrac{\\ln y}{y}x^2$。\n\n凑伯努利方程：$x'+P(x)x=Q(x)x^n$：$x'-\\dfrac{1}{y}x=\\dfrac{\\ln y}{y}x^2$。$P(x)=-\\dfrac{1}{y}$，$Q(x)=\\dfrac{\\ln y}{y}$。\n\n乘$x^{-2}$降阶：$x^{-2}x'-\\dfrac{1}{y}x^{-1}=\\dfrac{\\ln y}{y}$。令$z=x^{-1}$，$\\dfrac{\\textrm{d}z}{\\textrm{d}y}=-\\dfrac{1}{x^2}\\dfrac{\\textrm{d}x}{\\textrm{d}y}$。代入方程：\n\n$-\\dfrac{\\textrm{d}z}{\\textrm{d}y}-\\dfrac{1}{y}z=\\dfrac{\\ln y}{y}$，$\\dfrac{\\textrm{d}z}{\\textrm{d}y}+\\dfrac{1}{y}z=-\\dfrac{\\ln y}{y}$，利用公式：\n\n$z=e^{-\\int\\frac{1}{y}\\textrm{d}y}\\left(\\displaystyle{\\int e^{\\int\\frac{1}{y}\\textrm{d}y}\\cdot\\left(-\\dfrac{\\ln y}{y}\\right)+C}\\right)=\\dfrac{1}{y}(-\\int\\ln y\\,\\textrm{d}y+C)=\\dfrac{1}{y}(-y(\\ln y-1)+C)=-\\ln y+1+\\dfrac{C}{y}$。\n\n$\\therefore x=\\dfrac{y}{-y\\ln y+y+C}$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s2",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#二阶可降阶微分方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "二阶可降阶微分方程",
  "kind": "例题",
  "text": "\\subsection{\\texorpdfstring{$y''=f(x,y')$}\\ 型}\n\n例题：求$y''=\\dfrac{2xy'}{1+x^2}$的通解。\n\n解：令$y'=p$，$p'=\\dfrac{2xp}{1+x^2}$，$\\dfrac{\\textrm{d}p}{\\textrm{d}x}=\\dfrac{2xp}{1+x^2}$，$\\dfrac{\\textrm{d}p}{p}=\\dfrac{2x}{1+x^2}$，$\\displaystyle{\\int\\dfrac{\\textrm{d}p}{p}=\\int\\dfrac{2x}{1+x^2}}$。\n\n$\\ln\\vert p\\vert=\\ln(1+x^2)+\\ln C_1$，$p=\\pm C_1(1+x^2)=C_2(1+x^2)$。\n\n$y'=C(1+x^2)$，$\\therefore y=C_2\\left(x+\\dfrac{x^3}{3}+x\\right)+C$。\n\n\\subsection{\\texorpdfstring{$y''=f(y,y')$}\\ 型}",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s3-1",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#二阶微分方程通解",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "二阶微分方程通解",
  "kind": "例题",
  "text": "先将常系数非齐次线性微分方程变为常系数齐次线性微分方程求解，然后加上非齐次方程的一个特解，就是非齐次方程的一个通解。\n\n特解只能拆为和的形式而不能拆为乘商的形式，如$Q(x)=\\sin^2x$，则应该拆为$\\dfrac{1-\\cos2x}{2}$。\n\n例题：求$y''-4y'+4y=3xe^{2x}$的通解。\n\n解：变为常系数齐次线性微分方程：$y''-4y'+4y$。\n\n写出特征方程：$\\lambda^2-4\\lambda+4=0$，从而$(\\lambda-2)^2=0$，$\\lambda_1=\\lambda_2=2$。\n\n从而$y$齐次方程的通解为$(C_1+C_2x)e^{2x}$。\n\n根据特解的设置方法，所以$k=2$，设$y^*=e^{2x}(ax+b)x^2$。\n\n代回二阶方程，$a=\\dfrac{1}{2}$，$b=0$。通解为$(C_1+C_2x)e^{2x}+\\dfrac{1}{2}x^3e^{2x}$。\n\n例题：微分方程$y''-4y'+3y=e^x\\cos x+xe^{3x}$的通解。\n\n解：首先常系数齐次线性微分方程：$y''-4y'+3y=0$。\n\n特征方程为$\\lambda^2-4\\lambda+3=0$，解得特征值为$\\lambda_1=1$，$\\lambda_2=3$。\n\n所以该齐次方程的通解：$y=C_1e^x+C_2e^{3x}$。\n\n然后求特解，首先求后面$f_2(x)=xe^{3x}$的特解$y_2^*$。\n\n根据公式因为$\\alpha$为单特征根，即$\\aleph=3=\\lambda_2\\neq\\lambda_1$，所以$y_2^*=e^{3x}(ax+b)x$。\n\n然后是求$f_1(x)=e^x\\cos x$的特解$y_1^*$。\n\n其中$P_m(x)=1$，$P_n(x)=0$，$l=0$。所以设$P_m(x)=A$，$P_n(x)=B$。\n\n对$k$，自由项中$\\alpha=\\beta=1$，得到$1\\pm i$。又$1\\pm i\\neq\\lambda_1=1\\neq\\lambda_2=3$，$k=0$。\n\n最后$y_1^*=e^x(A\\cos x+B\\sin x)$。通解为$y=C_1e^x+C_2e^{3x}+e^x(A\\cos x+B\\sin x)+e^{3x}(ax+b)x$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s3-2",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#反推微分方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "反推微分方程",
  "kind": "例题",
  "text": "#### 齐次微分方程\n\n没有给出具体的解出方法，此时往往是给出特解，然后反推微分方程的形式，这时就需要根据特解求出特征方程。\n\n例题：计算具有特解$y_1=e^{-x}$、$y_2=2xe^{-x}$、$y_3=3e^x$的三阶常系数齐次线性微分方程。\n\n解：由于是三阶，且不是一般的微分方程求特解而是逆问题，就使用特征方程解。\n\n因为有三个特解，根据解的形式，$r=-1,-1,1$，所以特征方程的形式为$(r+1)^2(r-1)=0$，即解出$r^3+r^2-r-1=0$，所以微分方程为$y'''+y''-y'-y=0$。\n\n#### 非齐次微分方程\n\n#### 已知结构\n \\leavevmode\n\n如果给出一个微分方程的具体形式，而携带参数，可以直接求导然后代入微分方程。\n\n例题：$y=\\dfrac{1}{2}e^{2x}+(x-\\dfrac{1}{3})e^3$为二阶常系数非齐次线性微分方程$y''+ay'+by=ce^x$的一个特解，求对应参数。\n\n解：直接代入法：直接求导$y'=e^{2x}+e^x(x+\\dfrac{2}{3})$，$y''=2e^{2x}+e^x(x+\\dfrac{5}{3})$。\n\n直接代入，解得$a=-3$，$b=2$，$c=-1$。\n\n例题：$y=e^{2x}+(x+1)e^x$为二阶常系数非齐次线性微分方程$y''+ay'+by=ce^x$的一个特解，求对应参数和通解。\n\n解：解结构法：由于是二阶非齐次方程，所以必然是两个通解加一个特解。\n\n展开解$y=e^{2x}+xe^x+e^x$。\n\n由于已知解，所以$r=1$、$r=2$，且非齐次为$ce^x$，所以$e^2x$为齐次方程的一个通解，非齐次方程的特解必然是在$xe^x$和$e^x$之中。\n\n由于$r=1$，$xe^x$和$e^x$的幂次都是$1$，而其中一个$r=1$，根据解的结构$Ae^{rx}x^k$，为单值根，所以$k=1$，所以特解必然存在$x^k$，所以$xe^x$为特解，$e^x$为通解。\n\n所以特征方程为$(r-1)(r-2)=0$，对应$y''-3y'+2y=0$。然后直接代入求出$c$。\n\n#### 未知结构\n \\leavevmode\n\n例题：已知二阶非齐次线性方程具有三个特解$y_1=x-(x^2+1)$、$y_2=3e^x-(x^2+1)$、$y_3=2x-e^x-(x^2+1)$，求$y(0)=y'(0)=0$的特解。\n\n解：非齐次，即$y''+py'+qy=f(x)$。由于是二阶所以有两个无关的特解。\n\n所以$y_1-y_2$，$y_1-y_3$为其齐次方程的两个通解（线性无关）。\n\n通解为齐次方程通解加上非齐次一个特解：$y=C_1(y_1-y_2)+C_(y_1-y_3)+y_1$。\n\n然后代入，解出$y=e^x-x^2-x-1$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s3-3",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#高阶微分方程通解",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "高阶微分方程通解",
  "kind": "例题",
  "text": "如果是三阶以及以上阶的微分方程，使用特征方程来解决。\n\n由于三阶以以上的微分方程没有给出特解的形式，所以如果是高阶线性方程必然是齐次方程，直接根据特征方程得出特征值。\n\n例题：求三阶常系数线性齐次微分方程$y'''-2y''+y'-2y=0$的通解。\n\n解：得出特征方程$r^3-2r^2+r-2=0$，即$r^3-2r^2+r-2=0$，$(r-2)(r^2+1)=0$，解得$r=2$、$\\pm i$，即得通解为$C_1e^{2x}+C_2\\cos x+C_3\\sin x$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s4-0",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#微分方程概念",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "微分方程概念",
  "kind": "概念",
  "text": "对于有些方程并不需要求解后才能解决问题。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s4-1",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#已知微分方程的解反求系数",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "已知微分方程的解反求系数",
  "kind": "例题",
  "text": "例题：设$y_1,y_2$为一阶非齐次线性微分方程$y'+p(x)y=q(x)$的两个特解，若常数$\\lambda,\\mu$使得$\\lambda y_1+\\mu y_2$是该方程的解，$\\lambda y_1-\\mu y_2$是该方程对应的齐次方程的解，则()。\n\n$A.\\lambda=\\dfrac{1}{2},\\mu=\\dfrac{1}{2}$$B.\\lambda=-\\dfrac{1}{2},\\mu=-\\dfrac{1}{2}$$C.\\dfrac{2}{3},\\mu=\\dfrac{1}{3}$$\\lambda=\\dfrac{2}{3},\\mu=\\dfrac{2}{3}$",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s4-2",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#不解微分方程，利用方程隐含信息",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "不解微分方程，利用方程隐含信息",
  "kind": "例题",
  "text": "$F(y,y',y'',\\cdots,y^{(n)})=0$反映了未知函数及其各阶导数之间的关系。\n\n例题：设$y=f(x)$是方程$y''-2y'+4y=0$的一个解，若$f(x_0)>0$，且$f'(x_0)=0$，则函数$f(x)$在点$x_0$()。\n\n$A.$取得最大值$B.$取得最小值$C.$某个邻域内单调增加$D.$某个邻域内单调减少\n\n解：因为$y=f(x)$是方程$y''-2y'+4y=0$的一个解，所以直接代入$x_0$：$y''(x_0)-2y'(x_0)+4y(x_0)=0$。又$f'(x_0)=0$。\n\n$y''(x_0)=-4y(x_0)<0$，所以该点为极大值点。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s6-1",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#牛顿第二定律",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "牛顿第二定律",
  "kind": "例题",
  "text": "$F=ma$，物体质量$m$，力$f$，加速度$a=\\dfrac{\\textrm{d}^x}{\\textrm{d}t^2}=\\dfrac{\\textrm{d}v}{\\textrm{d}t}=\\dfrac{\\textrm{d}v}{\\textrm{d}x}\\dfrac{\\textrm{d}x}{\\textrm{d}t}=v\\dfrac{\\textrm{d}v}{\\textrm{d}x}$。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-exercise-9-differential-equation-differential-equation-s6-2",
  "repo": "R08",
  "source": "advanced-math/exercise/9-differential-equation/differential-equation.tex#变化率",
  "subject": "gaoshu",
  "topic": "一元微分物理与优化应用",
  "title": "变化率",
  "kind": "例题",
  "text": "考的可能性较大，提法多为$t$时刻某量$y$对$t$的变化率与$t$时刻某量成正比。\n\n如冷却定律，$k$时刻物体温度$T(t)$对时间的变化率与$t$时刻物体与介质的温差$T-T_0$成正比，应写为$\\dfrac{\\textrm{d}T}{\\textrm{d}t}=-k(x-x_0)$。",
  "relatedLessons": [
   "gs07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#基本初等函数与初等函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "基本初等函数与初等函数",
  "kind": "概念",
  "text": "\\leavevmode\n\n基本初等函数包括：常数函数、幂函数、指数函数、对数函数、三角函数、反三角函数。\n\n\\subparagraph常数函数 \\leavevmode\n\n$y=A$，$A$为常数，图像平行于$x$轴。\n\n\\subparagraph幂函数 \\leavevmode\n\n$y=x^{\\mu}$，$\\mu$为实数，当$x>0$，$y=x^{\\mu}$都有定义：\n\n 对于幂函数可以根据不同幂下相同单调性来研究最值：\n\n-$\\sqrt{u}，\\sqrt[3]{u}$可以使用$u$来研究。\n\n-$\\vert u\\vert$可以使用$u^2$来研究。\n\n-$\\dfrac{1}{u},u>0$可以使用$u$来研究，但是最值相反。\n\n-$u_1u_2...u_n$可以使用$\\sum_{i=1}^{n}\\ln u_i$来研究。\n\n\\subparagraph指数函数 \\leavevmode\n\n$y=a^x(a>0,a\\neq 1)$：\n\n 指数函数具有如下性质：\n\n- 特殊函数值：$a^0=1$。\n\n- 定义域：$(-\\infty, +\\infty)$，值域：$(0,+\\infty)$。\n\n- 单调性：$a>1$，$y=a^x$单调增，$0<a<1$，$y=a^x$单调减。\n\n- 常用指数函数：$y=e^x$。\n\n- 极限：$\\lim\\limits_{x\\to -\\infty}e^x=0$，$\\lim\\limits_{x\\to +\\infty}e^x=+\\infty$。\n\n\\subparagraph对数函数 \\leavevmode\n\n$y=log_ax(a>0,a\\neq 1)$为$y=a^x$的反函数：\n\n 常用公式：$x=e^{\\ln x}$，$u^v=e^{\\ln u^v}=e^{v\\ln u}(x>0,u>0)$。\n\n对数函数具有如下性质：\n\n- 特殊函数值：$\\log_a1=0$，$log_aa=1,\\ln 1=0,\\ln e=1$。\n\n- 定义域：$(0, +\\infty)$，值域：$(-\\infty,+\\infty)$。\n\n- 单调性：$a>1$，$y=\\log_ax$单调增，$0<a<1$，$y=\\log_ax$单调减。\n\n- 常用对数函数：$y=\\ln x$，$e=2.71828...$。\n\n- 极限：$\\lim\\limits_{x\\to 0^+}\\log_a x=-\\infty$，$\\lim\\limits_{x\\to +\\infty}\\log_ax=+\\infty$。\n\n\\subparagraph三角函数 \\leavevmode\n\n正弦函数：\n\n余弦函数：\n\n弦函数有如下特征：\n\n- 特殊函数值：$\\sin 0=0$，$\\sin\\dfrac{\\pi}{6}=\\dfrac{1}{2}$，$\\sin\\dfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}$，$\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$，$\\sin\\dfrac{\\pi}{2}=1$，$\\sin\\pi=0$，$\\sin\\dfrac{3\\pi}{2}=-1$，$\\sin 2\\pi=0$，$\\cos 0=1$，$\\cos\\dfrac{\\pi}{6}=\\dfrac{\\sqrt{3}}{2}$，$\\cos\\dfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}$，$\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$，$\\cos\\dfrac{\\pi}{2}=0$，$\\cos\\pi=-1$，$\\cos\\dfrac{3\\pi}{2}=0$，$\\cos 2\\pi=1$。\n\n- 定义域：$(-\\infty, +\\infty)$，值域：$[-1,+1]$。\n\n- 奇偶性：$y=\\sin x$为奇函数，$y=\\cos x$为偶函数。\n\n- 周期性：最小正周期为$2\\pi$。\n\n- 有界性：$\\vert\\sin x\\vert\\leqslant 1$，$\\vert\\cos x\\vert\\leqslant 1$。\n\n 正切函数：\n\n 余切函数：\n\n切函数有如下特征：\n\n- 特殊函数值：$\\tan 0=0$，$\\tan\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{3}$，$\\tan\\frac{\\pi}{4}=1$，$\\tan\\frac{\\pi}{3}=\\sqrt{3}$，$\\lim\\limits_{x\\to\\frac{\\pi}{2}}\\tan x=\\infty$，$\\tan\\pi=0$，$\\lim\\limits_{x\\to\\frac{3\\pi}{2}}\\tan x=\\infty$，$\\tan 2\\pi=0$，$\\lim\\limits_{x\\to 0}\\cot x=\\infty$，$\\cot\\dfrac{\\pi}{6}=\\sqrt{3}$，$\\cot\\dfrac{\\pi}{4}=1$，$\\cot\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{3}$，$\\cot\\dfrac{\\pi}{2}=0$，$\\lim\\limits_{x\\to\\pi}\\cot x=\\infty$，$\\cot\\dfrac{3\\pi}{2}=0$，$\\lim\\limits_{x\\to 2\\pi}\\cot x=\\infty$。\n\n- 定义域：$\\tan x:x\\neq k\\pi+\\dfrac{\\pi}{2}(k\\in Z)$，$\\cot x:x\\neq k\\pi(k\\in Z)$，值域：$(-\\infty,+\\infty)$。\n\n- 奇偶性：定义域内均为奇函数。\n\n- 周期性：最小正周期为$\\pi$。\n\n$\\sec x=\\dfrac{1}{\\cos x},\\csc x=\\dfrac{1}{\\sin x}$：\n\n正割函数：\n\n余割函数：\n\n割函数有如下特征：\n\n- 定义域：$\\sec x:x\\neq k\\pi+\\dfrac{\\pi}{2}(k\\in Z)$，$\\csc x:x\\neq k\\pi(k\\in Z)$，值域：$(-\\infty,-1]\\cup [1,+\\infty)$。\n\n- 奇偶性：$y=\\sec x$为偶函数，$y=\\csc x$为奇函数。\n\n- 周期性：最小正周期为$2\\pi$。\n\n\\subparagraph反三角函数 \\leavevmode\n\n类似是三角函数的反函数，但是由于是个多值函数所以不是严格的函数。所以为了限制反三角函数为单值函数，将反三角函数的值限定在一个区间内，将其作为反三角函数的主值。\n\n 反正弦函数：\n\n 反余弦函数：\n\n反弦函数有如下特征：\n\n- 特殊函数值：$\\arcsin 0=0$，$\\arcsin\\dfrac{1}{2}=\\dfrac{\\pi}{6}$，$\\arcsin\\dfrac{\\sqrt{2}}{2}=\\dfrac{\\pi}{4}$，$\\arcsin\\dfrac{\\sqrt{3}}{2}=\\dfrac{\\pi}{3}$，$\\arcsin 1=\\dfrac{\\pi}{2}$，$\\arccos 1=0$，$\\arccos\\dfrac{\\sqrt{3}}{2}=\\dfrac{\\pi}{6}$，$\\arccos\\dfrac{\\sqrt{2}}{2}=\\dfrac{\\pi}{4}$，$\\arccos\\dfrac{1}{2}=\\dfrac{\\pi}{3}$，$\\arccos 0=\\dfrac{\\pi}{2}$。\n\n- 定义域：$(-1, +1)$，值域：$\\arcsin x:[-\\dfrac{\\pi}{2},+\\dfrac{\\pi}{2}]$，$\\arccos x:[0,\\pi]$。\n\n- 单调性：$y=\\arcsin x$单调增，$y=\\arccos x$单调减。\n\n- 奇偶性：$y=\\arcsin x$为奇函数。\n\n- 有界性：$\\vert\\arcsin x\\vert\\leqslant\\dfrac{\\pi}{2}$，$0\\leqslant\\arccos x\\leqslant\\pi$。\n\n- 性质：$\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}(-1\\leqslant x\\leqslant 1)$\n\n对反弦函数性质进行证明：\n\n令$f(x)=\\arcsin x+\\arccos x$，对其求导得：$f'(x)=\\dfrac{1}{\\sqrt{1-x^2}}-\\dfrac{1}{1-x^2}=0$，所以$f(x)$是个常数函数。\n\n又$f(0)=\\dfrac{\\pi}{2}$，所以该函数等于$\\dfrac{\\pi}{2}$。\n\n 反正切函数：\n\n 反余切函数：\n\n反切函数有如下特征：\n\n- 特殊函数值：$\\arctan 0=0$，$\\arctan\\dfrac{\\pi}{6}=\\dfrac{\\sqrt{3}}{3}=$，$\\arctan 1=\\dfrac{\\pi}{4}$，$\\arctan\\sqrt{3}=\\dfrac{\\pi}{3}$，$\\textrm{arccot}\\,0=\\dfrac{\\pi}{2}$，$\\textrm{arccot}\\,\\sqrt{3}=\\dfrac{\\pi}{6}$，$\\textrm{arccot}\\,1=\\dfrac{\\pi}{4}$，$\\textrm{arccot}\\,\\dfrac{\\sqrt{3}}{3}=\\dfrac{\\pi}{3}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-1-2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#基本初等函数与初等函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "基本初等函数与初等函数",
  "kind": "概念",
  "text": "- 定义域：$(-\\infty, +\\infty)$，值域：$\\arctan x:\\left[-\\dfrac{\\pi}{2},+\\dfrac{\\pi}{2}\\right]$，$\\textrm{arccot}\\,x:[0,\\pi]$。\n\n- 单调性：$y=\\arctan x$单调增，$y=\\textrm{arccot}\\,x$单调减。\n\n- 奇偶性：$y=\\arctan x$为奇函数。\n\n- 有界性：$\\vert\\arctan x\\vert\\leqslant\\dfrac{\\pi}{2}$，$0\\leqslant\\textrm{arccot}\\,x\\leqslant\\pi$。\n\n- 性质：$\\arctan x+\\textrm{arccot}\\,x=\\dfrac{\\pi}{2}(-\\infty<x<+\\infty)$；$\\arctan x=\\textrm{arccot}\\,x\\dfrac{1}{x}=\\dfrac{\\pi}{2}-\\arctan x$。\n\n\\subparagraph初等函数 \\leavevmode\n\n由基本初等函数经过有限次四则运算与符合步骤且可以被一个式子所表示。\n\n幂指函数$u(x)^{v(x)}=e^{v(x)\\ln u(x)}$也是初等函数。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#分段函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "分段函数",
  "kind": "定理",
  "text": "\\leavevmode\n\nx的不同范围对应不同的法则，经典形式如下：\n\n$$\n\\notag\n    f(x)=\\left\\{ \\begin{array}{lcl}\n        \\psi_1(x), &  & x>x_0 \\\\\n        a,         &  & x=x_0 \\\\\n        \\psi_2(x), &  & x<x_0\n    \\end{array}\n    \\right.\n    \\text{或}f(x)=\\left\\{ \\begin{array}{clc}\n        \\psi(x), &  & x\\neq x_0 \\\\\n        a,       &  & x=x_0\n    \\end{array}\n    \\right.\n$$\n\n\\subparagraph绝对值函数 \\leavevmode\n\n$\n    y=\\vert x\\vert=\\left\\{\n    \\begin{array}{lcl}\n        x,  &  & x\\geqslant 0 \\\\\n        -x, &  & x<0\n    \\end{array}\n    \\right.\n    $\n\n\\subparagraph符号函数 \\leavevmode\n\n$\n    y=\\textrm{sgn}\\,x=\\left\\{\n    \\begin{array}{lcl}\n        1,  &  & x>0 \\\\\n        0,  &  & x=0 \\\\\n        -1, &  & x<0\n    \\end{array}\n    \\right.\n    $\n\n\\subparagraph取整函数 \\leavevmode\n\n$x$为实数，不超过$x$的最大整数称为其整数部分$[x]$，其定义域为$R$，值域为$Z$。\n\n-$x-1<[x]\\leqslant x$。\n\n-$\\lim\\limits_{x\\to 0^+}[x]=0$。\n\n-$\\lim\\limits_{x\\to 0^-}[x]=-1$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-1-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#平移变换",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "平移变换",
  "kind": "总结",
  "text": "\\subparagraph左右平移 \\leavevmode\n\n$f(x)$沿$x$轴左移$x_0$个单位长度得到$f(x+x_0)$，向右移动$x_0$个单位则得到$f(x-x_0)$：\n\n\\subparagraph上下平移 \\leavevmode\n\n$f(x)$沿$y$轴上移$y_0$个单位长度得到$f(x)+y_0$，向下移动$y_0$个单位则得到$f(x)-y_0$：",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-1-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#对称变换",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "对称变换",
  "kind": "概念",
  "text": "\\subparagraph上下对称 \\leavevmode\n\n 将$f(x)$关于$x$轴对称得到$-f(x)$：\n\n\\subparagraph左右对称 \\leavevmode\n\n 将$f(x)$关于$y$轴对称得到\n$f(-x)$：\n\n\\subparagraph原点对称 \\leavevmode\n\n 将$f(x)$关于$x$轴$y$轴即关于原点对称得到$-f(-x)$：\n\n\\subparagraph反函数对称 \\leavevmode\n\n 将$f(x)$关于$y=x$轴对称得到$f^{-1}(x)$：\n\n\\subparagraph函数绝对值 \\leavevmode\n\n 保留$f(x)$函数值在$[0,\\infty]$的部分，并对$[-\\infty,0]$部分进行上下对称：\n\n\\subparagraph自变量绝对值 \\leavevmode\n\n 先只保留$f(x)$定义域在$[0,\\infty]$的部分，然后在$[-\\infty,0]$部分使用$[0,\\infty]$的部分进行左右对称：",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-1-7",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#伸缩变换",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "伸缩变换",
  "kind": "总结",
  "text": "\\subparagraph水平伸缩 \\leavevmode\n\n 纵坐标不变，当$k>1$时，$y=f(kx)$是$y=f(x)$缩短k倍得到，当$0<k<1$时，$y=f(kx)$是$y=f(x)$伸长k倍得到：\n\n\\subparagraph垂直伸缩 \\leavevmode\n\n 横坐标不变，$y=kf(x)$的对应纵坐标为$y=f(x)$对应纵坐标的$k$倍。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#极坐标系图像",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "极坐标系图像",
  "kind": "概念",
  "text": "#### 极坐标系\n\n#### 极坐标定义\n \\leavevmode\n\n- 极点：平面内的一个定点$O$。\n\n- 极轴：自极点引出的射线$Ox$。\n\n- 极坐标系：选定长度单位、角度单位与正方向（通常为逆时针）建立的坐标系。\n\n- 极径：设$M$为屏幕一点，极点$O$与$M$的距离$\\vert OM\\vert$，记为$\\rho$。\n\n- 极角：以极轴$Ox$为始边，射线$OM$为终边的角$xOM$为$M$的极角，记为$\\theta$。\n\n- 极坐标：有序数对$\\rho$、$\\theta$为$M$的极坐标，记为$M(\\rho,\\theta)$。\n\n#### 极坐标系转换\n \\leavevmode\n\n设$M$为平面一点，直角坐标为$(x,y)$，极坐标$(\\rho,\\theta)$，其关系是：\n\n$\\left\\{\\begin{array}{l}\n    x=\\rho\\cos\\theta \\\\\n    y=\\rho\\sin\\theta\n\\end{array}\\right.$，$\\left\\{\\begin{array}{l}\n    \\rho^2=x^2+y^2 \\\\\n    \\tan\\theta=\\dfrac{y}{x}(x\\neq0)\n\\end{array}\\right.$\n\n#### 常用极坐标方程\n \\leavevmode\n\n直线的极坐标方程：\n\n- 从极点$O$发出的一条射线：$\\tan\\theta=k$（由于$k$不知道符号所以不能直接转换为反三角函数）。\n\n- 过点$(a,0)$且垂直于极轴的直线的极坐标方程：$\\rho=a\\sec\\theta=\\dfrac{a}{\\cos\\theta}$。\n\n- 过点$\\left(a,\\dfrac{\\pi}{2}\\right)$且平行于极轴的直线的极坐标方程：$\\rho=a\\csc\\theta=\\dfrac{a}{\\sin\\theta}$。\n\n圆的极坐标方程：\n\n- 圆心为极点，半径为$r$的圆的极坐标方程：$\\rho=r$。\n\n- 圆心$O'(r,0)$，半径为$r$的圆的极坐标方程：$\\rho=2r\\cos\\theta$。\n\n- 圆心$O'\\left(r,\\dfrac{\\pi}{2}\\right)$，半径为$r$的圆的极坐标方程：$\\rho=2r\\sin\\theta$。\n %\n- 圆心$O'(\\rho_0,0)$，半径为$r$的圆的极坐标方程：\n\n抛物线的极坐标方程：\n\n-$y=ax^2$的极坐标方程：$\\rho=\\dfrac{1}{a}\\tan\\theta\\sec\\theta$。\n\n-$y^2=ax$的极坐标方程：$\\rho=a\\cot\\theta\\csc\\theta$。\n\n#### 描点法\n\n#### 心形线（外摆线）\n \\leavevmode\n\n 心形线又称为心脏线，表示是一个圆上的固定一点在它绕着与其相切且半径相同的另外一个圆周滚动时所形成的轨迹。\n\n 表达式：水平为$r=a(1\\pm\\cos\\theta)$，垂直为$r=a(1\\pm\\sin\\theta)$。一般为$r=a(1-\\cos\\theta)$即为下图所示，如果里面的符号为＋则心尖开口向左。\n\n 其中$r$为线的极径，$\\theta$为极角，$a$为形状参数且$a>0$，周期为$2\\pi$。\n\n在直角坐标系下表达式：$x^2+y^2+a\\cdot x=a\\cdot\\sqrt{x^2+y^2}$和$x^2+y^2-a\\cdot x=a\\cdot\\sqrt{x^2+y^2}$。\n\n参数方程：$x=a\\cdot(2\\cdot\\cos(t)-cos(2\\cdot t))$与$y=a\\cdot(2\\cdot\\sin(t)-sin(2\\cdot t))$。\n\n水平心形线对应参数： \\leavevmode\n\n$\\theta$ ｜$0$ ｜$\\dfrac{\\pi}{6}$ ｜$\\dfrac{\\pi}{4}$ ｜$\\dfrac{\\pi}{3}$ ｜$\\dfrac{\\pi}{2}$ ｜$\\dfrac{2\\pi}{3}$ ｜$\\dfrac{3\\pi}{4}$ ｜$\\dfrac{5\\pi}{6}$ ｜$\\pi$\n$r$ ｜$0$ ｜$\\dfrac{2-\\sqrt{3}}{2}a$ ｜$\\dfrac{2-\\sqrt{2}}{2}a$ ｜$\\dfrac{1}{2}a$ ｜$a$ ｜$\\dfrac{3}{2}a$ ｜$\\dfrac{2+\\sqrt{2}}{2}a$ ｜$\\dfrac{2+\\sqrt{3}}{2}a$ ｜$2a$\n\n#### 玫瑰线\n \\leavevmode\n\n 表达式：$r=a\\sin(n\\theta)$，周期为$\\dfrac{2\\pi}{n}$。\n\n 当$n$为3时为三叶，2时为四叶，$\\dfrac{3}{2}$为六叶。三叶时周期为$\\dfrac{2\\pi}{3}$。\n\n 直角坐标系下表达式：$x=a\\cdot\\sin(n\\cdot\\theta)\\cdot\\cos(\\theta)$与$y=a\\cdot\\sin(n\\cdot)\\cdot\\sin(\\theta)$\n\n三叶玫瑰线对应参数： \\leavevmode\n\n$\\theta$ ｜$0$ ｜$\\dfrac{\\pi}{12}$ ｜$\\dfrac{\\pi}{6}$ ｜$\\dfrac{\\pi}{4}$ ｜$\\dfrac{\\pi}{3}$ ｜$\\dfrac{5\\pi}{12}$ ｜$\\dfrac{\\pi}{2}$ ｜$\\dfrac{7\\pi}{12}$ ｜$\\dfrac{3\\pi}{2}$\n$r$ ｜$0$ ｜$\\dfrac{\\sqrt{2}}{2}a$ ｜$a$ ｜$\\dfrac{\\sqrt{2}}{2}a$ ｜$0$ ｜$-frac{\\sqrt{2}}{2}a$ ｜$-a$ ｜$-frac{\\sqrt{2}}{2}a$ ｜$0$\n\n#### 阿基米德螺线\n \\leavevmode\n\n 表达式：$r=a\\theta$，其中$a>0$，$\\theta\\geqslant 0$由0开始增大时$r$也在不断增大。\n\n#### 伯努利双扭线\n \\leavevmode\n\n设定线段$F_1F_2$长度为$2a$，伯努利双扭线上所有点M满足$MF_1\\cdot MF_2=a^2$。\n\n表达式：$r^2=2a^2\\cos 2\\theta$或$r^2=2a^2\\sin 2\\theta$。\n\n直角坐标系下表达式：$(x^2+y^2)^2=2a^2(x^2-y^2)$。\n\n#### 直角坐标系下画极坐标图像\n\n 令$\\theta$为$x$，令$r$为$y$。如心形线$r=2(1-\\cos\\theta)$：\n\n 按直角坐标系的图就可以计算出对应的$r$从而能画出对应的图像。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#参数法",
  "subject": "gaoshu",
  "topic": "参数法",
  "title": "参数法",
  "kind": "概念",
  "text": "如果很难使用直角坐标或极坐标来表示曲线，那么可以引入一个新的变量参数来表示，即得到参数方程：$\n    \\left\\{\n    \\begin{array}{lcl}\n        x=x(t) \\\\\n        y=y(t)\n    \\end{array}\n    \\right.\n$\n\n#### 摆线（平摆线）\n\n摆线，又称旋轮线、圆滚线，是一个圆沿一条直线滚动时，圆边界上一定点所形成的轨迹。\n\n令圆半径为$r$，摆点与圆心所成直线所转动夹角对应弧度为$t$，其中$t\\in[0,2\\pi]$，所对应参数方程为：$\n    \\left\\{\n    \\begin{array}{lcl}\n        x=r(t-\\sin t) \\\\\n        y=r(1-\\cos t)\n    \\end{array}\n    \\right.\n$\n\n#### 星形线（内摆线）\n\n 与半径为$r$的定圆内切的半径为$\\dfrac{r}{4}$的动圆沿定圆无滑动地滚动，动圆上一点的轨迹称为星形线。\n\n 令$t$表示摆点与圆心的连线所构成夹角的弧度，其中$t\\in[0,2\\pi]$，得对应参数方程：$\n    \\left\\{\n    \\begin{array}{lcl}\n        x=r\\cos^3t \\\\\n        y=r\\sin^3t\n    \\end{array}\n    \\right.\n    $\n\n 由$\\cos^2t+\\sin^2t=1$得到直角坐标方程：$x^{\\frac{2}{3}}+y^{\\frac{2}{3}}=r^{\\frac{2}{3}}$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#数列",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "数列",
  "kind": "定理",
  "text": "#### 等差数列\n\n首项为$a_1$，公差为$d(d\\neq 0)$的数列：$a_1,a_1+d,a_1+2d\\cdots a_1+(n-1)d$。\n\n通项公式：$a_n=a_1+(n-1)d$。\n\n前$n$项和：$S_n=\\dfrac{n}{2}[2a_1+(n-1)d]=\\dfrac{n}{2}(a_1+a_n)$\n\n#### 等比数列\n\n首项为$a_1$，公比为$q(q\\neq 0)$的数列：$a_1,a_1q,a_1a^2\\cdots a_1q^{n-1}$。\n\n通项公式：$a_n=a_1q^{n-1}$。\n\n前$n$项和：$S_n=\n    \\left\\{\n    \\begin{array}{lcl}\n        na_1,                   &  & r=1     \\\\\n        \\dfrac{a_1(1-r^n)}{1-r}, &  & r\\neq 1\n    \\end{array}\n    \\right.$\n\n若首项为1，则$1+r+r^2+\\cdots+r^{n-1}=\\dfrac{1-r^n}{1-r}(r\\neq 1)$。\n\n则对无穷的极限为$\\dfrac{1}{1-r}$。\n\n\\subsubsection{常见数列前\\texorpdfstring{$n$}n项和}\n\n-$\\sum_{k=1}^nk=1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$。\n\n-$\\sum_{k=1}^nk^2=1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}{6}$。\n\n-$\\sum_{k=1}^n\\dfrac{1}{k(k+1)}=\\dfrac{1}{1\\times 2}+\\dfrac{1}{2\\times 3}+\\cdots+\\dfrac{1}{n(n+1)}=\\dfrac{n}{n+1}$。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#三角函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "三角函数",
  "kind": "定理",
  "text": "#### 基本关系\n\n$\\csc\\alpha=\\dfrac{1}{\\sin\\alpha},\\sec\\alpha=\\dfrac{1}{\\cos\\alpha},\\cot\\alpha=\\dfrac{1}{\\tan\\alpha},\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha},\\cot\\alpha=\\dfrac{\\cos\\alpha}{\\sin\\alpha}$。\n\n$\\sin^2\\alpha+\\cos^2\\alpha=1,1+\\tan^2\\alpha=\\sec^2\\alpha,1+\\cot^2\\alpha=\\csc^2\\alpha$。\n\n$\\cos^2\\alpha=1-\\sin^2\\alpha=(1+\\sin\\alpha)(1-\\sin\\alpha)$，$\\sin^2\\alpha=1-\\cos^2\\alpha=(1+\\cos\\alpha)(1-\\cos\\alpha)$。\n\n#### 诱导公式\n\n奇变偶不变，符号看象限。奇指前面添加的常数项是否为$\\pi$的整数倍，是就需要改变函数，看象限指添加了常数后整体的符号看函数所在象限的符号。\n\n-$\\sin(\\dfrac{\\pi}{2}\\pm\\alpha)=\\cos\\alpha$\n\n-$\\cos(\\dfrac{\\pi}{2}\\pm\\alpha)=\\mp\\sin\\alpha$\n\n-$\\sin(\\pi\\pm\\alpha)=\\mp\\sin\\alpha$\n\n-$\\cos(\\pi\\pm\\alpha)=-\\cos\\alpha$\n\n#### 倍角公式\n\n$\\sin 2\\alpha=2\\sin\\alpha\\cos\\alpha$，$\\cos 2\\alpha=\\cos^2\\alpha-\\sin^2\\alpha=(\\sin\\alpha+\\cos\\alpha)(\\cos\\alpha-\\sin\\alpha)=1-2\\sin^2\\alpha=2\\cos^2\\alpha-1$。\n\n$1+\\sin2\\alpha=(\\sin\\alpha+\\cos\\alpha)^2$，$1-\\sin2\\alpha=(\\sin\\alpha-\\cos\\alpha)^2$。\n\n$\\sin 3\\alpha=-4\\sin^3\\alpha_3\\sin\\alpha,\\cos 3\\alpha=4\\cos^3\\alpha-3\\cos\\alpha$。\n\n$\\tan 2\\alpha=\\dfrac{2\\tan\\alpha}{1-\\tan^2\\alpha},\\cot 2\\alpha=\\dfrac{\\cot^2\\alpha-1}{2\\cot\\alpha}$。\n\n#### 半角公式\n\n$\\sin^2\\dfrac{\\alpha}{2}=\\dfrac{1}{2}(1-\\cos\\alpha),\\cos^2\\dfrac{\\alpha}{2}=\\dfrac{1}{2}(1+\\cos\\alpha)\\text{（降幂公式）}$。\n\n$\\sin\\dfrac{\\alpha}{2}=\\pm\\sqrt{\\dfrac{1-\\cos\\alpha}{2}},\\cos\\dfrac{\\alpha}{2}=\\pm\\sqrt{\\dfrac{1+\\cos\\alpha}{2}}$。\n\n$\\tan\\dfrac{\\alpha}{2}=\\dfrac{1-\\cos\\alpha}{\\sin\\alpha}=\\dfrac{\\sin\\alpha}{1+\\cos\\alpha}=\\pm\\sqrt{\\dfrac{1-\\cos\\alpha}{1+\\cos\\alpha}}=\\dfrac{1}{\\cot\\dfrac{\\alpha}{2}}$。\n\n#### 和差公式\n\n$\\sin$和$\\tan$的和差公式更容易考到。\n\n$\\sin(\\alpha\\pm\\beta)=\\sin\\alpha\\cos\\beta\\pm\\cos\\alpha\\sin\\beta,\\cos(\\alpha\\pm\\beta)=\\cos\\alpha\\cos\\beta\\mp\\sin\\alpha\\sin\\beta$。\n\n$\\tan(\\alpha\\pm\\beta)=\\dfrac{\\tan\\alpha\\pm\\tan\\beta}{1\\mp\\tan\\alpha\\tan\\beta},\\cot(\\alpha\\pm\\beta)=\\dfrac{\\cot\\alpha\\cot\\beta\\mp 1}{\\cot\\beta\\pm\\cot\\alpha}$。\n\n#### 积化和差公式\n\n和差化积与积化和差不需要背，都是和差公式的推导。\n\n$\\sin\\alpha\\cos\\beta=\\dfrac{1}{2}[\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)],\\cos\\alpha\\sin\\beta=\\dfrac{1}{2}[\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)]$。\n\n$\\cos\\alpha\\cos\\beta=\\dfrac{1}{2}[\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)],\\sin\\alpha\\sin\\beta=\\dfrac{1}{2}[\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)]$。\n\n#### 和差化积公式\n\n$\\sin\\alpha+\\sin\\beta=2\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2},\\sin\\alpha-\\sin\\beta=2\\sin\\dfrac{\\alpha-\\beta}{2}\\cos\\dfrac{\\alpha+\\beta}{2}$。\n\n$\\cos\\alpha+\\cos\\beta=2\\cos\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2},\\cos\\alpha-\\cos\\beta=-2\\sin\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}$。\n\n推理和差化积公式，如第一个：\n\n$\\sin\\alpha+\\sin\\beta=\\sin\\left(\\dfrac{\\alpha+\\beta}{2}+\\dfrac{\\alpha-\\beta}{2}\\right)+\\sin\\left(\\dfrac{\\alpha+\\beta}{2}-\\dfrac{\\alpha-\\beta}{2}\\right)=$\n\n$\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}+\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}+\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$\n\n$-\\cos\\dfrac{\\alpha+\\beta}{2}\\sin\\dfrac{\\alpha-\\beta}{2}=2\\sin\\dfrac{\\alpha+\\beta}{2}\\cos\\dfrac{\\alpha-\\beta}{2}$\n\n#### 万能公式\n\n可以视为特殊的倍角公式，将单角变为半角。\n\n若$u=\\tan\\dfrac{x}{2}(-\\pi<x<\\pi)$，则$\\sin x=\\dfrac{2u}{1+u^2},\\cos x=\\dfrac{1-u^2}{1+u^2}$。\n\n#### 辅助角公式\n\n$a\\sin x+b\\cos x=\\sqrt{a^2+b^2}\\sin(x+\\phi)$，$\\sin\\phi=\\dfrac{b}{\\sqrt{a^2+b^2}}$，$\\cos\\phi=\\dfrac{a}{\\sqrt{a^2+b^2}}$。\n\n#### 正弦定理\n\n$\\dfrac{a}{\\sin A}=\\dfrac{b}{\\sin B}=\\dfrac{c}{\\sin C}$。\n\n#### 余弦定理\n\n$a^2=b^2+c^2-2bc\\cos A$，$b^2=a^2+c^2-2ac\\cos B$，$c^2=a^2+b^2-2ab\\cos C$。\n\n#### 三角形面积公式\n\n$S_{\\vartriangle ABC}=\\dfrac{1}{2}bc\\sin A=\\dfrac{1}{2}ac\\sin B=\\dfrac{1}{2}ab\\sin C$。\n\n#### 海伦公式\n\n$S_{\\vartriangle ABC}=\\sqrt{p(p-a)(p-b)(p-c)}$，$p=\\dfrac{a+b+c}{2}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#反三角函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "反三角函数",
  "kind": "概念",
  "text": "因为只有单调函数才有反函数，所以对于三角函数必须选取其单调区间才有反函数。一般只讨论三角函数在其主值区间上的反函数（主值区间即包括锐角最大的单调区间）。\n\n可以画单位圆直观思考。\n\n#### 反正弦函数\n\n正弦函数$y=\\sin x$在主值区间$\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$上的反函数就是反正弦函数，记为$y=\\arcsin x$或$y=\\sin^{-1}x$。表示其区间上正弦值等于$x$的一个角。\n\n反正弦函数与正弦函数图像一样都是关于原点对称、严格单调递增、有界的奇函数。\n\n当$x\\in[-1,1]$时，$\\arcsin(-x)=-\\arcsin x$。\n\n当$x\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$时，$\\arcsin(\\sin x)=x$。\n\n当$x\\in[-1,1]$时，$\\sin(\\arcsin x)=x$。\n\n#### 反余弦函数\n\n余弦函数$y=\\cos x$在主值区间$[0,\\pi]$上的反函数就是反余弦函数，记为$y=\\arccos x$或$y=\\cos^{-1}x$。表示其区间上余弦值等于$x$的一个角。\n\n反余弦函数是严格单调递减、有界的非奇非偶函数，图像关于$\\left(0,\\dfrac{\\pi}{2}\\right)$对称。\n\n因为关于$\\left(0,\\dfrac{\\pi}{2}\\right)$对称，若$x_1,x_2\\in(-1,1)$，$x_1=-x_2$，则$\\arccos x_1+\\arccos x_2=\\pi$。\n\n当$x\\in(-1,1)$时，$\\arccos(-x)+\\arccos x=\\pi$。\n\n当$x\\in[0,\\pi]$时，$\\arccos(\\cos x)=x$。\n\n当$x\\in[-1,1]$时，$\\cos(\\arccos x)=x$。\n\n当$x\\in[-1,1]$时，$\\sin(\\arccos x)=\\sqrt{1-x^2}$。令$u=\\arccos x\\in[0,\\pi]$，所以$\\cos u=x$，从而$\\sin(\\arccos x)=\\sin u=\\sqrt{1-\\cos^2u}=\\sqrt{1-x^2}$。\n\n同理可得$\\cos(\\arcsin x)=\\sqrt{1-x^2}$。\n\n$\\arcsin x+\\arccos x=\\dfrac{\\pi}{2}$。证明需要分三种情况。\n\n#### 反正切函数\n\n正切函数$y=\\tan x$在主值区间$\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$上的反函数就是反正切函数，记为$y=\\arctan x$或$y=\\tan^{-1}x$。表示其区间上正切值等于$x$的一个角。\n\n正切函数是关于原点对称、严格单调递增、有界的奇函数。值域为$\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$，定义域为$(-\\infty,+\\infty)$。\n\n当$x\\in(-\\infty,+\\infty)$时，$\\arctan(-x)=-\\arctan x$。\n\n当$x\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$，$\\arctan(\\tan x)=x$。\n\n当$x\\in(-\\infty,+\\infty)$时，$\\tan(\\arctan x)=x$。\n\n例题：求$\\arctan\\dfrac{1}{2}+\\arctan\\dfrac{1}{3}$的值。\n\n解：由于求反正切函数不方便，所以转换为正切函数来求。\n\n令$\\arctan\\dfrac{1}{2}=\\alpha$，$\\arctan\\dfrac{1}{3}=\\beta$，所以$\\tan\\alpha=\\dfrac{1}{2}$，$\\tan\\beta=\\dfrac{1}{3}$。\n\n又由反正切函数的定义，$\\alpha,\\beta\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$，$\\alpha+\\beta\\in(-\\pi,\\pi)$。\n\n想求出$\\alpha+\\beta$就要利用和差公式：$\\therefore\\tan(\\alpha+\\beta)=\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}=1$。\n\n即$\\alpha+\\beta=\\dfrac{\\pi}{4}=\\arctan\\dfrac{1}{2}+\\arctan\\dfrac{1}{3}$。\n\n#### 反余切函数\n\n余切函数$y=\\cot x$在主值区间$[0,\\pi]$上的反函数就是反余切函数，记为$y=\\textrm{arccot}\\,x$或$y=\\cot^{-1}x$。表示其区间上余切值等于$x$的一个角。\n\n余切函数是关于$\\left(0,\\dfrac{\\pi}{2}\\right)$中心对称、严格单调递减、有界的非奇非偶函数。值域为$(0,\\pi)$，定义域为$(-\\infty,+\\infty)$。\n\n当$x\\in(-\\infty,+\\infty)$时，$\\textrm{arccot}(-x)=\\pi-\\textrm{arccot}\\,x$。\n\n当$x\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$，$\\textrm{arccot}(\\cot x)=x$。\n\n当$x\\in(-\\infty,+\\infty)$时，$\\cot(\\textrm{arccot}\\,x)=x$。\n\n当$x\\in(-\\infty,0)\\cup(0,+\\infty)$时，$\\tan(\\textrm{arccot}\\,x)=\\dfrac{1}{x}$，$\\cot(\\arctan x)=\\dfrac{1}{x}$。\n\n当$x\\in(-\\infty,+\\infty)$时，$\\arctan x+\\textrm{acrccot}\\,x=\\dfrac{\\pi}{2}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#指数运算法则",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "指数运算法则",
  "kind": "定理",
  "text": "$a^\\alpha\\cdot a^\\beta=a^{\\alpha+\\beta},\\dfrac{a^\\alpha}{a^\\beta}=a^{\\alpha-\\beta},(a^\\alpha)^\\beta=a^{\\alpha\\beta},(ab)^\\alpha=a^\\alpha b^\\alpha,(\\dfrac{a}{b})^\\alpha=\\dfrac{a^\\alpha}{b^\\alpha}$。\n\n其中$a$，$b$为正实数，$\\alpha$，$\\beta$为任意实数。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#对数运算法则",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "对数运算法则",
  "kind": "定理",
  "text": "重点：\n\n-$\\log_a(MN)=\\log_aM+\\log_aN$（积的对数=对数的和）。\n\n-$\\log_a(\\dfrac{M}{N})=\\log_aM-\\log_aN$（商的对数=对数的差）。\n\n-$\\log_aM^n=n\\log_aM$（幂的对数=对数的倍数）。\n\n-$\\log_a\\sqrt[n]{M}=\\dfrac{1}{n}\\log_aM$。\n\n所以以后多项相乘相除乘方开方都取对数进行化简。\n\n对于分数相减的对数先通分再进行对数减法。\n\n如下面这个题（先不要求能直接证明）：\n\n例题：证明$\\dfrac{1}{x+1}<\\ln(1+\\dfrac{1}{x})<\\dfrac{1}{x}$，其中$x>0$。\n\n证明：首先因为证明中间项无法进行直接处理，又看到是一个对数，所以进行通分：$\\ln(1+\\dfrac{1}{x})=\\ln\\dfrac{x+1}{x}=\\ln(x+1)-\\ln x$。\n\n又因为是证明该中间式在一个区间，所以很明显会想到拉格朗日中值定理：$f(b)-f(a)=f'(\\xi)(b-a)$。\n\n得到原式$=f'(\\xi)=(\\ln\\xi)'=\\dfrac{1}{\\xi}$，又中值定理下$a<\\xi<b$且$x>0$，所以$\\dfrac{1}{b}<\\dfrac{1}{\\xi}<\\dfrac{1}{a}$，得到$0<\\dfrac{1}{x+1}<\\dfrac{1}{\\xi}<\\dfrac{1}{x}$。\n\n所以原式$\\dfrac{1}{x+1}<\\ln(1+\\dfrac{1}{x})<\\dfrac{1}{x}$成立。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#一元二次方程基础",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "一元二次方程基础",
  "kind": "定理",
  "text": "- 基本格式为$ax^2+bx+c=0(a\\neq 0)$。\n\n- 如果$\\Delta=\\sqrt{b^2-4ac}\\geqslant 0$，根的公式为$x_{1,2}=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$，其中如果等于0为唯一实根，如果大于0为二重实根，如果$\\Delta<0$则得到共轭复数根$-\\dfrac{b}{2a}\\pm\\dfrac{\\sqrt{4ac-b^2}}{2a}i$。\n\n- 根与系数的关系（韦达定理）为$x_1+x_2=-\\dfrac{b}{a},x_1x_2=\\dfrac{c}{a}$。\n\n- 抛物线顶点为$(-\\dfrac{b}{2a},c-\\dfrac{b^2}{4a})$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-7",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#因式分解公式",
  "subject": "gaoshu",
  "topic": "因式分解公式",
  "title": "因式分解公式",
  "kind": "定理",
  "text": "重点为3、4、7和11的公式。\n\n-$(a+b)^2=a^2+2ab+b^2$。\n\n-$(a-b)^2=a^2-2ab+b^2$。\n\n-$(a+b)^3=a^3+3a^2b+3ab^2+b^3$。\n\n-$(a-b)^3=a^3-3a^2b+3ab^2-b^3$。\n\n-$a^2-b^2=(a+b)(a-b)$。\n\n-$a^3-b^3=(a-b)(a^2+ab+b^2)$。\n\n-$a^3+b^3=(a+b)(a^2-ab+b^2)$。\n\n-$n$为正整数时，$a^n-b^n=(a-b)(a^{n-1}+a^{n-2}b+\\cdots+ab^{n-2}+b^{n-1})$。\n\n-$n$为正偶数时，$a^n-b^n=(a+b)(a^{n-1}-a^{n-2}b+\\cdots+ab^{n-2}-b^{n-1})$。\n\n-$n$为正奇数时，$a^n+b^n=(a+b)(a^{n-1}-a^{n-2}b+\\cdots-ab^{n-2}+b^{n-1})$。\n\n- 二项式定理$(a+b)^n=\\sum_{k=0}^nC_n^ka^{n-k}b^k=a^n+na^{n-1}b+\\dfrac{n(n-1)}{2!}a^{n-2}b^2+\\cdots+\\dfrac{n(n-1)\\cdots(n-k+1)}{k!}a^{n-k}b^k+\\cdots+nab^{n-1}+b^n$。\n\n对于二项式定理需要记忆，后面的幂比较简单，而前面的系数比较困难，可以使用杨辉三角形来记忆：",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-8",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#阶乘与双阶乘",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "阶乘与双阶乘",
  "kind": "定理",
  "text": "-$n!=1\\times 2\\times 3\\times\\cdots\\times n$，其中$0!=1$。\n\n-$(2n)!!=2\\times 4\\times 6\\times\\cdots\\times(2n)=2^n\\cdot n!$。\n\n-$(2n-1)!!=1\\times 3\\times 5\\times\\cdots\\times(2n-1)$。\n\n以后的华里士公式（点火公式，在定积分中）会使用到，如下面的题目：\n\n例题：计算$\\int_0^{\\frac{\\pi}{2}}\\sin^{10}x\\textrm{d}x$与$\\int_0^{\\frac{\\pi}{2}}\\cos^9x\\textrm{d}x$。\n\n解：原式1为偶数次幂，所以$=\\dfrac{9}{10}\\cdot\\dfrac{7}{8}\\cdot\\dfrac{5}{6}\\cdot\\dfrac{3}{4}\\cdot\\dfrac{1}{2}\\cdot\\dfrac{\\pi}{2}=\\dfrac{\\pi}{2}\\cdot\\dfrac{9!!}{10!!}$。\n\n原式2为奇数次幂，所以$=\\dfrac{8}{9}\\cdot\\dfrac{6}{7}\\cdot\\dfrac{4}{5}\\cdot\\dfrac{2}{3}=\\dfrac{8!!}{9!!}$",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-0-perpare-perpare-s2-9",
  "repo": "R08",
  "source": "advanced-math/knowledge/0-perpare/perpare.tex#常用不等式",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "常用不等式",
  "kind": "定理",
  "text": "非常重要。\n\n#### 绝对值不等式\n\n若$a$，$b$为实数，则：\n\n-$\\vert a\\pm b\\vert\\leqslant\\vert a\\vert+\\vert b\\vert$。\n\n- 推广公式一到离散区间：$\\vert a_1\\pm a_2\\pm a_3\\pm\\cdots\\pm a_n\\vert\\leqslant\\vert a_1\\vert+\\vert a_2\\vert+\\cdots+\\vert a_n\\vert$。\n\n- 推广公式一到连续区间且$f(x)$在$[a,b](a<b)$上可积：$\\vert\\int_a^bf(x)\\textrm{d}x\\vert\\leqslant\\int_a^b\\vert f(x)\\vert\\textrm{d}x$。因为符号不一定相同的面积代数和一定小于同为正的面积代数和。\n\n-$\\vert\\vert a\\vert-\\vert b\\vert\\vert\\leqslant\\vert a-b\\vert$。后式子为两点之差，前式子可以看作$a$、$b$两点与0之间的距离的差，若异号则两者必然抵消一部分，若同号则就等于后式。\n\n#### 根号不等式\n\n公式一非常重要，即算数平均值大几何平均值。\n\n$a,b,c>0$：\n\n-$\\sqrt{ab}\\leqslant\\dfrac{a+b}{2}\\leqslant\\sqrt{\\dfrac{a^2+b^2}{2}}$。\n\n-$\\sqrt[3]{abc}\\leqslant\\dfrac{a+b+c}{3}\\leqslant\\dfrac{a^2+b^2+c^2}{3}$。\n\n例题：证明函数$f(x)=\\dfrac{x}{1+x^2}$在$(-\\infty,+\\infty)$内有界。\n\n证明：可以使用极限，若极限存在则函数有界，这里使用有界性定义与不等式来完成。\n\n①当$x=0$时，$f(0)=\\dfrac{0}{1}$，有界。\n\n②当$x\\neq 0$时，原式分式上下都有$x$，所以简化公式：$f(x)=\\dfrac{\\dfrac{x}{x}}{\\dfrac{1+x^2}{x}}=\\dfrac{1}{\\dfrac{1}{x}+x}$。\n\n$\\because$需要证明有界性，以及根号不等式下需要参数大于0，所以需要证明$\\vert f(x)\\vert=\\dfrac{1}{\\dfrac{1}{\\vert x\\vert}+\\vert x\\vert}\\leqslant M$\n\n又$\\because\\dfrac{a+b}{2}\\geqslant\\sqrt{ab}$，$\\therefore \\dfrac{\\dfrac{1}{\\vert x\\vert}+\\vert x\\vert}{2}\\geqslant\\sqrt{\\dfrac{1}{\\vert x\\vert}\\cdot\\vert x\\vert}=1$\n\n$\\therefore\\vert f(x)\\vert=\\dfrac{1}{\\dfrac{1}{\\vert x\\vert}+\\vert x\\vert}\\leqslant\\dfrac{1}{2}$。\n\n故整个函数在$R$上有界。\n\n#### 指数不等式\n\n设$a>b>0$，则$\n\\left\\{\n\\begin{array}{lcl}\n    a^n>b^n,   &  & \\text{当}n>0\\text{时} \\\\\n    a^n<b^n, &  & \\text{当}n<0\\text{时}\n\\end{array}\n\\right.$。\n\n$e^x\\geqslant x+1(\\forall x)$。\n\n#### 分数不等式\n\n若$0<a<x<b,0<c<y<d$，则$\\dfrac{c}{b}<\\dfrac{y}{x}<\\dfrac{d}{a}$。\n\n#### 三角不等式\n\n-$\\sin x<x<\\tan x(0<x<\\dfrac{\\pi}{2})$。\n\n-$\\sin x<x(x>0)$。\n\n-$\\arctan x\\leqslant x\\leqslant\\arcsin x(0\\leqslant x\\leqslant 1)$。\n\n#### 对数不等式\n\n-$x-1\\geqslant\\ln x(x>0)$。\n\n-$\\dfrac{1}{1+x}<\\ln(1+\\dfrac{1}{x})<\\dfrac{1}{x}(x>0)$。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#邻域",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "邻域",
  "kind": "概念",
  "text": "#### 一维\n\n邻域定义：以点$x_0$为中心的任何开区间为点$x_0$的邻域，记为$U(x_0)$。\n\n$\\delta$邻域定义：设$\\delta$为一正数，则称开区间$(x_0-\\delta,x_0+\\delta)$为点$x_0$的$\\delta$邻域，记作$U(x_0,\\delta)$。$x_0$称为邻域的中心，$\\delta$为邻域的半径。\n\n去心$\\delta$邻域就是去除$x_0$的$\\delta$邻域，记为$\\mathring{U}(x_0,\\delta)$，左$\\delta$邻域就是左侧的去心$\\delta$邻域，记为$U^+(x_0,\\delta)$，右$\\delta$邻域就是右侧的去心$\\delta$邻域，记为$U^-(x_0,\\delta)$。\n\n#### 二维\n\n邻域定义：设点$P_0(x_0,y_0)$为$xOy$平面上的一点，$\\delta$为某一个正数，与点$P_0(x_0,y_0)$的距离小于$\\delta$的点$P(x,y)$的全体，称为点$P_0$的$\\delta$邻域，记为$U(P_0,\\delta)$。\n\n同理可以得到去心$\\delta$邻域的定义。\n\n$\\delta$邻域的几何意义：以$P_0(x_0,y_0)$为中心，以$\\delta>0$为半径的圆内部所有的点。\n\n函数的邻域就是一个区间，所以比如函数在某点的某邻域内有定义，就是说明函数在这个点的附近有定义，这个附近的距离没有必要说明。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s1-2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "函数",
  "kind": "概念",
  "text": "- 函数即$y=f(x),x\\in D$，$x$为自变量，$y$为因变量，$D$为定义域。\n\n- 一个$x$对应一个$y$，一个$y$可能对应多个$x$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s1-2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#反函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "反函数",
  "kind": "概念",
  "text": "$y=f(x)$，定义域为$D$，值域为$R$，若对于每一个$y\\in R$，必然存在$x\\in D$使$y=f(x)$成立，则可以定义一个新函数$x=\\psi(y)$，这个函数就是$y=f(x)$的反函数，一般记作$x=f^{-1}(y)$，其定义域为$R$，值域为$D$，对于反函数，原来的函数称为直接函数。\n\n- 严格单调函数必然有反函数，即函数导数恒正或恒负必然有反函数。\n\n-$x=f^{-1}(y)$与$y=f(x)$在同一坐标系中完全重合。\n\n-$y=f^{-1}(x)$与$y=f(x)$关于$y=x$对称。\n\n-$f[f^{-1}(x)]$（$f[\\psi(x)]$）或$f^{-1}[f(x)]=x$（$\\psi[f(x)]$）变为$x$，称为湮灭。\n\n可以验算一下性质四。\n\n已知$y=e^x$和$y=\\ln x$是一对反函数，$y=\\ln e^x=f^{-1}(f(x))=x$。\n\n反函数的求法：\n\n- 求值域。\n\n- 求解。（用$y$表示$x$）\n\n- 互换$xy$。\n\n例题：若函数$y=f(x)$的反函数为$y=f^{-1}(x)$，则求$y=f(2x-1)+1$的反函数的解析式。\n\n解：整理$y=f(2x-1)+1$，得到$f(2x-1)=y-1$，所以求反函数就是交换$xy$。\n\n这里将$2x-1$当作$x$，$y-1$当作$y$，所以得到反函数$2x-1=f^{-1}(y-1)$。\n\n所以得到$x=\\dfrac{f^{-1}(y-1)+1}{2}$。\n\n所以交换表示方法其反函数就是$y=\\dfrac{f^{-1}(x-1)+1}{2}$。\n\n例题：已知$f(x)=\\dfrac{1}{1-x^2}$（$x<-1$），求$f^{-1}(-\\dfrac{1}{3})$。\n\n解：由于是反函数，所以$x$对应$y$，$y$对应$x$。\n\n求$f^{-1}(-\\dfrac{1}{3})$的值，对应反函数的$x=-\\dfrac{1}{3}$，$y=f^{-1}(-\\dfrac{1}{3})$的值。\n\n即求原函数的$y=-\\dfrac{1}{3}$，$x=f(-\\dfrac{1}{3})$的值。\n\n所以$\\dfrac{1}{1-x^2}=-\\dfrac{1}{3}$求$x$的值。\n\n即$1-x^2=-3$，$x=\\pm2$，又$x<-1$，则$x=-2$。\n\n例题：已知$f(x)=\\dfrac{1-2x}{1+x}$，函数$g(x)$的图像与函数$y=f^{-1}(x+1)$的图像关于$y=x$对称，求$g(5)$。\n\n解：由于函数$g(x)$的图像与函数$y=f^{-1}(x+1)$的图像关于$y=x$对称，所以$g(x)$与$f^{-1}(x+1)$也是反函数。\n\n所以要求$g(x)$，就要求$f^{-1}(x+1)$。\n\n$\\because y=f^{-1}(x+1)$，$\\therefore x+1=f(y)$，$x=f(y)-1$，即$y=f(x)-1$。\n\n$\\therefore g(x)=y=f(x)-1$，$g(5)=f(5)-1=-\\dfrac{5}{2}$。\n\n例题：已知$f(x)=\\dfrac{1}{2}(x^2+\\sqrt{x+1})$（$x\\geqslant0$）的反函数为$f^{-1}(x)$，求不等式$f^{-1}(x+1)>3$的解集。\n\n解：当$x\\geqslant0$时，$f(x)$明显是一个单调递增函数，所以根据反函数性质，其反函数在这个区间上增减性不变也是递增的。\n\n$f(0)=\\dfrac{1}{2}$，即$f^{-1}(x)$在定义域$[\\dfrac{1}{2},+\\infty)$上也是递增函数。\n\n又$f^{-1}(x+1)>3$，对其求反函数：$f(f^{-1}(x+1))>f(3)$，即$x+1>f(3)$，且$x+1\\geqslant\\dfrac{1}{2}$，得出$x>\\dfrac{9}{2}$。\n\n例题：求函数$y=f(x)=\\ln(x+\\sqrt{x^2+1})$的反函数$f^{-1}(x)$的表达式及其定义域。\n\n解：首先研究$f(x)$本身，因为$\\ln(x)$的定义域必然要求大于0，而任意实数$x$都有下面不等式成立：\n\n$x+\\sqrt{x^2+1}>x+\\vert x\\vert \\geqslant 0$，所以$x\\in R$。\n\n而研究其奇偶性：\n\n$f(-x)=\\ln(-x+\\sqrt{x^2+1})=\\ln(\\dfrac{1}{\\sqrt{x^2+1}+x})=-\\ln(x+\\sqrt{x^2+1})=-f(x)$\n\n所以该函数为奇函数。\n\n对其求单调性，即通过链式法则求导：\n\n$\\dfrac{\\rm{d}\\textit{y}}{\\rm{d}\\textit{x}}=\\dfrac{1}{x+\\sqrt{x^2+1}}\\cdot (1+\\dfrac{2x}{2\\sqrt{x^2+1}})=\\dfrac{1}{\\sqrt{x^2+1}}>0$。\n\n所以该函数严格单调增。\n\n然后求$y$的反函数：\n\n$\\because y=\\ln(x+\\sqrt{x^2+1})$，对于对数函数就要把它变为指数函数：\n\n$e^y=e^{\\ln(x+\\sqrt{x^2+1})}=x+\\sqrt{x^2+1}$\n\n$\n    \\begin{aligned}\n        \\because -y & =-\\ln(x+\\sqrt{x^2+1})          \\\\\n                    & =\\ln(\\dfrac{1}{x+\\sqrt{x^2+1}}) \\\\\n                    & =\\ln(\\sqrt{x^2+1}-x)           \\\\\n        e^{-y}      & =\\sqrt{x^2+1}-x\n    \\end{aligned}\n$\n\n$\n    \\begin{aligned}\n        \\therefore e^y-e^{-y} & =2x                   \\\\\n        x                     & =\\dfrac{e^y-e^{-y}}{2}\n    \\end{aligned}\n$\n\n解出了用$x$表示$y$的函数表达$x=f^{-1}(y)$，即反函数，则$f^{-1}(x)=\\dfrac{e^x-e^{-x}}{2}$\n\n这种曲线为一种常见曲线：\n\n-$\\dfrac{e^x-e^{-x}}{2}$：双曲正弦。\n\n-$\\dfrac{e^x+e^{-x}}{2}$：双曲余弦。（为一种悬链线）\n\n-$\\ln(x+\\sqrt{x^2+1})$：反双曲正弦。\n\n-$\\ln(x+\\sqrt{x^2-1})$：反双曲余弦。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s1-2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#复合函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "复合函数",
  "kind": "概念",
  "text": "设$y=f(u)$的定义域为$D_1$，函数$u=g(x)$在$D$上有定义且$g(D)\\in D$，则由$y=f[g(x)],x\\in D$确定的函数称为由函数$u=g(x)$和函数$y=f(u)$构成的复合函数，定义域为$D$，$u$为中间变量。\n\n例题：设$f(x)=x^2$，$f[\\psi(x)]=-x^2+2x+3$，且$\\psi(x)\\geqslant 0$，求$\\psi(x)$以及定义域与值域。\n\n解：广义化：$\\because f(x)=x^2$，$\\therefore f[\\psi(x)]=\\psi^2(x)=-x^2+2x+3$\n\n又$\\because\\psi(x)\\geqslant 0$，$\\therefore\\sqrt{\\psi^2(x)}=\\sqrt{-x^2+2x+3}=\\psi(x)\\geqslant 0$\n\n$\\therefore x\\in[-1,3]$\n\n$\\therefore\\dfrac{\\rm{d}\\psi(\\textit{x})}{\\rm{d}\\textit{x}}=(-x^2+2x+3)'=-2x+2=0$\n\n$\\therefore x=1$，驻点为1\n\n又$\\because(-x^2+2x+3)''=-2<0$\n\n$\\therefore$驻点为1时为最大值点，最大值为$\\psi(1)=2$\n\n又$\\because\\psi(-1)=\\psi(3)=0$，$\\therefore$最小值为0\n\n$\\therefore\\psi(x)\\in[0,2]$\n\n注意：$\\sqrt{-x^2+2x+3}$为什么最值与$-x^2+2x+3$一致？\n\n例题：设$\n    f(x)=\\left\\{\n    \\begin{array}{lcl}\n        \\ln\\sqrt{x}, &  & x\\geqslant 1 \\\\\n        2x-1,        &  & x< 1\n    \\end{array}\n    \\right.\n$，求$f[f(x)]$\n\n首先广义化：$\n    f[f(x)]=\\left\\{\n    \\begin{array}{lcl}\n        \\ln\\sqrt{f(x)}, &  & f(x)\\geqslant 1 \\\\\n        2f(x)-1,        &  & x<1\n    \\end{array}\n    \\right.\n$\n\n分段点为$1$，然后对$f(x)$画图：\n\n所以将定义域分为三段：$[-\\infty ,1],[1,e^2],[e^2, +\\infty]$，然后根据不同定义域对应的不同函数再代回$f[f(x)]$：\n\n$$\n    f[f(x)]=\\left\\{\n    \\begin{array}{lcl}\n        \\ln\\sqrt{\\ln\\sqrt{x}}, &  & x\\geqslant e^2   \\\\\n        \\ln x-2,               &  & 1\\geqslant x<e^2 \\\\\n        4x-3,                  &  & x<1\n    \\end{array}\n    \\right.\n$$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#函数的特性",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "函数的特性",
  "kind": "概念",
  "text": "#### 有界性\n\n定义：函数$f(x)$的定义域$D$，数集$I\\in D$，如果存在某正数$M$，对于任一$x\\in I$，有$\\vert f(x)\\vert\\leqslant M$，则$f(x)$在$I$上有界，否则无界。\n\n函数指明定义域区间才能讨论函数是否有界。\n\n如果$f(x)\\geqslant M$有下界，$f(x)\\leqslant M$则有上界。\n\n#### 单调性\n\n定义：$y=f(x)$，$x\\in D$，如果$\\forall x_1,x_2\\in D$且$x_1<x_2$，有$f(x_1)<f(x_2)$，则函数在$D$上单调递增。反之则单调递减。\n\n$\\begin{matrix}\n        \\dfrac{\\rm{d}\\textit{y}}{\\rm{d}\\textit{x}}>0 & \\Rightarrow & (x_1-x_2)[f(x_1)-f(x_2)]>0 & \\Rightarrow & f(x)\\nearrow \\\\\n        \\dfrac{\\rm{d}\\textit{y}}{\\rm{d}\\textit{x}}<0 & \\Rightarrow & (x_1-x_2)[f(x_1)-f(x_2)]<0 & \\Rightarrow & f(x)\\searrow\n    \\end{matrix}\n$\n\n#### 奇偶性\n\n- 奇函数：关于原点对称，$f(-x)=-f(x)$。\n\n- 偶函数：关于$y$轴对称，$f(-x)=f(x)$。\n\n- 对于定义在$[-l,l]$上的任意函数$f(x)$，$F_1(x)=f(x)-f(-x)$必为奇函数，$F_2(x)=f(x)+f(-x)$必为偶函数。可以参考上面所说的双曲正弦与双曲余弦函数。\n\n- 若奇函数在0处有定义，那么$f(0)=0$。\n\n- 若偶函数在0处存在导数，那么$f'(0)=0$，即$x=0$，曲线必然水平，即导数为0。\n\n- 若函数$y=f(x)$的函数关于直线$x=T$对称的充分必要条件是$f(x)=f(2T-x)/f(x+T)=f(x-T)$。（令$T-x=t$进行换元计算得到）\n\n无论$f(x)$是什么函数，$F(x)=f(x)+f(-x)$都是偶函数，$G(x)=x(f(x)+f(-x))$都是奇函数。\n\n#### 周期性\n\n$f(x+T)=f(x)$，其中$T$为周期。\n\n#### 重要结论\n\n- 若$f(x)$为可导的偶函数，则$f'(x)$为奇函数。\n\n- 若$f(x)$为可导的奇函数，则$f'(x)$为偶函数。\n\n- 若$f(x)$为周期函数，则$f'(x)$也为周期函数且周期不变。\n\n- 连续的奇函数的一切原函数都是偶函数。\n\n- 连续的偶函数的原函数中仅有一个原函数是奇函数。\n\n- 若连续函数$f(x)$以$T$为周期且$\\int_{0}^{T}f(x)\\rm{d}\\textit{x}=0$，则$f(x)$的一切原函数也以$T$为周期。\n\n- 若$f(x)$在有限区间$(a,b)$中可导且$f'(x)$有界，则$f(x)$在$(a,b)$有界。（某一函数在固定区间内变化率是有界的，则变化范围是有界的）\n\n注意：0和1处的函数定义应该注意。\n\n如当a为0时：$f(b)-f(a)=f'(\\xi )(b-a)=f(b)=bf'(\\xi)$\n\n如$f(x)>xf(1)$变形为$\\dfrac{f(x)}{x}>f(1)$，辅助函数$F(x)=\\dfrac{f(x)}{x}$\n\n所以加减法警惕0，乘除法警惕1。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s2-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#数列的极限",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "数列的极限",
  "kind": "总结",
  "text": "极限就是一个无限逼近某个值的过程。如$\\dfrac{n}{n+1}$这个分式在$n$无限增大的时候会无限逼近1，这个1叫做极限值，所以写成$\\lim\\limits_{n\\to\\infty}\\dfrac{n}{n+1}=1$。\n\n所以从另一个方面更精确的指出一个数$N>0$，使得数列下标大于$N$的项与极限值之间的距离始终保持在$(0,\\xi)$之间，即$\\dfrac{1}{n+1}<\\xi$，即$n>\\dfrac{1}{\\xi}-1$，所以任意正数都能得到从$N>\\dfrac{1}{\\xi}-1$项开始之后都有$\\left\\vert\\dfrac{n}{n+1}-1\\right\\vert<\\xi$。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#定义",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "定义",
  "kind": "概念",
  "text": "通过定义可以证明极限。\n\n#### 数列极限定义\n\n定义：设$\\{x_n\\}$为一数列，若存在常数$a$，对于不论任意小的$\\xi>0$，总存在正整数$N$，使$n>N$时，$\\vert x_n-a\\vert<\\xi$恒成立，则常数$a$为数列$\\{x_n\\}$的极限，或$\\{x_n\\}$收敛于$a$，记为：$\\lim\\limits_{x\\to\\infty}x_n=a$或$x_n\\to a(n\\to\\infty)$。\n\n常用语言（$\\xi-N$语言）：$\\lim\\limits_{x\\to\\infty}x_n=a\\Leftrightarrow\\forall\\xi>0,\\exists N\\in N_+$，当$n>N$时，恒有$\\vert x_n-a\\vert<\\xi$。\n\n如果不存在该数$a$，则称数列$x_n$发散。\n\n即无论给出多么小的$\\xi$，总可以找到一项从该项之后函数值与极限值之间的差小于$\\xi$，即更接近这个极限值而不是其他任何值，所以该数列趋向于极限值。\n\n#### 极限证明\n\n令$x_n$为通项，$a$为极限值，$\\xi$为任意正数。\n\n- 写出$\\vert x_n-a|<\\xi$。\n\n- 反解出项数$n<g(\\xi)$。\n\n- 取$N=[g(\\xi)]+1$，所以令$n>N$就可以证明。\n\n例题：用定义证明$\\lim\\limits_{x\\to\\infty}\\left[1+\\dfrac{(-1)^n}{n}\\right]=1$\n\n证明：①计算距离：$\\left\\vert 1+\\dfrac{(-1)^n}{n}-1\\right\\vert=\\left\\vert\\dfrac{(-1)^n}{n}\\right\\vert<\\xi$。\n\n②解得到：$\\dfrac{1}{n}<\\xi$，反解为$n>\\dfrac{1}{\\xi}$。\n\n③取整：$N=\\left[\\dfrac{1}{\\xi}\\right]+1$。\n\n$\\therefore\\forall\\xi>0$，当$n>N$时，就有$n>\\dfrac{1}{\\xi}$，使得$\\left\\vert 1+\\dfrac{(-1)^n}{n}-1\\right\\vert=\\left\\vert\\dfrac{(-1)^n}{n}\\right\\vert<\\xi$。\n\n$\\therefore$证明完毕。\n\n例题：用定义证明$\\lim\\limits_{n\\to\\infty}q^n=0$（$q$为常数且$\\vert q\\vert<1$）。\n\n证明：①$\\vert q^n-0\\vert<\\xi$。\n\n②$\\vert q^n\\vert<\\xi$，取对数进行反解$n\\ln\\vert q\\vert<\\ln\\xi$，又因为$\\vert q\\vert<1$，所以$\\ln\\vert q\\vert<0$，所以得到$n>\\dfrac{\\ln\\xi}{\\ln\\vert q\\vert}$。（若$\\xi>1$则$n$就是负数，这样条件必然成立）\n\n③取$N=\\left[\\dfrac{\\ln\\xi}{\\ln\\vert q\\vert}\\right]+1$。\n\n$\\therefore$当$n>N$时，必然$n>\\dfrac{\\ln\\xi}{\\ln\\vert q\\vert}$，有$\\vert q^n-0\\vert<\\xi$。\n\n故$\\lim\\limits_{n\\to\\infty}q^n=0$。\n\n#### 数列绝对值\n\n定理：若$\\lim\\limits_{x\\to\\infty}a_n=A$，则$\\lim\\limits_{x\\to\\infty}\\vert a_n\\vert=\\vert A\\vert$。\n\n证明：$\\because\\lim\\limits_{n\\to\\infty}a_n=A\\Leftrightarrow\\forall\\xi>0,\\exists N>0,\\text{当}n>N$，恒有$\\vert a_n-A\\vert<\\xi$。\n\n又由重要不等式$\\vert\\vert a\\vert-\\vert b\\vert\\vert\\leqslant\\vert a-b\\vert$，所以$\\vert\\vert a_n\\vert-\\vert A\\vert\\vert\\leqslant\\xi$。\n\n所以恒成立，证明完毕。\n\n从这个题推出：$\\lim\\limits_{n\\to\\infty}a_n=0\\Leftrightarrow\\lim\\limits_{n\\to\\infty}\\vert a_n\\vert=0$。所以如果我们以后需要证明某一数列极限为0，可以证明数列绝对值极限0，而数列绝对值绝对时大于等于0的，所以由夹逼准则，其中小的一头已经固定为0了，所以只用找另一个偏大的数列夹逼所证明数列就可以了。\n\n#### 子数列\n\n定义：从数列${a_n}:a_1,a_2,\\cdots,a_n,\\cdots$中选取无穷多项并按原来顺序组成的新数列就称为原数列的子列，记为$\\{a_{n_k}\\}:a_{n_1},a_{n_2},\\cdots,a_{n_k},\\cdots$。\n\n若$n_k$分别取奇数和偶数，则得到奇数项数列与偶数项数列。\n\n定理：若数列$\\{a_n\\}$收敛，则其任何子列$\\{a_{n_k}\\}$也收敛，且极限值相同。\n\n所以对于其变式我们用到更多：\n\n- 若一个数列$\\{a_n\\}$能找到一个发散的子列，那该数列发散。\n\n- 若一个数列$\\{a_n\\}$能找到两个极限值不同的收敛子列，那么这个数列发散。\n\n- 若一个数列$\\{a_n\\}$，则其奇数子列与偶数子列都收敛于同一个值。\n\n例如对于数列$\\{(-1)^n\\}$，能找到其奇数子列收敛于-1，偶数子列收敛于1，所以收敛值不同，原数列发散。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#性质",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "性质",
  "kind": "定理",
  "text": "#### 唯一性\n\n定义：若数列$\\{x_n\\}$收敛于$a$，则$a$是唯一的。\n\n证明：设$\\lim\\limits_{n\\to\\infty}a_n=A$且$\\lim\\limits_{n\\to\\infty}a_n=B$且$A\\neq B$。\n\n不如设$A>B$。任意取$\\xi=\\dfrac{A-B}{2}>0$。\n\n$\\because\\lim\\limits_{n\\to\\infty}a_n=A$\n\n$\\therefore\\exists N_1>0$，当$n>N_1$时，$\\vert a_n-A\\vert<\\dfrac{A-B}{2}$。\n\n得到$\\dfrac{A+B}{2}<a_n<\\dfrac{3A-B}{2}$并设为式子一。\n\n又$\\because\\lim\\limits_{n\\to\\infty}a_n=B$\n\n$\\therefore\\exists N_2>0$，当$n>N_2$时，$\\vert a_n-B\\vert<\\dfrac{A-B}{2}$。\n\n得到$\\dfrac{3A-B}{2}<a_n<\\dfrac{A+B}{2}$并设为式子二。\n\n取$N=\\max\\{N_1,N_2\\}$，当$n>N$时，式子一二同时成立，而$A\\neq B$，则这两个式子不可能同时成立，矛盾。\n\n同理$A<B$时也矛盾，所以$A\\neq B$矛盾。\n\n#### 有界性\n\n定义：若数列$\\{x_n\\}$极限存在，则数列有界。\n\n即$\\lim\\limits_{n\\to\\infty}a_n=A$，则存在$M>0$，使得$\\vert a_n\\vert\\leqslant M$。\n\n证明：由极限定义，取$\\xi=1$。\n\n$\\because\\lim\\limits_{n\\to\\infty}a_n=A$\n\n$\\therefore\\exists N>0$，当$n>N$时，$\\vert a_n-A\\vert<1$。\n\n$\\because\\text{重要不等式}\\,\\vert\\vert a_n\\vert-\\vert A\\vert\\vert\\leqslant\\vert a_n-A\\vert$\n\n$\\therefore n>N$时，$\\vert\\vert a_n\\vert-\\vert A\\vert\\vert<1\\Rightarrow\\vert a_n\\vert<1+\\vert A\\vert$\n\n取$M=\\max\\{\\vert a_1\\vert,\\vert a_2\\vert,\\cdots,\\vert a_N\\vert,1+\\vert A\\vert\\}$\n\n$\\forall n$，有$\\vert a_n\\vert\\leqslant M$\n\n所以数列极限存在则数列有界。\n\n但是数列有界不一定极限存在，如$1+(-1)^n$。\n\n#### 保号性\n\n较重要。也称为脱帽法。\n\n定义：若数列$\\{x_n\\}$存在极限$\\lim\\limits_{n\\to\\infty}a_n=a\\neq 0$，则存在正整数$N$，当$n>N$时$a_n$都与$a$同号。\n\n简单来说，就是极限大于0，后面一部分数列大于0，极限小于0，后面一部分数列小于0。\n\n推论，戴帽法：若数列$\\{a_n\\}$从某项开始$a_n\\geqslant b$，且$\\lim\\limits_{n\\to\\infty}a_n=a$，则$a\\geqslant b$。这里一定要带等号。\n\n证明：设$A>0$，取$\\xi=\\dfrac{A}{2}>0$。\n\n$\\because\\lim\\limits_{n\\to\\infty}a_n=A$\n\n$\\therefore\\exists N>0$，当$n>N$时，$\\vert a_n-A\\vert<\\dfrac{A}{2}\\Rightarrow a_n>\\dfrac{A}{2}>0$\n\n同理得证极限值小于0的情况。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#海涅定理（归结原则）",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "海涅定理（归结原则）",
  "kind": "定理",
  "text": "定理：设$f(x)$在$\\mathring{U}(x_0,\\delta)$内有定义，则$\\lim\\limits_{x\\to x_0}f(x)=A$存在$\\Leftrightarrow$对任何$\\mathring{U}(x_0,\\delta)$内以$x_0$为极限的数列$\\{x_n\\}(x_n\\neq x_0)$，极限$\\lim\\limits_{n\\to\\infty}f(x_n)=A$存在。\n\n海涅定理用来连接数列极限与函数极限。在极限存在下他们可以相互转换。\n\n例题：求$\\lim\\limits_{n\\to\\infty}\\left(n\\tan\\dfrac{1}{n}\\right)^{n^2}$（$n\\in N^+$）。\n\n解：首先将式子由数列极限变为函数极限，并取$x=\\dfrac{1}{n}$：$\\lim\\limits_{x\\to 0}\\left(\\dfrac{\\tan x}{x}\\right)^{\\frac{1}{x^2}}$。\n\n又$u^v=e^{v\\ln u}$，对式子取指数$\\therefore =e^{\\lim\\limits_{x\\to 0}\\frac{1}{x^2}\\ln\\frac{\\tan x}{x}}$\n\n又在$x\\to 0$下使用等价无穷小$\\ln (1+x)\\sim x$，$\\therefore \\ln(1+g(x))\\sim g(x),g(x)\\to 0$。\n\n而在$x\\to 0$时，根据等价无穷小$\\tan x\\sim x$，所以$\\dfrac{\\tan x}{x}$趋于1，不满足趋于0的条件。\n\n所以正好将$\\ln\\dfrac{\\tan x}{x}$变形$\\ln\\left(1+\\dfrac{\\tan x}{x}-1\\right)$。\n\n$\\therefore \\ln\\left(1+\\dfrac{\\tan x}{x}-1\\right)\\sim\\dfrac{\\tan x}{x}-1$，$\\dfrac{\\tan x}{x}-1\\to 0$。\n\n又根据泰勒展开$\\tan x-x=x+\\dfrac{x^3}{3}+o(x^3)-x-0\\cdot x^3=\\dfrac{x^3}{3}$。\n\n$\\therefore e^{\\lim\\limits_{x\\to 0}\\frac{1}{x^2}\\ln\\frac{\\tan x}{x}}=e^{\\lim\\limits_{x\\to 0}\\frac{1}{x^2}\\frac{\\tan x-x}{x}}=e^{\\lim\\limits_{x\\to 0}\\frac{1}{x^2}\\cdot\\frac{x^2}{3}}=e^{\\frac{1}{3}}$\n\n根据海涅定理：取$x=\\dfrac{1}{n},n\\to\\infty$，$\\lim\\limits_{n\\to\\infty}\\left(n\\tan\\dfrac{1}{n}\\right)^{n^2}=e^{\\frac{1}{3}}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#函数极限定义",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "函数极限定义",
  "kind": "概念",
  "text": "#### 极限定义\n\n定义：设函数$f(x)$在点$x_0$的某一个去心邻域有定义，若存在常数$A$，对于任意给定的$\\xi>0$，总存在正数$\\delta$，使得当$0<\\vert x-x_0\\vert<\\delta$式，对应的函数值$f(x)$都满足不等式$\\vert f(x)-A\\vert <\\xi$，则$A$就是函数$f(x)$当$x\\to x_0$时的极限，记作$\\lim\\limits_{x\\to x_0}f(x)=A$或$f(x)\\rightarrow A(x\\rightarrow x_0)$。\n\n写成$\\xi-\\delta$语言：$\\lim\\limits_{x\\to x_0}f(x)=A\\Leftrightarrow\\forall\\xi>0,\\exists\\delta>0,\\text{当}0<\\vert x-x_0\\vert<\\delta$时，有$\\vert f(x)-A\\vert<\\xi$。\n\n而对于趋向无穷时，写成$\\xi-X$语言：$\\lim\\limits_{x\\to\\infty}f(x)=A\\Leftrightarrow\\forall\\xi>0,\\exists X>0,\\text{当}\\vert x\\vert>X$时，有$\\vert f(x)-A\\vert<\\xi$。\n\n注意：这里的趋向分为六种：$x\\to x_0$、$x\\to x_0^+$、$x\\to x_0^-$、$x\\to\\infty$、$x\\to\\infty^+$、$x\\to\\infty^-$。\n\n#### 单侧极限\n\n当$x\\to x_0^-$存在的极限称为左极限，当$x\\to x_0^+$存在的极限称为右极限。\n\n#### 函数极限存在条件\n\n函数存在的充要条件是：\n\n-$\\lim\\limits_{x\\to x_0}f(x)\\Leftrightarrow\\lim\\limits_{x\\to x_0^-}f(x)=\\lim\\limits_{x\\to x_0^+}f(x)=A$。\n\n- 函数脱帽法：$\\lim\\limits_{x\\to x_0}f(x)\\Leftrightarrow f(x)=A+\\alpha(x),\\lim\\limits_{x\\to x_0}\\alpha(x)=0$，后面的$\\alpha(x)$就是函数与极限值的误差。\n\n#### 极限情况总结\n\n过程 ｜$n\\to\\infty$ ｜$x\\to\\infty$ ｜$x\\to+\\infty$ ｜$x\\to-\\infty$\n时刻 ｜$N$\n从此时刻以后 ｜$n>N$ ｜$\\vert x\\vert>N$ ｜$x>N$ ｜$x<-N$\n$f(x)$ ｜$\\vert f(x)-A\\vert<\\xi$\n\n过程 ｜$x\\to x_0$ ｜$x\\to x_0^+$ ｜$x\\to x_0^-$\n时刻 ｜$\\delta$\n从此时刻以后 ｜$0<\\vert x-x_0\\vert<\\delta$ ｜$0<x-x_0<\\delta$ ｜$-\\delta<x-x_0<0$\n$f(x)$ ｜$\\vert f(x)-A\\vert<\\xi$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#性质",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "性质",
  "kind": "定理",
  "text": "与数列极限性质类似，且任何$x$的趋向三个性质都是成立的。\n\n#### 唯一性\n\n定义：若极限存在，则极限唯一。\n\n#### 局部有界性\n\n定义：若极限存在且为$A$，则存在正常数$M$和$\\delta$，使得当$0<\\vert x-x_0\\vert<\\delta$时，有$\\vert f(x)\\vert\\leqslant M$。\n\n- 极限存在是函数局部有界性的充分不必要条件。\n\n-$f(x)$在$[a,b]$上连续，则$f(x)$在$[a,b]$上有界。\n\n- 有限个有界函数与有界函数的和、差、积仍是有界函数。\n\n- 若$f'(x)$在有限区间$(a,b)$内有界，则$f(x)$在该区间内有界。\n\n对于结论二，可以利用极限存在必然连续的概念，对$f(x)$在区间两端求极限从而证明有界。这里两端的极限不要求是一样的，因为两端不一样的极限表明该趋向点的极限值不存在，但是仍然有界。\n\n证明结论四：\n\n利用中值定理：$f(b)-f(a)=f'(\\xi)(b-a)$。\n\n令$x\\in(a,b),x_0\\in(a,b)$。其中这两个值不知道大小，只知道范围。\n\n代入中值定理：$f(x)-f(x_0)=f'(\\xi)(x-x_0)$\n\n$\n\\begin{aligned}\n    \\vert f(x)\\vert & =\\vert f(x_0)+f'(\\xi)(x-x_0)\\vert \\\\\n    & \\leqslant\\vert f(x_0)\\vert+\\vert f'(\\xi)\\vert\\vert x-x_0\\vert\\text{ （重要绝对值不等式）} \\\\\n    & \\leqslant\\vert f(x_0)\\vert+K\\cdot(b-a) \\\\\n    & \\leqslant M\n\\end{aligned}\n$\n\n例题：函数$f(x)=\\dfrac{\\vert x\\vert\\sin(x-2)}{x(x-1)(x-2)^2}$在哪个区间内有界()。\n\n$A.(-1,0)$$B.(0,1)$$C.(1,2)$$D.(2,3)$\n\n解：看选项，0，1，2出现次数较多，所以从$B$选项开始检查是否有界：\n\n$\\lim\\limits_{x\\to 0^-}\\dfrac{\\vert x\\vert\\sin(x-2)}{x(x-1)(x-2)^2}=(-1)\\cdot\\dfrac{-\\sin 2}{(-1)\\cdot 4}=-\\dfrac{\\sin 2}{4}$\n\n所以趋于$0^-$的一段有界。\n\n同理$\\lim\\limits_{x\\to 0^+}\\dfrac{\\vert x\\vert\\sin(x-2)}{x(x-1)(x-2)^2}=\\dfrac{\\sin 2}{4}$。\n\n所以趋于$0^+$的一段有界。\n\n$\\lim\\limits_{x\\to 1^-}\\dfrac{\\vert x\\vert\\sin(x-2)}{x(x-1)(x-2)^2}$中$(x-1)$为0且在分母位置，所以极限为$\\infty$，该区间无界。\n\n所以$(0,1)$无界，$B$排除。\n\n同理$\\lim\\limits_{x\\to 1^+}\\dfrac{\\vert x\\vert\\sin(x-2)}{x(x-1)(x-2)^2}$也无穷大而无界。\n\n所以$(1,2)$无界，$C$排除。\n\n$\\lim\\limits_{x\\to 2^+}\\dfrac{\\vert x\\vert\\sin(x-2)}{x(x-1)(x-2)^2}$中不管前面的项，而看到后面的$\\dfrac{\\sin(x-2)}{(x-2)^2}$。\n\n因为$\\lim\\limits_{x\\to 0}\\dfrac{\\sin x}{x}=1$，所以对于$\\lim\\limits_{x\\to 2}\\dfrac{\\sin(x-2)}{(x-2)}=1$，所以下面还有一个$x-2$，所以还是为$\\infty$。\n\n所以$(2,3)$无界，$D$排除。\n\n验证-1处是否有界：\n\n$\\lim\\limits_{x\\to -1}\\dfrac{\\vert x\\vert\\sin(x-2)}{x(x-1)(x-2)^2}=-\\dfrac{\\sin 3}{18}$。\n\n所以该处有界，所以选$A$。\n\n#### 局部保号性\n\n定义：若极限存在，则存在常数$\\delta>0$，使得当$0<\\vert x-x_0\\vert<\\delta$时，$f(x)$与$A$同号。\n\n简单来说，函数值在$x\\to x_0$时函数值与极限值同号。\n\n证明：首先根据极限存在定义：$\\forall\\xi>0,\\exists\\delta>0,0<\\vert x-x_0\\vert<\\delta$时，恒有$\\vert f(x)-A\\vert<\\xi$。\n\n$\\Rightarrow -\\xi<f(x)-A<\\xi$。\n\n$\\Rightarrow A-\\xi<f(x)<A+\\xi$。\n\n任意取$\\xi=\\dfrac{A}{2}>0\\Rightarrow f(x)>A-\\dfrac{A}{2}=\\dfrac{A}{2}>0$。\n\n证明完毕。\n\n关于$\\xi$的取值问题，为什么不能取到令结果为负的值，因为请注意这个取值得到的区间并不是$f(x)$的范围，而是对$f(x)$所在区间的陈述，其是无尽逼近$A$的，所以取多大的区间都无所谓。\n\n推论：若函数值在$x\\to x_0$时都非负或非正，极限值为$A$，那么$A$与此时函数值同号。不能去除等号。\n\n关于三个性质要注意自变量取值的双向性，所以需要留意下面几个函数：\n\n-$\\lim\\limits_{x\\to\\infty}e^x$不存在，因为$\\lim\\limits_{x\\to +\\infty}e^x=+\\infty$，$\\lim\\limits_{x\\to -\\infty}e^x=0$。\n\n-$\\lim\\limits_{x\\to 0}\\dfrac{\\sin x}{\\vert x\\vert}$不存在，因为$\\lim\\limits_{x\\to 0^+}\\dfrac{\\sin x}{\\vert x\\vert}=1$，$\\lim\\limits_{x\\to 0^-}\\dfrac{\\sin x}{\\vert x\\vert}=-1$。\n\n-$\\lim\\limits_{x\\to\\infty}\\arctan x$不存在，因为$\\lim\\limits_{x\\to +\\infty}\\arctan x=\\dfrac{\\pi}{2}$，$\\lim\\limits_{x\\to -\\infty}\\arctan x=-\\dfrac{\\pi}{2}$。\n\n-$\\lim\\limits_{x\\to 0}[x]$不存在，因为$\\lim\\limits_{x\\to 0^+}[x]=0$，$\\lim\\limits_{x\\to 0^-}[x]=-1$",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s4-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#极限运算法则",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限运算法则",
  "kind": "定理",
  "text": "- 有限个无穷小的和是无穷小。\n\n- 有界函数与无穷小的乘积是无穷小。\n\n- 有限个无穷小的乘积是无穷小。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s4-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#数列极限",
  "subject": "gaoshu",
  "topic": "数列极限",
  "title": "数列极限",
  "kind": "定理",
  "text": "若$\\lim\\limits_{n\\to\\infty}x_n=a$，$\\lim\\limits_{n\\to\\infty}y_n=b$则：\n\n-$\\lim\\limits_{n\\to\\infty}x_n\\pm y_n=a\\pm b$。\n\n-$\\lim\\limits_{n\\to\\infty}(x_ny_n)=\\lim\\limits_{n\\to\\infty}x_n\\lim\\limits_{n\\to\\infty}y_n=ab$。\n\n-$\\lim\\limits_{n\\to\\infty}\\dfrac{x_n}{y_n}=\\dfrac{\\lim\\limits_{n\\to\\infty}x_n}{\\lim\\limits_{n\\to\\infty}y_n}=\\dfrac{a}{b}(b\\neq 0)$。\n\n例题：若$\\lim\\limits_{n\\to\\infty}(a_n+b_n)=1$且$\\lim\\limits_{n\\to\\infty}(a_n-b_n)=3$，计算$\\lim\\limits_{n\\to\\infty}a_n$与$\\lim\\limits_{n\\to\\infty}b_n$。\n\n解：首先是不能通过运算法则第一条将两个条件直接加减的，因为不能保证两个极限是否都存在。\n\n所以必须先令$u_n=a_n+b_n$，$v_n=a_n-b_n$，所以$\\lim\\limits_{n\\to\\infty}u_n=1$，$\\lim\\limits_{n\\to\\infty}v_n=3$。\n\n因为这两个极限都存在，所以可以进行运算。\n\n相加得到$\\lim\\limits_{n\\to\\infty}(u_n+v_n)=2\\lim\\limits_{n\\to\\infty}a_n=4$。\n\n所以得到$\\lim\\limits_{n\\to\\infty}a_n=2$。同理$\\lim\\limits_{n\\to\\infty}(u_n-v_n)$得到$\\lim\\limits_{n\\to\\infty}b_n=-1$。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s4-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#函数极限",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "函数极限",
  "kind": "总结",
  "text": "若$\\lim f(x)=A$，$\\lim g(x)=B$（即两个极限都存在），则\n\n-$\\lim[k\\cdot f(x)\\pm l\\cdot g(x)]=k\\lim f(x)\\pm l\\cdot g(x)=kA\\pm lB$，其中$kl$为常数。\n\n-$\\lim[f(x)\\cdot g(x)]=\\lim f(x)\\cdot\\lim g(x)=A\\cdot B$\n\n-$\\lim[f(x)]^n=[\\lim f(x)]^n$，其中$n$为正整数。\n\n-$\\lim\\dfrac{f(x)}{g(x)}=\\dfrac{\\lim f(x)}{\\lim g(x)}=\\dfrac{A}{B}(B\\neq 0)$。\n\n-$\\lim\\limits_{x\\to\\infty}\\dfrac{a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0}{b_mx^m+\\cdots+b_{m-1}x^{m-1}+\\cdots+b_1x+b_0}=\\left\\{\n        \\begin{array}{lcl}\n            \\dfrac{a_n}{b_m}, & & n=m \\\\\n            0, & & n<m \\\\\n            \\infty, & & n>m\n        \\end{array}\n    \\right.$\n\n- 若$f(x)\\geqslant g(x)$，则$A\\geqslant B$。\n\n- 若$y=f[g(x)]$由$y=f(u)$与$u=g(x)$复合而成，且$\\lim\\limits_{x\\to x_0}g(x)=u_0$且$\\lim\\limits_{u\\to u_0}f(u)=a$，当$x\\in\\mathring{U}(x_0,\\delta_0)$时，$g(x)\\neq u_0$，则$\\lim\\limits_{x\\to x_0}f[g(x)]=a$。\n\n对于结论7必须注意$g(x)\\neq u_0$。\n\n假设$f(u)=\\dfrac{u^2-1}{u-1}$，所以这个$f(x)$在$x=1$处应无定义。但是这并不影响$\\lim\\limits_{u\\to 1}f(u)=2$。\n\n假设$g(x)=\\left\\{\n    \\begin{array}{lcl}\n        1+x, & & x<0 \\\\\n        1, & & x>0\n    \\end{array}\n\\right.$。\n\n则$\\lim\\limits_{x\\to 0}g(x)=1$，所以$\\lim\\limits_{x\\to 0}f[g(x)]=2?$。\n\n答案是不，因为当$x>0$时，$u=g(x)=1$，而$1$在$g(x)$中是无定义的，所以复合函数当$x>0$时无定义，从而在$0$处极限不存在。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s4-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#存在与不存在运算关系",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "存在与不存在运算关系",
  "kind": "总结",
  "text": "- 存在与不存在的和差一定为不存在。\n\n- 不存在与不存在的和差不一定存在，如$\\sin\\dfrac{1}{x}+\\sin\\dfrac{1}{x}$与$\\sin\\dfrac{1}{x}+\\left(-\\sin\\dfrac{1}{x}\\right)$。\n\n- 存在与不存在的乘积不一定存在，如$x\\sin\\dfrac{1}{x}$与$1\\cdot\\sin\\dfrac{1}{x}$。\n\n- 不存在与不存在的乘积不一定存在，如$\\dfrac{1}{x}\\cdot\\dfrac{1}{x}$与$(-1)^n\\cdot(-1)^n$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s5-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#夹逼准则",
  "subject": "gaoshu",
  "topic": "极限存在准则",
  "title": "夹逼准则",
  "kind": "定理",
  "text": "#### 数列的夹逼准则\n\n-$y_n\\leqslant x_n\\leqslant z_n(n=1,2,3,\\cdots)$。\n\n-$\\lim\\limits_{n\\to\\infty}y_n=a,\\lim\\limits_{n\\to\\infty}z_n=a$。\n\n- 则$\\lim\\limits_{n\\to\\infty}x_n=a$。\n\n证明：由于$\\lim\\limits_{n\\to\\infty}y_n=a,\\lim\\limits_{n\\to\\infty}z_n=a$。\n\n则$\\forall\\xi>0$，$\\exists N$，当$n>N$时，$\\vert y_n<\\xi$，$\\vert z_n<\\xi$。\n\n$\\therefore a-\\xi<y_n<a+\\xi$，$a-\\xi<z_n<a+\\xi$。\n\n$\\therefore a-\\xi<y_n\\leqslant x_n\\leqslant z_n<a+\\xi$。\n\n$\\therefore\\vert x_n-a\\vert<\\xi$。\n\n例题：求极限$\\lim\\limits_{n\\to\\infty}\\left(\\dfrac{n}{n^2+1}+\\dfrac{n}{n^2+2}+\\cdots+\\dfrac{n}{n^2+n}\\right)$。\n\n解：使用夹逼准则：$\\dfrac{n^2}{n^2+n}<\\sum_{i=1}^n\\dfrac{n}{n^2+i}<\\dfrac{n^2}{n^2+1}$。\n\n又$\\lim\\limits_{n\\to\\infty}\\dfrac{n^2}{n^2+1}=\\lim\\limits_{n\\to\\infty}\\dfrac{n^2/n^2}{n^2/n^2+1/n^2}=\\lim\\limits_{n\\to\\infty}\\dfrac{1}{1+\\dfrac{1}{n^2}}=1$。\n\n且$\\lim\\limits_{n\\to\\infty}\\dfrac{n^2}{n^2+n}=\\lim\\limits_{n\\to\\infty}\\dfrac{1}{1+\\dfrac{1}{n}}=1$。\n\n由夹逼准则，原式的极限为1。\n\n数列的夹逼准则下不等式的证明往往要使用到放缩法，对于分式的放缩主要在于分母的放缩，不变分子，分母变小原式变大，分母变大原式变小。然后分子分母除以最高项得到逼向0的极限。\n\n#### 函数的夹逼准则\n\n-$x\\in\\mathring{U}(x_0,\\delta)$时$g(x)\\leqslant f(x)\\leqslant h(x)$。\n\n-$\\lim g(x)=A$且$\\lim h(x)=A$。\n\n- 则$\\lim f(x)=A$。\n\n注意：两函数差值极限为0不代表两函数极限相同，也不能保证中间的$f(x)$的极限存在。\n\n例题：求$\\lim\\limits_x\\to+\\infty(2+\\sin x)^{\\frac{1}{x}}$。\n\n解：$\\because \\sin x\\in[-1,1]$，$\\therefore 1\\leqslant 2+\\sin x\\leqslant 3$。\n\n$\\therefore 1^{\\frac{1}{x}}\\leqslant\\left(2+\\sin x\\right)^{\\frac{1}{x}}\\leqslant 3^{\\frac{1}{x}}$。\n\n而当$x\\to+\\infty$时两边的极限都为$1$，则由夹逼定理$\\lim\\limits_x\\to+\\infty(2+\\sin x)^{\\frac{1}{x}}=1$。",
  "relatedLessons": [
   "gs01",
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s5-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#单调有界准则",
  "subject": "gaoshu",
  "topic": "极限存在准则",
  "title": "单调有界准则",
  "kind": "定理",
  "text": "也称为魏尔施特拉斯准则，该部分对于数列而言最重要。\n\n#### 数列单调有界准则\n\n定义：单调有界数列必有极限，即若$\\{x_n\\}$单调增加（减少）且有上界（下界），则极限存在。\n\n该部分需要证明两个地方：\n\n- 数列单调：$x_{n+1}-x_n$与0的关系，或$\\dfrac{x_{n+1}}{x_n}$与1的关系。\n\n- 有界：$\\vert x_n\\vert\\leqslant M$是否存在。\n\n见到递推式（迭代式）$a_{n+1}=f(a_n)$，一般都要用单调有界准则。单调性通过减或除进行计算，有界性通过不等式来计算。\n\n例题：已知$a_1=a>0$，证明$a_{n+1}=\\dfrac{1}{2}\\left(a_n+\\dfrac{2}{a_n}\\right)$的极限存在并求出。\n\n解：$\\because a_1=a>0$，且递推式中没有负数与减的操作，所以$a_n>0$。\n\n由重要不等式$\\dfrac{a+b}{2}\\geqslant\\sqrt{ab}$，所以$a_{n+1}=\\dfrac{1}{2}\\left(a_n+\\dfrac{2}{a_n}\\right)\\geqslant\\sqrt{a_n\\cdot\\dfrac{2}{a_n}})=\\sqrt{2}$\n\n$\\therefore$数列$\\{a_n\\}$有下界$\\sqrt{2}$。\n\n又$a_{n+1}-a_n=\\dfrac{2-a_n^2}{2a_n}$，且由上面证明已知$a_n^2\\geqslant\\sqrt{2}$，所以该式子小于等于0。\n\n$\\therefore a_{n+1}\\leqslant a_n$，得到数列单调减少。\n\n由单调有界准则，$\\lim\\limits_{n\\to\\infty}a_n$存在并记为$A$。\n\n将$A$代入递推式并两边求极限：$A=\\dfrac{1}{2}(A+\\dfrac{2}{A})$，得到$A=\\pm\\sqrt{2}$。\n\n又因为保号性，数列下界为$\\sqrt{2}$，所以$A=\\sqrt{2}$。\n\n例题：求证$x_{n+1}=\\sin x_n$极限存在，$0<x_1<\\pi$。\n\n解：由三角函数中的不等式$\\sin x<x$。\n\n①当$n=1$，$\\because 0<x_1<\\pi$，$\\therefore 0<\\sin x_1<1$，$\\therefore 0<x_2=sin x_1<x<\\pi$。\n\n②假设$0<x_n=\\sin x_{n-1}<\\pi$。\n\n③$\\therefore 0<x_{n+1}=\\sin x_n<x_n<\\pi$。\n\n④故$\\{x_n\\}\\searrow$且有下界0。\n\n$\\therefore\\lim\\limits_{n\\to\\infty}x_n$存在，并记为$A$。\n\n对两边取极限：$A=\\sin A$，所以$A=0$。\n\n$\\therefore\\lim\\limits_{n\\to\\infty}x_n=0$。\n\n例题：证明$a_n=\\dfrac{1}{1^2}+\\dfrac{1}{2^2}+\\cdots+\\dfrac{1}{n^2}$存在极限。\n\n证明：因为是递推式，所以一般使用单调有界准则。\n\n①$a_{n+1}=\\dfrac{1}{1^2}+\\dfrac{1}{2^2}+\\cdots+\\dfrac{1}{n^2}+\\dfrac{1}{(n+1)^2}$。\n\n$\\Rightarrow a_{n+1}-a_n=\\dfrac{1}{(n+2)^2}>0\\Rightarrow\\{a_n\\}\\nearrow$\n\n$\n\\begin{aligned}\n    \\text{②}a_n & =\\dfrac{1}{1\\cdot 1}+\\dfrac{1}{2\\cdot 2}+\\cdots+\\dfrac{1}{n\\cdot n} \\\\\n    & \\text{裂项相消} \\\\\n    < & 1+\\dfrac{1}{1\\cdot 2}+\\cdots+\\dfrac{1}{(n-1)\\cdot(n)} \\\\\n    = & 1+(1-\\dfrac{1}{2})+(\\dfrac{1}{2}-\\dfrac{1}{3})+\\cdots+(\\dfrac{1}{n-1}-\\dfrac{1}{n}) \\\\\n    = & 2-\\dfrac{1}{n} \\\\\n    < & 2 \\text{ （上界）}\n\\end{aligned}\n$\n\n单调增且有上界，所以必然有极限。\n\n#### 柯西极限存在准则\n\n由函数的单调有界准则可以看出这个准则只能规范左邻域部分，而很多时候收敛的数列都不一定为单调的可以是波动逼近的。所以单调有界准则是充分条件而非必要条件，而柯西极限存在准则则（柯西审敛原理）是数列收敛性的充要准则。\n\n定义：数列$\\{x_n\\}$收敛的充要条件是：对于任意给定的正数$\\xi$，都存在正整数$N$，使得当$m>N$，$n>N$时有$\\vert x_n-x_m\\vert<\\xi$。\n\n其几何意义是数列收敛的充要条件是对于任意给定的正数$\\xi$在数轴上都可以找到一个点后的任意两个项的值小于$\\xi$。\n\n#### 函数单调有界准则\n\n对于函数而言也有单调有界准则，但是很少用到。因为其准则与数列的不一致。\n\n定义：设函数$f(x)$在$x_0$的某个左邻域内单调且有界，则$f(x)$在$x_0$处的左极限$f(x_0^-)$必然存在。\n\n\\subsection{\\texorpdfstring{$\\lim\\limits_{x\\to 0}\\dfrac{\\sin x}{x}=1$}{}}\n\n证明：\n\n 当$x\\to 0$时$x\\in[0,\\dfrac{\\pi}{2}]$。\n\n 设$\\angle AOB$的弧度为$x$，圆$O$的半径为$1$，则$OD=\\sin x$。\n\n 则$S_\\vartriangle AOB=\\dfrac{\\sin x}{2}$。根据扇形面积公式：$S_{\\text{扇形}}AOB=\\dfrac{x}{2}$。\n\n 又$\\because CA=\\tan x$，则$S_\\vartriangle AOC=\\dfrac{\\tan x}{2}$。\n\n根据图，在$x\\in[0,\\dfrac{\\pi}{2}]$，$\\sin x<x<\\tan x$。\n\n$\\therefore 1<\\dfrac{x}{\\sin x}<\\dfrac{1}{\\cos x}\\Rightarrow\\cos x<\\dfrac{\\sin x}{x}<1$。\n\n$\\therefore 0<1-\\dfrac{\\sin x}{x}<1-\\cos x=2\\sin^2\\dfrac{x}{2}\\leqslant 2\\left(\\dfrac{x}{2}\\right)^2$。\n\n根据夹逼定理，$\\lim\\limits_{x\\to 0}2\\left(\\dfrac{x}{2}\\right)^2=0\\Rightarrow\\lim\\limits_{x\\to 0}1-\\dfrac{\\sin x}{x}=0$。\n\n$\\therefore\\lim\\limits_{x\\to 0}\\dfrac{\\sin x}{x}=1$。\n\n从而$\\lim\\limits_{\\Delta\\to 0}\\dfrac{\\sin\\Delta}{\\Delta}=1(\\Delta\\neq 0)$。\n\n\\subsection{\\texorpdfstring{$\\lim\\limits_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x=e$}{}}\n\n书上通过数列进行单调有界定理证明极限存在性。\n\n证明：$\\lim\\limits_{x\\to\\infty}\\left(1+\\dfrac{1}{x}\\right)^x=\\lim\\limits_{x\\to\\infty}e^{\\ln(1+\\frac{1}{x})^x}=\\lim\\limits_{x\\to\\infty}e^{x\\ln(1+\\frac{1}{x})}=e^{\\lim\\limits_{x\\to\\infty}x\\ln(1+\\frac{1}{x})}=e^{\\lim\\limits_{x\\to\\infty}\\frac{\\ln(1+\\frac{1}{x})}{\\frac{1}{x}}}$\n\n$=e^{\\lim\\limits_{x\\to\\infty}\\frac{\\left(\\frac{1}{1+\\frac{1}{x}}\\right)\\cdot\\left(-\\frac{1}{x^2}\\right)}{-\\frac{1}{x^2}}}=e^{\\lim\\limits_{x\\to\\infty}\\frac{1}{1+x}}=e$\n\n从而$\\lim\\limits_{\\Delta\\to\\infty}\\left(1+\\dfrac{1}{\\Delta}\\right)^\\Delta=e$与$\\lim\\limits_{\\Delta\\to 0}\\left(1+\\Delta\\right)^{\\frac{1}{\\Delta}}=e(\\Delta\\neq 0)$。",
  "relatedLessons": [
   "gs01",
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s6-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#无穷",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "无穷",
  "kind": "定理",
  "text": "#### 无穷定义\n\n无穷小定义：当$x\\to x_0(\\infty)$时，函数$f(x)$极限为0，就称$f(x)$为当$x\\to x_0(\\infty)$时的无穷小，记为：$\\lim\\limits_{x\\to x_0(\\infty)}f(x)=0$。\n\n以0为极限的数列称为$n\\to\\infty$时的无穷小。\n\n无穷小是变量，不能与很小的数相等。\n\n零可以作为无穷小的唯一的数。\n\n定理：$\\lim f(x)=A\\Leftrightarrow f(x)=A+o(x)$，其中$\\lim o(x)=0$。\n\n无穷大定义：当$x\\to x_0(\\infty)$时，函数$\\vert f(x)\\vert$无限增大，就称$f(x)$为当$x\\to x_0(\\infty)$时的无穷大，记为：$\\lim\\limits_{x\\to x_0(\\infty)}f(x)=\\infty$。\n\n若$\\lim\\limits_{x\\to x_0}f(x)=\\infty$则$x=x_0$为$y=f(x)$的垂直渐进线。\n\n若$\\lim\\limits_{x\\to\\infty}f(x)=a$则$y=a$为$y=f(x)$的水平渐进线。\n\n定理：若同一极限过程中，$f(x)$为无穷大，则$\\dfrac{1}{f(x)}$为无穷小，反之若$f(x)$为无穷小且不为0，则$\\dfrac{1}{f(x)}$为无穷大。\n\n#### 无穷小的比较\n\n设在自变量同一变化过程中，$\\lim\\alpha(x)=0$，$\\lim\\beta(x)=0$，且$\\beta(x)\\neq 0$，则：\n\n- 若$\\lim\\dfrac{\\alpha(x)}{\\beta(x)}=0$，则$\\alpha(x)$是比$\\beta(x)$高阶的无穷小，记为$\\alpha(x)=o(\\beta(x))$。\n\n- 若$\\lim\\dfrac{\\alpha(x)}{\\beta(x)}=\\infty$，则$\\alpha(x)$是比$\\beta(x)$低阶的无穷小。\n\n- 若$\\lim\\dfrac{\\alpha(x)}{\\beta(x)}=c\\neq 0$，则$\\alpha(x)$与$\\beta(x)$是同阶无穷小。\n\n- 若$\\lim\\dfrac{\\alpha(x)}{\\beta(x)}=1$，则$\\alpha(x)$与$\\beta(x)$是等价无穷小，记为$\\alpha(x)\\sim\\beta(x)$。\n\n- 若$\\lim\\dfrac{\\alpha(x)}{[\\beta(x)]^k}=c\\neq 0$，则$\\alpha(x)$是$\\beta(x)$的$k$阶无穷小。\n\n定理：$\\alpha(x)\\sim\\beta(x)$的充要条件是$\\alpha(x)=\\beta(x)+o(\\beta(x))$。\n\n注意：并不是任意无穷小都可以比阶。如$\\lim\\limits_{x\\to 0}\\dfrac{x\\sin\\dfrac{1}{x}}{x^2}$就因为得到函数振荡而无法得到极限。\n\n例题：证明当$x\\to 0$时，$\\sqrt[n]{1+x}-1\\sim\\dfrac{1}{n}x$。\n\n证明：证明$\\sqrt[n]{1+x}-1\\sim\\dfrac{1}{n}x$就是证明$\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt[n]{1+x}-1}{x}\\sim\\dfrac{1}{n}$。\n\n令$\\sqrt[n]{1+x}-1=t$，则$1+x=(1+t)^n$，则$x=(1+t)^n-1$。\n\n利用二项式展开：$=\\lim\\limits_{t\\to 0}\\dfrac{t}{nt+\\dfrac{n(n-1)}{2}t^2+\\cdots}=\\dfrac{1}{n}$。\n\n#### 无穷小运算\n\n设$m$，$n$为正整数：\n\n-$o(x^m)\\pm o(x^n)=o(x^l),l=\\min{m,n}$（加减法低阶吸收高阶）。\n\n-$o(x^m)\\cdot o(x^n)=o(x^{m+n}),x^m\\cdot o(x^n)=o(x^{m+n})$（乘法累加）。\n\n-$o(x^m)=o(k\\cdot x^m)=k\\cdot o(x^m)$，$k\\neq 0$且为常数（非零常数相乘不影响阶数）。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s6-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#洛必达法则",
  "subject": "gaoshu",
  "topic": "洛必达法则",
  "title": "洛必达法则",
  "kind": "定理",
  "text": "洛必达法则用于计算无穷的比值的极限，如$\\dfrac{0}{0}$型和$\\dfrac{\\infty}{\\infty}$型，如果趋向不同则不能使用。\n\n定理：当$x\\to a$或$x\\to\\infty$时，函数$f(x)$以及$F(x)$都趋于零，$f'(x)$、$F'(x)$在点$a$的某去心邻域内（或当$\\vert x\\vert>X$，$X$为充分大的正数）存在，且$F'(x)\\neq0$，$\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{F'(x)}$或$\\lim\\limits_{x\\to\\infty}\\dfrac{f'(x)}{F'(x)}$存在或无穷大时，则$\\lim\\limits_{x\\to a}\\dfrac{f(x)}{F(x)}=\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{F'(x)}$或$\\lim\\limits_{x\\to\\infty}\\dfrac{f(x)}{F(x)}=\\lim\\limits_{x\\to\\infty}\\dfrac{f'(x)}{F'(x)}$。\n\n定理：当$x\\to a$或$x\\to\\infty$时，函数$f(x)$以及$F(x)$都趋于无穷，$f'(x)$、$F'(x)$在点$a$的某去心邻域内（或当$\\vert x\\vert>X$，$X$为充分大的正数）存在，且$F'(x)\\neq0$，$\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{F'(x)}$或$\\lim\\limits_{x\\to\\infty}\\dfrac{f'(x)}{F'(x)}$存在或无穷大时，则$\\lim\\limits_{x\\to a}\\dfrac{f(x)}{F(x)}=\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{F'(x)}$或$\\lim\\limits_{x\\to\\infty}\\dfrac{f(x)}{F(x)}=\\lim\\limits_{x\\to\\infty}\\dfrac{f'(x)}{F'(x)}$。\n\n同理如果导数存在也可以不断求导：$\\lim\\limits_{x\\to a}\\dfrac{f(x)}{F(x)}=\\lim\\limits_{x\\to a}\\dfrac{f(x)'}{F(x)'}=\\lim\\limits_{x\\to a}\\dfrac{f(x)''}{F(x)''}$。\n\n注意：洛必达法则求不出值也不能说其左边的值不存在。如$\\lim\\limits_{x\\to0}\\dfrac{x^2\\sin\\dfrac{1}{x}}{x}=\\lim\\limits_{x\\to0}\\sin\\dfrac{1}{x}=0$，通过洛必达就求不出值。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s6-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#泰勒公式",
  "subject": "gaoshu",
  "topic": "泰勒公式",
  "title": "泰勒公式",
  "kind": "定理",
  "text": "与洛必达法则不同，适用于$\\dfrac{A}{B}$上下同阶型和$A-B$幂次最低型。如$\\dfrac{x-\\sin x}{x^3}$和$\\cos x-e^{-\\frac{x^2}{2}}$。\n\n是一个用函数在某点的信息描述其附近取值的公式。如果函数满足一定的条件，泰勒公式可以用函数在某一点的各阶导数值做系数构建一个多项式来近似表达这个函数，即用多项式拟合不规则曲线。\n\n#### 麦克劳林公式\n\n-$e^x=\\sum\\limits_{i=0}^n\\dfrac{1}{i!}x^i$，$=1+\\dfrac{1}{1!}x+\\dfrac{1}{2!}x^2+\\dfrac{1}{3!}x^3+o(x^3)$。\n\n-$\\ln(1+x)=\\sum\\limits_{i=1}^n(-1)^{i+1}\\dfrac{1}{i}x^i$，$=x-\\dfrac{1}{2}x^2+\\dfrac{1}{3}x^3+o(x^3)$。\n\n-$\\sin x=\\sum\\limits_{i=1}^{2i-1}(-1)^{2i-1}\\dfrac{1}{(2i-1)!}x^{2i-1}$，$=x-\\dfrac{1}{3!}x^3+\\dfrac{1}{5!}x^5+o(x^5)$。\n\n-$\\cos x=\\sum\\limits_{i=1}^{2i}(-1)^{2i-1}\\dfrac{1}{(2i-2)!}x^{2i-2}$，$=x-\\dfrac{1}{2!}x^2+\\dfrac{1}{4!}x^4+o(x^4)$。\n\n-$\\arcsin x=\\sum\\limits_{i=1}^{2i-1}\\dfrac{(2i-3)!!}{(2i-2)!!}\\dfrac{x^{2i-1}}{2i-1}$，$=x+\\dfrac{1}{2}\\dfrac{x^3}{3}+\\dfrac{1\\times3}{2\\times4}\\dfrac{x^5}{5}+\\dfrac{1\\times3\\times 5}{2\\times4\\times6}\\dfrac{x^7}{7}+o(x^7)$。（假定$-1!=0!$）\n\n-$\\dfrac{1}{1-x}=\\sum\\limits_{i=0}^nx^i$，$=1+x+x^2+x^3+o(x^3)$。\n\n-$(1+x)^a=1+\\sum\\limits_{i=1}^n\\dfrac{\\prod_{j=1}^i(a-j+1)}{i!}x^i$，$=1+\\dfrac{a}{1!}x+\\dfrac{a(a-1)}{2!}x^2\\\\+\\dfrac{a(a-1)(a-2)}{3!}x^3+o(x^3)$。\n\n#### 常用等价无穷小\n\n定理：若$\\alpha\\sim\\alpha_1$，$\\beta\\sim\\beta_1$，则$\\lim\\dfrac{\\alpha}{\\beta}=\\lim\\dfrac{\\alpha_1}{\\beta}=\\lim\\dfrac{\\alpha}{\\beta_1}=\\lim\\dfrac{\\alpha_1}{\\beta_1}$。\n\n所以可以使用等价无穷小替换对应式子，这些等价无穷小都是使用泰勒展开得到的。等价无穷小只是泰勒公式在某个固定阶数上（通常为一阶）的特例。\n\n通过麦克劳林公式可以得到当$x\\to 0$时的相应等价无穷小：\n\n-$x\\sim\\sin x\\sim\\tan x\\sim\\arcsin x\\sim\\arctan x\\sim\\ln(1+x)\\sim\\ln(x+\\sqrt{1+x^2})\\sim e^x-1$。\n\n-$a^x-1\\sim x\\ln a$。\n\n-$(1+x)^a-1\\sim ax$。\n\n-$\\log_a(1+x)\\sim\\dfrac{x}{\\ln a}$。\n\n-$1-\\cos x\\sim\\dfrac{1}{2}x^2$。\n\n-$x-\\ln(1+x)\\sim\\dfrac{1}{2}x^2$。\n\n-$x-\\sin x\\sim\\dfrac{1}{6}x^3$。\n\n-$\\arcsin x-x\\sim\\dfrac{1}{6}x^3$。\n\n-$\\tan x-x\\sim\\dfrac{1}{3}x^3$。\n\n-$x-\\arctan x\\sim\\dfrac{1}{3}x^3$。\n\n-$\\tan x-\\sin x\\sim\\dfrac{1}{2}x^3$\n\n#### 等价无穷小适用性\n\n如果是乘除关系可以随便换，但是加减关系需要一定条件：\n\n- 若$\\alpha\\sim\\alpha_1$，$\\beta\\sim\\beta_1$，且$\\lim\\dfrac{\\alpha_1}{\\beta 1}=A\\neq1$，则$\\alpha-\\beta\\sim\\alpha_1-\\beta_1$。\n\n- 若$\\alpha\\sim\\alpha_1$，$\\beta\\sim\\beta_1$，且$\\lim\\dfrac{\\alpha_1}{\\beta 1}=A\\neq-1$，则$\\alpha+\\beta\\sim\\alpha_1+\\beta_1$。\n\n即这两个和不能为0。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s7-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#函数连续性与间断点",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "函数连续性与间断点",
  "kind": "概念",
  "text": "函数的连续与间断是逐点的概念。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s7-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#连续定义",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "连续定义",
  "kind": "概念",
  "text": "定义：若函数$f(x)$在点$x_0$的某一邻域内有定义，且有$\\lim\\limits_{x\\to x_0}f(x)=f(x_0)$或$\\lim\\limits_{\\Delta x\\to 0}\\Delta y=0$，则称函数$f(x)$在点$x_0$处连续。\n\n极限值等于函数值，则该点连续。\n\n在区间上每一点都连续的函数，就是该区间上的连续函数，或该函数在该区间上连续。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s7-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#间断定义",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "间断定义",
  "kind": "概念",
  "text": "讨论间断只看两类点：分段函数分段点，无定义点。\n\n定义：若函数$f(x)$在点$x_0$的某一去心邻域内有定义，且有$\\lim\\limits_{x\\to x_0}f(x)\\neq f(x_0)$，则称函数$f(x)$在点$x_0$处间断。\n\n极限值不等于函数值，则该点间断。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s7-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#间断点分类",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "间断点分类",
  "kind": "概念",
  "text": "#### 可去间断点（可补间断点）\n\n 定义：若$\\lim\\limits_{x\\to x_0}f(x)=A\\neq f(x_0)$（甚至可以没有定义）。\n\n#### 跳跃间断点\n\n 定义：若$\\lim\\limits_{x\\to x_0^-}f(x)$与$\\lim\\limits_{x\\to x_0^+}f(x)$都存在，但是$\\lim\\limits_{x\\to x_0^-}f(x)\\neq\\lim\\limits_{x\\to x_0^+}f(x)$。\n\n可去间断点与跳跃间断点的左右极限都存在的间断点都称为第一类间断点。\n\n#### 无穷间断点\n\n 定义：若$\\lim\\limits_{x\\to x_0}f(x)=\\infty$，或至少一个方向为无穷大（定义分歧）。如$y=\\dfrac{1}{x}$在$x=0$处为无穷间断点。\n\n#### 振荡间断点\n\n 定义：若$\\lim\\limits_{x\\to x_0}f(x)$为振荡不存在。如$\\lim\\limits_{x\\to 0}\\sin\\dfrac{1}{x}$的$x=0$就是振荡间断点。\n\n无穷间断点与振荡间断点的左右极限都不存在的点都是第二类间断点。\n\n注意：两侧邻域都有定义才能讨论间断点问题。\n\n例题：若$f(x)=\\left\\{\n    \\begin{array}{lcl}\n    2x+a, & & x\\leqslant 0 \\\\\n        e^x(\\sin x+\\cos x), & & x>0\n    \\end{array} \\right.\n$在$(-\\infty,+\\infty)$内连续，求$a$。\n\n解：因为连续，所以$f(0)=\\lim\\limits_{x\\to 0^+}f(x)=\\lim\\limits_{x\\to 0^-}f(x)$。\n\n$\\therefore a=1$。\n\n例题：若函数$f(x)=\\dfrac{\\ln\\vert x\\vert}{\\vert x-1\\vert}\\sin x$，则x的间断点类型是？\n\n解：由式子的分式部分可知有两个无定义的间断点：$x=0$，$x=1$。\n\n$\\lim\\limits_{x\\to 1}f(x)=\\lim\\limits_{x\\to 1}\\dfrac{x-1}{\\vert x-1\\vert}\\sin x=\\left\\{\n    \\begin{array}{lcl}\n        x\\to 1^+ & \\rightarrow & \\sin 1 \\\\\n        x\\to 1^- & \\rightarrow & -\\sin 1\n    \\end{array} \\right.\n$。\n\n所以$x=1$跳跃间断点。\n\n$\\lim\\limits_{x\\to 0}f(x)=\\lim\\limits_{x\\to 0}\\ln\\vert x\\vert\\cdot\\sin x=\\lim\\limits_{x\\to 0}x\\ln\\vert x\\vert=0$。\n\n而$x=0$未定义，所以其为可去间断点。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s7-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#函数连续性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "函数连续性",
  "kind": "概念",
  "text": "#### 连续函数四则运算的连续性\n\n若两个函数在某点连续，则这两个函数的和差积商在该点都连续。但是如果两个在某点不连续的函数，其和差积商在某点的连续性都是不一定的，所以反过来，如果一个函数的和差积商是在某点连续的，不能说明这个组成的多个函数在该点是连续的。\n\n#### 反函数的连续性\n\n若函数在定义域是严格单调的函数，则其反函数在其原值域上也是连续的且单调性不变。\n\n#### 复合函数的连续性\n\n若$y=f(g(x))$由$y=f(u)$与$u=g(x)$复合而成，若$g(x)$在$x_0$处连续，$f(u)$在$u_0$处连续，且$u_0=g(x_0)$，则$f(g(x))$在$x_0$处连续。\n\n#### 初等函数的连续性\n\n基本初等函数在定义域上是连续的。\n\n初等函数在定义区间上是连续的。\n\n定义区间是定义域的子集。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s8-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#闭区间上连续函数的性质",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "闭区间上连续函数的性质",
  "kind": "定理",
  "text": "设$f(x)$在区间$[a,b]$上连续，则：",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s8-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#有界性与最大最小值定理",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "有界性与最大最小值定理",
  "kind": "定理",
  "text": "最大最小值定理：：$f(x)$在$[a,b]$上必有最大值和最小值。\n\n有界性定理：$f(x)$在$[a,b]$上必有界。\n\n如果是开区间连续则不能保证有界性，因为可能开区间两边的端点为函数的间断点（如$\\dfrac{1}{x}$在$x=0$处）。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s8-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#零点与介值定理",
  "subject": "gaoshu",
  "topic": "闭区间连续函数性质",
  "title": "零点与介值定理",
  "kind": "定理",
  "text": "零点定理：若$f(a)f(b)<0$，则$\\exists\\,\\xi\\in[a,b]$使得$f(\\xi)=0$。\n\n介值定理：若$f(a)\\neq f(b)$，$\\mu$为介于$f(a)$与$f(b)$之间的任何值，那么至少存在$\\xi\\in[a,b]$使得$f(\\xi)=\\mu$。\n\n例题：证明方程$x=a\\sin x+b(a>0,b>0)$中至少有一个正根，并且不超过$a+b$。\n\n证明：令$f(x)=x-a\\sin x-b$，其中$f(0)=-b<0$，$f(a+b)=a+b=a\\sin(a+b)-b=a[1-\\sin(a+b)]\\geqslant 0$。\n\n若$\\sin(a+b)=1$，则根为$a$，结论成立。\n\n若$\\sin(a+b)<1$，$\\because f(a+b)\\cdot f(0)<0$根据零点定理$\\exists\\,\\xi\\in[0,a+b]$使得$f(\\xi)=0$，从而得证。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-1-function-and-limit-function-and-limit-s8-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/1-function-and-limit/function-and-limit.tex#*一致连续性",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "*一致连续性",
  "kind": "概念",
  "text": "定义：设函数$f(x)$在区间$I$上有定义，若对于任意给定的正数$\\xi$，总存在正数$\\delta$，使得对于区间$I$上的任意两点$x_1x_2$，当$\\vert x_1-x_2\\vert<\\delta$时，有$\\vert f(x_1)-f(x_2)\\vert<\\xi$，则函数$f(x)$在区间$I$上一致连续。\n\n对于连续性的定义：设函数$f(x)$在区间$I$上有定义，若对于任意给定的正数$\\xi$，总存在正数$\\delta$，使得对于区间$I$上的任意一点$x$，当$\\vert x-x_0\\vert<\\delta$时，有$\\vert f(x)-f(x_0)\\vert<\\xi$，则称函数$f(x)$在区间$I$上连续。\n\n对比连续性与一致连续性，可以知道定义上就只有一个差别，连续性只有一个动点$x$($x_0$会相对于$x$而变化)，而一致连续性有两个动点$x_1x_2$。但是就是这种小变化会带来很大不同的定义结果。\n\n可以利用几何图形来分析，对于图像上的任意一点，连续性与一致连续性都是在一个过程中固定一个$\\xi$，来求对应的$\\delta$。所导致的就是函数差值是固定的。\n\n根据连续定义，函数上任意取一个$x$，再在$x$的左边或右边取一个$x_0$，使得$\\vert f(x)-f(x_0)\\vert<\\xi$，现在需要求一个$\\delta$，使得$\\delta$，使得$\\vert x-x_0\\vert<\\delta$，所以我们可以根据这个条件，作一个竖直距离为$\\xi$，水平距离为$\\delta$的长方形，长方形内部的所有点的$x$坐标代表的$\\delta$都满足条件，其中一个正对角点坐标为$(x,f(x))$，另一个则为$(x_0,f(x_0))$。$\\xi$是固定的，要根据不同的$x$找到不同的$\\delta$，即不同的$x+\\delta=x_0$。\n\n假定函数为$y=\\dfrac{1}{x}$，$\\xi=1$，任意取一点$x$，求出对应的$\\delta$，将会得到下面第一张图。其中虚线里的所有点都是满足要求的点。而随着$x$上移，长方形水平长度会无限接近于0，而向下，长方形水平长度会无限接近于$+\\infty$。\n\n所以长方形的两对角点变动轨迹如图二所示，当$x$无限接近$+\\infty$时，$x_0$无限接近$\\dfrac{1}{\\xi}$，因为$\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{\\dfrac{1}{x}+\\xi}=\\dfrac{1}{\\xi}$。\n\n所以连续性下总能找到一个$\\delta$使得虚线长方形存在，从而函数$\\dfrac{1}{x}$是具有连续性的。\n\n而对于连续一致性，则规定了两个变量$x_1x_2$，其实对比连续性类似，但是这时候虚线长方形的两个角都是被约束的，而不是连续性的时候$x_0$是不受约束的，对应到图形上，就是要找到一个长方形，使得无论$x_1x_2$在哪里都在长方形中。\n\n而对于函数$\\dfrac{1}{x}$，由图像二可知虚线长方形的面积是从0一直变大到$+\\infty$，所以不存在一个固定的长方形（面积为常数）。从而该函数不具有一致连续性。\n\n所以综上只有变化率变化不大的函数才在整个定义域上具有一致连续性。如一次线性函数，$\\sin x$，$\\cos x$，而对数函数，指数函数都不具有一致连续性。\n\n定理：若函数在闭区间上连续，则一定在该区间上一致连续。\n\n定理：若函数在某区间上一致连续，则一定在该区间上连续。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#引例",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "引例",
  "kind": "概念",
  "text": "设$f(x)$下$x$在$x_0$的邻域内，$\\alpha$为切线所成夹角。\n\n$\\tan\\alpha=f'(x_0)=\\lim\\limits_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}=k$。\n\n导数的本质是增量比的极限。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#定义",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "定义",
  "kind": "概念",
  "text": "设$y=f(x)$定义在区间$I$上，让自变量在$x=x_0$处加一个增量$\\Delta x$，其中$x_0\\in I$，$x_0+\\Delta x\\in I$，则可得函数的增量$\\Delta y=f(x_0+\\Delta x)-f(x_0)$。若函数增量$\\Delta y$与自变量增量$\\Delta x$的比值在$\\Delta x\\to 0$时的极限存在，则称函数$y=f(x)$在$x_0$处可导，并称这个极限为$y=f(x)$在点$x_0$处的导数，记作$f'(x)$，即$f'(x)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{\\Delta y}{\\Delta x}=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$。\n\n下面三句话等价：\n\n-$y=f(x)$在$x_0$处可导。\n\n-$y=f(x)$在$x_0$处导数存在。\n\n-$f'(x)=A$。（$A$为有限数）\n\n单侧导数分为左导数和右导数。\n\n$f'_-(x)=\\lim\\limits_{\\Delta x\\to 0^-}\\dfrac{\\Delta y}{\\Delta x}=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$\n\n$f'_+(x)=\\lim\\limits_{\\Delta x\\to 0^+}\\dfrac{\\Delta y}{\\Delta x}=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x_0+\\Delta x)-f(x_0)}{\\Delta x}$\n\n所以$f(x)$在$x_0$处可导的充要条件是其左导数和右导数存在且相等。\n\n若$f(x)$在$x_0$的左右，如$y=\\vert x\\vert$在$0$的左右出现了单侧的不同的切线，那这个$x_0$就是一个角点，该角点处不可导。\n\n若$f(x)$在$x_0$处导数为无穷，如$y=x^{\\frac{1}{3}}$在$0$处利用导数的极限定义计算得到为正无穷，那么该点的导数为无穷导数，在考研中被认为是不存在的。\n\n定理：若$f(x)$为可导的偶函数，则$f'(x)$为奇函数，若$f(x)$为可导的奇函数，则$f'(x)$为偶函数。\n\n该证明是准备部分的定理。\n\n证明：首先已知$f(-x)=f(x)$，证明$f'(-x)=-f'(x)$。\n\n$\\therefore$\n\n$\n\\begin{aligned}\n    f'(-x) &=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(-x+\\Delta x)-f(-x)}{\\Delta x} \\\\\n    & =\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+(-\\Delta x))}{\\Delta x} \\\\\n    & =-\\lim\\limits_{-\\Delta x\\to 0}\\dfrac{f(x+(-\\Delta x))}{-\\Delta x} \\\\\n    & =-f'(x)\n\\end{aligned}\n$\n\n同理得证$f(-x)=-f(x)\\Rightarrow f'(-x)=f'(x)$。\n\n定理：$f(x)$为可导的周期为$T$的周期函数，则$f'(x)$也是以$T$为周期的周期函数。\n\n证明：已知$f(x+T)=f(x)$，求证$f'(x+T)=f'(x)$。\n\n$\\therefore f'(x+T)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+T+\\Delta x)-f(x+T)}{\\Delta x}$\n\n$=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}=f'(x)$。\n\n例题：设$f(x)$是二阶可导的以2为周期的奇函数，且$f(\\dfrac{1}{2})>0$，$f'(\\dfrac{1}{2})>0$，比较$f(-\\dfrac{1}{2})$、$f'(\\dfrac{3}{2})$、$f''(0)$的大小。\n\n解：$\\because f(x)$为二阶奇函数，$\\therefore f(x)\\text{奇函数}\\Rightarrow f'(x)\\text{偶函数}\\Rightarrow f''(x)\\text{奇函数}\\Rightarrow f''(0)=0$。\n\n$\\therefore f(-\\dfrac{1}{2})=-f(\\dfrac{1}{2})<0$。\n\n$\\because f(x)T=2\\Rightarrow f'(x)T=2$，$\\therefore f'(\\dfrac{3}{2})=f'(\\dfrac{3}{2}-2)=f'(-\\dfrac{1}{2})=f'(\\dfrac{1}{2})>0$。\n\n$\\therefore f'(\\dfrac{3}{2})>f''(0)>f(-\\dfrac{1}{2})$。\n\n例题：$\\left(x^\\alpha\\right)'=\\alpha x^{\\alpha-1}(x>0)$。\n\n解：$\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{\\left(x+\\Delta x\\right)^\\alpha-x^\\alpha}{\\Delta x}$\n\n$=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{x^\\alpha\\left[\\left(1+\\dfrac{\\Delta x}{x}\\right)^\\alpha-1\\right]}{\\Delta x}=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{x^\\alpha\\cdot\\alpha\\cdot\\dfrac{\\Delta x}{x}}{\\Delta x}=\\alpha x^{\\alpha-1}$",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#导数的几何意义",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "导数的几何意义",
  "kind": "总结",
  "text": "导数$f'(x_0)$在几何上就是曲线$y=f(x)$在点$(x_0,f(x_0))$处切线的斜率。\n\n切线方程：$y-y_0=f'(x_0)(x-x_0)$。\n\n法线方程：$y-y_0=-\\dfrac{1}{f'(x_0)}(x-x_0)$。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s1-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#可导与连续的关系",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "可导与连续的关系",
  "kind": "定理",
  "text": "定理：可导必连续，连续不一定可导。\n\n证明：已知连续定义：$\\lim\\limits_{\\Delta x\\to 0}f(x+\\Delta x)=f(x)$，即$\\lim\\limits_{\\Delta x\\to 0}f(x+\\Delta x)-f(x)=0$。\n\n可导定义：$f'(x)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x} = A$\n\n$\\lim\\limits_{\\Delta x\\to 0}f(x+\\Delta x)-f(x)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}\\cdot\\Delta x=A\\cdot 0=0$\n\n定理：若$f(x)$在$x=x_0$处连续，且$\\lim\\limits_{x\\to x_0}\\dfrac{f(x)}{x-x_0}=A$，则$f(x_0)=0$且$f'(x_0)=A$。\n\n证明：$\\because\\text{连续，}\\therefore f(x_0)=\\lim\\limits_{x\\to x_0}f(x)=\\lim\\limits_{x\\to x_0}\\dfrac{f(x)}{x-x_0}(x-x_0)=A\\cdot 0=0$。\n\n又$f'(x_0)=\\lim\\limits_{x\\to x_0}\\dfrac{f(x)-f(x_0)}{x-x_0}=\\lim\\limits_{x\\to x_0}\\dfrac{f(x)}{x-x_0}=A$。\n\n如$\\lim\\limits_{x\\to 1}\\dfrac{f(x)}{x-1}=2$且$f(x)$连续，可以推出$f(1)=0$与$f'(1)=2$。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#四则运算",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "四则运算",
  "kind": "总结",
  "text": "若函数可导：\n\n- 和差的导数：$[u(x)\\pm v(x)]'=u'(x)\\pm v'(x)$。\n\n- 积的导数：$[u(x)v(x)]'=u'(x)v(x)+u(x)v'(x)$，\n$[u(x)v(x)w(x)]'=u'(x)v(x)w(x)+u(x)v'(x)w(x)+u(x)v(x)w'(x)$。\n\n- 商的导数：$\\left[\\dfrac{u(x)}{v(x)}\\right]'=\\dfrac{u'(x)v(x)-u(x)v'(x)}{[v(x)]^2}$，$v(x)\\neq 0$。\n\n证明$(uv)'=u'v+uv'$。\n\n证明：令$f(x)=u(x)v(x)$。\n\n$(u\\cdot v)'$\n\n$=f'(x)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{u(x+\\Delta x)v(x+\\Delta x)-u(x)v(x)}{\\Delta x}$\n\n$=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{u(x+\\Delta x)v(x+\\Delta x)-u(x)v(x+\\Delta x)+u(x)v(x+\\Delta x)-u(x)v(x)}{\\Delta x}$\n\n$=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{u(x+\\Delta x)-u(x)}{\\Delta x}v(x+\\Delta x) +\\lim\\limits_{\\Delta x\\to 0}\\dfrac{v(x+\\Delta x)-v(x)}{\\Delta x}u(x)$\n\n$=u'(x)v(x)+v'(x)u(x)$",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#反函数导数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "反函数导数",
  "kind": "定理",
  "text": "定理：$y=f(x)$可导，且$f'(x)\\neq 0$，\n\n则存在反函数$x=\\varphi(y)$，且$\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\dfrac{1}{\\dfrac{\\textrm{d}y}{\\textrm{d}x}}$，即$\\varphi'(x)=\\dfrac{1}{f'(x)}$。\n\n$y=f(x)$可导，且$f'(x)\\neq 0$就是指严格单调，而严格单调必有反函数。\n\n例题：求$y=\\arcsin x,x\\in(-1,1)$与$y=\\arctan x$的导数。\n\n解：首先反三角函数就是三角函数的反函数。\n\n求$y=\\arcsin x$，即$x=\\sin y$。\n\n$\\therefore\\dfrac{\\textrm{d}\\arcsin x}{\\textrm{d}x}=\\dfrac{1}{\\dfrac{\\textrm{d}\\sin y}{\\textrm{d}y}}=\\dfrac{1}{\\cos y}=\\dfrac{1}{\\sqrt{1-\\sin^2y}}=\\dfrac{1}{\\sqrt{1-x^2}}$。\n\n求$y=\\arctan x$，就$x=\\tan y$。\n\n$\\therefore\\dfrac{\\textrm{d}\\arctan x}{\\textrm{d}x}=\\dfrac{1}{\\dfrac{\\textrm{d}\\tan y}{\\textrm{d}y}}=\\dfrac{1}{\\sec^2y}=\\dfrac{1}{1+\\tan^2y}=\\dfrac{1}{1+x^2}$。\n\n二阶反函数导数定理：：\n\n$f''(x)=y''_{xx}=\\dfrac{\\textrm{d}\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}x}\\right)}{\\textrm{d}x}=\\dfrac{\\textrm{d}^2y}{\\textrm{d}x^2}=\\dfrac{\\textrm{d}\\left(\\dfrac{1}{\\varphi'(y)}\\right)}{\\textrm{d}x}=\\dfrac{\\textrm{d}\\left(\\dfrac{1}{\\varphi'(y)}\\right)}{\\textrm{d}y}\\cdot\\dfrac{\\textrm{d}y}{\\textrm{d}x}$\n\n$=-\\dfrac{x_{yy}''}{(x_y')^2}\\cdot\\dfrac{1}{x_y'}=-\\dfrac{x_{yy}''}{(x_y')^3}$\n\n其中$\\textrm{d}x\\cdot\\textrm{d}x=(\\textrm{d}x)^2=\\textrm{d}x^2$称为微分的幂，而$\\textrm{d}(x^2)$叫幂的微分。\n\n例题：设$y=f(x)$的反函数是$x=\\varphi(y)$，且$f(x)=\\int_1^{2x}e^{t^2}\\textrm{d}t+1$，求$\\varphi''(1)$。\n\n解：$\\because y=f(x)$，$\\therefore x=\\varphi(y)$，$x_{yy}''=\\varphi''(y)=-\\dfrac{y_{xx}''}{(y_x')^3}=-\\dfrac{f''(x)}{[f'(x)]^3}$。\n\n其中根据变限积分求导公式：$f'(x)=2e^{4x^2}$，$f''(x)=2e^{4x^2}\\cdot 8x=16xe^{4x^2}$。\n\n又$y=1\\Rightarrow x=\\dfrac{1}{2}\\Rightarrow\\varphi''(1)=-\\dfrac{f''\\left(\\dfrac{1}{2}\\right)}{\\left[f'\\left(\\dfrac{1}{2}\\right)\\right]^3}=-\\dfrac{1}{e^2}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#复合函数的导数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "复合函数的导数",
  "kind": "定理",
  "text": "定理：$u=g(x)$在$x$可导，$y=f(u)$在$u=g(x)$处可导，则$\\{f[g(x)]\\}'=f'[g(x)]g'(x)$。\n\n例题：设$f(x)=\\prod\\limits_{n=1}^{100}\\left(\\tan\\dfrac{\\pi x^n}{4}-n\\right)$，则$f'(1)$为？\n\n解：原式=$\\left(\\tan\\dfrac{\\pi x}{4}-1\\right)\\left(\\tan\\dfrac{\\pi x^2}{4}-2\\right)\\cdots\\left(\\tan\\dfrac{\\pi x^{100}}{4}-100\\right)$。\n\n令$\\left(\\tan\\dfrac{\\pi x^2}{4}-2\\right)\\cdots\\left(\\tan\\dfrac{\\pi x^{100}}{4}-100\\right)=g(x)$。\n\n$\\therefore f(x)=\\left(\\tan\\dfrac{\\pi x}{4}-1\\right)\\cdot g(x)$。\n\n$\\therefore f'(x)=\\sec^2\\dfrac{\\pi x}{4}\\cdot\\dfrac{\\pi}{4}\\cdot g(x)+\\left(\\tan\\dfrac{\\pi x}{4}-1\\right)\\cdot g'(x)$。\n\n$\\therefore$根据导数的四则运算，需要导数的乘积为每一项求导乘以其他不求导项的和，而$\\tan\\dfrac{\\pi x}{4}-1$当$x=1$时为0，只要它不求导，其他的项都必然是0，所以原式的后面的结果都是0。\n\n$\\therefore f'(1)$\n\n$=f'(x)\\vert_{x=1}=\\dfrac{\\pi}{2}\\cdot g(1)+0\\cdot g'(x)=\\dfrac{\\pi}{2}\\cdot g(1)=\\dfrac{\\pi}{2}(-1)(-2)\\cdots(-99)=-\\dfrac{\\pi}{2}\\cdot 99!$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#分段函数的导数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "分段函数的导数",
  "kind": "概念",
  "text": "设$f(x)=\\left\\{\n    \\begin{array}{lcl}\n        f_1(x), & & x\\geqslant x_0 \\\\\n        f_2(x), & & x<x_0 \\\\\n    \\end{array}\n\\right.$。\n\n在分段点用定义：\n\n判断$f'_+(x_0)=\\lim\\limits_{x\\to x_0^+}\\dfrac{f_1(x)-f(x_0)}{x-x_0}\\overset{?}{=}\\lim\\limits_{x\\to x_0^-}\\dfrac{f_2(x)-f(x_0)}{x-x_0}$。如果相等就挖去这个点，否则就包含这个点。\n\n非分段点使用导数公式求导：$x>x_0,f'(x)=f_1'(x),x<0，f'(x)=f_2'(x)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#对数求导法",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "对数求导法",
  "kind": "总结",
  "text": "对于多项相乘、相除、开方、乘方的式子，一般先取对数再求导，设$y=f(x)(f(x)>0)$，则①等式两边取对数：$\\ln y=\\ln f(x)$。②两边对自变量$x$求导，得$\\dfrac{1}{y}y'=[\\ln f(x)]'\\Rightarrow y'=y[\\ln f(x)]'$。\n\n例题：求$y=\\sqrt[3]{\\dfrac{(x+1)(2x-1)^2}{(4-3x)^5}}$的导数。\n\n解：取对数：$\\ln\\vert y\\vert=\\dfrac{1}{3}[\\ln\\vert x+1\\vert+2\\ln\\vert 2x-1\\vert-5\\ln\\vert 4-3x\\vert]$。\n\n$\\because \\ln\\vert y\\vert'=\\ln y'$。\n\n两边对x求导：\n\n$\\dfrac{y'}{y}=\\dfrac{1}{3}\\left(\\dfrac{1}{x+1}+\\dfrac{4}{2x-1}-\\dfrac{5}{4-3x}\\cdot(-3)\\right)$\n\n$\\therefore y'=\\dfrac{1}{3}\\left(\\dfrac{1}{x+1}+\\dfrac{4}{2x-1}-\\dfrac{5}{4-3x}\\cdot(-3)\\right)y$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s2-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#幂指函数求导法",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "幂指函数求导法",
  "kind": "例题",
  "text": "非常重要。\n\n对于$u(x)^{v(x)}(u(x)>0,u(x)\\neq 1)$，除了对数求导法外还可以使用指数函数$u(x)^{v(x)}=e^{v(x)\\ln u(x)}$。\n\n然后求导得到$[u(x)^{v(x)}]'=[e^{v(x)\\ln u(x)}]'$\n\n$=u(x)^{v(x)}\\left[v'(x)\\ln u(x)+v(x)\\cdot\\dfrac{u'(x)}{u(x)}\\right]$。\n\n例题：求$y=x^x(x>0)$的导数。\n\n解：$\\because x^x=e^{x\\ln x}$，$\\therefore (x^x)'=(e^{x\\ln x})'=x^x\\cdot(\\ln x+1)$。\n\n例题：求解$y=x^{\\frac{1}{x}}(x>0)$的整数最大值。\n\n解：$\\because y=x^{\\frac{1}{x}}=e^{\\frac{1}{x}\\ln x}$。\n\n$\\therefore y'=\\left(x^{\\frac{1}{x}}\\right)=\\left(e^{\\frac{1}{x}\\ln x}\\right)'=x^{\\frac{1}{x}}\\cdot\\dfrac{1-\\ln x}{x^2}$。\n\n令导数结果为0，因为$x^{\\frac{1}{x}}$与$x^2$在$x>0$时都不为0，所以只有一个驻点$x=e$。\n\n$0<x<e$时$1-\\ln x$大于0，所以导数大于0，函数在该区间增。相反$x>e$时函数在区间减。\n\n研究驻点左侧情况，求对应的极限：$e^{\\lim\\limits_{x\\to 0^+}\\frac{\\ln x}{x}}=e^{-\\infty}\\to 0$。\n\n研究驻点右侧情况，求对应的极限：$e^{\\lim\\limits_{x\\to+\\infty}\\frac{\\ln x}{x}}=e^0\\to 1$。\n\n所以必然在$\\sqrt{2}$与$\\sqrt[3]{3}$两点取得整数最大值，而全部六次方后$\\sqrt{2}^6=8<\\sqrt[3]{3}=9$，所以$\\sqrt[3]{3}$为最大整数解。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#定义",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "定义",
  "kind": "概念",
  "text": "高阶导数定义：$f^{(n)}(x_0)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{f^{(n-1)}(x_0+\\Delta x)-f^{(n-1)}(x_0)}{\\Delta x}$，其中$n\\geqslant 2$且$n\\in N^+$，$f^{(n-1)}(x)$在$x_0$的某领域内有定义，$x_0+\\Delta x$也在该邻域内。\n\n若$f^{(n)}(x)$在区间$I$上连续，称$f(x)$在$I$上$n$阶连续可导。\n\n-$(e^x)^{(n)}=e^x$。\n\n-$(\\sin x)^{(n)}=\\sin(x+n\\dfrac{\\pi}{2})$。\n\n-$(\\cos x)^{(n)}=\\cos(x+n\\dfrac{\\pi}{2})$。\n\n-$(\\ln(1+x))^{(n)}=(-1)^{n-1}\\dfrac{(n-1)!}{(1+x)^n}$。\n\n定理：\n\n设$u,v$都是$n$阶可导，则：\n\n-$(u\\pm v)^{(n)}=u^{(n)}\\pm v^{(n)}$。\n\n- 莱布尼兹公式：$(uv)^{(n)}=\\sum_{k=0}^nC_n^ku^{(n-k)}v^{(k)}$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#归纳法",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "归纳法",
  "kind": "总结",
  "text": "即依次求导得出规律。\n\n$(a^x)^n=a^x(\\ln a)^{(n)}$，如$y=2^x$，则$y'=2^x\\ln 2$，$y''=2^x(\\ln 2)^2\\cdots$得到$y^{(n)}=2^x(\\ln 2)^n,n\\in N$。\n\n例题：求$\\sin x$的$n$阶导数。\n\n解：$\\because \\sin x'=\\cos x$而不断求导会发现正负号会++--++--地变化而难以归纳为公式，所以需要另想办法。\n\n使用诱导公式：\n\n$y'=\\cos x=\\sin(x+\\dfrac{\\pi}{2})$\n\n$y''=\\cos(x+\\dfrac{\\pi}{2})=\\sin(x+\\dfrac{\\pi}{2}+\\dfrac{\\pi}{2})$\n\n$\\cdots$\n\n$y^{(n)}=\\sin(x+\\dfrac{\\pi}{2}\\cdot n)$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s3-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#莱布尼茨公式",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "莱布尼茨公式",
  "kind": "定理",
  "text": "定义：设$u=u(x)$，$v=v(x)$均$n$阶可导，则$(uv)^{(n)}=\\sum_{k=0}^nC_n^ku^{(n-k)}v^{(k)}$。\n\n展开：$(uv)^{(n)}=C_n^0u^{(n)}v^{(0)}+C_n^1u^{(n-1)}v'+\\cdots+C_n^nu^{(0)}v^{(n)}$。\n\n莱布尼兹公式里的系数与考研数学准备章节的因式分解公式的二次项公式的系数一致，可以使用杨辉三角形来记忆：\n\n例题：已知函数$y=e^x\\cos x$，求$y^{(4)}$。\n\n解：根据莱布尼兹公式：\n\n$(e^x\\cos x)^{(4)}$\n\n$=C_4^0e^x\\cos x+C_4^1e^x(-\\sin x)+C_4^2e^x(-\\cos x)+C_4^3e^x(\\sin x)+C_4^4e^x(\\cos x)$\n\n$=e^x\\cos x+4e^x(-\\sin x)+6e^x(-\\cos x)+4e^x\\sin x+e^x\\cos x$\n\n$=-4e^x\\cos x$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s4-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#隐函数求导法",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "隐函数求导法",
  "kind": "概念",
  "text": "设函数$y=y(x)$由方程$F(x,y)=0$确定的可导函数，则①方程两边对自变量$x$求导，（$y=y(x)$就是将$y$看作中间变量）得到一个关于$y'$的方程。②解该方程就可以得出$y'$。\n\n例题：设$y=y(x)$是由方程$\\sin(xy)=\\ln\\dfrac{x+e}{y}+1$确定的隐函数，求$y'(0)$。\n\n解：两边求导：\n\n$\n\\begin{aligned}\n    \\sin(xy) &=\\ln(x+e)-\\ln(y)+1 \\\\\n    \\cos(xy)(y+xy') &=\\dfrac{1}{x+e}-\\dfrac{y'}{y} \\\\\n    \\because\\text{将0代入} & x=0, y=e^2 \\\\\n    e^2&=\\dfrac{1}{e}-\\dfrac{y'(0)}{e^2} \\\\\n    y'(0) & =e-e^4\n\\end{aligned}\n$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s4-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#参数方程函数导数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "参数方程函数导数",
  "kind": "定理",
  "text": "定理：设函数$y=y(x)$由参数方程$\\left\\{\n    \\begin{array}{l}\n        x=\\varphi(t) \\\\\n        y=\\psi(t)\n    \\end{array}\n\\}\\right.$确定，其中$t$为参数，且$\\varphi(t)\\psi(t)$对于$t$都可导，$\\varphi(t)\\neq 0$，则：\n\n一阶导数：$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{\\textrm{d}y/\\textrm{d}t}{\\textrm{d}x/\\textrm{d}t}=\\dfrac{\\psi'(t)}{\\varphi'(t)}=u(t)$。\n\n二阶导数：$\\dfrac{\\textrm{d}^2y}{\\textrm{d}x^2}=\\dfrac{\\textrm{d}\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}x}\\right)}{\\textrm{d}x}=\\dfrac{\\textrm{d}\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}x}\\right)/\\textrm{d}t}{\\textrm{d}x/\\textrm{d}t}=\\dfrac{\\textrm{d}u/\\textrm{d}t}{\\textrm{d}x/\\textrm{d}t}=\\dfrac{u'_t}{x'_t}$\n\n例题：设$y=y(x)$由方程$\\left\\{\n\\begin{array}{l}\n    x=\\sin t \\\\\n    y=t\\sin t+\\cos t\n\\end{array}\n\\right.\n$（$t$为参数）确定，求$\\dfrac{\\textrm{d}^2y}{\\textrm{d}x^2}\\vert_{t=\\frac{\\pi}{4}}$。\n\n解：求参数方程的二阶导数首先就要求出其一阶导数：\n\n$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{y_t'}{x_t'}=\\dfrac{t\\cos t}{\\cos t}=t$。\n\n$\\therefore\\dfrac{\\textrm{d}^2y}{\\textrm{d}x^2}=\\dfrac{\\textrm{d}\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}x}\\right)}{\\textrm{d}x}=\\dfrac{t_t'}{(\\sin t)_t'}=\\dfrac{1}{\\cos t}$\n\n$\\therefore \\sqrt{2}$。\n\n当所求是极坐标方程时，可以使用$x=\\rho(\\theta)\\cos\\theta$和$y=\\rho(\\theta)\\sin\\theta$进行转换为参数方程然后进行求导。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s4-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#相关变化率",
  "subject": "gaoshu",
  "topic": "一元微分物理与优化应用",
  "title": "相关变化率",
  "kind": "总结",
  "text": "已知$x=x(t)$与$y=y(t)$都是可导函数，而变量$xy$之间存在一定的关系，从而导致变化率$\\dfrac{\\textrm{d}x}{\\textrm{d}t}$与$\\dfrac{\\textrm{d}y}{\\textrm{d}t}$之间也存在一定关系，这就是相关变化率。。\n\n列出依赖于$t$的相关变化率关系式，然后等式两端对$t$求导。",
  "relatedLessons": [
   "gs07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s5-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#定义",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "定义",
  "kind": "概念",
  "text": "有一个边长为$x$的正方形，变化了$\\Delta x$，其面积$\\Delta S=(x+\\Delta x)^2-x^2=2x\\Delta x+(\\Delta x)^2$。\n\n 当$\\Delta x\\to 0$时，将这个变化定义为$2x\\cdot\\Delta x+o(\\Delta x)$，前项为线性主部，后面为误差。这个就是$S$的微分。\n\n 增量$\\Delta y=f(x_0+\\Delta)-f(x_0)=A\\Delta x+o(\\Delta x)$，这个$A\\Delta x$定义为$\\textrm{d}y$，叫做$y$的微分。\n\n$\\therefore \\textrm{d}y\\vert_{x=x_0}=A\\Delta x=y'(x_0)\\cdot\\Delta x=y'(x_0)\\cdot\\textrm{d}x$。\n\n 由此，可导必可微，可微必可导。\n\n所以可微就是用简单线性取代复杂线性，如图用直线取替代曲线。微分就是瞬时改变量，而导数就是瞬时改变速率。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s5-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#基本运算",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "基本运算",
  "kind": "定理",
  "text": "#### 四则运算\n\n若函数可导：\n\n- 和差的微分：$\\textrm{d}[ku(x)\\pm lv(x)]=k\\textrm{d}u(x)\\pm l\\textrm{d}v(x)$。\n\n- 积的微分：$\\textrm{d}[u(x)v(x)]=u(x)\\textrm{d}v(x)+v(x)\\textrm{d}u(x)$。\n\n- 商的微分：$\\textrm{d}\\left[\\dfrac{u(x)}{v(x)}\\right]=\\dfrac{v(x)\\textrm{d}u(x)-u(x)\\textrm{d}v(x)}{[v(x)]^2}$，$v(x)\\neq 0$。\n\n- 复合函数的微分：链式求导法则$\\dfrac{\\textrm{d}u}{\\textrm{d}x}=\\dfrac{\\textrm{d}u}{\\textrm{d}y}\\cdot\\dfrac{\\textrm{d}y}{\\textrm{d}x}$。\n\n#### 微分形式不变性\n\n定义：设$y=f(u)$可微，$u=g(x)$可微，则$y=f(g(x))$可微，且$\\textrm{d}y=y'_{x}\\textrm{d}x=y'_{u}\\textrm{d}u$。即对哪个变量求导都是一样的，即$\\textrm{d}\\{f\\,[g(x)]\\}=f'[g(x)]g'(x)\\textrm{d}x$。\n\n一阶微分形式不变性指：$\\textrm{d}f\\,(\\varsigma)=f'(\\varsigma)\\textrm{d}\\varsigma$，无论$\\varsigma$是什么（类似导数的链式求导法则）。\n\n例题：设$y=e^{\\sin(\\ln x)}$，求$\\textrm{d}y$。\n\n解：$\\because y=e^{\\sin(\\ln x)} \\therefore$\n\n$\n\\begin{aligned}\n    \\textrm{d}y &=\\textrm{d}e^{\\sin(\\ln x)} \\\\\n    & =e^{\\sin(\\ln x)}\\cdot\\textrm{d}(\\sin(\\ln x)) \\\\\n    & =e^{\\sin(\\ln x)}\\cdot\\cos(\\ln x)\\cdot\\textrm{d}\\ln x \\\\\n    & =e^{\\sin(\\ln x)}\\cdot\\cos(\\ln x)\\cdot\\dfrac{1}{x}\\textrm{d}x\n\\end{aligned}\n$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s6-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#对幂指函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "对幂指函数",
  "kind": "总结",
  "text": "原函数 ｜ 导函数 ｜ 原函数 ｜ 导函数\n$C$ ｜$0$ ｜$n^x$ ｜$n^x\\ln n$\n$\\log_ax$ ｜$\\dfrac{1}{x\\ln a}$ ｜$\\ln x=\\ln\\vert x\\vert$ ｜$\\dfrac{1}{x}$\n$x^n$ ｜$nx^{n-1}$ ｜$\\sqrt[n]{x}$ ｜$\\dfrac{x^{-\\frac{n-1}{n}}}{n}$\n$\\dfrac{1}{x^n}$ ｜$-\\dfrac{n}{x^{n+1}}$ ｜ ｜",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s6-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#三角与反三角函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "三角与反三角函数",
  "kind": "总结",
  "text": "原函数 ｜ 导函数 ｜ 原函数 ｜ 导函数\n$\\sin x$ ｜$\\cos x$ ｜$\\cos x$ ｜$-\\sin x$\n$\\tan x$ ｜$\\dfrac{1}{\\cos^2x}=\\sec^2x$ ｜$\\cot x$ ｜$\\dfrac{1}{\\sin^2x}=\\csc^2x$\n$\\sec x$ ｜$\\sec x\\tan x$ ｜$\\csc x$ ｜$-\\csc x\\cot x$\n$\\arcsin x$ ｜$\\dfrac{1}{\\sqrt{1-x^2}}$ ｜$\\arccos x$ ｜$-\\dfrac{1}{\\sqrt{1-x^2}}$\n$\\arctan x$ ｜$\\dfrac{1}{1+x^2}$ ｜$\\textrm{arccot}\\,x$ ｜$-\\dfrac{1}{1+x^2}$\n$\\textrm{arcsec}\\,x$ ｜$\\dfrac{1}{x\\sqrt{x^2-1}}$ ｜$\\textrm{arccsc}\\,x$ ｜$-\\dfrac{1}{x\\sqrt{x^2-1}}$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-2-derivatives-and-differential-derivatives-and-differential-s6-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/2-derivatives-and-differential/derivatives-and-differential.tex#双曲与反双曲函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "双曲与反双曲函数",
  "kind": "总结",
  "text": "- 双曲正弦：$\\textrm{sinh}\\,x=\\textrm{sh}\\,x=\\dfrac{e^{x}-e^{-x}}{2}$。\n\n- 双曲余弦：$\\textrm{cosh}\\,x=\\textrm{ch}\\,x=\\dfrac{e^{x}+e^{-x}}{2}$。\n\n- 双曲正切：$\\textrm{tanh}\\,x=\\textrm{th}\\,x=\\dfrac{\\textrm{sinh}\\,x}{\\textrm{cosh}\\,x}=\\dfrac{e^{x}-e^{-x}}{e^{x}+e^{-x}}$。\n\n- 双曲余切：$\\textrm{coth}\\,x=\\dfrac{\\textrm{cosh}\\,x}{\\textrm{sinh}\\,x}=\\dfrac{e^{x}+e^{-x}}{e^{x}-e^{-x}}$。\n\n- 双曲正割：$\\textrm{sech}\\,x=\\dfrac{1}{\\textrm{cosh}\\,x}=\\dfrac{2}{e^{x}+e^{-x}}$。\n\n- 双曲余割：$\\textrm{csch}\\,x=\\dfrac{1}{\\textrm{sinh}\\,x}=\\dfrac{2}{e^{x}-e^{-x}}$。\n\n- 反双曲正弦：$\\textrm{arcsinh}\\,x=\\ln\\left(x+\\sqrt{x^2+1}\\right)$。\n\n- 反双曲余弦：$\\textrm{arccosh}\\,x=\\ln\\left(x+\\sqrt{x^2-1}\\right)$。\n\n- 反双曲正切：$\\textrm{arctanh}\\,x=\\dfrac{1}{2}\\ln\\left(\\dfrac{1+x}{1-x}\\right)$。\n\n原函数 ｜ 导函数 ｜ 原函数 ｜ 导函数\n$\\textrm{sinh}\\,x$ ｜$\\textrm{cosh}\\,x$ ｜$\\textrm{cosh}\\,x$ ｜$\\textrm{sinh}\\,x$\n$\\textrm{tanh}\\,x$ ｜$\\dfrac{1}{\\textrm{cosh}\\,x^2}$ ｜$\\textrm{arcsinh}\\,x$ ｜$\\dfrac{1}{\\sqrt{x^2+1}}$\n$\\textrm{arccosh}\\,x$ ｜$\\dfrac{1}{\\sqrt{x^2-1}}$ ｜$\\textrm{arctan}\\,x$ ｜$\\dfrac{1}{1-x^2}$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#有界与最值定理",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "有界与最值定理",
  "kind": "定理",
  "text": "定理：$m\\leqslant f(x)\\leqslant M$，其中$m$，$M$分别为$f(x)$在$[a,b]$上的最大值和最小值。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#介值定理",
  "subject": "gaoshu",
  "topic": "闭区间连续函数性质",
  "title": "介值定理",
  "kind": "定理",
  "text": "定理：当$m\\leqslant\\mu\\leqslant M$，存在$\\xi\\in[a,b]$，使得$f(\\xi)=\\mu$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#平均值定理",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "平均值定理",
  "kind": "定理",
  "text": "定理：当$a<x_1<x_2<\\cdots<x_n<b$时，在$[x_1,x_n]$内至少存在一点$\\xi$，使得$f(\\xi)=\\dfrac{f(x_1)+f(x_2)+\\cdots+f(x_n)}{n}$。\n\n证明：已知$f(x)$在$[x_1,x_n]$上连续，根据有界与最值定理，$m\\leqslant f(x)\\leqslant M$。\n\n即$m\\leqslant f(x_1)\\leqslant M$、$m\\leqslant f(x_2)\\leqslant M$……$m\\leqslant f(x_n)\\leqslant M$。\n\n将这些式子全部相加，得到$nm\\leqslant f(x_1)+f(x_2)+\\cdots+f(x_n)\\leqslant nM$。\n\n所以$m\\leqslant\\dfrac{f(x_1)+f(x_2)+\\cdots+f(x_n)}{n}\\leqslant m$。\n\n由介值定理，可知存在$\\xi\\in[a,b]$使得$f(\\xi)=\\dfrac{f(x_1)+f(x_2)+\\cdots+f(x_n)}{n}$。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s1-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#零点定理",
  "subject": "gaoshu",
  "topic": "闭区间连续函数性质",
  "title": "零点定理",
  "kind": "定理",
  "text": "定理：当$f(a)\\cdot f(b)<0$时，存在$\\xi\\in(a,b)$，使得$f(\\xi)=0$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s2-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#微分中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "微分中值定理",
  "kind": "定理",
  "text": "四个定理都是建立局部与整体的关系，利用导数控制函数，反之不能使用函数控制导数。\n\n$\\text{罗尔定理}\\xrightleftharpoons[\\text{特例：}f(a)=f(b)]{\\text{泛化：任意端点值}}\\text{拉格朗日中值定理}\\xrightleftharpoons[\\text{特例：}F(x)=x]{\\text{泛化：参数方程}}\\text{柯西中值定理}$",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#罗尔定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "罗尔定理",
  "kind": "定理",
  "text": "#### 定义\n\n极值定义：若$\\exists\\delta>0$，使$\\forall x\\in U(x_0,\\delta)$恒有$f(x)\\geqslant f(x_0)$，则$f(x)$在$x_0$处取极小值，恒有$f(x)\\leqslant f(x_0)$，则$f(x)$在$x_0$处取极大值。\n\n费马引理定义：若$f(x)$在$x_0$处取得极值，且$f(x)$在$x_0$处可导，则$f'(x_0)=0$。\n\n罗尔定理定义：\n\n-$f(x)$在$[a,b]$上连续。\n\n-$f(x)$在$(a,b)$内可导。\n\n-$f(a)=f(b)$。\n\n 则$\\exists\\,\\xi\\in(a,b)$，使得$f'(\\xi)=0$。\n\n#### 推广\n\n- 设$f(x)$在$(a,b)$内可导，$\\lim\\limits_{x\\to a^+}f(x)=\\lim\\limits_{x\\to b^-}f(x)=A$，则在$(a,b)$内至少存在一点$\\xi$，使得$f'(\\xi)=0$。\n\n- 设$f(x)$在$(a,b)$内可导，$\\lim\\limits_{x\\to a^+}f(x)=\\lim\\limits_{x\\to b^-}f(x)=\\pm\\infty$，则在$(a,b)$内至少存在一点$\\xi$，使得$f'(\\xi)=0$。\n\n- 设$f(x)$在$(a,+\\infty)$内可导，$\\lim\\limits_{x\\to a^+}f(x)=\\lim\\limits_{x\\to+\\infty}f(x)=A$，则在$(a,+\\infty)$内至少存在一点$\\xi$，使得$f'(\\xi)=0$。\n\n- 设$f(x)$在$(\\infty,+\\infty)$内可导，$\\lim\\limits_{x\\to-\\infty}f(x)=\\lim\\limits_{x\\to+\\infty}f(x)=A$，则在$(-\\infty,+\\infty)$内至少存在一点$\\xi$，使得$f'(\\xi)=0$。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#拉格朗日中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "拉格朗日中值定理",
  "kind": "定理",
  "text": "-$f(x)$在$[a,b]$上连续。\n\n-$f(x)$在$(a,b)$内可导。\n\n则$\\exists\\,\\xi\\in(a,b)$，使得$f(b)-f(a)=f'(\\xi)(b-a)$。\n\n拉格朗日中值定理的几何意义：若连续曲线$y=f(x)$的弧$\\overline {AB}$上除端点外处处具有不垂直于$x$轴的切线，则这弧上至少有一点$C$使曲线在该点处的切线平行于弦$AB$。\n\n其中$f(b)-f(a)=f'[a+\\theta(b-a)](b-a)(0<\\theta<1)$，$\\because f'(\\xi)=f'[a+(\\xi-a)]=f'[a+\\dfrac{\\xi-a}{b-a}(b-a)]$。\n\n有限增量公式定义：$\\Delta y=f(x_0+\\Delta x)-f(x_0)=f'[x_0+\\theta\\Delta x]\\Delta x(0<\\theta<1)$。\n\n有限增量公式中的$\\Delta x$不一定很小，这个是一个增量的准确公式。即将增量$\\Delta y$用$\\Delta x$和该线段上某点的导数来表示，与微分值不同的是这个是个准确值而不是近似值，但是不好用，因为$\\theta$未知。\n\n推论：$f(x)$在$I$上连续且可导，则$I$上$f(x)=C\\Leftrightarrow f'(x)\\equiv 0$。\n\n例题：证明$x>0$时，$\\dfrac{x}{1+x}<\\ln(1+x)<x$。\n\n证明：令$f(x)=\\ln x$，又$\\ln 1=0$，$\\therefore\\ln(1+x)=\\ln(1+x)-\\ln 1$。\n\n根据拉格朗日中值定理$\\ln(1+x)-\\ln 1=f'(\\xi)x=\\dfrac{x}{\\xi}(1<\\xi<1+x)$。\n\n又$\\dfrac{x}{1+x}<\\dfrac{x}{\\xi}<x$，$\\therefore$得证。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#柯西中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "柯西中值定理",
  "kind": "定理",
  "text": "-$f(x)$与$F(x)$在$[a,b]$上连续。\n\n-$f(x)$与$F(x)$在$(a,b)$内可导，且$\\forall x\\in(a,b)$，$F'(x)\\neq 0$。\n\n则$\\exists\\,\\xi\\in(a,b)$，使得$\\dfrac{f(b)-f(a)}{F(b)-F(a)}=\\dfrac{f'(\\xi)}{F'(\\xi)}$。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#泰勒中值定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "泰勒中值定理",
  "kind": "定理",
  "text": "即携带拉格朗日余项的泰勒公式。\n\n设$f(x)$在区间$I$上$(n+1)$阶可导，$x_0\\in I$，那么对$\\forall x\\in I$，$\\exists\\xi$使得$f(x)=f(x_0)+f'(x_0)(x-x_0)+\\cdots+\\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n+R_n(x)$。\n\n拉格朗日型余项：$R_n(x)=\\dfrac{f^{(n+1)(\\xi)}}{(n+1)!}(x-x_0)^{n+1}$，$\\xi\\in I$。用于证明。\n\n陪亚诺型余项：$R_n(x)=o((x-x_0)^n)$。用于求极限，因为余项太粗糙。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#定理",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "定理",
  "kind": "定理",
  "text": "若当$x\\to a$或$x\\to\\infty$时两个函数$f(x)F(x)$都趋向0或无穷大，那么极限$\\lim\\limits_{x\\to \\frac{a}{\\infty}}\\dfrac{f(x)}{F(x)}$可能存在，也可能不存在，这种极限就是不定式。\n\n定理：\n\n- 当$x\\to a\\text{或}\\infty$时，函数$f(x)$，$g(x)$都趋向0或无穷大。\n\n-$f'(x)$和$F'(x)$在点$a$的某去心邻域内，或$\\vert x\\vert$大于充分大的正数时，存在，且$g'(x)\\neq 0$。\n\n-$\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{g'(x)}$或$\\lim\\limits_{x\\to\\infty}\\dfrac{f'(x)}{g'(x)}$存在或无穷大。\n\n-$\\lim\\limits_{x\\to a}\\dfrac{f(x)}{g(x)}=\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{g'(x)}$或$\\lim\\limits_{x\\to\\infty}\\dfrac{f(x)}{g(x)}=\\lim\\limits_{x\\to\\infty}\\dfrac{f'(x)}{g'(x)}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#注意事项",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "注意事项",
  "kind": "定理",
  "text": "- 如果函数比值不为$\\dfrac{0}{0}$或$\\dfrac{\\infty}{\\infty}$型，则不能使用洛必达法则。\n\n- 若求导后极限仍为$\\dfrac{0}{0}$或$\\dfrac{\\infty}{\\infty}$型，则可以继续使用洛必达法则。\n\n- 若$\\lim\\limits_{x\\to a}\\dfrac{f'(x)}{g'(x)}$不存在且不为$\\infty$，不能反推$\\lim\\limits_{x\\to a}\\dfrac{f(x)}{g(x)}$不存在也不为$\\infty$，这时候洛必达法则是失效的。\n\n- 洛必达法则除了可以解决$\\dfrac{0}{0}$型、$\\dfrac{\\infty}{\\infty}$型，还可以将$0\\cdot\\infty$、$\\infty-\\infty$、$1^\\infty$、$\\infty^0$、$0^0$类型进行变型来使用洛必达。\n\n对于第三个注意点：$\\lim\\limits_{x\\to 0}\\dfrac{x^2\\cdot\\sin\\dfrac{1}{x}}{x}=\\lim\\limits_{x\\to 0}x\\cdot\\sin\\dfrac{1}{x}=0$。\n\n而使用洛必达法则：\n\n$\\lim\\limits_{x\\to 0}\\dfrac{x^2\\cdot\\sin\\dfrac{1}{x}}{x}=\\lim\\limits_{x\\to 0}\\left(2x\\cdot\\sin\\dfrac{1}{x}-\\cos\\dfrac{1}{x}\\right)=\\lim\\limits_{x\\to 0}\\left(-\\cos\\dfrac{1}{x}\\right)=\\text{不存在}$",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s4-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#泰勒公式",
  "subject": "gaoshu",
  "topic": "泰勒公式",
  "title": "泰勒公式",
  "kind": "定理",
  "text": "非常重要。过去的很多定义如等价无穷小都是基于泰勒公式。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s4-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#定义",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "定义",
  "kind": "概念",
  "text": "是一个用函数在某点的信息描述其附近取值的公式。如果函数满足一定的条件，泰勒公式可以用函数在某一点的各阶导数值做系数构建一个多项式来近似表达这个函数。即形式：$f(x)=\\sum ax^n$。\n\n简单来说，泰勒公式就是一个近似表达函数的公式。其增量趋向0。\n\n对于泰勒公式以及之前的中值定理等相关延申见\\href{https://www.zhihu.com/question/25627482}知乎回答。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s4-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#泰勒定理",
  "subject": "gaoshu",
  "topic": "中值定理",
  "title": "泰勒定理",
  "kind": "定理",
  "text": "拉格朗日定理是泰勒定理的特例。泰勒定理也称为泰勒中值定理，与之前的三大中值定理组成四大中值定理，前面的三大中值定理建立函数与一阶导数的关系，而泰勒定理建立函数与高阶导数之间的关系。\n\n#### 皮亚诺余项\n\n设$f(x)$在$x_0$处$n$阶可微，则$f(x)=\\sum\\limits_{k=0}^n\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o((x-x_0)^n)$。这个就是带皮亚诺余项的泰勒公式。\n\n$f(x)=\\sum\\limits_{k=0}^n\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k$就是$f(x)$在$x_0$处的$n$次泰勒多项式，$o((x-x_0)^n)$就是函数的皮亚诺余项。\n\n缺点：\n\n- 只给出余项的定性描述，不能进行定量分析。\n\n- 适用范围小。\n\n#### 拉格朗日余项\n\n设$f(x)$在$x_0$处$n+1$阶可微，$x_0\\in I$则$\\forall x\\in I$，$\\exists\\,\\xi\\in I(\\xi\\in(x_0,x))$使得$f(x)=\\sum\\limits_{k=0}^n\\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$。这个就是带拉格朗日余项的泰勒公式。\n\n$R_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$就是函数的拉格朗日余项。\n\n根据拉格朗日中值定理推广的方式：$R_n(x)=\\dfrac{f^{(n+1)}[x_0+\\theta(x-x_0)]}{(n+1)!}(x-x_0)^{n+1}(\\theta\\in(0,1))$。\n\n若$\\vert f^{(n+1)}(x)\\vert\\leqslant M$，则$\\vert R_n(x)\\vert=\\dfrac{\\vert f^{(n+1)}(\\xi)\\vert}{(n+1)!}\\vert x-x_0\\vert^{n+1}\\leqslant\\dfrac{M}{(n+1)!}\\vert x-x_0\\vert^{n-1}$。\n\n特点：\n\n- 进行定量研究。\n\n- 可以进行整体的研究。\n\n- 计算量较大。",
  "relatedLessons": [
   "gs06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s4-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#泰勒展开",
  "subject": "gaoshu",
  "topic": "泰勒公式",
  "title": "泰勒展开",
  "kind": "定理",
  "text": "#### 麦克劳林公式\n\n当$x_0=0$时$f(x)=f(0)+f'(0)x+\\dfrac{f''(0)}{2!}x^2+\\cdots+\\dfrac{f^{(n)(0)}}{n!}x^n+\\text{余项}$为麦克劳林公式：\n\n-$\\sin x=x-\\dfrac{x^3}{3!}+o(x^3)=(-1)^{n-1}\\dfrac{x^{2n-1}}{(2n-1)!}$。\n\n-$\\cos x=1-\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}+o(x^4)=(-1)^n\\dfrac{x^{2n}}{(2n)!}$。\n\n-$\\arcsin x=x+\\dfrac{x^3}{3!}+o(x^3)=\\dfrac{x^{2n-1}}{(2n-1)!}$。\n\n-$\\tan x=x+\\dfrac{x^3}{3}+o(x^3)$。\n\n-$\\arctan x=x-\\dfrac{x^3}{3}+o(x^3)$。\n\n-$\\ln(1+x)=x-\\dfrac{x^2}{2}+\\dfrac{x^3}{3}+o(x^3)=(-1)^n\\dfrac{x^n}{n}$。\n\n-$e^x=1+x+\\dfrac{x^2}{2!}+\\dfrac{x^3}{3!}+o(x^3)=\\dfrac{x^n}{n!}$。\n\n-$(1+x)^\\alpha=1+\\alpha\\cdot x+\\dfrac{\\alpha\\cdot(\\alpha-1)}{2!}x^2+o(x^2)$。\n\n其中$o(x^\\alpha)$为佩亚诺余项，其非常小。\n\n同样可以对泰勒展开式进行变形：$x-\\sin x\\sim\\dfrac{x^3}{6}$，$x+\\sin x\\sim 2x$。\n\n如：\n\n$\\lim\\limits_{x\\to 0}\\dfrac{[\\sin x-\\sin(\\sin x)]\\sin x}{x^4}=\\dfrac{\\dfrac{1}{6}\\sin^3x\\cdot\\sin x}{x^4}=\\dfrac{\\dfrac{1}{6}\\sin^4x}{x^4}=\\dfrac{1}{6}$\n\n#### 泰勒公式计算\n\n先写出$y=f(x)$的泰勒公式或麦克劳林公式，再通过比较系数来获得$f^{(n)}(x_0)$：\n\n- 任何一个无穷阶可导的函数（在收敛的情况下）都可以写为：\n\n$y=f(x)=\\sum_{n=0}^\\infty\\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n$ 或$y=f(x)=\\sum_{n=0}^\\infty\\dfrac{f^{(n)}(0)}{n!}x^n$。\n\n- 给出的任意一个具体的无穷阶可导函数$y=f(x)$都可以通过已知的公式展开为幂级数。\n\n- 而函数的展开式具有唯一性，比较步骤一步骤二的公式的系数就可以获取倒$f^{(n)}(x_0)$或$f^{(n)}(0)$。\n\n例题：设$y=x^3\\sin x$，求$y^{(6)}(0)$。\n\n解：①$y=\\sum_{n=0}^\\infty\\dfrac{y^{(n)}(0)}{n!}x^n$。\n\n$\\because$需要结果的导数阶数为6，所以最后得到的次数为6就可以了。\n\n②$\\therefore y=x^3\\left(x-\\dfrac{1}{6}x^3+\\cdots\\right)=x^4-\\dfrac{1}{6}x^6+\\cdots$（不要写$o(x^n)$，因为这里$x$并不是趋向0的）。\n\n③步骤一的抽象函数当$n=6$时为$\\dfrac{y^{(6)}(0)}{6!}x^6$，它应该与步骤二得到的$x^4-\\dfrac{1}{6}x^6+\\cdots$的6阶项的系数相等。\n\n$\\therefore \\dfrac{y^{(6)}(0)}{6!}=-\\dfrac{1}{6}\\Rightarrow y^{(6)}(0)=-5!=-120$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s4-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#展开幂的选择",
  "subject": "gaoshu",
  "topic": "等价无穷小",
  "title": "展开幂的选择",
  "kind": "定理",
  "text": "泰勒公式展开时应该展开到多少次幂？\n\n\\subsubsection{\\texorpdfstring{$\\dfrac{A}{B}$}\\ 型，上下同阶}\n\n当分母或分子式$x$的$k$次幂那么应该把分母或分子展开到对应的次数幂。\n\n如$\\lim\\limits_{x\\to 0}\\dfrac{x-\\sin x}{x^3}$展开为三次：\n\n$\\lim\\limits_{x\\to 0}\\dfrac{x-\\sin x}{x^3}=\\lim\\limits_{x\\to 0}\\dfrac{x-\\left[x-\\dfrac{1}{6}x^3+o(x^3)\\right]}{x^3}=\\lim\\limits_{x\\to 0}\\dfrac{\\dfrac{1}{6}x^3+o(x^3)}{x^3}=\\dfrac{1}{6}$\n\n\\subsubsection{\\texorpdfstring{$A-B$}\\ 型，幂次最高}\n\n将$A$，$B$分别展到他们系数不相等的$x$的最高次幂为止。\n\n如已知当$x\\to 0$时，$\\cos x-e^{-\\frac{x^2}{2}}$与$ax^k$为等价无穷小，求$a$，$b$。\n\n泰勒展开：\n\n$\\cos x-e^{-\\frac{x^2}{2}}= 1-\\dfrac{x^2}{2}+\\dfrac{1}{24}x^4+o(x^4)-\\left(1-\\dfrac{x^2}{2}+\\dfrac{1}{8}x^4+o(x^4)\\right)$\n\n$=-\\dfrac{1}{12}x^4+o(x^4)\\sim -\\dfrac{1}{12}x^4$\n\n$\\therefore a=-\\dfrac{1}{12},b=4$。\n\n例题：求解$\\lim\\limits_{x\\to 0}\\dfrac{\\sin^2x-x^2}{e^{x^4}-1}$。\n\n解：首先由泰勒展开式$e^x=1+x+o(x)$，得到$e^x-1\\sim x$。\n\n$\\therefore e^{x^4}-1\\sim x^4$。\n\n然后泰勒展开：\n\n$x-\\sin x=1\\cdot x^1+0\\cdot x^3 - (1\\cdot x^1-\\dfrac{1}{6}x^3+o(x^3))= \\dfrac{1}{6}x^3+o(x^3)\\sim\\dfrac{1}{6}x^3$\n\n$x+\\sin x=x-(-\\sin x)=1\\cdot x^1-(-1\\cdot x^1)+o(x)=2x+o(x)\\sim 2x$\n\n$\\therefore\\lim\\limits_{x\\to 0}\\dfrac{\\sin^2x-x^2}{e^{x^4}-1}=\\lim\\limits_{x\\to 0}\\dfrac{(\\sin x+x)(\\sin x-x)}{x^4}=\\lim\\limits_{x\\to 0}\\dfrac{2x\\cdot\\left(-\\dfrac{1}{6}x^3\\right)}{x^4}=-\\dfrac{1}{3}$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s5-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#函数单调性",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "函数单调性",
  "kind": "定理",
  "text": "定理：\n\n- 函数$f(x)$在区间$[a,b]$上连续，在$(a,b)$内可导。\n\n- 若$(a,b)$内$f'(x)\\geqslant 0$，且等号只有有限个点上成立，则$f(x)$在$[a,b]$上单调增加。\n\n- 若$(a,b)$内$f'(x)\\leqslant 0$，且等号只有有限个点上成立，则$f(x)$在$[a,b]$上单调减少。\n\n例题：证明$x>0$时，$x-\\dfrac{x^3}{6}<\\sin x<x$。\n\n证明：首先令$f(x)=x-\\sin x$，而$f(0)=0$。\n\n$f'(x)=1-\\cos x\\geqslant 0$，则$f(x)$在$R$上递增。\n\n$\\therefore$在$(0,+\\infty]$上$f(x)>f(0)=0$，即$x>\\sin x$。\n\n令$g(x)=\\sin x-x-\\dfrac{x^3}{6}$，而$g(0)=0$。\n\n$g'(x)=\\cos x-1+\\dfrac{x^2}{2}\\geqslant 0$，则$g(x)$在$R$上递增。\n\n$\\therefore$在$(0,+\\infty]$上$g(x)>g(0)=0$，即$\\sin x>x-\\dfrac{x^3}{6}$。\n\n得证。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s5-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#曲线凹凸性与拐点",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "曲线凹凸性与拐点",
  "kind": "定理",
  "text": "定义：若函数$f(x)$在区间$I$上连续，且对$I$上任意两点$x_1,x_2$恒有：\n\n-$f(\\dfrac{x_1+x_2}{2})<\\dfrac{f(x_1)+f(x_2)}{2}$，则$f(x)$在$I$上凹。\n\n-$f(\\dfrac{x_1+x_2}{2})>\\dfrac{f(x_1)+f(x_2)}{2}$，则$f(x)$在$I$上凸。\n\n而当凹凸性发生改变的点就是拐点。\n\n定理：\n\n- 函数$f(x)$在区间$[a,b]$上连续，在$(a,b)$内二阶可导。\n\n- 若$(a,b)$内$f''(x)>0$，则$f(x)$在$[a,b]$上凹。\n\n- 若$(a,b)$内$f'(x)<0$，则$f(x)$在$[a,b]$上凸。\n\n拐点的二阶导数等于0，或拐点在二阶导数不存在的点。\n\n例题：证明凹凸性与二阶导数的关系。\n\n证明：不妨先证明凹函数与二阶导数的关系。已知$f''(x)>0$\n\n不妨设$x_1<x_2$，且$\\dfrac{x_1+x_2}{2}=x_0$。\n\n$f(x_1)+f(x_2)-2(x_0)=[f(x_2)-f(x_0)]-[f(x_1)-f(x_0)]$\n\n$\\xRightarrow{\\text{拉格朗日中值定理}}=f'(\\xi_2)(x_2-x_0)-f'(\\xi_1)(x_0-x_1)=\\dfrac{x_2-x_1}{2}[f'(\\xi_2)-f'(\\xi_1)]>0$\n\n$\\therefore f''(x)>0\\Rightarrow f(\\dfrac{x_1+x_2}{2})<\\dfrac{f(x_1)+f(x_2)}{2}$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s6-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#函数极值",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "函数极值",
  "kind": "定理",
  "text": "极值定义：若$\\exists\\,\\delta>0$，使\n\n$\\forall x\\in U(x_0,\\delta)$恒有$f(x)\\geqslant f(x_0)$，则$f(x)$在$x_0$取极小值。\n\n$\\forall x\\in U(x_0,\\delta)$恒有$f(x)\\leqslant f(x_0)$，则$f(x)$在$x_0$取极大值。\n\n定理：（极值必要条件）\n\n若$f(x)$在$x_0$处可导，且$x_0$处取得极值，则$f'(x_0)=0$。\n\n定理：（极值第一充分条件）\n\n若$f(x)$在$\\mathring{U}(x_0,\\delta)$内可导，且$f'(x_0)=0$或在$x_0$连续。\n\n- 若$x<x_0$时，$f'(x)\\geqslant 0$，$x>x_0$时$f'(x)\\leqslant 0$，则$x_0$取得极大值。\n\n- 若$x>x_0$时，$f'(x)\\geqslant 0$，$x<x_0$时$f'(x)\\leqslant 0$，则$x_0$取得极小值。\n\n- 若$f'(x)$在$x_0$处不变号，则无极值点。\n\n定理：（极值第二充分条件）\n\n若$f'(x_0)=0$而且$f''(x_0)\\neq 0$：\n\n- 当$f''(x_0)<0$，则$f(x)$在$x_0$取极大值。\n\n- 当$f''(x_0)>0$，则$f(x)$在$x_0$取极小值。\n\n定理：（极值第三充分条件）\n\n若$f(x)$在$x_0$处$n(n\\geqslant2)$阶可导，且$f'(x_0)=f''(x_0)=\\cdots=f^{(n-1)}(x_0)=0$，$f^{(n)}(x_0)\\neq0$，则：\n\n- 当$n$为偶数时$f(x)$在$x_0$取得极值。当$f^{(n)}(x_0)<0$，则$f(x)$在$x_0$取极大值，当$f^{(n)}(x_0)>0$，则$f(x)$在$x_0$取极小值。\n\n- 当$n$为奇数时$f(x)$在$x_0$处无极值。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s6-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#函数最值",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "函数最值",
  "kind": "概念",
  "text": "#### 连续函数闭区间最值\n\n- 求出$f(x)$在$(a,b)$内的驻点和不可导的点$x_1,x_2\\cdots,x_n$。\n\n- 求出函数值$f(x_1),f(x_2)\\cdots,f(x_n)$与端点值$f(a),f(b)$。\n\n- 比较求出最值。\n\n#### 最值应用题\n\n- 建立目标函数并确定定义域。\n\n- 求出驻点并计算值。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s7-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#基本步骤",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "基本步骤",
  "kind": "方法",
  "text": "- 确定函数定义域，并考察其奇偶性与周期性。\n\n- 求出一阶导数与二阶导数，并计算导数为0与不存在的点。\n\n- 根据导数判断增减性与凹凸性，并求出极值与拐点。\n\n- 求出渐近线。\n\n- 确定另外的特殊点。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s7-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#函数渐近线",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "函数渐近线",
  "kind": "方法",
  "text": "- 若$\\lim\\limits_{x\\to\\infty}f(x)=A$，那么$y=A$就是水平渐近线。\n\n- 若$\\lim\\limits_{x\\to x_0}f(x)=\\infty$，那么$x=x_0$就是垂直渐近线。\n\n- 若$\\lim\\limits_{x\\to\\infty}\\dfrac{f(x)}{x}=a,b=\\lim\\limits_{x\\to\\infty}(f(x)-ax)$，那么$y=ax+b$就是斜渐近线。\n\n考的比较多的是斜渐进性，计算较复杂，如果能写成$y=f(x)=ax+b+o(x)$，$o(x)$为$x\\to\\infty$的高阶无穷小，则能快速得到斜渐进线。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s8-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#弧微分",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "弧微分",
  "kind": "总结",
  "text": "$\\vert\\overline {yy_0}\\vert=S(x)$\n\n$\\Delta y=f(x+\\Delta x)-f(x)$\n\n$(\\Delta s)^2\\approx(\\Delta x)^2+(\\Delta y)^2$\n\n当偏移量无穷小时，$y=f(x)$所构成的线段就是一条直线，所以：\n\n$\\textrm{d}y=f\\,(x+\\textrm{d}x)-f\\,(x)$\n\n$(\\textrm{d}s)^2=(\\textrm{d}x)^2+(\\textrm{d}y)^2$\n\n$\\textrm{d}s=\\sqrt{(\\textrm{d}x)^2+(\\textrm{d}y)^2}$（弧微分）\n\n对于弧微分：\n\n- 若直角坐标系下$y=f(x)$，$\\textrm{d}s=\\sqrt{1+\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}x}\\right)^2}\\textrm{d}x=\\sqrt{1+f'^2(x)}\\textrm{d}x$，即$\\textrm{d}s=\\sqrt{1+f'^2(x)}\\textrm{d}x$。\n\n- 若参数方程下：$x=\\phi(t),y=\\psi(t)$，$\\textrm{d}s=\\sqrt{\\left(\\dfrac{\\textrm{d}x}{\\textrm{d}t}\\right)^2+\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}t}\\right)^2}\\textrm{d}t$\n$=\\sqrt{\\psi'^2(t)+\\phi'^2(t)}\\textrm{d}t$，即$\\textrm{d}s=\\sqrt{\\psi'^2(t)+\\phi'^2(t)}\\textrm{d}t$。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s8-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#曲率",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "曲率",
  "kind": "概念",
  "text": "曲率定义：表明曲线在某一点的弯曲程度的数值，针对曲线上某个点的切线方向角对弧长的转动率，通过微分来定义，表明曲线偏离直线的程度。曲率越大，表示曲线的弯曲程度越大。\n\n曲率的倒数就是曲率半径。\n\n 两点切线改变角相同时，弯曲程度与两点之间的弧长度成反比。\n\n 两点之间的弧长度相同时，弯曲程度与两点切线改变角成正比。\n\n$y-y_0$平均曲率：$\\hat{k}=\\dfrac{\\vert\\Delta\\alpha\\vert}{\\vert\\Delta s\\vert}$。\n\n$y$曲率：$k=\\lim\\limits_{\\Delta x\\to 0}\\left\\lvert\\dfrac{\\Delta\\alpha}{\\Delta s}\\right\\rvert=\\left\\lvert\\dfrac{\\textrm{d}\\alpha}{\\textrm{d}s}\\right\\rvert$（$\\alpha$为$y$处切线与$x$轴所成角）。\n\n需要对曲率公式进行化简，得到$s$与$\\alpha$关于$x$的表示。根据弧微分的定义：$\\textrm{d}s=\\sqrt{1+f'^2(x)}\\textrm{d}x$。\n\n而对于$\\alpha$：$\\tan\\alpha=y'=f'(x)$。\n\n两边对$x$求导：$\\sec^2\\alpha\\cdot\\dfrac{\\textrm{d}\\alpha}{\\textrm{d}x}=y''=f''(x)$。\n\n又$\\because\\sec^2\\alpha=1+\\tan^2\\alpha=1+y'^2$。\n\n$\\therefore\\dfrac{\\textrm{d}\\alpha}{\\textrm{d}x}=\\dfrac{y''}{1+y'^2}\\Rightarrow\\textrm{d}\\alpha=\\dfrac{y''}{1+y'^2}\\textrm{d}x$。\n\n$\\therefore \\textbf{定理：}k=\\left\\lvert\\dfrac{\\textrm{d}\\alpha}{\\textrm{d}s}\\right\\rvert=\\dfrac{\\vert y''\\vert}{(1+y'^2)^{\\frac{3}{2}}}$。\n\n对于参数方程，$k=\\dfrac{\\vert y''x'-y'x''\\vert}{\\left(x'^2+y'^2\\right)^{\\frac{3}{2}}}$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-3-applications-of-derivatives-applications-of-derivatives-s8-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/3-applications-of-derivatives/applications-of-derivatives.tex#曲率半径",
  "subject": "gaoshu",
  "topic": "一元微分几何应用",
  "title": "曲率半径",
  "kind": "总结",
  "text": "$\\odot\\,O$为函数$L$在点$X$处的曲率圆，该圆与$L$在$X$处相切，切线为$T$。\n\n 该点的曲率半径为$R$，其中$R=\\dfrac{1}{K}$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#定义",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "定义",
  "kind": "概念",
  "text": "设$f(x)$定义在区间$I$上，若存在可导函数$F(x)$，使得$F'(x)=f(x)$对于任意$x\\in I$都成立，则称$F(x)$为$f(x)$在区间$I$上的一个原函数。\n\n定理：任意的两个原函数只相差一个常数。\n\n在区间$I$上，函数$f(x)$带有任意常数项的原函数$F(x)+C$称为$f(x)/f(x)\\,\\textrm{d}x$在该区间上的不定积分，记为$\\int f(x)\\,\\textrm{d}x$，其中$\\int$为积分号，$f(x)$为被积函数，$f(x)\\,\\textrm{d}x$为被积表达式，$x$为积分变量。\n\n积分就是导数的逆运算。$\\int f(x)\\,\\textrm{d}x=F(x)+C$，$F'(x)=f(x)$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#性质",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "性质",
  "kind": "定理",
  "text": "#### 计算性质\n\n积分运算就可以将原来求导的方式进行逆运算。其中隐函数求导法与参数方程求导法都可以看作复合函数求导法则的变式。\n\n积分运算具有两个性质：\n\n-$\\int[f(x)+g(x)]\\textrm{d}x=\\int f(x)\\textrm{d}x+\\int g(x)\\textrm{d}x$，就是分项积分法。\n\n-$\\int kf(x)\\textrm{d}x=k\\int f(x)\\textrm{d}x$（$k\\neq 0$）。\n\n复合函数的求导法则的逆运算，就是换元积分法。\n\n函数乘积的求导法则的逆运算，就是分部积分法。\n\n#### 存在性性质\n\n即一元函数的常义（区间有限，函数有界）可积性。\n\n定理：连续函数必有原函数。而反之有原函数不一定是连续函数，可能有第二类间断点。\n\n定理：含有第一类间断点、无穷间断点的函数$f(x)$在包含其间断点的区间内必没有原函数$F(x)$。（可以用导数介值定理反证，一个函数的导数不可能导出不可导的点）\n\n若原函数含有震荡间断点则可能导出导函数。\n\n如$F(x)=\\left\\{\\begin{array}{lcl}\n    x^2\\sin\\dfrac{1}{x}, & & x\\neq 0 \\\\\n    0, & & x=0\n\\end{array}\\right.$，$f(x)=\\left\\{\\begin{array}{lcl}\n    2x\\sin\\dfrac{1}{x}-\\cos\\dfrac{1}{x}, & & x\\neq 0 \\\\\n    0, & & x=0\n\\end{array}\\right.$。\n\n这个函数$F(x)$是连续函数，而$f(x)$在靠近0时的极限为$\\lim\\limits_{x\\to 0}(2x\\sin\\dfrac{1}{x}-\\cos\\dfrac{1}{x})=-\\lim\\limits_{x\\to 0}\\cos\\dfrac{1}{x}$是一个振荡间断点。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s1-3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#第一类换元法（凑微分法）",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "第一类换元法（凑微分法）",
  "kind": "定理",
  "text": "定理：$\\int f(u)\\,\\textrm{d}u=F(u)+C$，则$\\int f[\\varphi(x)]\\varphi'(x)\\,\\textrm{d}x=\\int f[\\varphi(x)]\\,\\textrm{d}\\varphi(x)=F[\\varphi(x)]+C$。\n\n即用一个中间变量如$t$替换一个$x$的复杂表达式从而让式子更简单接近基本积分公式。\n\n如$\\displaystyle{\\int\\dfrac{x}{\\sqrt{1+x^2}}\\textrm{d}x=\\dfrac{1}{2}\\int\\dfrac{\\textrm{d}(1+x^2)}{\\sqrt{1+x^2}}}=\\sqrt{1+x^2}+C$。\n\n凑微分法适用于式子比较简单的情况，所凑微分的形式必须符合一个简单积分公式的式子，且有一定的式子可以提出来到微分号后面。\n\n例题：\n\n解：$\\int(1+3x)^{100}\\,\\textrm{d}x=\\dfrac{1}{3}\\int(1+3x)^{100}\\,\\textrm{d}(1+3x)=\\dfrac{1}{303}(1+3x)^{101}+C$。\n\n$\\int\\cos^2x\\,\\textrm{d}x=\\dfrac{1}{2}\\int(1+\\cos 2x)\\,\\textrm{d}x=\\dfrac{1}{2}\\left(x+\\dfrac{1}{2}\\sin 2x\\right)+C$。\n\n$\\int\\cos^3x\\,\\textrm{d}x=\\int\\cos^2\\,\\textrm{d}\\sin x=\\int(1-\\sin^2x)\\,\\textrm{d}\\sin x=\\sin x-\\dfrac{1}{3}\\sin^3x+C$。\n\n$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{x\\sqrt{1+\\ln x}}=\\int\\dfrac{\\textrm{d}(1+\\ln x)}{\\sqrt{1+\\ln x}}}=2\\sqrt{1+\\ln x}+C$。\n\n$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{\\sqrt{x}(1+x)}=2\\int\\dfrac{\\textrm{d}\\sqrt{x}}{1+(\\sqrt{x})^2}}=2\\arctan\\sqrt{x}+C$。\n\n$\\displaystyle{\\int\\dfrac{\\arcsin\\sqrt{x}}{\\sqrt{x(1-x)}}\\,\\textrm{d}x=\\int\\dfrac{\\arcsin\\sqrt{x}}{1-x}\\cdot\\dfrac{\\textrm{d}x}{\\sqrt{x}}=2\\int\\dfrac{\\arcsin\\sqrt{x}}{1-(\\sqrt{x})^2}\\,\\textrm{d}\\sqrt{x}}$\n\n$=2\\int\\arcsin\\sqrt{x}\\,\\textrm{d}\\arcsin\\sqrt{x}=(\\arcsin\\sqrt{x})^2+C$。\n\n$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{\\sqrt{a^2-x^2}}}=\\displaystyle{\\int\\dfrac{\\textrm{d}\\left(\\dfrac{x}{a}\\right)}{\\sqrt{1-\\left(\\dfrac{x}{a}\\right)^2}}}=\\arcsin\\dfrac{x}{a}+C$。\n\n$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{a^2+x^2}}=\\displaystyle{\\int\\dfrac{\\textrm{d}\\left(\\dfrac{x}{a}\\right)}{1+\\left(\\dfrac{x}{a}\\right)^2}}=\\dfrac{1}{a}\\arctan\\dfrac{x}{a}+C$。\n\n$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{x^2-a^2}}=\\displaystyle{\\int\\dfrac{\\textrm{d}x}{(x-a)(x+a)}}=\\dfrac{1}{2a}\\displaystyle{\\int\\left(\\dfrac{1}{x-a}-\\dfrac{1}{x+a}\\right)\\textrm{d}x}$\n\n$=\\dfrac{1}{2a}\\left(\\displaystyle{\\int\\dfrac{\\textrm{d}(x-a)}{x-a}-\\int\\dfrac{\\textrm{d}(x+a)}{x+a}}\\right)=\\dfrac{1}{2a}\\ln\\left\\vert\\dfrac{x-a}{x+a}\\right\\vert+C$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s1-3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#第二类换元法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "第二类换元法",
  "kind": "定理",
  "text": "定理：设$x=\\varphi(t)$为单调可导函数，且$\\varphi'(t)\\neq 0$，$\\int f[\\varphi(t)\\varphi'(t)]\\,\\textrm{d}t=F(t)+C$，则$\\int f(x)\\textrm{d}x=\\int f[\\varphi(t)\\varphi'(t)]\\,\\textrm{d}t=F(t)+C=F[\\varphi^{-1}(x)]+C$。\n\n第二类换元法适用于无法适用第一类换元法的情况，但是最重要的还是对于中间变量的取值，这个中间变量必须要让原式子更能接近公式，且还要注意到变量取值范围。\n\n第二类换元法相当于第一类换元法的逆运算，不是将复杂的$x$表达式转为简单的一个$t$，而是将一个简单的$x$转换为一个关于$t$的表达式。这是因为简单的$x$无法求出积分结果，必须通过复杂化$x$“中和”一部分式子来进行转化。\n\n注意：$\\varphi'(t)\\neq 0$是为了保证中间变量函数具有反函数，而严格单调函数必然有反函数，所以只要能证明这个中间变量函数必然严格单调，那么其实$\\varphi'(t)$也可以等于0。\n\n例题：求$\\int\\sqrt{a^2-x^2}\\,\\textrm{d}x(a>0)$。\n\n解：首先看题目，如果使用凑微分法，那必须从式子中提取出一个式子放到微分后面，且提取后的式子满足一个简单的积分公式。\n\n这个式子一般就只能提取出$x$到平方号外面，但是提取后式子仍不能变为一个简单微分公式，所以说第一种凑微分法就无法使用，就只能使用第二类换元法。\n\n这个式子是一个平方取开平方的式子，所以取中间变量后最好让这个式子能被开平方。又涉及到一个常数$a$，所以我们很容易就想到是否可以通过三角函数来作为中间变量。\n\n所以取$x=a\\sin t$，从而$\\sqrt{a^2-x^2}=a\\cos t$。\n\n并且还要注意到这个$t$的取值范围。\n\n因为$x=\\varphi(t)$是一个单调可导的函数。所以$\\sin t$必须取在单调区间上。\n\n又$\\sqrt{a^2-x^2}$要求$-a\\leqslant x\\leqslant a$，$-a\\leqslant a\\sin t\\leqslant a$，从而$-1\\leqslant\\sin t\\leqslant 1$。\n\n且$\\varphi'(t)\\neq 0$，所以$\\cos t\\neq 0$。\n\n所以综上三个条件从而得到一个$t$的定义域：$t\\in\\left[-\\dfrac{\\pi}{2},0\\right)\\cup\\left(0,\\dfrac{\\pi}{2}\\right]$。\n\n但是在$\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$上$\\varphi'(t)=a\\sin t$是严格单调递增的，单调函数必然存在反函数，所以$\\varphi'(t)$可以等于0，从而$t\\in\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]$。\n\n$\\int\\sqrt{a^2-x^2}\\,\\textrm{d}x=a\\int\\cos t\\,\\textrm{d}a\\sin t=a^2\\int\\cos^2t\\textrm{d}t=\\dfrac{a^2}{2}\\int(1+\\cos 2t)\\textrm{d}t=\\dfrac{a^2}{2}\\left(t+\\dfrac{1}{2}\\sin 2t\\right)+C=\\dfrac{a^2}{2}\\left(\\arcsin\\dfrac{x}{a}+\\dfrac{x}{a}\\sqrt{1-\\dfrac{x^2}{a^2}}\\right)+C$。\n\n例题：\n\n解：已知$\\tan^2x+1=\\sec^2x$。\n\n$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{\\sqrt{a^2+x^2}}}(a>0)$。\n\n令$x=a\\tan t$。\n\n原式$=\\displaystyle{\\int\\dfrac{a\\sec^2t}{a\\sec t}\\,\\textrm{d}t=\\int\\sec t\\,\\textrm{d}t}=\\ln\\vert\\sec t+\\tan t\\vert+C=\\ln\\bigg\\vert\\sqrt{1+\\dfrac{x^2}{a^2}}+\\dfrac{x}{a}\\bigg\\vert+C$。\n\n$\\displaystyle{\\int\\dfrac{\\textrm{d}x}{\\sqrt{x^2-a^2}}}(a>0)$。\n\n令$x=a\\sec t$。\n\n原式$=\\displaystyle{\\int\\dfrac{a\\sec t\\tan t}{a\\tan t}\\,\\textrm{d}t}=\\ln\\bigg\\vert\\sec t+\\tan t\\bigg\\vert+C=\\ln\\bigg\\vert\\dfrac{x}{a}+\\sqrt{\\dfrac{x^2}{a^2}-1}\\vert+C$。\n\n所以常用的换元积分替换方式：\n\n-$\\sqrt{a^2-x^2}$：$x=a\\sin t(a\\cos t)$。\n\n-$\\sqrt{a^2+x^2}$：$x=a\\tan t$。\n\n-$\\sqrt{x^2-a^2}$：$x=a\\sec t$。\n\n换元法本质是将式子转换为我们已知的积分公式，所以换元积分法只适合于能转换为积分公式的简单式子上，如果式子比较复杂或形式与大部分积分公式不一致，那么也无法换元了。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s1-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#分部积分法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "分部积分法",
  "kind": "定理",
  "text": "已知$(uv)'=uv'+u'v$，所以$uv'=(uv)'-u'v$，从而$\\int uv'\\,\\textrm{d}x=\\int(uv)'\\,\\textrm{d}x-\\int vu'\\,\\textrm{d}x$，即$\\int u\\,\\textrm{d}v=uv-\\int v\\,\\textrm{d}u$。\n\n所以分部积分法的公式就是：$\\int u\\,\\textrm{d}v=uv-\\int v\\,\\textrm{d}u$。\n\n所以分部积分法的适用方式就是所求积分的式子是一个可拆分为两项不同函数的式子，式子的分式中一个式子不好积分，另一个式子好积分，就可以用好积分的式子来积分计算。\n\n#### 基本分部积分\n\n例题：\n\n解：$\\int xe^x\\,\\textrm{d}x=\\int x\\,\\textrm{d}e^x=xe^x-\\int e^x\\textrm{d}x=xe^x-e^x+C$。\n\n$\\int x\\sin x\\,\\textrm{d}x=-\\int x\\,\\textrm{d}\\cos x=-[x\\cos x-\\int\\cos x\\,\\textrm{d}x]=-[x\\cos x-\\sin x]+C=\\sin x-x\\cos x+C$。\n\n$\\int x\\ln x\\,\\textrm{d}x=\\dfrac{1}{2}\\int\\ln x\\textrm{d}x^2=\\dfrac{1}{2}[x^2\\ln x-\\ln x^2\\textrm{d}\\ln x]=\\dfrac{1}{2}[x^2\\ln x-\\ln x\\textrm{d}x]=\\dfrac{1}{2}x^2\\ln x-\\dfrac{1}{4}x^2+C$。\n\n$\\int x\\arctan x\\textrm{d}x=\\dfrac{1}{2}\\int\\arctan x\\textrm{d}x^2=\\dfrac{1}{2}\\left[x^2\\arctan x-\\displaystyle{\\int\\dfrac{x^2}{1+x^2}\\textrm{d}x}\\right]=\\\\ \\dfrac{1}{2}[x^2\\arctan x-x+\\arctan x]+C$。\n\n#### 多次分部积分还原\n\n当式子中含有$\\sin x$，$\\cos x$，$e^x$这种积分后变化不大的因式时，可以适用多步分部积分，然后在右边计算的式子中得到左边目标式子一样的因式，然后移到一边就能得到目标式子的表达式。\n\n例题：\n\n解：\n\n$\n\\begin{aligned}\n    \\int e^x\\sin x\\,\\textrm{d}x & =\\int\\sin x\\,\\textrm{d}e^x \\\\\n    & =e^x\\sin x-\\int e^x\\cos x\\,\\textrm{d}x \\\\\n    & =e^x\\sin x-\\int\\cos x\\,\\textrm{d}e^x \\\\\n    & =e^x\\sin x-\\left[e^x\\cos x+\\int e^x\\sin\\,\\textrm{d}x\\right] \\\\\n    2\\int e^x\\sin x\\,\\textrm{d}x & =e^x\\sin x-e^x\\cos x\n\\end{aligned}\n$\n\n$\\therefore\\int e^x\\sin x\\,\\textrm{d}x=\\dfrac{e^x\\sin x-e^x\\cos}{2}+C$。\n\n$\n\\begin{aligned}\n    \\int\\sec^3x\\,\\textrm{d}x =&\\int\\sec x\\,\\textrm{d}\\tan x \\\\\n    & =\\sec x\\tan x-\\int\\tan^2x\\sec x\\,\\textrm{d}x \\\\\n    & =\\sec x\\tan x-\\int\\sec^3x\\textrm{d}x+\\int\\sec x\\textrm{d}x \\\\\n    2\\int\\sec^3x\\,\\textrm{d}x =&[\\sec x\\tan x+\\ln\\vert\\sec x+\\tan x\\vert]\n\\end{aligned}\n$\n\n$\\therefore\\int\\sec^3x\\,\\textrm{d}x =\\dfrac{\\sec x\\tan x+\\ln\\vert\\sec x+\\tan x\\vert}{2}+C$。\n\n如上所说分部积分的方法就是找到目标式子中两个因式好求的一部分进行积分，其中好求是指$\\textrm{d}v$微分后这个结果会简化整个式子。\n\n其中$e^x$，$\\sin x$，$\\cos x$这三个因式求微分后无法简化，所以无法对其微分，除非需要多次分部积分还原间接求出；$x^n$微分后会降幂，所以一般可以积分；而$\\ln x$，$\\arctan x$，$\\arcsin x$微分会转换为幂函数相关的式子降低幂次，如果不对其微分则无法消去这三个函数，所以如果出现这三个因式必然优先微分。\n\n所以常用的分部积分方式：\n\n-$\\int x^ne^x\\,\\textrm{d}x$、$\\int x^n\\sin x\\,\\textrm{d}x$，$\\int x^n\\cos x\\,\\textrm{d}x$：对非幂函数的部分，即对$e^x$或三角函数进行分部。\n\n-$\\int x^n\\ln x\\,\\textrm{d}x$，$\\int x^n\\arctan x\\,\\textrm{d}x$，$\\int x^n\\arcsin x\\,\\textrm{d}x$：对幂函数的部分，即对$x^n$进行分部。\n\n-$\\int e^x\\sin x\\,\\textrm{d}x$，$\\int e^x\\cos x\\,\\textrm{d}x$：对哪个部分进行分部都可以，而$e^x$进行分部积分时没有正负号的改变，所以对$e^x$进行分部积分，需要多次分部积分还原。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s1-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#有理函数的积分",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "有理函数的积分",
  "kind": "定理",
  "text": "两个多项式的商$\\dfrac{P(x)}{Q(x)}$被称为有理函数，或有理分式。\n\n假设该多项式之间没有公因式，当$P(x)$的次数小于$Q(x)$的次数时称为真分式，否则称为假分式。\n\n假分式可以分解为多项式与真分式之和。\n\n真分式$\\dfrac{P(x)}{Q(x)}$若可以分解为两个或多个多项式的乘积：$\\dfrac{P(x)}{Q(x)}=\\dfrac{P_1(x)}{Q_1(x)}+\\dfrac{P_2(x)}{Q_2(x)}+\\cdots$，则称为将真分式化为部分分式之和。其中$P_i$的最高阶应该低于$Q_i$最高阶次数。\n\n通过这种化简方式，可以在求以商的形式的有利函数的式子的积分时拆分因式，从而简化积分运算。这种简化运算主要体现在分数的积分为对数。\n\n即将多项式的积分式子转换为$\\displaystyle{\\int\\dfrac{A}{x-a}\\textrm{d}x}$和$\\displaystyle{\\int\\dfrac{A}{(x-a)^n}\\textrm{d}x}$等形式。\n\n当然如果多项式是无法拆分为一次的多个式子，那就无法使用有理函数积分的化简方式。\n\n定理：\n\n$\\dfrac{P}{(A_0x^a+A_1x^{a-1}+\\cdots+A_ax^0)\\cdots(N_0x^n+N_1x^{n-1}+\\cdots+N_nx^0)}$\n\n$=\\dfrac{a_0x^{a-1}+a_1x^{a-2}+\\cdots+a_{a-1}x^0}{A_0x^a+A_1x^{a-1}+\\cdots+A_ax^0}+\\cdots+\\dfrac{n_0x^{n-1}+n_1x^{n-2}+\\cdots+n_{n-1}x^0}{N_0x^n+N_1x^{n-1}+\\cdots+N_nx^0}$\n\n如$\\dfrac{2x+3}{(x+1)(x+2)(x^2+3x+1)}=\\dfrac{A}{x+1}+\\dfrac{B}{x+2}+\\dfrac{Cx+D}{x^2+3x+1}$\n\n从而$A(x+2)(x^2+3x+1)+B(x+1)(x^2+3x+1)+(Cx+D)(x+1)(x+2)$\n\n$=A(x^3+5x^2+7x+2)+B(x^3+4x^2+4x+1)+(Cx^3+(3C+D)x^2+(2C+3D)x+2D)$\n\n$=(A+B+C)x^3+(5A+4B+3C+D)x^2+(7A+4B+2C+3D)x+(2A+B+2D)$\n\n从而$A+B+C=0$（①），$5A+4B+3C+D=0$（②），$7A+4B+2C+3D=2$（③），$2A+B+2D=3$（④）。\n\n②-3×①=$2A+B+D=0$（⑤）\n\n④-⑤=$D=3$。\n\n从而$5A+4B+3C=-3$（②），$7A+4B+2C=-7$（③），$2A+B=-3$（④）。\n\n③-②=$2A-C=-4$（⑥）。\n\n⑥+①=$3A+B=-4$（⑦）。\n\n⑦-④=$A=-1$。\n\n从而$B+C=1$（①），$4B+3C=2$（②），$4B+2C=0$（③），$B=-1$（④）。\n\n从而$C=2$。\n\n所以$\\dfrac{2x}{(x+1)(x+2)(x^2+3x+1)}=-\\dfrac{1}{x+1}-\\dfrac{1}{x+2}+\\dfrac{2x+3}{x^2+3x+1}$。\n\n定理：\n\n$\\dfrac{P}{x^n}=\\dfrac{A}{x}+\\dfrac{B_0x+B_1}{x^2}+\\cdots+\\dfrac{N_0x^{n-1}+\\cdots+N_{n-1}x^0}{x^n}$\n\n如$\\dfrac{2x}{(1+x)(x^2+1)^2}=-\\dfrac{1}{2}\\dfrac{1}{x+1}+\\dfrac{1}{2}\\dfrac{x-1}{x^2+1}+\\dfrac{x+1}{(x^2+1)^2}$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#定积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "定积分",
  "kind": "概念",
  "text": "不定积分的概念根据导数的代数定义给出，而定积分则由几何的面积运算引出。\n\n定积分是积分的一种，是函数在一个区间上积分和的极限。已知$f(x)$为速度函数，则$f'(x)$为速度变化率函数，$\\textrm{d}f(x)$为瞬时位移，则$\\int_{a}^bf(x)\\,\\textrm{d}x$为位移函数。\n\n如果说是微分就是微小改变量的计算，那么积分就是累加无穷个微分得到的整个计算。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#定义",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "定义",
  "kind": "概念",
  "text": "设函数$f(x)$在区间$[a,b]$上连续，将区间分割为$n$个子区间：$[x_0,x_1],(x_1,x_2],$\n$(x_2,x_3],\\cdots,(x_{n-1},x_n]$，其中$x_0=a$，$x_n=b$。并可知各区间长度为$\\Delta x_1=x_1-x_0\\cdots$，在每个子区间$(x_{i-1},x_i]$上任意取一点$\\xi_i(i=1,2,\\cdots,n)$，做累计和$\\sum\\limits_{i=1}^nf(\\xi_i)\\Delta x_i=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^nf(a+\\dfrac{b-a}{n}i)\\dfrac{b-a}{n}=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^nf(\\dfrac{i}{n})\\dfrac{1}{n}=\\int_0^1f(x)\\,\\textrm{d}x$，这个式子被称为积分和。\n\n设$\\lambda=\\max{\\Delta x_1,\\Delta x_2,\\cdots,\\Delta x_n}$，从而$\\lambda$为最大的区间长度，若$\\lambda\\to 0$时积分和极限$\\lim\\limits_{\\lambda\\to 0}\\sum\\limits_{i=1}^nf(\\xi_i)\\Delta x_i$存在，则这个极限就是函数在区间$[a,b]$的定积分，记为$\\int_a^bf(x)\\,\\textrm{d}x$，并称函数$f(x)$在区间$[a,b]$上可积。\n\n其中$a$为积分下限，$b$为积分上限，区间$[a,b]$为积分区间，函数$f(x)$为被积函数，$x$是积分变量，$f(x)\\,\\textrm{d}x$为被积表达式，$\\int$为积分号。\n\n通过数列极限可以计算积分：$\\displaystyle{\\int_a^bf(x)\\,\\textrm{d}x=\\lim\\limits_{n\\to\\infty}\\sum\\limits_{i=1}^nf\\left(a+\\dfrac{b-a}{n}\\cdot i\\right)\\dfrac{b-a}{n}}$。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#性质",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "性质",
  "kind": "定理",
  "text": "定理：定积分由积分上下限与函数关系确定，与积分变量无关。$\\int_a^xf(x)\\,\\textrm{d}x=\\int_a^xf(t)\\,\\textrm{d}t=\\varPhi(x)$。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#计算性质",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "计算性质",
  "kind": "定理",
  "text": "设函数$f(x)$在区间$[a,b]$上连续，则得到定积分基本计算性质：\n\n- 当$a=b$时，$\\int_a^bf(x)\\,\\textrm{d}x=0$。\n\n- 当$a>b$时，$\\int_a^bf(x)\\,\\textrm{d}x=-\\int_b^af(x)\\,\\textrm{d}x$。\n\n-$\\int_a^bkf(x)\\,\\textrm{d}x=k\\int_a^bf(x)\\,\\textrm{d}x$。\n\n-$\\int_a^b[f(x)\\pm g(x)]\\,\\textrm{d}x=\\int_a^bf(x)\\,\\textrm{d}x\\pm\\int_a^bg(x)\\,\\textrm{d}x$。\n\n-$\\int_a^bf(x)\\,\\textrm{d}x=\\int_a^cf(x)\\,\\textrm{d}x+\\int_c^bf(x)\\,\\textrm{d}x$，若$c$处于函数的可积区间。\n\n- 若$[a,b]$上$f(x)\\geqslant 0$，则$\\int_a^bf(x)\\,\\textrm{d}x\\geqslant 0$。当$f(x)\\equiv0$时等号成立。\n\n- 若$[a,b]$上$f(x)\\leqslant g(x)$，则$\\int_a^bf(x)\\,\\textrm{d}x\\leqslant\\int_a^bg(x)\\,\\textrm{d}x$。\n\n-$\\left\\vert\\int_a^bf(x)\\,\\textrm{d}x\\right\\vert\\leqslant\\int_a^b\\vert f(x)\\vert\\,\\textrm{d}x$。\n\n- 已知$f(x)\\in[m,M]$在$[a,b]$上成立，则$m(b-a)\\leqslant\\int_a^bf(x)\\,\\textrm{d}x\\leqslant M(a-b)$。\n\n- 估值定理：当$M$，$m$分别为$f(x)$在$[a,b]$上的最大值和最小值，则$m(b-a)\\leqslant\\int_a^bf(x)\\,\\textrm{d}x\\leqslant M(b-a)$。\n\n- 积分中值定理：$\\exists\\,\\xi\\in[a,b]$，使得$\\int_a^bf(x)\\,\\textrm{d}x=f(\\xi)(b-a)$。\n\n- 积分中值定理推广：设$f(x)\\in[a,b]$，$\\exists\\,\\xi\\in(a,b)$，使得$\\int_a^bf(x)\\,\\textrm{d}x=f(\\xi)(b-a)$。\n\n证明第八条：已知$-\\vert f(x)\\vert\\leqslant f(x)\\leqslant\\vert f(x)\\vert$。\n\n即得到$-\\int_a^b\\vert f(x)\\vert\\,\\textrm{d}x\\leqslant\\int_a^bf(x)\\,\\textrm{d}x\\leqslant\\int_a^b\\vert f(x)\\vert\\,\\textrm{d}x$。\n\n从而得证。\n\n证明第十一条积分中值定理：\n\n设函数$f(x)$在区间$[a,b]$上连续，因为闭区间上连续函数必然有最大最小值，所以设最大值为$M$，最小值为$m$，$M\\geqslant m$。\n\n对$m\\leqslant f(x)\\leqslant M$两边积分得到：$m(b-a)\\leqslant\\int_a^bf(x)\\,\\textrm{d}x\\leqslant M(b-a)$。\n\n同时除以$b-a$得到：$m\\leqslant\\dfrac{1}{b-a}\\int_a^bf(x)\\,\\textrm{d}x\\leqslant M$。\n\n由连续函数的介值定理，必然存在一个$\\xi$，使得$f(\\xi)=\\dfrac{1}{b-a}\\int_a^bf(x)\\,\\textrm{d}x$。\n\n从而得到$\\exists\\,\\xi\\in[a,b]$，使得$\\int_a^bf(x)\\,\\textrm{d}x=f(\\xi)(b-a)$。\n\n也可以使用下面的变限积分来证明：\n\n因为$f(x)$连续，所以有积分，设$F(x)=\\int_a^xf(t)\\,\\textrm{d}t$。\n\n对$F(x)$使用拉格朗日中值定理：$F(b)-F(a)=F'(\\xi)(b-a)$，即$\\int_a^bf(x)\\,\\textrm{d}x=f(\\xi)(b-a)$，其中$\\xi\\in(a,b)\\subset[a,b]$。\n\n证明第十二条积分中值定理的推广。令$F(x)=\\int_a^xf(t)\\,\\textrm{d}t$，$F'(x)=f(x)$。\n\n$\\int_a^bf(x)\\,\\textrm{d}x=F(b)-F(a)=F'(\\xi)(b-a)=f(\\xi)(b-a)$（$a<\\xi<b$）。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#存在性性质",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "存在性性质",
  "kind": "定理",
  "text": "充分条件：\n\n- 设函数$f(x)$在区间$[a,b]$上连续，则$f(x)$在该区间上可积。\n\n- 设函数$f(x)$在区间$[a,b]$上单调，则$f(x)$在该区间上可积。\n\n- 设函数$f(x)$在区间$[a,b]$上有界，且只有有限个间断点，则$f(x)$在该区间上可积。\n\n必要条件：可积函数必然有界。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#定积分与函数性质",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "定积分与函数性质",
  "kind": "定理",
  "text": "- 若函数$f(x)$是周期函数且周期为$T$，$\\int_a^{a+T}f(x)\\,\\textrm{d}x=\\int_0^Tf(x)\\,\\textrm{d}x$，\n$\\int_\\alpha^{\\alpha+nT}f(x)\\,\\textrm{d}x=n\\int_0^Tf(x)\\,\\textrm{d}x$（$n\\in N$）对于$\\forall a$成立。\n\n- 若函数$f(x)$是连续的偶函数，则$\\int_{-a}^af(x)\\,\\textrm{d}x=2\\int_0^af(x)\\,\\textrm{d}x$。\n\n- 若函数$f(x)$是连续的奇函数，则$\\int_{-a}^af(x)\\,\\textrm{d}x=0$。\n\n- 区间再现公式：若函数$f(x)$为连续函数，则$\\int_a^bf(x)\\,\\textrm{d}x=\\int_a^bf(a+b-x)\\,\\textrm{d}x$。\n\n证明定理第一条的第一个式子：根据积分区间可拆性：\n\n$\\int_a^{a+T}f(x)\\,\\textrm{d}x=\\int_0^af(x)\\,\\textrm{d}x+\\int_0^Tf(x)\\,\\textrm{d}x+\\int_T^{a+T}f(x)\\,\\textrm{d}x$\n\n其中令$x-T=t$，即$x=t+T$，将$t$代入上下限：$\\int_T^{a+T}f(x)\\,\\textrm{d}x=\\int_0^af(t+T)\\,\\textrm{d}(t+T)$，因为$f(x)$是周期函数，周期为$T$，$\\therefore=\\int_0^af(t)\\,\\textrm{d}t=\\int_0^af(x)\\,\\textrm{d}x$。\n\n$\\therefore\\int_a^{a+T}f(x)\\,\\textrm{d}x=\\int_0^af(x)\\,\\textrm{d}x+\\int_0^Tf(x)\\,\\textrm{d}x+\\int_0^af(x)\\,\\textrm{d}x=\\int_0^Tf(x)\\,\\textrm{d}x$。\n\n证明区间再现公式：令$x=a+b-t$。\n\n这种方法也称为定积分的区间再现换元法。\n\n$\\int_a^bf(x)\\,\\textrm{d}x=\\int_b^af(a+b-t)(-\\textrm{d}t)=\\int_a^bf(a+b-t)\\,\\textrm{d}t=\\int_a^bf(a+b-x)\\,\\textrm{d}x$。\n\n如何使用区间再现换元法来进行计算呢？可能$\\int_a^bf(x)\\,\\textrm{d}x$和$\\int_a^bf(a+b-x)\\,\\textrm{d}x$解不出来，但是可能$\\int_a^bf(x)\\,\\textrm{d}x+\\int_a^bf(a+b-x)\\,\\textrm{d}x$能解出，所以就能解出原来的结果。\n\n例题：(1)已知$f(x)$为一个周期为$T$的偶函数，证明$\\int_0^{nT}xf(x)\\,\\textrm{d}x=\\dfrac{n^2T}{2}\\int_0^Tf(x)\\,\\textrm{d}x$。\n\n(2)计算$I=\\int_0^{n\\pi}x\\vert\\sin x\\vert\\,\\textrm{d}x$。\n\n(1)证明：因为$f(x)$是一个不定的函数，所以基本的四种积分方法都无法使用，可以尝试首先对于第一问使用区间再现换元，令$x=nT-t$：\n\n$\\int_0^{nT}xf(x)\\,\\textrm{d}x=\\int_{nT}^0(nT-t)f(nT-t)(-\\textrm{d}t)=\\int_0^{nT}(nT-t)f(nT-t)\\,\\textrm{d}t$。\n\n又因为$f(x)$是一个周期为$T$的函数，所以$f(nT-t)=f(-t)$，又是偶函数，所以$f(-t)=f(t)$。\n\n$=\\int_0^{nT}nTf(t)\\,\\textrm{d}t-\\int_0^{nT}tf(t)\\,\\textrm{d}t$，又$\\int_0^{nT}tf(t)\\,\\textrm{d}t=\\int_0^{nT}xf(x)\\,\\textrm{d}x$。\n\n$\\therefore\\int_0^{nT}xf(x)\\,\\textrm{d}x=\\dfrac{1}{2}\\int_0^{nT}nTf(t)\\,\\textrm{d}t=\\dfrac{nT}{2}\\int_0^{nT}f(x)\\,\\textrm{d}x=\\dfrac{n^2T}{2}\\int_0^Tf(x)\\,\\textrm{d}x$。\n\n(2)解：因为$\\sin x$以$\\dfrac{\\pi}{2}$为周期，所以$\\vert\\sin x\\vert$以$\\pi$为周期。\n\n根据第一问的公式：$\\int_0^{n\\pi}x\\vert\\sin x\\vert\\,\\textrm{d}x=\\dfrac{n^2\\pi}{2}\\int_0^\\pi\\vert\\sin x\\vert\\,\\textrm{d}x=\\dfrac{n^2\\pi}{2}[-\\cos x]_0^\\pi=n^2\\pi$。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#华里士公式",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "华里士公式",
  "kind": "定理",
  "text": "\\leavevmode\n\n- 华里士公式（根据区间再现公式可知$\\int_0^\\frac{\\pi}{2}\\sin^nx\\,\\textrm{d}x=\\int_0^\\frac{\\pi}{2}\\cos^nx\\,\\textrm{d}x$）：\n$$\\int_0^\\frac{\\pi}{2}\\sin^nx\\,\\textrm{d}x=\\int_0^\\frac{\\pi}{2}\\cos^nx\\,\\textrm{d}x=\\left\\{\\begin{array}{ll}\n        \\dfrac{n-1}{n}\\cdot\\dfrac{n-3}{n-2}\\cdot\\cdots\\cdot\\dfrac{2}{3}\\cdot1, & n\\text{为非}1\\text{奇数} \\\\ \n        \\dfrac{n-1}{n}\\cdot\\dfrac{n-3}{n-2}\\cdot\\cdots\\cdot\\dfrac{1}{2}\\cdot\\dfrac{\\pi}{2}, & n\\text{为正偶数}\n    \\end{array}\\right.$$\n\n-$\\int_0^\\pi\\sin^nx\\,\\textrm{d}x=2\\int_0^\\frac{\\pi}{2}\\sin^nx\\,\\textrm{d}x$。\n\n-$\\int_0^\\pi\\cos^nx\\,\\textrm{d}x=\\left\\{\\begin{array}{lcl}\n        0, & & n\\text{为正奇数} \\\\\n        2\\int_0^\\frac{\\pi}{2}\\cos^nx\\,\\textrm{d}x, & & n\\text{为正偶数}\n    \\end{array}\\right.$。\n\n-$\\int_0^{2\\pi}\\sin^nx\\,\\textrm{d}x=\\int_0^{2\\pi}\\cos^nx\\,\\textrm{d}x=\\left\\{\\begin{array}{lcl}\n        0, & & n\\text{为正奇数} \\\\\n        4\\int_0^\\frac{\\pi}{2}\\sin^nx\\,\\textrm{d}x, & & n\\text{为正偶数}\n    \\end{array}\\right.$。\n\n例题：求$\\int_0^\\pi x\\sin^9x\\,\\textrm{d}x$。\n\n解：需要先把$x$消掉才能使用华里士公式，使用区间再现公式，令$x=\\pi-t$：\n\n$=\\int_0^\\pi(\\pi-x)\\sin^9(\\pi-x)\\,\\textrm{d}x=\\int_0^\\pi\\pi\\sin^9x\\,\\textrm{d}x-\\int_0^\\pi x\\sin^9x\\,\\textrm{d}x$，积分再现。\n\n$\\therefore\\int_0^\\pi x\\sin^9x\\,\\textrm{d}x=\\dfrac{\\pi}{2}\\int_0^\\pi\\sin^9x\\,\\textrm{d}x=\\pi\\dfrac{8}{9}\\dfrac{6}{7}\\dfrac{4}{5}\\dfrac{2}{3}=\\dfrac{128}{315}\\pi$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#伽马公式",
  "subject": "gaoshu",
  "topic": "基本积分公式与华里士公式",
  "title": "伽马公式",
  "kind": "定理",
  "text": "\\leavevmode\n\n将阶乘化为积分：\n\n-$\\int_0^{+\\infty}x^ne^{-x}\\,\\textrm{d}x=n!=\\Gamma(n+1)$。（$n\\in N^*$）\n\n-$\\int_{-\\infty}^{+\\infty}e^{-x^2}x^{2n}\\,\\textrm{d}x=\\Gamma\\left(\\dfrac{2n+1}{2}\\right)$。\n\n-$\\Gamma(x+1)=x\\Gamma(x)$。\n\n-$\\Gamma(p)\\Gamma(1-p)=\\dfrac{\\pi}{\\sin p\\pi}$。\n\n-$n\\to\\infty$时，$\\Gamma(n+1)=\\sqrt{2\\pi n}\\left(\\dfrac{n}{e}\\right)^n$。\n\n-$\\Gamma\\left(\\dfrac{1}{2}\\right)=\\sqrt{\\pi}$。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#牛顿-莱布尼茨公式",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "牛顿-莱布尼茨公式",
  "kind": "定理",
  "text": "定理：（微积分基本定理/牛顿-莱布尼茨公式）若函数$F(x)$是连续函数$f(x)$在区间$[a,b]$上的一个原函数，则$\\int_a^bf(x)\\,\\textrm{d}x=F(b)-F(a)$。\n\n利用牛莱公式证明积分中值定理：\n\n已知$F'(x)=f(x)$。\n\n$\\int_a^bf(x)\\,\\textrm{d}x=F(b)-F(a)=F'(\\xi)(b-a)=f(\\xi)(b-a)(a<\\xi b)$。\n\n牛-莱公式连接了微分学和积分学之间的关系。\n\n注意无界函数和存在无定义点的函数不存在定积分所以不能使用该公式。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#不定积分与定积分的区别与联系",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "不定积分与定积分的区别与联系",
  "kind": "概念",
  "text": "区别：\n\n不定积分最后结果是一类函数的集合；定积分的结果是一个数，或是关于积分上下限的二元函数或运算。\n\n不定积分概念建立于原函数上，定积分的概念建立于求曲边图形面积上。\n\n一个函数，可以存在不定积分，而不存在定积分，也可以存在定积分，而没有不定积分。连续函数，一定存在定积分和不定积分；若在有限区间$[a,b]$上只有有限个间断点且函数有界，则定积分存在；若有跳跃、可去、无穷间断点，则原函数一定不存在，即不定积分一定不存在。\n\n联系：\n\n定积分的计算建立于不定积分。且方法都是类似的。\n\n可以通过牛-莱公式转换定积分与不定积分。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#积分法",
  "subject": "gaoshu",
  "topic": "一元积分的计算",
  "title": "积分法",
  "kind": "定理",
  "text": "定积分的换元积分法与分部积分法就是在定积分的换元积分法与分部积分法上代入了牛-莱公式。定积分的积分法和不定积分的积分法的使用基本上类似。\n\n#### 换元积分法\n\n定理：设$f(x)$在$[a,b]$上连续，函数$x=\\varphi(t)$满足①$\\varphi(\\alpha)=a,\\varphi(\\beta)=b$，②$\\varphi(t)$在$[\\alpha,\\beta]$上具有连续导数，且其值域$R_\\varphi=[a,b]$（值域超出而其他条件满足时也成立），则有$\\int_a^bf(x)\\,\\textrm{d}x=\\int_\\alpha^\\beta f[\\varphi(t)]\\varphi'(t)\\,\\textrm{d}t$。\n\n定积分的换元和不定积分的换元方法类似，其中重点就是$a$到$\\alpha$，$b$到$\\beta$的区间变化，从$x$的区间到$\\varphi(t)$的区间，需要代入方程使其与原区间相等，从而得到$t$的区间。\n\n例题：计算$\\int_0^\\pi\\sqrt{\\sin^3x-\\sin^5x}\\,\\textrm{d}x$。\n\n解：由于$\\sqrt{\\sin^3x-\\sin^5x}=\\sqrt{\\sin^3(1-\\sin^2x)}=\\sin^\\frac{3}{2}x\\cdot\\vert\\cos x\\vert$。\n\n注意保留绝对值，若是不保存就会发现后面计算会得到上下限为同样的值从而导致错误。\n\n利用积分的区间可加性将$\\vert\\cos x\\vert$进行拆分。\n\n$=\\int_0^\\frac{\\pi}{2}\\sin^\\frac{3}{2}x\\cos x\\,\\textrm{d}x+\\int_\\frac{\\pi}{2}^\\pi\\sin^\\frac{3}{2}x(-\\cos x)\\,\\textrm{d}x=\\int_0^\\frac{\\pi}{2}\\sin^\\frac{3}{2}x\\,\\textrm{d}(\\sin x)-$\n$\\int_\\frac{\\pi}{2}^\\pi\\sin^\\frac{3}{2}x\\,\\textrm{d}(\\sin x)=\\dfrac{2}{5}\\sin^\\frac{5}{2}x|_0^\\frac{\\pi}{2}-\\dfrac{2}{5}\\sin^\\frac{5}{2}x|_\\frac{\\pi}{2}^\\pi=\\dfrac{4}{5}$。\n\n定理：设$f(x)$在$[0,1]$上连续：\n\n(1)$\\int_0^\\frac{\\pi}{2}f(\\sin x)\\,\\textrm{d}x=\\int_0^\\frac{\\pi}{2}f(\\cos x)\\,\\textrm{d}x$。\n\n(2)$\\int_0^\\pi xf(\\sin x)\\,\\textrm{d}x=\\dfrac{\\pi}{2}\\int_0^\\pi f(\\sin x)\\,\\textrm{d}x$。\n\n(1)证明：这个证明式子很像华莱士公式。不过华莱士给定函数$f(x)=x^n$。\n\n这个式子需要将$f(\\sin x)$变为$f(\\cos x)$，即使用诱导公式变化。\n\n$\\sin\\left(\\dfrac{\\pi}{2}-x\\right)=\\cos x$，所以令$x=\\dfrac{\\pi}{2}-t$，$t=\\dfrac{\\pi}{2}-x$，当$x=0$，$t=\\dfrac{\\pi}{2}$，当$x=\\dfrac{\\pi}{2}$，$t=0$，$\\textrm{d}x=-\\textrm{d}t$。\n\n$\\int_0^\\frac{\\pi}{2}f(\\sin x)\\,\\textrm{d}x=-\\displaystyle{\\int_\\frac{\\pi}{2}^0f\\left(\\sin\\dfrac{\\pi}{2}-t\\right)\\,\\textrm{d}t}=$$-\\int_\\frac{\\pi}{2}^0f(\\cos t)\\,\\textrm{d}t=\\int^\\frac{\\pi}{2}_0f(\\cos x)\\,\\textrm{d}x$。\n\n(2)证明：首先需要证明的函数是$xf(\\sin x)$，所以想在函数外面也凑出一个$\\dfrac{\\pi}{2}$。这里也肯定需要诱导公式，但是因为最后还是$\\sin x$，所以添加的是偶的。\n\n令$x=\\pi-t$，当$x=0$时，$t=\\pi$，当$x=\\pi$时，$t=0$，且$\\textrm{d}x=-\\textrm{d}t$。\n\n$\\int_0^\\pi xf(\\sin x)\\,\\textrm{d}x=-\\int_\\pi^0(\\pi-t)f(\\sin(\\pi-t))\\,\\textrm{d}t=\\int_0^\\pi(\\pi-t)f(\\sin t)\\,\\textrm{d}t=$\n$\\pi\\int_0^\\pi f(\\sin t)\\,\\textrm{d}t-\\int_0^\\pi tf(\\sin t)\\,\\textrm{d}t=\\pi\\int_0^\\pi f(\\sin x)\\,\\textrm{d}x-\\int_0^\\pi xf(\\sin x)\\,\\textrm{d}x$。\n\n即$\\int_0^\\pi xf(\\sin x)\\,\\textrm{d}x=\\dfrac{\\pi}{2}\\int_0^\\pi f(\\sin x)\\,\\textrm{d}x$。\n\n#### 分部积分法\n\n定理：$\\int_a^bu\\,\\textrm{d}v=[uv]_a^b-\\int_a^bv\\,\\textrm{d}u$。\n\n其他计算方法与不定积分的方法一样。",
  "relatedLessons": [
   "gs09"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#定义",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "定义",
  "kind": "概念",
  "text": "设$f(x)$在$[a,b]$上连续，且$\\Phi(x)=\\int_a^xf(t)\\,\\textrm{d}t(x\\in[a,b])$，这个函数就是积分上限函数或叫积分变限函数（如果$\\int_x^af(t)\\,\\textrm{d}t$就是变下限积分或积分下限函数）。\n\n对变限积分$\\int_{a}^xf(t)\\,\\textrm{d}t$求导得到$f(x)$，再求导就得到$f'(x)$。\n\n定限积分是一个数值，而变限积分是一个函数。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#性质",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "性质",
  "kind": "定理",
  "text": "定理：设$f(x)$在$[a,b]$上可积，则$\\int_a^xf(t)\\,\\textrm{d}t$在$[a,b]$上的一个原函数连续（连续则连续）\n\n定理：设$f(x)$在$[a,b]$上连续，则$\\int_a^xf(t)\\,\\textrm{d}t$在$[a,b]$上的一个原函数可导（连续则可导）$(\\int_a^xf(t)\\,\\textrm{d}t)'=f(x)$。\n\n证明：设$x\\in(a,b)$。\n\n则$\\dfrac{\\Phi(x+\\Delta x)-\\Phi(x)}{\\Delta x}=\\dfrac{\\int_a^{x+\\Delta x}f(t)\\,\\textrm{d}t-\\int_a^xf(t)\\,\\textrm{d}t}{\\Delta x}=\\dfrac{\\int_x^{x+\\Delta x}f(t)\\,\\textrm{d}t}{\\Delta x}$。\n\n由积分中值定理存在$\\xi$使得原式$=\\dfrac{\\Delta x\\,f(\\xi)}{\\Delta x}=f(\\xi)$。\n\n从而$\\Phi'(x)=\\lim\\limits_{\\Delta x\\to 0}\\dfrac{\\Phi(x+\\Delta x)-\\Phi(x)}{\\Delta x}=f(x)$。\n\n同理当$x=a,\\Delta x>0$与$x=b,\\Delta x<0$时也同样成立。\n\n固定的上限或下限都不会影响到最后的变限积分结果，因为他们之间只差了一个常数。所以一般会将$a$取为0，这样更方便计算。\n\n变限积分运算定理：$\\int_a^{\\varphi(x)}f(t)\\,\\textrm{d}t=\\int_a^xf(\\varphi(x))\\,\\textrm{d}(\\varphi(x))=\\int_a^xf(\\varphi(x))\\varphi'(x)\\,\\textrm{d}x$，\n\n所以$(\\int_a^{\\varphi(x)}f(t)\\,\\textrm{d}t)'=f(\\varphi(x))\\varphi'(x)$。\n\n例题：求$F(x)=\\int_0^{x^2}e^{-t^2}\\,\\textrm{d}t$的导数。\n\n解：由定理，可以将式子看作复合函数求导（注意定理中积分上限为$x$，而这里不是$x$，但是对$x$求导，所以必须看作为一个复合函数求导）。\n\n$F(x)=\\int_0^ue^{-t^2}\\,\\textrm{d}t$，$u=x^2$。\n\n$\\therefore F'_x(x)=F'_u(x)\\cdot u'_x=e^{-u^2}\\cdot 2x=2xe^{-x^4}$。\n\n同理，如果是变下限的变限积分，则可以看作负的变上限积分进行运算，本质是一样的。\n\n也同理，如果上限下限都在变化，则可以利用积分区间的可加性，将这个积分的区间插入一个常数（一般为0），将一个积分式子变为两个积分式子，再分别进行运算。\n\n所以变限为函数的积分求导定理：若$\\phi(x)$与$\\psi(x)$都可导，$f(x)$连续，则$\\dfrac{\\textrm{d}\\int_{\\phi(x)}^{\\psi(x)}f(t)\\,\\textrm{d}t}{\\textrm{d}x}=f(\\psi(x))\\psi'(x)-f(\\phi(x))\\phi'(x)$。\n\n其中$x$为求导变量，$t$为积分变量。\n\n例题：求极限$\\lim\\limits_{x\\to 0}\\dfrac{\\int_0^{\\sin^2x}\\ln(1+t)\\,\\textrm{d}t}{x(\\sqrt{1+x^3}-1)}$。\n\n解：原式$=\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1+\\sin^2x)2\\sin x\\cos x}{x(\\sqrt{1+x^3}-1)}=\\lim\\limits_{x\\to 0}\\dfrac{x^2\\cdot 2x\\cdot 1}{\\dfrac{4}{3}x^3}=\\dfrac{3}{2}$。\n\n定理：若函数$f(x)$是连续的偶函数，则其积分只有一个$\\int^x_0f(t)\\,\\textrm{d}t$是奇函数。\n\n证明：令$F(x)=\\int_0^xf(t)\\,\\textrm{d}t$，需要证明$F(-x)=-F(x)$。\n\n$F(-x)=\\int_0^{-x}f(t)\\,\\textrm{d}t$，令$t=-u$，所以得到$\\int_0^xf(-u)\\,\\textrm{d}(-u)$。\n\n又$f(x)$偶函数，所以$f(-x)=f(x)$，从而$=\\int_0^xf(-u)\\,\\textrm{d}(-u)=-\\int_0^xf(u)\\,\\textrm{d}u$\n\n$=-\\int_0^xf(t)\\,\\textrm{d}t=-F(x)$。这就是个奇函数。若加上一个常数就不是个奇函数了。\n\n定理：若函数$f(x)$是连续的奇函数，则其所有积分$\\int^x_af(t)\\,\\textrm{d}t$都是偶函数。\n\n证明：令$F(x)=\\int_0^xf(t)\\,\\textrm{d}t$，需要证明$F(-x)=F(x)$。\n\n$F(-x)=\\int_0^{-x}f(t)\\,\\textrm{d}t$，令$t=-u$，所以得到$\\int_0^xf(-u)\\,\\textrm{d}(-u)$。\n\n又$f(x)$奇函数，所以$f(-x)=-f(x)$。\n\n从而$=\\int_0^x-f(u)(-\\textrm{d}u)=\\int_0^xf(u)\\,\\textrm{d}u=\\int_0^xf(t)\\,\\textrm{d}t=F(x)$。\n\n而$\\int_a^xf(t)\\,\\textrm{d}t=\\int_a^0f(t)\\,\\textrm{d}t+\\int_0^xf(t)\\,\\textrm{d}t$也为偶函数。\n\n定理：若函数$f(x)$是周期函数且周期为$T$，虽然其导数也为周期函数且周期，但是其变限积分不一定为周期函数。若$\\int_0^Tf(x)\\,\\textrm{d}x=0$即一个周期上的定积分值为0，则这个函数为周期函数，且周期为$T$。\n\n证明：若需要证明其为周期函数，所以要证明$F(x)=\\int_0^xf(t)\\,\\textrm{d}t=F(x+T)$。\n\n$F(x+T)=\\int_0^{x+T}f(t)\\,\\textrm{d}t=\\int_0^xf(t)\\,\\textrm{d}t+\\int_x^{x+T}f(t)\\,\\textrm{d}t$\n\n又根据定积分的周期性质$\\int_x^{x+T}f(t)\\,\\textrm{d}t=\\int_0^Tf(x)\\,\\textrm{d}x$：\n\n$=\\int_0^xf(t)\\,\\textrm{d}t+\\int_0^Tf(x)\\,\\textrm{d}x=\\int_0^xf(t)\\,\\textrm{d}t=F(x)$。（下限值为$a$也可以）\n\n例题：若$f(x)$是一个有周期的奇函数，则其积分$\\int_a^xf(t)\\,\\textrm{d}t$是否为周期函数。\n\n解：考察积分是否为周期函数，已知其原式周期函数，只需要考察$\\int_0^Tf(x)\\,\\textrm{d}x$是否为0。\n\n$\\int_0^Tf(x)\\,\\textrm{d}x=\\int_a^{a+T}f(x)\\,\\textrm{d}x=\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}f(x)\\,\\textrm{d}x=0$，所以是周期函数。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s4-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#反常积分",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "反常积分",
  "kind": "总结",
  "text": "无论是定限积分还是变限积分，有一部分的区间是固定不变的。\n\n当积分区间为无穷区间，或被积函数为无界函数，那么定积分就无法“定”下来，所以这种积分就是反常积分。\n\n对于无穷区间的反常积分首先求出原函数，然后代入上下限。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s4-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#无穷区间",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "无穷区间",
  "kind": "概念",
  "text": "设函数$f(x)$在区间$[a,+\\infty)$上连续，任取$t>a$，做定积分$\\int_a^tf(x)\\,\\textrm{d}x$，对这种变上限积分的极限$\\lim\\limits_{t\\to+\\infty}\\int_a^tf(x)\\,\\textrm{d}x$就是$f(x)$在无穷区间$[a,+\\infty)$上的反常积分，记为$\\int_a^{+\\infty}f(x)\\,\\textrm{d}x$。\n\n定义：若函数$f(x)$在区间$[a,+\\infty)$上连续，且极限$\\lim\\limits_{t\\to+\\infty}\\int_a^tf(x)\\,\\textrm{d}x$存在，则称反常积分$\\int_a^{+\\infty}f(x)\\,\\textrm{d}x$收敛，且这极限就是该反常积分的值，若该极限不存在，则反常积分$\\int_a^{+\\infty}f(x)\\,\\textrm{d}x$发散。\n\n同理可以给出定义：$\\int_{-\\infty}^af(x)\\,\\textrm{d}x=\\lim\\limits_{t\\to-\\infty}\\int_t^af(x)\\,\\textrm{d}x$。\n\n无穷限反常积分定义：$\\int_{-\\infty}^{+\\infty}f(x)\\,\\textrm{d}x=\\int_{-\\infty}^0f(x)\\,\\textrm{d}x+\\int_0^{+\\infty}f(x)\\,\\textrm{d}x$。\n\n对于无穷区间的反常积分要求的就是$\\lim\\limits_{x\\to\\infty}f(x)$。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s4-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#无界函数",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "无界函数",
  "kind": "概念",
  "text": "若$f(x)$在点$a$的任意一个邻域内都无界，则$a$就是$f(x)$的瑕点（无穷间断点），无界函数的反常积分又称为瑕积分。\n\n设$f(x)$在区间$(a,b]$上连续，点$a$为$f(x)$的瑕点，任取$t>a$，作定积分$\\int_t^bf(x)\\,\\textrm{d}x$，则对变下限的定积分求极限的$\\lim\\limits_{t\\to a^+}\\int_t^bf(x)\\,\\textrm{d}x$就是函数$f(x)$在区间$(a,b]$上的反常积分，记为$\\int_a^bf(x)\\,\\textrm{d}x$。\n\n定义：若$f(x)$在区间$(a,b]$上连续，$a$为$f(x)$的瑕点，若极限$\\lim\\limits_{t\\to a^+}\\int_t^bf(x)\\,\\textrm{d}x$存在，则称反常积分$\\int_a^bf(x)\\,\\textrm{d}x$收敛，并称为此极限为该反常积分的值，若不存在，则反常积分$\\int_a^bf(x)\\,\\textrm{d}x$发散。\n\n同理可得$\\int_a^bf(x)\\,\\textrm{d}x=\\lim\\limits_{t\\to b^-}\\int_a^tf(x)\\,\\textrm{d}x$\n\n若$f(x)$在区间$[a,c)\\cup(c,b]$上连续，$c$为瑕点，则$\\int_a^bf(x)\\,\\textrm{d}x=\\int_a^cf(x)\\,\\textrm{d}x+\\int_c^bf(x)\\,\\textrm{d}x$。\n\n对于无界函数的反常积分要求的就是$\\lim\\limits_{x\\to a}f(x)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s5-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#定理",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "定理",
  "kind": "定理",
  "text": "定理：若$f(x)$在$[a,b]$上连续，则存在$\\xi\\in[a,b]$，使得$\\int_a^bf(x)\\,\\textrm{d}x=f(\\xi)(b-a)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s5-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#证明",
  "subject": "gaoshu",
  "topic": "闭区间连续函数性质",
  "title": "证明",
  "kind": "定理",
  "text": "已知$f(x)$在$[a,b]$上连续，根据有界与最值定理，$m\\leqslant f(x)\\leqslant M$，$m(b-a)\\leqslant\\int_a^bf(x)\\,\\textrm{d}x\\leqslant M(b-a)$，所以$m\\leqslant\\dfrac{1}{b-a}\\int_a^bf(x)\\,\\textrm{d}\\leqslant M$。\n\n由介值定理可知$\\xi\\in[a,b]$，使得$f(\\xi)=\\dfrac{1}{b-a}\\int_a^bf(x)\\,\\textrm{d}x$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#定积分应用",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "定积分应用",
  "kind": "方法",
  "text": "对比不定积分的直接数学计算，定积分的实际应用要广许多，往往可以用来解决几何、物理等问题。\n\n对于定积分概念的引入就是对求面积采用元素法，即将曲边多边形无限次的分割得到每一片的平均值再求和得到近似解。\n\n元素法也叫微元法，是分析、解决物理问题中的常用方法，也是从部分到整体的思维方法。用该方法可以使一些复杂的物理过程用我们熟悉的物理规律迅速地加以解决，使所求的问题简单化。在使用元素法处理问题时，需将其分解为众多微小的“元过程”，而且每个“元过程”所遵循的规律是相同的，这样，我们只需分析这些“元过程”，然后再将“元过程”进行必要的数学方法或物理思想处理，进而使问题求解。\n\n数一基本上只考几何应用不考物理应用。",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#直角坐标系",
  "subject": "gaoshu",
  "topic": "一元积分的概念与性质",
  "title": "直角坐标系",
  "kind": "方法",
  "text": "\\leavevmode\n\n即求两条曲线$y=y_1(x)$、$y=y_2(x)$与积分上下限$x=a$与$x=b$所围成的平面图像面积$S=\\int_a^b\\vert y_1(x)-y_2(x)\\vert\\,\\textrm{d}x$。\n\n若没有指定积分上下限，还要根据两条曲线的图像先确定上下限即$x$的范围。\n\n同理也可以对$y$使用微元法。使用的方法与$x$一致",
  "relatedLessons": [
   "gs08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#参数方程",
  "subject": "gaoshu",
  "topic": "参数方程",
  "title": "参数方程",
  "kind": "方法",
  "text": "\\leavevmode\n\n参数方程基本不能将中间变量消去，一般还是要计算积分的上下限，然后将积分式子$S=\\int_a^bf(x)\\,\\textrm{d}x$全部换成中间变量$t$：$\\int_\\alpha^\\beta y(t)\\,\\textrm{d}(x(t))=\\int_\\alpha^\\beta y(t)x'(t)\\,\\textrm{d}t$。\n\n会很奇怪为什么求$f(x)$的积分变成了求$y(t)$的积分？因为一般直角坐标系给出$x$与$y$的关系$y=y(x)$，最后变量是$x$，而参数方程给出的是$y=y(t)$，$x=x(t)$，中间变量变成了$x$，最后变量变成了$t$，而$y(t)=y(x)$，只不过最终变量不同而已，所以最后$\\int_\\alpha^\\beta y(t)\\,\\textrm{d}(x(t))$求的就是对$t$的积分值，而无论最后变量是什么，积分变量与积分值无关，所以$x$与$t$一样，这个积分值不变。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#极坐标",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "极坐标",
  "kind": "定理",
  "text": "\\leavevmode\n\n已知极径函数$\\rho=\\rho(\\theta)$，极角$\\theta\\in[\\alpha,\\beta]$，极坐标所围成面积就是初始角所在射线与结束角所在射线以及函数所围成的图形。所以微元计算时所围成的图形可以近似看作扇形。从而根据扇形公式得到微元：$\\textrm{d}S=\\dfrac{1}{2}\\rho^2(\\theta)\\,\\textrm{d}\\theta$。最后$S=\\dfrac{1}{2}\\int_\\alpha^\\beta\\rho^2(\\theta)\\,\\textrm{d}\\theta$。\n\n即曲线$r=r_1(\\theta)$、$r=r_2(\\theta)$与上下限射线$\\theta=\\alpha$、$\\theta=\\beta$（$0<\\beta-\\alpha\\leqslant2\\pi$）所围成的曲边扇形的面积$S=\\dfrac{1}{2}\\int_\\aleph^\\beta\\vert r_1^2(\\theta)-r_2^2(\\theta)\\vert\\,\\textrm{d}\\theta$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#旋转体侧面积",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "旋转体侧面积",
  "kind": "定理",
  "text": "\\leavevmode\n\n需要联系旋转体的体积的计算来理解，并还要理解后面的弧长是如何求的。\n\n若是对$x$轴旋转的旋转体侧面积，$S=2\\pi\\int_a^byl\\,\\textrm{d}x$，其中$a,b$为$x$轴上的距离，$y$为曲线表达式，$l$为$y$的弧长。可以根据圆柱体的侧面积公式来对比理解，$S=2\\pi rh$，其中$r$为圆柱体半径，类似$y$，而$h$为圆柱体的高，类似$y$的弧长。\n\n使用弧长而不是$\\textrm{d}x$来计算。\n\n曲线$y=y(x)$在区间$[a,b]$上的曲线弧段绕$x$轴旋转一周所得的旋转曲面的表面积$S=2\\pi\\int_a^b\\vert y(x)\\vert\\sqrt{1+[y'(x)]^2}\\,\\textrm{d}x$。\n\n曲线$x=x(t)$，$y=y(t)$（$\\alpha\\leqslant t\\leqslant\\beta$，$x'(t)\\neq0$）在区间$[\\alpha,\\beta]$上的曲线弧段绕$x$轴旋转一周所得到的旋转曲面的表面积：\n\n$S=2\\pi\\int_\\alpha^\\beta\\vert y(t)\\vert\\sqrt{[x'(t)]^2+[y'(t)]^2}\\,\\textrm{d}t$。（所以参数方程这里就没有把$x(t)$代入$\\textrm{d}x$求$x'(t)\\textrm{d}t$）",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#体积",
  "subject": "gaoshu",
  "topic": "体积",
  "title": "体积",
  "kind": "方法",
  "text": "圆和椭圆都是有参数方程的，所以对于这种所旋转产生的体积没办法使用参数方程计算。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-7",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#旋转体",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "旋转体",
  "kind": "方法",
  "text": "\\leavevmode\n\n对于一条曲线$y=f(x)$以及$x=a$，$x=b$（$a<b$）所围成的平面绕$x$轴进行旋转，可以看作从$x$轴沿$y$轴水平切割旋转体，就得到了以$x$轴为中心的一个圆柱，底边半径为$f(x)$，高度为$\\textrm{d}x$，所以$\\textrm{d}V_x=\\pi f^2(x)\\,\\textrm{d}x$，所以$V_x=\\pi\\int_a^bf^2(x)\\,\\textrm{d}x$（如果用$y(x)$表达，就是$V_x=\\pi\\int_c^d\\varphi^2(y)\\,\\textrm{d}y$）。\n\n对于一条曲线$y=f(x)$以及$x=a$，$x=b$（$a<b$）所围成的平面绕$y$轴进行旋转，可以看作从旋转中心向外围按同样的半径切割环形体，这个环形体从里到外半径与体积都在不断变大，然后将这个环形体展开为长方体来计算体积，其中长度为原来圆周$2\\pi x$，宽度为$f(x)$，高度为$\\textrm{d}x$，所以$\\textrm{d}V_y=2\\pi xf(x)\\,\\textrm{d}x$，所以$V_y=2\\pi\\int_a^bx\\vert f(x)\\vert\\,\\textrm{d}x$。（柱壳法）（同理也可以使用$y(x)$来表达）\n\n对于两条曲线$y=f_1(x)\\geqslant0$，$y=f_2(x)\\geqslant0$以及$x=a$，$x=b$（$a<b$）所围成的平面绕$x$轴旋转一周，可以看做一个环形体，中间是空的，所以可以将外面的较大函数旋转得到的大体积减去里面的较小函数旋转得到小体积，体积为$V_x=\\pi\\int_a^b\\vert f_1^2(x)-f_2^2(x)\\vert\\,\\textrm{d}x$。（同理也可以使用$y(x)$来表达）\n\n对于两条曲线$y=f_1(x)\\geqslant0$，$y=f_2(x)\\geqslant0$以及$x=a$，$x=b$（$a<b$）所围成的平面绕$y$轴旋转一周，可以看做一个环形体，中间是空的，所以可以将外面的较大函数旋转得到的大体积减去里面的较小函数旋转得到小体积，体积为$V_y=2\\pi\\int_a^bx\\vert f_1(x)-f_2(x)\\vert\\,\\textrm{d}x$。（同理也可以使用$y(x)$来表达）\n\n对于不同的旋转轴，可以由前两种情况变为后两种情况来计算。使用第一种方式来计算，如围绕$y=1$旋转，即用$1-f(x)$来替换，围绕$y=-2$，用$-2-g(y)$来替换，不要使用柱壳法来计算。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-8",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#平行截面已知的立体体积",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "平行截面已知的立体体积",
  "kind": "总结",
  "text": "\\leavevmode\n\n已知截面面积可以通过对应的高得到立体体积，在区间$[a,b]$上，垂直于$x$轴的平面截例题所得到的截面面积为$x$的连续函数$S(x)$，则体积为：$V=\\int_a^bS(x)\\,\\textrm{d}x$。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-9",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#平均值",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "平均值",
  "kind": "定理",
  "text": "设$x\\in[a,b]$，函数$y(x)$在$[a,b]$上的平均值为$\\bar{y}=\\dfrac{1}{b-a}\\int_a^by(x)\\,\\textrm{d}x$。就是积分中值定理的平均值代入结果。\n\n平均值即曲边四边形的平均高度。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-10",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#弧长",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "弧长",
  "kind": "方法",
  "text": "圆的周长可以用内接正多边形的周长当边数趋于无穷大的极限来表示，同理弧长也可以同样表示。\n\n在弧长中插入$n$个点$M_1,M_2,\\cdots,M_{i-1},M_i,\\cdots,M_n$。\n\n$S_n=\\sum\\limits_{i=1}^n\\Vert\\overline{M_{i-1}M_{i}}\\Vert$，$S=\\lim\\limits_{\\delta\\to 0}S_n=\\lim\\limits_{\\delta\\to 0}\\sum\\limits_{i=1}^n\\Vert\\overline{M_{i-1}M_{i}}\\Vert$。\n\n对于弧长采用弧微分的方式进行计算：$S=\\int_a^b\\sqrt{1+y'^2}\\,\\textrm{d}x$。\n\n如果是参数方程，则$S=\\int_\\alpha^\\beta\\sqrt{x'^2+y'^2}\\,\\textrm{d}t$。\n\n如果是极坐标方程，则$S=\\int_\\alpha^\\beta\\sqrt{\\rho^2+\\rho'^2}\\,\\textrm{d}\\theta$。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-12",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#曲线",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "曲线",
  "kind": "定理",
  "text": "\\leavevmode\n\n设质量均匀分布的光滑物体曲线$\\overset{\\frown}{AB}$，全长为$l$，线密度为$a$。\n\n以$A$为起点，取弧长$s$为自变量（$0\\leqslant s\\leqslant l$），且$x=x(s)$，$y=y(s)$，则平面曲线$\\overset{\\frown}{AB}$的形心坐标计算公式为：$\\overline{x}=\\dfrac{1}{l}\\int_0^lx(s)\\,\\textrm{d}s$，$\\overline{y}=\\dfrac{1}{l}\\int_0^ly(s)\\,\\textrm{d}s$。\n\n以$(x,y)$为坐标，以$t$给出参数方程$x=x(t)$，$y=y(t)$，$\\alpha\\leqslant t\\leqslant\\beta$，则平面曲线$\\overset{\\frown}{AB}$的形心坐标计算公式为：\n\n$\\overline{x}=\\dfrac{\\int_\\alpha^\\beta x(t)\\sqrt{x'^2(t)+y'^2(t)}\\textrm{d}t}{\\int_\\alpha^\\beta\\sqrt{x'^2(t)+y'^2(t)}\\textrm{d}t}$。\n\n$\\overline{y}=\\dfrac{\\int_\\alpha^\\beta y(t)\\sqrt{x'^2(t)+y'^2(t)}\\textrm{d}t}{\\int_\\alpha^\\beta\\sqrt{x'^2(t)+y'^2(t)}\\textrm{d}t}$。\n\n设质量分布不均的光滑物体曲线$\\overset{\\frown}{AB}$，区间为$[\\alpha,\\beta]$，线密度为$\\rho(x)$。\n\n$\\overline{x}=\\dfrac{\\int_\\alpha^\\beta x\\rho(x)\\,\\textrm{d}x}{\\int_\\alpha^\\beta\\rho(x)\\,\\textrm{d}x}$。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-1-13",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#平面",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "平面",
  "kind": "定理",
  "text": "\\leavevmode\n\n设曲边梯形平面区域$D=\\{(x,y)|0\\leqslant y\\leqslant f(x),a\\leqslant x\\leqslant b\\}$，$f(x)$在$[a,b]$上连续，则平面$D$的形心坐标计算公式为：\n\n$\\overline{x}=\\dfrac{\\iint\\limits_Dx\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_a^bxf(x)\\,\\textrm{d}x}{\\int_a^bf(x)\\,\\textrm{d}x}$，$\\overline{y}=\\dfrac{\\iint\\limits_Dy\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_a^bf^2(x)\\,\\textrm{d}x}{2\\int_a^bf(x)\\,\\textrm{d}x}$。\n\n设曲边梯形平面区域$D=\\{(x,y)|g(x)\\leqslant y\\leqslant f(x),a\\leqslant x\\leqslant b\\}$，$f(x)$、$g(x)$在$[a,b]$上连续，则平面$D$的形心坐标计算公式为：\n\n$\\overline{x}=\\dfrac{\\iint\\limits_Dx\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_a^bx[f(x)-g(x)]\\,\\textrm{d}x}{\\int_a^b[f(x)-g(x)]\\,\\textrm{d}x}$，$\\overline{y}=\\dfrac{\\iint\\limits_Dy\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int_a^b[f^2(x)-g^2(x)]\\,\\textrm{d}x}{2\\int_a^b[f(x)-g(x)]\\,\\textrm{d}x}$。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s6-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#物理应用",
  "subject": "gaoshu",
  "topic": "定积分几何应用",
  "title": "物理应用",
  "kind": "方法",
  "text": "#### 变力沿直线做功\n\n设方向沿$x$轴正向的力函数为$F(x)$（$a\\leqslant x\\leqslant b$），则物体沿$x$轴从点$a$移动到点$b$时，变力$F(x)$所做的功为$W=\\int_a^bF(x)\\,\\textrm{d}x$，功的元素$\\textrm{d}W=F(x)\\,\\textrm{d}x$。\n\n#### 抽水做功\n\n将容器中的水全部抽出所做的功为$W=\\rho g\\int_a^bxA(x)\\,\\textrm{d}x$，其中$\\rho$为水的密度，$g$为重力加速度。\n\n功的元素$\\textrm{d}W=\\rho gxA(x)\\,\\textrm{d}x$为位于$x$处厚度为$\\textrm{d}x$，水平截面面积为$A(x)$的一层水被抽出（路径为$x$）所做的功。\n\n#### 水压力\n\n垂直浸没于水中的平板$ABCD$的一侧收到的水压力为$P=\\rho g\\int_a^bx[f(x)-h(x)]\\,\\textrm{d}x$，其中$\\rho$为水的密度，$g$为重力加速度。\n\n压力元素$\\textrm{d}P=\\rho gx[f(x)-h(x)]\\,\\textrm{d}x$是受到的压力，$x$表示水深，$f(x)-h(x)$是矩形的宽度，$\\textrm{d}x$是矩形的高度，总高度为$\\vert a-b\\vert$。",
  "relatedLessons": [
   "gs10"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-4-indefinite-integral-and-definite-integral-indefinite-integral-and-definite-integral-s7",
  "repo": "R08",
  "source": "advanced-math/knowledge/4-indefinite-integral-and-definite-integral/indefinite-integral-and-definite-integral.tex#积分表",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "积分表",
  "kind": "总结",
  "text": "原函数 ｜ 积分函数 ｜ 原函数 ｜ 积分函数\n$\\int k\\,\\textrm{d}x$ ｜$kx+C$ ｜$\\int x^\\mu\\,\\textrm{d}x$ ｜$\\dfrac{x^{\\mu+1}}{\\mu+1}+C$\n$\\int\\dfrac{\\textrm{d}x}{x}$ ｜$\\ln\\vert x\\vert+C$ ｜$\\int\\dfrac{\\textrm{d}x}{1+x^2}$ ｜$\\arctan x+C$\n$\\int\\dfrac{\\textrm{d}x}{\\sqrt{1-x^2}}$ ｜$\\arcsin x+C$ ｜$\\int\\cos x\\,\\textrm{d}x$ ｜$\\sin x+C$\n$\\int\\sin x\\,\\textrm{d}x$ ｜$-\\cos x+C$ ｜$\\int\\dfrac{\\textrm{d}x}{\\cos^2x}$ ｜$\\tan x+C$\n$\\int\\dfrac{\\textrm{d}x}{\\sin^2x}$ ｜$-\\cot x+C$ ｜$\\int\\sec x\\tan x\\,\\textrm{d}x$ ｜$\\sec x+C$\n$\\int\\csc x\\cot x\\,\\textrm{d}x$ ｜$-\\csc x+C$ ｜$\\int e^x\\,\\textrm{d}x$ ｜$e^x+C$\n$\\int a^x\\,\\textrm{d}x$ ｜$\\dfrac{a^x}{\\ln a}+C$ ｜ ｜",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s0",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#向量代数与空间解析几何",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "向量代数与空间解析几何",
  "kind": "总结",
  "text": "该部分的内容服务于后面的多元函数积分学。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#向量及其表达形式",
  "subject": "gaoshu",
  "topic": "向量代数",
  "title": "向量及其表达形式",
  "kind": "概念",
  "text": "定义：既有方向又有大小的向量称为向量。\n\n向量的相等性体现在大小和方向，与空间位置无关。\n\n向量表达形式为$\\vec{a}=(a_x,a_y,a_z)=a_x\\vec{i}+a_y\\vec{j}+a_z\\vec{k}$。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#向量运算",
  "subject": "gaoshu",
  "topic": "向量代数",
  "title": "向量运算",
  "kind": "概念",
  "text": "设$\\vec{a}=(a_x,a_y,a_z)$，$\\vec{b}=(b_x,b_y,b_z)$，$\\vec{c}=(c_x,c_y,c_z)$，$\\vec{a},\\vec{b},\\vec{c}$均不是零向量。\n\n#### 数量积\n\n称为内积或点积。\n\n-$\\vec{a}\\cdot\\vec{b}=(a_x,a_y,a_z)\\cdot(b_x,b_y,b_z)=a_xb_x+a_yb_y+a_zb_z$。\n\n-$\\vec{a}\\cdot\\vec{b}=\\vert\\vec{a}\\vert\\vert\\vec{b}\\vert\\cos\\theta$，则$\\cos\\theta=\\dfrac{\\vec{a}\\cdot\\vec{b}}{\\vert a\\vert\\vert b\\vert}=\\dfrac{a_xb_x+a_yb_y+a_zb_z}{\\sqrt{a_x^2+a_y^2+a_z^2}\\cdot\\sqrt{b_x^2+b_y^2+b_z^2}}$，其中$\\theta$为$\\vec{a},\\vec{b}$夹角。\n\n-$a\\bot b\\Leftrightarrow\\theta=\\dfrac{\\pi}{2}\\Leftrightarrow a\\cdot b=\\vert a\\vert\\vert b\\vert\\cos\\theta=0\\Leftrightarrow a_xb_x+a_yb_y+a_zb_z=0$。\n\n-$Prj_ba=\\dfrac{a\\cdot b}{\\vert b\\vert}=\\dfrac{a_xb_x+a_yb_y+a_zb_z}{\\sqrt{b_x^2+b_y^2+b_z^2}}$称$a$在$b$上的投影。\n\n#### 向量积\n\n也称为外积、叉积。\n\n-$\\vec{a}\\times\\vec{b}=\\left\\vert\\begin{array}{ccc}\n        \\vec{i} & \\vec{j} & \\vec{k} \\\\\n        a_x & a_y & a_z \\\\\n        b_x & b_y & b_z\n    \\end{array}\\right\\vert$，其中$\\vert a\\times b\\vert=\\vert a\\vert\\vert b\\vert\\sin\\theta$，用右手规则确定方向（转向角不超过$\\pi$），其中$\\theta$为$\\vec{a},\\vec{b}$夹角。\n\n-$\\vec{a}//\\vec{b}\\Leftrightarrow\\theta=0\\Leftrightarrow\\vec{a}\\times\\vec{b}=0$或$\\pi\\Leftrightarrow\\dfrac{a_x}{b_x}=\\dfrac{a_y}{b_y}=\\dfrac{a_z}{b_z}$。\n\n-$\\vec{a}\\times\\vec{a}=0$。\n\n向量积的计算也可以如此理解，将两个向量上下摞在一起，然后右边再复制一份：\n\n$\\left[\\begin{array}{cccccc}\n    a_x & a_y & a_z & a_x & a_y & a_z \\\\\n    b_x & b_y & b_z & b_x & b_y & b_z\n\\end{array}\\right]$，向量积的第一个值就是2、3列的行列式值，第二个值就是3、4列的行列式值，第三个值就是4、5列行列式值，第1和第6列不用。\n\n#### 混合积\n\n-$[\\vec{a}\\vec{b}\\vec{c}]=(a\\times b)\\cdot c=\\left\\vert\\begin{array}{ccc}\n        a_x & a_y & a_z \\\\\n        b_x & b_y & b_z \\\\\n        c_x & c_y & c_z \\\\\n    \\end{array}\\right\\vert$。\n\n- 交换两行不改变值：$a\\cdot(b\\times c)=b\\cdot(c\\times a)=c\\cdot(a\\times b)$。\n\n- 交换一行改变符号：$a\\cdot(b\\times c)=-a\\cdot(c\\times b)=-b\\cdot(a\\times c)=-c\\cdot(b\\times a)$。\n\n-$\\left\\vert\\begin{array}{ccc}\n        a_x & a_y & a_z \\\\\n        b_x & b_y & b_z \\\\\n        c_x & c_y & c_z \\\\\n    \\end{array}\\right\\vert=0\\Leftrightarrow$三向量共面。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#向量方向角与方向余项",
  "subject": "gaoshu",
  "topic": "向量代数",
  "title": "向量方向角与方向余项",
  "kind": "概念",
  "text": "-$\\vec{a}$与$x$轴、$y$轴、$z$轴正向的夹角$\\alpha$、$\\beta$、$\\gamma$为$\\vec{a}$的方向角。\n\n-$\\cos\\alpha$，$\\cos\\beta$，$\\cos\\gamma$称为$\\vec{a}$的方向余弦，且$\\cos\\alpha=\\dfrac{a_x}{\\vert\\vec{a}\\vert}$，$\\cos\\beta=\\dfrac{a_y}{\\vert\\vec{a}\\vert}$，$\\cos\\gamma=\\dfrac{a_z}{\\vert\\vec{a}\\vert}$。\n\n-$a^\\circ=\\dfrac{\\vec{a}}{\\vert\\vec{a}\\vert}=(\\cos\\alpha,\\cos\\beta,\\cos\\gamma)$称为向量$\\vec{a}$的单位向量（表示方向的向量）。\n\n- 任意向量$\\vec{r}=x\\vec{i}+y\\vec{j}+z\\vec{k}=(r\\cos\\alpha,r\\cos\\beta,r\\cos\\gamma)=r(\\cos\\alpha,\\cos\\beta,\\cos\\gamma)$，$\\cos\\alpha$，$\\cos\\beta$，$\\cos\\gamma$称为$\\vec{r}$的方向余弦，$r$为$\\vec{r}$的模，$\\cos\\alpha=\\dfrac{x}{\\sqrt{x^2+y^2+z^2}}$，$\\cos\\beta=\\dfrac{y}{\\sqrt{x^2+y^2+z^2}}$，$\\cos\\gamma=\\dfrac{z}{\\sqrt{x^2+y^2+z^2}}$，$r=\\sqrt{x^2+y^2+z^2}$。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#平面方程",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "平面方程",
  "kind": "总结",
  "text": "假设平面的法向量$\\vec{n}=(A,B,C)$。\n\n- 一般式：$Ax+By+Cz+D=0$。\n\n- 点法式：$A(x-x_0)+B(y-y_0)+C(z-z_0)=0$。\n\n- 三点式：$\\left\\vert\\begin{array}{ccc}\n        x-x_1 & y-y_1 & z-z_1 \\\\\n        x-x_2 & y-y_2 & z-z_2 \\\\\n        x-x_3 & y-y_3 & z-z_3 \\\\\n    \\end{array}\\right\\vert=0$（平面过不共线的三点）。\n\n- 截距式：$\\dfrac{x}{a}+\\dfrac{y}{b}+\\dfrac{z}{c}=1$（平面过$(a,0,0)$，$(0,b,0)$，$(0,0,c)$三点）。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#直线方程",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "直线方程",
  "kind": "概念",
  "text": "假设直线的方向向量$\\vec{\\tau}=(l,m,n)$。\n\n- 一般式：$\\left\\{\\begin{array}{l}\n        A_1x+B_1y+C_1z+D_1=0,\\vec{n}_1=(A_1,B_1,C_1) \\\\\n        A_2x+B_2y+C_2z+D_2=0,\\vec{n}_2=(A_2,B_2,C_2)\n    \\end{array}\\right.$，其中$\\vec{n}_1$不平行于$\\vec{n}_2$。（两个平面的交线，该直线方向向量$\\vec{\\tau}=n_1\\times n_2$）\n\n- 点向式（标准式、对称式）：$\\dfrac{x-x_0}{l}=\\dfrac{y-y_0}{m}=\\dfrac{z-z_0}{n}$。（直线上一点与方向向量成比例）\n\n- 参数式：$\\left\\{\\begin{array}{l}\n        x=x_0+lt \\\\\n        y=y_0+mt \\\\\n        z=z_0+nt\n    \\end{array}\\right.$，$M(x_0,y_0,z_0)$为直线上已知点，$t$为参数。\n\n- 两点式：$\\dfrac{x-x_1}{x_2-x_1}=\\dfrac{y-y_1}{y_2-y_1}=\\dfrac{z-z_1}{z_2-z_1}$。（直线过不同的两点）",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#位置关系",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "位置关系",
  "kind": "总结",
  "text": "#### 直线关系\n\n设$\\vec{\\tau}_1=(l_1,m_1,n_1)$，$\\vec{\\tau}_2=(l_2,m_2,n_2)$分别为直线$L_1$，$L_2$的方向向量。\n\n-$L_1\\bot L_2\\Leftrightarrow\\vec{\\tau}_1\\bot\\vec{\\tau}_2\\Leftrightarrow l_1l_2+m_1m_2+n_1n_2=0$。\n\n-$L_1//L_2\\Leftrightarrow\\vec{\\tau}_1//\\vec{\\tau}_2\\Leftrightarrow\\dfrac{l_1}{l_2}\\Leftrightarrow\\dfrac{m_1}{m_2}=\\dfrac{n_1}{n_2}$。\n\n#### 平面关系\n\n设平面$\\pi_1$，$\\pi_2$的法向量分别为$\\vec{n}_1=(A_1,B_1,C_1)$，$\\vec{n}_2=(A_2,B_2,C_2)$。\n\n-$\\pi_1\\bot\\pi_2\\Leftrightarrow\\vec{n}_1\\bot\\vec{n}_2\\Leftrightarrow A_1A_2+B_1B_2+C_1C_2=0$。\n\n-$\\pi_1//\\pi_2\\Leftrightarrow\\vec{n}_1//\\vec{n}_2\\Leftrightarrow\\dfrac{A_1}{A_2}=\\dfrac{B_1}{B_2}=\\dfrac{C_1}{C_2}$。\n\n#### 直线与平面关系\n\n设直线$L$的方向向量为$\\tau=(l,m,n)$，平面$\\vec{\\tau}$的法向量为$\\vec{n}=(A,B,C)$。\n\n-$L\\bot\\pi\\Leftrightarrow\\vec{\\tau}//\\vec{n}\\Leftrightarrow\\dfrac{A}{l}=\\dfrac{B}{m}=\\dfrac{C}{n}$。\n\n-$L//\\pi\\Leftrightarrow\\vec{\\tau}\\bot\\vec{n}\\Leftrightarrow Al+Bm+Cn=0$。\n\n#### 距离\n\n距离公式：\n\n- 二维点到直线距离：点$P_0(x_0,y_0,z_0)$到直线$Ax+By+C=0$的距离为$d=\\dfrac{\\vert Ax_0+By_0+Cz_0\\vert}{\\sqrt{A^2+B^2}}$。\n\n- 三维点到平面距离：点$P_0(x_0,y_0,z_0)$到平面$Ax+By+Cz+D=0$的距离为$d=\\dfrac{\\vert Ax_0+By_0+Cz_0+D\\vert}{\\sqrt{A^2+B^2+C^2}}$。\n\n- 二维平行直线到直线距离：直线$Ax+By+C_1=0$到直线$Ax+By+C_2=0$的距离为$d=\\dfrac{\\vert C_2-C_1\\vert}{\\sqrt{A^2+B^2}}$。\n\n- 二维非平行直线到直线夹角：直线$A_1x+B_2y+C_1=0$到直线$A_2x+B_2y+C_2=0$的夹角为$\\cos\\theta=\\dfrac{\\vert A_1A_2+B_1B_2\\vert}{\\sqrt{A_1^2+B_1^2}\\cdot\\sqrt{A_2^2+B_2^2}}$（$\\theta\\in\\left[0,\\dfrac{\\pi}{2}\\right]$）。\n\n- 三维平行平面到平面距离：平面$Ax+By+Cz+D_1=0$到平面$Ax+By+Cz+D_2=0$的距离为$d=\\dfrac{\\vert D_2-D_1\\vert}{\\sqrt{A^2+B^2+C^2}}$。（在另一个面上任取一点计算该点到平面距离）\n\n三维点到直线距离：（已知直线$L$一般式方程和点$M_1$）\n\n- 根据$L$一般式方程依次求一阶导得出两个面的法向量$\\vec{\\xi_1}$、$\\vec{\\xi_2}$。\n\n- 使用向量积得出$L$方向向量$\\vec{S}=\\vec{\\xi_1}\\times\\vec{\\xi_2}$。\n\n- 在$L$上任意找到一点$M_0$，计算向量$\\overrightarrow{M_0M_1}$，计算向量积$\\overrightarrow{M_0M_1}\\times\\vec{S}$，取其模$\\vert\\overrightarrow{M_0M_1}\\times\\vec{S}\\vert$，这个模即为三点所成三角形面积的两倍$2S_{\\triangle M_0M_1S}$。\n\n- 求出方向向量$\\vec{S}$的模，所以$\\vec{M_1}$到$\\vec{S}$的距离$d$可以化为两倍三角形面积$2S_{\\triangle M_0M_1S}=d\\cdot\\vert\\vec{S}\\vert$。\n\n- 所以$\\vert\\overrightarrow{M_0M_1}\\times\\vec{S}\\vert=d\\cdot\\vert\\vec{S}\\vert$，解得$d=\\dfrac{\\vert\\overrightarrow{M_0M_1}\\times\\vec{S}\\vert}{\\vert\\vec{S}\\vert}$。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#空间曲线",
  "subject": "gaoshu",
  "topic": "一元函数微分学的概念",
  "title": "空间曲线",
  "kind": "总结",
  "text": "空间曲线某点的切线向量等于该点代入各自导数。\n\n#### 表达式\n\n- 一般式：$\\varGamma:\\left\\{\\begin{array}{l}\n        F(x,y,z)=0 \\\\\n        G(x,y,z)=0\n    \\end{array}\\right.$，表示两个曲面的交线。\n\n- 参数方程：$\\varGamma:\\left\\{\\begin{array}{l}\n        x=\\phi(t) \\\\\n        y=\\psi(t) \\\\\n        z=\\omega(t)\n    \\end{array}\\right.$，$t\\in[\\alpha,\\beta]$。\n\n#### 空间曲线在坐标面投影\n\n如求曲线$\\varOmega$在$xOy$平面上的投影曲线，讲$\\varGamma:\\left\\{\\begin{array}{l}\n    F(x,y,z)=0 \\\\\n        G(x,y,z)=0\n\\end{array}\\right.$中的$z$消去，得到$\\varphi(x,y)=0$，则曲线$\\varOmega$在$xOy$面上的投影曲线包含于$\\left\\{\\begin{array}{l}\n    \\varphi(x,y)=0 \\\\\n    z=0\n\\end{array}\\right.$。",
  "relatedLessons": [
   "gs03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#空间曲面",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "空间曲面",
  "kind": "总结",
  "text": "#### 曲面方程\n\n隐式表达式：$F(x,y,z)=0$，显式表达式：$z=z(x,y)$。\n\n#### 二次曲面\n\n- 球面：$x^2+y^2+z^2=r^2$。\n\n- 椭球面：$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}+\\dfrac{z^2}{c^2}=1$。\n\n- 单叶双曲面：$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}-\\dfrac{z^2}{c^2}=1$。\n\n- 双叶双曲面：$\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}-\\dfrac{z^2}{c^2}=1$。\n\n- 椭圆抛物面：$\\dfrac{x^2}{2p}+\\dfrac{y^2}{2q}=z$（$p,q>0$）。（常考旋转抛物面$x^2+y^2=z$）\n\n- 椭圆锥面：$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=\\dfrac{z^2}{c^2}$。（常考旋转锥面$z=\\sqrt{x^2+y^2}$）\n\n- 双曲抛物面（马鞍面）：$-\\dfrac{x^2}{2p}+\\dfrac{y^2}{2q}=z$（$p,q>0$）。（可能考$z=xy$）\n\n#### 柱面\n\n空间解析几何中一般认为缺少变量的方程为柱面。\n\n是动直线沿定曲线平行移动所形成的曲面。\n\n- 椭圆柱面：$\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1$（当$a=b$为圆柱面）。\n\n- 双曲柱面：$\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1$。\n\n- 抛物柱面：$y=ax^2$。\n\n#### 旋转曲面\n\n绕某轴转，其就不变，把另外一个字母写成另外两个字母的平方和的开方。\n\n如$f(x,y)=0$对$x$旋转，则改为$f(x,\\pm\\sqrt{y^2+z^2})$。\n\n是曲线$\\varGamma$绕一条定直线旋转一周所形成的曲面。\n\n给定一条直线$L:\\dfrac{x-x_0}{l}=\\dfrac{y-y_0}{m}=\\dfrac{z-z_0}{n}$，其方向向量为$\\vec{\\tau}(l,m,n)$，上有一点$P_0(x_0,y_0,z_0)$。\n\n现在给定一条曲线$\\varGamma:\\left\\{\\begin{array}{l}\n    F(x,y,z)=0 \\\\\n    G(x,y,z)=0\n\\end{array}\\right.$。\n\n在$\\varGamma$上找一点$P_1(x_1,y_1,z_1)$，然后再讲$P_1$绕$L$旋转一周得到一个纬圆，去纬圆上一点$P(x,y,z)$，则$P$为旋转曲面上任意一点。\n\n因为$P_1$在曲线$\\varGamma$上，所以$F(x_1,y_1,z_1)=0$，$G(x_1,y_1,z_1)=0$。\n\n同一个纬圆到$L$上的$P_0$距离相等，既$\\vert\\overrightarrow{P_1P_0}\\vert=\\vert\\overrightarrow{PP_0}\\vert$，即$(x_1-x_0)^2+(y_1-y_0)^2+(z_1-z_0)^2=(x-x_0)^2+(y-y_0)^2+(z-z_0)^2$。\n\n每一个纬圆的平面与旋转中心$L$的方向向量$\\vec{\\tau}$垂直，而$P_1P$在平面上，所以该连线向量$\\overrightarrow{P_1P}\\bot\\vec{\\tau}$，即$l(x-x_1)+m(y-y_1)+n(z-z_1)=0$。\n\n为了得到旋转曲面面积，需要消去$x_1,y_1,z_1$，得到$H(x,y,z)=0$。\n\n例题：求曲线$L:\\left\\{\\begin{array}{l}\n    x-y+2z-1=0 \\\\\n    x-3y-2z+1=0\n\\end{array}\\right.$绕$y$轴旋转一周所形成的曲面方程。\n\n解：令$P_1(x_1,y_1,z_1)$在曲线上，所以$x_1-y_1+2z_1-1=0$，$x_1-3y_1-2z_1+1=0$。\n\n然后任意一点$P(x,y,z)$到$P_0(x_0,y_0,z_0)$的距离与$P_1$到$P_0$距离相同，取$P_0(0,0,0)$，则$x_1^2+y_1^2+z_1^2=x^2+y^2+z^2$。\n\n两条连线垂直$y$轴，即$\\overrightarrow{P_1P}\\bot(0,1,0)$，即$y=y_1$。\n\n消去$x_1,y_1,z_1$，根据$y=y_1$，所以$x_1^2+z_1^2=x^2+z^2$。\n\n根据交线方程解得$x_1=2y$，$z_1=\\dfrac{1}{2}(1-y)$。\n\n再代入得到$x^2+z^2=(2y)^2+\\dfrac{1}{4}(1-y)^2$，解得$x^2-\\dfrac{17}{4}y^2+z^2+\\dfrac{y}{2}-\\dfrac{1}{4}=0$。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#方向导数",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "方向导数",
  "kind": "概念",
  "text": "偏导数就是一个函数在坐标轴方向上的变化率，而方向导数就是函数在某点沿其他特定方向上的变化率。\n\n定义：设三元函数$u=u(x,y,z)$在点$P_0(x_0,y_0,z_0)$的某空间领域$U\\in R^3$内有定义，$l$从点$P_0$出发的射线，$P(x,y,z)$为$l$上切在$U$内的任一点，则$\\left\\{\\begin{array}{l}\n    x-x_0=\\Delta x=t\\cos\\alpha \\\\\n    y-y_0=\\Delta y=t\\cos\\beta \\\\\n    z-z_0=\\Delta z=t\\cos\\gamma\n\\end{array}\\right.$进行在坐标轴上投影。\n\n以$t=\\sqrt{(\\Delta x)^2+(\\Delta y)^2+(\\Delta z)^2}$表示$P$与$P_0$之间的距离。若极限$\\lim\\limits_{t\\to0^+}$\n$\\dfrac{u(P)-u(P_0)}{t}=\\lim\\limits_{t\\to0^+}\\dfrac{u(x_0+t\\cos\\alpha,y_0+t\\cos\\beta,z_0+t\\cos\\gamma)-u(x_0,y_0,z_0)}{t}$存在，则称此极限为函数$u=u(x,y,z)$在点$P_0$沿方向$l$的方向导数，记为$\\dfrac{\\partial u}{\\partial l}\\bigg|_{P_0}$。\n\n方向导数计算公式定理：设三元函数$u=u(x,y,z)$在点$P_0(x_0,y_0,z_0)$处可微分，则$u=u(x,y,z)$在点$P_0$处沿任一方向$l$的方向导数都存在，且$\\dfrac{\\partial u}{\\partial l}\\bigg|_{P_0}=u_x'(P_0)\\cos\\alpha+u_y'(P_0)\\cos\\beta+u_z'(P_0)\\cos\\gamma$，其中$\\cos\\alpha$，$\\cos\\beta$，$\\cos\\gamma$为方向$l$的方向余弦。\n\n例题：求函数$z=xe^{2y}$在点$P(1,0)$处沿点$P(1,0)$指向$Q(2,-1)$方向的方向导数。\n\n解：这是一个隐式的三元函数，所以基本上解决方法类似。不过需要将$z$对$xy$求偏导。\n\n$\\dfrac{\\partial z}{\\partial x}=e^{2y}$，$\\dfrac{\\partial z}{\\partial y}=2xe^{2y}$，代入$P(1,0)$，得到$\\{1,2\\}$。\n\n然后求方向余弦，对于$\\overrightarrow{PQ}=(1,-1)$方向余弦就是除它的模$\\left\\{\\dfrac{1}{\\sqrt{2}},-\\dfrac{1}{\\sqrt{2}}\\right\\}$。\n\n方向导数就是点乘：$\\dfrac{1}{\\sqrt{2}}-\\dfrac{2}{\\sqrt{2}}=-\\dfrac{\\sqrt{2}}{2}$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#梯度",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "梯度",
  "kind": "概念",
  "text": "在一个数量场中中，函数在给定点处沿不同的方向，其方向导数一般是不相同的。为研究哪个方向的方向导数最大，最大值为多少，增加速度最快，就引入了梯度。\n\n定义：设三元函数$u=u(x,y,z)$在点$P_0(x_0,y_0,z_0)$处具有一阶偏导数，定义$\\text{grad}\\,u|_{P_0}=(u'_x(P_0),u_y'(P_0),u_z'(P_0))$为函数$u=u(x,y,z)$在点$P_0$处的梯度。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s3-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#方向导数与梯度关系",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "方向导数与梯度关系",
  "kind": "总结",
  "text": "方向导数为梯度×梯度方向余弦。\n\n函数在某点的梯度是一个向量，其方向与取得最大方向导数的方向是一致的，其模就是方向导数最大值。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-5-vector-algebra-and-space-analytic-geometry-vector-algebra-and-space-analytic-geometry-s3-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/5-vector-algebra-and-space-analytic-geometry/vector-algebra-and-space-analytic-geometry.tex#散度与旋度",
  "subject": "gaoshu",
  "topic": "散度与旋度",
  "title": "散度与旋度",
  "kind": "概念",
  "text": "定义：设向量场$\\vec{A}(x,y,z)=(P(x,y,z),Q(x,y,z),R(x,y,z))$，则散度$\\textrm{div}\\,\\vec{A}=\\dfrac{\\partial P}{\\partial x}+\\dfrac{\\partial Q}{\\partial y}+\\dfrac{\\partial R}{\\partial z}$，旋度$\\overrightarrow{\\textrm{rot}}\\,\\vec{A}=\\left\\vert\\begin{array}{ccc}\n    \\vec{i} & \\vec{j} & \\vec{k} \\\\\n    \\dfrac{\\partial}{\\partial x} & \\dfrac{\\partial}{\\partial y} & \\dfrac{\\partial}{\\partial z} \\\\\n    P & Q & R\n\\end{array}\\right\\vert$。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#平面与点",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "平面与点",
  "kind": "定理",
  "text": "#### 平面点集\n\n定义：在平面上建立直角坐标系$xOy$，则平面上的点可用两个实数组的有序数组$(x,y)$表示，而二元函数$f(x,y)$的定义域是$(x,y)$为元素的几何，所以$f(x,y)$的定义域就是平面上的点集。\n\n#### 距离\n\n定理：平面上任意两点$M_1(x_1,y_1)$与$M_2(x_2,y_2)$之间距离定义为$\\rho(M_1,M_2)$\n$=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$。\n\n$\\rho(M_1,M_2)$满足：\n\n- 非负性：$\\rho(M_1,M_2)\\geqslant0$。\n\n- 对称性：$\\rho(M_1,M_2)=\\rho(M_2,M_1)$。\n\n- 三角不等式：$\\rho(M_1,M_3)\\leqslant\\rho(M_1,M_2)+\\rho(M_2,M_3)$。\n\n#### 邻域\n\n设$M_0$为平面上一点，$\\delta>0$，则平面上以$M_0$为圆心，$\\delta$为半径的圆的内部称为$M_0$的\\textbf{$\\delta$领域}，记为$U(M_0,\\delta)$。\n\n若领域中去掉圆心$M_0$，称为$M_0$的\\textbf{$\\delta$去心邻域}，记为$\\mathring{U}(M_0,\\delta)$。\n\n#### 点的分类\n\n定义：设$M$为平面上一个点，若存在$\\delta>0$，使得$U(M,\\delta)\\subset E$，则$M$为点集$E$的内点。\n\n定义：若存在$\\delta>0$，使得$U(M,\\delta)\\cap E=\\varnothing$，则$M$为点集$E$的的外点。\n\n定义：若对任意$\\delta>0$，$U(M,\\delta)$即有$E$内的点也有外的点，则$M$为点集$E$的边界点。\n\n定义：$E$所有边界点的集合称为$E$的边界，记为$\\partial E$。对于任意一个点集$E$与其余集$E^C$有公共边界，即$\\partial E=\\partial E^C$。\n\n#### 集合\n\n定义：设$E$为一个平面点集，若存在常数$\\delta>0$，使得$E\\subset U(O,\\delta)$，则$E$为有界集，否则为无界集。\n\n定义：若$E$中的每个点都是$E$的内点，则$E$为开集，若$E$的边界点都是$E$的点，则$E$为闭集。若一个点集是开集，则其余集为闭集，若一个点集为闭集，则其余集为开集。\n\n定义：若$E$中任意两点，都可用一条完全属于$E$的曲线将其两点连接，则$E$为（道路）连通集，连通的开集为开区域，一个开区域和其边界点的并集为闭区域，统称区域。\n\n定义：若$E$内任意一条简单闭曲线的内部还在$E$内，则$E$为单连通区域，否则为多连通区域。\n\n#### 聚点\n\n定义：对一个平面点集$E$，$M_0$为平面上一点，若对任意$\\delta>0$，总有$\\mathring{U}(M_0,\\delta)\\cap E\\neq\\varnothing$，即$M_0$的任意邻域中都含有异于$M_0$的$E$中的点，则$M_0$为$E$的聚点。\n\n定理：非空开集的内点余边界点都是这个点集的聚点，闭区域的任意一点都是其聚点。\n\n定义：若存在$\\delta>0$，使得$U(M_0,\\delta)\\cap E=\\{M_0\\}$，即如果$M_0$的某一邻域与点集$E$的交集是一个孤立的点$M_0$，则称$M_0$为$E$的孤立点。边界点要么是聚点要么是孤立点。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#极限",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "极限",
  "kind": "概念",
  "text": "对于一元函数的极限可用列举法，从两端逼近该点取极限，但是对于多元函数所处的邻域，逼近方向为无穷，所以不可能再通过取两个方向逼近的方式求极限。\n\n从点集来看定义：设二元函数$f(P)=f(x,y)$的定义域为$D$，$P_0(x_0,y_0)$为$D$聚点。若存在常数$A$，对于任意给定正数$\\epsilon$，总存在正数$\\delta$，使得当$P(x,y)\\in D\\cap\\mathring{U}(P_0,\\delta)$时，都有$\\vert f(x,y)-A\\vert<\\epsilon$成立，则常数$A$为$f(x,y)$当$(x,y)\\rightarrow(x_0,y_0)$时的极限，记为$\\lim\\limits_{(x,y)\\to(x_0,y_0)}f(x,y)=A$或$f(x,y)\\to A((x,y)\\to(x_0,y_0))$。\n\n如$\\because xy\\neq0$排除$xy$轴：$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{\\sqrt{xy+1}-1}{xy}=\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{xy+1-1}{xy(\\sqrt{xy+1}+1)}$\n$=\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{1}{\\sqrt{xy+1}+1}=\\dfrac{1}{2}$。\n\n从邻域来看定义：若二元函数$f(x,y)$在$(x_0,y_0)$的去心邻域内有定义，且$(x,y)$以任意方式趋向$(x_0,y_0)$时，$f(x,y)$均趋向于$A$，则$\\lim\\limits_{\\substack{x\\to x_0\\\\y\\to y_0}}f(x,y)=A$。\n\n根据邻域的定义，由于函数$\\lim\\limits_{(x,y)\\to(0,0)}\\dfrac{\\sqrt{xy+1}-1}{xy}$在坐标轴上无定义，则极限不存在。\n\n此时两种定义就会有两种结论，所以为了避免这种定义不同的矛盾，就只会出现哪种定义下极限存在或都不存在的函数，如$\\lim\\limits_{\\substack{x\\to0\\\\y\\to0}}(x^2+y^2)\\sin\\dfrac{1}{x^2+y^2}=0$。\n\n从现实角度来看，点集定义是更合理的，若要求一根弯曲铁丝在某点的导数，第二种定义无法求，所以不合理。而第二种定义是从一元极限定义直接升级过来，所以有一定局限性。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#连续",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "连续",
  "kind": "概念",
  "text": "定义：若$\\lim\\limits_{\\substack{x\\to x_0\\\\y\\to y_0}}f(x,y)=f(x_0,y_0)$则称$f(x,y)$在点$(x_0,y_0)$处连续。\n\n若不连续，则不讨论间断类型。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#偏导数",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "偏导数",
  "kind": "概念",
  "text": "当含有两个以及三个变量时，若求一个极限，则有多个变量同时趋向，所以多个变量同时在变。为了运算简单，就假定只有一个变量在变，其他变量固定，从而直接降低成一元变量，只对一个变量求导，从而就是偏导数。\n\n定义：设函数$z=f(x,y)$在点$(x_0,y_0)$的某邻域内有定义，若极限\n$\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(x_0+\\Delta x,y_0)-f(x_0,y_0)}{\\Delta x}$存在，则称此极限为函数$z=f(x,y)$在点$(x_0,y_0)$处对$x$的偏导数，记为$\\dfrac{\\partial z}{\\partial x}\\bigg|_{\\substack{x=x_0\\\\y=y_0}}$，$\\dfrac{\\partial f}{\\partial x}\\bigg|_{\\substack{x=x_0\\\\y=y_0}}$，$z'\\bigg|_{\\substack{x=x_0\\\\y=y_0}}$或$f'_x(x_0,y_0)$。\n\n$f'_x(x_0,y_0)=\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(x_0+\\Delta x,y_0)-f(x_0,y_0)}{\\Delta x}=\\lim\\limits_{x\\to x_0}\\dfrac{f(x,y_0)-f(x_0,y_0)}{x-x_0}$。\n\n$f'_y(x_0,y_0)=\\lim\\limits_{\\Delta y\\to0}\\dfrac{f(x_0,y_0+\\Delta y)-f(x_0,y_0)}{\\Delta y}=\\lim\\limits_{y\\to y_0}\\dfrac{f(x_0,y)-f(x_0,y_0)}{y-y_0}$。\n\n定义：若函数$z=f(x,y)$在区域$D$内的偏导数$f_x'(x,y)$、$f_y'(x,y)$仍具有偏导数，则其偏导数为函数$z=f(x,y)$的二阶偏导数。按照求导次序不同，有如下四个二阶偏导数。\n\n$\\dfrac{\\partial}{\\partial x}\\left(\\dfrac{\\partial z}{\\partial x}\\right)=\\dfrac{\\partial^2z}{\\partial x^2}=f''_{xx}(x,y)$，$\\dfrac{\\partial}{\\partial y}\\left(\\dfrac{\\partial z}{\\partial y}\\right)=\\dfrac{\\partial^2z}{\\partial y^2}=f''_{yy}(x,y)$，\n\n$\\dfrac{\\partial}{\\partial y}\\left(\\dfrac{\\partial z}{\\partial x}\\right)=\\dfrac{\\partial^2z}{\\partial x\\partial y}=f''_{xy}(x,y)$，$\\dfrac{\\partial}{\\partial x}\\left(\\dfrac{\\partial z}{\\partial y}\\right)=\\dfrac{\\partial^2z}{\\partial y\\partial x}=f''_{yx}(x,y)$。\n\n其中$f''_{xy}(x,y)$和$f''_{yx}(x,y)$为混合偏导数。二阶以及以上的偏导数均为高阶偏导数。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#全微分",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "全微分",
  "kind": "概念",
  "text": "定义：若函数$z=f(x,y)$在点$(x,y)$的全增量$\\Delta z=f(x+\\Delta x,y+\\Delta y)-f(x,y)$可表示为$\\Delta z=A\\Delta x+B\\Delta y+o(\\rho)$，其中$\\rho=\\sqrt{(\\Delta x)^2+(\\Delta y)^2}$，$AB$不依赖$\\Delta x$，$\\Delta y$而仅与$x,y$相关，则称函数$z=f(x,y)$在点$(x,y)$可微，而称$A\\Delta x+B\\Delta y$为函数$z=f(x,y)$在点$(x,y)$的全微分，记为$\\textrm{d}z$。\n\n$\\textrm{d}z=A\\Delta x+B\\Delta y=\\dfrac{\\partial z}{\\partial x}\\Delta x+\\dfrac{\\partial z}{\\partial y}\\Delta y=\\dfrac{\\partial z}{\\partial x}\\textrm{d}x+\\dfrac{\\partial z}{\\partial y}\\textrm{d}y$。\n\n判断可微的步骤：\n\n- 写出全增量$\\Delta z=f(x_0+\\Delta x,y_0+\\Delta y)-f(x_0,y_0)$。\n\n- 写出线性增量$A\\Delta x+B\\Delta y$，$A=f_x'(x_0,y_0)$，$B=f_y'(x_0,y_0)$。\n\n- 写出极限$\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\dfrac{\\Delta z-(A\\Delta x+B\\Delta y)}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}$，若极限等于0，则$z=f(x,y)$在点$(x_0,y_0)$可微，否则不可微。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s1-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#偏导数连续性",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "偏导数连续性",
  "kind": "概念",
  "text": "对$z=f(x,y)$，讨论其在某特殊点$(x_0,y_0)$处偏导数是否连续的步骤：\n\n- 用定义法求$f_x'(x_0,y_0)$，$f_y'(x_0,y_0)$。（求某点偏导数）\n\n- 用公式法求$f_x'(x,y)$，$f_y'(x,y)$。（求偏导函数）\n\n- 计算$\\lim\\limits_{\\substack{x\\to x_0\\\\y\\to y_0}}f_x'(x,y)$，$\\lim\\limits_{\\substack{x\\to x_0\\\\y\\to y_0}}f_y'(x,y)$。（偏导函数求极限）\n\n- 若$\\lim\\limits_{\\substack{x\\to x_0\\\\y\\to y_0}}f_x'(x,y)=f_x'(x_0,y_0)$，$\\lim\\limits_{\\substack{x\\to x_0\\\\y\\to y_0}}f_y'(x,y)=f_y'(x_0,y_0)$若成立则连续，否则不连续。\n\n例题：设$z=f(x,y)=\\left\\{\\begin{array}{ll}\n    (x^2+y^2)\\sin\\dfrac{1}{\\sqrt{x^2+y^2}}, & x^2+y^2\\neq0 \\\\\n    0, & x^2+y^2=0\n\\end{array}\\right.$，则四个结论中正确的个数为()。\n\n①$f(x,y)$在$(0,0)$处连续。 ②$f'_x(0,0)$，$f'_y(0,0)$存在。\n\n③$f_x'(x,y)$，$f_y'(x,y)$在$(0,0)$处连续。 ③$f(x,y)$在$(0,0)$可微。\n\n$A.1$$B.2$$C.3$$D.4$\n\n解：$\\lim\\limits_{\\substack{x\\to0\\\\y\\to0}}(x^2+y^2)\\sin\\dfrac{1}{\\sqrt{x^2+y^2}}=0=f(0,0)$。所以$A$正确。\n\n$f_x'(0,0)=\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(0+\\Delta x,0)-f(0,0)}{\\Delta x}=\\lim\\limits_{\\Delta x\\to0}\\dfrac{(\\Delta x)^2\\sin\\dfrac{1}{\\sqrt{(\\Delta x)^2}}-0}{\\Delta x}=$\n$\\lim\\limits_{\\Delta x\\to0}(\\Delta x)\\sin\\dfrac{1}{\\vert\\Delta x\\vert}=0$。同理$f'_y(0,0)=0$。\n\n判断连续性，首先计算偏导数值，之前计算过：$f_x'(0,0)=f_y'(0,0)=0$；然后求偏导函数$f_x'(x,y)=2x\\sin\\dfrac{1}{\\sqrt{x^2+y^2}}+(x^2+y^2)\\cos\\dfrac{1}{\\sqrt{x^2+y^2}}\\left(-\\dfrac{1}{2}\\right)\\dfrac{2x}{\\sqrt{(x^2+y^2)^3}}$\n$=2x\\sin\\dfrac{1}{\\sqrt{x^2+y^2}}-\\dfrac{x}{\\sqrt{x^2+y^2}}\\cos\\dfrac{1}{\\sqrt{x^2+y^2}}$，同理得$f_y'(x,y)=2y\\sin\\dfrac{1}{\\sqrt{x^2+y^2}}$\n$-\\dfrac{y}{\\sqrt{x^2+y^2}}\\cos\\dfrac{1}{\\sqrt{x^2+y^2}}$；最后一步查看偏导函数值与偏导数值是否相等，$\\because\\lim\\limits_{\\substack{x\\to0\\\\y\\to0}}2x\\sin\\dfrac{1}{\\sqrt{x^2+y^2}}=0$，且$\\lim\\limits_{\\substack{x\\to0\\\\y\\to0}}\\dfrac{x}{\\sqrt{x^2+y^2}}\\cos\\dfrac{1}{\\sqrt{x^2+y^2}}$震荡，所以总的来说极限值不存在，就不会等于偏导数值，同理可得函数的偏导数在该点不连续。\n\n要求一个函数在某点可微，首先$\\Delta z=f(0+\\Delta x,0+\\Delta y)-f(0,0)=[(\\Delta x)^2+(\\Delta y)^2]\\sin\\dfrac{1}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}$。然后$A\\Delta x+B\\Delta y=f_x'(0,0)\\Delta x+f_y'(0,0)\\Delta y=0$。最后求极限$\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\dfrac{\\Delta z-(A\\Delta x+B\\Delta y)}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}=\\lim\\limits_{\\substack{\\Delta x\\to0\\\\\\Delta y\\to0}}\\sqrt{(\\Delta x)^2+(\\Delta y)^2}\\sin\\dfrac{1}{\\sqrt{(\\Delta x)^2+(\\Delta y)^2}}$\n$=0$，所以在此点可微。\n\n综上正确的结论有①②④三个，所以选$C$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#链式求导法则",
  "subject": "gaoshu",
  "topic": "一元函数微分学的计算",
  "title": "链式求导法则",
  "kind": "定理",
  "text": "主要对显函数的微分。\n\n多元函数链式求导法则与一元函数的求导法则类似。都是从因变量从中间变量走到自变量。一条路径是一个加项，多少条从因变量到所有自变量的路就有多少个加项。每条路上由不同的路段组成，若有$n$层中间变量，则有$n+1$路段，路段之间项是乘积形式，若变量只与一个变量有一条路，则是导数$\\textrm{d}$，若一个变量到多个变量有多条路，则是偏导数$\\partial$。\n\n 因变量$z$到$x$一共有两条路，所以两个和项。每条路都有两端，所以和项中有两个乘项。$z$到$uv$两个中间变量，所以是两个偏导$\\dfrac{\\partial z}{\\partial u}$和$\\dfrac{\\partial z}{\\partial v}$。$uv$都只有一条路直接连通$x$，所以都是导数$\\dfrac{\\textrm{d}u}{\\textrm{d}x}$和$\\dfrac{\\textrm{d}v}{\\textrm{d}x}$。一条路的每个路段的项相乘：$\\dfrac{\\partial z}{\\partial u}\\dfrac{\\textrm{d}u}{\\textrm{d}x}$和$\\dfrac{\\partial z}{\\partial v}\\dfrac{\\textrm{d}v}{\\textrm{d}x}$。最后将每条路段相加：$\\dfrac{\\textrm{d}z}{\\textrm{d}x}=\\dfrac{\\partial z}{\\partial v}\\dfrac{\\textrm{d}v}{\\textrm{d}x}$。\n\n 因为因变量$z$到自变量$x,y$有较多条路径，所以分开分析。\n\n 对于$x$，有$z-u-x$，所以这条路为$\\dfrac{\\partial z}{\\partial u}\\dfrac{\\partial u}{\\partial x}$，还有一条$z-v-x$，由于$v$只与$x$连通，所以是导数，该路为$\\dfrac{\\partial z}{\\partial v}\\dfrac{\\textrm{d}v}{\\textrm{d}x}$，所以$\\dfrac{\\partial z}{\\partial x}=\\dfrac{\\partial z}{\\partial u}\\dfrac{\\partial u}{\\partial x}+\\dfrac{\\partial z}{\\partial v}\\dfrac{\\textrm{d}v}{\\textrm{d}x}$。、\n\n 同理对于$y$，有$z-u-y$和$z-w-y$，且$u$有两条出路，$w$只有一条，所以$u$偏导，$v$导数，$\\dfrac{\\partial z}{\\partial y}=\\dfrac{\\partial z}{\\partial u}\\dfrac{\\partial u}{\\partial y}+\\dfrac{\\partial z}{\\partial w}\\dfrac{\\textrm{d}w}{\\textrm{d}y}$。\n\n无论$z$对谁求导也无论求了几阶到，求导过后的新函数仍具有与原函数完全相同的复合结构。\n\n例题：设$z=f(e^x\\sin y,x^2+y^2)$，其中$f$具有二阶连续偏导数，求$\\dfrac{\\partial^2z}{\\partial x\\partial y}$。\n\n解：$\\because\\dfrac{\\partial^2z}{\\partial x\\partial y}=\\dfrac{\\partial}{\\partial y}\\left(\\dfrac{\\partial z}{\\partial x}\\right)$，$\\therefore\\dfrac{\\partial z}{\\partial x}=f_1'\\cdot e^x\\sin y+f_2'\\cdot2x$。\n\n在求偏导时，将第一个中间变量记为$f_1$即之前的$u$，第二个中间变量记为$f_2$即之前的$v$。记$f$对$u$求偏导为$f_1'$，对$v$求偏导为$f_2'$同理二阶导也如此，下标为求导顺序。\n\n$\\dfrac{\\partial^2z}{\\partial x\\partial y}=\\dfrac{\\partial(f_1'\\cdot e^x\\sin y)}{\\partial y}+\\dfrac{\\partial(f_2'\\cdot2x)}{\\partial y}$。\n\n其中$\\dfrac{\\partial(f_1'\\cdot e^x\\sin y)}{\\partial y}=\\dfrac{\\partial f_1'}{\\partial y}\\cdot e^x\\sin y+f_1'\\cdot e^x\\cos y$。所以难点就是$\\dfrac{\\partial f_1'}{\\partial y}$。\n\n求导路径$f_1'-1-y$和$f_1'-2-y$：$=(f_{11}''e^x\\cos y+f_{12}''2y)\\cdot e^x\\sin y+f_1'\\cdot e^x\\cos y$。\n\n其中$\\dfrac{\\partial(f_2'\\cdot2x)}{\\partial y}=2x\\dfrac{\\partial f_2'}{\\partial y}$，求导路径$f_2'-1-y$和$f_2'-2-y$：$=2x(f_{21}''\\cdot e^x\\cos y+f_{22}''\\cdot2y)$。\n\n$\\therefore\\dfrac{\\partial^2z}{\\partial x\\partial y}=(f_{11}''e^x\\cos y+f_{12}''2y)\\cdot e^x\\sin y+f_1'\\cdot e^x\\cos y+2x(f_{21}''\\cdot e^x\\cos y+f_{22}''\\cdot2y)$。\n\n若$f$具有二阶连续偏导数，所以可以交换求导顺序，$f_{12}''=f_{21}''$。\n\n化简：$=f_1'e^x\\cos y+f_{11}''e^{2x}\\sin y\\cos y+2e^xf_{12}''(y\\sin y+x\\cos y)+4f_{22}''xy$。",
  "relatedLessons": [
   "gs04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#隐函数存在定理",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "隐函数存在定理",
  "kind": "定理",
  "text": "主要对隐函数的微分。隐函数的最大问题就是变量纠缠在一起，而公式法所得到的式子中变量都是独立的。\n\n若对每个$x\\in D$对应的函数值$y$总是唯一的，这样定义的函数为单值函数。若给定一个对应法则，按法则对$x$总有$y$与之对应，但是$y$不唯一，此时就不是函数，而确定一个多值函数。\n\n只要满足着定义域的条件下，形如$y=f(x)$的函数就是显函数，如$y=\\sin x$。由方程$F(x,y)=0$确定的函数为隐函数，如$x+y^3-1=0$显式表示为$y=\\sqrt[3]{1-x}$。\n\n定义：设函数$F(x,y)$在点$P(x_0,y_0)$的某一邻域内具有连续偏导数，$F(x_0,y_0)$\n$=0$，$F_y'(x_0,y_0)\\neq0$，则方程$F(x,y)=0$在点$(x_0,y_0)$的某一邻域内能唯一确定一个连续且具有连续导数的函数$y=f(x)$，满足$y_0=f(x_0)$。\n\n定义：二元隐函数求导公式：$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=-\\dfrac{F_x'}{F_y'}$。\n\n因为$y=y(x)$，所以对$F(x,y)$进行求导：$F_x'\\cdot1+F_y'\\cdot\\dfrac{\\textrm{d}y}{\\textrm{d}x}=0$，就解出隐函数求导公式，$F_y'(x_0,y_0)\\neq0$是定理关键。\n\n如给出一个圆的方程$F(x,y)=x^2+y^2-1=0$，$F_x'=2x$，$F_y'=2y$，$F(0,1)=0$，$F'_y(0,1)=2\\neq0$。所以在$(0,1)$和$(0,-1)$是单值的，从而能确定一个连续导数的隐函数，而在$(\\pm1,0)$的邻域内不存在，因为其切线是竖直的。\n\n定义：设函数$F(x,y,z)$在点$P(x_0,y_0,z_0)$的某一邻域内具有连续偏导数，$F(x_0,y_0,z_0)=0$，$F_z'(x_0,y_0,z_0)\\neq0$，则方程$F(x,y,z)=0$在点$(x_0,y_0,z_0)$的某一邻域内能唯一确定一个连续且具有连续导数的函数$z=f(x,y)$，满足$z_0=f(x_0,y_0)$。\n\n定义：三元隐函数求导公式：$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x'}{F_z'}$，$\\dfrac{\\partial z}{\\partial y}=-\\dfrac{F_y'}{F_z'}$。\n\n因为$x$是$x$的函数，$y$是$y$的函数，$z$是$xy$的函数。所以$F_x'\\cdot1+F_z'\\cdot\\dfrac{\\partial z}{\\partial x}=0$，解得$\\dfrac{\\partial z}{\\partial x}=-\\dfrac{F_x'}{F_z'}$。同理$F_y'\\cdot1+F_z'\\cdot\\dfrac{\\partial z}{\\partial y}$也可得。\n\n例题：设$z=f(x,y)$是由方程$z-y-x+xe^{z-y-x}=0$所确定的二元函数，求$\\textrm{d}z$。\n\n解：$\\textrm{d}z=\\dfrac{\\partial z}{\\partial x}\\textrm{d}x+\\dfrac{\\partial z}{\\partial y}\\textrm{d}y$。其中$F_x'=-1+e^{z-y-x}-xe^{z-y-x}$，$F_y'=-1-xe^{z-y-z}$，$F_z'=1+xe^{z-y-x}$。\n\n直接代入：$\\dfrac{\\partial z}{\\partial x}\\textrm{d}x+\\dfrac{\\partial z}{\\partial y}\\textrm{d}y=-\\dfrac{F_x'}{F_z'}-\\dfrac{F_y'}{F_z'}=\\dfrac{1+(x-1)e^{z-y-x}}{1+xe^{z-y-x}}+1$。\n\n例题：已知函数$z=f(x,y)$的全微分$\\textrm{d}z=2x\\,\\textrm{d}x+\\sin y\\,\\textrm{d}y$且$f(1,0)=2$，求$f(x,y)$。\n\n解：$\\because\\textrm{d}z=2x\\,\\textrm{d}x+\\sin y\\,\\textrm{d}y$，$\\therefore\\dfrac{\\partial z}{\\partial x}=2x$，$\\dfrac{\\partial z}{\\partial y}=\\sin y$。\n\n对偏导进行积分：$f(x,y)=x^2+\\varphi(y)$，$\\dfrac{\\partial(x^2+\\varphi(y))}{\\partial y}=\\varphi'(y)=\\sin y$。\n\n又$\\varphi(y)=-\\cos y+C$，$f(x,y)=x^2-\\cos y+C$，代入$f(1,0)=2$。\n\n$C=2$，$f(x,y)=x^2-\\cos y+2$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#概念",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "概念",
  "kind": "概念",
  "text": "定义：若存在$(x_0,y_0)$的某个邻域，使得在该邻域内的任意一点$(x,y)$均有$f(x,y)\\leqslant f(x_0,y_0)$或$f(x,y)\\geqslant f(x_0,y_0)$成立，则称$(x_0,y_0)$为$f(x,y)$的广义的极大值点/极小值点，$f(x_0,y_0)$为$f(x,y)$的广义的极大值/极小值。\n\n定义：若存在$(x_0,y_0)$的某个去心邻域，使得在该邻域内的任意一点$(x,y)$均有$f(x,y)<f(x_0,y_0)$或$f(x,y)>f(x_0,y_0)$成立，则称$(x_0,y_0)$为$f(x,y)$的真正的极大值点/极小值点，$f(x_0,y_0)$为$f(x,y)$的真正的极大值/极小值。\n\n定义：设$(x_0,y_0)$为$f(x,y)$定义域内一点，若对于$f(x,y)$的定义域内任意一点$(x,y)$均有$f(x,y)\\leqslant f(x_0,y_0)$或$f(x,y)\\geqslant f(x_0,y_0)$成立，则称$(x_0,y_0)$为$f(x,y)$的广义的最大值点/最小值点，$f(x_0,y_0)$为$f(x,y)$的广义的最大值/最小值。\n\n定义：设$(x_0,y_0)$为$f(x,y)$定义域内一点，若对于$f(x,y)$的定义域内任意一个异于$(x_0,y_0)$的点$(x,y)$均有$f(x,y)<f(x_0,y_0)$或$f(x,y)>f(x_0,y_0)$成立，则称$(x_0,y_0)$为$f(x,y)$的真正的最大值点/最小值点，$f(x_0,y_0)$为$f(x,y)$的真正的最大值/最小值。\n\n定义：函数的一阶导数为0的点（驻点也称为稳定点，临界点）。对于多元函数，驻点是所有一阶偏导数都为零的点。\n\n极值点不一定是驻点：只有可导的极值点才可能是驻点；驻点也不一定是极值点：只有驻点两端变号才能成为极值点。\n\n定理：若$f(x,y)$在$(x_0,y_0)$处取得极大/极小值，则$f(x,y_0)$在$x=x_0$取得极大/极小值，$f(x_0,y)$在$y=y_0$取得极大/极小值。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#无条件极值",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "无条件极值",
  "kind": "定理",
  "text": "定理：二元函数取极值的必要条件：设$z=f(x,y)$在点$(x_0,y_0)$一阶偏导数存在且取极值，则$f_x'(x_0,y_0)=0$，$f_y'(x_0,y_0)=0$。三元及以上可以类推。\n\n定理：二元函数取极值的充分条件：若对函数求二阶偏导$\\left\\{\\begin{array}{l}\n    f_{xx}''(x_0,y_0)=A \\\\\n    f_{xy}''(x_0,y_0)=B \\\\\n    f_{yy}''(x_0,y_0)=C\n\\end{array}\\right.$，则$\\Delta=B^2-AC=\\left\\{\\begin{array}{l}\n    <0\\Rightarrow\\text{极值}\\left\\{\\begin{array}{l}\n        A<0\\Rightarrow\\text{极大值} \\\\\n        A>0\\Rightarrow\\text{极小值}\n    \\end{array}\\right. \\\\\n    >0\\Rightarrow\\text{非极值} \\\\\n    =0\\Rightarrow\\text{方法失效，使用定义法}\n\\end{array}\\right.$。只适用于二元函数极值。\n\n#### 显函数\n\n可以先直接求出$f_{xx}''$、$f_{xy}''$、$f_{yy}''$，再令一阶偏导为0求出点，把点代入。\n\n例题：求函数$f(x,y)=x^4+y^4-(x+y)^2$的极值。\n\n解：$f_x'=4x^3-2(x+y)=0$，$f_y'=4y^3-2(x+y)=0$，解得$x=y=-1,0,1$。\n\n$f_{xx}''=12x^2-2$，$f_{xy}''=-2$，$f_{yy}''=12y^2-2$。各自代入：\n\n$P_1:A_1=10,B_1=-2,C_1=10,\\Delta=B_1^2-A_1C_1=-96<0,A_1>0$，极小。\n\n同理$P3$也是极小值点。极小值为-2。\n\n$P2:A_2=-2,B_2=-2,C_2=-2,\\Delta_2=B_2^2-A_2C_2=0$。该方法失效。\n\n取$y=x$的路径，$f(x,y)=f(x,x)=2x^4-4x^2=2x^2(x+\\sqrt{2})(x-\\sqrt{2})<0$。\n\n取$y=-x$的路径，$f(x,y)=f(x,-x)=2x^4>0$。而$f(0,0)=0$。\n\n所以不同的路径上有大于该值的也有小于该值的，所以该点不为极值点。\n\n#### 隐函数\n\n由于无法$f_{xx}''$、$f_{xy}''$、$f_{yy}''$，所以先令一阶偏导为0求出可疑点，把点代入，并代入$f_x'=0$、$f_y'=0$、$f_z'=0$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-6-differential-calculus-of-multivariate-functions-differential-calculus-of-multivariate-functions-s3-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/6-differential-calculus-of-multivariate-functions/differential-calculus-of-multivariate-functions.tex#条件极值与拉格朗日乘数法",
  "subject": "gaoshu",
  "topic": "多元函数微分学",
  "title": "条件极值与拉格朗日乘数法",
  "kind": "总结",
  "text": "求目标函数$u=f(x,y,z)$在一组条件函数$\\varphi_1(x,y,z)=0,\\varphi_2(x,y,z)=0,\\cdots,\\varphi_n(x,y,z)=0$下的最值，则：\n\n- 构造辅助函数带$\\lambda_i$：$F(x,y,z,\\lambda_1,\\lambda_2,\\cdots,\\lambda_n)=f(x,y,z)+\\lambda_1\\varphi_1(x,y,z)+$\n$\\lambda_2\\varphi_2(x,y,z)+\\lambda_n\\varphi_n(x,y,z)$，其中$\\lambda_i\\varphi_i$为拉格朗日乘数。\n\n- 对函数依次对$x,y,z,\\lambda_i$求偏导并令为0：$F_x'=f_x'+\\lambda_1\\varphi_{1x}'+\\lambda_2\\varphi_{2x}'+\\cdots+\\lambda_n\\varphi_{nx}'=0$，$F_y'=f_y'+\\lambda_1\\varphi_{1y}'+\\lambda_2\\varphi_{2y}'+\\cdots+\\lambda_n\\varphi_{ny}'=0$，$F_z'=f_z'+\\lambda_1\\varphi_{1z}'+\\lambda_2\\varphi_{2z}'+\\cdots+\\lambda_n\\varphi_{nz}'=0$，$F_{\\lambda_i}'=\\varphi_i(x,y,z)=0$。一共$3+n$个方程。\n\n- 解上述方程组得备选点$P_i$，$i=1,2,\\cdots,n$，并求$f(P_i)$并取其最大值$m_{\\max}$和最小值$u_{\\min}$。\n\n例题：求函数$u=xyz$在约束条件$\\dfrac{1}{x}+\\dfrac{1}{y}+\\dfrac{1}{z}=\\dfrac{1}{a}$（$x>0,y>0,z>0,a>0$）下的最小值。\n\n解：令$F(x,y,z,\\lambda)=xyz+\\lambda\\left(\\dfrac{1}{x}+\\dfrac{1}{y}+\\dfrac{1}{z}-\\dfrac{1}{a}\\right)$。\n\n令$F_x'=yz+-\\dfrac{\\lambda}{x^2}=0$，$F_y'=xz+-\\dfrac{\\lambda}{y^2}=0$，$F_z'=xy+-\\dfrac{\\lambda}{z^2}=0$，$F_\\lambda'=\\dfrac{1}{x}+\\dfrac{1}{y}+\\dfrac{1}{z}-\\dfrac{1}{a}=0$。\n\n解得$x=y=z=3a$，从而最小值为$u_{\\min}=27a^3$。",
  "relatedLessons": [
   "gs13"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#概念",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "概念",
  "kind": "概念",
  "text": "#### 几何背景\n\n二重积分的几何背景就是曲顶柱体的体积。定积分用极限的思想求出了二维平面的曲边梯形的面积，同样二重积分$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma$。\n\n被积函数$f(x,y)$作为曲顶柱体在点$(x,y)$处柱体微元的高，用底面积$\\textrm{d}\\sigma>0$乘上高$f(x,y)$就得到一个小柱体体积，再把所有$D$上的柱体相加起来就是整个曲顶柱体的体积。\n\n#### 性质\n\n- 求区域面积：$\\iint\\limits_D1\\cdot\\textrm{d}\\sigma=\\iint\\limits_D\\textrm{d}\\sigma=A$，其中$A$为$D$的面积。\n\n- 可积函数必有界：当$f(x,y)$在有界闭区间$D$上可积时，$f(x,y)$在$D$上必有界。\n\n- 积分线性性质：$k_1,k_2$为常数，则$\\iint\\limits_D[k_1f(x,y)\\pm k_2g(x,y)]\\,\\textrm{d}\\sigma=$\n$k_1\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma\\pm k_2\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma$。\n\n- 积分可加性：当$f(x,y)$在有界闭区间$D$上可积时，且$D_1\\cup D_2=D$，$D_1\\cap U_2=\\varnothing$，则$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=\\iint\\limits_{D_1}f(x,y)\\,\\textrm{d}\\sigma+\\iint\\limits_{D_2}f(x,y)\\,\\textrm{d}\\sigma$。\n\n- 积分保号性：当$f(x,y),g(x,y))$在有界闭区间$D$上可积时，若在$D$上有$f(x,y)\\leqslant g(x,y)$，则$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma\\leqslant\\iint\\limits_Dg(x,y)\\,\\textrm{d}\\sigma$，特别$\\left\\vert\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma\\right\\vert\\leqslant\\iint\\limits_D\\vert f(x,y)\\vert\\,\\textrm{d}\\sigma$。\n\n- 二重积分估值定理：设$M,m$，分别为$f(x,y)$在有界闭区域$D$上的最大值和最小值，$A$为$D$的面积，则有$mA\\leqslant\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma\\leqslant MA$。\n\n- 二重积分中值定理：设函数$f(x,y)$在有界闭区域$D$上连续，$A$为$D$的面积，则在$D$上至少存在一点$(\\xi,\\eta)$使得$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=f(\\xi,\\eta)A$。\n\n例题：设$I_1=\\iint\\limits_D\\cos\\sqrt{x^2+y^2}\\,\\textrm{d}\\sigma$，$I_2=\\iint\\limits_D\\cos(x^2+y^2)\\,\\textrm{d}\\sigma$，$I_3=\\iint\\limits_D\\cos(x^2+y^2)^2\\,\\textrm{d}\\sigma$，其中$D=\\{(x,y)|x^2+y^2\\leqslant1\\}$，则()。\n\n$A.I_3>I_2>I_1$$B.I_1>I_2>I_3$$C.I_2>I_1>I_3$$D.I_3>I_1>I_2$\n\n解：令$x^2+y^2=t$，$\\therefore0<t\\leqslant1$。所以$1\\geqslant\\sqrt{t}\\geqslant t\\geqslant t^2\\geqslant0$。\n\n又$\\cos x$单调减，所以$A$。\n\n#### 对称性\n\n普通对称性定义：设$D$关于$y$轴对称，$I=\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma$，将$D$分为对称的两部分$D_1D_2$，即$I=\\left\\{\\begin{array}{ll}\n    2\\iint\\limits_{D_1}f(x,y)\\,\\textrm{d}\\sigma, & f(x,y)=f(-x,y) \\\\\n    0, & f(x,y)=-f(-x,y)\n\\end{array}\\right.$。关于$x$轴对称也同理。\n\n轮换对称性定义：$xy$对调后区域$D$不变或关于$y=x$对称，$\\iint\\limits_Df(x,y)\\,\\textrm{d}x\\textrm{d}y$\n$=\\iint\\limits_Df(y,x)\\,\\textrm{d}y\\textrm{d}x$。类似积分值与积分变量无关。同理对于一元函数积分的不变性：$\\int_a^bf(x)\\,\\textrm{d}x=\\int_a^bf(y)\\,\\textrm{d}y$。\n\n例题：设区域$D=\\{(x,y)|x^2+y^2\\leqslant1,x\\geqslant0,y\\geqslant0\\}$，$f(x)$在$D$上的正值连续函数，$a,b$为常数，求$I=\\displaystyle{\\iint\\limits_D\\dfrac{a\\sqrt{f(x)}+b\\sqrt{f(y)}}{\\sqrt{f(x)}+\\sqrt{f(y)}}\\textrm{d}\\sigma}$。\n\n解：由于被积函数是抽象的，所以无法直接计算。但是由于$D$是圆，$xy$对调后$D$保持不败你，所以$D$关于$y=x$对称，根据轮换对称性：\n\n$I=\\displaystyle{\\iint\\limits_D\\dfrac{a\\sqrt{f(x)}+b\\sqrt{f(y)}}{\\sqrt{f(x)}+\\sqrt{f(y)}}\\textrm{d}\\sigma=\\iint\\limits_D\\dfrac{a\\sqrt{f(y)}+b\\sqrt{f(x)}}{\\sqrt{f(y)}+\\sqrt{f(x)}}\\textrm{d}\\sigma}$。\n\n$\\therefore2I=\\displaystyle{\\iint\\limits_D\\dfrac{a\\sqrt{f(x)}+b\\sqrt{f(y)}}{\\sqrt{f(x)}+\\sqrt{f(y)}}\\textrm{d}\\sigma+\\iint\\limits_D\\dfrac{a\\sqrt{f(y)}+b\\sqrt{f(x)}}{\\sqrt{f(y)}+\\sqrt{f(x)}}\\textrm{d}\\sigma}=\\iint\\limits_D(a+b)\\,\\textrm{d}\\sigma$\n$=(a+b)\\dfrac{\\pi}{4}$。\n\n解得$I=\\dfrac{a+b}{8}\\pi$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#直角坐标系",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "直角坐标系",
  "kind": "概念",
  "text": "后积先定限，先内画条线，先交写下限，后交写上限。\n\n二重积分要将其变为累次积分，由一个区域的积分变为分别对$xy$的积分，要将$f(x,y)$拆开，重要的就是求上下限。\n\n\\paragraph{\\texorpdfstring{$X$}型区域} \\leavevmode\n\n$\\sigma=\\{(x,y)|a\\leqslant x\\leqslant b,\\psi(x)\\leqslant y\\leqslant\\phi(x)\\}$。\n\n 也称为上下型区域。\n\n$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=\\int_a^b\\textrm{d}x\\int_{\\psi(x)}^{\\phi(x)}f(x,y)\\,\\textrm{d}y$。\n\n二重积分$X$型即求底部为如图的图形的面包状物体体积。求体积的做法就是已知截面面积求体积。其中横截面的一边在底面$\\phi(x)-\\psi(x)$，高为函数$f(x,y)$，则横截面面积$S(x)=\\int^{\\phi(x)}_{\\psi(x)}f(x,y)\\,\\textrm{d}y$，得到了横截面之后再对$x$轴的所有横截面进行积分：$V=\\int_a^bS(x)\\,\\textrm{d}x$就得到体积。\n\n\\paragraph{\\texorpdfstring{$Y$}型区域} \\leavevmode\n\n$\\sigma=\\{(x,y)|c\\leqslant x\\leqslant d,\\psi(y)\\leqslant x\\leqslant\\phi(y)\\}$。\n\n 也称为左右型区域。\n\n$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=\\int_c^d\\textrm{d}y\\int_{\\psi(y)}^{\\phi(y)}f(x,y)\\,\\textrm{d}x$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#区域类型选择",
  "subject": "gaoshu",
  "topic": "函数概念",
  "title": "区域类型选择",
  "kind": "总结",
  "text": "\\leavevmode\n\n若上下是两条曲线，那么就是$X$型，若左右是两条曲线，那么就是$Y$型。\n\n若同一个方向的函数有两种不同的表达式，则从另一个方向将$D$按照函数分段割开求积分。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#极坐标系",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "极坐标系",
  "kind": "方法",
  "text": "按积分区域与极点位置关系的不同，将二重积分计算分为三种情况：\n\n根据$\\theta$按角度切割区间，然后从极点开始按$\\textrm{d}r$切割，变成一个个类似矩形的图形。图形一边为切割半径的改变量$\\textrm{d}r$，另一条边为圆弧，等于半径乘改变角度$r\\textrm{d}\\theta$，所以最后$\\textrm{d}\\sigma=r\\textrm{d}r\\textrm{d}\\theta$。\n\n基本上都是先积$r$后积$\\theta$。\n\n从射线刚开始接触区域$D$的射线记为$\\theta=\\alpha$，要离开区域$D$的射线记为$\\theta=\\beta$，中间移动的射线为$\\theta=\\theta$。$\\theta=\\alpha$与$\\theta=\\beta$与$D$相交于两点，两点内靠近极点的$D$的边为内曲线，远离极点的边为外曲线。$\\theta=\\theta$与内曲线交于$r=r_1(\\theta)$，与外曲线交于$r=r_2(\\theta)$。\n\n- 极点$O$在区域$D$外部：$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=\\int_\\alpha^\\beta\\textrm{d}\\theta\\int_{r_1(\\theta)}^{r_2(\\theta)}f(r\\cos\\theta,r\\sin\\theta)r\\,\\textrm{d}r$。\n\n- 极点$O$在区域$D$边上：$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=\\int_\\alpha^\\beta\\textrm{d}\\theta\\int_0^{r(\\theta)}f(r\\cos\\theta,r\\sin\\theta)r\\,\\textrm{d}r$。\n\n- 极点$O$在区域$D$内部：$\\iint\\limits_Df(x,y)\\,\\textrm{d}\\sigma=\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^{r(\\theta)}f(r\\cos\\theta,r\\sin\\theta)r\\,\\textrm{d}r$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#极坐标系与直角坐标系选择",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "极坐标系与直角坐标系选择",
  "kind": "总结",
  "text": "若给出一个二重积分：\n\n- 被积函数是否为$f(x^2+y^2)$、$f\\left(\\dfrac{y}{x}\\right)$、$f\\left(\\dfrac{x}{y}\\right)$等形式。\n\n- 积分区域是否为圆或圆的一部分。\n\n- 如果上面两种都有，则优先使用极坐标系，否则优先考虑直角坐标系。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#极直互化",
  "subject": "gaoshu",
  "topic": "函数图像与初等基础",
  "title": "极直互化",
  "kind": "方法",
  "text": "对于极坐标系转换到直角坐标系：$x=r\\cos\\theta$，$y=r\\sin\\theta$。\n\n例题：设区域$D=\\{(x,y)|x^2+y^2\\leqslant R^2\\}$，计算$\\displaystyle{\\iint\\limits_D\\left(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}\\right)\\textrm{d}x\\textrm{d}y}$。\n\n解：互换积分变量：$I=\\displaystyle{\\iint\\limits_D\\left(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}\\right)\\textrm{d}x\\textrm{d}y}=\\displaystyle{\\iint\\limits_D\\left(\\dfrac{y^2}{a^2}+\\dfrac{x^2}{b^2}\\right)\\textrm{d}x\\textrm{d}y}$。\n\n$\\therefore2I=\\left(\\dfrac{1}{a^2}+\\dfrac{1}{b^2}\\right)\\displaystyle{\\iint\\limits_D(x^2+y^2)\\textrm{d}x\\textrm{d}y}$，$\\therefore I=\\dfrac{1}{2}\\left(\\dfrac{1}{a^2}+\\dfrac{1}{b^2}\\right)\\displaystyle{\\iint\\limits_D(x^2+y^2)\\textrm{d}\\sigma}$。\n\n根据公式三转换为极坐标系：$I=\\dfrac{1}{2}\\left(\\dfrac{1}{a^2}+\\dfrac{1}{b^2}\\right)\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^Rr^2r\\,\\textrm{d}r$。\n\n即$I=\\left(\\dfrac{1}{a^2}+\\dfrac{1}{b^2}\\right)\\dfrac{\\pi R^4}{4}$。\n\n例题：计算$I=\\int_0^1\\textrm{d}x\\int_{1-x}^{\\sqrt{1-x^2}}\\dfrac{x+y}{x^2+y^2}\\textrm{d}y$。\n\n解：根据上限$\\sqrt{1-x^2}$和$1-x$所围成的图形$D$为第一象限的圆减去三角形。\n\n所以转换为极坐标系时，对于$\\theta\\in\\left(0,\\dfrac{\\pi}{2}\\right)$，对于$r$在$(1-x,\\sqrt{1-x^2})$。\n\n下限$x+y=1$，即$r\\cos\\theta+r\\sin\\theta=1$，解出$r=\\dfrac{1}{\\cos\\theta+\\sin\\theta}$，上限是一个圆，所以为1。\n\n$=\\int_0^\\frac{\\pi}{2}\\textrm{d}\\theta\\int_\\frac{1}{\\cos\\theta+\\sin\\theta}^1\\cos\\theta+\\sin\\theta\\,\\textrm{d}r=\\int_0^\\frac{\\pi}{2}\\cos\\theta+\\sin\\theta-1\\,\\textrm{d}\\theta=2-\\dfrac{\\pi}{2}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#积分次序",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "积分次序",
  "kind": "方法",
  "text": "积分次序即区域类型选择的问题，目的是为了简化计算，使得积分的函数更简单。\n\n从另一方面，也很可能是积分函数无法按此次序进行积分，所以需要更换积分顺序。\n\n存在许多有原函数但求不出初等函数形式的原函数。如$\\dfrac{\\sin x}{x}$、$\\dfrac{\\cos x}{x}$、$\\dfrac{\\tan x}{x}$、$\\dfrac{e^x}{x}$、$\\sin x^2$、$\\cos x^2$、$\\tan x^2$、$e^{ax^2+bx+c}$、$\\dfrac{1}{\\ln x}$等。\n\n例题：计算$\\displaystyle{\\int_1^2\\textrm{d}x\\int_{\\sqrt{x}}^x\\sin\\dfrac{\\pi x}{2y}\\textrm{d}y+\\int_2^4\\textrm{d}x\\int_{\\sqrt{x}}^2\\sin\\dfrac{\\pi x}{2y}\\textrm{d}y}$。\n\n解：首先可以看出积分函数都是一样的，只是积分区域不同所以分开了，可见该函数的积分区域较复杂。\n\n积分函数为$\\sin\\dfrac{\\pi x}{2y}$，若对$y$进行积分，则可以类比求$\\displaystyle{\\int\\sin\\dfrac{1}{x}\\,\\textrm{d}x}$，这个是积分积不出来的。所以必须更换积分顺序。先积$x$。\n\n首先根据被积函数上下限得到积分区域：$\\sqrt{x}$、$x$、2围成的类三角形$\\textrm{d}\\sigma$。\n\n$I=\\displaystyle{\\iint\\limits_D\\sin\\dfrac{\\pi x}{2y}\\textrm{d}\\sigma}=\\displaystyle{\\int_1^2\\textrm{d}y\\int_y^{y^2}\\sin\\dfrac{\\pi x}{2y}\\textrm{d}x}=\\displaystyle{\\int_1^2\\dfrac{2y}{\\pi}\\left(-\\cos\\dfrac{\\pi y}{2}+\\cos\\dfrac{\\pi}{2}\\right)}\\textrm{d}y=\\dfrac{4}{\\pi^3}(2+\\pi)$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-2-7",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分处理一元积分",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分处理一元积分",
  "kind": "例题",
  "text": "在面对有中间变量的一元积分时，可以使用二重积分。\n\n例题：设$f(x)=\\int_x^1\\sin(\\pi u^2)\\,\\textrm{d}u$，求$\\int_0^1f(x)\\,\\textrm{d}x$。（可以使用分部积分法）\n\n解：$\\int_0^1f(x)\\,\\textrm{d}x=\\int_0^1\\textrm{d}x\\int_x^1\\sin(\\pi u^2)\\,\\textrm{d}u$。又$\\sin(\\pi u^2)$无法对$x$积分。\n\n换做对$y$积分，$\\textrm{d}\\sigma$为$x=0$、$x=1$、$u=x$围成的三角形。交换积分次序：\n\n$\\int_0^1\\textrm{d}y\\int_0^u\\sin(\\pi u^2)\\,\\textrm{d}x=\\int_0^1\\sin(\\pi u^2)u\\,\\textrm{d}u=\\dfrac{1}{2\\pi}\\int_0^1\\sin(\\pi u^2)\\,\\textrm{d}(\\pi u^2)=-\\dfrac{1}{2\\pi}$\n$\\cos\\pi u^2|_0^1=-\\dfrac{1}{2\\pi}(-1-1)=\\dfrac{1}{\\pi}$。\n\n例题：利用广义二重积分求$\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x$。\n\n解：根据积分值与积分变量无关的性质：\n\n$I^2=(\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x)^2=\\int_0^{+\\infty}e^{-x^2}\\,\\textrm{d}x\\cdot\\int_0^{+\\infty}e^{-y^2}\\,\\textrm{d}y=\\int_0^{+\\infty}\\int_0^{+\\infty}e^{-x^2-y^2}\\,\\textrm{d}x\\textrm{d}y$\n\n$\\textrm{d}\\sigma$是第一象限，可以看作一个广义的圆，半径无限大，转换为极坐标系。\n\n$=\\int_0^\\frac{\\pi}{2}\\textrm{d}\\theta\\int_0^{+\\infty}e^{-r^2}r\\,\\textrm{d}r=\\displaystyle{\\int_0^\\frac{\\pi}{2}\\dfrac{1}{2}\\,\\textrm{d}\\theta}=\\dfrac{\\pi}{2}$。$\\therefore I=\\dfrac{\\sqrt{\\pi}}{2}$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s1-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#二重积分应用",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "二重积分应用",
  "kind": "方法",
  "text": "#### 体积\n\n#### 形心公式\n\n对于直角坐标系和参数方程：\n\n$\\overline{x}=\\dfrac{\\iint\\limits_Dx\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int x(t)y(t)x'(t)\\,\\textrm{d}t}{\\int y(t)x'(t)\\,\\textrm{d}t}$，$\\overline{y}=\\dfrac{\\iint\\limits_Dy\\,\\textrm{d}\\sigma}{\\iint\\limits_D\\textrm{d}\\sigma}=\\dfrac{\\int y(t)^tx'(t)\\,\\textrm{d}t}{\\int y(t)x'(t)\\,\\textrm{d}t}$。",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#概念",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "概念",
  "kind": "概念",
  "text": "三重积分的被积函数$f(x,y,z)$定义在三维空间$\\Omega$上，是四维空间图形体积，非常抽象。\n\n所以利用质量描述，设一质量非均匀的物体，体积密度为$f(x,y,z)$，则三重积分就是以此为点密度的空间物体的质量。\n\n#### 定义\n\n定义：设三元函数$z=f(x,y,z)$定义在有界闭区域$\\Omega$上将区域$\\Omega$任意分成$n$个子域$\\Delta v_i$（$i=1,2,3,\\cdots,n$）并以$\\Delta v_i$表示第$i$个子域的体积。在$\\Delta v_i$上任取一点$(\\alpha_i,\\beta_i,\\gamma_i)$作和$\\sum\\limits_{i=1}^n\\alpha_i\\beta_i\\gamma_i\\Delta v_i$。如果当各个子域的直径中的最大值$\\lambda$趋于零时，此和式的极限存在，则称此极限为函数$f(x,y,z)$在区域$\\Omega$上的三重积分，记为$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v$，即$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v=\\lim\\limits_{\\lambda\\to0}\\sum\\limits_{i=1}^nf(x_i,y_i,z_i)\\Delta y_i$，其中$\\textrm{d}v$叫做体积元素。\n\n其中$\\iiint$称为三重积分号，$f(x,y,z)$为被积函数，$f(x,y,z)\\textrm{d}v$称为被积表达式，$\\textrm{d}v$称为体积元，$x$、$y$、$z$为积分变量，$\\Omega$为积分区域，$\\sum f(\\alpha_i,\\beta_i,\\gamma_i)\\Delta v_i$为积分和。\n\n#### 性质\n\n假设$\\Omega$为空间有界闭区域。\n\n- 空间区域体积：$\\iiint\\limits_\\Omega1\\,\\textrm{d}v=\\iiint\\limits_\\Omega\\textrm{d}v=V$，其中$V$为$\\Omega$的体积。\n\n- 可积函数必有界：设$f(x,y,z)$在$\\Omega$上可积，则在$\\Omega$上必有界。\n\n- 积分线性：设$k_1,k_2$为常数，则$\\iiint\\limits_\\Omega[k_1f(x,y,z)\\pm k_2g(x,y,z)]\\textrm{d}v=k_1\\iiint\\limits_\\Omega$\n$f(x,y,z)\\,\\textrm{d}v\\pm k_2\\iiint\\limits_\\Omega g(x,y,z)\\,\\textrm{d}v$。\n\n- 积分可加性：设$f(x,y,z)$在$\\Omega$上可积，且$\\Omega_1\\cup\\Omega_2=\\Omega$，$\\Omega_1\\cap\\Omega_2=\\varnothing$，则$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v=\\iiint\\limits_{\\Omega_1}f(x,y,z)\\,\\textrm{d}v+\\iiint\\limits_{\\Omega_2}f(x,y,z)\\,\\textrm{d}v$。\n\n- 积分保号性：设$f(x,y,z)$，$g(x,y,z)$在$\\Omega$上可积，且在$\\Omega$上$f(x,y,z)\\leqslant g(x,y,z)$，则有$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v\\leqslant\\iiint\\limits_\\Omega g(x,y,z)\\,\\textrm{d}v$。且利用不等式性质：$\\vert\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v\\vert\\leqslant\\iiint\\limits_\\Omega\\vert f(x,y,z)\\vert\\,\\textrm{d}v$。\n\n- 三重积分估值定理：设$M,m$分别为$f(x,y,z)$在$\\Omega$上的最大值和最小值，$V$为$\\Omega$的体积，则$mV\\leqslant\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v\\leqslant MV$。\n\n- 三种积分中值定理：设$f(x,y,z)$在$\\Omega$上连续，$V$为$\\Omega$的体积，则$\\Omega$上至少存在一点$(\\xi,\\eta,\\zeta)$使得$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v=f(\\xi,\\eta,\\zeta)V$。\n\n#### 对称性\n\n分析方法与二重积分完全一样。\n\n#### 普通对称性\n \\leavevmode\n\n假设$\\Omega$关于$yOz$面对称，则$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v=$\n$\\left\\{\\begin{array}{ll}\n    2\\iiint\\limits_{\\Omega_1}f(x,y,z)\\,\\textrm{d}v, & f(x,y,z)=f(-x,y,z) \\\\\n    0, & f(x,y,z)=-f(-x,y,z)\n\\end{array}\\right.$，其中$\\Omega_1$为$\\Omega$在$yOz$面前面的部分。\n\n#### 轮换对称性\n \\leavevmode\n\n若把$x$与$y$对调后，$\\Omega$不变，则$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v=\\iiint\\limits_\\Omega f(y,x,z)\\,\\textrm{d}v$，这就是轮换对称性。其他情况类似。\n\n在使用轮换对称性的时候需要根据题目进行轮换，特别是根据所要求的被积函数$f(x)$，若$f(x)$中存在某些变量，则要将没有出现的变量换去。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#计算",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "计算",
  "kind": "方法",
  "text": "基本思想还是三重积分化为一重积分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s2-2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#直角坐标系",
  "subject": "gaoshu",
  "topic": "三重积分",
  "title": "直角坐标系",
  "kind": "概念",
  "text": "\\leavevmode\n\n即$\\textrm{d}v=\\textrm{d}x\\textrm{d}y\\textrm{d}z$，微元是一个长方体。\n\n\\subparagraph先一后二法 \\leavevmode\n\n先$z$后$xy$，也称为投影穿线法。先做定积分后做二重积分。相当于对底面构造垂直于底面的线，将这个面上所有的线的体积积分起来就得到这个总体积，所以先一后二法要求底面是固定的微元。\n\n适用场合：$\\Omega$有下曲面$z=z_1(x,y)$、上曲面$z=z_2(x,y)$，无侧面或侧面为柱面。\n\n如二重积分：后积先定限，限内画条线，先交写下限，后交写上限。\n\n$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v=\\iint\\limits_{D_{xy}}\\textrm{d}\\sigma\\int_{z_1(x,y)}^{z_2(x,y)}f(x,y,z)\\,\\textrm{d}z$。\n\n例题：计算三重积分$I=\\displaystyle{\\iiint\\limits_\\Omega\\dfrac{\\textrm{d}x\\textrm{d}y\\textrm{d}z}{(1+x+y+z)^3}}$，其中$\\Omega$是由平面$x=0,y=0,z=0$及$x+y+z=1$所围成的四面体。\n\n解：根据图形，已知是一个四面体，所以下底面是一个1×1的等腰直角三角形$D_{xy}$，上曲面为一个等边三角形$z=-1-x-y$，有两个侧柱面。\n\n则先将$I$消去$z$，再计算$xy$：$I=\\displaystyle{\\iint\\limits_{D_{xy}}\\textrm{d}\\sigma\\int_0^{1-x-y}\\dfrac{1}{(1+x+y+z)^3}\\textrm{d}z}$\n\n$=\\displaystyle{\\iint\\limits_{D_{xy}}\\textrm{d}\\sigma\\left(-\\dfrac{1}{2}\\dfrac{1}{(1+x+y+z)^2}\\bigg|_{z=0}^{z=1-x-y}\\right)}=\\displaystyle{\\iint\\limits_{D_{xy}}\\dfrac{1}{2}\\left(\\dfrac{1}{(1+x+y)^2}-\\dfrac{1}{4}\\right)\\,\\textrm{d}\\sigma}$\n$=\\dfrac{1}{2}\\int_0^1\\textrm{d}x\\int_0^{1-x}\\left(\\dfrac{1}{(1+x+y)^2}-\\dfrac{1}{4}\\right)\\,\\textrm{d}y=\\dfrac{1}{2}\\displaystyle{\\int_0^1\\left(-\\dfrac{1}{4}x+\\dfrac{1}{1+x}-\\dfrac{1}{4}\\right)\\,\\textrm{d}x}$\n$=\\left(-\\dfrac{1}{8}x^2+\\ln(1+x)-\\dfrac{1}{4}x\\right)\\bigg|_0^1=\\dfrac{1}{2}\\left(\\ln2-\\dfrac{5}{8}\\right)$。\n\n\\subparagraph先二后一法 \\leavevmode\n\n先$xy$后$z$，也称为定限截面法。先做二重积分后做定积分。相当于对体积进行平行于地面的切割为圆柱体，将所有在这个高上的圆柱体积分起来就得到这个总面积，所以先二后一要求高是固定的微元。\n\n适用场合：$\\Omega$是旋转体，上面和下面都是平面，中间为曲面，旋转曲面方程为$\\Sigma:z=z(x,y)$。\n\n后积先定限，限内截个面限。\n\n$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}v=\\int\\limits_a^b\\textrm{d}z\\iint\\limits_{D_z}f(x,y,z)\\,\\textrm{d}\\sigma$。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s2-2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#柱面坐标系",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "柱面坐标系",
  "kind": "方法",
  "text": "\\leavevmode\n\n若二重积分部分$\\iint\\limits_{D_{xy}}\\textrm{d}\\sigma$适用于极坐标系（即与圆相关），使用极坐标系表示，令$x=r\\cos\\theta$，$y=r\\sin\\theta$，便有$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z=\\iiint\\limits_\\Omega f(r\\cos\\theta,r\\sin\\theta,z)r\\,$\n$\\textrm{d}r\\textrm{d}\\theta\\textrm{d}z$。这就是柱面坐标系下三重积分的计算。\n\n适用场合：被积函数含有$x^2+y^2$，积分区域为圆或部分圆。\n\n即一个定积分加上一个极坐标系下的二重积分。\n\n例题：计算$\\iiint\\limits_\\Omega(x^2+y^2)\\,\\textrm{d}v$，其中$\\Omega$是$\\left\\{\\begin{array}{ll}\n    y^2=2z \\\\\n    x=0\n\\end{array}\\right.$绕$z$轴旋转一周形成的曲面与平面$z=8$所围成的区域。\n\n解：已知平面曲线绕$z$轴旋转，首先求这个旋转曲面。\n\n首先令$P_1(x_1,y_1,z_1)$在该曲线上，即得到两个方程：$y_1^2=2z_1$，$x_1=0$。\n\n取在旋转轴$z$轴上一点$P_0(0,0,0)$，对于纬圆上任一点$P(x,y,z)$，其中$\\vert P_0P_1\\vert=\\vert PP_0\\vert$，即$x_1^2+y_1^2+z_1^2=x^2+y^2+z^2$。\n\n且向量$\\overrightarrow{PP_1}$垂直于旋转轴$z$轴，所以$(x_1-x,y_1-y,z_1-z)\\bot(0,0,1)$，$z_1-z=0$，$z_1=z$。\n\n代入方程所以$x_1^2+y_1^2=x^2+y^2$，再代入$y_1^2=2z$，$x_1=0$，得到$2z=x^2+y^2$。\n\n旋转曲面为$z=\\dfrac{x^2+y^2}{2}$。且于$z=8$所得到一个旋转体。\n\n因为选择体上下都是平面，侧面是曲面，所以使用先二后一法。其中$D:x^2+y^2\\leqslant2z$。\n\n$I=\\int_0^8\\textrm{d}z\\iint\\limits_D(x^2+y^2)\\,\\textrm{d}\\sigma=\\int_0^8\\textrm{d}z\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^{\\sqrt{2z}}r^2r\\,\\textrm{d}r=\\dfrac{1024}{3}\\pi$。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s2-2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#球面坐标系",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "球面坐标系",
  "kind": "定理",
  "text": "\\leavevmode\n\n\\subparagraph适用场合 \\leavevmode\n\n被积函数含有$x^2+y^2+z^2$或$x^2+y^2$，积分区域为球或球的部分，锥或锥的部分。\n\n\\subparagraph原理 \\leavevmode\n\n利用三族面对$\\Omega$进行切割：\n\n- 首先用$r=r_0$从原点开始向外做球体进行切割，求半径为$r_0$，增量为$\\textrm{d}r$。$r_0\\in[0,+\\infty)$。\n\n- 然后用$\\phi=\\phi_0$从$z$轴为中心，原点为定点，做半顶角为$\\phi_0$的圆锥面进行切割，增量为$\\textrm{d}\\phi$。$\\phi_0\\in[0,\\pi]$。\n\n- 最后用$\\theta=\\theta_0$以$z$为轴做半平面，与$xOz$夹角为$\\theta_0$，增量为$\\textrm{d}\\theta$。$\\theta\\in[0,2\\pi]$。\n\n首先在极坐标系中，弧长等于弧度乘半径，所以微元的由$\\phi$确定的一边为$r\\textrm{d}\\phi$，对于$\\theta$确定的一边，首先需要根据勾股定理得到弧长$r\\sin\\phi$，然后乘$\\textrm{d}\\theta$得到微元边长$r\\sin\\phi\\textrm{d}\\theta$，最后乘上$\\textrm{d}r$，从而得到微元就是三边相乘：$r\\textrm{d}\\phi r\\sin\\phi\\textrm{d}\\theta\\textrm{d}r$。\n\n对$xyz$，由$\\phi$推出的一个直角三角形的斜边为$r$，半顶角为$\\phi$，所以$z$轴的直角边为$z=r\\cos\\phi$，又$x^2+y^2+z^2=r^2$，所以$x^2+y^2=r^2-z^2=r^2\\sin^2\\phi$，又$xOy$夹角为$\\theta$，所以$x=r\\sin\\phi\\cos\\theta$，$y=r\\sin\\phi\\sin\\theta$。\n\n\\subparagraph计算方法 \\leavevmode\n\n$\\iiint\\limits_\\Omega f(x,y,z)\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z=\\iiint\\limits_\\Omega f(r\\sin\\phi\\cos\\theta,r\\sin\\phi\\sin\\theta,r\\cos\\phi)r^2\\sin\\phi\\,\\textrm{d}\\theta\\textrm{d}\\phi\\textrm{d}r$\n\n令$x=r\\cos\\theta\\sin\\phi$、$y=r\\sin\\theta\\sin\\phi$、$z=r\\cos\\phi$，判断$xOy$面的与正方向夹角$\\phi$，$xOz$面的与正方向夹角$\\theta$。\n\n例题：计算三重积分$\\iiint\\limits_\\Omega(x^2+y^2)\\,\\textrm{d}v$，其中$\\Omega$是半球面$x^2+y^2+z^2=a^2$（$y\\geqslant0$）与$xOz$面所围成的区域。\n\n解：根据图形是一个右半球，所以$\\theta$是$x$正轴到负轴一共$\\pi$，$\\phi$到正轴到负轴一共$\\pi$，$r$从原点到最外面一共$a$。$f(x)=x^2+y^2=r^2\\sin^2\\phi$。\n\n$\\therefore I=\\int_0^\\pi\\textrm{d}\\theta\\int_0^\\pi\\textrm{d}\\phi\\int_0^a(r^2\\sin^2\\phi)r^2\\sin\\phi\\textrm{d}r$",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s2-2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#对称性",
  "subject": "gaoshu",
  "topic": "对称性",
  "title": "对称性",
  "kind": "概念",
  "text": "\\leavevmode\n\n\\subparagraph普通对称性 \\leavevmode\n\n例题：计算$\\iiint\\limits_\\Omega e^{\\vert z\\vert}\\,\\textrm{d}v$，其中$\\Omega:x^2+y^2+z^2\\leqslant1$。\n\n解：已知$\\Omega$为一个半径为1的球体。且球体球心在原点，利用普通对称性代入：$f(x,y,z)\\,\\textrm{d}v=e^{\\vert z\\vert}\\,\\textrm{d}v=\\textrm{d}m=f(x,y,-z)\\,\\textrm{d}v=e^{\\vert z\\vert}\\,\\textrm{d}v=\\textrm{d}m$，所以对于$f(x,y,z)$，在球体上下积分相同。\n\n$\\therefore\\iiint\\limits_\\Omega e^{\\vert z\\vert}\\,\\textrm{d}v=2\\iiint\\limits_{\\Omega_1}e^z\\,\\textrm{d}v$，其中$\\Omega_1$为上半球体，即$\\Omega_1:x^2+y^2+z^2\\leqslant1,z\\geqslant0$。\n\n由于$f(x)=e^z$，只包含$z$的变量，所以使用先二后一法更简单。\n\n由于截面是一个圆，所以令$z=z$，代入方程得到面积：$D:x^2+y^2\\leqslant1-z^2$。所以这个圆的半径的平方就是$r^2=1-z^2$，面积为$\\pi r^2=\\pi(1-z^2)$。\n\n$=2\\int_0^1\\textrm{d}z\\iint\\limits_De^z\\,\\textrm{d}\\sigma=2\\int_0^1e^z\\cdot\\pi(1-z^2)\\,\\textrm{d}z=2\\pi$。\n\n\\subparagraph轮换对称性 \\leavevmode\n\n例题：设$\\Omega=\\{(x,y,z)|x^2+y^2+z^2\\leqslant1\\}$，求$\\iiint\\limits_\\Omega z^2\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z$。\n\n解：利用轮换对称性可知$\\iiint\\limits_\\Omega x^2\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z=\\iiint\\limits_\\Omega y^2\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z=\\iiint\\limits_\\Omega z^2\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z$。\n\n$\\therefore I=\\dfrac{1}{3}\\iiint\\limits_\\Omega(x^2+y^2+z^2)\\,\\textrm{d}x\\textrm{d}y\\textrm{d}z$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s2-2-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#形心公式逆用",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "形心公式逆用",
  "kind": "定理",
  "text": "\\leavevmode\n\n由$\\overline{x}=\\dfrac{\\iiint\\limits_\\Omega x\\,\\textrm{d}v}{\\iiint\\limits_\\Omega\\textrm{d}v}$推出$\\iiint\\limits_\\Omega x\\,\\textrm{d}v=\\overline{x}\\cdot V$，其中$V$是$\\Omega$的体积。",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s3-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#第一型曲线积分",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "第一型曲线积分",
  "kind": "总结",
  "text": "是由定积分推广而来。即对弧长曲线积分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#概念",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "概念",
  "kind": "概念",
  "text": "用于计算密度不均匀的不规则形状细线质量。\n\n#### 几何性质\n\n$L$是在$xOy$上的曲线段，$f(x,y)$在$L$上有界，将$L$分割为多个线段$\\Delta S_1,\\Delta S_2,\\cdots,\\Delta S_n$，假如取该线段某点$\\forall(\\xi_i,\\eta_i)\\in\\Delta S_i$，则该线段的质量可以近似为$\\Delta m_i\\approx\\rho(\\xi_i,\\eta_i)\\Delta S_i$，所以整体线的质量$m\\approx\\sum\\limits_{i=1}^n\\rho(\\xi_i,\\eta_i)\\Delta S_i$。$\\lambda=\\max\\{\\Delta S_1,\\cdots,\\Delta S_n\\}$，若极限$m=\\lim\\limits_{\\delta\\to0}\\sum\\limits_{i=1}^n\\rho(\\xi_i,\\eta_i)\\Delta S_i$存在，称该极限为$f(x,y)$在$L$上对弧长的曲线积分$\\int_Lf(x,y)\\,\\textrm{d}s$。\n\n#### 定义\n\n第一类曲线积分为$\\int_Lf(x,y)\\,\\textrm{d}s$。\n\n#### 性质\n\n-$\\int_L1\\,\\textrm{d}s=l$。\n\n-$\\int_Lf(x,y)\\,\\textrm{d}s=\\int_{L_1}f(x,y)\\,\\textrm{d}s+\\int_{L_2}f(x,y)\\,\\textrm{d}s$。\n\n-$\\int_L(k_1f(x,y))\\textrm{d}s\\pm\\int_L(k_2f(x,y))\\textrm{d}s=k_1\\int_Lf(x,y)\\,\\textrm{d}s\\pm k_2\\int_Lf(x,y)\\textrm{d}s$。\n\n#### 对称性\n\n-$L$关于$y$轴对称，右边部分为$L_1$，若$f(-x,y)=-f(x,y)$，则$\\int_Lf(x,y)\\,\\textrm{d}s=0$，若$f(-x,y)=f(x,y)$，则$\\int_Lf(x,y)\\,\\textrm{d}s=2\\int_{L_1}f(x,y)\\,\\textrm{d}s$。\n\n-$L$关于$x$轴对称，上边部分为$L_1$，若$f(x,-y)=-f(x,y)$，则$\\int_Lf(x,y)\\,\\textrm{d}s=0$，若$f(x,-y)=f(x,y)$，则$\\int_Lf(x,y)\\,\\textrm{d}s=2\\int_{L_1}f(x,y)\\,\\textrm{d}s$。\n\n-$L$关于$y=x$对称，则$\\int_Lf(x,y)\\,\\textrm{d}s=\\int_Lf(x,y)\\,\\textrm{d}s$。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#计算",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "计算",
  "kind": "方法",
  "text": "#### 基础方法\n\n即化为定积分。一投（投影）二代（代入关系方程）三计算（$\\textrm{d}s$转换为$\\textrm{d}x$等）。\n\n-$L:y=g(x)$（$a\\leqslant x\\leqslant b$），$\\int_Lf(x,y)\\,\\textrm{d}s=\\int_a^bf[x,g(x)]\\sqrt{1+g'^2(x)}\\textrm{d}x$。\n\n-$L:\\left\\{\\begin{array}{c}\n        x=\\phi(t) \\\\\n        y=\\psi(t)\n    \\end{array}\\right.$（$\\alpha\\leqslant t\\leqslant\\beta$），$\\int_Lf(x,y)\\,\\textrm{d}s=\\int_\\alpha^\\beta f[\\phi(t),\\psi(t)]\\\\\\sqrt{\\phi'^2(t)+\\psi'^2(t)}\\textrm{d}t$。\n\n#### 平面\n \\leavevmode\n\n例题：计算$\\oint\\limits_\\Gamma\\vert y\\vert\\,\\textrm{d}s$，其中$\\Gamma$为球面$x^2+y^2+z^2=2$与平面$x=y$的交线。\n\n解：根据普通对称性，对于$\\vert y\\vert$而言，其他象限的函数值都与第一象限区域的函数相等。令第一象限区域为$\\Gamma_1$：\n\n$\\therefore\\oint\\limits_\\Gamma\\vert y\\vert\\,\\textrm{d}s=4\\oint\\limits_{\\Gamma_1}y\\,\\textrm{d}s$\n\n根据交线方程进行联立，得到$x=\\cos t$，$y=\\cos t$，$z=\\sqrt{2}\\sin t$。\n\n对于$\\Gamma_1$，其角度为$t\\in\\left(0,\\dfrac{\\pi}{2}\\right)$，$y=\\cos t$。\n\n又$\\textrm{d}s=\\sqrt{x_t'^2+y_t'^2+z_t'^2}$，所以$\\textrm{d}t=\\sqrt{2}\\,\\textrm{d}t$\n\n$=4\\int_0^\\frac{\\pi}{2}\\cos t\\sqrt{2}\\,\\textrm{d}t=4\\sqrt{2}$。\n\n#### 空间\n \\leavevmode\n\n#### 技术方法\n\n#### 边界方程代入被积函数\n \\leavevmode\n\n#### 对称性\n \\leavevmode\n\n#### 形心公式逆用\n \\leavevmode",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s4-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#第一型曲面积分",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "第一型曲面积分",
  "kind": "总结",
  "text": "$\\textrm{d}s$为面微分。即对面积曲面积分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s4-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#概念",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "概念",
  "kind": "概念",
  "text": "#### 几何性质\n\n若一块厚度不计的物体$\\Sigma$在空间中，对$\\Sigma$取面积微元$\\forall\\textrm{d}s\\in\\Sigma$，此时面积微元的面密度认定为均匀，其质量$\\textrm{d}m=\\rho(x,y,z)\\textrm{d}s$。所以总质量$m=\\iint_\\Sigma\\textrm{d}m=\\iint_\\Sigma\\rho(x,y,z)\\,\\textrm{d}s$。\n\n#### 定义\n\n$\\iint_\\Sigma f(x,y,z)\\,\\textrm{d}s$为$f(x,y,z)$在曲面$\\Sigma$上的面积的曲面积分。\n\n#### 性质\n\n-$\\iint_\\Sigma1\\,\\textrm{d}s=\\sigma$。\n\n-$\\Sigma$关于$xOy$对称，上部为$\\Sigma_1$，如果$f(x,y,-z)=-f(x,y,z)$，则$\\iint_\\Sigma=0$，如果$f(x,y,-z)=f(x,y,z)$，则$\\iint_\\Sigma=2\\iint_{\\Sigma_1}$。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s4-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#计算",
  "subject": "gaoshu",
  "topic": "二重积分",
  "title": "计算",
  "kind": "方法",
  "text": "#### 二重积分法\n\n还是一投二代三计算。\n\n- 对$\\Sigma$作图。\n\n- 查看图形的奇偶性和对称性，如果对称则消去对应$x$、$y$、$z$的奇数次项。如果图形关于$xOy$对称，则出现$z$的奇数次项就去掉；同理关于$yOz$存在$x$的奇数次项就去掉，$xOz$存在$y$的奇数次项就去掉。\n\n- 查看是否可以将题目中的常数项式子对$I$化简。\n\n- 投影，如将$\\Sigma$投影到$xOy$平面，$z=\\psi(x,y)$，$(x,y)\\in D_{xy}$。\n\n- 求$\\dfrac{\\partial z}{\\partial x}$、$\\dfrac{\\partial z}{\\partial y}$，$\\textrm{d}s=\\sqrt{1+\\left(\\dfrac{\\partial z}{\\partial x}\\right)^2+\\left(\\dfrac{\\partial z}{\\partial y}\\right)^2}\\textrm{d}\\sigma$。\n\n- 代入$\\displaystyle{\\iint\\limits_\\Sigma f(x,y,z)\\,\\textrm{d}s=\\iint\\limits_{D_{xy}}f[x,y,\\psi(x,y)]\\sqrt{1+\\left(\\dfrac{\\partial z}{\\partial x}\\right)^2+\\left(\\dfrac{\\partial z}{\\partial y}\\right)^2}\\textrm{d}\\sigma}$。\n\n例题：$I=\\oiint_\\Sigma(xy^2+z)\\textrm{d}s$。$\\Sigma:z=x^2+y^2,z\\leqslant1$。\n\n解：已知$\\Sigma$是一个开口向$z$轴正方向的抛物面。不关于$z$轴对称，关于$x$轴和$y$轴对称。$I$中存在$x$的奇数次项$xy^2$则去掉，由于不存在$y$的奇数次项则跳过。\n\n$\\therefore I=\\iint_\\Sigma z\\,\\textrm{d}s$。所以$\\Sigma$对$xOy$投影最好，为一个单位圆。\n\n所以投影为单位圆$D_{xy}:x^2+y^2\\leqslant1$。\n\n$\\dfrac{\\partial z}{\\partial x}=2x$，$\\dfrac{\\partial z}{\\partial y}=2y$，$\\textrm{d}s=\\sqrt{1+4x^2+4y^2}\\textrm{d}\\sigma$。\n\n$I=\\iint_{D_{xy}}(x^2+y^2)\\sqrt{1+4(x^2+y^2)}\\,\\textrm{d}\\sigma=\\int_0^2\\pi\\textrm{d}\\theta\\int_0^1r^3\\sqrt{1+4r^2}\\,\\textrm{d}r=\\\\\\pi\\int_0^1r^2\\sqrt{1+4r^2}\\,\\textrm{d}(r^2)$。\n\n令$r^2=t$，$I=\\pi\\int_0^1t\\sqrt{1+4t}\\,\\textrm{d}t$。令$\\sqrt{1+4t}=u$，$=\\pi\\int_1^{\\sqrt{5}}\\dfrac{u^2-1}{4}u\\dfrac{u}{2}\\,\\textrm{d}u=\\dfrac{\\pi}{8}\\int_1^{\\sqrt{5}}(u^4-u^2)\\textrm{d}u=\\dfrac{\\pi}{8}(\\dfrac{u^5}{5}-\\dfrac{u^3}{3})\\bigg\\vert_1^{\\sqrt{5}}=\\dfrac{10}{3}\\sqrt{5}+\\dfrac{2}{15}$。\n\n例题：设曲面$\\Sigma:\\vert x\\vert+\\vert y\\vert+\\vert z\\vert=1$，求$\\oiint_\\Sigma(x+\\vert y\\vert)\\,\\textrm{d}s$。\n\n解：曲面$\\Sigma$是一个正八面体。又普通对称性得$\\oiint\\limits_\\Sigma x\\,\\textrm{d}s=0$。\n\n令第一卦限为$\\Sigma_1$，所以根据普通对称性$\\oiint\\limits_\\Sigma\\vert y\\vert\\,\\textrm{d}s=8\\iint\\limits_{\\Sigma_1}y\\,\\textrm{d}s$\n\n因为$x+y+z=1$和$\\textrm{d}s=\\sqrt{1+z_x'^2+z_y'^2}\\,\\textrm{d}x\\textrm{d}y$交换$xy$保持不变。\n\n根据轮换对称性$\\iint\\limits_{\\Sigma_1}y\\,\\textrm{d}s=\\iint\\limits_{\\Sigma_1}x\\,\\textrm{d}s$。\n\n且对于$x+y+z=1$和用$xz$替换$y$（把微元曲面投到不同的坐标轴平面）：$\\textrm{d}s=\\sqrt{1+y_x'^2+y_z'^2}\\,\\textrm{d}x\\textrm{d}z$交换$xz$保持不变。\n\n根据轮换对称性$\\iint\\limits_{\\Sigma_1}y\\,\\textrm{d}s=\\iint\\limits_{\\Sigma_1}x\\,\\textrm{d}s=\\iint\\limits_{\\Sigma_1}z\\,\\textrm{d}s$。\n\n$\\therefore8\\iint\\limits_{\\Sigma_1}y\\,\\textrm{d}s=\\dfrac{8}{3}\\iint\\limits_{\\Sigma_1}(x+y+z)\\,\\textrm{d}s=\\dfrac{8}{3}\\iint\\limits_{\\Sigma_1}\\textrm{d}s=\\dfrac{8}{3}S_{\\Sigma_1}=\\dfrac{8}{3}\\dfrac{\\sqrt{3}}{2}=\\dfrac{4}{3}\\sqrt{3}$。\n\n#### 技术方法\n\n#### 边界方程代入被积函数\n \\leavevmode\n\n#### 对称性\n \\leavevmode\n\n#### 形心公式逆用\n \\leavevmode",
  "relatedLessons": [
   "gs14"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s5-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#多元积分应用",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "多元积分应用",
  "kind": "方法",
  "text": "包括二重积分、三重积分、一型曲线积分、一型曲面积分四个部分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s5-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#几何量",
  "subject": "gaoshu",
  "topic": "空间解析几何",
  "title": "几何量",
  "kind": "总结",
  "text": "#### 平面区域\n\n#### 空间区域\n\n#### 空间曲线\n\n#### 空间曲面\n\n是考试的重点。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s5-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#重心与形心",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "重心与形心",
  "kind": "总结",
  "text": "当密度$\\rho$为一个固定常数时重心就是形心。\n\n#### 平面薄片\n\n#### 空间物体\n\n是考试的重点。\n\n例题：设空间物体$\\Omega=\\{(x,y,z)|x^2+y^2\\leqslant z\\leqslant1\\}$，求$\\Omega$的形心的竖坐标$\\overline{z}$。\n\n#### 空间曲线\n\n#### 空间曲面",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s5-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#转动惯量",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "转动惯量",
  "kind": "总结",
  "text": "可能会考到。\n\n#### 平面薄片\n\n#### 空间物体\n\n#### 空间曲线\n\n#### 空间曲面",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s5-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#引力",
  "subject": "gaoshu",
  "topic": "定积分物理应用",
  "title": "引力",
  "kind": "总结",
  "text": "考的可能性很小。\n\n#### 平面薄片\n\n#### 空间物体\n\n#### 空间曲线\n\n#### 空间曲面",
  "relatedLessons": [
   "gs12"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s6-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#第二型曲线积分",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "第二型曲线积分",
  "kind": "总结",
  "text": "第二型与第一型的差别就是第二型具有物理意义是有向的，而第一型具有几何意义是无向的。即对坐标曲线积分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s6-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#概念",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "概念",
  "kind": "概念",
  "text": "#### 场的概念\n\n定义：就是空间区域$\\Omega$上的一种对应法则。\n\n数量场就是对应数量没有方向。向量场就是有数量也有方向。\n\n#### 几何性质\n\n对于双理想状态，对一个物体沿直线且均匀力道，则其功为$\\vec{F}\\cdot\\overrightarrow{AB}$（$\\vec{F}$为力向量，$\\overrightarrow{AB}$为物体移动向量）。\n\n而对于双不理想状态，对一个物体沿曲线且变动力道做功，则无法得出结论。\n\n令曲线为$L$，对$L$进行切分为微元$\\forall\\overrightarrow{\\textrm{d}s}\\in L$，则$\\overrightarrow{\\textrm{d}s}=\\{\\textrm{d}x,\\textrm{d}y\\}$。设变力$\\vec{F}(x,y)=\\{P(x,y),Q(x,y)\\}$，则功的微元为$\\textrm{d}\\omega=\\vec{F}\\cdot\\overrightarrow{\\textrm{d}s}=P(x,y)\\textrm{d}x+Q(x,y)\\textrm{d}y$，所以对整体功进行积分$\\omega=\\int_L\\textrm{d}\\omega=\\int_LP(x,y)\\textrm{d}x+Q(x,y)\\textrm{d}y$。\n\n令曲线为$L$，对$L$进行切分为微元$\\forall\\overrightarrow{\\textrm{d}s}\\in L$，则$\\overrightarrow{\\textrm{d}s}=\\{\\textrm{d}x,\\textrm{d}y,\\textrm{d}z\\}$。设变力$\\vec{F}(x,y,z)=\\{P(x,y,z),Q(x,y,z),R(x,y,z)\\}$，则功的微元为$\\textrm{d}\\omega=\\vec{F}\\cdot\\overrightarrow{\\textrm{d}s}=P(x,y,z)\\textrm{d}x+Q(x,y,z)\\textrm{d}y+R(x,y,z)\\textrm{d}z$，所以对整体功进行积分$\\omega=\\int_L\\textrm{d}\\omega=\\int_LP(x,y,z)\\textrm{d}x+Q(x,y,z)\\textrm{d}y+R(x,y,z)\\textrm{d}z$。\n\n#### 定义\n\n对于二维，对坐标的曲线积分为$\\int_LP(x,y)\\textrm{d}x+Q(x,y)\\textrm{d}y$，其中$\\int_LP(x,y)\\,\\textrm{d}x$为$P(x,y)$在有向曲线段$L$上对坐标$x$求积分，$\\int_LQ(x,y)\\,\\textrm{d}y$为$Q(x,y)$在有向曲线段$L$上对坐标$y$求积分。\n\n对于三维，对坐标的曲线积分为$\\int_LP(x,y,z)\\textrm{d}x+Q(x,y,z)\\textrm{d}y+R(x,y,z)\\textrm{d}z$，同理如二维的定义。\n\n#### 性质\n\n-$\\int_{L^-}P(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=-\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y$。\n\n-$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\int_L(P(x,y)\\cos\\alpha+Q(x,y)\\cos\\beta)\\textrm{d}s$。（利用方向余弦将第二类曲线积分化成第一类曲线积分）",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s6-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#计算",
  "subject": "gaoshu",
  "topic": "格林公式",
  "title": "计算",
  "kind": "方法",
  "text": "对于不封闭曲线使用定积分法，对于封闭曲线或封闭曲线部分使用二重积分法。\n\n#### 定积分法\n\n由于第二类曲线积分积分值可正可负，所以只需要关心其起点$x=a$，其终点$x=b$。\n\n-$L:y=g(x)$（$x$起于$x=a$终于$x=b$），$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\int_a^bP[x,g(x)]\\,\\textrm{d}x+Q[x,g(x)]g'(x)\\,\\textrm{d}x$。\n\n-$L:\\left\\{\\begin{array}{c}\n        x=\\phi(t) \\\\\n        y=\\psi(t)\n    \\end{array}\\right.$（$t$起于$\\alpha$终于$\\beta$），$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\\\\\int_\\alpha^\\beta P[\\phi(t),\\psi(t)]\\phi'(t)\\,\\textrm{d}t+Q[\\phi(t),\\psi(t)]\\psi'(t)\\textrm{d}t$。\n\n#### 二重积分法\n\n是考试的重点，基本上都会考到，非常重要。\n\n#### 背景\n \\leavevmode\n\n复平面上的一个区域$G$，如果在其中任做一条简单闭曲线，而闭曲线的内部总属于$G$，就称$G$为单连通区域。一个区域如果不是单连通区域，就称为多连通区域。即形象地说一块完整的凸图形即单连通，中间存在洞的或凹图形为多连通。\n\n对于单连通区域，边界的正方向为逆时针方向，对于多连通区域，外边界的正方向是逆时针，内边界的正方向是顺时针。\n\n在定积分中，使用牛顿-莱布尼茨公式，将$\\int_a^bf(x)\\,\\textrm{d}x=F(b)-F(a)$，即将代表$[a,b]$范围积分域的积分值变为代表两点边界差值的函数值。在二重积分中，积分区域为一个连通域，其面积的积分就是二重积分，其周长的积分就是曲线积分，那么是否有这么一种方法，将域的关系转换为边界的关系，即是否存在一种方法将二重积分和曲线积分联系起来。\n\n所以这个方法就是将曲线积分转换为二重积分，这个工具就是格林公式。\n\n#### 格林公式\n \\leavevmode\n\n条件：\n\n-$D$为连通区域，$L$为$D$的正向边界。（如果$D$不是个完整的区域则添加线段，如果$L$为反向边界则添加负号）\n\n-$P(x,y)$、$Q(x,y)$在$D$上连续可偏导。\n\n$\\displaystyle{\\oint\\limits_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\iint\\limits_D\\left(\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}\\right)\\textrm{d}\\sigma}$。\n\n#### 路径无关积分\n\n对于第二类曲线积分$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y$，其积分值可能与路径$L$相关，也可能与路径$L$无关。\n\n若$D$为单连通区域，$P(x,y)$、$Q(x,y)$在$D$上连续可偏导，以下命题等价：\n\n-$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y$与路径无关。\n\n-$\\forall C\\in D$（$C$为闭区域），$\\oint_CP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=0$。\n\n- 柯西黎曼条件：$\\dfrac{\\partial Q}{\\partial x}\\equiv\\dfrac{\\partial P}{\\partial y}$。（最合适）\n\n-$\\exists u(x,y)$，使得$\\textrm{d}u=P(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y$。即$\\dfrac{\\partial u}{\\partial x}=P(x,y)$，$\\dfrac{\\partial u}{\\partial y}=Q(x,y)$。\n\n则根据这些条件简化计算，若满足柯西黎曼条件：\n\n- 求曲线积分：$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\int_{(x_0,y_0)}^{(x_1,y_1)}P(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\int_{x_0}^{x_1}P(x,y_0)\\,\\textrm{d}x+\\int_{y_0}^{y_1}Q(x_1,y)\\,\\textrm{d}y$（先水平后垂直）。\n\n- 能找到$u$，求曲线积分：有$\\textrm{d}u=P(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y$，则$\\int_LP(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\int_{(x_0,y_0)}^{(x_1,y_1)}\\textrm{d}u=u(x_1,y_1)-u(x_0,y_0)$。\n\n- 求全微分对应$u$表达式：则$u(x,y)=\\int_{(x_0,y_0)}^{(x,y)}P(x,y)\\,\\textrm{d}x+Q(x,y)\\,\\textrm{d}y=\\int_{x_0}^xP(x,y_0)\\,\\textrm{d}x+\\int_{y_0}^yQ(x_1,y)\\,\\textrm{d}y$（先水平后垂直）。\n\n例题：已知$\\psi(x)$可导，$\\psi(0)=2$，$\\int_Lxy^2\\,\\textrm{d}x+\\psi(x)y\\,\\textrm{d}y$与路径无关，求$\\psi(x)$，并计算$I=\\int_{(1,2)}^{(2,3)}xy^2\\,\\textrm{d}x+\\psi(x)y\\,\\textrm{d}y$。\n\n解：已知$P=xy^2$，$y=\\psi(x)y$。由于曲线积分与路径无关，所以$\\dfrac{\\partial Q}{\\partial x}\\equiv\\dfrac{\\partial P}{\\partial y}$，所以$\\psi'(x)y\\equiv2xy$，$\\psi'(x)=2x$，$\\psi(x)=x^2+C$，又$\\psi(0)=2$，$C=2$，$\\psi(x)=x^2+2$。\n\n所以$I=\\int_{(1,2)}^{(2,3)}xy^2\\,\\textrm{d}x+(x^2+2)y\\,\\textrm{d}y$。\n\n方法一：$I=\\int_1^2x\\cdot2^2\\,\\textrm{d}x+\\int_2^3(2^2+2)y\\,\\textrm{d}y=2x^2\\vert_1^2+3y^2\\vert_2^3=6+15=21$。\n\n方法二：$I=\\int_{(1,2)}^{(2,3)}(xy^2\\,\\textrm{d}x+x^2y\\,\\textrm{d}y)+2y\\,\\textrm{d}y=\\int_{(1,2)}^{(2,3)}\\textrm{d}(\\dfrac{1}{2}x^2y^2+y^2)=(\\dfrac{1}{2}x^2y^2+y^2)|_{(1,2)}^{(2,3)}=27-6=21$。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s7-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#第二型曲面积分",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "第二型曲面积分",
  "kind": "总结",
  "text": "与第二型曲线积分一样，是有方向的。即对坐标曲面积分。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s7-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#概念",
  "subject": "gaoshu",
  "topic": "曲面积分",
  "title": "概念",
  "kind": "概念",
  "text": "#### 向量场的通量\n\n令一个不可压缩的向量场$\\vec{v}=\\{P,Q,R\\}$，向量场中有一个面$\\Sigma$，有不规则方向的流体流入或流出这个面，现在要求单位时间内流入指定侧的流量。\n\n取一块有侧的面$\\forall\\overrightarrow{\\textrm{d}s}\\in\\Sigma$，从$x$轴正方向部分将$\\overrightarrow{\\textrm{d}s}$向$yOz$面的投影记为$\\textrm{d}y\\textrm{d}z$。\n\n当$\\cos\\alpha\\geqslant0$即方向余弦非负的情况下，$\\textrm{d}y\\textrm{d}z=\\textrm{d}s_{yOz}$即就等于投影面积；当$\\cos\\alpha<0$即方向余弦为负的情况下，$\\textrm{d}y\\textrm{d}z=-\\textrm{d}s_{yOz}$即就等于负投影面积。实际上$\\textrm{d}y\\textrm{d}z=\\textrm{d}s\\cdot\\cos\\alpha$。同理其他两个方向也是如此。\n\n所以对$\\overrightarrow{\\textrm{d}s}$进行三轴投影，得到$\\overrightarrow{\\textrm{d}s}=\\{\\textrm{d}y\\textrm{d}z,\\textrm{d}z\\textrm{d}x,\\textrm{d}x\\textrm{d}y\\}$\n\n所以$\\overrightarrow{\\textrm{d}s}$单位时间内流入指定侧的流量$\\textrm{d}\\phi=\\vec{v}\\cdot\\overrightarrow{\\textrm{d}s}=P(x,y,z)\\textrm{d}y\\textrm{d}z+Q(x,y,z)\\textrm{d}z\\textrm{d}x+R(x,y,z)\\textrm{d}x\\textrm{d}y$。\n\n从而总流量为$\\iint_\\Sigma\\textrm{d}\\phi=\\iint_\\Sigma P(x,y,z)\\textrm{d}y\\textrm{d}z+Q(x,y,z)\\textrm{d}z\\textrm{d}x+R(x,y,z)\\textrm{d}x\\textrm{d}y$。\n\n#### 定义\n\n$\\iint_\\Sigma P(x,y,z)\\textrm{d}y\\textrm{d}z+Q(x,y,z)\\textrm{d}z\\textrm{d}x+R(x,y,z)\\textrm{d}x\\textrm{d}y$为在$\\Sigma$上的曲面积分。其中$\\iint_\\Sigma P(x,y,z)\\textrm{d}y\\textrm{d}z$为$P(x,y,z)$在有侧曲面$\\Sigma$上对坐标$y$、$z$的曲面积分。\n\n#### 性质\n\n-$\\iint_{\\Sigma^-}=-\\iint_\\Sigma$。\n\n-$\\iint_\\Sigma P(x,y,z)\\textrm{d}y\\textrm{d}z+Q(x,y,z)\\textrm{d}z\\textrm{d}x+R(x,y,z)\\textrm{d}x\\textrm{d}y=\\iint_\\Sigma P(x,y,z)\\cos\\alpha+Q(x,y,z)\\cos\\beta+R(x,y,z)\\cos\\gamma$。（曲面积分转为曲线积分）\n\n- 若积分曲面对称：被积函数关于相应变量为奇函数，积分为半区间的2倍；若为偶函数，则积分等于0。（与一般奇偶性正好相反）\n\n对于奇偶性的解释：因为是第二型的曲面积分，会分前后左右上下，分别代表正负，所以被积函数为偶函数时如果是相反方向，就正好被减去了（两个积的结果相同，方向相反，可以考虑磁通量一边进，一边出），奇函数两边想减因为方向不同，所以--为正相加，即为两倍。第一型曲面积分物理意义来源于对给定密度函数的空间曲面，计算该曲面的质量。第二型曲面积分物理意义来源对于给定的空间曲面和流体的流速，计算单位时间流经曲面的总流量。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s7-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#计算",
  "subject": "gaoshu",
  "topic": "高斯公式",
  "title": "计算",
  "kind": "方法",
  "text": "#### 二重积分法\n\n曲面积分的二重积分法较复杂。将积分化为不同面的投影。为什么会带一个正负号？因为前面的$\\textrm{d}x\\textrm{d}y\\textrm{d}z$表示投影，其值可正可负，而后面的$\\textrm{d}x\\textrm{d}y\\textrm{d}z$表示面积，必然为正。\n\n-$\\oiint_\\Sigma P(x,y,z)\\,\\textrm{d}y\\textrm{d}z$：用$yz$表示$x$：$\\Sigma:x=\\phi(y,z)$，$(y,z)\\in D_{yz}$，\n$\\iint_\\Sigma P(x,y,z)\\,\\textrm{d}y\\textrm{d}z=\\pm\\iint_{D_{yz}}P[\\phi(y,z),y,z]\\textrm{d}y\\textrm{d}z$。前正后负。\n\n-$\\oiint_\\Sigma Q(x,y,z)\\,\\textrm{d}z\\textrm{d}x$：用$xz$表示$y$：$\\Sigma:y=\\phi(z,x)$，$(z,x)\\in D_{zx}$，\n$\\iint_\\Sigma Q(x,y,z)\\,\\textrm{d}z\\textrm{d}x=\\pm\\iint_{D_{zx}}Q[x,\\phi(z,x),z]\\textrm{d}z\\textrm{d}x$。右正左负。\n\n-$\\oiint_\\Sigma R(x,y,z)\\,\\textrm{d}x\\textrm{d}y$：用$xy$表示$z$：$\\Sigma:z=\\phi(x,y)$，$(x,y)\\in D_{xy}$，\n$\\iint_\\Sigma R(x,y,z)\\,\\textrm{d}x\\textrm{d}y=\\pm\\iint_{D_{xy}}R[x,y,\\phi(x,y)]\\textrm{d}x\\textrm{d}y$。上正下负。\n\n#### 三重积分法\n\n是考试的重点，基本上都会考到。非常重要。\n\n#### 背景\n \\leavevmode\n\n牛顿莱布尼兹公式将定积分转换为函数值差，格林公式将曲线积分转换为二重积分，高斯公式就是将曲面积分转换为三重积分。\n\n#### 高斯公式\n \\leavevmode\n\n条件：\n\n-$\\Omega$为几何体，$\\Sigma$为$\\Omega$的外表面。（如果不封闭则补全，如果是内表面就添加负号）\n\n-$P(x,y,z)$、$Q(x,y,z)$、$R(x,y,z)$在$\\Omega$上连续可偏导。\n\n$\\displaystyle{\\oiint_\\Sigma P\\,\\textrm{d}y\\textrm{d}z+Q\\,\\textrm{d}z\\textrm{d}x+R\\,\\textrm{d}x\\textrm{d}y=\\iiint\\limits_\\Omega\\left(\\dfrac{\\partial P}{\\partial x}+\\dfrac{\\partial Q}{\\partial y}+\\dfrac{\\partial R}{\\partial z}\\right)\\textrm{d}v}$。\n\n例题：$I=\\iint_\\Sigma yz\\,\\textrm{d}z\\textrm{d}x+2\\,\\textrm{d}x\\textrm{d}y$，其中$\\Sigma$为$x^2+y^2+z^2=4$的$xOy$面的上半部分。\n\n解：由$I$可得$P=0$，$Q=yz$，$R=2$，$\\dfrac{\\partial P}{\\partial x}=0$，$\\dfrac{\\partial Q}{\\partial y}=z$，$\\dfrac{\\partial R}{\\partial z}=0$。\n\n由于$\\Sigma$只有球面的上半部分，所以需要补充底面$\\Sigma_0:y=0$（$x^2+y^2\\leqslant4$下侧），此时才是一个半球体的完整封闭表面积，$\\Sigma_0$的法向量为$z$轴的反方向。所以$I=\\oiint_{\\Sigma+\\Sigma_0}-\\iint_{\\Sigma_0}$。\n\n又根据高斯公式$\\oiint_{\\Sigma+\\Sigma_0}=\\iiint_\\Omega z\\,\\textrm{d}v=\\int_0^{2\\pi}\\textrm{d}\\theta\\int_0^{\\frac{\\pi}{2}}\\textrm{d}\\psi\\int_0^2r\\cos\\psi\\cdot r^2\\sin\\psi\\,\\textrm{d}r=2\\pi\\int_0^{\\frac{\\pi}{2}}\\sin\\psi\\,\\textrm{d}(\\sin\\psi)\\int_0^2r^3\\,\\textrm{d}r=2\\pi\\times\\dfrac{1}{2}\\sin^2\\psi\\vert_0^{\\frac{\\pi}{2}}\\times\\dfrac{r^4}{4}\\vert_0^2=4\\pi$。\n\n而底面$\\iint_{\\Sigma_0}yz\\,\\textrm{d}z\\textrm{d}x+2\\,\\textrm{d}x\\textrm{d}y=\\iint_{\\Sigma_0}2\\,\\textrm{d}x\\textrm{d}y=-2\\iint_{D_{xy}}\\textrm{d}x\\textrm{d}y=-8\\pi$。\n\n$I=4\\pi+8\\pi=12\\pi$。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-7-integral-calculus-of-multivariate-functions-integral-calculus-of-multivariate-functions-s8",
  "repo": "R08",
  "source": "advanced-math/knowledge/7-integral-calculus-of-multivariate-functions/integral-calculus-of-multivariate-functions.tex#空间第二型曲线积分计算",
  "subject": "gaoshu",
  "topic": "曲线积分",
  "title": "空间第二型曲线积分计算",
  "kind": "方法",
  "text": "是第二型曲线积分的应用。使用的是斯托克斯公式。",
  "relatedLessons": [
   "gs18"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#概念",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "概念",
  "kind": "概念",
  "text": "级数的经典悖论为芝诺悖论。\n\n#### 基本概念\n\n定义：给定义一个无穷数列$u_1,u_2,\\cdots,u_n,\\cdots$，将其各项用加号连起来的得到的记号$\\sum\\limits_{n=1}^\\infty u_n$，即$\\sum\\limits_{n=1}^\\infty u_n=u_1+u_2+\\cdots+u_n+\\cdots$叫做无穷级数，简称级数，其中$u_n$称为该级数的通项。\n\n若$u_n$是常数而不是函数，则$\\sum\\limits_{n=1}^\\infty u_n$就被称为常数项无穷级数，简称常数项级数。\n\n$S_n=u_1+u_2+\\cdots+u_n$称为级数的部分和，$\\{S_n\\}$是级数的部分和数量。\n\n定义：若$\\lim\\limits_{n\\to\\infty}S_n=S$，则$\\sum\\limits_{n=1}^\\infty u_n$收敛，并称$S$为该收敛级数$\\sum\\limits_{n=1}^\\infty u_n$的和；若$\\lim\\limits_{n\\to\\infty}S_n$不存在或为$\\pm\\infty$，则$\\sum\\limits_{n=1}^\\infty u_n$发散。\n\n研究$\\sum\\limits_{n=1}^\\infty u_n$收敛还是发散，就是研究级数$\\sum\\limits_{n=1}^\\infty u_n$的敛散性。\n\n在级数$\\sum\\limits_{n=1}^\\infty u_n$去掉前$m$项，得$\\sum\\limits_{n=m+1}^\\infty u_n=u_{m+1}+u_{m+2}+\\cdots$，称为级数$\\sum\\limits_{n=1}^\\infty u_n$的\\textbf{$m$项后余项}\n\n#### 性质\n\n- 线性性质：若级数$\\sum\\limits_{n=1}^\\infty u_n$，$\\sum\\limits_{n=1}^\\infty v_n$均收敛，且其和分别为$S$，$T$，则任给常数$a,b$，有$\\sum\\limits_{n=1}^\\infty(au_n+bv_n)$也收敛，且其和为$aS+bT$，即$\\sum\\limits_{n=1}^\\infty(au_n+bv_n)=a\\sum\\limits_{n=1}^\\infty u_n+b\\sum\\limits_{n=1}^\\infty v_n$。（收敛±发散=发散，发散±发散=不确定）\n\n- 若级数$\\sum\\limits_{n=1}^\\infty u_n$收敛，则其任意$m$项后余项$\\sum\\limits_{n=m+1}^\\infty u_n$也收敛；若存在$m$项后余项$\\sum\\limits_{n=m+1}^\\infty u_n$收敛，则$\\sum\\limits_{n=1}^\\infty u_n$也收敛。\n\n- 对收敛级数加括号仍然收敛，但是加括号收敛原级数不一定收敛。如果原级数加括号发散，则原级数发散。\n\n- 级数收敛必要条件：若级数$\\sum\\limits_{n=1}^\\infty u_n$收敛，则$\\lim\\limits_{n\\to\\infty}u_n=0$。\n\n证明性质三：$u_n=S_n-S_{n-1}$，所以$\\lim\\limits_{n\\to\\infty}=\\lim\\limits_{n\\to\\infty}(S_n-S_{n-1})=\\lim\\limits_{n\\to\\infty}S_n-\\lim\\limits_{n\\to\\infty}S_{n-1}=S-S=0$。极限为0不一定收敛。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#概念",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "概念",
  "kind": "概念",
  "text": "\\leavevmode\n\n定义：若通项$u_n\\geqslant0$，$n=1,2,\\cdots$，则$\\sum\\limits_{n=1}^\\infty u_n$为正项级数。\n\n所以和项一定是递增的，由数列极限的单调有界准则如果和有上界则极限存在。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#收敛原则",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "收敛原则",
  "kind": "定理",
  "text": "\\leavevmode\n\n定理：正项级数$\\sum\\limits_{n=1}^\\infty u_n$收敛的充要条件是其部分和数列$\\{S_n\\}$有界。（某一函数在固定区间内变化率是有界的，则变化范围是有界的）\n\n证明：必要性：由于$u_n\\geqslant0$，$\\therefore S_n=u_1+u_2+\\cdots+u_n\\geqslant0$，且$S_1\\leqslant S_2\\leqslant\\cdots\\leqslant S_n\\leqslant\\cdots$，$\\{S_n\\}$单调不减且下界为0。当$\\sum\\limits_{n=1}^\\infty u_n$收敛时，$\\lim\\limits_{n\\to\\infty}S_n$存在，则$\\{S_n\\}$必有上界。有上界下界则$\\{S_n\\}$有界。（某一函数在固定区间内变化率是有界的，则变化范围是有界的）\n\n充分性：由于$\\{S_n\\}$单调不减，所以根据单调有界准则，$\\{S_n\\}$收敛，即$\\lim\\limits_{n\\to\\infty}S_n$存在，于是$\\sum\\limits_{n=1}^\\infty u_n$收敛。\n\n基本就是使用放缩法判断是否有界。\n\n例题：判断级数$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{\\sqrt{n}}$的敛散性。\n\n解：$S_n=1+\\dfrac{1}{\\sqrt{2}}+\\dfrac{1}{\\sqrt{3}}+\\cdots+\\dfrac{1}{\\sqrt{n}}>n\\dfrac{1}{\\sqrt{n}}=\\sqrt{n}$，当$n\\to\\infty$时$\\sqrt{n}\\to\\infty$，无上界所以发散。\n\n由于收敛原则很多时候都不能方便使用，所以出现了以下几种解决方法。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#比较判别法",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "比较判别法",
  "kind": "定理",
  "text": "\\leavevmode\n\n定理：给出两个正项级数$\\sum\\limits_{n=1}^\\infty u_n$，$\\sum\\limits_{n=1}^\\infty v_n$，若从某项开始有$u_n\\leqslant v_n$成立，则：①若$\\sum\\limits_{n=1}^\\infty v_n$收敛，则$\\sum\\limits_{n=1}^\\infty u_n$也收敛；②若$\\sum\\limits_{n=1}^\\infty u_n$发散，则$\\sum\\limits_{n=1}^\\infty v_n$也发散。\n\n即大的收敛小的也收敛，小的发散大的也发散。\n\n例题：判断调和级数$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{n}$的敛散性。\n\n解：$\\because x>0$，$x>\\ln(1+x)$，$\\therefore\\dfrac{1}{n}>\\ln\\left(1+\\dfrac{1}{n}\\right)$。\n\n又对于$\\ln\\left(1+\\dfrac{1}{n}\\right)=\\ln\\dfrac{n+1}{n}=\\ln(n+1)-\\ln n$。\n\n$S_n=\\ln\\dfrac{2}{1}+\\ln\\dfrac{3}{2}+\\cdots+\\ln\\dfrac{n+1}{n}=\\ln2-\\ln1+\\ln3-\\ln2+\\cdots+\\ln(n+1)-\\ln n=\\ln(n+1)$。当$\\ln(n+1)$在$n\\to\\infty$时，$S_n\\to\\infty$。\n\n所以$\\sum\\limits_{n=1}^\\infty\\ln\\left(1+\\dfrac{1}{n}\\right)$发散，则$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{n}$也发散。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-5",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#比较判别法极限性质",
  "subject": "gaoshu",
  "topic": "函数极限与连续",
  "title": "比较判别法极限性质",
  "kind": "定理",
  "text": "\\leavevmode\n\n是比较判别法的推论，利用极限的阶数来比较。\n\n给出两个正项级数$\\sum\\limits_{n=1}^\\infty u_n$，$\\sum\\limits_{n=1}^\\infty v_n$，$v_n\\neq0$，且$\\lim\\limits_{n\\to\\infty}\\dfrac{u_n}{v_n}=A$：\n\n- 若$A=0$，则当$\\sum\\limits_{n=1}^\\infty v_n$收敛时，$\\sum\\limits_{n=1}^\\infty u_n$也收敛。\n\n- 当$A=+\\infty$，当$\\sum\\limits_{n=1}^\\infty v_n$发散时，$\\sum\\limits_{n=1}^\\infty u_n$也发散。\n\n- 若$0<A<+\\infty$，则$\\sum\\limits_{n=1}^\\infty v_n$与$\\sum\\limits_{n=1}^\\infty u_n$具有相同敛散性。\n\n例题：判断$\\sum\\limits_{n=1}^\\infty\\left(\\dfrac{1}{n}-\\sin\\dfrac{1}{n}\\right)$敛散性。\n\n解：令$\\dfrac{1}{n}=x$，$n\\to\\infty$所以$x\\to0^+$。当$x\\to0^+$，$x-\\sin x\\sim\\dfrac{1}{6}x^3$。\n\n$\\therefore\\lim\\limits_{n\\to\\infty}\\dfrac{\\dfrac{1}{n}-\\sin\\dfrac{1}{n}}{\\dfrac{1}{n^3}}=\\dfrac{1}{6}\\neq0$，所以$\\dfrac{1}{n}-\\sin\\dfrac{1}{n}$与$\\dfrac{1}{n^3}$具有相同敛散性。\n\n根据$p$级数定理，$p=3>1$，所以$\\sum\\limits_{n=1}^\\infty\\left(\\dfrac{1}{n}-\\sin\\dfrac{1}{n}\\right)$收敛。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-6",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#比值判别法",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "比值判别法",
  "kind": "定理",
  "text": "\\leavevmode\n\n也称为达朗贝尔判别法。由等比级数推断出部分级数的敛散性只与自己的参数有关，根据自己的通项的商进行比较。\n\n定理：给出一正项级数$\\sum\\limits_{n=1}^\\infty u_n$，若$\\lim\\limits_{n\\to\\infty}\\dfrac{u_{n+1}}{u_n}=\\rho$，则：①若$\\rho<1$，则$\\sum\\limits_{n=1}^\\infty u_n$收敛；②若$\\rho>1$，则$\\sum\\limits_{n=1}^\\infty u_n$发散。\n\n注意：$\\rho=1$时无法根据此判断$\\sum\\limits_{n=1}^\\infty u_n$敛散性，如$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{n}$发散，但$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{n^2}$收敛。\n\n例题：判断级数$\\sum\\limits_{n=1}^\\infty\\dfrac{\\vert a\\vert^nn!}{n^n}$的敛散性，其中$a$为非零常数。\n\n解：记$u_n=\\dfrac{\\vert a\\vert^nn!}{n^n}$，$\\lim\\limits_{n\\to\\infty}\\dfrac{u_{n+1}}{u_n}=\\vert a\\vert\\lim\\limits_{n\\to\\infty}\\left(\\dfrac{n}{n+1}\\right)^n=\\vert a\\vert e^{\\lim\\limits_{n\\to\\infty}n\\ln\\frac{n}{n+1}}=\\vert a\\vert e^{\\lim\\limits_{n\\to\\infty}n(\\frac{n}{n+1}-1)}=\\vert a\\vert e^{\\lim\\limits_{n\\to\\infty}(\\frac{-n}{n+1}-1)}=\\vert a\\vert e^{-1}=\\dfrac{\\vert a\\vert}{e}$。\n\n若$0<\\vert a\\vert<e$，所以收敛；若$\\vert a\\vert>e$，所以发散；若$\\vert a\\vert=e$，则回代得到比值$e\\left(\\dfrac{n}{n+1}\\right)^n=\\dfrac{e}{(1+\\dfrac{1}{n})^n}\\to1^+$，且$u_1=e$，$\\therefore u_n>u_1>0$，所以发散。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-7",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#根值判别法",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "根值判别法",
  "kind": "定理",
  "text": "\\leavevmode\n\n也称为柯西判别法。由比值判别法类比而来。\n\n定理：给出正项级数$\\sum\\limits_{n=1}^\\infty u_n$，若$\\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}=\\rho$，则①若$\\rho<1$，则$\\sum\\limits_{n=1}^\\infty u_n$收敛；若$\\rho>1$，则$\\sum\\limits_{n=1}^\\infty u_n$发散。\n\n同理$\\rho=1$也会失效。\n\n例题：判断级数$\\sum\\limits_{n=1}^\\infty\\left(n\\sin\\dfrac{1}{n}\\right)^{n^3}$的敛散性。\n\n解：记$u=\\left(n\\sin\\dfrac{1}{n}\\right)^{n^3}$，则$\\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}=\\lim\\limits_{n\\to\\infty}\\left(n\\sin\\dfrac{1}{n}\\right)^{n^2}=e^{\\lim\\limits_{n\\to\\infty}n^(n\\sin\\frac{1}{n}-1)}=e^{\\lim\\limits_{n\\to\\infty}\\dfrac{\\sin\\frac{1}{n}-\\frac{1}{n}}{\\frac{1}{n^3}}}=e^{-\\frac{1}{6}}<1$，所以收敛。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-8",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#积分判别法",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "积分判别法",
  "kind": "定理",
  "text": "\\leavevmode\n\n定理：设$f(x)$是在$[1,+\\infty)$上单调递减且非负的连续函数，$a_n=f(n)$，则$\\sum\\limits_{n=1}^\\infty a_n$与$\\int_1^{+\\infty}f(x)\\,\\textrm{d}x$同敛散。\n\n例题：证明$p$级数$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{n^p}$当$p>1$的敛散性。\n\n证明：令$f(x)=\\dfrac{1}{x^p}$，又$\\int_1^{+\\infty}\\dfrac{\\textrm{d}x}{x^p}$在$p>1$收敛，在$p\\leqslant1$发散，所以得到原级数敛散性。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-10",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#概念",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "概念",
  "kind": "概念",
  "text": "\\leavevmode\n\n定义：若级数各项正负相间出现，则这样的级数是交错级数，一般写为$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n=u_1-u_2+u_3-u_4+\\cdots+(-1)^{n-1}u_n+\\cdots$，其中$u_n>0$。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-11",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#莱布尼兹判别法",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "莱布尼兹判别法",
  "kind": "定理",
  "text": "\\leavevmode\n\n定义：给出一交错级数$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n$，$u_n>0$，$n=1,2,\\cdots$，若$\\{u_n\\}$单调不增$u_n\\geqslant u_{n+1}$且$\\lim\\limits_{n\\to\\infty}=0$，则该级数收敛。反过来则不行。\n\n如$\\sum\\limits_{n=1}^\\infty\\dfrac{(-1)^{n-1}}{2^{n+(-1)^n}}$收敛，但是里面的$u_n$并不递减，由根值判别法加绝对值可知$u_n$为不递减。\n\n例题：判断交错调和级数$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}\\dfrac{1}{n}$的敛散性。\n\n解：$\\because\\lim\\limits_{n\\to\\infty}u_n=\\lim\\limits_{n\\to\\infty}\\dfrac{1}{n}=0$。\n\n且$\\dfrac{1}{n}>\\dfrac{1}{n+1}$，所以级数收敛。\n\n例题：判断级数$\\sum\\limits_{n=1}^\\infty\\sin(\\pi\\sqrt{n^2+a^2})$的敛散性，其中$a$为非零常数。\n\n解：$\\because\\sin(\\alpha+n\\pi)=(-1)^n\\sin\\alpha$。$\\therefore\\sin(\\pi\\sqrt{n^2+a^2})=$\n\n$\\sin(\\pi\\sqrt{n^2+a^2-n\\pi+n\\pi})=(-1)^n\\sin\\left(\\dfrac{a^2\\pi}{\\sqrt{n^2+a^2}+n}\\right)$。\n\n记$u_n=\\sin\\left(\\dfrac{a^2\\pi}{\\sqrt{n^2+a^2}+n}\\right)$，又$n\\to\\infty$时$\\dfrac{a^2\\pi}{\\sqrt{n^2+a^2}+n}\\to0^+$且单调不增，$\\sin x$在$x\\to0^+$时也是单调函数，所以$\\lim\\limits_{n\\to\\infty}u_n=0$且单调不增。\n\n所以收敛。\n\n例题：判断级数$\\sum\\limits_{n=1}^\\infty(-1)^n\\dfrac{\\ln(1+n)}{1+n})$的敛散性。\n\n解：$\\lim\\limits_{n\\to\\infty}u_n=\\lim\\limits_{n\\to\\infty}\\dfrac{\\ln(1+n)}{1+n}=\\lim\\limits_{x\\to+\\infty}\\dfrac{\\ln(1+x)}{1+x}=\\lim\\limits_{x\\to+\\infty}\\dfrac{1}{1+x}=0$。\n\n对$\\dfrac{\\ln(1+n)}{1+n})$进行比较有些麻烦，所以令$f(x)=\\dfrac{\\ln(1+x)}{1+x})$。\n\n$f'(x)=\\dfrac{1-\\ln(1+x)}{(1+x)^2}$，当$x\\to+\\infty$时，$f'(x)<0$，$\\{u_n\\}$单调减少，所以收敛。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-13",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#概念",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "概念",
  "kind": "概念",
  "text": "\\leavevmode\n\n定义：若级数$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n$各项可为正可为负，可为零，则这种级数就是任意项级数。\n\n给任意项级数每一项加上绝对值$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}\\vert u_n\\vert$，就得到了正项级数，称为原级数的绝对值级数。\n\n添加绝对值会提高发散性，因为不改变逼近0的速度，而让各项之间不能抵消为0。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-14",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#绝对收敛",
  "subject": "gaoshu",
  "topic": "无穷级数",
  "title": "绝对收敛",
  "kind": "概念",
  "text": "\\leavevmode\n\n定义：设$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n$为任意项级数，若$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}\\vert u_n\\vert$收敛，则称$\\sum\\limits_{n=1}^\\infty$\n$(-1)^{n-1}u_n$绝对收敛。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s1-2-15",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#条件收敛",
  "subject": "gaoshu",
  "topic": "常数项级数",
  "title": "条件收敛",
  "kind": "定理",
  "text": "\\leavevmode\n\n定义：设$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n$为任意项级数，若$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n$收敛，但$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}$\n$\\vert u_n\\vert$发散，则称$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n$条件收敛。\n\n定理：若$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}\\vert u_n\\vert$收敛，则$\\sum\\limits_{n=1}^\\infty(-1)^{n-1}u_n$必收敛。（绝对收敛则收敛）\n\n定理：收敛级数的项任意加括号后所得的新级数仍收敛，且其和不变。\n\n定理：若原级数绝对收敛，不论将其项如何排列，则所得的新级数也收敛，且其和不变。（绝对收敛的级数具有可交换性）\n\n定理：条件收敛的级数的所有正项（或负项）构成的级数一定发散。\n\n定理：$\\sum\\limits_{n=1}^\\infty\\vert a_n\\vert$收敛，则$\\sum\\limits_{n=1}^\\infty a_n^2$收敛。（$b_n$收敛则不能得到）\n\n例题：若级数$\\sum\\limits_{n=1}^\\infty u_n$收敛，则下面级数必收敛的是()。\n\n$A.\\sum\\limits_{n=1}^\\infty(-1)\\dfrac{u_n}{n}$$B.\\sum\\limits_{n=1}^\\infty u_n^2$$C.\\sum\\limits_{n=1}^\\infty(u_{2n-1}-u_{2n})$$D.\\sum\\limits_{n=1}^\\infty(u_n+u_{n+1})$\n\n解：对于$A$，取$u_n=(-1)^n\\dfrac{1}{\\ln n}$，则原来$\\dfrac{u_n}{n}=(-1)^n\\dfrac{1}{\\ln n}$收敛，但是乘上$(-1)^n$就不一定收敛，得到$\\dfrac{1}{n\\ln n}$。\n\n定理：广义$p$级数：$\\sum\\limits_{n=2}^\\infty\\dfrac{1}{n(\\ln n)^p}\\left\\{\\begin{array}{l}\n    p>1, \\text{收敛} \\\\\n    p\\leqslant1, \\text{发散}\n\\end{array}\\right.$。（$n=1$无意义，从$n=2$开始不影响其敛散性）\n\n所以$A$发散。\n\n对于$B$，取$u_n=(-1)^n\\dfrac{1}{\\sqrt{n}}$，则$u_n^2=\\dfrac{1}{n}$，调和级数不收敛。\n\n对于$C$，取$u_n=(-1)^{n-1}\\dfrac{1}{n}$，则得到$u_{2n-1}-u_{2n}=\\dfrac{1}{n}$，调和级数不收敛。\n\n对于$D$，由于$u_n$收敛，则$u_{n+1}$也收敛，所以相加也收敛，选$D$。\n\n定理：若$u_n^2$收敛，则$\\dfrac{u_n}{n}$绝对收敛。\n\n证明：因为不等式$\\vert a\\vert\\vert b\\vert\\leqslant\\dfrac{\\vert a\\vert^2+\\vert b\\vert^2}{2}$，$\\therefore0\\leqslant\\vert u_n\\dfrac{1}{n}\\vert\\leqslant\\dfrac{u_n^2+\\dfrac{1}{n^2}}{2}$。\n\n且$u_n^2$收敛，则$\\dfrac{u_n^2+\\dfrac{1}{n^2}}{2}$也收敛，根据性质得证。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s2-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#概念",
  "subject": "gaoshu",
  "topic": "幂级数",
  "title": "概念",
  "kind": "概念",
  "text": "#### 定义\n\n定义：设函数列$\\{u_n(x)\\}$定义在区间$I$上，称$u_1(x)+u_2(x)+\\cdots+u_n(x)+\\cdots$为定义在区间$I$上的函数项级数，记为$\\sum\\limits_{n=1}^\\infty u_n(x)$，当$x$取确定的值$x_0$时，$\\sum\\limits_{n=1}^\\infty$成为常数项级数$\\lim\\limits_{n=1}^\\infty u_n(x_0)$。\n\n定义：若$\\sum\\limits_{n=1}^\\infty u_0(x)$的一般项$u_0(x)$为$n$次幂函数，则称$\\sum\\limits_{n=1}^\\infty u_0(x)$为幂级数，是一种常用的函数项级数，一般形式为$\\sum\\limits_{n=0}^\\infty a_n(x-x_0)^n=a_0+a_1(x-x_0)+a_2(x-x_0)^2+\\cdots+a_n(x-x_0)^n+\\cdots$，其标准形式为$\\sum\\limits_{n=0}^\\infty a_nx^n=a_0+a_1x+a_2x^2+\\cdots+a_nx^x+\\cdots$，其中$a_n$（$n=0,1,2,\\cdot$）为幂级数的系数。\n\n幂级数也称为泰勒级数，与泰勒展开式一样的结构。\n\n定义：若给定$x_0\\in I$，有$\\sum\\limits_{n=1}^\\infty u_0(x)$收敛，则称点$x_0$为幂级数$\\sum\\limits_{n=1}^\\infty u_0(x)$的收敛点；若给定$x_0\\in I$，有$\\sum\\limits_{n=1}^\\infty u_0(x)$发散，则点$x_0$为幂级数$\\sum\\limits_{n=1}^\\infty u_0(x)$的发散点。\n\n#### 阿贝尔定理\n\n定义：当幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$在点$x=x_1$（$x_1\\neq0$）处收敛时，对于满足$\\vert x\\vert<\\vert x_1\\vert$的一切$x$，幂级数绝对收敛；当幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$在$x=x_2$（$x_2\\neq0$）处发散时，对于满足$\\vert x\\vert>\\vert x_2\\vert$的一切$x$，幂级数发散。\n\n所以一定存在一个点$R$，在$\\vert x\\vert<\\vert R\\vert$中绝对收敛，在$\\vert x\\vert>\\vert R\\vert$中发散，$R$称为收敛半径。对于点$\\pm R$需要代入幂级数变成常数项级数进行计算，判别其敛散性。\n\n#### 收敛域\n\n定义：函数项级数$\\sum\\limits_{n=1}^\\infty u_0(x)$的所有收敛点的集合就是其收敛域。\n\n#### 具体型\n \\leavevmode\n\n收敛域的求法：\n\n- 若$\\lim\\limits_{n\\to\\infty}\\left\\vert\\dfrac{a_{n+1}}{a_n}\\right\\vert$或$\\lim\\limits_{n\\to\\infty}\\sqrt[n]{\\vert a_n\\vert}=\\rho$，则收敛半径$R=\\left\\{\\begin{array}{ll}\n        \\dfrac{1}{\\rho}, & \\rho\\neq0 \\\\\n        +\\infty, & \\rho=0 \\\\\n        0, & \\rho=+\\infty\n    \\end{array}\\right.$。\n\n- 开区间$(-R,R)$为幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$的收敛区间。\n\n- 代入$R$判断该点的敛散性，最后组合得到收敛域。\n\n但是这种方法有一点不方便，如若只知道$a_n$和$a_{n+2}$的关系则求$\\rho=\\dfrac{1}{R}$比较麻烦。\n\n收敛域的统一求法：\n\n- 取绝对值$\\vert u_0(x)\\vert\\geqslant0$，从而可以使用正项级数的判别法。\n\n- 根据比值判别法或根值判别法，求$\\lim\\limits_{n\\to\\infty}\\dfrac{\\vert u_{n+1}(x)\\vert}{\\vert u_n(x)\\vert}=\\rho$或$\\lim\\limits_{n\\to\\infty}\\sqrt[n]{\\vert u_n(x)\\vert}=\\rho$，令其小于1，得到收敛区间$x\\in(a,b)$。\n\n- 单独讨论$x=a$，$x=b$处的敛散性，得到收敛域。\n\n定理：若幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$在点$x=x_0$处条件收敛，则点$x_0$在幂级数收敛区间的端点上。\n\n例题：求幂级数$\\sum\\limits_{n=1}^\\infty\\dfrac{x^n}{n}$的收敛域。\n\n解：令$\\vert u_n(x)\\vert=\\left\\vert\\dfrac{x^n}{n}\\right\\vert$。由于含有$x^n$，所以使用比值判别法。\n\n$\\therefore\\lim\\limits_{n\\to\\infty}\\dfrac{\\vert u_{n+1}(x)\\vert}{\\vert u_n(x)\\vert}=\\lim\\limits_{x\\to\\infty}\\dfrac{\\vert x^{n+1}\\vert}{n+1}\\dfrac{n}{\\vert x^n\\vert}=\\lim\\limits_{n\\to\\infty}\\dfrac{n}{n+1}\\vert x\\vert=\\vert x\\vert$。\n\n令其小于1，即$\\vert x\\vert<1$，$-1<x<1$。\n\n当$x=-1$时，$\\sum\\limits_{n=1}^\\infty(-1)^\\dfrac{1}{n}$收敛。当$x=1$，$\\sum\\limits_{n=1}^\\infty\\dfrac{1}{n}$发散。\n\n所以$x$收敛域为$[-1,1)$。\n\n#### 抽象型\n \\leavevmode\n\n定理：根据阿贝尔定理，已知$\\lim\\limits_{n=0}^\\infty a_0(x-x_0)^n$在某点$x_1$（$x_1\\neq x_0$）的敛散性，确定该幂级数的收敛半径可分为三种情况：\n\n- 若在$x_1$处收敛，则收敛半径$R\\geqslant\\vert x_1-x_0\\vert$。\n\n- 若在$x_1$处发散，则收敛半径$R\\leqslant\\vert x_1-x_0\\vert$。\n\n- 注意：若在$x_1$处条件收敛，则$R=\\vert x_1-x_0\\vert$。\n\n定理：已知$\\sum a_n(x-x_1)^n$的敛散性，讨论$\\sum b_n(x-x_2)^m$的敛散性：\n\n-$(x-x_1)^n$与$(x-x_2)^m$的转换一般通过初等变形来完成，包括①平移收敛区间；②提出或乘以因式$(x-x_0)^k$等。\n\n-$a_n$与$b_n$的转换一般通过微积分变形来完成，包括①对级数逐项求导；②对级数逐项积分等。\n\n- 以下三种情况，级数收敛半径不变，收敛域要具体代入点讨论：\n\n- 对级数提出或乘以因式$(x-x_0)^k$或进行平移等，收敛半径不变。\n\n- 对级数逐项求导，收敛半径不变，收敛域可能缩小。\n\n- 对级数逐项积分，收敛半径不变，收敛域可能扩大。\n\n收敛域的扩大和缩小在于其端点是否通过求导或积分变得可取了。\n\n例题：设$\\sum\\limits_{n=1}^\\infty a_n(x+1)^n$在点$x=1$处条件收敛，则幂级数$\\sum\\limits_{n=1}^\\infty na_n(x-1)^n$在点$x=2$处()。\n\n$A.$绝对收敛$B.$条件收敛$C.$发散$D.$敛散性不确定\n\n解：$\\sum\\limits_{n=1}^\\infty a_n(x+1)^n=\\sum\\limits_{n=1}^\\infty a_n(x-(-1))^n$，所以$x_0=-1$。\n\n又$x=1$处条件收敛，所以$R=1-(-1)=2$。从而$\\sum\\limits_{n=1}^\\infty a_n(x+1)^n$的收敛区间为$(-3,1)$。\n\n$\\sum\\limits_{n=1}^\\infty a_n(x+1)^n$要转换为$\\sum\\limits_{n=1}^\\infty na_n(x-1)^n$，则首先中心点要从-1移动到1，$a_n(x+1)^n\\to a_n(x-1)^n$，由于平移不改变收敛半径，所以$a_n(x-1)^n$收敛区间为$(1,3)$。\n\n然后要将$a_n(x-1)^n$变为$na_n(x-1)^n$，需要进行求导得到$na_n(x-1)^{n-1}$，求导收敛半径不变，所以收敛区间依然为$(1,3)$。最后还要乘上$(x-1)$得到$na_n(x-1)^n$就是所求，收敛区间依然为$(1,3)$。\n\n而在$x=2$在收敛区间内，必然绝对收敛，所以选$A$。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s2-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#函数展开为幂级数",
  "subject": "gaoshu",
  "topic": "幂级数",
  "title": "函数展开为幂级数",
  "kind": "定理",
  "text": "#### 概念\n\n定义：若函数$f(x)$在$x=x_0$处存在任意阶导数，则称$f(x_0)+f'(x_0)(x-x_0)+\\dfrac{f''(x_0)}{2!}(x-x_0)^2+\\cdots+\\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n+\\cdots$为函数$f(x)$在$x_0$处的泰勒级数，则$f(x)=\\sum\\limits_{n=0}^\\infty\\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n$。\n\n当$x_0=0$时，称$f(0)+f'(0)x+\\dfrac{f''(0)}{2!}x^2+\\cdots+\\dfrac{f^{(n)}(0)}{n!}x^n+\\cdots$为函数$f(x)$的麦克劳林级数，若收敛，则$f(x)=\\sum\\limits_{n=0}^\\infty\\dfrac{f^{(n)}(0)}{n!}x^n$。\n\n都是函数展开成幂级数。\n\n定理：已知$f(x)$在$x=x_0$处任意阶可导，则$\\sum\\limits_{n=0}^\\infty\\dfrac{f^{(n)}(x_0)}{n!}(x-x_0)^n$在$(x_0-R,x_0+R)$上收敛于$f(x)$与$\\lim\\limits_{n\\to\\infty}R_n(x)=0$等价。其中$R_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1}$在$f(x)$在$x_0$处的泰勒公式$f(x)=\\sum\\limits_{k=0}^n\\dfrac{f^{(n)}(x_0)}{k!}(x-x_0)^k+R_n(x)$中的余项。\n\n#### 重要展开式\n\n$x$的取值指其幂指数的收敛域和$x$定义域的交集。第七个幂函数问题较复杂，收敛区间与$\\alpha$取值有关。\n\n-$e^x=\\sum\\limits_{n=0}^\\infty\\dfrac{x^n}{n!}=1+x+\\dfrac{x^2}{2!}+\\dfrac{x^n}{n!}+\\cdots$，$-\\infty<x<+\\infty$。\n\n-$\\dfrac{1}{1+x}=\\sum\\limits_{n=0}^\\infty(-1)^nx^n=1-x+x^2-x^3+\\cdots+(-1)^nx^n+\\cdots$，$-1<x<1$。\n\n-$\\dfrac{1}{1-x}=\\sum\\limits_{n=0}^\\infty x^n=1+x+x^2+\\cdots+x^n+\\cdots$，$-1<x<1$。\n\n-$\\ln(1+x)=\\sum\\limits_{n=1}^\\infty(-1)^{n-1}\\dfrac{x^n}{n}=x-\\dfrac{x^2}{2}+\\dfrac{x^3}{3}+\\cdots+(-1)^{n-1}\\dfrac{x^n}{n}+\\cdots$，$-1<x\\leqslant1$。\n\n-$\\sin x=\\sum\\limits_{n=0}^\\infty(-1)^n\\dfrac{x^{2x+1}}{(2n+1)!}=x-\\dfrac{x^3}{3!}+\\dfrac{x^5}{5!}+(-1)^n\\dfrac{x^{2n+1}}{(2n+1)!}+\\cdots$，$-\\infty<x<+\\infty$。\n\n-$\\cos x=\\sum\\limits_{n=0}^\\infty(-1)^n\\dfrac{x^{2n}}{(2n)!}=1-\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}+(-1)^n\\dfrac{x^{2n}}{(2n)!}+\\cdots$，$-\\infty<x<+\\infty$。\n\n-$(1+x)^\\alpha=1+\\alpha x+\\dfrac{\\alpha(\\alpha-1)}{2!}x^2+\\cdots+\\dfrac{a(a-1)\\cdots(a-n+1)}{n!}x^n+\\cdots$，$\\left\\{\\begin{array}{l}\n        x\\in(-1,1),\\text{当}\\alpha\\leqslant-1 \\\\\n        x\\in(-1,1],\\text{当}-1<\\alpha<0 \\\\\n        x\\in[-1,1],\\text{当}\\alpha>0\n    \\end{array}\\right.$。\n\n其中第1、3、5都是直接的公式，其他公式是根据其推出的。\n\n#### 求法\n\n#### 直接法\n \\leavevmode\n\n逐个计算$a_n=\\dfrac{f^{(n)}(x_0)}{n!}$并代入，但是一般很麻烦。\n\n#### 间接法\n \\leavevmode\n\n利用已知的七个幂级数展开式，通过变量代换、四则运算、逐项求导、逐项积分和待定系数等得到。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s2-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#幂级数求和函数",
  "subject": "gaoshu",
  "topic": "幂级数",
  "title": "幂级数求和函数",
  "kind": "定理",
  "text": "即函数展开的逆操作。\n\n#### 概念\n\n定义：在收敛域上，记$S(x)=\\sum\\limits_{n=1}^\\infty u_n(x)$，并称$S(x)$为$\\sum\\limits_{n=1}^\\infty u_n(x)$的和函数。\n\n#### 运算法则\n\n若幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$与$\\sum\\limits_{n=0}^\\infty b_nx^n$的收敛半径分别为$R_a$和$R_b$（$R_a\\neq R_b$），则：\n\n-$k\\sum\\limits_{n=0}^\\infty a_nx^n=\\sum\\limits_{n=0}^\\infty ka_nx^n$，$\\vert x\\vert<R$，$k$为常数。\n\n-$\\sum\\limits_{n=0}^\\infty a_nx^n\\pm\\sum\\limits_{n=0}^\\infty b_nx^n=\\sum\\limits_{n=0}^\\infty (a_n\\pm b_n)x^n$，$\\vert x\\vert<R=\\min\\{R_a,R_b\\}$。\n\n-$(\\sum\\limits_{n=0}^\\infty a_nx^n)\\cdot(\\sum\\limits_{n=0}^\\infty b_nx^n)=\\sum\\limits_{n=0}^\\infty(a_0b_n+a_1b_{n-1}+\\cdots+a_nb)x^n$。\n\n实际运算中，可能运算法则要求的起始$n$值不同，$a_nb_n$不为不包含$x$的常数，$x^n$的幂次不同，恒等变形方法如下：\n\n- 通项，下标一起变化：$\\sum\\limits_{n=k}^\\infty a_nx^n=\\sum\\limits_{n=k+l}^\\infty a_{n-l}x^{n-l}$，其中$l$为整数。\n\n- 只变下标，只变通项：$\\sum\\limits_{n=0}^\\infty a_nx^n=a_kx^k+a_{k+1}x^{k+1}+\\cdots+a_{k+l-1}x^{k+l-1}+\\sum\\limits_{n=k+l}^\\infty a_nx^n$。\n\n- 只变通项，不变下标：$\\sum\\limits_{n=0}^\\infty a_nx^n=x^l\\sum\\limits_{n=0}^\\infty a_nx^{n-l}$。\n\n如$\\sum\\limits_{n=0}^\\infty a_nx^{2n}+\\sum\\limits_{n=0}^\\infty b_{n+1}x^{2n+2}=\\sum\\limits_{n=0}^\\infty a_nx^{2n}+\\sum\\limits_{n=1}^\\infty b_nx^{2n}=a_0+\\sum\\limits_{n=1}^\\infty a_nx^{2n}+\\sum\\limits_{n=1}^\\infty b_nx^{2n}=a_0+\\sum\\limits_{n=0}^\\infty(a_n+b_n)x^{2n}$。\n\n#### 性质\n\n- 幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$的和函数$S(n)$在其收敛区间$I$上连续，且如果幂级数在收敛区间的端点$x=\\pm R$处收敛，则和函数$S(x)$在$(-R,R]$或$[-R,R)$上连续。\n\n- 幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$的和函数$S(x)$在其收敛域$I$上可积，且有逐项积分公式$\\int_0^xS(t)\\,\\textrm{d}t=\\int_0^x(\\sum\\limits_{n=0}^\\infty a_nt^n)\\,\\textrm{d}t=\\sum\\limits_{n=0}^\\infty a_n\\int_0^xt^n\\,\\textrm{d}t=\\sum\\limits_{n=0}^\\infty\\dfrac{a_n}{n+1}x^{n+1}$（$x\\in I$），逐项积分后得到的幂级数和原级数有相同收敛半径，但是收敛域可能扩大。（逐项可积性）\n\n- 幂级数$\\sum\\limits_{n=0}^\\infty a_nx^n$的和函数$S(x)$在其收敛区间$(-R,R)$内可导，且有逐项求导公式$S'(x)=(\\sum\\limits_{n=0}^\\infty a_nx^n)'=\\sum\\limits_{n=0}^\\infty(a_nx^n)'=\\sum\\limits_{n=1}^\\infty na_nx^{n-1}$（$\\vert x\\vert<R$），逐项求导后得到的幂级数和原级数有相同收敛半径，但是收敛域可能缩小。（逐项可导性）（为什么求和函数后从$n=1$开始？因为0开始的是常数，求导为0）",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#概念",
  "subject": "gaoshu",
  "topic": "无穷级数",
  "title": "概念",
  "kind": "概念",
  "text": "#### * 三角级数\n\n周期函数可以由一个序列的正弦型函数叠加得到，即周期函数图形可以由一个序列的正弦型曲线合成。\n\n即$f(x)=A_0+\\sum\\limits_{n=1}^\\infty A_n\\sin(n\\omega t+\\varphi_n)$，这个级数就是三角级数。\n\n#### 三角函数族\n\n$\\{1,\\sin nx,\\cos nx\\}$（$n\\in N*$）称为三角函数族，在$[-\\pi,\\pi]$区间上积分具有正交性：\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi1\\cdot\\cos nx\\,\\textrm{d}x}=\\dfrac{\\sin nx}{n}\\bigg\\vert_{-\\pi}^\\pi=0$。\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi1\\cdot\\sin nx\\,\\textrm{d}x}=\\dfrac{\\cos nx}{n}\\bigg\\vert_{-\\pi}^\\pi=0$。\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi\\cos nx\\cdot\\sin nx\\,\\textrm{d}x=\\dfrac{1}{2}\\int_{-\\pi}^\\pi[\\sin(m+n)x+\\sin(m-n)x]\\textrm{d}x}=0$。\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi\\cos nx\\cdot\\cos nx\\,\\textrm{d}x=\\dfrac{1}{2}\\int_{-\\pi}^\\pi[\\cos(m+n)x+\\cos(n-m)x]\\textrm{d}x}=0$（$m\\neq n$）。\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi\\sin nx\\cdot\\sin nx\\,\\textrm{d}x=\\dfrac{1}{2}\\int_{-\\pi}^\\pi[\\cos(n-m)x-\\cos(m+n)x]\\textrm{d}x}=0$（$m\\neq n$）。\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi1^2\\,\\textrm{d}x=2\\pi}$。\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi\\cos^2nx\\textrm{d}x=\\pi}$。\n\n-$\\displaystyle{\\int_{-\\pi}^\\pi\\sin^2nx\\textrm{d}x=\\pi}$。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#周期傅里叶级数",
  "subject": "gaoshu",
  "topic": "傅里叶级数",
  "title": "周期傅里叶级数",
  "kind": "定理",
  "text": "对于周期为$2\\pi$的函数$f(x)$，是否可以被展开为$S(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty(a_n\\cos nx+b\\sin nx)$三角级数的形式？其系数为多少？定义域是多少？\n\n迪利克雷充分条件（迪利克雷收敛定理）定义：设$f(x)$是以$2\\pi$为周期的周期函数，若满足：\n\n-$f(x)$在$[-\\pi,\\pi]$上连续或只有有限个第一类间断点。\n\n-$f(x)$在$[-\\pi,\\pi]$上至多只有有限个真正的极值点。\n\n则$f(x)$可以被展开成$f(x)\\sim S(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty(a_n\\cos nx+b_n\\sin nx)$，即$f(x)$在$[-\\pi,\\pi]$上的傅里叶级数。\n\n利用积分和三角函数族计算得到系数，$a_n$、$b_n$称为傅里叶系数：\n\n$a_0=\\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\,\\textrm{d}x$，$a_n=\\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\cos nx\\,\\textrm{d}x$，$b_n=\\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\sin nx\\,\\textrm{d}x$。\n\n当$x$为连续点时，傅里叶级数$S(x)=f(x)$，当$x$为第一类间断点时，傅里叶级数$S(x)=\\dfrac{f(x-0)+f(x+0)}{2}$，即两端左右极限的平均值。\n\n所以要注意原函数和其傅里叶级数并不是处处相等。\n\n例题：设以$2\\pi$为周期的$f(x)$在$[-\\pi,\\pi]$上的表达式为$\\left\\{\\begin{array}{ll}\n    0, & -\\pi\\leqslant x<0 \\\\\n    x, & 0\\leqslant x<\\pi\n\\end{array}\\right.$，对其傅里叶展开。\n\n解：首先作图，可以看出$(2k+1)\\pi$为$f(x)$间断点，$k\\in z$。\n\n然后计算系数，$a_0=\\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\,\\textrm{d}x=\\dfrac{1}{\\pi}\\int_0^\\pi x\\,\\textrm{d}x=\\dfrac{\\pi}{2}$。\n\n$a_n=\\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\cos nx\\,\\textrm{d}x=\\dfrac{1}{\\pi}\\int_0^\\pi x\\cos nx\\,\\textrm{d}x=\\dfrac{1}{n\\pi}x\\sin nx\\vert_0^\\pi-\\dfrac{1}{n^2\\pi}\\cos nx\\vert_0^\\pi\\\\=\\dfrac{(-1)^n-1}{n^2\\pi}$，当$n=2k-1$时，等于$-\\dfrac{2}{n^2\\pi}$，当$n=2k$时，等于0，$k\\in z$。\n\n同理$b_n=\\dfrac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\sin nx\\,\\textrm{d}x=\\dfrac{(-1)^{n+1}}{n}$。\n\n所以带入傅里叶系数：\n\n$f(x)\\sim\\dfrac{\\pi}{4}+\\left(-\\dfrac{2}{\\pi}\\cdot\\cos x+\\sin x\\right)-\\dfrac{1}{2}\\sin2x+\\left(-\\dfrac{2}{\\pi}\\cdot\\dfrac{1}{9}\\cos3x+\\dfrac{1}{3}\\sin3x\\right)+\\cdots$。\n\n$x\\in R$且$x\\neq(2k+1)\\pi$，$k\\in z$。\n\n$x=(2k+1)\\pi$，$k\\in z$时，$S(x)=\\dfrac{\\pi}{2}$。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s3-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#非周期傅里叶级数",
  "subject": "gaoshu",
  "topic": "傅里叶级数",
  "title": "非周期傅里叶级数",
  "kind": "概念",
  "text": "\\subsubsection{\\texorpdfstring{$[-\\pi,\\pi]$}n}\n\n假使$f(x)$只定义于$[-\\pi,\\pi]$，则首先画图$f(x)$的图像，然后将$f(x)$拓展为周期函数$F(x)$，将$F(x)$展开为傅里叶级数，然后判断两端端点是否包含，如果$F(x)$中两端端点连接起来就包括$f(x)$区间端点，否则不包括。\n\n例题：将$f(x)=\\vert x\\vert$（$-\\pi\\leqslant x\\leqslant\\pi$）展开为傅里叶级数。\n\n第一步周期延拓为$F(x)$，画出$F(x)$的图像。\n\n计算傅里叶系数，$a_0=\\pi$；$a_n=\\dfrac{2}{n^2\\pi}[(-1)^n-1]$，当$n$为偶数，$a_n=0$，当$n$为奇数，$a_n=-\\dfrac{4}{n^2\\pi}$；$b_n=0$。\n\n所以$\\vert x\\vert=\\dfrac{\\pi}{2}-\\dfrac{4}{\\pi}(\\cos x+\\dfrac{1}{9}\\cos3x+\\dfrac{1}{25}\\cos5x+\\cdots)$（$-\\pi\\leqslant x\\leqslant\\pi$，因为拓展后两端连接在一起）\n\n注意：根据最后的答案可以得出$\\sum\\limits_{n=0}^\\infty\\dfrac{1}{(2n+1)^2}=\\dfrac{\\pi^2}{8}$、$\\sum\\limits_{n=0}^\\infty\\dfrac{1}{n^2}=\\dfrac{\\pi^2}{6}$。\n\n\\subsubsection{\\texorpdfstring{$[0,\\pi]$}n}\n\n- 区间延拓（在原区域的$y$轴对称区间上进行延拓，延拓方式有奇延拓和偶延拓两种方式），周期延拓。\n\n- 求傅里叶系数。\n\n- 奇延拓：$a_0=a_n=0$，$b_n=\\dfrac{2}{\\pi}\\int_0^\\pi f(x)\\sin nx\\,\\textrm{d}x$，$f(x)=\\sum\\limits_{n=1}^\\infty b_n\\sin nx$。（正弦级数）\n\n- 偶延拓：$a_0=\\dfrac{2}{\\pi}\\int_0^\\pi f(x)\\,\\textrm{d}x$，$a_n=\\dfrac{2}{\\pi}\\int_0^\\pi f(x)\\cos nx\\,\\textrm{d}x$，$b_n=0$，$f(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty a_n\\cos nx$。（余弦级数）\n\n例题：将$f(x)=x$（$0\\leqslant x\\leqslant\\pi$）进行傅里叶展开。\n\n解：\n\n对$f(x)$进行偶延拓变为余弦级数：\n\n画出图像，然后计算系数：$a_0=\\dfrac{2}{\\pi}\\int_0^\\pi x\\,\\textrm{d}x=\\pi$，$a_n=\\dfrac{2}{\\pi}\\int_0^\\pi x\\cos nx\\,\\textrm{d}x=\\dfrac{2}{n^2\\pi}[(-1)^n-1]$，当$n$为偶数为0，为奇数则$=-\\dfrac{4}{n^2\\pi}$。\n\n$x=\\dfrac{\\pi}{2}-\\dfrac{4}{\\pi}\\left(\\cos x+\\dfrac{1}{9}\\cos3x+\\dfrac{1}{25}\\cos5x\\cdots\\right)$，$0\\leqslant x\\leqslant\\pi$。（两端都连接上）\n\n对$f(x)$进行奇延拓变为余弦级数：\n\n画出图像，然后计算系数：$a_0=a_n=0$，$b_n=\\dfrac{2}{\\pi}\\int_0^\\pi x\\sin nx\\,\\textrm{d}x=\\dfrac{2(-1)^{n+1}}{n}$。\n\n$x=\\dfrac{2(-1)^{n+1}}{n}\\sin nx$。（$0\\leqslant x<\\pi$）（$\\pi$没有连接上）",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-8-infinite-series-infinite-series-s3-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/8-infinite-series/infinite-series.tex#任意区间傅里叶级数",
  "subject": "gaoshu",
  "topic": "傅里叶级数",
  "title": "任意区间傅里叶级数",
  "kind": "概念",
  "text": "定义：将正弦函数$A_n\\sin(n\\omega t+\\varphi_n)$按三角公式变形得到$A_n\\sin\\varphi_n\\cos n\\omega t+A_n\\cos\\varphi_n\\sin n\\omega t$，令$\\dfrac{a_0}{2}=A_0$，$a_n=A\\sin\\varphi_n$，$b_n=A_n\\cos\\varphi_n$，$\\omega=\\dfrac{\\pi}{l}$，则$\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty\\left(a_n\\cos\\dfrac{n\\pi t}{l}+b_n\\sin\\dfrac{n\\pi t}{l}\\right)$。\n\n则$f(x)$的傅里叶级数处处收敛，记起和函数为$S(x)$，有$S(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty\\left(a_n\\cos\\dfrac{n\\pi}{l}x+b_n\\sin\\dfrac{n\\pi}{l}x\\right)$。\n\n$\\displaystyle{a_n=\\dfrac{1}{l}\\int_{-l}^lf(x)\\cos\\dfrac{n\\pi}{l}x\\,\\textrm{d}x}$，$\\displaystyle{b_n=\\dfrac{1}{l}\\int_{-l}^lf(x)\\sin\\dfrac{n\\pi}{l}x\\,\\textrm{d}x}$，$n=1,2,\\cdots$。\n\n其中三角函数也可以展开为幂级数，所以最后都能通过幂级数展开。\n\n例题：将$f(x)=1-x^2$（$-\\pi\\leqslant x\\leqslant\\pi$）展开为傅里叶级数。\n\n解：$S(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty\\left(a_n\\cos\\dfrac{n\\pi}{l}x+b_n\\sin\\dfrac{n\\pi}{l}x\\right)$。\n\n其中$a_0=\\dfrac{1}{\\pi}\\int\\limits_{-\\pi}^\\pi(1-x^2)\\,\\textrm{d}x=\\dfrac{2}{\\pi}\\int\\limits_0^\\pi(1-x^2)\\,\\textrm{d}x=2-\\dfrac{2}{3}\\pi^2$。\n\n$a_n=\\dfrac{1}{\\pi}\\int\\limits_{-\\pi}^\\pi(1-x^2)\\cos nx\\,\\textrm{d}x=\\dfrac{2}{\\pi}(\\int\\limits_0^\\pi\\cos nx\\,\\textrm{d}x-\\int\\limits_0^\\pi x^2\\cos nx\\,\\textrm{d}x)=\\dfrac{4}{n^2}(-1)^{n+1}$。\n\n$b_n=\\dfrac{1}{\\pi}\\int\\limits_{-\\pi}^\\pi(1-x^2)\\sin nx\\,\\textrm{d}x=0$（奇函数乘偶函数为奇函数，且上下限对称）\n\n$f(x)\\sim S(x)=1-\\dfrac{\\pi^2}{3}+\\sum\\limits_{n=1}^\\infty\\dfrac{4}{n^2}(-1)^{n+1}\\cos nx$。\n\n定义：当$f(x)$是偶函数，则$\\sin$被消去，$f(x)\\sim S(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty a_n\\cos\\dfrac{n\\pi}{l}x$，称为余弦级数。\n\n定义：当$f(x)$是奇函数，则$\\cos$被消去，$f(x)\\sim S(x)=\\dfrac{a_0}{2}+\\sum\\limits_{n=1}^\\infty b_n\\sin\\dfrac{n\\pi}{l}x$，称为正弦级数。\n\n若$f(x)$因为定义区间不对称导致无奇偶性，则补充定义域，使其称为奇偶函数。",
  "relatedLessons": [
   "gs16"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s0",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#微分方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "微分方程",
  "kind": "总结",
  "text": "本节内容较少。\n\n若一曲线过点$(1,2)$，且该曲线上任一点$M\\,(x,y)$处的切线的斜率为$2x$，求该曲线的方程。\n\n令所求曲线为$\\varphi(x)$，$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=2x$，且$x=1$时，$y=2$。\n\n两边积分：$\\int\\textrm{d}y=y=\\int2x\\,\\textrm{d}x$。所以$y=x^2+C$。\n\n代入$(1,2)$，$C=1$，所以$y=x^2+1$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s1-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#微分方程构成",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "微分方程构成",
  "kind": "概念",
  "text": "定义：表示未知函数、未知函数的导数与自变量之间的关系的方程，即含导数的方程就是微分方程。导数可能是一阶导数也可能是二阶以及以上阶数的导数。\n\n常微分方程定义：未知函数是一元函数的微分方程。如$y'''-y''+6y=0$，$y\\,\\textrm{d}x-(x+\\sqrt{x^2+y^2})\\,\\textrm{d}y=0$。\n\n定义：微分方程所出现的未知函数的最高阶导数的阶数就是该微分方程的阶。\n\n$n$阶微分方程的形式是$F(x,y,y',\\cdots,y^{(n)})=0$。其中最高阶导数是必须出现的。若能从中解出最高阶导数，则可得微分方程$y^{(n)}=f(x,y,y',\\cdots,y^{(n-1)})$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s1-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#微分方程的解",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "微分方程的解",
  "kind": "概念",
  "text": "微分方程的解是函数。\n\n定义：若微分方程中的解中含有任意常数，且任意常数的个数与微分方程的阶数相同，则就是微分方程的通解。\n\n如若$y''=3$，则$y'=3x+C_1$，$y=\\dfrac{3}{2}x^2+C_1x+C_2$，此时含有两个任意常数$C_1C_2$，则微分方程的阶数也为2。\n\n定义：确定通解中任意常数后，就得到微分方程的特解。\n\n定义：当给出$x=x_0$时$y_0$与$y_0'$的值，那么这些条件就是初值条件，如上面的$y''=3$。\n\n求微分方程$y'=f(x,y)$满足初值条件$y\\vert_{x=x_0}=y_0$的特解这样的问题，就是一阶微分方程的初值问题，记为$\\left\\{\\begin{array}{l}\n    y'=f(x,y) \\\\\n    y\\vert_{x=x_0}=y_0\n\\end{array}\n\\right.$。\n\n微分方程的解的图形是一条曲线，叫做微分方程的积分曲线，初值问题的集几何意义就是求微分方程的通过某点的积分曲线。\n\n例题：判断函数$x=C_1\\cos kt+C_2\\sin kt$是否是微分方程$\\dfrac{\\textrm{d}^2x}{\\textrm{d}t^2}+k^2x=0$的解，若是则令其为$k\\neq0$时方程的通解，求满足初值条件$x\\vert_{t=0}=A$，$\\dfrac{\\textrm{d}x}{\\textrm{d}t}\\bigg\\vert_{t=0}=0$时的特解。\n\n解：判断是否为方程的解，就要将这个解代入微分方程中。微分方程中除了$x$，还出现了$x''$，所以需要先将$x$对$t$求两次导：\n\n$x'=-kC_1\\sin kt+kC_2\\cos kt$，$x''=-k^2C_1\\sin kt-k^2C_2\\sin kt$。代入方程：\n\n$-k^2(C_1\\sin kt+C_2\\sin kt)+k^2(C_1\\cos kt+C_2\\sin kt)\\equiv0$，所以是解，然后求特解：\n\n代入$x\\vert_{t=0}=A$，$\\therefore C_1=A$，代入$\\dfrac{\\textrm{d}x}{\\textrm{d}t}\\bigg\\vert_{t=0}=0$，$\\therefore C_2=0$。\n\n所以代入$x=C_1\\cos kt+C_2\\sin kt$得到特解：$x=A\\cos kt$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s2",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#可分离变量的微分方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "可分离变量的微分方程",
  "kind": "概念",
  "text": "对于第一节的$\\textrm{d}y=2x\\,\\textrm{d}x$可以直接求解，如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=2x$直接移项就可以得到通解$x^2+C$。\n\n但是并不是所有都是如此，如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=2xy^2$求积分得$y=\\int2xy^2\\,\\textrm{d}x$，这本身不能直接解，但是可以将$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=2xy^2$先两边同乘$\\dfrac{\\textrm{d}x}{y^2}$得到$\\dfrac{\\textrm{d}y}{y^2}=2x\\textrm{d}x$，将$xy$分离在两端，然后两边同时积分得到$-\\dfrac{1}{y}=x^2+C$，所以$y=-\\dfrac{1}{x^2+C}$。\n\n定义：形如$y'=f(x)g(y)$的方程就是变量可分离型方程。\n\n可以变型为$\\dfrac{\\textrm{d}y}{g(y)}=f(x)\\textrm{d}x$，即将含$y$的放在一边，含$x$的放在另一边。然后对两边求积分就得到$\\displaystyle{\\int\\dfrac{\\textrm{d}y}{g(y)}=\\int f(x)\\textrm{d}x}$，解得隐式解或隐式通解$G(y)=F(x)+C$。最后可以将隐式解化为显式解。\n\n例题：求微分方程$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=2xy$。\n\n解：$\\displaystyle{\\int\\dfrac{\\textrm{d}y}{y}}=\\int2x\\,\\textrm{d}x$，$\\ln\\vert y\\vert=x^2+C$，$\\vert y\\vert=e^{x^2+C}$。\n\n$\\therefore y=\\pm e^{x^2}e^C=\\pm C_1e^{x^2}=C_2e^{x^2}$。\n\n注意：在微分方程部分可以直接$\\ln y=x^2+C$而不用管正负号，其$C$的正负号由取指后左边式子决定，如果左边为正数如$\\sqrt{u}$的形式则$C$也为正数，而这个式子左边为$y$，所以为任意常数。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s3-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#多项式换元",
  "subject": "gaoshu",
  "topic": "多项式换元",
  "title": "多项式换元",
  "kind": "总结",
  "text": "形如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=f(ax+by+c)$的方程，其中$a,b,c$全不为0。\n\n令$u=ax+by+c$，则$\\dfrac{\\textrm{d}u}{\\text{d}x}=a+b\\dfrac{\\textrm{d}y}{\\textrm{d}x}$，代入原方程$\\dfrac{\\textrm{d}u}{\\textrm{d}x}=a+bf(u)$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s3-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#自然齐次方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "自然齐次方程",
  "kind": "总结",
  "text": "若一阶微分方程可化为$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\varphi\\left(\\dfrac{y}{x}\\right)$，则这方程就是一个齐次方程。\n\n也可能出现$\\dfrac{\\textrm{d}x}{\\textrm{d}y}=\\varphi\\left(\\dfrac{x}{y}\\right)$。\n\n令$u=\\dfrac{y}{x}$，则$y=ux$变为$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=u+x\\dfrac{\\textrm{d}u}{\\textrm{d}x}$（$u$不是一个常数而是一个关于$x$的函数，所以$\\dfrac{\\textrm{d}y}{\\textrm{d}x}\\neq u$），从而原方程变为$x\\dfrac{\\textrm{d}u}{\\textrm{d}x}+u=\\varphi(u)$，即$\\dfrac{\\textrm{d}u}{\\varphi(u)-u}=\\dfrac{\\textrm{d}x}{x}$。\n\n如$(xy-y^2)\\textrm{d}x-(x^2-2xy)\\textrm{d}y=0$可以化为$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{xy-y^2}{x^2-2xy}$，即$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{\\dfrac{y}{x}-\\left(\\dfrac{y}{x}\\right)^2}{1-2\\left(\\dfrac{y}{x}\\right)}$。\n\n解决齐次方程问题的过程：令$u=\\dfrac{y}{x}$；$y=xu$；$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=u+x\\dfrac{\\textrm{d}u}{\\textrm{d}x}$。\n\n代入微分方程：$u+x\\dfrac{\\textrm{d}u}{\\textrm{d}x}=\\varphi(u)$，$\\therefore x\\dfrac{\\textrm{d}u}{\\textrm{d}x}=\\varphi(u)-u$，分离变量：$\\dfrac{\\textrm{d}u}{\\varphi(u)-u}=\\dfrac{\\textrm{d}x}{x}$，求积分$\\displaystyle{\\int\\dfrac{\\textrm{d}u}{\\varphi(u)-u}=\\int\\dfrac{\\textrm{d}x}{x}}$。最后求出积分再用$\\dfrac{y}{x}$替代$u$。\n\n若是方程可以变为齐次方程，则$x$和$y$的幂应该是对称的，可以尝试除以一个$x^a$来变为$\\dfrac{y^a}{x^a}$形式。\n\n例题：求$y^2+x^2\\dfrac{\\textrm{d}y}{\\textrm{d}x}=xy\\dfrac{\\textrm{d}y}{\\textrm{d}x}$。\n\n解：得到$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{y^2}{xy-x^2}$。\n\n然后将这个等式化为$\\dfrac{y}{x}$的形式，分子分母同时除以$x^2$：$\\dfrac{\\dfrac{y^2}{x^2}}{\\dfrac{xy-x^2}{x^2}}=\\dfrac{\\left(\\dfrac{y}{x}\\right)^2}{\\dfrac{y}{x}-1}$。\n\n从而到第三步：$u+x\\dfrac{\\textrm{d}u}{\\textrm{d}x}=\\dfrac{u^2}{u-1}$，$\\therefore x\\dfrac{\\textrm{d}u}{\\textrm{d}x}=\\dfrac{u^2}{u-1}-u=\\dfrac{u}{u-1}$。\n\n$\\therefore\\dfrac{u-1}{u}\\textrm{d}u=\\dfrac{\\textrm{d}x}{x}$，$\\therefore\\displaystyle{\\int\\dfrac{u-1}{u}\\textrm{d}u=\\int\\dfrac{\\textrm{d}x}{x}}$，$u-\\ln u=\\ln x+C$，$\\ln xu=u+C$。\n\n代入$u=\\dfrac{y}{x}$，得到$\\ln y=\\dfrac{y}{x}+C$，所以得到$y=Ce^{\\frac{y}{x}}$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s3-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#可化为齐次方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "可化为齐次方程",
  "kind": "总结",
  "text": "对于自然齐次方程，其形式如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{A_1x+B_1y}{A_2x+B_2y}$，则可以除以$x$得到齐次方程。\n\n而对于形式如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{A_1x+B_1y+C_1}{A_2x+B_2y+C_2}$，则因为有常数项，所以不能直接除以$x$。\n\n所以想尝试消去常数项。令$x=X+h$，$y=Y+k$。\n\n$\\therefore\\dfrac{\\textrm{d}Y}{\\textrm{d}X}=\\dfrac{A_1X+B_1Y+A_1h+B_1k+C_1}{A_2X+B_2Y+A_2h+B_2k+C_2}$，当取一个合适的$h$和$k$时常数项$A_1h+B_1k+C_1=A_2h+B_2k+C_2=0$，从而能化为齐次方程。\n\n若$\\dfrac{A_2}{A_1}\\neq\\dfrac{B_2}{B_1}$，则可以解得：\n\n$\\left\\{\\begin{array}{l}\n    k=\\dfrac{A_1C_2-A_2C_1}{A_2B_1-A_1B_2} \\\\  \n    h=\\dfrac{A_1B_1C_2-A_2B_1C_1+A_1A_2B_1C_1-A_1^2B_2C_1}{A_1^2B_2-A_1A_2B_1}\n\\end{array}\n\\right.$.\n\n若$\\dfrac{A_2}{A_1}=\\dfrac{B_2}{B_1}$，即关系式对应成比例。\n\n令$\\dfrac{A_2}{A_1}=\\dfrac{B_2}{B_1}=\\lambda$，$\\therefore\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{A_1x+B_1y+C_1}{\\lambda(A_1x+B_1y)+C_2}$。\n\n又令$A_1x+B_1y=v$，$\\therefore\\dfrac{\\textrm{d}v}{\\textrm{d}x}=A_1+B_1\\,\\dfrac{\\textrm{d}y}{\\textrm{d}x}$，$\\dfrac{\\textrm{d}v}{\\textrm{d}x}=A_1+B_1\\dfrac{v+C_1}{\\lambda v+C_2}$\n\n$=\\dfrac{(A_1\\lambda+B_1)v+A_1C_2+B_1C_1}{\\lambda v+C_2}$。此时未知数只有$v$，所以可以按照可分离变量来处理。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s4-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#线性方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "线性方程",
  "kind": "总结",
  "text": "形如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}+P(x)y=Q(x)$就是一阶线性方程。因为其对未知函数$y$与其导数都是一次方程。\n\n若$Q(x)\\equiv 0$，则是一阶齐次线性微分方程，可化为$\\dfrac{\\textrm{d}y}{y}=-P(x)\\,\\textrm{d}x$，$\\ln y=\\int P(x)\\,\\textrm{d}x+C'$，$y=e^{-\\int P(x)\\,\\textrm{d}x}\\cdot e^{C'}$，$y=Ce^{-\\int P(x)\\,\\textrm{d}x}$。\n\n若$Q(x)\\neq 0$，则是一阶非齐次线性微分方程，令$y=C(x)e^{-\\int P(x)\\,\\textrm{d}x}$，$C(x)$为关于$x$的具体函数，这是常数变易法。\n\n代入$\\dfrac{\\textrm{d}y}{\\textrm{d}x}+P(x)y=Q(x)$，得到$C(x)'e^{-\\int P(x)\\,\\textrm{d}x}-C(x)e^{-\\int P(x)\\,\\textrm{d}x}P(x)+P(x)C(x)e^{-\\int P(x)\\,\\textrm{d}x}=Q(x)$，$C(x)'e^{-\\int P(x)\\,\\textrm{d}x}=Q(x)$，从而得到$C(x)'$，再对$C(x)'$积分得到$C(x)=\\displaystyle{\\int Q(x)e^{\\int P(x)\\,\\textrm{d}x}\\,\\textrm{d}x}+C$。从而代入$y=C(x)e^{-\\int P(x)\\,\\textrm{d}x}$，得到定理：$y=e^{-\\int P(x)\\,\\textrm{d}x}(\\int Q(x)e^{\\int P(x)\\,\\textrm{d}x}\\,\\textrm{d}x+C)$。非齐次通解就是其齐次通解加上一个非齐次的特解。\n\n例题：求$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{1}{x+y}$。\n\n解：不能直接做，因为不能分离出$y$。\n\n可以两边求倒数：$\\dfrac{\\textrm{d}x}{\\textrm{d}y}-x=y$，颠倒$xy$，得到$\\dfrac{\\textrm{d}y}{\\textrm{d}x}-y=x$。就可以按照公式来求。\n\n或令$x+y=u$，所以$y=u-x$，$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{\\textrm{d}u}{\\textrm{d}x}-1$，$\\dfrac{\\textrm{d}u}{\\textrm{d}x}=\\dfrac{1+u}{u}$，$\\dfrac{u}{1+u}\\textrm{d}u=\\textrm{d}x$。\n\n定理：一阶线性方程时，$\\displaystyle{\\int\\dfrac{1}{x}\\textrm{d}x}=\\ln\\vert x\\vert=\\ln x$。\n\n证明：令$p=\\dfrac{1}{x}$，$\\int p\\,\\textrm{d}x=\\displaystyle{\\int\\dfrac{1}{x}\\textrm{d}x}=\\ln\\vert x\\vert$。\n\n根据公式$y=e^{-\\ln\\vert x\\vert}(\\int e^{\\ln\\vert x\\vert}Q(x)\\,\\textrm{d}x+C)=\\dfrac{1}{\\vert x\\vert}(\\int\\vert x\\vert Q(x)\\,\\textrm{d}x+C)=\\dfrac{1}{\\pm x}$\n$(\\int(\\pm x)Q(x)\\,\\textrm{d}x+C)=\\dfrac{1}{x}(\\int xQ(x)\\,\\textrm{d}x\\pm C)=\\dfrac{1}{x}(\\int xQ(x)\\,\\textrm{d}x+D)$。\n\n同理$\\ln y=\\ln f(x)$，则$y=Cf(x)$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s4-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#伯努利方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "伯努利方程",
  "kind": "定理",
  "text": "形如$\\dfrac{\\textrm{d}y}{\\textrm{d}x}+P(x)y=Q(x)y^n$就是伯努利方程。若$y=1$则是可分离变量方程，若$y=0$则是一阶线性方程。\n\n变形：$y^{-n}\\dfrac{\\textrm{d}y}{\\textrm{d}x}+P(x)y^{1-n}=Q(x)$，又令$y^{1-n}=z$，$\\dfrac{\\textrm{d}z}{\\textrm{d}x}=(1-n)y^{-n}\\dfrac{\\textrm{d}y}{\\textrm{d}x}$，从而$\\dfrac{1}{1-n}\\dfrac{\\textrm{d}z}{\\textrm{d}x}=y^{-n}\\dfrac{\\textrm{d}y}{\\textrm{d}x}$，代入$\\dfrac{\\textrm{d}y}{\\textrm{d}x}+P(x)y=Q(x)y^n$得到$\\dfrac{1}{1-n}\\dfrac{\\textrm{d}z}{\\textrm{d}x}+P(x)z=Q(x)$，从而$\\dfrac{\\textrm{d}z}{\\textrm{d}x}=(1-n)P(x)z=(1-n)Q(x)$，将$(1-n)P(x)$当作$P(x)$，$(1-n)Q(x)$当中$Q(x)$代入得到$z$的关系式，再利用上面线性方程的公式求$y$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s5",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#可降阶的高阶微分方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "可降阶的高阶微分方程",
  "kind": "例题",
  "text": "高阶微分方程即含二阶以及二阶以上的微分方程，需要将其降为一阶微分方程。\n\n\\subsection{\\texorpdfstring{$y^{(n)}=f(x)$}\\ 型}\n\n右边是只包含$x$的函数。\n\n直接对函数不断求积分就可以了。连续积分$n$次，会得到一个含有$n$个任意常数的通解。这种方程没有特定出题考的意义。\n\n例题：求$y'''=e^{2x}-\\cos x$。\n\n解：$y''=\\dfrac{1}{2}e^{2x}-\\sin x+C_1$，$y'=\\dfrac{1}{4}e^{2x}+\\cos x+C_1x+C_2$，$y=\\dfrac{1}{8}e^{2x}+\\sin x+\\dfrac{1}{2}C_1x^2+C_2x+C_3$。\n\n\\subsection{\\texorpdfstring{$y''=f(x,y')$}\\ 型}\n\n即存在$y''$，$y'$和$x$但是没有$y$。\n\n所以令$y'=p$，$y''=p'$，代入：$p'=f(x,p)$，代入$p=\\varphi(x,C_1)$，所以$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\varphi(x,C_1)$，对其积分：$y=\\int\\varphi(x,C_1)\\,\\textrm{d}x+C_2$。\n\n例题：求$(1+x^2)y''=2xy'$，满足初值条件$y\\vert_{x=0}=1$，$y'\\vert_{x=0}=3$的特解。\n\n解：令$y'=p$，$y''=p'$，所以$(1+x^2)p'=2xp$。\n\n$\\dfrac{\\textrm{d}p}{p}=\\dfrac{2x}{1+x^2}\\textrm{d}x$，$\\ln p=\\ln(1+x^2)+C'$，$p=C(1+x^2)$，所以$y'=3(1+x^2)$，$y=x^3+3x+1$。\n\n\\subsection{\\texorpdfstring{$y''=f(y,y')$}\\ 型}\n\n即存在$y''$，$y'$和$y$但是没有$x$。\n\n所以令$y'=p$，$y''=p'=\\dfrac{\\textrm{d}p}{\\textrm{d}x}=\\dfrac{\\textrm{d}p}{\\textrm{d}y}\\cdot\\dfrac{\\textrm{d}y}{\\textrm{d}x}=p\\dfrac{\\textrm{d}p}{\\textrm{d}y}=f(y,p)$。\n\n设其通解为$y'=p=\\varphi(y,C_1)$。\n\n分离变量并积分，得到通解为$\\displaystyle{\\int\\dfrac{\\textrm{d}y}{\\varphi(y,C_1)}=x+C_2}$。\n\n例题：求微分方程$yy''-y'^2=0$的通解。\n\n解：令$y'=p$，$y''=p\\dfrac{\\textrm{d}p}{\\textrm{d}y}$，代入$yp\\dfrac{\\textrm{d}p}{\\textrm{d}y}-p^2=0$。\n\n若$p\\neq0$，$y\\neq0$，则$yp\\dfrac{\\textrm{d}p}{\\textrm{d}y}$，$\\dfrac{\\textrm{d}p}{p}=\\dfrac{\\textrm{d}y}{y}$，$p=Cy$。\n\n若$p=0$，则$y'=0$，则$y$是一个常数。\n\n所以综上$y=C_2e^{C_1y}$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s6-0",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#高阶线性微分方程",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "高阶线性微分方程",
  "kind": "总结",
  "text": "第一部分是一阶微分方程，分为可分离变量微分方程、齐次微分方程、一阶齐次线性微分方程、一阶非齐次线性微分方程。\n\n第二部分是可降阶的高阶微分方程，是残缺项的高阶微分方程，分为三种。\n\n第三部分就是本节的高阶线性微分方程，$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=0$就是$n$阶齐次线性微分方程，$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=f(x)$就是$n$阶非齐次线性微分方程",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s6-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#概念",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "概念",
  "kind": "概念",
  "text": "定义：方程$y''+P(x)y'+Q(x)y=f(x)$称为二阶变系数线性微分方程，其中$P(x)$，$Q(x)$为系数函数，$f(x)$为自由项，都是已知的连续方程。\n\n当$f(x)\\equiv0$时，$y''+P(x)y'+Q(x)y=0$为齐次方程。\n\n当$f(x)$不恒为0时，$y''+P(x)y'+Q(x)y=f(x)$为非齐次方程。\n\n定义：方程$y''+py'+qy=f(x)$称为二阶常系数线性微分方程，其中$p$，$q$为常数，$f(x)$为自由项，都是已知的连续方程。\n\n当$f(x)\\equiv0$时，$y''+py'+qy=0$为齐次方程。\n\n当$f(x)$不恒为0时，$y''+py'+qy=f(x)$为非齐次方程。\n\n考试基本上只考常系数线性微分方程。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s6-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#解的结构",
  "subject": "gaoshu",
  "topic": "线性方程组",
  "title": "解的结构",
  "kind": "定理",
  "text": "若$\\varphi_1(x)$与$\\varphi_2(x)$为两个函数，当$\\varphi_1(x)$与$\\varphi_2(x)$不成比例，则称$\\varphi_1(x)$与$\\varphi_2(x)$线性无关，否则$\\varphi_1(x)$与$\\varphi_2(x)$线性相关。\n\n定理：若$\\varphi_1(x)$与$\\varphi_2(x)$为$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=0$的解，则$y=C_1\\varphi_1(x)+C_2\\varphi_2(x)$也为其解。\n\n证明：因为$\\varphi_1(x)$与$\\varphi_2(x)$为解，所以代入方程：\n\n$\\varphi_1''+a(x)\\varphi_1'+b(x)\\varphi_1=0$，$\\varphi_2''+a(x)\\varphi_2'+b(x)\\varphi_2=0$\n\n从而$(C_1\\varphi_1+C_2\\varphi_2)''+a(x)(C_1\\varphi_1+C_2\\varphi_2)'+b(x)(C_1\\varphi_1+C_2\\varphi_2)=C_1(\\varphi_1''+a(x)\\varphi_1'+b(x)\\varphi_1)+C_2(\\varphi_2''+a(x)\\varphi_2'+b(x)\\varphi_2)=0$。\n\n所以得证。\n\n定理：若$\\varphi_1(x)$与$\\varphi_2(x)$分别为$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=0$与$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=f(x)$的解，则$y=\\varphi_1(x)+\\varphi_2(x)$为$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=f(x)$的解。\n\n证明：$\\varphi_1''+a(x)\\varphi_1'+b(x)\\varphi_1=0$，$\\varphi_2''+a(x)\\varphi_2'+b(x)\\varphi_2=f(x)$，代入$y=\\varphi_1(x)+\\varphi_2(x)$：\n\n$(\\varphi_1+\\varphi_2)''+a(x)(\\varphi_1+\\varphi_2)'+b(x)(\\varphi_1+\\varphi_2)=(\\varphi_1''+a(x)\\varphi_1'+b(x)\\varphi_1)+(\\varphi_2''+a(x)\\varphi_2'+b(x)\\varphi_2)=f(x)$。\n\n所以得证。\n\n定理：若$\\varphi_1(x)$与$\\varphi_2(x)$为$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=f(x)$的解，则$y=\\varphi_1(x)-\\varphi_2(x)$为$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=0$的解。\n\n证明：$\\varphi_1''+a(x)\\varphi_1'+b(x)\\varphi_1=f(x)$，$\\varphi_2''+a(x)\\varphi_2'+b(x)\\varphi_2=f(x)$，代入$y=\\varphi_1(x)-\\varphi_2(x)$：\n\n$(\\varphi_2-\\varphi_1)''+a(x)(\\varphi_2-\\varphi_1)'+b(x)(\\varphi_2-\\varphi_1)$\n\n$(\\varphi_2''+a(x)\\varphi_2'+b(x)\\varphi_2)-(\\varphi_1''+a(x)\\varphi_1'+b(x)\\varphi_1)$\n\n$f(x)-f(x)=0$，所以得证。\n\n定理：若$\\varphi_1(x)$与$\\varphi_2(x)$分别为$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=f_1(x)$与$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=f_2(x)$的解，则$y=\\varphi_1(x)+\\varphi_2(x)$为$y^{(n)}+a_1(x)y^{(n-1)}+\\cdots+a_{n-1}(x)y'+a_n(x)y=f_1(x)+f_2(x)$的解。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s6-3",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#二阶常系数齐次线性微分方程的通解",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "二阶常系数齐次线性微分方程的通解",
  "kind": "总结",
  "text": "可以根据高阶微分方程的解的结构得到二阶的通解。\n\n对于$y''+py'+qy=0$，其对应的特征方程为$\\lambda^2+p\\lambda+q=0$，求其特征根，有三种情况（$\\lambda_1\\lambda_2$为任意常数）：\n\n- 若$p^2-4q>0$，设$\\lambda_1,\\lambda_2$是特征方程的两个不等实根，即$\\lambda_1\\neq\\lambda_2$，其通解为$y=C_1e^{\\lambda_1x}+C_2e^{\\lambda_2x}$。\n\n- 若$p^2-4q=0$，设$\\lambda_1,\\lambda_2$是特征方程的两个相等实根，即二重根，令$\\lambda=\\lambda_1=\\lambda_2$，其通解为$y=(C_1+C_2x)e^{\\lambda x}$。\n\n- 若$p^2-4q<0$，设$\\alpha\\pm\\beta i$是特征方程的一对共轭复根，$\\lambda_{1,2}=\\dfrac{-p\\pm\\sqrt{4q-p^2}i}{2}$\n$=-\\dfrac{p}{2}\\pm\\dfrac{\\sqrt{4q-p^2}}{2}i$，记为$\\alpha\\pm\\beta i$，其通解为$y=e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s6-4",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#二阶常系数非齐次线性微分方程的特解",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "二阶常系数非齐次线性微分方程的特解",
  "kind": "总结",
  "text": "二阶常系数非齐次线性微分方程的通解就是对应齐次方程的通解加上非齐次方程的特解\n\n设$P_n(x)$，$P_m(x)$分别为$x$的$n$次、$m$次多项式。\n\n- 当自由项$f(x)=P_n(x)e^{\\alpha x}$时，特解设为$y^*=e^{\\alpha x}Q_n(x)x^k$，其中$e^{\\alpha x}$照抄，$Q_n(x)$为$x$的$n$次多项式，且$k=\\left\\{\\begin{array}{ll}\n        0, & \\alpha\\text{不是特征根} \\\\\n        1， & \\alpha\\text{是单特征根} \\\\\n        2, & \\alpha\\text{是二重特征根}\n    \\end{array}\\right.$。\n\n- 当自由项$f(x)=e^{\\alpha x}[P_m(x)\\cos\\beta x+P_n(x)\\sin\\beta x]$时，特解设为$y^*=e^{\\alpha x}[Q_l^{(1)}(x)\\cos\\beta x+Q_l^{(2)}(x)\\sin\\beta x]x^k$，其中$e^{\\alpha x}$照抄，$l=\\max\\{m,n\\}$，$Q_l^{(1)}$、$Q_l^{(2)}$为$x$的两个不同的$l$次多项式，且$k=\\left\\{\\begin{array}{ll}\n        0, & \\alpha\\pm\\beta i\\text{不是特征根} \\\\\n        1， & \\alpha\\pm\\beta i\\text{是特征根} \\\\\n    \\end{array}\\right.$。\n\n最后求导代回原式得到系数值。\n\n对于第二种需要举例说明一下，如果$f(x)=e^{7x}[(x^2+3x)\\cos4x+(x+6)\\sin4x]$，其特解设法：首先$e^{7x}$直接写过来；然后判断多项式系数，第一个多项式最高次数为2，第二个多项式最高次数为1，所以$l$为较高那个即2，所以设为$e^{7x}[(A_1x^2+B_1x+C)\\cos4x+(A_2x^2+B_2x+C)\\sin4x]$（当然一般不会这么高，基本上都是一次的$A\\cos\\beta x+B\\sin\\beta x$的形式）；最后判断其特征根，$7\\pm4i$是否为特征根，如果$\\Delta>0$特征根$\\lambda$是实数就肯定不是，不需要算直接$k=0$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s7-1",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#概念",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "概念",
  "kind": "概念",
  "text": "定义：形如$x^2y''+pxy'+qy=f(x)$的方程称为欧拉方程，其中$pq$为常数，$f(x)$为已知函数。\n\n注意与一般的二阶常系数非齐次线性微分方程$y''+py'+qy=f(x)$对比，其二阶导和一阶导前面多了$x$的多项式。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-advanced-math-knowledge-9-differential-equation-differential-equation-s7-2",
  "repo": "R08",
  "source": "advanced-math/knowledge/9-differential-equation/differential-equation.tex#解法",
  "subject": "gaoshu",
  "topic": "微分方程",
  "title": "解法",
  "kind": "方法",
  "text": "使用换元法$x=e^t$将欧拉方程换为二阶常系数非齐次线性方程。\n\n当$x>0$时，令$x=e^t$，则$t=\\ln x$，$\\dfrac{\\textrm{d}t}{\\textrm{d}x}=\\dfrac{1}{x}$，$\\dfrac{\\textrm{d}y}{\\textrm{d}x}=\\dfrac{\\textrm{d}y}{\\textrm{d}t}\\dfrac{\\textrm{d}t}{\\textrm{d}x}=\\dfrac{1}{x}\\dfrac{\\textrm{d}y}{\\textrm{d}t}$，$\\dfrac{\\textrm{d}^2y}{\\textrm{d}x^2}=\\dfrac{\\textrm{d}}{\\textrm{d}x}\\left(\\dfrac{1}{x}\\dfrac{\\textrm{d}y}{\\textrm{d}t}\\right)=-\\dfrac{1}{x^2}\\dfrac{\\textrm{d}y}{\\textrm{d}t}+\\dfrac{1}{x}\\dfrac{\\textrm{d}}{\\textrm{d}x}\\left(\\dfrac{\\textrm{d}y}{\\textrm{d}t}\\right)=-\\dfrac{1}{x^2}\\dfrac{\\textrm{d}y}{\\textrm{d}t}+\\dfrac{1}{x^2}\\dfrac{\\textrm{d}^2y}{\\textrm{d}t^2}$，方程化为$\\dfrac{\\textrm{d}^2y}{\\textrm{d}t^2}+(p-1)\\dfrac{\\textrm{d}y}{\\textrm{d}t}+qy=f(e^t)$，解出结果，组后用$t=\\ln x$回代。\n\n当$x<0$是，令$x=-e^t$，同理可得。\n\n例题：求欧拉方程$x^2\\dfrac{\\textrm{d}^2y}{\\textrm{d}x^2}+4x\\dfrac{\\textrm{d}y}{\\textrm{d}x}+2y=0$（$x>0$）的通解。\n\n解：可以直接利用公式，变为$\\dfrac{\\textrm{d}^2y}{\\textrm{d}t^2}+3\\dfrac{\\textrm{d}y}{\\textrm{d}t}+2y=0$\n\n即$y''+3y'+2y=0$，特征方程$\\lambda^2+3\\lambda+2=0$，$\\lambda_1=-1$，$\\lambda_2=-2$。\n\n$\\therefore y=C_1e^{-x}+C_2e^{-2x}$。代入$x=e^t$，$y=\\dfrac{C_1}{x}+\\dfrac{C_2}{x^2}$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s1-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#逆序",
  "subject": "xiandai",
  "topic": "排列与逆序数",
  "title": "逆序",
  "kind": "方法",
  "text": "逆序一般只会考一个数列的逆序数，一般以自然数从小到大为标准次序。\n\n对于逆序数的计算一般是数，假设一共有$n$项，则需要依次从$i$向后判断各项与当前项的大小，最后相加。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s1-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#有穷排列",
  "subject": "xiandai",
  "topic": "排列与逆序数",
  "title": "有穷排列",
  "kind": "例题",
  "text": "对于给出几个数字的有限排列，只需要直接计算即可。\n\n例题：求2413的逆序数。\n\n解：2的逆序有21一个。4的逆序与41、43两个。1无逆序数，所以一共逆序数为3。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s1-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#无穷排列",
  "subject": "xiandai",
  "topic": "排列与逆序数",
  "title": "无穷排列",
  "kind": "例题",
  "text": "例题：求$13\\cdots(2n-1)(2n)(2n-2)\\cdots2$的逆序数。\n\n解：这个序列分为两个部分，第一个是前面的$13\\cdots(2n-1)$部分，这个部分无逆序。\n\n第二个部分是后面的$(2n)(2n-2)\\cdots2$，这个序列是全部逆序的，所以考虑其第二个内部一共有$n$个数，从前往后依次有$n,(n-1),\\cdots,1$个逆序，所以逆序数为$\\dfrac{n(n-1)}{2}$。\n\n然后是考虑第二个部分对于第一个部分的逆序。$2n-2$对$2n-1$产生一个逆序，到最后的2对前面的$3\\cdots(2n-1)$都产生了逆序一共$n-1$个，所以一共$\\dfrac{n(n-1)}{2}$个逆序。\n\n所以最后一共加起来与$n(n-1)$个逆序。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s2",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#因式项",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "因式项",
  "kind": "例题",
  "text": "需要求出带有某些因子的因式项，其实就是对顺序的排列组合，若已经给出某些因式，则因式项的其他因子就必须是其他数值。\n\n且还要考虑因式项的正负号，即选择的值序列的逆序数。\n\n例题：写出四阶行列式中含有$a_{11}a_{23}$的因式项。\n\n解：因为是四阶行列式，且含有$a_{11}a_{23}$，所以余下来的$a_{3?}$和$a_{4?}$中的$?$只有2和4可选。\n\n若是$a_{11}a_{23}a_{32}a_{44}$，则列坐标序列为$1324$，从而逆序数为1，所以该项为$-a_{11}a_{23}a_{32}a_{44}$。\n\n若是$a_{11}a_{23}a_{34}a_{42}$，则列坐标序列为$1342$，从而逆序数为2，所以该项为$a_{11}a_{23}a_{34}a_{42}$。\n\n$\\therefore\\,-a_{11}a_{23}a_{32}a_{44}+a_{11}a_{23}a_{34}a_{42}$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列式",
  "kind": "方法",
  "text": "包含直接计算行列式的值和已知行列式值计算参数值两种体型，基本上求解方式一致。\n\n证明行列式值与计算行列式值的题型不同的是，其行列式的值是固定给出的，一方面虽然约束了解题思路，一方面也给出了解题的方向，需要结果与给定值“靠近”。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-1-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#主对角线行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "主对角线行列式",
  "kind": "例题",
  "text": "$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n     & \\ddots & \\cdots & a_{2n} \\\\\n     & & \\ddots & \\vdots  \\\\\n     & & & a_{nn}\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n    a_{11} & & & \\\\\n    a_{21} & \\ddots & & \\\\\n    \\vdots & \\cdots & \\ddots &  \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n    a_{11} & & & \\\\\n     & \\ddots & & \\\\\n     & & \\ddots &  \\\\\n     & & & a_{nn}\n\\end{array}\\right|=a_{11}\\cdots a_{nn}$",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-1-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#副对角线行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "副对角线行列式",
  "kind": "例题",
  "text": "$\\left|\\begin{array}{cccc} \n    & & & a_{1n} \\\\\n    & & \\ddots & a_{2n} \\\\\n    &  \\ddots & \\cdots & \\vdots  \\\\\n   a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n   a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n   a_{21} & \\cdots & \\ddots & \\\\\n   \\vdots & \\ddots & & \\\\\n   a_{n1} & & &\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n    & & & a_{1n} \\\\\n    & & \\ddots & \\\\\n    & \\ddots & & \\\\\n   a_{n1} & & &\n\\end{array}\\right|=(-1)^{\\frac{n(n-1)}{2}}a_{1n}\\cdots a_{n1}$",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-1-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#范德蒙德行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "范德蒙德行列式",
  "kind": "例题",
  "text": "$\\left|\\begin{array}{cccc} \n    1 & 1 & \\cdots & 1 \\\\\n    a_1 & a_2  & \\cdots & a_n \\\\\n    \\cdots & \\cdots & \\vdots & \\cdots \\\\\n    a_1^{n-1} & a_2^{n-1} & \\cdots & a_n^{n-1} \\\\\n\\end{array}\\right|=\\prod\\limits_{1\\leqslant j<i\\leqslant n}(a_i-a_j)$\n\n例题：求$\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 4 \\\\\n    1 & 2^2  & 3^2 & 4^2 \\\\\n    1 & 2^3  & 3^3 & 4^3 \\\\\n    9 & 8 & 7 & 6\n\\end{array}\\right|$。\n\n解：这个式子非常像范德蒙德行列式，但是差一行1。所以我们要把最后一行变为同样值。可以观察得到第四行加最后一行为10，所以\n\n$=\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 4 \\\\\n    1 & 2^2  & 3^2 & 4^2 \\\\\n    1 & 2^3  & 3^3 & 4^3 \\\\\n    10 & 10 & 10 & 10\n\\end{array}\\right|=10\\times(-1)^3\\left|\\begin{array}{cccc} \n    1 & 1 & 1 & 1 \\\\\n    1 & 2 & 3 & 4 \\\\\n    1 & 2^2  & 3^2 & 4^2 \\\\\n    1 & 2^3  & 3^3 & 4^3\n\\end{array}\\right|=-10\\times2\\times3\\times2=-120$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-1-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#分块行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "分块行列式",
  "kind": "概念",
  "text": "也称为拉普拉斯展开式，设$A$为$m$阶矩阵，$B$为$n$阶矩阵：\n\n$\\left|\\begin{array}{cc}\n    A & O \\\\\n    O & B\n\\end{array}\\right|=\n\\left|\\begin{array}{cc}\n    A & * \\\\\n    O & B\n\\end{array}\\right|=\n\\left|\\begin{array}{cc}\n    A & O \\\\\n    * & B\n\\end{array}\\right|=\\vert A\\vert\\cdot\\vert B\\vert$。\n\n$\\left|\\begin{array}{cc}\n    O & A \\\\\n    B & O\n\\end{array}\\right|=\n\\left|\\begin{array}{cc}\n    * & A \\\\\n    B & O\n\\end{array}\\right|=\n\\left|\\begin{array}{cc}\n    O & A \\\\\n    B & *\n\\end{array}\\right|=(-1)^{mn}\\vert A\\vert\\cdot\\vert B\\vert$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-1-5",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#爪形行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "爪形行列式",
  "kind": "例题",
  "text": "$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    a_{21} & \\ddots & & \\\\\n    \\vdots & & \\ddots &  \\\\\n    a_{n1} & & & a_{nn}\n\\end{array}\\right|$，$\n\\left|\\begin{array}{cccc} \n    a_{11} & & & a_{1n} \\\\\n    a_{21} & & \\ddots & \\\\\n    \\vdots & \\ddots & &  \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|$，$\n\\left|\\begin{array}{cccc} \n    a_{11} & & & a_{1n} \\\\\n     & \\ddots & & a_{2n} \\\\\n     & & \\ddots & \\vdots \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|$，\n\n$\n\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n     & & \\ddots & a_{2n} \\\\\n     & \\ddots & & \\vdots \\\\\n    a_{n1} & & & a_{nn}\n\\end{array}\\right|$。低阶直接进行展开，高阶需要使用递推法。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-1-6",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#异爪形行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "异爪形行列式",
  "kind": "例题",
  "text": "每种爪形行列式都能变为三种异爪形行列式，如$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    a_{21} & \\ddots & & \\\\\n    \\vdots & & \\ddots &  \\\\\n    a_{n1} & & & a_{nn}\n\\end{array}\\right|$：\n\n$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    a_{21} & \\ddots & & \\\\\n     & \\ddots & \\ddots &  \\\\\n     & & \\ddots & a_{nn}\n\\end{array}\\right|$，$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & & \\\\\n    a_{21} & \\ddots & \\ddots & \\\\\n    \\vdots & & \\ddots & \\ddots \\\\\n    a_{n1} & & & a_{nn}\n\\end{array}\\right|$，$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & & \\\\\n    a_{21} & \\ddots & \\ddots & \\\\\n     & \\ddots & \\ddots & \\ddots \\\\\n     & & \\ddots & a_{nn}\n\\end{array}\\right|$。\n\n基本方法是用斜着的数消去平的数，从而让异爪形行列式变为三角行列式。\n\n例题：计算$\\left|\\begin{array}{cccc} \n    1 & 1 & 1 & 1 \\\\\n    1 & 2 & 0 & 0 \\\\\n    1 & 0 & 3 & 0 \\\\\n    1 & 0 & 0 & 4\n\\end{array}\\right|$。\n\n解：各行提取斜对角线数$=2\\times3\\times4\\left|\\begin{array}{cccc} \n    1 & 1 & 1 & 1 \\\\\n    \\dfrac{1}{2} & 0 & 0 & 0 \\\\\n    \\dfrac{1}{3} & 0 & 1 & 0 \\\\\n    \\dfrac{1}{4} & 0 & 0 & 1\n\\end{array}\\right|=\\left|\\begin{array}{cccc} \n    -\\dfrac{1}{12} & 0 & 0 & 0 \\\\\n    \\dfrac{1}{2} & 0 & 0 & 0 \\\\\n    \\dfrac{1}{3} & 0 & 1 & 0 \\\\\n    \\dfrac{1}{4} & 0 & 0 & 1\n\\end{array}\\right|=-2$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-1-7",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#基本行列式计算",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "基本行列式计算",
  "kind": "方法",
  "text": "基本的计算方式是对角线法则计算与行列式展开两种方法。若符合基本特殊行列式的可以按照公式。\n\n但是对于一般的高阶行列式而言计算方式如下：\n\n- 通过行列式的对换让一行或一列只有一个元素不为0，进行行列式展开不断降阶，最后变成第三阶的时候使用对角线法则。\n\n- 通过行列式的对换从上往下让行列式变成上三角行列式，对角线相乘就得到结果。\n\n这两种方式可以混合使用，直接展开可以在有足够多的0的情况下使用或阶数较低的情况下使用。\n\n例题：计算$\\left|\\begin{array}{cccccc} \n    a & b & 0 & \\cdots & 0 & 0 \\\\\n    0 & a & b & \\cdots & 0 & 0 \\\\\n    0 & 0 & a & \\cdots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\\n    0 & 0 & 0 & \\cdots & a & b \\\\\n    b & 0 & 0 & \\cdots & 0 & a\n\\end{array}\\right|$。\n\n解：直接按第一列展开：\n\n$=a(-1)^{1+1}\\left|\\begin{array}{ccccc} \n    a & b & \\cdots & 0 & 0 \\\\\n    0 & a & \\cdots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\\n    0 & 0 & \\cdots & a & b \\\\\n    0 & 0 & \\cdots & 0 & a\n\\end{array}\\right|+b\\cdot(-1)^{n+1}\\left|\\begin{array}{ccccc} \n    b & 0 & \\cdots & 0 & 0 \\\\\n    a & b & \\cdots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\\n    0 & 0 & \\cdots & b & 0 \\\\\n    0 & 0 & \\cdots & a & b \\\\\n\\end{array}\\right|$\n\n$=a\\cdot a^{n-1}+(-1)^{n+1}b\\cdot b^{n-1}=a^n+(-1)^{n+1}b^n$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#提取公因式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "提取公因式",
  "kind": "例题",
  "text": "可以提取某一行或某一列的公因式。\n\n例题：证明$\\left|\\begin{array}{ccc} \n    a^2 & ab & b^2 \\\\\n    2a & a+b & 2b \\\\\n    1 & 1 & 1\n\\end{array}\\right|=(a-b)^3$。\n\n证明：因为是证明题，而结果是$(a-b)$的变形，所以我们需要不断提取出$a-b$的形式。\n\n$=-\\left|\\begin{array}{ccc} \n    1 & 1 & 1 \\\\\n    2a & a+b & 2b \\\\\n    a^2 & ab & b^2\n\\end{array}\\right|\n=-\\left|\\begin{array}{ccc} \n    0 & 0 & 1 \\\\\n    a-b & a-b & 2b \\\\\n    a(a-b) & b(a-b) & b^2\n\\end{array}\\right|\n=-(a-b)^2\\left|\\begin{array}{ccc} \n    0 & 0 & 1 \\\\\n    1 & 1 & 2b \\\\\n    a & b & b^2\n\\end{array}\\right|$\n\n$=-(a-b)^2\\cdot1\\cdot(-1)^{1+3}\\left|\\begin{array}{cc} \n    1 & 1 \\\\\n    a & b\n\\end{array}\\right|=-(a-b)^2(b-a)=(a-b)^3$。\n\n例题：证明$\\left|\\begin{array}{cccc} \n    1 & 1 & 1 & 1 \\\\\n    a & b & c & d \\\\\n    a^2 & b^2 & c^2 & d^2 \\\\\n    a^4 & b^4 & c^4 & d^4\n\\end{array}\\right|=(a-b)(a-c)(a-d)(b-c)(b-d)(c-d)(a+b+c+d)$。\n\n证明：这个形式看起来像范德蒙德行列式，但是根据后面的结果，发现这无法通过范德蒙德行列式的公式来计算，所以按照一般方法相减得到因子：\n\n$=\\left|\\begin{array}{cccc} \n    1 & 1 & 1 & 1 \\\\\n    0 & b-a & c-a & d-a \\\\\n    a^2-a^2 & b^2-ab & c^2-ac & d^2-ad \\\\\n    a^4-a^4 & b^4-a^2b^2 & c^4-a^2c^2 & d^4-a^2d^2\n\\end{array}\\right|$\n\n$=\\left|\\begin{array}{cccc} \n    1 & 1 & 1 & 1 \\\\\n    0 & b-a & c-a & d-a \\\\\n    0 & b(b-a) & c(c-a) & d(d-a) \\\\\n    0 & b^2(b+a)(b-a) & c^2(c+a)(c-a) & d^2(d+a)(d-a)\n\\end{array}\\right|$\n\n$=(b-a)(c-a)(d-a)\\left|\\begin{array}{cccc} \n    1 & 1 & 1 & 1 \\\\\n    0 & 1 & 1 & 1 \\\\\n    0 & b & c & d \\\\\n    0 & b^2(b+a) & c^2(c+a) & d^2(d+a)\n\\end{array}\\right|$\n\n$=(b-a)(c-a)(d-a)\\cdot 1\\cdot(-1)^{1+1}\\left|\\begin{array}{ccc}\n    1 & 1 & 1 \\\\\n    b & c & d \\\\\n    b^2(b+a) & c^2(c+a) & d^2(d+a)\n\\end{array}\\right|$\n\n$=(b-a)(c-a)(d-a)\\left|\\begin{array}{ccc}\n    1 & 1 & 1 \\\\\n    0 & c-b & d-b \\\\\n    0 & c(c^2+ac-ab-b^2) & d(d^2+ad-ab-b^2)\n\\end{array}\\right|$\n\n$=(b-a)(c-a)(d-a)\\left|\\begin{array}{ccc}\n    1 & 1 & 1 \\\\\n    0 & c-b & d-b \\\\\n    0 & c(a+b+c)(c-b) & d(a+b+d)(d-b)\n\\end{array}\\right|$\n\n$=(b-a)(c-a)(d-a)\\left|\\begin{array}{cc}\n    c-b & d-b \\\\\n    c(a+b+c)(c-b) & d(a+b+d)(d-b)\n\\end{array}\\right|$\n\n$=(b-a)(c-a)(d-a)(c-b)(d-b)\\left|\\begin{array}{cc}\n    1 & 1 \\\\\n    c(a+b+c) & d(a+b+d)\n\\end{array}\\right|$\n\n$=(b-a)(c-a)(d-a)(c-b)(d-b)(c(a+b+c)-d(a+b+d))$\n\n$=(b-a)(c-a)(d-a)(c-b)(d-b)(ca+cb+c^2-da-db-d^2)$\n\n$=(b-a)(c-a)(d-a)(c-b)(d-b)(a(c-d)+b(c-d)+(c+d)(c-d))$\n\n$=(b-a)(c-a)(d-a)(c-b)(d-b)(c-d)(a+b+c+d)$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#转换三角行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "转换三角行列式",
  "kind": "例题",
  "text": "通过行变换或列变换将行列式转换三角行列式，然后就可以根据对角线乘积得到结果。\n\n例题：计算$\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 4 \\\\\n    1 & 3 & 4 & 1 \\\\\n    1 & 4 & 1 & 2 \\\\\n    1 & 1 & 2 & 3\n\\end{array}\\right|$。\n\n解：$=\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 4 \\\\\n    0 & 1 & 1 & -3 \\\\\n    0 & 1 & -3 & 1 \\\\\n    0 & -1 & -1 & -1\n\\end{array}\\right|\n=\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 4 \\\\\n    0 & 1 & 1 & -3 \\\\\n    0 & 0 & -4 & 4 \\\\\n    0 & 0 & 0 & -4\n\\end{array}\\right|=16$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#成比例为0",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "成比例为0",
  "kind": "例题",
  "text": "当行列式行列变换后某一行或某一列与另一行或列成比例，则整个行列式值为0。\n\n例题：计算$\\left|\\begin{array}{cccc} \n    2 & 1 & 4 & 1 \\\\\n    3 & -1  & 2 & 1 \\\\\n    1 & 2 & 3 & 2 \\\\\n    5 & 0 & 6 & 2 \\\\\n\\end{array}\\right|$。\n\n解：$=\\left|\\begin{array}{cccc} \n    0 & -3 & -2 & -3 \\\\\n    0 & -7  & -7 & -5 \\\\\n    1 & 2 & 3 & 2 \\\\\n    0 & -10 & -9 & -8 \\\\\n\\end{array}\\right|=\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 2 \\\\\n    0 & -3 & -2 & -3 \\\\\n    0 & -7  & -7 & -5 \\\\\n    0 & -10 & -9 & -8 \\\\\n\\end{array}\\right|=\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 2 \\\\\n    0 & 3 & 2 & 3 \\\\\n    0 & 7  & 7 & 5 \\\\\n    0 & -10 & -9 & -8 \\\\\n\\end{array}\\right|$\n\n$=3\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 2 \\\\\n    0 & 1 & \\dfrac{2}{3} & 1 \\\\\n    0 & 7  & 7 & 5 \\\\\n    0 & -10 & -9 & -8 \\\\\n\\end{array}\\right|\n=3\\left|\\begin{array}{cccc} \n    1 & 2 & 3 & 2 \\\\\n    0 & 1 & \\dfrac{2}{3} & 1 \\\\\n    0 & 0  & \\dfrac{7}{3} & -2 \\\\\n    0 & 0  & -\\dfrac{7}{3} & 2 \\\\\n\\end{array}\\right|=0$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-5",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#拆项",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "拆项",
  "kind": "例题",
  "text": "若行列式某一行或一列是有两个值构成，则可以把其拆开，其他部分行列不变。\n\n例题：证明$\\left|\\begin{array}{ccc}\n    ax+by & ay+bz & az+bx \\\\\n    ay+bz & az+bx & ax+by \\\\\n    az+bx & ax+by & ay+bz\n\\end{array}\\right|=(a^3+b^3)\\left|\\begin{array}{ccc}\n    x & y & z \\\\\n    y & z & x \\\\\n    z & x & y\n\\end{array}\\right|$。\n\n证明：首先因为上下因式的系数是$ab$，所以无论怎么样减都无法消去多余的$xy$或$z$得到结果的行列式中只有单个因子的情况，所以只能拆项，从第一个项开始拆：\n\n$=a\\left|\\begin{array}{ccc}\n    x & ay+bz & az+bx \\\\\n    y & az+bx & ax+by \\\\\n    z & ax+by & ay+bz\n\\end{array}\\right|+b\\left|\\begin{array}{ccc}\n    y & ay+bz & az+bx \\\\\n    z & az+bx & ax+by \\\\\n    x & ax+by & ay+bz\n\\end{array}\\right|$\n\n$=a^2\\left|\\begin{array}{ccc}\n    x & ay+bz & z \\\\\n    y & az+bx & x \\\\\n    z & ax+by & y\n\\end{array}\\right|+b^2\\left|\\begin{array}{ccc}\n    y & z & az+bx \\\\\n    z & x & ax+by \\\\\n    x & y & ay+bz\n\\end{array}\\right|=a^3\\left|\\begin{array}{ccc}\n    x & y & z \\\\\n    y & z & x \\\\\n    z & x & y\n\\end{array}\\right|+b^3\\left|\\begin{array}{ccc}\n    y & z & x \\\\\n    z & x & y \\\\\n    x & y & z\n\\end{array}\\right|$\n\n$=a^3\\left|\\begin{array}{ccc}\n    x & y & z \\\\\n    y & z & x \\\\\n    z & x & y\n\\end{array}\\right|+b^3\\left|\\begin{array}{ccc}\n    x & y & z \\\\\n    y & z & x \\\\\n    z & x & y\n\\end{array}\\right|=(a^3+b^3)\\left|\\begin{array}{ccc}\n    x & y & z \\\\\n    y & z & x \\\\\n    z & x & y\n\\end{array}\\right|\n$",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-6",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#行列乘积为定值",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列乘积为定值",
  "kind": "例题",
  "text": "当行列式每一行或每一列相乘都为一个固定的值，可以把每行或每列的公因子提出来来简化计算。\n\n例题：计算$\\left|\\begin{array}{ccc} \n    -ab & ac & ae \\\\\n    bd & -cd & de \\\\\n    bf & cf & -ef\n\\end{array}\\right|$。\n\n解：$=adf\\left|\\begin{array}{ccc} \n    -b & c & e \\\\\n    b & -c & e \\\\\n    b & c & -e\n\\end{array}\\right|\n=abcdef\\left|\\begin{array}{ccc} \n    -1 & 1 & 1 \\\\\n    1 & -1 & 1 \\\\\n    1 & 1 & -1\n\\end{array}\\right|=4abcdef$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-7",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#行列加和为定值",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列加和为定值",
  "kind": "例题",
  "text": "当行列式每一行或每一列相加都为一个固定的值，可以把第二行开始的各行都加到第一行或列，再提取公因式，提出后第一行或第一列变为1，再依次对每行或每列进行消去，最终变成对角线行列式。\n\n例题：计算$\\left|\\begin{array}{cccc} \n    x & a & \\cdots & a \\\\\n    a & x & \\cdots & a \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a & a & \\cdots & x \\\\\n\\end{array}\\right|$。\n\n解：$=\\left|\\begin{array}{cccc} \n    x+(n-1)a & x+(n-1)a & \\cdots & x+(n-1)a \\\\\n    a & x & \\cdots & a \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a & a & \\cdots & x \\\\\n\\end{array}\\right|$\n\n$=(x+(n-1)a)\\left|\\begin{array}{cccc} \n    1 & 1 & \\cdots & 1 \\\\\n    a & x & \\cdots & a \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a & a & \\cdots & x \\\\\n\\end{array}\\right|=(x+(n-1)a)\\left|\\begin{array}{cccc} \n    1 & 1 & \\cdots & 1 \\\\\n     & x-a & &  \\\\\n     & & \\ddots & \\\\\n     & & & x-a \\\\\n\\end{array}\\right|$\n\n$=(x+(n-1)a)(x-a)^{n-1}$。\n\n例题：计算$\\left|\\begin{array}{cccc} \n    1+a_1 & a_1 & \\cdots & a_1 \\\\\n    a_2 & 1+a_2 & \\cdots & a_2 \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_n & a_n & \\cdots & 1+a_n \\\\\n\\end{array}\\right|$。\n\n解：$=(1+a_1+a_2+\\cdots+a_n)\\left|\\begin{array}{cccc} \n    1 & 1 & \\cdots & 1 \\\\\n    a_2 & 1+a_2 & \\cdots & a_2 \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_n & a_n & \\cdots & 1+a_n \\\\\n\\end{array}\\right|$\n\n$=(1+a_1+a_2+\\cdots+a_n)\\left|\\begin{array}{cccc} \n    1 & 0 & \\cdots & 0 \\\\\n    a_2 & 1 & \\cdots & 0 \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_n & 0 & \\cdots & 1 \\\\\n\\end{array}\\right|=(1+a_1+a_2+\\cdots+a_n)$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-8",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#分块行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "分块行列式",
  "kind": "例题",
  "text": "就是分块行列式的拓展，也称为拉普拉斯展开式，当行列式左下角和右上角的矩阵为零矩阵时可以只考虑对角线矩阵的乘积值。\n\n例题：计算$\\left|\\begin{array}{cccc} \n    a_1 & 0 & 0 & b_1 \\\\\n    0 & a_2 & b_2 & 0 \\\\\n    0 & b_3 & a_3 & 0 \\\\\n    b_4 & 0 & 0 & a_4\n\\end{array}\\right|$。\n\n$=-\\left|\\begin{array}{cccc} \n    a_1 & b_1 & 0 & 0  \\\\\n    0 & 0 & a_2 & b_2 \\\\\n    0 & 0 & b_3 & a_3 \\\\\n    b_4 & a_4 & 0 & 0\n\\end{array}\\right|=\\left|\\begin{array}{cccc} \n    a_1 & b_1 & 0 & 0  \\\\\n    b_4 & a_4 & 0 & 0 \\\\\n    0 & 0 & b_3 & a_3 \\\\\n    0 & 0 & a_2 & b_2\n\\end{array}\\right|=\\left|\\begin{array}{cc} \n    a_1 & b_1 \\\\\n    b_4 & a_4\n\\end{array}\\right|\\left|\\begin{array}{cc}\n    b_3 & a_3 \\\\\n    a_2 & b_2\n\\end{array}\\right|=(a_1a_4-b_1b_4)(a_2a_3-b_2b_3)$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s3-9",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#递推法",
  "subject": "xiandai",
  "topic": "数列极限",
  "title": "递推法",
  "kind": "例题",
  "text": "当行列式一共有$n$项，很多时候都需要使用到递推法，递推法也一般与其他方法共同使用。\n\n例题：计算$\\left|\\begin{array}{cccccc} \n    2 & -1 & 0 & \\cdots & 0 & 0  \\\\\n    -1 & 2 & -1 & \\cdots & 0 & 0 \\\\\n    0 & -1 & 2 & \\cdots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\\n    0 & 0 & 0 & \\cdots & 2 & -1 \\\\\n    0 & 0 & 0 & \\cdots & -1 & 2\n\\end{array}\\right|_{n\\times n}$\n\n解：这是一个爪形行列式，然而无法通过斜的数数据来消去平的数据，考虑将所有列都加到第一列：\n\n$D_n=\\left|\\begin{array}{cccccc} \n    1 & -1 & 0 & \\cdots & 0 & 0  \\\\\n    0 & 2 & -1 & \\cdots & 0 & 0 \\\\\n    0 & -1 & 2 & \\cdots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\\n    0 & 0 & 0 & \\cdots & 2 & -1 \\\\\n    1 & 0 & 0 & \\cdots & -1 & 2\n\\end{array}\\right|=1\\cdot(-1)^{1+1}\\left|\\begin{array}{ccccc} \n    2 & -1 & \\cdots & 0 & 0 \\\\\n    -1 & 2 & \\cdots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\\n    0 & 0 & \\cdots & 2 & -1 \\\\\n    0 & 0 & \\cdots & -1 & 2\n\\end{array}\\right|$\n\n$+1\\cdot(-1)^{n+1}\\left|\\begin{array}{cccccc} \n    -1 & 0 & \\cdots & 0 & 0  \\\\\n    2 & -1 & \\cdots & 0 & 0 \\\\\n    -1 & 2 & \\ddots & 0 & 0 \\\\\n    \\vdots & \\vdots & \\cdots & \\ddots & \\vdots \\\\\n    0 & 0 & \\cdots & 2 & -1\n\\end{array}\\right|=D_{n-1}+1\\cdot(-1)^{n+1}(-1)^{n-1}$\n\n$\\therefore D_n=D_{n-1}+1$。这就是本题目的递推式。$D_n=D_1+n-1=2+n-1=1+n$。\n\n注意：对于爪形和异爪形行列式的递推时，只能从爪尖开始消（行列式展开），不能从爪根部消，否则就不能保证爪的形状。\n\n例题：计算$\\left|\\begin{array}{ccccccc} \n    a & & & & & b \\\\\n    & \\ddots  & & & \\ddots & \\\\\n     & & a & b \\\\\n     & & c & d \\\\\n     & \\ddots & & & \\ddots \\\\\n    c & & & & & d\n\\end{array}\\right|_{2n\\times 2n}$。\n\n解：将其$2n$行不断与$2n-1\\cdots2$行对换，再将其$2n$列不断与$2n-1\\cdots2$列对换，一共对换$2(2n-2)$次，一定是一个偶数：\n\n$=\\left|\\begin{array}{cccccccc} \n    a & b & 0 & & & \\cdots & & 0 \\\\\n    c & d & 0 & & & \\cdots & & 0 \\\\\n    0 & 0 & a & & & & & b \\\\\n    \\vdots & \\vdots & \\vdots & \\ddots & & & \\ddots & \\\\\n    \\vdots & \\vdots & \\vdots & & a & b \\\\\n    \\vdots & \\vdots & \\vdots & & c & d \\\\\n    \\vdots & \\vdots & \\vdots & \\ddots & & & \\ddots \\\\\n    0 & 0 & c & & & & & d\n\\end{array}\\right|_{2n\\times 2n}$，根据分块行列式的计算方式：\n\n$D_{2n}=D_2D_{2(n-1)}=(ad-bc)D_{2(n-1)}$，所以不断递推可以得到结果为$(ad-bc)^n$。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-1-determinant-determinant-s4",
  "repo": "R08",
  "source": "linear-algebra/exercise/1-determinant/determinant.tex#代数余子式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "代数余子式",
  "kind": "例题",
  "text": "已知某一行或列展开就是每一行或列的元素乘对应的代数余子式，就可以得到整个矩阵的值。若是求某一行或某一列的代数余子式的值，将其系数代入矩阵求就可以了。\n\n例题：设$D=\\left|\\begin{array}{cccc} \n    3 & 1 & -1 & 2 \\\\\n    -5 & 1 & 3 & -4 \\\\\n    2 & 0 & 1 & -1 \\\\\n    1 & -5 & 3 &-3\n\\end{array}\\right|$，$D$的$(i,j)$元的代数余子式设为$A_{ij}$，求$A_{31}+3A_{32}-2A_{33}+2A_{34}$。\n\n解：$A_{31}+3A_{32}-2A_{33}+2A_{34}=\\left|\\begin{array}{cccc} \n    3 & 1 & -1 & 2 \\\\\n    -5 & 1 & 3 & -4 \\\\\n    1 & 3 & -2 & 2 \\\\\n    1 & -5 & 3 &-3\n\\end{array}\\right|\n=\\left|\\begin{array}{cccc} \n    1 & 3 & -2 & 2 \\\\\n    0 & 8 & -5 & 5 \\\\\n    0 & 0 & 3 & -4 \\\\\n    0 & 0 & 0 & 1\n\\end{array}\\right|=24$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s1-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#对应成比例",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "对应成比例",
  "kind": "例题",
  "text": "因为矩阵运算不满足交换率但是满足结合率，且一行矩阵乘一列矩阵的乘积为一个数，所以可以推出矩阵的幂的运算方法。\n\n这个方法要求$r(A)=1$，即对应成比例。\n\n令$A$为$n$阶方阵，将$A$拆为$A=(a_1,a_2,\\cdots,a_n)^T(b_1,b_2,\\cdots,b_n)=\\alpha^T\\beta$，所以$A^n=\\alpha^T\\beta\\alpha^T\\beta\\cdots\\alpha^T\\beta$，利用结合率：$\\alpha^T(\\beta\\alpha^T)(\\beta\\cdots\\alpha^T)\\beta$，中间一共$n-1$个$\\beta\\alpha^T$，$\\beta\\alpha^T$是一个数，即$A^n=(\\beta\\alpha^T)^{n-1}\\alpha^T\\beta=(\\beta\\alpha^T)^{n-1}A$。\n\n例题：$A=\\left(\\begin{array}{ccc}\n    1 & 2 & 3 \\\\\n    -2 & -4 & -6 \\\\\n    3 & 6 & 9\n\\end{array}\\right)$，求$A^n$。\n\n解：$A=(1,-2,3)^T(1,2,3)$，所以$A^n=((1,2,3)(1,-2,3)^T)^n(1,-2,3)^T(1,2,3)$\n\n$=6^{n-1}A$。\n\n若矩阵$A$的行与列都成比例，则$A^n=[tr(A)]^{n-1}A$，$[tr(A)]=\\sum a_{ii}$，即矩阵迹为对角线元素值之和。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s1-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#试算归纳",
  "subject": "xiandai",
  "topic": "试算归纳",
  "title": "试算归纳",
  "kind": "总结",
  "text": "对$A$进行试算，如$A^2$，若$A^k$是一个数量阵，那么计算$A^n$就只用找规律就可以了。\n\n例题：$A=\\left(\\begin{array}{cccc}\n    1 & -1 & -1 & -1 \\\\\n    -1 & 1 & -1 & -1 \\\\\n    -1 & -1 & 1 & -1 \\\\\n    -1 & -1 & -1 & 1 \\\\\n\\end{array}\\right)$，求$A^n$（$n\\geqslant2$）。\n\n解：通过计算得知$A^2=4E$，这是一个数量阵。\n\n$\\therefore A^n=\\left\\{\\begin{array}{lcl}\n    4^kE, & & n=2k \\\\\n    4^kA, & & n=2k+1\n\\end{array}\\right.$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s1-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#行列结合",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "行列结合",
  "kind": "例题",
  "text": "将一个矩阵拆成$\\alpha\\beta^T$的形式，其中都是列向量，从而进行幂运算可以进行结合$\\beta^T\\alpha$为一个常数。\n\n例题：设$\\alpha=(1,3,-2)^T$，$\\beta=(2,0,0)^T$，$A=\\alpha\\beta^T$，求$A^3$。\n\n解：$\\because\\beta^T\\alpha=[2,0,0][1,3,-2]^T=2$，$\\therefore A^3=(\\alpha\\beta^T)(\\alpha\\beta^T)(\\alpha\\beta^T)=\\alpha(\\beta^T\\alpha)$\n$(\\beta^T\\alpha)\\beta^T=4\\alpha\\beta^T=4A$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s1-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#拆分矩阵",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "拆分矩阵",
  "kind": "例题",
  "text": "将$A^n$拆分为两个矩阵$A^n=(B+C)^n$，其中$BC$应该是可逆的，即$BC=CB$，所以一般有一个是$E$。\n\n例题：$A=\\left(\\begin{array}{ccc}\n    1 & 1 & 0 \\\\\n    0 & 1 & 1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)$，求$A^n$。\n\n解：$A=E+B=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)+\\left(\\begin{array}{ccc}\n    0 & 1 & 0 \\\\\n    0 & 0 & 1 \\\\\n    0 & 0 & 0\n\\end{array}\\right)$。\n\n$\\therefore A^n=(E+B)^n=C_n^0E^n+C_n^1E^{n-1}B+C_n^2E^{n-2}B^2+\\cdots$。\n\n又$B^2=\\left(\\begin{array}{ccc}\n    0 & 1 & 0 \\\\\n    0 & 0 & 1 \\\\\n    0 & 0 & 0\n\\end{array}\\right)\\left(\\begin{array}{ccc}\n    0 & 1 & 0 \\\\\n    0 & 0 & 1 \\\\\n    0 & 0 & 0\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    0 & 0 & 1 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 0\n\\end{array}\\right)$。\n\n$B^3=B^2B=\\left(\\begin{array}{ccc}\n    0 & 0 & 1 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 0\n\\end{array}\\right)\\left(\\begin{array}{ccc}\n    0 & 1 & 0 \\\\\n    0 & 0 & 1 \\\\\n    0 & 0 & 0\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    0 & 0 & 0 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 0\n\\end{array}\\right)=O$。\n\n$\\therefore B^4=B^5=\\cdots=O$。\n\n$\\therefore A^n=(E+B)^n=C_n^0E^n+C_n^1E^{n-1}B+C_n^2E^{n-2}B^2$。\n\n$=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)+n\\left(\\begin{array}{ccc}\n    0 & 1 & 0 \\\\\n    0 & 0 & 1 \\\\\n    0 & 0 & 0\n\\end{array}\\right)+\\dfrac{n(n-1)}{2}\\left(\\begin{array}{ccc}\n    0 & 0 & 1 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 0\n\\end{array}\\right)$",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s1-5",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#分块矩阵",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "分块矩阵",
  "kind": "例题",
  "text": "$\\left[\\begin{array}{cc}\n    A & O \\\\\n    O & B\n\\end{array}\\right]^n=\\left[\\begin{array}{cc}\n    A^n & O \\\\\n    O & B^n\n\\end{array}\\right]$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s2",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#初等变换",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "初等变换",
  "kind": "例题",
  "text": "若$A$和$B$等价，求一个可逆矩阵$P$，使得$PA=B$。只用右乘$P=BA^{-1}$。\n\n需要根据逻辑上的计算还原出左乘的初等矩阵。\n\n例题：$A=\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    -1 & -1 & 1 \\\\\n    0 & 2 & -4\n\\end{array}\\right)$，$B=\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    0 & -1 & 2 \\\\\n    0 & 0 & 0\n\\end{array}\\right)$，当$A\\sim B$时，求$P$使得$PA=B$。.\n\n解：目标是将$A$变为$B$，所以第一步将第一列的第二行的-1变为0。即将第一行加到第二行。\n\n左乘$E_{21}(1)A=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    1 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    -1 & -1 & 1 \\\\\n    0 & 2 & -4\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    0 & -1 & 2 \\\\\n    0 & 2 & -4\n\\end{array}\\right)=C$。\n\n然后对第二列进行消，首先将第三行加上第二行的两倍。\n\n$E_{32}(2)C=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    1 & 1 & 0 \\\\\n    0 & 2 & 1\n\\end{array}\\right)\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    0 & -1 & 2 \\\\\n    0 & 2 & -4\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    1 & -1 & 2 \\\\\n    0 & 0 & 0\n\\end{array}\\right)=B$。\n\n$\\therefore E_{32}(2)E_{21}(1)A=B$。\n\n$P=E_{32}(2)E_{21}(1)=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 2 & 1\n\\end{array}\\right)\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    1 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    1 & 1 & 0 \\\\\n    2 & 2 & 1\n\\end{array}\\right)$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s3-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#定义法",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "定义法",
  "kind": "概念",
  "text": "找出一个矩阵$B$，使得$AB=E$，则$A$可逆，$A^{-1}=B$。\n\n例题：$A$，$B$均是$n$阶方阵，且$AB=A+B$，证明$A-E$可逆，并求$(A-E)^{-1}$。\n\n解：要证明$A-E$，就要从$AB=A+B$中尽量凑出。\n\n$AB=A+B$变为$AB-B=A$，从而提取$(A-E)B=A$，$(A-E)BA^{-1}=E$。\n\n但是$A^{-1}$是未知的，所以$A-E$的逆矩阵不能用$BA^{-1}$来表示。\n\n$AB-A=B$，所以提出$A(B-E)=B$，即$A(B-E)=B-E+E$，$(A-E)(B-E)=E$，所以$A-E$的逆矩阵就是$B-E$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s3-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#分解乘积",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "分解乘积",
  "kind": "例题",
  "text": "将$A$分解为若干个可逆矩阵的乘积。若$A=BC$，$B$，$C$可逆，则$A$可逆，且$A^{-1}=C^{-1}B^{-1}$。同理$(ABC)^{-1}=C^{-1}B^{-1}A^{-1}$。\n\n例题：设$A$，$B$为同阶可逆方阵，且$A^{-1}+B^{-1}$可逆，求$(A+B)^{-1}$。\n\n解：已知$A^{-1}+B^{-1}$可以用来表示其他式子，需要求$A+B$的逆，则需要将$A+B$转为其逆。\n\n$\\because A+B=A(E+A^{-1}B)=A(B^{-1}+A^{-1})B$。\n\n$\\therefore (A+B)^{-1}=B^{-1}(B^{-1}+A^{-1})^{-1}A^{-1}$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s3-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#初等变换",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "初等变换",
  "kind": "例题",
  "text": "$\\left[A\\vdots E\\right]\\overset{r}{\\sim}\\left[E\\vdots A^{-1}\\right]$，$\\left[\\begin{array}{c}\n    A \\\\\n    E\n\\end{array}\\right]\\overset{c}{\\sim}\\left[\\begin{array}{c}\n    E \\\\\n    A^{-1}\n\\end{array}\\right]$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s3-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#分块矩阵",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "分块矩阵",
  "kind": "例题",
  "text": "基于拉普拉斯展开式。\n\n对于一些分块矩阵的逆，若$A$，$B$都可逆，则：$\\left[\\begin{array}{cc}\n    A & O \\\\\n    O & B\n\\end{array}\\right]^{-1}=\\left[\\begin{array}{cc}\n    A^{-1} & O \\\\\n    O & B^{-1}\n\\end{array}\\right]$，$\\left[\\begin{array}{cc}\n    O & A \\\\\n    B & O\n\\end{array}\\right]^{-1}=\\left[\\begin{array}{cc}\n    O & B^{-1} \\\\\n    A^{-1} & O\n\\end{array}\\right]$。\n\n例题：已知$A=\\left(\\begin{array}{cc}\n    B & O \\\\\n    D & C\n\\end{array}\\right)$，其中$B$为$r\\times r$可逆矩阵，$C$为$s\\times s$可逆矩阵，求$A^{-1}$。\n\n解：$\\because\\vert A\\vert=\\left|\\begin{array}{cc}\n    B & O \\\\\n    D & C\n\\end{array}\\right|=\\vert B\\vert\\vert C\\vert\\neq0$，所以$A$可逆，设$A^{-1}=\\left(\\begin{array}{cc}\n    X & Y \\\\\n    Z & W\n\\end{array}\\right)$。\n\n$AA^{-1}=\\left(\\begin{array}{cc}\n    E_r & O \\\\\n    O & E_s\n\\end{array}\\right)=E_{r+s}$。即$\\left(\\begin{array}{cc}\n    BX & BY \\\\\n    DX+CZ & DY+CW\n\\end{array}\\right)=E_{r+s}$。\n\n$\\therefore\\left\\{\\begin{array}{l}\n    BX=E \\\\\n    BY=O \\\\\n    DX+CZ=O \\\\\n    DY+CW=E\n\\end{array}\\right.$，$\\left\\{\\begin{array}{ll}\n    B^{-1}BX=B^{-1}, & X=B^{-1}\\\\\n    B^{-1}BY=O, & Y=O \\\\\n    CZ=-DX=-DB^{-1}, & Z=-C^{-1}DB^{-1} \\\\\n    CW=E, & W=C^{-1}\n\\end{array}\\right.$。\n\n$\\therefore A^{-1}=\\left(\\begin{array}{cc}\n    B^{-1} & O \\\\\n    -C^{-1}DB^{-1} & C^{-1}\n\\end{array}\\right)$。\n\n当分块矩阵为三角矩阵时，对角线为原方块矩阵的逆矩阵，非0的一角为原矩阵，再左乘同行的逆矩阵，右乘同列的逆矩阵。\n\n$\\therefore A=\\left(\\begin{array}{cc}\n    B & D \\\\\n    O & C\n\\end{array}\\right)$，$A^{-1}=\\left(\\begin{array}{cc}\n    B^{-1} & -B^{-1}DC^{-1} \\\\\n    O & C^{-1}\n\\end{array}\\right)$。\n\n当分块矩阵为副对角矩阵时，对角线为对角方块矩阵的逆矩阵，非0的一角为原矩阵，再左乘同行的逆矩阵，右乘同列的逆矩阵。\n\n$\\therefore A=\\left(\\begin{array}{cc}\n    O & B \\\\\n    C & D\n\\end{array}\\right)$，$A^{-1}=\\left(\\begin{array}{cc}\n    -C^{-1}DB^{-1} & C^{-1} \\\\\n    B^{-1} & O\n\\end{array}\\right)$。\n\n$\\therefore A=\\left(\\begin{array}{cc}\n    D & B \\\\\n    C & O\n\\end{array}\\right)$，$A^{-1}=\\left(\\begin{array}{cc}\n    O & C^{-1} \\\\\n    B^{-1} & -C^{-1}DB^{-1}\n\\end{array}\\right)$。\n\n$A=\\left(\\begin{array}{ccc}\n    A_1 \\\\\n     & \\ddots \\\\\n     & & A_n\n\\end{array}\\right)$，$A^{-1}=\\left(\\begin{array}{ccc}\n    A_1^{-1} \\\\\n     & \\ddots \\\\\n     & & A_n^{-1}\n\\end{array}\\right)$。\n\n$A=\\left(\\begin{array}{ccc}\n     & & A_1 \\\\\n     & \\ddots \\\\\n    A_n \n\\end{array}\\right)$，$A^{-1}=\\left(\\begin{array}{ccc}\n    & & A_n^{-1} \\\\\n    & \\ddots \\\\\n   A_1^{-1}\n\\end{array}\\right)$。\n\n例题：已知矩阵$A$的伴随矩阵$A^*=\\left[\\begin{array}{cccc}\n    4 & -2 & 0 & 0 \\\\\n    -3 & 1 & 0 & 0 \\\\\n    0 & 0 & -4 & 0 \\\\\n    0 & 0 & 0 & -1\n\\end{array}\\right]$，求$A$。\n\n解：由于$A^{-1}=\\dfrac{A^*}{\\vert A\\vert}$，所以$A=\\vert A\\vert(A^*)^{-1}$。已知$A^*$可知$(A^*)^{-1}$，所以重点就是求$\\vert A\\vert$。\n\n又$\\vert A^*\\vert=\\vert A\\vert^{n-1}$，$\\vert A^*\\vert=-8$，$\\vert A\\vert=-2$。\n\n所以根据分块矩阵的逆运算，可以得到$(A^*)^{-1}=\\left[\\begin{array}{cccc}\n    -\\dfrac{1}{2} & -1 & 0 & 0 \\\\\n    -\\dfrac{3}{2} & -2 & 0 & 0 \\\\\n    0 & 0 & -\\dfrac{1}{4} & 0 \\\\\n    0 & 0 & 0 & -1\n\\end{array}\\right]$。\n\n所以$A=\\left[\\begin{array}{cccc}\n    1 & 2 & 0 & 0 \\\\\n    3 & 4 & 0 & 0 \\\\\n    0 & 0 & \\dfrac{1}{2} & 0 \\\\\n    0 & 0 & 0 & 2\n\\end{array}\\right]$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s4",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#伴随矩阵",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "伴随矩阵",
  "kind": "定理",
  "text": "伴随矩阵一般只会计算三阶以及以下。\n\n伴随矩阵和逆矩阵往往共同参与运算，并有许多公式。\n\n-$(A^*)^{-1}=\\dfrac{A}{\\vert A\\vert}$。\n\n-$\\vert A^*\\vert=\\vert A\\vert^{n-1}$。\n\n-$(A^*)^*=\\vert A\\vert^{n-2}A$。\n\n证明关系式一，由于$A^*=\\vert A\\vert A^{-1}$，$(A^*)^{-1}=(\\vert A\\vert A^{-1})^{-1}=\\dfrac{1}{\\vert A\\vert}(A^{-1})^{-1}=\\dfrac{1}{\\vert A\\vert}A$。\n\n证明关系式二，对$A^*=\\vert A\\vert A^{-1}$两边取行列式，得到$\\vert A^*\\vert=\\vert\\vert A\\vert A^{-1}\\vert=\\vert A\\vert^n\\vert A^{-1}\\vert=\\dfrac{\\vert A\\vert^n}{\\vert A\\vert}=\\vert A\\vert^{n-1}=\\dfrac{1}{\\vert A^{-1}\\vert^{n-1}}$。\n\n证明关系式三，对$(A^*)^*=(A^*)^{-1}\\vert A^*\\vert=(\\vert A\\vert A^{-1})^{-1}\\vert A\\vert^{n-1}=\\vert A\\vert^{-1}A\\vert A\\vert^{n-1}=\\vert A\\vert^{n-2}A$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s5-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#两项积商",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "两项积商",
  "kind": "例题",
  "text": "-$\\vert A^T\\vert=\\vert A\\vert$。\n\n-$\\vert A^{-1}\\vert=\\dfrac{1}{\\vert A\\vert}$。\n\n-$\\vert\\lambda A\\vert=\\lambda^n\\vert A\\vert$。\n\n-$\\vert AB\\vert=\\vert A\\vert\\cdot\\vert B\\vert=\\vert BA\\vert$。\n\n-$\\vert A^*\\vert=\\vert A\\vert^{n-1}$。\n\n因为两项积商比较简单，所以基本上会变换$A$和$B$，让其变为转置或逆矩阵。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s5-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#两项和差",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "两项和差",
  "kind": "例题",
  "text": "两项和差需要将方阵拆分为向量组的形式，然后根据矩阵与行列式的运算法则进行运算。（注意其中的差别）\n\n例题：设四阶方阵$A=[\\alpha,\\gamma_2,\\gamma_3,\\gamma_4]$，$B=[\\beta,\\gamma_2,\\gamma_3,\\gamma_4]$，其中$\\alpha$、$\\beta$、$\\gamma_i$均为四维向量，且$\\vert A\\vert=5$，$\\vert B\\vert=-\\dfrac{1}{2}$，求$\\vert A+2B\\vert$。\n\n解：$=\\vert[\\alpha,\\gamma_2,\\gamma_3,\\gamma_4]+2[\\beta,\\gamma_2,\\gamma_3,\\gamma_4]\\vert=\\vert[\\alpha+2\\beta,3\\gamma_2,3\\gamma_3,3\\gamma_4]\\vert=27\\vert[\\alpha+2\\beta,\\gamma_2,\\gamma_3,\\gamma_4]\\vert=27\\vert[\\alpha,\\gamma_2,\\gamma_3,\\gamma_4]\\vert+54\\vert[\\beta,\\gamma_2,\\gamma_3,\\gamma_4]\\vert=27(\\vert A\\vert+2\\vert B\\vert)=108$。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s6-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#矩阵方程",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵方程",
  "kind": "例题",
  "text": "含有未知矩阵的方程就是矩阵方程，需要将方程进行恒等变形，化为$AX=B$、$XA=B$或$AXB=C$的形式。\n\n若$A$、$B$可逆，且可以分别得到$X=A^{-1}B$，$X=BA^{-1}$，$X=A^{-1}CB^{-1}$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s6-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#直接化简",
  "subject": "xiandai",
  "topic": "直接化简",
  "title": "直接化简",
  "kind": "例题",
  "text": "例题：设3阶方阵$A$，$B$满足$A^{-1}BA=6A+BA$，且$A=\\left(\\begin{array}{ccc}\n    \\dfrac{1}{3} & 0 & 0 \\\\\n    0 & \\dfrac{1}{4} & 0 \\\\\n    0 & 0 & \\dfrac{1}{5}\n\\end{array}\\right)$，求$B$。\n\n解：$A^{-1}BA=(6E+B)A$，$A^{-1}B=6E+B$，$A^{-1}B-B=6E$，$(A^{-1}-E)B=6E$。\n\n$\\therefore B=6(A^{-1}-E)^{-1}$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s6-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#凑目标式",
  "subject": "xiandai",
  "topic": "凑目标式",
  "title": "凑目标式",
  "kind": "例题",
  "text": "有时候直接化简非常麻烦，因为所求的式子很复杂，甚至出现结果不能得到的情况。\n\n例题：已知$AB=A+B$，其中$B=\\left[\\begin{array}{ccc}\n    1 & 1 & 0 \\\\\n    1 & 1 & 0 \\\\\n    0 & 0 & 2\n\\end{array}\\right]$，求$(A-E)^{-1}$。\n\n解：已知$AB=A+B$，求$A-E$，则向目标计算。\n\n$AB-B=A$，即$(A-E)B=A$，$(A-E)^{-1}=BA^{-1}$。因为$A$未知，所以要消去$A$。\n\n根据$AB=A+B$，得到$AB-A=B$，即$A(B-E)=B$，$A^{-1}=(B-E)B^{-1}$。\n\n$(A-E)^{-1}=BA^{-1}=B(B-E)B^{-1}$，然后就不知道接下来怎么办了。\n\n我们很希望$BB^{-1}$在一起消掉，但是无论如何操作都无法完成。但是也可以通过此得到解题的启示，按$(A-E)(B-E)$去凑。\n\n回到$(A-E)B=A$，去凑$B-E$，先尝试两边减去$E$，得到$(A-E)B-E=A-E$，正好左移右项$(A-E)(B-E)=E$，解得$(A-E)^{-1}=B-E$。\n\n即$=\\left[\\begin{array}{ccc}\n    0 & 1 & 0 \\\\\n    1 & 0 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right]$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s7-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#未知参数",
  "subject": "xiandai",
  "topic": "矩阵的秩",
  "title": "未知参数",
  "kind": "例题",
  "text": "已知一个矩阵的秩，求其矩阵中的参数。需要将矩阵简化，使得最下面的一行除了参数没有别的非零常数。\n\n例题：已知$A=\\left[\\begin{array}{cccc}\n    1 & 1 & a & 4 \\\\\n    1 & 0 & 2 & a \\\\\n    -1 & a & 1 & 0\n\\end{array}\\right]$，$r(A)=3$，求$A$。\n\n解：首先对$A$化简：$A=\\left[\\begin{array}{cccc}\n    1 & 1 & a & 4 \\\\\n    0 & 1 & a-2 & 4-a \\\\\n    0 & 0 & (a+1)(3-a) & a(a-3)\n\\end{array}\\right]$，若$r(A)=3$，则$(a+1)(3-a)$与$a(a-3)$不全为0，所以$a\\neq3$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s7-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#矩阵运算",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵运算",
  "kind": "例题",
  "text": "给出几个矩阵，进行矩阵运算求出对应的秩。\n\n$r(kA)=r(A)$。\n\n$r(AB)\\leqslant\\min\\{r(A),r(B)\\}$。当且仅当$AB$满秩等号成立。\n\n$r(A+B)\\leqslant r(A|B)\\leqslant r(A)+r(B)$。\n\n$r(A^*)=\\left\\{\\begin{array}{l}\n    n, r(A)=n \\\\\n    1, r(A)=n-1 \\\\\n    0, r(A)<n-1\n\\end{array}\\right.$。\n\n例题：已知$A=\\left[\\begin{array}{cccc}\n    1 & 2 & 3 & 4 \\\\\n    2 & 3 & 4 & 5 \\\\\n    3 & 4 & 5 & 6 \\\\\n    4 & 5 & 6 & 7\n\\end{array}\\right]$，$B=\\left[\\begin{array}{cccc}\n    0 & 1 & -1 & 2 \\\\\n    0 & -1 & 2 & 3 \\\\\n    0 & 0 & 1 & 4 \\\\\n    0 & 0 & 0 & 2\n\\end{array}\\right]$，求$r(AB+2A)$。\n\n解：$r(AB+2A)=r(A(B+2E))$。又$B+2E=\\left[\\begin{array}{cccc}\n    2 & 1 & -1 & 2 \\\\\n    0 & 1 & 2 & 3 \\\\\n    0 & 0 & 3 & 4 \\\\\n    0 & 0 & 0 & 4\n\\end{array}\\right]$，$r(B+2E)=4$。\n\n又$A=\\left[\\begin{array}{cccc}\n    1 & 2 & 3 & 4 \\\\\n    2 & 3 & 4 & 5 \\\\\n    3 & 4 & 5 & 6 \\\\\n    4 & 5 & 6 & 7\n\\end{array}\\right]=\\left[\\begin{array}{cccc}\n    1 & 2 & 3 & 4 \\\\\n    1 & 1 & 1 & 1 \\\\\n    1 & 1 & 1 & 1 \\\\\n    1 & 1 & 1 & 1\n\\end{array}\\right]=\\left[\\begin{array}{cccc}\n    1 & 2 & 3 & 4 \\\\\n    0 & -1 & -2 & -3 \\\\\n    0 & 0 & 0 & 0 \\\\\n    0 & 0 & 0 & 0\n\\end{array}\\right]$。\n\n所以$r(A)=2$，$r(AB+2A)=\\min\\{r(A),r(B+2E)\\}=2$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s8-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#矩阵等价",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵等价",
  "kind": "例题",
  "text": "其实求等价矩阵就是判定其秩是否相等。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s8-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#行列式变换",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列式变换",
  "kind": "例题",
  "text": "注意如果携带参数，要保证乘除的参数式子不为0。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-2-matrix-matrix-s8-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/2-matrix/matrix.tex#行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列式",
  "kind": "例题",
  "text": "只有矩阵可逆，即满秩时行列式才不为0，否则为0。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s1-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#线性相关性",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "线性相关性",
  "kind": "方法",
  "text": "使用行列式不等于$0$的方法最方便，但是有时候行列不同就不能这么做了。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s1-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#初等运算",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "初等运算",
  "kind": "例题",
  "text": "多用于选择题，给出$n$维线性无关向量，判断向量组是否线性无关。如果向量组初等运算为0就代表线性相关。\n\n例题：已知$n$维向量$\\alpha_1$，$\\alpha_2$，$\\alpha_3$线性无关，则判断线性相关性：$\\alpha_1+\\alpha_2$，$\\alpha_2-\\alpha_3$，$\\alpha_3+\\alpha_1$。\n\n解：$\\alpha_1+\\alpha_2$与$\\alpha_2-\\alpha_3$，共同出现了$\\alpha_2$，首先要消掉$\\alpha_2$，所以相减得到$\\alpha_1+\\alpha_3$，然后发现跟后面的$\\alpha_3+\\alpha_1$一样，所以直接一减得到0，表示线性相关。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s1-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#定义法",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "定义法",
  "kind": "概念",
  "text": "基本是证明题，若证明$\\alpha$、$\\beta$线性无关，则令$k_1\\alpha+k_2\\beta=0$，判断$k_i$的值，如果只有零解则代表$k$矩阵为满秩，从而线性无关。\n\n#### 代入重组\n\n若要求线性相关的式子由其他向量构成，则将式子代入表示目标式子。\n\n例题：设$\\alpha_1$，$\\alpha_2$，$\\beta_1$，$\\beta_2$，$\\beta_3$都是$n$维向量，$n\\geqslant3$，且$\\beta_1=\\alpha_1+\\alpha_2$，$\\beta_2=\\alpha_1-2\\alpha_2$，$\\beta_3=3\\alpha+1+2\\alpha_2$，证明向量组$\\beta_1$，$\\beta_2$，$\\beta_3$线性相关。\n\n证明：若存在$k_1,k_2,k_3$使得$k_1\\beta_1+k_2\\beta_2+k_3\\beta_3=0$。\n\n代入$\\alpha$表示$\\beta$的式子：$k_1(\\alpha_1+\\alpha_2)+k_2(\\alpha_1-2\\alpha_2)+k_3(3\\alpha_1+2\\alpha_2)=0$。\n\n$\\therefore(k_1+k_2+3k_3)\\alpha_1+(k_1-2k_2+2k_3)\\alpha_2=0$。\n\n$\\therefore k_1+k_2+3k_3=0$，且$k_1-2k_2+2k_3=0$即可。\n\n而未知数的个数大于方程个数，所以有无穷多解，从而必然有非零解，从而$\\beta_1$，$\\beta_2$，$\\beta_3$线性相关。\n\n#### 同乘\n\n若要求线性相关的式子存在一定的乘积关系，则可以用同乘一步步消去系数。\n\n例题：设$A$是$n$阶矩阵，若存在正整数$k$，使得线性方程组$A^kx=0$有解向量$\\alpha$，且$A^{k-1}\\alpha\\neq0$，证明向量组$\\alpha,A\\alpha,\\cdots,A^{k-1}\\alpha$线性无关。\n\n证明：假设$\\alpha,A\\alpha,\\cdots,A^{k-1}\\alpha$线性相关，则设存在系数$\\lambda_1,\\lambda_2,\\cdots,\\lambda_k$使得$\\lambda_1\\alpha+\\lambda_2A\\alpha+\\cdots+\\lambda_kA^{k-1}\\alpha=0$。\n\n$\\because A^kx=0$的解为$\\alpha$，$\\therefore A^k\\alpha=0$，$\\therefore\\cdots=A^{k+2}\\alpha=A^{k+1}\\alpha=A^k\\alpha=0$。\n\n左乘$A^{k-1}$，得到$\\lambda_1A^{k-1}\\alpha+\\lambda_2A^k\\alpha+\\cdots+\\lambda_kA^{2k-2}\\alpha=\\lambda_1A^{k-1}\\alpha=0$。\n\n$\\because A^{k-1}\\alpha\\neq0$，$\\therefore\\lambda_1=0$，消去$\\lambda_1$：$\\lambda_2A\\alpha+\\lambda_3A^2\\alpha+\\cdots+\\lambda_kA^{k-1}\\alpha=0$。\n\n左乘$A^{k-2}$，得到$\\lambda_2A^{k-1}\\alpha+\\lambda_3A^k\\alpha+\\cdots+\\lambda_kA^{2k-3}\\alpha=\\lambda_2A^{k-1}\\alpha=0$。\n\n$\\because A^{k-1}\\alpha\\neq0$，$\\therefore\\lambda_2=0$，消去$\\lambda_2$：$\\lambda_3A^2\\alpha+\\lambda_4A^3\\alpha+\\cdots+\\lambda_kA^{k-1}\\alpha=0$。\n\n同理依次左乘$A^n$，所以$\\lambda_1=\\lambda_2=\\cdots=\\lambda_k=0$，所以$\\alpha,A\\alpha,\\cdots,A^{k-1}\\alpha$线性无关。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s1-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列式",
  "kind": "例题",
  "text": "对向量的线性相关性可以从其向量组组成的行列式来计算，若行列式值为0则线性相关，若行列式值不为0则线性无关。\n\n注意这里容易失根。要仔细找出所有为0的因式，不要随便降低阶数。\n\n例题：设$a_1,a_2,\\cdots,a_s$是$s$个互不相同的数，探究$s$个$n$维列向量$\\alpha_i=[1,a_i,a_i^a,\\cdots,a_i^{n-1}]^T$（$i=1,2,\\cdots,s$）的线性相关性。\n\n解：当$s>n$时，有$n$个方程$s$个未知数，所以必然存在自由变量，从而必然线性相关性。\n\n当$s=n$时，$\\vert\\alpha_1 \\alpha_2 \\cdots \\alpha_n\\vert=\\left|\\begin{array}{cccc}\n    1 & 1 & \\cdots & 1 \\\\\n    a_1 & a_2 & \\cdots & a_n \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_1^{n-1} & a_2^{n-1} & \\cdots & a_n^{n-1}\n\\end{array}\\right|=\\prod\\limits_{1\\leqslant j\\leqslant i\\leqslant n}(a_i-a_j)\\neq0$。所以线性无关。\n\n当$s<n$时，对方程矩阵切割保留方形的$s$个$=\\left|\\begin{array}{cccc}\n    1 & 1 & \\cdots & 1 \\\\\n    a_1 & a_2 & \\cdots & a_n \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_1^{n-1} & a_2^{n-1} & \\cdots & a_n^{n-1} \\\\\n    \\vdots & \\vdots & \\vdots & \\vdots\n\\end{array}\\right|$，上面因为范德蒙德行列式已经不等于0，即上面的方阵线性无关，原来无关延长无关，所以整个方程都线性无关。\n\n综上当$s>n$时线性相关，$s\\leqslant n$时线性无关。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s1-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#矩阵秩",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵秩",
  "kind": "例题",
  "text": "当向量的个数与维数不同时就不能使用行列式去分析，而只能用矩阵的秩来分析。当矩阵满秩则线性无关，当矩阵降秩则线性相关。\n\n当谈到多个向量是否线性相关时可以将向量组组成矩阵，判断其秩。满秩就是线性无关，降秩就是线性相关。\n\n当谈到一个向量是否能被其他向量线性表出时，要将这些向量全部组成一起，判断能否被其他向量表出的向量放在最右边，然后判断增广矩阵的秩。\n\n- 若$r(\\alpha_1,\\alpha_2,\\cdots)\\neq r(\\alpha_1,\\alpha_2,\\cdots,\\beta)$，则$\\beta$无法被$\\alpha$线性表出。\n\n- 若$r(\\alpha_1,\\alpha_2,\\cdots)=r(\\alpha_1,\\alpha_2,\\cdots,\\beta)<r$，则$\\beta$可以被$\\alpha$无穷线性表出。表达式为基础解系。\n\n- 若$r(\\alpha_1,\\alpha_2,\\cdots)=r(\\alpha_1,\\alpha_2,\\cdots,\\beta)=r$，则$\\beta$可以被$\\alpha$惟一线性表出。表达式为将矩阵化为单位矩阵后$\\beta$所在就是$\\alpha$的系数。\n\n例题：已知$\\alpha_1=(1,2,1)^T$，$\\alpha_2(2,3,a)^T$，$\\alpha_3=(1,a+2,-2)^T$，$\\beta=(1,3,0)^T$，若$\\beta$可以由$\\alpha_1$、$\\alpha_2$，$\\alpha_3$线性表示，且表示法不唯一，求$a$。\n\n解：设$x_1\\alpha_1+x_2\\alpha_2+x_2\\alpha_3=\\beta$，由$\\beta$可以由$\\alpha_1$、$\\alpha_2$，$\\alpha_3$线性表示，且表示法不唯一可知$Ax=\\beta$有无穷解，即$r(A)=r(A|B)<3$。\n\n$=[\\alpha_1,\\alpha_2,\\alpha_3|\\beta]=\\left[\\begin{array}{cccc}\n    1 & 2 & 1 & 1 \\\\\n    2 & 3 & a+2 & 3 \\\\\n    1 & a & -2 & 0\n\\end{array}\\right]=\\left[\\begin{array}{cccc}\n    1 & 2 & 1 & 1 \\\\\n    0 & -1 & a & 1 \\\\\n    0 & 0 & a^2-2a-3 & a-3\n\\end{array}\\right]$。\n\n$\\therefore a=3$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s2-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#极大线性无关组",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "极大线性无关组",
  "kind": "方法",
  "text": "极大线性无关组一般与向量组秩在一起使用。一般解出极大线性无关组与秩，还要用极大线性无关组表示出其余的向量，基本步骤：\n\n- 将向量组拼接为矩阵$A$，对$A$进行初等行变换，化为最简行阶梯形矩阵，确定矩阵秩$r(A)$。\n\n- 在最简行阶梯矩阵中按列找出一个秩为$r(A)$的子矩阵，即在每个台阶上找一列列向量，找$r(A)$列构成一个新矩阵，其就是一个极大线性无关组。\n\n- 将其余向量依次与极大线性无关组进行对比解出表示方法。\n\n注意：求向量组的秩可以进行初等变换，包括行变换和列变换。但是求极大线性无关组时最好只使用行变换，因为列变换会改变方程的解。从而解方程组只能做行变换。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s2-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#向量组线性标出",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "向量组线性标出",
  "kind": "例题",
  "text": "若对于多个向量组成的向量组$B$是否能线性表出向量组$A$（而不是单个向量$\\alpha$），把$A$和$B$合并，则若合并后的向量组$C$的秩大于$B$的，那么向量组$B$不能线性表示向量组$A$。\n\n解决方法跟单个向量表出一样，将$B$和$A$合并为增广矩阵，然后进出行变换。\n\n也给出这样的结论，若$B$自身线性相关，则无法线性表出其他矩阵。\n\n例题：设向量组$\\alpha_1=(1,0,1)^T$、$\\alpha_2=(0,1,1)^T$、$\\alpha_3=(1,3,5)^T$不能由向量组$\\beta_1=(1,1,1)^T$、$\\beta_2=(1,2,3)^T$、$\\beta_3=(3,4,a)^T$线性表示，求$a$。\n\n解：已知题目，则$(\\beta_1,\\beta_2,\\beta_3)$线性相关。\n\n对其行变换，解得$a=5$。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s2-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#向量线性表示",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "向量线性表示",
  "kind": "例题",
  "text": "即要求$\\beta$关于$\\alpha_i$的线性表出表达式。\n\n基本方法是设$\\beta=a\\alpha_1+b\\alpha_2+\\cdots$，然后每行代入求出，不过也可以使用矩阵变换法。\n\n可以同时求多个$\\beta$的表示方式，设$\\alpha_i$为长度为$h$的列向量，一共有$n$个，组成$A=(\\alpha_1,\\alpha_2,\\cdots,\\alpha_n)$，设$\\beta_i$为长度为$h$的列向量，一共有$n$个，组成$B=(\\beta_1,\\beta_2,\\cdots,\\beta_n)$。\n\n$[A|B]$通过线性变换得到$[E|C]$，则$B=CA$。\n\n例题：用$\\alpha_1=(1,1,1)^T$、$\\alpha_2=(1,2,4)^T$、$\\alpha_3=(1,3,9)^T$表示$\\beta=(1,1,3)^T$。\n\n解：组成矩阵$\\left[\\begin{array}{cccc}\n    1 & 1 & 1 & 1 \\\\\n    1 & 2 & 3 & 1 \\\\\n    1 & 4 & 9 & 3\n\\end{array}\\right]=\\left[\\begin{array}{cccc}\n    1 & 0 & 0 & 2 \\\\\n    0 & 1 & 0 & -2 \\\\\n    0 & 0 & 1 & 1\n\\end{array}\\right]$，所以$\\beta=2\\alpha_1-2\\alpha_2+\\alpha_3$。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s3",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#等价向量组",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "等价向量组",
  "kind": "例题",
  "text": "$r(A)=r(B)=r(A|B)$，所以需要计算三个向量组构成的矩阵的秩就可以了。\n\n例题：设向量组$\\alpha$：$\\alpha_1=[1,0,2]^T$，$\\alpha_2=[0,1,1]^T$，$\\alpha_3=[2,-1,a+4]^T$，向量组$\\beta$：$\\beta_1=[1,2,4]^T$，$\\beta_2=[1,-1,a+2]^T$，$\\beta_3=[3,3,10]^T$。\n\n矩阵$A=\\left(\\begin{array}{ccc}\n    1 & 0 & 2 \\\\\n    0 & 1 & -1 \\\\\n    2 & 1 & a+4\n\\end{array}\\right)$，$B=\\left(\\begin{array}{ccc}\n    1 & 1 & 3 \\\\\n    2 & -1 & 3 \\\\\n    4 & a+2 & 10\n\\end{array}\\right)$。\n\n(1)$AB$是否等价。\n\n(2)向量组$AB$是否等价。\n\n(1)解：化简$A=\\left(\\begin{array}{ccc}\n    1 & 0 & 2 \\\\\n    0 & 1 & -1 \\\\\n    0 & 0 & a+1\n\\end{array}\\right)$，$B=\\left(\\begin{array}{ccc}\n    1 & 3 & 1 \\\\\n    0 & 1 & 1 \\\\\n    0 & 0 & a\n\\end{array}\\right)$\n\n若$a\\neq-1$，则$r(A)=3$，且$a\\neq0$，则$r(B)=3$，此时$AB$等价。\n\n若$a=-1$，则$r(A)=2$，$r(B)=3$，$AB$不等价。\n\n若$a=0$，则$r(B)=2$，$r(A)=2$，$AB$不等价。\n\n(2)解：因为向量组$\\alpha$拼接在一起就是$A$，$\\beta$拼接在一起就是$B$，所以$r(\\alpha)=r(A)$，$r(\\beta)=r(B)$，$r(\\alpha|\\beta)=r(A|B)$。\n\n将$AB$拼在一起做行变换，得到$(A|B)=\\left(\\begin{array}{c:c}\n    \\begin{matrix}\n        1 & 0 & 2 \\\\\n        0 & 1 & -1 \\\\\n        0 & 0 & a+1\n    \\end{matrix}&\n    \\begin{matrix}\n        1 & 1 & 3 \\\\\n        2 & -1 & 3 \\\\\n        0 & a+1 & 1\n    \\end{matrix}\n\\end{array}\\right)$。\n\n若$a\\neq-1\\neq0$，则$r(A)=r(B)=r(A|B)$。向量组等价。\n\n若$a=-1$或$a=0$，则$r(A)\\neq r(B)$，所以不等价。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s4-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#基坐标",
  "subject": "xiandai",
  "topic": "向量组的基与坐标",
  "title": "基坐标",
  "kind": "例题",
  "text": "对于任意向量$\\alpha=\\xi_ix_i=\\eta_iy_i$，$\\xi_i$、$\\eta_i$为基，$x_i$、$y_i$为向量基$\\xi_i$、$\\eta_i$下的坐标。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-3-vector-vector-s4-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/3-vector/vector.tex#过渡矩阵",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "过渡矩阵",
  "kind": "定理",
  "text": "对于两个基$\\eta_i$、$\\xi_i$，$\\eta_i=\\xi_iC$的$C$为$\\xi_i$到$\\eta_i$的过渡矩阵，该式子为基变换公式。\n\n所以得到$x=Cy$，这个公式为坐标变换公式。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s1-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#通解求通解",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "通解求通解",
  "kind": "概念",
  "text": "题目给出$\\xi_i$是$Ax=0$的基础解系，然后判断这几个基础解系的变式是否还能称为基础解系，判断条件就是对这些基础解析进行初等运算（往往是加减），如果最后能凑成0则代表其线性相关，所以不能成为基础解系，否则可以。\n\n如$\\xi_1+\\xi_2$、$\\xi_2+x_3$、$\\xi_3+\\xi_1$可以成为，因为$(\\xi_1+\\xi_2)-(\\xi_2+x_3)+(\\xi_3+\\xi_1)=2\\xi_1\\neq0$，$\\xi_1-\\xi_2$、$\\xi_2-x_3$、$\\xi_3-\\xi_1$不能成为，因为$(\\xi_1-\\xi_2)+(\\xi_2-x_3)+(\\xi_3-\\xi_1)=0$。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s1-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#通解判断特解",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "通解判断特解",
  "kind": "例题",
  "text": "已知特解为方程的一个解，知道通解，所以特解可以由通解线性表出，所以将通解和特解组成增广矩阵进行初等变换（如果是判断多个向量，则可以一起组成），通解矩阵的秩和增广矩阵的秩相同则代表可以线性表出，否则不能。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s1-5",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#特解判断特解",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "特解判断特解",
  "kind": "例题",
  "text": "已知特解，对特解进行初等变换，然后判断这个式子是否还是原方程的特解，可以直接将新式子代入原方程求得结果。\n\n例题：已知$\\alpha_1$、$\\alpha_2$是非齐次线性方程组$Ax=b$的两个不同解，则判断$3\\alpha_1-2\\alpha_2$是否为原方程的特解。\n\n解：已知$\\alpha_1$、$\\alpha_2$是非齐次线性方程组$Ax=b$的两个不同解，即$A\\alpha_1=b$，$A\\alpha_2=b$。\n\n代入$Ax=b$：$A(3\\alpha_1-2\\alpha_2)=3A\\alpha_1-2A\\alpha_2=3b-2b=b$，所以成立。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s2",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#反求参数",
  "subject": "xiandai",
  "topic": "微分方程",
  "title": "反求参数",
  "kind": "例题",
  "text": "基本上都是给出方程组有无穷多解：\n\n- 齐次方程组：系数矩阵是降秩的；行列式值为0。\n\n- 非齐次方程组：系数矩阵与增广矩阵秩相同且降秩。\n\n例题：已知齐次线性方程组$\\left\\{\\begin{array}{l}\n    ax_1-3x_2+3x_3=0 \\\\\n    x_1+(a+2)x_2+3x_3=0 \\\\\n    2x_1+x_2-x_3=0\n\\end{array}\\right.$有无穷多解，求参数$a$。\n\n解：使用矩阵比较麻烦，三阶的系数矩阵可以使用行列式。\n\n$\\vert A\\vert=\\left\\vert\\begin{array}{ccc}\n    a & -3 & 3 \\\\\n    1 & a+2 & 3 \\\\\n    2 & 1 & -1 \\\\\n\\end{array}\\right\\vert=\\left\\vert\\begin{array}{ccc}\n    a & 0 & 3 \\\\\n    1 & a+5 & 3 \\\\\n    2 & 0 & -1 \\\\\n\\end{array}\\right\\vert=(a+5)(a+6)=0$。\n\n解得$a=-5$或$a=-6$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s3-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#抽象线性方程",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "抽象线性方程",
  "kind": "例题",
  "text": "求$Ax=B$的解：\n\n- 求$A$的秩。\n\n- 求$Ax=0$的基础解系。\n\n- 求$Ax=\\beta$的一个特解。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s3-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#余子式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "余子式",
  "kind": "例题",
  "text": "例题：设$A$为三阶方阵，$A=(a_{ij})_{3\\times3}$，且$a_{ij}=A_{ij}$（$i,j=1,2,3$），其中$A_{ij}$为$a_{ij}$的代数余子式，$a_{33}\\neq0$，$b=(a_{13},a_{23},a_{33})^T$，求非齐次线性方程组$Ax=b$的解。\n\n解：由于是抽象线性方程，所以必须要充分利用方程和矩阵的性质。题目中给出的主要是代数余子式，由行列式的一行或一列的元素乘上对应的代数余子式可得行列式值的性质：\n\n$b$为第三列元素，乘上对应的代数余子式得行列式值：$b(A_{13},A_{23},A_{33})=a_{13}A_{13}+a_{23}A_{23}=a_{13}^2+a_{23}^2+a_{33}^2\\geqslant0$。\n\n又$a_{33}\\neq0$，$\\therefore b(A_{13},A_{23},A_{33})=\\vert A\\vert>0$，$r(A)=3$，$Ax=b$解唯一$x=A^{-1}b$。\n\n根据逆矩阵公式$x=A^{-1}b=\\dfrac{A^*b}{\\vert A\\vert}$，且代数余子式乘上非对应元素值都为0。\n\n$=\\dfrac{1}{\\vert A\\vert}\\left[\\begin{array}{ccc}\n    A_{11} & A_{21} & A_{31} \\\\\n    A_{12} & A_{22} & A_{32} \\\\\n    A_{13} & A_{23} & A_{33} \n\\end{array}\\right]\\left[\\begin{array}{c}\n    a_{13} \\\\\n    a_{23} \\\\\n    a_{33}\n\\end{array}\\right]=\\dfrac{1}{\\vert A\\vert}\\left[\\begin{array}{c}\n    0 \\\\\n    0 \\\\\n    \\vert A\\vert\n\\end{array}\\right]=\\left[\\begin{array}{c}\n    0 \\\\\n    0 \\\\\n    1\n\\end{array}\\right]$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s3-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#解的方程",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "解的方程",
  "kind": "例题",
  "text": "例题：已知四阶方阵$A=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4)$，$\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4$为四维列向量，且$\\alpha_2,\\alpha_3,\\alpha_4$线性无关，若$\\alpha_1=2\\alpha_2-\\alpha_3$，$\\beta=\\alpha_1+\\alpha_2+\\alpha_3+\\alpha_4$，求$Ax=\\beta$的通解。\n\n解：由于$\\alpha_2,\\alpha_3,\\alpha_4$线性无关，$r(A)\\geqslant3$，由$\\alpha_1=2\\alpha_2-\\alpha_3$，$r(A)\\leqslant3$，所以$r(A)=3$。$s=n-r=4-3=1$，所以解向量为一个。\n\n且$\\alpha_1=2\\alpha_2-\\alpha_3$，整理得$\\alpha_1-2\\alpha_2+\\alpha_3+0\\alpha_4=0$，即$[\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4][1,-2,1,0]^T\\\\=0$，即$[1,-2,1,0]^T$为$Ax=0$的一个通解。\n\n$\\beta=\\alpha_1+\\alpha_2+\\alpha_3+\\alpha_4$，即$\\beta=[\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4][1,1,1,1]^T$，即$[1,1,1,1]^T$为$Ax=\\beta$的一个特解。\n\n所以基础解系为$k[1,-2,1,0]^T+[1,1,1,1]$。\n\n例题：已知$4\\times3$矩阵$A=(\\alpha_1,\\alpha_2,\\alpha_3)$，非齐次线性方程组$Ax=\\beta$的通解为$(1,2,-1)^T+k(1,-2,3)^T$，$k$为任意常数，令$B=(\\alpha_1,\\alpha_2,\\alpha_3,\\beta+\\alpha_3)$，求方程组$By=\\alpha_1-\\alpha_2$的通解。\n\n解：首先求对应$A$和$B$的秩。由于$A$的通解的自由变量为一个，即$r(A)=3-1=2$。\n\n由于$Ax=\\beta$的通解为$(1,2,-1)^T+k(1,-2,3)^T$，所以根据解的结构，前面为$Ax=0$的通解，后面为$Ax=\\beta$的一个特解。\n\n即$\\alpha_1+2\\alpha_2-\\alpha_3=\\beta$，$\\alpha_1-2\\alpha_2+3\\alpha_3=0$。\n\n然后求$B=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_1+2\\alpha_2)$，通过线性变换可得$B=(\\alpha_1,\\alpha_2,\\alpha_3,0)$，即$r(B)=r(A)=2$。$s=n-r=2$，即$By=\\alpha_1-\\alpha_2$有两个自由变量。\n\n由于$A$的一个通解为$(1,-2,3)^T$，即$\\alpha_1-2\\alpha_2+3\\alpha_3=0$，$B$的前三行跟$A$一样，所以令最后一行为0，即得到一个通解$(1,-2,3,0)^T$。\n\n然后根据$B=(\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_1+2\\alpha_2)$，令最后一行不为0，即计算得到另一个通解$(-1,-2,0,1)^T$。\n\n由于$\\alpha_1-\\alpha_2$很简单就能看出特解为$(1,-1,0,0)^T$。\n\n所以最后通解为$k_1(1,-2,3,0)^T+k_2(-1,-2,0,1)^T+(1,-1,0,0)^T$（$k_1k_2$为任意常数）。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s4-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#联立系数矩阵",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "联立系数矩阵",
  "kind": "例题",
  "text": "如果给出系数矩阵，则即联立两个系数矩阵即得到公共解。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-4-linear-equations-system-linear-equations-system-s4-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/4-linear-equations-system/linear-equations-system.tex#基础解系参数计算",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "基础解系参数计算",
  "kind": "方法",
  "text": "如果只给出了基础解系，则令他们相等，并求出参数。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s0",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#相似",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "相似",
  "kind": "例题",
  "text": "特征值往往与前面的内容进行混合考察。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s1-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#特征值与特征向量",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "特征值与特征向量",
  "kind": "方法",
  "text": "首先根据$\\vert\\lambda E-A\\vert=0$求出$\\lambda$，然后把$\\lambda$逐个带入$(\\lambda E-A)x=0$，根据齐次方程求解方法进行初等变换求出基础解系。这个基础解系就是当前特征值的特征向量。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s1-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#代数余子式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "代数余子式",
  "kind": "例题",
  "text": "例题：已知$A$是3阶方阵，特征值为1，2，3，求$\\vert A\\vert$的元素$a_{11},a_{22},a_{33}$的代数余子式$A_{11},A_{22},A_{33}$的和$\\sum\\limits_{i=1}^3A_{ii}$。\n\n解：首先代数余子式的和$A_{11},A_{22},A_{33}$一般在行列式展开定理中使用，但是这里给出的不是一行或一列的代数余子式，而是主对角线上的代数余子式，这就无法使用代数余子式来表达行列式的值了。\n\n而另一个提到代数余子式的地方就是伴随矩阵$A^*$，所求的正好是伴随矩阵的迹$tr(A^*)=A_{11}+A_{22}+A_{33}$。\n\n又根据特征值性质，特征值的和为矩阵的迹，特征值的积为矩阵行列式的值，所以$tr(A^*)=A_{11}+A_{22}+A_{33}=\\lambda_1^*+\\lambda_2^*+\\lambda_3^*$\n\n$=\\sum\\limits_{i=1}^3\\dfrac{\\vert A\\vert}{\\lambda_i}=\\sum\\limits_{i=1}^3\\dfrac{\\lambda_1\\lambda_2\\lambda_3}{\\lambda_i}=\\lambda_2\\lambda_3+\\lambda_1\\lambda_3+\\lambda_1\\lambda_2=2+3+6=11$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s1-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#特征值",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "特征值",
  "kind": "例题",
  "text": "#### 对应特征向量\n\n通过相关式子将逆矩阵转换为原矩阵。同一个向量的逆矩阵的特征值是原矩阵的特征值的倒数。\n\n例题：已知$\\overrightarrow{\\alpha}=(a,1,1)^T$是矩阵$A=\\left[\\begin{array}{ccc}\n    -1 & 2 & 2 \\\\\n    2 & a & -2 \\\\\n    2 & -2 & -1\n\\end{array}\\right]$的逆矩阵的特征向量，则求$\\overrightarrow{\\alpha}$在矩阵$A$中对应的特征值。\n\n解：由于$\\overrightarrow{\\alpha}$是$A^{-1}$的特征向量，所以令此时的特征值为$\\lambda_0$，则定义$\\lambda_0\\overrightarrow{\\alpha}=A^{-1}\\overrightarrow{\\alpha}$，$\\lambda_0A\\overrightarrow{\\alpha}=\\overrightarrow{\\alpha}$。\n\n即$\\lambda_0\\left[\\begin{array}{ccc}\n    -1 & 2 & 2 \\\\\n    2 & a & -2 \\\\\n    2 & -2 & -1\n\\end{array}\\right]\\left[\\begin{array}{c}\n    a \\\\\n    1 \\\\\n    1 \\\\\n\\end{array}\\right]=\\left[\\begin{array}{c}\n    a \\\\\n    1 \\\\\n    1 \\\\\n\\end{array}\\right]$，即$\\lambda_0\\left[\\begin{array}{ccc}\n    -a & 2 & 2 \\\\\n    2a & a & -2 \\\\\n    2a & -2 & -1\n\\end{array}\\right]=\\left[\\begin{array}{c}\n    a \\\\\n    1 \\\\\n    1 \\\\\n\\end{array}\\right]$。\n\n即根据矩阵代表的是方程组，得到$\\lambda_0(4-a)=a$，$\\lambda_0(3a-2)=1$，$\\lambda_0(2a-3)=1$。\n\n又$\\lambda_0\\neq0$，$3a-2=2a-3$，$a=-1$，则$\\lambda_0=-\\dfrac{1}{5}$。\n\n所以矩阵$A$对应的特征值为$-5$。\n\n#### 矩阵关系式\n\n例题：已知$A$为3阶矩阵，$A^2+A-2E=0$，$\\vert A\\vert=-2$，求其特征值。\n\n解：需要求$A$特征值，但是$A$未知，特征向量也未知，如何求？\n\n首先要求特征值，就要首先设出特征方程：$A\\xi=\\lambda\\xi$，$\\xi\\neq0$。\n\n又$A^2+A-2E=0$，所以代入方程：$(A^2+A-2E)\\xi=(\\lambda^2+\\lambda-2)\\xi=0$。\n\n$\\because\\xi\\neq0$，$\\lambda^2+\\lambda-2=0$，解得$\\lambda=-2$或$\\lambda=1$。\n\n但是不知道这个特征值各是几重，只知道存在这两种特征值。\n\n又$\\vert A\\vert=\\lambda_1\\lambda_2\\lambda_3=-2$，所以$\\lambda_1=-2$，$\\lambda_2=\\lambda_3=1$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s1-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#特征向量",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "特征向量",
  "kind": "例题",
  "text": "#### 实对称矩阵\n\n使用实对称矩阵性质，给出其他特征向量和特征值，即实对称矩阵的不同特征值的特征向量相互正交（$B^TA=0$）。\n\n例题：已知$A$为三阶实对称矩阵，特征值为$1,3，-2$，其中$\\alpha_1=(1,2,-2)^T$，$\\alpha_2=(4,-1,a)^T$分别属于特征值$\\lambda=1$，$\\lambda=3$的特征向量。求$A$属于特征值$\\lambda=-2$的特征向量。\n\n解：令$A$属于特征值$\\lambda=-2$的特征向量为$(x_1,x_2,x_3)^T$。\n\n根据实对称矩阵的正交性质。\n\n$\\alpha_1^T\\alpha_2=4-2-2a=0$，$\\alpha_2^T\\alpha_3=4x_1-x_2+ax_3=0$，$\\alpha_3^T\\alpha_1=x_1+2x_2-2x_3=0$。\n\n$a=1$，$4x_1-x_2+x_3=0$，$x_1+2x_2-2x_3=0$，解得基础解系$(0,1,1)^T$,$\\alpha_3=(0,k,k)^T$（$k\\neq0$）。\n\n#### 可逆矩阵关系\n\n使用可逆矩阵相似对角化的性质。若$A\\sim B$，则$P^{-1}AP=B$。$B$为纯量阵。且$B$的迹为$A$的特征值。$P$为特征向量。\n\n例题：已知$P^{-1}AP=\\left[\\begin{array}{ccc}\n    1 \\\\\n     & 1 \\\\\n     & & -1\n\\end{array}\\right]$，$P=(\\alpha_1,\\alpha_2,\\alpha_3)$可逆，求$A$关于特征值$\\lambda=1$的特征向量。\n\n解：根据$P^{-1}AP=\\Lambda$，所以$P$为特征向量，$1,1,-1$为特征值。\n\n所以$A$关于$\\lambda=1$的特征向量为$\\alpha_1$或$\\alpha_2$。而某一特征值的全部特征向量构成特征向量子空间，所以$\\lambda=1$的特征向量为$k_1\\alpha_1+k_2\\alpha_2$。\n\n#### 抽象型\n\n题目只会给对应的式子，来求对应的特征向量。需要记住特征值的关系式然后与给出的式子上靠拢，不会很复杂。\n\n例题：已知$A$为三阶矩阵，且矩阵$A$各行元素之和均为5，则求$A$必然存在的特征向量。\n\n解：由于是抽象型，所以没有实际的数据，就不能求出固定的特征值，$\\lambda\\xi=A\\xi$。\n\n又矩阵$A$各行元素之和均为5，所以转换为方程组：\n\n$\\left\\{\\begin{array}{l}\n    A_{11}+A_{12}+A_{13}=5 \\\\\n    A_{21}+A_{22}+A_{23}=5 \\\\\n    A_{31}+A_{32}+A_{33}=5\n\\end{array}\\right.$，转为矩阵：$\\left[\\begin{array}{ccc}\n    A_{11} & A_{12} & A_{13} \\\\\n    A_{21} & A_{22} & A_{23} \\\\\n    A_{31} & A_{32} & A_{33}\n\\end{array}\\right]\\left[\\begin{array}{c}\n    1 \\\\\n    1 \\\\\n    1 \\\\\n\\end{array}\\right]=5\\left[\\begin{array}{c}\n    1 \\\\\n    1 \\\\\n    1 \\\\\n\\end{array}\\right]$。\n\n即$\\xi=(1,1,1)^T$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s1-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#矩阵",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵",
  "kind": "例题",
  "text": "即根据$A=P\\Lambda P^{-1}$的特征向量矩阵和特征值矩阵来反求矩阵。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s1-5",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#行列式值",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列式值",
  "kind": "例题",
  "text": "一般会给出特征值，求$A$的行列式值。\n\n#### 特征方程\n\n题目要求$\\vert f(A)-E\\vert$的形式，即求$f(A)$的特征值。\n\n例题：设$A$为三阶矩阵，已知$-3E+A$不可逆，$\\vert2E+A\\vert=0$，$(E-A)x=0$有非零解，求$\\vert A^*-E\\vert$。\n\n解：前三个条件都是为了指明$\\vert-3E+A\\vert=\\vert3E-A\\vert=0$，$\\vert-2E-A\\vert=0$，$\\vert E-A\\vert=0$，即得到$A$的三个特征值$\\lambda_1=3$、$\\lambda_2=-2$、$\\lambda_3=1$。\n\n求$\\vert A^*-E\\vert$即求$A^*$的特征值，然后再乘起来，即得到行列式的值。\n\n又$A^{-1}=\\dfrac{A^*}{\\vert A\\vert}$，所以$A^*=\\dfrac{\\vert A\\vert}{A}$。\n\n$\\vert A\\vert$等于特征值的乘积$-6$，对应的特征值即为$\\mu_1=\\dfrac{-6}{3}=-2$，$\\mu_2=\\dfrac{-6}{-2}=3$，$\\mu_3=\\dfrac{-6}{1}=-6$。\n\n对应$A^*-E$的特征值为$-3$，$2$，$-6$，所以最后的行列式值为$42$。\n\n#### 矩阵函数\n\n题目要求$\\vert f(A)\\vert$的形式，即求$f(A)$的特征值，然后求其乘积就是矩阵方程的行列式值。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s2-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#相似理论",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "相似理论",
  "kind": "例题",
  "text": "$P^{-1}AP=\\Lambda$，$P$为特征向量组，$\\Lambda$为特征值矩阵。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s2-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#判断相似对角化",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "判断相似对角化",
  "kind": "概念",
  "text": "可以使用相似对角化的四个条件，但是最基本的使用还是$A$有$n$个无关的特征向量$\\xi$。\n\n判断以下条件即可相似对角化：\n\n- 实对称矩阵，即所有元素关于主对角线对称。\n\n- 特征值都是实单根，即$n$个不同特征值，不存在重根。\n\n- 特征值存在$t$重根，相同特征值对应$t$个线性无关的特征向量。（如果小于$n$则不相似）\n\n一般都是第三种情况，判断存在重根后要使用$[\\lambda E-A]$，然后计算$r(E-A)$，然后$s$自由变量值即无关特征向量值$=n-r$，如果$s=t$则可以相似对角化，如果$s<t$则不可以。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s2-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#反求参数",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "反求参数",
  "kind": "例题",
  "text": "常用方法：\n\n- 若$A\\sim B$，则$\\vert A\\vert=\\vert B\\vert$，$r(A)=r(B)$，$tr(A)=tr(B)$，$\\lambda_A=\\lambda_B$，通过等式计算参数。\n\n- 若$\\xi$是$A$属于特征值$\\lambda$的特征向量，则有$A\\xi=\\lambda\\xi$，建立若干等式或方程组来计算参数。\n\n- 若$\\lambda$是$A$的特征值，则与$\\vert\\lambda E-A\\vert=0$，通过该等式计算参数。\n\n#### 两个矩阵对比\n\n两个矩阵相似的前提是可以相似对角化，如果存在$n$重根而没有$n$个线性无关的特征向量则必然不相似。\n\n例题：已知$A=\\left(\\begin{array}{ccc}\n    2 & 0 & 0 \\\\\n    0 & 0 & 1 \\\\\n    0 & 1 & x\n\\end{array}\\right)$，$B=\\left(\\begin{array}{ccc}\n    2 \\\\\n     & y \\\\\n     & & -1\n\\end{array}\\right)$，且$A\\sim B$，求参数。\n\n首先可以利用迹相等，则$2+0+x=2+y-1$，行列式值相等，则$-2=-2y$，解得$x=0$，$y=1$。\n\n#### 单矩阵\n\n- 利用$\\vert\\lambda E-A\\vert=0$求出特征值。判断得到$n$阶矩阵有$m$个不同特征值。（$m\\leqslant n$）\n\n- 利用$[\\lambda E-A]$计算秩。利用$s=n-r$（自由变量的个数=未知数个数-矩阵秩）公式反解出秩$r$，并以此解出未知数。\n\n例题：已知矩阵$A=\\left[\\begin{array}{ccc}\n    3 & 1 & 2 \\\\\n    0 & 2 & a \\\\\n    0 & 0 & 3\n\\end{array}\\right]$和对角矩阵相似，求$a$。\n\n解：由于$A$是对角矩阵，所以特征值为其迹$\\lambda=(3,2,3)$。特征值有二重根。\n\n已知$A\\sim\\Lambda$，$\\lambda=3$有两个线性无关的特征向量。即$(3E-A)x=0$有两个线性无关的解（自由变量）。即$r(3E-A)=1$。\n\n$3E-A=\\left[\\begin{array}{ccc}\n    0 & -1 & -2 \\\\\n    0 & 1 & -a \\\\\n    0 & 0 & 0\n\\end{array}\\right]=\\left[\\begin{array}{ccc}\n    0 & -1 & -2 \\\\\n    0 & 0 & -a-2 \\\\\n    0 & 0 & 0\n\\end{array}\\right]$，$\\therefore a=-2$。\n\n#### 抽象型\n\n首先要计算其特征值，再根据特征值反代特征方程，根据向量的构成判定秩的大小。\n\n例题：已知$A=\\left(\\begin{array}{ccc}\n    0 & 0 & 1 \\\\\n    x & 1 & y \\\\\n    1 & 0 & 0\n\\end{array}\\right)$相似于对角矩阵，求$xy$关系式。\n\n解：已知相似，即$P^{-1}AP=\\Lambda$，则需要求$A$的特征值和特征向量。\n\n根据特征关系式$\\vert E\\lambda-A\\vert=0$，即$\\left\\vert\\begin{array}{ccc}\n    \\lambda & 0 & -1 \\\\\n    -x & \\lambda-1 & -y \\\\\n    -1 & 0 & \\lambda\n\\end{array}\\right\\vert=(\\lambda-1)(\\lambda^2-1)=(\\lambda-1)^2(\\lambda+1)=0$，即有特征值$\\lambda_1=\\lambda_2=1$，$\\lambda_3=1$。\n\n此时有二重特征值，所以应该有两个线性无关的特征向量，即对于$(E-A)x=0$有两个线性无关的解向量，所以该矩阵的秩为$3-2=1$。\n\n$E-A=\\left(\\begin{array}{ccc}\n    1 & 0 & -1 \\\\\n    -x & 1 & -y \\\\\n    -1 & 0 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & -1 \\\\\n    0 & 0 & -x-y \\\\\n    0 & 0 & 0\n\\end{array}\\right)$。\n\n所以当$r(E-A)=1$时$x+y=0$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s2-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#相似矩阵",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "相似矩阵",
  "kind": "例题",
  "text": "#### 具体型\n\n$\\vert \\lambda E-A\\vert=0$或$(\\lambda E-A)x=0$。\n\n#### 抽象型\n\n定义$A\\alpha=\\lambda\\alpha$。\n\n例题：设$A$是三阶矩阵，$\\alpha_1,\\alpha_2,\\alpha_3$是三维线性无关的列向量，且$A\\alpha_1=\\alpha_2+\\alpha_3$，$A\\alpha_2=\\alpha_1+\\alpha_3$，$A\\alpha_3=\\alpha_1+\\alpha_2$，求$A$相似的矩阵。\n\n解：$A\\sim\\Lambda$，则$P^{-1}AP=\\Lambda$。\n\n$A(\\alpha_1,\\alpha_2,\\alpha_3)=(\\alpha_2+\\alpha_3,\\alpha_1+\\alpha_3,\\alpha_1+\\alpha_2)=(\\alpha_1,\\alpha_2,\\alpha_3)\\left[\\begin{array}{ccc}\n    0 & 1 & 1 \\\\\n    1 & 0 & 1 \\\\\n    1 & 1 & 0\n\\end{array}\\right]$。\n\n记$P=(\\alpha_1,\\alpha_2,\\alpha_3)$，$B=\\left[\\begin{array}{ccc}\n    0 & 1 & 1 \\\\\n    1 & 0 & 1 \\\\\n    1 & 1 & 0\n\\end{array}\\right]$。\n\n又$\\alpha_1,\\alpha_2,\\alpha_3$是三维线性无关的列向量，$\\therefore\\vert\\alpha_1,\\alpha_2,\\alpha_3\\vert\\neq0$，所以$P$可逆。\n\n$\\therefore AP=PB$，$P^{-1}AP=B$，$A\\sim B$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s2-4",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#特殊矩阵",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "特殊矩阵",
  "kind": "例题",
  "text": "#### 实对称矩阵\n\n根据实对称矩阵不同特征值的特征向量必然相互正交的性质求解。\n\n一般会给出特征值（全部）和对应的特征向量（部分）。\n\n$Q^{-1}AQ=P$。其中$Q$为特征向量矩阵，一般都是正交的，而$P$为对应的特征值矩阵。\n\n首先要利用不同特征值的特征向量正交的性质，把所有的特征向量都求出来。\n\n然后矩阵$Q$就是所有特征向量的拼合。如果要求原矩阵$A$，则利用$A\\xi=\\lambda\\xi$，推出$AQ=PQ$，从而$A=PQQ^{-1}$。\n\n例题：已知$A$是三阶实对称矩阵，若正交矩阵$Q$使得$Q^{-1}AQ=\\left[\\begin{array}{ccc}\n    3 & 0 & 0 \\\\\n    0 & 3 & 0 \\\\\n    0 & 0 & 6\n\\end{array}\\right]$，如果$\\alpha_1=(1,0,-1)^T$和$\\alpha_2=(0,1,1)^T$是矩阵$A$属于特征值$\\lambda=3$的特征向量，求$Q$。\n\n解：首先由正交矩阵就可以知道各特征值正交。令$\\alpha_3=(x_1,x_2,x_3)^T$。对应的$\\lambda_3=6$。\n\n$\\alpha_3^T\\alpha_1=x_1-x_3=0$，$\\alpha_3^T\\alpha_2=x_2+x_3=0$，求$\\lambda_3$的特征值，则不如令$x_3=1$，则解得$\\alpha_3=(1,-1,1)^T$。\n\n这样$Q=\\left[\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    0 & 1 & -1 \\\\\n    -1 & 1 & 1\n\\end{array}\\right]$，还需要将$Q$正交单位化。可知$\\alpha_3$根据正交规律求出来，一定是正交的，而$\\alpha_1^T\\alpha_2=-1\\neq0$所以需要正交。\n\n令$\\beta_1=\\alpha_1=(1,0,-1)^T$，$\\beta_2=\\alpha_2-\\dfrac{<\\alpha_2,\\beta_1>}{<\\beta_1,\\beta_1>}\\beta_1=(0,1,1)^T+\\dfrac{1}{2}(1,0,-1)^T=(\\dfrac{1}{2},1,\\dfrac{1}{2})^T$。\n\n最后对整个$Q$进行单位化：$\\gamma_1=\\dfrac{1}{\\sqrt{2}}(1,0,-1)^T$，$\\gamma_2=\\dfrac{1}{\\sqrt{6}}(1,2,1)^T$，$\\gamma_3=\\dfrac{1}{\\sqrt{3}}(1,-1,1)^T$。\n\n#### 爪型矩阵\n\n即类似于爪形行列式，且列数较大，不可能直接计算，所以就需要把常数项提出来。\n\n例题：设$n$（$n\\geqslant2$）阶矩阵$A=\\left[\\begin{array}{ccccc}\n    a & 1 & 1 & \\cdots & 1 \\\\\n    1 & a & 1 & \\cdots & 1 \\\\\n    1 & 1 & a & \\cdots & 1 \\\\\n    \\vdots & \\vdots & \\vdots &  & \\vdots \\\\\n    1 & 1 & 1 & \\cdots & a\n\\end{array}\\right]$。求可逆矩阵$P$与对角矩阵$\\Lambda$，使得$P^{-1}AP=\\Lambda$，并求$r(A^*)$。\n\n解：矩阵$A$是个爪形，直接使用$\\vert\\lambda E-A\\vert=0$计算特征值非常复杂，所以对其化简：\n\n$A=\\left[\\begin{array}{cccc}\n    a-1 \\\\\n    & a-1 \\\\\n    & & \\cdots \\\\\n    & & & a-1\n\\end{array}\\right]+\\left[\\begin{array}{cccc}\n    1 & 1 & \\cdots & 1 \\\\\n    1 & 1 & \\cdots & 1 \\\\\n    \\vdots & \\vdots & & \\vdots \\\\\n    1 & 1 & \\cdots & 1 \\\\\n\\end{array}\\right]=(a-1)E+B$。\n\n$\\vert\\lambda E-B\\vert=\\left\\vert\\begin{array}{cccc}\n    \\lambda-1 & -1 & \\cdots & -1 \\\\\n    -1 & \\lambda-1 & \\cdots & -1 \\\\\n    \\vdots & \\vdots & & \\vdots \\\\\n    -1 & -1 & \\cdots & \\lambda-1\n\\end{array}\\right\\vert=\\left\\vert\\begin{array}{cccc}\n    \\lambda-n & \\lambda-n & \\cdots & \\lambda-n \\\\\n    -1 & \\lambda-1 & \\cdots & -1 \\\\\n    \\vdots & \\vdots & & \\vdots \\\\\n    -1 & -1 & \\cdots & \\lambda-1\n\\end{array}\\right\\vert=\\left\\vert\\begin{array}{cccc}\n    \\lambda-n & 0 & \\cdots & 0 \\\\\n    -1 & \\lambda & \\cdots & 0 \\\\\n    \\vdots & \\vdots & & \\vdots \\\\\n    -1 & 0 & \\cdots & \\lambda\n\\end{array}\\right\\vert=0$，所以$\\lambda_1=n$，$\\lambda_2=\\cdots=\\lambda_n=0$。\n\n从而$A$的特征值为$n+a-1$、$a-1$、$\\cdots$、$a-1$。\n\n所以根据特征值$(nE-B)x=0$，$x_1=(1,1,\\cdots,1)^T$，$(0E-B)x=0$，$x_2=(1,-1,0,\\cdots,0)^T$、$x_3=(1,0,-1,\\cdots,0)^T$、$\\cdots$、$x_n=(1,0,0,\\cdots,-1)^T$。\n\n根据特征值和特征向量的性质，$x_i$也是$A$的特征向量。\n\n令$P=(x_1,x_2,\\cdots,x_n)$，则$P^{-1}AP=diag(n+(a-1),a-1,\\cdots,a-1)$。\n\n因为$A\\sim\\Lambda$，所以$\\vert A\\vert=\\vert\\Lambda\\vert=(n+a-1)(a-1)^n-1$，所以：\n\n$r(A)=\\left\\{\\begin{array}{ll}\n    n, & a\\neq1-n,a\\neq1 \\\\\n    n-1, & a=1-n \\\\\n    1, & a=1\n\\end{array}\\right.$，所以$r(A^*)=\\left\\{\\begin{array}{ll}\n    n, & a\\neq1-n,a\\neq1 \\\\\n    1, & a=1-n \\\\\n    0, & a=1\n\\end{array}\\right.$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-5-similar-similar-s2-5",
  "repo": "R08",
  "source": "linear-algebra/exercise/5-similar/similar.tex#矩阵关系式",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵关系式",
  "kind": "例题",
  "text": "若有可逆矩阵$P$，使得$P^{-1}AP=\\Lambda$，则：\n\n$P$即是$A$特征向量的拼合。\n\n-$A=P\\Lambda P^{-1}$。\n\n-$A^k=P\\Lambda^kP^{-1}$。\n\n-$f(A)=Pf(\\Lambda)P^{-1}$。\n\n例题：已知$A=\\left(\\begin{array}{ccc}\n    2 & x & 1 \\\\\n    0 & 3 & 0 \\\\\n    3 & -6 & 0\n\\end{array}\\right)$相似于对角矩阵，求$A^{100}$。\n\n解：首先$A\\sim\\Lambda$，所以$A$能相似对角化。\n\n$\\vert\\lambda E-A\\vert=\\left|\\begin{array}{ccc}\n    \\lambda-2 & -x & -1 \\\\\n    0 & \\lambda-3 & 0 \\\\\n    -3 & 6 & \\lambda\n\\end{array}\\right|=(\\lambda-3)^2(\\lambda+1)=0$。$\\lambda_1=\\lambda_2=3$，$\\lambda_3=-1$。\n\n所以对于$\\lambda_1=\\lambda_2=3$时，需要$s=2$，从而$r(A)=1$，对应成比例。\n\n代入3：$(3E-A)x=0$，$\\left(\\begin{array}{ccc}\n    1 & -x & -1 \\\\\n    0 & 0 & 0 \\\\\n    -3 & 6 & 3\n\\end{array}\\right)=0$，所以$\\dfrac{-1}{3}=\\dfrac{-x}{6}$，$x=2$。\n\n解得$\\xi_1=(1,0,1)^T$，$\\xi_2=(2,1,0)^T$，$\\xi_3=(1,0,-3)^T$。\n\n令$P=(\\xi_1,\\xi_2,\\xi_3)$，所以$A=P\\Lambda P^{-1}$，$A^{100}=P\\Lambda^{100}P^{-1}$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s1-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#二次型",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "二次型",
  "kind": "例题",
  "text": "即最基本的将二次型式子变为矩阵形式。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s1-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#矩阵乘法",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "矩阵乘法",
  "kind": "例题",
  "text": "由于二次型是$X^TAX$的形式，所以最后的左右两边都存在所有的$x_i$，所以可以依次把$x_i$缺的项进行补齐$x_n$与其他所有$x_i$乘积的和的形式。\n\n例题：将二次型$f(x_1,x_2,x_3)=2x_1^2+2x_2^2+2x_3^2-2x_1x_2-2x_2x_3+2x_1x_3$化为矩阵。\n\n解：$f(x_1,x_2,x_3)=2x_1^2+2x_2^2+2x_3^2-2x_1x_2-2x_2x_3+2x_1x_3=2x_1^2-2x_1x_2+2x_1x_3+2x_2^2-2x_2x_3+2x_3^2=2x_1^2-x_1x_2+x_1x_3+2x_2^2-x_1x_2-x_2x_3+2x_3^2+x_1x_3-x_2x_3=x_1(2x_1-x_2+x_3)+x_2(-x_1+2x_2-x_3)+x_3(x_1-x_2+2x_3)$\n\n$=\\left[x_1,x_2,x_3\\right]\\left[\\begin{array}{c}\n    2x_1-x_2+x_3 \\\\\n    -x_1+2x_2-x_3 \\\\\\\n    x_1-x_2+2x_3\n\\end{array}\\right]=[x_1,x_2,x_3]\\left[\\begin{array}{ccc}\n    2 & -1 & 1\\\\\n    -1 & 2 & -1\\\\\n    1 & -1 & 2\n\\end{array}\\right]\\left[\\begin{array}{c}\n    x_1 \\\\\n    x_2 \\\\\n    x_3\n\\end{array}\\right]$。\n\n即$A=\\left[\\begin{array}{ccc}\n    2 & -1 & 1\\\\\n    -1 & 2 & -1\\\\\n    1 & -1 & 2\n\\end{array}\\right]$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s2-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#标准形",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "标准形",
  "kind": "例题",
  "text": "即将二次型式子变为平方形式，再变量更换，变成矩阵形式。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s2-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#初等变换法",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "初等变换法",
  "kind": "概念",
  "text": "$f(x)=X^TAX$，线性变换$X=CY$，$C^TAC=\\Lambda$，又$C$可逆，$\\therefore C=P_1P_2\\cdots P_s$，$EP_1P_2\\cdots P_s=C$，$\\therefore(P_1P_2\\cdots P_s)^TAP_1P_2\\cdots P_3=\\Lambda$，\n\n- 对$A,E$做同样的初等列变换。\n\n- 对$A$做相应的初等行变换。（交换$i,j$列就要交换$i,j$行）。一套行列变换后$\\Lambda$为对称矩阵。\n\n-$A$化成对角矩阵时，$E$化成的就是$C$。\n\n$\\left(\\begin{array}{c}\n    A \\\\\n    E\n\\end{array}\\right)\\rightarrow\\left(\\begin{array}{c}\n    \\Lambda \\\\\n    C\n\\end{array}\\right)$，对整个列变换，只对$A$行变换。\n\n$\\left(\\begin{array}{c}\n    A \\\\\n    E\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 1 & 1 \\\\\n    1 & 2 & 2 \\\\\n    1 & 2 & 1 \\\\\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    1 & 1 & 2 \\\\\n    1 & 1 & 1 \\\\\n    1 & -1 & 0 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    0 & 1 & 1 \\\\\n    1 & 1 & 1 \\\\\n    1 & -1 & 0 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)=\\\\\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 1 \\\\\n    1 & 1 & 0 \\\\\n    1 & -1 & -1 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 1 \\\\\n    0 & 1 & 0 \\\\\n    1 & -1 & -1 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 1 & -1 \\\\\n    1 & -1 & 0 \\\\\n    0 & 1 & -1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & -1 \\\\\n    1 & -1 & 0 \\\\\n    0 & 1 & -1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)$\n\n$\\therefore\\Lambda=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & -1\n\\end{array}\\right)$，$C=\\left(\\begin{array}{ccc}\n    1 & -1 & 0 \\\\\n    0 & 1 & -1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)$",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s2-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#可逆线性变换法",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "可逆线性变换法",
  "kind": "例题",
  "text": "即配方法，求可逆线性变换。\n\n- 如果二次型有平方项，则首先从$x_1$开始往后不断配方，让最后的式子全部以平方加和的形式，从而不会有混合项。\n\n- 如果二次型没有平方项，则首先令$x_1=y_1+y_2$，$x_2=y_1-y_2$，$x_i=y_i$等然后带入$f(x)$强行出现平方项，然后配方，成功后再用$z_i$替换。\n\n- 如果总的完全平方项数小于变量个数，则令多余的$x_i$为$y_i$，系数为0。\n\n#### 平方项\n\n即依次对存在$x_i$的式子进行整合配方。从$x_1$开始，后面含$x_1$的都提到一起配方，然后依次按这个方法进行配方。\n\n例题：将$f(x_1,x_2,x_3)=x_1^2+2x_1x_2+2x_1x_3-x_2^2-2x_2x_3-x_3^2$化为标准形并求出作的可逆线性变换。\n\n解：首先对$x_1$进行配方，因为有$x_1$因子的式子有$x_1^2+2x_1x_2+2x_1x_3$。\n\n所以将$x_1,x_2,x_3$全部配在一起：$(x_1+x_2+x_3)^2=x_1^2+x_2^2+x_3^2+2x_1x_2+2x_1x_3+2x_2x_3$。\n\n所以$f(x)=(x_1+x_2+x_3)^2-2x_2^2-4x_2x_3-2x_3^2$，然后继续配$x_2$。\n\n因为还有$-2x_2^2-4x_2x_3$，所以配成$-2(x_2+x_3)^2$，正好全部配完了。\n\n$\\therefore f(x)=(x_1+x_2+x_3)^2-2(x_2+x_3)^2$。\n\n令$y_1=x_1+x_2+x_3$，$y_2=x_2+x_3$，补$y_3=x_3$，$\\therefore f=y_1^2-2y_2^2$。\n\n$(y_1,y_2,y_3)^T=\\left(\\begin{array}{ccc}\n    1 & 1 & 1 \\\\\n    0 & 1 & 1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)(x_1,x_2,x_3)^T$，此时是$y=Dx$，但是我们要求的是$x=Cy$，所以$C=D^{-1}$，所以$D^{-1}$才是作出的可逆线性变换。\n\n所以得到的线性变换为$\\left(\\begin{array}{ccc}\n    1 & -1 & 0 \\\\\n    0 & 1 & -1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)$。\n\n这样方法还要重新求逆，比较麻烦。实际上我们要求的是$x=Cy$，即用$y$来表示$x$，从而直接将$y$来表示$x$就可以了。\n\n首先$y_3=x_3$，所以$x_2=y_2-x_3=y_2-y_3$，$x_1=y_1-x_2-x_3=y_1-y_2+y_3-y_3=y_1-y_2$，综上$x_1=y_1-y_2$，$x_2=y_2-y_3$，$x_3=y_3$，也得到同样结果。\n\n#### 无平方项\n\n例题：将二次型$f(x_1,x_2,x_3)=x_1x_2+x_1x_3-x_2x_3$化为规范形，并求所用的可逆线性变换。\n\n解：因为二次型中没有平方项式子，而如果进行配方一定会出现平方，就会产生冲突，所以希望把$x$代换称有平方的式子。\n\n令$x_1=y_1+y_2$，$x_2=y_1-y_2$，$x_3=y_3$，代入二次型中。\n\n$f=y_1^2-y_2^2+y_1y_3+y_2y_3-y_1y_3-+y_2y_3=y_1^2-y_2^2+2y_2y_3=y_1^2-y_2^2+2y_2y_3$。\n\n此时由没有平方项就变成了有平方项，所以就能进行配方。\n\n$=y_1^2-(y_2-y_3)^2+y_3^2$，继续之前的步骤，进行换元：\n\n令$z_1=y_1$，$z_2=y_2-y_3$，$z_3=y_3$，$f=z_1^2-z_2^2+z_3^2$得到标准形。\n\n对于$x$与$y$：$(x_1,x_2,x_3)^T=\\left(\\begin{array}{ccc}\n    1 & 1 & 0 \\\\\n    1 & -1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)(y_1,y_2,y_3)^T$。$y$作为过渡变量。\n\n将$y$转换为$z$：$(z_1,z_2,z_3)^T=\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & -1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)(y_1,y_2,y_3)^T$，我们需要$x=Cz$。\n\n$(x_1,x_2,x_3)^T=\\left(\\begin{array}{ccc}\n    1 & 1 & 0 \\\\\n    1 & -1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & -1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)^{-1}(z_1,z_2,z_3)^T$，从而得到$C=\\left(\\begin{array}{ccc}\n    1 & 1 & 1 \\\\\n    1 & -1 & -1 \\\\\n    0 & 0 & 1\n\\end{array}\\right)$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s2-3",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#正交变换法",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "正交变换法",
  "kind": "例题",
  "text": "即求正交变换。\n\n例题：将二次型$f(x_1,x_2,x_3)=2x_1^2+5x_2^2+5x_3^2+4x_1x_2-4x_1x_3-8x_2x_3$使用正交变换法化为标准形，并求所作的正交变换。\n\n已知将二次型通过矩阵表示：$=(x_1,x_2,x_3)\\left(\\begin{array}{ccc}\n    2 & 2 & -2 \\\\\n    2 & 5 & -4 \\\\\n    -2 & -4 & 5\n\\end{array}\\right)(x_1,x_2,x_3)^T$。\n\n这个矩阵跟第五章相似的实对称矩阵相似对角化的例题的矩阵一样。\n\n所以直接结果：$\\lambda_1=\\lambda_2=1$，$\\lambda_3=10$，$\\eta_1'=\\dfrac{\\sqrt{5}}{5}(-2,1,0)^T$，$\\eta_2'=\\dfrac{\\sqrt{5}}{15}(2,4,5)^T$，$\\eta_3'=\\dfrac{1}{3}(1,2,-2)^T$。\n\n第五步：$f(x)=g(y)=y^T\\Lambda y=(y_1,y_2,y_3)\\left(\\begin{array}{ccc}\n    1 \\\\\n     & 1 \\\\\n     & & 10\n\\end{array}\\right)(y_1,y_2,y_3)^T=y_1^2+y_2^2+10y_3^2$",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s3-0",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#规范形",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "规范形",
  "kind": "定理",
  "text": "由于只有少部分二次型能转换为规范形，所以基本上都是选择题考察。\n\n而且因为规范形的系数必然是0或1或-1，所以不需要求，直接使用惯性定理即可求出。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s3-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#惯性定理",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "惯性定理",
  "kind": "定理",
  "text": "多用于规范形的判断。\n\n例题：二次型$f(x_1,x_2,x_3)=x_1^2+4x_2^2+4x_3^2-4x_1x_2+4x_1x_3-8x_2x_3$的规范形为()。\n\n$A.f=z_1^2\\qquad B.f=z_1^2-z_2^2\\qquad C.f=z_1^2+z_2^2+z_3^2\\qquad D.f=z_1^2+z_2^2-z_3^2$\n\n解：\n\n已知$f$的二次型矩阵表示$A=\\left[\\begin{array}{ccc}\n    1 & -1 & 2 \\\\\n    -2 & 4 & -4 \\\\\n    2 & -4 & 4\n\\end{array}\\right]$，根据特征方程$\\vert\\lambda E-A\\vert=\\lambda^2(\\lambda-9)=0$，$\\lambda_1=9$，$\\lambda_2=\\lambda_3=0$，所以根据特征值符号，正惯性系数$p=1$，负惯性系数$q=0$，所以选择$A$。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s4-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#合同判断",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "合同判断",
  "kind": "例题",
  "text": "合同基于二次型，所以只有对称矩阵才能讨论是否合同。\n\n二次型的合同只有两种判断方式：\n\n- 秩相同，正（负）惯性系数相同。\n\n- 正负惯性系数都相同。\n\n例题：设$A=\\left[\\begin{array}{ccc}\n    1 & 2 & 0 \\\\\n    2 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right]$，与$A$合同的是()。\n\n$A.\\left[\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right]$\\;$B.\\left[\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & -1\n\\end{array}\\right]$\\;$C.\\left[\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & -1 & 0 \\\\\n    0 & 0 & -1\n\\end{array}\\right]$\\;$D.\\left[\\begin{array}{ccc}\n    -1 & 0 & 0 \\\\\n    0 & -1 & 0 \\\\\n    0 & 0 & -1\n\\end{array}\\right]$\n\n解：从四个选项，由于是常量矩阵，所以由对角线元素的正负号可以得出这四个的惯性系数分别为$(3,0)$、$(2,1)$、$(1,2)$、$(0,3)$（前面为正惯性系数，后面为负惯性系数）。\n\n且每个选项的秩都是3。\n\n#### 配方法\n\n即将二次型配方为标准型，然后求该矩阵的秩和惯性系数。\n\n解：经过配方$f=(x_1+2x_2)^2-3x_2^2+x_3^2$，由于有三个平方项，所以矩阵秩为3，正惯性系数为2，与$B$相同。\n\n#### 特征值法\n\n即根据特征方程进行正交变换得到正负惯性系数。\n\n解：求$A$的特征值，得到$\\lambda_1=1$、$\\lambda_2=3$、$\\lambda_3=-1$，所以正交变换后标准形为$y_1^2+3y_2^2-y_3^2$，惯性系数与$B$相同。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s4-2",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#可逆矩阵",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "可逆矩阵",
  "kind": "例题",
  "text": "已知$A\\simeq\\Lambda$，则$C^TAC=\\Lambda$。即$f=x^TAx=y^T\\Lambda y$，得到$x=Cy$。\n\n例题：已知$A=\\left[\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & -4 & 0 \\\\\n    0 & 0 & \\dfrac{1}{9}\n\\end{array}\\right]$合同于$\\Lambda=\\left[\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & -1\n\\end{array}\\right]$，求$C^TAC=\\Lambda$中的$C$。\n\n解：已知$A$，则可得二次型$f=x^TAx=[x_1,x_2,x_3]A[x_1,x_2,x_3]^T=x_1^2-4x_2^2+\\dfrac{1}{9}x_3^2$，规范化让这个二次型与$\\Lambda$转换的二次型相等，由于正负惯性系数相同，平方必然是正数，所以符号对齐，令$x_1^2=y_1^2$、$4x_2^2=y_3^2$、$\\dfrac{1}{9}x_3^2=y_2^2$。\n\n解得$x_1=y_1$，$x_2=\\dfrac{1}{2}y_3$，$x_3=3y_2$，即$\\left[\\begin{array}{c}\n    x_1 \\\\\n    x_2 \\\\\n    x_3\n\\end{array}\\right]=\\left[\\begin{array}{ccc}\n    1 \\\\\n    & & \\dfrac{1}{2} \\\\\n    & 3\n\\end{array}\\right]\\left[\\begin{array}{c}\n    y_1 \\\\\n    y_2 \\\\\n    y_3\n\\end{array}\\right]$。\n\n所以$x=Cy$，解得$C=\\left[\\begin{array}{ccc}\n    1 \\\\\n    & & \\dfrac{1}{2} \\\\\n    & 3\n\\end{array}\\right]$，此时$f=x^TAx=y^TC^TACy=y^T\\Lambda y$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s5-1",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#具体型",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "具体型",
  "kind": "例题",
  "text": "- 顺序主子式全部大于0。\n\n- 特征值全部大于0。\n\n- 配方化为全平方和的标准型，正惯性指数$p=n$（未知数个数）。\n\n- 矩阵乘法配方为完全平方和，内积$D^TD$不等于0。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-exercise-6-quadratic-form-quadratic-form-s6",
  "repo": "R08",
  "source": "linear-algebra/exercise/6-quadratic-form/quadratic-form.tex#二次型最值",
  "subject": "xiandai",
  "topic": "一元微分几何应用",
  "title": "二次型最值",
  "kind": "例题",
  "text": "若$A$的特征值大小排序$\\lambda_1\\leqslant\\lambda_2\\leqslant\\cdots\\leqslant\\lambda_n$，则：\n\n-$\\lambda_1x^Tx\\leqslant x^TAx\\leqslant\\lambda_nx^Tx$。\n\n- 若$x^Tx=1$，则$f_{\\min}=\\lambda_1$，$f_{\\max}=\\lambda_n$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列式",
  "kind": "总结",
  "text": "高数研究连续的问题，而代数研究离散的问题。\n\n行列式本质是研究线性方程组的问题。行列式本质是一个数，必须是一个长宽相等的形式。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s1-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#低阶行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "低阶行列式",
  "kind": "总结",
  "text": "若对于一个一阶行列式，就是$\\vert a_11\\vert$来表示，这个就是一个数。\n\n若要解一个二元一次方程组：\n\n$\\begin{cases}\n    a_1x+b_1y=c_1 (1) \\\\\n    a_2x+b_2y=c_2 (2) \n\\end{cases}\n$\n\n则利用$(1)\\times b_2-(2)\\times b_1=(a_1b_2-a_2b_1)x=c_1b_2-c_2b_1$。\n\n$(1)\\times a_2-(2)\\times a_1=(a_2b_1-a_1b_2)y=c_1a_2-c_2a_1$。\n\n根据系数形式可以得到一个二阶行列式：\n\n$\n\\left|\\begin{array}{cc} \n    a & b \\\\\n    c & d\n\\end{array}\\right| \n=ad-bc$。\n\n而二阶行列式的几何意义是指由两个二维向量组成的，结果为这两个向量为邻边的平行四边形的面积。行列式的一行或一列就是一个向量。\n\n同理解三元一次方程组可得三阶行列式：\n\n$\n\\left|\\begin{array}{ccc} \n    a_{11} & a_{12} & a_{13} \\\\\n    a_{21} & a_{22} & a_{23} \\\\\n    a_{31} & a_{32} & a_{33}\n\\end{array}\\right| \n=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}+a_{12}a_{21}a_{33}$。\n\n三阶行列式的几何意义就是由三个向量为邻边所构成的平行六面体的体积。\n\n行列式是一个数，是不同行不同列元素乘积的代数和。\n\n横排为行，竖排为列，数$a_{ij}$为元素或元，第一个下标$i$为行标，第二个下标$j$为列标。\n\n对角线法则定义：二阶三阶行列式的值就是所有左对角线的值减去所有右对角线的值。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s1-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#排列、逆序、逆序数",
  "subject": "xiandai",
  "topic": "排列与逆序数",
  "title": "排列、逆序、逆序数",
  "kind": "定理",
  "text": "由$1,2,\\cdots,n$任意组成的有序数组称为一个$n$阶排列（全排列），通常用$j_1j_2\\cdots j_n$表示$n$阶排列。如9 5 4 7就是一个4阶排列。\n\n一个排列中，若一个大的数排在一个小的数的前面，就称为这两个数构成一个逆序。如9 5 4 7的9和4就构成一个逆序。\n\n定义：一个排列的逆序的总数称为这个排列的逆序数，用$\\tau(j_1j_2\\cdots j_n)$表示排列$j_1j_2\\cdots j_n$的逆序数。如9 5 4 7有逆序9-5，9-4，9-7，5-4四个逆序，逆序数为4。\n\n若一个排列的逆序数是偶数，则这个排列是偶排列，否则称为奇排列。如9 5 4 7是偶排列。\n\n若是1 2$\\cdots$ n按序排列，称为这个排列为自然排列，逆序数为0，是偶排列。\n\n定义：将任意两个元素对调，其他元素不动就是对换，若这两个元素相邻则是相邻对换。\n\n定理：一个排列中任意两个元素对换，排列奇偶性变化。\n\n定理：奇排列对换成标准排列（一般为自然排列）的对换次数为奇数，偶排列的对换次数为偶数。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s1-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#n阶行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "n阶行列式",
  "kind": "概念",
  "text": "$\n\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    a_{21} & a_{22} & \\cdots & a_{2n} \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right| \n=\\sum\\limits_{j_1j_2\\cdots j_n}(-1)^{\\tau(j_1j_2\\cdots j_n)}a_{1j_1}a_{2j_2}\\cdots a_{nj_n}$。\n\n即在$n$行每一行都取一个不同于之前取的列的数相乘，把所有的乘积相加起来，其每个项的正负号由其列号序列的逆序数决定。一共有$n!$个项相加减。\n\n从几何意义来看就是由$n$个$n$维向量：\n\n$\\alpha_1=[a_{11},a_{12},\\cdots,a_{1n}]$，$\\alpha_2=[a_{21},a_{22},\\cdots,a_{2n}]$，$\\cdots$，$\\alpha_n=[a_{n1},a_{n2},\\cdots,a_{nn}]$为邻边的$n$维图形体积。\n\n从而行列式的值$D$，若$D\\neq0$则行列式的三个向量称为线性无关，体积就不是0，否则线性相关，即两条线重叠，体积为0。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s1-4",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#特殊行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "特殊行列式",
  "kind": "总结",
  "text": "#### 主对角线行列式\n\n$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n     & \\ddots & \\cdots & a_{2n} \\\\\n     & & \\ddots & \\vdots  \\\\\n     & & & a_{nn}\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n    a_{11} & & & \\\\\n    a_{21} & \\ddots & & \\\\\n    \\vdots & \\cdots & \\ddots &  \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n    a_{11} & & & \\\\\n     & \\ddots & & \\\\\n     & & \\ddots &  \\\\\n     & & & a_{nn}\n\\end{array}\\right|=a_{11}\\cdots a_{nn}$\n\n上三角行列式：包括主对角线的右上部分元素不全为0，左下部分元素全为0。\n\n下三角行列式：包括主对角线的左下部分元素不全为0，右上部分元素全为0。\n\n对角行列式：省略号处的元素不全为0，其他主对角线外的元素全为0。\n\n#### 副对角线行列式\n\n$\\left|\\begin{array}{cccc} \n     & & & a_{1n} \\\\\n     & & \\ddots & a_{2n} \\\\\n     &  \\ddots & \\cdots & \\vdots  \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    a_{21} & \\cdots & \\ddots & \\\\\n    \\vdots & \\ddots & & \\\\\n    a_{n1} & & &\n\\end{array}\\right|=\n\\left|\\begin{array}{cccc} \n     & & & a_{1n} \\\\\n     & & \\ddots & \\\\\n     & \\ddots & & \\\\\n    a_{n1} & & &\n\\end{array}\\right|=(-1)^{\\frac{n(n-1)}{2}}a_{1n}\\cdots a_{n1}$\n\n可以从第$n$行开始向上相邻对换$n-1$次到达第$1$层，依此类推，反下三角可以对换成上三角行列式，对换次数为$(n-1),(n-2),\\cdots,1$一共$\\dfrac{n(n-1)}{2}$次，反上三角行列式也同理。\n\n#### 范德蒙德行列式\n\n$\\left|\\begin{array}{cccc} \n        1 & 1 & \\cdots & 1 \\\\\n        a_1 & a_2  & \\cdots & a_n \\\\\n        \\cdots & \\cdots & \\vdots & \\cdots \\\\\n        a_1^{n-1} & a_2^{n-1} & \\cdots & a_n^{n-1} \\\\\n    \\end{array}\\right|$\n\n 范德蒙德行列式：元素连乘，结果为$\\prod\\limits_{1\\leqslant j<i\\leqslant n}(a_i-a_j)$。\n 若一个四阶范德蒙德行列式的结果为$(a_4-a_1)(a_4-a_2)(a_4-a_3)(a_3-a_1)(a_3-a_2)(a_2-a_1)$。\n\n若一个范德蒙德行列式不等于0，则其每个元素$a_1a_2\\cdots a_n$两两不等。\n\n#### 爪形行列式\n\n$\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    a_{21} & \\ddots & & \\\\\n    \\vdots & & \\ddots &  \\\\\n    a_{n1} & & & a_{nn}\n\\end{array}\\right|$，$\n\\left|\\begin{array}{cccc} \n    a_{11} & & & a_{1n} \\\\\n    a_{21} & & \\ddots & \\\\\n    \\vdots & \\ddots & &  \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|$，$\n\\left|\\begin{array}{cccc} \n    a_{11} & & & a_{1n} \\\\\n     & \\ddots & & a_{2n} \\\\\n     & & \\ddots & \\vdots \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|$，\n\n$\n\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n     & & \\ddots & a_{2n} \\\\\n     & \\ddots & & \\vdots \\\\\n    a_{n1} & & & a_{nn}\n\\end{array}\\right|$。\n\n#### 分块行列式\n\n$\\left|\\begin{array}{cc}\n    A & O \\\\\n    O & B\n\\end{array}\\right|=\n\\left|\\begin{array}{cc}\n    A & * \\\\\n    O & B\n\\end{array}\\right|=\n\\left|\\begin{array}{cc}\n    A & O \\\\\n    * & B\n\\end{array}\\right|=\\vert A\\vert\\cdot\\vert B\\vert$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#行列式性质",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "行列式性质",
  "kind": "定理",
  "text": "拉普拉斯法则定义：$A_{n\\times n}$，$B_{n\\times n}$，则$\\vert AB\\vert=\\vert A\\vert\\cdot\\vert B\\vert$。\n\n若对于行列式$A$，将$a_{ij}$和$a_{ji}$的元素互换位置得到$A^T$，则其就是$A$的转置行列式。\n\n定理：转置行列式与其行列式相等，即$\\vert A\\vert=\\vert A^T\\vert$。\n\n定理：对调行列式的任意两行或两列，行列式变号。\n\n定理：若行列式中有两行或两列元素完全相同，则此行列式等于0。\n\n定理：行列式中如果有两行或两列元素成比例，则此行列式等于0。\n\n定理：行列式的某一行或某一列中所有的元素都乘以同一个数$k$，则等于用$k$乘此行列式。行列式中某一行或一列的所有元素的公因子可以提到行列式记号外面。\n\n即$\n\\left|\\begin{array}{ccccc} \n    a_{11} & \\cdots & ka_{1i} & \\cdots & a_{1n} \\\\\n    a_{21} & \\cdots & ka_{2i} & \\cdots & a_{2n} \\\\\n    \\vdots & \\cdots & \\vdots & \\ddots & \\vdots \\\\\n    a_{n1} & \\cdots & ka_{ni} & \\cdots & a_{nn}\n\\end{array}\\right| \n=k\\left|\\begin{array}{ccccc} \n    a_{11} & \\cdots & a_{1i} & \\cdots & a_{1n} \\\\\n    a_{21} & \\cdots & a_{2i} & \\cdots & a_{2n} \\\\\n    \\vdots & \\cdots & \\vdots & \\ddots & \\vdots \\\\\n    a_{n1} & \\cdots & a_{ni} & \\cdots & a_{nn}\n\\end{array}\\right|$。\n\n定理：某一行列的元素是两数之和$\n\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    \\vdots & \\vdots & \\cdots & \\vdots \\\\\n    a_{i1}+a_{j1} & a_{i2}+a_{j2} & \\cdots & a_{in}+a_{jn} \\\\\n    \\vdots & \\vdots & \\cdots & \\vdots \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right| \n$，\n\n则$=\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    \\vdots & \\vdots & \\cdots & \\vdots \\\\\n    a_{i1} & a_{i2} & \\cdots & a_{in}\\\\\n    \\vdots & \\vdots & \\cdots & \\vdots \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|+\n\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    \\vdots & \\vdots & \\cdots & \\vdots \\\\\n    a_{j1} & a_{j2} & \\cdots & a_{jn} \\\\\n    \\vdots & \\vdots & \\cdots & \\vdots \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|$\n\n定理：把行列式的某一行或某一列的个元素乘以同一个数然后加到另一行或一列对应元素上去，行列式不变。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s3-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#余子式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "余子式",
  "kind": "概念",
  "text": "$\nD=\\left|\\begin{array}{cccc} \n    a_{11} & a_{12} & \\cdots & a_{1n} \\\\\n    a_{21} & a_{22} & \\cdots & a_{2n} \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_{n1} & a_{n2} & \\cdots & a_{nn}\n\\end{array}\\right|\n$\n\n定义：$\\forall a_{ij}$，$D$中划去$i$行，$j$列余下元素而成的$n-1$阶行列式记为$M_{ij}$，其就是$a_{ij}$的余子式。\n\n余子式$a_{ij}$只与$ij$即位置有关，与$a_{ij}$大小无关。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s3-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#代数余子式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "代数余子式",
  "kind": "定理",
  "text": "令$A_{ij}=(-1)^{i+j}M_{ij}$，其就是$a_{ij}$的代数余子式。\n\n定理：若一个$n$阶行列式，若其中第$i$行所有元素除$(i,j)$元$a_{ij}$外都是零，则行列式值$D=a_{ij}A_{ij}$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-1-determinant-determinant-s3-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/1-determinant/determinant.tex#展开公式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "展开公式",
  "kind": "定理",
  "text": "定义：行列式等于其任一行或列的各元素与对应的代数余子式乘积之和。即$D=a_{i1}A_{i1}+\\cdots+a_{in}A_{in}$或$D=a_{1j}A_{1j}+\\cdots+a_{nj}A_{nj}$。\n\n定理：若元素与不对应的代数余子式乘积之和必然为0。即$a_{i1}A_{k1}+\\cdots+a_{in}A_{kn}=0$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#矩阵定义",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵定义",
  "kind": "概念",
  "text": "定义：$m\\times n$矩阵是由$m\\times n$个数$a_{ij}$（元素）排成的$m$行$n$列的数表。\n\n元素是实数的矩阵称为实矩阵，元素是复数的矩阵是复矩阵。\n\n行数列数都为$n$的就是\\textbf{$n$阶矩阵}或方阵，记为$A_n$。\n\n行矩阵或行向量定义：只有一行的矩阵$A=(a_1a_2\\cdots a_n)$。\n\n列矩阵或列向量定义：只有一列的矩阵$B=\n\\left(\\begin{array}{c} \n    b_1 \\\\\n    b_2 \\\\\n    \\cdots \\\\\n    b_m\n\\end{array}\\right)$。\n\n同型矩阵定义：两个矩阵行数、列数相等。\n\n相等矩阵定义：是同型矩阵，且对应元素相等的矩阵。记为$A=B$。\n\n零矩阵定义：元素都是零的矩阵，记为$O$，但是不同型的零矩阵不相等。\n\n 对角矩阵或对角阵定义：从左上角到右下角的直线（对角线）以外的元素都是0的矩阵，记为$\\varLambda=\\textrm{diag}(\\lambda_1,\\lambda_2,\\cdots,\\lambda_n)$。\n\n$\\varLambda=\\left(\n        \\begin{array}{cccc}\n            \\lambda_1 & 0 & \\cdots & 0 \\\\\n            0 & \\lambda_2 & \\cdots & 0 \\\\\n            \\vdots & \\vdots & \\vdots & \\vdots \\\\\n            0 & 0 & \\cdots & \\lambda_n\n        \\end{array}\n    \\right)$\n\n 单位矩阵或单位阵定义：$\\lambda_1=\\lambda_2=\\cdots=\\lambda_n=1$的对角矩阵，记为$E$。这种线性变换叫做恒等变换，$AE=A$。\n\n$E=\\left(\n        \\begin{array}{cccc}\n            1 & 0 & \\cdots & 0 \\\\\n            0 & 1 & \\cdots & 0 \\\\\n            \\vdots & \\vdots & \\vdots & \\vdots \\\\\n            0 & 0 & \\cdots & 1\n        \\end{array}\n    \\right)$",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#矩阵加法减法",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵加法减法",
  "kind": "概念",
  "text": "设与两个矩阵都是同型矩阵$m\\times n$，$A=(a_{ij})$和$B=(b_{ij})$，则其加法就是$A+B$。\n\n$A+B=\\left(\n    \\begin{array}{cccc}\n        a_{11}+b_{11} & a_{12}+b_{12} & \\cdots & a_{1n}+b_{1n} \\\\\n        a_{21}+b_{21} & a_{22}+b_{22} & \\cdots & a_{2n}+b_{2n} \\\\\n        \\vdots & \\vdots & \\vdots & \\vdots \\\\\n        a_{m1}+b_{m1} & a_{m2}+b_{m2} & \\cdots & a_{m+n}+b_{m+n}\n    \\end{array}\n\\right)$\n\n-$A+B=B+A$。\n\n-$(A+B)+C=A+(B+C)$。\n\n若$-A=(-a_{ij})$，则$-A$是$A$的负矩阵，$A+(-A)=O$。\n\n从而矩阵的减法为$A-B=A+(-B)$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#数乘矩阵",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "数乘矩阵",
  "kind": "总结",
  "text": "数$\\lambda$与矩阵$A$的乘积记为$\\lambda A$或$A\\lambda$，规定：\n\n$\\lambda A=A\\lambda=\\left(\n    \\begin{array}{cccc}\n        \\lambda a_{11} & \\lambda a_{12} & \\cdots & \\lambda a_{1n} \\\\\n        \\lambda a_{21} & \\lambda a_{22} & \\cdots & \\lambda a_{2n} \\\\\n        \\vdots & \\vdots & \\ddots & \\vdots \\\\\n        \\lambda a_{m1} & \\lambda a_{m2} & \\cdots & \\lambda a_{mn}\n    \\end{array}\n\\right)$\n\n假设$A$、$B$都是$m\\times n$的矩阵，$\\lambda$、$\\mu$为数：\n\n-$(\\lambda\\mu)A=\\lambda(\\mu A)$。\n\n-$(\\lambda+\\mu)A=\\lambda A+\\mu A$。\n\n-$\\lambda(A+B)=\\lambda A+\\lambda B$。\n\n矩阵加法与数乘矩阵都是矩阵的线性运算。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#矩阵相乘",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵相乘",
  "kind": "概念",
  "text": "设$A=(a_{ij})$是一个$m\\times s$的矩阵，$B=(b_{ij})$是一个$s\\times n$的矩阵，那么$A\\times B=AB=C_{m\\times n}=(c_{ij})$。即：$c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\\cdots+a_{is}b_{sj}=\\sum\\limits_{k=1}^sa_{ik}b_{kj}\\,\\text{（}i=1,2,\\cdots,m;j=1,2,\\cdots,n\\text{）}$。\n\n即前一个矩阵的行乘后一个矩阵的列就得到当前元素的值。\n\n所以按此定义一个$1\\times s$行矩阵与$s\\times 1$列矩阵的乘积就是一个1阶方针即一个数：\n\n$(a_{i1},a_{i2},\\cdots,a_{is})\\left(\n    \\begin{array}{c}\n        b_{1j} \\\\\n        b_{2j} \\\\\n        \\cdots \\\\\n        b_{sj}\n    \\end{array}\n\\right)=a_{i1}b_{1j}+a_{i2}b_{2j}+\\cdots+a_{is}b_{sj}=\\sum\\limits_{k=1}^sa_{ik}b_{kj}=c_{ij}$。\n\n从而$AB=C$的$c_{ij}$就是$A$的第$i$行与$B$的$j$列的乘积。\n\n当$A$左边乘$P$为$PA$，称为左乘$P$，若右边乘$P$为$AP$，则称为右乘$P$。\n\n注意：只有左矩阵的列数等于右矩阵的行数才能相乘。\n\n只有$AB$都是方阵的时候才能$AB$与$BA$。\n\n矩阵的左乘与右乘不一定相等，即$AB\\neq BA$。\n\n定义：若方阵$AB$乘积满足$AB=BA$，则表示其是可交换的。\n\n$A\\neq O$，$B\\neq O$，但是不能推出$AB\\neq O$或$BA\\neq O$。\n\n$AB=O$不能推出$A=O$或$B=O$。\n\n$A(X-Y)=O$当$A\\neq O$也不能推出$X=Y$。\n\n-$(AB)C=A(BC)$。\n\n-$\\lambda(AB)=(\\lambda A)B=A(\\lambda B)$。\n\n-$A(B+C)=AB+AC$。\n\n-$(B+C)A=BA+CA$。\n\n-$EA=AE=A$。\n\n$\\lambda E$称为纯量阵，$(\\lambda E_n)A_n=\\lambda A_n=A_n(\\lambda E_n)$。\n\n若$A_{m\\times s}$，$B_{s\\times n}=(\\beta_1,\\cdots,\\beta_s)$，其中$\\beta$为$n$行的列矩阵，则：\n\n$AB=A(\\beta_1,\\cdots,\\beta_s)=(A\\beta_1,\\cdots,A\\beta_n)$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-4",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#矩阵幂",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵幂",
  "kind": "总结",
  "text": "只有方阵才能连乘，从而只有方阵才有幂。\n\n若$A$是$n$阶方阵，所以：\n\n$A^1=A\\text{，}A^2=A^1A^1\\text{，}\\cdots\\text{，}A^{k+1}=A^kA^1$\n\n-$A^kA^l=A^{k+l}$。\n\n-$(A^k)^l=A^{kl}$。\n\n因为矩阵乘法一般不满足交换率，所以$(AB)^k\\neq A^kB^k$。只有$AB$可交换时才相等。\n\n若$A\\neq 0$不能推出$A^k\\neq 0$，如：\n\n$A=\\left(\n    \\begin{array}{cc}\n        0 & 2 \\\\\n        0 & 0\n    \\end{array}\n\\right)\\neq 0$。$A^2=\\left(\n    \\begin{array}{cc}\n        0 & 2 \\\\\n        0 & 0\n    \\end{array}\n\\right)\\left(\n    \\begin{array}{cc}\n        0 & 2 \\\\\n        0 & 0\n    \\end{array}\n\\right)=\\left(\n    \\begin{array}{cc}\n        0 & 0 \\\\\n        0 & 0\n    \\end{array}\n\\right)=O$。\n\n$A=\\left(\n    \\begin{array}{ccc}\n        0 & 1 & 1 \\\\\n        0 & 0 & 1 \\\\\n        0 & 0 & 0\n    \\end{array}\n\\right)$，$A^3=O$。\n\n矩阵幂可以同普通多项式进行处理。\n\n如$f(x)=a_nx^n+\\cdots+a_1x+n$，对于$A$就是$f(A)=a_nA^n+\\cdots+a_1A+a_nE$。\n\n$f(A)=A^2-A-6E=(A+2E)(A-3E)$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-5",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#矩阵转置",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "矩阵转置",
  "kind": "概念",
  "text": "把矩阵$A$的行换成同序数的列就得到一个新矩阵，就是$A$的转置矩阵$A^T$。若$A$为$m\\times n$，则$A^T$为$n\\times m$。\n\n-$(A^T)^T=A$。\n\n-$(A+B)^T=A^T+B^T$。\n\n-$(\\lambda A)^T=\\lambda A^T$。\n\n-$(AB)^T=B^TA^T$。\n\n- 若$m=n$，$\\vert A\\vert=\\vert A^T\\vert$。\n\n对称矩阵或对称阵定义：矩阵$A$是方阵，且元素以对角线为对称轴对应相等，$A=A^T$。\n\n反对称矩阵定义：矩阵$A$是方阵，且满足$-A=A^T$。即$\\left\\{\\begin{array}{l}\n    a_{ij}=-a_{ji},i\\neq j \\\\\n    a_{ii}=0\n\\end{array}\\right.$。\n\n正交矩阵定义：矩阵$A$是方阵，且满足$A^TA=E$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-6",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#方阵行列式",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "方阵行列式",
  "kind": "概念",
  "text": "由$n$阶方阵$A$的元素所构成的行列式称为矩阵$A$的行列式，记为$\\textrm{det}\\,A$或$\\vert A\\vert$。\n\n-$\\vert A^T\\vert=\\vert A\\vert$。\n\n-$\\vert A^{-1}\\vert=\\dfrac{1}{\\vert A\\vert}$。\n\n-$\\vert\\lambda A\\vert=\\lambda^n\\vert A\\vert$。\n\n-$\\vert AB\\vert=\\vert A\\vert\\cdot\\vert B\\vert=\\vert BA\\vert$。\n\n一般而言：$\\vert A+B\\vert\\neq\\vert A\\vert+\\vert B\\vert$，$\\vert A\\vert\\neq O\\nRightarrow\\vert A\\vert\\neq0$，$A\\neq B\\nRightarrow\\vert A\\vert\\neq\\vert B\\vert$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-7",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#伴随矩阵",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "伴随矩阵",
  "kind": "概念",
  "text": "伴随矩阵或伴随阵定义：行列式$\\vert A\\vert$各个元素的代数余子式$A_{ij}$转置构成的矩阵。\n\n$A^*=\\left(\n    \\begin{array}{cccc}\n        A_{11} & A_{21} & \\cdots & A_{n1} \\\\\n        A_{12} & A_{22} & \\cdots & A_{n2} \\\\\n        \\vdots & \\vdots & \\ddots & \\vdots \\\\\n        A_{1n} & A_{2n} & \\cdots & A_{nn}\n    \\end{array}\n\\right)$\n\n- 任何方阵都有伴随矩阵，其中$AA^*=A^*A=\\vert A\\vert E$。\n\n-$A^*=\\vert A\\vert A^{-1}$，$A^{-1}=\\dfrac{1}{\\vert A\\vert}A^*$，$A=\\vert A\\vert(A^*)^{-1}$。\n\n-$\\vert A^*\\vert=\\vert A\\vert^{n-1}$，$(kA)^*=k^{n-1}A^*$，$(kA)(kA)^*=\\vert kA\\vert E$，$A^T(A^T)^*=\\vert A^T\\vert E$，$A^{-1}(A^{-1})^*=\\vert A^{-1}\\vert E$，$A^*(A^*)^*=\\vert A^*\\vert E$。\n\n-$(A^T)^*=(A^*)^T$，$(A^{-1})^*=(A^*)^{-1}$，$(AB)^*=B^*A^*$，$(A^*)^*=\\vert A\\vert^{n-2}A$。\n\n例题：假设$A$为$n$阶方阵，求$\\vert A^*\\vert$与$(A^*)^*$。\n\n解：$\\because AA^*=A^*A=\\vert A\\vert E$，$\\therefore A^*(A^*)^*=\\vert A^*\\vert E$。\n\n$(A^*)^{-1}A^*(A^*)^*=(A^*)^*=(A^*)^{-1}\\vert A^*\\vert E$，又$AA^*=\\vert A\\vert E$，$\\vert AA^*\\vert=\\vert\\vert A\\vert E\\vert$，\n\n$\\therefore\\vert A\\vert\\vert A^*\\vert=\\vert A\\vert^n\\vert E\\vert$，$\\therefore\\vert A^*\\vert=\\vert A\\vert^{n-1}$。\n\n又$AA^*=\\vert A\\vert E$，$\\therefore A^*=\\vert A\\vert A^{-1}$，$(A^*)^{-1}=(\\vert A\\vert A^{-1})^{-1}=\\dfrac{1}{\\vert A\\vert}A$。\n\n$\\because(A^*)^*=(A^*)^{-1}\\vert A^*\\vert E$，$\\therefore=\\dfrac{1}{\\vert A\\vert}A\\vert A^*\\vert=\\dfrac{1}{\\vert A\\vert}A\\vert A\\vert^{n-1}=\\vert A\\vert^{n-2}A$。\n\n例题：假设$A$为$n$阶方阵，求$(kA)^*$。\n\n解：根据$AA^*=\\vert A\\vert E$，$\\therefore (kA)(kA)^*=\\vert kA\\vert E$，推出$(kA)^*=\\vert kA\\vert(kA)^{-1}$。\n\n$=k^n\\vert A\\vert\\dfrac{1}{k}A^{-1}=k^{n-1}\\vert A\\vert A^{-1}=k^{n-1}A^*$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-8",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#分块矩阵",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "分块矩阵",
  "kind": "方法",
  "text": "在行列式的时候提到了分块行列式，分块行列式计算时要求对应的零行列式必须是行列数相等的，而对于分块矩阵而言则不要求，且不一定要零矩阵。\n\n对于行列数较多的矩阵常使用分块法，将大矩阵化为小矩阵。将矩阵用横纵线分为多个小矩阵，每个矩阵成为矩阵的子块，以子块为元素的矩阵就是分块矩阵。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-8-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#分块矩阵计算",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "分块矩阵计算",
  "kind": "方法",
  "text": "分块矩阵的计算法则与普通矩阵计算类似。\n\n定理：若$AB$矩阵行列数相同，采用相同的分块法，则\n\n$A=\\left(\n    \\begin{array}{ccc}\n        A_{11} & \\cdots & A_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        A_{s1} & \\cdots & A_{sr}\n    \\end{array}\n\\right)\\text{，}B=\\left(\n    \\begin{array}{ccc}\n        B_{11} & \\cdots & B_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        B_{s1} & \\cdots & B_{sr}\n    \\end{array}\n\\right)$\n\n$A+B=\\left(\n    \\begin{array}{ccc}\n        A_{11}+B_{11} & \\cdots & A_{1r}+B_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        A_{s1}+B_{s1} & \\cdots & A_{sr}+B_{sr}\n    \\end{array}\n\\right)\\text{。}$\n\n定理：设$A=\\left(\n    \\begin{array}{ccc}\n        A_{11} & \\cdots & A_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        A_{s1} & \\cdots & A_{sr}\n    \\end{array}\n\\right)$，$\\lambda$为数，则$\\lambda A=\\left(\n    \\begin{array}{ccc}\n        \\lambda A_{11} & \\cdots & \\lambda A_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        \\lambda A_{s1} & \\cdots & \\lambda A_{sr}\n    \\end{array}\n\\right)$。\n\n定理：若$A_{m\\times l}$，$B_{l\\times n}$，采用相同的分块法，则\n\n$A=\\left(\n    \\begin{array}{ccc}\n        A_{11} & \\cdots & A_{1t} \\\\\n        \\vdots & & \\vdots \\\\\n        A_{s1} & \\cdots & A_{st}\n    \\end{array}\n\\right)\\text{，}B=\\left(\n    \\begin{array}{ccc}\n        B_{11} & \\cdots & B_{1t} \\\\\n        \\vdots & & \\vdots \\\\\n        B_{t1} & \\cdots & B_{sr}\n    \\end{array}\n\\right)$\n\n$AB=\\left(\n    \\begin{array}{ccc}\n        C_{11} & \\cdots & C_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        C_{s1} & \\cdots & C_{sr}\n    \\end{array}\n\\right)\\text{，}C_{ij}=\\sum\\limits_{k=1}^tA_{ik}B_{kj}\\text{。}$\n\n定理：设$A=\\left(\n    \\begin{array}{ccc}\n        A_{11} & \\cdots & A_{1r} \\\\\n        \\vdots & & \\vdots \\\\\n        A_{s1} & \\cdots & A_{sr}\n    \\end{array}\n\\right)$，则$A^T=\\left(\n    \\begin{array}{ccc}\n        A_{11}^T & \\cdots & A_{s1}^T \\\\\n        \\vdots & & \\vdots \\\\\n        A_{1r}^T & \\cdots & A_{sr}^T\n    \\end{array}\n\\right)$。\n\n定理：设$A$为$n$阶方阵，$A$的分块矩阵只有对角线上才有非零子块且都是方阵，其余子块都是零矩阵，即$A=\\left(\n    \\begin{array}{cccc}\n        A_1 & & & O \\\\\n         & A_2 & \\\\\n         & & \\ddots & \\\\\n        O & & & A_s\n    \\end{array}\n\\right)$，称为分块对角矩阵。$\\vert A\\vert=\\vert A_1\\vert\\vert A_2\\vert\\cdots\\vert A_s\\vert$。\n\n若$\\vert A_i\\vert\\neq0$，则$\\vert A\\vert\\neq0$，且$A^{-1}=\\left(\n    \\begin{array}{cccc}\n        A_1^{-1} & & & O \\\\\n         & A_2^{-1} & \\\\\n         & & \\ddots & \\\\\n        O & & & A_s^{-1}\n    \\end{array}\n\\right)$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s2-8-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#按行按列分块",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "按行按列分块",
  "kind": "概念",
  "text": "对于$m\\times n$的矩阵$A$，其$n$列称为$A$的$n$个列向量，若第$j$列记为$a_j=\\left(\n    \\begin{array}{c}\n        a_{1j} \\\\\n        a_{2j} \\\\\n        \\vdots \\\\\n        a_{mj}\n    \\end{array}\n\\right)$，则$A$可以按列分块为$A=(a_1,a_2,\\cdots,a_n)$。\n\n其$m$行称为$A$的$m$个行向量，若第$i$行记为$a_i^T=(a_{i1},a_{i2},\\cdots,a_{in})$，则$A$可以按行分块为$A=\\left(\\begin{array}{c}\n    a_1^T \\\\\n    a_2^T \\\\\n    \\vdots \\\\\n    a_{m}^T\n\\end{array}\\right)$。\n\n若对于$A_{m\\times s}$与$B_{s\\times n}$的乘积矩阵$AB=C=(c_{ij})_{m\\times n}$，若将$A$按行分为$m$块，$B$按列分为$n$块，则有：\n\n$AB=\\left(\n    \\begin{array}{c}\n        a_1^T \\\\\n        a_2^T \\\\\n        \\vdots \\\\\n        a_{m}^T\n    \\end{array}\n\\right)(b_1,b_2,\\cdots,b_n)$\n\n$=\\left(\n    \\begin{array}{cccc}\n        a_1^Tb_1 & a_1^Tb_2 & \\cdots & a_1^Tb_n \\\\\n        a_2^Tb_1 & a_2^Tb_2 & \\cdots & a_2^Tb_n \\\\\n        \\vdots & \\vdots & \\ddots & \\vdots \\\\\n        a_{m}^Tb_1 & a_{m}^Tb_2 & \\cdots & a_{m}^Tb_n\n    \\end{array}\n\\right)=(c_{ij})_{m\\times n}\\text{。}$\n\n其中：$c_{ij}=a_i^Tb_j=(a_{i1},a_{i2},\\cdots,a_{is})\\left(\\begin{array}{c}\n    b_{1j} \\\\\n    b_{2j} \\\\\n    \\vdots \\\\\n    b_{sj}\n\\end{array}\\right)=\\sum\\limits_{k=1}^s=a_{ik}b_{kj}\\text{。}$\n\n定理：$A=O$的充要条件是$A^TA=O$。\n\n证明：$\\because A=O$，$\\therefore A^T=O$，$A^TA=O$。\n\n设$A=(a_{ij})_{m\\times n}$，将$A$按列分块为$A=(a_1,a_2,\\cdots,a_n)$，则\n\n$A^TA=\\left(\n    \\begin{array}{c}\n        a_1^T \\\\\n        a_2^T \\\\\n        \\vdots \\\\\n        a_{m}^T\n    \\end{array}\n\\right)(a_1,a_2,\\cdots,a_n)=\\left(\n    \\begin{array}{cccc}\n        a_1^Ta_1 & a_1^Ta_2 & \\cdots & a_1^Ta_n \\\\\n        a_2^Ta_1 & a_2^Ta_2 & \\cdots & a_2^Ta_n \\\\\n        \\vdots & \\vdots & \\ddots & \\vdots \\\\\n        a_{m}^Ta_1 & a_{m}^Ta_2 & \\cdots & a_{m}^Ta_n\n    \\end{array}\n\\right)\\text{。}$\n\n所以$A^TA$的元为$a^T_ia_j$，又$\\because A^TA=O$，$\\therefore a^T_ia_j=0$（$i,j=1,2,\\cdots n$）。\n\n$\\therefore a^T_ja_j=0$（$j=1,2,\\cdots n$），对角线元素全部为0。\n\n且$a^T_ja_j=\\left(\n    \\begin{array}{cccc}\n        a_1^Ta_1 & & & \\\\\n         & a_2^Ta_2 & & \\\\\n         & & \\ddots & \\\\\n         & & & a_{m}^Ta_n\n    \\end{array}\n\\right)=(a_{1j},a_{2j},\\cdots,a_{mj})\\left(\\begin{array}{c}\n    a_{1j} \\\\\n    a_{2j} \\\\\n    \\vdots \\\\\n    a_{mj}\n\\end{array}\\right)$\n\n$=a_{1j}^2+a_{2j}^2+\\cdots+a_{mj}^2=0$，所以$a_{1j}=a_{2j}=\\cdots+a_{mj}=0$。\n\n$\\therefore A=O$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s3-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#逆矩阵定义",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "逆矩阵定义",
  "kind": "概念",
  "text": "逆矩阵就是类似矩阵的除运算。\n\n定义：逆矩阵类比倒数，若对于$n$阶方阵$A$，有一个$n$阶方阵$B$，使得$AB=BA=E$，则$A$可逆，$B$是$A$的逆矩阵也称为逆阵，且逆矩阵唯一，记为$B=A^{-1}$。\n\n定理：若方阵$A$可逆，则$\\vert A\\vert\\neq 0$。\n\n证明：若$A$可逆，则$AA^{-1}=E$，所以$\\vert A\\vert\\cdot\\vert A^{-1}\\vert=\\vert E\\vert=1$，$\\vert A\\vert\\neq 0$。\n\n可以类比普通数字，若$a$有一个倒数$\\dfrac{1}{a}$，则$a\\neq 0$，否则无法倒。\n\n定理：若$\\vert A\\vert\\neq 0$，则$A$可逆，且$A^{-1}=\\dfrac{1}{\\vert A\\vert}A^*$。\n\n证明：$\\because AA^*=A^*A=\\vert A\\vert E$，又$\\vert A\\vert\\neq 0$，$A\\dfrac{1}{\\vert A\\vert}A^*=\\dfrac{1}{\\vert A\\vert}A^*A=E$。\n\n按逆矩阵定义，当$A$可逆，与$A^{-1}=\\dfrac{1}{\\vert A\\vert}A^*$。\n\n当$\\vert A\\vert=0$时，$A$为奇异矩阵，否则是非奇异矩阵。\n\n定理：矩阵是可逆矩阵的必要条件是非奇异矩阵。\n\n定理：若$AB=E$或$BA=E$，则$B=A^{-1}$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s3-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#逆矩阵性质",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "逆矩阵性质",
  "kind": "定理",
  "text": "- 若$A$可逆，则$(A^{-1})^{-1}=A$。\n\n- 若$A$可逆，数$\\lambda\\neq0$，则$(\\lambda A)^{-1}=\\dfrac{1}{\\lambda}A^{-1}$。\n\n- 若$AB$为同阶矩阵且都可逆，则$(AB)^{-1}=B^{-1}A^{-1}$。\n\n- 若$A$可逆，则$(A^T)^{-1}=(A^{-1})^T$。\n\n- 若$A$可逆，则$\\vert A^{-1}\\vert=\\vert A\\vert^{-1}$。\n\n- 若$A$可逆，$\\lambda\\mu$为整数时，$A^\\lambda A^\\mu=A^{\\lambda+\\mu}$，$(A^\\lambda)^\\mu=A^{\\lambda\\mu}$。\n\n若$A$、$B$可逆，则$A+B$不一定可逆，且$(A+B)^{-1}\\neq A^{-1}+B^{-1}$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s3-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#求逆矩阵",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "求逆矩阵",
  "kind": "概念",
  "text": "#### 伴随矩阵\n\n根据伴随矩阵的定义，即求出矩阵所代表行列式的各行元素的代数余子式，然后按列进行排列。\n\n只能求四阶以下的矩阵，过高阶的矩阵很难求出。\n\n- 求出$\\vert A\\vert$，判断是否为0。\n\n- 写出$A^*$。\n\n- 计算$A^{-1}=\\dfrac{1}{\\vert A\\vert}A^*$。\n\n#### 初等变换\n\n可以利用初等变换来求逆矩阵。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s4-0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#矩阵初等变换",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "矩阵初等变换",
  "kind": "总结",
  "text": "可以使用矩阵初等变换来实现求逆矩阵。且初等变换还可以用来求线性方程组的解。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s4-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#初等变换",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "初等变换",
  "kind": "概念",
  "text": "矩阵的三种初等行变换，互换、倍乘、倍加：\n\n- 对换两行（对换$ij$两行，记为$r_i\\leftrightarrow r_j$）。\n\n- 以数$k\\neq0$乘某一行中的所有元（第$i$行乘$k$，记为$r_i\\times k$），对角线元素全部为0。\n\n- 把某一行所有元的$k$倍加到另一行对应元上（第$j$行的$k$倍加上第$i$行上，记为$r_i+kr_j$）。\n\n把对应的行换为列就得到初等列变换，将$r$改为$c$。其逆变换也是一种初等变换。初等行变换和初等列变换都是初等变换。\n\n定义：若$A$经过有限次行变换得到$B$，则称$AB$行等价，记为$A\\overset{r}{\\sim}B$；若$A$经过有限次列变换得到$B$，则称$AB$行等价，记为$A\\overset{c}{\\sim}B$；若$A$经过有限次初等变换得到$B$，则称$AB$行等价，记为$A\\sim B$。\n\n矩阵之间的等价关系：\n\n- 反身性：$A\\sim A$。\n\n- 对称性：若$A\\sim B$，则$B\\sim A$。\n\n- 传递性：若$A\\sim B$，$B\\sim C$，则$A\\sim C$。\n\n若是解方程组，则使用初等行变换解不会发生改变，若使用初等列变换则会改变解。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s4-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#阶梯型矩阵",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "阶梯型矩阵",
  "kind": "概念",
  "text": "将方程式用增广矩阵表示，然后通过初等行变换就可以对方程式进行消元。得到如下类型的矩阵结果，类似三角行列式，如：\n\n$\n    \\left(\n    \\begin{array}{ c c c c c }\n        1 & 2 & -1 &  3 &  4 \\\\\n      \n      0 & 1 &  3 & -2 & -1 \\\\\n      \n      0 & 0 &  0 &  0 &  0 \\\\\n      0 & 0 &  0 &  0 &  0\n    \\end{array}\n    \\right)\n    $\n\n 竖线区分零元素与非零元素，每行的竖线右方第一个元素，称为该非零行的首非零元。\n\n行阶梯形矩阵定义：非零行在零行的上面，非零行的首非零元素所在列在上一行首非零元素所在列的右边的非零矩阵。\n\n行最简形矩阵定义：非零行的首非零元素为1，首非零元所在列其他的元全部为0的行阶梯矩阵。\n\n对于任何矩阵都能通过初等列变换变为行阶梯形矩阵和行最简形矩阵，再通过列变换可以变为标准形：左上角是一个单位矩阵，其他元全部是0。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s4-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#初等变换性质",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "初等变换性质",
  "kind": "定理",
  "text": "定理：设$AB$都是$m\\times n$矩阵，初等变换与矩阵乘积关系：\n\n-$A\\overset{r}{\\sim}B$的充要条件是存在$m$阶可逆矩阵$P$，使得$PA=B$。\n\n-$A\\overset{c}{\\sim}B$的充要条件是存在$n$阶可逆矩阵$Q$，使得$AQ=B$。\n\n-$A\\sim B$的充要条件是存在$m$阶可逆矩阵$P$和$n$阶可逆矩阵$Q$，使得$PAQ=B$。\n\n初等变换具有如下性质：\n\n- 设$A$是一个$m\\times n$矩阵，对$A$进行一次初等行变换，相当于在$A$左乘对应$m$阶初等矩阵；对$A$进行一次列变换，相当于在$A$右乘对应$n$阶初等矩阵。\n\n- 方阵$A$可逆的充分必要条件是存在有限个初等矩阵$P_i$使得$A=\\prod\\limits_{i=1}^nP_i$。\n\n- 可逆方阵$A$一定可以通过有限次初等变换化为同阶单位矩阵$E$。\n\n- 方阵$A$可逆的充要条件是$A\\overset{r}{\\sim}E$。（即$A$方阵所代表的线性方程组能通过初等计算得到最后的解）\n\n对于$A_{m\\times n}$进行初等变换：\n\n- 第$ij$行对换：$E_m(ij)A$，第$ij$列变换：$AE_n(ij)$。\n\n- 数$k$乘第$i$行：$E_m(i(k))A$，数$k$乘第$i$列：$AE_n(i(k))$。\n\n- 数$k$乘第$j$行加到$i$行：$E_m(ij(k))A$，数$k$乘第$j$列加到$i$列：$AE_n(ij(k))$。\n\n已知$A$经过无数次初等变换就能变成单位矩阵，即通过乘无数个初等矩阵就可以变成单位矩阵，那么这些初等矩阵是什么呢？\n\n例如$A=\\left(\\begin{array}{cc}\n    1 & 2 \\\\\n    2 & 3\n\\end{array}\\right)$要变成$\\left(\\begin{array}{cc}\n    1 & 2 \\\\\n    0 & -1\n\\end{array}\\right)$，就需要将第一排的数据乘-2加到第二排。\n\n即按照初等矩阵的表示方法就是$E_{21}(-2)$，然后这个初等矩阵就是对单位矩阵进行同样变换。\n\n即$E_{21}(-2)$就是将初等矩阵第一排的数据乘-2加到第二排，得到$E_{21}(-2)=\\left(\\begin{array}{cc}\n    1 & 0 \\\\\n    -2 & 1\n\\end{array}\\right)$，而行变换$\\left(\\begin{array}{cc}\n    1 & 0 \\\\\n    -2 & 1\n\\end{array}\\right)\\left(\\begin{array}{cc}\n    1 & 2 \\\\\n    2 & 3\n\\end{array}\\right)=\\left(\\begin{array}{cc}\n    1 & 2 \\\\\n    0 & -1\n\\end{array}\\right)$，果然就得到目标结果。\n\n从而对一个矩阵进行初等行变换就是左乘一个进行同样行变换的初等矩阵，列变换同理。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s4-4",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#初等矩阵性质",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "初等矩阵性质",
  "kind": "定理",
  "text": "初等矩阵定义：由单位矩阵$E$经过一次初等变换得到的矩阵。所以初等矩阵都是方阵。\n\n- 初等矩阵的转置也是初等矩阵。\n\n- 对初等矩阵进行行或列变换，$\\vert E_{ij}\\vert=-1$，对其求逆：$E_{ij}^{-1}=E_{ij}$。\n\n- 对初等矩阵$i$行乘$k$，$\\vert E_i(k)\\vert=k$，对其求逆：$E_i(k)^{-1}=E_i\\left(\\dfrac{1}{k}\\right)$。\n\n- 对初等矩阵第$j$行乘$k$加到$i$行，$\\vert E_{ij}(k)\\vert=1$，对其求逆：$E_{ij}(k)^{-1}=E_{ij}(-k)$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s4-5",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#初等行变换求逆",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "初等行变换求逆",
  "kind": "方法",
  "text": "若该矩阵$A$是可逆矩阵，就将$AX=B$的增广矩阵$(A,B)$化为最简形矩阵，从而得到方程解。\n\n$\\because P_i\\cdots P_2P_1A=E$，$P_i\\cdots P_2P_1E=A^{-1}$。\n\n$\\left[A\\vdots B\\right]\\overset{r}{\\sim}\\left[E\\vdots A^{-1}\\right]$，$\\left[\\begin{array}{c}\n    A \\\\\n    B\n\\end{array}\\right]\\overset{c}{\\sim}\\left[\\begin{array}{c}\n    E \\\\\n    A^{-1}\n\\end{array}\\right]$。\n\n例题：求解矩阵方程$AX=B$，$A=\\left(\\begin{array}{ccc}\n    2 & 1 & -3 \\\\\n    1 & 2 & -2 \\\\\n    -1 & 3 & 2\n\\end{array}\\right)$，$B=\\left(\\begin{array}{cc}\n    1 & -1 \\\\\n    2 & 0 \\\\\n    -2 & 5\n\\end{array}\\right)$。\n\n解：因为$AX=B$，所以左乘$A^{-1}$：$A^{-1}AX=EX=A^{-1}B$，增广矩阵行变换：\n\n$(A,B)=\\left(\\begin{array}{ccccc}\n    2 & 1 & -3 & 1 & -1 \\\\\n    1 & 2 & -2 & 2 & 0 \\\\\n    -1 & 3 & 2 & -2 & 5\n\\end{array}\\right)\\sim\\left(\\begin{array}{ccccc}\n    1 & 2 & -2 & 2 & 0 \\\\\n    0 & -3 & 1 & -3 & -1 \\\\\n    0 & 5 & 0 & 0 & 5\n\\end{array}\\right)$\n\n$\\sim\\left(\\begin{array}{ccccc}\n    1 & 2 & -2 & 2 & 0 \\\\\n    0 & 1 & 0 & 0 & 1 \\\\\n    0 & 0 & 1 & -3 & 2\n\\end{array}\\right)\\sim\\left(\\begin{array}{ccccc}\n    1 & 0 & 0 & -4 & 2 \\\\\n    0 & 1 & 0 & 0 & 1 \\\\\n    0 & 0 & 1 & -3 & 2\n\\end{array}\\right)$，从而$X=\\left(\\begin{array}{cc}\n    -4 & 2 \\\\\n    0 & 1 \\\\\n    -3 & 2\n\\end{array}\\right)$。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s5-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#定义",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "定义",
  "kind": "概念",
  "text": "秩的本质就是组成矩阵的线性无关的向量个数。\n\n若秩等于矩阵行数就是满秩，否则就是降秩。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s5-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#性质",
  "subject": "xiandai",
  "topic": "性质",
  "title": "性质",
  "kind": "定理",
  "text": "$r(kA)=r(A)$。\n\n$r(AB)\\leqslant\\min\\{r(A),r(B)\\}$。当且仅当$AB$满秩等号成立。\n\n$r(A+B)\\leqslant r(A|B)\\leqslant r(A)+r(B)$。\n\n$r(A^*)=\\left\\{\\begin{array}{l}\n    n, r(A)=n \\\\\n    1, r(A)=n-1 \\\\\n    0, r(A)<n-1\n\\end{array}\\right.$。\n\n$AB=O$，$r(A)+r(B)\\leqslant$阶数，即变量数或列数。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s5-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#子式",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "子式",
  "kind": "总结",
  "text": "在矩阵中，任取$k$行和$k$列 ，位于这些行和列的交点上的 个元素原来的次序所组成的$k$阶方阵的行列式，叫做$A$的一个$k$阶子式。\n\n当$r(A)=r$时：\n\n-$A$中一定有$r$阶子式不为0，但并不要求所有的$r$阶子式都不为0。即至少存在一个不为0的$r$阶子式让原式秩保持$r$。\n\n-$A$中一定有$r-1$阶子式不为0，但并不要求所有的$r-1$阶子式都不为0。\n\n- 而$r+1$阶子式则必须全为0。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s6-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#定义",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "定义",
  "kind": "概念",
  "text": "定义：若有两个同型的$m\\times n$的矩阵$AB$，满足$B=QAP$（$Q$为$m\\times m$阶可逆矩阵，$P$为$n\\times n$阶可逆矩阵），则$AB$等价。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s6-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#性质",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "性质",
  "kind": "定理",
  "text": "- 矩阵$A$和$A$等价（反身性）。\n\n- 矩阵$A$和$B$等价，那么$B$和$A$也等价（等价性）。\n\n- 矩阵$A$和$B$等价，矩阵$B$和$C$等价,那么$A$和$C$等价（传递性）。\n\n- 矩阵$A$和$B$等价，那么$\\vert A\\vert=k\\vert B\\vert$。（$k$为非零常数）。\n\n- 具有行等价关系的矩阵所对应的线性方程组有相同的解。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-2-matrix-matrix-s6-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/2-matrix/matrix.tex#判定",
  "subject": "xiandai",
  "topic": "判定",
  "title": "判定",
  "kind": "定理",
  "text": "定理：若$AB$同型且秩相等，则其等价。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#向量",
  "subject": "xiandai",
  "topic": "向量代数",
  "title": "向量",
  "kind": "总结",
  "text": "线性代数的主要研究对象就是向量，行列式与矩阵都是由向量组成的向量组。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s1-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#向量的定义与运算",
  "subject": "xiandai",
  "topic": "向量代数",
  "title": "向量的定义与运算",
  "kind": "概念",
  "text": "$n$维向量定义：$n$个数构成的一个有序数组$[a_1,a_2,\\cdots,a_n]$称为一个$n$维向量，记为$\\alpha=[a_1,a_2,\\cdots,a_n]$，并称$\\alpha$为$n$维行向量，$\\alpha^T$为$n$维列向量，$a_i$为向量$\\alpha$的$i$个分量。\n\n若$\\alpha$与$\\beta$都是$n$维向量，且对应元素相等，则$\\alpha=\\beta$。\n\n$\\alpha+\\beta=[a_1+b_1,a_2+b_2,\\cdots,a_n+b_n]$。\n\n$k\\alpha=[ka_1,ka_2,\\cdots,ka_3]$。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s1-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#向量组的线性概念",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "向量组的线性概念",
  "kind": "概念",
  "text": "线性组合定义：$m$个$n$维向量$\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$以及$m$个数$k_1,k_2,\\cdots,k_m$，则向量$k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_m\\alpha_m$就是向量组$a_1,a_2,\\cdots,a_m$的线性组合。\n\n线性表出定义：若向量$\\beta$能表示成向量组$\\alpha_1,\\alpha_2,\\cdots,a_m$的线性组合，则存在$m$个数$k_1,k_2,\\cdots,k_m$，使得$\\beta=k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_m\\alpha_m$，则成向量$\\beta$能被向量组$a_1,a_2,\\cdots,a_m$线性表出。否则不能被线性表出。\n\n线性相关定义：对$m$个$n$维向量$a_1,a_2,\\cdots,a_m$，存在一组不全为0的数$k_1,k_2,\\cdots,k_m$，使得$k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_m\\alpha_m=0$，则称$a_1,a_2,\\cdots,a_m$线性相关。\n\n含有零向量或成比例向量的向量组必然线性相关。\n\n线性无关定义：对$m$个$n$维向量$a_1,a_2,\\cdots,a_m$，不存在一组不全为0的数$k_1,k_2,\\cdots,k_m$，使得$k_1\\alpha_1+k_2\\alpha_2+\\cdots+k_m\\alpha_m=0$，即仅当$k_1=k_2=\\cdots=k_m=0$才成立，则称$a_1,a_2,\\cdots,a_m$线性无关。\n\n两个非零向量，不成比例向量的向量必然线性无关。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s2-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#线性相关判定",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "线性相关判定",
  "kind": "方法",
  "text": "- 向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$（$n\\geqslant2$）线性相关的充要条件是向量组中至少有一个向量可由其他$n-1$个向量线性表出。若$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关的充要条件是向量组的任何一个向量都不能被其他$n-1$个向量线性表出。\n\n- 向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关，而$\\beta,\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性相关，则$\\beta$可由$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性表示，且表示方法唯一。\n\n- 向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$可由向量组$\\beta_1,\\beta_2,\\cdots,\\beta_s$线性表示，且$n>s$，则$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性相关。（以少表多，多的相关）若向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$可由向量组$\\beta_1,\\beta_2,\\cdots,\\beta_s$线性表示，$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关，则$n\\leqslant s$。\n\n- 设$m$个$n$维向量$\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$，其中$\\alpha_1=[a_{11},a_{12},\\cdots,a_{m1}]^T$，$\\cdots$，$\\alpha_m=[a_{1m},a_{2m},\\cdots,a_{mm}]^T$，则向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$线性相关的充要条件是齐次线性方程$Ax=0$有非零解，其中$A=[\\alpha_1,\\alpha_2,\\cdots,\\alpha_m]$，$x=[x_1,x_2,\\cdots,x_m]^T$。$m$个$n$维向量$\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$线性无关的充要条件是齐次线性方程$Ax=0$只有零解。\n\n- 向量$\\beta$可由向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$表出，则向量组$\\alpha_1x_1+\\alpha_2x_2+\\cdots+\\alpha_nx_n=[\\alpha_1,\\alpha_2,\\cdots,\\alpha_n][x_1,x_2,\\cdots,x_n]^T=\\beta$有解，即$r([\\alpha_1,\\alpha_2,\\cdots,\\alpha_n])=r([\\alpha_1,\\alpha_2,\\cdots,\\alpha_n,\\beta])$。否则则不能表出，则方程无解，$r([\\alpha_1,\\alpha_2,\\cdots,\\alpha_n])+1=r([\\alpha_1,\\alpha_2,\\cdots,\\alpha_n,\\beta])$\n\n- 向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$存在一部分向量线性相关，则整个向量组线性相关。若$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关，则任意一部分向量组线性无关。\n\n- 设$m$个$n$维向量$\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$线性无关，则把这些向量中每个各任意添加$s$个分量所得到的新向量组（$n+s$维）$\\alpha_1^*,\\alpha_2^*,\\cdots,\\alpha_m^*$也是线性无关的；如果$\\alpha_1,\\alpha_2,\\cdots,\\alpha_m$线性相关，则每个各去掉相同的若干分量得到的新向量组也线性相关。（原来无关延长无关，原来相关缩短相关）",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s2-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#极大线性无关组",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "极大线性无关组",
  "kind": "概念",
  "text": "#### 概念\n\n极大线性无关组定义：在向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$中，若存在部分$a_i,a_j,\\cdots,a_k$满足：①$a_i,a_j,\\cdots,a_k$线性无关；②向量组中任一向量$a_s$（$i=1,2,\\cdots,n$）均可由$a_i,a_j,\\cdots,a_k$线性表出，则称向量组$a_i,a_j,\\cdots,a_k$为原向量组的极大线性无关组。\n\n不包含无用约束方程的最简方程组的系数矩阵就是极大线性无关组。\n\n向量组的极大线性无关组一般不唯一，只由一个零向量组成的向量组不存在极大线性无关组，一个线性无关向量组的极大线性无关组就是其本身。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#向量组秩",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "向量组秩",
  "kind": "总结",
  "text": "向量组构成矩阵的秩等于行向量组的秩等于列向量组的秩。\n\n若$A$通过初等行变换为$B$，则$AB$的行向量组是等价向量组，任何对应的部分列向量组都具有同样的线性相关性。\n\n若向量组$B$均可由$A$线性表出，则$r(B)\\leqslant r(A)$。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s4-0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#等价向量组",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "等价向量组",
  "kind": "总结",
  "text": "任何一个组都可以由其极大线性无关组来代表。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s4-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#定义",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "定义",
  "kind": "概念",
  "text": "设两个向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$和$\\beta_1,\\beta_2,\\cdots,\\beta_m$，若这两个向量组可以互相线性表出，则称其为等价向量组，记为$\\alpha\\cong\\beta$。\n\n具有的性质：\n\n-$A\\cong A$（反身性）。\n\n-$A\\cong B$，则$B\\cong A$（对称性）。\n\n-$A\\cong B$，$B\\cong C$，则$A\\cong C$（传递性）。\n\n向量组和其极大线性无关组是等价向量组。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s4-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#判定",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "判定",
  "kind": "总结",
  "text": "若$r(A)=r(B)=r(A|B)$，则向量组等价。\n\n$r(A)=r(B)$，$A$可以由$B$表出（只需要一个方向的表出），则向量组等价。\n\n$PAQ=B$（$PQ$为可逆矩阵），通过初等行列变换$A$能转换为$B$。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s4-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#与等价矩阵区别",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "与等价矩阵区别",
  "kind": "总结",
  "text": "对于矩阵而言，若$A\\cong B$，则$AB$同型且$r(A)=r(B)$。\n\n对于向量组而言，若$A\\cong B$，则$AB$同维（行数相同）且$r(A)=r(B)=r(A|B)$。\n\n等价向量组跟等价矩阵不同，等价矩阵必然完全一致，而等价向量组只要其极大线性无关组一致，可以多一些其他线性相关向量。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s5-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#基本概念",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "基本概念",
  "kind": "概念",
  "text": "若$\\xi_1,\\xi_2,\\cdots,\\xi_n$是$n$维向量空间$R^n$中的线性无关的有序向量组，则任意向量$\\alpha\\in R^n$均可由$\\xi_1,\\xi_2,\\cdots,\\xi_n$线性表出，记为$\\alpha=a_1\\xi_1+a_2\\xi_2+\\cdots+a_n\\xi_n$，类似一个极大线性无关组，则称有序向量组$\\xi_1,\\xi_2,\\cdots,\\xi_n$为$R^n$的一个基，基向量的个数$n$为向量空间的维数，而$[a_1,a_2,\\cdots,a_n]([a_1,a_2,\\cdots,a_n]^T)$为向量$\\alpha$在基$\\xi_1,\\xi_2,\\cdots,\\xi_n$下的坐标，或称为$\\alpha$的坐标行列向量。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-3-vector-vector-s5-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/3-vector/vector.tex#基变换与坐标变换",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "基变换与坐标变换",
  "kind": "概念",
  "text": "若$\\eta_1,\\eta_2,\\cdots,\\eta_n$和$\\xi_1,\\xi_2,\\cdots,\\xi_n$是$R^n$中两个基，且有关系：$[\\eta_1,\\eta_2,\\cdots,\\eta_n]=[\\xi_1,\\xi_2,\\cdots,\\xi_n]C_{n\\times n}$，则这个式子称为基$\\xi_1,\\xi_2,\\cdots,\\xi_n$到基$\\eta_1,\\eta_2,\\cdots,\\eta_n$的基变换公式，矩阵$C$就是基$\\xi_1,\\xi_2,\\cdots,\\xi_n$到基$\\eta_1,\\eta_2,\\cdots,\\eta_n$的过渡矩阵，$C$可逆，$C$的第$i$列就是$\\eta_i$在基$\\xi_1,\\xi_2,\\cdots,\\xi_n$下的坐标列向量。\n\n$\\alpha$在基$\\xi_1,\\xi_2,\\cdots,\\xi_n$和基$\\eta_1,\\eta_2,\\cdots,\\eta_n$下坐标分别为$x=[x_1,x_2,\\cdots,x_n]^T$，$y=[y_1,y_2,\\cdots,y_n]^T$，即$\\alpha=[\\xi_1,\\xi_2,\\cdots,\\xi_n]x=[\\eta_1,\\eta_2,\\cdots,\\eta_n]y$。又$C$是基$\\xi_1,\\xi_2,\\cdots,\\xi_n$到基$\\eta_1,\\eta_2,\\cdots,\\eta_n$的过渡矩阵，则$[\\xi_1,\\xi_2,\\cdots,\\xi_n]=[\\eta_1,\\eta_2,\\cdots,\\eta_n]C$，则$\\alpha=[\\xi_1,\\xi_2,\\cdots,\\xi_n]x=[\\eta_1,\\eta_2,\\cdots,\\eta_n]y=[\\xi_1,\\xi_2,\\cdots,\\xi_n]Cy$，从而$x=Cy$或$y=C^{-1}x$，这个就是坐标变换公式。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s1-0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#基本概念",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "基本概念",
  "kind": "概念",
  "text": "矩阵是根据线性方程组得到。线性方程组和向量组本质上是一致的。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s1-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#线性方程组与矩阵",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "线性方程组与矩阵",
  "kind": "概念",
  "text": "$\\begin{cases}\n        a_{11}x_1+\\cdots+a_{1n}x_n=0 \\\\\n        \\cdots \\\\\n        a_{m1}x_1+\\cdots+a_{mn}x_n=0\n    \\end{cases}$\n\n$n$元齐次线性方程组。\n\n$\\begin{cases}\n        a_{11}x_1+\\cdots+a_{1n}x_n=b_1 \\\\\n        \\cdots \\\\\n        a_{m1}x_1+\\cdots+a_{mn}x_n=b_n\n    \\end{cases}$\n\n$n$元非齐次线性方程组。\n\n$m$是方程个数，即方程组行数，$n$是方程未知数个数，即类似方程组的列数。\n\n对于齐次方程，$x_1=\\cdots=x_n=0$一定是其解，称为其零解，若有一组不全为零的解，则称为其非零解。其一定有零解，但是不一定有非零解。\n\n对于非齐次方程，只有$b_1\\cdots b_n$不全为零才是。\n\n令系数矩阵$A_{m\\times n}=\\left(\n    \\begin{array}{ccc}\n        a_{11} & \\cdots & a_{1n} \\\\\n        \\cdots \\\\\n        a_{m1} & \\cdots & a_{mn}\n    \\end{array}\n\\right)$，未知数矩阵$x_{n\\times 1}=\\left(\n    \\begin{array}{c}\n        x_1 \\\\\n        \\cdots \\\\\n        x_n\n    \\end{array}\n\\right)$，常数项矩阵$b_{m\\times 1}=\\left(\n    \\begin{array}{c}\n        b_1 \\\\\n        \\cdots \\\\\n        b_m\n    \\end{array}\n\\right)$，增广矩阵$B_{m\\times(n+1)}=\\left(\n    \\begin{array}{c:c}\n        \\begin{matrix}\n            a_{11} & \\cdots & a_{1n}\\\\\n            \\cdots \\\\\n            a_{m1} & \\cdots & a_{mn}\n        \\end{matrix}&\n        \\begin{matrix}\n            b_1\\\\\n            \\\\\n            b_n\n        \\end{matrix}\n    \\end{array}\n\\right)$。\n\n所以$AX=\\left(\n    \\begin{array}{c}\n        a_11x_1+\\cdots+a_{1n}x_n \\\\\n        \\cdots \\\\\n        a_{m1}x_1+\\cdots+a_{mn}x_n\n    \\end{array}\n\\right)$。\n\n从而$AX=b$等价于$\\begin{cases}\n    a_{11}x_1+\\cdots+a_{1n}x_n=b_1 \\\\\n    \\cdots \\\\\n    a_{m1}x_1+\\cdots+a_{mn}x_n=b_n\n\\end{cases}$，当$b=O$就是齐次线性方程。\n\n从而矩阵可以简单表示线性方程。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s1-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#矩阵乘法与线性变换",
  "subject": "xiandai",
  "topic": "矩阵运算",
  "title": "矩阵乘法与线性变换",
  "kind": "总结",
  "text": "矩阵乘法实际上就是线性方程组的线性变换，将一个变量关于另一个变量的关系式代入原方程组，得到与另一个变量的关系。\n\n$\\begin{cases}\n    y_1=a_{11}x_1+a_{12}x_2+\\cdots+a_{1s}x_s \\\\\n    \\cdots \\\\\n    y_m=a_{m1}x_1+a_{m2}x_2+\\cdots+a_{ms}x_s\n\\end{cases}\\begin{cases}\n    x_1=b_{11}t_1+b_{12}t_2+\\cdots+b_{1n}t_n \\\\\n    \\cdots \\\\\n    x_s=b_{s1}t_1+b_{s2}t_2+\\cdots+b_{sn}t_n\n\\end{cases}$\n\n原本是线性方程分别是$y$与$x$和$x$与$t$的关系式，而如果将$t$关于$x$的关系式代入$x$关于$y$的关系式中，就会得到$t$关于$y$的关系式：\n\n$\\begin{cases}\n    y_1=a_{11}(b_{11}t_1+\\cdots+b_{1n}t_n)+\\cdots+a_{1s}(b_{s1}t_1+b_{s2}t_2+\\cdots+b_{sn}t_n) \\\\\n    \\cdots \\\\\n    y_m=a_{m1}(b_{11}t_1+\\cdots+b_{1n}t_n)+\\cdots+a_{ms}(b_{s1}t_1+b_{s2}t_2+\\cdots+b_{sn}t_n)\n\\end{cases}$\n\n$=\\begin{cases}\n    y_1=(a_{11}b_{11}+\\cdots+a_{1s}b_{s1})t_1+\\cdots+(a_{11}b_{1n}+\\cdots+a_{1s}b_{sn})t_n \\\\\n    \\cdots \\\\\n    y_m=(a_{m1}b_{11}+\\cdots+a_{ms}b_{s1})t_1+\\cdots+(a_{m1}b_{1n}+\\cdots+a_{ms}b_{sn})t_m\n\\end{cases}$\n\n这可以看作上面两个线性方程组相乘，也可以将线性方程组表示为矩阵，进行相乘就得到乘积，从而了解矩阵乘积与线性方程组的关系：\n\n$\\left(\\begin{array}{ccc}\n    a_{11} & \\cdots & a_{1s} \\\\\n    \\vdots & \\ddots & \\vdots \\\\\n    a_{m1} & \\cdots & a_{ms}\n\\end{array}\\right)_{m\\times s}\\left(\\begin{array}{ccc}\n    b_{11} & \\cdots & a_{1n} \\\\\n    \\vdots & \\ddots & \\vdots \\\\\n    b_{s1} & \\cdots & b_{sn}\n\\end{array}\\right)_{s\\times n}$\n\n$=\\left(\\begin{array}{ccc}\n    a_{11}b_{11}+\\cdots+a_{1s}b_{s1} & \\cdots & a_{11}b_{1n}+\\cdots+a_{1s}b_{sn} \\\\\n    \\vdots & \\ddots & \\vdots \\\\\n    a_{m1}b_{11}+\\cdots+a_{ms}b_{s1} & \\cdots & a_{m1}b_{1n}+\\cdots+a_{ms}b_{sn}\n\\end{array}\\right)_{m\\times n}\\text{。}$",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s1-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#线性方程组的解",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "线性方程组的解",
  "kind": "总结",
  "text": "对于一元一次线性方程：$ax=b$：\n\n- 当$a\\neq 0$时，可以解得$x=\\dfrac{b}{a}$。\n\n- 当$a=0$时，若$b\\neq 0$时，无解，若$b=0$时，无数解。\n\n当推广到多元一次线性方程组：$Ax=b$，如何求出$x$这一系列的$x$的解？\n\n从数学逻辑上看，已知多元一次方程，有$m$个约束方程，有$n$个未知数，假定$m\\leqslant n$。\n\n当$m<n$时，就代表有更多的未知变量不能被方程约束，从而有$n-m$个自由变量，所以就是无数解，解组中其他解可以由自由变量来表示。无穷多解需要一个解来代表其他解，这个解就是基础解系。\n\n当$m=n$时代表约束与变量数量相等，此时又要分三种情况。\n\n当所有的约束条件其中存在线性相关，即一部分约束条件可以由其他约束表示，则代表这部分约束条件是没用的，实际上的约束条件变少，从而情况等于$m<n$，结果是无数解。\n\n当所有的约束条件不存在线性相关，但是一部分约束条件互相矛盾，则约束条件下就无法解出解，从而结果是无实数解。\n\n当所有的约束条件不存在线性相关，且相互之间不存在矛盾情况，这时候才会解出一个实数解，从而结果是有唯一实解。\n\n若使用矩阵来解决线性方程组的问题，其系数矩阵$A_{m\\times n}$。\n\n对于$A\\neq O$，则$Ax=b$，若存在一个矩阵$B_{n\\times n}$类似$\\dfrac{1}{a}$，使得$BAx=Bb$，解得$Ex=x=Bb$，这个$B$就是$A$的逆矩阵。\n\n对于$A=O$即不可逆，需要判断$b$是否为0，若不是则无实数解，若是则无穷解，这种判断需要用到增广矩阵，需要用到矩阵的秩判断。\n\n取自由变量时必须要保证取完后的矩阵行列式不为0，否则自由变量不能表示其他向量。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s1-4",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#线性方程组的矩阵解表示",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "线性方程组的矩阵解表示",
  "kind": "总结",
  "text": "已知对于线性方程组$\\begin{cases}\n    a_{11}x_1+\\cdots+a_{1n}x_n=b_1 \\\\\n    \\cdots \\\\\n    a_{m1}x_1+\\cdots+a_{mn}x_n=b_n\n\\end{cases}$。\n\n按乘积表示为$A_{m\\times n}x_{n\\times 1}=b_{m\\times 1}$，然后将$A$按列分块，$x$按行分块：\n\n$(a_1,a_2,\\cdots,a_n)\\left(\\begin{array}{c}\n    x_1 \\\\\n    x_2 \\\\\n    \\vdots \\\\\n    x_n\n\\end{array}\\right)=b\\text{，}\\left(\\begin{array}{c}\n    a_{11} \\\\\n    a_{21} \\\\\n    \\vdots \\\\\n    a_{m1}\n\\end{array}\\right)x_1+\\cdots+\\left(\\begin{array}{c}\n    a_{1n} \\\\\n    a_{2n} \\\\\n    \\vdots \\\\\n    a_{mn}\n\\end{array}\\right)x_n=\\left(\\begin{array}{c}\n    b_1 \\\\\n    b_2 \\\\\n    \\vdots \\\\\n    b_m\n\\end{array}\\right)\\text{。}$\n\n这三种都是解的表示方法。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s2-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#齐次方程组",
  "subject": "xiandai",
  "topic": "微分方程",
  "title": "齐次方程组",
  "kind": "概念",
  "text": "即$Ax=0$。其中$A$有$m$行$n$列。\n\n#### 有解条件\n\n必有一个零解。\n\n有解条件讨论是否列满秩问题，即方程组是否能约束全部变量。\n\n对系数矩阵进行行变换，若$r(A)=m$，即使行满秩若$m<n$则列不满秩，那么还是无法约束所有变量；若$r(A)=n$，即使行不满秩但是列满秩，所以还是能约束所有变量。\n\n当$r(A)=n$时，即$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性无关，则方程组有唯一零解。\n\n当$r(A)=r<n$时，即$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$线性相关，则方程具有无穷多个非零解，具有$n-r$个线性无关解（自由变量）。\n\n#### 解的性质\n\n若$A\\xi_1=0$，$A\\xi_2=0$，则$A(k_1\\xi_1+k_2\\xi_2)=0$。\n\n#### 解的结构\n\n基础解系定义：假如$\\xi_1,\\xi_2,\\cdots,\\xi_{n-r}$满足：①是方程组$Ax=0$的解；②线性无关；③方程组$Ax=0$的任一解均可由$\\xi_1,\\xi_2,\\cdots,\\xi_{n-r}$线性表出，则称$\\xi_1,\\xi_2,\\cdots,\\xi_{n-r}$为$Ax=0$的基础解系。\n\n当$r(A)<n$时讨论基础解系。\n\n通解定义：设$\\xi_1,\\xi_2,\\cdots,\\xi_{n-r}$是$Ax=0$的基础解系，则$k_1\\xi_1+k_2\\xi_2+\\cdots+k_{n-r}\\xi_{n-r}$是方程组$Ax=0$的通解，$k_1,k_2,\\cdots,k_{n-r}$为任意常数。\n\n#### 求解过程\n\n- 将系数矩阵$A$作为初等行变换后化为阶梯形矩阵或最简阶梯形矩阵$B$，因为初等行变换将方程组化为同解方程组，所以$Ax=0$与$Bx=0$同解，只需解$Bx=0$，设$r(A)=r$。其中$A$为$m$行$n$列，$m$为约束方程组个数，$n$为变量个数。\n\n- 在$B$中按列找到一个秩为$r$的子矩阵，即在每排阶梯都选出一列组合成子矩阵，则剩余列位置的未知数就是自由变量。（极大线性无关组）\n\n- 按基础解析定义求出$\\xi_1,\\xi_2,\\cdots,\\xi_{n-r}$，并写出通解。\n\n例题：求齐次线性方程组$\\left\\{\\begin{array}{l}\n    x_1+x_2-3x_4-x_5=0 \\\\\n    x_1-x_2+2x_3-x_4=0 \\\\\n    4x_1-2x_2+6x_3+3x_4-4x_5=0 \\\\\n    2x_1+4x_2-2x_3+4x_4-7x_5=0\n\\end{array}\\right.$的通解。\n\n解：系数矩阵$A=\\left(\\begin{array}{ccccc}\n    1 & 1 & 0 & -3 & -1 \\\\\n    1 & -1 & 3 & -1 & 0 \\\\\n    4 & -2 & 6 & 3 & -4 \\\\\n    2 & 4 & -2 & 4 & -7\n\\end{array}\\right)$，然后对其行变换，得到：\n\n$=\\left(\\begin{array}{ccccc}\n    1 & 1 & 0 & -3 & -1 \\\\\n    0 & -2 & 2 & 2 & 1 \\\\\n    0 & 0 & 0 & 3 & -1 \\\\\n    0 & 0 & 0 & 0 & 0\n\\end{array}\\right)=\\left(\\begin{array}{ccccc}\n    1 & 0 & 1 & 0 & -\\dfrac{7}{6}  \\\\\n    0 & 1 & -1 & 0 & -\\dfrac{5}{6}  \\\\\n    0 & 0 & 0 & 1 & -\\dfrac{1}{3} \\\\\n    0 & 0 & 0 & 0 & 0\n\\end{array}\\right)$，$r(A)=3$。\n\n然后找子矩阵，第一台阶选$C_1$，第二台阶选$C_2$或$C_3$，第三台阶选$C_4$或$C_5$，随便找一个，如$(C_1,C_2,C_4)$为子矩阵，则$C_3$，$C_5$所代表的未知数$x_3$，$x_5$就是自由变量。\n\n所以选择两个分量$\\xi_1=(\\xi_{11},\\xi_{12},\\xi_{13},\\xi_{14},\\xi_{15})^T$和$\\xi_2=(\\xi_{21},\\xi_{22},\\xi_{23},\\xi_{24},\\xi_{25})^T$作为基础解系。\n\n因为此时选择$x_3$，$x_5$为自由变量，所以$x_3$和$x_5$所对应的$\\xi_{13}$、$\\xi_{15}$、$\\xi_{23}$、$\\xi_{25}$可以任意取，但是为了保证秩为2，所以让$\\xi_{13}=1$、$\\xi_{15}=0$、$\\xi_{23}=0$、$\\xi_{25}=1$。这四个分量组成的矩阵线性无关，原矩阵线性无关，延长矩阵线性无关，从而$\\xi_1$和$\\xi_2$必然线性无关。\n\n所以此时已经给定两组解，一种是$\\xi_1$的$x_3=1$，$x_5=0$，另一种是$\\xi_2$的$x_3=0$，$x_5=1$，这样就只有三个未知数和三个方程，分别代入$A$矩阵所代表的方程组中（代入行阶梯矩阵就可以，不用代入最简行阶梯矩阵）：\n\n$\\left\\{\\begin{array}{l}\n    1\\cdot x_1+1\\cdot x_2+0\\cdot x_3-3\\cdot x_4-1\\cdot x_5=0 \\\\\n    0\\cdot x_1-2\\cdot x_2+2\\cdot x_3+2\\cdot x_4+1\\cdot x_5=0 \\\\\n    0\\cdot x_1+0\\cdot x_2+0\\cdot x_3+3\\cdot x_4-1\\cdot x_5=0\n\\end{array}\\right.$，分别代入：\n\n$\\xi_1$：$\\left\\{\\begin{array}{l}\n    1\\cdot x_1+1\\cdot x_2+0\\cdot1-3\\cdot x_4-1\\cdot0=0 \\\\\n    0\\cdot x_1-2\\cdot x_2+2\\cdot1+2\\cdot x_4+1\\cdot0=0 \\\\\n    0\\cdot x_1+0\\cdot x_2+0\\cdot1+3\\cdot x_4-1\\cdot0=0\n\\end{array}\\right.$，$\\xi_1=(-1,1,1,0,0)^T$。\n\n$\\xi_2$：$\\left\\{\\begin{array}{l}\n    1\\cdot x_1+1\\cdot x_2+0\\cdot0-3\\cdot x_4-1\\cdot1=0 \\\\\n    0\\cdot x_1-2\\cdot x_2+2\\cdot0+2\\cdot x_4+1\\cdot1=0 \\\\\n    0\\cdot x_1+0\\cdot x_2+0\\cdot0+3\\cdot x_4-1\\cdot1=0\n\\end{array}\\right.$，$\\xi_2=(7,5,0,2,6)^T$。\n\n所以通解为$k_1\\xi_1+k_2\\xi_2=k_1(-1,1,1,0,0)^T+k_2(7,5,0,2,6)^T$。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s2-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#非齐次方程组",
  "subject": "xiandai",
  "topic": "微分方程",
  "title": "非齐次方程组",
  "kind": "方法",
  "text": "即$Ax=b$，$b$为不全为0的列向量。\n\n#### 有解条件\n\n$A=[\\alpha_1,\\alpha_2,\\cdots,\\alpha_n]$，其中$\\alpha_j=[a_{1j},a_{2j},\\cdots,a_{mj}]^T$，$j=1,2,\\cdots,n$。\n\n当$r(A)\\neq r([A,b])$时（$r(A)+1=r([A,b])$），即$b$不能被$A$线性表出，则方程组无解。\n\n当$r(A)=r([A,b])=n$时，即$b$能被$A$线性表出，$A$线性无关，$[A,b]$线性相关，矩阵列满秩，则方程组有唯一解。\n\n当$r(A)=r([A,b])=r<n$时，即$b$能被$A$线性表出，$A$线性相关，矩阵列降秩，则方程组有无穷多解。\n\n#### 解的性质\n\n若$\\eta_1,\\eta_2,\\eta$是非齐次线性方程组$Ax=b$的解，$\\xi$是对应齐次线性方程组$Ax=0$的解，则：\n\n①$\\eta_1-\\eta_2$是$Ax=0$的通解。\n\n②$k\\xi+\\eta$是$Ax=b$的解。\n\n#### 求解过程\n\n将系数矩阵和常数项矩阵合并为一个增广矩阵，对增广矩阵进行行变换变为阶梯形矩阵，求出对应齐次线性方程组的通解，最后假设一个非齐次线性方程组的特解。\n\n- 写出$Ax=b$的导出方程组$Ax=0$并求出其通解$k_1\\xi_1+k_2\\xi_2+\\cdots+k_{n-r}\\xi_{n-r}$。\n\n- 求出$Ax=b$的一个特解$\\eta$。\n\n-$Ax=b$的通解为$k_1\\xi_1+k_2\\xi_2+\\cdots+k_{n-r}\\xi_{n-r}+\\eta$。\n\n例题：求非齐次线性方程组$\\left\\{\\begin{array}{l}\n    x_1+5x_2-x_3-x_4=-1 \\\\\n    x_1-2x_2+x_3+3x_4=3 \\\\\n    3x_1+8x_2-x_3+x_4=1 \\\\\n    x_1-9x_2+3x_3+7x_4=7\n\\end{array}\\right.$的通解。\n\n解：对方程组提取出增广矩阵并进行行变换：\n\n$\\left(\\begin{array}{c:c}\n    \\begin{matrix}\n        1 & 5 & -1 & -1 \\\\\n        1 & -2 & 1 & 3 \\\\\n        3 & 8 & -1 & 1 \\\\\n        1 & -9 & 3 & 7\n    \\end{matrix}&\n    \\begin{matrix}\n        -1 \\\\\n        3 \\\\\n        1 \\\\\n        7\n    \\end{matrix}\n\\end{array}\\right)=\\left(\\begin{array}{c:c}\n    \\begin{matrix}\n        1 & 5 & -1 & -1 \\\\\n        0 & -7 & 2 & 4 \\\\\n        0 & 0 & 0 & 0 \\\\\n        0 & 0 & 0 & 0\n    \\end{matrix}&\n    \\begin{matrix}\n        -1 \\\\\n        4 \\\\\n        0 \\\\\n        0\n    \\end{matrix}\n\\end{array}\\right)$。\n\n然后求齐次方程的通解：找两列作为子矩阵，如$x_1$，$x_2$，则$x_3$，$x_4$作为自由变量，设两个$\\xi_1=(\\xi_{11},\\xi_{12},1,0)^T$和$\\xi_2=(\\xi_{21},\\xi_{22},0,1)^T$。\n\n解得$\\xi_1=(-3,2,7,0)^T$，$\\xi_2=(-13,4,0,7)^T$（为了得到整数通解都乘了7）。\n\n通解为$k_1\\xi_1+k_2\\xi_2=k_1(-3,2,7,0)^T+k_2(-13,4,0,7)^T$。\n\n然后求其非齐次的特解，让两个自由变量为0减少计算，即$\\eta=(\\eta_1,\\eta_2,0,0)^T$代入方程得到$\\eta=\\left(\\dfrac{13}{7},-\\dfrac{4}{7},0,0\\right)^T$。\n\n所以通解为$k_1(-3,2,7,0)^T+k_2(-13,4,0,7)^T+\\left(\\dfrac{13}{7},-\\dfrac{4}{7},0,0\\right)^T$。\n\n注意：通解的向量可以同乘一个数，因为其表示的是一个关系而不是具体数，但是特解不能同乘一个数，因为其表示的是一个具体的数。",
  "relatedLessons": [
   "gs15"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s2-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#克拉默法则",
  "subject": "xiandai",
  "topic": "行列式",
  "title": "克拉默法则",
  "kind": "定理",
  "text": "克拉默法则本来是矩阵中的运算法则，但是与方程组有更密切的关系，所以放到线性方程组中。\n\n定理：若$Ax=b$的系数矩阵$A$的行列式$\\vert A\\vert\\neq0$，则方程有唯一解，且$x_i=\\dfrac{\\vert A_i\\vert}{\\vert A\\vert}$，其中$A_i$为把系数矩阵$A$的第$i$列的元素用方程组右侧的常数项代替后所得到的$n$阶矩阵。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s3-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#解的判定",
  "subject": "xiandai",
  "topic": "线性方程组解的判定",
  "title": "解的判定",
  "kind": "总结",
  "text": "$Ax=0$，总有解，至少有零解。\n\n$A_{m\\times n}x=0$，当$r(A)=n$时，只有零解；当$r(A)<n$时，无穷多解。\n\n$A_{m\\times n}x=b$时，当$r(A)=r([A,b])+1\\neq r([A,b])$时，无解；当$r(A)=r([A,b])=n$时，有唯一解；当$r(A)=r([A,b])=r<n$时，无穷多解。\n\n当$Ax=0$只有零解时，$r(A)=n$，当$Ax=0$有无穷多解时，$r(A)=r<n$，都不能判定$r(A)$与$r([A,b])$的关系，若以$Ax=b$可能有解也可能无解。\n\n当$Ax=b$有唯一解时，$r(A)=r([A,b])=n$，所以$Ax=0$列满秩，只有零解。\n\n当$Ax=b$有无穷多解时，$r(A)=r([A,b])=r<n$，则$Ax=0$有无穷多解。\n\n当$A$行满秩，则$r(A)=r([A,b])$，则$Ax=\\beta$必有解，因为原来无关，延长无关。\n\n所以已知非齐次解情况能推出齐次解情况，但是反之不能。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s3-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#解的性质",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "解的性质",
  "kind": "定理",
  "text": "非齐次通解=齐次的通解+非齐次一个特解。\n\n例题：$r(A_{4\\times4})=2$，$\\eta_1,\\eta_2,\\eta_3$为$Ax=b$的三个解向量，其中具有如下关系：\n\n$\\left\\{\\begin{array}{l}\n    \\eta_1-\\eta_2=(-1,0,3,-4)^T \\\\\n    \\eta_1+\\eta_2=(3,2,1,-2)^T \\\\\n    \\eta_3+2\\eta_2=(5,1,0,3)^T\n\\end{array}\\right.$，求$Ax=b$的通解。\n\n解：$s=n-r(A)=4-2=2$，所以通解的基础解系中有两个分量$\\xi_1$和$\\xi_2$。\n\n所以需要解$Ax=0$，又存在三个解向量，所以$A\\eta_1=A\\eta_2=A\\eta_3=b$，所以$A(\\eta_1-\\eta_2)=0$，所以$\\eta_1-\\eta_2=(-1,0,3,-4)^T$就是其中一个解，所以令$\\xi_1=\\eta_1-\\eta_2=(-1,0,3,-4)^T$。\n\n然后根据所给出的$\\eta$进行凑，$A(\\eta_1+\\eta_2)=2b=A(3,2,1,-2)^T$，$A(\\eta_3+2\\eta_2)=3b=A(5,1,0,3)^T$。所以$3A(\\eta_1+\\eta_2)-2A(\\eta_3+2\\eta_2)=0$，所以$A(3(\\eta_1+\\eta_2)-2(\\eta_3+2\\eta_2))=0$，所以令$\\xi_2=3(\\eta_1+\\eta_2)-2(\\eta_3+2\\eta_2)=(-1,4,3,-12)^T$。\n\n最后找一个特解，$\\because A(\\eta_1+\\eta_2)=2b$，$\\therefore A\\left(\\dfrac{\\eta_1+\\eta_2}{2}\\right)=b$，$\\dfrac{\\eta_1+\\eta_2}{2}=\\left(\\dfrac{3}{2},1,\\dfrac{1}{2},-1\\right)^T$就是一个特解。\n\n所以通解为$k_1(-1,0,3,-4)^T+k_2(-1,4,3,-12)^T+\\left(\\dfrac{3}{2},1,\\dfrac{1}{2},-1\\right)^T$",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s3-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#基础解系",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "基础解系",
  "kind": "概念",
  "text": "对于$A_{m\\times n}x=0$，$r(A)=r$，若向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_s$满足：①$A\\alpha_i=0$，$i=1,2,\\cdots,s$；②$\\alpha_1,\\alpha_2,\\cdots,\\alpha_s$线性无关；③$s=n-r$，则称$\\alpha_1,\\alpha_2,\\cdots,\\alpha_s$为$Ax=0$的基础解系。\n\n例题：设$\\xi_1,\\xi_2,\\xi_3$是方程组$Ax=0$的基础解系，则下列向量组也是方程组$Ax=0$的基础解系的是()。\n\n$A.\\xi_1-\\xi_2$，$\\xi_2-\\xi_3$，$\\xi_3-\\xi_1$$B.\\xi_1+\\xi_2$，$\\xi_2-\\xi_3$，$\\xi_3+\\xi_1$\n\n$C.\\xi_1+\\xi_2-\\xi_3$，$\\xi_1+2\\xi_2+\\xi_3$，$2\\xi_1+3\\xi_2$$D.\\xi_1+\\xi_2$，$\\xi_2+\\xi_3$，$\\xi_3+\\xi_1$\n\n解：需要判断基础解系是否线性无关，需要对应的行列式值非0。\n\n对于$D$：$(\\xi_1+\\xi_2$，$\\xi_2+\\xi_3$，$\\xi_3+\\xi_1)=(\\xi_1,\\xi_2,\\xi_3)\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    1 & 1 & 0 \\\\\n    0 & 1 & 1\n\\end{array}\\right)\\neq0$，所以$D$线性无关，从而为基础解系。\n\n例题：设$\\xi_1=[1,-2,3,1]^T$，$\\xi_2=[2,0,5,-2]^T$是齐次线性方程组$A_{3\\times4}x=0$的解，且$r(A)=2$，则下列向量中是其解向量的是()。\n\n$A.\\alpha_1=[1,-2,3,2]^T$$B.\\alpha_2=[0,0.5,-2]^T$\n\n$C.\\alpha_3=[-1,-6,-1,7]^T$$D.\\alpha_4=[1,6,1,6]^T$\n\n解：若$\\xi_1$和$\\xi_2$为$Ax=0$的基，所以$\\xi_1$和$\\xi_2$应该能表示其解向量。\n\n所以将$\\xi_1$和$\\xi_2$与$\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4$分别联立为矩阵，进行初等行变换，查看是否有解，即新增广矩阵必须秩为2。\n\n$ABD$选项增广矩阵的秩都为3，所以不能表示，而只有$C$的为2，所以$C$可以表示。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s3-4",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#系数矩阵列向量与解",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "系数矩阵列向量与解",
  "kind": "总结",
  "text": "对于齐次方程而言，其解是让$A$的线性组合为零向量时线性组合的系数，对于非齐次而言解是$b$由$A$线性表出的表出系数。\n\n所以方程的解就是描述列向量组之间数量关心的系数。\n\n例题：已知$A=[\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4]$，其中$\\alpha_1,\\alpha_2,\\alpha_3,\\alpha_4$是四维列向量，且$\\alpha_1=2\\alpha_2+\\alpha_3$，$r(A)=3$，若$\\beta=\\alpha_1+2\\alpha_2+3\\alpha_3+4\\alpha_4$，求线性方程组$Ax=\\beta$的通解。\n\n解：$\\because\\alpha_1=2\\alpha_2+\\alpha_3$，$1\\alpha_1-2\\alpha_2-1\\alpha_3+0\\alpha_4=0$，即$A(1,-2,-1,0)^T=0$。\n\n又$r(A_{4\\times4})=4$，$s=n-r(A)=4-3=1$，$\\therefore\\xi=(1,-2,-1,0)^T$。\n\n所以特解为$\\beta$的系数：$(1,2,3,4)^T$，通解为$k(1,-2,-1,0)^T+(1,2,3,4)^T$。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s4-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#待定系数法",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "待定系数法",
  "kind": "方法",
  "text": "- 求两个方程组解的交集部分。可以联立两个方程求解。\n\n- 求出$A_{m\\times n}x=0$的通解$k_1\\xi_1+k_2\\xi_2+\\cdots+k_s\\xi_s$，这些$k$本来是独立的，然后代入$B_{m\\times n}x=0$，求出$k_i(i=1,2,\\cdots,s)$之间的关系，再代回$A_{m\\times n}x=0$的通解中就得到公共解。\n\n- 给出$A_{m\\times n}x=0$的通解与$B_{m\\times n}x=0$的通解联立：$k_1\\xi_1+k_2\\xi_2+\\cdots+k_s\\xi_s=l_1\\eta_1+l_2\\eta_2+\\cdots+l_s\\eta_s=0$，能解出$k_i$和$l_i$。\n\n这种方法可以求出公共解，不过比较麻烦。\n\n如果已经给出原方程的基础解系而没有给出矩阵，则这个方法解出公共解较好。\n\n例题：已知线性方程组$A=\\left\\{\\begin{array}{l}\n    x_1+x_2=0 \\\\\n    x_2-x_4=0\n\\end{array}\\right.$，$B=\\left\\{\\begin{array}{l}\n    x_1-x_2+x_3=0 \\\\\n    x_2-x_3+x_4=0\n\\end{array}\\right.$，求方程组的公共解。\n\n解：$A=\\left(\\begin{array}{cccc}\n    1 & 1 & 0 & 0 \\\\\n    0 & 1 & 0 & -1\n\\end{array}\\right)$，$B=\\left(\\begin{array}{cccc}\n    1 & -1 & 1 & 0 \\\\\n    0 & 1 & -1 & 1\n\\end{array}\\right)$。\n\n两个秩都为2，选择前两个分量为基子矩阵，后两个为通解分量。\n\n$\\xi_1=(0,0,1,0)^T$，$\\xi_2=(-1,1,0,1)^T$，$\\eta_1=(0,1,1,0)^T$，$\\eta_2=(-1,-1,0,1)^T$。\n\n$k_1\\xi_1+k_2\\xi_2=k_1(0,0,1,0)^T+k_2(-1,1,0,1)^T=(-k_2,k_2,k_1,k_2)^T$。\n\n$l_1\\eta_1+l_2\\eta_2=l_1(0,1,1,0)^T+l_2(-1,-1,0,1)^T=(-l_2,l_1-l_2,l_1,l_2)^T$。\n\n令$(-k_2,k_2,k_1,k_2)^T=(-l_2,l_1-l_2,l_1,l_2)^T$，所以解得$2k_2=k_1$。\n\n公共解为$(-k_2,k_2,2k_2,k_2)^T=k_2(-1,1,2,1)^T$。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s4-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#矩阵法",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵法",
  "kind": "方法",
  "text": "要求$A$和$B$的非零公共解，即求联立矩阵$\\left(\\begin{array}{c}\n    A \\\\\n    B\n\\end{array}\\right)x=0$的非零解。对这个矩阵求出基础解系。\n\n如果直接给出矩阵，则这种方法可以不用求出基础解系就能得到公共解。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s5-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#性质",
  "subject": "xiandai",
  "topic": "向量组",
  "title": "性质",
  "kind": "定理",
  "text": "若$A_{m\\times n}x=0$和$B_{s\\times n}x=0$有完全相同的解，就是同解方程组。\n\n$\\therefore r(A)=r(B)=r([A,B]^T)$。即行向量组等价。\n\n$A$与$A^TA$同解。",
  "relatedLessons": [
   "xd03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-4-linear-equations-system-linear-equations-system-s5-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/4-linear-equations-system/linear-equations-system.tex#代入法",
  "subject": "xiandai",
  "topic": "线性方程组",
  "title": "代入法",
  "kind": "总结",
  "text": "先求一个方程组的通解，然后把这个通解代入到第二个方程组中，不用管$k$的取值（因为$k$为任意数，所以直接令其为0）直接求出对应参数。\n\n例题：线性方程组$A=\\left\\{\\begin{array}{l}\n    x_1+3x_3+5x_4=0 \\\\\n    x_1-x_2-2x_3+2x_4=0 \\\\\n    2x_1-x_2+x_3+3x_4=0\n\\end{array}\\right.$，在其基础上加一个方程$B=\\left\\{\\begin{array}{l}\n    x_1+3x_3+5x_4=0 \\\\\n    x_1-x_2-2x_3+2x_4=0 \\\\\n    2x_1-x_2+x_3+3x_4=0 \\\\\n    4x_4+ax_2+bx_3+13x_4=0\n\\end{array}\\right.$，$ab$满足什么条件，$AB$是同解方程组。\n\n解：$B$在$A$的基础上增加一个方程，即多增加了约束，从而$B$的解一定为$A$的解的子集。所以只要$A$的解也满足$B$的解就是同解方程组。\n\n$A=\\left(\\begin{array}{cccc}\n    1 & 0 & 3 & 5 \\\\\n    0 & -1 & -5 & -3 \\\\\n    0 & 0 & 0 & -4\n\\end{array}\\right)$，$s=n-r=4-3=1$，$\\xi=(-3,-5,1,0)^T$，$k\\xi=k(-3,-5,1,0)^T=(-3k,-5k,k,0)^T$。\n\n所以这个对于$B$而言必然满足前三行，若要整体满足，就也要满足$B$的第四行，所以直接代入第四行：$4(-3k)+a(-5k)+bk+0=k(-12-5a+b)=0$。\n\n又$k$为任意数，所以$-12-5a+b=0$，即$b=5a+12$。\n\n例题：设$A$为$n$阶实矩阵，$A^T$是$A$的转置矩阵，证明方程组$\\Lambda:Ax=0$和$\\Upsilon:A^TAx=0$是同解方程组。\n\n证明：若$\\gamma$为$\\Lambda$的唯一解，则$A\\gamma=0$，则$A^TA\\gamma=A^T0=0$，$\\therefore\\gamma$也为$\\Upsilon$的解。\n\n若$\\eta$为$\\Upsilon$的唯一解，则$A^TA\\eta=0$，$\\eta^TA^TA\\eta=(A\\eta)^TA\\eta=\\Vert A\\eta\\Vert^2=0$，所以$A\\eta=0$，从而$\\eta$也为$\\Lambda$的解。\n\n所以同解，所以其两个矩阵的基解等价。\n\n定理：$r(A)=r(A^T)=r(A^TA)=r(AA^T)$。",
  "relatedLessons": [
   "xd04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#相似",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "相似",
  "kind": "总结",
  "text": "主要包括特征值与特征向量，相似矩阵，对角矩阵。\n\n这里的矩阵都是指方阵。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s1-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#定义",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "定义",
  "kind": "概念",
  "text": "设$A$是$n$阶矩阵，$\\lambda$是一个数，若存在$n$维非零列向量$\\xi\\neq0$，使得$A\\xi=\\lambda\\xi$，则$\\lambda$是$A$的特征值，$\\xi$是$A$的对应于特征值$\\lambda$的特征向量。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s1-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#性质",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "性质",
  "kind": "定理",
  "text": "#### 特征值性质\n\n设$A=(a_{ij})_{n\\times n}$，$\\lambda_i$（$i=1,2,\\cdots,n$）是$A$的特征值，则：\n\n-$\\sum\\limits_{i=1}^n\\lambda_i=\\sum\\limits_{i=1}^n=tr(A)$。主对角线元素和即矩阵的迹。\n\n-$\\prod\\limits_{i=1}^n\\lambda_i=\\vert A\\vert$。\n\n-$f(A)\\xi=f(\\lambda)\\xi$。\n\n-$A^{-1}\\xi=\\dfrac{1}{\\lambda}\\xi$。\n\n-$A^*\\alpha=\\dfrac{\\vert A\\vert}{\\lambda}\\xi$。\n\n#### 特征向量性质\n\n-$k$重特征值$\\lambda$至多只有$k$个线性无关的特征向量。一共有$k$个特征向量。\n\n- 若$\\xi_1$和$\\xi_2$是$A$的属于不同特征值$\\lambda_1$和$\\lambda_2$的特征向量，则$\\xi_1$和$\\xi_2$线性无关。\n\n- 若$\\xi_1$和$\\xi_2$是$A$的属于同特征值$\\lambda$的特征向量，则$k_1\\xi_1+k_2\\xi_2$（$k_1k_2$不同时为0）仍是$A$的属于特征值$\\lambda$的特征向量。\n\n- 若$A$可逆，则$A$、$A^{-1}$、$A^*$的特征向量相同。\n\n证明性质二：利用定义法，首先$A\\xi_1=\\lambda_1\\xi_1$，$A\\xi_2=\\lambda_2\\xi_2$。\n\n要证明两个特征向量线性无关，则证明$k_1\\xi_1+k_2\\xi_2=0$时$k_1=k_2=0$。\n\n$Ak_1\\xi_1+Ak_2\\xi_2=k_1\\lambda_1\\xi_1+k_2\\lambda_1\\xi_2=0$。又$k_1\\xi_1+k_2\\xi_2=\\lambda_1k_1\\xi_1+\\lambda_1k_2\\xi_2=0$，\n\n两式相减：$k_2(\\lambda_2-\\lambda_1)\\xi_2=0$，且$\\lambda_1\\neq\\Lambda_2$，$\\xi_2\\neq0$，$\\therefore k_2=0$。\n\n代入$k_1\\xi_1+k_2\\xi_2=0$，即$k_1\\xi_1=0$，又$\\xi_1\\neq0$，$\\therefore k_1=0$。\n\n#### 特征值与特征向量\n\n- 若特征值不相等，则特征向量线性无关。\n\n- 若特征值相等，则特征向量可能线性相关也可能线性无关。\n\n性质一是因为特征向量的性质而来。从几何来理解，特征向量表示的是矩阵变换中只有伸缩变换没有旋转变换的方向向量，特征值是这个方向的伸缩系数，一个方向当然只有一个伸缩系数。\n\n#### 运算性质\n\n$\\because\\lambda\\xi-A\\xi=0$，$\\therefore(\\lambda E-A)\\xi=0$，又$\\xi\\neq0$，$\\therefore(\\lambda E-A)x=0$有非零解。\n\n从而$\\lambda E-A$所表示的方阵线性相关，为降秩，从而$\\vert\\lambda E-A\\vert=0$。\n\n其中$n-r(\\lambda E-A)$的值就是特征向量中自由变量的个数。\n\n$\\vert\\lambda E-A\\vert=0$也称为特征方程或是特征多项式，解出的$\\lambda_i$就是特征值。\n\n将$\\lambda_i$代回原方程求解。即$(\\lambda E-A)x=0$有非零解，齐次方程只有唯一零解和无穷非零解两种结果，所以这里求出来的就是无穷非零解，所以只用求出解的基础解系即可。\n\n根据极大线性无关组解出通解就是$\\xi$，非线性无关组的变量设为自由变量（不能被约束的）用来表示其他变量。\n\n如果没有行阶梯型，则对于一列全是0的变量就是自由变量。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s1-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#运算",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "运算",
  "kind": "定理",
  "text": "#### 具体型\n\n定理：若矩阵$A$为对角线矩阵，则特征值为对角线上元素。\n\n定理：若$n$阶矩阵$A$行或列对应成比例，即$r(A)=1$，则$\\lambda_1=\\lambda_2=\\cdots=\\lambda_{n-1}=0$，$\\lambda_n=tr(A)$。\n\n注意：特征向量因为要求不为0，所以需要$k\\neq0$。\n\n注意：得到多重特征值时要全部写出，$\\lambda_1=\\lambda_2=\\cdots=\\lambda_n=\\lambda$。\n\n例题：求$A=\\left(\\begin{array}{ccc}\n    2 & -2 & 0 \\\\\n    -2 & 1 & -2 \\\\\n    0 & -2 & 0\n\\end{array}\\right)$的特征值与特征向量。\n\n$\\vert\\lambda E-A\\vert=\\left|\\begin{array}{ccc}\n    \\lambda_2 & 2 & 0 \\\\\n    2 & \\lambda-1 & 2 \\\\\n    0 & 2 & \\Lambda\n\\end{array}\\right|=(\\lambda-2)(\\lambda-1)\\lambda-4\\lambda-4(\\lambda-2)=\\lambda^3-3\\lambda^2-6\\lambda+8=(\\lambda+2)(\\lambda-1)(\\lambda-4)=0$。\n\n$\\therefore\\lambda_1=-2$，$\\lambda_2=1$，$\\lambda=4$。\n\n当计算$\\vert\\lambda E-A\\vert$时往往难点就是从多项式中解出$\\lambda$，对于$f(\\lambda)=a_k\\lambda^k+\\cdots+a_1\\lambda+a_0=0$，可以使用试根法：\n\n- 若$a_0=0$，$\\lambda=0$就是其根。\n\n- 若$a_k+\\cdots+a_1+a_0=0$，$\\lambda=1$就是其根。\n\n- 若$a_0+a_2+\\cdots+a_{2k}=a_1+a_3\\cdots+a_{2k-1}$，$\\lambda=-1$就是其根。\n\n- 若$a_k=1$，且系数都是整数，则有理根是整数，且均为$a_0$的因子。\n\n对于第四个，如$\\lambda^3-4\\lambda^2+3\\lambda+2=0$，2的因子为$\\pm1$和$\\pm2$，分别代入得到一根为2。\n\n#### 抽象型\n\n- 利用定义，寻找$A\\xi=\\lambda\\xi$，$\\xi\\neq0$，$\\lambda$是$A$的特征值，$\\xi$是$A$属于$\\lambda$的特征向量。\n\n- 根据$\\vert\\lambda E-A\\vert=0$计算出对应的$\\lambda$值，再计算$\\xi$的值。\n\n矩阵 ｜$A$ ｜$kA$ ｜$A^k$ ｜$f(A)$ ｜$A^{-1}$ ｜$A^*$ ｜$P^{-1}AP$ ｜$A^T$\n特征值 ｜$\\lambda$ ｜$k\\lambda$ ｜$\\lambda^k$ ｜$f(\\lambda)$ ｜$\\lambda^{-1}$ ｜$\\vert A\\vert/\\lambda$ ｜$\\lambda$ ｜$\\lambda$\n特征向量 ｜$\\xi$ ｜$\\xi$ ｜$\\xi$ ｜$\\xi$ ｜$\\xi$ ｜$\\xi$ ｜$P^{-1}\\xi$ ｜ 无关\n\n例题：设$A$为$n$阶矩阵，且$A^T=A$（此时$A$就是幂等矩阵）。\n\n(1)求$A$的特征值可能的取值。\n\n(2)证明$E+A$是可逆矩阵。\n\n(1)解：$\\because A^2=A$，$\\therefore f(A)=A^2-A=0$，$f(\\lambda)=\\lambda^2-\\lambda=0$，$\\lambda_1=0$，$\\lambda_2=1$。\n\n值得注意的是这里求的$\\lambda$是可能的取值，因为不同的矩阵特征值不同，只有通过$\\vert\\lambda E-A\\vert=0$的值才是真实的特征值。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s2-0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#相似理论",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "相似理论",
  "kind": "总结",
  "text": "特征值和特征向量应用于矩阵的相似。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s2-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#矩阵相似",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "矩阵相似",
  "kind": "概念",
  "text": "#### 定义\n\n定义：设$A,B$是两个$n$阶方阵，若存在$n$阶可逆矩阵$P$，使得$P^{-1}AP=B$，则称$A$相似于$B$，记为$A\\sim B$。\n\n其实就是对矩阵进行初等变换。\n\n#### 性质\n\n相似的性质：\n\n- 反身性：$A\\sim A$。\n\n- 对称性：若$A\\sim B$，则$B\\sim A$。\n\n- 传递性：若$A\\sim B$，$B\\sim C$，则$A\\sim C$。\n\n相似与其他部分的关系。\n\n- 若$A\\sim B$，$r(A)=r(B)$，$\\vert A\\vert=\\vert B\\vert$，$\\vert\\lambda E-A\\vert=\\vert\\lambda E-B\\vert$，$tr(A)=tr(B)$，$AB$具有相同的特征值。但是反之不能推出。\n\n- 若$A\\sim B$，$AB\\sim BA$，$A^2=B^2$。\n\n- 若$A\\sim B$，$A^m\\sim B^m$，$f(A)\\sim f(B)$。\n\n- 若$A\\sim B$，且$A$可逆，则$A^{-1}\\sim B^{-1}$，$f(A^{-1})\\sim f(B^{-1})$。\n\n- 若$A\\sim B$，$A^T\\sim B^T$，$A^*\\sim B^*$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s2-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#可逆矩阵相似对角化",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "可逆矩阵相似对角化",
  "kind": "概念",
  "text": "#### 定义\n\n定义：设$n$阶矩阵$A$，若存在$n$阶可逆矩阵$P$，使得$P^{-1}AP=\\Lambda$，其中$\\Lambda$为对角矩阵（纯量阵，即对角线元素不全为0，其他元素全为0），则称$A$可相似对角化，记为$A\\sim\\Lambda$，称$\\Lambda$是$A$的相似标准形。\n\n为什么要选择$\\Lambda$？，因为对角矩阵计算非常简单，只需要对对角线元素进行运算就可以了。\n\n#### 对角化条件\n\n$\\because P^{-1}AP=\\Lambda$，$AP=P\\Lambda$，将$P$拆解为列向量组合：\n\n$A(\\xi_1,\\xi_2,\\cdots,\\xi_n)=(\\xi_1,\\xi_2,\\cdots,\\xi_n)\\left(\\begin{array}{cccc}\n    \\lambda_1 \\\\\n     & \\lambda_2 \\\\\n     & & \\ddots \\\\\n     & & & \\lambda_n\n\\end{array}\\right)$\n\n$(A\\xi_1,A\\xi_2,\\cdots,A\\xi_n)=(\\lambda_1\\xi_1,\\lambda_2\\xi_2,\\cdots,\\lambda_n\\xi_n)$，$A\\xi_i=\\lambda_i\\xi_i$，$i=1,2,\\cdots,n$。\n\n由于$P$可逆，从而$\\xi$线性无关，$\\xi\\neq0$，$\\xi$为特征向量，$\\lambda$是特征值。\n\n$A\\sim\\Lambda$的充要条件是：①$A$有$n$个线性无关的特征向量；②$A$对应每个$k_i$重特征值都有$k_i$个线性无关的特征向量。\n\n$A\\sim\\Lambda$的充分条件是：①$n$解矩阵$A$有$n$个不同的特征值；②$A$为实对称方阵。（$A$可相似对角化不能反推这两个结论）\n\n例题：判断$A=\\left(\\begin{array}{ccc}\n    1 & -2 & 1 \\\\\n    2 & -4 & 2 \\\\\n    1 & -2 & 1\n\\end{array}\\right)$是否可以相似对角化。\n\n解：因为$A$，对应行成比例，所以$\\lambda_1=\\lambda_2=0$，$\\lambda_3=1-4+1=-2$。\n\n有两个不同的特征值，无法判断有多少个不同的特征向量，将特征值代回到$(\\lambda E-A)x=0$。首先代入0：\n\n$(0E-A)x=0$，$Ax=0$，$\\left(\\begin{array}{ccc}\n    1 & -2 & 1 \\\\\n    2 & -4 & 2 \\\\\n    1 & -2 & 1\n\\end{array}\\right)=\\left(\\begin{array}{ccc}\n    1 & -2 & 1 \\\\\n    0 & 0 & 0 \\\\\n    0 & 0 & 0\n\\end{array}\\right)$，$s=n-r=2$，所以有两个基础解系向量。\n\n所以一共有三个线性无关的特征向量，从而可以相似对角化。\n\n#### 步骤\n\n- 求出$A$的所有特征值$\\lambda$。\n\n- 求出$A$的所有$\\lambda$的特征向量$\\xi$。\n\n- 令$P=(\\xi_1,\\xi_2,\\cdots,\\xi_n)$，则$P^{-1}AP=\\Lambda$。（$\\xi$线性无关，$\\vert P\\vert\\neq0$，$P$可逆）\n\n例题：设$A=\\left(\\begin{array}{ccc}\n    2 & 2 & -2 \\\\\n    2 & 5 & -4 \\\\\n    -2 & -4 & 5\n\\end{array}\\right)$，求可逆矩阵$P$，使得$P^{-1}AP=\\Lambda$。\n\n解：$\\vert\\lambda E-A\\vert=\\left|\\begin{array}{ccc}\n    \\lambda-2 & -2 & 2 \\\\\n    2 & \\lambda+5 & -4 \\\\\n    -2 & -4 & \\lambda+5\n\\end{array}\\right|=0$，$(\\lambda-1)^2(\\lambda-10)=0$。\n\n$\\therefore\\lambda_1=\\lambda_2=1$，$\\lambda_3=10$。\n\n当$\\lambda_1=\\lambda_2=1$时，$(E-A)x=0$，$\\left|\\begin{array}{ccc}\n    -1 & -2 & 3 \\\\\n    2 & 6 & -4 \\\\\n    -2 & -4 & 6\n\\end{array}\\right|$，$\\xi_1=(-2,1,0)^T$，$\\xi_2=(2,0,1)^T$。同理代入$\\lambda_3=10$，$(10E-A)x=0$，$\\xi_3=(1,2,-2)^T$。\n\n令$P=(\\xi_1,\\xi_2,\\xi_3)=\\left(\\begin{array}{ccc}\n    -2 & 2 & 1 \\\\\n    1 & 0 & 2 \\\\\n    0 & 1 & -2\n\\end{array}\\right)$，使得$P^{-1}AP=\\left(\\begin{array}{ccc}\n    1 \\\\\n     & 1 \\\\\n     & & 10\n\\end{array}\\right)$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-5-similar-similar-s2-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/5-similar/similar.tex#实对称矩阵相似对角化",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "实对称矩阵相似对角化",
  "kind": "概念",
  "text": "由相似对角化的充分条件可知，实对称矩阵必然可以相似对角化。\n\n#### 正交\n\n定义：若$\\alpha=(a_1,a_2,\\cdots,a_n)$，$\\beta=(b_1,b_2,\\cdots,b_n)$，则内积$(\\alpha,\\beta)=a_1b_1+a_2b_2+\\cdots+a_nb_n$。\n\n所以内积是一个数值。\n\n单位化是保持向量方向不变，将其长度化为1。\n\n正交化是指将线性无关向量系转化为正交系的过程。\n\n#### 施密特正交化\n\n将一个线性无关向量组变为一个标准正交向量组。\n\n对于线性无关向量组$\\alpha_1,\\alpha_2,\\cdots,\\alpha_n$，令$\\beta_1=\\alpha_1$，$\\beta_2=\\alpha_2-\\dfrac{<\\alpha_2,\\beta_1>}{<\\beta_1,\\beta_1>}\\beta_1$，$\\beta_3=\\alpha_3-\\dfrac{<\\alpha_3,\\beta_1>}{<\\beta_1,\\beta_1}\\beta_1-\\dfrac{<\\alpha_3,\\beta_2>}{<\\beta_2,\\beta_2>}\\beta_2$，$\\cdots$，$\\beta_n=\\alpha_n-\\dfrac{<\\alpha_n,\\beta_1>}{<\\beta_1,\\beta_1>}\\beta_1-\\dfrac{<\\alpha_n,\\beta_2>}{<\\beta_2,\\beta_2>}\\beta_2-\\cdots-\\dfrac{<\\alpha_n,\\beta_{n-1}}{<\\beta_{n-1},\\beta_{n-1}>}\\beta_{n-1}$。其中$<n,n>$代表$n,n$的内积。\n\n最后单位化：$\\gamma_i=\\dfrac{\\beta_i}{\\Vert\\beta_i\\Vert}$。\n\n#### 定义\n\n定义：$A^T=A$则$A$就是对称矩阵，若$A$的元素都是实数，则$A$是实对称矩阵。\n\n-$A$是实对称矩阵，则$A$的特征值是实数，特征向量是实向量。\n\n-$A$是实对称矩阵，则其属于不同特征值的特征向量相互正交（线性无关）。\n\n-$A$是实对称矩阵，必然相似于对角矩阵，必与$n$个线性无关的特征向量$\\xi_1,\\xi_2,\\cdots,\\xi_n$，即必有可逆矩阵$P=[\\xi_1,\\xi_2,\\cdots,\\xi_n]$使得$P^{-1}AP=\\Lambda$，且存在正交矩阵$Q$，使得$Q^{-1}AQ=Q^TAQ=\\Lambda$，所以$A$与$\\Lambda$正交相似。（正交：$A^TA=E$）\n\n证明性质二：已知实对称矩阵$A^T=A$。\n\n令$Ax_1=\\lambda_1x_1$，$Ax_2=\\lambda_2x_2$，$\\lambda_1\\neq\\lambda_2$。对于第一个式子左乘$x_2^T$：\n\n$x_2^TAx_1=x_2^T\\lambda_1x_1$，$x_2^TA^Tx_1=\\lambda_1x_2^Tx_1$，$(Ax_2)^Tx_1=\\lambda_1x_2^Tx_1$，代入$Ax_2=\\lambda_2x_2$：\n\n$(\\lambda_2x_2)^Tx_1=\\lambda_1x_2^Tx_1$，$\\lambda_2x_2^Tx_1=\\lambda_1x_2^Tx_1$，$(\\lambda_2-\\lambda_1)x_2^Tx_1=0$，$x_2^Tx_1=0$。\n\n即$(x_2,x_1)=0$，从而$x_1$与$x_2$正交。\n\n#### 步骤\n\n对于实对称矩阵，一定存在$P$，所以一般而言还会考求正交单位化的$Q$，步骤如下：\n\n- 求出$A$的所有特征值$\\lambda$。\n\n- 求出$A$的所有$\\lambda$的特征向量$\\xi$。\n\n- 将$(\\xi_1,\\xi_2,\\cdots,\\xi_n)$正交化、单位化为$(\\eta_1,\\eta_2,\\cdots,\\eta_n)$。\n\n- 令$Q=(\\eta_1,\\eta_2,\\cdots,\\eta_n)$，则$Q^{-1}AQ=Q^TAQ=\\Lambda$。\n\n例题：设$A=\\left(\\begin{array}{ccc}\n    2 & 2 & -2 \\\\\n    2 & 5 & -4 \\\\\n    -2 & -4 & 5\n\\end{array}\\right)$，求正交矩阵$Q$，使得$Q^{-1}AQ=\\Lambda$。\n\n解：这个题基本上跟上面的例题一致，只是将可逆矩阵改成了正交矩阵。\n\n所以得到三个特征向量：$\\xi_1=(-2,1,0)^T$，$\\xi_2=(2,0,1)^T$，$\\xi_3=(1,2,-2)^T$。\n\n实对称矩阵不同特征值的特征向量必然相互正交，从而$\\xi_1\\perp\\xi_3$，$\\xi_2\\perp\\xi_3$。\n\n而$\\xi_1$与$\\xi_2$特征值相同从而不一定正交，$(\\xi_1,\\xi_2)=-4\\neq0$，所以并不正交。\n\n令$\\eta_1=\\xi_1=(-2,1,0)^T$，$\\eta_2=\\xi_2-\\dfrac{(\\xi_2,\\eta_1)}{(\\eta_1,\\eta_1)}\\eta_1=(2,0,1)^T-\\dfrac{-4}{5}(-2,1,0)^T$。\n\n$\\therefore\\eta_2=\\left(\\dfrac{2}{5},\\dfrac{4}{5},1\\right)^T$，取$\\eta_2=(2,4,5)^T$，$\\eta_1=(-2,1,0)^T$，$\\eta_3=\\xi_3=(1,2,-2)^T$。\n\n单位化$\\eta_1'=\\dfrac{\\sqrt{5}}{5}(-2,1,0)^T$，$\\eta_2'=\\dfrac{\\sqrt{5}}{15}(2,4,5)^T$，$\\eta_3'=\\dfrac{1}{3}(1,2,-2)^T$。\n\n令$Q=(\\eta_1',\\eta_2',\\eta_3')$，使得$Q^{-1}AQ=Q^TAQ=\\Lambda$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s1-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#定义",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "定义",
  "kind": "概念",
  "text": "$n$元变量$x_1,x_2,\\cdots,x_n$的二次齐次多项式：\n\n$\n\\begin{array}{cr}\n    f(x_1,x_2,\\cdots,x_n)= & a_{11}x_1^2+2a_{12}x_1x_2+\\cdots+2a_{1n}x_1x_n \\\\\n    & +a_{22}x_2^x+\\cdots+2a_{2n}x_2x_n \\\\\n    & \\cdots \\\\\n    & +a_{nn}x_n^2\n\\end{array}\n$\n\n这就是\\textbf{$n$元二次型}，简称二次型。\n\n$\\because x_ix_j=x_jx_i$，令$a_{ij}=a_{ji}$（$i,j=1,2,\\cdots,n$），则$2a_{ij}x_ix_j=a_{ij}x_ix_j+a_{ji}x_jx_i$：\n\n$f(x_1,x_2,\\cdots,x_n)=a_{11}x_1^2+a_{12}x_1x_2+\\cdots+a_{1n}x_1x_n+a_{21}x_2x_1+a_{22}x_2^2+a_{2n}x_2x_n+\\cdots+a_{n1}x_nx_1+a_{n2}x_nx_2+\\cdots+a_{nn}x_n^2$，这个式子就是完全展开式。\n\n$f(x_1,x_2,\\cdots,x_n)=\\sum\\limits_{i=1}^n\\sum\\limits_{j=1}^na_{ij}x_ix_j$，这个就是和式。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s1-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#矩阵表示",
  "subject": "xiandai",
  "topic": "矩阵",
  "title": "矩阵表示",
  "kind": "概念",
  "text": "二次型可以用矩阵来表示，即$f(x)=x^TAx$。其中$x$是列向量。\n\n矩阵表示的重点就是找到中间的$A$，$A$是$f$的二次型矩阵。\n\n方法是：$A$的主对角线元素$a_{ii}$是$x_i^2$的对应系数，$a_{ij}$与$a_{ji}$是混合项$x_ix_j$的系数的一半。\n\n如一个二次型$f(x_1,x_2,x_3)=2x_1^2+5x_2^2+5x_3^2+4x_1x_2-4x_1x_3-8x_2x_3$\n\n$=(x_1,x_2,x_3)\\left(\\begin{array}{ccc}\n    2 & 2 & -2 \\\\\n    2 & 5 & -4 \\\\\n    -2 & -4 & 5\n\\end{array}\\right)(x_1,x_2,x_3)^T$。\n\n所以可以发现二次型矩阵就是一个对称矩阵，$A^T=A$，所以只要能写出二次型的就一定存在一个对称矩阵，就一定可以相似对角化。",
  "relatedLessons": [
   "xd02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s2-0",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#标准形与规范形",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "标准形与规范形",
  "kind": "概念",
  "text": "定义：若二次型中只含有平方项，没有混合项（交叉项，即所有交叉项的系数全部为0），形如$d_1x_1^2+d_2x_2^2+\\cdots+d_nx_n^2$的二次型就是标准形。\n\n定义：若标准形中系数$d_i$仅为1，0，-1，即形如$x_1^2+\\cdots+x_p^2-x_{p+1}^2-\\cdots-x_{p+q}^2$的二次型称为规范形。\n\n其实二次型的标准形与规范形就是相似理论中的可逆矩阵相似对角化与实对称矩阵相似对角化的方法。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s2-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#合同变换",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "合同变换",
  "kind": "概念",
  "text": "#### 线性变换\n\n对于$n$元二次型$f(x_1,x_2,\\cdots,x_n)$，若令$\\left\\{\\begin{array}{l}\n    x_1=c_{11}y_1+c_{12}y_2+\\cdots+c_{1n}y_n \\\\\n    x_2=c_{21}y_1+c_{22}y_2+\\cdots+c_{2n}y_n \\\\\n    \\cdots \\\\\n    x_n=c_{n1}y_1+c_{n2}y_2+\\cdots+c_{nn}y_n\n\\end{array}\\right.$\n\n记$x=(x_1,x_2,\\cdots,x_n)$，$C=\\left(\\begin{array}{cccc}\n    c_{11} & c_{12} & \\cdots & c_{1n} \\\\\n    c_{21} & c_{22} & \\cdots & c_{2n} \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    c_{n1} & c_{n2} & \\cdots & c_{nn}\n\\end{array}\\right)$，$y=(y_1,y_2,\\cdots,y_n)$，则上式写为$x=Cy$称为$y_1,y_2,\\cdots,y_n$到$x_1,x_2,\\cdots,x_n$的线性变换。\n\n若线性变换的系数矩阵$C$可逆，即$\\vert C\\vert\\neq0$，则称为可逆线性变换。\n\n若$f(x)=x^TAx$，令$x=Cy$，则$f(x)=(Cy)^TA(Cy)=y^T(C^TAC)y$，记$B=C^TAC$，则$f(x)=y^TBy=g(y)$，此时二次型$f(x)=x^TAx$通过线性变换$x=Cy$得到一个新二次型$g(y)=y^TBy$。即将二次型用$x$表示换成用$y$表示。\n\n$x^TAx=y^TBy$这种改变表示方法的变换就是合同变换。\n\n#### 定义\n\n定义：二次型$f(x)$与$g(y)$的系数矩阵$A$与$B$满足$B=C^TAC$，这种关系就是合同变换。\n\n设$AB$为$n$阶实对称矩阵，若存在可逆矩阵$C$，使得$C^TAC=B$，则称$AB$合同，记为$A\\simeq B$，此时$f(x)$与$g(x)$为合同二次型。\n\n若二次型$f(x)=x^TAx$合同与标准形$d_1x_1^2+d_2x_2^x+\\cdots+d_nx_n^2$或合同于规范形$x_1^2+\\cdots+x_p^2-x_{p+1}^2-\\cdots-x_{p+q}^2$，则称$d_1x_1^2+d_2x_2^x+\\cdots+d_nx_n^2$为$f(x)$的合同标准形或合同规范形。\n\n#### 性质\n\n- 反身性：$A\\simeq A$。取$C=E$。\n\n- 对称性：$A\\simeq B$，$B\\simeq A$。$A\\simeq B$则$C^TAC=B$，$(C^T)^{-1}C^TACC^{-1}=(C^T)^{-1}BC^{-1}$，$A=(C^{-1})^TAB^{-1}$。\n\n- 传递性：$A\\simeq B$，$B\\simeq C$，$A\\simeq C$。\n\n-$A\\simeq B$，$r(A)=r(B)$。$C^TAC=B$，矩阵左右乘一个可逆矩阵，秩不变。\n\n-$A\\simeq B$，$A^T=A\\Leftrightarrow B^T=B$。$B^T=B$，即$(C^TAC)^T=C^TAC$，$C^TA^TC=C^TAC$，$(C^T)^{-1}C^TA^TCC^{-1}=(C^T)^{-1}C^TACC^{-1}$，$A^T=A$。\n\n-$A\\simeq B$，$AB$可逆，则$A^{-1}\\simeq B^{-1}$。\n\n-$A\\simeq B$，$A^T\\simeq B^T$。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s2-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#配方法",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "配方法",
  "kind": "方法",
  "text": "也称为拉格朗日配方法。配方法与前面的特征值、相似、正交理论无关，是通过配方找到一个可逆的合同矩阵。\n\n任何二次型均可通过配方法（做可逆线性变换）化为标准形与规范形，即对于任何实对称矩阵$A$，必存在可逆矩阵$C$，使得$C^TAC=\\Lambda$，其中：\n\n$\\Lambda=\\left(\\begin{array}{cccc}\n    d_1 \\\\\n     & d_2 \\\\\n     & & \\ddots \\\\\n     & & & d_n\n\\end{array}\\right)$或$\\Lambda=\\left(\\begin{array}{ccccccccc}\n    A \\\\\n     & B \\\\\n     & & C \\\\\n\\end{array}\\right)$，$A=\\left(\\begin{array}{ccc}\n    1 \\\\\n     & \\ddots \\\\\n     & & 1 \\\\\n\\end{array}\\right)$，$B=\\left(\\begin{array}{ccc}\n    -1 \\\\\n     & \\ddots \\\\\n     & & -1 \\\\\n\\end{array}\\right)$，$C=\\left(\\begin{array}{ccc}\n    0 \\\\\n     & \\ddots \\\\\n     & & 0 \\\\\n\\end{array}\\right)$。\n\n一个二次型可以通过相似对角化来求矩阵$\\lambda$和$\\xi$来化成标准形或规范形，而也可以通过配方法来更简单得到。\n\n配方法的核心：将某个变量的平方项与其混合项一次性配称一个完全平方。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s2-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#正交变换法",
  "subject": "xiandai",
  "topic": "特征值与特征向量",
  "title": "正交变换法",
  "kind": "概念",
  "text": "是对实对称矩阵相似对角化的正交变换的延申。\n\n任何二次型均可通过正交变换法化为标准形（规范形不一定能表示出），即对于任何实对称矩阵$A$，必存在正交矩阵$Q$，使得$Q^TAQ=Q^{-1}AQ=\\Lambda$，其中$\\Lambda=\\left(\\begin{array}{cccc}\n    \\lambda_1 \\\\\n     & \\lambda_2 \\\\\n     & & \\ddots \\\\\n     & & & \\lambda_n\n\\end{array}\\right)$。\n\n二次型正交变换法基于实对称矩阵相似对角化：\n\n- 求出$A$的所有特征值$\\lambda$。\n\n- 求出$A$的所有$\\lambda$的特征向量$\\xi$。\n\n- 将$(\\xi_1,\\xi_2,\\cdots,\\xi_n)$正交化、单位化为$(\\eta_1,\\eta_2,\\cdots,\\eta_n)$。\n\n- 令$Q=(\\eta_1,\\eta_2,\\cdots,\\eta_n)$，则$Q^{-1}AQ=Q^TAQ=\\Lambda$。\n\n- 因为$f(x)=x^TAx$，代入$x=Qy$，$(Qy)^TA(Qy)=y^TQ^TAQy=y^T\\Lambda y$。",
  "relatedLessons": [
   "xd05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s2-4",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#惯性定理",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "惯性定理",
  "kind": "定理",
  "text": "定义：无论选取什么样的可逆线性变换，将二次型化为标准形或规范形，其正项个数$p$，负项个数$q$都是不变的，$p$称为正惯性指数，$q$称为负惯性指数。\n\n定理：若二次型的矩阵秩为$r$，则$r=p+q$，可逆线性变换不改变正负惯性指数。\n\n定理：两个二次型或实对称矩阵合同的充要条件是有相同的正负惯性指数，或有相同的秩及正负惯性指数。\n\n例题：设$A=\\left(\\begin{array}{ccc}\n    1 & 2 & 0 \\\\\n    2 & 1 & 0 \\\\\n    0 & 0 & 1\n\\end{array}\\right)$，判断是否与$\\left(\\begin{array}{ccc}\n    1 & 0 & 0 \\\\\n    0 & 1 & 0 \\\\\n    0 & 0 & -1\n\\end{array}\\right)$合同。\n\n解：第一种方法使用配方法，将实对称矩阵化为二次型进行配方，得到$f=(x_1+2x_2)^2-3x_2^2+x_3^2=y_1^2-3y_2^2+y_3^2$，$p=2$，$q=1$。\n\n第二种方式使用特征值法，$\\vert\\lambda E-A\\vert=0$，得到$\\lambda_1=1$，$\\lambda_2=3$，$\\lambda_3=-1$，令$\\xi=y$，$f=\\lambda_1y_1^2+\\lambda_2y_2^2+\\lambda_3y_3^2=y_1^2+3y_2^2-y_3^2$，$p=2$，$q=1$。\n\n注意：我们会发现$y$前面的系数是不一样的，因为通过配方法得到的系数不一定是特征值，而正交变换法或相似对角化的方法得到的一定是特征值。因为对于配方法，$x=Cy$，$f=(Cy)^TACy=y^TC^TACy=y^T\\Lambda y$，这个$\\Lambda$是合同的，不满足相似的要求，而对于正交变换$x=Qy$，$f=(Qy)^TAQy=y^TQ^TAQy=y^TQ^{-1}AQy=y^T\\Lambda y$，因为$Q$选用的不仅是可逆矩阵$C$，更是正交矩阵，从而即合同又相似，从而得到的$\\Lambda$是特征值。\n\n因为有两个正系数1和一个负系数-1，根据惯性定理，所以与它合同。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s3-1",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#定义",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "定义",
  "kind": "概念",
  "text": "定义：$n$元二次型$f(x_1,x_2,\\cdots,x_n)=x^TAx$，若任意$x=(x_1,x_2,\\cdots,x_n)^T\\neq0$均有$x^TAx>0$，则称$f$为正定二次型，对应矩阵$A$为正定矩阵。\n\n若令一个正定二次型等于某个正数，则对于空间就是一个封闭曲面。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s3-2",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#性质",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "性质",
  "kind": "定理",
  "text": "$n$元二次型$f=x^TAx$正定的充要条件是：\n\n- 对于任意$x\\neq0$，有$x^TAx>0$。（定义）\n\n-$f$的正惯性指数$p=n$，即所有系数全为正。\n\n- 存在可逆矩阵$D$，使得$A=D^TD$。\n\n-$A\\simeq E$。\n\n-$A$的特征值$\\Lambda_i>0$（$i=1,2,\\cdots,n$）。\n\n-$A$的全部顺序主子式均大于0。\n\n若$C^TAC=E$，则$A=(C^T)^{-1}EC^{-1}=(C^{-1})^TC^{-1}=D^TD$。\n\n设$A=(a_{ij})_{n\\times n}$，则$\\vert A_k\\vert=\\left|\\begin{array}{cccc}\n    a_{11} & a_{12} & \\cdots & a_{1k} \\\\\n    a_{21} & a_{22} & \\cdots & a_{2k} \\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\n    a_{k1} & a_{k2} & \\cdots & a_{kk}\n\\end{array}\\right|$称为$n$阶矩阵$A$的\\textbf{$k$阶顺序（左上角）主子式}。\n\n$n$元二次型$f=x^TAx$正定的必要条件是：\n\n-$a_{ii}>0$（$i=1,2,\\cdots,n$）。\n\n-$\\vert A\\vert>0$。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-linear-algebra-knowledge-6-quadratic-form-quadratic-form-s3-3",
  "repo": "R08",
  "source": "linear-algebra/knowledge/6-quadratic-form/quadratic-form.tex#判定",
  "subject": "xiandai",
  "topic": "二次型",
  "title": "判定",
  "kind": "概念",
  "text": "#### 具体型\n\n- 判定主子式是否全部大于0。\n\n- 求特征值是否全部大于0。\n\n- 配方法判定正惯性指数是否全为$n$。\n\n- 定义法，证明$\\forall x\\neq0$，$x^TAx>0$，即$f>0$。\n\n- 找到可逆矩阵$D$，使得$A=D^TD$。\n\n主要使用前面三种方法。\n\n例题：判别二次型$f(x_1,x_2,x_3)=2x_1^2+2x_2^2+2x_3^2+2x_1x_2+2x_1x_3+2x_2x_3$的正定性。\n\n解：根据题目写出二次型矩阵：$A=\\left(\\begin{array}{ccc}\n    2 & 1 & 1 \\\\\n    1 & 2 & 1 \\\\\n    1 & 1 & 2\n\\end{array}\\right)$\n\n第一种方法：2>0，$\\left|\\begin{array}{cc}\n    2 & 1 \\\\\n    1 & 2\n\\end{array}\\right|>0$，$\\vert A\\vert>0$，所以正定。\n\n第二种方法：$\\vert\\lambda E-A\\vert=0$，所以$\\lambda_1=4$，$\\lambda_2=\\lambda_3=1$，所以正定。\n\n第三种方法：通过配方法，将$f=2\\left(x_1+\\dfrac{x_2}{x}+\\dfrac{x_3}{2}\\right)^2+\\dfrac{3}{2}\\left(x_2+\\dfrac{1}{3}x_3\\right)+\\dfrac{4}{3}x_3^2$，$p=3$，所以正定。\n\n第四种方法：将$f$进行配方，$f=(x_1+x_2)^2+(x_2+x_3)^2+(x_3+x_1)^2\\geqslant0$，所以要证明$f>0$对于$\\forall x\\neq0$成立。\n\n假设$f=0$，则$x_1+x_2=0$，$x_2+x_3=0$，$x_3+x_1=0$，则$x_1=x_2=x_3=0$，所以$x\\neq0$时$f>0$。\n\n第五种方法：将$f$进行配方，$f=(x_1+x_2)^2+(x_2+x_3)^2+(x_3+x_1)^2$\n\n$=(x_1+x_2,x_2+x_3,x_3+x_1)(x_1+x_2,x_2+x_3,x_3+x_1)^T$\n\n$=(x_1+x_2,x_2+x_3,x_3+x_1)\\left(\\begin{array}{ccc}\n    1 & 0 & 1 \\\\\n    1 & 1 & 0 \\\\\n    0 & 1 & 1\n\\end{array}\\right)\\left(\\begin{array}{ccc}\n    1 & 1 & 0 \\\\\n    0 & 1 & 1 \\\\\n    1 & 0 & 1\n\\end{array}\\right)\\left(\\begin{array}{c}\n    x_1 \\\\\n    x_2 \\\\\n    x_3\n\\end{array}\\right)=x^TD^TDx$\n\n$=x^TAx$，所以找到了这个$D$，从而正定。\n\n#### 抽象型\n\n对于抽象型二次型正定问题，首先要表明$A$是对称的，即$A^T=A$；基本的方法就是判定特征值$\\lambda$是否全部为正。\n\n定理：若$A$正定，则充要条件是$A^T$正定，$A^{-1}$正定，充分条件是$A^*$正定，即$A$正定则$A^*$正定，但是$A^*$正定不一定$A$正定。\n\n证明：$\\because$对称矩阵，所以$A^T=A$，所以$AA^T$等价，所以是充要条件。\n\n若$A$特征值为$\\lambda>0$，则$A^{-1}$的特征值$\\dfrac{1}{\\lambda}$也全为正，同理也可以反推回去，从而是充要条件。\n\n若$A$特征值为$\\lambda>0$，则$A^*$的特征值为$\\dfrac{\\vert A\\vert}{\\lambda_i}=\\dfrac{\\lambda_1\\cdots\\lambda_n}{\\lambda_i}$，若$\\lambda_i$全为正则可以推出$\\dfrac{\\vert A\\vert}{\\lambda_i}$为正，但是反之若$\\dfrac{\\vert A\\vert}{\\lambda_i}$为正，不能推出$\\lambda_1\\cdots\\lambda_n$每一个都是正的。",
  "relatedLessons": [
   "xd06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-1-random-events-and-probability-random-events-and-probability-s1-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/1-random-events-and-probability/random-events-and-probability.tex#排列组合",
  "subject": "gailv",
  "topic": "排列与逆序数",
  "title": "排列组合",
  "kind": "定理",
  "text": "排列公式：$A_n^m=\\dfrac{n!}{(n-m)!}$。\n\n组合公式：$C_n^m=\\dfrac{n!}{(n-m)!m!}$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-1-random-events-and-probability-random-events-and-probability-s1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/1-random-events-and-probability/random-events-and-probability.tex#捆绑法",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "捆绑法",
  "kind": "例题",
  "text": "要求某些元素必须在一起。\n\n例题：$ABCDEF$六个人排队，要求$AB$必须在一起，问有多少种排法。\n\n解：排法就是排列的问题。首先$AB$在一起，要么是$AB$要么是$BA$，也是一种排列，有$A_2^2$种。\n\n然后将$AB$看作一个整体与$CDEF$进行排列，一共五个元素，进行全排列：$A_5^5$。\n\n因为是按步骤来的，所以使用乘法：$A_2^2\\cdot A_5^5=120$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-1-random-events-and-probability-random-events-and-probability-s1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/1-random-events-and-probability/random-events-and-probability.tex#插空法",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "插空法",
  "kind": "例题",
  "text": "要求某些元素不能相邻。\n\n例题：要对6个唱歌和4个舞蹈节目进行排列，要求两个舞蹈节目不能相邻，求多少种排法。\n\n解：由于是对舞蹈进行限制，所以对唱歌的序列没有特别的限制，第一步先对唱歌进行全排列$A_6^6$。\n\n第二步对舞蹈进行排列，由于舞蹈之间不能相邻，所以舞蹈节目必然是在两个唱歌节目之间进行插孔排序的，而唱歌6个节目一共7个空，所以排列$A_7^4$。\n\n由于是步骤，所以乘法：$A_6^6\\cdot A_7^4$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-1-random-events-and-probability-random-events-and-probability-s1-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/1-random-events-and-probability/random-events-and-probability.tex#插板法",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "插板法",
  "kind": "例题",
  "text": "与插空法类似，但是是组合进行归类，而不是排序。\n\n例题：将8个完全相同的球放入三个不同的盒子，要求每个盒子至少有一个球，求一共有多少种放法。\n\n解：相当于在七个空插入两个板。即$C_7^2=21$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-1-random-events-and-probability-random-events-and-probability-s2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/1-random-events-and-probability/random-events-and-probability.tex#随机事件概率",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "随机事件概率",
  "kind": "例题",
  "text": "是基本事件关系的概率运算。\n\n例题：已知事件$A$和$B$相互独立，$P(A)=a$，$P(B)=b$，如果事件$C$必然导致$AB$同时发生，则求$ABC$都不发生的概率。\n\n解：首先必须理解题目的意思，并将其抽象为具体的计算式子。\n\n$ABC$都不发生就是$A$不发生且$B$不发生且$C$不发生，用式子表达就是$\\overline{A}\\overline{B}\\overline{C}$。\n\n然后是分析事件$C$必然导致$AB$同时发生，$AB$同时发生就是$AB$，即$AB$比$C$的范围大，$C\\subset AB$，$\\overline{AB}\\subset\\overline{C}$，$\\therefore\\overline{ABC}=\\overline{AB}\\cap\\overline{C}=\\overline{AB}$。\n\n又事件$AB$相互独立。$P(\\overline{AB})=P(\\overline{A})P(\\overline{B})=(1-a)(1-b)$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-1-random-events-and-probability-random-events-and-probability-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/1-random-events-and-probability/random-events-and-probability.tex#随机分配",
  "subject": "gailv",
  "topic": "随机分配",
  "title": "随机分配",
  "kind": "例题",
  "text": "将$n$个质点分配倒$N$个容器中：",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-1-random-events-and-probability-random-events-and-probability-s4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/1-random-events-and-probability/random-events-and-probability.tex#独立性",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "独立性",
  "kind": "例题",
  "text": "例题：射手对同一目标独立地进行4次射击。若至少命中一次的概率为$\\dfrac{15}{16}$，则求该射手对同一目标独立地进行4次射击中至少没命中一次的概率。\n\n解：这个题目其实就是四重伯努利试验，彼此之间的概率都是独立的。令每一次命中的概率为$p$，则该次未命中的概率为$1-p$。\n\n若至少命中一次的概率为$\\dfrac{15}{16}$，则其对立事件全部不命中的概率为$1-\\dfrac{15}{16}=\\dfrac{1}{16}$，则$(1-p)^4=\\dfrac{1}{16}$，则得到每次命中概率$p=\\dfrac{1}{2}$。\n\n求该射手对同一目标独立地进行4次射击中至少没命中一次的概率，则其对立事件为每次命中，其概率为$\\left(\\dfrac{1}{2}\\right)^4=\\dfrac{1}{16}$，则至少没命中一次的概率为$1-\\dfrac{1}{16}=\\dfrac{15}{16}$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#随机变量及其分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "随机变量及其分布",
  "kind": "例题",
  "text": "分布函数变量区域左闭右开，概率密度则不要求。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#分布函数存在性",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "分布函数存在性",
  "kind": "例题",
  "text": "分布函数的充要条件是：\n\n-$F(x)$单调不减。\n\n-$\\lim\\limits_{x\\to-\\infty}F(x)=0$。\n\n-$\\lim\\limits_{x\\to+\\infty}F(x)=1$。\n\n-$F(x)$右连续。\n\n这也是下面的计算需要考虑的性质。\n\n例题：设随机变量$X$的分布函数$F(x)$，判断$F(ax)$、$F(x^2+1)$、$F(x^3-1)$、$F(\\vert X\\vert)$是否可以做出分布函数。\n\n解：逐个分析$F(g(x))$中的$g(x)$走向。\n\n$\\lim\\limits_{x\\to+\\infty}F(ax)=a\\lim\\limits_{x\\to+\\infty}F(x)=a$，不满足。\n\n由于$x^2+1$在$x\\to-\\infty$的趋向为$+\\infty$而不是$-\\infty$，$\\lim\\limits_{x\\to-\\infty}F(x^2+1)=\\lim\\limits_{x\\to+\\infty}F(x^2+1)=\\lim\\limits_{x\\to-\\infty}F(x)=1\\neq0$，不满足。\n\n$F(x^3-1)$满足分布函数的四个条件，$g(x)=x^3-1$在两边趋向与原函数一致。\n\n$F(\\vert x\\vert)$的$g(x)=\\vert x\\vert$在$x\\to-\\infty$的趋向为$+\\infty$而不是$-\\infty$，不满足$\\lim\\limits_{x\\to-\\infty}F(x)=0$，不满足。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#分布函数计算",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "分布函数计算",
  "kind": "方法",
  "text": "这里所说的分布函数都是不定式，需要利用分布函数性质来换算。\n\n例题：随机变量$X$的概率密度函数$f(x)$满足$f(1+x)=f(1-x)$，且$\\int_1^2f(x)\\,\\textrm{d}x=0.3$，则求分布函数$F(0)$的值。\n\n解：已知$f(1+x)=f(1-x)$，所以$f(x)$关于$x=1$对称。所以$\\int_1^{+\\infty}f(x)\\,\\textrm{d}x=\\int_1^{-\\infty}f(x)\\,\\textrm{d}x=\\dfrac{1}{2}$。\n\n所以$\\int_1^2f(x)\\,\\textrm{d}x=\\int_0^1f(x)\\,\\textrm{d}x=0.3$。\n\n$F(0)=\\int_{-\\infty}^0f(x)\\,\\textrm{d}x=1-\\int_0^{+\\infty}f(x)\\,\\textrm{d}x=1-\\int_1^{+\\infty}f(x)\\,\\textrm{d}x-\\int_0^1f(x)\\,\\textrm{d}x=0.2$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s1-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#概率密度存在性",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "概率密度存在性",
  "kind": "例题",
  "text": "分布函数的充要条件是：\n\n-$f(x)\\geqslant0$。\n\n-$\\int_{-\\infty}^{+\\infty}f(x)\\,\\textrm{d}x=1$。\n\n例题：随机变量$X$的概率密度函数$f(x)$，判断$f(2x)$、$f(2-x)$是否可以作出概率密度函数。\n\n解：$\\int_{-\\infty}^{+\\infty}f(2x)\\,\\textrm{d}x=\\dfrac{1}{2}\\int_{-\\infty}^{+\\infty}f(2x)\\,\\textrm{d}(2x)=\\dfrac{1}{2}\\neq1$，不满足。\n\n$\\int_{-\\infty}^{+\\infty}f(2-x)\\,\\textrm{d}x=-\\int_{-\\infty}^{+\\infty}f(2-x)\\,\\textrm{d}(2-x)$，令$2-x=t$，则$x\\to-\\infty$时$t\\to+\\infty$，$x\\to+\\infty$时$t\\to-\\infty$，$=-\\int_{+\\infty}^{-\\infty}f(t)\\,\\textrm{d}t=\\int_{-\\infty}^{+\\infty}f(t)\\,\\textrm{d}t=1$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s1-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#概率密度计算",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "概率密度计算",
  "kind": "方法",
  "text": "例题：随机变量$X$的分布函数和概率密度函数为$F(x)$，$f(x)$，求$-X$的分布函数和概率密度。\n\n解：已知$F(x)=P\\{X\\leqslant x\\}$，则$F'(-x)=\\{-X\\leqslant x\\}$，即$F'(-x)=P\\{X\\geqslant-x\\}=1-P\\{X\\leqslant-x\\}=1-F(-x)$。\n\n对$F'(-x)$进行求导：$[1-F(-x)]'=f(-x)$。\n\n例题：随机变量$X$的概率密度为$f(x)$，求随机变量$2X+3$的概率密度函数。\n\n解：设$Y=2X+3$，所以$Y$的分布函数$F_Y(y)$为$F_Y(x)=P\\{Y\\leqslant x\\}=P\\{2X+3\\leqslant x\\}=P\\left\\{X\\leqslant\\dfrac{x-3}{2}\\right\\}=\\int_{-\\infty}^{\\frac{t-3}{2}}f(x)\\,\\textrm{d}x$。\n\n所以其概率密度为$f_Y(x)=(\\int_{-\\infty}^{\\frac{x-3}{2}}f(x)\\,\\textrm{d}x)'=\\dfrac{1}{2}f\\left(\\dfrac{x-3}{2}\\right)$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s2-1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#二项分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "二项分布",
  "kind": "例题",
  "text": "$P\\{X=k\\}=C_n^kp^k(1-p)^{n-k}$（$k=0,1,\\cdots,n$，$0<p<1$），$X\\sim B(n,p)$。\n\n例题：已知随机变量$X$的概率密度为$f(x)=\\left\\{\\begin{array}{ll}\n    2x, & 0<x<1 \\\\\n    0, \\text{其他}\n\\end{array}\\right.$，$Y$表示对$X$进行3次独立重复试验中出现事件$\\left\\{X\\leqslant\\dfrac{1}{2}\\right\\}$，求$P\\{Y=2\\}$。\n\n解：已知对$X$进行独立重复试验，表示这个进行的是伯努利试验，从而$Y\\sim B(n,p)$。又是3次，所以$Y\\sim B(3,p)$。\n\n只用求出这个$p$即$\\left\\{X\\leqslant\\dfrac{1}{2}\\right\\}$的概率就可以了。又已知$f(x)$。\n\n$\\therefore p=\\left\\{X\\leqslant\\dfrac{1}{2}\\right\\}=\\int_0^\\frac{1}{2}2x\\,\\textrm{d}x=\\dfrac{1}{4}$。$\\therefore P\\{Y=2\\}=B\\left(3,\\dfrac{1}{4}\\right)=\\dfrac{9}{64}$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s2-1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#泊松分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "泊松分布",
  "kind": "例题",
  "text": "$P\\{X=k\\}=\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$（$k=0,1,\\cdots,n$，$\\lambda>0$），$X\\sim P(\\lambda)$。\n\n例题：设一本书的各页印刷错误的个数$X$服从泊松分布。已知只有一个和只有两个印刷错误的页数相同，则随机抽查的4页中无印刷错误的概率$p$为？\n\n解：$\\because P\\{X=1\\}=P\\{X=2\\}$，$\\therefore\\dfrac{\\lambda^1}{1!}e^{-\\lambda}=\\dfrac{\\lambda^2}{2!}e^{-\\lambda}$，$\\lambda=2$。\n\n由于随机抽四页类似于伯努利试验是相互独立的，所以随机抽4页都无错误的概率为$[P\\{X=0\\}]^4=e^{-8}$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s2-1-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#几何分布",
  "subject": "gailv",
  "topic": "排列与逆序数",
  "title": "几何分布",
  "kind": "例题",
  "text": "$P\\{X=k\\}=(1-p)^{k-1}p$（$k=0,1,\\cdots,n$，$0<p<1$），$X\\sim G(p)$。\n\n例题：袋中有8个球，其中3个白球5个黑球，现在任意从中取出4个球，若四个球中有2个黑球和2个白球则试验停止，否则将其放回袋中重新抽取直到满足条件，用$X$表示试验次数，则求$P\\{X=k\\}$。\n\n解：由题目的停止，则说明这个题目的概率是服从几何分布的，最重要的就是求出单次满足事件概率$p$。\n\n根据组合和乘法原理，$p=\\dfrac{C_3^2C_5^2}{C_8^4}=\\dfrac{3}{7}$。\n\n则$P\\{X=k\\}=\\left(\\dfrac{4}{7}\\right)^{k-1}\\cdot\\dfrac{3}{7}$。\n\n例题：已知随机变量$X$的概率密度为$f(x)=\\left\\{\\begin{array}{ll}\n    2^{-x}\\ln2, & x>0 \\\\\n    0, \\text{其他}\n\\end{array}\\right.$，对$X$进行独立重复观测，直到第2个大于3的观测值出现时停止，记$Y$为观测次数，求$Y$的概率分布。\n\n解：由题目直到就停止，知道$Y\\sim G(p)$。\n\n又$p=P\\{X\\geqslant3\\}=\\int_3^{+\\infty}2^{-x}\\ln2\\,\\textrm{d}x=\\dfrac{1}{8}$\n\n这是对几何分布的变形，首先进行$k$次试验，第$k$次成功，所以要乘$p$，而因为是第2个成功，所以前面的$k-1$次中有$k-2$次失败和一次成功，所以一共$p^2(1-k)^{k-2}$。因为前面的成功的一次在$k-1$中任意一个地方就可以了，所以一共有$k-1$中可能性，要考虑到排列，所以还要乘$(k-1)$。\n\n$\\therefore P\\{Y=k\\}=(k-1)\\left(\\dfrac{1}{8}\\right)^2\\cdot\\left(\\dfrac{7}{8}\\right)^{k-2}$。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s2-1-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#均匀分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "均匀分布",
  "kind": "例题",
  "text": "$f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{b-a}, & a<x<b \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$F(x)=\\left\\{\\begin{array}{ll}\n    0, & x<a \\\\\n    \\dfrac{x-a}{b-a}, & a\\leqslant x<b \\\\\n    1, & x\\geqslant b\n\\end{array}\\right.$，$X\\sim U(a,b)$。\n\n例题：已知随机变量$X\\sim U(a,b)$（$a>0$）且$P\\{0<X<3\\}=\\dfrac{1}{4}$，$P\\{X>4\\}=\\dfrac{1}{2}$，求$X$的概率密度以及$P\\{1<X<5\\}$。\n\n解：$\\because P\\{X>4\\}=\\dfrac{1}{2}$，4在其区间中点上，$\\dfrac{a+b}{2}=4$。\n\n$\\because P\\{0<X<3\\}=\\dfrac{1}{4}$，$3$若在$a$左边则概率为0，所以必然在右边。\n\n$\\therefore P\\{a<X<3\\}=\\dfrac{1}{4}$，$P\\{<3X<4\\}=1-\\dfrac{1}{4}-\\dfrac{1}{2}=\\dfrac{1}{4}$，$\\dfrac{4-3}{b-a}=\\dfrac{1}{4}$。\n\n解得$a=2$，$b=6$，$X\\sim U(2,6)=f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{4}, & 2<x<6 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n$P\\{1<X<5\\}=\\dfrac{5-2}{6-2}=\\dfrac{3}{4}$。\n\n例题：已知随机变量$X$在区间$[0,1]$上服从均匀分布，在$X=x$（$0<x<1$）的条件下随机变量$Y$在区间$[0,x]$上服从均匀分布。\n\n(1)$(X,Y)$的概率密度。\n\n解：$X$在区间$[0,1]$上服从均匀分布，则$X\\sim f_X(x)=\\left\\{\\begin{array}{ll}\n    1, & 0\\leqslant x\\leqslant1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n$Y$在$X=x$下均匀分布，则$f_{Y|X}(y|x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{x}, & 0<y<x<1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n$(X,Y)$联合概率=条件概率×边缘概率。\n\n即$f(x,y)=f_{Y|X}(y|x)f_X(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{x}, & 0<y<x<1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n(2)$Y$的概率密度。\n\n解：首先求$Y$的边缘概率密度，就需要积$X$。然后求$y$的区间，$XY$的联合区间是横坐标$[0,1]$到纵坐标$[0,1]$的下三角形，则$y\\in[0,1]$。\n\n然后求$Y$就在联合概率密度所规定的区间中画一条$y=y_0$的线，从左先交到的是$y=x$，所以下限就是$y$，后交的是$x=1$，所以上限为1。最后将$y$的联合分布函数放在中间，得到$f_Y(y)=\\left\\{\\begin{array}{ll}\n    \\displaystyle{\\int_y^1\\dfrac{1}{x}\\textrm{d}x}=-\\ln y, & 0<y<x<1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n(3)概率$P\\{X+Y>1\\}$。\n\n解：求$P\\{X+Y>1\\}$就是求一个区间的概率值，即$P\\{(X,Y)\\in G\\}=\\iint\\limits_Gf(x,y)\\,\\textrm{d}x\\textrm{d}y$。\n\n 所以$P\\{X+Y>1\\}=\\iint\\limits_D\\dfrac{1}{x}\\textrm{d}\\sigma$，$D=x+y>1\\cap0<y<x<1$。$\\iint\\limits_D\\dfrac{1}{x}\\,\\textrm{d}\\sigma=\\int_\\frac{1}{2}^1\\textrm{d}x\\int_{1-x}^x\\dfrac{1}{x}\\textrm{d}y=1-\\ln2$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s2-1-5",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#指数分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "指数分布",
  "kind": "例题",
  "text": "$f(x)=\\left\\{\\begin{array}{ll}\n    \\lambda e^{-\\lambda x}, & x>0 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$F(x)=\\left\\{\\begin{array}{ll}\n    1-e^{-\\lambda x}, & x\\geqslant0 \\\\\n    0, & x<0 \\\\\n\\end{array}\\right.$，$X\\sim E(\\lambda)$。\n\n例题：已知随机变量$X\\sim E(1)$，$a$为常数且大于0，求$P\\{X\\leqslant a+1|X>a\\}$。\n\n解：$P\\{X\\leqslant a+1|X>a\\}=\\dfrac{P\\{a<X\\leqslant a+1\\}}{P\\{X>a\\}}=\\dfrac{\\int_a^{a+1}e^{-x}\\,\\textrm{d}x}{\\int_a^{+\\infty}e^{-x}\\,\\textrm{d}x}=1-\\dfrac{1}{e}$。\n\n也可以根据指数分布的无记忆性：$P\\{X\\leqslant a+1|X>a\\}=1-P\\{X>a+1|X>a\\}=1-P\\{X>1\\}=P\\{X\\leqslant1\\}=F(1)=1-\\dfrac{1}{e}$。\n\n例题：随机变量$X$服从参数为1的指数分布，求$P\\{3>X>2|X>1\\}$。\n\n已知$F(X<x)=1-e^{-\\lambda x}$，则$F(X>x)=e^{-\\lambda x}$。且$2<X<3\\cap 1<X=2<X<3$。\n\n则$P\\{3>X>2|X>1\\}=\\dfrac{P\\{3>X>2\\}}{P\\{X>1\\}}=\\dfrac{P\\{X>2\\}-P\\{X>3\\}}{P\\{X>1\\}}=\\dfrac{e^{-2}-e^{-3}}{e^{-1}}=e^{-1}-e^{-2}$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s2-1-6",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#正态分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "正态分布",
  "kind": "例题",
  "text": "$f(x)=\\dfrac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$（$-\\infty<x<+\\infty$，$-\\infty<\\mu<+\\infty$，$\\sigma>0$），$X\\sim N(\\mu,\\sigma^2)$。\n\n例题：已知随机变量$X\\sim N(0,1)$，对给定的$\\alpha$（$0<\\alpha>1$），数$\\mu_\\alpha$满足$P\\{X>\\mu_\\alpha\\}=\\alpha$，若$P\\{\\vert X\\vert<x\\}=\\alpha$，求$x$。\n\n解：$P\\{X>\\mu_\\alpha\\}=\\alpha$即表示$\\mu_\\alpha$为标准正态分布的上$\\alpha$分位点。\n\n又$P\\{\\vert X\\vert<x\\}=\\alpha$，即$-x<X<x$的面积为$\\alpha$，所以两边的面积各为$\\dfrac{1-\\alpha}{2}$，$P\\{X<x\\}=P\\{X>x\\}=\\dfrac{1-\\alpha}{2}$。\n\n$\\because$面积为$\\alpha$的下标为$\\alpha$，$\\therefore$面积为$\\dfrac{1-\\alpha}{2}$的下标为$\\dfrac{1-\\alpha}{2}$，$x=\\mu_\\frac{1-\\alpha}{2}$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#一维随机变量函数分布",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "一维随机变量函数分布",
  "kind": "例题",
  "text": "例题：随机变量$X$服从$U(0,2)$，求随机变量$Y=X^2$在$(0,4)$内的概率分布密度$f_Y(y)$。\n\n解：求概率分布密度函数，可以求出其积分概率分布函数，$F_Y(y)=P\\{Y\\leqslant y\\}=P\\{X^2\\leqslant y\\}=P\\{-\\sqrt{y}\\leqslant X\\leqslant\\sqrt{y}\\}$，又$X\\sim U(0,2)$，所以$f(x)=\\dfrac{1}{2}$。\n\n则概率分布函数就是概率密度的积分，此时已经将$Y$变为了关于$X$的积分，$=\\int_{-\\sqrt{y}}^{\\sqrt{y}}f(x)\\,\\textrm{d}x=$$\\displaystyle{2\\int_0^{\\sqrt{y}}\\dfrac{1}{2}\\,\\textrm{d}x}=\\dfrac{\\sqrt{y}}{2}$。即$F_Y(y)=\\dfrac{\\sqrt{y}}{2}$。\n\n则$f_Y(y)=F'_Y(y)=\\dfrac{1}{4\\sqrt{y}}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维随机变量",
  "subject": "gailv",
  "topic": "多维随机变量及其分布",
  "title": "二维随机变量",
  "kind": "定理",
  "text": "使用定义法则直接用二重积分的分布函数来求，使用卷积公式则使用概率密度。",
  "relatedLessons": [
   "gl03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维连续型随机变量",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "二维连续型随机变量",
  "kind": "定理",
  "text": "有两种主要方法，一个是分布函数法，一个是卷积公式法。如果给出联合概率密度使用分布函数法，如果给出边缘概率密度使用卷积公式法。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#联合概率密度",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "联合概率密度",
  "kind": "例题",
  "text": "\\leavevmode\n\n利用联合概率函数来计算，有两种方式，一种是以概率形式，一种是以积分形式。\n\n例题：已知二维随机变量$(X_1,X_2)$的概率密度函数$f_1(x_1,x_2)$，求$Y_1=2X_1$，$Y_2=\\dfrac{1}{3}X_2$的联合概率密度$f_2(y_1,y_2)$。\n\n解：概率形式：设$F_2(y_1,y_2)=P\\{Y_1\\leqslant y_1,Y_2\\leqslant y_2\\}=P\\{2X_1\\leqslant y_1,\\dfrac{1}{3}X_2\\leqslant y_2\\}=P\\{X_1\\leqslant\\dfrac{y_1}{2},X_2\\leqslant3y_2\\}=F_1(\\dfrac{y_1}{2},3y_2)$。所以$f_2(y_1,y_2)=\\dfrac{3}{2}f_1(\\dfrac{y_1}{2},3y_2)$。\n\n积分形式：已知$\\int_{-\\infty}^{+\\infty}\\textrm{d}x_1\\int_{-\\infty}^{+\\infty}f(x_1,x_2)\\,\\textrm{d}x_2=1$，将$x_1=\\dfrac{y_1}{2}$，$x_2=3y_2$代入$\\int_{-\\infty}^{+\\infty}\\textrm{d}(\\dfrac{y_1}{2})\\int_{-\\infty}^{+\\infty}f(\\dfrac{y_1}{2},3y_2)\\,\\textrm{d}(3y_2)=1$，$\\dfrac{3}{2}\\int_{-\\infty}^{+\\infty}\\textrm{d}y_1\\int_{-\\infty}^{+\\infty}f(\\dfrac{y_1}{2},3y_2)\\,\\textrm{d}y_2=1$，所以$f_2(y_1,y_2)=\\dfrac{3}{2}f_1(\\dfrac{y_1}{2},3y_2)$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#联合概率函数",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "联合概率函数",
  "kind": "例题",
  "text": "\\leavevmode\n\n已知联合概率密度，可以求概率函数，通过二重积分的方式，图像面积即是概率。\n\n例题：已知概率密度为$f(x,y)=\\left\\{\\begin{array}{ll}\n    6, & 0<x^2<y<x<1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，\n求$P\\left\\{X>\\dfrac{1}{2}\\right\\}$，$P\\left\\{Y<\\dfrac{1}{2}\\right\\}$。\n\n解：\n\n$P\\left\\{X>\\dfrac{1}{2}\\right\\}=\\displaystyle{6\\int_{\\frac{1}{2}}^1\\textrm{d}x\\int_{x^2}^x\\textrm{d}y=6\\int_{\\frac{1}{2}}^1(x-x^2)\\textrm{d}x=6\\left(\\dfrac{1}{2}x^2-\\dfrac{1}{3}x^3\\right)\\bigg\\vert_{\\frac{1}{2}}^1=\\dfrac{1}{2}}$。\n\n$P\\left\\{Y<\\dfrac{1}{2}\\right\\}=\\displaystyle{6\\int^{\\frac{1}{2}}_0\\textrm{d}y\\int_y^{\\sqrt{y}}\\textrm{d}x=6\\int^{\\frac{1}{2}}_0(\\sqrt{y}-y)\\textrm{d}y=\\sqrt{2}-\\dfrac{3}{4}}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2-5",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#边缘概率函数",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "边缘概率函数",
  "kind": "例题",
  "text": "\\leavevmode\n\n往往是已知联合概率函数$F(x,y)$求边缘概率函数$F_X(x)$、$F_Y(y)$，需要将联合概率函数中的$x/y\\to+\\infty$，然后求这个函数的极限值。\n\n例题：如果二维随机变量$(X,Y)$的分布函数为$F(x,y)=\\\\\\left\\{\\begin{array}{ll}\n    1-e^{-\\lambda_1x}-e^{-\\lambda_2y}+e^{-\\lambda_1x-\\lambda_2y-\\lambda12\\max\\{x,y\\}}, & \\lambda_1,\\lambda_2,\\lambda_{12}>0,x>0,y>0 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，\n求$XY$各自的边缘分布函数。\n\n解：$\\lim\\limits_{x\\to+\\infty}\\max\\{x,y\\}=x=+\\infty$，$\\lim\\limits_{y\\to+\\infty}\\max\\{x,y\\}=y=+\\infty$。\n\n$F_X(x)=F(x,+\\infty)=1-e^{-\\lambda_1x}-0+0=1-e^{-\\lambda_1x}$，$x>0$，当其他时$=0$。\n\n$F_Y(y)=F(+\\infty,y)=1-0-e^{-\\lambda_2y}+0=1-e^{-\\lambda_2x}$，$y>0$，当其他时$=0$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2-6",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#边缘概率密度",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "边缘概率密度",
  "kind": "例题",
  "text": "\\leavevmode\n\n往往是已知联合概率密度$f(x,y)$求边缘概率密度$f_X(x)$、$f_Y(y)$，需要将联合概率密度对另一个变量进行上下限无穷的一重积分，如果$xy$有上下限的定义域则需要画出图像取交集。\n\n确定上下限时要注意，如果求$x$的边缘分布对$y$积分，表示$x$不动，求$y$的范围，求$y$的则反之。\n\n例题：求$f(x,y)=\\left\\{\\begin{array}{ll}\n    \\dfrac{5}{4}(x^2+y), & 0<y<1-x^2 \\\\\n    0, \\text{其他}\n\\end{array}\\right.$的边缘概率密度。\n\n 如果求$x$的边缘概率密度，则$y$的取值范围为最底部的0到函数$1-x^2$。如果求$y$的边缘密度，则发现$D$为对称函数，所以可以拆为左右两个部分，$x$的范围是$0$到函数$\\sqrt{1-y}$。\n\n$f_X(x)=\\dfrac{5}{4}\\int_0^{1-x^2}x^2+y\\,\\textrm{d}y=\\dfrac{5}{4}\\left(x^2y+\\dfrac{y^2}{2}\\right)\\bigg\\vert_0^{1-x^2}=-\\dfrac{5}{8}x^4+\\dfrac{5}{8}$。\n\n$f_Y(y)=2\\dfrac{5}{4}\\int_0^{\\sqrt{1-y}}x^2+y\\,\\textrm{d}x=\\dfrac{5}{2}\\left(\\dfrac{x^3}{3}+yx\\right)\\bigg\\vert_0^{\\sqrt{1-y}}=\\dfrac{5}{6}(1-y)\\sqrt{1-y}+\\dfrac{5}{2}y\\sqrt{1-y}$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2-8",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维正态分布",
  "subject": "gailv",
  "topic": "多维随机变量及其分布",
  "title": "二维正态分布",
  "kind": "例题",
  "text": "概率密度为：\n\n{\\fontsize{8.2pt}{10pt}$f(x,y)=\\dfrac{1}{2\\pi\\sigma_1\\sigma_2\\sqrt{1-\\rho^2}}\\exp\\left\\{-\\dfrac{1}{2(1-\\rho^2)}\\left[\\left(\\dfrac{x-\\mu_1}{\\sigma_1}\\right)^2-2\\rho\\left(\\dfrac{x-\\mu_1}{\\sigma_1}\\right)\\left(\\dfrac{y-\\mu_2}{\\sigma_2}\\right)+\\left(\\dfrac{y-\\mu_2}{\\sigma_2}\\right)^2\\right]\\right\\}$}\n\n其中$\\mu_1,\\mu_2\\in R$，$\\sigma_1,\\sigma_2>0$，$-1<\\rho<1$。",
  "relatedLessons": [
   "gl03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2-9",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#正态分布性质",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "正态分布性质",
  "kind": "定理",
  "text": "\\leavevmode\n\n例题：$(X,Y)\\sim N(\\mu_1,\\mu_2;\\sigma_1^2,\\sigma_2^2;0)$，分布函数为$F(x,y)$，已知$F(\\mu_1,y)=\\dfrac{1}{4}$，求$y$。\n\n解：当$\\rho=0$时，$F(X,Y)=\\dfrac{1}{2\\pi\\sigma_1\\sigma_2}e^{-\\frac{1}{2}\\left[\\left(\\frac{x-\\mu_1}{\\sigma_1}\\right)^2+\\left(\\frac{y-\\mu_2}{\\sigma_2}\\right)^2\\right]}\\\\=F_X(x)F_Y(y)$，即$XY$相互独立。\n\n$X\\sim N(\\mu_1,\\sigma_1)$，$Y\\sim N(\\mu_2,\\sigma_2)$，$F_X(\\mu_1)=P\\{X\\leqslant\\mu_1\\}=\\dfrac{1}{2}$。\n\n$F(\\mu_1,y)=F_X(\\mu_1)F_Y(y)=\\dfrac{1}{2}F_Y(y)=\\dfrac{1}{4}$，则$F_Y(y)=\\dfrac{1}{2}$，即根据性质$y=\\mu_2$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-2-10",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#标准正态化",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "标准正态化",
  "kind": "例题",
  "text": "\\leavevmode\n\n$F(x)=P\\{X\\leqslant x\\}=P\\left\\{\\dfrac{X-\\mu}{\\sigma}\\leqslant\\dfrac{x-\\mu}{\\sigma}\\right\\}=\\varPhi\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$。\n\n即将$XY$的相关系数消去。\n\n例题：设随机变量$(X,Y)$的分布函数为$\\varPhi(2x+1)\\cdot\\varPhi(2y-1)$，其中$\\varPhi(x)$为标准正态分布函数，求$(X,Y)$的分布函数。\n\n解：由分布函数为$\\varPhi(2x+1)\\varPhi(2y-1)$是$X$的分布函数和$Y$的分布函数的乘积，所以可知$XY$相互独立。\n\n所以根据标准化公式：$\\varPhi(2x+1)\\cdot\\varPhi(2y-1)=\\varPhi\\left(\\dfrac{x+\\dfrac{1}{2}}{\\dfrac{1}{2}}\\right)\\varPhi\\left(\\dfrac{y-\\dfrac{1}{2}}{\\dfrac{1}{2}}\\right)$。\n\n$\\therefore(X,Y)\\sim N\\left(-\\dfrac{1}{2},\\dfrac{1}{2};\\dfrac{1}{4},\\dfrac{1}{4};0\\right)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-2-random-variables-and-distribution-random-variables-and-distribution-s3-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维随机变量函数分布",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "二维随机变量函数分布",
  "kind": "例题",
  "text": "#### 离散型\n\n#### 连续型\n\n可以使用卷积公式法和分布函数法两种。\n\n#### 和的分布\n \\leavevmode\n\n例题：随机变量$(X,Y)$的概率密度函数$f(x,y)=\\left\\{\\begin{array}{ll}\n    e^{-y}, & 0<x<y \\\\\n    0, \\text{其他}\n\\end{array}\\right.$，求$P\\{X+Y\\leqslant1\\}$。\n\n解：根据$X+Y\\leqslant1$和$0<x<y$划分区域：\n\n 其中积分区域$D$如图所示，所以$P\\{X+Y\\leqslant1\\}=\\iint\\limits_De^{-y}\\,\\textrm{d}x\\textrm{d}y=\\int_0^{\\frac{1}{2}}\\textrm{d}x\\int_x^{1-x}e^{-y}\\,\\textrm{d}y=\\int_0^{\\frac{1}{2}}(e^{-x}-e^{x-1})\\textrm{d}x=1+e^{-1}-2e^{-\\frac{1}{2}}$。\n\n#### 差的分布\n \\leavevmode\n\n例题：设$X\\sim N(\\mu,\\sigma_1^2)$，$Y\\sim N(2\\mu,\\sigma_2^2)$，$XY$相互独立，已知$P\\{X-Y\\geqslant1\\}=\\dfrac{1}{2}$，求$\\mu$。\n\n解：若$X\\sim N(\\mu,\\sigma_1^2)$，$Y\\sim N(2\\mu,\\sigma_2^2)$，则$X-Y\\sim(-\\mu,\\sigma_1^2-\\sigma_2^2)$。则$X-Y$的均值为$-\\mu$，即其图像的对称轴为$-\\mu$。\n\n又$P\\{X-Y\\geqslant1\\}=\\dfrac{1}{2}$，则$X-Y$在$1$这里均分，则对称轴为$1$，即$\\mu=-1$。\n\n#### 混合型\n\n使用全概率公式根据离散变量进行概率拆分。\n\n例题：设随机变量$X_1$和$X_2$相互独立，已知$X_1\\sim B\\left(1,\\dfrac{3}{4}\\right)$，$X_2$的分布函数为$F(x)$，求$Y=X_1+X_2$的分布函数$F_Y(y)$。\n\n解：已知$X_1\\sim B\\left(1,\\dfrac{3}{4}\\right)$，$X_2$的分布函数为$F(x)$，则$Y$为混合型。\n\n则$P\\{X_1=0\\}=C_1^0\\dfrac{3}{4}^0\\dfrac{1}{4}^1=\\dfrac{1}{4}$，$P\\{X_1=1\\}=C_1^1\\dfrac{3}{4}^1\\dfrac{1}{4}^0=\\dfrac{3}{4}$。\n\n$F_Y(y)=P\\{X_1+X_2\\leqslant y\\}=P\\{X_1+X_2\\leqslant y|X_1=0\\}P\\{X_1=0\\}+P\\{X_1+X_2\\leqslant y|X_1=1\\}P\\{X_1=1\\}=P\\{X_2\\leqslant y|X_1=0\\}P\\{X_1=0\\}+P\\{1+X_2\\leqslant y|X_1=1\\}P\\{X_1=1\\}$，由相互独立性$=\\dfrac{1}{4}\\cdot P\\{X_2\\leqslant y\\}+\\dfrac{3}{4}\\cdot P\\{X_2\\leqslant y-1\\}$。\n\n根据分布函数定义，则$F_Y(y)=\\dfrac{1}{4}\\cdot F(y)+\\dfrac{3}{4}\\cdot F(y-1)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#数学期望",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "数学期望",
  "kind": "例题",
  "text": "#### 离散型随机变量\n\n#### 分布律变换\n \\leavevmode\n\n可以根据随机变量分布律的形式拟合出已知的离散型随机变量分布，从而得到已知的期望。\n\n例题：设随机变量$X$的分布律为$P\\{X=k\\}=\\dfrac{1}{2^kk!(\\sqrt{e}-1)}$，$k=1,2,\\cdots$，求$EX$。\n\n解：查看分布律中含有$k!$的形式，所以可以考虑转换为泊松分布。泊松分布的标准形式是$\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$。\n\n$P\\{X=k\\}=\\dfrac{1}{2^kk!(\\sqrt{e}-1)}=\\dfrac{\\sqrt{e}}{\\sqrt{e}-1}\\dfrac{\\left(\\frac{1}{2}\\right)^k}{k!}e^{-\\frac{1}{2}}$，$X\\sim\\dfrac{\\sqrt{e}}{\\sqrt{e}-1}P\\left(\\dfrac{1}{2}\\right)$。\n\n$\\therefore EX=\\dfrac{\\sqrt{e}}{2\\sqrt{e}-2}$。\n\n#### 定义\n \\leavevmode\n\n对于已知$E(X)$和$X$的分布，要求$E(f(x))$的值，此时很难拟合到已知分布律，所以就需要按照离散随机变量的期望定义来计算。注意虽然$f(x)$对于$x$是变化了，但是对应的概率是不变的。\n\n例题：已知$X\\sim P(\\lambda)$，求$E(X)E\\left(\\dfrac{1}{1+X}\\right)$。\n\n解：已知$X\\sim P(\\lambda)$，则$E(X)=\\lambda$。而$E\\left(\\dfrac{1}{1+X}\\right)$无法通过拟合求出，所以就要用到期望的定义。\n\n$E(X)E\\left(\\dfrac{1}{1+X}\\right)=\\lambda\\cdot\\sum\\limits_{k=0}^\\infty\\dfrac{1}{1+k}\\dfrac{\\lambda^k}{k!}e^{-\\lambda}=\\lambda\\cdot\\sum\\limits_{k=0}^\\infty\\dfrac{\\lambda^k}{(k+1)!}e^{-\\lambda}=\\sum\\limits_{k=0}^\\infty\\dfrac{\\lambda^{k+1}}{(k+1)!}e^{-\\lambda}\\\\=\\sum\\limits_{i=1}^\\infty\\dfrac{\\lambda^i}{i!}e^{-\\lambda}=\\sum\\limits_{i=0}^\\infty\\dfrac{\\lambda^i}{i!}e^{-\\lambda}-\\dfrac{\\lambda^0}{0!}e^{-\\lambda}=1-e^{-\\lambda}$。（$\\sum\\limits_{i=0}^\\infty\\dfrac{\\lambda^i}{i!}e^{-\\lambda}$为概率和等于1）\n\n#### 连续型随机变量\n\n基本上都是以$\\int_{-\\infty}^{+\\infty}f(x)x\\,\\textrm{d}x$的变式进行计算。\n\n#### 概率密度\n \\leavevmode\n\n给出$X$概率密度。\n\n例题：连续型随机变量$X$的概率密度为$f(x)=\\dfrac{1}{\\pi(1+x^2)}$（$-\\infty<x<+\\infty$），求$EX$。\n\n解：$EX=\\int_{-\\infty}^{+\\infty}xf(x)\\,\\textrm{d}x=\\int_{-\\infty}^{+\\infty}x\\dfrac{1}{\\pi(1+x^2)}\\textrm{d}x=\\dfrac{1}{2\\pi}\\int_{-\\infty}^{+\\infty}\\dfrac{\\textrm{d}(1+x^2)}{1+x^2}=\\dfrac{1}{2pi}\\ln(^1+x^2)|_{-\\infty}^{+\\infty}$。发散，所以不存在。\n\n#### 概率密度函数\n \\leavevmode\n\n给出$X$概率密度与$X$的相关函数。\n\n例题：连续型随机变量$X$的概率密度为$f(x)=\\dfrac{1}{\\pi(1+x^2)}$（$-\\infty<x<+\\infty$），求$E(\\min\\{\\vert X\\vert,1\\})$。\n\n解：$E(\\min\\{\\vert X\\vert,1\\})=\\displaystyle{\\int_{-\\infty}^{+\\infty}}\\min\\{\\vert x\\vert,1\\}\\dfrac{1}{\\pi(1+x^2)}\\textrm{d}x=\\dfrac{2}{\\pi}\\int_0^{+\\infty}\\min\\{x,1\\}$\n$\\dfrac{1}{1+x^2}\\textrm{d}x=\\dfrac{2}{\\pi}\\displaystyle{\\int_0^1}x\\dfrac{1}{1+x^2}\\textrm{d}x+\\dfrac{2}{\\pi}\\int_1^{+\\infty}1\\cdot\\dfrac{1}{1+x^2}\\textrm{d}x=\\dfrac{1}{\\pi}\\ln(1+x^2)|_0^1+\\dfrac{2}{\\pi}\\arctan x|_1^{+\\infty}$\n$=\\dfrac{1}{\\pi}\\ln2+\\dfrac{1}{2}$。\n\n#### 分布函数\n \\leavevmode\n\n给出$X$分布与$X$的相关函数。\n\n例题：随机变量$X\\sim N(0,1)$，求$E[(X-2)^2e^{2X}]$。\n\n解：$E[(X-2)^2e^{2X}]=\\int_{-\\infty}^{+\\infty}(x-2)^2e^{2x}\\dfrac{1}{\\sqrt{2\\pi}}e^{-\\frac{x^2}{2}}\\,\\textrm{d}x\\\\=e^2\\int_{-\\infty}^{+\\infty}(x-2)^2\\dfrac{1}{\\sqrt{2\\pi}}e^{-\\frac{(x-2)^2}{2}}\\,\\textrm{d}x=e^2\\int_{-\\infty}^{+\\infty}t^2\\dfrac{1}{\\sqrt{2\\pi}}e^{-\\frac{t^2}{2}}\\,\\textrm{d}t=e^2E(t^2)=e^2[DX+(EX)^2]=e^2(1+0^2)=e^2$。\n\n#### 抽象概率密度\n\n主要是判断概率密度函数和期望之间的关系。期望的积分形式中的上下限与期望值无关，即如果改变期望的积分上下限那么其期望值是不确定的，只有概率密度变化才能算出具体的值。\n\n例题：设随机变量$X$的概率密度函数为$f(x)$，$E(X)=a$，判断$\\int_{-\\infty}^{+\\infty}xf(x+a)\\,\\textrm{d}x=0$，$\\int_{-\\infty}^axf(x)\\,\\textrm{d}x=\\dfrac{1}{2}$。\n\n解：由于$E(X)=a$，则$\\int_{-\\infty}^{+\\infty}xf(x)\\,\\textrm{d}x=a$。\n\n对于$\\int_{-\\infty}^{+\\infty}xf(x+a)\\,\\textrm{d}x=0$，令$x+a=t$，$x=t-a$，所以代入$\\int_{-\\infty}^{+\\infty}(t-a)f(t)\\,\\textrm{d}(t-a)=\\int_{-\\infty}^{+\\infty}tf(t)\\,\\textrm{d}t-a\\int_{-\\infty}^{+\\infty}f(t)\\,\\textrm{d}t=a-a=0$，所以成立。\n\n对于$\\int_{-\\infty}^axf(x)\\,\\textrm{d}x=\\dfrac{1}{2}$，其上下限变化，相当于积分值面积的底长是不确定的，$a$表示的是平均面积，这根底长的一半无关，所以不成立。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#方差",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "方差",
  "kind": "例题",
  "text": "#### 方差关系\n\n例题：相互独立的随机变量$X_1,X_2,\\cdots,X_n$具有相同的方差$\\sigma^2>0$，设$\\overline{X}=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i$，求$D(X_1-\\overline{X})$。\n\n解：由题已知$DX_i=\\sigma_2$。\n\n$D(X_1-\\overline{X})=D\\left(X_1-\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\right)=D\\left(\\dfrac{n-1}{n}X_1-\\dfrac{1}{n}\\sum\\limits_{i=2}^nX_i\\right)=\\left(\\dfrac{n-1}{n}\\right)^2\\\\DX_1+\\dfrac{1}{n^2}\\sum\\limits_{i=2}^nDX_i=\\dfrac{n^2-2n+1}{n^2}\\sigma^2+\\dfrac{n-1}{n^2}\\sigma^2=\\dfrac{n-1}{n}\\sigma^2$。\n\n#### 期望关系\n\n例题：已知随机变量$X_1$，$X_2$相互独立，且都服从正态分布$N(\\mu,\\sigma^2)$（$\\sigma>0$），求$D(X_1X_2)$。\n\n解：$X_1$，$X_2$服从$N(\\mu,\\sigma^2)$，则$EX_1=EX_2=\\mu$。\n\n$D(X_1X_2)=E[(X_1X_2)^2]-[E(X_1X_2)]^2=E(X_1^2X_2^2)-(EX_1EX_2)^2$。\n\n若$X_1$，$X_2$相互独立则$X_1^2$，$X_2^2$相互独立，则$=EX_1^2EX_2^2-\\mu^4$。\n\n又$EX_1^2=EX_2^2=DX_1+(EX_1)^2=DX_2+(EX_2)^2=\\sigma^2+\\mu^2$。\n\n$(\\sigma^2+\\mu^2)^2-\\mu^4=\\sigma^4+2\\sigma^2\\mu^2$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s1-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#切比雪夫不等式",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "切比雪夫不等式",
  "kind": "例题",
  "text": "$P\\{\\vert X-EX\\vert\\leqslant\\epsilon\\}\\leqslant\\dfrac{DX}{\\epsilon^2}$或$P\\{\\vert X-EX\\vert<\\epsilon\\}\\geqslant1-\\dfrac{DX}{\\epsilon^2}$。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#协方差",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "协方差",
  "kind": "例题",
  "text": "$Cov(X,Y)=E(XY)-E(X)E(Y)$。\n\n#### 性质\n\n例题：已知$XY$的相关系数$\\rho_{XY}\\neq0$，设$Z=aX+b$，$ab$为常数，则求出$\\rho_{XY}=\\rho_{YZ}$成立的充要条件。\n\n解：由于$Cov(Y,Z)=Cov(Y,aX+b)=aCov(Y,X)=aCov(X,Y)$，$DZ=D(aX+b)=a^2Dx$。\n\n$\\rho_{YZ}=\\dfrac{Cov(Y,Z)}{\\sqrt{DY}\\sqrt{DZ}}=\\dfrac{aCov(X,Y)}{\\sqrt{DY}\\sqrt{a^2DX}}=\\dfrac{a}{\\vert a\\vert}\\rho_{XY}$，所以相等的条件是$\\dfrac{a}{\\vert a\\vert}=1$，即$a>0$。\n\n例题：设随机变量$X_1,X_2,\\cdots,X_n$独立同分布，且方差$\\sigma^2>0$，$Y_1=\\sum\\limits_{i=2}^nX_i$和$Y_2=\\sum\\limits_{j=1}^{n-1}X_j$，求$Y_1$和$Y_n$的协方差$Cov(Y_1,Y_n)$。\n\n解：$\\because Y_1=\\sum\\limits_{i=2}^nX_i$，$Y_2=\\sum\\limits_{j=1}^{n-1}X_j$，$DX_i=\\sigma^2$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s3-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#独立性与相关性",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "独立性与相关性",
  "kind": "例题",
  "text": "独立范围小于不相关范围。所以我们一般先用数字特征判断相关性再用分布判断独立性。\n\n$Cov(X,Y)=E(XY)-EXEY\\left\\{\\begin{array}{l}\n    \\neq0\\Leftrightarrow XY\\text{相关}\\Rightarrow X\\text{与}Y\\text{不独立} \\\\\n    =0\\Leftrightarrow XY\\text{不相关，分布}\\left\\{\\begin{array}{l}\n        XY\\text{独立} \\\\\n        XY\\text{不独立} \\\\\n    \\end{array}\\right.\n\\end{array}\\right.$\n\n且如果服从二维正态分布，则$XY$独立与不相关等价。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s3-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#独立性",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "独立性",
  "kind": "例题",
  "text": "通过分布来确定独立性。如独立条件是$f(x,y)=f_X(x)f_Y(y)$，$P\\{X=x_i,Y=y_j\\}=P\\{X=x_i\\}P\\{Y=y_j\\}$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#相关性",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "相关性",
  "kind": "例题",
  "text": "通过数字特征来判断相关性。如不相关性条件是$\\rho_{XY}=0$、$Cov(X,Y)=0$、$E(XY)=EXEY$、$D(X\\pm Y)=DX+DY$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s4-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#切比雪夫不等式",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "切比雪夫不等式",
  "kind": "例题",
  "text": "切比雪夫不等式用于估算随机变量在区间的概率，证明收敛性问题。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-3-digital-features-digital-features-s4-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/3-digital-features/digital-features.tex#区间概率",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "区间概率",
  "kind": "例题",
  "text": "常用变式$P\\{\\vert Z-EZ\\vert\\geqslant\\epsilon\\}\\leqslant\\dfrac{DZ}{\\epsilon^2}$或$P\\{\\vert Z-EZ\\vert<\\epsilon\\}\\geqslant1-\\dfrac{DZ}{\\epsilon^2}$，$Z=f(X)$。\n\n例题：已知随机变量$XY$，$EX=EY=2$、$DX=1$、$DY=4$，$\\rho_{XY}=0.5$，估计概率$P\\{\\vert X-Y\\vert\\geqslant6\\}$。\n\n解：已知$\\rho_{XY}=0.5=\\dfrac{Cov(X,Y)}{\\sqrt{DX}\\sqrt{DY}}=\\dfrac{Cov(X,Y)}{2}$，$Cov(X,Y)=1=E(XY)-EXEY$，$E(XY)=5$。\n\n令$X-Y=Z$，$EZ=EX-EY=0$，$DZ=DX+DY-2Cov(X,Y)=1+4-2=3$。\n\n取$\\epsilon=6$，由切比雪夫不等式得$P\\{\\vert X-Y\\vert\\geqslant6\\}=P\\{\\vert Z-0\\vert\\geqslant6\\}\\leqslant\\dfrac{DZ}{\\epsilon^2}=\\dfrac{3}{6^2}=\\dfrac{1}{12}$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#统计量",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "统计量",
  "kind": "例题",
  "text": "利用期望和方差等数学特征之间的关系进行计算统计量，往往以$\\sum\\limits_{i=1}^nX_i$或类似的形式。\n\n例题：已知总体$X$的期望为$EX=0$，方差$DX=\\sigma^2$。从总体抽取容量为$n$的简单随机样本，其均值和方差分别为$\\overline{X}$，$S^2$。记$S_k^2=\\dfrac{n}{k}\\overline{X}^2+\\dfrac{1}{k}S^2$（$k=1,2,3,4$），则()。\n\n$A.E(S_1^2)=\\sigma^2$$B.E(S_2^2)=\\sigma^2$\n\n$C.E(S_3^2)=\\sigma^2$$D.E(S_4^2)=\\sigma^2$\n\n解：$E(S_k^2)=E\\left(\\dfrac{n}{k}\\overline{X}^2+\\dfrac{1}{k}S^2\\right)=\\dfrac{n}{k}E\\overline{X}^2+\\dfrac{1}{k}E(S^2)=\\dfrac{n}{k}((E\\overline{X})^2+D\\overline{X})+\\dfrac{1}{k}E(S^2)=\\dfrac{n}{k}\\left(0+\\dfrac{\\sigma^2}{n}\\right)+\\dfrac{1}{k}\\sigma^2=\\dfrac{2\\sigma^2}{k}$，$\\therefore k=2$。\n\n例题：设$X_i$为来自总体$E(\\lambda)$（$\\lambda>0$）的简单随机样本，记统计量$T=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i^2$，求$ET$。\n\n解：$ET=E\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i^2=\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i^2=\\dfrac{1}{n}\\sum\\limits_{i=1}^n(DX_i+E^2X_i)=\\dfrac{1}{n}\\sum\\limits_{i=1}^n\\left(\\dfrac{1}{\\lambda^2}+\\dfrac{1}{\\lambda^2}\\right)\\\\=\\dfrac{1}{n}\\cdot\\dfrac{2n}{\\lambda^2}=\\dfrac{2}{\\lambda^2}$。\n\n例题：设$X_i$为来自总体$X$的简单随机样本，而$X\\sim B\\left(1,\\dfrac{1}{2}\\right)$。记$\\overline{X}=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i$，求$P\\left\\{\\overline{X}=\\dfrac{k}{n}\\right\\}$。（$0\\leqslant k\\leqslant n$）\n\n解：$\\because X\\sim B\\left(1,\\dfrac{1}{2}\\right)$，$\\therefore\\sum\\limits_{i=1}^nX_i\\sim B\\left(n,\\dfrac{1}{2}\\right)$。\n\n$P\\left\\{\\overline{X}=\\dfrac{k}{n}\\right\\}=P\\left\\{\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i=\\dfrac{k}{n}\\right\\}=P\\left\\{\\sum\\limits_{i=1}^nX_i=k\\right\\}=C_n^k\\left(\\dfrac{1}{2}\\right)^k\\left(\\dfrac{1}{2}\\right)^{n-k}\\\\=C_n^k\\cdot\\left(\\dfrac{1}{2}\\right)^n$。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s2-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#三大分布",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "三大分布",
  "kind": "例题",
  "text": "\\subsection{\\texorpdfstring{$\\chi^2$分布}{}}\n\n例题：设$X_1,X_2,X_3,X_4$是来自正态总体$N(0,4)$的简单随机样本，记$X=a(X_1-2X_2)^2+b(3X_3-4X_4)^2$。求$X$服从$\\chi^2$分布下的参数与自由度。\n\n解：若$X_1,X_2,X_3,X_4$同一个正态分布，所以$EX_1=EX_2=EX_3=EX_4=0$，$DX_1=DX_2=DX_3=DX_4=4$。\n\n$E(X_1-2X_2)=EX_1-2EX_2=0$，$D(X_1-2X_2)=DX_1-4DX_2=20$。\n\n$\\therefore X_1-2X_2\\sim N(0,20)$，同理$3X_3-4X_4\\sim N(0,100)$。\n\n对其标准化：$\\dfrac{X_1-2X_2-0}{\\sqrt{20}}\\sim N(0,1)$，$\\dfrac{3X_3-4X_4-0}{\\sqrt{100}}\\sim N(0,1)$。\n\n若要让$X$满足$\\chi^2$分布，则要将$a(X_1-2X_2)^2+b(3X_3-4X_4)^2$两项标准化。\n\n$\\therefore\\dfrac{(X_1-2X_2)^2}{20}+\\dfrac{(3X_3-4X_4)^2}{100}\\sim\\chi^2(2)$，所以$a=\\dfrac{1}{20}$，$b=\\dfrac{1}{100}$。\n\n\\subsection{\\texorpdfstring{$t$分布}{}}\n\n例题：设$X_1,X_2,\\cdots,X_8$是来自正态总体$N(0,3^2)$的简单随机样本，则统计量$Y=\\dfrac{X_1+X_2+X_3+X_4}{\\sqrt{X_5^2+X_6^2+X_7^2+X_8^2}}$服从什么分布？\n\n解：$\\because X_1,\\cdots,X_8\\sim N(0,9)$，$\\therefore X_1+X_2+X_3+X_4\\sim N(0,36)$。\n\n$\\therefore\\dfrac{X_1+X_2+X_3+X_4-0}{6}\\sim N(0,1)$。\n\n$\\dfrac{X_5^2+X_6^2+X_7^2+X_8^2}{9}=\\left(\\dfrac{X_5-0}{3}\\right)^2+\\left(\\dfrac{X_6-0}{3}\\right)^2+\\left(\\dfrac{X_7-0}{3}\\right)^2+\\left(\\dfrac{X_8-0}{3}\\right)^2$\n$\\sim\\chi^2(4)$\n\n$\\therefore\\dfrac{\\dfrac{X_1+X_2+X_3+X_4-0}{6}}{\\sqrt{\\dfrac{X_5^2+X_6^2+X_7^2+X_8^2}{9}/4}}=\\dfrac{X_1+X_2+X_3+X_4}{\\sqrt{X_5^2+X_6^2+X_7^2+X_8^2}}\\sim t(4)$。\n\n\\subsection{\\texorpdfstring{$F$分布}{}}\n\n例题：设$X_1,X_2,\\cdots,X_15$是来自正态总体$N(0,3^2)$的简单随机样本，则统计量$Y=\\dfrac{X_1^2+X_2^2+\\cdots+X_{10}^2}{2X_{11}^2+X_{12}^2+\\cdots+X_{15}^2}$服从什么分布？\n\n解：$\\because\\dfrac{X_i-0}{3}\\sim N(0,1)$，$\\left(\\dfrac{X_i-0}{3}\\right)^2=\\dfrac{x_i^2}{9}\\sim\\chi^2(1)$。\n\n$\\therefore\\dfrac{X_1^2+X_2^2+\\cdots+X_{10}^2}{9}\\sim\\chi^2(10)$，$\\dfrac{X_{11}^2+X_{12}^2+\\cdots+X_{15}^2}{9}\\sim\\chi^2(5)$。\n\n$\\therefore\\dfrac{\\dfrac{X_1^2+X_2^2+\\cdots+X_{10}^2}{9}/10}{\\dfrac{X_{11}^2+X_{12}^2+\\cdots+X_{15}^2}{9}/5}=\\dfrac{X_1^2+X_2^2+\\cdots+X_{10}^2}{2X_{11}^2+X_{12}^2+\\cdots+X_{15}^2}=Y\\sim F(10,5)$。\n\n例题：已知$(X,Y)$的概率分布函数为$f(x,y)=\\dfrac{1}{2\\pi}e^{-\\frac{1}{2}(x^2+y^2-2y+1)}$，$x,y\\in R$，求$\\dfrac{X^2}{(Y-1)^2}$的分布。\n\n解：$f(x,y)=\\dfrac{1}{2\\pi}e^{-\\frac{1}{2}(x^2+y^2-2y+1)}=\\dfrac{1}{2\\pi}e^{-\\frac{1}{2}(x^2+(y-1)^2)}$，所以根据二维正态分布的形式，得到$(X,Y)\\sim(0,1;1,1;0)$。\n\n即$X\\sim\\varPhi(x)$，$Y-1\\sim\\varPhi(x)$，$\\therefore X^2\\sim\\chi^2(1)$，$(Y-1)^2\\sim\\chi^2(1)$，$\\therefore\\dfrac{X^2}{(Y-1)^2}\\sim F(1,1)$。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#函数分布",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "函数分布",
  "kind": "例题",
  "text": "例题：设随机变量$X\\sim t(n)$，$Y\\sim F(1,n)$，常数$C$使得$P\\{X>C\\}=0.6$，求$P\\{Y>C^2\\}$。\n\n解：$X\\sim t(n)$，则$X=\\dfrac{X_1}{\\sqrt{Y_1/n}}\\sim t(n)$，其中$X_1\\sim N(0,1)$，$Y_1\\sim\\chi^2(n)$。\n\n$\\therefore X^2=\\dfrac{X_1^2}{Y_1/n}=\\dfrac{X_1^2/1}{Y_1/n}\\sim\\dfrac{\\chi^2(1)/1}{\\chi^2(n)/n}=F(1,n)$。\n\n又$P\\{Y>C^2\\}=1-P\\{Y\\leqslant C^2\\}$。$P\\{X^2>C^2\\}=1-P\\{X^2\\leqslant C^2\\}$。\n\n又$P\\{X^2\\leqslant C^2\\}=P\\{-C\\leqslant X\\leqslant C\\}$，根据偶函数性质$=0.2$。\n\n$\\therefore P\\{X^2>C^2\\}=0.8$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s3-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#矩估计",
  "subject": "gailv",
  "topic": "参数估计",
  "title": "矩估计",
  "kind": "例题",
  "text": "基本方法就是$EX=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i$。\n\n如果只有一个参数就使用一阶矩，如果有两个参数就使用二阶矩，一般不会超过两个未知数。\n\n即$EX=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i=\\overline{X}=\\hat{\\mu}$，$EX^2=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i^2=\\hat{\\sigma}^2+\\hat{\\mu}^2$。\n\n$\\hat{\\sigma}^2=EX^2-(EX)^2=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i^2-\\overline{X}^2=\\dfrac{1}{n}\\sum\\limits_{i=1}^n(X_i-\\overline{X})^2$。\n\n#### 一阶矩\n\n#### 二阶矩\n\n例题：设$X_i$为来自区间$[-a,a]$上均匀分布的总体$X$的简单随机样本，求$a$的矩估计量。\n\n解：首先矩估计就是$E(X^k)=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i^k$。\n\n又对于均匀分布$X_i\\sim U(-a,a)$，$EX=\\dfrac{a+b}{2}=0$，$DX=\\dfrac{(b-a)^2}{12}=\\dfrac{a^2}{3}$。\n\n所以$EX$不含有$a$，使用二阶矩$EX^2=DX+E^2X=\\dfrac{a^2}{3}=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i^2$。\n\n解得$a=\\sqrt{\\dfrac{3}{n}\\sum\\limits_{i=1}^nX_i^2}$。",
  "relatedLessons": [
   "gl07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#最大似然估计",
  "subject": "gailv",
  "topic": "参数估计",
  "title": "最大似然估计",
  "kind": "例题",
  "text": "步骤：写出概率函数或密度函数；写出似然函数（代入观测值$x_i$并连乘）；两边取对数；求导数并令为0求出表达式。\n\n#### 离散型\n\n例题：设总体$X$的概率分布为：\n\n$X$ ｜ 0 ｜ 1 ｜ 2 ｜ 3\n$P$ ｜$\\theta^2$ ｜$2\\theta(1-\\theta)$ ｜$\\theta^2$ ｜$1-2\\theta$\n\n其中$\\theta\\int\\left(0,\\dfrac{1}{2}\\right)$为未知参数，从总体$X$中抽取容量为8的一组样本，其样本值为3，1，3，0，3，1，2，3。求$\\theta$的最大似然估计值。\n\n解：\n\n根据样本值，可以得出：\n\n$X$ ｜ 0 ｜ 1 ｜ 2 ｜ 3\n次数 ｜ 1 ｜ 2 ｜ 1 ｜ 4\n\n将所有的概率相乘：$L(\\theta)l=(1-2\\theta)^4[2\\theta(1-\\theta)]^2\\cdot\\theta^2\\cdot\\theta^2=4\\theta^6(1-\\theta)^2(1-2\\theta)^4$。\n\n对其求对数：$\\ln L(\\theta)=\\ln4+6\\ln\\theta+2\\ln(1-\\theta)+4\\ln(1-2\\theta)$。\n\n对其求导：$\\dfrac{\\textrm{d}\\ln L(\\theta)}{\\textrm{d}\\theta}=\\dfrac{6}{\\theta}-\\dfrac{2}{1-\\theta}-\\dfrac{8}{1-2\\theta}=0$。解得$\\theta=\\dfrac{7\\pm\\sqrt{13}}{12}$。\n\n$0<\\theta<\\dfrac{1}{2}$，舍去正值，得到$\\hat{\\theta}=\\dfrac{7-\\sqrt{13}}{12}$。\n\n#### 连续型\n\n例题：设随机变量$X$在区间$[0,\\theta]$上服从均匀分布，$X_1,X_2,\\cdots,X_n$是来自$X$的简单随机样本，求$\\theta$的最大似然估计量$\\hat{\\theta}$\n\n解：$X\\sim U(0,\\theta)$，$f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{\\theta}, & 0<x<\\theta \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$L(\\theta)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{\\theta^n}, & 0<x_i<\\theta \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n求$\\hat{\\theta}$即求$L(\\theta)$的最大值，$\\theta$的最小值。又必然$0<x_i<\\theta$。\n\n所以$\\hat{\\theta}=\\max x_i$，即$\\theta$的最大似然估计为$\\max\\limits_{1\\leqslant i\\leqslant n}X_i$。\n\n（取最大值而不是最小值是因为为保证所有$x_i$都在定义域上，$0<x_i<\\theta$，所以要求$\\theta>\\max x_i$）\n\n例题：设$X_1,X_2,\\cdots X_n$是来自总体$X$的简单随机样本，$X$的概率密度函数$f(x)=\\dfrac{1}{2\\lambda}e^{-\\frac{\\vert x\\vert}{\\lambda}}$，$x\\in R$，$\\lambda>0$，求$\\lambda$的最大似然估计量$\\hat{\\lambda}$。\n\n解：$\\because f(x)=\\dfrac{1}{2\\lambda}e^{-\\frac{\\vert x\\vert}{\\lambda}}$，$\\therefore L(\\lambda)=\\prod\\limits_{i=1}^n\\dfrac{1}{2\\lambda}e^{-\\frac{\\vert x\\vert}{\\lambda}}=\\left(\\dfrac{1}{2\\lambda}\\right)^ne^{-\\frac{1}{\\lambda}\\sum\\limits_{i=1}^n\\vert x_i\\vert}$。\n\n$\\ln L(\\lambda)=-n\\ln2-n\\ln\\lambda-\\dfrac{1}{\\lambda}\\sum\\limits_{i=1}^n\\vert x_i\\vert$，$\\dfrac{\\textrm{d}\\ln L(\\lambda)}{\\textrm{d}\\lambda}=-\\dfrac{n}{\\lambda}+\\dfrac{1}{\\lambda^2}\\sum\\limits_{i=1}^n\\vert x_i\\vert$。\n\n令$\\dfrac{\\textrm{d}\\ln L(\\lambda)}{\\textrm{d}\\lambda}=0$，则$\\dfrac{n}{\\lambda}=\\dfrac{1}{\\lambda^2}\\sum\\limits_{i=1}^n\\vert x_i\\vert$，解得$\\lambda=\\dfrac{1}{n}\\sum\\limits_{i=1}^n\\vert x_i\\vert$。\n\n即$\\hat{\\lambda}=\\dfrac{1}{n}\\sum\\limits_{i=1}^n\\vert X_i\\vert$。",
  "relatedLessons": [
   "gl07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s4-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#有效性",
  "subject": "gailv",
  "topic": "参数估计",
  "title": "有效性",
  "kind": "例题",
  "text": "$D\\hat{\\theta_1}<D\\hat{\\theta_2}$。",
  "relatedLessons": [
   "gl07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s5-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#方差已知",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "方差已知",
  "kind": "例题",
  "text": "例题：一批零件的长度服从正态分布$N(\\mu,\\sigma^2)$，其中$\\mu,\\sigma^2$均未知。现从中随机抽取16个零件，测得样本均值$\\overline{x}=20cm$，样本标准差为$s=1cm$，求$\\mu$的置信水平为0.90的置信区间。\n\n解：$\\sigma$未知，所以使用$s$来求置信空间。\n\n置信空间为$(\\overline{X}-t_\\frac{\\alpha}{2}(n-1)\\dfrac{S}{\\sqrt{n}},\\overline{X}+t_\\frac{\\alpha}{2}(n-1)\\dfrac{S}{\\sqrt{n}})$。\n\n已知$\\overline{x}=20$，$s=1$，$n=16$，$\\alpha=1-0.90=0.1$。\n\n所以置信空间为$\\left(20-\\dfrac{1}{4}t_{0.05}(15),20+\\dfrac{1}{4}t_{0.05}(15)\\right)$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s5-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#方差未知",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "方差未知",
  "kind": "例题",
  "text": "例题：设某群人的年龄$X\\sim N(\\mu,\\sigma^2)$，随机了解到五个人的年龄：39，54，61，72，59，求均值$\\mu$的置信度为$0.95$的置信区间。\n\n解：由于$\\sigma$未知，所以使用样本方差，$\\dfrac{\\overline{X}-\\mu}{S/\\sqrt{n}}\\sim t(n-1)$。\n\n其中置信区间为$\\left(\\overline{X}-\\dfrac{S}{\\sqrt{n}}t_{0.025}(n-1),\\overline{X}+\\dfrac{S}{\\sqrt{n}}t_{0.025}(n-1)\\right)$。\n\n又$\\overline{x}=\\dfrac{1}{5}(39+54+61+72+59)=57$，$S=\\sqrt{\\dfrac{1}{n-1}\\sum\\limits_{i=1}^5(x_i-\\overline{x})}=12$。\n\n其中$t_{0.025}(n-1)=t_{0.025}(4)=2.7764$，所以代入得到$(42.13,71,87)$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s6",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#假设检验",
  "subject": "gailv",
  "topic": "假设检验",
  "title": "假设检验",
  "kind": "例题",
  "text": "例题：设考试成绩服从正态分布，随机抽取36位考生成绩，平均分为66.5分，标准差为15分。在显著性水平0.05下是否可以认为这次考试的平均水平为70分。\n\n解：首先提出假设$H_0:\\mu=70$，$H_1:\\mu\\neq70$。\n\n将$X$使用样本标准差进行标准化：$T=\\dfrac{\\overline{X}-\\mu}{S/\\sqrt{n}}\\sim t(n-1)$。\n\n给定显著性水平$0.05$，写出拒绝域$T<-t_{\\frac{\\alpha}{2}}(n-1)$或$T>t_{\\frac{\\alpha}{2}}(n-1)$。\n\n代入计算统计量，$\\vert T\\vert=\\left\\vert\\dfrac{\\overline{X}-\\mu}{S/\\sqrt{n}}\\right\\vert=\\left\\vert\\dfrac{66.5-70}{15/6}\\right\\vert=1.4$。\n\n又$t_{\\frac{\\alpha}{2}}(n-1)=t_{0.05}(35)=2.0301>1.4$不在拒绝域内，所以接受原假设。\n\n即可以认为平均水平为70分。\n\n例题：设$X_1,X_2,\\cdots,X_{36}$是取自正态总体$N(\\mu,0.04)$的简单随机样本，其中$\\mu$为未知参数，即$\\overline{X}=\\dfrac{1}{36}\\sum\\limits_{i=1}^{36}X_i$，若对于检验问题$H_0:\\mu\\leqslant0.5$，$H_1:\\mu>0.5$在显著性水平$\\alpha=0.05$，取得检验拒绝域$D=\\{(x_1,x_2,\\cdots,x_{36}):\\overline{x}>C\\}$，求$C$。\n\n解：当$H_0$成立，则$X\\sim N(0.5,0.04)$，$\\overline{X}\\sim N(0.5,0.04\\div36)=N\\left(\\dfrac{1}{2},\\dfrac{1}{900}\\right)$。\n\n$\\alpha=0.05=P\\{$拒绝$H_0|H_0$成立$\\}=P\\{\\overline{X}>C\\}=1-P\\{\\overline{X}\\leqslant C\\}=1-\\varPhi((C-0.5)\\times30)=1-\\varPhi(30C-15)$。\n\n$\\therefore\\varPhi(30C-15)=0.95=\\varPhi(1.645)$，即$30C-15=1.645$，$C=0.5548$。\n\n例题：已知某机器生产出来的零件长度$X$（单位：$cm$）服从正态分布$N(\\mu,\\delta^2)$，现从中随意抽取容量为16的一个样本，测得样本均值$\\overline{x}=10$，样本方差$s^2=0.16$，$t_{0.025}(15)=2.132$。\n\n(1)求总体均值$\\mu$置信水平为0.95的置信区间。\n\n(2)在显著性水平$0.05$下检验假设$H_0:\\mu=9.7$，$H_1:\\mu\\neq9.7$。\n\n(1)解：根据公式直接解出置信空间$(10-0.1t_{0.025}(15),10+0.1t_{0.025}(15))=(9.7868,10.2132)$。\n\n(2)解：根据假设$H_0$，得到拒绝域$(-\\infty,9.4868]\\cup[9.9132,+\\infty)$。\n\n又$\\overline{X}=10$在拒绝域$[9.9132,+\\infty)$上，所以假设$H_0$拒绝。",
  "relatedLessons": [
   "gl08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-exercise-5-mathematical-statistics-mathematical-statistics-s7",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/exercise/5-mathematical-statistics/mathematical-statistics.tex#两类错误",
  "subject": "gailv",
  "topic": "假设检验",
  "title": "两类错误",
  "kind": "例题",
  "text": "例题：假定$X$是连续型随机变量，$U$是对$X$的一次观测值，关于其概率密度$f(x)$有如下假设：\n\n$H_0:f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{2}, & 0\\leqslant x\\leqslant2 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$H_1:f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{x}{2}, & 0\\leqslant x\\leqslant2 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n检验规则：当事件$V=\\left\\{U>\\dfrac{3}{2}\\right\\}$出现时，否定假设$H_0$，接受$H_1$，求犯第一类错误概率和第二类错误概率$\\alpha\\beta$。\n\n解：$\\alpha=P\\left\\{U>\\dfrac{3}{2}\\bigg|H_0\\right\\}=\\displaystyle{\\int_\\frac{3}{2}^2\\dfrac{1}{2}\\,\\textrm{d}x=\\dfrac{1}{4}}$。\n\n$\\beta=P\\left\\{U\\leqslant\\dfrac{3}{2}\\bigg|H_1\\right\\}=\\displaystyle{\\int_0^{\\frac{3}{2}}\\dfrac{x}{2}\\,\\textrm{d}x=\\dfrac{9}{16}}$。",
  "relatedLessons": [
   "gl08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#随机试验",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "随机试验",
  "kind": "概念",
  "text": "定义：满足三个条件的就是随机试验：\n\n- 试验可以在相同的条件下重复进行。\n\n- 试验所以可能结果都是明确可知，且不止一个。\n\n- 每次试验的结果事先不确定。\n\n随机试验也称为试验，并用$E_1,E_2,\\cdots$来表示。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#随机事件",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "随机事件",
  "kind": "概念",
  "text": "定义：一次试验中可能出现也可能补出现的结果称为随机事件，简称事件，并用大写字母$A,B,\\cdots$来表示。\n\n必然事件定义：每次试验中一定发生的事件，记为$\\Omega$。\n\n不可能事件定义：每次试验中一定不发生的事件，记为$\\varnothing$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s1-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#样本空间",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "样本空间",
  "kind": "概念",
  "text": "随机试验的每一个不可再分的可能结果称为样本点，记为$\\omega$，样本点的全体组成的集合称为样本空间或基本事件空间，记为$\\Omega$，即$\\Omega=\\{\\omega\\}$。\n\n由一个样本点构成的事件称为基本事件。\n\n随机事件$A$总是由若干个基本事件构成，即$A$是$\\Omega$的子集。\n\n样本点的个数就是基本事件的个数。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#关系",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "关系",
  "kind": "概念",
  "text": "若事件$A$发生必然导致事件$B$发生，则称事件$B$包含事件$A$（或$A$被$B$包含），记为$A\\subset B$。\n\n如果$A\\subset B$且$B\\subset A$，则称事件$AB$相等，记为$A=B$，$AB$是由完全相同的一些试验结果构成，是同一事件表面上看来两个不同说法。\n\n若事件在事件$A$与$B$同时发生，则称为事件$A$与$B$的积或交，记为$A\\cap B$或$AB$。\n\n有限个事件$A_1,A_2,\\cdots,A_n$同时发生的事件为事件$A_1,A_2,\\cdots,A_n$的积或交，记为$\\bigcap\\limits_{i=1}^nA_i$或$\\bigcap\\limits_{i=1}^\\infty A_i$。\n\n若$AB\\neq\\varnothing$，则称事件$AB$相容，否则互不相容或互斥。如果一些事件中任意两个事件都互斥，则这些事件两两互斥，简称互斥。\n\n事件$AB$至少有一个发生的事件称为事件$AB$的和或并，记为$A\\cup B$。\n\n有限个事件$A_1,A_2,\\cdots,A_n$至少有一个发生的事件为事件$A_1,A_2,\\cdots,A_n$的和或并，记为$\\bigcup\\limits_{i=1}^nA_i$或$\\bigcup\\limits_{i=1}^\\infty A_i$。\n\n事件$A$发生而事件$B$不发生的事件为事件$AB$的差，记为$A-B$。\n\n事件$A$不发生的事件为事件$A$的逆事件或对立事件，记为$\\overline{A}$。\n\n若$\\bigcup\\limits_{i=1}^nA_i$或$\\bigcup\\limits_{i=1}^\\infty A_i=\\Omega$，$A_iA_j=\\varnothing$（对一切的$i\\neq j$，$i,j=1,2,3,\\cdots,n,\\cdots$），则称有限个事件$A_1,A_2,\\cdots,A_n$构成一个完备事件组。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#运算",
  "subject": "gailv",
  "topic": "运算",
  "title": "运算",
  "kind": "概念",
  "text": "定义可知：$A-B=A-AB=A\\overline{B}$，$B=\\overline{A}$等价于$AB=\\varnothing$且$A\\cup B=\\Omega$。\n\n- 吸收律：若$A\\subset B$，则$A\\cup B=B$，$A\\cap B=A$。\n\n- 交换律：$A\\cup B=B\\cup A$，$A\\cap B=B\\cap A$。\n\n- 结合律：$(A\\cup B)\\cup C=A\\cup(B\\cup C)$，$(A\\cap B)\\cap C=A\\cap(B\\cap C)$。\n\n- 分配律：$A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$，$A\\cup(B\\cap C)=(A\\cup B)\\cap(A\\cup C)$，$A\\cap(B-C)=(A\\cap B)-(A\\cap C)$。\n\n- 对偶律（德·摩根律）：$\\overline{A\\cup B}=\\overline{A}\\cap\\overline{B}$，$\\overline{A\\cap B}=\\overline{A}\\cup\\overline{B}$。（长杠变短杠，开口换方向）\n\n例题：判断$A-(B-C)=(A-B)\\cup C$是否成立。\n\n解：$\\because A-B=A\\overline{B}$，$\\therefore A-(B-C)=A-B\\overline{C}=A\\overline{B\\overline{C}}=A(\\overline{B}\\cup C)=A\\overline{B}\\cup AC=(A-B)\\cup AC\\neq (A-B)\\cup C$。",
  "relatedLessons": [],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s3-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#定义",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "定义",
  "kind": "概念",
  "text": "- 描述性定义：将随机事件$A$发生的可能性大小的度量（非负）称为事件$A$发生的概率，记为$P(A)$。\n\n- 统计性定义：在相同条件下做重复试验，事件$A$出现的次数$k$和总的试验次数$n$之比$\\dfrac{k}{n}$，称为事件$A$在这$n$次试验中出现的频率，当$n$充分大时，频率将稳定与某常数$p$附近，$n$越大频率偏离这个常数$p$的可能性越小，这个常数$p$就是事件$A$的概率。\n\n- 公理化定义：设随机试验的样本空间为$\\Omega$，如果对每一个事件$A$都有一个确定的实数$P(A)$，且事件函数$P(\\cdot)$满足：①非负性：$P(A)\\geqslant0$；②规范性：$P(\\Omega)=1$；③可列可加性：对于任意个互不相容事件$A_1,A_2,\\cdots,A_n$有$P(\\bigcup\\limits_{i=1}^\\infty A_i)=\\sum\\limits_{i=1}^nP(A_i)$，则称$P(\\cdot)$为概率，$P(A)$为事件$A$的概率。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#概率类型",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "概率类型",
  "kind": "概念",
  "text": "#### 古典概型\n\n定义：样本空间满足：①只有有限个样本点（基本事件）；②每个样本点（基本事件）发生的可能性一样（等可能）。\n\n若古典概型的基本事件总数为$n$，事件$A$包含$k$个基本事件，也称为有利于$A$的基本事件为$k$个，则$A$的概率为$P(A)=\\dfrac{k}{n}=\\dfrac{\\text{事件}A\\text{所含基本事件的个数}}{\\text{基本事件总数}}$，这个概率就是$A$的古典概率。\n\n古典概型的关键是计数，常用的方法有三种：\n\n- 列举法（直接查数法）：基本事件为数不多使用。\n\n- 集合对应法：\n\n- 加法原理：完成一件事有$n$类方法，第一类方法中有$m_1$类方法，第二类办法有$m_2$中方法，$\\cdots$，第$n$类方法中有$m_n$类方法，所以完成此事共有$\\sum\\limits_{i=1}^nm_i$种方法。\n\n- 乘法原理：完成一件事情有$n$个步骤，第一步有$m_1$种方法，第二步有$m_2$种方法，$\\cdots$，第$n$步有$m_n$种方法，则完成此事共有$\\prod\\limits_{i=1}^nm_i$种方法。\n\n- 排列：从$n$种不同的元素种取出$m\\leqslant n$个元素，并按照一定顺序排成一列，称为排列，所有排列的个数称为排列数，记为$A_n^m=n(n-1)(n-2)\\cdots(n-m+1)=\\dfrac{n!}{(n-m)!}$，当$m=n$时，$A_m^n=n!$称为全排列。\n\n- 组合：从$n$种不同的元素种取出$m\\leqslant n$个元素，并组成一组，称为组合，所有组合的个数称为组合数，记为$C_n^m=\\dfrac{A_n^m}{m!}=\\dfrac{n!}{(n-m)!m!}$。\n\n- 逆数法：先求$\\overline{A}$中的基本事件数$n_{\\overline{A}}$，将基本事件总数$n$减去$n_{\\overline{A}}$得$A$中的基本事件数。常用于计算含有“至少”字样的事件的概率。\n\n问题常见类型：\n\n- 直接用定义求概率。\n\n- 随机分配或随机占位。将$n$个可辨质点是随机分配到$N$个盒子中。若每盒最多可容纳一个质点，则一共有$P_N^n$种分法；若每盒可以容纳任意多个质点，则一共有$N^n$种分法。\n\n- 简单随机抽样。设$\\Omega=\\{\\omega_1,\\omega_2,\\cdots,\\omega_N\\}$含有$N$个元素，称$\\Omega$为总体。各元素被抽到的可能性相同。若先后有放回取$n$次，则有$N^n$种抽法；若先后无放回取$n$次，则有$P_N^n$种抽法；若任取$n$个，则有$C_N^n$种抽法。\n\n例题：5人共钓到3条鱼，每条鱼每个人钓到的可能性相同，求：\n\n(1)3条鱼由不同人钓到的概率。\n\n(2)有1人钓到两条鱼的概率。\n\n(3)3条鱼由同一个人钓到的概率。\n\n由题目可知这是一个随机分配的问题，总基本事件数为$5^3$。\n\n对于鱼而言没有明确的区分说明，所以这个就是个组合问题。\n\n(1)解：令第一个事件为$A$，因为每条鱼由不同的人钓到，即5人中恰有3人各钓到鱼，所以组合一共有$C_5^3$种，即从5个人取3个人有这么多种的取法。这3个人需要钓到3条鱼，因为鱼是可辩的，所以每组有$P_3^3$种分配方法。则$P(A)=\\dfrac{C_5^3P_3^3}{5^3}$。\n\n(2)解：令第二个事件为$B$，若一个人钓到两条，即从3条中任意选2，即$C_3^2$，又是5个人中的一个人完成的，所以$C_5^1$，所以有一个人钓到2条鱼共有$C_3^2C_5^1$种可能，此时还有一条鱼可以被其他4个人钓到，所以还要乘4。则$P(B)=\\dfrac{C_3^2C_5^14}{5^3}$。\n\n(3)解：令第三个事件为$C$，若一个人钓到三条，所以只有一种选法，然后有5个人可能钓到3条，所以是$C_5^1$，则$P(C)=\\dfrac{C_5^1}{5^3}$。\n\n#### 几何概型\n\n定义：①样本空间$\\Omega$是一个可度量的有界区域；②每个样本点发生的可能性都是一样，即样本点落入$\\Omega$的某一可度量的子区域$S$的可能性大小与$S$的几何度量成正比，而与$S$的位置与形状无关。\n\n在几何概型随机试验中，若$S_A$是样本空间$\\Omega$的一个可度量的子区域，则事件$A={\\text{样本落入区域}S_A}$的概率为$P(A)=\\dfrac{S_A\\text{的几何度量}}{\\Omega\\text{的几何度量}}$，这个概率就是$A$的几何概率。\n\n古典概型的基本事件有限，而几何概型的基本事件无限且可几何度量。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s3-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#性质",
  "subject": "gailv",
  "topic": "一元微分几何应用",
  "title": "性质",
  "kind": "定理",
  "text": "- 有界性：对于任一事件$A$，有$0\\leqslant P(A)\\leqslant1$，且$P(\\varnothing)=0$，$P(\\Omega)=1$。（$P(A)=0$不能推出$A=\\varnothing$，同样$P(A)=1$不能推出$A=\\Omega$）\n\n- 单调性：设$AB$为两个事件，若$A\\subset B$，则$P(B-A)=P(B)-P(A)$，$P(B)\\geqslant P(A)$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s3-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#公式",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "公式",
  "kind": "定理",
  "text": "- 逆事件概率公式：对于任一事件$A$，有$P(\\overline{A})=1-P(A)$。\n\n- 加法公式：对于任意两个事件$AB$，有$P(A\\cup B)=P(A)+P(B)-P(AB)$；对于三个事件$ABC$，$P(A\\cup B\\cup C)=P(A)+P(B)+P(C)-P(AB)-P(AC)-P(BC)+P(ABC)$；对于四个事件$ABCD$，$P(A\\cup B\\cup C\\cup D)=P(A)+P(B)+P(C)+P(D)-P(AB)-P(AC)-P(AD)-P(BC)-P(BD)-P(CD)+P(ABC)+P(ABD)+P(ACD)+P(BCD)-P(ABCD)$；若$A_1,A_2,\\cdots,A_n$两两互不相容，则$P(A_1\\cup A_2\\cup\\cdots\\cup A_n)=P(A_1)+P(A_2)+\\cdots+P(A_n)$。\n\n- 减法公式：$P(A-B)=P(A)-P(AB)=P(A\\omega)-P(AB)=P(A\\overline{B})$。\n\n- 条件概率公式：对于任意两个事件$AB$，若$P(A)>0$，我们称在已知事件$A$发生的条件下，事件$B$发生的概率为条件概率，记为$P(B|A)=\\dfrac{P(AB)}{P(A)}$。$P(\\overline{B}|A)=1-P(B|A)$，$P(B-C|A)=P(B|A)-P(BC|A)$。\n\n- 乘法公式：若$P(A)>0$，则$P(AB)=P(A)P(B|A)$。一般而言，对于$n>2$，$P(A_1A_2\\cdots A_{n-1})>0$，则$P(A_1A_2\\cdots A_{n-1})=P(A_1)P(A_2|A_1)P(A_3|A_1A_2)$\n$\\cdots P(A_n|A_1A_2\\cdots A_{n-1})$。（$A_i$的顺序不定）\n\n- 全概率公式：若$\\bigcup\\limits_{i=1}^nA_i=\\Omega$，$A_iA_j=\\varnothing$（$i\\neq j$，$i,j=1,2,\\cdots,n$），$P(A_i)>0$，则对任一事件$B$，有$B=\\bigcup\\limits_{i=1}^nA_iB$，$P(B)=\\sum\\limits_{i=1}^nP(A_i)P(B|A_i)$。$P(B)=P(B\\Omega)=P(B(\\bigcup\\limits_{i=1}^nA_i))=P(\\bigcup\\limits_{i=1}^nBA_i)=\\sum\\limits_{i=1}^nP(BA_i)=\\sum\\limits_{i=1}^nP(A_i)P(B|A_i)$。\n\n- 贝叶斯公式：若$\\bigcup\\limits_{i=1}^nA_i=\\Omega$，$A_iA_j=\\varnothing$（$i\\neq j$，$i,j=1,2,\\cdots,n$），$P(A_i)>0$，则对任一事件$B$，有$P(A_i|B)=\\dfrac{P(A_iB)}{P(B)}=\\dfrac{P(A_i)P(B|A_i)}{\\sum\\limits_{i=1}^nP(A_i)P(B|A_i)}$。\n\n全概率公式是由因知果，而贝叶斯公式是执果索因。\n\n例题：若随机事件$AB$同时发生，$C$也必然发生，且下列选项一定成立的是()。\n\n$A.P(C)<P(A)+P(B)-1$$B.P(C)\\geqslant P(A)+P(B)-1$\n\n$C.P(C)=P(AB)$$D.P(C)=P(A\\cup B)$\n\n解：$AB$同时发生，$C$也必然发生则说明$AB$这个事件是包含于$C$的，所以$AB$同时发生才能发生$C$，但是反之不一定成立，$AB\\subset C$，$P(AB)\\leqslant P(C)$。\n\n又$P(A\\cup B)=P(A)+P(B)-P(AB)$，$P(AB)=P(A)+P(B)-P(A\\cup B)\\leqslant P(C)$。\n\n又$P(A\\cup B)\\leqslant1$，则$P(A)+P(B)-1\\leqslant P(C)$。$B$成立。\n\n例题：已知$P(\\overline{A})=0.3$，$P(B)=0.4$，$P(A\\overline{B})=0.5$，求$P(B|A\\cup\\overline{B})$。\n\n解：$P(B|A\\cup\\overline{B})=\\dfrac{P(B(A\\cup\\overline{B}))}{P(A\\cup\\overline{B})}=\\dfrac{P(BA\\cup B\\overline{B})}{P(A)+P(\\overline{B})-P(A\\overline{B})}$。\n\n$P(A)=1-P(\\overline{A})=0.7$，$P(\\overline{B})=1-P(B)=0.6$，$P(A\\overline{B})=P(A)-P(AB)$，$\\therefore P(AB)=P(A)-P(A\\overline{B})=0.2$。\n\n$\\therefore =\\dfrac{0.2}{0.7+0.6-0.5}=0.25$。\n\n例题：每箱产品有10件，次品数从0到2都是等可能的，开箱检查时，任取1件。\n\n(1)求抽到是正品的概率。\n\n(2)若检测出次品就拒收，假如检验有误差，将1件正品误认为次品的概率为2%，1件次品被漏查认为是正品的概率是5%，求该箱产品通过验收的概率。\n\n(1)解：已知次品数从0到2都是等可能的，从而令有0件次品为$A_0$，有1件次品为$A_1$，有2件次品为$A_2$，事件出现的概率都是$\\dfrac{1}{3}$。\n\n设取到正品的事件为$B_1$，发生概率为对应次品情况下取到正品的可能性，根据全概率公式：$P(B_1)=\\sum\\limits_{i=0}^2P(A_i)P(B_1|A_i)=\\dfrac{1}{3}\\cdot1+\\dfrac{1}{3}\\cdot\\dfrac{9}{10}+\\dfrac{1}{3}\\cdot\\dfrac{8}{10}=0.9$。\n\n(2)解：取出一件商品只有两个事件，是正品$B_1$或是次品$\\overline{B_1}$。\n\n令通过验收的概率为$B$，则分为两种情况，一种是抽出正品被认为是正品的情况，一种是抽出次品被认为是正品的情况，即根据全概率公式：$P(B)=P(B_1)P(B|B_1)+P(\\overline{B_1})P(B|\\overline{B_1})=0.9\\cdot(1-2\\%)+0.1\\cdot5\\%=0.887$。\n\n例题：假设有两批数量相同的零件，已知有一批产品全部合格，另一批产品有25%不合格。从两批产品中任取1件，经检验是正品，放回原处，并在原所在批次再取1件，求这次产品是次品的概率。\n\n解：首先因为是两堆零件。第一次抽到的零件合格，可能是100%的一堆，也可能是75%的一堆。这个概率是等可能的。\n\n令$H_i$为第一次从第$i$批中取零件，则$P(H_1)=\\dfrac{1}{2}=P(H_2)$。\n\n令取到正品为$A$，第1批取到正品概率$P(A|H_1)=1$，第2批$P(A|H_2)=\\dfrac{3}{4}$。\n\n根据全概率公式取到正品：$P(A)=P(H_1)P(A|H_1)+P(H_2)P(A|H_2)=\\dfrac{7}{8}$。\n\n又已经检测到了是正品，即$A$已经发生了，后面说的将产品放回原位再从原位抽一件零件检测判断是否为次品，即表示已知$A$发生求是$H_1$或$H_2$的可能性，再求是次品的可能性。利用贝叶斯公式计算。\n\n抽到正品原批次是$H_1$概率：$P(H_1|A)=\\dfrac{P(H_1A)}{P(A)}=\\dfrac{P(H_1)P(A|H_1)}{P(A)}=\\dfrac{4}{7}$。\n\n抽到正品原批次是$H_2$概率：$P(H_1|A)=1-\\dfrac{4}{7}=\\dfrac{3}{7}$。\n\n令$C_i$为第二次从第$i$批取零件，则$P(C_1)=P(H_1|A)=\\dfrac{4}{7}$，$P(C_2)=\\dfrac{3}{7}$。\n\n此时产品是次品的概率为$P(\\overline{A})=P(C_1)P(\\overline{A}|C_1)+P(C_2)P(\\overline{A}|C_2)=$\n$\\dfrac{4}{7}\\cdot0+\\dfrac{3}{7}\\cdot\\dfrac{1}{4}=\\dfrac{3}{28}$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-1-random-events-and-probability-random-events-and-probability-s4-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/1-random-events-and-probability/random-events-and-probability.tex#事件独立性",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "事件独立性",
  "kind": "概念",
  "text": "- 描述性定义（直观性定义）：设$AB$为两个事件，如果其中任何一个事件发生的概率不受另外一个事件发生与否的影响，则称事件$A$与$B$相互独立。设$A_1,A_2,\\cdots,A_n$是$n\\geqslant2$个事件，如果其中任何一个或几个事件发生的概率都不受其余的某一个或几个事件发生与否的影响，则称事件$A_1,A_2,\\cdots,A_n$相互独立。\n\n- 数学定义：设$AB$为两个事件，如果$P(AB)=P(A)P(B)$，则称事件$A$与事件$B$相互独立，简称$A$与$B$独立。如$P(A|B)=\\dfrac{P(AB)}{P(B)}=\\dfrac{P(A)P(B)}{P(B)}=P(A)$。\n\n设$A_1,A_2,\\cdots,A_n$为$n\\leqslant2$个事件，若堆其中任意有限个事件$A_{k1},A_{k2},\\cdots,$\n$A_{kk}$（$2\\leqslant k\\leqslant n$），有$P(A_{k1}A_{k2}\\cdots A(kk))=P(A_{k1}A_{k2}\\cdots A_{kk})$，则称这$n$个事件$A_1,A_2,\\cdots,A_n$为$n\\leqslant2$相互独立。\n\n如$n=3$，若$P(A_1A_2)=P(A_1)P(A_2)$，$P(A_1A_3)=P(A_1)P(A_3)$，$P(A_2A_3)=P(A_2)P(A_3)$，$P(A_1A_2A_3)=P(A_1)P(A_2)P(A_3)$，则称事件$A_1,A_2,A_3$相互独立。若没有最后一个式子则只能称其两两独立。\n\n例题：设$AB$是任意两个事件，其中$P(A)\\in(0,1)$，证明$P(B|A)=P(B|\\overline{A})$是事件$AB$相互独立的充要条件。\n\n证明：先证必要性，即$AB$独立，则$P(AB)=P(A)P(B)$，$P(B|A)=P(B)$，同理$P(B|\\overline{A})=P(B)$，所以必要性成立。\n\n然后证明充分性，若$P(B|A)=\\dfrac{P(AB)}{P(A)}=\\dfrac{P(\\overline{A}B)}{P(\\overline{A})}=P(B|\\overline{A})$。\n\n根据减法公式，$\\dfrac{P(AB)}{P(A)}=\\dfrac{P(B)-P(AB)}{1-P(A)}$，使用交叉相乘得到$P(A)(P(B)-P(AB))=P(AB)(1-P(A))$，解得$P(AB)=P(A)P(B)$。从而充分性成立。\n\n定理：若$AB$独立，则$\\overline{A}B$、$A\\overline{B}$、$\\overline{AB}$也独立。\n\n例题：将一枚硬币独立地掷两次，设$A_1=$\\{掷第一次出现正面\\}，$A_2=$\\{掷第二次出现正面\\}，$A_3=$\\{正反面各出现一次\\}，$A_4=$\\{出现正面两次\\}，则事件()。\n\n$A.A_1,A_2,A_3$相互独立$B.A_2,A_3,A_4$相互独立\n\n$C.A_1,A_2,A_3$两两独立$D.A_2,A_3,A_4$两两独立\n\n解：已知一共只有四种情况：\\{正，正\\}、\\{正，反\\}、\\{反，正\\}、\\{反，反\\}。\n\n则$P(A_1)=\\dfrac{1}{2}$，$P(A_2)=\\dfrac{1}{2}$，$P(A_3)=\\dfrac{1}{2}$，$P(A_4)=\\dfrac{1}{4}$。\n\n对于$P(A_1A_2)=\\dfrac{1}{4}=P(A_1)P(A_2)$，$P(A_1A_3)=\\dfrac{1}{4}=P(A_1A_3)$，$P(A_2A_3)=\\dfrac{1}{4}=P(A_2A_3)$，$P(A_1A_2A_3)=0\\neq P(A_1A_2A_3)$。所以C。\n\n\\subsection{\\texorpdfstring{$n$重伯努利试验}{}}\n\n独立试验定义：称试验$E_1,E_2,\\cdots,E_n$为相互独立的，如果分别于各个试验相联系的任意$n$个事件之间相互独立。\n\n独立重复试验定义：独立表示与各试验相联系的事件之间相互独立，其中重复表示每个事件在各次试验中出现的概率不便。\n\n伯努利试验定义：只针对失败、成功两种对立结果的试验，将伯努利试验重复进行$n$次，就是\\textbf{$n$重伯努利试验}。\n\n在计算伯努利试验概率的时候不仅要考虑每一类情况（出现几次）的次数，还有考虑其组合情况，即将多个情况的$C_n^mp^j$相加。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#随机变量概念",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "随机变量概念",
  "kind": "概念",
  "text": "定义：随机变量就是其值会随机而定的变量。设随机试验$E$的样本空间$\\Omega={\\omega}$，如果对每一个$\\omega$都有唯一的实数$X(\\omega)$与之对应，并且对任意实数$x$，$\\{\\omega|X(\\omega)\\leqslant x,\\omega\\in\\Omega\\}$是随机事件，则称定义在$\\Omega$上的实值单值函数$X(\\omega)$为随机变量，记为随机变量$X$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#分布函数",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "分布函数",
  "kind": "概念",
  "text": "#### 概念\n\n定义：设$X$为随机变量，$x$为任意实数，称函数$F(x)=P\\{X\\leqslant x\\}$（$x\\in R$且取遍所有实数）为随机变量$X$的分布函数，或称$X$服从分布$F(x)$，记为$X\\sim F(x)$。（随着$x$从$-\\infty$到$+\\infty$，$X(\\omega)$到$\\varnothing$到$\\Omega$）\n\n#### 性质\n\n同样是分布函数的充要条件：\n\n-$F(x)$是$x$的单调不减函数，即对任意实数$x_1<x_2$，有$F(x_1)\\leqslant F(x_2)$。\n\n-$F(x)$是$x$的右连续函数，即对任意$x_0\\in R$，有$\\lim\\limits_{x\\to x_0^+}F(x)=F(x_0+0)=F(x_0)$。（左空心右实心）\n\n-$F(-\\infty)=\\lim\\limits_{x\\to-\\infty}F(x)=0$，$F(+\\infty)=\\lim\\limits_{x\\to+\\infty}F(x)=1$。\n\n#### 应用\n\n-$P\\{X\\leqslant a\\}=F(a)$。\n\n-$P\\{X<a\\}=F(a-0)$。是指分布函数下该点左极限的概率值。\n\n-$P(X=a)=F(a)-F(a-0)$。$\\because P\\{X\\leqslant a\\}=P\\{X<a\\cup X=a\\}=P\\{X<a\\}+P\\{X=a\\}$，$\\therefore P\\{X=a\\}=P\\{X\\leqslant a\\}-P\\{X<a\\}=F(a)-F(a-0)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s2-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#一维离散型随机变量",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "一维离散型随机变量",
  "kind": "概念",
  "text": "定义：若随机变量$X$只可能取有限个或可列各值$x_1,x_2,\\cdots$，则称$X$为离散型随机变量。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#分布律",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "分布律",
  "kind": "概念",
  "text": "定义：$P\\{X=x_i\\}=p_i$，$i=1,2,\\cdots$为$X$的分布列、分布律或概率分布，记为$X\\sim p_i$。\n\n概率分布常用表格或矩阵表示：\n\n$X$ ｜$x_1$ ｜$x_2$ ｜$\\cdots$\n$P$ ｜$p_1$ ｜$p_2$ ｜$\\cdots$\n\\,或$X\\sim\\left(\\begin{array}{ccc}\n    x_1 & x_2 & \\cdots \\\\\n    p_1 & p_2 & \\cdots\n\\end{array}\\right)$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#性质",
  "subject": "gailv",
  "topic": "数列极限",
  "title": "性质",
  "kind": "定理",
  "text": "数列$\\{p_i\\}$是离散型随机变量的概率分布的充要条件是$p_i\\geqslant0$（$i=1,2,\\cdots$）且$\\sum\\limits_{i=1}^np_i=1$。\n\n设离散型随机变量$X$的概率分布为$P\\{X=x_i\\}=p_i$，则$X$的分布函数$F(x)=P\\{X\\leqslant x\\}=\\sum\\limits_{x_i\\leqslant x}P\\{X=x_i\\}$，即离散型随机变量的分布律函数是一个左实右空的阶梯形函数。\n\n$P\\{X=x_i\\}=P\\{X\\leqslant x_i\\}-P\\{X<x_i\\}=F(x_i)-F(x_i-0)$，即某点的概率值为该点分布律值减去该点左极限的分布律值。\n\n对实数轴上的任一集合$B$有$P\\{X\\in B\\}=\\sum\\limits_{x_i\\in B}P\\{X=x_i\\}$，特别地$P\\{a<X\\leqslant b\\}=P\\{X\\leqslant b\\}-P\\{X\\leqslant a\\}=F(b)-F(a)$。",
  "relatedLessons": [
   "gs02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s2-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#分布",
  "subject": "gailv",
  "topic": "排列与逆序数",
  "title": "分布",
  "kind": "概念",
  "text": "#### 0-1分布\n\n定义：若$X$的概率分布为$X\\sim\\left(\\begin{array}{cc}\n    1 & 0 \\\\\n    p & 1-p\n\\end{array}\\right)$，即$P\\{X=1\\}=p$，$P\\{X=0\\}=1-p$，则称$X$服从参数为$p$的0-1分布，记为$X\\sim B(1,p)$（$0<p<1$）。\n\n0-1分布基于一次伯努利试验，$X$也称为伯努利计数变量。\n\n#### 二项分布\n\n定义：如果$X$的概率分布为$P\\{X=k\\}=C_n^kp^k(1-p)^{n-k}$（$k=0,1,\\cdots,n$，$0<p<1$），则称$X$服从参数为$(n,p)$的二项分布，记为$X\\sim B(n,p)$。\n\n二项分布基于$n$重伯努利试验。\n\n二项分布的分布律计算，总共进行试验$n$次，已知成功的概率为$p$，若成功了$k$次，则$k$次成功概率为$p^k$，则失败次数为$n-k$，从而$n-k$失败概率为$(1-p)^{n-k}$，因为$n$次试验都是相互独立的，所以将成功的概率与失败的概率乘在一起。又在$n$次中成功$k$次就可以了，进行排列，所以还乘上$C_n^k$。\n\n#### 泊松分布\n\n定义：如果$X$的概率分布为$P\\{X=k\\}=\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$（$k=0,1,\\cdots,n$，$\\lambda>0$），则称$X$服从参数为$\\lambda$的泊松分布，记为$X\\sim P(\\lambda)$。\n\n泊松分布基于某场合某单位时间内源源不断的质点来流的个数$X=k$，$\\lambda$代表质点流动到来的强度。也可以代表稀有事件发生的概率。\n\n#### 泊松定理\n\n定理：设$X\\sim B(n,p)$，当$n$较大，$p$较小时，近似$X\\sim P(np)$。\n\n即$P\\{X=k\\}=C_n^kp^k(1-p)^{n-k}\\approx\\dfrac{(np)^ke^{-np}}{k!}$。\n\n#### 几何分布\n\n定义：如果$X$的概率分布为$P\\{X=k\\}=(1-p)^{k-1}p$（$k=0,1,\\cdots,n$，$0<p<1$），则称$X$服从参数为$p$的几何分布，记为$X\\sim G(p)$。\n\n几何分布与几何无关，代表的是$n$重伯努利试验首次成功就停止试验，试验次数可以为无穷。设$X$表示伯努利试验中事件$A$首次放生所需要的试验次数，则$X\\sim G(p)$，其中$p=P(A)$。\n\n从而根据意义，几何分布要求前$k-1$次都失败，从而概率为$(1-p)^{k-1}$，最后一次成功，所以再乘上$p$。\n\n#### 超几何分布\n\n定义：如果$X$的概率分布为$P\\{X=k\\}=\\dfrac{C_M^kC_{N-M}^{n-k}}{C_N^n}$（$\\max\\{0,n-N+M\\}\\leqslant k\\leqslant\\min\\{MM,n\\}$，$M,N,n$为正整数且$M\\leqslant N$，$n\\leqslant N$，$k$为整数），则称$X$服从参数为$(n,N,M)$的超几何分布，记为$X\\sim H(n,N,M)$。\n\n超几何分布考的可能性很小，事件数就是古典概型的一个特例。\n\n如有$N$件产品，其中$M$件正品，从而$N-M$件次品，任取$n$个，则取出$k$件正品的概率就是超几何分布。",
  "relatedLessons": [
   "xd01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s2-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#分布函数",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "分布函数",
  "kind": "概念",
  "text": "设$X$为随机变量，$x$为任意实数，函数$F(x)=P\\{X\\leqslant x\\}$，$(-\\infty<x<+\\infty)$称为$X$的离散随机变量分布函数。\n\n-$F(x)$是一个不减函数，随着$x$增大逐渐累积。\n\n-$P\\{a<X\\leqslant b\\}=F(b)-F(a)$。（$a$处被减掉了所以是空心的）\n\n-$0\\leqslant F(x)\\leqslant1$，$F(-\\infty)=0$，$F(+\\infty)=1$。\n\n-$P(X=k)=P(X\\leqslant k)-P(X<k)$。\n\n-$F(x)$是右连续。\n\n通过性质四可有由离散型变量的分布函数推出离散型随机变量的分布律。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s2-5",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#应用",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "应用",
  "kind": "方法",
  "text": "例题：已知随机变量$X$的概率分布为：\n\n$X$ ｜ 1 ｜ 2 ｜ 3\n$P\\{X=k\\}$ ｜$\\theta^2$ ｜$2\\theta(1-\\theta)$ ｜$(1-\\theta)^2$\n\n且$P\\{X\\geqslant2\\}=\\dfrac{3}{4}$，求未知参数$\\theta$与$X$的分布函数$F(x)$。\n\n解：$\\because P\\{X\\geqslant2\\}=\\dfrac{3}{4}$，$\\therefore 2\\theta(1-\\theta)+(1-\\theta)^2=\\dfrac{3}{4}$，解得$\\theta=\\dfrac{1}{2}$，$-\\dfrac{1}{2}$舍。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s3-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#一维连续型随机变量",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "一维连续型随机变量",
  "kind": "概念",
  "text": "定义：若随机变量$X$的分布函数可以表示为$F(x)=\\int_{-\\infty}^xf(t)\\,\\textrm{d}t$（$x\\in R$且取遍所有实数），其中$f(x)$是非负可积函数，则$X$为连续型随机变量。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s3-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#概率密度",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "概率密度",
  "kind": "概念",
  "text": "定义：若对于随机变量$X$的分布函数$F(x)$存在非负可积函数$f(x)$使得对于任意实数$x$都有$F(x)=\\int_{-\\infty}^xf(t)\\,\\textrm{d}t$，则$f(x)$称为$X$的概率密度函数，简称概率密度，记为$X\\sim f(x)$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#性质",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "性质",
  "kind": "定理",
  "text": "- 改变$f(x)$有限各点的值$f(x)$仍是概率密度（因为单个点没有面积）。且$P(X=a)=0$。\n\n-$f(x)$为某一随机变量$X$的概率密度的充分必要条件：$f(x)\\geqslant0$，且\n$\\int_{-\\infty}^{+\\infty}f(x)\\,\\textrm{d}x=1$。\n\n- 若$X$为连续型随机变量，$X\\sim f(x)$，则对任意实数$c$有$P\\{X=c\\}=0$。\n\n- 对实数轴上的任一集合$B$有$P\\{X\\in B\\}=\\int\\limits_Bf(x)\\,\\textrm{d}x$，特别地$P\\{a<X<b\\}=P\\{a\\leqslant X<b\\}=P\\{a<X\\leqslant b\\}=P\\{a\\leqslant X\\leqslant b\\}=\\int_a^bf(x)\\,\\textrm{d}x=F(b)-F(a)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s3-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#分布",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "分布",
  "kind": "概念",
  "text": "#### 均匀分布\n\n定义：如果$X$的概率密度或分布函数分别为$f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{b-a}, & a<x<b \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$F(x)=\\left\\{\\begin{array}{ll}\n    0, & x<a \\\\\n    \\dfrac{x-a}{b-a}, & a\\leqslant x<b \\\\\n    1, & x\\geqslant b\n\\end{array}\\right.$，则称$X$在区间$(a,b)$上服从均匀分布，记为$X\\sim U(a,b)$。\n\n几何概型在一维情况下就是几何分布。\n\n若$X$在区间$I$上的任一子区间取值的概率与该子区间的长度成正比，则$X\\sim U(a,b)$。\n\n#### 指数分布\n\n定义：如果$X$的概率密度或分布函数分别为$f(x)=\\left\\{\\begin{array}{ll}\n    \\lambda e^{-\\lambda x}, & x>0 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$F(x)=\\left\\{\\begin{array}{ll}\n    1-e^{-\\lambda x}, & x\\geqslant0 \\\\\n    0, & x<0 \\\\\n\\end{array}\\right.$，则称$X$在区间$(a,b)$上服从参数为$\\lambda$的指数分布，记为$X\\sim E(\\lambda)$。\n\n指数分布中$\\lambda$代表失效率，往往用来代表一个事物毁坏的过程，如灯泡毁坏。\n\n无记忆性定理：若$X\\sim E(\\lambda)$，则$P\\{X>s+t|X>s\\}=P\\{X>t\\}=e^{-\\lambda t}$。\n\n即在指数分布下事情发生的概率与前面所经过的时间无关，如果$T$是某一元件的寿命，已知元件使用了$t$小时，它总共使用至少$s+t$小时的条件概率，与从开始使用时算起它使用至少$s$小时的概率相等。\n\n证明：$P\\{X>s+t|X>s\\}=\\dfrac{P\\{X>s+t\\}}{P\\{X>s\\}}=\\dfrac{1-P\\{X\\leqslant s+t\\}}{1-P\\{X\\leqslant s\\}}$\n\n$=\\dfrac{1-F(s+t)}{1-F(x)}=\\dfrac{1-(1-e^{-\\lambda(s+t)})}{1-(1-e^{-\\lambda s})}=\\dfrac{e^{-\\lambda(s+t)}}{e^{-\\lambda s}}=e^{-\\lambda t}=1-(1-e^{-\\lambda t})$\n\n$=1-F(t)=1-P\\{X\\leqslant t\\}=P\\{X>t\\}$。\n\n#### 正态分布\n\n定义：如果$X$的概率密度为$f(x)=\\dfrac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$（$-\\infty<x<+\\infty$，$-\\infty<\\mu<+\\infty$，$\\sigma>0$），则称$X$服从参数为$(\\mu,\\sigma^2)$的正态分布，称$X$为正态变量，记为$X\\sim N(\\mu,\\sigma^2)$。\n\n$f(x)$的图形关于$x=\\mu$对称，即$f(\\mu-x)=f(\\mu+x)$，并在$x=\\mu$处有唯一最大值$f(\\mu)=\\dfrac{1}{\\sqrt{2\\pi}\\sigma}$。$\\mu-\\sigma$和$\\mu+\\sigma$为拐点。\n\n当$\\mu=0$，$\\sigma=1$时的正态分布$N(0,1)=\\dfrac{1}{\\sqrt{2\\pi}}e^{-\\frac{x^2}{2}}$为标准正态分布，记为$\\varPhi(x)$，$\\varPhi(x)$为偶函数，$\\varPhi(0)=\\dfrac{1}{2}$，$\\varPhi(-x)=1-\\varPhi(x)$。\n\n若$X\\sim N(0,1)$，$P\\{X>\\mu_\\alpha\\}=\\alpha$，则称$\\mu_\\alpha$为标准正态分布的\\textbf{上侧$\\alpha$分位数/上$\\alpha$分位点}。\n\n若$X\\sim N(\\mu,\\sigma^2)$，则\n\n-$F(x)=P\\{X\\leqslant x\\}=P\\left\\{\\dfrac{X-\\mu}{\\sigma}\\leqslant\\dfrac{x-\\mu}{\\sigma}\\right\\}=\\varPhi\\left(\\dfrac{x-\\mu}{\\sigma}\\right)$。（标准化）\n\n-$F(\\mu-x)+F(\\mu+x)=1$。\n\n-$P\\{a<X<b\\}=\\varPhi\\left(\\dfrac{b-\\mu}{\\sigma}\\right)-\\varPhi\\left(\\dfrac{a-\\mu}{\\sigma}\\right)$。（标准化得到）\n\n-$aX+b\\sim N(a\\mu+b,a^2\\theta^2)$（$a\\neq0$）。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s3-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#应用",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "应用",
  "kind": "方法",
  "text": "例题：已知随机变量$X$的概率密度为$\\left\\{\\begin{array}{ll}\n    Ax, & 1<x<2 \\\\\n    B, & 2\\leqslant x<3 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，且$P\\{1<X<2\\}=P\\{2<X<3\\}$，求常数$AB$，分布函数$F(x)$以及概率$P\\{2<X<4\\}$。\n\n解：由于归一性$\\int_{-\\infty}^{+\\infty}f(x)\\,\\textrm{d}x=1$，$\\therefore\\int_1^2Ax\\,\\textrm{d}x+\\int_2^2B\\,\\textrm{d}x=1$。\n\n$\\therefore\\dfrac{3}{2}A+B=1$。又$P\\{1<X<2\\}=P\\{2<X<3\\}$。\n\n$\\therefore\\int_1^2Ax\\,\\textrm{d}x=\\int_2^3B\\,\\textrm{d}x$，即$\\therefore\\int_1^2Ax\\,\\textrm{d}x=\\int_2^2B\\,\\textrm{d}x=\\dfrac{1}{2}$，$A=\\dfrac{1}{3}$，$B=\\dfrac{1}{2}$。\n\n$f(x)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{3}x, & 1<x<2  \\\\\n    \\dfrac{1}{2}, & 2\\leqslant x<3 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$\\because F(x)=\\int_{-\\infty}^xf(t)\\,\\textrm{d}t$。\n\n$\\therefore F(x)=\\left\\{\\begin{array}{ll}\n    0, & x<1 \\\\\n    \\int_1^x\\dfrac{1}{3}t\\,\\textrm{d}t=\\dfrac{x^2}{6}-\\dfrac{1}{6}, & 1\\leqslant x<2  \\\\\n    \\int_1^2\\dfrac{1}{3}x\\,\\textrm{d}x+\\int_2^x\\dfrac{1}{2}\\,\\textrm{d}x=\\dfrac{1}{2}x-\\dfrac{1}{2}, & 2\\leqslant x<3 \\\\\n    1, & x\\geqslant3\n\\end{array}\\right.$",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s4-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#一维随机变量函数分布",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "一维随机变量函数分布",
  "kind": "概念",
  "text": "设$X$为随机变量，函数$y=g(x)$，则以随机变量$X$作为自变量的函数$Y=g(X)$也是随机变量，称为\\textbf{随机变量$X$的函数}。\n\n如$Y=aX^2+bX^+c$等等。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s4-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#离散型",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "离散型",
  "kind": "概念",
  "text": "设$X$为离散型随机变量，其概率分布为$p_i=P\\{X=x_i\\}$（$i=1,2,\\cdots$），则$X$的函数$Y=g(X)$也是离散型随机变量，其概率分布为$P\\{Y=g(x_i)\\}=p_i$（$i=1,2,\\cdots$）。\n\n即$Y\\sim\\left(\\begin{array}{ccc}\n    g(x_1) & g(x_2) & \\cdots \\\\\n    p_1 & p_2 & \\cdots\n\\end{array}\\right)$。\n\n若有若干个$g(x_i)$相同，则合并为一项，并将对应概率相加作为$Y$取$g(x_i)$的概率。\n\n离散型一维随机变量函数分布单独考的可能性很低。\n\n例题：设$X$是仅可能取6个值的离散型随机变量，分布为：\n\nX ｜ -2 ｜ -1 ｜ 0 ｜ 1 ｜ 2 ｜ 3\nP ｜ 0.05 ｜ 0.15 ｜ 0.20 ｜ 0.25 ｜ 0.20 ｜ 0.15\n\n求$Y=2X+1$，$Z=X^2$的概率分布。\n\n因为$Y=2X+1$是线性的，所以改变$X$变为$Y$，所对应的$P$不变：\n\nY ｜ -3 ｜ -1 ｜ 1 ｜ 3 ｜ 5 ｜ 7\nP ｜ 0.05 ｜ 0.15 ｜ 0.20 ｜ 0.25 ｜ 0.20 ｜ 0.15\n\n对于$Z=X^2$是一个平方，导致$Z$的值有些是一样的，所以概率合在一起：\n\nZ ｜ 0 ｜ 1 ｜ 4 ｜ 9\nP ｜ 0.20 ｜ 0.40 ｜ 0.25 ｜ 0.15",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s4-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#连续性",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "连续性",
  "kind": "概念",
  "text": "设$X$为离散型随机变量，其分布函数、概率密度为$F_X(x)$与$f_X(x)$，随机变量$Y=g(X)$也是$X$的函数，则$Y$的分布函数或概率密度可用分布函数法得到$F_Y(y)=P\\{Y\\leqslant y\\}=P\\{g(X)\\leqslant y\\}=\\int_{g(X)\\leqslant y}f_X(x)\\,\\textrm{d}x$。\n\n若$F_Y(y)$连续，且除有限个点外，$F_Y'(y)$存在且连续，$Y$的概率密度为$f_Y(y)=F_Y'(y)$。\n\n首先已知$X$的概率密度函数为$f_X(x)$，分布函数为$F_X(x)$，已知$Y=g(X)$，即$Y$对$X$的映射关系。现在要求$Y$的概率规律，即要求$Y$的概率密度$f_Y(y)$与分布函数$F_Y(y)$。\n\n先求分布函数$F_Y(y)=P\\{Y\\leqslant y\\}=P\\{g(X)\\leqslant y\\}$，然后用$y$来表示$X$，这是连续性随机变量函数分布的重点。\n\n即$X$在以$y$表示的一个区间上，$X\\in I_y$，所以解得$Y$分布函数$\\int_{I_y}f_X(x)\\,\\textrm{d}x$。\n\n例题：设随机变量$X$的概率密度为$f_X(x)=\\left\\{\\begin{array}{ll}\n    1+x, & -1\\leqslant x<0 \\\\\n    1-x, & 0\\leqslant x\\leqslant1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，求随机变量$Y=X^2+1$的分布函数。\n\n解：求随机变量$Y=X^2+1$的分布函数即求$F_Y(y)=P\\{Y\\leqslant y\\}=P\\{X^2+1\\leqslant y\\}$。即将$X^2+1$与$y$的概率关系解出，即求曲线$X^2+1$与直线$y$的关系。\n\n根据$X$的概率密度函数，所以只有$x\\in [-1,1]$才有正概率，其他区间概率为0，即不能取，将$Y$的取值范围划在$[-1,1]$中。\n\n又由$f_X(x)$的关系知道$Y$的函数，是在$[-1,1]$的属于$[1,2]$的抛物线。\n\n当$y<1$时，$Y=X^2+1>1$恒成立，所以$X^2+1\\leqslant y$不可能发生，概率为0，所以$F_Y(y)=0$。\n\n当$y>2$时，$Y=X^2+1$在$X\\in[-1,1]$时$Y\\in[1,2]$，所以$X^2+1\\leqslant y$必然成立，所以所以$F_Y(y)=1$。\n\n当$1<y<2$时，解出$X^2+1\\leqslant y$为$X=\\pm\\sqrt{y-1}$，所以$F_Y(y)=P\\{-\\sqrt{y-1}\\leqslant X\\leqslant\\sqrt{y-1}\\}=\\int_{-\\sqrt{y-1}}^{\\sqrt{y-1}}f(x)\\,\\textrm{d}x=\\int_{-\\sqrt{y-1}}^01+x\\,\\textrm{d}x+\\int_0^{\\sqrt{y-1}}1-x\\,\\textrm{d}x=2\\sqrt{y-1}-y+1$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s5-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#概念",
  "subject": "gailv",
  "topic": "向量代数",
  "title": "概念",
  "kind": "概念",
  "text": "多维随机变量定义：如果$X_1,X_2,\\cdots,X_n$是定义在同一个样本空间上的$n$个随机变量，则称$(X_1,X_2,\\cdots,X_n)$为\\textbf{$n$维随机变量}或\\textbf{$n$维随机向量}，$X_i$为第$i$个分量。\n\n当$n=2$时，$(X,Y)$为二维随机变量/二维随机向量。",
  "relatedLessons": [
   "gs17"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s5-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#联合分布函数",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "联合分布函数",
  "kind": "概念",
  "text": "定义：对任意$n$个实数$x_1,x_2,\\cdots,x_n$称为$n$元函数$F(x_1,x_2,\\cdots,x_n)=P\\{X_1\\leqslant x_1,X_2\\leqslant x_2,\\cdots,X_n\\leqslant x_n\\}$为$n$为随机变量$(X_1,X_2,\\cdots,X_n)$的联合分布函数。\n\n当$n=2$时对任意的实数$xy$称二元函数$F(x,y)=P\\{X\\leqslant x,Y\\leqslant y\\}$为二维随机变量$(X,Y)$的联合分布函数，简称分布函数，记为$(X,Y)\\sim F(x,y)$。\n\n性质：\n\n- 单调性：$F(x,y)$是$xy$的单调不减函数。\n\n- 右连续性：$F(x,y)$在右边连续。\n\n- 有界性：当$x$或$y$趋向负无穷时值为0，当$x$和$y$趋向正无穷时值为1。\n\n- 非负性：对任意$x_1<x_2$，$y_1<y_2$有$P\\{x_1<X\\leqslant x_2,y_1<Y\\leqslant y_2\\}=F(x_2,y_2)-F(x_2,y_1)-F(x_1,y_2)+F(x_1,y_1)\\geqslant0$。（由定义画图可知）",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s5-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#边缘分布函数",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "边缘分布函数",
  "kind": "概念",
  "text": "定义：设二维随机变量$(X,Y)$的联合分布函数为$F(x,y)$，随机变量$X,Y$的分布函数$F_X(x)$与$F_Y(y)$分别称$(X,Y)$关于$X$与关于$Y$的边缘分布函数。\n\n$F_X(x)=P\\{X\\leqslant x\\}=P\\{X\\leqslant x,Y<+\\infty\\}=\\lim\\limits_{y\\to+\\infty}P\\{X\\leqslant x,Y\\leqslant y\\}=\\lim\\limits_{y\\to+\\infty}F(x,y)=F(x,+\\infty)$。同理$F_Y(y)=F(+\\infty,y)$。\n\n求边缘分布函数的口诀：求谁不积谁，不积先定限，限内画条线，先交写下限，后交写上限。\n\n即若求$x$则积$y$，然后根据$f(x,y)$联合概率密度的图形求$x$的取值区间。然后在$f(x,y)$联合概率密度共同的取值区间内画一条水平的线$y=y_0$（若求$y$）或垂直的线$x=x_0$（若求$x$），则从左到右从下到上先与所画线相交的区间边缘的线就是边缘概率密度的下限，后面相交的就是上限。最后将被积函数的联合概率密度加到中间就是最后的边缘分布函数。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s5-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#条件分布函数",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "条件分布函数",
  "kind": "定理",
  "text": "定义：对于二维随机变量$(X，Y)$，可以考虑在其中一个随机变量取得可能的固定值的条件下，另一随机变量的概率分布，这样得到的$X$或$Y$的概率分布叫做条件概率分布，简称条件分布。\n\n定理：条件概率密度=$\\dfrac{\\text{联合概率密度}}{\\text{边缘概率密度}}$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s6-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维离散型随机变量",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "二维离散型随机变量",
  "kind": "概念",
  "text": "定义：若二维随机变量$(X,Y)$只能取有限或可列对值$(x_1,y_1),(x_2,y_2),\\cdots$则称$(X,Y)$为二维离散型随机变量。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s6-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#联合分布律",
  "subject": "gailv",
  "topic": "多维随机变量及其分布",
  "title": "联合分布律",
  "kind": "概念",
  "text": "定义：$p_{ij}=P\\{X=x_i,Y=y_j\\}$，$i,j=1,2,\\cdots$为$(X,Y)$的分布律或随机变量$X$和$Y$的联合分布律，记为$(X,Y)\\sim p_{ij}$。\n\n数列$\\{p_{ij}\\}$，$i,j=1,2,\\cdots$是某一二维离散型随机变量的概率分布的充要条件是$p_{ij}\\geqslant0$，$\\sum\\limits_{i=1}^\\infty\\sum\\limits_{j=1}^\\infty p_{ij}=1$。\n\n定义：若$p_{ij}$，$i,j=1,2,\\cdots$为$(X,Y)$的概率分布，则$(X,Y)$的联合分布函数为$F(x,y)=P\\{X\\leqslant x,Y\\leqslant y\\}=\\sum\\limits_{x_i\\leqslant x}\\sum\\limits_{y_j\\leqslant y}p_{ij}$。\n\n联合分布函数是以$(x,y)$为定点的左下角平面上$(X,Y)$所有可能取值的概率的和。\n\n设$G$是平面上某个区域，则$P\\{(X,Y)\\in G\\}=\\sum\\limits_{(x_i,y_j)\\in G}p_{ij}$。",
  "relatedLessons": [
   "gl03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s6-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#边缘分布律",
  "subject": "gailv",
  "topic": "多维随机变量及其分布",
  "title": "边缘分布律",
  "kind": "概念",
  "text": "定义：对于同一个$x$值的所有$y$取值的概率的和，就是该$x$值的边缘分布律。同理对于同一个$y$值的所有$x$取值的概率的和，就是该$y$值的边缘分布律。\n\n即$p_{i\\cdot}=P\\{X=x_i\\}=\\sum\\limits_{j=1}^\\infty P\\{X=x_i,Y=y_j\\}=\\sum\\limits_{j=1}^\\infty p_{ij}$（$i=1,2,\\cdots$）。\n\n$p_{\\cdot j}=P\\{Y=y_i\\}=\\sum\\limits_{i=1}^\\infty P\\{X=x_i,Y=y_j\\}=\\sum\\limits_{i=1}^\\infty p_{ij}$（$j=1,2,\\cdots$）。",
  "relatedLessons": [
   "gl03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s6-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#条件分布律",
  "subject": "gailv",
  "topic": "多维随机变量及其分布",
  "title": "条件分布律",
  "kind": "概念",
  "text": "条件分布律类比随机事件概率中的条件概率。\n\n定义：如果$(X,Y)\\sim p_{ij}$（$i,j=1,2,\\cdots$），对固定的$j$，如果$p_{\\cdot j}=P\\{Y=y_j\\}>0$，则称$P\\{X=x_i|Y=y_j\\}=\\dfrac{P\\{X=x_i,Y=y_j\\}}{P\\{Y=y_j\\}}=\\dfrac{p_{ij}}{p_{\\cdot j}}$（$i=1,2,\\cdots$）为$X$在$Y=y_j$条件下的条件分布。\n\n同理定义：$Y$在$X=x_i$条件下的条件分布为$P\\{Y=y_j|X=x_i\\}=\\dfrac{p_{ij}}{p_{i\\cdot}}$（$j=1,2,\\cdots$）。",
  "relatedLessons": [
   "gl03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s7-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维连续型随机变量",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "二维连续型随机变量",
  "kind": "概念",
  "text": "定义：如果二维随机变量$(X,Y)$的联合分布函数$F(x,y)$可表示为$F(x,y)=\\int_{-\\infty}^x\\int_{-\\infty}^yf(u,v)\\,\\textrm{d}u\\textrm{d}v$，（$(x,y)\\int R^2$），其中$f(x,y)$为非负可积函数，则称$(X,Y)$为二维连续型随机变量，$f(x,y)$为$(X,Y)$的概率密度，记为$(X,Y)\\sim f(x,y)$。\n\n二元函数$f(x,y)$是概率密度的充要条件$f(x,y)\\geqslant0$，$\\int_{-\\infty}^{+\\infty}\\int_{-\\infty}^{+\\infty}f(x,y)\\,\\textrm{d}x\\textrm{d}y$\n$=1$。\n\n改变$f(x,y)$有限个点值（仍取非负值），$f(x,y)$仍是概率密度。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s7-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#联合概率密度",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "联合概率密度",
  "kind": "概念",
  "text": "定义：设$(X,Y)$的联合分布函数为$F(x,y)$，概率密度为$f(x,y)$，则\n\n-$F(x,y)$为$(x,y)$的二元连续函数，且$F(x,y)=P\\{X\\leqslant x,Y\\leqslant y\\}=\\int_{-\\infty}^x\\int_{-\\infty}^xf(u,v)\\,\\textrm{d}u\\textrm{d}v$。\n\n- 设$G$为平面上某个区域，则$P\\{(X,Y)\\in G\\}=\\iint\\limits_Gf(x,y)\\,\\textrm{d}x\\textrm{d}y$。\n\n- 若$f(x,y)$在点$(x,y)$处连续，则$\\dfrac{\\partial^2F(x,y)}{\\partial x\\partial y}=f(x,y)$。\n\n- 若$F(x,y)$连续可导，则$(X,Y)$是连续型随机变量，则$\\dfrac{\\partial^2F(x,y)}{\\partial x\\partial y}$是其概率密度。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s7-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#边缘概率密度",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "边缘概率密度",
  "kind": "概念",
  "text": "定义：设$(X,Y)\\sim f(x,y)$，则$X$的边缘分布函数为$P\\{X\\leqslant x\\}=F_X(x)=F(-\\infty,x)=\\int_{-\\infty}^x\\left[\\int_{-\\infty}^{+\\infty}f(u,v)\\,\\textrm{d}v\\right]\\textrm{d}u$，所以$X$为连续型随机变量，其概率密度$f_X(x)=\\int_{-\\infty}^{+\\infty}f(x,y)\\,\\textrm{d}y$，称$f_X(x)$为$(X,Y)$关于$X$的边缘概率密度。同理$Y$也为连续型随机变量，关于$Y$的边缘分布函数为$P\\{Y\\leqslant y\\}=F_Y(y)=\\int_{-\\infty}^y[\\int_{-\\infty}^{+\\infty}f(x,y)\\,\\textrm{d}x]\\textrm{d}y$，其概率密度为$f_Y(y)=\\int_{-\\infty}^{+\\infty}f(x,y)\\,\\textrm{d}x$。\n\n联合概率密度决定边缘概率密度，所以相同联合概率密度的拥有同样边缘概率密度。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s7-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#条件概率密度",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "条件概率密度",
  "kind": "概念",
  "text": "定义：设$(X,Y)\\sim f(x,y)$，边缘概率密度$f_X(x)>0$，则称$f_{Y|X}(y|x)=\\dfrac{f(x,y)}{f_X(x)}$为$Y$在$X=x$条件下的条件概率密度。同理$X$在$Y=y$条件下的条件概率密度为$f_{X|Y}(x|y)=\\dfrac{f(x,y)}{f_Y(y)}$。\n\n若$f_X(x)>0$，$f_Y(y)>0$，则有概率密度乘法公式$f(x,y)=f_X(x)f_{Y|X}(y|x)=f_Y(y)f_{X|Y}(x|y)$。\n\n如果$XY$独立，则$f(x,y)=f(x)f(y)$，此时条件概率密度就等于边缘概率密度。\n\n定义：$Y$在$X=x$条件下的条件分布函数为$F_{Y|X}(y|x)=\\int_{-\\infty}^yf_{Y|X}(y|x)\\,\\textrm{d}y=\\displaystyle{\\int_{-\\infty}^y\\dfrac{f(x,y)}{f_X(x)}\\textrm{d}y}$，同理$X$在$Y=y$条件下的条件分布函数为$F_{X|Y}(x|y)=$\n$\\int_{-\\infty}^xf_{X|Y}(x|y)\\,\\textrm{d}x=\\displaystyle{\\int_{-\\infty}^x\\dfrac{f(x,y)}{f_Y(y)}}\\textrm{d}x$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s7-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维均匀分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "二维均匀分布",
  "kind": "概念",
  "text": "定义：若$(X,Y)$的概率密度为$f(x,y)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{S_D}, & (x,y)\\in D \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，$S_D$为区域$D$的面积，则称$(X,Y)$在平面有界区域$D$上服从均匀分布。\n\n二维均匀分布就是几何概型的二维情况。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s7-5",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维正态分布",
  "subject": "gailv",
  "topic": "多维随机变量及其分布",
  "title": "二维正态分布",
  "kind": "概念",
  "text": "定义：若$(X,Y)$的概率密度为：\n\n{\\fontsize{8.2pt}{10pt}$f(x,y)=\\dfrac{1}{2\\pi\\sigma_1\\sigma_2\\sqrt{1-\\rho^2}}\\exp\\left\\{-\\dfrac{1}{2(1-\\rho^2)}\\left[\\left(\\dfrac{x-\\mu_1}{\\sigma_1}\\right)^2-2\\rho\\left(\\dfrac{x-\\mu_1}{\\sigma_1}\\right)\\left(\\dfrac{y-\\mu_2}{\\sigma_2}\\right)+\\left(\\dfrac{y-\\mu_2}{\\sigma_2}\\right)^2\\right]\\right\\}$}\n\n其中$\\mu_1,\\mu_2\\in R$，$\\sigma_1,\\sigma_2>0$，$-1<\\rho<1$，则称$(X,Y)$服从参数为$\\mu_1,\\mu_2,\\sigma_1^2,\\sigma_2^2,\\rho$的二维正态分布，记为$(X,Y)\\sim N(\\mu_1,\\mu_2;\\sigma_1^2,\\sigma_2^2;\\rho)$。此时：\n\n-$X\\sim N(\\mu_1,\\sigma_1^2)$，$Y\\sim N(\\mu_2,\\sigma_2^2)$，$\\rho$为$X$与$Y$的相关系数，即$\\rho=\\dfrac{Cov(X,Y)}{\\sqrt{DX}\\sqrt{DY}}=\\dfrac{Cov(X,Y)}{\\sigma_1\\sigma_2}$。\n\n-$X,Y$的条件分布都是正态分布。\n\n-$aX\\pm bY$（$a\\neq0$或$b\\neq0$）服从正态分布$N(a\\mu_1\\pm b\\mu_2,a^2\\sigma_1^2+b^2\\sigma_2^2)$。\n\n-$XY$相互独立的充要条件是$XY$不相关，即$\\rho=0$。",
  "relatedLessons": [
   "gl03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s8-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#概念",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "概念",
  "kind": "概念",
  "text": "定义：设随机变量$X,Y$的联合分布函数为$F(x,y)$，边缘分布函数为$F_X(x)$，$F_Y(y)$，若对任意实数$x$，$y$，有$P\\{X\\leqslant x,Y\\leqslant y\\}=P\\{X\\leqslant x\\}P\\{Y\\leqslant y\\}$，即$F(x,y)=F_X(x)F_Y(y)$，则称随机变量$X$和$Y$相互独立。即对于离散型随机变量$P\\{X=x_i,Y=y_j\\}=P\\{X=x_i\\}P\\{Y=y_j\\}$。对于连续型随机变量$f(x,y)=f_X(x)f_Y(y)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s8-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#充要条件",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "充要条件",
  "kind": "总结",
  "text": "若$X,Y$独立，则\n\n- 对于二维离散型随机变量，$p_{ij}=p_{i\\cdot}\\cdot p_{\\cdot j}$。\n\n- 对于二维连续型随机变量，$f(x,y)=f_X(x)\\cdot f_Y(y)$。\n\n- 对于二维随机变量，$F(x,y)=F_X(x)\\cdot F_Y(y)$。（联合分布函数等于各自边缘函数乘积）",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s8-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#性质",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "性质",
  "kind": "定理",
  "text": "若$X,Y$独立，则$f(X)$与$g(Y)$也相互独立。\n\n若对所有$x_1,x_2,\\cdots,x_n$有$F(x_1,x_2,\\cdots,x_n)=F_{X_1}(x_1)F_{X_2}(x_2)\\cdots F_{X_n}(x_n)$，则$X_1,X_2,\\cdots,X_n$相互独立。\n\n若$X_1,X_2,\\cdots,X_n$相互独立，其中任意$k$个随机变量也相互独立。\n\n若$X_1,X_2,\\cdots,X_n$相互独立，则其各自的函数$g_1(X_1)g_2(X_2)\\cdots g_n(X_n)$也相互独立。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s8-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#独立同分布运算",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "独立同分布运算",
  "kind": "总结",
  "text": "若$XY$相互独立，则：\n\n- 若$X\\sim B(n,p)$，$Y\\sim B(m,p)$，则$X+Y\\sim B(n+m,p)$。\n\n- 若$X\\sim P(\\lambda_1)$，$Y\\sim P(\\lambda_2)$，则$X+Y\\sim P(\\lambda_1+\\lambda_2)$。\n\n- 若$X\\sim N(\\mu_1,\\sigma_1^2)$，$Y\\sim N(\\mu_2,\\sigma_2^2)$，则$X+Y\\sim N(\\mu_1+\\mu_2,\\sigma_1^2+\\sigma_2^2)$，$X-Y\\sim N(\\mu_1-\\mu_2,\\sigma_1^2+\\sigma_2^2)$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#二维随机变量函数分布",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "二维随机变量函数分布",
  "kind": "概念",
  "text": "定义：设$X,Y$为随机变量，$g(x,y)$为二元函数，则以随机变量$X,Y$作为变量的函数$U=g(X,Y)$也是随机变量，称为\\textbf{随机变量$X,Y$的函数}。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#离散型",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "离散型",
  "kind": "总结",
  "text": "对于(离散型，离散型)随机变量函数分布也是离散型。\n\n例题：将两封信投入3个信箱，设$X_1,X_2$分别表示第一个和第二个信箱投进的信的数量。\n\n(1)$(X_1,X_2)$的联合分布，边缘分布并判断其独立性。\n\n(2)在条件$X_2=1$下，$X_1$的条件分布。\n\n(3)随机变量$Y_1=X_1+X_2$和$Y_2=X_1-X_2$的分布。\n\n(1)解：因为该题目是二维离散型随机变量，所以分析：\n\n\\diagbox{$x_1$}{$x_2$} ｜ 0 ｜ 1 ｜ 2 ｜$X_1$边缘\n0 ｜ 1/9 ｜ 2/9 ｜ 1/9 ｜ 4/9\n1 ｜ 2/9 ｜ 2/9 ｜ 0 ｜ 4/9\n2 ｜ 1/9 ｜ 0 ｜ 0 ｜ 1/9\n$X_2$边缘 ｜ 4/9 ｜ 4/9 ｜ 1/9 ｜ 1\n\n从而联合分布就是表格最中心的部分，边缘分布就是两边。\n\n如$p_{11}=\\dfrac{1}{9}\\neq p_{1\\cdot}p_{\\cdot1}=\\dfrac{4}{9}\\dfrac{4}{9}=\\dfrac{16}{81}$。所以$X_1X_2$不独立。\n\n(2)解：$P\\{X_1=0|X_2=1\\}=\\dfrac{P\\{X_1=0,X_2=1\\}}{P\\{X_2=1\\}}=\\dfrac{p_{01}}{p_{\\cdot1}}=\\dfrac{2/9}{4/9}=\\dfrac{1}{2}$。\n\n$P\\{X_1=1|X_2=1\\}=\\dfrac{P\\{X_1=1,X_2=1\\}}{P\\{X_2=1\\}}=\\dfrac{p_{11}}{p_{\\cdot1}}=\\dfrac{2/9}{4/9}=\\dfrac{1}{2}$。\n\n$P\\{X_1=2|X_2=1\\}=\\dfrac{P\\{X_1=2,X_2=1\\}}{P\\{X_2=1\\}}=\\dfrac{p_{21}}{p_{\\cdot1}}=\\dfrac{0}{4/9}=0$。\n\n(3)解：根据表格，$Y_1=X_1+X_2$的可能取值为0，1，2。\n\n即$Y_1$的概率分布为$Y_1\\sim\\left(\\begin{array}{ccc}\n    0 & 1 & 2 \\\\\n    \\dfrac{1}{9} & \\dfrac{4}{9} & \\dfrac{4}{9}\n\\end{array}\\right)$。\n\n$Y_2=X_1-X_2$的可能取值为-2，-1，0，1，2.\n\n$Y_2$的概率分布为$Y_2\\sim\\left(\\begin{array}{ccccc}\n    -2 & -1 & 0 & 1 & 2 \\\\\n    \\dfrac{1}{9} & \\dfrac{2}{9} & \\dfrac{1}{3} & \\dfrac{2}{9} & \\dfrac{1}{9}\n\\end{array}\\right)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#连续型",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "连续型",
  "kind": "定理",
  "text": "对于(连续型，连续型)随机变量函数分布也是连续型。可以采用分布函数法和卷积公式。\n\n设$(X,Y)$的概率密度为$f(x,y)$，$Z=g(x,y)$，则$Z$的分布函数为$F_Z(z)=P(Z\\leqslant z)=P(g(X,Y)\\leqslant z)=\\iint\\limits_{g(x,y)\\leqslant z}f(x,y)\\,\\textrm{d}x\\textrm{d}y$，若$Z$仍然为联系型随机变量，则$Z$的概率密度为$f_Z(z)=F_Z'(z)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#和的分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "和的分布",
  "kind": "定理",
  "text": "定理：设$(X,Y)\\sim f(x,y)$，则$Z=X+Y$的概率密度为$f_Z(z)=\\int_{-\\infty}^{+\\infty}f(x,z-x)\\,\\textrm{d}x=\\int_{-\\infty}^{+\\infty}f(z-y,y)\\,\\textrm{d}y$。\n\n证明：利用定义法$F_Z(z)=P\\{Z\\leqslant z\\}=P\\{X+Y\\leqslant z\\}=\\iint\\limits_Df(x,y)\\,\\textrm{d}x\\textrm{d}y$，$D=x+y\\leqslant z$。\n\n$=\\int_{-\\infty}^{+\\infty}\\textrm{d}x\\int_{-\\infty}^{z-x}f(x,y)\\,\\textrm{d}y$。又$f_Z(z)=F_Z'(z)$，$=(\\int_{-\\infty}^{+\\infty}\\textrm{d}x\\int_{-\\infty}^{z-x}f(x,y)\\,\\textrm{d}y)'_z$。\n\n$=\\int_{-\\infty}^{+\\infty}(\\int_{-\\infty}^{z-x}f(x,y)\\,\\textrm{d}y)'_z\\textrm{d}x=\\int_{-\\infty}^{+\\infty}f(x,z-x)\\,\\textrm{d}x$",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#差的分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "差的分布",
  "kind": "定理",
  "text": "定理：设$(X,Y)\\sim f(x,y)$，则$Z=X-Y$的概率密度为$f_Z(z)=\\int_{-\\infty}^{+\\infty}f(x,x-z)\\,\\textrm{d}x=\\int_{-\\infty}^{+\\infty}f(z+y,y)\\,\\textrm{d}y$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-2-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#积的分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "积的分布",
  "kind": "定理",
  "text": "定理：设$(X,Y)\\sim f(x,y)$，则$Z=XY$的概率密度为$f_Z(z)=\\displaystyle{\\int_{-\\infty}^{+\\infty}}\\dfrac{1}{\\vert x\\vert}$\n$f\\left(x,\\dfrac{z}{x}\\right)\\,\\textrm{d}x=\\displaystyle{\\int_{-\\infty}^{+\\infty}}\\dfrac{1}{\\vert y\\vert}f\\left(\\dfrac{z}{y},y\\right)\\,\\textrm{d}y$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-2-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#商的分布",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "商的分布",
  "kind": "定理",
  "text": "定理：设$(X,Y)\\sim f(x,y)$，则$Z=\\dfrac{X}{Y}$的概率密度为$f_Z(z)=\\displaystyle{\\int_{-\\infty}^{+\\infty}}\\vert y\\vert f(yz,z)$\n$\\,\\textrm{d}y$。\n\n这里不积$y$只积$x$，因为$x=zy$，所以积分简单从而只积$x$。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-2-5",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#最值的分布",
  "subject": "gailv",
  "topic": "一元微分几何应用",
  "title": "最值的分布",
  "kind": "概念",
  "text": "需要根据最值的定义得到$XY$的概率分布。设$(X,Y)$的联合分布函数为$F(x,y)$，$XY$的分布函数分别为$F_X(x)$和$F_Y(y)$，则$Z=\\max(X,Y)$的分布函数为$F_{max}(z)=P\\{\\max(X,Y)\\leqslant z\\}=P\\{X\\leqslant z,Y\\leqslant z\\}=F(z,z)$，$Z=\\min(X,Y)$的分布函数为$F_{min}(z)=P\\{\\min(X,Y)\\leqslant z\\}=P\\{(X\\leqslant z)\\cup(Y\\leqslant z)\\}=P\\{X\\leqslant z\\}+P\\{Y\\leqslant z\\}-P\\{X\\leqslant z,Y\\leqslant z\\}=F_X(z)+F_Y(z)-F(z,z)$。\n\n如$P\\{\\min(X,Y)\\geqslant 1\\}=P\\{X\\geqslant1,Y\\geqslant1\\}=P\\{X\\geqslant1\\}P\\{Y\\geqslant1\\}$。",
  "relatedLessons": [
   "gs05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-2-6",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#卷积公式",
  "subject": "gailv",
  "topic": "多维随机变量及其分布",
  "title": "卷积公式",
  "kind": "定理",
  "text": "积谁不换谁，换完求偏导。\n\n当$XY$相互独立时，对于联合概率密度就能变成边缘概率密度的乘积，得到卷积公式定义：\n\n$f_Z(z)=\\int_{-\\infty}^{+\\infty}f_X(x)f_Y(z-x)\\,\\textrm{d}x=\\int_{-\\infty}^{+\\infty}f_X(z-y)f_Y(y)\\,\\textrm{d}y$。\n\n$f_Z(z)=\\int_{-\\infty}^{+\\infty}f_X(x)f_Y(x-z)\\,\\textrm{d}y=\\int_{-\\infty}^{+\\infty}f_X(y+z)f_Y(y)\\,\\textrm{d}x$。\n\n$f_Z(z)=\\displaystyle{\\int_{-\\infty}^{+\\infty}}\\dfrac{1}{\\vert x\\vert}f_X(x)f_Y\\left(\\dfrac{z}{x}\\right)\\,\\textrm{d}x=\\displaystyle{\\int_{-\\infty}^{+\\infty}}\\dfrac{1}{\\vert y\\vert}f_X\\left(\\dfrac{z}{y}\\right)f_Y(y)\\,\\textrm{d}y$。\n\n$f_Z(z)=\\int_{-\\infty}^{+\\infty}f_X(zy)f_Y(y)\\,\\textrm{d}y$。\n\n例题：设随机变量$X,Y$相互独立，其概率密度分别为\n\n$f_X(x)=\\left\\{\\begin{array}{ll}\n    e^{-x}, & x>0 \\\\\n    0, & \\text{其他} \n\\end{array}\\right.$，$f_Y(y)=\\left\\{\\begin{array}{ll}\n    2y, & 0<y<1 \\\\\n    0, & \\text{其他} \n\\end{array}\\right.$，\n\n(1)求$(X,Y)$概率密度。\n\n(2)求$Z=X+Y$的概率密度。\n\n(1)解：因为$X,Y$相互独立，所以$f(X,Y)=f_X(x)\\cdot f_Y(y)$。\n\n$\\therefore f(X,Y)=\\left\\{\\begin{array}{ll}\n    2e^{-x}y, & x>0\\cap0<y<1 \\\\\n    0, & \\text{其他} \n\\end{array}\\right.$。\n\n(2)解：\n\n第一种方法是分布函数法，即使用定义来解决随机变量函数分布。\n\n$F_Z(z)=P\\{Z\\leqslant z\\}=P\\{X+Y\\leqslant z\\}$。$XY$的联合分布图形是一个高为1长无穷的长方形。利用直线$x=x_0$与定义区间与$y\\leqslant -x+z$对$z$进行范围讨论。\n\n若$z<0$，$X+Y\\leqslant z$不可能，即$D$与$y\\leqslant-x+z$交集为空，所以$F_Z(z)=0$。\n\n若$0\\leqslant z<1$，则$y\\leqslant -x+z$与区间相交于$(0,z)$和$(z,0)$，利用直线$x=x_0$对区间求积分$xy$上下限，$F_Z(z)=\\int_0^z\\textrm{d}x\\int_0^{z-x}2e^{-x}y\\,\\textrm{d}y=z^2-2z-2e^{-z}+2$。\n\n若$z>1$，则$y\\leqslant -x+z$与区间交集是一个梯形，若先积$y$后积$x$，积分区间要分为两个部分来计算，所以改变积分顺序，先积$y$再积$x$，用$y=y_0$来计算积分上下限得到$F_Z(z)=\\int_0^1\\textrm{d}y\\int_0^{z-y}2e^{-x}y\\,\\textrm{d}x=1-2e^{-z}$。\n\n$\\therefore f_Z(z)=F_Z'(z)=\\left\\{\\begin{array}{ll}\n    2z+2e^{-z}-2, & 0<z<1 \\\\\n    2e^{-z}, & z>1 \\\\\n    0, & \\textbf{其他}\n\\end{array}\\right.$。（等号在哪里无所谓）\n\n第二种方法是卷积公式法。$f_Z(z)=\\int_{-\\infty}^{+\\infty}f(x,z-x)\\,\\textrm{d}x=\\int_{-\\infty}^{+\\infty}f_X(x)f_Y(z-x)\\,\\textrm{d}x$，现在已知$f_X(x)$，所以只用求$f_Y(z-x)$。\n\n$\\therefore f_Y(z-x)=\\left\\{\\begin{array}{ll}\n    2(z-x), & 0<z-x<1 \\\\\n    0, & \\textbf{其他}\n\\end{array}\\right.$。\n\n$f_X(x)f_Y(z-x)=\\left\\{\\begin{array}{ll}\n    2e^{-x}(z-x), & 0<x<z<x+1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，所得的区域是梯形。\n\n当$z<0$，则$z=z_0$与图形区间无交集，所以$f_Z(z)=0$。\n\n当$0<z<1$时，$f_Z(z)=\\int_0^z2e^{-x}(z-x)\\,\\textrm{d}x=2z+2e^{-z}-2$。\n\n当$z>1$时，$f_Z(z)=\\int_{z-1}^z2e^{-x}(z-x)\\,\\textrm{d}x=2e^{-z}$。\n\n例题：设二维随机变量$(X,Y)$在矩形区域$D=\\{(x,y)|0\\leqslant x\\leqslant 2,0\\leqslant y\\leqslant 1\\}$上服从均匀分布，求边长为$X$和$Y$的矩形面积$Z$的概率密度。\n\n解：$(X,Y)$在矩形区域$D$服从均匀分布，$\\therefore f(x,y)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{2}, & (x,y)\\in D \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。\n\n根据区间：$0\\leqslant x\\leqslant2$，$0\\leqslant\\dfrac{z}{x}=y\\leqslant1$，$0\\leqslant z\\leqslant x\\leqslant2$，所以区域就是底2高2的下三角。\n\n又$Z=XY\\sim f_Z(z)=\\displaystyle{\\int_{-\\infty}^{+\\infty}\\dfrac{1}{\\vert x\\vert}f\\left(x,\\dfrac{z}{x}\\right)\\,\\textrm{d}x}$，且$f\\left(x,\\dfrac{z}{x}\\right)=\\dfrac{1}{2}$。\n\n当$0<z<2$时，$f_Z(z)=\\displaystyle{\\int_z^2}\\dfrac{1}{x}\\dfrac{1}{2}\\,\\textrm{d}x=\\dfrac{1}{2}(\\ln2-\\ln z)$。\n\n即$f_Z(z)=\\left\\{\\begin{array}{ll}\n    \\dfrac{1}{2}(\\ln2-\\ln z), & 0<z<2 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$。",
  "relatedLessons": [
   "gl03"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-2-random-variables-and-distribution-random-variables-and-distribution-s9-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/2-random-variables-and-distribution/random-variables-and-distribution.tex#混合型",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "混合型",
  "kind": "定理",
  "text": "对于(离散型，连续型)随机变量函数分布是连续型。可以采用全概率公式。\n\n即使用全集分解思想解决，若$A$是离散型随机变量，$B$是连续型随机变量，则$P(B)=P(B\\Omega)=P(BA_1\\cup BA_2\\cup\\cdots)=P(BA_1)+P(BA_2)\\cdots=P(A_1)P(B|A_1)+P(A_2)P(B|A_2)+\\cdots$。这就是全概率公式。\n\n设$X$的分布律为$P\\{X=x_i\\}=P_i$，$Y$为连续型随机变量，$Z=g(X,Y)$，则$Z$的分布函数为$F_Z(z)=P\\{Z\\leqslant z\\}=P\\{g(X,Y)\\leqslant z\\}=\\sum\\limits_iP\\{X=x_i\\}P\\{g(X,Y)\\leqslant z|X=x_i\\}=\\sum\\limits_iP_iP\\{g(x_i,Y)\\leqslant z\\}$。\n\n例题：设随机变量$X$与$Y$相互独立，其中$X$概率分布为$\\left(\\begin{array}{cc}\n    1 & 2 \\\\\n    0.3 & 0.7\n\\end{array}\\right)$，而$Y$的概率密度为$f(y)$，求随机变量$U=X+Y$的概率密度$g(u)$。\n\n解：$G(u)=P\\{U\\leqslant u\\}=P\\{X+Y\\leqslant u\\}$。\n\n$=P\\{X+Y\\leqslant u,\\Omega\\}=P\\{X+Y\\leqslant u,\\{X=1\\}\\cup\\{X=2\\}\\}=P\\{(X+Y\\leqslant u,X=1)\\cup(X+Y\\leqslant u,X=2)\\}=P\\{X+Y\\leqslant u,X=1\\}+P\\{X+Y\\leqslant u,X=2\\}=P(X=1)P\\{X+Y\\leqslant u|X=1\\}+P(X=2)P\\{X+Y\\leqslant u|X=2\\}=0.3P\\{Y\\leqslant u-1|X=1\\}+0.7P\\{Y\\leqslant u-2|X=2\\}$，又$XY$相互独立，所以$X$的条件不影响$Y$的概率，$=P\\{Y\\leqslant u-1\\}+P\\{Y\\leqslant u-2\\}=0.3F_Y(u-1)+0.7F_Y(u-2)$。\n\n$g(u)=G'(u)=0.3f_Y(u-1)\\cdot1+0.7f_Y(u-2)\\cdot1$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#随机变量数字特征",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "随机变量数字特征",
  "kind": "总结",
  "text": "有时候研究随机变量，其是没有具体的概率分布的，而对于这种类型我们只用研究其数学特征就可以了。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#数学期望",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "数学期望",
  "kind": "概念",
  "text": "#### 概念\n\n设$X$是随机变量，$Y$是$X$的函数，$Y=g(X)$。\n\n定义：若$X$是离散型随机变量，其分布列为$p_i=P\\{X=x_i\\}$（$i=1,2,\\cdots$），若级数$\\sum\\limits_{i=1}^\\infty x_ip_i$绝对收敛，则称随机变量$X$的数学期望存在，并将级数和$\\sum\\limits_{i=1}^\\infty x_ip_i$称为随机变量$X$的数学期望，记为$E(X)$或$EX$，即$EX=\\sum\\limits_{i=1}^\\infty x_ip_i$，否则$X$数学期望不存在。（数学期望实际上是一种加权的合理平均值）\n\n若级数$\\sum\\limits_{i=1}^\\infty g(x_i)p_i$也绝对收敛，则称$Y=g(X)$的数学期望$E[g(X)]$存在，且$E[g(X)]=\\sum\\limits_{i=1}^\\infty g(x_i)p_i$，否则$g(X)$的数学期望不存在。\n\n定义：若$X$是连续型随机变量，其概率密度为$f(x)$。若积分$\\int_{-\\infty}^{+\\infty}xf(x)\\,\\textrm{d}x$绝对收敛，则称$X$的数学期望存在，且$EX=\\int_{-\\infty}^{+\\infty}xf(x)\\,\\textrm{d}x$，否则$X$的数学期望不存在。\n\n若积分$\\int_{-\\infty}^{+\\infty}g(x)f(x)\\,\\textrm{d}x$绝对收敛，则称$g(X)$的数学期望存在，$E[g(X)]=\\int_{-\\infty}^{+\\infty}g(x)f(x)\\,\\textrm{d}x$，否则$g(X)$的数学期望不存在。\n\n#### 性质\n\n- 对任意常数$a_i$和随机变量$X_i$（$i=1,2,\\cdots,n$）有$E\\left(\\sum\\limits_{i=1}^na_iX_i\\right)=\\sum\\limits_{i=1}^na_iEX_i$，其中$Ec=c$，$E(aX+c)=aEX+c$，$E(X\\pm Y)=EX\\pm EY$。\n\n- 若$XY$相互独立，则$E(XY)=EX\\cdot EY$，$E[g_1(X),g_2(Y)]=E[g_1(X)]\\cdot E[g_2(Y)]$，一般若$X_1,X_2,\\cdots,X_n$相互独立，则$E\\left(\\prod\\limits_{i=1}^nX_i\\right)=\\prod\\limits_{i=1}^nEX_i$，$E\\left[\\prod\\limits_{i=1}^ng_i(X_i)\\right]=\\prod\\limits_{i=1}^nE[g_i(X_i)]$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#方差标准差",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "方差标准差",
  "kind": "概念",
  "text": "#### 概念\n\n定义：设$X$是随机变量，若$E[(X-EX)^2]$存在，则称$E[(X-EX)^2]$为$X$的方差，记为$D(X)$或$DX$，即$DX=E[(X-EX)^2]=E(X^2)-(EX)^2=EX^2-E^2X$。称$\\sqrt{DX}$为$X$的标准差或均方差，记为$\\sigma(X)$，称随机变量$X^*=\\dfrac{X-EX}{\\sqrt{DX}}$为$X$的标准化随机变量，此时$EX^*=0$，$DX^*=1$。\n\n当$X$为离散型随机变量时$D(X)=\\sum\\limits_{i=1}^\\infty[x_i-E(X)]^2p_i$，当$X$为连续型随机变量时$D(X)=\\int_{-\\infty}^{+\\infty}[x-E(X)]^2f(x)\\,\\textrm{d}x$。\n\n#### 性质\n\n-$DX\\geqslant0$，$E(X^2)=DX+(EX)^2\\geqslant(EX)^2$。\n\n-$Dc=0$。\n\n-$D(aX+b)=a^2DX$。\n\n-$D(X\\pm Y)=DX+DY\\pm2Cov(X,Y)=DX+DY\\pm2E[(X-EX)(Y-EY)]$。\n\n- 若$XY$相互独立，则$D(aX\\pm bY)=a^2DX+b^2DY$，一般若$X_1,X_2,\\cdots,X_n$相互独立，$g_i(x)$为关于$x$的连续函数，则$D\\left(\\sum\\limits_{i=1}^na_iX_i\\right)=\\sum\\limits_{i=1}^na_i^2DX_i$，$D\\left[\\sum\\limits_{i=1}^ng_i(X_i)\\right]=\\sum\\limits_{i=1}^nD[g_i(X_i)]$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s1-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#切比雪夫不等式",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "切比雪夫不等式",
  "kind": "概念",
  "text": "定义：若随机变量$X$的方差$DX$存在，则对任意$\\epsilon>0$，有$P\\{\\vert X-EX\\vert\\geqslant\\epsilon\\}\\leqslant\\dfrac{DX}{\\epsilon^2}$或$P\\{\\vert X-EX\\vert<\\epsilon\\}\\geqslant1-\\dfrac{DX}{\\epsilon^2}$。\n\n$P\\{\\vert X-EX\\vert\\geqslant\\epsilon\\}$即代表变量与期望的差距大于某个值的概率，$DX$就是方差，$DX$越小证明波动越小，波动在$\\epsilon$外的概率就越小，反之同理，而$\\epsilon$越小，则$\\dfrac{DX}{\\epsilon^2}$越大，则代表$X$靠近期望$EX$的概率越大，反之同理。\n\n证明：若$X$是连续型随机变量，令$\\vert X-EX\\vert\\geqslant\\epsilon=D$，则$P\\{\\vert X-EX\\vert\\geqslant\\epsilon\\}=\\int\\limits_Df(x)\\,\\textrm{d}x$，又该区间上$\\vert X-EX\\vert\\geqslant\\epsilon$，$\\therefore\\dfrac{(X-EX)^2}{\\epsilon^2}\\geqslant 1$。\n\n$\\displaystyle{\\int\\limits_Df(x)\\,\\textrm{d}x\\leqslant\\int\\limits_D\\dfrac{(X-EX)^2}{\\epsilon^2}f(x)\\,\\textrm{d}x\\leqslant\\int_{-\\infty}^{+\\infty}\\dfrac{(X-EX)^2}{\\epsilon^2}f(x)\\,\\textrm{d}x}$\n\n$=\\displaystyle{\\dfrac{1}{\\epsilon^2}\\int_{-\\infty}^{+\\infty}(X-EX)^2f(x)\\,\\textrm{d}x}=\\dfrac{DX}{\\epsilon^2}$。\n\n可以用于估算随机变量在某范围中取值的概率，也可以证明某些收敛性问题（如数学统计章节中的一致性）。\n\n例题：设$XY$为随机变量，数学期望都是2，方差分别为1和4，相关系数为0.5，尝试估计估计概率$P\\{\\vert X-Y\\vert\\geqslant6\\}$。\n\n解：令$Z=X-Y$，$\\therefore EZ=E(X-Y)=EX-EY=2-2=0$，所以$P\\{\\vert X-Y\\vert\\geqslant6\\}=P\\{\\vert X-Y-0\\vert\\geqslant6\\}=P\\{\\vert Z-EZ\\vert\\geqslant6\\}\\leqslant\\dfrac{DZ}{6^2}=\\dfrac{3}{36}=\\dfrac{1}{2}$。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s1-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#常用分布数字特征",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "常用分布数字特征",
  "kind": "总结",
  "text": "<{}|m{220pt}<{}|c|c|}\n分布 ｜ 分布列$p_i$或概率密度$f(x)$ ｜ 期望 ｜ 方差\n0-1分布$B(1,p)$ ｜$P\\{X=k\\}=p^k(1-p)^{1-k}$，$k=0,1$ ｜$p$ ｜$p(1-p)$\n二项分布$B(n,p)$ ｜$P\\{X=k\\}=C_n^kp^k(1-p)^{n-k}$，$k=0,\\cdots,n$ ｜$np$ ｜$np(1-p)$\n泊松分布$P(\\lambda)$ ｜$P\\{X=k\\}=\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$，$k=0,\\cdots$ ｜$\\lambda$ ｜$\\lambda$\n几何分布$G(p)$ ｜$P\\{X=k\\}=(1-p)^{k-1}$，$p,k=1,\\cdots$ ｜$\\dfrac{1}{p}$ ｜$\\dfrac{1-p}{p^2}$\n正态分布$N(\\mu,\\sigma^2)$ ｜$f(x)=\\dfrac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$，$x\\in R$ ｜$\\mu$ ｜$\\sigma^2$\n均匀分布$U(a,b)$ ｜$f(x)=\\dfrac{1}{b-a}$，$a<x<b$ ｜$\\dfrac{a+b}{2}$ ｜$\\dfrac{(b-a)^2}{12}$\n指数分布$E(\\lambda)$ ｜$f(x)=\\lambda e^{-\\lambda x}$，$x>0$ ｜$\\dfrac{1}{\\lambda}$ ｜$\\dfrac{1}{\\lambda^2}$",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#数学期望",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "数学期望",
  "kind": "概念",
  "text": "定义：若$XY$为随机变量，$g(X,Y)$为$XY$的函数，如果$(X,Y)$为离散型随机变量，其联合分布为$p_{ij}=P\\{X=x_i,Y=y_i\\}$（$i,j=1,2,\\cdots$），若级数$\\sum\\limits_i\\sum\\limits_jg(x_i,y_j)p_{ij}$绝对收敛，则$E[g(X,Y)]=\\sum\\limits_i\\sum\\limits_jg(x_i,y_j)p_{ij}$；如果$(X,Y)$为连续型随机变量，其概率密度为$f(x,y)$，若积分$\\int_{-\\infty}^{+\\infty}\\int_{-\\infty}^{+\\infty}g(x,y)f(x,y)\\,\\textrm{d}x\\textrm{d}y$绝对收敛，则定义$E[g(X,Y)]=\\int_{-\\infty}^{+\\infty}\\int_{-\\infty}^{+\\infty}g(x,y)f(x,y)\\,\\textrm{d}x\\textrm{d}y$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#协方差相关系数",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "协方差相关系数",
  "kind": "概念",
  "text": "#### 概念\n\n定义：若随机变量$XY$的方差存在且$DX>0$，$DY>0$，则称$E[(X-EX)(Y-EY)]$为随机变量$X$与$Y$的协方差，记为$Cov(X,Y)$，即$Cov(X,Y)=E[(X-EX)(Y-EY)]=E(XY-XEY-YEX+EXEY)=E(XY)-EX\\cdot EY$。\n\n其中$E(XY)=\\left\\{\\begin{array}{l}\n    \\sum\\limits_i\\sum\\limits_jx_iy_jP\\{X=x_i,Y=y_j\\} \\\\\n    \\int_{-\\infty}^{+\\infty}\\int_{-\\infty}^{+\\infty}xyf(x,y)\\,\\textrm{d}x\\textrm{d}y\n\\end{array}\\right.$。\n\n从定义来看，方差$DX$就是自己的协方差$Cov(X,X)$。\n\n协方差也可以标准化，已知$X^*=\\dfrac{X-EX}{\\sqrt{DX}}$，$Y^*=\\dfrac{Y-EY}{\\sqrt{DY}}$，则$Cov(X^*,Y^*)\\\\=Cov(\\dfrac{X-EX}{\\sqrt{DX}},\\dfrac{Y-EY}{\\sqrt{DY}})=\\dfrac{Cov(X-EX,Y-EY)}{\\sqrt{DX}\\sqrt{DY}}\\\\=\\dfrac{Cov(X,Y)-Cov(X,EY)-Cov(EX,Y)+Cov(EX,EY)}{\\sqrt{DX}\\sqrt{DY}}=\\dfrac{Cov(X,Y)}{\\sqrt{DXDY}}$。\n\n定义：$\\rho_{XY}=\\dfrac{Cov(X,Y)}{\\sqrt{DX}\\sqrt{DY}}$为随机变量$XY$的相关系数。若$\\rho_{XY}=0$，则$XY$不相干，否则相关。\n\n相关系数是描述随机变量$XY$之间的线性关系，绝对值越靠近1则越线性相关。相关系数为0不代表没有其之间没有关系，也可能存在非线性关系。\n\n#### 性质\n\n- 对称性：$Cov(X,Y)=Cov(Y,X)$，$\\rho_{XY}=\\rho_{YX}$，$Cov(X,X)=DX$，$\\rho_{XX}=1$。\n\n- 线性性：$Cov(X,c)=0$，$Cov(aX+b,Y)=aCov(X,Y)$，$Cov(X_1+X_2,Y)=Cov(X_1,Y)+Cov(X_2,Y)$。一般$Cov\\left(\\sum\\limits_{i=1}^na_iX_i,Y\\right)=\\sum\\limits_{i=1}^nCov(X_i,Y)$。\n\n- 若$XY$相互独立，则$Cov(X,Y)=0$。$D(\\sum X)=\\sum DX$。\n\n-$D(X\\pm Y)=DX+DY\\pm2Cov(X,Y)$。\n\n- 相关系数有界性：$\\vert\\rho_{XY}\\vert\\leqslant1$。\n\n- 线性关系下的相关系数：若$Y=aX+b$，则$\\rho_{XY}=\\left\\{\\begin{array}{ll}\n        1, & a>0 \\\\\n        -1, & a<0\n    \\end{array}\\right.$。\n\n例题：设随机变量$XY$的概率分布分别为：\n\n<{}|m{40pt}<{}m{40pt}<{}}\n$X$ ｜ 0 ｜ 1\n$P$ ｜ 1/3 ｜ 2/3\n\n<{}|m{40pt}<{}m{40pt}<{}m{40pt}<{}}\n$Y$ ｜ -1 ｜ 0 ｜ 1\n$P$ ｜ 1/3 ｜ 1/3 ｜ 1/3\n\n且$P\\{X^2=Y^2\\}=1$。\n\n(1)求随机变量$(X,Y)$的概率分布。\n\n(2)求$Z=XY$的概率分布。\n\n(3)求$XY$的相关系数$\\rho_{XY}$。\n\n(1)解：根据已知的题目条件可以知道对应的边缘概率分布：\n\n\\diagbox{$X$}{$Y$} ｜ -1 ｜ 0 ｜ 1 ｜$X$边缘\n0 ｜ ｜ ｜ ｜ 1/3\n1 ｜ ｜ ｜ ｜ 2/3\n$Y$边缘 ｜ 1/3 ｜ 1/3 ｜ 1/3 ｜ 1\n\n又$P\\{X^2=Y^2\\}=1$，所以$P\\{X^2\\neq Y^2\\}=0$，所以$X=\\pm Y$，解得：\n\n\\diagbox{$X$}{$Y$} ｜ -1 ｜ 0 ｜ 1 ｜$X$边缘\n0 ｜ 0 ｜ 1/3 ｜ 0 ｜ 1/3\n1 ｜ 1/3 ｜ 0 ｜ 1/3 ｜ 2/3\n$Y$边缘 ｜ 1/3 ｜ 1/3 ｜ 1/3 ｜ 1\n\n(2)解：$Z=XY$的可能取值为-1，0，1。所以根据表格：\n\n$P\\{Z=-1\\}=P\\{X=1,Y=-1\\}=\\dfrac{1}{3}$。\n\n$P\\{Z=1\\}=P\\{X=1,Y=1\\}=\\dfrac{1}{3}$。\n\n$P\\{Z=0\\}=1-P\\{Z=1\\}-P\\{Z=-1\\}=\\dfrac{1}{3}$。\n\n(3)解：$\\rho=\\dfrac{Cov(X,Y)}{\\sqrt{DX}\\sqrt{DY}}=\\dfrac{EXY-EXEY}{\\sqrt{DX}\\sqrt{DY}}=0$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s3-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#独立性与相关性",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "独立性与相关性",
  "kind": "总结",
  "text": "相关性是线性相关性。\n\n- 独立则一定不相关，但是不相关不一定独立。\n\n- 如果相关则一定不独立。\n\n- 如果$(X,Y)$服从二维正态分布，则$XY$独立与$XY$不相关是充要条件。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s3-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#分布判断独立性",
  "subject": "gailv",
  "topic": "随机事件与概率",
  "title": "分布判断独立性",
  "kind": "总结",
  "text": "都是通过分布情况判断独立性：\n\n-$F(x,y)=F_X(x)\\cdot F_Y(y)$。\n\n-$f(x,y)=f_X(x)\\cdot f_Y(y)$。\n\n-$P\\{X=x_i,Y=y_j\\}=P\\{X=x_i\\}\\cdot P\\{Y=y_j\\}$。",
  "relatedLessons": [
   "gl01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#数字特征判断相关性",
  "subject": "gailv",
  "topic": "随机变量的数字特征",
  "title": "数字特征判断相关性",
  "kind": "总结",
  "text": "通过相关系数$\\rho_{XY}$来判断是否存在线性相关性。\n\n$\\rho_{XY}=0\\Leftrightarrow Cov(X,Y)=0\\Leftrightarrow E(XY)=EX\\cdot EY\\Leftrightarrow D(X\\pm Y)=DX+DY$。",
  "relatedLessons": [
   "gl04"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-3-digital-features-digital-features-s3-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/3-digital-features/digital-features.tex#基本判别流程",
  "subject": "gailv",
  "topic": "一维随机变量及其分布",
  "title": "基本判别流程",
  "kind": "定理",
  "text": "当讨论随机变量$XY$的相关性独立性时：\n\n- 计算$Cov(X,Y)=E(XY)-EXEY$判断是否为0。\n\n- 当$Cov(X,Y)\\neq0$时则$XY$相关不独立。\n\n- 当$Cov(X,Y)=0$时则$XY$不相关。\n\n- 若$P(XY)=P(X)P(Y)$则$XY$不相关但独立，否则不相关不独立。\n\n例题：设随机变量$X$的概率密度为$f(x)=\\dfrac{1}{2}e^{-\\vert x\\vert}$，$x\\in(-\\infty,+\\infty)$。证明$X$与$\\vert X\\vert$不相关且不独立。\n\n解：$Cov(X,Y)=EXY-EXEY=EX\\vert X\\vert-EXE\\vert X\\vert$。\n\n其中$EX=\\displaystyle{\\int_{-\\infty}^{+\\infty}}x\\cdot\\dfrac{1}{2}e^{-\\vert x\\vert}\\,\\textrm{d}x=0$，$EXY=\\displaystyle{\\int_{-\\infty}^{+\\infty}}x\\cdot\\dfrac{1}{2}e^{-\\vert x\\vert}\\vert x\\vert\\,\\textrm{d}x=0$。\n\n$\\therefore\\rho_{XY}=0$，从而$XY$不相关。\n\n令$X\\leqslant a$，则$P\\{X\\leqslant a\\}$。而$P\\{\\vert X\\vert\\leqslant a\\}=P\\{-a\\leqslant X\\leqslant a\\}<P\\{X\\leqslant a\\}$。\n\n$\\therefore P\\{X\\leqslant a,\\vert X\\vert\\leqslant a\\}=P\\{\\vert X\\vert\\leqslant a\\}$，又$P\\{X\\leqslant a\\}<1$。\n\n$\\therefore P\\{X\\leqslant a,\\vert X\\vert\\leqslant a\\}\\neq P\\{\\vert X\\vert\\leqslant a\\}\\cdot P\\{\\vert X\\vert\\leqslant a\\}$，所以不独立。",
  "relatedLessons": [
   "gl02"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#大数定律与中心极限定理",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "大数定律与中心极限定理",
  "kind": "定理",
  "text": "这些定理与定律是针对极大量数据的概率分析，是概率论向数理统计的过渡。\n\n大数定律与中心定理成立的首要条件都是独立同分布且数学期望存在。\n\n大数定律用于表示实验均值逼近期望，中心极限定理表示独立同分布的变量逼近正态分布。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#依概率收敛",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "依概率收敛",
  "kind": "概念",
  "text": "定义：设随机变量$X$与随机变量序列$\\{X_n\\}$（$n=1,2,3\\cdots$），如果对任意的$\\epsilon>0$，有$\\lim\\limits_{n\\to\\infty}P\\{\\vert X_n-X\\vert\\geqslant\\epsilon\\}=0$或$\\lim\\limits_{n\\to\\infty}P\\{\\vert X_n-X\\vert<\\epsilon\\}=1$，则称随机变量序列$\\{X_n\\}$\\textbf{依概率收敛于随机变量$X$}，记为$\\lim\\limits_{n\\to\\infty}X_n=X(P)$或$X_n\\overset{P}{\\rightarrow}X(n\\to\\infty)$。\n\n即在某项后面的全部项全部落在区域内的概率为1。（不是严格的极限，可能存在超过范围的点，但是不影响后面的点在区域内）\n\n通常使用伯努利试验类似的频率来估计概率，从而来极限逼近真实概率，但是进行试验时很可能不凑巧出现了概率很小的情况从而破坏了试验的概率随着频率变大而逼近真实概率，所以这种就是依概率收敛。比如抛硬币试验概率：$\\dfrac{6}{10}$，$\\dfrac{16}{20}$，$\\dfrac{21}{40}$，其中$\\dfrac{15}{20}$就是一个特殊的情况，但是不影响后面的收敛。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s2-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#大数定律",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "大数定律",
  "kind": "总结",
  "text": "在满足一定的条件下，大数定律均为$\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\overset{P}{\\rightarrow}E\\left(\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\right)$。\n\n所以大数定律一般是考定律成立条件与结论正确性。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#切比雪夫大数定律",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "切比雪夫大数定律",
  "kind": "概念",
  "text": "定义：假设随机变量序列$\\{X_n\\}$（$n=1,2,3\\cdots$）是相互独立的（不一定同分布），若期望$EX$存在，且方差$DX_i$（$i\\geqslant1$）存在且一致有上界，即存在常数$C$，使得$DX_i\\leqslant C$对一切$i\\geqslant1$均成立，则$\\forall\\epsilon>0$，$\\lim\\limits_{n\\to\\infty}P\\left\\{\\left\\vert\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i-\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i\\right\\vert<\\epsilon\\right\\}=1$，$\\{X_n\\}$服从大数定律：$\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\overset{P}{\\longrightarrow}\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i$。即$\\overline{X}\\overset{P}{\\rightarrow}E\\overline{X}$。\n\n即均值收敛于期望的均值。\n\n证明：$E\\left(\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\right)=\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i$，又$X_i$不相关，则$Cov(X_i,X_j)=0$。\n\n则$D\\left(\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\right)=\\dfrac{1}{n^2}\\sum\\limits_{i=1}^nDX_i\\leqslant\\dfrac{nC}{n^2}=\\dfrac{C}{n}$。\n\n又根据切比雪夫不等式$1\\geqslant\\lim\\limits_{n\\to\\infty}P\\left\\{\\left\\vert\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i-\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i\\right\\vert<\\epsilon\\right\\}\\geqslant1-\\dfrac{D\\left(\\dfrac{1}{n}\\sum_{i=1}^nX_i\\right)}{\\epsilon^2}\\geqslant1-\\dfrac{C}{n\\epsilon^2}\\xrightarrow{n\\to+\\infty}1$。\n\n根据夹逼定理$\\lim\\limits_{n\\to\\infty}P\\left\\{\\left\\vert\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i-\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i\\right\\vert<\\epsilon\\right\\}$=1。\n\n例题：设$X_1,X_2,\\cdots,X_n,\\cdots$为相互独立的随机变量序列，$X_n$服从参数为$n$的指数分布（$n\\leqslant1$），则下列随机变量序列中不服从切比雪夫大数定律的是()。\n\n$A.X_1,\\dfrac{1}{2}X_2,\\cdots,\\dfrac{1}{n}X_n,\\cdots$$B.X_1,X_2,\\cdots,X_n,\\cdots$\n\n$C.X_1,2X_2,\\cdots,nX_n,\\cdots$$D.X_1,2^2X_2,\\cdots,n^2X_n,\\cdots$\n\n解：切比雪夫大数定律要求有两点，一个是随机变量序列有解，一个是方差存在上界，即$DX_i\\leqslant C$。因为题目说明相互独立，所以只用考虑方差上界。\n\n$\\because X_n\\sim E(n)$，$\\therefore EX_n=\\dfrac{1}{n}$，$DX_n=\\dfrac{1}{n^2}$。\n\n对于$A$，$D\\left(\\dfrac{1}{n}X_n\\right)=\\dfrac{1}{n^2}DX_n=\\dfrac{1}{n^4}\\leqslant1$。对于$B$，$DX_n=\\dfrac{1}{n^2}\\leqslant1$。\n\n对于$C$，$D(nX_n)=n^2\\dfrac{1}{n^2}=1$，对于$D$，$D(n^2X_n)=n^4\\dfrac{1}{n^2}=n^2\\overset{n\\to\\infty}{\\longrightarrow}\\infty$。\n\n所以选择$D$。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#伯努利大数定律",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "伯努利大数定律",
  "kind": "概念",
  "text": "定义：假设$\\mu_n$是$n$重伯努利试验中事件$A$发生的次数，在每次试验中事件$A$发生的概率为$p$（$0<p<1$），则$\\dfrac{\\mu_n}{n}\\overset{P}{\\longrightarrow}p$，即对任意的$\\epsilon>0$，有$\\lim\\limits_{n\\to\\infty}P\\left\\{\\left\\vert\\dfrac{\\mu_n}{n}-p\\right\\vert<\\epsilon\\right\\}=\\lim\\limits_{n\\to\\infty}P\\left\\{\\left\\vert\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i-\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i\\right\\vert<\\epsilon\\right\\}=\\lim\\limits_{n\\to\\infty}P\\\\\\left\\{\\left\\vert\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i-\\dfrac{1}{n}\\sum\\limits_{i=1}^nEX_i\\right\\vert<\\epsilon\\right\\}=1$。\n\n可以看作通过$n$重伯努利试验，一个事件的试验概率$\\dfrac{\\mu_n}{n}$会逼近一个固定的事件概率$p$。\n\n证明：$n$重伯努利试验，则$\\mu_n\\sim B(n,p)$，$E_{\\mu_n}=np$，$D_{\\mu_n}=np(1-p)$。\n\n则$E\\left(\\dfrac{\\mu_n}{n}\\right)=p$，$D\\left(\\dfrac{\\mu_n}{n}\\right)=\\dfrac{p(1-p)}{n}$。\n\n切比雪夫不等式：$\\forall\\epsilon>0$，$1\\geqslant P\\{\\vert\\dfrac{\\mu_n}{n}-p\\vert<\\epsilon\\}\\geqslant1-\\dfrac{p(1-p)}{n\\epsilon^2}\\xrightarrow{n\\to+\\infty}1$。\n\n根据夹逼定理$\\lim\\limits_{n\\to\\infty}P\\left\\{\\left\\vert\\dfrac{\\mu_n}{n}-p\\right\\vert<\\epsilon\\right\\}=1$。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s2-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#辛钦大数定律",
  "subject": "gailv",
  "topic": "大数定律与中心极限定理",
  "title": "辛钦大数定律",
  "kind": "概念",
  "text": "辛钦大数定律类似切比雪夫大数定律的特殊化，将序列约束为同分布。（但是对方差没有要求，所以不能按切比雪夫定律的证明来做）\n\n定义：假设随机变量序列$\\{X_n\\}$（$n=1,2,3\\cdots$）是相互独立的同分布的，如果$EX_i=\\mu$（$i=1,2,\\cdots$）存在，则$\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\overset{P}{\\longrightarrow}\\mu$，即对任意的$\\epsilon>0$有$\\lim\\limits_{n\\to\\infty}P\\left\\{\\left\\vert\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i-\\mu\\right\\vert<\\epsilon\\right\\}=1$。也可以转换为即$\\overline{X}\\overset{P}{\\rightarrow}E\\overline{X}$。\n\n即能用平均数可以来逼近期望。\n\n例题：假设随机变量序列$X_1,X_2,\\cdots,X_n,\\cdots$相互独立，根据辛钦大数定律，当$n\\to\\infty$时，$\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i$依概率收敛于数学期望，只要$\\{X_n\\}$()。\n\n$A.$有相同的数学期望$B.$服从同一离散型分布\n\n$C.$服从同一泊松分布$D.$服从同一连续型分布\n\n解：辛钦大数定律要求三点：随机变量序列独立、拥有同样分布、期望存在。\n\n已知题目表示变量相互独立，所以只用证明有同样分布、有期望就可以。\n\n对于$BD$而言满足是有分布的，但是此时不一定有期望，所以$BD$不行。\n\n对于$A$有相同期望，只要求有期望就可以了，相同期望不一定同一分布。\n\n对于$D$服从同一分布，且泊松分布期望存在。\n\n例题：将一枚骰子重复投掷$n$次，当$n\\to\\infty$时，$n$次掷出的点数的算术平均值$\\overline{X}$依概率收敛于何值？\n\n解：根据题目，投掷是独立事件，发生概率是离散的同一分布，且期望存在$=\\dfrac{1}{6}\\sum\\limits_{i=1}^6i=3.5$，所以使用辛钦大数定律。\n\n所以根据辛钦大数定律$\\overline{X_n}\\overset{P}{\\rightarrow}E\\overline{X_n}=EX_i=3.5$。",
  "relatedLessons": [
   "gl05"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s3-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#中心极限定理",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "中心极限定理",
  "kind": "定理",
  "text": "中心极限定理总结来看均为：若$X_i$独立同分布于某一分布$F$，则$\\sum\\limits_{i=1}^nX_i\\overset{n\\to\\infty}{\\sim}N(n\\mu,n\\sigma^2)$。\n\n即无论什么分布的事件在次数无限大的情况下近乎正态分布。\n\n$n$一般大于10以上即可使用中心极限定理。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s3-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#列维-林德伯格定理",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "列维-林德伯格定理",
  "kind": "定理",
  "text": "定义：假设$\\{X_n\\}$是独立分布的随机变量序列，若$EX_i=\\mu$，$DX_i=\\sigma^2>0$（$i=1,2,\\cdots$）存在，则对任意的实数$x$，有$\\lim\\limits_{n\\to\\infty}P\\left\\{\\dfrac{\\sum\\limits_{i=1}^nX_i-n\\mu}{\\sqrt{n}\\sigma}\\leqslant x\\right\\}=\\dfrac{1}{\\sqrt{2}\\pi}\\int_{-\\infty}^xe^{-\\frac{t^2}{2}}\\,\\textrm{d}t=\\varPhi(x)$。（正态分布标准化）\n\n定理要求：独立、同分布、期望方差存在。\n\n$\\dfrac{\\sum\\limits_{i=1}^nX_i-n\\mu}{\\sqrt{n}\\sigma}\\sim N(0,1)$，$\\sum\\limits_{i=1}^nX_i\\sim N(n\\mu,n\\sigma^2)$。\n\n例题：已知手套是使用寿命服从指数分布，单位为小时，且平均寿命为20小时。若一个人需要带手套进行工作，发现手套坏了就立刻换新继续工作，为保证该工人有95%的把握能工作2000小时，求应该为其准备手套的副数。\n\n解：题目中需要为其准备手套，且所有使用寿命加在一起大于2000的概率为95%。这个问题是概率分布的和的问题，所以使用列维-林德伯格定理。\n\n假设第$i$副手套的使用寿命为$X_i$，则$X_i\\sim E(\\lambda)$，又平均寿命为$20$小时，则$E(X_i)=\\dfrac{1}{\\lambda}=20$，即$\\lambda=\\dfrac{1}{20}$，$D(X_i)=\\dfrac{1}{\\lambda^2}=400$。\n\n又根据中心极限定理，$\\sum\\limits_{i=1}^nX_i\\sim N(n\\mu,n\\sigma^2)=N(20n,400n)$，\n\n保证该工人有95%的把握能工作2000小时，则$P\\{\\sum\\limits_{i=1}^nX_i\\geqslant2000\\}\\approx0.95$，则标准化$P\\left\\{\\dfrac{\\sum X_i-20n}{20\\sqrt{n}}\\geqslant\\dfrac{2000-20n}{\\sqrt{20\\sqrt{n}}}\\right\\}\\approx0.95$，$1-P\\left\\{Z<\\dfrac{100-n}{\\sqrt{n}}\\right\\}\\approx0.95$，$Z=\\dfrac{\\sum X_i-20n}{20\\sqrt{n}}\\sim N(0,1)$，即$\\varPhi(\\dfrac{100-n}{\\sqrt{n}})\\approx0.05$，查表，$\\dfrac{n-100}{\\sqrt{n}}\\approx1.64$，$n\\approx118$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-4-law-of-large-numbers-and-central-limit-theorem-law-of-large-numbers-and-central-limit-theorem-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/4-law-of-large-numbers-and-central-limit-theorem/law-of-large-numbers-and-central-limit-theorem.tex#棣莫弗-拉普拉斯定理",
  "subject": "gailv",
  "topic": "函数极限与连续",
  "title": "棣莫弗-拉普拉斯定理",
  "kind": "定理",
  "text": "或简称拉普拉斯中心极限定理。是列维-林德伯格定理的特殊情况。\n\n定义：假设随机变量$Y_n\\sim B(n,p)$（$0<p<1$，$n\\geqslant1$），则对任意实数$x$，有$\\lim\\limits_{n\\to\\infty}P\\left\\{\\dfrac{Y_n-np}{\\sqrt{np(1-p)}}\\leqslant x\\right\\}=\\dfrac{1}{\\sqrt{pi}}\\int_{-\\infty}^xe^{-\\frac{t^2}{2}}\\,\\textrm{d}t=\\varPhi(x)$。\n\n$\\dfrac{Y_n-np}{\\sqrt{np(1-p)}}\\sim N(0,1)$，$X\\sim N[np,np(1-p)]$。即二项分布的极限分布是正态分布。其中正态分布的期望和方差就是二项分布的期望和方差。\n\n例题：生产线生产的产品成箱包装，每箱质量是随机的。假设每箱平均钟50千克，标准差为5，若用载重为5吨的汽车承运，试用中心极限定理说明每辆汽车最多可以装多少箱才能保证不超载的概率大于0.977。（$\\varPhi(2)=0.977$）\n\n解：设$X_i$为第$i$箱质量，所以$EX_i=50$，$DX_i=25$。\n\n记$T_n=\\sum\\limits_{i=1}^nX_i$，$ET_n=50n$，$DT_n=25n$。\n\n根据中心极限定理得到：$P\\{T_n\\leqslant5000\\}=P\\left\\{\\dfrac{T_n-50n}{5\\sqrt{n}}\\leqslant\\dfrac{5000-50n}{5\\sqrt{n}}\\right\\}\\approx\\varPhi\\left(\\dfrac{5000-50n}{5\\sqrt{n}}\\right)>0.977=\\varPhi(2)$。\n\n即$\\dfrac{5000-50n}{5\\sqrt{n}}\\geqslant2$，即$n\\leqslant98$，即选98。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s1-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#总体定义",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "总体定义",
  "kind": "概念",
  "text": "定义：研究对象的全体称为总体，组成总体的每一个元素称为个体。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s1-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#样本",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "样本",
  "kind": "定理",
  "text": "#### 定义\n\n定义：$n$个相互独立且域总体$X$有相同概率分布的随机变量$X_1,X_2,\\cdots,X_n$所组成的整体$(X_1,X_2,\\cdots,X_n)$称为来自总体$X$，容量为$n$个一个简单随机样本，简称样本。一次抽样结果的$n$个具体值$(x_1,x_2,\\cdots,x_n)$称为来自样本$X_1,X_2,\\cdots,X_n$的一个观测值或样本值。\n\n在概率论中称为独立同分布，而在数理统计就称为简单随机样本。\n\n#### 分布\n\n对于容量为$n$的样本$X_1,X_2,\\cdots,X_n$有如下定理：假设总体$X$的分布函数为$F(x)$（概率密度为$f(x)$，或概率分布为$p_i=P\\{X=x_i\\}$），则$(X_1,X_2,\\cdots,X_n)$的分布函数为$F(x_1,x_2,\\cdots,x_n)=\\prod\\limits_{i=1}^nF(x_i)$。\n\n对于离散型随机变量联合分布：$F(X_1=x_1,X_2=x_2,\\cdots,X_n=x_n)=\\prod\\limits_{i=1}^nP\\{X_i=x_i\\}$。\n\n对于连续型随机变量联合概率密度：$f(x_1,x_2,\\cdots,x_n)=\\prod\\limits_{i=1}^nf(x_i)$。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s2-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#统计量",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "统计量",
  "kind": "概念",
  "text": "设$X_1,X_2,\\cdots,X_n$来自总体$X$的一个样本，$g(x_1,x_2,\\cdots,x_n)$为$n$元函数，若$g$中不含有任何未知参数，则称$g(X_1,X_2,\\cdots,X_n)$为样本$X_1,X_2,\\cdots,X_n$的一个统计量。若$(x_1,x_2,\\cdots,x_n)$为样本值，则称$g(x_1,x_2,\\cdots,x_n)$为$g(X_1,X_2,\\cdots,X_n)$的观测值。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s2-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#常用统计量",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "常用统计量",
  "kind": "总结",
  "text": "- 样本均值：$\\overline{X}=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i$。\n\n- 样本方差：$S^2=\\dfrac{1}{n-1}\\sum\\limits_{i=1}^n(X_i-\\overline{X})^2$。\n\n- 样本标准差：$S=\\sqrt{\\dfrac{1}{n-1}\\sum\\limits_{i=1}^n(X_i-\\overline{X})^2}$。\n\n- 样本$k$阶（原点）矩：$A_k=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i^k$（$k=1,2,\\cdots$）。\n\n- 样本$k$中心矩：$B_k=\\dfrac{1}{n}\\sum\\limits_{i=1}^n(X_i-\\overline{X})^k$（$k=1,2,\\cdots$）。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s2-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#顺序统计量",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "顺序统计量",
  "kind": "概念",
  "text": "#### 概念\n\n将样本$X_1,X_2,\\cdots,X_n$的$n$个观测量按其值从小到大的顺序排列，得到$X_{(1)}\\leqslant X_{(2)}\\leqslant\\cdots\\leqslant X_{(n)}$。\n\n随机变量$X_{(k)}$（$k=1,2,\\cdots,n$）称为\\textbf{第$k$顺序统计量}，其中$X_{(1)}$是最小顺序统计量，而$X_{(n)}$是最大顺序统计量。\n\n$X_{(n)}$的分布函数为$F_{(n)}(x)=[F(x)]^n$，概率密度为$f_{(n)}(x)=n[F(x)]^{n-1}f(x)$。\n\n证明：$F_{(n)}(x)=P\\{X_{(n)}\\leqslant x\\}=P\\{\\max\\{x_1,\\cdots,x_n\\}\\leqslant x\\}=P\\{x_1\\leqslant x,\\cdots,x_n\\leqslant x\\}=P\\{x_1\\leqslant x\\}\\cdots P\\{x_n\\leqslant x\\}=F_{(1)}(x)\\cdots F_{(n)}(x)=[F(x)]^n$。\n\n$X_{(1)}$的分布函数为$F_{(1)}(x)=1-[1-F(x)]^n$，概率密度为$f_{(1)}(x)=n[1-F(x)]^{n-1}f(x)$。\n\n证明：$F_{(1)}(x)=P\\{X_{(1)}\\leqslant x\\}=P\\{\\min\\{x_1,\\cdots,x_n\\}\\leqslant x\\}=1-P\\{\\min\\{x_1,\\cdots$\n$,x_n\\}>x\\}=1-P\\{x_1>x,\\cdots,x_n>x\\}=1-P\\{x_1>x\\}\\cdots P\\{x_n>x\\}=1-[1-P\\{x_1\\leqslant x\\}]\\cdots[1-P\\{x_n\\leqslant x\\}]=1-[1-F_{(1)}(x)]\\cdots[1-F_{(n)}(x)]=1-[1-F(x)]^n$。\n\n#### 性质\n\n设总体$X$的期望$EX=\\mu$，方差$DX=\\sigma^2$，样本$X_1,X_2,\\cdots,X_n$取自$X$，$\\overline{X}$和$S^2$分别为样本的均值和方差，则：\n\n-$EX_i=\\mu$。\n\n-$DX_i=\\sigma^2$。\n\n-$E\\overline{X}=EX=\\mu$。\n\n-$D\\overline{X}=D\\left(\\dfrac{1}{n}\\sum\\limits_{i=1}^nx_i\\right)=\\dfrac{1}{n^2}n\\sigma^2=\\dfrac{1}{n}DX=\\dfrac{\\sigma^2}{n}$。\n\n-$E(S^2)=E\\left(\\dfrac{1}{n-1}\\sum\\limits_{i=1}^n(x_i-\\overline{x})^2\\right)=E\\left(\\dfrac{1}{n-1}\\sum\\limits_{i=1}^n(x_i^2-2x_i\\overline{x}+\\overline{x}^2)\\right)=$\n$E\\left(\\dfrac{1}{n-1}\\left(\\sum\\limits_{i=1}^nx_i^2-2\\overline{x}\\cdot\\sum\\limits_{i=1}^nx_i+n\\overline{x}^2\\right)\\right)=E\\left(\\dfrac{1}{n-1}\\left(\\sum\\limits_{i=1}^nx_i^2-n\\overline{x}^2\\right)\\right)=$\n$\\dfrac{1}{n-1}E\\left(\\sum\\limits_{i=1}^nx_i^2-n\\overline{x}^2\\right)=\\dfrac{1}{n-1}\\left(\\sum\\limits_{i=1}^nEx_i^2-nE\\overline{x}^2\\right)=\\dfrac{n}{n-1}[(Ex_i)^2+Dx_i-(E\\overline{x})^2-D\\overline{x}]=\\dfrac{n}{n-1}\\left(\\mu^2+\\sigma^2-\\mu^2-\\dfrac{\\sigma^2}{n}\\right)=DX=\\sigma^2$。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s2-4",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#三大分布",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "三大分布",
  "kind": "概念",
  "text": "\\subsubsection{\\texorpdfstring{$\\chi^2$分布}{}}\n\n#### 概念\n \\leavevmode\n\n定义：若随机变量$X_1,X_2,\\cdots,X_n$相互独立，且都服从标准正态分布，则随机变量$X=\\sum\\limits_{i=1}^nX_i^2$服从自由度为$n$的$\\chi^2$分布，记为$X\\sim\\chi^2(n)$，特别地$X_i^2\\sim\\chi^2(1)$。\n\n对给定的$\\alpha$（$0<\\alpha<1$）称满足$P\\{\\chi^2>\\chi_\\alpha^2(n)\\}=\\int_{\\chi_\\alpha^2(n)}^{+\\infty}f(x)\\,\\textrm{d}x=\\alpha$的$\\chi_\\alpha^2(n)$为$\\chi^2(n)$分布的\\textbf{上$\\alpha$分位点}。\n\n#### 性质\n \\leavevmode\n\n- 若$X_1\\sim\\chi^2(n_1)$，$X_2\\sim\\chi^2(n_2)$，$X_1X_2$相互独立，则$X_1+X_2\\sim\\chi^2(n_1+n_2)$。一般，若$X_i\\sim\\chi^2(n_i)$（$i=1,2,\\cdots,m$），$X_1,X_2,\\cdots,X_m$相互独立，则$\\sum\\limits_{i=1}^mX_i\\sim\\chi^2\\left(\\sum\\limits_{i=1}^mn_i\\right)$。\n\n- 若$X\\sim\\chi^2(n)$，则$EX=n$，$DX=2n$。\n\n\\subsubsection{\\texorpdfstring{$t$分布}{}}\n\n#### 概念\n \\leavevmode\n\n也称为学生分布。\n\n若随机变量$X\\sim N(0,1)$，$Y\\sim\\chi^2(n)$，$XY$相互独立，则随机变量$t=\\dfrac{X}{\\sqrt{Y/n}}$服从自由度为$n$的$t$分布，记为$t\\sim t(n)$。\n\n当$t\\to\\infty$时，$t$分布就是标准正态分布。其是偶函数，所以$Et=0$。\n\nt分布用于根据小样本来估计呈正态分布且方差未知的总体的均值。\n\n#### 性质\n \\leavevmode\n\n由$t$分布的概率密度$f(x)$图形的对称性可知$P\\{t>-t_\\alpha(n)\\}=P\\{t>t_{1-\\alpha}(n)\\}$，所以$t_{1-\\alpha}(n)=-t_\\alpha(n)$。\n\n\\subsubsection{\\texorpdfstring{$F$分布}{}}\n\n#### 概念\n \\leavevmode\n\n若随机变量$X\\sim\\chi^2(n_1)$，$Y\\sim\\chi^2(n_2)$，且$X$与$Y$相互独立，则$F=\\dfrac{X/n_1}{Y/n_2}$服从自由度为$(n_1,n_2)$的$F$分布，记为$F\\sim F(n_1,n_2)$，其中$n_1$为第一自由度，$n_2$为第二自由度。\n\n#### 性质\n \\leavevmode\n\n- 若$F\\sim F(n_1,n_2)$，则$\\dfrac{1}{F}\\sim F(n_2,n_1)$。\n\n-$F_{1-\\alpha}(n_1,n_2)=\\dfrac{1}{F_\\alpha}(n_2,n_1)$。\n\n证明性质二：记$F\\sim F(n_2,n_1)$。\n\n$\\therefore P\\{F>F_\\alpha(n_2,n_1)\\}=\\alpha$，$P\\{F\\leqslant F_\\alpha(n_2,n_1)\\}=1-\\alpha$。\n\n取倒数：$P\\left\\{\\dfrac{1}{F}\\geqslant\\dfrac{1}{F_\\alpha(n_2,n_1)}\\right\\}=1-\\alpha$。\n\n又根据性质1：$\\dfrac{1}{F}\\sim F(n_1,n_2)$，$P\\{\\dfrac{1}{F}\\geqslant F_{1-\\alpha}(n_1,n_2)\\}=1-\\alpha$。\n\n即$F_{1-\\alpha}(n_1,n_2)=\\dfrac{1}{F_\\alpha}(n_2,n_1)$。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s2-5",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#正态总体下结论",
  "subject": "gailv",
  "topic": "数理统计基本概念",
  "title": "正态总体下结论",
  "kind": "概念",
  "text": "设$X_1,X_2,\\cdots,X_n$是来自正态总体$N(\\mu,\\sigma^2)$的一个样本，$\\overline{X}=\\sum\\limits_{i=1}^nX_i$，$S^2=\\dfrac{1}{n-1}\\sum\\limits_{i=1}^n(X_i-\\overline{X})^2$分别是样本的均值和方差，则：\n\n-$\\overline{X}\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)$，即$\\dfrac{\\overline{X}-\\mu}{\\sigma/\\sqrt{n}}=\\dfrac{\\sqrt{n}(\\overline{X}-\\mu)}{\\sigma}\\sim N(0,1)$。\n\n-$\\dfrac{1}{\\sigma^2}\\sum\\limits_{i=1}^n(X_i-\\mu)^2\\sim\\chi^2(n)$。\n\n-$\\dfrac{(n-1)S^2}{\\sigma^2}=\\sum\\limits_{i=1}^n\\left(\\dfrac{X_i-\\overline{X}}{\\sigma}\\right)^2\\sim\\chi^2(n-1)$（$\\mu$未知时，在2中用$\\overline{X}$代替$\\mu$）。\n\n-$\\overline{X}$与$S^2$相互独立，$\\dfrac{\\sqrt{n}(\\overline{X}-\\mu)}{S}\\sim t(n-1)$（$\\sigma$未知时在1中用$S$代替$\\sigma$）。进一步有$\\dfrac{n(\\overline{X}-\\mu)^2}{S^2}\\sim F(1,n-1)$。\n\n设$X_1,X_2,\\cdots,X_m$是来自正态总体$N(\\mu_1,\\sigma_1^2)$的一个样本，设$Y_1,Y_2,\\cdots,Y_n$是来自正态总体$N(\\mu_2,\\sigma_2^2)$的一个样本，$X_i$和$Y_i$相互独立，$\\overline{X}=\\dfrac{1}{m}\\sum\\limits_{i=1}^mX_i$、$\\overline{Y}=\\dfrac{1}{n}\\sum\\limits_{i=1}^nY_i$、$S_1^2=\\dfrac{1}{m-1}\\sum\\limits_{i=1}^m(X_i-\\overline{X})^2$、$S_2^2=\\dfrac{1}{n-1}\\sum\\limits_{i=1}^n(Y_i-\\overline{Y})^2$分别是样本$X_i$、$Y_i$的均值和方差，$S_w=\\dfrac{1}{m+n-2}[(m-1)S_1^2+(n-1)S_2^2]=\\dfrac{1}{m+n-2}[\\sum\\limits_{i=1}^m(X_i-\\overline{X})^2+\\sum\\limits_{i=1}^n(Y_i-\\overline{Y})^2]$，则：\n\n-$\\dfrac{(\\overline{X}-\\overline{Y})-(\\mu_1-\\mu_2)}{\\sqrt{\\dfrac{\\sigma_1^2}{m}+\\dfrac{\\sigma_2^2}{n}}}\\sim N(0,1)$。（根据期望和方差性质）\n\n-$\\dfrac{S_1^2/\\sigma_1^2}{S_2^2/\\sigma_2^2}=\\dfrac{S_1^2}{S_2^2}\\cdot\\dfrac{\\sigma_2^2}{\\sigma_1^2}\\sim F(m-1,n-1)$。\n\n- 当$\\sigma_1^2=\\sigma_2^2$时，$\\dfrac{(\\overline{X}-\\overline{Y})-(\\mu_1-\\mu_2)}{S_w\\sqrt{\\dfrac{1}{m}+\\dfrac{1}{n}}}\\sim t(m+n-2)$。",
  "relatedLessons": [
   "gl06"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s3-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#概念",
  "subject": "gailv",
  "topic": "函数概念",
  "title": "概念",
  "kind": "概念",
  "text": "定义：设总体$X$的分布函数为$F(x;\\theta)$，其中$\\theta$为一个未知参数，$X_1,X_2,\\cdots,$\n$X_n$是取自总体$X$的一个样本。由样本构造一个适当的统计量$\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$作为参数$\\theta$的估计，称统计量$\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$为$\\theta$的估计量，一般记为$\\hat{\\theta}=\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$。\n\n如果$x_1,x_2,\\cdots,x_n$是样本的一个观察值，将其代入估计量$\\hat{\\theta}$中得到值$\\hat{\\theta}(x_1,$\n$x_2,\\cdots,x_n)$，并且此值作为未知参数$\\theta$的参数值，统计值称这个值为未知参数$\\theta$的估计值。\n\n建立一个适当的统计量作为未知参数$\\theta$的估计量并以相应的观察值作为未知参数估计值的问题，就是参数$\\theta$的点估计问题。",
  "relatedLessons": [
   "gs01"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s3-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#方法",
  "subject": "gailv",
  "topic": "参数估计",
  "title": "方法",
  "kind": "方法",
  "text": "#### 矩估计法\n\n使用替换思想，用样本距来估计总体距。\n\n- 写出总体$k$阶矩$\\mu_k=E(X^k)$，其中$\\mu$含有参数$\\theta$。\n\n- 写出样本$k$阶矩$A_k=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX^k$，$A_k$只与样本有关。\n\n- 令总体$k$阶矩=样本$k$阶矩，即$E(X^k)=\\dfrac{1}{n}\\sum\\limits_{i=1}^nX^k$，就得到了$\\theta$的方程。\n\n例题：来自总体的$X$的简单随机样本$X_1,X_2,\\cdots,X_n$，总体$X$的概率分布为$X\\sim\\left(\\begin{array}{ccc}\n    -1 & 0 & 2 \\\\\n    2\\theta & \\theta & 1-3\\theta\n\\end{array}\\right)$，其中$0<\\theta<\\dfrac{1}{3}$，求参数$\\theta$的矩估计量。\n\n解：令$\\overline{X}=EX$，即$\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i=(-1)2\\theta+0\\theta+2(1-3\\theta)=2-8\\theta$。\n\n所以$\\hat{\\theta}=\\dfrac{2-\\overline{X}}{8}$。\n\n例题：来自总体的$X$的概率密度为$f(x)=\\left\\{\\begin{array}{ll}\n    (1+\\theta)x^\\theta, & 0<x<1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，其中$\\theta>-1$为未知参数，设$X_1,X_2,\\cdots,X_n$为来自总体$X$的样本容量为$n$的简单随机样本，求$\\theta$的矩估计量。\n\n解：令$\\overline{X}=EX$，$EX=\\int_{-\\infty}^{+\\infty}xf(x)\\,\\textrm{d}x=\\int_0^1x(1+\\theta)x^\\theta\\,\\textrm{d}x=(1+\\theta)\\dfrac{x^{\\theta+2}}{\\theta+2}\\bigg|_0^1=\\dfrac{1+\\theta}{2+\\theta}$。\n\n解得$\\hat{\\theta}=\\dfrac{2\\overline{X}-1}{1-\\overline{X}}$。\n\n#### 最大似然估计\n\n#### 定义\n \\leavevmode\n\n对未知参数$\\theta$进行估计时，在该参数可能取值的范围$I$内选取，使得样本获得次观测值$x_1,x_2,\\cdots,x_n$的概率最大的参数值$\\hat{\\theta}$作为$\\theta$的估计，这样的$\\hat{\\theta}$最有利于$x_1,x_2,\\cdots,x_n$的出现。\n\n设总体$X$是离散型，其概率分布为$P\\{X=x\\}=p(x;\\theta)$，$\\theta\\in I$，$\\theta$为未知参数，$X_1,X_2\\cdots,X_n$为$X$的一个样本，则$X_1,X_2,\\cdots,X_n$取值为$x_1,x_2,\\cdots,x_n$的概率为$P\\{X_1=x_1,X_2=x_2,\\cdots,X_n=x_n\\}=\\prod\\limits_{i=1}^nP\\{X_i=x_i\\}=\\prod\\limits_{i=1}^np(x_i;\\theta)$。显然这个概率值为$\\theta$的函数，记为$L(\\theta)=L(x_1,x_2,\\cdots,x_n;\\theta)=\\prod\\limits_{i=1}^np(x_i;\\theta)$。称$L(\\theta)$为样本的似然函数。\n\n定义：若存在$\\hat{\\theta}\\in I$，使得$L(x_1,x_2,\\cdots,x_n;\\hat{\\theta})=\\max\\limits_{\\theta\\in I}L(x_1,x_2,\\cdots,x_n;\\theta)$，则称$\\hat{\\theta}=\\hat{\\theta}(x_1,x_2,\\cdots,x_n)$为参数$\\theta$的最大似然估计，对应的统计量$\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$称为参数$\\theta$的最大似然估计量。\n\n同理若总体$X$为连续型随机变量，其概率密度为$f(x;\\theta)$，$\\theta\\in I$，则样本的似然函数为$L(\\theta)=L(x_1,x_2,\\cdots,x_n;\\theta)=\\prod\\limits_{i=1}^nf(x_i;\\theta)$.\n\n定义：若存在$\\hat{\\theta}\\in I$，使得$L(x_1,x_2,\\cdots,x_n)=\\max\\limits_{\\theta\\in I}\\prod\\limits_{i=1}^nf(x_i;\\theta)$，则称$\\hat{\\theta}=\\hat{\\theta}(x_1,x_2,\\cdots,x_n)$为参数$\\theta$的最大似然估计，对应的统计量$\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$称为参数$\\theta$的最大似然估计量。\n\n#### 步骤\n \\leavevmode\n\n- 写出样本的似然函数。$L(\\theta)=L(x_1,x_2,\\cdots,x_n;\\theta_1,\\theta_2,\\cdots,\\theta_k)=\\prod\\limits_{i=1}^np(x_i;\\theta_1,$\n$\\theta_2,\\cdots,\\theta_k)$或$\\prod\\limits_{i=1}^nf(x_i;\\theta_1,\\theta_2,\\cdots,\\theta_k)$。\n\n- 如果$p(x;\\theta_1,\\theta_2,\\cdots,\\theta_k)$或$f(x;\\theta_1,\\theta_2,\\cdots,\\theta_k)$关于$\\theta_i$可微，则令$\\dfrac{\\partial L(\\theta)}{\\partial\\theta_i}=0$或$\\dfrac{\\partial\\ln L(\\theta)}{\\partial\\theta_i}=0$。由于$L(\\theta)$是乘积形式，且$\\ln x$单调增，所以$L(\\theta)$域$\\ln L(\\theta)$在同一$\\theta$处取极值，所以更多采用后面一种对数似然方程组来解。求得$\\theta_i$的最大似然估计量为$\\hat{\\theta}=\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$（$i=1,2,\\cdots,k$）。\n\n- 如果$p(x;\\theta_1,\\theta_2,\\cdots,\\theta_k)$或$f(x;\\theta_1,\\theta_2,\\cdots,\\theta_k)$不可微，或似然方程组无解，则应由定义用其他方法求$\\hat{\\theta}$，如当$L(\\theta)$为$\\theta$的单调函数时，$\\hat{\\theta}$为$\\theta$的取值上限或下限。\n\n即将概率密度或概率分布连乘，然后取对数，再求导令其为0解出$\\hat{\\theta}$。\n\n例题：来自总体的$X$的概率密度为$f(x)=\\left\\{\\begin{array}{ll}\n    (1+\\theta)x^\\theta, & 0<x<1 \\\\\n    0, & \\text{其他}\n\\end{array}\\right.$，其中$\\theta>-1$为未知参数，设$X_1,X_2,\\cdots,X_n$为来自总体$X$的样本容量为$n$的简单随机样本，求$\\theta$的最大似然估计量。\n\n解：这是上面的矩估计的题目的延申。\n\n首先$L(\\theta)=(1+\\theta)x_1^\\theta\\cdot(1+\\theta)x_2^\\theta\\cdots=(1+\\theta)\\cdot\\prod\\limits_{i=1}^nx_i^\\theta$。\n\n取对数$\\ln L(\\theta)=n\\ln(1+\\theta)+\\theta\\sum\\limits_{i=1}^n\\ln x_i$\n\n对其求导：$\\dfrac{\\textrm{d}\\ln L(\\theta)}{\\textrm{d}\\theta}=\\dfrac{n}{1+\\theta}+\\sum\\limits_{i=1}^n\\ln x_i=0$，解得$\\hat{\\theta}=-\\dfrac{n}{\\sum\\limits_{i=1}^n\\ln x_i}-1$。\n\n最大似然估计量为$-\\dfrac{n}{\\sum\\limits_{i=1}^n\\ln X_i}-1$。\n\n注意：估计值用小写$x$，估计量用大写$X$。",
  "relatedLessons": [
   "gl07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s3-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#估计量平均标准",
  "subject": "gailv",
  "topic": "参数估计",
  "title": "估计量平均标准",
  "kind": "概念",
  "text": "不同的估计法所产生的估计量有所差异，需要有一套标准来评判估计量。\n\n#### 无偏性\n\n定义：若参数$\\theta$的估计量$\\hat{\\theta}=\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$对一切$n$及$\\theta\\in I$，有$E\\hat{\\theta}=\\theta$，则称$\\hat{\\theta}$为$\\theta$的无偏估计量。\n\n例题：设$X_1,X_2,\\cdots,X_n$是正态总体$X\\sim N(\\mu,\\sigma^2)$的简单随机样本，为使$D=k\\sum\\lim\\limits_{i=1}^n-1(X_{i+1}-X_i)^2$称为总体方差$\\sigma^2$的无偏估计量，求$k$。\n\n解：已知总体方差为$\\sigma^2$，所以代入：\n\n$ED=\\sigma^2=kE(\\sum\\lim\\limits_{i=1}^{n-1}(X_{i+1}-X_i)^2)=kE(\\sum\\limits_{i=1}^{n-1}(X_{i+1}^2-2X_iX_{i+1}+X_i^2))$。\n\n已知样本方差$S^2=\\dfrac{1}{n-1}\\sum\\limits_{i=1}^n(X_i-\\overline{X})^2=\\dfrac{1}{n-1}\\left(\\sum\\limits_{i=1}^nX_i^2-n\\overline{X}^2\\right)$。所以为什么样本方差要除以$n-1$而不是$n$？可以利用无偏性来证明。\n\n证明：根据方差$DX_i=EX_i^2-E^2X_i$，从而$EX_i^2=DX_i+E^2X_i=\\sigma^2+\\mu^2$，类似$D\\overline{X}=E(\\overline{X}^2)-(E\\overline{X})^2$，$D\\overline{X}=D\\left(\\dfrac{1}{n}\\sum\\limits_{i=1}^nX_i\\right)=\\dfrac{1}{n^2}\\sum\\limits_{i=1}^nDX_i=\\dfrac{1}{n^2}n\\sigma^2=\\dfrac{\\sigma^2}{n}$。\n\n$\\therefore E(\\overline{X}^2)=D\\overline{X}+(E\\overline{X})^2=\\dfrac{\\sigma^2}{n}+\\mu^2$。\n\n所以对样本方差求期望：$ES^2=E\\left(\\dfrac{1}{n-1}\\left(\\sum\\limits_{i=1}^nX_i^2-n\\overline{X}^2\\right)\\right)=\\dfrac{1}{n-1}\\\\\\left(\\sum\\limits_{i=1}^nE(X_i^2)-nE(\\overline{X}^2)\\right)=\\dfrac{1}{n-1}\\left(n(\\sigma^2+\\mu^2)-n\\left(\\dfrac{\\sigma^2}{n}+\\mu^2\\right)\\right)=\\sigma^2$。\n\n#### 有效性\n\n也称为最小方差性。只有同样的无偏性才能比较有效性。\n\n定义：设$\\hat{\\theta_1}=\\hat{\\theta_1}(X_1,X_2,\\cdots,X_n)$与$\\hat{\\theta_2}=\\hat{\\theta_2}(X_1,X_2,\\cdots,X_n)$都是$\\theta$的无偏估计量，若$D(\\hat{\\theta_1})<D(\\hat{\\theta_2})$，则$\\hat{\\theta_1}$比$\\hat{\\theta_2}$有效。\n\n$EX_i^2=EX_{i+1}^2=(EX_{i+1})^2+DX_{i+1}=\\mu^2+\\sigma^2$，$2EX_iE_{i+1}=2(EX_i)^2=2\\mu^2$。\n\n代入：$=k\\sum\\limits_{i=1}^{n-1}(2\\mu^2+2\\sigma^2-2\\mu^2)=2k\\sigma^2(n-1)=\\sigma$。解得$k=\\dfrac{1}{2(n-1)}$。\n\n#### 一致性\n\n也称为相合性。\n\n定义：设$\\hat{\\theta}=\\hat{\\theta}(X_1,X_2,\\cdots,X_n)$为未知参数$\\theta$的估计量，若对任意$\\epsilon>0$，有$\\lim\\limits_{n\\to\\infty}P\\{\\vert\\hat{\\theta}-\\theta\\vert<\\epsilon\\}=1$，即$\\hat{\\theta}\\overset{P}{\\longrightarrow}\\theta(n\\to\\infty)$，则称$\\hat{\\theta}$为$\\theta$的一致估计量（相合估计量）。",
  "relatedLessons": [
   "gl07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s4-0",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#参数区间估计与假设检验",
  "subject": "gailv",
  "topic": "假设检验",
  "title": "参数区间估计与假设检验",
  "kind": "总结",
  "text": "区间估计和假设检验都是基于小概率事件基本上不可能发生的情况。",
  "relatedLessons": [
   "gl08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s4-1",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#区间估计",
  "subject": "gailv",
  "topic": "区间估计",
  "title": "区间估计",
  "kind": "概念",
  "text": "区间估计是根据样本估计总体期望$\\mu$所在的区间。有两个参数，一个是区间长度，一个是落入概率。\n\n#### 概念\n\n定义：已知从总体$X$中取出一部分样本$X_n$，则这些样本的平均值$\\overline{X}$不一定等于$X$的期望即应该的平均值$\\mu$，但是其之间的差距应该不大，即差距较小的概率较大，从而表示为$P(\\vert\\overline{X}-\\mu\\vert<\\Delta)=1-\\alpha$，$\\alpha$为显著性水平，其一般是一个较小的正数。而$1-\\alpha$称为置信度或置信水平。\n\n求置信区间的枢轴变量法：\n\n- 找到与待估计参数$\\theta$有关的统计量$T$。（$T$一般是$\\theta$的点估计）\n\n- 找到一个函数$I=I(T,\\theta)$，$T$为已知常量，$\\theta$为未知参数，其分布$F$已知（正态、$\\chi^2$、$t$、$F$）且与$\\theta$无关，则$I$为枢轴变量。\n\n- 给定$1-\\alpha$，确定$F$上的上$\\dfrac{\\alpha}{2}$分位数$Z-{\\frac{\\alpha}{2}}$，上$1-\\dfrac{\\alpha}{2}$分位数$Z_{1-\\frac{\\alpha}{2}}$，则$P\\{Z_{1-\\frac{\\alpha}{2}}\\leqslant I(T,\\theta)\\leqslant Z_{\\frac{\\alpha}{2}}=1-\\alpha$。\n\n- 求出$(\\underline{\\theta},\\overline{\\theta})$是参数$\\theta$的置信度为$1-\\alpha$的区间估计，则区间$(\\underline{\\theta},\\overline{\\theta})$包含参数$\\theta$的概率为$1-\\alpha$。\n\n#### 正态总体均值的置信空间\n\n\\paragraph{\\texorpdfstring{估计$\\mu$而$\\sigma$已知}{}} \\leavevmode\n\n假设$X\\sim N(\\mu,\\sigma^2)$（若不服从正态分布就用中心极限定理来解决）。\n\n即$\\overline{X}\\sim N\\left(\\mu,\\dfrac{\\sigma^2}{n}\\right)$，规范化后记枢轴变量$\\dfrac{\\overline{X}-\\mu}{\\sigma/\\sqrt{n}}=U$，则$U\\sim N(0,1)$。\n\n又中间面积为$1-\\alpha$，得到两端面积$\\dfrac{\\alpha}{2}$。\n\n得到上$\\alpha$分位数$U_\\frac{\\alpha}{2}$，所以$P\\left(\\left\\vert\\dfrac{\\overline{X}-\\mu}{\\sigma/\\sqrt{n}}\\right\\vert\\leqslant U_\\frac{\\alpha}{2}\\right)=1-\\alpha$。\n\n左边解得$P\\left(\\overline{X}-\\dfrac{\\sigma}{\\sqrt{n}}U_\\frac{\\alpha}{2}\\leqslant\\mu\\leqslant\\overline{X}+\\dfrac{\\sigma}{\\sqrt{n}}U_\\frac{\\alpha}{2}\\right)=1-\\alpha$。\n\n解得$\\mu\\in[\\overline{X}-U_\\frac{\\alpha}{2}\\dfrac{\\sigma}{\\sqrt{n}},\\overline{X}+U_\\frac{\\alpha}{2}\\dfrac{\\sigma}{\\sqrt{n}}]$。\n\n这个$\\mu$所处的区间就是置信区间，区间上限就是置信上限，区间下限就是置信下限。\n\n\\paragraph{\\texorpdfstring{估计$\\mu$而$\\sigma$未知}{}} \\leavevmode\n\n当$\\sigma$未知的时候就无法根据$\\sigma$求出置信区间了，所以根据正态总体下的结论，用样本方差$S$代替方差$\\sigma$，且$\\dfrac{(\\overline{X}-\\mu)}{S/\\sqrt{n}}\\sim t(n-1)$。\n\n令枢轴变量$\\dfrac{\\overline{X}-\\mu}{S/\\sqrt{n}}=t$，所以$t\\sim t(n-1)$。同样$t$分布图形的中间面积$1-\\alpha$，则两边面积为$\\dfrac{\\alpha}{2}$。\n\n可得上$\\alpha$分位点$t_\\frac{\\alpha}{2}(n-1)$，所以$P\\left(\\left\\vert\\dfrac{\\overline{X}-\\mu}{\\sigma/\\sqrt{n}}\\right\\vert\\leqslant t_\\frac{\\alpha}{2}(n-1)\\right)=1-\\alpha$，\n\n左边解得$P\\left(\\overline{X}-\\dfrac{S}{\\sqrt{n}}t_\\frac{\\alpha}{2}(n-1)\\leqslant\\mu\\leqslant\\overline{X}+\\dfrac{S}{\\sqrt{n}}t_\\frac{\\alpha}{2}(n-1)\\right)=1-\\alpha$。\n\n解得$\\mu\\in[\\overline{X}-t_\\frac{\\alpha}{2}(n-1)\\dfrac{S}{\\sqrt{n}},\\overline{X}+t_\\frac{\\alpha}{2}(n-1)\\dfrac{S}{\\sqrt{n}}]$。\n\n\\paragraph{\\texorpdfstring{估计$\\sigma^2$而$\\mu$已知}{}} \\leavevmode\n\n由于需要利用$\\mu$来估计$\\sigma^2$，所以令枢轴变量$\\chi=\\dfrac{1}{\\sigma^2}\\sum\\limits_{i=1}^n(X_i-\\mu)^2\\sim\\chi^2(n)$。\n\n所以$P\\left(\\chi^2_{1-\\frac{\\alpha}{2}}(n)\\leqslant\\dfrac{1}{\\sigma^2}\\sum\\limits_{i=1}^n(X_i-\\mu)^2\\leqslant\\chi^2_\\frac{\\alpha}{2}(n)\\right)=1-\\alpha$，由于$\\chi^2$分布的图形是不对称的，所以上下限都需要单独查出。\n\n解得$\\sigma^2\\in\\left[\\dfrac{\\sum\\limits_{i=1}^n(X_i-\\mu)^2}{\\chi^2_\\frac{\\alpha}{2}(n)},\\dfrac{\\sum\\limits_{i=1}^n(X_i-\\mu)^2}{\\chi^2_{1-\\frac{\\alpha}{2}}(n)}\\right]$。\n\n\\paragraph{\\texorpdfstring{估计$\\sigma^2$而$\\mu$未知}{}} \\leavevmode\n\n由于$\\mu$未知，所以不可用了，使用$\\overline{X}$替换$\\mu$。令枢轴变量$\\chi=\\dfrac{(n-1)S^2}{\\sigma^2}=\\dfrac{1}{\\sigma^2}\\sum\\limits_{i=1}^n(X_i-\\overline{X})^2\\sim\\chi^2(n-1)$。\n\n同理解得$\\left[\\dfrac{(n-1)S^2}{\\chi^2_{\\frac{\\alpha}{2}}(n-1)},\\dfrac{(n-1)S^2}{\\chi^2_{1-\\frac{\\alpha}{2}}(n-1)}\\right]$。\n\n从而得到基本置信空间公式：\n\n参数 ｜ 条件 ｜ 置信区间\n$\\mu$ ｜$\\sigma$已知 ｜$\\left[\\overline{X}-\\dfrac{\\sigma}{\\sqrt{n}}U_{\\frac{\\alpha}{2}},\\overline{X}+\\dfrac{\\sigma}{\\sqrt{n}}U_{\\frac{\\alpha}{2}}\\right]$\n｜$\\sigma$未知 ｜$\\left[\\overline{X}-\\dfrac{S}{\\sqrt{n}}t_{\\frac{\\alpha}{2}}(n-1),\\overline{X}+\\dfrac{S}{\\sqrt{n}}t_{\\frac{\\alpha}{2}}(n-1)\\right]$\n$\\sigma$ ｜$\\mu$已知 ｜$\\sigma^2\\in\\left[\\dfrac{\\sum\\limits_{i=1}^n(X_i-\\mu)^2}{\\chi^2_\\frac{\\alpha}{2}(n)},\\dfrac{\\sum\\limits_{i=1}^n(X_i-\\mu)^2}{\\chi^2_{1-\\frac{\\alpha}{2}}(n)}\\right]$\n｜$\\mu$未知 ｜$\\left[\\dfrac{(n-1)S^2}{\\chi^2_{\\frac{\\alpha}{2}}(n-1)},\\dfrac{(n-1)S^2}{\\chi^2_{1-\\frac{\\alpha}{2}}(n-1)}\\right]$",
  "relatedLessons": [
   "gl07"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s4-2",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#假设检验",
  "subject": "gailv",
  "topic": "假设检验",
  "title": "假设检验",
  "kind": "概念",
  "text": "已经有了对期望$\\mu$的假设，对这个假设进行检验。若所处的区间在拒绝域中，就拒绝原假设。\n\n#### 思想\n\n已经有了假设样本期望为$\\mu=\\mu_0$。则$P(\\vert\\overline{X}-\\mu_0\\vert<\\Delta)=1-\\alpha$，所以取对立事件$P(\\vert\\overline{X}-\\mu_0\\vert\\geqslant\\Delta)=\\alpha$，这是一个小概率事件。若对这个小概率事件发生了，则否定原假设。\n\n若$\\sigma$已知，则$\\Delta=Z_\\frac{\\alpha}{2}\\dfrac{\\sigma}{\\sqrt{n}}$，则区间$(-\\infty,\\mu_0-\\Delta]\\cup[\\mu_0+\\Delta,+\\infty)$称为拒绝域，即小概率发生的区间。\n\n若$\\sigma$未知，则$\\Delta=t_\\frac{\\alpha}{2}(n-1)\\dfrac{S}{\\sqrt{n}}$，拒绝域一样。\n\n设$\\theta$为总体位置参数，$\\theta_0$为已知常数，则假设检验类型：\n\n类型 ｜$H_0$ ｜$H_1$\n双边检验 ｜$\\theta=\\theta_0$ ｜$\\theta\\neq\\theta_0$\n单边检验 ｜ 右边 ｜$\\theta\\leqslant\\theta_0$ ｜$\\theta>\\theta_0$\n｜ 左边 ｜$\\theta\\geqslant\\theta_0$ ｜$\\theta<\\theta_0$\n\n假设检验步骤：\n\n- 根据问题要求提出原假设$H_0$和备择假设$H_1$。\n\n- 根据假设和条件确定检验统计量，在$H_0$成立的条件下确定其分布。\n\n- 给定显著性水平$\\alpha$，在$H_0$成立的条件下根据$P\\{H_0\\text{为真，拒绝}H_0\\}\\leqslant\\alpha$确定拒绝域和临界点。\n\n- 由样本值计算出检验统计量值，若该值落入拒绝域，则拒绝$H_0$，否则接受$H_0$。\n\n#### 正态总体下的六大检验与拒绝域\n\n \\scalebox{0.77}{\n\n检验参数 ｜ 条件 ｜ 原假设$H_0$ ｜ 备择假设$H_1$ ｜ 检验法与统计量 ｜ 拒绝域\n$\\mu$ ｜$\\sigma=\\sigma_0$ ｜$\\mu=\\mu_0$ ｜$\\mu\\neq\\mu_0$ ｜ {\n\nc@{}}$U$检验\n$U=\\dfrac{\\overline{X}-\\mu_0}{\\sigma_0/\\sqrt{n}}\\sim N(0,1)$\n\n{c}{$U$检验\n$U=\\dfrac{\\overline{X}-\\mu_0}{\\sigma_0/\\sqrt{n}}\\sim N(0,1)$}} ｜$\\vert u\\vert\\geqslant u_{\\frac{\\alpha}{2}}$\n｜ ｜$\\mu\\leqslant\\mu_0$ ｜$\\mu>\\mu_0$ ｜ ｜$u\\geqslant u_\\alpha$\n｜ ｜$\\mu\\geqslant\\mu_0$ ｜$\\mu<\\mu_0$ ｜ ｜$u\\leqslant u_\\alpha$\n｜$\\sigma$未知 ｜$\\mu=\\mu_0$ ｜$\\mu\\neq\\mu_0$ ｜ {\n\nc@{}}$T$检验\n$U=\\dfrac{\\overline{X}-\\mu_0}{S/\\sqrt{n}}\\sim t(n-1)$\n\n{c}{$T$检验\n$U=\\dfrac{\\overline{X}-\\mu_0}{S/\\sqrt{n}}\\sim t(n-1)$}} ｜$\\vert t\\vert\\geqslant t_{\\frac{\\alpha}{2}}(n-1)$\n｜ ｜$\\mu\\leqslant\\mu_0$ ｜$\\mu>\\mu_0$ ｜ ｜$t\\geqslant t_\\alpha(n-1)$\n｜ ｜$\\mu\\geqslant\\mu_0$ ｜$\\mu<\\mu_0$ ｜ ｜$t\\leqslant t_\\alpha(n-1)$\n$\\sigma^2$ ｜$\\mu$已知 ｜$\\sigma^2=\\sigma^2_0$ ｜$\\sigma^2\\neq\\sigma^2_0$ ｜ {\n\nc@{}}$\\chi^2$检验\n$\\chi^2=\\dfrac{\\sum\\limits_{i=1}^n(X_i-\\mu)^2}{\\sigma^2_0}\\sim\\chi^2(n)$\n\n{c}{$\\chi^2$检验\n$\\chi^2=\\dfrac{\\sum\\limits_{i=1}^n(X_i-\\mu)^2}{\\sigma^2_0}\\sim\\chi^2(n)$}} ｜\n\nc@{}}$\\chi^2\\leqslant\\chi^2_{1-\\frac{\\alpha}{2}}(n)$\n$\\chi^2\\geqslant\\chi^2_{\\frac{\\alpha}{2}}(n)$\n\n{c}{$\\chi^2\\leqslant\\chi^2_{1-\\frac{\\alpha}{2}}(n)$\n$\\chi^2\\geqslant\\chi^2_{\\frac{\\alpha}{2}}(n)$}\n｜ ｜$\\sigma^2\\leqslant\\sigma^2_0$ ｜$\\sigma^2>\\sigma^2_0$ ｜ ｜$\\chi^2\\geqslant\\chi^2_\\alpha(n)$\n｜ ｜$\\sigma^2\\geqslant\\sigma^2_0$ ｜$\\sigma^2<\\sigma^2_0$ ｜ ｜$\\chi^2\\leqslant\\chi^2_{1-\\alpha}(n)$\n｜$\\mu$未知 ｜$\\sigma^2=\\sigma^2_0$ ｜$\\sigma^2\\neq\\sigma^2_0$ ｜ {\n\nc@{}}$\\chi^2$检验\n$\\chi^2=\\dfrac{(n-1)S^2}{\\sigma_0^2}\\sim\\chi^2(n-1)$\n\n{c}{$\\chi^2$检验\n$\\chi^2=\\dfrac{(n-1)S^2}{\\sigma_0^2}\\sim\\chi^2(n-1)$}} ｜\n\nc@{}}$\\chi^2\\leqslant\\chi^2_{1-\\frac{\\alpha}{2}}(n-1)$\n$\\chi^2\\geqslant\\chi^2_{\\frac{\\alpha}{2}}(n-1)$\n\n{c}{$\\chi^2\\leqslant\\chi^2_{1-\\frac{\\alpha}{2}}(n-1)$\n$\\chi^2\\geqslant\\chi^2_{\\frac{\\alpha}{2}}(n-1)$}\n｜ ｜$\\sigma^2\\leqslant\\sigma^2_0$ ｜$\\sigma^2>\\sigma^2_0$ ｜ ｜$\\chi^2\\geqslant\\chi^2_\\alpha(n-1)$\n｜ ｜$\\sigma^2\\geqslant\\sigma^2_0$ ｜$\\sigma^2<\\sigma^2_0$ ｜ ｜$\\chi^2\\leqslant\\chi^2_{1-\\alpha}(n-1)$\n\n }",
  "relatedLessons": [
   "gl08"
  ],
  "raw": false
 },
 {
  "id": "rnote-r08-probability-theory-and-mathematical-statistics-knowledge-5-mathematical-statistics-mathematical-statistics-s4-3",
  "repo": "R08",
  "source": "probability-theory-and-mathematical-statistics/knowledge/5-mathematical-statistics/mathematical-statistics.tex#两类错误",
  "subject": "gailv",
  "topic": "假设检验",
  "title": "两类错误",
  "kind": "概念",
  "text": "显著性水平$\\alpha$实际上是犯第一类错误的概率的上界。\n\n{\n\n类型 ｜ 第一类错误 ｜ 第二类错误\n含义 ｜ 若$H_0$为真，否定$H_0$（弃真） ｜ 若$H_0$为假，接受$H_0$（存伪）\n发生概率 ｜$\\alpha=P\\{\\text{拒绝}H_0|H_0\\text{为真}\\}$ ｜\n\nc@{}}$\\beta=P\\{\\text{接受}H_0|H_0\\text{为假}\\}$\n$=P\\{\\text{接受}H_0|H_1\\text{为真}\\}$\n\n{c}{$\\beta=P\\{\\text{接受}H_0|H_0\\text{为假}\\}$\n$=P\\{\\text{接受}H_0|H_1\\text{为真}\\}$}\n说明 ｜\n\nc@{}}仅控制犯第一类错误的概率\n的检验称为显著性检验，\n概率为显著性水平\n\n{c}仅控制犯第一类错误的概率\n的检验称为显著性检验，\n概率为显著性水平 ｜\n\nc@{}}当样本容量固定，\n则$\\alpha$和$\\beta$中任意一个减少，\n则另一个必然增大，\n若要同时增大，\n则只能增大样本容量\n\n{c}{当样本容量固定，\n则$\\alpha$和$\\beta$中任意一个减少，\n则另一个必然增大，\n若要同时增大，\n则只能增大样本容量}\n\n}",
  "relatedLessons": [
   "gl08"
  ],
  "raw": false
 }
]
