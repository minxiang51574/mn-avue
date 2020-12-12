/*
 * @Author: mn
 * @Date: 2020-11-23 17:55:26
 * @Description: 
 */
const RouterArr = [
    {
        path:"home ",
        name:'home',
        component: () => import('@/views/home/Index.vue'),
        meta:{
            title:"首页"
        }
    },
]
export default RouterArr;