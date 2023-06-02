import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import { createContext, useState } from "react";
import Home from "./pages/HomePage/HomePage";
import Navbar from "./components/NavbarComponent/NavbarComponent";
import Categories from "./pages/CategoriesPages/CategoriesPage";
import Breeds from "./pages/BreedsPage/BreedsPage";

export const userContext = createContext(null);
function App() {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/categories" element={<Categories />} />
          <Route path="/breeds" element={<Breeds />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
