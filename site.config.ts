import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  
  lang: 'zh-CN',  //默认语言
  
  title: '芸端之上',  //站点名字
  
  subtitle: 'Roof above the sea star',  //站点副标题
  
  description: '编辑博客还是太难了',  //站点描述

  frontmatter: {
    time_warning: false,  //是否启用时间警告
  },

  author: {
    name: '仰望星空',  //站长名字
    avatar: "https://cdn.jsdelivr.net/gh/Fuyunxinyu/fuyunxinyu.github.io/image/site/Avatar.jpg",  //站长头像
    status:  //状态
    {
      emoji: '💡',  //在这里填写emoji
      message: '我有一计!'  //鼠标悬停时显示的文字
  }
  },
  favicon: 'https://media.githubusercontent.com/media/Fuyunxinyu/fuyunxinyu.github.io/main/image/site/Site%20Icon.png',  //站点图标
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

   search: {  //搜索相关
    enable: true,  //启用搜索
    type: 'fuse',  //搜索样式,有 "engine" "algolia" "fuse",选填一个
  },
  fuse: {  //fuse配置
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      // threshold: 0.6,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  encrypt: {
    // 开启加密，默认关闭
    enable: true
    // algorithm
    // iv
    // salt
  },

mediumZoom: { enable: true },  //开启图片预览

  /**
   * 开启阅读统计
   */
  statistics: {  //显示阅读信息
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },

  sponsor: {  //赞助功能
    enable: false,  //赞助开关
    title: '看在收集了这么多软件的份上,给点钱吧',  //赞助描述
    methods: [  //赞助方式
      /**按以下格式添加赞助方式
       * {
        name: '赞助方式',  
        url: '赞助图片,收款码链接',
        color: '图标颜色,16进制',
        icon: '赞助图标',
      },
      */
      {
        name: '支付宝',  
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
