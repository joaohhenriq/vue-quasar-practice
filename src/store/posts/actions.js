import Vue from 'vue'
import { Loading } from 'quasar'

const setPosts = ({ commit }) => {
  Loading.show({
    delay: 300
  })
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get(`${process.env.API}/v2/posts`)
      .then((res) => {
        commit('SET_POSTS', res.data)
        Loading.hide()
        resolve(res.data)
      })
      .catch((err) => {
        Loading.hide()
        console.error(err)
        reject(err)
      })
  })
}

export {
  setPosts
}
