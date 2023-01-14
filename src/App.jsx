import { useState } from 'react'
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
import { MovieList } from './components/MovieList/MovieList';
import {Header} from './components/Header/Header';
import Login from './components/Login/Login';
import {About} from './containers/About/About';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Register from './components/Register/Register';
import UserProfile from './components/UserProfile/UserProfile';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/administratorPanel' element={<AdminPanel />} />
          <Route path='/register' element={<Register />} />
          <Route path='/userProfile' element={<UserProfile />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
  
}

export default App
