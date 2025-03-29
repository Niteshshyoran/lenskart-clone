import { useState } from "react";
import "./SignUp.css";

const Signup = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(true); // true -> SignUp, false -> SignIn
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [popupMessage, setPopupMessage] = useState(""); // For success messages

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = isSignUp
      ? "https://lenskart-clone-q2tq.onrender.com/users/signup"
      : "https://lenskart-clone-q2tq.onrender.com/users/login"; // Different API endpoints

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (res.ok) {
        setPopupMessage(data.message || (isSignUp ? "Signup Successful! 🎉" : "Login Successful! ✅"));
        setUserData({ name: "", email: "", pass: "" });
  
        // Hide the popup after 3 seconds
        setTimeout(() => {
          setPopupMessage("");
          if (isSignUp) setIsSignUp(false); // Switch to login after signup
          else onClose(); // Close modal after login success
        }, 3000);
      } else {
        // Show the actual error message from backend (e.g., "User already exists")
        setPopupMessage(data.message || "Something went wrong! ❌");
      }
    } catch (error) {
      setPopupMessage("Server Error! ❌");
    }
  };

  return (
    <div className="signup">
      {popupMessage && <div className="popup">{popupMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="signup-header">
          <h2>{isSignUp ? "Create An Account" : "Sign In"}</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>

        {isSignUp && (
          <div>
            <input
              type="text"
              name="name"
              value={userData.name}
              placeholder="Enter your name..."
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div>
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="Enter your email..."
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="password"
            name="pass"
            value={userData.pass}
            placeholder="Enter your password..."
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>

        <p className="toggle-text" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default Signup;
