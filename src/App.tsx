import { useEffect } from 'react';
import './App.css'
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

function ReRouter() {
  const navigate = useNavigate();
  useEffect(() => {

    navigate('/', { replace: true });
  }, [])

  return null;
}

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<ReRouter />} />
      </Routes>
    </Router>


  )
}

export default App
