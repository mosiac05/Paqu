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
        <!-- <router-link :to="{ name : 'faculties', params: { universityId } }" custom v-slot="{ href, navigate }">
          <li class="breadcrumb-item">
            <a :href="href" @click="navigate">{{ getUniversityName() }}</a>
          </li>
        </router-link> -->
        <li class="breadcrumb-item active" aria-current="page">{{ getUniversityName() }}</li>
        <li class="breadcrumb-item active" aria-current="page">Faculties</li>
      </ol>
    </nav>

    <section class="row card border-0 m-sm-5 table-responsive" ref="table_card">
      <table id="example" class="card-body px-0 table" style="width: 100%;">
        <thead>
            <tr>
                <th scope="col" style="width: 20%;">#</th>
                <th scope="col" style="width: 80%;">Faculties</th>
            </tr>
        </thead>
        <tbody>           
            <router-link v-for="(faculty, index) in faculties" :key="faculty.id" :to="{ name: 'departments', params: {facultyId: faculty.id} }" custom v-slot="{ navigate }">
              <tr @click="navigate">
                <td scope="row">{{ index+1 }}.</td>
                <td>{{ faculty.name }}</td>
              </tr>
            </router-link>
          </tbody>
          <tfoot>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Faculties</th>
              </tr>
          </tfoot>
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
      universityId: parseInt(this.$route.params.universityId),
    }
  },
  computed: {
    faculties() {
      return this.$store.getters.getFacultiesByUniversityId(this.$route.params.universityId)
    }
  },
  methods: {
    getUniversityName() {
      return this.$store.getters.getUniversityDataById('name', this.universityId);
    }
  },
  mounted() {
    $('#example').DataTable({
      "columnDefs": [
        { "searchable": false, "targets": [0] }
      ]
    });

    this.$refs.table_card.style.overflow = "hidden";
  }
}
</script>