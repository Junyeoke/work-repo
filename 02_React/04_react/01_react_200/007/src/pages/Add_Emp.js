import React, { useState } from "react";
import "../assets/chapter15.css";

function Add_Emp() {
  const initialEmp = {
    ename: "",      // 사원명
    job: "",        // 직위
    manager: "",    // 관리자 사번
    hiredate: "",   // 입사일
    salary: "",     // 월급
    commission: "", // 인센티브
    dno: "",        // 부서번호
  };

  let [emp, setEmp] = useState(initialEmp);

  const handleChange = (e) => {
    let attrValue = e.target.value;
    let attrName = e.target.name;
    setEmp({ ...emp, [attrName]: attrValue });
  };

  const saveEmp = () => {
    alert("저장되었습니다.");
  };
  return (
    <div className="submit-form">
      <div className="form-group">
        <label htmlFor="ename">Ename</label>
        <input
          type="text"
          className="form-control"
          id="ename"
          required
          value={emp.ename}
          onChange={handleChange}
          name="ename"
        />
      </div>

      <div className="form-group">
        <label htmlFor="job">Job</label>
        <input
          type="text"
          className="form-control"
          id="job"
          required
          value={emp.job}
          onChange={handleChange}
          name="job"
        />
      </div>

      <div className="form-group">
        <label htmlFor="manager">manager</label>
        <input
          type="number"     // 유효성체크
          className="form-control"
          id="manager"
          required          // 필수입력
          value={emp.manager}
          onChange={handleChange}
          name="manager"
        />
      </div>

      <div className="form-group">
        <label htmlFor="hiredate">hiredate</label>
        <input
          type="number"
          className="form-control"
          id="hiredate"
          required
          value={emp.hiredate}
          onChange={handleChange}
          name="hiredate"
        />
      </div>

      <div className="form-group">
        <label htmlFor="salary">salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          required
          value={emp.salary}
          onChange={handleChange}
          name="salary"
        />
      </div>

      <div className="form-group">
        <label htmlFor="commission">commission</label>
        <input
          type="number"
          className="form-control"
          id="commission"
          required
          value={emp.commission}
          onChange={handleChange}
          name="commission"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dno">dno</label>
        <input
          type="number"
          className="form-control"
          id="dno"
          required
          value={emp.dno}
          onChange={handleChange}
          name="dno"
        />
      </div>

      <button onClick={saveEmp} className="btn btn-success mt-3">
        Submit
      </button>
    </div>
  );
}

export default Add_Emp;
