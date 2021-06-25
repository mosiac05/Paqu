<template>
	<footer class="container-fluid col-12 m-auto">
	  <!-- <section class="row">
  		<form class="col-12 text-center text-dark p-5 cta-body">  			
        <div class="d-inline input-group">
          <input type="text" class="shadow rounded-pill p-3 border-0 w-50 cta-input" placeholder="Search by school">
	      </div>

	      <button class="btn-outline-dark rounded-pill p-3 border-0 h5 cta-input"><i class="fas fa-search fa-1x"></i> Search Now</button>
  			
  		</form>
	  </section> -->

  	<section class="row text-white">
  		<div class="col-sm-4 py-3 px-4">
  			<h3>Paqu</h3>
  			<hr class="w-50 text-white mt-0">
  			<p>Paqu (paku) is a platform that provides an integrated system of past exams and tests question papers in the several tertiary institutions of Nigeria. Just search and select your desired university, faculty, department, and course to get these free past question papers. Cheers! &#128513;</p>
  		</div>
  		<div class="col-sm-4 py-3 px-4">
  			<h3>Quick Links</h3>
  			<hr class="w-50 mt-0">
  			<ul class="nav flex-column">
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
  		</div>
  		<div class="col-sm-4 py-3 px-4">
  			<h3>Contact Us</h3>
  			<hr class="w-50 text-white mt-0">
			<div class="col mb-3">
				<a href="#" class="paqu-footer-link"><font-awesome-icon icon="home" /> <small>New Town, Abuja, Nigeria</small></a>
			</div>
  			<div class="col mb-3">
				<a href="mailto:test@gmail.com" class="paqu-footer-link"><font-awesome-icon icon="envelope" /> <small>test@gmail.com</small></a>
		    </div>
		    <div class="col mb-3">
				<a href="tel:09000000000" class="paqu-footer-link"><font-awesome-icon icon="phone" /> <small>09000000000</small></a>
		    </div>
		 	<div class="col">
		 		<nav class="nav">
				  <a class="nav-link paqu-footer-link" aria-current="page" href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
				  <a class="nav-link paqu-footer-link" aria-current="page" href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
				  <a class="nav-link paqu-footer-link" aria-current="page" href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
				  <a class="nav-link paqu-footer-link" aria-current="page" href="#"><font-awesome-icon :icon="['fab', 'github']" /></a>
				</nav>
		 	</div>
  		</div>
  		<div class="col-12 text-center pb-3">
  			<hr>
  			Copyright &copy; 2021 Paqu. All rights reserved.
  		</div>
  	</section>
  </footer>
</template>

<style scoped>
.nav-item .nav-link, .paqu-footer-link {
  color: white;
  text-decoration: none;
}

.nav-item .nav-link:hover, .nav-item .nav-link.active, .paqu-footer-link:hover {
  color: #dc3545;
}

.nav-item .nav-link:hover, .nav-item.active .nav-link, .paqu-footer-link:hover {
  color: #dc3545;
}
</style>