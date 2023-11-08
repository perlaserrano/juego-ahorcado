
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Portada from './components/Portada';
import Juego from './components/Juego';
import Ganado from './components/Ganado';
import Final from './components/Final';
import Provider from './contex/Provider';

function App() {
  return (
    <Provider>

    <Routes >
      <Route path='/' element={<Portada/>}/>
      <Route path='juego/' element={<Juego/>}/>
      <Route path='final/' element={<Final/>}/>
      <Route path='ganado/' element={<Ganado/>}/>
     
    </Routes>

    </Provider>
  );
}

export default App;
