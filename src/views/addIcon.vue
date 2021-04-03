<template>
  <div class="all-list">
    <section class="box">
      <div class="color-item"
        v-for="(color, index) in colors"
        @click="setColor(color)"
        :key="index"
        :class="{active: colorIndex === index}">
        <div class="color" :style="{ backgroundColor: color }"></div>
      </div>
    </section>
    <section class="box">
      <div class="icon-item"
        v-for="(icon, index) in icons"
        :key="index"
        @click="setIcon(icon)"
        :class="{active: iconIndex === index}">
        <span class="material-icons icon">{{icon}}</span>
      </div>
    </section>
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()

    const icons = computed(() => store.state.icons)
    store.commit('setIcon', icons.value[0])
    const setIcon = iconKey => {
      store.commit('setIcon', iconKey)
    }
    const iconIndex = computed(() => store.getters.getIconByName)

    const colors = computed(() => store.state.colors)
    store.commit('setColor', colors.value[0])
    const setColor = (colorKey) => {
      store.commit('setColor', colorKey)
    }
    const colorIndex = computed(() => store.getters.getColorByName)
    
    return {
      icons,
      setIcon,
      colors,
      iconIndex,
      colorIndex,
      setColor
    }
  }
}
</script>

<style lang="scss" scoped>
.all-list{
  .box{
    width: 90%;
    margin: auto;
    text-align: left;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 20px rgba($color: #000, $alpha: 0.2);
    border-radius: 20px;
    margin-bottom: 20px;
    .icon-item, .color-item{
      border: 2px solid transparent;
      box-sizing: border-box;
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      margin: 0 10px 10px;
    }
    .icon-item{
      text-align: center;
      .icon{
        font-size: 40px;
        color: #fff;
        line-height: 46px;
      }
    }
    .color-item{
      border-radius: 25px;
      padding: 3px 0 0 0;
      .color{
        width: 40px;
        height: 40px;
        margin: auto;
        border-radius: 20px;
      }
    }
    .active{
      border: 2px solid #fff;
    }

  }
}
</style>