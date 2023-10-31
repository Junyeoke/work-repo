// AddQna.tsx

import React, { useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import IQna from "../../../types/basic/IQna";
import QnaService from "../../../services/basic/QnaServics";

function AddQna() {
     // 객체 초기화
  const initialQna = {
    qno: null,
    question: "",
    answer: "",
    questioner: "",
    answerer: "",
  };

  // 부서 객체
  const [qna, setQna] = useState<IQna>(initialQna);
  // 저장버튼 클릭 후 submitted = true 변경됨
  const [submitted, setSubmitted] = useState<boolean>(false);

  // input 태그에 수동 바인딩 함수
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 화면값
    setQna({ ...qna, [name]: value });  // 변수저장
  };

  // 저장 함수
  const saveQna = () => {
    // 임시 Qna 객체
    var data = {
        question : qna.question,
        answer: qna.answer,
        questioner: qna.questioner,
        answerer: qna.answerer,
    };

    QnaService.create(data)    // 저장 요청
      .then((response: any) => {
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 새 폼 보여주기 함수 : 변수값 변경 -> 화면 자동 갱신(리액트 특징)
  const newQna = () => {
    setQna(initialQna); // Qna 초기화
    setSubmitted(false);  // submitted 변수 초기화
  };
  return (
    <div className="row">
      {submitted ? (
        <div className="col-6 mx-auto">
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newQna}>
            Add
          </button>
        </div>
      ) : (
        <>
          {/* 제목 start */}
          <TitleCom title="Add QnA" />
          {/* 제목 end */}

          {/* Question 입력창 */}
          <div className="col-6 mx-auto">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="question" className="col-form-label">
                  Question
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="question"
                  required
                  className="form-control"
                  value={qna.question}
                  onChange={handleInputChange}
                  placeholder="question"
                  name="question"
                />
              </div>
            </div>
            {/* Question 입력창 끝*/}

            {/* Questioner 입력창 */}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="questioner" className="col-form-label">
                  Questioner
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="questioner"
                  required
                  className="form-control"
                  value={qna.questioner}
                  onChange={handleInputChange}
                  placeholder="questioner"
                  name="questioner"
                />
              </div>
            </div>
            {/* Questioner 입력창 끝*/}

            {/* Answer 입력창*/}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="answer" className="col-form-label">
                  Answer
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="answer"
                  required
                  className="form-control"
                  value={qna.answer}
                  onChange={handleInputChange}
                  placeholder="answer"
                  name="answer"
                />
              </div>
            </div>
            {/* Answer 입력창 끝*/}

            {/* Answener 입력창*/}
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="answerer" className="col-form-label">
                  Answener
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  id="answerer"
                  required
                  className="form-control"
                  value={qna.answerer}
                  onChange={handleInputChange}
                  placeholder="answerer"
                  name="answerer"
                />
              </div>
            </div>
            {/* Answener 입력창 끝*/}

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={saveQna}
                className="btn btn-outline-primary ms-2 col"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AddQna;
