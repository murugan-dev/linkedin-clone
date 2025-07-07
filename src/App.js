import './App.css';
import Signin from './component/Signin';
import Home from "./component/Home"
import Connections from './component/Connections';
import { Routes, Route } from 'react-router-dom';
import Invitations from './component/Invitations';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Signin />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/connections' element={<Connections />}/>
      <Route path='/invitations' element={<Invitations />}/>
    </Routes>
  );
}

export default App;
