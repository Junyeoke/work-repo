import React, { useEffect, useState } from 'react'
import TitleCom from '../../../components/common/TitleCom'
import ISimpleProduct from '../../../types/shop/ISimpleProduct'
import ICode from '../../../types/admin/code/ICode';
import CodeService from '../../../services/admin/code/CodeService';
import { useParams } from 'react-router-dom';
import SimpleProductService from '../../../services/shop/SimpleProductService';

function SimpleProduct() {

    const initSimpleProduct = {
        title:"",
        codeId:0,
        imgPath:"",
        useYn:"",
        unitPrice:0,
        spno:0
    }

    const [simpleProduct, setSimpleProduct] = useState<ISimpleProduct>(initSimpleProduct);
    const [code, setCode] = useState<Array<ICode>>([]);
    const [message, setMessage] = useState("");
    const {spno} = useParams();

    useEffect(()=>{
        retrieveCode();
        retrieveSimpleProduct();
    },[])

    const retrieveCode = () => {
        CodeService.getAllNoPage()
        .then((response:any)=>{console.log(response);
        setCode(response.data);
        })
        .catch((e:Error)=>{console.log(e)})
    }
    const retrieveSimpleProduct = () => {
        SimpleProductService.get(spno)
        .then((response:any)=>{console.log(response);
        setSimpleProduct(response.data);
        })
        .catch((e:Error)=>{console.log(e)})
    }
    const handleSelectChange = (e:any) => {
        setSimpleProduct({...simpleProduct, codeId:e.targer.value})
    }
    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setSimpleProduct({...simpleProduct, [name]:value})
    }
    const updateSimpleProduct = () => {
        SimpleProductService.update(spno, simpleProduct)
        .then((response:any)=>{console.log(response);
            setMessage("업데이트에 성공했습니다.");
            })
            .catch((e:Error)=>{console.log(e)})
    }

  return (
    <>
    {/* 제목 start */}
    <TitleCom title="SimpleProduct Detail" />
    {/* 제목 end */}

    <>
      {simpleProduct ? (
        <div className="col-6 mx-auto">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="unitPrice" className="col-form-label">
                Code Id
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="codeId"
                value={simpleProduct.codeId}
                onChange={handleSelectChange}
                name="codeId"
              >
                <option>selected item</option>
                {code &&
                  code
                    .filter((data) => data.categoryId == 100)
                    .map((data) => (
                      <option key={data.codeId} value={data.codeId}>
                        {data.codeName}
                      </option>
                    ))}
              </select>
            </div>
          </div>
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="title" className="col-form-label">
                Title
              </label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="title"
                required
                className="form-control"
                value={simpleProduct.title}
                onChange={handleInputChange}
                placeholder="title"
                name="title"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="imgPath" className="col-form-label">
                Image Path
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="imgPath"
                required
                className="form-control"
                value={simpleProduct.imgPath}
                onChange={handleInputChange}
                placeholder="imgPath"
                name="imgPath"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="unitPrice" className="col-form-label">
                Unit Price
              </label>
            </div>
            <div className="col-9">
              <input
                type="number"
                id="unitPrice"
                required
                className="form-control"
                value={simpleProduct.unitPrice}
                onChange={handleInputChange}
                placeholder="unitPrice"
                name="unitPrice"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="unitPrice" className="col-form-label">
                Use Y/N
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="useYn"
                value={simpleProduct.useYn}
                onChange={handleSelectChange}
                name="useYn"
              >
                <option value="Y">사용함</option>
                <option value="N">사용 안함</option>
              </select>
            </div>
          </div>

          <div className="row g-3 mt-3 mb-3">
            <button
              onClick={updateSimpleProduct}
              className="btn btn-outline-success ms-2 col"
            >
              Update
            </button>
          </div>
          {message && (
            <p className="alert alert-success mt-3 text-center">{message}</p>
          )}
        </div>
      ) : (
        <div className="col-6 mx-auto">
          <br />
          <p>Please click on a SimpleProductNop...</p>
        </div>
      )}
    </>
  </>
  )
}

export default SimpleProduct