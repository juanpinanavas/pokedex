<template>
  <section id="app">
    <router-view/>
  </section>
</template>
<style lang="scss">
@import "./styles/app.scss";

#app {
  max-width: 570px;
  margin: 0 auto;
  text-align: center;
  padding-top: 35px;
  padding-bottom: $bottomBarHeight + 20px;
}

@media only screen and (max-width: 630px) {
  #app {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
