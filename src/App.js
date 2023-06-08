import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
