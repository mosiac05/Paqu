import http from '../http-common';

class DepartmentDataService {
	getAll() {
		return http.get("/departments.json");
	}

	get(id) {
		return http.get(`/departments.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/departments.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/departments.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/departments.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/departments.json');
	// }

	findByParam(title) {
		return http.get(`/departments.json?param=${title}`);
	}
}

export default new DepartmentDataService();