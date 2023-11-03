import React, { useEffect, useState } from "react";
import GuestBook from "../../types/GuestBook";
import GuestBookService from "../../services/GuestBookService";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

function GuestBookList() {
  // 변수 정의
  const [guestBook, setGuestBook] = useState<Array<GuestBook>>([]);
  const [searchUname, setSearchUname] = useState<string>("");

  // todo 공통 변수 : page(현재페이지 번호), count(총 페이지 건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 한 페이지당 개수
  // todo 공통 pageSizes : 배열 (selectbox에 사용)
  const pageSizes = [3, 6, 9];

  const initialGuest = {
    id: null,
    title: "",
    userName: "",
    content: "",
    insertTime: "",
  };

  //  새 방명록 게시글 객체
  const [guestBook2, setGuestBook2] = useState<GuestBook>(initialGuest);
  // 저장버튼 클릭 후 submitted = true 변경됨


  // input 태그에 수동 바인딩 함수
  const handleInputChange = (event: any) => {
    const { name, value } = event.target; // 화면값
    setGuestBook2({ ...guestBook2, [name]: value }); // 변수저장
  };

  // 함수 정의
  useEffect(() => {
    retrieveGuestBook();
    AOS.init();
  }, [page, pageSize]);

  // todo) 전체 조회 함수
  const retrieveGuestBook = () => {
    // 벡엔드 매개변수 전송 : 현재페이지(page), 1페이지당 개수(pageSize)
    GuestBookService.getAll(searchUname, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        // 벡엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // 원래 코드
        // const dept =  response.data.dept;  // 부서배열
        // const totalPage = response.data.totalPages;  // 전체페이지수
        const { guestbook, totalPages } = response.data;
        // dept 저장
        setGuestBook(guestbook);
        setCount(totalPages);
        // 로그 출력
        console.log("response", response.data);
      })
      .catch((e: Error) => {
        // 벡엔드 실패시 실행됨
        console.log(e);
      });
  };

  // 검색어 수동 바인딩 함수
  const onChangeSearchUname = (e: any) => {
    const searchUname = e.target.value;
    setSearchUname(searchUname);
  };

  // todo handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  // select 태그 수동바인딩 : 화면 값을 변수에 저장하는 것
  const handlePageSizeChange = (e: any) => {
    setPageSize(e.target.value); // 1 페이지당 개수 저장(3, 6, 9)
    setPage(1); // 현재페이지 번호 : 1로 강제설정
  };

  // todo Pagination 수동바인딩(공통)
  // page 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (e: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  // 저장 함수
  const saveGuestBook = () => {
    // 임시 공지 객체
    var data = {
      title: guestBook2.title,
      userName: guestBook2.userName,
      content: guestBook2.content,
    };

    GuestBookService.create(data) // 저장 요청
      .then((response: any) => {
         alert("저장되었습니다.");
        window.location.reload();
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div>
      {/* 글쓰기 버튼시작 */}
      <div className="text-end">
        <button
          type="button"
          className="btn btn-outline-secondary mb-3"
          data-bs-toggle="modal"
          data-bs-target="#newModal"
        >
          방명록쓰기
        </button>
      </div>
      {/* 수정 모달창 */}
      <div
        className="modal fade modal-lg"
        id="newModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                방명록 작성
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="userName" className="col-form-label ">
                작성자
              </label>
              <input
                type="text"
                id="userName"
                required
                className="form-control mb-4"
                value={guestBook2.userName}
                onChange={handleInputChange}
                placeholder="작성자명"
                name="userName"
              />
              <label htmlFor="content" className="col-form-label ">
                내용
              </label>
              {/* TODO : 글쓰기 화면  : CKeditor*/}
              <input
                type="text"
                id="content"
                required
                className="form-control mb-4"
                value={guestBook2.content}
                onChange={handleInputChange}
                placeholder="내용"
                name="content"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={saveGuestBook}
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 수정 모달창 끝 */}

      {/* 방명록 내용 시작 */}
      {guestBook &&
        guestBook.map((data) => (
          <div className="card mb-5" key={data.id}>
            <div className="card-header">{data.userName}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <div className="text-end">
                  <h6>{data.insertTime}</h6>
                </div>
                <hr />
                <h5>{data.content}</h5>
                <hr />
                <div className="text-end">
                  <button type="button" className="btn btn-warning btn-sm">
                    수정
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        ))}

      {/* 방명록 내용 끝 */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="UserID로 검색"
            value={searchUname}
            onChange={onChangeSearchUname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveGuestBook}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* paging 시작(페이지 번호 컴포넌트)*/}
      <div className="mt-3  ">
        {"페이지당 게시글 수: "}
        {/* 페이지 size 변경하는 selectbox 시작 */}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size + "개"}
            </option>
          ))}
        </select>
        {/* 페이지 size 변경하는 selectbox 끝 */}

        {/* Material UI(구글) 컴포넌트 시작 */}
        {/* count : 총 페이지 건수(개수), page : 현재 페이지 번호 */}
        {/* count={1페이지당개수}, page={현재페이지번호} */}

        <Pagination
          className="pagination"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
          color="primary"
        />

        {/* Material UI(구글) 컴포넌트 끝 */}
      </div>
      {/* paging 끝 */}
    </div>
  );
}

export default GuestBookList;
