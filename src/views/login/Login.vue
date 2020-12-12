<!--
 * @Author: mn
 * @Date: 2020-11-23 18:11:17
 * @Description: login
-->
<template>
	<div class="login">
		<div class="login-box">
            <h3>登 录</h3>
			<el-form
				ref="loginForm"
				label-width="50px"
				label-position="left"
				:model="loginForm"
				autocomplete="off"
				class="login-form"
                label-suffix=":"
			>
				<el-form-item label="账号" prop="account">
					<el-input
						placeholder="admin"
						maxlength="11"
						v-model="loginForm.account" >
					</el-input>
				</el-form-item>
                <el-form-item label="账号" prop="account">
					<el-input
                       @keyup.enter.native="login"
						placeholder="admin"
						maxlength="11"
						v-model="loginForm.password" >
					</el-input>
				</el-form-item>
                <el-button type="primary" @click="login">
                    登录
                </el-button>
			</el-form>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'login',
	data() {
		return {
            loginForm:{
                account:"",
                password:"",
            }
        }
	},
	methods: {
        login(){
            if(this.loginForm.account !== 'admin' || this.loginForm.password !== 'admin') {
                return this.$message.error("请输入正确的账号密码")
            }
            this.$router.push({ name: 'home' })
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
	width: 100%;
	height: 100%;
	background: #f4f5f5;
	position: relative;
	.login-box {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 460px;
		padding: 20px 40px;
		box-sizing: border-box;
		background: hsla(0, 0%, 100%, 0.8);
		-webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        text-align: center;
        h3{
            margin-bottom:20px;
            font-size: 30px;
        }
	}
}
</style>
