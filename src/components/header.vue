<template>
   <ul class="menuList">
    <li v-for="menu in menuList" :key='menu.id'>
      <router-link :to='menu.src'>{{ menu.name }}</router-link>
      </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        { id: 1, name: '首页', src: '/' },
        { id: 2, name: '列表', src: '/article/list' }
      ]
    }
  }
}
</script>
