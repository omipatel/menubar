import './App.css';
import Home from './Components/Home';
import Woman from './Components/Woman';
import Man from './Components/Man';
import Kids from './Components/Kids';
import Teams from './Components/Teams';
import Blogs from './Components/Blogs';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return ( 
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path='/' Component={Home} exact /> 
        <Route path='/Woman' Component={Woman} exact /> 
        <Route path='/man' Component={Man} exact /> 
        <Route path='/kids' Component={Kids} exact/> 
        <Route path='/team' Component={Teams} /> 
        <Route path='/blogs' Component={Blogs} exact /> 
        <Route path='/sign-up' Component={SignUp} exact /> 
        <Route path='/sign-in' Component={Login} exact /> 
       
      </Routes> 
    </Router> 
  ); 
} 

export default App;
