// CartService.ts : axios 공통 crud 함수

import ICart from "../../types/shop/ICart";
import http from "../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(1페이지당개수))
const getAll = (pname:string, page:number, size:number) => {
    return http.get<Array<ICart>>(`/shop/cart?pname=${pname}&page=${page}&size=${size}`);
  };
  
  // 상세 조회
  const get = (scno:any) => {
    return http.get<ICart>(`/shop/cart/${scno}`);
  };
  
  // 저장함수
  const create = (data:ICart) => {
    return http.post<ICart>("/shop/cart", data);
  };
  // 수정함수
  const update = (scno:any, data:ICart) => {
    return http.put<any>(`/shop/cart/${scno}`, data);
  };
  // 삭제함수
  const remove = (scno:any) => {
    return http.delete<any>(`/shop/cart/deletion/${scno}`);
  };
  
  const CartService = {
    getAll,
    get,
    create,
    update,
    remove,
  };
  
  export default CartService;
  