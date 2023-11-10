import React, { useEffect, useState } from 'react'
import LoginService from './../../service/LoginService';





function Board() {

  let [userId, setUserId] = useState
  ("")

    const findAll = () => { 
      LoginService.findBoardAll().then((response) => {
        console.log(response.data);
      })
      .catch((e)=> {
        console.log(e);
        console.log("sessionStorage" , sessionStorage.getItem("accessToken"));
      })
     }

     useEffect(() => {
      findAll();
      let userId = JSON.parse(localStorage.getItem("user"));
      setUserId(userId);
     },[])

  return (
    <div>유저 들어왓니?
      {userId}
      
    </div>
  )
}

export default Board