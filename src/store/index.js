import { createStore } from 'vuex'

import universities from './modules/universities'
import faculties from './modules/faculties'
import departments from './modules/departments'
import courses from './modules/courses'
import exams from './modules/exams'
import tests from './modules/tests'

import SessionDataService from '@/services/SessionDataService'
import SemesterDataService from '@/services/SemesterDataService'
// import data from './data'

export default createStore({
  state() {
    return {
      sessions: [],
      semesters: [],
    }
  },
  getters: {
    getSessionDataById: (state) => (item, sessionId) => {
      return state.sessions.find(session => session.id == sessionId)[item];
    },


    getSemesterDataById: (state) => (item, semesterId) => {
      return state.semesters.find(semester => semester.id == semesterId)[item];
    }
  },
  mutations: {
    LOAD_SESSIONS(state, sessions) {
      state.sessions = sessions
    },
    LOAD_SEMESTERS(state, semesters) {
      state.semesters = semesters
    }
  },
  actions: {
    loadSessions({ commit }) {
      SessionDataService.getAll()
        .then(resp => {
          // console.log(resp.data)
          commit('LOAD_SESSIONS', resp.data)
        })
        .catch(err => console.log(err))
    },
    loadSemesters({ commit }) {
      SemesterDataService.getAll()
        .then(resp => {
          // console.log(resp.data)
          commit('LOAD_SEMESTERS', resp.data)
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
    universities,
    faculties,
    departments,
    courses,
    exams,
    tests
  }
})
