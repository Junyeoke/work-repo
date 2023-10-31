import TitleCom from "../../components/common/TitleCom";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import IDept from "./../../types/IDept";
import DeptService from "../../services/DeptService";

function DeptNop() {
  // 전체조회페이지에서 보내준 기본키 정보 받기
  // todo useParams() -> url/기본키(dno) 정보를 받게하는 함수
  const { dno } = useParams();

  // todo 강제 페이지 이동 함수
  let navigate = useNavigate();

  // 변수정의
  // 객체 초기화
  const initialDept = {
    dno: "",
    dname: "",
    loc: "",
  };

  // todo 수정될 부서 객체 변수
  const [dept, setDept] = useState<IDept>(initialDept);
  // todo 화면에서 수정 성공/실패 메세지 변수
  const [message, setMessage] = useState<string>("");

  // 함수정의
  // todo 화면이 뜰 때 실행되는 이벤트 함수 + dno 값 감시
  // 사용법 : useEffect(()=>{실행문},[변수명])
  useEffect(() => {
    // dno(기본키) 있으면 상세조회 실행
    if (dno) getDept(dno);
  }, [dno]);

  // todo 상세 조회
  const getDept = (dno: string) => {
    DeptService.get(dno) // 벡엔드에 상세조회 요청
      .then((response: any) => {
        // 벡엔드 결과(response.data) -> 부서 객체에 저장
        setDept(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // todo 입력창 수동 바인딩 공통함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // 화면 값[이름]
    // 화면 값을 Dept 객체의 속성에 저장
    setDept({ ...dept, [name]: value });
  };

  // todo 수정 함수
  const updateDept = () => {
    DeptService.update(dept.dno, dept) // 벡엔드 수정요청
      .then((response) => {
        console.log(response.data); // 벡엔드 결과로그
        // 화면에 성공 메세지 출력
        setMessage("부서정보가 수정되었습니다.");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // todo 삭제 함수
  const deleteDept = () => {
    DeptService.remove(dept.dno) // 삭제 요청
    .then((response)=>{
      console.log(response.data); // 벡엔드 결과(response.data)
      // 강제 전체 조회 페이지로 이동
      // todo : navigate("/이동할 url")
      navigate("/dept-nop");
    })
    .catch((e:Error)=>{
      console.log(e);
    })
  };

  return (
    <>
      {/* 제목 start */}
      <TitleCom title="DeptNop Detail No Page" />
      {/* 제목 end */}

      <>
        {dept ? (
          <div className="col-6 mx-auto">
            <form>
              {/* 부서명 입력창 시작 */}
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="dname" className="col-form-label">
                    Dname
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="dname"
                    required
                    className="form-control"
                    value={dept.dname}
                    onChange={handleInputChange}
                    placeholder="dname"
                    name="dname"
                  />
                </div>
                {/* 부서명 입력창 끝 */}
              </div>
              {/* 부서위치 입력창 시작 */}
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="loc" className="col-form-label">
                    Loc
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="loc"
                    required
                    className="form-control"
                    value={dept.loc}
                    onChange={handleInputChange}
                    placeholder="loc"
                    name="loc"
                  />
                </div>
              </div>
              {/* 부서위치 입력창 시작 */}
            </form>

            {/* 삭제/수정 버튼 시작 */}
            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteDept}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateDept}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>
            {/* 삭제/수정 버튼 끝 */}

            {/* 수정 버튼 성공 메시지 출력 */}
            <p>{message}</p>
          </div>
        ) : (
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a DeptNop...</p>
          </div>
        )}
      </>
    </>
  );
}

export default DeptNop;
