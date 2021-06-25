<template>
	<section class="container-fluid col-12 m-auto pt-5">
  	<div class="row bg-white">
  		<hr>
  		<ul class="nav col-12">
			  <li class="nav-item nav-pills" v-for="(letter, index) in universityAlphabets" :key="index">
			    <i class="nav-link" :class="{'active': index == activeLetter }" @click="getUniversitiesByFirstAlphabet($event, letter, index)">{{ letter }}</i>
			  </li>
			</ul>
  	</div>
  	<div class="row p-5 bg-light" v-if="!universitiesByAlphabet">
  		<div class="col-md-6 col-lg-3 pb-5" v-for="university in universities">
        <router-link :to="{ name : 'faculties', params: { universityId: university.id } }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="card text-dark shadow border-0 paqu-link">
		  			<div class="card-body text-center">
		  				<img :src="university.logo" style="width: 70%;">
		  				<p class="my-4 h4">{{ university.name }}<span class="paqu-link-school"></span></p>
		  			</div>
		  		</a>
        </router-link>	  		
  		</div>
  	</div>  	
  	<div class="row p-5 bg-light" v-else>
  		<div class="col-md-6 col-lg-3 pb-5" v-for="university in universitiesByAlphabet">
        <router-link :to="{ name : 'faculties', params: { universityId: university.id } }" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="card text-dark shadow border-0 paqu-link">
		  			<div class="card-body text-center">
		  				<img :src="university.logo" style="width: 70%;">
		  				<p class="my-4 h4">{{ university.name }}<span class="paqu-link-school"></span></p>
		  			</div>
		  		</a>
        </router-link>	  		
  		</div>
  	</div>
  </section>
</template>

<script>
// import image from '../assets/img/unijos.png'

export default {
	data() {
		return {
			universitiesByAlphabet: null,
			activeLetter: null
		}
	},
	computed: {
		universities() {
			return this.$store.getters.getRandomizedUniversities
		},
		universityAlphabets() {
			return this.$store.getters.getFirstAlphabetOfUniversities
		}
	},
	methods: {
		getUniversitiesByFirstAlphabet(event, alphabet, index) {
			// console.log(alphabet);
			this.universitiesByAlphabet = this.$store.getters.getUniversitiesByFirstAlphabet(alphabet);
			this.activeLetter = index;
			// console.log(this.universitiesByAlphabet);
		}
	},
	created() {
		// console.log(this.$store.getters.getUniversities);
	}
};
</script>

<style lang="scss" scoped>
.nav-item {
	.nav-link {
		font-style: normal;
		color: #050538;

		&:hover {
			cursor: pointer;
		  color: #dc3545;
		}
	}
}

.nav-pills .nav-link.active{
	background-color: #050538 !important;	
	color: white !important;
}

.card {
	.card-body p {
		color: #050538;
	}

	&:hover {
		transform: scale(1.1);
		transform-origin: center;
		background-color: #eee;
		border-left: 3px #050538 dashed !important;
	}

}
</style>