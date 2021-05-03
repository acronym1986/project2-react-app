//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddSearch from './pages/AddSearch';
import Vaccines from './pages/Vaccines';
import About from './pages/About';
import Nav from './components/Nav';
import Cases from './pages/Cases';
import Login from './pages/Login';
import Definition from './pages/Definition';

 



function App() {
  
  
  return (
    <div className="App">

       <Router>
          <h1>Search Covid Cases</h1>
          
          <Nav/> 
          <Route  exact path = '/AddSearch' component = {AddSearch}/>
          <Route  exact path = '/About' component = {About}/>
          <Route  exact path = '/Vaccines' component = {Vaccines}/>
          <Route  exact path = '/Cases' component = {Cases}/>
          <Route  exact path = '/Login' component = {Login}/>
          <Route  exact path = '/Definition' component = {Definition}/>
       </Router>
          
       

    </div>
  );
}

export default App;
