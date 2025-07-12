1.not-found middleware for Route Not Found(404) - Instead of returning 'Cannot GET /api/v1/hello' to the user, we have implemented middleware to provide a more meaningful and user-friendly response
In middleware > not-found.js :
const notfound = (req, res) => res.status(404).send('Route does not exists')
module.exports = notfound
In app.js :
const notFound = require('./middleware/not-found');
app.use(notFound)
===========================================================================================================================
===========================================================================================================================
2.asyncWrapper explanation with example of outer & inner function & double as argument
Code :
outer function :
function outer(fn) {  
  return function inner(x, y) {  
    return fn(x) + y;  
  };
}
double function :
function double(n) {
  return n * 2;
}
const wrappedDouble = outer(double);
wrappedDouble(5, 3) // Output: 13
Explanation :
When we call outer function with argument as double function following steps happens :
1.Outer function returns inner function & the reference of inner function is stored in variable wrappedDouble
    const wrappedDouble = function inner(x, y) {  
    return fn(x) + y;  
    }
2.fn in outer function is replaced with double(n)
    const fn = function double(n) {
    return n * 2;
    }
When we call wrappedDouble function with 5 & 3 as argument it returns 13
wrappedDouble(5, 3) // Output: 13

Code Execution Flow:
1️⃣ Call outer(double) → Returns inner function.
2️⃣ Call wrappedDouble(5, 3) → Executes inner(5, 3).
3️⃣ Inside inner(5, 3) → Calls fn(5), which is double(5).
4️⃣ double(5) Returns 10.
5️⃣ Inner function returns 10 + 3 = 13.
6️⃣ Final Output: 13.

Same happens with asyncWrapper function 
Code : 
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
This is like : const getAllTasks = asyncWrapper(fn)  
Explanation :
When we call asyncWrapper function with argument as async function following steps happens :
1.asyncWrapper function returns the middleware function & the reference of middleware function is stored in variable getAllTasks
const getAllTasks = async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  }
2.fn in asyncWrapper function is replaced with code inside asyncWrapper function of getAllTasks 
const fn = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
}
3.When express calls getAllTasks() function with argument Tasks.find({})
const getAllTasks = async (req, res, next) => {
    try {
      await Task.find({});
      res.status(200).json({ tasks });
    } catch (error) {
      next(error);
    }
  }
The try block executes the code Tasks.find({}) & returns response with tasks & if any error occurs it will be catched by catch block & error is passed to the next middleware in the stack (global error handling middleware)

Code Execution Flow:
1️⃣ We call asyncWrapper(getAllTasks), but we do NOT call getAllTasks yet.
    asyncWrapper returns a new function (inner function reference).
    This function is stored in the getAllTasks variable.
2️⃣ When Express calls getAllTasks(req, res, next), it actually calls the inner function returned by asyncWrapper.
    getAllTasks now holds the inner function reference, so when Express calls it, the inner function executes.
3️⃣ Inside the inner function:
    fn(req, res, next) is executed, where fn is the original getAllTasks function.
    This means the real getAllTasks logic is executed inside the try block.
4️⃣ If Task.find({}) succeeds:
    The response is sent successfully.
5️⃣ If an error occurs in Task.find({}):
    The catch block inside asyncWrapper catches the error.
    next(error) is called, forwarding the error to Express's global error handler.

Final Execution Flow Summary :
✅ Express calls getAllTasks(req, res, next), which is actually the inner function returned by asyncWrapper.
✅ The inner function runs fn(req, res, next), calling the actual getAllTasks logic.
✅ If Task.find({}) succeeds, the response is sent.
✅ If an error occurs, next(error) forwards it to Express's global error handler.

===========================================================================================================================
===========================================================================================================================

2.Custom error handler :
Express has a built-in error handler that automatically handles errors if you don’t catch them.
    The built-in error handler runs at the end of all middleware.
    If you call next(error) and don’t handle it with a custom error handler, Express will use its built-in error handler.
    This built-in error handler sends the error message and debug details (stack trace) to the client.
    In production, Express hides the stack trace for security reasons.
We have set next(error) in asyncWrapper, which passes the error to the :
    1.built-in middleware if we do not set up custom error handling middleware
    2.custom error handling middleware which is defined at the end of the middleware stack 
