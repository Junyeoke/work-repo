import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import TitleCom from '../../../components/common/TitleCom'
import ICinema from '../../../types/shop/ICinema';
import CinemaService from '../../../services/shop/CinemaService';
import imgCalendar from '../../../assets/img/imgCalendar.png';

function CinemaList() {

    const [cinema, setCinema] = useState<Array<ICinema>>([]);
    const [searchNationCode, setSearchNationCode] = useState("");
    const [pageSize, setPageSize] = useState(5);
    
    const datepicker = useRef<any>();
    const pageSizes = [5,10]

    useEffect(()=>{
        retrieveCinema()
    },[pageSize])

    const retrieveCinema = () => {
        CinemaService.getAll(datepicker.current.value,pageSize,searchNationCode)
        .then((response:any)=>{console.log(response);
        setCinema(response.data.boxOfficeResult.dailyBoxOfficeList)
    })
        .catch((e:Error)=>{console.log(e)})
    }
    const onChangeSearchNationCode = (e:any) => {
        setSearchNationCode(e.target.value);
    }
    const handlePageSizeChange = (e:any) => {
        setPageSize(e.target.value);
    }


    useEffect(()=>{
        // 사용법 : $(선택자).datepicker({옵션})
        $(function () {
            ($("#datepicker") as any).datepicker(
              // 날짜 포맷 지정
              {
                dateFormat: "yymmdd", // 날짜 포맷
                showOn: "button",     // 입력창 옆에 달력 기본 버튼 보이기
                buttonImage:          // 버튼에 기본 이미지 넣기
                imgCalendar,
              }
            );
          });
     },[])

  return (
    <>
    {/* 제목 start */}
    <TitleCom title="Cinema List" />
    {/* 제목 end */}

    <div className="row mb-3"></div>

    {/* rankOldAndNew start */}
    <div className="row mb-1">
      <div className="col-1">
        <label htmlFor="inputPassword6" className="col-form-label">
          영화구분 :
        </label>
      </div>

      <div className="col-2">
        <select
          className="form-select"
          onChange={onChangeSearchNationCode}
          value={searchNationCode}
        >
          <option key="all" value="">
            전체
          </option>
          <option key="korea" value="K">
            국내영화
          </option>
          <option key="foreign" value="F">
            외국영화
          </option>
        </select>
      </div>

      {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
      <div className="col-auto w-25 input-group mb-3">
        <div className="input-group">
          <span className="input-group-addon me-2">
            <label htmlFor="inputPassword6" className="col-form-label">
              달력 :
            </label>
          </span>
          <input
            type="text"
            id="datepicker"
            className="form-control"
            disabled
            ref={datepicker}
            style={{width: 70 + "px"}}
          />
          <button className="btn btn-primary ms-5" onClick={retrieveCinema}>
            조회
          </button>
        </div>
      </div>
    </div>
    {/* rankOldAndNew end */}
    {/* paging 시작 */}
    <div className="mb-1">
      {"Items per Page: "}
      <select onChange={handlePageSizeChange} value={pageSize}>
        {pageSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
    {/* paging 끝 */}
    {/* table start */}
    <div className="col-md-12">
      {/* table start */}
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">순위</th>
            <th scope="col">영화명</th>
            <th scope="col">개봉일</th>
            <th scope="col">누적관객수</th>
            <th scope="col">상영관수</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cinema &&
            cinema.map((data) => (
              <tr key={data.movieCd}>
                <td>{data.rank}</td>
                <td>
                  {data.movieNm}
                  <span className="badge rounded-pill text-bg-warning ms-2">
                    {data.rankOldAndNew == "NEW" ? data.rankOldAndNew : ""}
                  </span>
                </td>
                <td>{data.openDt}</td>
                <td>{parseInt(data.audiAcc).toLocaleString()}</td>
                <td>{parseInt(data.scrnCnt).toLocaleString()}</td>
                <td>
                  <Link to={"/cinema/" + data.movieCd}>
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

export default CinemaList