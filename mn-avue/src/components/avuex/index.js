/*
 * @Author: mn
 * @Date: 2020-11-25 17:12:31
 * @Description: AVUE主文件
 */
import components from "./element"

const install = function(Vue){
    //全局注册组件 组件名为组件的name
    components.map(component => {
        Vue.component(component.name, component);
      });
}

export default {
    version:"1.0.0",
    install
}