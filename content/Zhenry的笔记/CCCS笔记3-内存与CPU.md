#CrashCourseComputerScience

课程全名：`Crash Course Computer Science`

学习资料：
1. [Youtube 原视频](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulI)
2. [b站搬运中字视频](https://www.bilibili.com/video/BV1EW411u7th/?spm_id_from=333.337.search-card.all.click&vd_source=c57c36d9ae6e8a5b4aa47ed2ea11202f)

---

%% 2024年8月17日22:40:59 %%

# 6内存

* `ALU`-`arithmetic logic unit` 算术逻辑单元
	* `CPU`的单位
* `RAM`-`random access memory` 随机存取储存器
	* 该结构储存能力依赖供电，有多种再分类
		* `static random-access memory` 静态随机存取存储器——`SRAM`，
		* `DRAM`，
		* `flash`，
		* `memory`，
		* `NVRAM`
* `multiplexer`多路复用器
	* 将四位二进制数转化为挑选出对应的电线，实现矩阵排列的内存单元的挑选
* `latcher`锁存器
	* 通常是`RAM`的单元

---
# 7CPU
CPU的抽象结构示意图：

![|400](image-20240816195044401.png)

说明：
* `control unit`是一层抽象的结果。
* `ALU`是算术逻辑单元，用于执行对数据的加减乘除等操作。
* `register`表示寄存器
* `RAM`运行内存
* `clock`CPU运行的“调速器”
* `flag`标记算术结果的正负：`N:negative

>[!note]
>CPU程序的执行阶段：
>1. **取指令阶段**`fetch phase`：先从RAM读取第一个指令`instruction`，指令的前四位是操作码`opcode (operation code)`，可以表示取出，加，存入等操作；后四位指代的是被操作对象（通常是RAM的地址，或者寄存器的编号），把读取到的指令储存在指令寄存器`instruction register`中。
>2. **解码阶段**`decode phase`：解释读取出的八位编码，找到指令对应表中的操作编号，找到操作对象的地址。
>3. **执行阶段**`execute phase`：按照操作码执行操作，有些会用到`ALU`，例如**加运算**。最后`inst addr register`数值+1，记录执行了多少个周期。

>[!hint]
>时钟`clock`负责推进操作的执行，类似节拍器，操作执行的速度对应**时钟速度`clock speed`**，单位是赫兹`hertz`。
>	1. **超频**：调快时钟速度，使得电脑更快的计算。
>	2. **降频**：调慢休眠模式，节约电能。

---
# 8指令集

指令示例：
* `LOAD`读取
* `ADD`加
* `STORE`存储
* `HALT`停止
* `JUMP`跳转

---
# 9高级CPU设计

>[!hint]
>想让火车跑的更快：1. 强大的蒸汽机 2. 快速加煤
>
>对应的操作：1. 指令集内增加复杂指令 2. CPU缓存

* `ALU`内增一些复杂指令，如除法。扩增指令集，从而提高计算效率
* `BUS` 总线，链接`CPU`与`RAM`
* `cache`缓存，`RAM`一次性传入多个相连数据
	* `cache hit`缓存命中，所需要的数据缓存里恰好有
	* `cache miss`
* `dirty bit`脏位，用于标记缓存与RAM对应位置产生不同的地方
* `parallelize`并行处理
	* 如图![|150](image-20240817222634470.png)
* `out of order execution`乱序执行，用于在并行计算的时候，结合数据之间的依赖关系进行执行顺序的调整，是现代芯片的重要功能之一。
* `conditional jump instruction`条件跳转，在条件得到确认后再候进行跳转操作。
	* `speculative execution`推测执行，CPU对条件的可能结果进行推测并继续计算，不等待条件结果。
	* `pipeline flush`流水线清空，在预测错误的情况下删除预先计算出的数据
	* `branch prediction`分支预测，电脑计算分支运行的概率，正确率通常能达到90%
* 多`ALU`结构
	* 如图![|125](image-20240817223427778.png)
* 单CPU多核结构`multiple processors`
	* 如图![|225](image-20240817223548752.png)
* `flops：floating point math operations per second`每秒浮点运算次数，衡量`CPU`算力的标准


---

