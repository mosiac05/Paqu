<template>
  <div class="container-fluid col-12 px-4 py-5 hero-image">
    <div class="row align-items-center g-lg-5">
      <div class="col-12 text-center text-white">
        <h1 class="display-4 fw-bold lh-1 mb-3">Paqu</h1>
        <p class="fs-4"><font-awesome-icon icon="building" /> Universities</p>
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
        <li class="breadcrumb-item active" aria-current="page">Universities</li>
      </ol>
    </nav>

    <section class="row card border-0 m-sm-5 table-responsive" ref="table_card">
      <table id="example" class="card-body px-0 table" style="width: 100%;">
        <thead>
            <tr>
                <th scope="col" style="width: 20%;">#</th>
                <th scope="col" style="width: 80%;">Universities</th>
            </tr>
        </thead>
        <tbody>           
            <router-link v-for="(university, index) in universities" :key="university.id" :to="{ name: 'faculties', params: {universityId: university.id} }" custom v-slot="{ navigate }">
              <tr @click="navigate">
                <td scope="row">{{ index+1 }}.</td>
                <td>{{ university.name }}</td>
              </tr>
            </router-link>
          </tbody>
          <tfoot>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Universities</th>
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

import UniversityDataService from '@/services/UniversityDataService'

export default {
  data() {
    return {
    }
  },
  computed: {
    universities() {
      return this.$store.getters.getUniversities
    }
  },
  mounted() {
    // UniversityDataService.getAll()
    //   .then(resp => console.log(resp.data))
    //   .catch(err => console.log(err));
    $('#example').DataTable({
      "columnDefs": [
        { "searchable": false, "targets": [0] }
      ]
    });

    this.$refs.table_card.style.overflow = "hidden";
  }
};
</script>