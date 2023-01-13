import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import { CharactersList } from './containers/CharactersList/CharactersList';
import { CharacterDetail } from './containers/CharacterDetail/CharacterDetail';
import {Header} from './components/Header/Header';
import Login from './components/Login/Login';
import {About} from './containers/About/About';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Register from './components/Register/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/administratorPanel' element={<AdminPanel />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
  
}

export default App
