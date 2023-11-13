import axios from "axios";
import ICinema from "../../types/shop/ICinema";

// 영화 진흥 위원회 기본 주소
let baseUrl = "http://www.kobis.or.kr/kobisopenapi/webservice/rest";
let key = "0338e3b23fe94a36bd09ad0300f766f4";


// targetDt : 조회하고자 하는 날짜를 yyyymmdd 형식(필수)
// itemPerPage : 결과 ROW 의 개수를 지정
// repNationCd : “K: : 한국영화 “F” : 외국영화 ("" : 전체)
const getAll = (targetDt:string, itemPerPage:number, repNationCd:string) => {
    return axios.get<Array<ICinema>>(baseUrl+"/boxoffice/searchDailyBoxOfficeList.json"+`?key=${key}&targetDt=${targetDt}&itemPerPage=${itemPerPage}&repNationCd=${repNationCd}`);
}

// 상세조회
// ${baseUrl}/movie/searchMovieInfo.json
const get = (movieCd: string) => {
    let url = `${baseUrl}/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    console.log(url);
  
    return axios.get<ICinema>(url);
  };
const CinemaService = {
    getAll,
    get
}

export default CinemaService;