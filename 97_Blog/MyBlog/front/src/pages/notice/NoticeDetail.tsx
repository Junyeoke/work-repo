import React, { useEffect, useState } from "react";
import NoticeService from "../../services/NoticeService";
import { useNavigate, useParams } from "react-router-dom";
import TitleCom from "../../components/common/TitleCom";
import Notice from "./../../types/Notice";
import axios from "axios";

function NoticeDetail() {
  // 전체조회 페이지에서 전송한 기본키(dno)
  const { num } = useParams();
  // 강제 페이지 이동 함수
  let navigate = useNavigate();

  // 객체 초기화(상세 조회 : 기본키 있음)
  const initialNotice = {
    num: "",
    title: "",
    userName: "",
    content: "",
    insertTime: "",
  };

  // 수정될 객체
  const [notice, setNotice] = useState<Notice>(initialNotice);
  // 화면에 수정 성공 메세지 찍기 변수
  const [message, setMessage] = useState<string>("");

  // 상세 조회 함수
  const getNotice = (num: string) => {
    NoticeService.get(num) // 벡엔드로 상세조회 요청
      .then((response: any) => {
        setNotice(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 화면이 뜰때 실행되는 이벤트 + dno 값이 바뀌면 실행
  useEffect(() => {
    if (num) getNotice(num);
  }, [num]);

  // input 태그 수동바인딩
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNotice({ ...notice, [name]: value });
  };

  // 수정함수
  const updateNotice = () => {
    NoticeService.update(notice.num, notice) // 벡엔드로 수정요청
      .then((response: any) => {
        console.log(response.data);
        setMessage("The Cinema Notice was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 삭제함수
  const deleteNotice = () => {
    NoticeService.remove(notice.num) // 벡엔드로 삭제요청
      .then((response: any) => {
        console.log(response.data);
        // 페이지 이동
        navigate("/cinema-notice");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <>
      {/* 제목 start */}
      <TitleCom title="공지사항" />
      {/* 제목 end */}

      <table className="table">
        <tbody>
            <tr>
            <th className="col-md-2">제목</th>
            <td>{notice.title}</td>
          </tr>
          <tr>
            <th className="col-md-2">작성자</th>
            <td>{notice.userName}</td>
          </tr>
          <tr>
            <th className="col-md-2">작성일시</th>
            <td>{notice.insertTime}</td>
          </tr>
          
        </tbody>
      </table>
      <div dangerouslySetInnerHTML = { {  __html : notice.content } }>
       
      </div>
      
      <hr/>
      <h5>댓글</h5>
      <br/>
      <div className="card">
  <div className="card-header">
    userID 들어갈곳
  </div>
  <div className="card-body">
    <p className="card-text">댓글 내용보는 곳</p>
  </div>
</div>
    </>
  );
}

export default NoticeDetail;
