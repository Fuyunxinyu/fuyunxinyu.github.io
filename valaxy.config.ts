import type { UserThemeConfig } from 'valaxy-theme-yun'  //引入主题yun
import { defineValaxyConfig } from 'valaxy'  
import { addonComponents } from 'valaxy-addon-components'  //引入插件通用插件
//import { addonFace } from 'valaxy-addon-face'  //引入表情包插件
// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',  //主题名字

  themeConfig: {  //主题配置,在这里修改
    banner: {
      enable: true,
      title: '星海坠入云端',   //在这里填写你的站点名字
    },

        bg_image: {  //网站的背景图片,粘贴链接
      enable: true,  //是否启用背景图片
      url: 'https://cdn.jsdelivr.net/gh/FuyunTechnology/FuyunTechnology.github.io@master/image/site/White-background.jpg',  //亮色模式背景图片
      dark: 'https://cdn.jsdelivr.net/gh/FuyunTechnology/FuyunTechnology.github.io@master/image/site/Black-background.jpg',  //暗色模式背景图片
      opacity: 0.7
    },

    pages: [  //在这里添加你的界面
      //仿照以下格式添加,排除"*"和"/"(他们起注释作用)
      /*{
       *name: '页面名字',
       *url: '/页面链接/',
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

     colors: {
      primary: '#4B9BE1'  //网站的主题色,用16进制代码
    },

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
      
      beian: {  //备案
        enable: true,  //是否启用
        icp: '备案号:xxxx 真的备案了吗',	// 备案信息
      },
    },
  },

 addons: [
    addonComponents(),  //导入通用组件
  ],
  
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
        text: '小提示：',  //文字,可改变
      },
      warning: {
        icon: 'i-line-md-bell-alert-twotone-loop',
        text: '警告！',
      },
      danger: {
        icon: 'i-line-md-hazard-lights-loop',
        text: '请注意！',
      },
      info: {
        icon:'i-line-md-cloud-alt-print-twotone-loop',
        text: '更多信息：',
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

