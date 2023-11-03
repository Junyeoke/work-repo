import React, { useEffect, useState } from "react";
import NoticeList from "./notice/NoticeList";
import BoardList from "./board/BoardList";

import AddNotice from "./notice/AddNotice";
import NoticeDetail from "./notice/NoticeDetail";
import AddBoard from "./board/AddBoard";
import BoardDetail from "./board/BoardDetail";

function Board() {
  useEffect(()=>{
    handleChangeNotice("noticeList");
    
  },[])
  // todo: 바인딩 변수 정의  
  // notice 게시판 이름 저장 변수
  const [viewNotice, setViewNotice] = useState<string>("");
  // board 게시판 이름 저장 변수
  const [viewBoard, setViewBoard] = useState<string>("");
  // 기본키 저장 변수
  const [pid, setPid] = useState<number>(0);

   // 사원 조회/추가 버튼 클릭시 실행되는 함수
   const handleChangeNotice = (viewNotice: string, pid = 0) => {
    setViewNotice(viewNotice);  // 화면명 저장
    setPid(pid);              // 기본키 저장
  };

  // 화면이름에 따라 다른 컴포넌트를 보여주는 함수
  const changeNotice = () => {
    if(viewNotice === "noticeList") {
      return <NoticeList handleChangeNotice={handleChangeNotice}/>;
    } else if (viewNotice === "addNotice") {
      return <AddNotice/>
    } else if (viewNotice === "noticeDetail") {
      // props : Emp 컴포넌트에 eno로 데이터 전송
      return <NoticeDetail id={pid}/>
    } else if (viewNotice === "updateNotice") {
      
    }
    
  };

  const changeBoard = () => {
    if(viewBoard === "freeBoard") {
      return <BoardList handleChangeBoard={handleChangeBoard}/>;
    } else if (viewBoard === "addBoard") {
      return <AddBoard />
    } else if (viewBoard === "boardDetail"){
      return <BoardDetail no={pid}/>
    }
  };

  // qna 조회/추가 버튼 클릭시 실행되는 함수
  const handleChangeBoard = (viewBoard: string, pid = 0) => {
    setViewBoard(viewBoard);
    setPid(pid);
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="ture">
      {/* <!-- 게시판 시작--> */}
      <section className="resume-section" id="board">
        <div className="resume-section-content">
          <h2 className="mb-5">📋board</h2>
          {/* 게시판 탭 시작 */}
          <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="notice-tab"
                data-bs-toggle="tab"
                data-bs-target="#notice-tab-pane"
                type="button"
                role="tab"
                aria-controls="notice-tab-pane"
                aria-selected="true"
                onClick={()=>handleChangeNotice("noticeList")}
              >
                공지사항
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="board-tab"
                data-bs-toggle="tab"
                data-bs-target="#board-tab-pane"
                type="button"
                role="tab"
                aria-controls="board-tab-pane"
                aria-selected="false"
                onClick={()=>handleChangeBoard("freeBoard")}
              >
                자유게시판
              </button>
            </li>

          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="notice-tab-pane"
              role="tabpanel"
              aria-labelledby="notice-tab"
              tabIndex={0}
            >
              
              {changeNotice()}
            </div>
            <div
              className="tab-pane fade"
              id="board-tab-pane"
              role="tabpanel"
              aria-labelledby="board-tab"
              tabIndex={0}
            >
             {changeBoard()}
            </div>
          </div>
          {/* 게시판 탭 끝 */}

        </div>
      </section>
      <hr className="m-0" />
      {/* <!-- 자유게시판 끝--> */}
    </div>
  );
}

export default Board;
