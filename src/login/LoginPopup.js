import React, { useState } from "react";

const LoginPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log("Logged in with username:", username);
    console.log("Logged in with password:", password);
    // Reset the form
    setUsername("");
    setPassword("");
    // Close the popup
    togglePopup();
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Login Popup</button>

      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <form>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPopup;
