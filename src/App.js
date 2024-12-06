
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Category from './components/Category/Category';
import Products from './components/Products/Products';
import Categoryview from './components/Category/Categoryview';
import Productview from './components/Products/Productview';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ={'/'} element={<Login method='POST'/>}></Route>
        <Route path={'/home'} element={<Home/>}></Route>
        <Route path={'/category'} element={<Category/>}></Route>
        <Route path={'/product'} element={<Products/>}></Route>
        <Route path={'/Categoryview'} element={<Categoryview/>}></Route>
        <Route path={'/Productview'} element={<Productview method='GET'/>}></Route>
        
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
