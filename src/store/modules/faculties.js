import FacultyDataService from '@/services/FacultyDataService'

const state = {
	faculties: []
}

const getters = {
  getFaculties(state) {
    return state.faculties;
  },
  getFacultyById: (state) => (facultyId) => {
    return state.faculties.find(faculty => faculty.id == facultyId);
  },
  getFacultiesByUniversityId: (state) => (universityId) => {
    return state.faculties.filter(faculty => faculty.universityId == universityId);
  },
  getFacultyDataById: (state) => (item, facultyId) => {
    return state.faculties.find(faculty => faculty.id == facultyId)[item];
  },
  checkFacultyExists: (state) => (facultyId) => {
    const facultyExists = state.faculties.find(faculty => faculty.id == facultyId);

    if(facultyExists) return true
      else return false;
  },
}

const mutations = {
  LOAD_FACULTIES(state, faculties) {
    state.faculties = faculties
  }
}

const actions = {
  loadFaculties({ commit }) {
    FacultyDataService.getAll()
      .then(resp => {
        // console.log(resp.data)
        commit('LOAD_FACULTIES', resp.data)
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