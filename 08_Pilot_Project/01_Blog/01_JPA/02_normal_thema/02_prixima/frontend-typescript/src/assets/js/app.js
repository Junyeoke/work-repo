/* eslint-disable */
export default function initMain() {
//   $(document).ready(function () { 
    //Owl 캐러셀 1
    $(".hero-slider").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      dots: false,  // 하단에 ... 이동 메뉴 없앰
      navText: ["PREV", "NEXT"],    // 메뉴명 PREV, NEXT
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 7000,        // 오토플레이가 실행될 때 시간 7초
      responsive: {         // 반응형 : 0 ~ 765 화면(모바일, 태블릿)일 때 메뉴(nav) 없음
                            //              768 화면(PC)일 때 메뉴 있음
        0: {
          nav: false,
        },
        768: {
          nav: true,
        },
      },
    });
    //Owl 캐러셀 2
    $("#projects-slider").owlCarousel({
      loop: true,
      nav: false,
      items: 2,
      dots: true,
      smartSpeed: 600,
      center: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
          margin: 8,
        },
      },
    });
    //Owl 캐러셀 3
    $(".reviews-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 900,
      items: 1,
      margin: 24,
      autoplay: true,
      autoplayTimeout: 4000,
    });
//   });
}
