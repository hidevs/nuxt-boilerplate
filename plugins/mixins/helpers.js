import Vue from 'vue'
import {mapGetters} from "vuex";

const Helpers = {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        cdnUrl(path) {
          return `${process.env.API_HOST_URL}/cdn/${path}`
        },
      },
      computed: {
        ...mapGetters({
          $setting: "setting/settings",
        }),
      }
    })
  }
}

Vue.use(Helpers)
