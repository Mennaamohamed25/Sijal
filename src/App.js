import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import AboutUs from './Component/ContactUs';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <main className="">
        {' '}
        {/* Adjust padding as needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
