WSL官方下载Ubuntu文档☞[Install Ubuntu on WSL2 - Ubuntu WSL documentation](https://canonical-ubuntu-wsl.readthedocs-hosted.com/en/latest/guides/install-ubuntu-wsl2/)

参考☞[使用Windows11自带的WSL安装Ubuntu Linux系统教程-CSDN博客](https://blog.csdn.net/bule_shake/article/details/135992375)

相关笔记☞[课程-分布式存储与计算](课程-分布式存储与计算.md)

相关笔记☞[课程-分布式-第一次上机作业](课程-分布式-第一次上机作业.md)

---


# 发行版选择

Linux有许多不同的发行版（也称为“distros”），每个发行版都有自己的特点和目标用户群。对于初学者来说，以下几个发行版是不错的选择：

- ==**Ubuntu**==：用户友好，社区支持广泛，适合初学者和桌面用户。
- **Fedora**：注重开源软件和前沿技术，适合想要尝试新技术的用户。
- **Linux Mint**：基于Ubuntu，但界面更接近Windows，适合习惯于Windows的用户。
- **Debian**：稳定、安全，但软件版本更新较慢，适合想要稳定环境的用户。
# 下载与注册

参考☞[使用Windows11自带的WSL安装Ubuntu Linux系统教程-CSDN博客](https://blog.csdn.net/bule_shake/article/details/135992375)

>[!Note]
>* 调整了不同终端的背景颜色方便直接区分。
>* Linux的密码不直接显示。
>* Linux通常不配置可视化操作界面。
>* 在子系统中，windows的所有盘符都以硬件设备方式挂载在`/mnt/`，可以直接访问。


---
# 命令

## 文件与目录

| 示例命令                                 | 功能描述              | 英文全称                                                                                                            |     |
| ------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------- | --- |
| `ls`                                 | 列出目录内容            | list directory contents                                                                                         |     |
| `ls -lsth`                           | 以详细列表格式==列出目录内容== | list directory contents in ==l==ong format，==s==how block size，sort by modification ==t==ime，==h==uman-readable |     |
| `cd /path/to/directory`              | 切换到指定目录           | change directory                                                                                                |     |
| `pwd`                                | 显示==当前工作目录路径==    | print working directory                                                                                         |     |
| `cp source.txt destination.txt`      | 复制文件              | copy                                                                                                            |     |
| `cp -r source_dir/ destination_dir/` | 递归复制整个目录          | copy, recursively                                                                                               |     |
| `mv oldname.txt newname.txt`         | 移动或重命名文件或目录       | move                                                                                                            |     |
| `rm file.txt`                        | 删除文件              | remove                                                                                                          |     |
| `rm -r directory_name/`              | 递归删除目录            | remove, recursively                                                                                             |     |
| `mkdir new_directory`                | 创建新目录             | make directory                                                                                                  |     |
| `rmdir empty_directory`              | 删除空目录             | remove directory                                                                                                |     |
| `touch newfile.txt`                  | 创建空文件或更新文件的修改时间   | (UNIX timestamp operation)                                                                                      |     |
| `cat file.txt`                       | 显示文件内容            | ==concatenate== and display files                                                                               |     |
| `more file.txt`                      | 分页查看文件内容          | more interactive display of file content                                                                        |     |
| `less file.txt`                      | 分页查看文件内容，可向上滚动    | similar to more, with reverse scrolling                                                                         |     |
| `head -n 10 file.txt`                | 显示文件的前几行          | display the head of the file                                                                                    |     |
| `tail -n 10 file.txt`                | 显示文件的最后几行         | display the tail of the file                                                                                    |     |
| `tail -f file.txt`                   | 实时显示文件的末尾内容       | follow file tail                                                                                                |     |
| `find /path -name filename`          | 查找文件和目录           | find files and directories                                                                                      |     |
| `du -h directory_name/`              | 显示文件或目录的磁盘使用情况    | disk usage                                                                                                      |     |
| `df -h`                              | 显示文件系统的磁盘空间使用情况   | disk free space                                                                                                 |     |
| `ln -s target link_name`             | 创建符号链接或硬链接        | link files                                                                                                      |     |
| `chmod 755 filename`                 | 更改文件或目录权限         | change mode                                                                                                     |     |
| `sudo chown user:group filename`     | 更改文件或目录所有者        | change owner                                                                                                    |     |
| `stat filename`                      | 显示文件或文件系统的状态信息    | statistics about file system                                                                                    |     |
|                                      |                   |                                                                                                                 |     |

## 安装conda用于环境管理

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

bash Miniconda3-latest-Linux-x86_64.sh

source ~/.bashrc

```
## 权限设置

| 示例命令                                      | 功能描述                             | 英文全称                                    |
| ----------------------------------------- | -------------------------------- | --------------------------------------- |
| `chmod 755 filename`                      | 设置文件的权限为755（拥有者可读写执行，组和其他用户可读执行） | change mode (permissions)               |
| `chmod 644 filename`                      | 设置文件的权限为644（拥有者可读写，组和其他用户可读）     | change mode (permissions)               |
| `chmod u+x filename`                      | 给文件的拥有者添加执行权限                    | add execute permission for the user     |
| `chmod g-w filename`                      | 移除文件的组写权限                        | remove write permission for the group   |
| `chmod o+r filename`                      | 给其他用户添加读权限                       | add read permission for others          |
| `chmod -R 755 directory_name`             | 递归设置目录及其内容的权限为755                | recursively change mode (permissions)   |
| `chown user:group filename`               | 更改文件的拥有者和组                       | change owner and group                  |
| `chown user filename`                     | 更改文件的拥有者                         | change owner                            |
| `chgrp groupname filename`                | 更改文件的组                           | change group                            |
| `umask 022`                               | 设置默认权限掩码，创建文件时默认权限为755           | set user file creation mode mask        |
| `sudo chmod 777 filename`                 | ==将文件权限设置为777（所有用户可读写执行）==       | change mode (permissions) to 777        |
| `sudo chown -R user:group directory_name` | 递归更改目录及其内容的拥有者和组                 | recursively change owner and group      |
| `sudo chgrp -R groupname directory_name`  | 递归更改目录及其内容的组                     | recursively change group                |
| `ls -l filename`                          | 显示文件的详细权限信息                      | list file details including permissions |
| `stat filename`                           | 显示文件的详细状态信息，包括权限                 | display file or file system status      |

## 进程管理

| 示例命令                             | 功能描述                    | 英文全称                                        |                      |
| -------------------------------- | ----------------------- | ------------------------------------------- | -------------------- |
| `ps aux`                         | ==显示所有进程的详细信息==         | process status (all users, detailed)        |                      |
| `top`                            | 实时显示系统中运行的进程及资源使用情况     | display tasks (real-time process monitor)   |                      |
| `htop`                           | 交互式查看和管理进程（比 `top` 更直观） | interactive process viewer                  |                      |
| `pidof program_name`             | 查找某个运行程序的进程ID           | process ID of a program                     |                      |
| `pgrep program_name`             | 查找与指定名称匹配的进程ID          | process grep                                |                      |
| `kill PID`                       | ==终止指定PID的进程==          | kill a process                              |                      |
| `kill -9 PID`                    | 强制终止指定PID的进程            | force kill a process                        |                      |
| `killall program_name`           | 终止所有指定名称的进程             | kill all processes by name                  |                      |
| `pkill program_name`             | 终止匹配指定名称的进程             | process kill by name                        |                      |
| `nice -n 10 command`             | 以调整后的优先级启动命令            | set process priority (nice value)           |                      |
| `renice -n 10 -p PID`            | 调整指定PID进程的优先级           | change priority of a running process        |                      |
| `nohup command &`                | 在后台运行命令并忽略挂起信号          | no hangup (run a command in the background) |                      |
| `jobs`                           | 显示当前 shell 的后台任务列表      | list background jobs                        |                      |
| `bg %1`                          | 将任务放到后台运行（任务ID为1）       | background a job                            |                      |
| `fg %1`                          | 将后台任务调至前台运行（任务ID为1）     | foreground a job                            |                      |
| `ps -ef                          | grep program_name`      | 查找特定程序的进程信息                                 | search for processes |
| `strace -p PID`                  | 跟踪指定PID的系统调用            | system call trace                           |                      |
| `lsof -p PID`                    | 列出与指定进程关联的打开文件          | list open files associated with a process   |                      |
| `systemctl status service_name`  | 检查系统服务状态                | system control (service status)             |                      |
| `systemctl stop service_name`    | 停止指定的系统服务               | stop a system service                       |                      |
| `systemctl start service_name`   | 启动指定的系统服务               | start a system service                      |                      |
| `systemctl restart service_name` | 重启指定的系统服务               | restart a system service                    |                      |


## 脚本执行

| 示例命令                              | 功能描述                          | 英文全称                                                |
| --------------------------------- | ----------------------------- | --------------------------------------------------- |
| `bash script.sh`                  | 使用 Bash 运行脚本                  | Bourne Again Shell                                  |
| `sh script.sh`                    | ==使用 sh 运行脚本==                | shell                                               |
| `./script.sh`                     | 直接执行当前目录下的脚本（需要执行权限）          | execute script directly                             |
| `chmod +x script.sh`              | ==为脚本添加执行权限==                 | change mode to executable                           |
| `python script.py`                | 使用 Python 运行 Python 脚本        | Python interpreter                                  |
| `python3 script.py`               | ==使用 Python 3 运行 Python 脚本==  | Python 3 interpreter                                |
| `perl script.pl`                  | 使用 Perl 运行 Perl 脚本            | Practical Extraction and Report Language            |
| `ruby script.rb`                  | 使用 Ruby 运行 Ruby 脚本            | Ruby interpreter                                    |
| `./script.py`                     | 直接执行 Python 脚本（需要执行权限）        | execute Python script directly                      |
| `./script.rb`                     | 直接执行 Ruby 脚本（需要执行权限）          | execute Ruby script directly                        |
| `./script.pl`                     | 直接执行 Perl 脚本（需要执行权限）          | execute Perl script directly                        |
| `sudo ./script.sh`                | 以超级用户权限执行脚本                   | superuser do (run script with superuser privileges) |
| `nohup ./script.sh &`             | 在后台运行脚本并忽略挂起信号                | no hangup (run script in the background)            |
| `source script.sh`                | 在当前 shell 中执行脚本               | execute script in the current shell                 |
| `. script.sh`                     | 在当前 shell 中执行脚本（等同于 `source`） | execute script in the current shell                 |
| `at now + 5 minutes -f script.sh` | 计划任务，5 分钟后运行脚本                | at (schedule a script to run after a delay)         |
| `crontab -e`                      | 编辑用户的定时任务列表                   | cron table (edit scheduled tasks)                   |
| `./gradlew build`                 | 使用 Gradle Wrapper 运行构建脚本      | Gradle Wrapper build                                |
| `mvn clean install`               | 使用 Maven 运行构建脚本               | Maven build (clean and install)                     |

---
# 网络配置

编辑网络配置文件，这些配置文件在重启后仍然有效。

#### 在基于 Debian/Ubuntu 的系统中：

**编辑 `/etc/network/interfaces` 文件：**
```bash
sudo nano /etc/network/interfaces
```

添加以下内容以配置静态 IP：
```bash
auto eth0
iface eth0 inet static
    address 192.168.1.100
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8 8.8.4.4

```

**重新启动网络服务：**
```bash
sudo systemctl restart networking

```

