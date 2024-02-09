import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { TiThMenuOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import useWindowResize from '../../CustomHook/useWindowResize';

const Header = () => {

  const [show,setShow]=useState(true);
  const{width,height}=useWindowResize()
  console.log(width,height);

  useEffect(()=>{
      if (width > 639){
    setShow(true)
}
  },[width])

  function HideShow(){
    setShow(!show)
  }
//  logo style with dom
    const logo = document.getElementById("logo")
    const first = document.getElementById("firstS")
    const second = document.getElementById("secondS")

    function hover(){
      first.style.backgroundColor = "#F3F4F6";
      second.style.backgroundColor = "#60A5FA";
      first.style.color = "#60A5FA";
      second.style.color = "#F3F4F6";
      logo.style.border="none";
      first.style.border="2px solid";
      second.style.border="none"

    };
    function hoverOut(){
      first.style.backgroundColor = "#60A5FA";
      second.style.backgroundColor = "#F3F4F6";
      first.style.color = "#F3F4F6";
      second.style.color = "#60A5FA";
      second.style.border="2px solid"
      first.style.border="none"
      logo.style.border="none"
    }
  return (
    <>
      <div className='w-[100vw] h-[50px] bg-gray-100 flex justify-between fixed' >
          <div className='ml-10 flex justify-center items-center w-[100px] h-[40px] border-2 rounded-3xl mt-1 border-blue-400 ' id='logo' onMouseOver={hover}  onMouseOut={hoverOut}  >
            <span className='w-[50px] h-[40px] flex justify-center items-center text-[40px] bg-blue-400 text-gray-100 rounded-l-3xl ' id='firstS'><h1 className='mb-[10px]'>𝙨</h1></span>
            <span className='w-[50px] h-[40px] flex justify-center items-center text-[40px] text-blue-400  rounded-r-3xl ' id='secondS'><h1 className='mb-[10px]'>𝙨</h1></span>
          </div>
          <div>
            <div className='max-sm:hidden'>
                <NavBar/>
            </div>
            <div className='sm:hidden relative mt-3'>
              {
                show ?
                 <TiThMenuOutline className='mr-5  text-2xl text-blue-400' onClick={HideShow} />:
                 <RxCross2  className='mr-5  text-2xl text-blue-400' onClick={HideShow} />
             }
            </div>  
          </div>
      </div>
      <div>
        {
          show? "":<NavBar/>
        }
      </div>
    </>
  )
}

export default Header