middleware > error-handler :
const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({ msg: err })
}
We have access to the err object which is coming from next(error) in asyncWrapper function
In app.js :
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(errorHandlerMiddleware) // Must place at the end of the middleware stack

Error handling ways in Express :
IMP : When working with Express, errors can be handled in 3 ways:
    1.Handling errors directly inside the route
    2.Handling errors using next(error) inside catch block
    3.Handling errors using custom error class

1.Catching and handling the error directly inside the route (without next(error)).
// Route with try-catch but NO next(error)
app.get('/test', async (req, res) => {
  try {
    throw new Error('Something went wrong!'); // Simulating an error
  } catch (error) {
    res.status(500).json({ msg: error.message }); // Handling error inside the route
  }
});

2.Passing the error to Express's error-handling middleware using next(error).
// Route with try-catch & next(error)
app.get('/test', async (req, res, next) => {
  try {
    throw new Error('Something went wrong!'); // Simulating an error
  } catch (error) {
    next(error); // Passing error to error-handling middleware
  }
});
// Custom Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).json({ msg: err.message }); // Send response
});

3.Creating a Custom Error Class for Error Handling in Express
Handling errors using next(error) works, but it doesn't allow us to differentiate between different types of errors (e.g., validation errors, authentication errors, database errors).
First, we create a base error class by extending the built-in Error class. Then, we extend this base class to define custom error subclasses for different types of errors in the application.
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Call the parent (Error) constructor
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor); // Capture stack trace
  }
}
app.get('/user/:id', async (req, res, next) => {
  const user = null; // Simulating no user found
  if (!user) {
    return next(new AppError('User not found', 404)); // Throw custom error
  }
  res.json({ user });
});
// Global Error-Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if no statusCode
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  });
});

List of error classes used in Node JS app :
1.Request & Validation Errors : These occur when the request data is incorrect.
    BadRequestError	400	: Invalid request body, query params
    ValidationError	400	: Mongoose schema validation failure
    UnauthorizedError 401 :	Authentication failure (wrong token)
    ForbiddenError 403 : Authenticated user without permission
2.Resource Errors : These occur when a requested resource (user, product, etc.) is missing.
    NotFoundError 404 : Resource (user, product) not found
    DuplicateKeyError 409 : Mongoose unique constraint violation
3.Mongoose & Database Errors : These occur when Mongoose fails due to internal issues.
    CastError 400 : Invalid MongoDB ObjectId
    DatabaseError 500 : MongoDB connection failure
4.Rate Limiting & Server Errors : For handling performance issues.
    TooManyRequestsError 429 : API rate limit exceeded
    InternalServerError 500 : Unexpected server error
5.Authentication & Authorization Errors : 
    TokenExpiredError	401	When JWT token expires
    InvalidTokenError	401	When JWT token is invalid or tampered with
    SessionExpiredError	401	If using sessions, when session expires
6.Payment & Transaction Errors
    PaymentRequiredError	402	Payment needed to access a resource
    PaymentFailedError	402	When a Stripe/PayPal payment fails
    InsufficientBalanceError	402	When a user does not have enough funds
7.Rate Limiting & Throttling Errors
    RequestTimeoutError	408	When a request takes too long to process
    ServiceUnavailableError	503	When server is overloaded or under maintenance
8.File Upload & Storage Errors
    FileTooLargeError	413	When uploaded file exceeds size limits
    UnsupportedFileTypeError	415	When uploading an unsupported file format
    StorageLimitExceededError	507	When user storage quota is exceeded
9.WebSocket & Real-time API Errors
    WebSocketConnectionError	400	When WebSocket handshake fails
    EventNotAllowedError	403	When a client tries to emit a restricted event
10.Dependency & Third-Party API Errors
    ThirdPartyAPIError	502	When an external API fails
    DependencyFailureError	500	When a third-party service (e.g., AWS S3, Redis) fails

Final code :    
1.Handling errors directly inside the route 
app.get('/test', async (req, res) => {
  try {
    throw new Error('Something went wrong!'); // Simulating an error
  } catch (error) {
    res.status(500).json({ msg: error.message }); // Handling error inside the route
  }
});
2.Handling errors using next(error) inside catch block
app.get('/test', async (req, res, next) => {
  try {
    throw new Error('Something went wrong!'); // Simulating an error
  } catch (error) {
    next(error); // Passing error to error-handling middleware
  }
});
// Custom Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).json({ msg: err.message }); // Send response
});
3.Handling errors using custom error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Call the parent (Error) constructor
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor); // Capture stack trace
  }
}
class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}
app.get('/user/:id', async (req, res, next) => {
  const user = null; // Simulating no user found
  if (!user) {
    return next(new NotFoundError('User not found')); // Throw custom error
  }
  res.json({ user });
});
// Global Error-Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if no statusCode
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  });
});

