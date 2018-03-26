<template>
  <div>
    <div class="login">
      <div class="content-login">
        <el-input v-model="userName" placeholder="请输入用户名" clearable></el-input>
        <el-input v-model="password" placeholder="请输入密码" clearable></el-input>
        <el-button type="primary" round>主要按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import api from '../../api/index.js'

export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  created () {
    this.login()
  },
  methods: {
    login () {

    }
  }
}
</script>

<style lang="scss">
  @import "../../style/login";
</style>
