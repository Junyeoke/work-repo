import { useSearchParams } from "react-router-dom"
import { nanoid } from "nanoid"

export function SuccessPage() {
  const [searchParams] = useSearchParams()

  // 서버로 승인 요청

  return (
    <div>
      <h1>주문이 완료되었습니다.</h1>
      <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
      <div>{`구매 게임키 : ${nanoid()}`}</div>
      <div>{`결제 금액: ${Number(
        searchParams.get("amount")
      ).toLocaleString()}원`}</div>
      <div>
        {`주문 물품 : ${searchParams.get("orderName")} `}
      </div>
    </div>
  )
}