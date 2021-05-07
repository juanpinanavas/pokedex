<template>
  <div class="searcher-component">
    <div class="ui fluid left icon input">
      <input type="text" placeholder="Search" v-model="filterSearch">
      <i class="search icon"></i>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    filterSearch: {
      get() {
        return this.$store.state.filterSearch
      },
      set(value) {
        this.$store.commit('setFilterSearch', value)
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.searcher-component {
  font-size: 16px;
  &>div {
    height: 50px;
  }
}
</style>