How you Handled Errors in My E-Commerce App ? Ans : error handling classes, asyncWrapper, 
To handle errors in our Express app, we implemented:
    1.Custom Error Classes → For standardized and structured error handling.
    2.Global Error Handling Middleware → To centrally manage all errors and send consistent responses.
    3.Async Error Handling (asyncWrapper) → To automatically catch and forward errors in asynchronous functions.
    4.Mongoose-Specific Error Handling → To manage database-related errors like validation failures, duplicate keys, and invalid ObjectIds.
    5.Operational vs. Programmer Errors → isOperational helps distinguish between recoverable and critical errors.
Code :
```javascript
1.Creating the AppError Class
class AppError extends Error {
  constructor(message, statusCode, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational; // Helps identify known vs. unknown errors
    Error.captureStackTrace(this, this.constructor);
  }
}
2.Creating Specific Error Classes
class NotFoundError extends AppError {
  constructor(message = "Resource not found") {
    super(message, 404);
  }
}
class ValidationError extends AppError {
  constructor(message = "Invalid input data") {
    super(message, 400);
  }
}
class UnauthorizedError extends AppError {
  constructor(message = "Unauthorized access") {
    super(message, 401);
  }
}
class ForbiddenError extends AppError {
  constructor(message = "Forbidden action") {
    super(message, 403);
  }
}
3.Async Error Handling Wrapper
const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
4.Global error handling middleware
app.use((err, req, res, next) => {
  if (!err.isOperational) {
    console.error("❌ Unexpected Error:", err);
    return res.status(500).json({ message: "Something went wrong!" });
  }
  // Handle Mongoose Errors
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "Invalid data provided" });
  }
  // Duplicate Key Error (Unique Constraint)
  if (err.code === 11000) { 
    return res.status(400).json({ message: "Duplicate field value entered" });
  }
  // Handle Mongoose CastError (Invalid ObjectId)
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID format"; // Send a clean message
  }
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});
Example :
app.get("/user/:id", asyncWrapper(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new NotFoundError("User not found")); // Custom error
  }
  res.status(200).json({ user });
}));
```
Create index.js in errors folder & import all the error classes in it including base error class. After than export all of them. In errors folder we have files : bad-request.js, custom-error.js, index.js, unauthenticated.js.
In middlewares folder we have files : auth.js, error-handler.js, not-found.js

===========================================================================================================================
===========================================================================================================================

Named exports : Named exports allow you to export multiple values from a module by name, and they must be imported using the same name.
Named exports :
// utils.js (Exporting multiple functions)
    export function add(a, b) {
        return a + b;
    }
    export function subtract(a, b) {
        return a - b;
    }
Importing Named Exports :
// main.js (Importing specific functions)
    import { add, subtract } from "./utils.js";
    console.log(add(5, 3));      // Output: 8
    console.log(subtract(5, 3)); // Output: 2
Named Exports with Aliases :
    import { add as sum, subtract as difference } from "./utils.js";
    console.log(sum(5, 3));        // Output: 8
    console.log(difference(5, 3)); // Output: 2
Named Export with Object Syntax :
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    export { multiply, divide }; // Exporting both functions together

CommonJS Vs ES6 modules :
Node.js supports two module systems: CommonJS (CJS) and ES6 Modules (ESM).
CommonJS (CJS) :
    Uses require() for importing.
    Uses module.exports or exports for exporting.
    Works synchronously (code executes immediately).
    Default in Node.js (for .js files).
    Node.js was built with CommonJS from the start.
    All built-in Node.js modules (like fs, http) use CommonJS.
ES6 Modules (ESM) :
    Uses import for importing.
    Uses export for exporting.
    Works asynchronously (supports top-level await).
    Default in browsers and supported in Node.js (with "type": "module" in package.json).
    No __dirname and __filename support (must use import.meta.url).
    Needs "type": "module" in package.json or .mjs extension.
