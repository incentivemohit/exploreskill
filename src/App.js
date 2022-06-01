import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
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

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
            {/* <Route path="/feedback" element={<Feedback />} />
            <Route path="/adminpanel" element={<AdminPanelPost />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/admin" element={<Admin />} /> */}
            <Route path="/donatestatus" element={<DonateStatus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/superwomen" element={<SuperWomen />} />
            <Route path="/membership" element={<Member />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/paymentstatus" element={<PaymentStatus />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
