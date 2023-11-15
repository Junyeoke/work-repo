import React from "react";

function CartList() {
    
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
            장바구니
          </h2>
        </section>
        {/* <!-- section close --> */}

        <section className="no-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center wow fadeInUp"></div>

              <div className="col-md-12">
                <table className="table table-pricing dark-style text-center">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">수량</th>
                      <th scope="col">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: 20 + "px" }}>
                        <span>1</span>
                      </td>
                      <td style={{ padding: 20 + "px" }}>
                        <span>배틀그라운드</span>
                      </td>
                      <td style={{ padding: 20 + "px" }}>
                        <span>65,000</span>
                      </td>
                      <td style={{ padding: 20 + "px" }}>
                        <span>1</span>
                      </td>
                      <td style={{ padding: 20 + "px" }}>
                        <a href="/checkout" className="btn-main opt-1">
                          구매하기
                        </a>
                      </td>
    
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <hr/>
          
        </section>
        
      </div>
    </>
  );
}

export default CartList;
