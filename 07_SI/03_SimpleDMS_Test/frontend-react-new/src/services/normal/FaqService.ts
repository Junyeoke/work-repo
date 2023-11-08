import IFaq from "../../types/normal/IFaq";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(한 페이지당 개수))
const getAll = (title:string, page:number, size:number) => {
    return http.get<Array<IFaq>>(`/normal/faq?title=${title}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (title:any) => {
    return http.get<IFaq>(`/normal/faq/${title}`);
  };
  
  // 저장 함수
  const create = (data:IFaq) => {
    return http.post<IFaq>("/normal/faq", data);
  };
  
  // 수정 함수
  const update = (title:any, data:IFaq) => {
    return http.put<any>(`/normal/faq/${title}`, data);
  };
  
  // 삭제 함수
  const remove = (title:any) => {
    return http.delete<any>(`/normal/faq/deletion/${title}`);
  };
  
  const FaqService = {
    getAll,
    get,
    create,
    update,
    remove,
  };
  
  export default FaqService;
  