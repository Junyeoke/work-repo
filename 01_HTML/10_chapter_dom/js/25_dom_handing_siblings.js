// TODO 형제요소에 접근해보기
// 선택함수 사용법 (li 태그중 class가 two인것에 접근해보기) 
let liTag = document.querySelector(".two"); // class = two 인 태그에 접근합니다.

// TODO 사용법 : 태그.previousElementSibling
// TODO : 선택태그의 앞 형제요소에 접근합니다.
let siblingPre = liTag.previousElementSibling.innerHTML;

console.log("siblingPre", siblingPre); // class=two CSS 앞 형제인 HTML에 접근합니다.

// TODO 선택태그 뒤 형제요소에 접근해보기
// TODO : 사용법 태그.nextElementSibling
let siblingNext = liTag.nextElementSibling.innerHTML; // 뒤 형제인 Vanila js가 있는 태그에 접근합니다.
console.log("siblingNext", siblingNext);