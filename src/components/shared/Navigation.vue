<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <router-link :to="{ name : 'home' }" class="navbar-brand fw-bolder">
      Paqu
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <router-link :to="{ name : 'home' }" custom v-slot="{ href, navigate, isExactActive }">
          <li class="nav-item" :class="{'active': isExactActive }">
            <a :href="href" class="nav-link" :aria-current="isExactActive ? 'page' : ''" @click="navigate">Home</a>
          </li>
        </router-link>
        <router-link :to="{ name : 'universities' }" custom v-slot="{ href, navigate, isExactActive }">
          <li class="nav-item" :class="{'active': isExactActive }">
            <a :href="href" class="nav-link" :aria-current="isExactActive ? 'page' : ''" @click="navigate">Universities</a>
          </li>
        </router-link>
      </ul>
      <div class="navbar-text">
      	<a href="tel:+2349000000000" class="d-inline-block mb-0 mx-2 text-danger"><font-awesome-icon :icon="faPhone" /> (+234) 900 000 000</a>
      	<a href="mailto:test@gmail.com" class="d-inline-block mb-0 mx-2 text-danger"><font-awesome-icon :icon="faEnvelope" /> test@gmail.com</a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default {
  data() {
    return {
      faPhone,
      faEnvelope
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.nav-item {
  &.active {
    .nav-link {
      color: #dc3545 !important;      
    }
  }

  .nav-link {
    color: #050538 !important;


    &:hover{
      color: #dc3545 !important;
    }
  }
}

.navbar-text a {
  text-decoration: none;
}
</style>
