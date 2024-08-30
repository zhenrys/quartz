# Git-bash命令

### 激活conda环境 `istar_pyenv`

```bash
source activate istar_pyenv
```

### 按照指定文件`requirements.txt`进行环境配置

```bash
pip install -r requirements.txt
```

查看python版本并更改

```bash
python --version
conda install python=3.10
```

---

# windows命令行

创建环境`Renv_name`

```anaconda
conda create -n env_name python=3.8
```

激活环境`Renv_name`及其反用

```anaconda
conda activate Renv_name

conda deactivate
```

查看环境下的包列表

```anaconda
conda list
```

移除环境

```anaconda
conda remove --name env_name  package_name

conda remove --name env_name --all
```
