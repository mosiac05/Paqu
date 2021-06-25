import DepartmentDataService from '@/services/DepartmentDataService'

const state = {
	departments: []
}

const getters = {
  getDepartments(state) {
    return state.departments;
  },
  getDepartmentById: (state) => (departmentId) => {
    return state.departments.find(department => department.id == departmentId);
  },
  getDepartmentsByFacultyId: (state) => (facultyId) => {
    return state.departments.filter(department => department.facultyId == facultyId);
  },
  getDepartmentDataById: (state) => (item, deptId) => {
    return state.departments.find(dept => dept.id == deptId)[item];
  },
  checkDepartmentExists: (state) => (deptId) => {
    const deptExists = state.departments.find(dept => dept.id == deptId);

    if(deptExists) return true
      else return false;
  }
}

const mutations = {
  LOAD_DEPARTMENTS(state, departments) {
    state.departments = departments
  }
}

const actions = {
  loadDepartments({ commit }) {
    DepartmentDataService.getAll()
      .then(resp => {
        // console.log(resp.data)
        commit('LOAD_DEPARTMENTS', resp.data)
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