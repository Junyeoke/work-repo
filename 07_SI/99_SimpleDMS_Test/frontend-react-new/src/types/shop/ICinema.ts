export default interface ICinema {
//     boxofficeType	:string,
//     showRange	:string,
//     rnum	:string,
// rank	:string,
// rankInten	:string,
// rankOldAndNew	:string,
// movieCd	:string	,
// movieNm	:string	,
// openDt	:string	,
// salesAmt	:string	,
// salesShare	:string	,
// salesInten	:string	,
// salesChange	:string	,
// salesAcc	:string	,
// audiCnt	:string	,
// audiInten	:string	,
// audiChange	:string	,
// audiAcc	:string	,
// scrnCnt	:string	,
// showCnt	:string	,
movieCd:string,         // 영화코드
rank: string,           // 해당일자의 박스오피스 순위를 출력합니다.
rankOldAndNew: string,  // 랭킹에 신규진입여부를 출력합니다.(“OLD” : 기존 , “NEW” : 신규)
movieNm: string,        // 영화명(국문)을 출력합니다.
openDt: string,         // 영화의 개봉일을 출력합니다.
audiAcc: string,        // 누적관객수를 출력합니다.
scrnCnt: string,        // 해당일자에 상영한 스크린수를 출력합니다.
}