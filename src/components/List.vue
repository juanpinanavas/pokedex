<template>
  <div class="list-component">
    <div class="pokemon-list" v-if="existsAnyPokemon">
      <div class="item" v-for="(pokemon, index) in getPokemonList" 
        :key="index"
        @click="toggleFavorite(pokemon)">
        <div class="name" v-text="pokemon.name"></div>
        <div class="favorite">
          <star :active="isFavorite(pokemon)" />
        </div>
      </div>
    </div>
    <div v-else class="go-back-home">
      <h1 class="title">Uh-oh!</h1>
      <p class="description">You look lost on your journey!</p>
      <button @click="goBackHome" class="ui button btn-poke red go-back-home">Go back home</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Star from '@/components/Star'
export default {
  components: { Star },
  methods: {
    ...mapMutations(['toggleFavorite', 'setFilterSearch']),
    goBackHome() {
      this.setFilterSearch('')
      this.$router.push({ name: 'home' })
    },
    isFavorite(pokemon) {
      return this.favorites.find(favorite => {
        return favorite.name == pokemon.name
      })
    }
  },
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['getPokemonList']),
    existsAnyPokemon() {
      return this.getPokemonList.length > 0
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  font-size: 22px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .name {
    margin: 17px 20px;
  }

  .favorite {
    position: absolute;
    right: 10px;
  }
}
.go-back-home {
  .title {
    font-size: 36px;
  }
  .description {
    font-size: 20px;
  }
}
</style>