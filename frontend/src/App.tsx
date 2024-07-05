import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import IndiviualPage from './pages/register/indiviual/IndiviualPage';
import CompanyPage from './pages/register/company/CompanyPage';
import DashboardLayout from './pages/dashboard/Layout.tsx';
import SubPage from './pages/dashboard/subscription/SubPage.tsx';
import HomePage from './pages/home/HomePage.tsx';
import LinkedInPage from './pages/dashboard/linkedin/LinkedInPage.tsx';
import ProfilePage from './pages/dashboard/profile/ProfilePage.tsx';
import SettingsPage from './pages/dashboard/settings/SettingsPage.tsx';
import DashboardPage from './pages/dashboard/DashboardPage.tsx';

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
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='/dashboard/sub' element={<SubPage />} />
          <Route path='/dashboard/linkedin' element={<LinkedInPage />} />
          <Route path='/dashboard/profile' element={<ProfilePage />} />
          <Route path='/dashboard/settings' element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
