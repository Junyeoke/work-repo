
# 1 ~ 3 번까지는 설치 되어있습니다. npm i 만 치면 됩니다.

# 1) npm i react-router-dom
# 2) npm i sass
# 3) npm i axios

# 만약 페이지 네이션을 사용하게 될시
# 4) Material Page component 업그레이드 
# 과거 v4 -> v5 변경 설치
npm install @mui/material @emotion/react @emotion/styled

# 4-1) 소스에서 임포트 사용법 : <Pagination />
import Pagination from '@mui/material/Pagination';






# * 외부 라이브러리 타입이 없을 경우 처리 : 타입 설정
# 1) tsconfig.json 파일 - compilerOptions 속성에 아래 추가 : 프로젝트시작위치/types - 이 위치에 타입을 인식하게 하는 경로 설정
"typeRoots": ["./types", "./node_modules/@types"], // 보통 types 폴더를 만들어 타입 정의
# 2) types/외부라이브러리명/index.d.ts 파일 생성 후 아래 추가
declare module '외부라이브러리명';