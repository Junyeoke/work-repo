import React from 'react'

function Review() {
  return (
    <div className='container'>
      <div class="alert alert-dark" role="alert">
        <h3 class="text-start">🔎 IT 기기 리뷰</h3>
        <p class="text-start m-1">최신 IT기기를 만나보실수있습니다.</p>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-outline-secondary btn-sm">
          글쓰기
        </button>
      </div>
    </div>
  )
}

export default Review