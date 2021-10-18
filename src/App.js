import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Authentication/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About Us/About';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

function App() {
  return (
     <Router>
       <Header />
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/home">
           <Home />
         </Route>
         <Route path="/appoinment">
           <Appoinment />
         </Route>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/service/:id">
           <ServiceDetails />
         </Route>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="*">
           <NotFound />
         </Route>
       </Switch>
     </Router>
  );
}

export default App;
