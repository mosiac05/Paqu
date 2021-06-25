<template>
  <div class="container-fluid col-12 px-4 py-5 hero-image">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start text-white">
        <h1 class="display-4 fw-bold lh-1 mb-3">Explore & Download Past Question Papers</h1>
        <p class="col-lg-10 fs-4">Search for past exams and test question papers by university, faculty, department and course.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5 text-center">
        <img src="@/assets/img/file-system.svg" class="img-fluid" style="width: 80%">
      </div>
    </div>
  </div>

  <appSearchBox></appSearchBox>
  <appUniversityCards></appUniversityCards>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'
import UniversityCards from '@/components/UniversityCards.vue'

export default {
  name: 'Home',
  components: {
    appSearchBox: SearchBox,
    appUniversityCards: UniversityCards
  }
}
</script>
