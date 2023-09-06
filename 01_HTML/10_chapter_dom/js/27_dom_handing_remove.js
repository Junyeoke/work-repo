// TODO : 1) 선택한 자기자신 삭제
// 선택함수
let liOne = document.querySelector(".one");  // class가 one 인 태그 선택

// TODO : 요소 삭제
// 사용법 : 태그.remove();
liOne.remove(); // class가 one인 태그(HTML)가 삭제됨

// TODO 2) 부모의 자식 중 1개를 삭제
// 부모선택
let ulTag = document.querySelector("ul");
// 삭제할 자식태그 선택 : class = removeTarget
let removeTarget = document.querySelector(".removeTarget");

// TODO : 자식 태그 삭제하기
// 사용법 : 부모태그.removeChild(삭제할 자식태그);
ulTag.removeChild(removeTarget);