

import React, { useState ,useNavigate } from 'react'
import LoginService from './../../services/LoginService';



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
            sessionStorage.setItem("accessToken", headers);
            
            let user = JSON.stringify(response.data);
            sessionStorage.setItem("user",user);
            console.log("response.data",response.data);
            console.log("토큰받기",headers);
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
        <a href='/board-user'>유저 테스트</a> <br/>
        <a href='/board-admin'>어드민 테스트</a> <br/>
        <a href='/steam'>steam api 테스트</a>
    </div>
  )
}

export default LoginPage