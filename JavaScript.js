/* eslint-disable */

function sum(a,b) {
    return a + b;
  }
sum(5,3);

const add = function(a,b){
    return a + b;
}
console.log(add(5,3));

const addArrow = (a, b) => a + b;

async function sum(a,b) {
    return a + b;
}
sum(5,3);

const addArrow = async(a, b) => a + b;

function FN FP {} : f FN FP {}
async function FN FP {} : a f FN FP 
const FN = function FP {} : 
const FN = FP => {}
const FN = async FP => {}

function sub (a, b) {
    return a - b;
}

const sub = function() {

}

const sub => () => {}

async function sub () {
    return 
}

const sub = async function() {

}

const sub = async () => {}


// IMP : When we have nested functions i.e inner function & outer function, calling the outer function does not call inner function automatically 
// Example 1 :
function outer() {
    console.log('outer function called ...');
    return function inner() {
      console.log('inner function called ...');
    };
  }
  // outer()();
  const res = outer();
  res();
// Example 2 :
// Here asyncWrapper is outer function which return middleware function (inner function)
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next);
      } catch (error) {
        next(error); // Passes error to error handling middleware
      }
    };
  };
// We are calling the asyncWrapper function in below code which returns a middleware but it does not call it immediately. When a request comes to GET /items route, Express executes the middleware function returned by asyncWrapper. Express executes the function returned by asyncWrapper. If fn succeeds, the response is sent (res.json(items)). If fn throws an error (e.g., database failure), the catch block calls next(error), ensuring proper error handling.
router.get('/items', asyncWrapper(async (req, res, next) => {
    const items = await Item.find();
    res.json(items);
  }));

// The outer function (asyncWrapper) returns a new function, but that returned function is only executed when the route handler is triggered by an HTTP request.



// Error handling :
// User :


// Why we use notFound middleware before global error handler


// 400 Bad Request: The server cannot process the request due to client-side errors (e.g., malformed request syntax).
// 401 Unauthorized: Authentication is required and has failed or has not yet been provided.
// 403 Forbidden: The server understands the request, but it refuses to authorize it.
// 404 Not Found: The server cannot find the requested resource.
// 405 Method Not Allowed: The request method is known by the server but is not supported by the target resource.
// 500 Internal Server Error: A generic error occurred on the server.
// 502 Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
// 503 Service Unavailable: The server is not ready to handle the request (e.g., it is overloaded or down for maintenance).
// 504 Gateway Timeout: The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.

// The way we pass the error to the custom error handler is by using asyncWrapper next(error). If we dont create custom error handler middleware then the error is passed to the built-in error handler of express

// For route not found we use not-found middleware :
// For resource not found we have created Cutom error class :



// 404: Route Not Found - Instead of returning 'Cannot GET /api/v1/hello' to the user, we have implemented middleware to provide a more meaningful and user-friendly response
// middleware > not-found.js :
const notfound = (req, res) => res.status(404).send('Route does not exists')
module.exports = notfound
// app.js :
const notFound = require('./middleware/not-found');
app.use(notFound)

// asyncWrapper : Instead of using try-catch blocks in every controller, which leads to redundant code, we have created a middleware function to wrap our controllers efficiently. This ensures better error handling and keeps our code clean and maintainable
// Higher-order functions are:
// 1️⃣ Functions that take another function as an argument.
// 2️⃣ Functions that return a function.
// 3️⃣ Functions that do both (take a function as an argument and return a function). 
// When we return an inner function from an outer function, calling the outer function does not automatically invoke the inner function; it only returns a reference to it, which can be called later.
// In this case asyncWrapper function is HOF which takes getAllTasks function as an argument & returns a middleware function. The getAllTasks function is called inside the middleware function.

// middleware > asyncWrapper : 
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
// actually like this const getAllTasks = 
// How getAllTasks Works in Express?
// 1.We call asyncWrapper(getAllTasks), but we do NOT call getAllTasks yet.
//   asyncWrapper returns a new function (inner function reference).
//   This function is stored in the getAllTasks variable.
// STEPS :
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
const getAllTasks = asyncWrapper(fn)  
const getAllTasks = async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  }
const fn = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
}
// When express calls getAllTasks() with argument Tasks.find({})
const getAllTasks = async (req, res, next) => {
    try {
      await Task.find({});
      res.status(200).json({ tasks });
    } catch (error) {
      next(error);
    }
  }


// We are calling asyncWrapper function & storing result of it (inner function reference) in a variable getAllTasks.
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
}
// When express call it 
// Code Execution Flow of asyncWrapper and getAllTasks :


// outer -> asyncWrapper, inner -> middleware, argument : double -> getAllTasks
// ref of middleware when we call asyncWrapper(getAllTasks)
// express calls getAllTasks
outer 
function outer(fn) {  
  return function inner(x, y) {  
    return fn(x) + y;  
  };
}
// double
function double(n) {
  return n * 2;
}
const wrappedDouble = outer(double);
const wrappedDouble = function inner(x, y) {  
  return fn(x) + y;  
}
const fn = function double(n) {
  return n * 2;
}
wrappedDouble(5, 3)
console.log(wrappedDouble(5, 3)); // Output: 13

Code Execution Flow:
1️⃣ Call outer(double) → Returns inner function.
2️⃣ Call wrappedDouble(5, 3) → Executes inner(5, 3).
3️⃣ Inside inner(5, 3) → Calls fn(5), which is double(5).
4️⃣ double(5) Returns 10.
5️⃣ Inner function returns 10 + 3 = 13.
6️⃣ Final Output: 13.

// IMP :
// 1. Check calling of the function
// Remember calling outer function does not invoke inner function, it only return the inner function reference. Which we store in variable for later use



// Revisited : utils needed
// Before this, the create method has already created the user for us in controller.
// const user = await User.create({ name, email, password, role });
const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role}
}

const createJWT = ({payload}) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME
  })
  return token;
}

const isValid = ({token}) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({res, user}) => {
  const token = createJWT({payload: user});
  const oneDay = 1000*60*60*24;
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date.now(),
    secure: process.env.NODE_ENV === 'production',
    signed: true
  })
}





