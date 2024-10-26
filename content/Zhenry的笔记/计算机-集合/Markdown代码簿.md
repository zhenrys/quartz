%% 实时预览界面，可以直接点击查看代码 %%

---

```cpp
for (int i=1;i){

}
```


---
# obsidian自设快捷键

各级标题
`Ctrl + 123456`

插入代码块
Ctrl + \`

高亮
`Ctrl + H`

倾斜
`Ctrl + I`

---
# 调整图片大小
1. png后面加上|500
2. 插件快捷键：`alt`+滚轮

# 快速把文字变成代办 
* 选中再ctrl+L

# 链接内容预览

* 感叹号+链接


# 表格对齐
|---:|
|:---|
|:---:|

# 链接到标题
* 直接按照链接格式输入`###想要被链接的标题`即可，中间不要加空格。

[链接到页面顶部](###常用字符的表示 )

# markdown的注释
* 渲染时候会跳过注释。
* markdown快捷键：`ctrl+/`，插入效果：`%% 文字 %%`


# 三个隐藏在英文版中的输入块，在后面加入+-可以控制折叠

```
>[!记录主题自拟]

>[!hint]

>[!warning]
```

>[!记录主题自拟]-
>可以折叠，妙吧

>[!hint]

>[!warning]




---
# 数学公式

## 常用符号

### 希腊字母对照表

| 希腊字母 |         LaTeX 命令          | 希腊字母<br> | LaTeX 命令              |
| :--: | :-----------------------: | -------- | --------------------- |
|  α   |         `\alpha`          | ν        | `\nu`                 |
|  β   |          `\beta`          | ξ        | `\xi`                 |
|  γ   |         `\gamma`          | ο        | `\omicron`            |
|  δ   |         `\delta`          | π        | `\pi`                 |
|  ε   | `\epsilon`or`\varepsilon` | ρ        | `\rho`                |
|  ζ   |          `\zeta`          | σ        | `\sigma`or`\varsigma` |
|  η   |          `\eta`           | τ        | `\tau`                |
|  θ   |         `\theta`          | υ        | `\upsilon`            |
|  ι   |          `\iota`          | φ        | `\phi`or`\varphi`     |
|  κ   |         `\kappa`          | χ        | `\chi`                |
|  λ   |         `\lambda`         | ψ        | `\psi`                |
|  μ   |           `\mu`           | ω        | `\omega`              |

>[!Note]
>大写希腊字母只需把首字母大写。


### 求和号
```latex
$\sum\limits_{n=1}^{20}$
```

$\sum\limits_{n=1}^{20}$

### 对齐公式

```latex
$$
\begin{align*}
1=2\\
23=3\\
\end{align*}
$$
```

$$
\begin{align*}
1=2\\
23=3\\
\end{align*}
$$

### 文本
```latex
$\text{1}$
```

$\text{1}$
### 空格
```latex
$1\quad2$
```

$1\quad2$


### 矩阵的表示

```latex
$\left[\begin{matrix}1&2\\3&4\end{matrix}\right]$

$\begin{pmatrix}0&0\\0&0\end{pmatrix}\begin{vmatrix}0&0\\0&0\end{vmatrix}$

$\cdots\quad\vdots\quad\ddots$
```


$\left[\begin{matrix}1&2\\3&4\end{matrix}\right]$

$\begin{pmatrix}0&0\\0&0\end{pmatrix}\begin{vmatrix}0&0\\0&0\end{vmatrix}$

$\cdots\quad\vdots\quad\ddots$


## 一些英语字体的表示

```latex
$abcdefg$
$\mathbb{abcdefg}$
$\mathbf{abcdefg}$
$\boldsymbol{abedefg}$

$$\begin{aligned}\mathrm{A}\quad\mathcal{A}\quad \mathfrak{A}\quad\mathscr{AB}\quad A \quad \bf{A\alpha} \quad \boldsymbol{\alpha} \quad \mathbb{R}\end{aligned}$$

```

$abcdefg$
$\mathbb{abcdefg}$
$\mathbf{abcdefg}$
$\boldsymbol{abedefg}$

$$\begin{aligned}\mathrm{A}\quad\mathcal{A}\quad \mathfrak{A}\quad\mathscr{AB}\quad A \quad \bf{A\alpha} \quad \boldsymbol{\alpha} \quad \mathbb{R}\end{aligned}$$


## 通过\displaystyle来打出大号运算符

```latex
$\displaystyle\sum\prod\int\iint\iiint\oint\bigcap_a^b\bigcup\lim$

$\int_a^b$ $\int\limits_a^b$ $\displaystyle\int$ 

$\bigcap_a^bO_i$
```

$\displaystyle\sum\prod\int\iint\iiint\oint\bigcap_a^b\bigcup\lim$

$\int_a^b$ $\int\limits_a^b$ $\displaystyle\int$ 

$\bigcap_a^bO_i$

# Quick Latex

### 自动闭合$ 符号 + 在\$$ 符号之间移动光标

### 自动关闭 {}, \[], () 括号
### 在 “\sum” 后自动添加 “\limits”

$\sum\limits_{a}^{b}$

### 在上标和下标后 `空格` 自动用{}括起表达式

$a^{lnx}$

### 选择一个表达式并按下 ”`$`” 键，将自动用数学符号将表达式括起来

### 输入$e/2$**，然后按下**“`空格键`”**，系统会自动将表达式替换为**$\frac{e}{2}$

$\frac{e}{2}$

### 用`altl+shift+4`插入数学块

### 使用快捷键 “`Alt+Shift+A`” 快速插入**\begin{align*} \end{align*}块

$$
\begin{align*}
a=b\\
b=c\\
c=d\\

\end{align*}
$$
### 使用快捷键 “Alt+Shift+M”（Mac： “Option+Shift+M”）快速插入**\begin{pmatrix} \end{pmatrix}**块


$$
\begin{pmatrix}a & b & c & d \\ a & b & c & d\end{pmatrix}
$$
- 在矩阵块内按下**“tab”**将自动插入**” & ”**。
- 在矩阵块内按下**“enter”**将自动插入**” \\ ”**。
- 按下**“shift+enter”**可在**不添加**这些符号的情况下进入下一行
- 使用 Tab 和 Shift-Tab 在数学表达式中快速跳转从括号到括号

### 速记：在\$$后 输入 “`al`” 后按下空格键将替换为 “\alpha”
$$
\begin{align*}

\end{align*}
$$

| 速记  | 字符串     | 速记  | 字符串       | 速记  | 字符串                   |
| --- | ------- | --- | --------- | --- | --------------------- |
| sq  | \sqrt{} | bb  | \mathbb{} | bf  | \mathbf{}             |
| te  | \text{} | inf | \infty    | bi  | \binom{#cursor}{#tab} |
| cd  | \cdot   | qu  | \quad     | ti  | \times                |



# $\LaTeX$  符号大全

![](image-20240909202349096.png)

![](image-20240909203325204.png)

![](image-20240909203332891.png)

![](image-20240909203347797.png)

参考☞ https://blog.csdn.net/yen_csdn/article/details/79966985