import Topbar from './Components/topbar/Topbar'
import Sidebar from './Components/sidebar/Sidebar'
import Home from './Pages/home/Home'
import './app.css'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './Pages/users/UserList'
import OrderList from './Pages/orders/OrderList'
import OrderBuy from  './Pages/buy/OrderBuy'
import OrderSwap from './Pages/swap/OrderSwap';
import OrderSell from  './Pages/sell/OrderSell'
import OrderSend from  './Pages/send/OrderSend'



function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route  exact path="/">
          <Home/>
          </Route>
          <Route path="/users">
          <UserList/>
          </Route>
          <Route path="/orders">
          <OrderList/>
          </Route>
          <Route path="/buy">
          <OrderBuy/>
          </Route>
          <Route path="/swap">
          <OrderSwap/>
          </Route>
          <Route path="/sell">
          <OrderSell/>
          </Route>
          <Route path="/send">
          <OrderSend/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
