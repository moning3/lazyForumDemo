<template>
  <div>
    <Header index='1'></Header>
    <Menu></Menu>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'
export default {
  components: { Header, Menu, Footer }
}
</script>
