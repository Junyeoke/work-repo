import React, { useState } from "react";
import NoticeList from "./notice/NoticeList";
import BoardList from "./board/BoardList";

function Board() {
    // 게시판 이름 저장 변수
    const [viewBoard, setViewBoard] = useState<string>("");
    // 기본키 저장 변수
    const [pid, setPid] = useState<number>(0);
    // 탭 전환 이름 저장 변수
    const [tab, setTab] = useState<string>("");


    // 화면 전환 함수
    const changeBoard = () => { 
        if(viewBoard === "noticeList"){
            return <NoticeList handleChangeBoard={handleChangeBoard}/>;
        } else if (viewBoard ==="freeBoard") {
            return <BoardList />;
        } else if (viewBoard === "") {
          return <NoticeList />
        }
     }

     const changeTab = () => {
        
     }



     const handleChangeBoard = (viewBoard: string, pid = 0) => {
        setViewBoard(viewBoard);  // 화면명 저장
        setPid(pid);              // 기본키 저장
      };
    
  return (
    <div>
      {/* <!-- 게시판 시작--> */}
      <section className="resume-section" id="board">
        <div className="resume-section-content">
          <h2 className="mb-5">board</h2>
          {/* 게시판 탭 시작 */}
          <ul className="nav nav-tabs mb-5">
            <li className="nav-item">
              <a className={`nav-link ${changeTab}`} aria-current="page" href="#notice"
              onClick={()=>handleChangeBoard("noticeList")}
              >
                공지사항
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${changeTab}`} href="#freeBoard"
              onClick={()=>handleChangeBoard("freeBoard")}>
                자유게시판
              </a>
            </li>
          </ul>
          {/* 게시판 탭 끝 */}
          {/* 공지게시판 내용 출력 부분 */}
          {changeBoard()}
          {/* 공지게시판 내용 출력 끝 */}
          
        </div>
      </section>
      <hr className="m-0" />
      {/* <!-- 자유게시판 끝--> */}
    </div>
  );
}

export default Board;
