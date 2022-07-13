import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Box, Flex, Center, Heading } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '../src/pages/Landing';
import Gameresults from '../src/pages/Gameresults';
import Playgame from '../src/pages/Playgame';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/playgame' element={<Playgame />} />
        <Route path='/gameresults' element={<Gameresults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
