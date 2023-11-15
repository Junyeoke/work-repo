// TODO : 얘가 문제가 많아 보임

/* eslint-disable */
export default function customMarquee() {
  $(".de-marquee-list").marquee({
    direction: "left",
    duration: 4000000,
    gap: 0,
    delayBeforeStart: 0,
    duplicated: false,
    startVisible: true,
  });

  $(".wm-carousel").marquee({
    direction: "left",
    duration: 20000,
    gap: 100,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: false,
  });
}
