
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Auth from './components/Auth';
import Registration from './components/RegistrationComp';
import Game from './components/game';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Auth/>} />
                    <Route path="/register" element={<Registration/>} />
                    <Route path="/game" element={<Game/>} />


                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
