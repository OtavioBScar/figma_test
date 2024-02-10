import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';

function AppRoutes() {
  return (
    <BrowserRouter>
    <div class="mainFrame">
    <Navbar />
    <Routes>
    <Route path='/' element={<Landing />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
