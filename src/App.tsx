import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

function App() {

  const currentUser = useContext(AuthContext);

  return (
    <>
      {
        console.log(currentUser)

      }
      <main className="font-mono">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={currentUser ? <h1>You are signed in!</h1> : <h1> You are NOT signed in</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
