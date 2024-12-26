import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Blog from './pages/Blog';
import SingleBlogPost from './pages/SingleBlogPost';
import ProductDetail from './pages/ProductDetail';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import ForgotPassword from './pages/ForgotPassword';
import Wishlist from './pages/Wishlist';
import Productdetailswishlist from './components/Productdetailswishlist';
// import Equipemwnts from './components/Equipemwnts';
// import Trainersection from './components/Trainersection';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Productdetailswishlist />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlogPost />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
