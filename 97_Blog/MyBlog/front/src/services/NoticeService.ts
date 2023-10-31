import http from "../utils/http-common";
import Notice from "../types/Notice";


const getAll = (uname:string, page:number, size:number) => { 
    return http.get<Array<Notice>>(`/notice?uname=${uname}&page=${page}&size=${size}`);
 }

 
 const get = (num: any) => {
    return http.get<Notice>(`/notice/${num}`);
  };

  const create = (data: Notice) => {
    return http.post<Notice>("/notice", data);
  };

  const update = (num: any, data: Notice) => {
    return http.put<any>(`/notice/${num}`, data);
  };

  const remove = (num: any) => {
    return http.delete<any>(`/notice/deletion/${num}`);
  };
  
  const findByUsername = (uname: string) => {
    return http.get<Array<Notice>>(`/notice?uname=${uname}`);
  };

  const NoticeService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByUsername
    
  }

  export default NoticeService;