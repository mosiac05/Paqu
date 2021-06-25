import http from '../http-common';

class ExamDataService {
	getAll() {
		return http.get("/exams.json");
	}

	get(id) {
		return http.get(`/exams.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/exams.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/exams.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/exams.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/exams.json');
	// }

	findByParam(title) {
		return http.get(`/exams.json?param=${title}`);
	}
}

export default new ExamDataService();