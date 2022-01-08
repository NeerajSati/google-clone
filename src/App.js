import './App.css';
import Mainpage from './components/Mainpage/Mainpage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Searchpage from './components/Searchpage/Searchpage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/:id/all" element={<Searchpage/>}/>
    <Route path="/" element={<Mainpage/>}>
    </Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
