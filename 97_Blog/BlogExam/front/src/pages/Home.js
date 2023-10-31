import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    // <!-- Page Content-->
    <div class="container px-4 px-lg-5">
      
        {/* <!-- Heading Row--> */}
        <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="..." /></div>
            <div class="col-lg-5">
                <h1 class="font-weight-light">인기글 테스트</h1>
                <p>인기글 내용을 보여주는 부분</p>
                <a class="btn btn-primary" href="#!">게시글 보러가기!</a>
            </div>
        </div>
        {/* <!-- Call to Action--> */}
        <div class="card text-white bg-secondary my-5 py-4 text-center">
            <div class="card-body"><p class="text-white m-0">최신 IT 소식들을 블로그에서 만나보세요!</p></div>
        </div>
        {/* <!-- Content Row--> */}
        <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-5">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title">공지사항</h2>
                        <p class="card-text">공지사항 내용을 보여주는 곳입니다.</p>
                    </div>
                    <div class="card-footer"><Link to="/notice" class="btn btn-primary btn-sm">자세히 보기</Link></div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title">IT 소식</h2>
                        <p class="card-text">IT 소식을 보여주는 부분입니다.</p>
                    </div>
                    <div class="card-footer"><Link to="/news" class="btn btn-primary btn-sm" >자세히 보기</Link></div>
                </div>
            </div>
            <div class="col-md-4 mb-5">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title">IT 기기 리뷰</h2>
                        <p class="card-text">리뷰 내용을 보여주는 부분입니다.</p>
                    </div>
                    <div class="card-footer"><Link to="/review" class="btn btn-primary btn-sm">자세히 보기</Link></div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Home