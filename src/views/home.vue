<template>
  <div class="icon-list">
    <fullIcon v-for="(icon, index) in list" :key="index"
      :name=icon.name
      :icon=icon.icon
      :color=icon.color
      :index="index"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import fullIcon from '../components/fullIcon'

export default {
  setup () {
    const store = useStore()
    const list = computed(() => store.state.iconList)
    return {
      list
    }
  },
  components: {
    fullIcon
  }
}
</script>

<style lang="scss" scoped>
.icon-list{
  width: 90%;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  text-align: left;
}
</style>