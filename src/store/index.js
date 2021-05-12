import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: []
  },
  getters: {
    getJobsArray: (state) => (numberOfItems) => {
      return state.jobs.slice(0, numberOfItems)
    }
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    }
  },
  actions: {
    fetchJobs({ commit }) {
      fetch('https://dreamjo.bs/feed/codersank-feed.json', { mode: 'no-cors'})
        .then(response => { console.log(response); response.json()})
        .then(data => commit('SET_JOBS', data))
        .catch(err => console.log(err))
    },
    fetchJobsLocal({ commit }) {
      fetch('https://cors-anywhere.herokuapp.com/http://jozsef-sogor.com/data.json')
        .then(response => response.json())
        .then(data => { commit('SET_JOBS', data)})
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
