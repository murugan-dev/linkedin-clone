import './App.css';
import Signin from './component/Signin';
import Home from "./component/Home"
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>

      <Route path='/' element={<Signin />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
    // 
    // 
  );
}

export default App;
