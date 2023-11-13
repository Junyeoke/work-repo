import { useEffect, useRef, useState } from "react";
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
  ANONYMOUS,
} from "@tosspayments/payment-widget-sdk";

// 고유 문자열 식별자 생성기(unique string ID generator)
import { nanoid } from "nanoid";

const clientKey = "test_ck_AQ92ymxN34PvD94BbgEA3ajRKXvd"; // 토스페이먼츠에서 발급한 테스트 클라이언트 키
const customerKey = "Ul65YwaEn9C8ozXB_EiCk";              // 내 상점에서 고객을 구분하기 위해 발급한 고객의 고유 ID

function CheckOut() {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  
  // 물품 가격 저정하는 변수
  const [price, setPrice] = useState(65000);

  useEffect(() => {
    (async () => {
      // ------  결제위젯 초기화 ------
      // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
      // const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS)  // 비회원 결제

      // ------  결제 UI 렌더링 ------
      // 결제 UI를 렌더링할 위치를 지정합니다. `#payment-method`와 같은 CSS 선택자와 결제 금액 객체를 추가하세요.
      // DOM이 생성된 이후에 렌더링 메서드를 호출하세요.
      // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        { value: price },
        // 렌더링하고 싶은 결제 UI의 variantKey
        // 아래 variantKey는 문서용 테스트키와 연동되어 있습니다. 멀티 UI를 직접 만들고 싶다면 계약이 필요해요.
        // https://docs.tosspayments.com/guides/payment-widget/admin#멀티-결제-ui
        { variantKey: "DEFAULT" }
      );

      // ------  이용약관 UI 렌더링 ------
      // 이용약관 UI를 렌더링할 위치를 지정합니다. `#agreement`와 같은 CSS 선택자를 추가하세요.
      // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
      paymentWidget.renderAgreement(
        "#agreement",
        { variantKey: "AGREEMENT" } // 기본 이용약관 UI 렌더링
      );
      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    // 새로운 결제 금액을 넣어주세요.
    // https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(price);
  }, [price]);

  return (
    <div>
      <h1>게임 결제하기</h1>
      <br />
      <div className="card mb-3">
        <div className="card-header">주문목록</div>
        <div className="card-body">
          <h5 className="card-title">게임명들어가는부분</h5>
          <p className="card-text">
            <span>{`금액 : ${price.toLocaleString()}원`}</span>
          </p>
          <hr/>
          <h5 className="coupon-title">🎫 할인쿠폰</h5>
          <div>
            {/* 쿠폰 적용하는 부분 price 부분을 수정 */}
            <label>
              <input
                type="checkbox"
                onChange={(event) => {
                  setPrice(event.target.checked ? price - 5000 : price + 5000);
                }}
              />
              &nbsp; 사이트 오픈기념 5,000원 할인 쿠폰 증정
            </label>
            <br/>
            <label>
              <input
                type="checkbox"
                onChange={(event) => {
                  setPrice(event.target.checked ? price - 3000 : price + 3000);
                }}
              />
              &nbsp; 첫 회원가입 3,000원 할인 쿠폰 증정
            </label>
            {/* 결제방식 선택창 시작부분 */}
          </div>
        </div>
      </div>

      <div id="payment-widget" />
      <div id="agreement" />
      <button
      className="btn btn-primary mt-3"
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;

          try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // 더 많은 결제 정보 파라미터는 결제위젯 SDK에서 확인하세요.
            // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
            await paymentWidget?.requestPayment({
              orderId: nanoid(), // 주문 고유 ID
              orderName: "토스 티셔츠 외 2건", //  장바구니에 담긴 상품명
              customerName: "김토스", //  구매자 이름
              customerEmail: "customer123@gmail.com", //   구매자 이메일
              successUrl: `${window.location.origin}/success`, //   결제 성공시 이동되는 url
              failUrl: `${window.location.origin}/fail`, //   결제 실패시 이동되는 url
            });
          } catch (error) {
            // 에러 처리하기
            console.error(error);
          }
        }}
      >
        {`${price.toLocaleString()}원 결제하기`}
      </button>
    </div>
  );
}

export default CheckOut;
