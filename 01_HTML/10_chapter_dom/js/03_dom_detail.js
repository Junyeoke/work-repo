// DOM : Document Object Model, HTML문서(태그 등이 있음)
// HTML 웹 문서 동작
// 1) 컴퓨터 웹브라우저에 HTML 문서를 읽어들임(파싱 : 문법 해석)
// 2) 파싱된 문서(DOM)를 메모리에 저장함(DOM 저장됨)
// 파싱된 문서(DOM) : 트리구조(자료구조)
// 예) html 현재 문서(03_dom_detail.html)
//                  window(최상위 부모 객체 : html 문서, 주소창, 메뉴, 상태바 등...)
//                    ㅣ                    
//                 document(객체, html 문서)
//                    ㅣ
//                   html(태그, 부모)
//                    ㅣ
// -------------------------------------------
// ㅣ                                        ㅣ
// head(태그, 자식)                       body(태그)
//                                           ㅣ
//                             -------------------------------
//                            ㅣ                             ㅣ
// div(태그) - style="backgroundColor='aqua'"; (속성)        script - src="./js/03_dom_detail.js"
//                            ㅣ
//                      "안녕하세요"(텍스트, == innerHTML속성)
// TODO : html 문서(DOM) 특징(노드) : 태그(tag), 속성(attribute), 텍스트(text), 주석(comment)
// TODO : 태그, 속성, 텍스트, 주석 별로 구분해서 트리구조로 메모리에 저장됨
// TODO : 위 그림이 DOM을 시각화한것임
// TODO : DOM 접근(선택)함수 : querySelector(CSS 선택자)
