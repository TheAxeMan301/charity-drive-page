<template>
  <table>
    <template v-for="(day, offset) in scheduleData">
      <tr :key="offset" class="day">
        <td></td>
        <td>{{ formdatDay(offset) }}</td>
      </tr>
      <tr v-for="row in day" :key="row.start">
        <td class="start-time text-right">
          {{ row.start }}
        </td>
        <td class="text-left description">
          {{ row.description }}
        </td>
      </tr>
    </template>
  </table>
</template>

<script>
import rawSchedule from "../assets/schedule.json";
export default {
  name: "Schedule",
  components: {},
  data() {
    return {
      startDate: new Date(),
      scheduleData: []
    };
  },
  created() {
    this.parsSchedule();
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
    },
    formdatDay(offset) {
      let date = new Date(this.startDate);
      date.setDate(date.getDate() + offset);
      const options = { weekday: "long", month: "long", day: "numeric" };
      return date.toLocaleDateString("en-US", options);
    },
    parsSchedule() {
      this.startDate = new Date(Date.parse(rawSchedule.data.start));
      let curDay = this.startDate.getDay();
      let dayIdx = 0;
      this.scheduleData.push([]);
      for (const item of rawSchedule.data.items) {
        const nextDay = new Date(Date.parse(item.scheduled)).getDay();
        if (nextDay != curDay) {
          this.scheduleData.push([]);
          dayIdx++;
          curDay = nextDay;
        }
        this.scheduleData[dayIdx].push({
          start: this.formatDate(new Date(Date.parse(item.scheduled))),
          description: item.data[0]
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
td.start-time {
  padding-right: 10px;
  padding-bottom: 10px;
  width: 20%;
}
td.description {
  padding-bottom: 10px;
}
tr.day {
  font-size: 1.5em;
  font-weight: bold;
}
tr.day td {
  padding-top: 1em;
}
</style>
