import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import LandingPage from './pages/Landing'

function App() {
      return <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/share/:shareId' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
}

export default App
