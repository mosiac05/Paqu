import http from '../http-common';

class SessionDataService {
	getAll() {
		return http.get("/sessions.json");
	}

	get(id) {
		return http.get(`/sessions.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/sessions.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/sessions.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/sessions.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/sessions.json');
	// }

	findByParam(title) {
		return http.get(`/sessions.json?param=${title}`);
	}
}

export default new SessionDataService();