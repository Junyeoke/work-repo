import React from "react";

function Guest() {
  return (
    <div className="container">
      <div class="alert alert-dark" role="alert">
        <h3 class="text-start">📌 방명록</h3>
        <p class="text-start m-1">방명록페이지</p>
      </div>
      <div class="card">
        <div class="card-header text-start">Nickname</div>
        <div class="card-body">
          <p class="card-text text-start">
            방명록 내용 테스트
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a href="#" class="btn btn-danger btn-sm">
            삭제하기
          </a>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Guest;
