WSL官方下载Ubuntu文档☞[Install Ubuntu on WSL2 - Ubuntu WSL documentation](https://canonical-ubuntu-wsl.readthedocs-hosted.com/en/latest/guides/install-ubuntu-wsl2/)

参考☞[使用Windows11自带的WSL安装Ubuntu Linux系统教程-CSDN博客](https://blog.csdn.net/bule_shake/article/details/135992375)

相关笔记☞[分布式-课上笔记](分布式-课上笔记.md)

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

## 文件与目录（常用）

| 示例命令                                 | 功能描述              | 英文全称                                                                                                            |
| ------------------------------------ | ----------------- | --------------------------------------------------------------------------------------------------------------- |
| `ls`                                 | 列出目录内容            | list directory contents                                                                                         |
| `ls -lsth`                           | 以详细列表格式==列出目录内容== | list directory contents in ==l==ong format，==s==how block size，sort by modification ==t==ime，==h==uman-readable |
| `cd /path/to/directory`              | 切换到指定目录           | change directory                                                                                                |
| `pwd`                                | 显示==当前工作目录路径==    | print working directory                                                                                         |
| `cp source.txt destination.txt`      | 复制文件              | copy                                                                                                            |
| `cp -r source_dir/ destination_dir/` | 递归复制整个目录          | copy, recursively                                                                                               |
| `mv oldname.txt newname.txt`         | 移动或重命名文件或目录       | move                                                                                                            |
| `rm file.txt`                        | 删除文件              | remove                                                                                                          |
| `rm -r directory_name/`              | 递归删除目录            | remove, recursively                                                                                             |
| `mkdir new_directory`                | 创建新目录             | make directory                                                                                                  |
| `rmdir empty_directory`              | 删除空目录             | remove directory                                                                                                |
| `touch newfile.txt`                  | 创建空文件或更新文件的修改时间   | (UNIX timestamp operation)                                                                                      |
| `cat file.txt`                       | 显示文件内容            | ==concatenate== and display files                                                                               |
| `more file.txt`                      | 分页查看文件内容          | more interactive display of file content                                                                        |
| `less file.txt`                      | 分页查看文件内容，可向上滚动    | similar to more, with reverse scrolling                                                                         |
| `head -n 10 file.txt`                | 显示文件的前几行          | display the head of the file                                                                                    |
| `tail -n 10 file.txt`                | 显示文件的最后几行         | display the tail of the file                                                                                    |
| `find /path -name filename`          | ==查找文件和目录==       | find files and directories                                                                                      |
| `chmod 755 filename`                 | ==更改文件或目录权限==     | change mode                                                                                                     |


## 安装conda用于环境管理

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

bash Miniconda3-latest-Linux-x86_64.sh

source ~/.bashrc

```
## 权限设置

| 示例命令                                      | 功能描述                             | 英文全称                                  |
| ----------------------------------------- | -------------------------------- | ------------------------------------- |
| `chmod 755 filename`                      | 设置文件的权限为755（拥有者可读写执行，组和其他用户可读执行） | change mode (permissions)             |
| `chmod 644 filename`                      | 设置文件的权限为644（拥有者可读写，组和其他用户可读）     | change mode (permissions)             |
| `chmod -R 755 directory_name`             | 递归设置目录及其内容的权限为755                | recursively change mode (permissions) |
| `sudo chmod 777 filename`                 | ==将文件权限设置为777（所有用户可读写执行）==       | change mode (permissions) to 777      |



## 进程管理

| 示例命令                 | 功能描述                | 英文全称                                      |     |
| -------------------- | ------------------- | ----------------------------------------- | --- |
| `ps aux`             | ==显示所有进程的详细信息==     | process status (all users, detailed)      |     |
| `top`                | 实时显示系统中运行的进程及资源使用情况 | display tasks (real-time process monitor) |     |
| `kill PID`           | ==终止指定PID的进程==      | kill a process                            |     |


## 脚本执行

| 示例命令                 | 功能描述                         | 英文全称                           |
| -------------------- | ---------------------------- | ------------------------------ |
| `bash script.sh`     | 使用 Bash 运行脚本                 | Bourne Again Shell             |
| `sh script.sh`       | ==使用 sh 运行脚本==               | shell                          |
| `./script.sh`        | 直接执行当前目录下的脚本（需要执行权限）         | execute script directly        |
| `chmod +x script.sh` | ==为脚本添加执行权限==                | change mode to executable      |
| `python3 script.py`  | ==使用 Python 3 运行 Python 脚本== | Python 3 interpreter           |
| `./script.py`        | 直接执行 Python 脚本（需要执行权限）       | execute Python script directly |


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

