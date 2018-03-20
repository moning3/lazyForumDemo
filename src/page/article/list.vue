<template>
<Header></Header>
</template>
<script>
import Header from "../components/header.vue";
export default {
  components: { Header },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.get("topics", null, r => {
        this.list = r.data;
      });
    }
  }
};
</script>
