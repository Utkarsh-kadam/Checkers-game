
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Auth from './components/authentication/Auth';
import Registration from './components/authentication/RegistrationComp';
import GApp from './components/game/GApp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Auth/>} />
                    <Route path="/register" element={<Registration/>} />
                    <Route path="/game" element={<GApp/>} />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
