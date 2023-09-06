import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpService from "../../services/EmpService";

function Emp() {
  // 변수정의
  const { id } = useParams();
  let navigate = useNavigate();

  // 바인딩 변수
  // 임시 객체
  const initialCustomer = {
    id: "",
    cname: "",
    email: "",
    phone: "",
  };

  let [customer, setCustomer] = useState(initialCustomer);
  let [message, setMessage] = useState("");

  // 함수정의
  // 조회함수
  const getCustomer = (id) => {
    EmpService.get(id)
      .then((response) => {
        setCustomer(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 화면이 뜰 때 실행되는 함수
  useEffect(() => {
    if (id) {
      getCustomer(id);
    }
  }, [id]);

  // 역바인딩 함수
  const handleInputChange = (e) => {
    let attrValue = e.target.value;
    let attrName = e.target.name;
    setCustomer({ ...customer, [attrName]: attrValue });
  };

  // 수정함수 : 클릭
  const updateCustomer = (id, data) => {
    EmpService.update(customer.id, customer)
      .then((response) => {
        setCustomer(response.data);
        setMessage("사원 수정이 성공하였습니다.");
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 삭제함수 : 클릭
  const deleteCustomer = (id) => {
    EmpService.remove(customer.id)
      .then((response) => {
        console.log(response.data);
        navigate("/emp");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      {/* 제목 start */}
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-6 mb-5 mt-5">
          <h1>Emp Detail</h1>
        </div>
        {/* 제목 끝 */}
      </div>
      {/* 제목 end */}

      <>
        {customer ? (
          <div className="col-6 mx-auto">
            <form>
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="cname" className="col-form-label">
                    Cname
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="cname"
                    required
                    className="form-control"
                    value={customer.cname}
                    onChange={handleInputChange}
                    placeholder="cname"
                    name="cname"
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="email" className="col-form-label">
                    email
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="email"
                    required
                    className="form-control"
                    value={customer.email}
                    onChange={handleInputChange}
                    placeholder="email"
                    name="email"
                  />
                </div>

                <div className="row g-3 align-items-center mb-3">
                  <div className="col-3">
                    <label htmlFor="phone" className="col-form-label">
                      phone
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      id="phone"
                      required
                      className="form-control"
                      value={customer.phone}
                      onChange={handleInputChange}
                      placeholder="phone"
                      name="phone"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteCustomer}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateCustomer}
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
            <p>Please click on a Customer...</p>
          </div>
        )}
      </>
    </>
  );
}

export default Emp;
