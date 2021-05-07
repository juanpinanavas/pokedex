export default class Pokemon {
  name
  weight
  height
  types
  image

  constructor({name = '', weight = '', height = '', types = [], image = '', url = ''}) {
    this.name = name
    this.weight = weight
    this.height = height
    this.types = types
    this.image = image
    this.url = url
  }
}