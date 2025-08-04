import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Coin from './pages/Coin'
import { Route , Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Blog from './pages/Blog'
const App = () => {
  return (
    <div className='p-0 m-0 bg-[linear-gradient(#0b004e,_#1d152f,_#002834)] '>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:coinId' element={<Coin />} />
          <Route path='/blog' element={<Blog />}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
