// 所有全局自定义组件的注册
import ScreenFull from "./ScreenFull"
import lang from './lang'
import ThemePicker from "./ThemePicker"
import TagsView from "./TagsView"

export default{
    install(Vue){
        Vue.component("ScreenFull",ScreenFull)//全屏组件
        Vue.component('lang', lang)//多语言组件
        Vue.component('ThemePicker', ThemePicker)//主题颜色组件
        Vue.component('TagsView',TagsView)//table标签页导航

import UploadExcel from './UploadExcel'

export default {
    install(Vue) {
        Vue.component('UploadExcel', UploadExcel)//注册导入excel组件
  

    }
}
    }
}