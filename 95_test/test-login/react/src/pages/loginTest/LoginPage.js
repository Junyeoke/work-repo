

import React, { useState ,useNavigate } from 'react'
import LoginService from './../../service/LoginService';



function LoginPage() {

    let initial ={
        email : "",
        password : ""
    }

    let [loginAttr , setLoginAttr] = useState(initial);


    const chaging = (event) => { 
        let attrEmail = event.target.name;
        let attrValue = event.target.value;
        setLoginAttr({...loginAttr, [attrEmail] : attrValue});
     }

     const submit = () => { 
        LoginService.login(loginAttr)
        .then((response) => {
            let headers = response.headers.get("Authorization");
            headers = headers.substr(7);
            console.log(headers);
            localStorage.setItem("accessToken", headers);
            let user = JSON.stringify(response.data);
            localStorage.setItem("user",user)
        }).catch((e) => {
            console.log(e);
        })
      }
  return (
    <div>

        <form>
            이메일<input type='text' name="email" onChange={chaging}></input>
            <br></br>
            비번<input type='text' name="password" onChange={chaging}></input>
            <br/>
            <input type='button' onClick={submit} value="제출"/>
        </form>
        <a href='/board'>버튼</a>
    </div>
  )
}

export default LoginPage