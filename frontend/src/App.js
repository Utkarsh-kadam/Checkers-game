
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Auth from './components/authentication/Auth';
import Registration from './components/authentication/RegistrationComp';
import Game from './components/game/Game';
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
