import UniversityDataService from '@/services/UniversityDataService'

const state = {
	universities: []
}

const getters = {
	getUniversities(state) {
    return state.universities;
  },
  getRandomizedUniversities(state) {
    return state.universities.sort((x, y) => 0.5 - Math.random()).slice(0, 8);
  },
  getFirstAlphabetOfUniversities(state) {
    let universityAlphabets = [];

    for (var i = 0; i < state.universities.length; i++) {
      if(!universityAlphabets.includes(state.universities[i].name.charAt(0).toUpperCase())) {
        universityAlphabets.push(state.universities[i].name.charAt(0).toUpperCase());
      }
    }

    return universityAlphabets.sort();
  },
  getUniversitiesByFirstAlphabet: (state) => (alphabet) => {
   return state.universities.filter(university => university.name.charAt(0) === alphabet);
  },
  getUniversityDataById: (state) => (item, universityId) => {
    return state.universities.find(university => university.id == universityId)[item];
  },
  checkUniversityExists: (state) => (universityId) => {
    const universityExists = state.universities.find(university => university.id == universityId);

    if(universityExists) return true
      else return false;
  },
}

const mutations = {
	LOAD_UNIVERSITIES(state, universities) {
    state.universities = universities
  }
}

const actions = {
  loadUniversities({ commit }) {
    UniversityDataService.getAll()
      .then(resp => {
        // console.log(resp.data)
        commit('LOAD_UNIVERSITIES', resp.data)
      })
      .catch(err => console.log(err))
  },
}

export default {
	state,
	getters,
	mutations,
	actions
}