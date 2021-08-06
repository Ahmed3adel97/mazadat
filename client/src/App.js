// import './App.css';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
