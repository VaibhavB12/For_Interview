## **📂 Frontend (React)**
### 1️⃣ `src/pages/Login.js`
Handles the login form and submits credentials.
```jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
// Create a state for email and password. To store the user’s input so it can be sent to the backend for authentication.
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// Get setUser function from AuthContext (for managing logged-in users). So we can store the logged-in user’s details globally and access them in other components.
  const { setUser } = useAuth();
// Get navigate from react-router-dom (for redirection after login). To automatically navigate the user to another page (like the dashboard) after a successful login.
  const navigate = useNavigate();
// When the form is submitted:
  const handleSubmit = async (e) => {
    // Prevent page refresh. By default, form submissions reload the page, which would clear the entered data.
    e.preventDefault();
    try {
    // Call the loginUser() function with email and password. To send login details to the backend and check if they are correct.
      const user = await loginUser({ email, password });
    // If login is successful, update user state and navigate to the dashboard. Storing the user state allows the whole app to know the user is logged in, and redirecting to the dashboard improves user experience.
      setUser(user);
      navigate("/dashboard");
    } catch (error) {
    // If login fails, show an error in the console. To help debug login issues and show users an appropriate message.
      console.error("Login failed", error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
```
### 2️⃣ `src/api/auth.js`
Handles API calls.
```js
import axios from "axios";
// Define the backend API URL. To avoid writing the URL multiple times and make it easy to update later.
const API_URL = "http://localhost:5000/api/auth";
// Create a function loginUser(credentials): To send login data to the backend and get a response.
export const loginUser = async (credentials) => {
  // Send a POST request to the /api/auth/login endpoint with email and password. The backend needs login credentials to authenticate the user.
  const { data } = await axios.post(`${API_URL}/login`, credentials, {
    withCredentials: true,
  });
  // Return the user data from the response. To update the frontend with user details if the login is successful.
  return data.user;
};
```

### 3️⃣ `src/context/AuthContext.js`
Manages authentication state.

```jsx
import { createContext, useContext, useState } from "react";
// Create a React context (AuthContext). To provide authentication state globally to all components.
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
// Use useState to store the user object. To keep track of the logged-in user.
const [user, setUser] = useState(null);
  return (
// Provide user and setUser values to all components using AuthContext.Provider. So any component can access authentication details without passing props manually.
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
// Export a useAuth() function to access user data easily. To simplify authentication state management and improve code readability.
export const useAuth = () => useContext(AuthContext);
```

### 4️⃣ `src/routes/PrivateRoute.js`
Protects private routes.

```jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
// Get the user from AuthContext. To check whether the user is logged in before allowing access to private routes.
  const { user } = useAuth();
// If the user exists, show the requested page. If the user is not logged in, redirect them to the login page. Logged-in users should be able to access private pages & To prevent unauthorized users from accessing restricted content.
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
```

---

### 5️⃣ `src/App.js`
Defines routes.

```jsx
// Use BrowserRouter to manage routes. It enables navigation between different pages without a full page reload.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
// Wrap the app with AuthProvider to manage authentication. So authentication state is available across the entire application.
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        // Define login route which Renders Login.js. This is the login page where users enter their credentials.
          <Route path="/login" element={<Login />} /> 
        // Define login route which Renders Dashboard.js, but only if the user is logged in. Only authenticated users should access the dashboard to protect sensitive information.
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> 
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
```
For Login :
1.Front end flow final :
src/pages/Login.js → Login form (email & password)
src/api/auth.js → API function to send login request
src/context/AuthContext.js → Manages auth state (user, tokens)
src/routes/PrivateRoute.js → Protects private pages
src/App.js → Defines routes (Login, Dashboard)

2.Backend flow final :
routes/authRoutes.js → Defines /api/auth/login route
controllers/authController.js → Handles login logic
models/User.js → Defines User schema (email, password, role)
models/Token.js → Stores refresh tokens
services/tokenService.js → Generates & verifies JWT tokens
middleware/authentication.js → authenticateUser middleware for protected routes
utils/asyncWrapper.js → Handles async errors
config/jwt.js → JWT signing & verification logic
server.js → Main Express app entry point

---

## **📂 Backend (Node.js + Express)**

### 6️⃣ `routes/authRoutes.js`
Defines API routes.

