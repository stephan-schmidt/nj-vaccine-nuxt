<template>

  <div class="container">


    <div class="header">
      <img src="https://smarter.nj.gov/images/nj-state-logo-white.png" width="80px" alt="">
    </div>
    <div>
      <!-- <Logo /> -->
      <h3 class="title">
        New Jersey Vaccine Availability
      </h3>
      <div style="text-align:left">
        <p>  How to use this site:</p>
        <ul>
        <li>1. Select your County with the dropdown below</li>
        <li>2. Scroll down to see a list of vaccine sites with available appointments. This information is updated regularly.</li>
        <li>3. Reach out to convenient locations to schedule an appointment.</li>
      </ul>
    <b>Available:</b>   <select class="form-multiselect   mt-2 border rounded-lg text-indigo-900"  @change="changeAvail($event)">
  <option value="" selected disabled>Choose</option>
  <option v-for="available in available_sites" :value="available" :key="available">{{ available }}</option>
</select>
        <b>  County:</b> <select class="form-multiselect   mt-2 border rounded-lg text-indigo-900"  @change="changeCounty($event)">
  <option value="" selected disabled>Choose</option>
  <option v-for="county in counties" :value="county" :key="county">{{ county }}</option>
</select>
<button class="mr-5 bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 rounded-md"  @click="reset()">
  Reset
</button>
<br><br>
      </div>

      </ul>
      <div class="flex flex-col h-screen">
          <div class="flex-grow overflow-auto">
            <table class="relative w-full border">
              <thead>
                <tr>
                  <th class="sticky top-0 px-2 py-2 text-red-900 bg-red-300">AVAILABLE</th>
                  <th class="sticky top-0 px-2 py-2 text-red-900 bg-red-300">Facility Name</th>
                  <th class="sticky top-0 px-2 py-2 text-red-900 bg-red-300">Facility Address</th>
                  <th class="sticky top-0 px-2 py-2 text-red-900 bg-red-300">County</th>
                  <th class="sticky top-0 px-2 py-2 text-red-900 bg-red-300">Minimum Age</th>
                  <th class="sticky top-0 px-2 py-2 text-red-900 bg-red-300">Phone Number</th>
                  <th class="sticky top-0 px-2 py-2 text-red-900 bg-red-300">Facility Website</th>

                </tr>
              </thead>
              <tbody class="divide-y bg-red-100">

                <tr v-for="(item, index) in vaccine_sites">
                   <td class="px-2 py-2 text-center">{{ item.available }}</td>
                   <td class="px-2 py-2 text-center">{{ item.name }}</td>
                   <td class="px-2 py-2 text-center" v-for="(value, name) in item.official" v-if="name=='Facility Address'">{{ value }}</td>
                   <td class="px-2 py-2 text-center" v-for="(value, name) in item.official" v-if="name=='County'">{{ value }}</td>
                   <td class="px-2 py-2 text-center" v-for="(value, name) in item.official" v-if="name=='Minimum Age'">{{ value }}</td>
                   <td class="px-2 py-2 text-center" v-for="(value, name) in item.official" v-if="name=='Phone Number for Appointments + Questions'">{{ value }}</td>
                   <td class="px-2 py-2 text-center" v-for="(value, name) in item.official" v-if="name=='Facility Website'"><a :href="value">{{ value }}</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


      <!-- <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counties: [],
      vaccine_sites: [],
      available_sites: [],
      vaccine_sites_default:[],
      vaccine_sites_default:[]
    }
  },
  async fetch() {
    self = this;
    this.vaccine_sites_default = await this.$axios.get('https://newjersey.github.io/nj-vaccine-scraper/data.json')
    this.vaccine_sites = this.vaccine_sites_default.data;
    // build countylist

    this.setFilter()
  },

  methods: {
setFilter(){
    this.vaccine_sites.map( function(a,b){

      if(a.official != undefined){
        self.counties.push(a.official['County'])
      };
      if(a.available != undefined){
        self.available_sites.push(a.available)
      };

    })
    self.counties = [...new Set(self.counties)];
    self.available_sites = [...new Set(self.available_sites)];
    self.counties.sort((a,b) => (b < a) ? 1 : ((a < b) ? -1 : 0));
  },
    reset() {
      this.vaccine_sites = this.vaccine_sites_default.data;
      this.setFilter()
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    changeCounty($event)
    {
      self = this;
      console.log($event.target.value);
      const tempc =[];
      this.vaccine_sites_default.data.map( function(a,b){
        if(a.official ){
          if(a.official['County'] == $event.target.value)
          {
            tempc.push(a);
          }
        };
      })
      console.log(tempc);
      this.vaccine_sites = tempc;
    },
    changeAvail($event)
    {
      self = this;
      console.log($event.target.value);
      const tempc =[];
      this.vaccine_sites_default.data.map( function(a,b){
        if(a.available ){
          if(a.available == $event.target.value)
          {
            tempc.push(a);
          }
        };
      })
      console.log(tempc);
      this.vaccine_sites = tempc;
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;

}
.header
{
  padding-top: 10px;
  padding-left: 10px;
  flex: 1 100%;
  height: 100px;
  background-color: #609E09;
  flex-direction: row;
  /* background-image: url('https://smarter.nj.gov/images/nj-state-logo-white.png'); */
  background-repeat: no-repeat;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
  flex: 1 100%;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
