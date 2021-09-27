import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';
import Protected from './Protected';
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Header />
          <h1>E-Commerce Dashboard</h1>
          <Route path="/login"></Route>
          <button>Simple HTML Button</button>
          <Button>Bootstrap Button</Button>
          <Button>Bootstrap Button 2</Button>*/}
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/add">
            <Protected Cmp={AddProducts} />
            {/*<AddProducts />*/}
          </Route>

          <Route path="/update/:id">
            <Protected Cmp={UpdateProducts} />
            {/*<UpdateProducts />*/}
          </Route> 

          <Route path="/search">
            <Protected Cmp={SearchProduct} />
            {/*<SearchProducts />*/}
          </Route>
          
          <Route path="/">
            <Protected Cmp={ProductList} />
            {/*<ProductList />*/}
          </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
