
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AdminLogin from './component/adminLogin';
import UserLogin from './component/userLogin';
import AdminPortal from './component/adminPortal'
import LandingPage from './component/landingPage'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin-login' element={<AdminLogin/>}  /> 
        <Route path='/user-login' element={<UserLogin/>}/>
        <Route path='/admin/*' element={<AdminPortal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
