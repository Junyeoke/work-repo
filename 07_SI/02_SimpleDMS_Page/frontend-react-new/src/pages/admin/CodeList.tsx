import React, { useEffect, useState } from 'react'
import TitleCom from '../../components/common/TitleCom'
import { Pagination } from '@mui/material'
import { Link } from 'react-router-dom'
import ICode from '../../types/admin/code/ICode';
import CodeService from '../../services/admin/code/CodeService';

function CodeList() {
  // todo 변수정의
  // 공통코드분류 배열 변수 정의
  const [code, setCode] = useState<Array<ICode>>([]);
  // 검색어 변수 정의
  const [searchCodeName, setSearchCodeName] = useState<string>("");

  // 페이징 처리 변수
  // todo: 공통 변수 : page(현재페이지번호), count(총페이지건수), pageSize(3,6,9 배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3); // 1페이지당개수
  const pageSizes = [3, 6, 9]; // 공통 pageSizes : 배열 (셀렉트 박스 사용)

  // todo 함수정의
  //   화면이 뜰때 실행되는 이벤트 + 감시변수
  useEffect(() => {
    retrieveCode(); // 전체조회 실행
  }, [page, pageSize]);

  // 전체 조회 함수
  const retrieveCode = () => {
    // 벡엔드 매개변수 전송 : 현재페이지(page), 1페이지당 개수(pageSize)
    CodeService.getAll(searchCodeName, page - 1, pageSize) // 벡엔드 전체조회요청
      .then((response: any) => {
        // 벡엔드 성공시 실행됨
        // es6(모던js) 문법 : 객체 분해 할당
        // 원래 코드
        // const code =  response.data.code;  // 부서배열
        // const totalPage = response.data.totalPages;  // 전체페이지수
        const { code, totalPages } = response.data;
        // code 저장
        setCode(code);
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
  const onChangeSearchCodeName = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCodeName(e.target.value);
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
    <TitleCom title="Code List" />
    {/* 제목 end */}

    {/* codeId start */}
    <div className="row mb-5 justify-content-center">
      {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
      <div className="col-12 w-50 input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by codeId"
          value={searchCodeName}
          onChange={onChangeSearchCodeName}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={retrieveCode}
          >
            Search
          </button>
        </div>
      </div>
    </div>
    {/* codeId end */}

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

    {/* table start */}
    <div className="col-md-12">
      {/* table start */}
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">CodeId</th>
            <th scope="col">CodeName</th>
            <th scope="col">CategoryId</th>
            <th scope="col">CategoryName</th>
            <th scope="col">UseYn</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {code &&
            code.map((data) => (
              <tr key={data.codeId}>
                <td>{data.codeId}</td>
                <td>{data.codeName}</td>
                <td>{data.categoryId}</td>
                <td>{data.categoryName}</td>
                <td>{data.useYn}</td>
                <td>
                  <Link to={"/code/" + data.codeId}>
                    <span className="badge bg-success">Edit</span>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* table end */}
    </div>
    {/* table end */}
  </>
  )
}

export default CodeList