由于只是为了写论文，因此这里对底层原理不多解释，只给出用法和结果
#### 1.EMD算法

经验模态分解（Empirical Mode Decomposition，EMD）。

EMD是一种自适应的时间序列分析方法，可以将非线性和非平稳时间序列分解为若干个固有模态函数（Intrinsic Mode Functions，IMFs）和一个趋势项。

EMD算法及其变种（如CEEMDAN）在许多领域都有广泛的应用，以下是一些主要用途：

1. **信号处理**：
    
    - **去噪**：通过去除高频噪声或低频趋势，更清晰地观察信号的本质特性。
    - **特征提取**：IMFs可以作为信号的特征，用于分类、识别和模式匹配。

2. **金融分析**：
    
    - **市场趋势分析**：通过分析股票价格的IMFs，可以识别市场的不同波动模式，预测市场趋势。
    - **风险管理**：通过分析金融时间序列的IMFs，可以评估和管理金融风险。

3. **数据挖掘和机器学习**：
    
    - **特征工程**：IMF可以作为特征输入机器学习模型，提高模型预测性能。

4. **图像处理**：
    
    - **图像去噪和增强**：通过EMD分解图像，可以去除图像中的噪声，增强图像的视觉效果。

##### 代码部分
这里我直接调用了==PyEMD包==中的EMD算法
```python
from PyEMD import EMD
import numpy as np
import matplotlib.pyplot as plt

# 生成随机数据
s = np.random.random(100)

# 创建EMD实例
emd = EMD()

# 进行EMD分解
IMFs = emd.emd(s)

# 绘制原始数据
plt.figure(figsize=(5, 2))
plt.plot(s, label='Original Signal')
plt.title('Original Signal')
plt.legend()
plt.show()

# 绘制每个IMF
for i, imf in enumerate(IMFs):
    plt.figure(figsize=(5, 2))
    plt.plot(imf, label=f'IMF {i+1}')
    plt.title(f'Intrinsic Mode Function {i+1}')
    plt.legend()
    plt.show()
```
##### 结果展示

![[original data.png]]![[IMF 1.png]]![[IMF 2.png]]![[IMF 3.png]]![[IMF 4.png]]![[IMF 5.png]]

#### 2.CEEMDAN算法
##### 简要原理：想法可以类比于Boostrap
1. **引入噪声**：
    
    - CEEMDAN算法首先向原始信号中添加白噪声。白噪声是一种具有均匀分布的随机信号，其功率谱是平坦的。
    - 通过这种方式，算法可以在每次迭代中获得不同的分解结果。

2. **重复分解**：
    
    - 对添加了噪声的信号进行EMD分解，得到一组IMFs。
    - 这个过程会重复多次，每次添加的噪声都是随机生成的。

3. **平均结果**：
    
    - 将所有分解得到的IMFs进行平均，以减少随机噪声的影响，提高分解结果的稳定性和准确性。

3. **自适应噪声**：
    
    - 算法会根据分解结果调整噪声的强度，确保每次分解都能有效地提取信号的固有模态。

4. **停止条件**：
    
    - 当达到一定的停止条件（如总能量阈值）时，算法停止迭代。这样可以避免过度分解，确保分解结果的合理性。

##### 代码部分
```python
from PyEMD import CEEMDAN
import numpy as np
import matplotlib.pyplot as plt

# 生成测试信号
t = np.linspace(0, 1, num=500)
s = np.cos(2 * np.pi * 5 * t) + np.sin(2 * np.pi * 10 * t)

# 初始化CEEMDAN实例
ceemdan = CEEMDAN(range_thr=0.001, total_power_thr=0.01)

# 执行分解
IMFs = ceemdan.emd(s,max_imf=5)

# 可视化结果
plt.figure(figsize=(12, 9))
plt.subplots_adjust(hspace=0.1)
plt.subplot(len(IMFs) + 1, 1, 1)
plt.plot(s, 'r', label='Original Signal')
for i in range(len(IMFs)):
    plt.subplot(len(IMFs) + 1, 1, i + 2)
    plt.plot(IMFs[i], 'b', label=f"IMF {i+1}")
    plt.ylabel(f"IMF {i+1}")
plt.tight_layout()
plt.show()
```
关于算法的参数部分，我只给了数据和最多分解几个信号详细参数设置见==官方文档==
[CEEMDAN — PyEMD 0.4.0 documentation](https://pyemd.readthedocs.io/en/latest/ceemdan.html)
##### 结果展示
![[CEEMDAN.png]]