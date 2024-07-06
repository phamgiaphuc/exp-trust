import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import IndiviualPage from './pages/register/indiviual/IndiviualPage';
import CompanyPage from './pages/register/company/CompanyPage';
import HomePage from './pages/home/HomePage';
import DashboardLayout from './pages/Dashboard/Layout';
import SubPage from './pages/Dashboard/Subscription/SubPage';
import LinkedInPage from './pages/Dashboard/linkedin/LinkedInPage';
import ProfilePage from './pages/Dashboard/profile/ProfilePage';
import SettingsPage from './pages/Dashboard/settings/SettingsPage';
import UserDashboard from './pages/Dashboard/user/UserDashboard';

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
          <Route index element={<UserDashboard />} />
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
