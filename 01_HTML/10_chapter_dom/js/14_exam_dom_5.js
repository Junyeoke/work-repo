let button = prompt("y를 누르면 글쓰기버튼이 나옵니다.");
if (button === "y") {
    document.querySelector("#app").innerHTML = "<button>글쓰기</button>";
} else {
    document.querySelector("#app").innerHTML = "<button>글수정</button>";
}