import LandingPage from './pages/landingpage/LandingPage.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import IndiviualPage from './pages/register/indiviual/IndiviualPage';
import CompanyPage from './pages/register/company/CompanyPage';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import SubPage from './pages/Dashboard/Subscription/SubPage.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/signup'>
          <Route path='/signup/individual' element={<IndiviualPage />}></Route>
          <Route path='/signup/company' element={<CompanyPage />}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/sub' element={<SubPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
