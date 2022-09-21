import  React from 'react';
import  { Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Product from './Container/Product/Product';
import Blog_list from './Container/Blog_list/Blog_list';
import Contant from './Container/Contant/Contant';
import Login from './Container/Login/Login';
import Auth from './Container/Auth/Auth';
import Appointment from './Container/Appointment/Appointment';
import BookAppointment from './Container/Appointment/BookAppointment';
import ListAppointment from './Container/Appointment/ListAppointment';
import Registar from './Container/Register/Register';
import List from './Component/List/List';


function App() {
  return (
    <>
    
    <Header />

    <Switch>

      <Route path={"/"} exact component={Home} />
      <Route path={"/About"} exact component={About} />
      <Route path={"/product"} exact component={Product} />
      <Route path={"/blog"} exact component={Blog_list} />
      <Route path={"/contact"} exact component={Contant} />
      <Route path={"/login"} exact component={Login} />
      <Route path={"/auth"} exact component={Auth} />
      <Route path={"/appointment"} exact component={Appointment} />
      <Route path={"/bookappointment"} exact component={BookAppointment} />
      <Route path={"/listappointment"} exact component={ListAppointment} />
      <Route path={"/register"} exact component={Registar} />
      <Route path={"/list"} exact component={List} />
      
    </Switch>

    <Footer />

    </>
  );
}

export default App;
