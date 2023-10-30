import React, { useEffect } from 'react'
import initMain from '../assets/js/initMain'
import fullimg01 from '../assets/img/gallery/full/01.jpg'
import fullimg02 from '../assets/img/gallery/full/02.jpg'
import fullimg03 from '../assets/img/gallery/full/03.jpg'
import fullimg04 from '../assets/img/gallery/full/04.jpg'
import fullimg05 from '../assets/img/gallery/full/05.jpg'
import fullimg06 from '../assets/img/gallery/full/06.jpg'

import thumbimg01 from '../assets/img/gallery/thumb/01.jpg'
import thumbimg02 from '../assets/img/gallery/thumb/02.jpg'
import thumbimg03 from '../assets/img/gallery/thumb/03.jpg'
import thumbimg04 from '../assets/img/gallery/thumb/04.jpg'
import thumbimg05 from '../assets/img/gallery/thumb/05.jpg'
import thumbimg06 from '../assets/img/gallery/thumb/06.jpg'

function SimpleLightboxComExam() {
    useEffect(()=>{
        initMain();
    },[])
  return (
    <div>
    <h1 className="align-center">Simple Lightbox Exam Page</h1>
    
    <div className="row gallery">
    <a href={fullimg01} className="col-4 ">
      <img src={thumbimg01} />
    </a>
    <a href={fullimg02} className="col-4 ">
      <img src={thumbimg02} />
    </a>
    <a href={fullimg03} className="col-4 ">
      <img src={thumbimg03} />
    </a>
    <a href={fullimg04} className="col-4 ">
      <img src={thumbimg04} />
    </a>
    <a href={fullimg05} className="col-4 ">
      <img src={thumbimg05} />
    </a>
    <a href={fullimg06} className="col-4 ">
      <img src={thumbimg06} />
    </a>
    <div className="clear"></div>
  </div>
</div>
  );
}

export default SimpleLightboxComExam