// TODO 부모요소(태그)에 접근하기
// 선택함수 li 태그 중 class가 two인 것
let liTag = document.querySelector(".two"); // class = two 인 태그에 접근합니다.

// TODO 사용법 : 태그.parentElemenet; // 태그의 부모태그접근
let parent = liTag.parentElement;

// 출력
console.log("parent", parent);
