import React, { useEffect, useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import './index.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Offcanvas } from 'react-bootstrap';

export default function HomePage() {
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  console.log(settings.dots)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?&_limit=3')
    .then(res => {
      setData(res.data)
    })
  }, [])

  console.log(data)
  return (
    <>
    <div className='main-side'>
      <div className='hamburg-menu'>
      {show ? (<AiOutlineClose onClick={handleClose}/>): (<GiHamburgerMenu onClick={handleShow}/>)}
      </div>
       <div className='social-media'>
          <a href='facebook'>
          <FaFacebookF />
          </a>
       </div>
       <div style={{color: '#d0a043'}}>
         <BsSearch />
       </div>
    </div>
    <div >
     <Offcanvas show={show} onHide ={handleClose}>
       <h1 className='sr-only sr-only-focusable'>Welcome</h1>
     </Offcanvas>
    </div>
   <Parallax pages={2} >
  <ParallaxLayer
    offset={0}
    speed={2.5}
   
    >
    <>
    {data.map((obj)=> {
      return(
        
        <div style={{display: 'flex'}} >
          <h1 style={{color: 'black',  fontSize: '12px'}} >{obj.tile}</h1>
          {/* <img src={obj.url} alt="khb" /> */}
        </div>
        
      )
    })}
    </>
    <ReactPaginate 
      breakLabel="..."
      nextLabel="next >"
      // onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={25}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    
    />
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
    new
  </ParallaxLayer>
</Parallax>
    </>
  )

}
