import React from 'react'

function BootstrapIcons() {
  return (
    <div>
        {/* 공홈 : https://icons.getbootstrap.com/ */}
        {/* 유사사이트(참고) font-awesome */}
        {/* 1) Bootstrap Icons : 홈페이지 각각의 아이콘 모양을 쉽게 제공 */}
        {/* 사용법(install) : 부트스트랩-아이콘 CND 걸기 : index.html */}
        {/* 아이콘 사용법 */}
        {/* <i className='bi bi-아이콘 클래스명'>글자</i> */}
        <i className='bi bi-heart-fill'> : bi-heart-fill </i>
        <br/>
        <i className='bi bi-heart'> : bi-heart </i>
        <br/>
        <i className='bi bi-gem'> : bi-gem </i>
        <br/>
        <i className='bi bi-laptop'> : bi-laptop </i>
        <br/>
        <i className='bi bi-globe'> : bi-globe </i>
    </div>
  )
}

export default BootstrapIcons