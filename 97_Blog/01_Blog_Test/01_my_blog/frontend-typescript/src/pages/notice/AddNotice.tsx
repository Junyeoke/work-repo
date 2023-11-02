import React, { useState } from "react";
import Notice from "../../types/Notice";
import NoticeService from "../../services/NoticeService";
import { useNavigate } from "react-router-dom";

function AddNotice() {
  // 객체 초기화
  const initialNotice = {
    id: null,
    title: "",
    userName: "",
    content: "",
  };

  // 공지 객체
  const [notice, setNotice] = useState<Notice>(initialNotice);
  // 저장버튼 클릭 후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);
  

  // input 태그에 수동 바인딩 함수
  const handleInputChange = (event: any) => {
    const { name, value } = event.target; // 화면값
    setNotice({ ...notice, [name]: value }); // 변수저장
  };

  let navigate = useNavigate();

  // 저장 함수
  const saveNotice = () => {
    // 임시 공지 객체
    var data = {
      title: notice.title,
      userName: notice.userName,
      content: notice.content,
    };

    NoticeService.create(data) // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        alert("저장되었습니다.");
        navigate("/notice");
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새 폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newNotice = () => {
    setNotice(initialNotice); // 부서 초기화
    setSubmitted(false); // submitted 변수 초기화
  };
  return (
    <div className="container ">
      {submitted ? (
        <div className="col-6 mx-auto">
         
          <button className="btn btn-success" onClick={newNotice}>
            글쓰기
          </button>
        </div>
      ) : (
        <>

          <label htmlFor="title" className="col-form-label">
            제목
          </label>
          <input
            type="text"
            id="boardTitle"
            required
            className="form-control mb-3"
            value={notice.title}
            onChange={handleInputChange}
            placeholder="글제목"
            name="title"
          />
          <label htmlFor="userName" className="col-form-label ">
            작성자
          </label>
          <input
            type="text"
            id="userName"
            required
            className="form-control mb-4"
            value={notice.userName}
            onChange={handleInputChange}
            placeholder="작성자명"
            name="userName"
          />
          <label htmlFor="content" className="col-form-label ">
            내용
          </label>
            {/* TODO : 글쓰기 화면  : CKeditor*/}
      
          

          <div className="form-row float-end mt-3">
            <button
              onClick={saveNotice}
              className="btn btn-outline-dark"
            >
              글쓰기
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default AddNotice;
