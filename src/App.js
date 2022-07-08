import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";

function App() {
  const adminUser = {
    CountryID: "10002000",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", CountryId: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout")
  }

  return (
    <div className="App">
      {(user.CountryId != "") ? (
        <div className = "Welcome">
          <h2>Welcome, <span>(user.name)</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm  Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
