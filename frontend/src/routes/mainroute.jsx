import { Routes, Route, Outlet } from "react-router-dom";
import Products from "../components/Products";
import Store from "../components/Store";
import ForgotPassword from "../components/Auth/ForgotPassword";
import Home from "../components/users/Home";
import Login from "../components/Auth/Login";
import Navbar from "../components/Users/Navbar";
import ProductCreate from "../components/ProductCreate";
import Register from "../components/Auth/Register";
import UpdateProfile from "../components/UpdateProfile";
import Order from "../components/Users/Order";
import UpdateProduct from "../components/UpdateProduct";
import Dashboard from "../components/Dashboard/Dashboard";
import ResetPassword from "../components/Auth/ResetPassword";
import MyProducts from "../components/Dashboard/MyProducts";

const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/store" element={<Store />} />
        <Route path="/order/:id/:price" element={<Order />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/reset-password" element={<ResetPassword />} />

        {/* Dashboard Nested Routes */}
        <Route path="/dashboard" element={<Outlet />}>
          <Route index element={<Dashboard />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="create-product" element={<ProductCreate />} />
          <Route path="my-products" element={<MyProducts />} />
          <Route path="update-product/:id" element={<UpdateProduct />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
