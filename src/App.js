import  React from 'react';
import  { Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Product from './Container/Product/Product';
import Blog_list from './Container/Blog_list/Blog_list';
import Contant from './Container/Contant/Contant';


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
      
    </Switch>

    <Footer />

    </>
  );
}

export default App;
