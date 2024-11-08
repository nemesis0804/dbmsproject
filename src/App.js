import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Campuses from './Components/Campuses/Campuses';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Campuses/>
    </div>
  );
}

export default App;
