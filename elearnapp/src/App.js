
import './App.css';
import {
  Routes,Route,Switch
 } from "react-router-dom";
import InitialiseModule from './Components/InitialiseModule';
import PageRouting from './Components/PageRouting';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<InitialiseModule></InitialiseModule>}></Route>
      <Route path="/pagerouting/:pageId" element={<PageRouting></PageRouting>}></Route>
      
       
    </Routes>
    
    </div>
  );
}

export default App;
