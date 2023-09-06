// EmpList.js : 사원 조회 페이지

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import EmpService from "../../services/EmpService";

function EmpList() {
  // TODO: 변수정의
  let [customer, setCustomer] = useState([]); // 백엔드 데이터 받을 변수
  let [searchCname, setSearchCname] = useState(""); // 검색어 변수

  // TODO: 함수정의
  const retrieveCustomer = () => {
    EmpService.getAll()
      .then((response) => {
        setCustomer(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 화면이 뜰 때 retrieveEmp 실행
  useEffect(() => {
    retrieveCustomer();
  }, []);

  // 검색어 조회함수 : findByCname()
  const findByCname = () => {
    EmpService.findByCname(searchCname)
      .then((response) => {
        setCustomer(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 검색어 입력양식
  const onChangeSearchCname = (event) => {
    setSearchCname(event.target.value);
  };

  return (
    <div>
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-12 mb-5 mt-5">
          <h1>Emp List</h1>
        </div>
        {/* 제목 끝 */}
      </div>

      {/* cname start */}
      <div className="row mb-5 justify-content-center">
        {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
        <div className="col-12 w-50 input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by cname"
            value={searchCname}
            onChange={onChangeSearchCname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByCname}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* cname end */}

      {/* table start */}
      <div className="col-md-12">
        {/* table start */}
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">Cname</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customer &&
              customer.map((data, index) => (
                <tr key={index}>
                  <td>{data.cname}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>
                    <Link to={"/emp/" + data.id}>
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
    </div>
  );
}

export default EmpList;
