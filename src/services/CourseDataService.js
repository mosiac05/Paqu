import http from '../http-common';

class CourseDataService {
	getAll() {
		return http.get("/courses.json");
	}

	get(id) {
		return http.get(`/courses.json/${id}`);
	}

	// create(data) {
	// 	return http.post("/courses.json", data);
	// }

	// update(id, data) {
	// 	return http.put(`/courses.json/${id}`, data);
	// }

	// delete(id) {
	// 	return http.delete(`/courses.json/${id}`);
	// }

	// deleteAll() {
	// 	return http.delete('/courses.json');
	// }

	findByParam(title) {
		return http.get(`/courses.json?param=${title}`);
	}
}

export default new CourseDataService();