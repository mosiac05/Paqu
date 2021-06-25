import axios from 'axios';

export default axios.create({
	baseURL: 'https://paqu-app-default-rtdb.firebaseio.com/',
	headers: {
		"Content-type": "application/json"
	}
})