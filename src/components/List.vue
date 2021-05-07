<template>
  <div class="list-component">
    <div class="item" v-for="(pokemon, index) in pokemonList" 
      :key="index"
      @click="toggleFavorite(pokemon)">
      <div class="name" v-text="pokemon.name"></div>
      <div class="favorite">
        <star :active="false" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Star from '@/components/Star'
export default {
  components: { Star },
  methods: {
    ...mapMutations(['toggleFavorite'])
  },
  computed: {
    ...mapState(['pokemonList'])
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