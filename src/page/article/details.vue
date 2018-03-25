<template>
<div>
  <Header index='2'></Header>
  <div class="content">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="pdTop">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/article/list'}">我的主题</el-breadcrumb-item>
      <el-breadcrumb-item>{{ details.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title_d">
      <h2 v-text="details.title"></h2>
      <p>来源：{{ details.author.loginname }} 发布时间：{{ details.create_at | format }}</p>
    </div>
    <div class="det_con" v-html="details.content">

    </div>
  </div>
</div>
</template>

<script>
import Header from '../../components/header.vue'
import { formatDate } from '../../utils/index.js'

export default {
  components: { Header },
  data () {
    return {
      id: this.$route.params.id,
      details: {
        author: {}
      }
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, res => {
        this.details = res.data
      })
    }
  },
  filters: {
    format: formatDate
  }
}
</script>
