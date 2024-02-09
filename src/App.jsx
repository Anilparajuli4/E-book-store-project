import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

import Order from './pages/Order/Order'
import Cart from './pages/Cart/Cart'
import DashBoard from './pages/admin/dashboard/DashBoard'
import NoPage from './pages/noPage/NoPage'
import MyState from './context/data/MyState'
import Home from './pages/home/Home'
import ProductInfo from './pages/productInfo/ProductInfo'
import AddProduct from './pages/admin/pages/AddProduct'
import UpdateProduct from './pages/admin/pages/UpdateProduct'

function App() {
  return (
    <MyState>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/*' element={<NoPage/>} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path='/addProduct' element={<AddProduct/>} />
        <Route path='/updateProduct' element={<UpdateProduct/>} />
      </Routes>
    </Router>
    </MyState>
  )
}

export default App