import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
