import React from 'react'
import { useState } from 'react';
import IEmp from '../../types/IEmp';
import TitleCom from '../../components/common/TitleCom';
import EmpService from '../../services/EmpService';

function AddEmpNop() {
    // 변수정의
    // todo 초기화 예제
    const initialEmp = {
        eno: null,
        ename: "",
        job: "",
        manager: "",
        hiredate: "",
        salary: "",
        commission: "",
        dno: ""
    }

    // todo 바인딩 변수
    // todo 새 사원 객체 변수
    const [emp, setEmp] = useState<IEmp>(initialEmp);
    // todo 저장하면 true, 아니면 false 인 변수
    const [submitted, setSubmitted] = useState<boolean>(false);

    // 함수 정의
    // todo 새로운 폼을 보여주는 함수
    const newEmp = () => { 
        setEmp(initialEmp); // 객체 초기화
        setSubmitted(false);
     }

     // todo 각각의 입력창 수동 바인딩 공통함수
     const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setEmp({...emp, [name]: value});
     }

     // todo 저장함수
     const saveEmp = () => { 
        var data = {
            ename: emp.ename,
            job: emp.job,
            manager: emp.manager,
            hiredate: emp.hiredate,
            salary: emp.salary,
            commission: emp.commission,
            dno: emp.dno
        }
        EmpService.create(data)
        .then((response:any)=>{
            setSubmitted(true);
            console.log(response.data);

        })
        .catch((e:Error)=>{
            console.log(e);
        })
      }
  return (
    <div className="row">
    {submitted ? (
      <div className="col-6 mx-auto">
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newEmp}>
          Add
        </button>
      </div>
    ) : (
      <>
        {/* 제목 start */}
        <TitleCom title="Add Emp Nopage" />
        {/* 제목 end */}

        <div className="col-6 mx-auto">
          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="dname" className="col-form-label">
                Ename
              </label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="ename"
                required
                className="form-control"
                value={emp.ename}
                onChange={handleInputChange}
                placeholder="ename"
                name="ename"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="loc" className="col-form-label">
                Job
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="job"
                required
                className="form-control"
                value={emp.job}
                onChange={handleInputChange}
                placeholder="job"
                name="job"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="loc" className="col-form-label">
                Manager
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="manager"
                required
                className="form-control"
                value={emp.manager}
                onChange={handleInputChange}
                placeholder="manager"
                name="manager"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="loc" className="col-form-label">
                Hiredate
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="hiredate"
                required
                className="form-control"
                value={emp.hiredate}
                onChange={handleInputChange}
                placeholder="hiredate"
                name="hiredate"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="loc" className="col-form-label">
                Salary
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="salary"
                required
                className="form-control"
                value={emp.salary}
                onChange={handleInputChange}
                placeholder="salary"
                name="salary"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="loc" className="col-form-label">
                Commission
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="commission"
                required
                className="form-control"
                value={emp.commission}
                onChange={handleInputChange}
                placeholder="commission"
                name="commission"
              />
            </div>
          </div>

          <div className="row g-3 align-items-center mb-3">
            <div className="col-3">
              <label htmlFor="loc" className="col-form-label">
                Dno
              </label>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="dno"
                required
                className="form-control"
                value={emp.dno}
                onChange={handleInputChange}
                placeholder="dno"
                name="dno"
              />
            </div>
          </div>

          <div className="row g-3 mt-3 mb-3">
            <button onClick={saveEmp} className="btn btn-outline-primary ms-2 col">
              Submit
            </button>
          </div>
        </div>
      </>
    )}
  </div>
  )
}

export default AddEmpNop