<template>
  <h1
    class="
      font-bold
      text-center
      uppercase
      text-4xl text-white
      mt-10
      border-double border-4 border-yellow-300
      mx-auto
    "
  >
    Weather App
  </h1>

  <h2 class="font-bold text-center text-3xl mt-5 text-gray-600">Cairo</h2>
  <p class="text-center mt-5 font-bold text-xl text-blue-800">Today</p>
  <!-- <li v-for="time in times" :key="time">{{time}}:
 <div v-for="temperature in temperatures" :key="temperature">
  {{temperature}}
 </div>
 </li> -->
  <div class="Main-container flex">
    <table class="Temp table-auto mt-5 items-center content-center mx-auto">
      <thead>
        <tr>
          <th class="border border-slate-300 text-lg text-white p-4">Time</th>
          <th class="font-bold border border-slate-300 text-lg text-white p-4">
            Temperature
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hour in hours" :key="hour">
          <td class="border border-slate-300 text-lg p-4">
            {{ hour.datetime }}
          </td>
          <td class="border border-slate-300 text-lg p-4">{{ hour.temp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  time: "0",
  temperature: "0",
  setup() {
    
    const hours = ref([]);

    function getTemp() {
      axios
        .get(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cairo?unitGroup=metric&key=VXHEHVMWD77AXXALKWMPSZB9K&contentType=json"
        )
        .then((res) => {
          this.hours = res.data.days[0].hours
          
        });
    }

    return {   hours, getTemp };
  },

  mounted() {
    this.getTemp(); // 0
  },
};
</script>