If you are building a standard Node.js backend (e.g., an Express app) → Use CommonJS (require()) ✅
If you need better frontend/browser support (e.g., Next.js, React SSR) → Use ES6 Modules (import) ✅

===========================================================================================================================
===========================================================================================================================
Data modeling in ecommerce project :
In our application only admin can perform CRUD operation on products. Users can create orders & write reviews.
User Schema :
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6
        maxlength: 50
    },
    roles: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
})
enum : what possible values the property or field can have

Product Schema :




How Stripe Payment Works in an E-Commerce App?
1️⃣ Frontend (React/Next.js) requests a payment intent from the backend.
2️⃣ Backend (Node.js) creates a payment intent using Stripe’s secret key.
3️⃣ Frontend receives the payment intent client secret and uses it to complete the payment with Stripe.js.
4️⃣ Stripe processes the payment, and the backend verifies the transaction before updating the order status.  




Recursion : martin& dragon odd number in a list
taking one problem & doing it over & over in a smaller piece or on a changing piece until you hit some endpoint which we call the base case.
Recursion




===========================================================================================================================
===========================================================================================================================
John Smilga Code :
REGISTER USER FLOW :
```javascript
Step 1.
const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json( {user });
}
Step 2.
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if(emailAlreadyExists){
      throw new CustomError.BadRequestError('Email already exists')
    }
    const user = await User.create({ name, email, password });
    res.status(StatusCodes.CREATED).json( {user });
}
// Instead of sending 
Step 3.
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if(emailAlreadyExists){
      throw new CustomError.BadRequestError('Email already exists')
    }
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user'
    const user = await User.create({ name, email, password, role });
    res.status(StatusCodes.CREATED).json( {user });
}
// The first user added through Postman will be assigned the "admin" role. After that, any new users, even if they try to register as an admin, will automatically be assigned the default "user" role.
Step 4. hashing & comparing passwords (Check 'Hash Passwords' above)
Step 5.
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if(emailAlreadyExists){
      throw new CustomError.BadRequestError('Email already exists')
    }
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user'
    const user = await User.create({ name, email, password, role });
    // tokenUser is payload
    const tokenUser = { name: user.name, userId: user._id, role: user.role}
    const token = jwt.sign(tokenUser, 'jwtsecret'. { expiresIn: '1d' })
    res.status(StatusCodes.CREATED).json( {user: tokenUser, token });
}
Step 6. Refactoring
// create JWT_SECRET & JWT_LIFETIME in .evn file & create utils folder & create jwt.js in it create following function :
const createJWT = ({payload}) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })
  return token
}
const isTokenValid = ({token}) => {
  jwt.verify(token, process.env.JWT_SECRET)
}
// export these two functions & import them in index.js of utils & again export them from there
// import it in authController.js
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if(emailAlreadyExists){
      throw new CustomError.BadRequestError('Email already exists')
    }
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user'
    const user = await User.create({ name, email, password, role });
    // tokenUser is payload
    const tokenUser = { name: user.name, userId: user._id, role: user.role}
    const token = createJWT( {payload: tokenUser} );
    res.status(StatusCodes.CREATED).json( {user: tokenUser, token }); 
}
Step 7. // send JWT in a cookie
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if(emailAlreadyExists){
      throw new CustomError.BadRequestError('Email already exists')
    }
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user'
    const user = await User.create({ name, email, password, role });
    // tokenUser is payload
    const tokenUser = { name: user.name, userId: user._id, role: user.role}
    const token = createJWT( {payload: tokenUser} );
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay)
    })
    res.status(StatusCodes.CREATED).json( {user: tokenUser }); // do not send token in response
}
Step 8. access cookie using cookie-parser package 
Step 9. refactor cookies code 
// create function attachCookiesToResponse in utils/jwt.js, we need response object since we are attaching cookie to the response & tokenUser from authController.
const attachCookiesToResponse = ({res, user}) => {
  const token = createJWT({payload: user}); // in resgister user we are passing tokenUser as payload in this createJWT fn
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay)
  })  
  // res.status(201).json( {user}); // do not send token in response
}
// attachCookiesToResponse take res object, attach cookies to it. Since res object is passed by reference to the Express response object, any modifications made inside attachCookiesToResponse like setting cookies  persists outside the function.
// passed by reference means passing a reference (or pointer) to the original object, not a copy of it.
// import attachCookiesToResponse in authontroller.js 
  const register = async (req, res) => {
    const { name, email, password } = req.body;
    const emailAlreadyExists = await User.findOne({ email });
    if(emailAlreadyExists){
      throw new CustomError.BadRequestError('Email already exists')
    }
    const isFirstAccount = await User.countDocuments({}) === 0;
    const role = isFirstAccount ? 'admin' : 'user'
    const user = await User.create({ name, email, password, role });
    // tokenUser is payload
    const tokenUser = { name: user.name, userId: user._id, role: user.role}
    attachCookiesToResponse({res, user: tokenUser})
    res.status(StatusCodes.CREATED).json( {user: tokenUser }); 
}
// make register request from postman & check JWT is logged to console
Step 10. Signed & Secure cookie options
const attachCookiesToResponse = ({res, user}) => {
  const token = createJWT({payload: user}); 
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
    signed: true
  })  
}
// In app.js :
app.use(cookieParser(process.env.JWT_SECRET));
// dummy route
app.get('/api/v1', (req, res) => {
  console.log(req.signedCookies);
  res.send('cookies sent')
})
```

