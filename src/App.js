import logo from './logo.svg';
import './App.css';
import Movi from './components/Movi';
import Mread from './components/Mread';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/Mread' element={<Mread></Mread>}></Route>
      <Route path='/movies' element={<Mread></Mread>}></Route>
      <Route path='/Movi' element={<Movi data= {{movie:"",director:"",language:"",genre:"",releaseyear:""}} method="post"/>}></Route>
        </Routes>
        </BrowserRouter> 
    </div> 
  );
}

export default App;
