<template>
  <div class="home">
    <div class="home-container">
      <div class="header">
        <img src="../assets/svg/pikachu.svg">
      </div>
      <div class="presentation">
        <h1>Welcome to Pokédex</h1>
        <p class="description">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
        <button class="ui button poke-red get-started">Get started</button>
      </div>
    </div>
    
  </div>
</template>
<script>

export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
@import "../styles/app.scss";
.home {
  max-width: 570px;
  margin: 0 auto;
  text-align: center;
}
.presentation {
  margin: 0 30px;
}
.description {
  margin-bottom: 50px;
}
</style>
