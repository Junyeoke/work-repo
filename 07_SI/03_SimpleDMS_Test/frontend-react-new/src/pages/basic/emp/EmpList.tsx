import React, { useEffect, useState } from "react";
import IEmp from "./../../../types/basic/IEmp";
import EmpService from "../../../services/basic/EmpService";
import TitleCom from "../../../components/common/TitleCom";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

function EmpList() {
  // 변수 정의
  const [emp, setEmp] = useState<Array<IEmp>>([]);

  // 검색어 변수
  const [searchEname, setSearchEname] = useState<string>("");

  // 공통 변수 : page(현재페이지 번호), count(총 페이지 건수), pageSize(3, 6, 9배열)
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3);

  // 공통 pageSizes 배열
  const pageSizes = [3, 6, 9];

  // 함수 정의
  useEffect(() => {
    retrieveEmp();
  }, [page, pageSize]);

  // 전체 조회 함수
  const retrieveEmp = () => {
    EmpService.getAll(searchEname, page - 1, pageSize) // 벡엔드 전체조회 요청
      .then((response: any) => {
        const { emp, totalPages } = response.data;
        setEmp(emp);
        setCount(totalPages);
        console.log("respones", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // 검색어 수동바인딩 함수
  const onChangeSearchEname = (e: any) => {
    const searchEname = e.target.value;
    setSearchEname(searchEname);
  };

  // select 태그 수동바인딩
  const handlePageSizeChange = (e: any) => {
    setPageSize(e.target.value); // 한 페이지당 개수 저장
    setPage(1); // 현재페이지 번호 : 1로 강제 설정
  };

  // pagination 수동 바인딩
  const handlePageChange = (e: any, value: number) => {
    setPage(value);
  };

  return (
    <>
       {/* 제목 start */}
       <TitleCom title="Emp List" />
      {/* 제목 end */}

      {/* dname start 검색어 입력창 */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ename"
            value={searchEname}
            onChange={onChangeSearchEname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveEmp}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* dname end */}

      {/* paging 시작(페이지 번호 컴포넌트)*/}
      <div className="mt-3">
        {"Items per Page: "}
        {/* 페이지 size 변경하는 selectbox 시작 */}
        <select onChange={handlePageSizeChange} value={pageSize}>
          {pageSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {/* 페이지 size 변경하는 selectbox 끝 */}

        {/* Material UI(구글) 컴포넌트 시작 */}
        {/* count : 총 페이지 건수(개수), page : 현재 페이지 번호 */}
        {/* count={1페이지당개수}, page={현재페이지번호} */}
        <div className="pagination">
        <Pagination
          className="pagination"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
        </div>
        {/* Material UI(구글) 컴포넌트 끝 */}
      </div>
      {/* paging 끝 */}

 {/* table start(테이블 본문) */}
 <div className="col-md-12">
        {/* table start */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">Ename</th>
              <th scope="col">Job</th>
              <th scope="col">Manager</th>
              <th scope="col">Hiredate</th>
              <th scope="col">Salary</th>
              <th scope="col">Commission</th>
              <th scope="col">Dno</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {emp &&
              emp.map((data) => (
                <tr key={data.eno}>
                  <td>{data.ename}</td>
                  <td>{data.job}</td>
                  <td>{data.manager}</td>
                  <td>{data.hiredate}</td>
                  <td>{data.salary}</td>
                  <td>{data.commission}</td>
                  <td>{data.dno}</td>
                  <td>
                    <Link to={"/emp/" + data.eno}>
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
  );
}

export default EmpList;
