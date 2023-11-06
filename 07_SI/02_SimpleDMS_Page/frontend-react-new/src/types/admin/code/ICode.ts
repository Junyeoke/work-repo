// ICode.ts(소분류: 2자리) : 인터페이스
// CODE_ID     NUMBER NOT NULL
// CODE_NAME   VARCHAR2(255),
// CATEGORY_ID NUMBER NOT NULL
// USE_YN      VARCHAR(1) DEFAULT 'Y'
// 사용유무(useYn) : 만약 다른 소스에서 사용하고 있으면 'N' 변경불가
// why? 초기에(사용하기 전에) 실수로 공통코드 잘못 만들었을때 'N'으로 변경해서 사용안하기위해 만듦

export default interface ICode {
  codeId: number;               // 공통코드 ID
  codeName: string;             // 공통코드명
  categoryId: number;           // 대분류코드 ID
  categoryName: string;         // 대분류명
  useYn: string;                // 사용유무
}
