import TestDataService from '@/services/TestDataService'

const state = {
	tests: []
}

const getters = {
  getTestById: (state) => (testId) => {
    return state.tests.find(test => test.id == testId);
  },
  getTestsByCourseId: (state) => (courseId) => {
    return state.tests.filter(test => test.courseId == courseId);
  },
  getTestDataById: (state) => (item, testId) => {
    return state.tests.find(test => test.id == testId)[item];
  }
}

const mutations = {
  LOAD_TESTS(state, tests) {
    state.tests = tests
  }
}

const actions = {
  loadTests({ commit }) {
    TestDataService.getAll()
      .then(resp => {
        // console.log(resp.data)
        commit('LOAD_TESTS', resp.data)
      })
      .catch(err => console.log(err))
  }
}

export default {
	state,
	getters,
	mutations,
	actions
}