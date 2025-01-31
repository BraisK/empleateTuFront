import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import UserList from './pages/UserList'
import Navbar from './components/Navbar'
import Offerts from './pages/Offerts'
import Categories from './pages/Category'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='container mx-auto px-8 py-30'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/userList' element={<UserList/>}/>
          <Route path='/userList' element={<UserList/>}/>
          <Route path='/offerts' element={<Offerts/>}/>
          <Route path='/categories' element={<Categories/>}/>
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
