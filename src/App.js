import logo from './logo.svg';
import './App.css';
import Navbar from './conponent/Navbar';
import { AuthProvider } from './context/AuthContext';
import Data from './conponent/Data';
function App() {

  return (
    <div className="App">
      <AuthProvider>
     <Navbar/>
     <Data />
      </AuthProvider>
    </div>
  );
}

export default App;
