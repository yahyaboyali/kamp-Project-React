import './App.css';
import  Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navi />
      <Dashboard />
    </div>
  );
}

export default App;
