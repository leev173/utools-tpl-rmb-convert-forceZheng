# utools-tpl-rmb-convert-forceZheng

# 介绍

根据《会计基础工作规范》，大写金额数字到元或者角为止的，在“元”或者“角”字之后应当写“整”字或者“正”字“。

所以修改官方转大写人民币插件，做到1.0”或者“0.1“等小数返回的是“壹元整”和“壹角整”

# 使用

离线包安装  
https://github.com/leev173/utools-tpl-rmb-convert-forceZheng/releases

```
1. 选中下载好的插件应用安装包（后缀为.upxs），按下鼠标中键，在弹出的超级面板上选择「安装插件应用」即可。 安装插件应用
```
![1736575528938](https://github.com/user-attachments/assets/4219d45b-2438-4ff9-8e63-c0c453ff8060)

```
2.复制安装包，Alt + 空格键 呼出 uTools 搜索框，将安装包粘贴到搜索框，选择「安装插件应用」即可。 安装插件应用
```
![1736575626805](https://github.com/user-attachments/assets/4a9ec22d-3763-4bb2-9c05-0b1c62bbc795)


# 再开发
### 构建 - 运行
```
cd ./preload
npm install
npm run build
```

**uTools 开发者工具** 中将 `public/plugin.json` 加入到本地开发
