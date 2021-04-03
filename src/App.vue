<template>
  <navBar/>
  <div class="back">
    <mainIcon/>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from './components/navBar'
import mainIcon from './components/mainIcon'
import { useStore } from 'vuex'


export default {
  name: 'App',
  components: {
    navBar,
    mainIcon
  },
  setup() {
    const store = useStore()
    store.dispatch('init')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Noto Sans TC', sans-serif;
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  width: 100vw;
  height: 100vh;
  text-align: center;
  .icon{
    vertical-align: middle;
  }
  &::before{
    content: '';
    width: 0;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .back{
    display: inline-block;
    vertical-align: middle;
    background-color: rgba($color: #000000, $alpha: 0.2);
    width: 80%;
    min-width: 450px;
    height: 80%;
    min-height: 270px;
    border-radius: 25px;
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.2);
  }
}
</style>
