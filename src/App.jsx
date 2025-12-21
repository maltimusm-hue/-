import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './pages/Home/home';
import Favorites from './pages/favorites/favorites';
import Filter from './pages/filter/filter';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;