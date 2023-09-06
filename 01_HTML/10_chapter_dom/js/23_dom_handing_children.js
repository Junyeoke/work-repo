// TODO 자식요소(태그) 접근
// 선택함수 : querySelector(css 선택자)
let ulTag = document.querySelector("ul"); // ul 태그 선택
// TODO 사용법 : 태그.children[1] : 두번째 li 접근
//          태그.children[2] : 세번째 li 접근
let two = ulTag.children[1].innerHTML; // 두번째 li의 텍스트
let three = ulTag.children[2].innerHTML; // 세번째 li의 텍스트

// 출력
console.log("two", two);
console.log("three", three);

// TODO 첫번째 자식요소와 마지막 자식요소 접근해보기
// TODO : 태그.firstElementChild >> 첫번째 자식요소에 접근합니다.
let one = ulTag.firstElementChild.innerHTML; // 첫번째 자식요소에 접근합니다.
// TODO : 태그.lastElementchild >> 마지막 자식요소에 접근합니다.
let last = ulTag.lastElementChild.innerHTML; // 마지막 자식요소에 접근합니다.

// 출력
console.log("one", one);
console.log("last", last);