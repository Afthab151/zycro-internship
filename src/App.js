import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoard from './Components/DashBoard/DashBoard';
import Login from './Components/Login/Login';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import UserPage from './Components/UserPage/UserPage';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