```js
const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");

router.post("/login", login);

module.exports = router;
```

---

### 7️⃣ `controllers/authController.js`
Handles login logic.

```js
const User = require("../models/User");
const Token = require("../models/Token");
const { attachCookiesToResponse } = require("../services/tokenService");
const crypto = require("crypto");
const CustomError = require("../utils/customError");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError.BadRequestError("Please provide email & password");
  }

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new CustomError.UnauthenticatedError("Invalid Credentials");
  }

  if (!user.isVerified) {
    throw new CustomError.UnauthenticatedError("Please verify your email");
  }

  let refreshToken = crypto.randomBytes(40).toString("hex");
  const userAgent = req.headers["user-agent"];
  const ip = req.ip;

  await Token.create({ refreshToken, ip, userAgent, user: user._id });

  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  attachCookiesToResponse({ res, user: tokenUser, refreshToken });

  res.status(200).json({ user: tokenUser });
};

module.exports = { login };
```

---

### 8️⃣ `models/User.js`
User model.

```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isVerified: { type: Boolean, default: false },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
```

---

### 9️⃣ `models/Token.js`
Refresh token model.

```js
const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  refreshToken: String,
  ip: String,
  userAgent: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Token", TokenSchema);
```

---

### 🔟 `services/tokenService.js`
Handles JWT and cookies.

```js
const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });
};

const attachCookiesToResponse = ({ res, user, refreshToken }) => {
  const accessTokenJWT = createJWT({ payload: { user } });
  const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });

  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    maxAge: 1000 * 60 * 15,
  });

  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });
};

module.exports = { attachCookiesToResponse };
```

---

### 1️⃣1️⃣ `middleware/authentication.js`
Middleware to protect routes.

```js
const jwt = require("jsonwebtoken");
const CustomError = require("../utils/customError");
const Token = require("../models/Token");

const authenticateUser = async (req, res, next) => {
  const { accessToken, refreshToken } = req.signedCookies;

  try {
    if (accessToken) {
      const payload = jwt.verify(accessToken, process.env.JWT_SECRET);
      req.user = payload.user;
      return next();
    }

    const payload = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const existingToken = await Token.findOne({ user: payload.user, refreshToken });

    if (!existingToken) {
      throw new CustomError.UnauthenticatedError("Authentication Invalid");
    }

    req.user = payload.user;
    next();
  } catch (error) {
    throw new CustomError.UnauthenticatedError("Authentication Invalid");
  }
};

module.exports = authenticateUser;
```

---

### 1️⃣2️⃣ `server.js`
Main entry point.

```js
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

For Register :
1.Front end flow final :
src/pages/Register.js → User registration form (name, email, password)
src/api/auth.js → API function to send register request
src/context/AuthContext.js → Manages auth state (user, tokens)
src/routes/PrivateRoute.js → Protects private pages
src/App.js → Defines routes (Register, Dashboard, Verify Email)

2.Backend flow final :
routes/authRoutes.js → Defines /api/auth/register route
controllers/authController.js → Handles registration logic
models/User.js → Defines User schema (name, email, password, role, verificationToken)
models/Token.js → Stores refresh tokens
services/emailService.js → Sends verification email
services/tokenService.js → Generates & verifies JWT tokens
middleware/authentication.js → authenticateUser middleware for protected routes
utils/asyncWrapper.js → Handles async errors
config/jwt.js → JWT signing & verification logic
server.js → Main Express app entry point
src/pages/VerifyEmail.js → Handles email verification on the frontend
controllers/authController.js → verifyEmail controller updates user verification status


Sure! Below is the **code structure** for the **Register Flow**, covering **frontend (React)** and **backend (Node.js + Express)** files.  

---

# **🚀 Frontend (React) Code**  
### **📂 `src/pages/Register.js`**  
Handles user registration form and submits data to the backend.  
```jsx
import { useState } from "react";
import { registerUser } from "../api/auth";
// Initialize state for user input : To store form input values (name, email, password) dynamically.
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
// Handle input change event (handleChange) : To update formData when the user types in the input fields.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Handle form submission (handleSubmit) : To prevent default form behavior and send data to the backend.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
// Call registerUser(formData) API function : To send user input data to the backend and receive a response.
      const response = await registerUser(formData);
      alert(response.message); // Show success message To inform the user whether registration was successful or failed.
    } catch (error) {
      alert(error.response.data.msg); // Show error message
    }
  };
