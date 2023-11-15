import { useSearchParams } from "react-router-dom"
import { nanoid } from "nanoid"

export function SuccessPage() {
  const [searchParams] = useSearchParams()

  // 서버로 승인 요청

  return (
    <>
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      {/* <!-- section begin --> */}
      <section id="subheader" className="jarallax">
        <div className="de-gradient-edge-bottom"></div>
        <img
          src={require("../../assets/images/background/subheader-game.webp")}
          className="jarallax-img"
          alt=""
        />
        <h2
          className="container text-center wow fadeInUp mb20"
          data-wow-delay=".2s"
        >
          구매완료
        </h2>
      </section>
      {/* <!-- section close --> */}
      <div>
        
      </div>

    </div>
  </>
  )
}