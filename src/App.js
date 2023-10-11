import './App.css';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="loading">
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
    </Suspense>
  );
}

export default App;
