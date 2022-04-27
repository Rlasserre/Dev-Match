import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Main from './Pages/Main';
import SignIn from './Pages/Sign-in';
import SignUp from './Pages/Sign-up';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;