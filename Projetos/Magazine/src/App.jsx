import Header from "./components/header"
import Home from "./pages/homePage/Home"
import Checkout from "./pages/checkoutPage/Checkout"

import PurchaseHistory from "./pages/purchaseHistory/PurchaseHistory"
import CartContextProvaider, { CartContext } from "./context/CartContext"

import { Routes, Route } from "react-router-dom"
import { useState } from "react"


function App() {
  return (
    <CartContextProvaider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/history" element={<PurchaseHistory />} />
        </Routes>
      </>
    </CartContextProvaider>
  )
}

export default App
