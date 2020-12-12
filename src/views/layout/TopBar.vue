<!--
 * @Author: mn
 * @Date: 2020-11-24 15:52:20
 * @Description: 
-->
<template>
  <div>
      <el-header class="header">
          Header
      </el-header>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  props: {},
  components: { },
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  created(){},
  mounted(){},
  methods: {},
}
</script>

<style lang="scss" scoped>
.header{
    background-color:$--color-primary;
    line-height: 60px;
    color: #fff;
}
</style>

