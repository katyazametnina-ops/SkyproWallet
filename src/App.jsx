import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Analytics from "./components/Analytics/Analytics";

function App() {
  const [currentPage, setCurrentPage] = useState("expenses");

  return (
    <>
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === "expenses" && <Main />}
      {currentPage === "analytics" && <Analytics />}
      {currentPage === "login" && <Login onNavigate={setCurrentPage} />}
      {currentPage === "register" && <Register onNavigate={setCurrentPage} />}
    </>
  );
}

export default App;
