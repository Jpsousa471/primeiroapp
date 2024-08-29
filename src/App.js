import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Contato from './Pages/Contatos/Contato';
import Fotos from './Pages/Fotos/Fotos';
import Comentarios from './Pages/Comentarios/Cometarios';


function App() {


  return (
   <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/Contato' element={< Contato/>} />
        <Route path='/Fotos' element={< Fotos/>} />
        <Route path='/Comentarios' element={<Comentarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
