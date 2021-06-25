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
        <router-link :to="{ name : 'universities' }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getUniversityName() }}</a>
          </li>
        </router-link>
        <router-link :to="{ name : 'faculties', params: { universityId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getFacultyName() }}</a>
          </li>
        </router-link>
        <router-link :to="{ name : 'departments', params: { facultyId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getDepartmentName() }}</a>
          </li>
        </router-link>
        <!-- <router-link :to="{ name : 'exams', params: { courseId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getCourseTitle() }}</a>
          </li>
        </router-link> -->
        <li class="breadcrumb-item active" aria-current="page">{{ getCourseTitle() }}</li>
        <li class="breadcrumb-item active" aria-current="page">Test Papers</li>
      </ol>
    </nav>
    
    <section class="row card border-0 m-sm-5 table-responsive" ref="table_card">
      <table id="example" class="card-body px-0 table" style="width: 100%;">
        <thead>
          <tr>
            <th scope="col" style="width: 10%;">#</th>
            <th scope="col" style="width: 50%;">Sessions</th>
            <th scope="col" style="width: 20%;">Semesters</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(test, index) in tests"
            :key="test.id"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="setTestDocument($event, test.id)">
            <td scope="row">{{ index+1 }}</td>
            <td>{{ getTestSession(test.id) }}</td>
            <td>{{ getTestSemester(test.id) }}</td>
          </tr>
        </tbody>
        <tfoot>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Sessions</th>
                <th scope="col">Semesters</th>
            </tr>
        </tfoot>
      </table>
    </section>
  </div>

  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ testDoc.title }} - {{ testDoc.code }} ({{ testDoc.session }} Test Paper)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img :src="testDoc.image" class="img-fluid" style="width: 100;">
      </div>
      <div class="modal-footer">
        <a :href="testDoc.link" download="exam" target="_blank" class="btn btn-lg text-white paqu-bg-blue col-12">Download</a>
        <button type="button" class="btn btn-sm btn-outline-danger col-12" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
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
      universityId: null,
      facultyId: null,
      deptId: null,
      courseId: this.$route.params.courseId,
      testDoc: {
        code: '',
        title: '',
        session: '',
        image: '',
        link: ''
      }
    }
  },
  computed: {
    tests() {
      return this.$store.getters.getTestsByCourseId(this.$route.params.courseId)
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
    },
    getTestSession(testId) {
      return this.$store.getters.getSessionDataById('session', this.$store.getters.getTestDataById('sessionId', testId));
    },
    getTestSemester(testId) {
      return this.$store.getters.getSemesterDataById('name', this.$store.getters.getTestDataById('semesterId', testId));
    },
    setTestDocument(event, testId) {
      const testData = this.$store.getters.getTestById(parseInt(testId));

      this.testDoc.code = this.getCourseCode();
      this.testDoc.title = this.getCourseTitle();
      this.testDoc.session = this.getTestSession(testId);
      this.testDoc.image = testData.image;
      this.testDoc.link = testData.link;

      // console.log(this.testDoc);
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