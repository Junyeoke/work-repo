import { useState } from "react";
import React from 'react'

function B_SingUp_Exam() {

    // 변수정의
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [address, setAddress] = useState("");

    // 함수 정의
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`
        이름 : ${name} 
        password : ${password} 
        이메일 : ${email} 
        phone : ${phone} 
        address : ${address}
        `)
    }

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    
  return (
    <div>
    <form>
      <label>
        이름:
        <input
          className="form-control" 
          type="text"
          value={name}
          name="name"
          onChange={handleChangeName}
        />
      </label>

      <br />
      <label>
        패스워드:
        <input
        className="form-control"
          type="password"
          value={password}
          name="password"
          onChange={handleChangePassword}
        />
      </label>

      <br />
      <label>
        email:
        <input
        className="form-control"
          type="email"
          value={email}
          name="email"
          onChange={handleChangeEmail}
        />
      </label>

      <br />
      <label>
        phone:
        <input
        className="form-control"
          type="text"
          value={phone}
          name="phone"
          onChange={handleChangePhone}
        />
      </label>

      <br />
      <label>
        주소:
        <input
        className="form-control"
          type="text"
          value={address}
          name="address"
          onChange={handleChangeAddress}
        />
      </label>

      <button  className="btn btn-primary"
           type="submit" onClick={handleSubmit}>
        제출
      </button>
    </form>
  </div>
  )
}

export default B_SingUp_Exam