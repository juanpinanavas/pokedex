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

  async getPokemon(pokemon) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      const response = await this.client.makeJsonRequest(url)
      return new Pokemon({
        name: response.name, 
        weight: response.weight, 
        height: response.height, 
        types: response.types, 
        image: response.sprites.other.dream_world.front_default, 
        url: url
      })
    } catch (error) {
      console.error(error)
      return false
    }
  }
}