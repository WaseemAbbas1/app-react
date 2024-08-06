import React from 'react'
import {BrowserRouter , Routes , Route} from  'react-router-dom'
// components 
import Header from '../components/Header'
import Footer from '../components/Footer'
// page
import Home from './Home'
import About from './About'
import Contact from './contact'
import Auth from './Auth'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/UseRef'
import UseMemo from './Hooks/UseMemo'
import UseContext from './Hooks/UseContext'
import NoPage from './NoPage'
export default function index() {
  return (
    <>
    <BrowserRouter>
         <Header/>
    <main>
    <Routes>
    <Route path='/' element ={<Home/>}/>
    <Route path='/about' element ={<About/>}/>
    <Route path='/contact' element ={<Contact/>}/>
    <Route path='/auth/user' element ={<Auth/>}/>
    <Route path='/hook/usestate' element ={<UseState/>}/>
    <Route path='/hook/useeffect' element ={<UseEffect/>}/>
    <Route path='hook/useref' element ={<UseRef/>}/>
    <Route path='/hook/usememo' element ={<UseMemo/>}/>
    <Route path='/hook/usecontext' element={<UseContext/>}/> 
    <Route path='*' element ={<NoPage/>}/>
    </Routes>
    </main>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

