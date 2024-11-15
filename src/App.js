import React from 'react';
import './styles/App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Challenges from './components/Challenges';
import ClimateData from './components/ClimateData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/climate" element={<ClimateData/>} />
          <Route path="/challenges" element={<Challenges />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
