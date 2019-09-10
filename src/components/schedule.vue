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
let startTime = new Date("2019-09-14T08:00:00-07:00");
let scheduleData = [
  {
    length: {
      hours: 1,
      minutes: 15,
      seconds: 0
    },
    description: "Stanley Parable"
  },
  {
    length: {
      hours: 2,
      minutes: 0,
      seconds: 0
    },
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
          start: this.formatDate(startTime),
          description: run.description
        });
        const add = run.length;
        const addMs =
          add.hours * 60 * 60 * 1000 +
          add.minutes * 60 * 1000 +
          add.seconds * 1000;
        startTime = new Date(startTime.getTime() + addMs);
      }
      return data;
    }
  },
  methods: {
    formatDate(date) {
      let hours = date.getHours();
      let minutes = date
        .getMinutes()
        .toString(10)
        .padStart(2, "0");
      let PM = hours >= 12;
      if (PM) hours -= 12;
      if (hours == 0) hours = 12;
      return `${hours}:${minutes} ${PM ? "pm" : "am"}`;
    }
  }
};
</script>

<style scoped lang="scss">
td.start-time {
  padding-right: 10px;
}
</style>
