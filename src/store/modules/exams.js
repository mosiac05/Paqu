import ExamDataService from '@/services/ExamDataService'

const state = {
	exams: []
}

const getters = {
  getExamById: (state) => (examId) => {
    return state.exams.find(exam => exam.id == examId);
  },
  getExamsByCourseId: (state) => (courseId) => {
    return state.exams.filter(exam => exam.courseId == courseId);
  },
  getExamDataById: (state) => (item, examId) => {
    return state.exams.find(exam => exam.id == examId)[item];
  }
}

const mutations = {
  LOAD_EXAMS(state, exams) {
    state.exams = exams
  }
}

const actions = {
  loadExams({ commit }) {
    ExamDataService.getAll()
      .then(resp => {
        // console.log(resp.data)
        commit('LOAD_EXAMS', resp.data)
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