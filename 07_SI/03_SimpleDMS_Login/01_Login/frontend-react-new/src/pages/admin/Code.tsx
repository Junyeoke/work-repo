import React, { useEffect, useState } from 'react'
import TitleCom from '../../components/common/TitleCom'
import ICode from '../../types/admin/code/ICode';
import CodeService from '../../services/admin/code/CodeService';
import { useNavigate, useParams } from 'react-router-dom';

function Code() {
    const initCode = {
        codeId: 0,       // 공통코드ID
        codeName: "",     // 공통코드명
        categoryId: 0,   // 대분류코드ID
        categoryName: "", // 대분류코드명
        useYn: ""         // 사용유무
    }

    const [code, setCode] = useState<ICode>(initCode);
    const [message, setMessage] = useState("");
    const {codeId} = useParams();
    const navi = useNavigate();

    useEffect(()=>{retrieveCode();},[])

    const retrieveCode = () => {
        CodeService.get(codeId)
        .then((response:any)=>{console.log(response);
        setCode(response.data);
        })
        .catch((error:Error)=>{console.log(error)})
        
    };
    const handleInputChange = (e:any) => {
        const {name,value} = e.target;
        setCode({...code, [name]:value});
    };
    const handleSelectChange = (e:any) => {
        const {name,value} = e.target;
        setCode({...code, [name]:value});
    };
    const updateCode = () => {
        CodeService.update(codeId,code)
        .then((response:any)=>{console.log(response);
            navi("/code");
            })
            .catch((error:Error)=>{console.log(error);
                setMessage(error.message);})
    };

  return (
    <div>    <>
    {/* 제목 start */}
    <TitleCom title="Code Detail" />
    {/* 제목 end */}

    <>
      {code ? (
        <div className="col-6 mx-auto">
          <form>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeId" className="col-form-label">
                  codeId
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="codeId"
                  disabled
                  className="form-control"
                  value={code.codeId}
                  onChange={handleInputChange}
                  placeholder="codeId"
                  name="codeId"
                />
              </div>
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="codeName" className="col-form-label">
                  codeName
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="codeName"
                  disabled
                  className="form-control"
                  value={code.codeName}
                  onChange={handleInputChange}
                  placeholder="codeName"
                  name="codeName"
                />
              </div>
            </div>

            <div className="row g-3 align-items-center mb-3">
              <div className="col-3">
                <label htmlFor="categoryId" className="col-form-label">
                  categoryId
                </label>
              </div>

              <div className="col-9">
                <input
                  type="text"
                  id="categoryId"
                  disabled
                  className="form-control"
                  value={code.categoryId}
                  onChange={handleInputChange}
                  placeholder="categoryId"
                  name="categoryId"
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
                  value={code.useYn}
                  onChange={handleSelectChange}
                  name="useYn"
                >
                  <option value="Y">사용함</option>
                  <option value="N">사용 안함</option>
                </select>
              </div>
            </div>
          </form>

          <div className="row g-3 mt-3 mb-3">
            <button
              type="submit"
              onClick={updateCode}
              className="btn btn-outline-success ms-2 col"
            >
              Update
            </button>
          </div>

          <p>{message}</p>
        </div>
      ) : (
        <div className="col-6 mx-auto">
          <br />
          <p>Please click on a CodeNop...</p>
        </div>
      )}
    </>
  </></div>
  )
}

export default Code