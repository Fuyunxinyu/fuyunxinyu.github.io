---
layout: post

title: 关于个人搭建静态博客站点的经验与各种坑 （Valaxy篇）

date: 2025-06-15 14:35:43

comment: true

titleTemplate: '%s-你真的学会了吗?😐'

categories: 博客教程

tags:
  - valaxy

top: 1
codeHeightLimit: 300
---

[[toc]]

## 引子:

 有些人可能会很好奇，站长站长，请问这个站点是你怎样搭建起来的呀？” 那么这篇文章对你可就大有帮助了，不用担心你会不会听懂，这你就尽管放心。 这篇文章主要是面向小白的（真的，零编程基础的小白也会），当然，大佬过来观摩也可以指出一些问题。由于站长在搭建时，没有任何编程基础，再加上没时间， 前前后后折腾了近三周，才把网站挂上来（没作任何修改）、所以，这篇文档会写 得很详细，包教包会！



##  Valaxy 简介：

 Valaxy是由云游君开发的新一代博客框架，吸引我的一点是它简洁美观的主 题。虽然现在主题并不多，但我相信，以后会有越来越多的主题的（你们加油！）

 

## 准备材料:

 在本地布署前，请先准备以下工具软件：Git， Visual Studio code，Node.js 

::: details 小白看过来：
>**Git**:Git是一款命令提示符工具，你要在里面输入指令完成某些操作
> 
>**Visual studio code**:它是一款编辑代码的专业软件，建议人手一个.
> 
>**Node.js**:这个站长也不太懂，但框架的运行需要他。 
> 
>**关于安装**:
> 
>在安装它们时，请不要调试，同意协议，选默大认选项一直下一步就行了。
> 
>**Visual studio code纯英文，看不懂咋办**:
> 
>打开它，在左侧侧栏找到扩展图标 （第5个）打开，在那个页面搜Chinese（Simply），安装插件，并同意右下角的 语言更改提示.这样，就是中文界面啦。

:::

## 开始搭建:

1.  在你的电脑里随便找个地方，建一个文件夹（不容易删掉的地方,注意此文件夹存放的路径不要有中文和空格），从此这就是你网站本地部署的地方啦。（不要选U盘和移动硬盘，会报错的！） 
2. 在这里打开命令提示符，即CMD（你只要在上方地址空白处点一下，输cmd搜索即可(要在资源管理器里打开)
3. 在这里敲入你的第一串指令吧：

安装依赖pnpm:

``` cmd
npm i -g pnpm
```

创建valaxy项目:
::: code-group

``` cmd [pnpm]
pnpm create valaxy
```

``` cmd [npm]
npm create valaxy
```
:::

在第二串指令打出后,会提示选择代理,这里需要使用上下箭头选中,`Enter`选择.这里我们选择`pnpm`代理,会快一点.

之后,会提示命名文件夹,你可以随便取名,<u>不要有中文和空格</u>.随后,你要命名**包名**,建议直接使用默认名

最后,他会提示是否现在安装,这里我们直接按`Y`即可开始安装

等命令窗口输出完后,会自动执行预览命令

 这样,网站的本地部署就完成啦，是不是很简单？ 现在就可以开始你的编辑之路了。

- 你可以在这个窗口按`O`打开浏览器,预览你在本地搭建的网站，嗯是不是很快呢？
- 要对这个网站进行修改,可以在窗口内按`E`,通过修改网站的本地文件来修改。 

**初次编辑,vscode会根据工作区自动推荐插件,要注意安装插件哦**

::: info

对网站的本地修改要先关掉运行预览指令的CMD窗口(创建项目后会自动运行预览指令),可以按`ctrl`+`C`直接结束预览服务（使用VS code则是结束任务，这个方法后面会提到），再运行遍预览指令才会应用哈，指令见下文。 

:::

## 其它常用指令：

站点的预览命令:
::: code-group

``` cmd [pnpm]
pnpm dev
```

``` cmd [npm]
npm dev
```
:::

