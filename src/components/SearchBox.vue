<template>
	<section class="container-fluid col-12 m-auto mb-5 px-5">
		<div class="row text-center py-5">
			<h3 class="fw-bolder">Search For Questions Here</h3>
			<small class="fw-light">Search by university, faculty and department</small>
		</div>
		<form class="card shadow bg-white rounded border-0 mx-sm-5 px-sm-5 py-sm-3">
			<div class="row card-body">
				<div class="col-sm-3">
					<label class="fw-bold py-2">Select University:</label>
			    <select v-model="universityInput" @change="getFacultiesByUniversityId" class="form-select">
			      <option disabled="" selected="">Choose school...</option>
			      <option 
			      	v-for="(university, index) in universities"
			      	:value="university.id"
			      	:key="index"
			      	:selected="universityInput == university.id"
			      	>{{ university.name }}</option>
			    </select>
			  </div>
			  <div class="col-sm-3">
					<label class="fw-bold py-2">Select Faculty:</label>
			    <select v-model="facultyInput" @change="getDepartmentsByFacultyId" class="form-select">
			      <option disabled="">{{ universityInput == '' ? 'Select a University': 'Choose Faculty...' }}</option>
			      <option
			      	v-for="(faculty, index) in faculties"
			      	:value="faculty.id"
			      	:key="index"
			      	:selected="facultyInput == faculty.id"
			      	>{{ faculty.name }}</option>
			    </select>
			  </div>
			  <div class="col-sm-3">
					<label class="fw-bold py-2">Select Department:</label>
			    <select v-model="deptInput" class="form-select">
			      <option disabled="">{{ facultyInput == '' ? 'Select a Faculty': 'Choose department...' }}</option>
			      <option
			      	v-for="(department, index) in departments"
			      	:value="department.id"
			      	:key="index"
			      	:selected="deptInput == department.id"
			      	>{{ department.name }}</option>
			    </select>
			  </div>
			  <div class="col-sm-3 d-grid" id="search_btn">
			    <button
			    	class="btn btn-danger border-0"
			    	:class="{'disabled': (universityInput == '' || facultyInput == '' || deptInput == '')}"
			    	@click.prevent="loadCourses"
			    	><font-awesome-icon icon="search" />&nbsp;Search</button>
			  </div>
			</div>  			
		</form>
  </section>
</template>

<script>

export default {
	data() {
		return {
			universityInput: '',
			facultyInput: '',
			deptInput: '',
			faculties: [],
			departments: []
		}
	},
	computed: {
		universities() {
			return this.$store.getters.getUniversities
		}
	},
	methods: {
		getFacultiesByUniversityId() {
			this.deptInput = '';
			this.departments = [];
			this.faculties = this.$store.getters.getFacultiesByUniversityId(parseInt(this.universityInput));
		},
		getDepartmentsByFacultyId() {
			this.deptInput = '';
			console.log(this.$store.getters.getDepartmentsByFacultyId(parseInt(this.facultyInput)))
			this.departments = this.$store.getters.getDepartmentsByFacultyId(parseInt(this.facultyInput));
		},
		loadCourses() {
			this.$router.push({
				name : 'courses', 
				params: { 
					deptId: this.deptInput
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.row {
	h3 {
		color: #050538;
	}
}

div {
	label {
	color: #050538;
}
}

@media only screen and (max-width: 768px) {
	#search_btn {
		margin-top: 20px !important;
	}
}
</style>