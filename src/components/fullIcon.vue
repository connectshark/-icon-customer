<template>
  <div class="customer-icon" @dblclick="mask = !mask">
    <div class="bg" :style="{ backgroundColor: color }">
      <span class="material-icons icon">{{icon}}</span>
    </div>
    <p class="name">{{name}}</p>
    <button class="mask" v-if="mask" @blur.stop="mask = !mask" v-focus @click.stop="deleteIcon">
      <span class="material-icons icon">highlight_off</span>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['color', 'icon', 'name', 'index'],
  setup (props) {
    const store = useStore()
    const mask = ref(false)
    const deleteIcon = () => {
      const result = confirm('刪除??')
      if (result) {
        store.commit('deleteIcon', props.index)
        mask.value = !mask.value
      }
      
    }
    return {
      mask,
      deleteIcon
    }
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.customer-icon{
  position: relative;
  display: inline-block;
  margin: 0 5px 20px;
  width: 70px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
  text-align: center;
  &:hover{
    box-shadow: 3px 3px 10px #999;
  }
  .bg{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin: auto;
    .icon{
      color: #fff;
      font-size: 40px;
      line-height: 50px;
    }
  }
  .name{
    font-size: 14px;
    line-height: 2;
    width: 100%;
    overflow: hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
    color: #2b2b2b;
  }
  .mask{
    background-color: rgba($color: #000000, $alpha: 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 20px;
    border: none;
    outline: none;
    .icon{
      font-size: 50px;
      color: #fff;
      line-height: 98px;
    }
  }
}
</style>