升级命令（按空格选择，按上下键切换，按 A 全选，按回车开始更新）：

::: warning

这边建议非必要千万不要更新,由于Valaxy目前功能还尚未成熟,更新可能会导致出现某些难以解决的问题.

出现问题也不必慌张,你可以在云游君开设的QQ群里指出问题,他们会很快给出答复的

硬是要更新,你可以先保存备份,然后更新.更新完成后,运行一遍站点预览命令,查看有没有问题,再考虑上传到仓库里

:::code-group

``` cmd [pnpm]
pnpm up --latest -i
```

``` cmd [npm]
npm up --latest -i
```
:::

如果出现了一些bug，可以考虑删除 node_modules 文件夹，再使用以下命令重新安装依赖：

::: code-group

``` cmd [pnpm]
pnpm install
```

``` cmd [npm]
npm install
```
:::


# Valaxy站点的编辑与自定义个性化:

一下子就到重头戏之一—代码编辑了呢，以下内容请边服用凉水观看，以防烧脑，嗯最好再敷用冰袋，效果更佳。那么，好戏开场喽。 

## 关于博客文件夹下的文件：

### 前言:

为了方便管理,Valaxy人性化地将大部分基础配置都放在了两个文件之下:`valaxy.config.ts`和`site.config.ts`.

在完成了本地部署的步骤之后,基本就只需要对这两个文件进行一些个性化的修改就行了

### valaxy.config.ts:

#### 大体内容:

这个文件是Valaxy的主配置,里面包含了站点的主题配置,以及一部分功能配置(面向全局)

::: details 小白看过来:

**站长踩过的坑😭:**

- <u>引入代码:</u>

  在文件内容的最上端,会有这样一些代码:
  
  ```ts [valaxy.config.ts]
  import { ... } from '...'
  ```


  这些属于引入代码,在文件中引入其他东西,在别的大佬教程里,配置`valaxy.config.ts`的一部分代码都会有,这里由于文件自带了,所以站长就不写了.(但这些配置一定要有!)

- <u>注释代码:</u>

  在代码块中,你可能会看见这样的字符:

  ```ts [valaxy.config.ts]
  // 这是一串注释
  
  /**
  *这也是一串注释
  */
  ```

  其实,这都是注释,给你看的,能够方便你进行**修改**,一般注释写在内容上面.

  同样,为了方便理解,站长把**注释都写在代码后面了**

- 区域完整:

  如果你看见一个字符串后有`‘’`,`[]`,`{}`,`{( )}`…

  请一定要保证完全包裹住配置内容

  一般如果出现问题,VScode会提醒的,例如:

  > ```ts [valaxy.config.ts]
  > title: '星海坠入云端
  > ```
  >
  > 这里我少了`‘`,vscode提醒我:**“未终止的字符串字面量”**
  >
  > 即这一串配置没有终止,点击这一个消息就会跳转到问题所在的那一行,
  >
  > 我们只要在末尾加上`’`就行了
  >
  > 再如这样:
  >
  > ```ts [valaxy.config.ts]
  >     colors: {
  >       primary: '#4B9BE1'  //网站的主题色,用16进制代码
  >     }
  > ```
  >
  > 我在`{`后少了`,`,vscode提醒我:**应为“,”**
  >
  > 点击跳转到问题行,在那一行上面的花括号后添加`,`即可

:::

#### 具体配置:

根据文件,我会从上往下地讲述配置,你只需要找到对应代码的位置,并替换就行了

##### 主题名:

这里一般不用改,除非你使用了其他主题(默认主题为`Yun`)

```ts [valaxy.config.ts]
  theme: 'yun',  //主题名字
```

#### theme config: (这里主要是与主题有关的配置)

##### 主题站点名(瞬时显示):

在这里把你的开始动画标题更改,默认为“云游君的小站”

```ts [valaxy.config.ts]
    banner: {
      enable: true,  //是否启用开始动画
      title: '星海坠入云端',   //在这里填写你的开始动画标题
    },
```

##### 站点的背景图片:

