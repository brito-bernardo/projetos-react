import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Include from './pages/Include'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element ={<Home/>}/>
          <Route path='/profile' exact element ={<Profile/>}/>
          <Route path='/post' exact element ={<Post/>}/>
          <Route path='/include' exact element ={<Include/>}/>

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
