import './App.css';
import Mainpage from './components/Mainpage/Mainpage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Searchpage from './components/Searchpage/Searchpage';
import Imagespage from './components/Imagespage/Imagespage';
import Newspage from './components/Newspage/Newspage';
import Videospage from './components/Videospage/Videospage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/:id/all" element={<Searchpage/>}/>
    <Route path="/:id/images" element={<Imagespage/>}/>
    <Route path="/:id/videos" element={<Videospage/>}/>
    <Route path="/:id/news" element={<Newspage/>}/>
    <Route path="/" element={<Mainpage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
