<!--
 * @Author: mn
 * @Date: 2020-11-23 17:57:12
 * @Description: 
-->
<template>
  <div class="index">
    <h3>这是一个基础table</h3>
    <mn-crud 
    :data="tableData"
    :option="listOption"> 
    </mn-crud> 
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Index",
  data() {
    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
    };
  },
  computed:{
    listOption(){
      return {
          column: [
            {
              label: '日期',
              prop: 'date',
            },
              {
              label: '姓名',
              prop: 'name',
            },
              {
              label: '地址',
              prop: 'address',
            },
          ]
      }
    }
  },
}
</script>
