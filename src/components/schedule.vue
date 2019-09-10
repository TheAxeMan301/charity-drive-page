<template>
  <table>
    <tr v-for="row in rowData" :key="row.start">
      <td class="start-time text-right">
        {{ row.start }}
      </td>
      <td class="text-left">
        {{ row.description }}
      </td>
    </tr>
  </table>
</template>

<script>
import moment from "moment-timezone";
let startTime = moment.tz("2019-09-14 08:00", "America/Los_Angeles");
let local = moment.tz.guess();
let scheduleData = [
  {
    length: "1:00:00",
    description: "Stanley Parable"
  },
  {
    length: "1:00:00",
    description: "ALTTP randomizer triforce hunt"
  }
];

export default {
  name: "Schedule",
  components: {},
  data() {
    return {
      scheduleData
    };
  },
  computed: {
    rowData() {
      let data = [];
      for (let run of scheduleData) {
        data.push({
          start: startTime.tz(local).format("h:mm a"),
          description: run.description
        });
        startTime = startTime.add(moment.duration(run.length));
      }
      return data;
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
td.start-time {
  padding-right: 10px;
}
</style>
