import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    selectedTime: null,
    deviceType: null
  },
  getters: {
    getJobsArray: (state) => (numberOfItems) => {
      return state.jobs.slice(0, numberOfItems)
    }
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
    SET_SELECTEDTIME(state, time) {
      state.selectedTime = time
    },
    SET_DEVICETYPE(state, type) {
      state.deviceType = type
    }
  },
  actions: {
    fetchJobs({ commit }) {
      fetch('https://dreamjo.bs/feed/codersank-feed.json', { mode: 'no-cors'})
        .then(response => { console.log(response); response.json()})
        .then(data => commit('SET_JOBS', data))
        .catch(err => console.log(err))
    },
    fetchJobsProxy({ commit }) {
      fetch('https://cors-anywhere.herokuapp.com/http://jozsef-sogor.com/data.json')
        .then(response => response.json())
        .then(data => { commit('SET_JOBS', data)})
        .catch(err => console.log(err))
    },
    setDeviceType({ commit, state }, screenWidth) {
      if(!screenWidth || isNaN(screenWidth)) return

      if (screenWidth <= 768 && state.deviceType != 'mobile') commit('SET_DEVICETYPE', 'mobile')
      else if (screenWidth > 768 && screenWidth <= 1024 && state.deviceType != 'tablet') commit('SET_DEVICETYPE', 'tablet')
      else if (screenWidth > 1024 && state.deviceType != 'desktop') commit('SET_DEVICETYPE', 'desktop')  
    }
  },
  modules: {
  }
})
