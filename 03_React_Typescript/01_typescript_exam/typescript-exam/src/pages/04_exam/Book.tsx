// Book.tsx
import React from "react";
import { useState } from "react";
import IBook from "../../types/IBook";

function Book() {
  // TODO: 변수 정의

  const initialBooks = [
    {
      id: 1,
      title: "어떻게 배울 것인가",
      publisher: "비즈니스북스",
      author: "존 맥스웰",
      stock: 2,
    },
    {
      id: 2,
      title: "신경끄기의 기술",
      publisher: "갤리온",
      author: "마크 맨슨",
      stock: 0,
    },
    {
      id: 3,
      title: "부의 미래",
      publisher: "청림출판",
      author: "앨빈 토플러",
      stock: 5,
    },
    {
      id: 4,
      title: "기획자의 습관",
      publisher: "홍익출판사",
      author: "최장순",
      stock: 4,
    },
  ];

  // 바인딩 변수(객체배열) 정의 : 타입스크립트 적용
  // TODO: 사용법 : useState<Array<객체자료형>>
  //   객체자료형 : 따로정의(IBook) : 이름규칙(명명법) I이름
  let [books, setBooks] = useState<Array<IBook>>(initialBooks); // 객체배열

  // TODO: 함수 정의

  return (
    <div>
      <h1>체르니 책방의 도서목록</h1>
      <table>
        <thead>
          <tr>
            <th>도서번호</th>
            <th>도서이름</th>
            <th>출판사</th>
            <th>저자</th>
            <th>재고량</th>
          </tr>
        </thead>
        <tbody>
            {/* 반복문 : 배열변수.map((value, index)=>{<태그>{value.속성명</태그>}) */}
            {/* 반복대상 : 행(<tr><td></td></tr>) */}
            {
                books.map((value, index)=>(
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.publisher}</td>
                        <td>{value.author}</td>
                        <td>{value.stock}</td>
                    </tr>
                ))
            }
            </tbody>
      </table>
    </div>
  );
}

export default Book;
