import React, { useEffect } from 'react'
import LoginService from '../../services/LoginService';

function BoardAdmin() {

  const findAll = () => { 
    LoginService.findBoardAdminAll().then((response) => {
      console.log(response.data);
    })
    .catch((e)=> {
      console.log(e);
      console.log("localstorage" , sessionStorage.getItem("accessToken"));
    })
   }

   useEffect(() => {
    findAll();
   },[])


  return (
    <div>Admin 테스트</div>
  )
}

export default BoardAdmin