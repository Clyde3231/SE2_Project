import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MedsList from "./components/MedsList";
import MedsDetails from "./components/MedsDetails";
import MedsForm from "./components/MedsForm";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
import Register from "./components/pages/Register";
import SignIn from "./components/pages/SignIn";
import Aboutus from "./components/pages/Aboutus";
import ContactUs from "./components/pages/Contactus";
import Ikaw from "./components/ikaw";
import AboutusAdmin from "./components/pages/AboutusAdmin";
import NavBarAdmin from "./components/NavBarAdmin";
import ContactUsAdmin from "./components/pages/ContactusAdmin";
import HomeAdmin from "./components/pages/HomeAdmin";
import FindBook from "./components/pages/FindBook";
import AuthorWorks from "./components/pages/AuthorWorks";
import BookDetails from "./components/pages/BookDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <NavBarAdmin /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/medlist" element={<MedsList />} />
          <Route path="/meds/:id" element={<MedsDetails />} />
          <Route path="/add" element={<MedsForm />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/findbook" element={<FindBook />} />
          <Route exact path="/Admin" element={<Ikaw/>}/>
          <Route exact path="/aboutusAdmin" element={<AboutusAdmin />} />
          <Route exact path="/contactusAdmin" element={<ContactUsAdmin />} />
          <Route exact path="/homeAdmin" element={<HomeAdmin />} />
          <Route path="/book/works/:key" element={<BookDetails />} />
          <Route path="/author/:key" element={<AuthorWorks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
