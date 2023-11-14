
import axios from 'axios';
import http from '../utils/http-common';

const findBoardAdminAll = () => { 
      return http.get('admin/board',{
        headers:  {
          Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
        }})
 }

 const findBoardUserAll = () => { 
  return http.get('user/board',{
    headers:  {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }})
}


 const login = (data) => { 
  return http.post(`/auth/login`,data);
  }

const LoginService = {
  findBoardAdminAll , 
  findBoardUserAll,
  login
}

export default LoginService;