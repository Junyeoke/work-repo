import React, { useEffect, useState } from 'react'
import TitleCom from '../../components/common/TitleCom'
import ICode from '../../types/admin/code/ICode';
import ICodeCategory from '../../types/admin/code/ICodeCategory';
import CodeCategoryService from '../../services/admin/code/CodeCategoryService';
import CodeService from '../../services/admin/code/CodeService';

function AddCode() {

    const initCode = {
        codeId: 0,       // 공통코드ID
        codeName: "",     // 공통코드명
        categoryId: 0,   // 대분류코드ID
        categoryName : "",
        useYn: "Y"         // 사용유무
    }

    const [code, setCode] = useState<ICode>(initCode);
    const [codeCategory, setCodeCategory] = useState<Array<ICodeCategory>>([]);
    const [submitted, setSubmitted] = useState(false);


    useEffect(()=>{
        retrieveCodeCategoryAll();
    },[])

    const retrieveCodeCategoryAll = () => {
        CodeCategoryService.getAllNoPage()
        .then((response:any)=>{console.log(response);
        setCodeCategory(response.data)})
        .catch((e:Error)=>{console.log(e)})
    }
    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setCode({...code, [name]:value});
    }
    const newCode = () => {}
    const handleSelectChange = (e:any) => {
        const {name, value} = e.target;
        setCode({...code, [name]:value});
    }
    const saveCode = () => {
        const data = {
            codeId: Number(code.categoryId+""+code.codeId),       // 공통코드ID
        codeName: code.codeName,     // 공통코드명
        categoryId: code.categoryId,   // 대분류코드ID
        categoryName : "",
        useYn: code.useYn  
        }

        CodeService.create(data)
        .then((response:any)=>{console.log(response);
        setSubmitted(true)})
        .catch((error:Error)=>{console.log(error)})
        
    }

  return (
    <div>    <div className="row">
    {submitted ? (
      <div className="col-6 mx-auto">
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newCode}>
          Add
        </button>
      </div>
    ) : (
      <>
        {/* 제목 start */}
        <TitleCom title="Add Code" />
        {/* 제목 end */}

        <div className="col-6 mx-auto">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="codeId" className="col-form-label">
                codeId
              </label>
            </div>

            <div className="col-9">
              <input
                type="number"
                id="codeId"
                required
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
                required
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
              <label htmlFor="unitPrice" className="col-form-label">
                Category Name
              </label>
            </div>
            <div className="col-9">
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
                id="categoryId"
                value={code.categoryId}
                onChange={handleSelectChange}
                name="categoryId"
              >
                <option>
                  selected item
                </option>
                {codeCategory &&
                  codeCategory.map((data) => (
                    <option key={data.categoryId} value={data.categoryId}>
                      {data.categoryName}
                    </option>
                  ))}
              </select>
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

          <div className="row g-3 mt-3 mb-3">
            <button
              onClick={saveCode}
              className="btn btn-outline-primary ms-2 col"
            >
              Submit
            </button>
          </div>
        </div>
      </>
    )}
  </div></div>
  )
}

export default AddCode