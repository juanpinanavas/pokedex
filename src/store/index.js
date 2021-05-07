import Vue from 'vue'
import Vuex from 'vuex'
import HTTPClientWrapper from '../classes/HTTPClientWrapper'
import PokemonService from '../classes/PokemonService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    pokemonList: [],
    favorites: []
  },
  getters: {
    getFavoritesList(state) {
      return state.pokemonList.filter(pokemon => {
        return state.favorites.includes(favorite => {
          favorite.name == pokemon.name
        })
      })
    },
  },
  mutations: {
    setLoading(state, isLoading) {
      state.loading = isLoading
    },
    setPokemonList(state, payload) {
      state.pokemonList = payload
    },
    addFavorite(state, payload) {
      state.favoritesList = payload
    },
    deleteFavorite(state, payload) {
      state.favoritesList = payload
    },
    toggleFavorite(state, payload) {
      let hasFavorite = state.pokemonList.includes(favorite => {
        return favorite.name == payload.name
      })
      if (hasFavorite) {
        state.favorites.filter(favorite => {
          favorite.name !== payload.name
        })
      } else {
        state.favorites.push(payload)
      }

    }
  },
  actions: {
    async requestPokemonsList({ commit }) {
      const client = new HTTPClientWrapper()
      const pokemonService = new PokemonService(client)
      const pokemonList = await pokemonService.getPokemonsList()
      if (pokemonList)
        commit('setPokemonList', pokemonList)
    }
  }
})
