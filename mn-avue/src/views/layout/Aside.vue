<!--
 * @Date: 2020-11-04 17:56:04
 * @Author: mn
 * @Description: 侧边栏
-->
<template>
	<div class="sidebar">
		<el-menu
			:unique-opened="false"
			:default-active="defaultActiveName"
			active-text-color="#C31422"
		>
			<template v-for="(item, index) in menuList">
				<!-- 没有子菜单 -->
				<el-menu-item
					:key="index"
					v-if="!item.children"
					:index="item.name"
				>
					<router-link :to="{ name: item.name }">
						<span>{{ item.meta.title }}</span>
					</router-link>
				</el-menu-item>
				<!-- 有子菜单 -->
				<el-submenu
					v-if="item.children"
					:key="index"
					:index="item.name">
					<template slot="title">
						<span>{{ item.meta.title }}</span>
					</template>
					<el-menu-item
						:key="k"
						:index="child.name"
						v-for="(child, k) in item.children">
						<router-link :to="{ name: child.name }">
							<span>{{ child.meta.title }}</span>
						</router-link>
					</el-menu-item>
				</el-submenu>
			</template>
		</el-menu>
	</div>
</template>

<script type="text/javascript">
import RouterArr from "../../router/Router"
export default {
  name: 'Aside',
  data() {
    return {}
  },
  computed: {
    menuList() {
      return RouterArr
    },
    defaultActiveName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
	width: 200px;
	float: left;
	height: calc(100% - 48px);
}
</style>

<style lang="scss">
.sidebar {
	.el-menu {
		height: 100%;
	}
	.el-menu-item {
		position: relative;
		height: 42px;
		line-height: 42px;
		font-weight: 600;
		color: #61666d;
		&.is-active {
			background: #f2f2f2;
			font-weight: 600;
			a {
				color: $--color-primary;
			}
		}
		&:hover {
			background: #f2f2f2;
		}
		a {
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			width: 100%;
			height: 100%;
			color: inherit;
			text-decoration: none;
			box-sizing: border-box;
			padding-left: 12px;
			.iconfont {
				font-weight: normal;
				margin-right: 12px;
			}
		}
	}

	//有子菜单
	.el-submenu {
		.el-menu-item {
			height: 36px;
			line-height: 34px;
			font-size: 12px;
			font-weight: normal;
		}
		.el-submenu__title {
			font-weight: 600;
			height: 42px;
			line-height: 40px;
			color: #61666d;
			font-size: 14px;
			padding-left: 12px !important;
			&:hover {
				background: #f2f2f2;
			}
			.iconfont {
				font-weight: normal;
				margin-right: 12px !important;
			}
		}
		a {
			padding-left: 40px;
			.iconfont {
				font-size: 14px;
				margin-right: 8px;
			}
		}
		&.is-active {
			.el-submenu__title {
				color: $--color-primary;
				.iconfont,
				i.el-submenu__icon-arrow {
					color: $--color-primary;
				}
			}
		}
	}
}
</style>
