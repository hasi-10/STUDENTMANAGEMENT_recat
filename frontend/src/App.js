import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';  
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>  {/* Changed from Router to BrowserRouter */}
      <div>
        <Header/>
        
        <Routes> 
          <Route path="/" element={<AllStudent />} />

          <Route path="/add" element={<AddStudent />} />  {/* Changed syntax */}
        </Routes>
      </div>   
    </BrowserRouter>
  );
}

export default App;