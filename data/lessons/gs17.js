export default {
  "id": "gs17",
  "subject": "gaoshu",
  "no": 17,
  "title": "向量代数与空间解析几何",
  "subtitle": "第17讲",
  "hours": 6,
  "syllabusRef": "hm4",
  "goal": [
    "掌握向量点积、叉积与混合积",
    "建立直线、平面及常见曲面方程",
    "计算空间角度、距离与投影"
  ],
  "concepts": [
    {
      "name": "向量与方向",
      "body": "向量由大小和方向决定，可用坐标 $\\mathbf a=(a_1,a_2,a_3)$ 表示，模为 $|\\mathbf a|=\\sqrt{a_1^2+a_2^2+a_3^2}$。非零向量的单位方向向量为 $\\mathbf a/|\\mathbf a|$。"
    },
    {
      "name": "点积与夹角",
      "body": "$\\mathbf a\\cdot\\mathbf b=a_1b_1+a_2b_2+a_3b_3=|\\mathbf a||\\mathbf b|\\cos\\theta$。非零向量垂直当且仅当点积为零；投影的符号取决于方向。"
    },
    {
      "name": "叉积与混合积",
      "body": "$\\mathbf a\\times\\mathbf b$ 垂直于两向量，模为 $|\\mathbf a||\\mathbf b|\\sin\\theta$，方向由右手法则确定。$\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)$ 的绝对值是平行六面体体积。"
    },
    {
      "name": "平面",
      "body": "经过点 $P_0(x_0,y_0,z_0)$ 且法向量为 $\\mathbf n=(A,B,C)\\ne0$ 的平面满足 $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$。平面间夹角可由法向量求出。"
    },
    {
      "name": "空间直线",
      "body": "过点 $P_0$ 且方向向量为 $\\mathbf v\\ne0$ 的直线可写为 $\\mathbf r=\\mathbf r_0+t\\mathbf v$。对称式只在对应方向分量非零时直接使用；零分量应写成坐标保持常数。"
    },
    {
      "name": "距离与夹角",
      "body": "点到平面距离是点法式左端绝对值除以法向量模。点到直线距离可由连接向量与方向向量的叉积求得；直线与平面夹角使用方向向量与法向量夹角的余角。"
    },
    {
      "name": "曲面与曲线",
      "body": "球面 $(x-a)^2+(y-b)^2+(z-c)^2=R^2$ 表示中心 $(a,b,c)$、半径 $R$ 的球面。方程中缺少某一坐标常描述母线平行该坐标轴的柱面；旋转曲面以距旋转轴的距离构造。"
    },
    {
      "name": "常见二次曲面与投影",
      "body": "$x^2/a^2+y^2/b^2+z^2/c^2=1$ 是椭球面；$z=x^2+y^2$ 是旋转抛物面。空间曲线在坐标平面上的投影可消去相应坐标，同时保留剩余坐标的可取范围。"
    }
  ],
  "theorems": [
    {
      "name": "向量夹角",
      "statement": "$\\cos\\theta=(\\mathbf a\\cdot\\mathbf b)/(|\\mathbf a||\\mathbf b|)$。",
      "conditions": "两向量均非零，$0\\le\\theta\\le\\pi$。",
      "remark": "方向角与直线之间通常取锐角的约定要区分。"
    },
    {
      "name": "叉积长度",
      "statement": "$|\\mathbf a\\times\\mathbf b|$ 等于由两向量张成的平行四边形面积。",
      "conditions": "两个向量为三维实向量。",
      "remark": "叉积顺序反转会改变方向。"
    },
    {
      "name": "混合积",
      "statement": "$|\\mathbf a\\cdot(\\mathbf b\\times\\mathbf c)|$ 是平行六面体体积；混合积为零当且仅当三向量线性相关。",
      "conditions": "三维欧氏空间。",
      "remark": "行列式可用于坐标计算。"
    },
    {
      "name": "点到平面距离",
      "statement": "$d=|Ax_0+By_0+Cz_0+D|/\\sqrt{A^2+B^2+C^2}$。",
      "conditions": "平面 $Ax+By+Cz+D=0$ 且 $(A,B,C)\\ne0$。",
      "remark": "分母是法向量的模。"
    },
    {
      "name": "点到直线距离",
      "statement": "$d=|\\overrightarrow{P_0P}\\times\\mathbf v|/|\\mathbf v|$。",
      "conditions": "$P_0$ 在直线上，$\\mathbf v$ 为非零方向向量。",
      "remark": "分子是平行四边形面积。"
    },
    {
      "name": "直线与平面夹角",
      "statement": "$\\sin\\alpha=|\\mathbf v\\cdot\\mathbf n|/(|\\mathbf v||\\mathbf n|)$，其中 $0\\le\\alpha\\le\\pi/2$。",
      "conditions": "直线方向向量和法向量均非零。",
      "remark": "这是正弦而不是余弦。"
    }
  ],
  "examples": [
    {
      "title": "例1 点积夹角",
      "level": "基础",
      "problem": "求 $\\mathbf a=(1,1,0)$ 与 $\\mathbf b=(1,0,1)$ 的夹角。",
      "solution": [
        "点积为 $1$，两向量模均为 $\\sqrt2$。",
        "所以 $\\cos\\theta=1/2$。",
        "夹角 $\\theta=\\pi/3$。"
      ],
      "tip": "先算点积和模，再反求角度。"
    },
    {
      "title": "例2 平面方程",
      "level": "基础",
      "problem": "求过 $(1,2,0)$ 且法向量为 $(1,-1,2)$ 的平面。",
      "solution": [
        "代入点法式 $(x-1)-(y-2)+2z=0$。",
        "合并常数项。",
        "平面方程为 $x-y+2z+1=0$。"
      ],
      "tip": "将给定点代回可检查常数项。"
    },
    {
      "title": "例3 点到直线距离",
      "level": "强化",
      "problem": "求点 $(1,0,0)$ 到 $z$ 轴的距离。",
      "solution": [
        "取轴上一点 $P_0=(0,0,0)$、方向向量 $\\mathbf v=(0,0,1)$。",
        "$|(1,0,0)\\times(0,0,1)|=1$ 且 $|\\mathbf v|=1$。",
        "因此距离为 $1$。"
      ],
      "tip": "连接向量必须由轴上一点指向给定点。"
    },
    {
      "title": "例4 空间直线",
      "level": "强化",
      "problem": "求平面 $x+y+z=1$ 与 $x-y=0$ 的交线。",
      "solution": [
        "令 $x=y=t$，由第一式得到 $z=1-2t$。",
        "交线参数式为 $(x,y,z)=(t,t,1-2t)$。",
        "等价向量式为 $(0,0,1)+t(1,1,-2)$。"
      ],
      "tip": "两个独立平面的交线可用消元得到。"
    },
    {
      "title": "例5 旋转曲面",
      "level": "强化",
      "problem": "曲线 $z=x^2$（位于 $xz$ 平面）绕 $z$ 轴旋转，得到什么曲面？",
      "solution": [
        "旋转后到 $z$ 轴的距离满足 $r^2=x^2+y^2$。",
        "原曲线的 $x^2$ 替换为 $x^2+y^2$。",
        "得到旋转抛物面 $z=x^2+y^2$。"
      ],
      "tip": "使用到旋转轴的距离而不是简单替换坐标。"
    },
    {
      "title": "例6 向量叉积",
      "level": "强化",
      "problem": "求由 $(1,0,0)$ 与 $(0,2,0)$ 构成的平行四边形面积。",
      "solution": [
        "叉积为 $(0,0,2)$。",
        "其模为 $2$。",
        "故面积为 $2$。"
      ],
      "tip": "三角形面积为相应平行四边形面积的一半。"
    }
  ],
  "methods": [
    "直线先找方向向量，平面先找法向量。",
    "角度题分清点积公式中的正弦或余弦。",
    "距离题以垂直分量或叉积建立表达式。",
    "旋转面和投影题注意所得坐标的范围。"
  ],
  "pitfalls": [
    "零向量没有方向余弦。",
    "叉积是向量，混合积是标量。",
    "直线方向分量为零时不能直接把对应坐标写成除以零的对称式。"
  ],
  "exercises": [
    {
      "no": 1,
      "level": "基础",
      "problem": "求 $(1,2,3)\\cdot(2,0,-1)$。",
      "answer": "$-1$",
      "solution": "逐坐标相乘相加得到 $2+0-3=-1$。"
    },
    {
      "no": 2,
      "level": "基础",
      "problem": "求点 $(0,0,0)$ 到平面 $x+2y+2z-3=0$ 的距离。",
      "answer": "$1$",
      "solution": "代入点到平面公式得 $3/\\sqrt{1+4+4}=1$。"
    },
    {
      "no": 3,
      "level": "强化",
      "problem": "求过 $(0,1,2)$、方向向量为 $(1,0,2)$ 的直线参数式。",
      "answer": "$(x,y,z)=(t,1,2+2t)$",
      "solution": "将点与方向向量代入 $\\mathbf r=\\mathbf r_0+t\\mathbf v$。"
    },
    {
      "no": 4,
      "level": "强化",
      "problem": "求 $x^2+y^2=4$ 表示的曲面。",
      "answer": "以 $z$ 轴为轴、半径为 2 的圆柱面",
      "solution": "方程不限制 $z$，其在每个水平截面上都是半径为 $2$ 的圆。"
    },
    {
      "no": 5,
      "level": "强化",
      "problem": "判断向量 $(1,1,0)$ 与 $(1,-1,0)$ 是否垂直。",
      "answer": "垂直",
      "solution": "两向量均非零，点积为 $1-1=0$。"
    }
  ]
};
