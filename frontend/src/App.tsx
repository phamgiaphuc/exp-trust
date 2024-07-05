import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import IndiviualPage from './pages/register/indiviual/IndiviualPage';
import CompanyPage from './pages/register/company/CompanyPage';
import Dashboard from './pages/dashboard/Dashboard.tsx';
import SubPage from './pages/dashboard/Subscription/SubPage.tsx';
import HomePage from './pages/home/HomePage.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup'>
          <Route path='/signup/individual' element={<IndiviualPage />} />
          <Route path='/signup/company' element={<CompanyPage />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/sub' element={<SubPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
