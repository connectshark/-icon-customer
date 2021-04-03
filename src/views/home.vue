<template>
  <div class="icon-list">
    <div class="customer-icon"
      v-for="(icon, index) in list" :key="index">
      <div class="bg" :style="{ backgroundColor: icon.color }">
        <span class="material-icons icon">{{icon.icon}}</span>
      </div>
      <p class="name">{{icon.name}}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const list = computed(() => store.state.iconList)
    return {
      list
    }
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
  .customer-icon{
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
  }
}
</style>