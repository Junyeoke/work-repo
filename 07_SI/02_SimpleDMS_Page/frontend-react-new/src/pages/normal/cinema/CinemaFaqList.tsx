import React, { useEffect, useState } from 'react'
import TitleCom from '../../../components/common/TitleCom'
import { Pagination } from '@mui/material'
import { Link } from 'react-router-dom'
import ICinemaFaq from '../../../types/normal/ICinemaFaq';
import CinemaFaqService from '../../../services/normal/CinemaFaqService';

function CinemaFaqList() {
     // 변수정의
  const [cinemaFaq, setCinemaFaq] = useState<Array<ICinemaFaq>>([]);

  // 검색어 변수
  const [searchQuestion, setSearchQuestion] = useState<string>("");

  // todo 공통 변수 : page(현재페이지 번호), count(총 페이지 건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 한 페이지당 개수
  // todo 공통 pageSizes : 배열 (selectbox에 사용)
  const pageSizes = [3, 6, 9];


  // 함수정의
  useEffect(() => {
    retrieveCinemaFaq(); // 전체 조회
  }, [page, pageSize]);

  // 전체 조회 함수
  const retrieveCinemaFaq = () => {
    // 벡엔드 매개변수 전송 : 현재페이지(page), 1페이지당 개수(pageSize)
    CinemaFaqService.getAll(searchQuestion, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        // 벡엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // 원래 코드
        // const dept =  response.data.dept;  // 부서배열
        // const totalPage = response.data.totalPages;  // 전체페이지수
        const { cinemaFaq, totalPages } = response.data;
        // dept 저장
        setCinemaFaq(cinemaFaq);
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
  const onChangeSearchQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuestion = e.target.value;
    setSearchQuestion(searchQuestion);
  };

  // todo handlePageSizeChange(공통) : pageSize 값 변경시 실행되는 함수
  // select 태그 수동바인딩 : 화면 값을 변수에 저장하는 것
  const handlePageSizeChange = (e: any) => {
    setPageSize(e.target.value); // 1 페이지당 개수 저장(3, 6, 9)
    setPage(1); // 현재페이지 번호 : 1로 강제설정
  };

  // todo Pagination 수동바인딩(공통)
  // page 번호를 누르면 => page 변수에 값 저장
  const handlePageChange = (e:any, value:number) => {
    // value == 화면의 페이지번호
    setPage(value);

  };
  return (
    <>
    {/* 제목 start */}
    <TitleCom title="Cinema Faq List" />
    {/* 제목 end */}

    {/* search start */}
    <div className="row mb-5 justify-content-center">
      <div className="col-12 w-50 input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Question"
          value={searchQuestion}
          onChange={onChangeSearchQuestion}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={retrieveCinemaFaq}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {/* search end */}

    {/* page start */}
    <div className="mt-3">
      {"Items per Page: "}
      <select onChange={handlePageSizeChange} value={pageSize}>
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <Pagination
        className="my-3"
        count={count}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
    {/* page end */}

    <div className="col-md-12">
      {/* accodian start */}
      <div className="accordion" id="accordionExample">
        {cinemaFaq &&
          cinemaFaq.map((data, index) => (
            <div className="accordion-item" key={data.cfno}>
              <h2 className="accordion-header" id={"heading" + index}>
                <button
                  className={
                    index == 0
                      ? "accordion-button"
                      : "accordion-button collapsed"
                  }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + index}
                  aria-expanded={index == 0 ? "true" : "false"}
                  aria-controls={"collapse" + index}
                >
                  {data.question}
                </button>
              </h2>
              <div
                id={"collapse" + index}
                className={
                  index == 0
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse"
                }
                aria-labelledby={"heading" + index}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {data.answer}
                  <Link to={"/cinema-faq/" + data.cfno}>
                    <span className="badge bg-success ms-2">Edit</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* accodian end */}
    </div>
  </>
  )
}

export default CinemaFaqList