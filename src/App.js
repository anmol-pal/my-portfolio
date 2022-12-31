import { NavBar } from './component/NavBar';
import { Banner } from './component/Banner';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;
