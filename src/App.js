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
import Footer from './Pages/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
     <AuthProvider>
     <Router>
       <Header />
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/home">
           <Home />
         </Route>
         <PrivateRoute path="/appoinment">
           <Appoinment />
         </PrivateRoute>
         <PrivateRoute path="/about">
           <About />
         </PrivateRoute>
         <PrivateRoute path="/service/:id">
           <ServiceDetails />
         </PrivateRoute>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="*">
           <NotFound />
         </Route>
       </Switch>
       <Footer />
     </Router>
     </AuthProvider>
  );
}

export default App;
