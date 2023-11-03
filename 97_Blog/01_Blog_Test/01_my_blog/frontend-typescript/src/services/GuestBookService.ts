import GuestBook from "../types/GuestBook";
import http from "../utils/http-common";


const getAll = (userName:string, page:number, size:number) => { 
    return http.get<Array<GuestBook>>(`/guestbook?userName=${userName}&page=${page}&size=${size}`);
 }

 
 const get = (id: any) => {
    return http.get<GuestBook>(`/guestbook/${id}`);
  };

  const create = (data: GuestBook) => {
    return http.post<GuestBook>("/guestbook", data);
  };

  const update = (id: any, data: GuestBook) => {
    return http.put<any>(`/guestbook/${id}`, data);
  };

  const remove = (id: any) => {
    return http.delete<any>(`/guestbook/deletion/${id}`);
  };
  
  const findByTitle = (userName: string) => {
    return http.get<Array<GuestBook>>(`/guestbook?userName=${userName}`);
  };

  const GuestBookService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByTitle
    
  }

  export default GuestBookService;