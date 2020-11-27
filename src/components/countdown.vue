<template>
  <section v-if="showTimer" class="countdown">
    <div class="actual-counter">
      <span>Only </span>
      <span class="countDays">{{ dayCount }}</span>
      <span>:</span>
      <span class="countHours">{{ hourCount }}</span>
      <span>:</span>
      <span class="countMinutes">{{ minuteCount }}</span>
      <span>:</span>
      <span class="countSeconds">{{ secondCount }}</span>
      <span> left!</span>
    </div>
  </section>
</template>

<script>
function leadingZero(number) {
  return ("0" + number).slice(-2);
}
const timerTarget = new Date("27 Nov 2020 12:00:00 PST");

export default {
  name: "Countdown",
  components: {},
  data() {
    return {
      showTimer: true,
      dayCount: 0,
      hourCount: 0,
      minuteCount: 0,
      secondCount: 0
    };
  },
  created() {
    this.updateTimer();
    this.timeUpdateInterval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeUpdateInterval);
  },
  methods: {
    updateTimer() {
      let nDiff = (timerTarget - Date.now()) / 1000;
      if (nDiff >= 0) {
        let days = Math.floor(nDiff / 86400);
        nDiff -= days * 86400;
        let hours = Math.floor(nDiff / 3600);
        nDiff -= hours * 3600;
        let minutes = Math.floor(nDiff / 60);
        nDiff -= minutes * 60;
        let seconds = Math.floor(nDiff);

        this.dayCount = leadingZero(days);
        this.hourCount = leadingZero(hours);
        this.minuteCount = leadingZero(minutes);
        this.secondCount = leadingZero(seconds);
      } else {
        this.showTimer = false;
        clearInterval(this.timeUpdateInterval);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.countdown {
  margin: 0.25em 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height: 6em;
  padding: 1em;
  .actual-counter {
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
  }
  p {
    font-size: 2rem;
    margin: 0;
  }
  span {
    color: #fff;
    margin: 0 0.1em;
    position: relative;
    font-size: 2em;
    padding: 0.1em;
    border-radius: 0.2em;
    @media (max-width: 576px) {
      font-size: 1.5em;
    }
    @media (max-width: 360px) {
      font-size: 1.25em;
    }
  }
  span::after {
    color: #ddd;
    position: absolute;
    left: 0;
    bottom: -1.5em;
    font-size: 0.375em;
    width: 100%;
  }
  .countDays::after {
    content: "days";
  }
  .countHours::after {
    content: "hours";
  }
  .countMinutes::after {
    content: "minutes";
  }
  .countSeconds::after {
    content: "seconds";
  }
}
</style>
