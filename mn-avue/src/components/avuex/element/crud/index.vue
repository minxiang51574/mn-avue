<!--
 * @Author: mn
 * @Date: 2020-12-11 14:17:35
 * @Description: crud主文件
-->
<template>
  <div :class="b(['d'])"> 
      <el-table :data="list">
          <column :columnOption="tableColumn">
          </column>
      </el-table>  
  </div>
</template>

<script type="text/javascript">
//引入create全局方法
import create from '../../core/create'
import column from './column'

export default create({
  name: "crud",
  props: {
    data:{
      type:Array,
      require:true,
      default:()=>{
        return []
      }
    },
    option: { // 列表配置项
        type: Object,
        required: true,
        default: () => {
          return {};
        }
      }
  },
  components: { column },
  data() {
    return {
        list: [], // 表格展示的数据 
    };
  },
  created(){
    //1.初始化列表数据
    this.dataInit()
    //2.初始化列配置
    this.initTableColumn()
  },
  mounted(){},
  methods: {
    //1.初始化列表数据
    dataInit(){
      this.list = this.data
    },
    //2.初始化列配置
    initTableColumn(){
      this.tableColumn = this.option.column.filter((o) => o.hide !== true)  
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
