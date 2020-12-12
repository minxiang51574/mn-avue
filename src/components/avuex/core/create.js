/*
 * @Author: mn
 * @Date: 2020-12-11 14:36:24
 * @Description: avue组件添加方法
 */
import { COMMON_PREFIX_COMPONENT_NAME } from '../global/constant';
import bem from '../utils/bem';
export default function(component){
    component.name = COMMON_PREFIX_COMPONENT_NAME + component.name;
    component.mixins = component.mixins || [];
    component.mixins.push(bem);
    return component; 
}