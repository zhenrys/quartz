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

---

# conda命令实例

| 示例命令                                        | 功能描述              | 英文全称                                                   |
| ------------------------------------------- | ----------------- | ------------------------------------------------------ |
| `conda create --n env_name`                 | ==创建一个新环境==       | create a new environment                               |
| `conda activate env_name`                   | ==激活一个环境==        | activate an environment                                |
| `conda deactivate`                          | 停用当前激活的环境         | deactivate the current environment                     |
| `conda env list`                            | ==列出所有环境==        | list all environments                                  |
| `conda remove --n env_name --all`           | ==删除指定环境==        | remove the specified environment                       |
| `conda install package_name`                | 安装软件包到当前环境        | install a package in the current environment           |
| `conda install -n env_name package_name`    | 安装软件包到指定环境        | install a package in the specified environment         |
| `conda list`                                | 列出当前环境中的所有已安装软件包  | list all installed packages in the current environment |
| `conda update package_name`                 | 更新软件包到最新版本        | update a package to the latest version                 |
| `conda update conda`                        | 更新 Conda 到最新版本    | update Conda to the latest version                     |
| `conda search package_name`                 | 搜索可用软件包           | search for available packages                          |
| `conda clean --all`                         | 清理 Conda 缓存和未使用的包 | clean Conda cache and unused packages                  |
| `conda export > environment.yml`            | 导出当前环境的配置文件       | export the current environment configuration to a file |
| `conda env create -f environment.yml`       | 从配置文件创建环境         | create an environment from a configuration file        |
| `conda env update -f environment.yml`       | 更新环境以匹配配置文件       | update the environment to match the configuration file |
| `conda remove --name env_name package_name` | 从指定环境中移除软件包       | remove a package from the specified environment        |
