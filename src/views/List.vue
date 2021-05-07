<template>
  <div class="list">
    <loading v-show="loading"/>
    <div class="list-container" v-show="!loading">
      <searcher class="searcher" />
      <list v-if="existsAnyPokemon" 
        @openDetails="openDetails"/>
      <bottom-bar v-if="existsAnyPokemon"/>
      <go-back-home v-if="!existsAnyPokemon"/>
      <detail-modal v-if="detailsOpened" 
        @close="closeDetails"
        :pokemon="pokemonToSeeDetails"/>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Searcher from '@/components/Searcher'
import List from '@/components/List'
import BottomBar from '@/components/BottomBar'
import GoBackHome from '@/components/GoBackHome'
import DetailModal from '@/components/DetailModal'
import Loading from '@/components/Loading'
export default {
  components: {
    Searcher,
    List,
    BottomBar,
    GoBackHome,
    DetailModal,
    Loading
  },
  data() {
    return {
      detailsOpened: false,
      pokemonToSeeDetails: {}
    }
  },
  methods: {
    ...mapMutations(['setLoading']),
    ...mapActions(['requestPokemon']),
    async openDetails(pokemon) {
      this.setLoading(true)
      pokemon = await this.requestPokemon(pokemon)
      this.setLoading(false)
      this.pokemonToSeeDetails = pokemon
      this.detailsOpened = true
    },
    closeDetails() {
      this.detailsOpened = false
    }
  },
  computed: {
    ...mapState(['loading']),
    ...mapGetters(['getPokemonList']),
    existsAnyPokemon() {
      return this.getPokemonList.length > 0
    }
  }
}
</script>
<style lang="scss" scoped>
.searcher {
  margin-bottom: 40px;
}
</style>