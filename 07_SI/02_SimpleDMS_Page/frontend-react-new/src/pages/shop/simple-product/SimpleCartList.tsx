import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TitleCom from '../../../components/common/TitleCom'
import ISimpleCart from '../../../types/shop/ISimpleCart'
import SimpleCartService from '../../../services/shop/SimpleCartService'

function SimpleCartList() {

    const initSimpleCart = {
        scno: null,   // 장바구니 번호
        spno: 0,
        codeId: 0,
        title: "",
        imgPath: "",
        unitPrice: 0,
        cartCount: 0  
    }

    const [simpleCart, setSimpleCart] = useState<Array<ISimpleCart>>([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [count, setCount] = useState(1);
    const pageSizes = [3,6,9];

    useEffect(()=>{
        retrieveSimpleCart();
    },[page,pageSize])
    
    const onChangeSearchTitle = () => {  }

    const retrieveSimpleCart = () => { 
        SimpleCartService.getAll(searchTitle, page-1, pageSize)
        .then((response:any)=>{console.log(response);
            const {simpleCart, totalPages} = response.data;
        setSimpleCart(simpleCart);
        setCount(totalPages)})
        .catch((e:Error)=>{console.log(e)})
     }

    const handlePageSizeChange = (e:any) => { setPageSize(e.target.value); setPage(1) }

    const handlePageChange = (e:any, value:any) => { setPage(value) }

    const deleteSimpleCart = (scno:number) => { 
        SimpleCartService.remove(scno)
        .then((response:any)=>{console.log(response);
            alert("삭제되었습니다.");
            retrieveSimpleCart();
    })
        .catch((e:Error)=>{console.log(e)})
     }

    const goOrder = () => {  }
    

  return (
    <>
    {/* 제목 start */}
    <TitleCom title="SimpleCart List" />
    {/* 제목 end */}

    {/* dname start */}
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
            onClick={retrieveSimpleCart}
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
      {simpleCart &&
        simpleCart.map((data) => (
          <div className="card mb-3" key={data.scno}>
            <div className="row g-0 p-3">
              <div className="col-md-4 p-3 border">
                <img
                  src={data.imgPath}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: 15 + "vh", width: 5 + "vw" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">물품 : {data.title}</h5>
                  <h5 className="card-title">
                    가격 : {data.unitPrice * data.cartCount}
                  </h5>
                  <h5 className="card-title">장바구니 : {data.cartCount}</h5>
                  <div className="mt-3">
                    {/* 삭제 버튼 시작 */}
                    <button
                      type="button"
                      onClick={() => deleteSimpleCart(data.scno)}
                      className="btn btn-danger w-25"
                    >
                      delete to Cart
                    </button>
                    {/* 삭제 버튼 끝 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
    <div className="row d-flex justify-content-end">
      {/* 삭제 버튼 시작 */}
      {simpleCart && (
        <button
          type="button"
          onClick={goOrder}
          className="btn btn-warning w-25"
        >
          Simple Order
        </button>
      )}
      {/* 삭제 버튼 끝 */}
    </div>
  </>
  )
}

export default SimpleCartList