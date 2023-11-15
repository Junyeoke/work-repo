import React, { useEffect, useState } from "react";
import LoginService from "./../../services/LoginService";

function BoardUser() {
  const initialUser = {
    userId: "",
    name: "",
    role: "",
  };

  let [user, setUser] = useState(initialUser);

  const findAll = () => {
    LoginService.findBoardUserAll()
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        console.log("localstorage", sessionStorage.getItem("accessToken"));
      });
  };

  useEffect(() => {
    findAll();

    // sessionStorage 테스트
    setUser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  return (
    <div>
      USER 테스트
      <h1>유저의 기본키 : {user.userId}</h1>
      <h1>유저의 이름   : {user.name}</h1>
      <h1>유저의 권한   : {user.role}</h1>
    </div>
  );
}

export default BoardUser;
