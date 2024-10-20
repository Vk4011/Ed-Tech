import { useState } from "react";
import Router from "./routes/Router";
import Main from "./pages/Main";

function App() {
  // State to manage authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? <Main /> : <Router onLogin={handleLogin} />}
      
    </>
  );
}

export default App;
