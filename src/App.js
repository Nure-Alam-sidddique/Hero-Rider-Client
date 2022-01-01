import InitializationAuthentication from './Firebase/firebase.init';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './Components/Home/Home/Home'
import Header from './Components/Header/Header';
import Login from './Components/RegisterLogin/Login';
import Register from './Components/RegisterLogin/Register';
InitializationAuthentication();
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
         <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
