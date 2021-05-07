<template>
  <footer class="bottom-bar-component">
    <div class="bottom-bar-container">
      <div class="all">
        <button class="ui button btn-poke red filter">
          <img class="icon" src="../assets/svg/all.svg">
          All
        </button>
      </div>
      <div class="favorites">
        <button class="ui button btn-poke red filter">
          <img class="icon" src="../assets/svg/star.svg">
          Favorites
        </button>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import "../styles/app.scss";
.bottom-bar-component {
  height: $bottomBarHeight;
  background: white;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;

  .bottom-bar-container {
    display: grid;
    grid-template-columns: 1fr 1fr;    
    width: 570px;
    margin: 0 auto;

    .all {
      padding-right: 5px;
    }
    .favorites {
      padding-left: 5px;
    }
    
    .filter {
      width: 100%;
      height: 44px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        margin-right: 10px;
      }
    }
  }
}
</style>