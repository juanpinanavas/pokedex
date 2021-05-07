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
    filterSearch: '',
    filterByAll: true,
    filterByFavorites: false
  },
  getters: {
    getPokemonList(state) {      
      const pokemonList = state.pokemonList.filter(pokemon => {
        if (state.filterSearch.trim().length > 0)
          return pokemon.name.includes(state.filterSearch.trim())
        return true
      })
      if (state.filterByAll)
        return pokemonList
      if (state.filterByFavorites) {
        return pokemonList.filter(pokemon => {
          return state.favorites.find(favorite => {
            return favorite.name === pokemon.name
          })
        })
      }
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
    },
    setFilterByAll(state) {
      state.filterByAll = true
      state.filterByFavorites = false
    },
    setFilterByFavorites(state) {
      state.filterByFavorites = true
      state.filterByAll = false
    },
    setPokemon(state, payload) {
      state.pokemonList = state.pokemonList.map(pokemon => {
        return pokemon.name === payload.name ? payload : pokemon
      })
    }
  },
  actions: {
    async requestPokemonsList({ commit }) {
      const client = new HTTPClientWrapper()
      const pokemonService = new PokemonService(client)
      const pokemonList = await pokemonService.getPokemonsList()
      if (pokemonList)
        commit('setPokemonList', pokemonList)
    },
    async requestPokemon({ commit }, payload) {
      const client = new HTTPClientWrapper()
      const pokemonService = new PokemonService(client)
      const pokemon = await pokemonService.getPokemon(payload)
      if (pokemon)
        commit('setPokemon', pokemon)
      return pokemon
    }
  }
})
