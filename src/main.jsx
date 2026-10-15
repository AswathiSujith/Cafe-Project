import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './Home.jsx'
import About from './About.jsx'
import Menu from './Menu.jsx'
import Contact from './Contact.jsx'

import { BrowserRouter,Route,Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
</StrictMode>,
)

       

