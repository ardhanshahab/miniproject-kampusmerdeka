import axios from "axios";

const state = () => ({
  list: [],
  info: "",
});

const mutations = {
  setList(state, param) {
    state.list = param;
  },
  setInfo(state, param) {
    state.info = param;
  },
};

const actions = {
  fetchlistCovid(store) {
    axios.get('https://data.covid19.go.id/public/api/prov.json')
      
      .then((response) => {
        store.commit("setList", response);
        store.commit("setInfo", "");
        console.log("reponse", response)
      })
      .catch((error) => {
        store.commit("setInfo", error);
      });
  },
}

export default {
    state,
    mutations,
    actions,
  }