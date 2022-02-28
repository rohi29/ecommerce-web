import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Redirect, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Products from "./components/Products";
import { DataProvider } from "./components/DataProvider";
import Details from "./components/Details/Details";
import Cart from "./components/Cart";
import Register from "./components/Signup/Register";
import Error from "./components/Error";

function App() {

  const [search, setSearch] = useState("");

  return (
    <DataProvider>
      <>
        <Routes>
          <Route exact path="/error404" element={<Error/>} />
          <Route exact path="/header" element={<Header setSearch={setSearch} />}>

              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={() => <Products search={search} />} />
              <Route exact path="/products/:id" element={<Details />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/register" element={<Register />} />
              <Redirect to="/error404" />
              <Products />
           
            
            
          </Route>
        </Routes>
      </>
    </DataProvider>
  );
}

export default App;
