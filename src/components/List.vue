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
    <go-back-home v-else />
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Star from '@/components/Star'
import GoBackHome from '@/components/GoBackHome'
export default {
  components: { Star, GoBackHome },
  methods: {
    ...mapMutations(['toggleFavorite']),
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
</style>