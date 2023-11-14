// authService.ts : axios 백엔드 통신 공통함수(register, login, logout)
// http 헤더에 웹토큰을 넣어 백엔드로 조회요청 해야함(인증 성공이 뜸)

import IUser from "../../types/auth/IUser"
import http from "../../utils/http-common"

// 회원가입 axios 함수(insert)
const register = (user: IUser) => { 
    return http.post("/auth/signup", user);
 }

// todo 로그인 axios 함수(login, signin) : 조회(get이 아닌 post로 조회, 보안상 이유로)
// get 방식의 단점 : 웹브라우저 주소창에 요청 변수 또는 주소값이 나타남
// post -> 웹브라우저 주소창에 정보가 나타나지 않음
const login = (user: IUser) => { 
    return http.post("/auth/signin", user)  // 백엔드 함수실행
    .then((response:any)=>{
        // 성공시 실행할 함수 : 백엔드에서 웹토큰(accessToken)을 발행해서 전송해줌
        // 백엔드 : 웹토큰 + 유저이름 + 유저권한 등
        if(response.data.accessToken) {
            // 로컬스토리지(객체 -> 문자열변환) 저장
            localStorage.setItem("user", JSON.stringify(response.data));
            
        }
        return response.data;   // 백엔드 정보
    });

 }

// 로그아웃 함수 : 로컬스토리지에서 값 제거
const logout = () => { 
    localStorage.removeItem("user");
 }


 const AuthService = {
    register,
    login,
    logout
 }

 export default AuthService;