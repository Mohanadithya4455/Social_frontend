import logo from './logo.svg';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './HomeRelated/Homepage';
import Login from './pages/Authentication/Login';
import Registration from './pages/Authentication/Registration';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetProfileProcess } from './reducers/auth.actions';
import Logout from './components/Logout';
import Profile from './Profile/Profile';

function App() {
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');
 // console.log("its me",jwt+'adithya')
  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store)
  useEffect(()=>{
   dispatch(GetProfileProcess(jwt))
   console.log(auth.user)
  },[jwt])
  return (
    <div>
      <Routes>
        <Route path='/*' element={(auth.user)?<Homepage/>:<Authentication/>}/>
       
         <Route path = "/logout" element={<Logout/>}/>
      
      </Routes>
      
    </div>
  );
}

export default App;
