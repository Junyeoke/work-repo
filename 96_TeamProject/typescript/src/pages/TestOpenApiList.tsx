import React, { useEffect, useState } from "react";
import TestOpenApiService from "../services/TestOpenApiService";
import IApps from "../types/IApps";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

function TestOpenApiList() {
  //  TODO : open api 전체 조회
  let [appsData, setAppsData] = useState<Array<IApps>>([]);
  let [render, setRender] = useState<boolean>(false);

  // TODO : 공통 변수(필수) : page(현재 페이지), count(총 페이지 건수) , pageSize(3,6,9 배열 : 1페이지 당 건수)
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호        : 최초값 1
  const [count, setCount] = useState<number>(1); // 총페이지 건수         : 최초값 1
  const [pageSize, setPageSize] = useState<number>(20); // 1페이지당 개수 : 최초값 20

  // TODO : Pagenation 수동 바인딩
  // TODO : 페이지 번호를 누르면 -> page 변수에 값 저장
  const handlePageChange = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage(value);
  };

  // Todo : 함수 정의
  useEffect(() => {
    // todo : 첫번째 실행
    reteiveSteamAll();

  }, [count]);

  // todo : 첫번째 실행
  const reteiveSteamAll = () => {
    TestOpenApiService.findAll()
      .then((response: any) => {
        const { apps } = response.data.applist;
                
        // Todo : 검색 결과 5001개 제한
        setAppsData(apps.slice(0,5000)); // name 과 appid
        // console.log(apps.length);

        // Todo : 페이징 처리
        setCount(Math.ceil(appsData.length / pageSize))

        setRender(true);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };



  if (!render) {
    return <div></div>;
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">appid</th>
            <th scope="col">name</th>
            <th scope="col">상세조회</th>
          </tr>
        </thead>
        <tbody>
          {appsData 
            .map((value, index) => (
              <tr key={index}>
                <th scope="row">{value.appid}</th>
                <td>{value.name}</td>
                <Link to={`/steam/${value.appid}`}>
                  <button className="btn btn-outer-line btn-success">
                    {value.appid}
                  </button>
                </Link>
              </tr>
            ))
            .slice((page - 1) * pageSize, page * pageSize)
            
            }
        </tbody>
      </table>

      {/* 페이징 처리 */}
      <Pagination
        className="my-3"
        count={count}
        page={page}
        siblingCount={1}
        boundaryCount={1}
        shape="rounded"
        color="secondary"
        onChange={handlePageChange}
      />
    </div>
  );
}

export default TestOpenApiList;
