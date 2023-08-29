import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import Main from "./pages/Main";

function App() {

  const currentUser = useContext(AuthContext);

  return (
    <>
      <main className="font-mono">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={currentUser ? <Main /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
