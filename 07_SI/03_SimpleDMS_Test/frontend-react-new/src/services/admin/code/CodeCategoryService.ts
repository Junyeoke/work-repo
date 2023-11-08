//CodeCategoryService.ts

import ICodeCategory from "../../../types/admin/code/ICodeCategory";
import http from "../../../utils/http-common";

// 전체 조회 + like 검색(paging 기능 : page(현재페이지), size(한 페이지당 개수))
const getAll = (categoryName: string, page: number, size: number) => {
  return http.get<Array<ICodeCategory>>(
    `/admin/code-category?categoryName=${categoryName}&page=${page}&size=${size}`
  );
};

// 전체 조회 : 페이징 없는 함수
const getAllNoPage = () => {
    return http.get<Array<ICodeCategory>>("/admin/code-category/all");
 }

// 상세 조회
const get = (categoryId: any) => {
  return http.get<ICodeCategory>(`/admin/code-category/${categoryId}`);
};

// 저장 함수
const create = (data: ICodeCategory) => {
  return http.post<ICodeCategory>("/admin/code-category", data);
};

const CodeCategoryService = {
  getAll,
  get,
  create,
  getAllNoPage,
};

export default CodeCategoryService;
