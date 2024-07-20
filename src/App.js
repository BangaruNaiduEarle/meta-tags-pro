import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/home';
import Header from './components/header';
import Team from './pages/team';
import Testmonials from './pages/testmonials';
function App() {
  return (
    <>
    
    <Router>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/testmonials' element={<Testmonials />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
