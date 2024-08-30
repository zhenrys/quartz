mkdocs是一个便捷的网站生成系统，下面是使用过程中的主要命令与作用效果介绍。
## mkdocs生成网页的主要命令
打开终端，将路径切换到mymkdocs下
```cmd
# 实时预览
mkdocs serve

# 生成html
mkdocs build

# 创建分支并推送
mkdocs gh-deploy

```


## 修改mkdocs.yml
#### 导航栏
```yml
site_name: 我的站点
nav: 
  - Home: index.md
  - About me: about.md
  - newpage: 

```
#### 导航栏多级导航
新建对应目录（文件夹）
```yaml
nav: 
  - 主页: index.md
  - 教程:
    - C: 
      - 第一章: Tutorial/C/chapter-1.md
      - 第二章: Tutorial/C/chapter-2.md
    - Java: Tutorial/Java.md
    - Python: Tutorial/Python.md
  - 关于我: about.md

```

#### 主题和图标
* 主题
```yml
theme:
  name: material
```
* 图标：如果使用mkdocs主题，只需要在`docs`目录下创建目录`img`，然后在目录`img`中放入`favicon.ico`图标即可。

☞ [访问我的mkdocs主页](https://zhenrys.github.io/mymkdocs/)



