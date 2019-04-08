<template>
  <main>
    <b-container>
      <b-row>
        <b-col col="12">
          <!--<b-col
            md="4"
            class="float-right d-md-inline float-image-col"
          >
            <!--<img
              src="../assets/DesertBusYourDriverIs.png"
              class="d-block img-fluid"
            >
          </b-col>-->
          <h3 class="faq-question">
            I'm new, who are dwangoAC and TASBot?
          </h3>
          <p class="faq-answer">
            TASBot is best described as a special R.O.B. robot outfitted with Legos to hold a
            custom circuit board that can exactly mimic the behavior of a video game
            controller. TASBot can play games on real video game consoles with superhuman
            abilities, usually leading to game breaking glitches in front of live audiences.
            dwangoAC (Allan Cecil) is TASBot’s owner and creator. For this trip they are
            joined by TheAxeMan (Frank Amoroso), a long-time TAS author making his first
            marathon appearance. You can talk to the tasbot crew in their
            <a href="https://discord.gg/3HPhwub">
              discord <i class="fas fa-external-link-alt fa-xs" />
            </a>
          </p>
          <h3 class="faq-question">
            What is the stream supporting?
          </h3>
          <p class="faq-answer">
            All revenue from donations, bits, and subscribers will be donated to the
            <a
              href="https://nami.org/"
              target="_blank"
            >
              National Alliance on Mental Illness
              <i class="fas fa-external-link-alt fa-xs" />
            </a>.
            NAMI is RPG Limit Break's chosen charity.
          </p>
          <h3 class="faq-question">
            What is this stream about?
          </h3>
          <p class="faq-answer">
            DwangoAC, TheAxeMan and TASBot will depart from Petaluma, CA on the morning of
            Saturday, May 4 in dwangoAC’s Tesla Model X. The 14 hour trip will take them to
            the Salt Lake City, UT site of RPG Limit Break. Thanks to
            <a
              href="https://crowdcontrol.live/"
              target="_blank"
            >
              Crowd Control
              <i class="fas fa-external-link-alt fa-xs" />
            </a>
            and the TASBot team, viewers will be able to control
            some systems of the car during the drive. Tesla Autopilot will be used when
            possible and proper safety rules will be followed.
          </p>
          <h3 class="faq-question">
            When is this going to happen?
          </h3>
          <p class="faq-answer">
            The plan is to start at 8 AM PST on Saturday May 4.
          </p>
          <h3 class="faq-question">
            How can you interact with the stream?
          </h3>
          <p class="faq-answer">
            The TASBot team has worked with
            <a
              href="https://crowdcontrol.live/"
              target="_blank"
            >
              Crowd Control
              <i class="fas fa-external-link-alt fa-xs" />
            </a>
            to allow you to control the Tesla directly!
            Donating money or bits will allow you to change music,
            temperature, top speed and more!
          </p>
          <h3 class="faq-question">
            Where can I watch the stream?
          </h3>
          <p class="faq-answer">
            Tune in to dwangoAC's Twitch stream at
            <a href="https://twitch.tv/dwangoAC">
              <i class="fab fa-twitch" />
              https://twitch.tv/dwangoAC
            </a>
            on May 4 from 8 AM PST until about 10 PM PST!
          </p>
          <h3 class="faq-question">
            How is this related to speedrunning?
          </h3>
          <p class="faq-answer">
            The remote Tesla controls come from Crowd Control which is primarily
            focused on gaming and speedrunning.
            TASBot, while not speedrunning any game, will also be in the car.
            TheAxeMan is also looking forward to getting a few runs in while dwangoAC drives.
          </p>
          <h3 class="faq-question">
            Why are you taking donations for equipment?
          </h3>
          <p class="faq-answer">
            100% of stream revenue and donations for the day of this event will be donated
            to NAMI.
            However, keeping TASBot going isn't cheap. dwangoAC has personally spent over $12,000
            on equipment and travel costs.
            Stream and donation revenue outside of events helps to offset these costs.
            From those proceeds dwangoAC always donates a portion directly to charity.
          </p>
          <h3 class="faq-question">
            Are you taking this idea from Desert Bus?
          </h3>
          <p class="faq-answer">
            Desert Bus For Hope was a big inspiration for this event.
            Our event will be longer and there will be incentives to donate.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  name: 'About',
  components: {
  }
}
</script>

<style scoped lang="scss">
main {
  margin-bottom: 15px;
}
.question-with-img-left img {
  float: left;
  padding-right: 15px;
  display: none;
  width: 100%;
}
.question-with-img-right img {
  float: right;
  padding-left: 15px;
  display: none;
  width: 100%;
}
.float-image-col {
  display: none;
}
