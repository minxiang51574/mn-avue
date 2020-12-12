<!--
 * @Author: mn
 * @Date: 2020-11-23 17:57:34
 * @Description: 
-->
<template>
      <div class="layout">
		<!-- 头部 -->
		<TopBar></TopBar>
		<!-- 侧边栏 -->
		<Aside></Aside>
		<!-- main -->
		<Main></Main>
	</div>
</template>

<script type="text/javascript">
import TopBar from './TopBar'
import Aside from './Aside'
import Main from './Main'
export default {
  name: "Layout",
  props: {},
   components: { TopBar, Aside, Main },
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
.layout {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>

