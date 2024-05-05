import {BrowserRouter,Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile';


export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/profile' element={<Profile />} />
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/signin" element={<SignIn />}></Route>
  </Routes>
  </BrowserRouter>
}