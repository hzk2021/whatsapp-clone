import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { ReactElement, useContext } from "react";
import Main from "./pages/Main";

function App() {

  const currentUser = useContext(AuthContext);

  function ProtectedRoute({ children }: { children: JSX.Element | JSX.Element[] | ReactElement | ReactElement[] | string }) {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return (
      <>
        {children}
      </>)

  }


  return (
    <>
      {
        console.log(currentUser)

      }
      <main className="font-mono">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Main /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
