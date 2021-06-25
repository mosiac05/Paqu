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
        <li class="breadcrumb-item active" aria-current="page">Exam Papers</li>
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
            v-for="(exam, index) in exams"
            :key="exam.id"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="setExamDocument($event, exam.id)">
            <td scope="row">{{ index+1 }}</td>
            <td>{{ getExamSession(exam.id) }}</td>
            <td>{{ getExamSemester(exam.id) }}</td>
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
        <h5 class="modal-title" id="exampleModalLabel">{{ examDoc.title }} - {{ examDoc.code }} ({{ examDoc.session }} Exam Paper)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
        <img :src="examDoc.image" class="img-fluid" style="width: 100;">
      </div>
      <div class="modal-footer">
        <a :href="examDoc.link" download="exam" target="_blank" class="btn btn-lg text-white paqu-bg-blue col-12">Download</a>
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
      universityId: 0,
      facultyId: 0,
      deptId: 0,
      courseId: this.$route.params.courseId,
      examDoc: {
        code: '',
        title: '',
        session: '',
        image: '',
        link: ''
      }
    }
  },
  computed: {
    exams() {
      return this.$store.getters.getExamsByCourseId(this.$route.params.courseId)
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
    getExamSession(examId) {
      return this.$store.getters.getSessionDataById('session', this.$store.getters.getExamDataById('sessionId', examId));
    },
    getExamSemester(examId) {
      return this.$store.getters.getSemesterDataById('name', this.$store.getters.getExamDataById('semesterId', examId));
    },
    setExamDocument(event, examId) {
      const examData = this.$store.getters.getExamById(parseInt(examId));

      this.examDoc.code = this.getCourseCode();
      this.examDoc.title = this.getCourseTitle();
      this.examDoc.session = this.getExamSession(examId);
      this.examDoc.image = examData.image;
      this.examDoc.link = examData.link;

      // console.log(this.examDoc);
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