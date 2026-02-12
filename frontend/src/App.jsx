import { Routes, Route, Outlet } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Products from "./components/Products";
import Store from "./components/Store";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import UpdateProfile from "./components/Dashboard/UpdateProfile";
import ProductCreate from "./components/Dashboard/ProductCreate";
import Navbar from "./components/Navbar";
import MyProducts from "./components/Dashboard/MyProducts";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/store" element={<Store />} />

        {/* Auth Routes */}
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/user/reset-password" element={<ResetPassword />} />

        {/* Dashboard Nested Routes */}
        <Route path="/dashboard" element={<Outlet />}>
          <Route index element={<Dashboard />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="create-product" element={<ProductCreate />} />
          <Route path="my-products" element={<MyProducts />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
