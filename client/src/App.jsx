import {BrowserRouter,Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile';
import CreateListing from './pages/CreateListing';
import Search from './pages/Search';
import Userlisting from './pages/Userlisting';
import UpdateListing from './pages/UpdateListing';


export default function App() {
  return (
  
  <BrowserRouter>
  <Header />
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/profiles' element={<Profile />} />
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/signin" element={<SignIn />}></Route>
    <Route path='/createlisting' element={<CreateListing />} />
    <Route path='/search' element={<Search />} />
    <Route path='/userlisting' element={<Userlisting />} />
    <Route path='/UpdateListing/:_id' element={<UpdateListing />} />
  </Routes>
  </BrowserRouter>
  
  )
}