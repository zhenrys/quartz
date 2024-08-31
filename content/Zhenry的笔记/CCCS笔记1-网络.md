#CrashCourseComputerScience

课程全名：`Crash Course Computer Science`

学习资料：
1. [Youtube 原视频](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulI)
2. [b站搬运中字视频](https://www.bilibili.com/video/BV1EW411u7th/?spm_id_from=333.337.search-card.all.click&vd_source=c57c36d9ae6e8a5b4aa47ed2ea11202f)

---

# 28 计算机网络
| In Short | Full Name or Explanation |
|:---|---|
|`LANs`|`Local Area Networks`| 
|`Ethernet`|The most famous LANs is the `ethernet`(以太网，提出了MAC地址的概念)| 
|`MAC Address`|`Media Access Control Address`|
|`collision domian`|冲突域：在其中不能有两个同时传输信息的电脑|
|`exponential backoff`|指数退避，在发生冲突时候，呈指数延后发送时间实现退让|
|`Switch`|交换机，用于分割大冲突域（大网络）为不同的小冲突域（小网络）|
|`routing`|路由器|
|`message switching`|报文交换，消息会经过不同的站点（路由）|
|`hop counts`|跳数，信息在路由器跳转的次数|
|`hop limits`|跳数限制，如果跳转次数过多通常意味着路由记录的跳转信息出现了问题，网页也会无法返回（遇到过）|
|`bandwidth`|带宽，多少比特每秒，`bps`|
|`packet switch`|分组交换，`packets`->数据包。大文件通常通过拆分进行传输，不同数据包到达路径可能不同|
|`TCP\IP`|路由器协议，可以解决数据包的到达乱序问题|
![](image-20240716203653458.png)

---

# 29 互联网

| In Short   | Full Name or Explanation                                                              |
| :--------- | ------------------------------------------------------------------------------------- |
| `IP`       | 互联网协议-Internet Protocol                                                               |
| `UDP`      | 用户数据报协议-User Datagram Protocol。基于IP协议上，多了校验和，非常快（射击游戏常用UDP），但是没有ACK（确认码）回信            |
| `Checksum` | 校验和，UDP中使用，确认数据没有丢失                                                                   |
| `Port`     | 在UDP中使用，端口号对应着把数据交给哪个程序                                                               |
| `TCP`      | 传输控制协议-Transmission Control Protocal，也写作tcp/ip，有packets编号，有ACK（确认码）回信（丢包就重发），慢，但保证完整性 |
| `DNS`      | Domian Name System，树状存储（各级域名）                                                         |
| `ACK`      | 确认码，在TCP中使用，回信时间用来判断网络拥堵程度，从而调整发包数量。                                                  |

![|250](image-20240717100633899.png)

# OSI分层模型

| Layer name               | contain                            |
| :----------------------- | ---------------------------------- |
| `Physical Layer`         | 被操纵的硬件                             |
| `Data Link Layer`（数据链路层） | MAC,指数退避,碰撞检测                      |
| `Network Layer`（网络层）     | switching and routing              |
| `Transport Layer`（传输层）   | UDP,TCP                            |
| `Session Layer`(会话层)     | Session：创建连接（by UDP，TCP）-传递信息-关掉连接 |
| `Presentation Lay`er     |                                    |
| `Application Layer`      |                                    |
*ps：层层抽象*

---

# 30 万维网

| In Short           | Full Name or Explanation                                                                       |
| :----------------- | ---------------------------------------------------------------------------------------------- |
| HyperLinks         | 超链接                                                                                            |
| URL                | Uniform Resource Locator                                                                       |
| HTTP               | HyperText Transfer Protocol 超文本传输协议                                                            |
| HTML               | HyperText Markup Language，现有HTML5，支持网页上的多种元素组件。*现代网页可以再加入css和javascript*                       |
| WWW                | 万维网，==因特网是管道，万维网是服务==                                                                          |
| Browser            | 浏览器                                                                                            |
| Search Engine      | 最开始是索引网页，Yahoo，Google。现代SE：1.web crawler（不断访问并记录所有网页）  2. Index（统计网页上的关键词）  3. search(搜索算法，排序) |
| Network neutrality | 网络中立性，所有数据包都以相同速度传输（尚有争议）。反面：==节流==                                                            |

---

