// SimpleProductList.tsx
// 상품 전체조회 화면
import React, { useEffect, useState } from "react";
import TitleCom from "../../../components/common/TitleCom";
import { Pagination } from "@mui/material";
import ISimpleProduct from "../../../types/shop/ISimpleProduct";
import SimpleProductService from "../../../services/shop/SimpleProductService";

function SimpleProductList() {
  // todo : 변수정의

  // 부서 배열 변수
  const [simpleProduct, setSimpleProduct] = useState<Array<ISimpleProduct>>([]);

  // 검색어 변수
  const [searchTitle, setSearchTitle] = useState<string>("");

  // todo 공통 변수 : page(현재페이지 번호), count(총 페이지 건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 한 페이지당 개수
  // todo 공통 pageSizes : 배열 (selectbox에 사용)
  const pageSizes = [3, 6, 9];

  // 함수 정의
  //  1) 컴포넌트가 mounted 될때 한번만 실행됨 : useEffect(() => {},[])
  //  2) 컴포넌트의 변수값이 변할 때 실행됨 : useEffect(() => {실행문},[감시할 변수])
  useEffect(() => {
    retrieveSimpleProduct(); // 전체 조회
  }, [page, pageSize]);

  // 전체 조회 함수
  const retrieveSimpleProduct = () => {
    // 벡엔드 매개변수 전송 : 현재페이지(page), 1페이지당 개수(pageSize)
    SimpleProductService.getAll(searchTitle, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        // 벡엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // 원래 코드
        // const simpleProduct =  response.data.simpleProduct;  // 부서배열
        // const totalPage = response.data.totalPages;  // 전체페이지수
        const { simpleProduct, totalPages } = response.data;
        // simpleProduct 저장
        setSimpleProduct(simpleProduct);
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
  const onChangeSearchTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      {/* 제목 start */}
      <TitleCom title="SimpleProduct List" />
      {/* 제목 end */}

      {/* shop start */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveSimpleProduct}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* dname end */}

      {/* paging 시작 */}
      <div className="mt-3">
        {"Items per Page: "}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        {/* count : 총페이지 수, page : 현재페이지 번호 */}
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
      {/* paging 끝 */}

      <div className="row">
        {simpleProduct &&
          simpleProduct.map((data) => (
            <div className="ms-5 col-lg-3 col-md-3 mt-5" key={data.spno}>
              <div className="card">
                <img src={data.imgPath} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <h5 className="card-title">₩ {data.unitPrice}</h5>
                  <a
                    href={`/simple-cart/${data.spno}`}
                    className="btn btn-primary"
                  >
                    SimpleProduct Cart
                  </a>
                  <br />
                  <a
                    href={`/simple-product/${data.spno}`}
                    className="btn btn-success mt-2"
                  >
                    SimpleProduct Detail(admin)
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default SimpleProductList;
