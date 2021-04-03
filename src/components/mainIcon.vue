<template>
  <div class="customer">
    <router-link to="/addIcon" class="btn" :style="{ backgroundColor: iconColor }">
      <span class="material-icons icon">{{iconName}}</span>
    </router-link>
    <transition name="slide-fade">
      <div class="user-input" v-if="routeName === 'addIcon'">
        <input type="text" v-model.trim="iconTitle" class="input" @keydown.enter="addNewIcon">
      </div>
    </transition>
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
  padding: 20px 0;
  .btn{
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 25px;
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
    margin: 0 0 0 50px;
    .input{
      width: 100%;
      border: none;
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 5px;
      min-width: 0;
    }
  }
}

</style>