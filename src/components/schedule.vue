<template>
  <table>
    <tr
      v-for="row in rowData"
      :key="row.start"
    >
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
import moment from 'moment'

let startTime = new Date('14 Sept 2019 8:00:00 PDT')
let scheduleData = [{
  length: '1:00:00',
  description: 'Stanley Parable'
}, {
  length: '1:00:00',
  description: 'ALTTP randomizer triforce hunt'
}]

export default {
  name: 'Schedule',
  components: {
  },
  data () {
    return {
      scheduleData
    }
  },
  computed: {
    rowData () {
      let data = []
      let runStart = moment(startTime)
      for (let run of scheduleData) {
        data.push({
          start: runStart.format('h:mm'),
          description: run.description
        })
        runStart = runStart.add(moment.duration(run.length))
      }
      console.log(data)
      return data
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
td.start-time {
  padding-right: 10px;
}
</style>
