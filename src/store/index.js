import Vue from 'vue'
import Vuex from 'vuex'
import HTTPClientWrapper from '../classes/HTTPClientWrapper'
import PokemonService from '../classes/PokemonService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    pokemonList: [],
    favorites: [],
    filterSearch: ''
  },
  getters: {
    getPokemonList(state) {
      return state.pokemonList.filter(pokemon => {
        if (state.filterSearch.trim().length > 0) {
          return pokemon.name.includes(state.filterSearch.trim())
        }
        return true
      })
    }
  },
  mutations: {
    setLoading(state, isLoading) {
      state.loading = isLoading
    },
    setPokemonList(state, payload) {
      state.pokemonList = payload
    },
    toggleFavorite(state, payload) {
      const favoriteExists = state.favorites.find(favorite => {
        return favorite.name == payload.name
      })
      if (favoriteExists) {
        state.favorites = state.favorites.filter(favorite => {
          return favorite.name !== payload.name
        })
      } else {
        state.favorites.push(payload)
      }

    },
    setFilterSearch(state, payload) {
      state.filterSearch = payload
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