LOGIN USER FLOW :
```javascript
// in authController.js
const login = async(req, res) => {
  const { email, password } = req.body;
  // check if both email & password exists in user request
  if(!email || !password){
    throw new CustomError.BadRequestError('Please provide email & password');
  }
  // check if email already exists
  const user = await User.findOne({ email });
  if(!user){
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  // Check if password is correct
  const isPasswordCorrect = await user.comparePasswords(password);
  if(!isPasswordCorrect){
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  // if everything is correct we create JWT & attach cookie to the response & send it 
  const tokenUser = { name: user.name, userId: user._id, role: user.role} // tokenUser is payload
  attachCookiesToResponse({res, user: tokenUser})
  res.status(StatusCodes.CREATED).json( {user: tokenUser }); 
} 
// try login in postman if successful, try dummy route of signed cookie. We see token in console 
```

LOGOUT USER FLOW :
```javascript
// Instead of sending token in cookie we create a new cookie & send string 'logout' instead of token & also we add expires in 5 seconds.
// We can use current time directly instead of using 5 seconds
const logout = async(req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    // expires: new Date(Date.now() + 5 * 1000),
    expires: new Date(0), // for production 
    secure: process.env.NODE_ENV === "production", // Use HTTPS in production
    sameSite: "lax", // Helps prevent CSRF, when 
  })
  res.status(StatusCodes.OK).json({ msg: 'user logged out!'})
}
// Instead of using sessions for session management we have used refresh token, which sents refresh token when access token is expired
// sameSite: "strict" : Cookies are only sent in requests from the same site & Prevents CSRF attacks completely but can break some login flows.
// sameSite: "lax" : Cookies are sent in same-site requests and GET requests from other sites. Safer than none, but allows some cross-site behavior, like clicking a link from another site.
// sameSite: "none" : Cookies are sent in all requests, including cross-site.
```



1.In case of cookies browser does all the work, if we are on the same domain 
2.We can not access cookies from the front end javascript, if we set it up as HttpOnly
3.We must be aware of the size of the cookies coz there is a limit of max size for the cookie which is 4096 bytes 

If your frontend (React) and backend (Node.js) run on different domains or ports, then by default we does not have access to any of our resources on the server. To get the access we must install cors package & configure it in main applicatiton file.
Even if we set cors we see we can not have access to the cookie when we log in. To fix this in development we need to open package.json() of the react app & add following code : "proxy": "http://localhost:5000".
Also to make it work in front end (App.js) dont use
 "http://localhost:5000" as url, just use "/api/v1/auth/login" everywhere in front end.

How this works ? 
✔ CORS enables cross-origin requests : we can access our application resources even if front-end & backend are running on different ports or domains 
✔ Proxy setting in React bypasses CORS in development : which enable us to access cookies within our application
✔ Relative URLs prevent hardcoded domain issues: means instead of using full domain name in front-end like "http://localhost:5000/api/v1/auth/login" use only relative URL like "/api/v1/auth/login" in the front-end.









































Deployment flow :
front-end :
developer writes the code tests it locally on localhost:3000 default react port > if everything is file he pushes code to the staging branch 
S3 + CloudFront + GoDaddy (Subdomain) for staging pipeline
S3 + CloudFront + GoDaddy (Main domain) for production pipeline

