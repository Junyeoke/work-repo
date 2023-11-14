import axios from "axios";

// 전체 조회 : https://api.steampowered.com/ISteamApps/GetAppList/v2
// 상세 조회(외국) : https://store.steampowered.com/api/appdetails?appids=1476090
// 상세 조회(한국) : https://store.steampowered.com/api/appdetails?appids=218620&l=korean
// 리뷰 (모르겟음) : /appreviews/763679?json=1&cursor=AoIIPwYYanDTv%2BQB&l=korean

// 전체 조회 공통 : https://api.steampowered.com
// 상세 조회 공통 : https://store.steampowered.com

// 연습 : id 값 : 218620

const findAll = () => {
  return axios.get(`/ISteamApps/GetAppList/v2`);
};

const findById = (appid: number) => {
  console.log("appid" , appid);
  return axios.get(`/api/appdetails?appids=${appid}&l=korean`);
};

const TestOpenApiService = {
  findAll,
  findById,
};

export default TestOpenApiService;
