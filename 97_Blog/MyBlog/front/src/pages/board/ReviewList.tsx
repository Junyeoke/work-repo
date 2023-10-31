import React from "react";
import { Link } from "react-router-dom";

function ReviewList() {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            리뷰게시판
          </li>
        </ol>
        <hr />
      </nav>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to={"/add-news"}>
          <button type="button" className="btn btn-outline-primary mb-3 ">
            글쓰기
          </button>
        </Link>
      </div>

      
      
    </div>
  );
}

export default ReviewList;
