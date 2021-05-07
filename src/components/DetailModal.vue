<template>
  <transition name="modal">
    <div class="modal-component">
      <div class="modal-wrapper" @click.self="close">
        <div class="modal-container">

          <div class="modal-header">
            <div class="pokemon-header-container">
              <img class="pokemon-header" :src="pokemon.image">
            </div>
            <img class="close-details" src="../assets/svg/close.svg" @click.self="close">
          </div>

          <div class="modal-body">
            <div class="field" v-text="`Name: ${pokemon.name}`"></div>
            <div class="field" v-text="`Weight: ${pokemon.weight}`"></div>
            <div class="field" v-text="`Height: ${pokemon.height}`"></div>
            <div class="field" v-text="`Types: ${formatTypes(pokemon)}`"></div>
          </div>

          <div class="modal-footer">
            <button class="ui button btn-poke red" @click="copyTypesToClipboard" v-text="shareButtonText">Share to my friends</button>
            <star class="favorite" :active="isFavorite(pokemon)" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex'
import Star from '@/components/Star'
export default {
  props: ['pokemon'],
  components: { Star },
  data() {
    return {
      recentlyCopied: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    formatTypes(pokemon) {
      let formatTypes = ''
      pokemon.types.forEach(type => {
        formatTypes += formatTypes !== '' ? ', ' : ''
        formatTypes += type.type.name
      })
      return formatTypes
    },
    copyTypesToClipboard() {
      navigator.clipboard.writeText(this.formatTypes(this.pokemon))
      this.recentlyCopied = true
      setTimeout(() => {
        this.recentlyCopied = false
      }, 2000);
    },
    isFavorite(pokemon) {
      return this.favorites.find(favorite => {
        return favorite.name == pokemon.name
      })
    },
  },
  computed: {
    ...mapState(['favorites']),
    shareButtonText() {
      return this.recentlyCopied ? 'Types Copied!' : 'Share to my friends'
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-component {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  min-width: 315px;
  max-width: 570px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 5px;
}

.modal-header {
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(../assets/png/details-background.png);
  height: 220px;
  background-position: center bottom;
  background-size: 120% 170%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  .pokemon-header-container {
    width: 100%;
    position: absolute;

    .pokemon-header {
      width: 180px;
      height: 180px;
    }
  }

  .close-details {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
}

.modal-body {
  margin: 20px 0;
  margin: 20px 0;
  padding: 0 30px;

  .field {
    font-size: 18px;
    color: #5E5E5E;
    text-align: left;
    line-height: 27px;
    height: 47px;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 0px 0px #e8e8e8;
    text-transform: capitalize;
    font-weight: 700;
  }
}

.modal-footer {
  display: flex;
  padding: 0 30px;
  padding-bottom: 20px;

  .favorite {
    margin-left: auto;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>