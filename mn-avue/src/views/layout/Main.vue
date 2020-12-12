<!--
 * @Author: mn
 * @Date: 2020-11-24 15:52:33
 * @Description: 
-->
<template>
  <div class="main">
      <div class="home-container content">
              <router-view />
        </div>
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
.main{
    margin-left: 200px;
    height: calc(100% - 48px);
    box-sizing: border-box;
    background-color: #ebebeb;
    padding:10px;
}
</style>

