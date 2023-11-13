import React, { useEffect, useState } from 'react'
import TitleCom from '../../../components/common/TitleCom'
import { Pagination } from '@mui/material';
import ISimpleProduct from '../../../types/shop/ISimpleProduct';
import SimpleProductService from '../../../services/shop/SimpleProductService';

function SimpleProductList() {

    const [simpleProduct, setSimpleProduct] = useState<Array<ISimpleProduct>>([]);
    const [searchTitle, setsearchTitle] = useState("");
    const [pageSize, setPageSize] = useState(3);
    const pageSizes = [3,6,9];
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    
    useEffect(()=>{retrieveSimpleProduct();},[
        page,pageSize
    ])

    const onChangeSearchTitle = (e:any) => { }
    const retrieveSimpleProduct = () => {
        SimpleProductService.getAll(searchTitle,page-1,pageSize)
        .then((response:any)=>{
            const {simpleProduct, totalPages} = response.data;
            setSimpleProduct(simpleProduct);
            setCount(totalPages);
            console.log(response);
        }).catch((e:Error)=>{console.log(e)})
     }
    const handlePageSizeChange = (e:any) => {
        setPageSize(e.target.value);
        setPage(1);
    }
    const handlePageChange = (e:any, value:any) => {
        setPage(value);
    }

  return (
    <div>    <>
    {/* 제목 start */}
    <TitleCom title="SimpleProduct List" />
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
                <a href={`/simple-cart/${data.spno}`} className="btn btn-primary">
                  SimpleProduct Cart
                </a>
                <br/>
                <a href={`/simple-product/${data.spno}`} className="btn btn-success mt-2">
                  SimpleProduct Detail(admin)
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  </></div>
  )
}

export default SimpleProductList