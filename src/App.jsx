import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <>
    <div className="universe">
         <div className="stars"></div>
      </div>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path='/menu' element={<MenuPage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
