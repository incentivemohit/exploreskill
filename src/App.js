import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import SuperWomen from "./components/SuperWomen/SuperWomen";
import Payment from "./components/Payment/Payment";
import PaymentStatus from "./components/Payment/PaymentStatus/PaymentStatus";
import Member from "./components/Member/Member";
import ThankYou from "./components/Member/ThankYou";
import Donate from "./components/Donate/Donate";
import { UserContextProvider } from "./components/Context/UserAuthContext";
import Admin from "./components/Admin/Admin";
import NewPost from "./components/NewPost/NewPost";
import AdminPanelPost from "./components/AdminPanelPost/AdminPanelPost";
import DonateStatus from "./components/Donate/DonateStatus";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/Contact/Contact";
import Bill from "./components/Bill/Bill";
import AdminLogin from "./components/Member/AdminLogin";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/superwomen" element={<SuperWomen />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/bill" element={<Bill />} />
            <Route
              path="/adminpanelpost"
              element={
                <ProtectedRoutes>
                  <AdminPanelPost />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/adminpanel"
              element={
                <ProtectedRoutes>
                  <AdminPanel />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/newpost"
              element={
                <ProtectedRoutes>
                  <NewPost />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoutes>
                  <Admin />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/donatestatus"
              element={
                <ProtectedRoutes>
                  <DonateStatus />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/donate"
              element={
                <ProtectedRoutes>
                  <Donate />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/thankyou"
              element={
                <ProtectedRoutes>
                  <ThankYou />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/membership"
              element={
                <ProtectedRoutes>
                  <Member />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/payment"
              element={
                <ProtectedRoutes>
                  <Payment />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/paymentstatus"
              element={
                <ProtectedRoutes>
                  <PaymentStatus />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
