import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BookNow from "./pages/BookNow";
import ServicesPage from "./pages/ServicesPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import NavBar from "./NavBar";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="page-body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:product" component={ProductPage} />
          <Route
            path="/book-now"
            component={() => {
              window.location.href =
                "https://app.acuityscheduling.com/schedule.php?owner=19461210";
              return null;
            }}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
