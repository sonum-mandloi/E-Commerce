import React, { useEffect, useState } from "react";

const useWindowResize=()=>{

    const [windowResize,setWindowResize]= useState({
        width:undefined,
        height:undefined,
      })

    useEffect(()=>{
        function handlerResize(){
          setWindowResize({
            width:window.innerWidth,
            height:window.innerHeight
          })
        }
        window.addEventListener("resize",handlerResize)
         handlerResize()
         return ()=>window.removeEventListener("resize",handlerResize)
      },[])
    //   console.log("windowResize",windowResize);

      return windowResize
}

export default useWindowResize