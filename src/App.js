import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes,  } from 'react-router-dom';
import SearchMovie from './components/SearchMovie';
import MovieInfoComp from './components/MovieInfoComp';
function App() {    

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/movie/:id" element = {<MovieInfoComp/>}></Route>
        <Route path='/' element ={<SearchMovie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
