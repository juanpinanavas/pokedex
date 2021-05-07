<template>
  <div class="list-component">
    <div class="pokemon-list">
      <div class="item" v-for="(pokemon, index) in getPokemonList" 
        @click="openDetails(pokemon)"
        :key="index">
        <div class="name" v-text="pokemon.name"></div>
        <div class="favorite" @click.stop="toggleFavorite(pokemon)">
          <star :active="isFavorite(pokemon)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Star from '@/components/Star'
export default {
  components: { Star },
  methods: {
    ...mapMutations(['toggleFavorite']),
    isFavorite(pokemon) {
      return this.favorites.find(favorite => {
        return favorite.name == pokemon.name
      })
    },
    openDetails(pokemon) {
      this.$emit('openDetails', pokemon)
    }
  },
  computed: {
    ...mapState(['favorites']),
    ...mapGetters(['getPokemonList'])
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