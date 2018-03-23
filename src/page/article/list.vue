<template>
<div>
  <Header index="2"></Header>

  <div class="content">
    <ul class="article_list">
      <li v-for="i in newsList" :key="i.id">
        <router-link :to="'/article/details/' + i.id">
          【{{ i.create_at | format }}】{{ i.title }}
        </router-link>
      </li>
    </ul>

    <el-pagination
      :page-size="10"
      :total="list.length"
      :current-page="currentPage"
      @current-change="pageChange"
      background
      layout="prev, pager, next">
    </el-pagination>
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
      list: [],
      currentPage: 1
    }
  },
  created () {
    this.getList()
  },
  filters: {
    format: formatDate
  },
  computed: {
    newsList () {
      return this.list.filter((item, index) => {
        return (this.currentPage - 1) * 10 <= index && index < this.currentPage * 10
      })
    }
  },
  methods: {
    getList () {
      this.$api.get('topics', null, res => {
        this.list = res.data
      })
    },
    pageChange (val) {
      this.currentPage = val
    }
  }
}
</script>
