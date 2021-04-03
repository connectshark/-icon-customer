<template>
  <div class="customer" :class="{ on: routeName === 'home' }">
    <router-link to="/addIcon" class="btn" :style="{ backgroundColor: iconColor }">
      <span class="material-icons icon">{{iconName}}</span>
    </router-link>
    <div class="user-input" v-if="routeName === 'addIcon'">
      <input type="text" v-model.trim="iconTitle" class="input" @keydown.enter="addNewIcon">
    </div>
    <div class="done-btn" @click="addNewIcon" v-if="iconTitle.length > 0">
      <span class="material-icons icon">done</span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const store = useStore()
    const router = useRouter()

    const iconName = computed(() => store.state.selectIcon)
    const iconColor = computed(() => store.state.selectColor)

    const iconTitle = ref('')
    const routeName = computed(() => router.currentRoute.value.name)

    const addNewIcon = () => {
      if (iconTitle.value === '') return
      store.commit('addNewIcon', iconTitle.value)
      store.commit('resetBtn')
      iconTitle.value = ''
      router.push('/')
    }
    
    return {
      iconName,
      iconColor,
      iconTitle,
      routeName,
      addNewIcon
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/transitions.scss';
.customer{
  padding: 40px 0;
  text-align: left;
  .btn{
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    margin: 0 50px;
    .icon{
      line-height: 50px;
      font-size: 40px;
      color: #fff;
    }
  }
  .user-input{
    display: inline-block;
    vertical-align: middle;
    width: 40%;
    .input{
      width: 100%;
      border: none;
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 10px;
      min-width: 0;
    }
  }
  .done-btn{
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 15px;
    .icon{
      font-size: 30px;
      line-height: 1;
    }
  }
}
.on{
  text-align: center;
}

</style>