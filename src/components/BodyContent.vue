<template>
  <div class="Movies-area px-10 md:ml-10 ml-5 flex-1">
    <h2 class="top-subhead text-sub-txt text-lg mt-14 font-semibold uppercase">popular movies</h2>
    <div class="all-movie grid grid-cols-4 ">
    <div class="one-movie w-56" v-for="movie in movies">

      <img :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="poster"
        class="hover:opacity-75 transition ease-in-out duration-150 w-72 mt-7 md:w-56">
      <h3 class="text-lg text-white font-semibold">{{movie.title}}</h3>
      <div class="flex">
        <svg class="fill-current text-orange-500 w-4" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <path
              d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
              data-name="star"></path>
          </g>
        </svg>
        <h4 class="px-2 text-desc text-sm mt-1">67% | {{changeDateFormat(movie.release_date)}}</h4>
      </div>
      <h5 class=" text-desc text-sm mt-1 mb-7">Action, Adventure, Fantasy</h5>
    </div>

</div>

  </div>

</template>
<script>
import axios from 'axios';
import moment from 'moment';
export default {
  data() {
    return {
      movies: []
    }
  },

  methods:{
    changeDateFormat(currentDate){
      return moment(String(currentDate)).format('MMM DD, YYYY')
    }






  },

  mounted() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5343b9dcca983e96ab70efe4a24331c8')
      .then((res) => {

        this.movies = res.data.results

        console.log(res.data.total_pages);
      })


  }




  

}
</script>
