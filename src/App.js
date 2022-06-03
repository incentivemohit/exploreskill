import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductListBeforeLogin";
import About from "./components/About/About";
import SuperWomen from "./components/SuperWomen/SuperWomen";
import Payment from "./components/Payment/Payment";
import PaymentStatus from "./components/Payment/PaymentStatus/PaymentStatus";
import Member from "./components/Member/Member";
import ThankYou from "./components/Member/ThankYou";
import Donate from "./components/Donate/Donate";
import { UserContextProvider } from "./components/Context/UserAuthContext";
import Dash from "./components/Home/Dash";
import Admin from "./components/Admin/Admin";
import NewPost from "./components/NewPost/NewPost";
import AdminPanelPost from "./components/AdminPanelPost/AdminPanelPost";
import Feedback from "react-bootstrap/esm/Feedback";
import DonateStatus from "./components/Donate/DonateStatus";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProductListBeforeLogin from "./components/ProductList/ProductListBeforeLogin";
import ProductListAfterLogin from "./components/ProductList/ProductListAfterLogin";
import AboutAfterLogin from "./components/About/AboutAfterLogin";
import SuperWomenAfterLogin from "./components/SuperWomen/SuperWomenAfterLogin";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/adminpanelpost" element={<AdminPanelPost />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/admin" element={<Admin />} />
            <Route
              path="/donatestatus"
              element={
                <ProtectedRoutes>
                  <DonateStatus />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/dashboard/donate"
              element={
                <ProtectedRoutes>
                  <Donate />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/dashboard/thankyou"
              element={
                <ProtectedRoutes>
                  <ThankYou />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/dashboard/membership"
              element={
                <ProtectedRoutes>
                  <Member />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/dashboard/payment"
              element={
                <ProtectedRoutes>
                  <Payment />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/dashboard/paymentstatus"
              element={
                <ProtectedRoutes>
                  <PaymentStatus />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/dashboard/about"
              element={
                <ProtectedRoutes>
                  <AboutAfterLogin />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/dashboard/superwomen"
              element={<SuperWomenAfterLogin />}
            />

            <Route
              path="/dashboard/products"
              element={
                <ProtectedRoutes>
                  <ProductListAfterLogin />
                </ProtectedRoutes>
              }
            />

            <Route
              exact
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dash />
                </ProtectedRoutes>
              }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductListBeforeLogin />} />
            <Route path="/superwomen" element={<SuperWomen />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
