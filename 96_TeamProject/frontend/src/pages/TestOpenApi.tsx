import React, { useEffect, useState } from "react";
import TestOpenApiService from "../services/TestOpenApiService";
import { useNavigate, useParams } from "react-router-dom";
import IAppsData from "../types/IAppsData";

function TestOpenApi() {
  const { appid } = useParams();
  let [appsData, setAppsData] = useState<IAppsData>();
  let [render, setRender] = useState<boolean>(false);
  let navigation = useNavigate();
  let find = [
    "categories",
    // "developers",
    // "pc_requirements",
    // "release_data",
    "screenshots",
    "genres",
    // "price_overview",
    // "metacritic",
    "about_the_game",
    "name",
    // "is_free",
    // "detailed_description",
    // "short_description",
    // "header_image",
    // "background",
    // "supported_languages",
    // "type",
  ];

  useEffect(() => {
    if (appid) retieveSteam(appid);
  }, [appid]);

  const retieveSteam = (appid: any) => {
    TestOpenApiService.findById(appid)
      .then((response: any) => {
        let data = response.data[`${appid}`].data;
        console.log(data);
        setAppsData(data);

        // Todo : 필터링 작업
        if (data === undefined) {
          navigation("/steam");
          console.log("undefind or about_the_game is null");
        } else if (data.is_free == false && !("price_overview" in data)) {
          navigation("/steam");
          console.log("유료이지만 가격 데이터가 없습니다.");
        } else {
          find.map((value: any) =>
            value in data ? setRender(true) : navigation("/steam") 
          );
        }

      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  if (!render) {
    return <div></div>;
  }
  return (
    <>
      {appsData && (
        <>
          {/* 1번 게임이름 */}
          <h1>게임이름 : {appsData.name} </h1>
          {/* 2번 게임 설명 */}
          <p>게임 설명</p>
          {/* <p>게임 설명 html : {appsData.about_the_game}</p> */}
          <span dangerouslySetInnerHTML={{__html : appsData.about_the_game}}/>
          {/* 3번 메인 이미지 */}
          이미지
          <img src={appsData.header_image} />
          {/* 4번 설명 */}
          {/* <p>detailed_description</p> */}
          {/* <p>detailed_description html : {appsData.detailed_description}</p> */}
          {/* <span dangerouslySetInnerHTML={{__html : appsData.detailed_description}}/> */}
          <p>short_description {appsData.short_description}</p>
          {/* 5번 장르 */}
          {appsData.genres.map((value: any, index: any) => (
            <p key={index}>장르(tag) : {value["description"]}</p>
          ))}
          {/* 6번 스크린샷 */}
          {appsData.screenshots.map((value: any, index: any) => (
            <div key={index}>
              스크린샷
              <img src={value["path_thumbnail"]} />
            </div>
          ))}
          {/* 7번 업로드된 날짜 */}
          <p>업로드(release_data) : {appsData.release_date["date"]}</p>
          {/* 8번 서비스 지원 언어 */}
          <p>서비스 지원 언어 : {appsData.supported_languages}</p>
          <span dangerouslySetInnerHTML={{__html : appsData.supported_languages}}/>
          {/* 9번 제작사 */}
          <p>
            제작사 배열 :{" "}
            {appsData.developers.map((value: any, index: any) => (
              <div key={index}>{value}</div>
            ))}
          </p>
          
          {/* 10번 가격 */}
          {appsData.is_free ? (
            <>
              <p>가격 : 무료</p>
            </>
          ) : (
            <>
              <p>가격 배열 :</p>
              <p>단위 : 원단위 : {appsData?.price_overview["currency"]}</p>
              <p> 가격 : {appsData.price_overview["final"] / 100}원</p>
              <p>
                {" "}
                final_formatted : {appsData.price_overview["final_formatted"]}원
              </p>
            </>
          )}
          {/* 11번 사양 */}
          <p>사양 : </p>
          <span dangerouslySetInnerHTML={{__html : appsData.pc_requirements["minimum"]}}></span>
          {/* 12번 카테고리 */}
          <p>
            카테고리 :{" "}
            {appsData.categories.map((value: any, index: any) => (
              <div key={index}>{value["description"]} &nbsp;</div>
            ))}
          </p>
          {/* 13번 메타크리틱 점수 */}
          <p>
            메타크리틱 점수 :{" "}
            {appsData.metacritic ? appsData.metacritic["score"] : <></>}
          </p>
        </>
      )}
      {/* 끝 */}
    </>
  );
}

export default TestOpenApi;
