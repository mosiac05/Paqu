import CourseDataService from '@/services/CourseDataService'

const state = {
	courses: []
}

const getters = {
  getCourses(state) {
    return state.courses;
  },
  getCourseById: (state) => (courseId) => {
    return state.courses.find(course => course.id == courseId);
  },
  getCoursesByDeptId: (state) => (deptId) => {
    return state.courses.filter(course => course.deptId == deptId);
  },
  getCourseDataById: (state) => (item, courseId) => {
    return state.courses.find(course => course.id == courseId)[item];
  }
}

const mutations = {
  LOAD_COURSES(state, courses) {
    state.courses = courses
  }
}

const actions = {
  loadCourses({ commit }) {
    CourseDataService.getAll()
      .then(resp => {
        // console.log(resp.data)
        commit('LOAD_COURSES', resp.data)
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