<template>
  <appNavigation></appNavigation>
  <router-view></router-view>
  <appFooter></appFooter>
</template>

<script>
import Navigation from '@/components/shared/Navigation.vue'
import Footer from '@/components/shared/Footer.vue'

export default {
  name: 'App',
  components: {
    appNavigation: Navigation,
    appFooter: Footer
  },
  beforeCreate() {
    this.$store.dispatch('loadUniversities');
    this.$store.dispatch('loadFaculties');
    this.$store.dispatch('loadDepartments');
    this.$store.dispatch('loadCourses');
    this.$store.dispatch('loadExams');
    this.$store.dispatch('loadTests');
    this.$store.dispatch('loadSessions');
    this.$store.dispatch('loadSemesters');
  }
};
</script>

<style>
.hero-image {
  background: linear-gradient(90deg, rgba(0,108,255,1) 6%, rgba(9,9,121,1) 38%, rgba(2,0,36,1) 69%);
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.paqu-link {
  text-decoration: none !important;
}

.paqu-bg-blue {
  background-color: #050538 !important;
  color: white !important;
  border-color: #050538 !important;
}

.paqu-bg-blue:hover {
  background-color: transparent !important;
  color: #050538 !important;
}

.breadcrumb-item a {
  color: #050538;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  color: #dc3545;
}


thead {
  border-bottom: 2px solid #050538;
  background: #050538;
  color: white;
}

th {
  padding: 10px 0;
}

th:nth-of-type(1) {
  border-top-left-radius: 5px;
}

th:nth-last-of-type(1) {
  border-top-right-radius: 5px;
}

th, tr td {
  font-size: 1.5rem;
}

 tr td {
  padding: 15px 0 !important;
  color: #050538;
  cursor: pointer;
}

tr:hover > td {
  transform: scale(1.2);
  transform-origin: left;
  font-weight: 1.8rem;
  background-color: #eee;
  overflow: hidden;
}

tfoot {
  border-top: 2px solid #050538;
  color: #050538;
}

#example_filter {
  width: 35%;
}

#example_filter label {
  width: 100%;
}

@media only screen and (max-width: 768px) {
  #example_filter,
  #example_length {
    width: 100%;
    margin-bottom: 15px;
  }

  #example_filter label,
  #example_length label {
    width: inherit;
  }
}

@media (min-width: 768px) {
  #example_filter {
    position: absolute !important;
    right: 12px !important;
  }

  .dataTables_length label {
    width: 75%;
  }
  table {
    overflow: hidden;
  }
}

@media only screen and (max-width:  1024px){
}

ul.pagination {
  justify-content: flex-end;
}

.dataTables_wrapper .dataTables_paginate a.paginate_button.current {
  color: white !important;
  background: #050538 !important;
  border-color: #050538 !important;
}

.dataTables_wrapper .dataTables_paginate a.paginate_button,
.dataTables_wrapper .dataTables_paginate a.paginate_button.current:hover {
  color: #050538 !important;
  background: white !important;
  border-color: #050538 !important;
}

.cta-input {
  outline: none !important;
}

.cta-body {
  background: linear-gradient(0deg, rgba(5,5,56,1) 10%, rgba(25,25,242,1) 100%);
}

footer {
  background: linear-gradient(0deg, rgba(5,5,56,1) 100%, rgba(5,5,145,1) 100%);
}

footer ul {
  list-style-type: disclosure-closed !important;
}
</style>
