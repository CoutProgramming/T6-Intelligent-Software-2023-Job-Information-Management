import './App.scss';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from '../components/HomePage/Home';
import Cart from '../components/Cart/Cart'
import Product from '../components/Product/Product'
import { ToastContainer } from "react-toastify";
import { useSelector } from 'react-redux';


function App() {
  const dataRedux = useSelector(state => state.category.category_Current);
  console.log('CHECK REDUX: ', dataRedux);
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
