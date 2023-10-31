// EmpService.ts : 공통 axios 함수(CRUD)
// axios 통신을 위한 import 작업
import http from "../utils/http-common";
// type 인터페이스 import
import IEmp from './../types/IEmp';

// 화살표 함수 단축키 : nfn
/** 전체 조회 요청 함수 */
const getAll = () => {
  // 조회요청 : .get("/url")
  // 사용법 : http.get<리턴타입>("스프링부트의 컨트롤러url");
  return http.get<Array<IEmp>>("/emp");
};

/** 상세 조회(1건조회) 요청 함수 : 기본키 */
//  매개변수로는 부서번호(dno) type는 any
const get = (eno: any) => {
  return http.get<IEmp>(`/emp/${eno}`);
};

/** 저장 요청 함수 */
const create = (data: IEmp) => {
  return http.post<IEmp>("/emp", data);
};

/** 수정 요청 함수 : 기본키와 객체 필요 */
const update = (eno: any, data: IEmp) => {
  return http.put<any>(`/emp/${eno}`, data);
};

/** 삭제 요청 함수 : 기본키(dno) */
const remove = (eno: any) => {
  return http.delete<any>(`/emp/deletion/${eno}`);
};

/** 부서명 검색 요청 함수 */
const findByEname = (ename: string) => {
  return http.get<Array<IEmp>>(`/emp?ename=${ename}`);
};


// 함수 기능 내보내기
const EmpService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByEname
}

export default EmpService;
