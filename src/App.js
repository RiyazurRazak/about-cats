import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import { createContext, useState } from "react";
import Home from "./pages/HomePage/HomePage";
import Navbar from "./components/NavbarComponent/NavbarComponent";

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
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
