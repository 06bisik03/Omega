
import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './files/Home';
import Intro from './files/Intro';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Intro/>} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
