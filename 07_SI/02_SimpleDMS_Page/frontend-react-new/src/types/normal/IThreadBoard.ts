export default interface IThreadBoard {
  tid?: any | null;         
  subject: string;          // 제목
  mainText: string;         // 본문
  writer: string;           // 작성자
  views: number;            // 조회수
  tgroup: any | null;       // 테이블 그룹
  tparent: any | null;      // 테이블 부모
}
