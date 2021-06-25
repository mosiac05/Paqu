import http from '../http-common';

class SemesterDataService {
	getAll() {
		return http.get("/semesters.json");
	}

	get(id) {
		return http.get(`/semesters.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/semesters.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/semesters.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/semesters.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/semesters.json');
	// }

	findByParam(title) {
		return http.get(`/semesters.json?param=${title}`);
	}
}

export default new SemesterDataService();