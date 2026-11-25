import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Analytics from "./components/Analytics/Analytics";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [currentPage, setCurrentPage] = useState(token ? "expenses" : "login");

  const handleAuthSuccess = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setCurrentPage("expenses");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentPage("login");
  };

  return (
    <>
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />

      {currentPage === "expenses" && <Main token={token} />}
      {currentPage === "analytics" && <Analytics token={token} />}
      {currentPage === "login" && (
        <Login onNavigate={setCurrentPage} onAuthSuccess={handleAuthSuccess} />
      )}
      {currentPage === "register" && (
        <Register
          onNavigate={setCurrentPage}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}

export default App;
