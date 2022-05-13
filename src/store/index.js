import Vue from "vue";
import Vuex from "vuex";
import news from "./news.store"
import covid from "./covid19.store"

Vue.use(Vuex);

export default new Vuex.Store({
    //   plugins: [persistedDataState],
      modules: {
        news: {
          namespaced: true,
          ...news,
          ...covid
        },
        
      },
    });