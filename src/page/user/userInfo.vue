<template>
  <div>
    <Menu></Menu>
    <div class="content">
      <el-container style="height: 500px; border: solid 1px #e6e6e6">
        <UserMenu userIndex="1"></UserMenu>
        <el-main>
          <p>用户名： {{ userInfo.loginname }}</p>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

import api from '../../api/index'
import Menu from '../../components/menu'
import UserMenu from '../../components/userMenu'
import { userInfo } from '../../config/index'

export default {
  components: { api, Menu, UserMenu },
  data () {
    return {
      userInfo: {},
      loginInfo: userInfo
    }
  },
  created () {
    // this.getData()
  },
  methods: {
  },
  getData () {
    api.get('user/' + this.loginInfo.userName, res => {
      this.userInfo = res.data
      console.log(res.data)
    })
  }
}
</script>
