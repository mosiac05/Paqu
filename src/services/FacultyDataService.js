import http from '../http-common';

class FacultyDataService {
	getAll() {
		return http.get("/faculties.json");
	}

	get(id) {
		return http.get(`/faculties.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/faculties.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/faculties.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/faculties.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/faculties.json');
	// }

	findByParam(title) {
		return http.get(`/faculties.json?param=${title}`);
	}
}

export default new FacultyDataService();