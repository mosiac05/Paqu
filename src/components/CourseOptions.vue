<template>
  <div class="container-fluid col-12 px-4 py-5 hero-image">
    <div class="row align-items-center g-lg-5">
      <div class="col-12 text-center text-white">
        <h1 class="display-4 fw-bold lh-1 mb-3">Paqu</h1>
        <p class="fs-4"><font-awesome-icon icon="building" /> {{ getUniversityName() }}</p>
      </div>
    </div>
  </div>

  <div class="container-fluid col-12 m-auto pt-5">

    <nav aria-label="breadcrumb" class="row card mx-5 px-3 pt-2 border-dark text-dark">
      <ol class="breadcrumb card-body">
        <router-link :to="{ name : 'universities' }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">Paqu</a>
          </li>
        </router-link>
        <router-link :to="{ name : 'faculties', params: { universityId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getUniversityName() }}</a>
          </li>
        </router-link>
        <router-link :to="{ name : 'departments', params: { facultyId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getFacultyName() }}</a>
          </li>
        </router-link>
        <!-- <router-link :to="{ name : 'courses', params: { deptId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getDepartmentName() }}</a>
          </li>
        </router-link> -->
        <router-link :to="{ name : 'courses', params: { deptId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getDepartmentName() }}</a>
          </li>
        </router-link>
        <router-link :to="{ name : 'course-options', params: { courseId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getCourseTitle() + ' - ' + getCourseCode() }}</a>
          </li>
        </router-link>
        <li class="breadcrumb-item active" aria-current="page">Exams/Tests Options</li>
      </ol>
    </nav>
    
    <section class="row card border-0 m-sm-5 table-responsive" ref="table_card">
      <table id="example" class="card-body px-0 table" style="width: 100%;">
        <thead>
          <tr>
            <th scope="col" style="width: 40%;">Choose Question Type</th>
          </tr>
        </thead>
        <tbody>
          <router-link :to="{ name: 'exams', params: {courseId} }" custom v-slot="{ navigate }">
            <tr @click="navigate">
              <td scope="row">Exam Question Papers</td>
            </tr>
          </router-link>
          <router-link :to="{ name: 'tests', params: {courseId} }" custom v-slot="{ navigate }">
            <tr @click="navigate">
              <td scope="row">Test Question Papers</td>
            </tr>
          </router-link>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

export default {
  data() {
    return {
      universityId: 0,
      facultyId: 0,
      deptId: 0,
      courseId: this.$route.params.courseId,
    }
  },
  methods: {
    getUniversityName() {
      return this.$store.getters.getUniversityDataById('name', this.universityId);
    },
    getFacultyName() {
      return this.$store.getters.getFacultyDataById('name', this.facultyId);
    },
    getDepartmentName() {
      return this.$store.getters.getDepartmentDataById('name', this.deptId);
    },
    getCourseTitle() {
      return this.$store.getters.getCourseDataById('title', this.courseId);
    },
    getCourseCode() {
      return this.$store.getters.getCourseDataById('code', this.courseId);
    }
  },
  created() {
    // console.log(this.$store.getters.getUniversityDataById('name', 5));
    this.deptId = this.$store.getters.getCourseDataById('deptId', parseInt(this.$route.params.courseId));
    this.facultyId = this.$store.getters.getDepartmentDataById('facultyId', parseInt(this.deptId));
    this.universityId = this.$store.getters.getFacultyDataById('universityId', parseInt(this.facultyId));
    // console.log(this.universityId);
  },
  mounted() {
    $('#example').DataTable({
      "columnDefs": [
        { "searchable": false, "targets": [0] }
      ]
    });
  }
}
</script>