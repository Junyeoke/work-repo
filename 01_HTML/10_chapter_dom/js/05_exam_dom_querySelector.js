// 연습문제 1)
// h1 태그 1개만 선택해서 아래와 같이 변경하세요
// window(생략) - document - html .... (dom 트리)
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"
let elements = document.querySelector("h1");
// 디자인 조작 : h1 태그, 속성(style)
elements.style.color = "orange";
elements.style.background = "red";
// 문자열 조작 : h1 태그사이의 문자열 변경, innerHTML 사용
elements.innerHTML = "From JavaScript";

// 연습문제 2)
// h1 태그 모두 선택해서 아래와 같이 조작하세요
// CSS(있는 html 태그에만 디자인 적용)
// js(기존에 없던 것을 다른 것으로 조작할 때 주로 사용)
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"
let headers = document.querySelectorAll("h1");
for(let i = 0; i < headers.length; i++) {
    // 디자인 변경
    headers[i].style.color = "orange";
    headers[i].style.background = "red";
    // 텍스트 변경
    headers[i].innerHTML = "From JavaScript";
}

