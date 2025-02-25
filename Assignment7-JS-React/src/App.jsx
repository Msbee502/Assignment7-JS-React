import Gallery from './pages/gallery.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';


function App () {
  return (
    <div>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Gallery />} />
      </Routes>
      </BrowserRouter>

      {/*... */}
    </div>
  );
}

export default App;