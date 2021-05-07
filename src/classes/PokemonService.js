import Pokemon from './Pokemon'

export default class PokemonService {
  client

  constructor(client) {
    this.client = client
  }

  async getPokemonsList() {
    try {
      const url = 'https://pokeapi.co/api/v2/pokemon'
      const response = await this.client.makeJsonRequest(url)
      return response.results.map(pokemon => {
        return new Pokemon(pokemon)
      })
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async getPokemon(name) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      const response = await this.client.makeJsonRequest(url)
      return response.results.map(pokemon => {
        return new Pokemon(pokemon)
      })
    } catch (error) {
      console.error(error)
      return false
    }
  }
}