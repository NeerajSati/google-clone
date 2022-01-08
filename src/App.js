import './App.css';
import Mainpage from './components/Mainpage/Mainpage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Searchpage from './components/Searchpage/Searchpage';
import Imagespage from './components/Imagespage/Imagespage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/:id/all" element={<Searchpage/>}/>
    <Route path="/:id/images" element={<Imagespage/>}/>
    <Route path="/" element={<Mainpage/>}>
    </Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
