import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import SignUp from './pages/signup/SignUp';
import Products from './pages/products/Products';
import Services from './pages/services/Services';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={Home()}/>
          <Route path="/services" element={Services()}/>
          <Route path="/products" element={Products()}/>
          <Route path="/sign-up" element={SignUp()}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
