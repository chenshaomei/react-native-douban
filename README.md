# react-nattive-douban 仿豆瓣电影app项目

> A React Native Project
> 一个基于React Native 仿豆瓣电影项目，使用react-native 、react-navigation等技术， 数据来源 https://api.douban.com/
> 包含底部导航tab切换，页面跳转，左右滑动，上拉加载更多等功能，集成了react-native-elements UI框架

## 目录
#### &sect; [技术栈](#features)
#### &sect; [安装启动](#getting-started)
#### &sect; [目录结构](#architecture)
#### &sect; [项目示例图](#projectimg)

****

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* react native 
* react-navigation
* react-native-elements

***

## <a name="getting-started">&sect; 快速开始</a>

``` bash
搭建好环境后执行如下命令，快速开始（以安卓为例）
(
    1、nodejs
    2、watchman
    3、react-native-cli
    4、Java Development Kit
    5、Android Studio
        5.1、Android SDK
        5.2、Android SDK Platform
        5.3、Performance (Intel ® HAXM)
        5.4、Android Virtual Device
)

# 初始化依赖
npm install

# 启动安卓
react-native run-android

# 打包
react-native bundle --entry-file index.js --platform android --dev false --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/

```

***

## <a name="architecture">&sect; 目录结构</a>
```
.
├─ android/          # 放置打包后android平台的文件
├─ ios/              # 放置打包后ios平台的文件
├─ src/              # 源码目录（开发都在这里进行）
│   ├─ components/   # 组件
│   ├─ pages/        # 页面
│   ├─ assets/       # 静态资源
├── App.js           # 根组件
├── app.json         # 应用配置文件
├── index.js         # 入口文件
├── .babelrc         # Babel 转码配置
├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
├── package.json     # 依赖
```

***

## <a name="projectimg">&sect; 项目示例图</a>
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/1.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/2.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/3.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/4.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/5.png)
![image](https://github.com/chenshaomei/react-douban/raw/master/screenImgs/6.png)