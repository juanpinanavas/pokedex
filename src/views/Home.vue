<template>
  <div class="home">
    <loading v-show="loading"/>
    <div class="home-container" v-show="!loading">
      <div class="header">
        <img src="../assets/svg/pikachu.svg">
      </div>
      <div class="presentation">
        <h1>Welcome to Pokédex</h1>
        <p class="description">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
        <button @click="getStarted" class="ui button btn-poke red get-started">Get started</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import Loading from '@/components/Loading'
export default {
  name: 'Home',
  components: { Loading },
  methods: {
    ...mapMutations(['setLoading']),
    ...mapActions(['requestPokemonsList']),
    async getStarted() {
      this.setLoading(true)
      await this.requestPokemonsList()
      this.setLoading(false)
      this.$router.push({ name: 'list' })
    }
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>
<style lang="scss" scoped>
.presentation {
  margin: 0 30px;
}
.description {
  margin-bottom: 50px;
}
</style>
