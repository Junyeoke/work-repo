import React, { useState } from "react";
// TODO: 연습문제 반복문 완성하기(ul-li)반복, 부트스트렙
// TODO: 배열변수.map(()=>{return (반복문(태그))})

function H_Book() {
  const students = [
    {
      id: 1,
      name: "Inje",
    },
    {
      id: 2,
      name: "Steve",
    },
    {
      id: 3,
      name: "Bill",
    },
    {
      id: 4,
      name: "Jeff",
    },
  ];

  //   변수정의
  const [student, setStudent] = useState(students);

  return (
    <div>
      <ul class="list-group">
        {/* 반복문 : 여기서 돌리면 됨 */}
        {student.map((value, index) => (
          <li class="list-group-item" key={index}>
            {value.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default H_Book;
