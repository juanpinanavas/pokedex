<template>
  <div class="list">
    <searcher class="searcher" />
    <list />
    <bottom-bar />
  </div>
</template>
<script>
import Searcher from '@/components/Searcher'
import List from '@/components/List'
import BottomBar from '@/components/BottomBar'
export default {
  components: {
    Searcher,
    List,
    BottomBar
  },

}
</script>
<style lang="scss" scoped>
.searcher {
  margin-bottom: 40px;
}
</style>