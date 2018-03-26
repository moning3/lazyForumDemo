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
    <div class="det_con" v-html="details.content"></div>
    <h3>网友回复：</h3>
    <ul class="article_list">
      <li v-for="rep in details.replies" :key="rep.id">
        <p class="det_art_p">评论者： {{ rep.author.loginname }} 评论时间：{{ rep.create_at | format }}</p>
        <p v-html="rep.content"></p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import api from '../../api/index'
import Header from '../../components/header'
import Menu from '../../components/menu'
import { formatDate } from '../../utils/index'

export default {
  components: { Header, Menu },
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
      api.get('topic/' + this.id, null, res => {
        this.details = res.data
      })
    }
  },
  filters: {
    format: formatDate
  }
}
</script>
