import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { IntlProvider } from 'rsuite';
import ruRU from 'rsuite/lib/IntlProvider/locales/ru_RU';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';
import Main from './Components/Main'
import 'rsuite/lib/styles/index.less';
import "./styles.less"
import Login from "./Components/Auth/Login";
import Admin from "./Components/Admin";
import ProductPage from "./Components/ProductPage";
import CartPage from "./Components/CartPage"
class App extends Component{
    formatDate(data, formatStr) {
        return format(data, formatStr, { locale: ru });
    }
   render() {

       return (
           <IntlProvider locale={ruRU} formatDate={this.formatDate}>
               <div className="App">
                   <Router>
                       <Switch>
                           <Route path ="/" exact component={Main}/>
                           <Route path ="/login"  component={Login}/>
                           <Route path ="/admin"   component={Admin}/>
                           <Route path ="/product/:id"  component={ProductPage}/>
                           <Route path ="/cart"  component={CartPage}/>

                       </Switch>F
                   </Router>
               </div>
           </IntlProvider>
       );
   }
}

export default App;
