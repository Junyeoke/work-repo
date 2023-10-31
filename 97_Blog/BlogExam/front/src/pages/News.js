import React from "react";

function News() {
  return (
    <div className="container">
      <div class="alert alert-dark" role="alert">
        <h3 class="text-start">📰 IT 뉴스</h3>
        <p class="text-start m-1">최신 IT 뉴스를 전달해드립니다.</p>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-outline-secondary btn-sm">
          글쓰기
        </button>
      </div>
      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title">IT 뉴스 1호</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            자세히 보기
          </a>
        </div>
      </div>
    </div>
  );
}

export default News;
