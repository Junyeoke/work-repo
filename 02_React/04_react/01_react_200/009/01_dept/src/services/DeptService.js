// DeptService.js : axios 공통 함수가 정의된 파일
// axios 기본 주소 정의 파일 import : http-common
import http from "../utils/http-common";

// TODO: 조회 : axios.get() 함수 사용
// 공통 모든 데이터 조회 함수 : /dept
const getAll = () => {
  return http.get("/dept");
};

// 검색어 조회 함수 : /dept?dname=검색어
// 인터넷 주소 : http://url:포트번호/추가url?변수명=값
// 웹브라우저 주소창에서 다른 페이지 이동시 변수에 값을 저장해서 전달할 수 있음
// 예) 1번페이지 : /dept         2번페이지 : /dept-detail?변수=값

const findByDname = (dname) => {
  return http.get(`/dept?dname=${dname}`);
};

// TODO: 저장요청 : axios.post("url", 객체) 함수 사용
// 저장요청 함수(대상 : 화면에 입력된 객체)
const create = (data) => {
  return http.post("/dept", data);
};

//  TODO: 상세조회(1건)요청 함수 : axios.get(url/부서번호) 함수 사용

const get = (id) => {
  return http.get(`/dept/${id}`);
};

// TODO: 삭제(1건) 요청함수 : axios.delete(`/dept/${id}`)
const remove = (id) => {
  return http.delete(`/dept/${id}`);
};

// TODO: 수정함수
const update = (id, data) => { 
  return http.put(`/dept/${id}`, data)
 }

const DeptService = {
  getAll, // 모든 데이터 조회
  findByDname, // 검색어 조회
  create, // 저장요청
  get, // 상세조회
  remove, // 삭제
  update // 수정
};

export default DeptService; // 함수 내보내기
