<template>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
       @select="handleSelect">
        <el-menu-item :index="menu.id.toString()"  v-for="menu in menuList" :key='menu.id'>
          <router-link :to='menu.src'>{{ menu.name }}</router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
</template>

<script>
export default {
  props: [ 'index' ],
  data () {
    return {
      activeIndex: this.index,
      menuList: [
        { id: 1, name: '首页', src: '/' },
        { id: 2, name: '我的主题', src: '/article/list' }
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    }
  }
}
</script>
