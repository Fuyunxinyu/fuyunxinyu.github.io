---

layout: post

title: 关于博客文章里的一部分常用配置

date: 2025-6-29

sponsor: false

copyright: false

icon: i-line-md-cog-filled-loop

categories: 博客教程
tags:
  - valaxy

---

## 引子:

在<u>完成博客网站的搭建和部署</u>之后,当然是在里面**发布文章**啦,那么在Valaxy里面有什么文章配置设置吗?答案是有的.当然,在使用时,我们要万分注意一些使用要点,不然很可能会导致<u>文章失效</u>甚至是<u>网站错误</u>!出于这些原因,有了这篇文章



## Frontmatter

**正文部分:**

Valaxy文章的配置主要是由<u>Frontmatter</u>来进行控制的,下面便来介绍一下如何配置:



### Frontmatter的格式

要对Frontmatter进行配置,首先要遵循以下几点:

1. 在文章开头使用加入Front区域(至少站长是这么理解的),如下:

::: tip

   这里的`//`是注释指令,后面是给你看的,不要加进去

:::

```
---
 //在这里填入Frontmatter配置
---
```

2. 在Front区域内加入配置,如下文

::: info
在以下指令中:

出现的<u>string</u>请用字符串来代替,中英文都可以

出现的<u>boolean</u>请用`true`/`enable`或`false`代替

出现的<u>number</u>请用数字代替
:::

::: danger
在`:`后面要加一个空格!

配置前面不加空格!
:::

#### 文章标题:

```
 title: string
```

#### 文章发布时间:

```
date: string | number | Date
```

#### 文章更新时间:

```
updated: string | number | Date
```

#### 文章语言:

```
lang: string  //Zh或US
```

#### 是否隐藏:

```
hide: string  //false或index或true或all
```

#### 文章作者:

```
author: string
```

#### 是否开启赞助:

```
sponsor: boolean
```

#### 是否显示版权信息:

```
copyright: boolean
```

#### 文章背景:

```
cover: string  //填入图片网址
```

#### 是否显示目录:

```
toc: boolean
```

#### 是否显示侧边栏:

```
aside: boolean
```

#### 标题前的图标:

```
icon: string
```

#### 标题颜色:

```
color: string  //16进制
```

#### 评论是否开启:

```
comment: boolean
```

#### 是否完结(将在末尾添加衬线字体 Q.E.D.):

```
end: boolean
```

#### 是否显示前后文章导航:

```
nav: boolean
```

#### 是否启用加密(password存在时默认为true):

```
encrypt: boolean
```

#### 加密密码:

```
password: string
```

#### 密码提示:

```
password_hint: string
```

#### 代码块高度限制:

```
codeHeightLimit: number
```

#### 是否开启图片预览:

```

medium_zoom: boolean

```

## 文章内的使用小技巧(格式)

#### 部分内容加密:

```

<!-- valaxy-encrypt-start:加密密码 -->加密内容~<!-- valaxy-encrypt-end -->

```

### markdown扩展后的警示框:

#### Tip:小提示
::: tip

:::

```
::: tip

:::
```

#### Information:更多信息
::: info

:::

```
::: info

:::
```

#### warning:警告
::: warning

:::

```
::: warning

:::
```

#### Danger:危险警告
::: danger

:::

```
::: danger

:::
```