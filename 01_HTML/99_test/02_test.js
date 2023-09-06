// 배열 정의

const nameArr = ["철수", "영희", "민수"];

// map 함수 이용

let newNameArray = nameArr.map((name) => {
    if(name === "철수") {
        return `${name}님`;
    } else {
        return name;
    }
})

console.log(newNameArray);