在这里粘贴图片链接,一定要指向源文件(后缀为图片后缀名)

```ts [valaxy.config.ts]
        bg_image: {  //网站的背景图片,粘贴链接
      enable: true,  //是否启用背景图片
      url: 'https://media.githubusercontent.com/media/FuyunTechnology/FuyunTechnology.github.io/main/image/site/White-background.png',  //亮色模式背景图片
      dark: 'https://media.githubusercontent.com/media/FuyunTechnology/FuyunTechnology.github.io/main/image/site/Black-background.png',  //暗色模式背景图片
      opacity: 0.7
    },
```

##### 站点主题色:

修改站点的主要配色,采用颜色名或16进制代码

```ts [valaxy.config.ts]
     colors: {
      primary: '#4B9BE1'  //网站的主题色,用16进制代码
    },
```

##### 站点的页面:

这里添加你站点的快捷页面链接,页面一般为导航倾向页面

```ts [valaxy.config.ts]
    pages: [  //在这里添加你的界面
      //仿照以下格式添加,排除"*"和"/"(他们起注释作用)
      /*{
       *name: '页面名字',
       *url: '页面链接',
       *icon: '图标',
       *color: '图标颜色',
       *},
       */
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-line-md-emoji-smile-wink',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的艺术家',
        url: '/Artist/',
        icon: 'i-line-md-heart-filled',
        color: 'hotpink',
      },
      {
        name: '相册',
        url: '/albums/',
        icon: 'i-line-md-image-filled',
        color: '#43abee',
      },
      {
        name: '不明图标',
        url: '/surprise/',
        icon: 'i-line-md-star-pulsating-filled-loop',
        color: 'yellow',
      },
    ],
```

##### 站点的脚注:

在网站的末尾添加脚注内容,包括备案信息,自己修改吧

```ts [valaxy.config.ts]
	footer: {  //脚注
      since: 2025,  //网站运行时间
      icon: {
        enable: true,  //是否启用
        name: 'i-line-md-moon-rising-filled-alt-loop',  //图标名字
        animated: true,  //是否启用
        color: '#d69b54',  //图标颜色
        url: 'https://fuyuntechnology.github.io/',	//图标链接
        title: '回到首页'		//鼠标悬停注释
      },
      
      beian: {  //备案信息
        enable: true,  //是否启用
        icp: '备案号:xxxx 真的备案了吗',	// 备案信息
      },
    },
  },
```

##### Markdown警示框:

Valaxy默认不支持警示框写法,但通过添加以下代码可以实现.支持自定义

```ts [valaxy.config.ts]
   markdown: {  //markdown扩展警示框
    // default material-theme-palenight
    // theme: 'material-theme-palenight',
    theme: {
      // light: 'material-theme-lighter',
      light: 'github-light',
      // dark: 'material-theme-darker',
      dark: 'github-dark',
    },

    blocks: {
      tip: {  //名字,不可改变
        icon: 'i-line-md-compass-loop',  //图标,自由选择
        text: 'Tip:',  //文字,可改变
        langs: {  //语言,选填
          'zh-CN': '小提示:',
        },
      },
      warning: {
        icon: 'i-line-md-bell-alert-twotone-loop',
        text: 'Warming:',
        langs: {  //语言,选填
          'zh-CN': '请注意:',
        },
      },
      danger: {
        icon: 'i-line-md-hazard-lights-loop',
        text: 'Danger:',
        langs: {  //语言,选填
          'zh-CN': '危险警告!',
        },
      },
      info: {
        icon:'i-line-md-cloud-alt-print-twotone-loop',
        text: 'Informatiom:',
        langs: {  //语言,选填
          'zh-CN': '更多信息:',
        },
      },
    },

    codeTransformers: [  //代码转换器,不可更改
      // We use `[!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[!!code/g, '[!code')
        },
      },
    ],

    config(md) {
      // md.use(xxx)
    }
  },
  
  unocss: { safelist },
})

