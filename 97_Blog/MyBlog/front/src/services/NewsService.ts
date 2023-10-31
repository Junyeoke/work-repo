import News from "../types/News";
import http from "../utils/http-common";

const getAll = (title:string, page:number, size:number) => { 
    return http.get<Array<News>>(`/news?title=${title}&page=${page}&size=${size}`);
 }

 
 const get = (num: any) => {
    return http.get<News>(`/news/${num}`);
  };

  const create = (data: News) => {
    return http.post<News>("/news", data);
  };

  const update = (num: any, data: News) => {
    return http.put<any>(`/news/${num}`, data);
  };

  const remove = (num: any) => {
    return http.delete<any>(`/news/deletion/${num}`);
  };
  
  const findByTitle = (title: string) => {
    return http.get<Array<News>>(`/news?title=${title}`);
  };

  const NewsService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByTitle
    
  }

  export default NewsService;