// Return a form with input fields and a submit button : To allow users to enter their details and submit the form.
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
```

---

### **📂 `src/api/auth.js`**  
API functions to communicate with the backend.  
```jsx
import axios from "axios";
// Define API base URL (API_URL) : To make API requests to the correct backend endpoint.
const API_URL = "http://localhost:5000/api/auth";
// Create registerUser(userData) function : To send a POST request to the backend with user details.
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
// Return response data after registration request : To process the response from the backend in Register.js.  
  return response.data;
};
// Create verifyEmail(token, email) function : To send a POST request for email verification.
export const verifyEmail = async (token, email) => {
  const response = await axios.post(`${API_URL}/verify-email`, { token, email });
// Return response data after verification request : To show a success or error message to the user.  
  return response.data;
};
```

---

### **📂 `src/pages/VerifyEmail.js`**  
Handles email verification.  
```jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyEmail } from "../api/auth";
// Initialize state (message) : To store and display the response message.
const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("");
// Extract token and email from URL parameters : Because the verification link contains these values.
// Use useEffect to automatically verify email on page load : To trigger the verification process when the component mounts.
  useEffect(() => {
    const token = searchParams.get("token");
    const email = searchParams.get("email");
// Call verifyEmail(token, email) API function : To send a request to the backend to verify the user’s email.
    if (token && email) {
      verifyEmail(token, email)
// Update state with the success or error message : To display the verification result to the user.      
        .then((res) => setMessage(res.message))
        .catch((err) => setMessage(err.response.data.msg));
    }
  }, [searchParams]);
// Render the message on the screen : To inform the user if their email verification was successful or failed.
  return <p>{message}</p>;
};

export default VerifyEmail;
```

---

# **🚀 Backend (Node.js + Express) Code**  

### **📂 `routes/authRoutes.js`**  
Defines authentication routes.  
```js
const express = require("express");
const { register, verifyEmail } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/verify-email", verifyEmail);

module.exports = router;
```

---

### **📂 `controllers/authController.js`**  
Handles user registration and email verification.  
```js
const User = require("../models/User");
const sendVerificationEmail = require("../services/emailService");
const crypto = require("crypto");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ msg: "Email already in use" });

  // Generate verification token
  const verificationToken = crypto.randomBytes(40).toString("hex");

  // Create new user
  const user = new User({
    name,
    email,
    password,
    verificationToken,
    role: "user", // First user can be admin based on logic
  });

  await user.save();

  // Send verification email
  await sendVerificationEmail(user.email, verificationToken);

  res.status(201).json({ message: "Success! Please check your email to verify your account" });
};

exports.verifyEmail = async (req, res) => {
  const { token, email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid email" });

  if (user.verificationToken !== token) return res.status(400).json({ msg: "Invalid token" });

  user.isVerified = true;
  user.verificationToken = "";
  await user.save();

  res.status(200).json({ message: "Email Verified" });
};
```

---

### **📂 `models/User.js`**  
Defines user schema.  
```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" },
  verificationToken: String,
  isVerified: { type: Boolean, default: false },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UserSchema);
```

---

### **📂 `services/emailService.js`**  
Handles sending verification emails.  
```js
const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `http://localhost:3000/verify-email?token=${token}&email=${email}`;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
  });
};

module.exports = sendVerificationEmail;
```

---

### **📂 `middleware/authentication.js`**  
Middleware to authenticate users.  
```js
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authenticateUser;
```

---

### **📂 `server.js`**  
Entry point for the Node.js server.  
```js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// Routes
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("MongoDB Connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
});
```

---

## **✅ Summary**
- **Frontend (React)**: `Register.js` (UI), `api/auth.js` (API), `VerifyEmail.js` (Verify Email)
- **Backend (Node.js)**: `authRoutes.js` (Routes), `authController.js` (Logic), `User.js` (Schema), `emailService.js` (Send Email), `authentication.js` (Middleware)
- **Verification email** sent via `nodemailer`  
- **JWT & Cookies** used for authentication  