```

#### 完整的示例文件如下:

<<< @/valaxy.config.ts [valaxy.config.ts]

### site.congfig.ts:(这里的配置主要与站点相关)

#### 站点默认语言:

这里就不多说了,基本不需要改

```ts [valaxy.config.ts]
lang: 'zh-CN',  //默认语言
```

#### 站点标题(常驻):

在这里写上你的站点名字,比如我的站点名是“芸端之上”

```ts [valaxy.config.ts]
  title: '芸端之上',  //站点名字
```

#### 站点副标题:

显示在标题之下,字号略小

```ts [valaxy.config.ts]
  subtitle: 'Roof above the sea star',  //站点副标题
```

#### 站点描述:

在站点副标题之下,比他略大一点,起描述作用

```ts [valaxy.config.ts]
  description: '编辑博客还是太难了',  //站点描述
```

#### 站点图标:

修改你站点的图标,显示在标签页上

```ts [valaxy.config.ts]
favicon: 'https://media.githubusercontent.com/media/FuyunTechnology/FuyunTechnology.github.io/main/image/site/Site%20Icon.png',  //站点图标
```

#### author:(站长相关信息)

- ##### name:站长名字

- ##### avatar:站长头像

- ##### status:站长状态相关

  ###### emoji:状态显示的emoji表情

  ###### message:鼠标悬停时显示的文字

  总代码(示例):

  ```ts [valaxy.config.ts]
    author: {
      name: '仰望星空',  //站长名字
      avatar: "https://media.githubusercontent.com/media/FuyunTechnology/FuyunTechnology.github.io/main/image/site/Avatar.png",  //站长头像
      status:  //状态
      {
        emoji: '💡',  //在这里填写emoji
        message: '我有一计!'  //鼠标悬停时显示的文字
    }
    },
  ```

  #### 社交媒体/联系方式:

  添加联系方式链接,常驻显示

  ```ts [valaxy.config.ts]
    social: [
     /**
       * 按以下格式添加社媒方式,排除"*"和"/"(他们起注释作用)
      {
        name: '媒体和图标名称',
        link: '图标链接',
        icon: '图标名字',
        color: '图标颜色,请使用16进制格式',
      },
       */
  
      {
        name: 'RSS',
        link: '/atom.xml',
        icon: 'i-line-md-rss',
        color: 'orange',
      },
      {
        name: 'QQ  3404889047',
        link: 'https://qun.qq.com/universal-share/share?ac=1&authKey=A9%2BrXFxkXkc3XCSNK7iBO0bkirxVjmHe7MfHxj6XI1COBry9sIMl%2BWwEr0cCaw2i&busi_data=eyJncm91cENvZGUiOiIzNjk0MTE2OTEiLCJ0b2tlbiI6IldXU2RDUDM5b0RDWTRLL2RaT0hZOXY0dnZTSjJqWEhtclQ1REpBNkp5MHlKQmdBaG9FelYyVXUrWmdPYkYzS0YiLCJ1aW4iOiIzNDA0ODg5MDQ3In0%3D&data=9UIxAslXBqDLmXF53Zx8iqQ86q9MUKPQGPofNJKY68C4x4HeObaRaX7Tt5KTBSJTZv8uNI0CSBOg_w88fzNTOA&svctype=4&tempid=h5_group_info',
        icon: 'i-ri-qq-line',
        color: '#12B7F5',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/FuyunTechnology',
        icon: 'i-line-md-github',
        color: '#6e5494',
      },
      {
        name: '哔哩哔哩',
        link: 'https://space.bilibili.com/1579790',
        icon: 'i-ri-bilibili-line',
        color: '#FF8EB3',
      },
      {
        name: 'Telegram Channel',
        link: 'https://t.me/elpsycn',
        icon: 'i-ri-telegram-line',
        color: '#0088CC',
      },
      {
        name: 'E-Mail(暂时还没有合适的)',
        link: '',
        icon: 'i-ri-mail-line',
        color: '#8E71C1',
      },
    ],
  ```


#### 搜索:

这里的配置主要是与搜索相关,创建一个搜索索引,
