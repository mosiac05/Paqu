import http from '../http-common';

class UniversityDataService {
	getAll() {
		return http.get("/universities.json");
	}

	get(id) {
		return http.get(`/universities.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/universities.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/universities.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/universities.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/universities.json');
	// }

	findByParam(title) {
		return http.get(`/universities.json?param=${title}`);
	}
}

export default new UniversityDataService();