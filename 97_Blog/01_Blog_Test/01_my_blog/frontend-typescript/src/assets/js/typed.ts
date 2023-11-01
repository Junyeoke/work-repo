import Typed from "typed.js";

export default function typed() {
    let typed1 = document.querySelector("#typed1");


    // typed1 있으면 타이핑 객체 생성
    if (typed1 != null) {
      new Typed("#typed1", {
        // 타이핑 대상 글자 : strings: ["화면표시1",...,"화면표시n"]
        strings: ["junhyuk lee", ],
        typeSpeed: 60, // 타이핑 되는 속도
        backSpeed: 60, // 지워지는 속도
        cursorChar: "_",
        loop: true, // 글자 순환
      });
    }

    
}