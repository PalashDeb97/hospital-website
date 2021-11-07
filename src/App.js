import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServicesCard from './components/ServicesCard/ServicesCard';
import Servicess from './components/Servicess/Servicess';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route exact path="/servicess">
                <Servicess/>
              </Route>
              <PrivateRoute exact path="/servicess/:id">
                <ServicesCard/>
              </PrivateRoute>
              <Route exact path="/doctors">
                <Doctors/>
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
              <Route exact path="/login">
                <LogIn/>
              </Route>
              <Route exact path="/register">
                <Register/>
              </Route>
              <Route exact path="*">
                <PageNotFound/>
              </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
