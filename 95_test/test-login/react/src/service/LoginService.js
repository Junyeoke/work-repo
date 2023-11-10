
import axios from 'axios';
import http from '../utils/http-common';
import authHeader from './../utils/auth-header';




const findBoardAll = () => { 
      return http.get('user/board',{
        headers:  {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }})
 }

 const login = (data) => { 
  return http.post(`/auth/login`,data);
  }

const LoginService = {
  findBoardAll , 
  login
}

export default LoginService;