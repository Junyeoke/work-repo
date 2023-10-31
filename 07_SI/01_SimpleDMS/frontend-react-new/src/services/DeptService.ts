// DeptService.ts
// axios 통신을 위한 import 작업
import http from "../utils/http-common";
// type 인터페이스 import
import IDept from "../types/IDept";

// 화살표 함수 단축키 : nfn
/** 전체 조회 요청 함수 */
const getAll = () => {
  // 조회요청 : .get("/url")
  // 사용법 : http.get<리턴타입>("스프링부트의 컨트롤러url");
  return http.get<Array<IDept>>("/dept");
};

/** 상세 조회(1건조회) 요청 함수 : 기본키 */
//  매개변수로는 부서번호(dno) type는 any
const get = (dno: any) => {
  return http.get<IDept>(`/dept/${dno}`);
};

/** 저장 요청 함수 */
const create = (data: IDept) => {
  return http.post<IDept>("/dept", data);
};

/** 수정 요청 함수 : 기본키와 객체 필요 */
const update = (dno: any, data: IDept) => {
  return http.put<any>(`/dept/${dno}`, data);
};

/** 삭제 요청 함수 : 기본키(dno) */
const remove = (dno: any) => {
  return http.delete<any>(`/dept/deletion/${dno}`);
};

/** 부서명 검색 요청 함수 */
const findByDname = (dname: string) => {
  return http.get<Array<IDept>>(`/dept?dname=${dname}`);
};


// 함수 기능 내보내기
const DeptService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByDname
}

export default DeptService;
