import { createStore } from 'vuex'
import LS from '../lib/ls'

const store = createStore({
  state: {
    colors: ['#fce8e6', '#e8f0fe', '#e6f4ea', '#fef7e0'],
    icons: ['language', 'help_outline', 'face'],
    iconList: [],
    selectIcon: 'add_circle_outline',
    selectColor: 'transparent'
  },
  mutations: {
    initState (state, list) {
      state.iconList = list
    },
    setIcon (state, iconName) {
      state.selectIcon = iconName
    },
    setColor (state, iconColor) {
      state.selectColor = iconColor
    },
    addNewIcon (state, iconTitle) {
      state.iconList.push({
        icon: state.selectIcon,
        color: state.selectColor,
        name: iconTitle
      })
      LS.save('iconList', state.iconList)
    }
  },
  getters: {
    getIconByName (state) {
      return state.icons.findIndex(icon => icon === state.selectIcon)
    },
    getColorByName (state) {
      return state.colors.findIndex(color => color === state.selectColor)
    }
  },
  actions: {
    init ({ commit }) {
      commit('initState', LS.load('iconList'))
    }
  }
})

export default store