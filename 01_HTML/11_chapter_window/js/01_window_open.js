// 새창(새탭) 열기/닫기, 새창/새탭 금지(웹브라우저 설정)
function openWin() {
    let opt = "width=400, height=350"; // 새창 크기
    // myWin : let(예약어 없음 : 전역변수, 추천하지 않음)
    // 사용법 : window.open("새창띄울 html이름", "새창제목", 크기);
    myWin = window.open("notice.html", "doit", opt);
}

function closeWin() {
    myWin.close(); // 새창 띄우고 리턴된 변수를 사용
}