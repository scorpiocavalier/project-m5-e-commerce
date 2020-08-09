import React from "react";
// import companies from "./companies";
import Shop from "./Shop";
import { BrowserRouter, Route } from "react-router-dom";

//components
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage";
import Header from "./Pages/HomePage/Header";
import Sidebar from "./Pages/HomePage/Sidebar";
import Footer from "./Pages/HomePage/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <Sidebar />

        <main className="main">
          <div className="content">
            <Route path="/products">
              <Shop />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/product/:id" component={ProductPage}>
              {/* <ProductPage /> */}
            </Route>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
