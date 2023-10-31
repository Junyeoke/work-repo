import React, { useEffect, useState } from "react";
import News from "../../types/News";
import initWow from "../../assets/js/mywow";
import NewsService from "../../services/NewsService";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

function NewsList() {
  // 변수 정의
  const [news, setNews] = useState<Array<News>>([]);

  const [searchTitle, setSearchTitle] = useState<string>("");

  // todo 공통 변수 : page(현재페이지 번호), count(총 페이지 건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 한 페이지당 개수
  // todo 공통 pageSizes : 배열 (selectbox에 사용)
  const pageSizes = [3, 6, 9];

  // 함수 정의
  useEffect(() => {
    retrieveNews();
    initWow();
  }, [page, pageSize]);

  // todo) 전체 조회 함수
  const retrieveNews = () => {
    // 벡엔드 매개변수 전송 : 현재페이지(page), 1페이지당 개수(pageSize)
    NewsService.getAll(searchTitle, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        // 벡엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // 원래 코드
        // const dept =  response.data.dept;  // 부서배열
        // const totalPage = response.data.totalPages;  // 전체페이지수
        const { news, totalPages } = response.data;
        // dept 저장
        setNews(news);
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
  const onChangeSearchTitle = (e: any) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
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
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            IT 뉴스
          </li>
        </ol>
        <hr />
      </nav>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to={"/add-news"}>
          <button type="button" className="btn btn-outline-primary mb-3 ">
            글쓰기
          </button>
        </Link>
      </div>

      {news &&
        news.map((data) => (
          <div className="card m-3">
            <h5 className="card-header">{data.title}</h5>
            <div className="card-body">
              <p className="card-text">{data.content}</p>
              <a href="#" className="btn btn-primary">
                자세히 보기
              </a>
            </div>
          </div>
        ))}

      {/* dname start 검색어 입력창 */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="제목으로 검색"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveNews}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* dname end */}

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
    </>
  );
}

export default NewsList;
