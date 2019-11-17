<template>
    <!-- <div style="margin-top:30px;">
        charts
        <div v-for="chart in charts">{{ chart }}</div>
    </div> -->
    <table style="border: 2px solid #dddddd; width: 700px;">
    <thead>
      <tr style="border: 2px solid #dddddd; height: 20px; display: flex">
        <!-- <th v-for="key in columns">
          {{ key }}
        </th> -->
        <th style='width: 20%; text-align: center;'>id</th>
        <th style='width: 80%'>name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in charts" style="border: 2px solid #dddddd; height: 20px; display: flex">
        <!-- <td v-for="key in columns">
          {{entry[key]}}
        </td> -->
        <td style='width: 20%; text-align: center;'>
          {{entry['id']}}
        </td>
        <td style='width: 80%'>
          {{entry['name']}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { fetchChartsList } from '../api/index.js';


export default {

    data() {
        return {
            charts: [],
            columns: ['id', 'title']
        }
    },
    created() {
        var vm = this;
        fetchChartsList()
        .then(function(response) {
            console.log(response);
            vm.charts = response.data;
        })
        .catch(function(error) {
            console.log(error)
        });
    },
}

</script>


<style>

</style>