back-end :

codebuild talks to cloudformation & cloudformation create a stack 


Create react app > upload it to github in private repository > setup cicd pipeline with codebuild which will build the react code >  

response format on front end must match on backend



CloudFormation : We automate & maintain the state of our AWS cloud resources using cloudFormation. It is IAAC tool like terraform but cloudFormation is specific to AWS whereas terraform supports many cloud providers like Azure, GCP and all.
Templates : A script written in YAML or JSON that defines AWS resources and their configurations. CloudFormation reads this to create the resources. 
Stack : A collection of multiple AWS resources that are created, updated, or deleted together based on a template. Updating a stack means updating the template.
Change Set : A preview of changes before updating a stack. Useful to see the impact before applying changes. It is like terraform plan command which shows the changes before applying it.
StackSet : Manages multiple stacks across multiple AWS accounts & regions. Example: Deploying the same IAM policies or S3 buckets in different regions.

Template anatomy : All of the below are optional except Resource
AWSTemplateFormatVersion : Specifies the template version
Description : Provides a brief description of the template.
Metadata : Used to store additional information about the template
Parameters : Defines user-defined inputs for the template, such as instance type, key pair, or VPC ID.
Mappings : Used to map values based on conditions, such as selecting an AMI ID based on a region.
Conditions : Defines conditions to create or modify resources based on parameters.
Resources : Defines AWS resources like EC2, S3, RDS, etc.
  ```yaml
  LogicalResourceName:
    Type: "AWS::Service::ResourceType"
    Properties:
      PropertyName: PropertyValue
  ```
  LogicalResourceName is the name you assign to a resource. It is not actual AWS resource name, it is used internally by CloudFormation
  To give physical resource name we use Tags > Key > Value
Outputs : Returns useful information after stack creation, like EC2 public IP or S3 bucket name.

We can write template on local machine & then upload it to cloudFormation or we can put the template on S3 or github & access it in cloudFormation.



buildspec.yaml :
buildspec.yaml
The buildspec.yml file is used in AWS CodeBuild to define the build steps for your application. It tells CodeBuild how to install dependencies, run tests, and package the application.
1.version : Defines the buildspec file version. The latest version is 0.2. 
2.run-as : Runs the build as a specific Linux user. If not set, it runs as root.
3.env (Environment Variables) : Defines environment variables used in the build. variables: Standard key-value pairs. shell: Specifies which shell to use (bash, sh, etc.)
4.parameter-store (AWS Systems Manager Parameter Store) : Pulls secure values from AWS Parameter Store. Used for storing secrets (e.g., API keys, passwords).
5.exported-variables : Exports variables to the next CodeBuild phase.
6.secrets-manager (AWS Secrets Manager) : Retrieves secrets (e.g., database passwords) from AWS Secrets Manager.
7.git-credential-helper : Enables or disables the Git credential helper for authentication.
8.proxy (Proxy Settings) : Controls if artifacts and logs are sent through a proxy.
9.batch (Batch Build Settings) : fast-fail: true: Stops all builds if one fails. Used for running multiple builds in parallel.
10.phases (Build Steps): 
  1.Install Phase : Installs dependencies (Node.js, Python, etc.)
    on-failure: Defines error handling.
    runtime-versions: Specifies versions of tools (e.g., Node.js, Python).
    commands: List of commands to run.
    finally: Always runs even if an error happens.  
  2.Pre-Build Phase : Runs before the build starts (e.g., tests, login to AWS ECR).
  3.Build Phase : Runs the main build process (e.g., npm run build).
  4.Post-Build Phase : Runs after the build completes (e.g., deploy to S3, ECR, ECS).
11.reports (Test Reports) : Stores test results (JUnit, JSON, etc.). Useful for unit testing and logging.
12.artifacts (Build Output) : Specifies the final build output (e.g., .zip, .jar, .tgz).
  base-directory: Root folder for artifacts.
  discard-paths: Removes folder structure (yes keeps only files).
  s3-prefix: Prefix for storing artifacts in S3.
13.secondary-artifacts (Multiple Artifacts) : Used when multiple outputs (e.g., frontend & backend) need to be stored separately.
14.cache (Speed Up Builds) : Stores files to speed up builds (e.g., node_modules, pip cache). Helps in reducing build time.


