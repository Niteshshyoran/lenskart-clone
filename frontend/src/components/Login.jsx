// import { useState } from "react";
// import "./Login.css";

// const Login = ({ onClose }) => {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     pass: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setLoginData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const res = await fetch("http://localhost:8000/users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(loginData),
//     });
//     const data = await res.json();
//     console.log(data);
//     setLoginData({ email: "", pass: "" });
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleSubmit}>
//         <div className="login-header">
//           <h2>Login</h2>
//           <button className="close-btn" onClick={onClose}>X</button>
//         </div>
//         <div>
//           <input
//             type="email"
//             name="email"
//             value={loginData.email}
//             placeholder="Enter your email..."
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="pass"
//             value={loginData.pass}
//             placeholder="Enter your password..."
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
