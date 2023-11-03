import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import IQna from "../../../types/basic/IQna";
import QnaService from "../../../service/basic/QnaServics";
import TitleCom from "../../common/TitleCom";



function Qna() {
  // 전체조회 페이지에서 전송한 기본키(qno)
  const { qno } = useParams();
  // 강제 페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세 조회 : 기본키 있음)
  const initialQna = {
    qno: null,
    question: "",
    answer: "",
    questioner: "",
    answerer: "",
  };

  // 수정될 객체
  const [qna, setQna] = useState<IQna>(initialQna);
  // 화면에 수정 성공 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // 상세 조회 함수
  const getQna = (qno: string) => {
    QnaService.get(qno) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setQna(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + qno 값이 바뀌면 실행
  useEffect(() => {
    if (qno) getQna(qno);
  }, [qno]);

  // input 태그 수동바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setQna({ ...qna, [name]: value });
  };

  // 수정함수
  const updateQna = () => {
    QnaService.update(qna.qno, qna) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("The QnA was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제함수
  const deleteQna = () => {
    QnaService.remove(qna.qno) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/qna");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <>
      {/* 제목 start */}
      {/* <TitleCom title="Qna Detail" /> */}
      {/* 제목 end */}

      <>
        {qna ? (
          <div className="col-6 mx-auto">
            <form>
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
            </form>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteQna}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateQna}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>

            {message && (
              <p className="alert alert-success mt-3 text-center">{message}</p>
            )}
          </div>
        ) : (
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a Dept...</p>
          </div>
        )}
      </>
    </>
  );
}

export default Qna;
