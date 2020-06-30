import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import './components/layouts/Navbar.css';
import './components/layouts/Footer.css';
// React Router Import
import { Switch, Route } from 'react-router-dom';
//Import Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Programs from "./components/pages/Programs";
import Resources from "./components/pages/Resources";
import Contact from './components/pages/Contact';
import PageNotFound from './components/pages/PageNotFound';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Layout from './components/layouts/Layout';
import './components/pages/Pages.css';
import Banner  from './components/layouts/Banner';

function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Layout>
        <Switch>
        <Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/programs' component={Programs} />
					<Route path='/resources' component={Resources} />
					<Route path='/contact' component={Contact} />
					<Route path='/login' component={Login} />
					<Route path='/signup' component={Signup} />
					<Route component={PageNotFound} />
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
