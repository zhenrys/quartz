#CrashCourseComputerScience

课程全名：`Crash Course Computer Science`

学习资料：
1. [Youtube 原视频](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulI)
2. [b站搬运中字视频](https://www.bilibili.com/video/BV1EW411u7th/?spm_id_from=333.337.search-card.all.click&vd_source=c57c36d9ae6e8a5b4aa47ed2ea11202f)

---

# 31 计算机安全
## `security`
只有拥有权限的人，才能访问计算机中的某些信息。

攻击保密性（泄密）：黑客泄露别人银行卡密码
## `integrity`
只有拥有权限的人，才能使用和修改计算机数据

攻击完整性：黑客假冒用户发送邮件

## `availablility`
有权限的人可以随时访问系统和数据

攻击可用性：DDOS攻击（通过大量假请求使得服务器瘫痪）

## 权限授予
* 1你是谁——身份认证
* 2你能获取什么——访问控制


### 1. 身份认证（鉴权）
* 你知道什么：安全问题，密码
* 你拥有什么：实体U盘密码
* 你是谁：生物识别（区别于前两者，具有随机性）


>[!Note]
>双重验证（针对重要账户使用）：因为每种都容易被单独攻破。


>[!Note]
>暴力攻击：遍历所有密码可能。关于密码Computerphile视频有讲如何设置好密码。
>
>应对策略：错误三次限制
>
>黑客应对策略：僵尸电脑

### 2. 访问控制

#### 权限内容
- read
- write
- execute：允许运行程序

>[!Note]
>这些都记录在ACL：`access control list`


#### 密级
- public
- secret
- top secret

#### 访问模型：
- Bell-Lapudula模型：可以读上；不能写下
- Chinese Wall 模型：
- Biba 模型

#### 降低损害——隔离：
将程序放入沙箱，一个崩溃不影响其他，类似虚拟机。


%%  2024年7月18日08:17:32  %%

---

# 32 黑客与攻击

| In Short              | Full Name or Explanation                                                          |
| --------------------- | --------------------------------------------------------------------------------- |
| `social engineering ` | 社会工程学：通过人的社会性，结合心理学实现某种目的，难听点：骗。                                                  |
| `phishing`            | 钓鱼（fishing的谐音）：让你主动泄露                                                             |
| `pretexting`          | 假托，如：打电话给公司说自己是合作部门的人员，通过转接电话获取信任。再尝试让对方泄露一些关键计算机配置。                              |
| `Trojan Horses`       | 木马病毒：伪装成无害信件，照片，发票等。                                                              |
| `NAND mirroring`      | 一种攻破密码的方法，通过暴力尝试加不断重置内存（重置错误上限，等待时间等）                                             |
| `exploit`             | 漏洞利用                                                                              |
| `buffer overflow`     | 缓冲区溢出，通常被黑客用来实现改写程序某些关键部分的代码                                                      |
| `code injection`      | 代码注入，常见的改写程序代码方式，再用户名等可输入处填写重置类代码`zero day vulnerability` 零日漏洞，最新出现的漏洞，通常被售卖，政府需要 |
| `worms`               | 蠕虫，一个可以通过互联网进行传播的恶意程序                                                             |
| `botnet`              | 僵尸网络，被蠕虫类病毒控制的所有电脑组成的集合                                                           |
| `DDoS`                | Distributed Denial of Service Attack，分布式拒绝服务攻击，通过僵尸网络发送大量垃圾信息使得网络拥堵，或者瘫痪服务器       |
| `hacktivist`          | 黑客行动主义者，出于政治或者社会目的进行的黑客行为                                                         |

# 攻击每天都在发生
![](image-20240719103925235.png)


%%  2024年7月19日10:39:32  %%
 
---

