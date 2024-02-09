import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Ecommerc/Component/Home/Home'
// import About from './Ecommerc/Component/About/About'
import Header from './Ecommerc/Component/Header/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='' element=""/>
          {/* <Route path='/' element={<Home/>}/> */}
          {/* <Route path='/About' element={<About/>}/> */}
        </Routes>
      </BrowserRouter>

    </>
      
  )
}

export default App
