import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
