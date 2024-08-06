import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Signin from './pages/SignIn'
function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/sign-up' element ={<SignUp/>} />
        <Route path='/sign-in' element ={<Signin/>} />
        <Route path='/dashbord' element ={<Dashboard/>} />
        <Route path='/projects' element ={<Projects/>} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
