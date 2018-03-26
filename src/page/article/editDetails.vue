<template>
  <div>
    <Header index='2'></Header>
    <el-main>
      aaa
    </el-main>
  </div>
</template>

<script>
// import Header from '../components/header'
import Menu from '../../components/menu'
import { userInfo } from '../../config/index'
export default {
  components: { Menu, userInfo },
  data () {
    return {
      info: {}
    }
  },
  created () {
    this.editDetails()
  },
  methods: {
    editDetails () {

    }
  }

}
</script>
