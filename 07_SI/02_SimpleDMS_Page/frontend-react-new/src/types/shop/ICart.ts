// Cart type
// 상품(Product) + 장바구니(Cart) 조인 타입
export default interface ICart {
    cno?: any | null,        // 장바구니 번호
    pno: number,
    kindCode: number,
    pname: string,
    image: string,
    unitPrice: number,
    statusCode: number,
    amount: number        // 장바구니 개수
  }
  