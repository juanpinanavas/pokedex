<template>
  <div class="go-back-home-component">
    <h1 class="title">Uh-oh!</h1>
    <p class="description">You look lost on your journey!</p>
    <button @click="goBackHome" class="ui button btn-poke red go-back-home">Go back home</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['setFilterSearch']),
    goBackHome() {
      this.setFilterSearch('')
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
<style lang="scss" scoped>
.go-back-home {
  .title {
    font-size: 36px;
  }
  .description {
    font-size: 20px;
  }
}
</style>