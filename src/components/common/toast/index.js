import Toast from '../toast/Toast.vue'

const obj={}

obj.install=function (Vue){
    const toastcontrustor = Vue.extend(Toast)
    const toast=new toastcontrustor()
    Vue.prototype.$toast=toast
   toast.$mount(document.createElement("div"))
   document.body.appendChild(toast.$el)
}

export default obj