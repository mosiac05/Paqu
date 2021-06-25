import http from '../http-common';

class TestDataService {
	getAll() {
		return http.get("/tests.json");
	}

	get(id) {
		return http.get(`/tests.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/tests.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/tests.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/tests.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/tests.json');
	// }

	findByParam(title) {
		return http.get(`/tests.json?param=${title}`);
	}
}

export default new TestDataService();