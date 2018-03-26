<template>
  <el-aside width="200px">
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo">
        <el-menu-item :index="menu.id.toString()"
         v-for="menu in menuLists" :key='menu.id'>
          <router-link :to='menu.src'>{{ menu.name }}</router-link>
        </el-menu-item>
      </el-menu>
  </el-aside>
</template>

<script>
export default {
  props: [ 'userIndex' ],
  data () {
    return {
      activeIndex: this.userIndex,
      // subIndex: this.userSubIndex,
      menuLists: [
        { id: 1, name: '用户信息', src: '/user/info' }
      ]
    }
  }
}
</script>
