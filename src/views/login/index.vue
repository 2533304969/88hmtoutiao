<template>
  <div class="login">
    <el-card class="login-card">
      <!-- 卡片内容 -->
      <div class="login-logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 => el-from 包裹-->
      <!-- 数据校验  => el-from绑定model 绑定rules规则 -->
      <el-form style="margin-top:30px" :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="mobile">
          <!-- 放置表单组件  -->
          <!-- 手机号 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- 验证码 和发送验证码 -->
          <el-input v-model="loginForm.code" style="width:280px" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <!-- 勾选同意框 -->
          <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议及条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="login('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// var func = function (rule, value, callback) {
//   // 根据value进行进行校验
//   // 如果一切ok
//   // 直接执行callback
//   callback() // 一切ok 请继续
//   // 如果不ok
//   callback(new Error('错误信息'))
// }
export default {
  data () {
    return {
      // 要校验的整个表单数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 密码
        checked: false // 是否勾选
      },
      loginRules: {
        // key （要校验的字段名，）：value（数组 => 多条或1条或没有规则）
        mobile: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' }
        ],
        code: [
          { required: true, message: '请输入您的验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码错误，请重新输入' }
        ],
        checked: [
          {
            validator: function (rule, value, callback) {
              // rule 代表当前的规则   没啥用
              // value 代表当前的值 => 表单字段checked的值
              // callback回调函数
              if (value) {
                // 如果是ture  就是选中   通过校验
                callback()
              } else {
                callback(new Error('您必须无条件同意被我们坑'))
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    login (loginForm) {
      // this.$refs.formObj  获取 el-from 的对象实例
      this.$refs[loginForm].validate((isOk) => {
        if (isOk) {
          // 如果为ture 继续下一步  调用接口  登录
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          }).then(result => {
            console.log(result.data)
            // 存储到本地存储
            window.localStorage.setItem('user-token', result.data.data.token)
            // 跳转到主页
            this.$router.push('/home')
          }).catch(() => {
            // 提示信息
            this.$message({
              type: 'warning',
              message: '手机号或验证码输入错误'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-card {
    width: 580px;
    height: 360px;
    .login-logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
