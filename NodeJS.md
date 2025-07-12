I have 4 years and 4 months of total experience.
My official notice period is 30 days & my last day of working is 5th of match.
but it is negotiable up to 15 days. I am currently serving my notice period, and my last working day is 5th of March.

Node js is the runtime environment for executing javaScript code on the server side. Initially javascript is used as a client side language means you can run javaScript in browser only. But with the help of node js we can now run javaScript outside the browser or on the server side.
A runtime environment provides the necessary infrastructure (software, libraries, and execution engine) to run the node js application. Each programming language uses different runtime environement like python uses CPython, java uses JVM(Java Virtual Machine).

Node.js Runtime Provides 4 Main Components:
V8 JavaScript Engine → Converts JavaScript code into machine code for fast execution.
Libuv library → which has C++ bindings, Handles asynchronous operations like file system, networking, and timers.
Event Loop → Manages asynchronous tasks, ensuring non-blocking execution.
Node.js Core Modules → Built-in modules like fs, http, crypto, path, os, etc. for server-side functionality.

In main thread runs synchronous code & all other asynchronous opertions or heavy operations are offloaded to the threadpool or to the OS. Threadpool has 4 extra threads to run this tasks.
Core modules like fs, crypto, zlib, and dns.lookup use the threadpool for heavy or blocking tasks.

Node Architecture :
Node js is the runtime environment which executes javaScript code outside the browser or on the server side by using V8 javascript engine of the chrome.
Node is the JavaScript runtime based on Google's V8 engine which runs javascript outside the browser or on server side.
Node JS runtime has several dependencies and the most important ones are the V8 javascript engine and libuv. The V8 engine converts JavaScript code into machine code that a computer can actually understand. The libuv is an open source library which is written in C++ and it is mainly responisble for asynchronous operations. Libuv gives node js access to the underlying computer operating system, file system, networking, and more. Libuv implements two important features in the Node.JS which are the event loop and the thread pool.
The event loop is responsible for handling easy tasks like executing call backs and network IO while the thread pool is for more heavy work like file access or compression.

Node js is the runtime environment which executes javaScript code outside the browser or on the server side. It is built on three key components: the V8 engine, event loop and libuv(thread pool). V8 engine is responsible for execution of synchronous javascript code in the single main thread and whenever asynchronous javascript code occurs event loop delegates / hand over it to the thread pool of libuv or to the OS kernel. Event loop has 6 phases to process the different types of asynchronous task.
TIPCC
1️⃣ Timers Phase → Executes setTimeout & setInterval callbacks. 
2️⃣ I/O Callbacks Phase → Executes low-level network callbacks like TCP connections, UDP, DNS resolution. fs.readFile callbacks executes.
3️⃣ Idle/Prepare Phase → Internal use.
4️⃣ Poll Phase → Checks for pending I/O (like file reads, network requests, DB queries).
5️⃣ Check Phase → Executes setImmediate callbacks.
6️⃣ Close Callbacks Phase → Executes cleanup operations like like socket.on('close') or process.exit().
libuv handles heavy tasks like file access or compression while OS kernel handles network input output tasks

so event loop distributes heavy tasks to OS and threadpool  
File System Operations like Reading or writing large files,
Database Operations Querying large datasets or Performing bulk inserts or updates.
Cryptographic operations such as Hashing passwords, Encrypting or decrypting data
Compression/Decompression operations using zlib modules
DNS Lookups operations Resolving domain names to IP addresses

Node JS is neither a language nor a framework. It is a runtime environment for executing JavaScript library. A runtime environment is an environment that executes the program. So basically runtime environment is responsible for things like memory management and converting the high level language like Java, JavaScript, C, sharp to lower level languages, lower languages like machine language which your system can understand.

Frameworks basically provide additional features over the runtime environment. They provide additional features over the runtime environement. The role of framework is to simplify the creation of large applications by providing many inbuilt and reusable libraries, classes, functions.

As we know JavaScript language will be executed by the browsers like Chrome and firefox. Every browser has a JavaScript engine inside them like chrome has V8 engine, firefox has chakra which executes the javascript code.
Initially javascript can be used for client side only but by taking V8 engine of the chrome & creating Node JS runtime from it we can run javascript outside the browser or on the server side also.

V8 javascript engine > Node JS runtime > Express framework
Node.js is a runtime environment that built on top of V8 engine of chrome. Node JS runtime allows the execution of JavaScript code on the server-side.
Express is a a framework built on the top Node JS. It is designed to simplify the process of building web applications and APIs by providing a set of features like simple routing system, middleware support etc.

When you open a website in your browser and enter a URL, your browser sends a request to the UI server. The UI server is typically built using frontend technologies like Angular or React. For simple tasks like downloading images or sorting/filtering data, the UI server can handle it by itself and sends the HTML and JavaScript back to your browser to display the page. For more complex operations, like storing and accessing data from database, authentication and authorization the client (your browser) sends a request to the backend or Node JS API server. The Node JS API server will get the data from a database and send it back to the UI server. The UI server then displays the data to you in your browser.

Client side runs on the users browser while server side runs on the server itself. Client side uses HTML, CSS, JavaScript as primary languages while server side uses only JavaScript. Client side or browser has objects like Document/ Window/
Navigator/ Event while server side has objects like Request/ Response/ Server/ Database Object.
Client side responsible for handling User Interface UI display & client side logic while server side responsible for handling buisness logic like data storage & access, authentication & authorization

Features of Node JS :
1.Node JS is single threaded means it does not use multiple threads to execute the javascript code.
2.Program in Node JS executes in asynchronous way
3.Node applications are event driven
4.Node uses V8 javascript engine
5.Node compatible with cross platform, it can run on any OS
6.NPM manages all the dependencies of Node application  
7.Node has real time capabilities means good for handling bi-directional communication like chat & gaming application

Single threaded programming : Tasks are executed one by one in a single thread, means when the previous task finishes the its execution then and only then next task will start its execution. By using single thread we can achieve both synchronous & asynchronous operations.
Multi threaded programming : Multiple threads are used for multiple tasks. It is non-blocking but it can create deadlock problems and require more resources like CPU & memory.
Synchronous approach is blocking approach because second task waits until the execution of first task is completed. In order to perform the tasks concurrently we need to use non-blocking approach which can be achieved by using asynchronous programming.

Synchronous Programming : In synchronous programming tasks are executed one by one means when the previous task finishes the its execution then and only then next task will start its execution. It blocks the execution thread & provide slower real time responses.

Asynchronous Programming : In asynchronous programming multiple tasks are executed simulteneously without blocking the thread of execution. It does not block execution thread. It provides better concurrency & faster real time responses.
Node JS uses asynchronous programming with event driven architecture means a single thread handles & starts all the tasks & whenever any task is completed or finished it will raise an event & this event is listened by the thread & it stops the execution of that task.

Event : Event is like a signal that something has happened in a program like a user clicking a button or a file finishing downloading.
Event Emitter : It is a built-in Node.js module that allows you to create and listen to events.
Event queue : Event queue is like a waiting line for events.
Event loop : The event loop is the heart of Node.js. It keeps checking the event queue and processes events one by one.
Event driven architecture : Means reacting to the events

Node JS advantages :
Asynchronous, non-blocking, concurrent task handling, event driven architecture.

Event loop phases : T I I P C C
1.Timers Phase : In this phase, setTimeout() and setInterval() callbacks are executed. The Event Loop checks whether any timers have reached their specified time limit. If they have, the callbacks are pushed to the Event Queue.
2.I/O Callbacks Phase : In this phase, I/O callbacks are executed, such as the completion of file system tasks, database queries, etc. After timers, the Event Loop processes I/O-related operations.
3.Idle, Prepare Phase : It’s for internal purposes and preparation. Node.js internally uses it to prepare for the next phase.
4.Poll Phase : The Poll phase is where the Event Loop checks if there are any I/O events to handle. It also waits for new events (like network requests or database queries). If the Event Queue is empty, it will either wait for new events or move to the next phase.
5.Check Phase : The Check phase is where setImmediate() callbacks are executed. setImmediate() callbacks are put in the Event Queue after the Poll phase is done.
6.Close Callbacks Phase : In this phase, close events like socket.on('close', ...) are triggered. It’s used for cleanup operations when resources need to be freed, like closing database connections or stopping network servers.

NPM(Node Package Manager) is used to manage the dependencies for your Node project & node_modules folder contains all the
dependencies of the node project.

package.json is a file used in Node.js projects to manage dependencies, scripts, metadata, and configurations for the project

A module contains a specific functionality that can be easily reused within a Node.js application. Ideally in node.js, each javaScript file treated as a module. We can reuse the module by exporting (module.xports) & importing (require) it in between files.
In Node.js, each module is wrapped in a function called the "module wrapper function" before it is executed. This wrapper function has 5 parameters exports, require, module, **filename, **dirname. It allows modules to have access to certain useful variables and functions without polluting the global namespace.
(function(exports, require, module, **filename, **dirname) {
// Module code goes here
});
exports : allows you to export properties or functions from a module
require : allows you to load other modules like built-in or third party modules
module : contains information about the current module.
**filename : contains the absolute or full path of the current module file.
**dirname : contains the directory path of the current module.

Built in modules :

1. **`fs`** - For working with the file system (read, write, delete files).
2. **`http`/`https`** - For creating HTTP/HTTPS servers and handling web requests.
3. **`path`** - For working with file and directory paths.
4. **`url`** - For parsing and resolving URLs.
5. **`events`** - For implementing event-driven programming using EventEmitters.
6. **`stream`** - For working with streaming data (e.g., reading large files).
7. **`os`** - For interacting with the operating system (e.g., memory, CPU info).
8. **`crypto`** - For performing cryptographic functions like hashing and encryption.
9. **`child_process`** - For spawning child processes and running shell commands.
10. **`console`** - For logging to the console.
11. **`process`** - For interacting with the current Node.js process (e.g., environment variables).
12. **`dns`** - For performing DNS lookups.
13. **`timers`** - For managing timers (e.g., `setTimeout`, `setInterval`).
14. **`vm`** - For running code in a virtual machine context.

Express is the lightweight framework that simplify the process of building web applications by providing features like middleware support, flexible routing systems, template engine integration etc.
For example for creating a server using http module we need to write multiple lines of code but by using express we just need to install, import & call express() function.

A middleware in Express.js is a function that handles HTTP requests, performs operations, and passes control to the next middleware. It basically intercept the request modify it & then pass it to the next middleware & this continues until the request-response cycle finishes.
Each middleware function has 3 parameters req, res & next. next is used to pass the control to the next middleware in the middleware stack.
We can mount the middleware using app.use(middlewareName) method. app.use(middlewareName) this mounts the middleware function globally.
To mount the middleware to a specific route we use : app.use('/routename', middlewareName)

There are mainly 5 types of middleware in express :
1.Application-level middleware : applies globally to all incoming requests in the entire Express.js application
2.Route-level middleware : applies only to specific routes, not for all incoming requests
3.Error-handling middleware : is a special kind of middleware used to manage errors happening while handling incoming requests. To define error-handling middleware use 4 parameters : err, req, res, next. It must be defined to the last in the middleware stack because when an error occurs, Express.js will search for the next error-handling middleware skipping any regular middleware or route handlers.
4.Built-in middleware : used to provide common functionalities. For example express.static() middleware is used for
serving static files. app.use(express.static()). express.json()
5.Third-party middleware : provides functionalities like logging, security, body parsing, and compression. Examples are morgan, helmet, body-parser, cors.

The request pipeline in Express.js is a series of middleware functions that handle incoming HTTP requests and pass control to the next function.

Advantages of using middleware :
1.Provides modularity : by breaking down application's functionality into smaller, self-contained units
2.Provides reusability : middleware can be reused at multiple places in your application
3.Improves request handling : by perform validations on request object or modify the response object before sending it back to the client.
4.Flexible control flow : middleware functions can be applied globally or to a specific route which allows you to control the flow of request
5.Third party middlewares : we can use 3rd party middlewares for additional functionalities in application, security middlewares like helmet & cors.

Routing is the process of directing incoming HTTP requests to the appropriate handler functions based on the request's
method (e.g GET, POST) and the URL path.
HTTP request > middlewares > routing >
To define routes we use : app.METHOD(PATH, HANDLER)
where app is instance of express application
method is HTTP method (GET, POST, PUT, DELETE, etc.)
PATH is url path for the route
HANDLER is a Function that handles the request and response
STEPS TO SETUP ROUTING :
Import Express > Set middlewares > Import controllers > Define routes for different endpoints > start the server
Route handler is the second argument passed to the app.METHOD(PATH, HANDLER) function in Express. It is a callback function that gets executed when the specified route is requested. It is used to process the request and generate a response.
Route parameters in Express.js allow you to capture dynamic values from the URL paths. Route parameters can be accessed by
using req.params object.
Router object is a mini version of an Express application which is used for handling routes.
Router Methods are functions provided by the Router object to define routes for different HTTP methods (GET, POST, DELETE, etc).

app.get() Vs router.get() :
app.get() :
1.app.get() method is used to define routes directly on the application object.
2.Routes defined using app.get() are automatically mounted on the root path (/).
3.Routes defined using app.get() are not modular and cannot be reused in other applications.
router.get() :
1.The router.get() method is used to define routes on a router object.
2.Routes defined using router.get() are not automatically mounted; they must be explicitly mounted using app.use().
3.Routes defined using router.get() are modular and can be reused in other applications by exporting the router object

express.Router() is a class in Express.js that returns a new router object.
Routing is used for authenticating requests based on the token available in request header.

Route chaining is a process defining multiple route handlers for a single route. This pattern helps in modularity, organizing code, improving readability, and separating concerns.

Route nesting organize routes hierarchically by grouping related routes under a common URL prefix. Advantage: This allows you to create more modular and structured routes, making your codebase easier to manage and maintain.

HTTP Request : An HTTP (Hypertext Transfer Protocol) request is a message sent by a client (such as a web browser or a mobile app) to a server, requesting a particular action or resource. It contains HTTP Action(GET, POST…), URL, Request Header, Request Body.
HTTP Request Structure :
<HTTP Method> <Request URL> <HTTP Version>
<Headers>
<Body (Optional)>
For example :
POST /login HTTP/1.1 → <HTTP Method> <Request URL> <HTTP Version>
Host: api.example.com → <Headers> → Specifies the server handling the request.
Content-Type: application/json → <Headers> → Tells the server the request body format (JSON in this case).
Authorization: Bearer <token> → <Headers> → Provides authentication credentials.
{ "username": "user", "password": "pass" } → <Body (Optional)>

HTTP Response : An HTTP response is a message sent by a server back to the client in response to an HTTP request. It contains status code, content type, content.
HTTP Response Structure :
<HTTP Version> <Status Code> <Status Message>
<Headers>
<Body>
For example :
HTTP/1.1 200 OK <HTTP Version> <Status Code> <Status Message>
Content-Type: application/json <Headers> → Indicates that the response body is in JSON format.
{ <Body>
"message": "Login successful",
"token": "abcd1234xyz"
}

Other response headers :
Set-Cookie: sessionId=xyz; HttpOnly → Sends a cookie to the client.
Cache-Control: no-cache, no-store, must-revalidate → Instructs the client not to cache the response.
Access-Control-Allow-Origin: \* → Defines which origins are allowed in CORS requests.

REST guidelines :
1.Separation of Client & Server : The implementation of the client and the server must be done independently. Independence allows easier maintenance, scalability, and evolution.
2.Stateless : The server will not store anything about the latest HTTP request the client made. It will treat every request as new request. It simplifies server implementation as it is not overloading it with state management.
3.Uniform interface : Identify the resources by URL. Standardized URLs, making it easy to understand and use the API
4.Cacheable : The API response should be cacheable to improve the performance. Caching API responses improves performance by reducing the need for repeated requests to the server.
5.Layered system : The system should follow layered pattern. A layered system, such as the Model-View-Controller (MVC) pattern, promotes modular design and
separation of concerns.

REST Vs SOAP :
REST :
Generally lightweight and faster. Uses HTTP or HTTPS. Uses lightweight formats like JSON, XML. Stateless.
SOAP :
Can be slower due to XML processing. Can use various protocols (HTTP, SMTP, etc). Typically uses XML formats. Can be stateful or stateless

HTTP methods, also known as HTTP verbs, are a set of actions that a client can take on a resource.
GET : Retrieve data from a specified resource
POST : Send data to create a new resource on the server.
PUT : Update a resource or create a new resource if it does not exist
PATCH: Partially update an existing resource.
DELETE : Request removal of a resource

PUT Vs PATCH :
Both are used to update a resource.
Full Resource Replacement : In a PUT request, the client sends the full updated resource in the request body, replacing the existing resource on the server.
Partial Updates: In a PATCH request, the client sends specific changes or instructions for modifying the resource, updating only certain fields without resending the entire resource

Idempotence meaning performing an operation multiple times should have the same outcome as performing it once. For example, Sending multiple identical GET requests will always return the same response.

Status codes :
1XX (Info) : 100 Continue
2XX (Success)
• 200: OK
• 201: Created
• 202: Accepted
• 204: No Content
3XX (Redirection)
• 300: Multiple Choices
4XX (Client Error)
• 400: Bad Request
• 401 Unauthorized
• 403 Forbidden
• 404 Not Found
5XX (Server Error)
• 500: Internal Server Error
• 501: Not Implemented
• 502: Bad Gateway
• 503: Service Unavailable

CORS(Cross-Origin Resource Sharing) is a security feature implemented in web browsers that restricts web pages or scripts from making requests to a different domain than the one that served the web page.
CORS restrictions can be removed by enabling CORS middleware in application.
const cors = require('cors')
app.use(cors())

Serialization is the process of converting an object into a format that can be stored, transmitted, or reconstructed later.
Deserialization is the process of converting serialized data, such as binary/ XML/ json data, back into an object.
In Node JS we use JSON data format. To Serialize a JavaScript object into JSON format using JSON.stringify(). To Deserialize a JSON string into a JavaScript object using JSON.parse().

Versioning in RESTful APIs refers to the practice of maintaining multiple versions of an API to support backward compatibility.

An API document, describe the functionality, features, and usage of a REST API. Some popular documentation formats are : Swagger, RAML, API Blueprint

Structure of a REST API project :
❖ node_modules: Directory where npm packages are installed.
❖ src: Source code directory.
❖ controllers: Contains files responsible for handling business logic.
❖ models: Defines data models.
❖ routes: Defines API routes.
❖ utils: Contains reusable functions used across the project.
❖ app.js: Initializes and configures the Express application. Connects routes, middleware, and other configurations.
❖ .gitignore: A file that specifies files and directories to be ignored by version control (e.g., node_modules, \*.log).
❖ package.json: The file that contains metadata about the project and its dependencies.

Authentication is the process of verifying the identity of a user by validating their credentials such as username and password.
Authorization is the process of allowing an authenticated user access to resources.
Authentication is always precedes to Authorization.

5 types of Authentication :
Basic (Username and Password) Authentication
API Key Authentication
Token-based Authentication (JWT)
Multi-factor Authentication (MFA)
Certificate-based Authentication

In Basic Authentication, the user passes their credentials on a post request. At the Node Rest API end, credentials are verified, and response is sent back. The disadvantage of it is, Basic Authentication sends credentials in plain text over the network, so it is not considered a secure method of authentication.

API Key Authentication - In API Key Authentication, the API owner will share an API key with the users and this key will authenticate the users of that API. The disadvantage of it is, API keys can be shared or stolen therefore it may not be suitable for all scenarios.

Token based authentication :
User sends POST request with credentials (username & password) throgh the browser to the API.
API validates the credentials & if they are valid it creates a JWT token & send back to the user in the response headers.
User stores JWT token in the local storage or in the cookies of the browser.
For every future or subsequent request from the client to the API, the JWT token will be sent in the header of the request.
API get the token, extract the Header, Payload, and Signature from the token, recompute the signature using extracted header & payload & algorithm that was used when generating JWT, compare both extracted signature & recomputed signature if both the signatures matches then the token is valid and then only API send requested data to the client.

JWT token is typically sent in the request headers, specifically in the Authorization header.
Authorization: Bearer <JWT_TOKEN>
To extract the token : req.headers["authorization"].split(" ")[1]

jwt.sign() method used to Create a JWT token by encoding a payload and signing it with a secret key.
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
jwt.verify() method Checks if a JWT is valid by decoding it and verifying the signature.
const decoded = jwt.verify(token, secretKey);

JWT Token contains : <header>.<payload>.<signature>
1.Header : consist of type of algorithm which is HS256 & type as JWT
2.Payload : Contains the claims (user data). iat - Issued At (timestamp when the token was created), exp - Expiration time (when the token becomes invalid).
3.Signature : Used to verify the token's integrity and verify that it has not been tampered.

Hashing: Hashing is a process of converting a password into a fixed size string of characters using a mathematical algorithm.
Salt: A salt is a random string of data combined with a password before hashing. Salting ensures security even if the hacker knows the hashing algorithm. Salting ensures that even if two users have the same password, their hashed passwords will be different due to the unique salt. Typically, each user has unique salt.

We can use bcrpt or crypto libraries for hashing the password.
STEPS TO CREATE HASHED PASSWORD :
// Create a function with password as a parameter
// Generate a random 16-byte salt
const salt = crypto.randomBytes(16).toString("hex");
// Hash the password using PBKDF2 with SHA-256
const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha256").toString("hex");
// Return the salt and hashed password
return salt + "." + hash;

Error handling is the process of managing errors that occur during the execution of a program or system.
4 ways to implement error handling in Node JS :
1.Using try...catch (For Synchronous Code)
2.Using Callbacks (For Asynchronous Code)
3.Using Promise.catch() (For Promises)
4.Using async/await with try...catch
5.Global Error Handling

1.TRY - A try block is a block of code inside which any error can occur.
2.CATCH - When any error occur in TRY block then it is passed to catch block to handle it.
3.FINALLY - The finally block is used to execute a given set of statements, whether an exception occur or not.

Error-First Callbacks is a convention in Node.js for handling asynchronous operations. They are called Error-First Callbacks because the first argument of a callback function is reserved for an error object.

.catch() method is used in Promises for error handling

try-catch block is used with async-await for handling errors.

Debugging :
1.console.log() : Quick check
2.debugger statement : To Stop execution - debugger;
3.Node.js inspector : Node.js debugging - node --inspect myScript.js > open chrome://inspect
4.Visual Studio Code debugger : Full debugging experience - Run & Debug (Ctrl + Shift + D) > Create a launch.json file > select Node.js > Add breakpoints > F5 to start debugging
5.Chrome DevTools : Frontend debugging - F12 > Set breakpoints, inspect variables, step through code >

XSS (Cross-Site Scripting) is a security attack when a user/ hacker insert some malicious script code in input fields to steal or manipulate content.

The sanitize-html module is a library for Node.js that sanitizes HTML input by removing potentially malicious code, helping prevent Cross-Site Scripting (XSS) attacks.

SQL Injection is a security attack when a user/ hacker insert some malicious SQL script code in input fields to steal or manipulate content.
To prevent SQL injection attacks : Use Parameterized Queries with Prepared Statements.Do not use dynamic queries

Improve the performance of a Node.js application :
1.Optimize Database Queries :
Use Indexes → Speed up search operations.
Avoid SELECT \* → Fetch only required columns.
Use Query Caching → Store results of frequent queries.
Optimize Joins → Ensure indexes exist on join columns.
2.Use Asynchronous Operations : Prevent blocking by handling I/O tasks asynchronously.
Use async/await or Promises instead of synchronous calls.
Use Background Processing → Offload long-running tasks (e.g., queues).
3.Use Caching : Store frequent data to reduce DB and API calls.
Memory Caching → Use Redis, Memcached for fast access.
CDN Caching → Cache static assets closer to users.
Database Query Caching → Cache frequently run queries.
4.Implement Load Balancing : Distribute traffic across multiple servers to prevent overload.
Use ALB (Application Load Balancer) on AWS or Nginx as a load balancer.
Round Robin → Distribute requests evenly.
Weighted Load Balancing → Prioritize stronger servers.
5.Enable Compression : Reduce response size for faster transmission.
Use Gzip or Brotli for compressing assets.
Enable HTTP Compression → Reduces data transfer size.
Use WebP instead of PNG/JPG → Smaller images.
6.Use Streaming for I/O Operations : Send data in chunks instead of loading everything into memory.
For Large Files: Stream instead of reading everything at once.
7.Monitor & Profile Performance : Analyze app performance and optimize bottlenecks.
Use APM (Application Performance Monitoring) → New Relic, Datadog.
Use node --prof → To check V8 engine performance.
Monitor Queries → Use MongoDB Profiler, SQL EXPLAIN ANALYZE.
For Asynchronous operation :
console.time("query");
const users = await db.collection("users").find({}).toArray(); // Async operation
console.timeEnd("query");
For synchronous operation :
console.time("query");
db.collection.find({ name: "John" }).toArray(() => {
console.timeEnd("query");
});

Testing :
Testing is the process of verifying software functionality. Two main types of testing :
1.Functional testing : 5 types of Functional testing
  1.Unit Testing : Tests individual components (functions, modules, classes) in isolation.
  Tools : Jest, Mocha, Chai
  2.Integration Testing : Tests how different modules work together.
  Tools: Supertest (for APIs), Jest
  3.System Testing : Tests the entire system - Validate the full system, including UI, backend, and integrations.
  Tools: Selenium, Cypress
  4.Acceptance Testing : Ensures the application meets business requirements - Check if the product is ready for delivery Tools: Cucumber, TestRail
  5.Regression Testing : Ensures new changes don't break existing features - Re-run old test cases after updates.
  Tools: Selenium, Jest, Cypress
2.Non-Functional testing :
  1.Performance testing : Testing how well the application performs under load.
  2.Security testing : Testing for vulnerabilities and security flaws.

Testing frameworks are tools that helps in writing and executing tests for your code. For example Node JS testing frameworks are : Jest, Mocha, Chai, Jasmine, AVA

Steps to create unit tests using Jest framework
1.Install jest: npm install jest --save-dev
2.Create test.js file for corresponding .js file.
3.Create related unit test functions inside describe function.
4.Inside test function – Arrange, Act and Assert.
5.Run this command to run the test cases: npx jest math.test.js

Arrange: Prepare everything needed for the test. For example, set data or mock object which are required by the function which has to be tested.
Act: Call or perform the function with the data.
Assert: Check if the result matches the expected outcome.
Example :
// math.js
  function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
// math.test.js
  const sum = require("./math");
    describe("sum function", () => {
    test("should add 1 + 2 to equal 3", () => {
  // Arrange
  const a = 1; // Fixed value from 13 to 1
  const b = 2;
  // Act
  const result = sum(a, b);
  // Assert
  expect(result).toBe(3);
  });
  // Add more test cases if needed
  });

Test-Driven Development (TDD) : TDD is a software development process where you write tests before writing the actual implementation code.
TDD Process (Red-Green-Refactor Cycle) :
1.Write a Test (Red Phase 🔴) : Write a failing test case for a new feature.
test("adds 2 + 3 to equal 5", () => {
expect(sum(2, 3)).toBe(5);
});
🔴 The test fails because sum() doesn’t exist yet.
2.Write Minimum Code (Green Phase 🟢) : Implement just enough code to pass the test.
function sum(a, b) {
return a + b;
}
✅ Now, the test passes.
3.Refactor (Optimize Code) : Improve code structure without changing functionality.
const sum = (a, b) => a + b;
✅ Run tests again to ensure everything still works.

# WebSockets allow data to be sent in both directions using a single connection between a client and a server. Mostly used for real-time chat application.

Mongo DB :
MongoDB is a popular open-source, NoSQL database management system.
NoSQL(Not Only SQL) databases are designed to handle :
structured (e.g JSON documents), semi-structured(e.g XML, logs), and unstructured data(e.g images, videos, text).

RDBMS Vs NoSQL :
RDBMS :
1.RDBMS are designed to handle structured data ( predefined and fixed schemas).
2.RDBMS use the relational model, where data is stored in tables with rows and columns.
3.RDBMS are suitable for applications that require complex transactions and data integrity(ACID), such as banking, finance, and e-commerce.
NoSQL :
1.NoSQL databases are designed to handle structured, semi-structured, and unstructured data.
2.NoSQL databases use a variety of flexible data models, such as document, columnar, and graph
3.NoSQL databases are designed to handle large volumes of data with high-speed read and write operations, such as social media, IoT, and gaming.

Documents and Collections in NoSQL : Collection is made from multiple documents. For example Users collection have muliple user documents such as document 1 with user id 1, document 2 with user id 2 and so on.
Documents :
A document is a semi-structured data structure(XML, JSON format) that stores information in a NoSQL database. It is similar to a row in a table in a RDBMS.
Collections :
A "collection" is a group of documents that are stored together in a NoSQL database. It is similar to a table in a RDBMS.

Advantages of NoSQL :
1.Schema Flexibility : NoSQL can adapts easily to changing data structures,. It allows you to store data without strict schema requirements.
2.Scalability : NoSQL scales efficiently by spreading data across multiple servers which is called as sharding which handles large volumes effectively.
3.High Performance : NoSQL databases offer speedy operations for both reading and writing data, particularly beneficial for handling large datasets. No complex joins → Faster queries.
4.Support for Diverse Data Models : NoSQL accommodates various data types and structures, providing flexibility in data modeling. For example, document store, graph store, key-value store etc.
5.Cost-Effectiveness : NoSQL solutions can be cost-efficient with open-source options and flexible pricing models available.

Dis-advantages of NoSQL :
1.Lack of standard query language : Does not have standardized query language like SQL
2.Weaker consistency guarantees : This means data might not be instantly updated everywhere, but it will become correct eventually (eventual कालांतराने/शेवटी consistency). For example You update a user's profile in one server. It takes a few seconds for other servers to get the update. After a short delay, all copies of the data match.
3.Limited transaction support : NoSQL databases are not great at handling complex transactions that change multiple records at once. For example You transfer money from one user to another in a NoSQL database. If the first update succeeds but the second fails, data might be inconsistent.
4.Less mature ecosystem :


Transaction as a group of one or more SQL operations think of them like transferring money from one bank account to another.
Atomicity : Either the money is deducted or nothing happens at all.
Consistency : The system ensures your account doesn't go below 0
Isolation : Even if 1000 users order at the same time, each transaction won’t interfere with others.
Durability : Once your order is confirmed, it’s saved — even if the server restarts or power goes out.
ACID Properties : ACID is a set of properties that ensure database transactions are reliable.
1.Atomicity (All or Nothing) : A transaction is either fully completed or fully rolled back. If any part fails, the entire transaction is undone.
2.Consistency (Valid State) : The database always remains in a valid state before and after transactions. Constraints (like unique keys, foreign keys) must be followed.
3.Isolation (No Dirty Reads) : Multiple transactions don’t interfere with each other. Ensures correct execution even with concurrent users.
Isolation Levels (SQL supports different levels):
Read Uncommitted → Can see uncommitted changes (not safe).
Read Committed → Only committed data is visible.
Repeatable Read → Prevents inconsistent reads.
Serializable → Full isolation (slowest but safest).
4.Durability (Permanent Changes) : Once a transaction is committed, it remains safe, even in a system crash. Databases use logs and backups to ensure durability.

Server Vs Database Vs Compass :
MongoDB Server is a software application that manages the MongoDB databases.
MongoDB Database is a logical container within the MongoDB Server that stores collections of documents.
MongoDB Compass is a GUI tool for managing MongoDB databases.

First we need to connect to cluster then we create a database then we create collection in it then we create document in collection.

CRUD operations in MongoDB :
Create: This operation refers to inserting new documents into a MongoDB collection.
Read: This operation refers to retrieving data from a MongoDB collection.
Update: This operation refers to modifying existing documents in a MongoDB collection.
Delete: This operation refers to removing documents from a MongoDB collection.

To connect mongo db server from node js application :
MongoDB can be connected from Node by calling the connect() method of MongoClient class
Steps :
1.Install mongo db driver in node js app : npm install mongodb
2.Import MongoDB driver : const { MongoClient } = require("mongodb");
3.Correct MongoDB connection URI : const uri = "mongodb://127.0.0.1:27017/mydatabase";
4.Create a new MongoClient using the connection URI : const client = new MongoClient(uri);
5.Create async function using connect() method in it
// 1. Install MongoDB driver: npm install mongodb
// mongo.js
const { MongoClient } = require("mongodb"); // 2. Import MongoDB driver
const uri = "mongodb://127.0.0.1:27017/mydatabase"; // 3. Correct MongoDB connection URI
// 4. Create a new MongoClient using the connection URI
const client = new MongoClient(uri);
async function connectToMongoDB() {
try {
await client.connect(); // 5. Connect to MongoDB server
console.log("✅ Connected to MongoDB");
return client.db(); // 6. Return the database object
} catch (error) {
console.error("❌ MongoDB Connection Error:", error); // 7. Log errors properly
throw error;
}
}
module.exports = connectToMongoDB; // 8. Export the function

To insert / update / delete one document use {} only
To insert / update / delete multiple document use [{}, {}, ...]

1.Create :
Insert One Document :
const result = await collection.insertOne({ name: "Vaibhav", age: 34 });
console.log("Inserted ID:", result.insertedId);
Insert Multiple Documents :
const result = await collection.insertMany([
{ name: "Vaibhav", age: 34 },
{ name: "John", age: 28 }
]);
console.log("Inserted Count:", result.insertedCount);
2.Read :
Find One Document
const result = await collection.findOne({ name: "Vaibhav" });
console.log(result);
Find Multiple Documents
const cursor = collection.find({ age: { $gte: 30 } }); // Age >= 30
const results = await cursor.toArray();
console.log(results);
3.Update :
Update One Document
const result = await collection.updateOne(
{ name: "Vaibhav" }, // Filter (Condition)
{ $set: { age: 35 } } // Update Operation
);
console.log("Matched:", result.matchedCount, "Modified:", result.modifiedCount);
Update Multiple Documents
const result = await collection.updateMany(
{ age: { $lt: 30 } }, // Condition: Age < 30
{ $set: { status: "young" } } // Update: Add status field
);
console.log("Matched:", result.matchedCount, "Modified:", result.modifiedCount);
4.Delete :
Delete One Document
const result = await collection.deleteOne({ name: "Vaibhav" });
console.log("Deleted Count:", result.deletedCount);
Delete Multiple Documents
const result = await collection.deleteMany({ age: { $gte: 50 } }); // Age >= 50
console.log("Deleted Count:", result.deletedCount);

Query operators are special keywords or symbols used to perform operations like comparison, logical operations in queries.
Syntax : { field: {$operator: value}} Example : { age: { $gt: 30 }}

field names are like column names in SQL & field values are like row in SQL
Tables : Collections
Row : Document (which contains key-value pairs)
Column : Field name (Key)
Cell : Field Value (Value)

[
{ "_id": 1, "name": "John", "age": 30 }, // Document : Row
{ "_id": 2, "name": "Alice", "age": 25 }
]

$lookup is a MongoDB aggregation stage that helps you combine data from two different collections, similar to a join in SQL.
It finds matching documents from another collection based on a common field. It then adds those matching documents into an array inside the original document.
from : name of the target collection that we want to join
localField : the field in the current collection that acts as a reference
foreignField : the field in the foreign collection that we compare with localField.
as : the output field name where matched documents will be stored
pipeline : Allows using additional stages like filtering ($match), projections ($project), sorting ($sort),
It returns all documents from the local (main) collection. Matching documents from the foreign collection are added inside the array specified in the "as" field. If no match is found, the array remains empty.
Example :
students Collection :
[
{ "_id": 1, "name": "Alice", "courseId": "C101" },
{ "_id": 2, "name": "Bob", "courseId": "C102" },
{ "_id": 3, "name": "Charlie", "courseId": "C105" }
]
courses Collection :
[
{ "_id": "C101", "courseName": "Mathematics" },
{ "_id": "C102", "courseName": "Physics" }
]
pipeline with lookup :
db.students.aggregate([
{
$lookup: {
from: "courses", // Foreign collection
localField: "courseId", // Field in students
foreignField: "_id", // Field in courses
as: "courseDetails" // Store result in this field
}
}
]);
Output :
[
{
"\_id": 1,
"name": "Alice",
"courseId": "C101",
"courseDetails": [
{ "_id": "C101", "courseName": "Mathematics" }
]
},
{
"\_id": 2,
"name": "Bob",
"courseId": "C102",
"courseDetails": [
{ "_id": "C102", "courseName": "Physics" }
]
},
{
"\_id": 3,
"name": "Charlie",
"courseId": "C105",
"courseDetails": []
}
]
After this we add match stage : which basically remove result documents with customerDetails as empty array [].
db.students.aggregate([
{
$lookup: {
from: "courses",
localField: "courseId",
foreignField: "\_id",
as: "courseDetails"
}
},
{
$match: { "courseDetails": { $ne: [] } } // Remove students with empty arrays
}
]);
This exclude the non matching documents. It removes documents where customerDetails is an empty array ([]).
Final Output is inner join :
[
{
"\_id": 1,
"name": "Alice",
"courseId": "C101",
"courseDetails": [
{ "_id": "C101", "courseName": "Mathematics" }
]
},
{
"\_id": 2,
"name": "Bob",
"courseId": "C102",
"courseDetails": [
{ "_id": "C102", "courseName": "Physics" }
]
}
]

The left table (or collection) is always the one on which you run .aggregate().
To perform the right join, just swap the collections :
db.courses.aggregate([
{
$lookup: {
from: "students", // Left table (Foreign collection)
localField: "_id", // Foreign key in courses
foreignField: "courseId", // Primary key in students
as: "studentDetails"
}
}
]);
For full outer join :
db.students.aggregate([
// Step 1: Perform LEFT JOIN (students → courses)
{
$lookup: {
from: "courses", // Right table (foreign collection)
localField: "courseId", // Field in students
foreignField: "\_id", // Field in courses
as: "courseDetails" // Output array
}
},

// Step 2: Merge with RIGHT JOIN (courses → students)
{
$unionWith: {
coll: "courses", // Swapping roles (courses as the main collection)
pipeline: [
{
$lookup: {
from: "students", // Left table (foreign collection)
localField: "\_id", // Field in courses
foreignField: "courseId", // Field in students
as: "studentDetails" // Output array
}
}
]
}
}
]);

Data Modeling defines how data is structured and related across collections for efficient storage and retrieval.
Schema validation : Schema Validation ensures data correctness by enforcing rules (e.g., types, required fields) at the database level.
$jsonSchema : is a MongoDB schema validation operator or method. It defines rules for documents in a collection. Used in validator when creating or modifying a collection.
bsonType : specifies the data type of a field in MongoDB. It ensures fields have the correct type (string, number, array, etc.). bsonType is used inside $jsonSchema. It supports all the data types of mongo db.

MongoDB Vs Mongoose :
In MongoDB, schema validation is done using $jsonSchema within collections, and you define constraints like data types, required fields, and other rules directly in the schema definition. The validation is based on bsonType for defining the type of data, such as "string", "int", or "array", and other properties like "required", "minLength", "maxLength", and "pattern" for regex matching.
Example :
db.createCollection('Users', {
  "validator": {
    "$jsonSchema": {
"bsonType": "object", // Indicates that the document should be an object
"properties": {
"name": {
"bsonType": "string",
"minLength": 3
},
"age": {
"bsonType": "int",
"minimum": 18
}
}
}
}
})

validator > $jsonSchema > bsonType, properties > fieldName : { bsontype: , validator: }
The top level "bsonType": "object" is used to specify that the top-level data structure should be an object. This is important because MongoDB expects documents to be stored as BSON (Binary JSON) objects.

In Mongoose, schema validation is done through built-in validators defined in the schema using mongoose.Schema(). Mongoose provides more flexibility with its built-in validators like required, min, max, match for regex, enum for fixed values, and custom validation functions like validate.
const userSchema = new mongoose.Schema({
name: { type: String, required: true, minlength: 3 },
age: { type: Number, min: 18, max: 100 },
email: { type: String, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, required: true }
});

Indexes :
In my Node.js project, I used MongoDB as the database, and indexes played a crucial role in optimizing query performance, especially as the data size grew. Without indexes, MongoDB would have to scan all documents in a collection to find the relevant data, which would be very inefficient. So, I implemented indexes to speed up frequent queries.
I used several types of indexes in the project depending on the query patterns :
Single-field Indexes: I created indexes on individual fields that were often queried. For example, if a user frequently searched by email, I created an index on the email field.
db.users.createIndex({ email: 1 });
Compound Indexes: I also created compound indexes when queries involved multiple fields. For instance, a query to find a user by both firstName and lastName was optimized by creating a compound index.
db.users.createIndex({ firstName: 1, lastName: 1 });
Text Indexes: For features like searching through article content or user comments, I implemented text indexes. This allowed full-text search functionality, making it easier and faster to search for specific words or phrases.
db.articles.createIndex({ content: "text" });
TTL (Time-To-Live) Indexes: For session management, where sessions should expire after a certain period, I used TTL indexes. This automatically deletes expired session documents after a defined time.
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
I analyzed the most common queries in the application and identified the fields that were frequently queried or sorted. For example, if there were search operations based on user age or recent activity, I created indexes for those fields.
db.users.createIndex({ age: 1 });
db.users.createIndex({ createdAt: 1 });
By using indexes, I was able to significantly reduce the response time for queries. For example, instead of a full collection scan, MongoDB could use the index to quickly locate matching documents, especially when dealing with large collections.
I also monitored the performance of my indexes using MongoDB's explain() method to ensure that the queries were being executed efficiently. If any index was not being used as expected, I analyzed the query execution plan and adjusted the indexes accordingly.
db.users.find({ email: "john.doe@example.com" }).explain("executionStats");
I also made sure to balance the use of indexes with the write performance. While indexes improve query speed, they can slow down insert and update operations because MongoDB has to maintain the index. So, I carefully selected the fields to index based on query patterns and data access.

GEOSPATIAL DATA :

1. GeoJSON Data for Store Locations
   In my e-commerce project, I used GeoJSON to store and manage store or warehouse locations. This is especially helpful for location-based queries like finding nearby stores or warehouses. For example, each store’s location is represented as a GeoJSON Point, containing the longitude and latitude of the store.
   db.stores.insertOne({
   name: "Store 1",
   location: {
   type: "Point",
   coordinates: [-73.968285, 40.785091] // Longitude, Latitude
   }
   });
   I used this format to add all the stores in the system, so each store could be queried based on its geographic location.
2. Geospatial Index for Fast Location Queries
   To ensure fast querying, especially as the number of stores grew, I created a 2dsphere index on the location field. This index allows MongoDB to perform efficient geospatial queries, such as finding stores near a customer's location.
   db.stores.createIndex({ location: "2dsphere" });
   This ensured that querying for stores based on geographic proximity (for example, stores near the user) was fast and efficient.
3. Running Geo Queries to Find Nearby Stores
   Using the $near operator, I was able to find stores within a certain radius of the user's location. For example, when a user searches for nearby stores, I used the following query:
   db.stores.find({
   location: {
   $near: {
   $geometry: {
   type: "Point",
   coordinates: [userLongitude, userLatitude] // User's location
   },
   $maxDistance: 5000 // Max distance in meters (e.g., 5km)
   }
   }
   });
   This query returns all stores within a 5km radius of the user, helping them find the closest stores quickly.

4. Finding Stores Inside a Specific Area
   For certain features like promotions or discounts available only in specific areas, I used the $geoWithin operator to find stores located inside a defined polygon or circle. For example, if a promotion was valid only for stores inside a city boundary, I used a polygon query:
   db.stores.find({
   location: {
   $geoWithin: {
   $geometry: {
   type: "Polygon",
   coordinates: [
   [
   [-74.0, 40.7],
   [-73.9, 40.7],
   [-73.9, 40.8],
   [-74.0, 40.8],
   [-74.0, 40.7]
   ]
   ]
   }
   }
   }
   });
   This query finds all stores within the city boundary defined by the polygon.
5. Places Within a Certain Radius for Delivery Service
   For features like delivery zone management, I used radius-based queries to find places (like stores or warehouses) within a certain distance from the user’s location. For example, if the user is in a specific area, I can check if delivery services are available within 10 kilometers by using the $near operator:
   db.warehouses.find({
   location: {
   $near: {
   $geometry: {
   type: "Point",
   coordinates: [userLongitude, userLatitude] // User's location
   },
   $maxDistance: 10000 // Max distance in meters (e.g., 10km)
   }
   }
   });
   This helps to find the nearest warehouse that can fulfill the user's order based on their location.
6. Time-To-Live (TTL) for Temporary Data (Sessions, Promotions, etc.)
   In some cases, I used TTL (Time-To-Live) indexes for managing temporary data like session expiration or promotional offers that are valid for a limited time. For example, session data automatically expires after a set time period (e.g., 1 hour):
   db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 }); // TTL index
   This automatically deletes session documents that are older than 1 hour, keeping the database clean.

Summary of How Geo Features Were Used
In my e-commerce project, I used MongoDB's geospatial features to enhance location-based functionality:

GeoJSON to store store locations and user locations.
Geospatial indexes (2dsphere) for efficient location-based queries.
Geo queries to find nearby stores, check if a user is within a specific area, and find places within a radius.
TTL indexes for automatically expiring temporary data like sessions or promotions.
By implementing these features, I improved the user experience for location-based searches, store locator functionalities, and efficient delivery service management.

MONGODB SECURITY :

1. Performance Optimization
   In my Node.js e-commerce project, performance is critical, especially as the application grows. I focused on a few key areas to optimize MongoDB performance:
   Indexes: I used indexes (single-field, compound, and geospatial indexes) to speed up queries related to product searches, user lookups, and order processing.
   Capped Collections: For certain collections, like logging or user session data, I used capped collections. These are fixed-size collections that automatically overwrite the oldest documents when the collection size is exceeded, which helped in maintaining optimal performance for log data.
   Query Optimization: I made sure to avoid inefficient queries, like those that result in full collection scans, and made use of covered queries, where all fields involved in the query were part of the index.

```javascript
    Using Indexes:
        // Create an index on product name for fast searching
        const productSchema = new mongoose.Schema({
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true }
        });

        // Create a text index for product name to support text search
        productSchema.index({ name: 'text' });

        const Product = mongoose.model('Product', productSchema);

        // Query using the text index for searching a product by name
        Product.find({ $text: { $search: 'Laptop' } })
        .then(products => console.log(products))
        .catch(err => console.log(err));
    Using Capped Collection:
        const orderSchema = new mongoose.Schema({
        orderId: String,
        userId: String,
        product: String,
        amount: Number,
        }, { capped: { size: 1024, max: 100 } }); // 1KB and max 100 orders
        const Order = mongoose.model('Order', orderSchema);
```

2. Replica Sets for High Availability
   For high availability and fault tolerance, I used replica sets. A replica set in MongoDB is a group of MongoDB servers that maintain the same data set. In case the primary node fails, one of the secondaries can automatically be promoted to the primary, ensuring that the application remains available.
   In my e-commerce project:
   Replica Set Deployment: I configured a replica set with three nodes (one primary and two secondary replicas). This ensures the database remains available and can serve read queries even during failures.
   Read Preference: For some non-critical read operations (like product listings), I used read preferences to read from secondary replicas to offload traffic from the primary node, improving performance and ensuring the primary handles write-heavy operations like order processing.

```javaScript
    Setting up Replica Set in MongoDB Atlas:
    const mongoose = require('mongoose');
    const uri = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority';
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB replica set"))
    .catch(err => console.error("MongoDB connection error:", err));
    Read Preference Example:
    mongoose.connection.db.collection('products').find().readPreference('secondaryPreferred');
```

3. Sharding for Scalability
   As the e-commerce application grew, I implemented sharding to scale horizontally. Sharding divides large datasets across multiple servers, which is useful when the dataset becomes too large for a single server to handle. In my case:
   Sharding Strategy: I used sharding for large collections like orders and products. These collections are highly read and write-intensive, and sharding helped distribute the data across different servers, improving query performance.
   Shard Key Selection: I carefully selected the shard key, using something like order ID or product category to ensure an even distribution of data across the shards.

```javascript
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});
productSchema.index({ category: 1 }); // Shard key on category
const Product = mongoose.model("Product", productSchema);
```

4. Deploying a MongoDB Server
   To deploy MongoDB, I used both self-hosted servers and MongoDB Atlas. While self-hosting gave me full control over the setup, MongoDB Atlas provided an easier and more managed environment for scaling and maintaining the database.
   Self-Hosting: I deployed MongoDB on EC2 instances for cost efficiency, where I set up replica sets and handled backups and failovers manually.
   MongoDB Atlas: For some environments, especially for production, I used MongoDB Atlas, which is a fully managed cloud database service. It took care of tasks like backups, scaling, and patch management, reducing operational overhead.

```javascript
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to local MongoDB"))
  .catch((err) => console.log(err));
```

5. MongoDB Atlas for Managed Database
   For my e-commerce project’s production environment, I used MongoDB Atlas for the following reasons:
   Managed Service: Atlas automatically handles database maintenance tasks, such as backups, updates, and monitoring, saving a lot of administrative time.
   Automatic Scaling: As the traffic and data grew, Atlas allowed me to easily scale the cluster vertically (by adding more resources) or horizontally (by adding more nodes).
   Global Distribution: I leveraged Atlas’s ability to distribute data across multiple regions to improve latency and availability for users in different geographical locations.

```javaScript
    const mongoose = require('mongoose');
    const uri = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce';
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
        })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.log(err));
```

6. Backups and Alerts in MongoDB
   For data protection, I configured automatic backups in MongoDB Atlas. Regular backups ensure that I can restore data in case of a failure or data corruption. I also set up alerts for specific events, such as:
   Disk space usage: I received notifications if disk space usage exceeded a threshold, allowing me to address issues before they impacted performance.
   High latency: Alerts for slow queries or high replication lag helped me proactively manage performance bottlenecks.
   Backup failures: I configured alerts to notify me if a backup failed, ensuring that backups were always running as expected.
7. Connecting to MongoDB Cluster
   In my Node.js e-commerce project, I connected to the MongoDB cluster using the Mongoose ODM (Object Data Modeling) library:
   I used the MongoDB URI provided by Atlas to connect securely to the cluster. The URI included credentials, the cluster's address, and options like replica set information for high availability.
   Example connection string:
   const mongoose = require('mongoose');
   mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/myDatabase', {
   useNewUrlParser: true,
   useUnifiedTopology: true
   });
   For the self-hosted MongoDB, I configured a connection string to the replica set or standalone instance using the host and port details.

Summary of How These Features Were Used in the E-commerce Project
Replica Sets: Ensured high availability for the e-commerce database by using multiple nodes.
Sharding: Scaled the database horizontally to handle large amounts of product and order data.
MongoDB Atlas: Simplified database management by leveraging the fully managed service for backups, scaling, and monitoring.
Performance Optimization: Used indexes, capped collections, and query optimizations for fast response times and efficient resource usage.
Backups and Alerts: Configured automatic backups and set up alerts to ensure data safety and proactive issue resolution.
Geo Queries: Used MongoDB’s geospatial capabilities to enhance location-based features like store locators and delivery radius.

Additional Example for Geo-Location Queries (GeoJSON):

```javaScript
Adding GeoJSON Data:
const locationSchema = new mongoose.Schema({
  name: String,
  coordinates: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  }
});
locationSchema.index({ coordinates: '2dsphere' }); // Add geospatial index

const Location = mongoose.model('Location', locationSchema);

// Example data insertion
const location = new Location({
  name: 'Coffee Shop',
  coordinates: {
    type: 'Point',
    coordinates: [-73.856077, 40.848447]
  }
});

location.save()
  .then(() => console.log('Location saved'))
  .catch(err => console.log(err));
Finding Places Within a Radius:
const radius = 5000; // radius in meters

Location.find({
  coordinates: {
    $nearSphere: {
      $geometry: { type: "Point", coordinates: [-73.856077, 40.848447] },
      $maxDistance: radius
    }
  }
})
  .then(places => console.log(places))
  .catch(err => console.log(err));
```

I used Sequelize ORM to define a User model, hashing passwords with bcryptjs before saving.
Instead of storing JWTs in localStorage (vulnerable to XSS attacks), I store access and refresh tokens in HTTP-only, Secure cookies. Refresh tokens allow users to get a new access token without logging in again
Access tokens are short-lived (15 minutes), while refresh tokens are long-lived (7 days). The access token is used for API requests, and the refresh token is used to get a new access token when it expires.
On login, I send the access token in the response and store the refresh token in an HTTP-only, Secure cookie
When the access token expires, the client sends a request to /refresh-token. The server verifies the refresh token and issues a new access token
I updated the authMiddleware to extract JWTs from the Authorization header and validate them.
On logout, I clear the refresh token cookie.
Only authenticated users can access this route using a valid access token.
I implemented JWT authentication with HTTP-only Secure cookies and refresh tokens in my Node.js API using Sequelize. The access token is short-lived (15 mins) and sent in the response, while the refresh token is stored in an HTTP-only, Secure cookie (7 days). When the access token expires, the client can request a new one using the refresh token, reducing frequent logins. I also secured protected routes using middleware and followed best practices for production security.

S3 CloudFront ECS Fargate Xray (we can not access EC2 instances created by fargate so we )
S3 CloudFront Route 53 for ReactJS, ECS Fargate, Xray, Cloudwatch, AWS CICD, Redis, MongoDB(Atlas), Secrets Manager, Sonarcloud, Node JS

JAVASCRIPT : C:\Users\Ghost\Desktop\Last_Practise\2.JS\Readme.md

​​callback function in JavaScript is function that is passed as argument to another function or higher order function. When the higher order function completes the asynchronous task It automatically gets executed when the higher order function completes the asynchronous tasks

TESTING :
Unit testing : the goal of unit testing is to validate the behavior of individual functions, methods or just unit of your application code
Integration testing : testing multiple units of code together, for example you have controller function which fetch something from database you can unit test each of these individually but then by integration testing you check how they work well together like the function is able to get the data from the database.
End-to-end testing : runs app in simulated environement & emulate user behavior e.g cypress

JavaScript Node JS AWS DevOps

# ==========================================================================================================================

John Smilga final steps :
Steps
install express & create app
First we have to install express js framework in our project, then we have to import express js in our project

Role-Based Access Control (RBAC) :
I implemented RBAC (Role-Based Access Control) in my Node.js application using JWT (JSON Web Tokens) and middleware to restrict access based on user roles.

# ==========================================================================================================================

Project : Elastic Beanstalk : CRM real estate

Type definition typeDefs : represents the interface for API, they declare what clients can request
Resolver : are the implementation, they provide that knows how to return the actual values

Rest APIs are a stateless client-independent API for exchanging the data. We dont render views, we dont store sessions, we dont care about the client. We only get requests, parse the data & return responses with json data.
GraphQL API are also are a stateless client-independent API for exchanging the data but with higher query flexibility.

When you have different data requirements for different pages then use GraphQL.

Both GraphQL and REST APIs are used for exchanging data between clients and servers.
A REST API has multiple endpoints (/posts, /users, etc.). GraphQL has just one endpoint (e.g., /graphql).

GraphQL is a flexible alternative to REST APIs. Instead of multiple endpoints like REST APIs, it uses a single endpoint (/graphql). The client requests only the data it needs, reducing unnecessary data transfer. This makes frontend-backend collaboration smoother and more efficient.
GraphQL requests are always POST requests to one endpoint. The request body contains a GraphQL query, which tells the server what data to fetch.

GraphQL Query :
{
Operation type: { // Query / Mutation / Subscription
Operation endpoint: {
requested fields
}
}
}
GraphQL has three main operation types:
Query Definitions : Fetches data (similar to GET in REST).
Mutation Definitions : Modifies data (similar to POST, PUT, DELETE in REST).
Subscription Definitions: Allows real-time updates (like WebSockets).

GraphQL has typeDefs and resolvers:
typeDefs: Define what data is available (like a blueprint).
Resolvers: Fetch the actual data (like a controller in REST).

GraphQL Flow Summary :
1.Client sends a request with a GraphQL query. The query contains Operation type, Operation endpoint & requested fields by the client.
2.GraphQL server receives the request and looks for the matching Query Definitions, Mutation Definitions, or Subscription Definitions in the typeDefs.
3.Resolvers fetch the actual data from the database. Resolvers are the functions that contains server side logic
4.GraphQL server processes the query and filters only the requested fields.
5.Client gets the response with only the required data.
This reduces unnecessary data transfer and makes frontend development more flexible

Comparing Both :
Type definitions are like routes in REST APIs & Resolver function is like controller function in REST APIs.

graphql package used to define schema of graphql service
express-graphql package used to install a simple server that will do the parsing of incoming request
install these packages
Create graphql folder inside it schema.js & resolver.js
In Schema.js :
import buildSchema function by importing graphql
using buildSchema function we describe our schema inside backticks : schema { query: { }}

In the resolver we return all the data (hardcoded).

npm i graphql express-graphql

✅ Step 1: Import buildSchema
✅ Step 2: Define Object Types (User)
✅ Step 3: Define Queries (getUser, getAllUsers)
✅ Step 4: Define Mutations (createUser)
✅ Step 5: Export the Schema

✅ Step 1: Install mongoose.
✅ Step 2: Connect MongoDB in app.js.
✅ Step 3: Define the User model.
✅ Step 4: Write resolvers for queries & mutations using Mongoose.
✅ Step 5: Start the server.
✅ Step 6: Test GraphQL queries & mutations.


==========================================================================================================================
Project John Smilga : E Commerce
Basic Express Server : First we have to initialize the project using npm init command then we have to set main file of our application in package.json. After that we need to install express package by using command npm install express. Then in main application file app.js we need to import express & create instance of the express app using express function. In the next step we need to specify the port on which our application runns, then we need to use listen method on express instance which starts listening for incoming HTTP requests on our server.

Connect To DB : To connect our express app to mongo db atlas database first we need to install mongoose & dotenv packages in our project. We also need to import mongoose & dotenv in the main application file. After that we need to login to mongo db atlas then we have to copy the connection string. In the next step we need to create dot env file in root directory of our project & paste the connection string & assign it to a variable. After that we use connect() method provided mongoose which takes connection string as a parameter to establish the connection.

Basic Routes : First in main application file we need to set the GET request for the home page. Then we have to mount express.json() as a middleware which parse the incoming request body into javascript object which we can access via req.body.
First, we mount the 'not found' middleware for routes that do not exist in our application. In this middleware, we send an appropriate response to the user with a 404 status code. It’s important not to call the next() function after sending a response, as it can lead to issues like the 'Headers already sent' error, because the next middleware in the stack may send another response, resulting in multiple responses being sent. Additionally, we must mount this middleware after defining all the routes.

notFound vs ErroHandler Middleware :
Next we must place global error handling middleware after not found middleware. The order of these two important because Global error handler only catches errors in existing routes and middlewares, it won't handle unknown routes or the route that does not exists in our application (404 errors) properly.

Morgan Package :
Next we have to install 'morgan' which is logging middleware that logs the incoming requests to the console.

Final order of middlewares :
morgan > express.json() > all the routes middlewares > notfound middleware > error handling middleware.

Error Handling Middleware (Route-Specific) :
app.get('/user', (req, res, next) => {
try {
throw new Error('User not found');
} catch (error) {
next(error); // Passing error to next middleware
}
});
Global Error Handling Middleware (Catches All Errors) :
app.use((err, req, res, next) => {
console.error(err.message);
res.status(500).json({ message: 'Internal Server Error' });
});

We have used the MVC architecture in our Node.js project.
Model : In a Node.js application, the Model plays a crucial role in handling business logic, data validation, and database interaction. It begins with defining the schema structure and specifying the data types and validation rules. The Model can also include instance and static methods for manipulating data, such as custom query functions or business logic methods. Additionally, Mongoose supports pre and post hooks (middleware) to run custom logic before or after certain actions like saving, updating, or deleting documents. The Model allows the use of aggregation functions for complex data operations, provides options for virtual fields, and supports automatic timestamp generation for records. It can handle sensitive data encryption, populate references to related documents, and manage batch operations efficiently. By keeping business logic in the Model, we maintain a Fat Model, Thin Controller architecture, where the Controller focuses mainly on managing HTTP requests, while the Model performs the heavy lifting related to data handling and interaction with the database.
Views : In a Node.js application, Views are responsible for the presentation layer, primarily rendering the user interface that is sent to the client. Typically, Views are stored in a views directory, containing templates or HTML files. These templates can be dynamic, allowing data from the backend (such as user details or product information) to be inserted into the HTML before it’s sent to the browser. In the context of server-side rendering (SSR), View engines like EJS, Pug, or Handlebars are often used to create templates that allow embedding of dynamic content. Views can also include static files, such as images, CSS, or JavaScript, that help structure and style the page. By separating the user interface from the business logic (which is handled by the Controller and Model), Views ensure that the application maintains a clear separation of concerns. They provide an organized way to manage the presentation of data, making the application easier to maintain and scale.
Controller : In a Node.js application, the Controller acts as the intermediary between the Model and the View, handling the logic for processing user requests. It is responsible for receiving input from the user, interacting with the Model to retrieve or manipulate data, and then passing that data to the View for presentation. The Controller manages the application's flow, determining what data to fetch, how to process it, and what responses to send back to the user. Controllers often handle tasks like form validation, authentication, session management, and error handling. By delegating business logic and data manipulation to the Model, the Controller remains lightweight, focusing mainly on managing HTTP requests and responses. It helps keep the application structured by isolating the concerns of user interaction, making it easier to maintain and modify.

In MVC architecture Views folder used for Server-Side Rendering (SSR). In Node.js applications, when a client makes a request, the server uses a template engines like EJS, Handlebars or pug to generate dynamic HTML pages. These dynamic pages are served to the client, typically containing data fetched from a database or other services.
Client-Side Rendering(CSR) :
In Node.js applications with Client-Side Rendering (CSR), when a client makes a request, the server typically serves a minimal HTML page along with JavaScript files that handle rendering on the client side. The JavaScript framework or library (like React, Angular, or Vue) takes care of fetching data from the server via APIs and dynamically updating the page in the browser. The page is rendered entirely on the client side, allowing for smoother interactions and faster updates without needing to reload the entire page. This approach improves user experience by enabling real-time content updates and providing a more interactive, app-like feel to the website.

User Model : To implement RBAC in our project, we added a roles field in the user schema, using an enum validator to limit the roles to a predefined set like 'admin' or 'user'. This ensures that users are assigned only valid roles, which helps manage access and permissions within the application. Also, we have added 'user' as the default role, ensuring that if no role is explicitly assigned, the user will automatically have a basic 'user' role.
Admin has more privileges than normal user. It has privileges like view all the users, add or remove products, view all orders etc.
In most cases, whether to allow users to select their role as admin or user is controlled by the frontend. The frontend can restrict this option in the UI, preventing normal users from selecting the admin role during registration. However, backend validation is still necessary to enforce security and prevent users from bypassing the frontend by sending requests directly. To ensure security at the backend, instead of using the entire req.body to create a user, we can destructure it and extract only the required fields. This prevents users from sending extra or unauthorized data, such as manually assigning themselves an admin role.
To set an admin for our application, we can log in to MongoDB Atlas and manually change the user's role to "admin." Alternatively, in the controller, we can automatically assign the first registered user as an admin by checking if there are no existing users using the countDocuments method.

Validator Package : For email validation we have used validate field provided by mongoose. It has two properties validator & message. The validator is a function that checks whether the email is valid & message property displays a message if validation fails. In validator we can set up our own function with regular expression for input validation or we can use validator package which provides built-in validation methods like isEmail() for email validation.

Route : A route is a specific URL path that the server listens to and responds to.
Route Method : Specifies HTTP method (GET, POST, etc.) to define how the client interacts with the server.
Route Handler : Function that processes the request and sends a response.
Middleware : Function that runs before or after route handler.
const authMiddleware = (req, res, next) => {
console.log('User is authenticated');
next();
};
Route Parameters : Used to capture dynamic values from the URL (req.params).
app.get('/user/:id', (req, res) => {
res.send(`User ID: ${req.params.id}`);
});
Query Parameters : Used for optional parameters in the URL (req.query).
app.get('/search', (req, res) => {
res.send(`Search term: ${req.query.q}`);
});
If the request is /search?q=node, it returns Search term: node.
Body (req.body) : Used to receive data sent in a POST or PUT request.
Route Grouping : Organizing multiple related routes using Router().
const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
Route Protection : Used to restrict access to routes based on authentication/authorization.
const authMiddleware = (req, res, next) => {
if (!req.user) return res.status(401).send('Unauthorized');
next();
};
Global Error Handling : Catches and handles errors in all routes.
app.use((err, req, res, next) => {
res.status(500).json({ message: err.message });
});

Auth Routes Structure :
For auth route structure we have used three routes register, login & logout. The register route handles new user sign-ups by validating input and storing user data securely. The login route authenticates users by verifying their credentials and generating a session or token. The logout route ensures users can securely end their session, removing their authentication token or clearing their session data. This structure helps manage user authentication efficiently in our application.
For register & post requests use POST method & for logout request use GET method. It is important to import controllers in route definition file & import auth router in main application file & mount it as a route level middleware to a specific path such as /api/v1/auth.

Postman Environment Setup :
In postman set up environment by clicking on eye button, give name to environment & set Variable as 'URL' & initial & current value http://localhost:5000/api/v1. Before making any request first select the environment & use variable in the path like {{URL}}/auth/register, {{URL}}/auth/login, {{URL}}/auth/logout.

Register - Initial Setup : first import the User model & errors folder which contains all the error handling classes like base error class(CustomError), bad-request class(BadRequestError), not found class, unauthenticated class etc.

Register - Unique Email
User Roles :

Hash Passwords : For hashing password we have used bcryptjs package in the User model. This is done using a pre-save hook, which runs before saving the user to the database. In this hook, first we generate salt rounds (random string) using genSalt() method of bcrpt, then we use hash() method of bcrypt which takes password & generated salts as a parameter.
Pre save hook runs before saving a document to the database & pre save hook gets trigerred when we call :
1.document.save()
2.Model.create()
3.findOneAndUpdate() (if { new: true, runValidators: true, context: 'query' } is set)
Next, we need to set an instance method on the user schema to compare passwords when a user tries to log in. First, we create an instance method named comparePasswords, which takes the user-entered password as a parameter. Then, we use the compare method from the bcrypt package, which takes both the entered password and the stored hashed password from the database. Instead of directly comparing them, bcrypt extracts the salt from the stored hash, rehashes the entered password using that salt, and then checks if the newly generated hash matches the stored one.
Must store the compare results in variable & return it at the end of the function

Instance method Vs Static method :
Instance Method :
Defined & called on an individual document or instance of a model & used when working with a single document.
Mostly used for Comparing passwords during login, formatting document data before returning
userSchema.methods.comparePasswords = async function (enteredPassword) {
return bcrypt.compare(enteredPassword, this.password);
};
const user = await User.findOne({ email });
const isMatch = await user.comparePasswords(enteredPassword);

Static method :
Defined & called on an model itself Used when performing operations at the model level
Mostly used for finding users, counting documents, aggregating data etc.
userSchema.statics.findByRole = async function (role) {
return this.find({ role });
};
const admins = await User.findByRole("admin");

JWT Setup : It is commonly used for
Using JWT for authentication and authorization is a secure way to transmit information between a client and a server. When a user logs in, the server generates a JWT token, using payload & secret then server sends it back to the client. The client stores this token usually in localStorage or in cookies and includes it in the headers of future requests. When server gets next request from the client, it extracts the token which contains three parts : Header (algorithm & type), Payload (user data & claims), and Signature (to verify authenticity). Then it recalculates the signature using extracted header and payload with the secret/public key stored on the server. If the recalculated signature matches the one in the token, then token is valid. Otherwise, the token is rejected.
To create a JWT token, we use the sign() method, which takes the payload (such as user ID) and a secret key as parameters. To verify the token sent by the client in a request, we use the verify() method. This method takes the token and the same secret key used for signing. If the token is valid, it returns the decoded payload; otherwise, it throws an error, indicating that the token is invalid or expired.
In the response we send both payload(tokenUser) & jwt token.

Refactor JWT Setup

Cookies Setup : Best Practice: Use Cookies for Refresh Token & Send Access Token in Headers.
Send the Authorization header with a Bearer Token stored in the client's memory, such as in React state. This prevents XSS attacks that could occur if stored in local storage. For security, keep the access token short-lived (e.g., 15 minutes).
In case of refresh token you must store it in an HttpOnly, Secure, SameSite=Strict cookie which prevents XSS & CSRF attacks both. Also keep refresh roken long-lived for seamless session management.
res.cookie('token', token, {
httpOnly: true, // Prevents client-side JavaScript access, reducing XSS risks
secure: true, // Ensures the cookie is sent only over HTTPS
sameSite: 'Strict', // Prevents the cookie from being sent with cross-site requests (CSRF protection)
maxAge: 15 _ 60 _ 1000, // Sets expiration time (15 minutes) in milliseconds
path: '/', // Makes the cookie available across the entire domain
domain: 'example.com', // Restricts the cookie to a specific domain
});

Parse Cookies : It is used to access the cookies from the request using req.cookies. cookie-parser is a middleware for Express that parses cookies from incoming HTTP requests. It allows you to easily read and manage cookies in your Node.js application.
We install cookie-parser & import it in main application file & mount it as middleware. To check the cookie create a dummy route in main application file below home page route of application :
app.get('/api/v1', (req, res) => {
console.log(req.cookies);
res.send('cookies sent')
})
In postman first make request to register route which will return a cookie & then Make GET request from POSTMAN to {{URL}} or /api/v1 route, check in console we see token.
After that again make request to register route which will again return a cookie then delete the cookie manually from the postman & now Make GET request from POSTMAN to {{URL}} or /api/v1 route, check in console we see no token, we only see [Object: null prototype]{}

Refactor Cookies Setup :

Signed and Secure Flags :
The secure option in cookies ensures that the cookie is only sent over HTTPS connections. In production we are using secure option in development we dont need to use it.
Also we have used signed as true for production which basically adds a cryptographic signature to verify integrity and prevents tampering. It basically store signature separately in the cookie header.
app.use(cookieParser(process.env.JWT*SECRET)); // Middleware to sign/verify cookies
res.cookie('token', 'user123', {
httpOnly: true,
secure: true,
signed: true, // Adds signature
expires: new Date(Date.now() + 1000 * 60 \_ 60 \* 24) // 1 day expiry
});
In dummy route for cookie : add console.log(req.signedCookies);  
How It Works:
1.The server signs the cookie value using the secret key provided in cookieParser('yourSecretKey').
2.The signed cookie is stored in the browser.
3.When the client sends the cookie back, the server verifies the signature to check if the cookie was modified.

Login Route
Logout Route : For logout we just remove the cookie
Cookies - Big Picture and "Gotchas"

Every controller & routes initial setup :
add controller file > write required controller functions with res.send('') & export them > create route file > import express router object > import all controller functions > setup the routes for each controller function > import route file in app.js & mount it as a route level middleware > finally test all
In controller file import model and errors

User Routes - Structure : getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword
Always put route with route parameters at the last in routes file.
for getAllUsers : find user with role is 'user' & do not password send password in response
for getSingleUser : find one user with id provided by req.params.id & do not password send password in response. check if user exists or not send NotFoundError

User Routes - Postman
getAlIUsers and getSingleUser

Authenticate User - Setup
We are accessing cookie from login here
Since getAllUsers is accessible only for admin, we have to create authentication middleware.
Create authenticateUser middleware : since we have signed our cookies the token is located in req.signedCookies.token
check if token present or not & must use next()
As all our user routes need user authentication :
1.We can import authenticateUser middleware in app.js & mount it in front of userRouter
2.Or you can import & set authenticateUser middleware in user routes

Authenticate User - This middleware is responsible for authenticating users using a signed cookie (cookieToken). It ensures that only authenticated users can access protected routes.
Steps : Extracts Token > Checks Token Existence > Verifies Token > Attaches User to Request > Calls next()
add authenticateUser in front of getAllUsers in userRoutes

Authorize Permissions - Setup : This middleware restricts access to specific roles, ensuring that only authorized users can access certain routes.
Steps : Accepts Allowed Roles as parameter > return a middleware function > in middleware function it Checks User Role > Denies Access If Unauthorized > Proceeds If Authorized calling next()
add authorizedPermissions in front of getAllUsers & behind the authenticateUser in userRoutes

ShowMe Controller : ensures that the user remains logged in even after a page refresh. It retrieves user details from the signed cookie and sends them back if authentication is valid.
when user refresh the page, authenticate the user using authenticateUser & get the properties that we get back from the cookie which are name, userId & role
One line code : just send 200 response with req.user in response
add authenticateUser in front of showCurrentUser in userRoutes

IMP : You only generate a new cookie when the update affects the payload inside the authentication token (JWT) or the session data.
We have used authenticateUser middleware in userRoutes which authenticate the user, so we dont need to create cookies while updating password. And password is not part of our JWT payload so we dont need to create new cookie.
UpdatePassword Controller : This function allows authenticated users using authenticateUser middleware to update their passwords securely. It ensures that the old password is verified before updating it with the new one.
Steps : Extracts Passwords > Validates Input > Finds User > Verifies Old Password > Updates Password > Sends Success Response

CreateTokenUser Function

UpdateUser Controller — FindOneAndUpdate() : used to update user details, except password coz we already have updatePassword for user password update.
We have name, email, password, role in user model :
we already have updatePassword for user password update
Since users should not be allowed to change their role (e.g., from "user" to "admin"), we are not including it here
So we just have two properties left to update : name & email - Since name is property that we used in payload we need to create a new cookie, coz our payload is updated, if there is only email update dont create cookie.
2 ways :

1.Using findOneAndUpdate : this does not trigger presave hook of hashing password
2.Using findById / findOne and save() : this trigger pre save hook of hashing password & changes password. To avoid this hashing password we use isModified() method in presave hook condition : if (!this.isModified('password')) return
Which means, if the password has not been modified, exit the function. Only if the password is being modified, proceed with hashing.(जर पासवर्ड बदलला नसेल, तर फंक्शन थांबावे. पासवर्ड बदलला जात असेल तरच तो हॅश करण्याची प्रक्रिया सुरू करावी)
Problem : When we try to update user information such as email & name, it automatically update the password coz of presave hashing password. Solution : use isModified('password') in pre save hook
IMP :
// Error is thrown only if if-block becomes true
if(!email || !name) {
// one of the condition or both conditions must be true to throw the error
  throw new CustomAPIError.BadRequestError('Please provide all values');
}
Explanation:
lets say user provided email only in req.body, so !email becomes false & !name becomes true => false || true gives true & error is thrown
lets say user provided both email & name, so both becomes false & error is not thrown
lets say user provided both email & name, so both becomes false & error is not thrown

if(!email && !name) {
// both conditions must be true to throw the error
  throw new CustomAPIError.BadRequestError('Please provide all values');
}
lets say user provided only email, so email become false & name becomes true : false && true returns false no error thrown
lets say user provided both email & name, both conditions become true & error is thrown

UpdateUser Controller - user.save()
There are two concepts :
1.running validators
2.triggering hooks
Only new User().save() & User.create() methods : runs validators default & triggers document middleware (NOT query middleware). For other mongoose methods like FindOneAndUpdate we need to runValidators explicitely but they do not trigger document middleware.

Mongoose provides two types of middleware (hooks) that allow you to run logic before or after certain operations
Document middleware :
UserSchema.pre('save', function (next) {
  console.log('Hashing password...');
  this.password = hashFunction(this.password); // Hash password before saving
  next();
});
UserSchema.post('save', function (doc, next) {
  console.log(`User ${doc.email} was created`);
  next();
});
Query middleware :
UserSchema.pre('findOneAndUpdate', function (next) {
this.set({ updatedAt: new Date() }); // Update timestamp before modifying
next();
});
UserSchema.post('findOneAndUpdate', function (doc, next) {
console.log(`User ${doc.email} was updated`);
next();
});

IMP : updateUser with findOneAndUpdate() & if(!this.isModified('passsword')) return : password mess - you register but you cant login with the registered credentials

Sucker :
const user = await User.findById(req.user.userId) + await user.save()
When not used if(!this.isModified('password')) return : "msg": "Invalid Credentials"
When used if(!this.isModified('password')) return : It works
const user = await User.findOne(req.user.userId) + await user.save()
When not used if(!this.isModified('password')) return : "msg": "Invalid Credentials"
When used if(!this.isModified('password')) return : It works
const user = await User.findOne(req.user.userId) + await user.save()
When not used if(!this.isModified('password')) return : It works
When used if(!this.isModified('password')) return : It works

CheckPermissions for getSingleUser Function : One user can access the other user (using id), to avoid this :
Allow access if the user is admin OR the requested user is the logged-in user
Auth Complete

Product Model : create schema with : name, price, description, image, category, company, colors, featured, freeShipping, inventory, averageRating, user
set timestamp also

Product Routes - Structure :
set up functions : createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct, uploadImage
only getAllProducts and getSingleProduct accessible to public, all other routes are accessible only to admin
Product Routes - Postman
createProduct : .post([authenticateUser, authorizedPermissions('admin')], createProduct)
getAllProducts : public access
getSingleProduct : public access
updateProduct : .patch([authenticateUser, authorizedPermissions('admin')], updateProduct)
deleteProduct : .delete([authenticateUser, authorizedPermissions('admin')], deleteProduct)
uploadImage : .post([authenticateUser, authorizedPermissions('admin')], uploadImage);

CreateProduct Controller :
userId on req.user object (we get req.user from authenticateUser), we set this userId as a user property (referenced in ProductSchema)
req.body.user = req.user.userId : It assigns the authenticated user's userId from req.user to req.body.user. Ensures only authenticated users can add products & Helps track who created the product.
It assigns userId property from req.user (authenticateUser) to the user property(added by us) of req.body. This ensures the created resource is linked to the authenticated user.
getAllProducts : find({}), in response send products & count  
getSingleProduct : extract id from req.params.id & rename it as productId, use findOne with \_id is productId, if no product found return not found error
updateProduct : extract id from req.params.id & rename it as productId, use findOneAndUpdate with \_id is productId, data that we want to update from req.body, options new & runvalidators, if no product found return not found error
deleteProduct : extract id from req.params.id & rename it as productId, use findOne with \_id is productId, if no product found return not found error, use remove() method on product to delete product : await product.remove(), in response send message of product remove

uploadImage :
1.using express-fileupload package
import express-fileupload & mount it as middleware, also mount express.static('./public') in app.js
throw bad request error if no file uploaded by user use req.files to check,
extract image from req.files.image as productImage, if mimetype of the productImage does not starts with 'image'(using startsWith() method) then throw bad request error,
set maxSize for image, if productImage.size > maxSize throw error bad request,
create imagePath using path module (path.join()) with '../public/uploads/' and productImage.name,
use mv function to move productImage to imagePath we defined using await,
in response send object of { image: `/uploads/${productImage.name}`}

2.using multer fileupload package :
IMP :
path.resolve() is better for ensuring you get absolute paths. (always use this one)
path.join() is useful when you don’t want to resolve but just build a path.
express-fileupload & multer do not work together, Always comment imports & mount of express-fileupload (app.js) if you want to use multer
create middleware for multer configuration : uploadMiddleware.js
import multer & path module
create file upload directory 'dir' using path.resolve() & '../public/uploads' path (DONT USE path.join())
1.Configure storage : Use multer.diskStorage() to set up the multer storage engine settings
destination: It is a property of the storage object which takes a function with (req, file, cb) parameters, this function is executed every time a file is uploaded. The cb (callback) function sets the folder where the file will be stored. (we set null for error, callback functions always takes null as a first parameter)
filename : It is same as destination but destination is used to set the folder in which we want to save the file while filename is used to set the name of the file before saving it.
2.set file filter :
create function fileFilter with (req, file, cb) as parameters
Define Allowed File Types using regex
get file extension using path.extname & check if it matches allowed fileTypes using test()
get file's MIME type & check if the MIME type is valid.
If both extname and mimetype are true, allow the file (cb(null, true)), else throw error
3.Initialize multer with above configuration : call multer function with above storage, fileFilter, limits with fileSize as 1MB & export it
In productRoutes use : import multer middleware
for single file upload :
router.route('/upload').post([authenticateUser, authorizedPermissions('admin'), upload.single('file')], uploadFile);
for multiple file upload :
router.route('/upload-multiple').post([authenticateUser, authorizedPermissions('admin'),upload.array('files', 3)],uploadMultipleFiles);
In uploadFile controller :
To handle single file upload : if the user doesn't upload a file (!req.file) throw a Bad Request error, in response send object with property {imagePath: `/uploads/${req.file.filename}`}
In uploadMultipleFiles controller :
To handle multiple file upload : if the user doesn't upload a file (!req.file) or if length of req.file array is zero then throw a Bad Request error, use map() method on req.files array & return `/uploads/${file.filename}` from it

Review Model :
Use mongoose.Schema.ObjectId when defining fields in a Mongoose schema. It is the standard and recommended way.
Use mongoose.Types.ObjectId when you need to create a new ObjectId manually or when you need to explicitly reference the ObjectId type outside of a schema.
Create review model with rating, title, comment, user, product (for both user & product use type: mongoose.Schema.ObjectId & required as true) & timestamps(adds createdAt & updatedAt)
Functionality : One user can add one review per product. We can do it in two ways :
1.Using indexing on schema : using compound on both user & product
ReviewSchema.index({ product: 1, user:1 }, { unique: true }); // only one review per product per user
2.Putting logic in the controller

For production & development environement :
"scripts": {
"start": "set NODE_ENV=development && nodemon app.js",
"start:prod": "set NODE_ENV=production && nodemon app.js",
"debug":"ndb app.js"
},

Review Routes Structure :
Reviews are tied to user & product. A user leaves a review on the product.
Review Routes - Postman
Create Review Controller :
extract productId from req.body & rename it as product
check if productId is valid using findOne()
if not valid send NotFoundError error
check if review is already submitted by the user using findOne({product: productId, user: req.user.userId})
if review is already submitted send BadRequestError error
assigns the authenticated user's ID (req.user.userId) to the user field in req.body(req.body.user), this ensures that review is linked to the correct user before saving it in the database.
create review using req.body
in response send 201 with created review
Get All Reviews and Get Single Review Controller :
Get All Reviews :
find all reviews using find({}) & chain populate method on it for product & select fields from product : name, company & price
Get Single Review :
extract id from req.params & rename it as reviewId
check if reviewId provided exists in the database using findOne()
if no review found send NotFoundError
in response send 200 with review
Update Review Controller :
Extract id from req.params and rename it as reviewId.
Extract rating, title, and comment from req.body.
Check if reviewId exists in the database using findOne().
If no review is found, throw NotFoundError.
checkPermission :
Check if the authenticated user is an admin or the review owner.
If authorized, update the rating, title, and comment fields.
Save the updated review in the database.
return & Send a 200 response with the updated review.
If unauthorized, throw UnauthorizedError.
Delete Review Controller :
Extract id from req.params and rename it as reviewId.
Check if reviewId exists in the database using findOne().
If no review is found, throw NotFoundError.
checkPermission :
Check if the authenticated user is an admin or the review owner.
If authorized, delete the review using deleteOne().
return & Send a 200 response with a success message.
If unauthorized, throw UnauthorizedError. 🚀

Populate Method : It allows us to reference document in other collection. We could get specific information about the product when we requesting the reviews. When you want more information about the product like name, company & price when we request all the reviews.
When we do not use populate it only return ObjectId, but when we use .populate() it replaces the ObjectId with the actual document or only the specified fields from the referenced model.
Used populate in get all reviews :
const reviews = await Review.find({}).populate({path: 'product', select: 'name, company, price'});
functionality : when we query for get all reviews it will show product with name, company & price.

Mongoose Virtuals : Getting all the reviews related to the single product. Since we have not connected product & reviews. In product model we dont have reference of review, but in review model we have reference of product & user both.
product - no review reference, review - reference of product & user.
When we have 2 models, 1st & 2nd : When 1st model does not have a reference to 2nd model but 2nd model has reference of 1st model. Then we can use virtual populate to establish a relationship without storing an actual reference in the first model.
Fields that we can define on our schema but it will not be persisted, means these fields will not be saved in the database. Usually we virtual properties by deriving it from existing field. For example we are storing the DOB of the user in the database. From this we can calculate the age of the user without storing it in actual database using virtuals.
For get single product review : Mongoose virtuals are used to define properties that do not get stored in the database but are computed dynamically. They are useful for scenarios where you need derived data based on existing fields.
To do this we have to use mongoose virtuals. Virtuals are the properties that do not persists or are stored into the database. They only exists logically. We create virtuals on the fly when we want to create something.
Virtual fields are not automatically included in Mongoose queries. You must explicitly populate them to fetch the related documents.
functionality : when we query for single product it should return all the reviews associated with that product.
Steps :
1.Enable virtuals(true) for JSON(toJSON) & Object(toObject) in Product schema (next to timestamp)
2.in getSingleProduct with findOne() chain populate with reviews only (No fields selection)
3.In Product schema :
Create a virtual field named reviews in the ProductSchema.
Reference the Review model using ref: 'Review'.
Map the \_id field of Product (localField: '\_id') to the product field in Review (foreignField: 'product').
Set justOne: false to indicate that a product can have multiple reviews.  
 ProductSchema.virtual('reviews', {
ref: 'Review',
localField: '\_id', // Product model
foreignField: 'product', // Review model
justOne: false,
// match : { rating: 5} // to filter the documents
})
We can match specific documents only in results using match option.
POSTMAN : get all reviews > copy product id > get single review > paste product id > we see all the reviews related to the specific product in an array

Alternative to get single product review :
We can not query on virtual properties coz they are not saved into the database. Since we have access to the product in the review model , we set up controller getSingleProductReviews in reviewController & then we will import it into product routes.

Both of above approaches (getSingleProduct & getSingleProductReviews) are used to fetch multiple reviews for a single product. If your API frequently needs product details along with reviews, getSingleProduct is better since it reduces the number of database queries. If your API only needs reviews separately (e.g., a review section on a product page that loads independently), getSingleProductReviews is more efficient.

Remove All Reviews : since remove() is deprecated in mongoose, we need to use query middleware hook pre 'findOneAndDelete', which will delete all associated reviews related to the product before deleting a product. This ensures that whenever Product.findOneAndDelete({ \_id }) is called, all reviews linked to that product are also removed.
In deleteProduct controller use findOneAndDelete() which triggers pre-findOneAndDelete hook & deletes all reviews before deleting product.
✅ Product Deletion (findOneAndDelete) triggers the hook → Deletes all reviews linked to that product.
✅ Single Review Deletion (findOneAndDelete in deleteReview) works independently.
delete product route is only accessible to admin, so it does not matter which user created review, admin can delete any product & review.
ProductSchema.pre('findOneAndDelete', async function (next) {
try {
const product = await this.model.findOne(this.getFilter()); // Get the product being deleted
if (product) {
await product.model('Review').deleteMany({ product: product.\_id }); // Delete all related reviews
}
next();
} catch (error) {
next(error);
}
});

const product = await this.model.findOne(this.getFilter()) :
this.getFilter() retrieves the query filter used in findOneAndDelete({ \_id: productId }), which contains the product ID.
this.model.findOne(this.getFilter()) finds the product document that is about to be deleted.
await ensures the function waits for the database query to complete before moving to the next step.
This step is necessary because findOneAndDelete does not pass the deleted document to hooks automatically.

const deleteProduct = async(req, res) => {
const { id: productId } = req.params;
const product = await Product.findOneAndDelete({\_id: productId});
if(!product){
throw new CustomError.NotFoundError(`No product with id ${productId}`)
}
res.status(200).json({ msg : 'Success! Product and its reviews have been removed' })
}

Aggregate Pipeline - Setup :
Automatically update numberOfReviews & averageRating in product schema, when we create, update or delete a review using aggregate pipeline.
For averageRating we have created static method name calculateAverageRating on ReviewSchema
In the review schema add these :
ReviewSchema.statics.calculateAverageRating = async function(productId) {
console.log(productId);
}
ReviewSchema.post('save', async function(){
console.log('post save hook');
await this.constructor.calculateAverageRating(this.product);
})
ReviewSchema.post('deleteOne', {document:true, query: false}, async function(){
console.log('post delete hook called');
await this.constructor.calculateAverageRating(this.product);
})
post-deleteOne hook runs on query-based deletions by default (query: true) but it does not run on document instances by default (document: false default). So to make it run for document default we need to set { document: true, query: false } options explicitly.
And in order to trigger these hooks we need to use save() & deleteOne() methods in the respective controllers (updateReview & deleteReview)
calculateAverageRating static method is just logging the productId & we are calling it in post-save & post-deleteOne hooks.
POSTMAN : Get all products > copy product Id > Create a review by pasting productId in the body > update review rating > delete review > check in console we see 3 times productId is logged.

await this.constructor.calculateAverageRating(this.product) :
Here this.constructor refers to the Review model. Since calculateAverageRating is a static method of the model, we call it using this.constructor. this.product refers to the product field in the deleted document which is product id.

for instance methods - schemaName.statics.methodName : we call instance method on instance of the schema (document itself). Example comparePassword method in userModel - we used this comparePassword method in login controller as below :
const user = await User.findOne({ email })
const isPasswordCorrect = await user.comparePassword(password);
we have created 'user' instance from User model & on that 'user' instance we have called instance method comparePassword imported from userModel.

for static methods - schemaName.statics.methodName : we call static method on schema, Example calculateAverageRating method in review schema. We called calculateAverageRating static method in post-save & post-deleteOne methods.

Reset Database :
login as admin > delete all the product > add one product & 2 reviews for that product (one review by admin & other by user)

Aggregate Pipeline - Atlas GUI:
Aim : i wanna match all the reviews related to specific productId, group these reviews & get the averageRating & numOfReviews.
using aggregation GUI :
login in mongo atlas > click on reviews model > click on Aggregation > Add stage > select $match and add following code :
{
  "product": ObjectId('67d51e7fea34b2aaef66e179')
}
Add stage > select $group and add following code :
{
  _id: null,
	averageRating: {$avg: "$rating"},
  numOfReviews: {$sum: 1}
}
since we do not want to group by any field we use \_id as null & use $avg for averageRating & use $sum for numOfReviews.

Click on "EXPORT TO LANGUAGE" > select Node > check on Include Import Statements & Include Driver Syntax both options > copy the code > paste code in temp.js in model >

Aggregate Pipeline - Review Model
We have used aggregation pipeline inside calculateAverageRating static method (reviewModel.js) to calculate the averageRating and the numOfReviews.
ReviewSchema.statics.calculateAverageRating = async function(productId) {
console.log(productId);
const result = await this.aggregate([
{ $match: { product: productId }},
{ $group: {
_id: null,
averageRating: {$avg: '$rating'},
numOfReviews: { $sum: 1}
}}
])
console.log(result); // if we delete all the reviews, result will be an empty array & accessing first element of an empty array leads to an error. To avoid this we have used optional chaining (result?.[0]) below
try {
await this.model('Product').findOneAndUpdate({ \_id: productId }, {
averageRating: Math.ceil(result[0]?.averageRating || 0),
numOfReviews: result[0]?.numOfReviews || 0
})
} catch (error) {
console.log(error);
}  
}

If we delete all the reviews, the object inside aggregation pipeline array will be empty. So we need to first check if the object inside aggregation pipeline array is empty or not by using optional chaining inside calculateAverageRating static method.
if we delete all the reviews, result will be an empty array & accessing first element of an empty array leads to an error.[] TypeError: Cannot read properties of undefined (reading 'averageRating'). To avoid this we have used optional chaining (result?.[0]) in a findOneAndUpdate method. '?' is optional chaining operator.

Summary : We need to calculate averageRating & numOfReviews for the product. For this first we need to get all the reviews related to particular product id then we have to group those reviews using \_id as null & calculate averageRating using $avg & numOfReviews using $sum.
Why static method for aggregation : (not instance method)
Since we are performing calculations on multiple review documents(not on just one document), we used static method (not instance method). An instance method (this) would only give access to one review document, which is not useful for aggregation. If we used an instance method, this would refer to only one review, and we couldn't call .aggregate() at the model level. A static method gives access to the entire model (Review), so we can perform aggregate().
Then we have to set up post-save & post-deleteOne hooks & calling calculateAverageRating static method inside each of them. These two Mongoose post hooks are triggered after saving or deleting a review. They automatically update the product’s average rating whenever a review is added or removed.
Final Steps :
Target : change averageRating & numOfReviews whenever review is created or deleted
Steps :
1.create static method :
Accept productId as an argument.
Log the productId for debugging.
Use Mongoose aggregation & store result in variable : Stages of aggregation
Match reviews belonging to the productId.
Group reviews to calculate:
averageRating: The average of all review ratings.
numOfReviews: The total count of reviews.
Log the aggregation result.
Handle the case when all reviews are deleted: Use optional chaining (result[0]?.averageRating || 0) to prevent errors.
Update the Product model using findOneAndUpdate() & Set averageRating (rounded up) and Set numOfReviews.
2.Define Mongoose Post-Save Hook : This hook gets triggered when createReview controller is called & after review is created
Triggered after saving a new review.
Call calculateAverageRating(this.product) to update the product's rating.
Log "post save hook" for debugging.
3.Define Mongoose Post-Delete Hook : This hook gets triggered when deleteReview controller is called & after the review is deleted
Triggered after deleting a review.
Ensure this refers to the document (using {document: true, query: false}).
Call calculateAverageRating(this.product) to update the product's rating.
Log "post delete hook called" for debugging.
4.Define Mongoose Post-Delete Hook : This hook gets triggered when updateReview controller is called & after the review is updated
Triggered after updating a review.
It receives the updated document (doc) as a parameter.
If doc is null, it means no document was updated, so we exit.
Call the calculateAverageRating static method, which aggregates all reviews for the product and updates the Product model.
Log "post update hook called" for debugging.
Check final code in C:\Users\Ghost\Desktop\Node-Project\10-e-commerce-api\starter\reviewModel.js
To check averageRatings & numOfReviews : In postman call Get All Products
Practical Final :
login as admin > create a product(copy product id) > create a review(paste product id) > login as user > create a review (paste product id) > Check Get All Products or Get Single Product

Order Schema :
When it comes to orders, a big part of it is cart. Cart contains the items that user wants to buy.
We can store all the cart data :
1.in the local storage frontend or
2.we can store cart data directly in the database. or
3.we can store cart data in Redis before order is placed (before clicking checkout)& Save cart inside the orders collection once the order is confirmed(after clicking checkout).
We are using first option : Assuming that fronend sending all the cart data & test it using postman.
When user proceed for checkout : 1st we communicate with stripe & 2nd we setup the initial order.
But before communicating with stripe we check if all the cart data from the frontend is valid : product id check, product price check, then we communicate with stripe & then we setup the order. And then once payment is complete we get additional data which we add it to order

Order Structure : Create order schema using : tax : {type:Number}, shippingFee: {type:Number}, subtotal: {type:Number}, total: {type:Number}, orderItems:[], status:{type:String}, user, clientSecret:{type:String}, paymentId:{type:String}, set timestamps
As we are setting up we have validation for cart items. If any one of the field inside SingleCartItemSchema is missing or product id is tampered then we get error & user wont be able to submit the order
Order — Postman Setup
Create Order - Check Product :
From front end we are expecting - tax, shippingFee, items array with name, price, image, amount, product.
Create 2 products > copy id of them & create 2 orders using mockdata
Steps in short :
1.Extract data from req.body (items: cartItems, tax, shippingFee) and Validate it
2.Initializing Order Data : create orderItems empty array & assign subtotal variable to zero
3.Processing Each Cart Item : use for..of loop on cartItems.
In this loop using findOne look for product id in database whose \_id matches the item.product from cartItems. Assign it to variable name dbProduct
if no id found throw not found error
Extracting Product Details : name, price, image, \_id from dbProduct
Constructing Order Items : create singleOrderItem object with name, price, image, assign amount to item.amount & product to \_id
Update order data :
create new orderItems array with 1.spreading existing orderItems elements 2.adding singleOrderItem (an object) at the end.
update subtotal by adding the product(multiplying) of item.amount and price
4.Calculate Final Order Total : tax + shippingFee + subtotal
5.create paymentIntent :
1.Create fakeStripeAPI function which takes amount & currency as parameters & returns client secret
2.Create paymentIntent by calling fakeStripeAPI with arguments : amount: total, currency: 'usd'
6.Save order to database : create order using create() with - orderItems, total, subtotal, tax, shippingFee, clientSecret: paymentIntent.client_secret, user: req.user.userId
7.in response send order, clientSecret: order.clientSecret

Create Order - Complete
All Order Routes
getAllOrders:
1.Fetch All Orders from Database
Use Order.find({}) to retrieve all orders.
2.Send Response with Orders and Count
Return a 200 OK response containing:
orders: List of all orders.
count: Total number of orders (orders.length).

getSingleOrder :
1.Extract Order ID from Request Parameters
Destructure id from req.params and store it in orderId.
2.Fetch Order from Database
Use Order.findOne({ \_id: orderId }) to find the order with the given orderId.
If no order is found, throw a NotFoundError.
3.Check User Permissions
Allow access if:
req.user.role === 'admin' (Admin users can access any order).
req.user.userId === String(order.user) (Regular users can only access their own order).
If authorized, return the order in the response with res.status(200).json({ order }).
Handle Unauthorized Access
If the user is neither an admin nor the owner of the order, throw an UnauthorizedError

getCurrentUserOrders :
1.Fetch Orders for the Logged-in User
Use Order.find({ user: req.user.userId }) to retrieve all orders belonging to the authenticated user.
2.Send Response with Orders and Count
Return a 200 OK response containing:
orders: List of orders for the current user.
count: Total number of user-specific orders (orders.length).

updateOrder :
1.Extract Order ID & Payment Intent from Request
Destructure id from req.params and store it in orderId.
Destructure paymentIntentId from req.body.
2.Fetch Order from Database
Use Order.findOne({ \_id: orderId }) to find the order with the given orderId.
If no order is found, throw a NotFoundError.
3.Check User Permissions
Allow update if:
req.user.role === 'admin' (Admin users can update any order).
req.user.userId === String(order.user) (Regular users can only update their own order).
4.Update Order Details
Assign paymentIntentId to order.paymentIntentId.
Update order.status to "paid".
Save the updated order using order.save().
5.Return Updated Order in Response
Send a 200 OK response with the updated order object.
6.Handle Unauthorized Access
If the user is neither an admin nor the owner of the order, throw an UnauthorizedError

Docgen - Install
Docgen - Create Docs
Security Packages

Routes :
Home page : Our frontend is built with React, which has a home page. The frontend interacts with our backend API to fetch and manage data.
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/orders', orderRouter);
authRoutes :
'/register' => register
'/login' => login
'/logout' => logout
userRoutes :
'/' => getAllUsers
'/showme' => showCurrentUser
'/updateUser' => updateUser
'/updateUserPassword' => updateUserPassword
'/:id' => getSingleUser
productRoutes:
'/' => createProduct, getAllProducts
'/uploadImage' => uploadImage
'/:id' => getSingleProduct, updateProduct, deleteProduct
'/:id/reviews' => getSingleProductReviews
orderRoutes:
'/' => createOrder, getAllOrders
'/showAllMyOrders' => getCurrentUserOrders
'/:id' => getSingleOrder, updateOrder
reviewRoutes:
'/' => createReview, getAllReviews
'/:id' => getSingleReview, updateReview, deleteReview

Flow : We created authController in which we have register & login functionalities
In register controller :
destructure req.body & get email, name & password
check if emailAlreadyExists using email-findOne, if yes send BadRequestError
add first registered user is an admin
create user using name, email, password, role
create tokenUser
put the token in cookies & attach cookies to the response
send tokenUser as response
In login controller :
destructure email & password from req.body
check if both email & password are provided in req.body, if not send BadRequestError
check if user exists using email-findOne & if not send UnauthenticatedError
check if password is correct using comparePassword, if not UnauthenticatedError
createtokenUser for payload
put the token in cookies & attach cookies to the response
send tokenUser as response
In logout :
Just create a new cookie without token(just give random string insterad of token) : httpOnly & expires : new Date(Date.now())
send custom message in response (no need to send anything)

Whenever we login >
Before this, the create method has already created the user for us. user.create()
createTokenUser(user) is only return payload { name: user.name, userId: user.\_id, role: user.role }
createJWT({payload}) is used to create & return token using payload & JWT_SECRET (expiresIn)
isTokenValid({token}) to verify the token
in attachCookiesToResponse({res, user}) : we call createJWT and create token & create a cookie using that token & send it in response

createTokenUser function create a minimal payload for the JWT token as we are going to put this into the cookie & cookie has limit of 4096 bytes only.
createJWT function used to create JWT token using payload & secret stored on our server in .env file
isTokenValid function used to verify token using token & secret stored on our server in .env file
attachCookiesToResponse function used to attach token to the created cookie. We call createJWT function inside it to create token & then we attach the token to the created cookie.

To set development & production node project environment :
install dotenv & config it
install nodemon
in package.json : under scripts
"start": "set NODE_ENV=development && nodemon app.js",
"start:prod": "set NODE_ENV=production && nodemon app.js"
To run development : npm start
To run production : npm run start:prod

Error handling in express :
There are two kinds of error that can occur in express application.
1.Oparational errors : These are errors that we can predict & will happen at some point in the future , so we need to handle it in advance. These errors occur due to user or failure of system or network etc. These are not bugs but expected failures that we need to handle gracefully. Examples are Invalid path accessed, Invalid user input (validator error from mongoose), Failed to connect to server, Failed to connect to database, Request timeout.
To handle these errors, we can implement a global error handling middleware for centralized error management, a not found middleware for invalid paths, and data validation & sanitization to prevent incorrect or missing data.

2.Programming errors : These errors are bugs introduced by the programmers. For example Reading properties on undefined,
Passing a number where an object is expected, Using await without async, Using req.query instead of req.body. It is difficult to find these errors.
To catch these errors, we can use ESLint for code mistakes, try-catch for async errors, and the process variable to handle uncaught exceptions and unhandled promise rejections.

To handle operational errors :
1.Create global error handling middleware with statusCode(default 500), status(default 'error'). Put it at the end in app.js.
app.use((err, req, res, next) => {
err.statusCode = err.statusCode || 500;
err.status = err.status || 'error'
res.status(err.statusCode).json({ status: err.status, message: err.message })
})
2.Create custom class from Error class with message, statusCode, status, isOperational flag & Error.captureStackTrace.
class AppError extends Error{
constructor(message, statusCode){
super(message);
this.statusCode = statusCode;
this.status = `${status}`.startsWith('4') ? 'fail' : 'error';
this.isOperational = true;
Error.captureStackTrace(this, this.constructor)
}
}
3.Example : Use of AppError class in not found (invalid path) middleware
app.all('\*', (req, res, next) => {
// 1.Sending simple response
res.status(404).json({ status: 'fail', message: `Can't find ${req.originalUrl} on this server`});
// 2.Using built-in Error class
const err = new Error(`Can't find ${req.originalUrl} on this server`);
err.status = 'fail';
err.statusCode = 404;
next(err);
// whenever we pass anything to next(), express assumes that it is an error & then express skips all the other middlewares & sends the error directly to the global error handling middleware
// 3.Using Custom error class AppError
next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
})
4.Use asyncWrapper or catchAsync function to handle errors in asynchronous Express route handlers without using try-catch in every route. The asyncWrapper or catchAsync function automatically catches errors and forwards them to Express’s error-handling middleware.
Wrap the controller function in asyncWrapper. If an error is thrown inside an async function, it is automatically caught by asyncHandler because Promise.resolve(fn(req, res, next)).catch(next); ensures that any rejected promise (error) is forwarded to next(). Since next(err) is called, Express will skip other middlewares and go directly to the global error handler.
// Check explanation of asyncWrapper in C:\Users\Ghost\Desktop\Node-Project\10-e-commerce-api\starter\error-handling.js
Used for handling errors in async route handlers without manually using try-catch in every function

asyncWrapper, catchAsync, asyncHandler :
asyncWrapper : asyncWrapper works for both sync & async functions :
How it works :  
 1.Calls fn inside a try block.
2.If fn throws an error, the catch block catches it.
3.next(error) forwards the error to Express’s global error handler.
const asyncWrapper = (fn) => {
return async (req, res, next) => {
try {
await fn(req, res, next);
} catch (error) {
next(error); // Passes error to error handling middleware
}
};
};

catchAsync: Only works for async errors not for synchronous errors
How it works :
1.Calls fn(req, res, next)
2.If fn returns a rejected Promise (async error), .catch(next) automatically forwards the error.
const catchAsync = fn => {
return (req, res, next) => {
fn(req, res, next).catch(next);
}
}

asyncHandler : Only works for async errors not for synchronous errors
How it works :
1.Wraps fn(req, res, next) in Promise.resolve().
2.If fn throws or rejects, .catch(next) forwards the error.
const asyncHandler = (fn) => (req, res, next) => {
Promise.resolve(fn(req, res, next)).catch(next);
};

5.Sending different error messages for development & production environments :
In production, we should expose minimal error details to the client and provide only a user-friendly message.
In development, we need detailed error information for debugging. While logging errors in the console helps, sending them directly to Postman makes debugging easier.

##########################################################################################################################
AUTH WORKFLOW :
Functionalities added : account verification email on register, forgot password(reset) on email for login, accessToken, refreshToken
For JWT secret : generate key on website http://generate-random.org > copy key > paste it in .env for JWT_SECRET
In package.json of frontend add : "proxy": "http://localhost:5000" this is backend address

Update User Model : add following three properties
verificationToken - String
isVerified - {type:Boolean, default:false}
verified - Date
Update Register Controller :
setup fake verificationToken - 'fake token'
remove everything after User.create()
send back success message and token
Update Login Controller
right after isPasswordCorrect
check if user.isVerified, if not 401

In sendEmail controller :
1.Create a test email account using nodemailer.createTestAccount() :
This generates temporary SMTP credentials for testing email functionality without using a real email service. It helps developers debug emails without sending them to actual recipients.
2.Set up the email transporter using nodemailer.createTransport() with Ethereal SMTP details (host, port, auth{ user, pass }) :
The transporter acts as a mail server that sends emails. Ethereal provides a fake SMTP server for testing, allowing you to inspect emails in a test inbox.
3.Configure authentication using host, port, user, and pass :
These settings define the SMTP server's address (host) and connection port (port). user and pass are credentials needed to authenticate with the SMTP server before sending emails.
4.Send an email using transporter.sendMail() with from, to, subject, and html :
This function constructs and sends the email. from: The sender's email address. to: Recipient(s) of the email. subject: The subject of the email. html: The email body in HTML format.

In sendVerficationEmail controller :
1.Generate the verification link :
Constructs a unique verification link using the provided origin, verificationToken, and email. This link is sent to the user for email confirmation.
2.Create the message body :
Generates an HTML message that contains a clickable verification link. Ensures users can easily verify their email by clicking the link.
3.Format the full HTML content :
Personalizes the email with the user’s name. Combines the greeting and the verification message.
4.Send the email using sendEmail() :
Calls sendEmail() to send the verification email. Passes to, subject, and html as parameters. Ensures the user receives an email to verify their account.

In register controller :
1.destructure req.body & get email, name & password :
Extracts name, email, and password from the request body.
These values are needed to create a new user in the database.
2.check if emailAlreadyExists using email-findOne, if yes send BadRequestError :
Searches the database for an existing user with the same email.
If a user is found, throws a BadRequestError, preventing duplicate accounts.
3.add first registered user as an admin by countDocuments() & role :
Counts the total number of users in the database. If no users exist, the first registered user is assigned the admin role. Otherwise, assigns the default role user.
4.create verificationToken using crypto.randomBytes(40).toString('hex') :
Generates a random string using crypto.randomBytes(40). Converts it to a hexadecimal string for easy storage. This token is used for email verification.
5.create user using name, email, password, role & verificationToken in database :
Saves the new user’s details in the database. Includes name, email, password (should be hashed), role, and verificationToken.
6.send verificationToken in the response :
Sends a success response to the client. Includes a message instructing the user to check their email. Optionally includes verificationToken (for testing or debugging).

In verifyEmail controller :
1.Destructure verificationToken & email from req.body :
These values are sent by the user when they click the verification link in email (front end sends these values to backend)
2.Find user using findOne({ email }) :
Searches for a user with the given email in the database. If no user is found, it means the email is incorrect or not registered.
3.If user not found, send UnauthenticatedError :
If the user is not found, it means the request is invalid. Throws an UnauthenticatedError to prevent unauthorized access.
4.Check if verificationToken on user matches the verificationToken provided in req.body. If it does not match, send UnauthenticatedError :
Compares the verificationToken from the database with the one provided in req.body. If they don’t match, throws an UnauthenticatedError. Prevents attackers from using incorrect or modified tokens.
5.Mark user as verified by setting isVerified = true & verified = Date.now() :
Sets isVerified to true to indicate the email is confirmed. Stores the verification time using Date.now().
6.Clear verificationToken by setting it to an empty string '' :
Resets verificationToken to an empty string after verification. Prevents reuse of the same token for future unauthorized access.
7.Save user to update the database. user.save() :
Saves the updated user data in the database. Ensures that isVerified, verified, and verificationToken changes are stored.
8.Send success response { msg: 'Email Verified' } :
Sends a response indicating successful verification. Informs the user that their email is now confirmed.
Must import verifyEmail controller & create verify-email route in authRoutes.js. Also check if authRouter is mounted in app.js

For login :
1.createTokenUser :
Extracts only essential user details (name, userId, role) to include in the JWT.
This avoids exposing sensitive user data in the token.
The returned object is used as the payload when creating a JWT.
2.createJWT : Create a JWT (JSON Web Token) :
Signs a JWT using the given payload and a secret key (JWT*SECRET).
Ensures the token can be verified later to authenticate users.
The token is returned and can be sent to the client.
3.isTokenValid : Verify if a Token is Valid :
Uses jwt.verify() to check if the token is valid.
If the token is invalid or expired, this will throw an error.
Ensures only legitimate tokens are accepted.
4.attachCookiesToResponse : Attach Tokens to HTTP Cookies in Response
Generates two JWTs:
Access Token: Short-lived token used for authentication.
Refresh Token: Longer-lived token used to refresh the access token when it expires.
Both tokens store the user details, but the refresh token also contains refreshToken for re-authentication.
Set accessToken Cookie : Stores the Access Token in an HTTP-only cookie.
httpOnly: true: Prevents JavaScript from accessing the cookie.
maxAge: 1000 * 60 \_ 15: Expires in 15 minutes.
secure: process.env.NODE_ENV === 'production': Ensures cookies are sent only over HTTPS in production.
signed: true: Signs the cookie to prevent tampering.
Set refreshToken Cookie : Stores the Refresh Token in an HTTP-only cookie. Helps in refreshing the accessToken when it expires.
httpOnly: true: Prevents JavaScript from accessing the cookie.
expires: new Date(Date.now() + oneDay): The expiration is set to 1 day
secure: process.env.NODE_ENV === 'production': Ensures cookies are sent only over HTTPS in production.
signed: true: Signs the cookie to prevent tampering.  

In login controller :
destructure email & password from req.body
check if both email & password are provided in req.body, if not send BadRequestError
check if user exists using email-findOne & if not send UnauthenticatedError
check if password is correct using comparePassword, if not UnauthenticatedError
check if user is verified or not using isVerified field, if not send UnauthenticatedError
create tokenUser with payload (name, \_id, role)
create jwt token using tokenUser, secret & expiresIn
create a cookie with cookieName, token created above & cookies options - httpOnly, secure, expires, signed
send tokenUser in a response
POSTMAN : Auth-WorkFlow collection :
Register user using name, email & password. It returns msg & verificationToken
Login user with email & password. It will fail because we are not verified email yet, so do next step
Verify email using verificationToken (copy token from registration step) & email(put registration email). Upon sending request we see msg : Email Verified
Login user : Now login with email & password, it will success

After the user clicks on the verification link and successfully verifies their email :
✅ The verification token is cleared (user.verificationToken = '').
✅ The user is marked as verified (user.isVerified = true).
✅ The verification timestamp is stored (user.verified = Date.now()).
user.verificationToken = '' :
If a user tries to verify again with the old token, it won’t work because the token no longer exists in the database.
We clear the verification token to prevent reuse and ensure that the same token cannot be used again for verification. This enhances security by ensuring each verification link is valid for one-time use only.

React uses useState() for all the fields that we extract from the req.body in backend. The all front end works on responses send from backend controllers.
First react queries to backend using fetch or axios then it stores that as a response.

fetch() sends data as a string (JSON.stringify({ email, password }))
Backend receives this string and parses it into JSON using express.json() middleware (e.g., req.body).

Login flow : Login.js -> controllers - authController.js - login Controller > middleware > authentication.js > authenticateUser controller
accessToken :
Right now, the authentication middleware is only checking for one token in cookies. But we actually have two tokens: Access Token & Refresh Token. If we check only the access token, the authentication will fail once it expires, even though the refresh token is still valid.
To solve this, we need to:
1.Check if the access token exists and is valid :
If valid, attach the user to req.user and call next().
If expired or missing, check the refresh token instead.
2.If the refresh token is valid, generate a new access token and allow the user to continue.

Refresh token :
In login controller we sent a single cookie with the token which expires after certain period of time like 1 hour. And when the cookie expires the user automatically gets log out. So its better to send two cookies one is with access token & another is with refresh token. Access token has very short expiration time like 15 minutes, while refresh token has long expiration time like 1 day or 7 days.
When the access token expires, the frontend can use the refresh token to request a new access token from the backend, allowing the user to stay logged in without needing to log in again.
The refresh token is used to get a new access token from the backend; we don’t use the refresh token itself for authentication or accessing protected resources. It is only sent to the backend to generate a new access token when the previous one expires.

Explanation for refreshToken :
The access token expires quickly (e.g., in 1 second for testing). When it expires, we need a way to keep the user logged in without making them log in again. This is where the refresh token comes in.
When a request is made, the middleware (authentication.js) checks for the access token in the cookies. If the access token is missing or expired, we then check for the refresh token. Then we perform checks on refreshToken : "Does the refresh token exist in the database?" and "Is the refresh token valid (isValid: true)?". If either check fails, the user must log in again. If both of these checks passed, we generate a new access token using the user’s information and send back both tokens (new access token & refresh token) as cookies.

create model Token.js : with
refreshToken,ip,userAgent - all String and required
isValid - Boolean, default:true
ref user
timestamps true
🚀 Always use mongoose.Schema.Types.ObjectId inside schemas for defining references!

accessToken & refreshToken functionality : login controller
create functions : createTokenUser, createJWT, isTokenValid, attachCookiesToResponse
login controller :
destructure email & password from req.body
check if both email & password are provided in req.body, if not send BadRequestError
check if user exists using email-findOne & if not send UnauthenticatedError
check if password is correct using comparePassword, if not UnauthenticatedError
createtokenUser for payload
put the token in cookies & attach cookies to the response
send tokenUser as response

isVerified field is used to check if user has verified his email or not. If verified then isVerified is true & if not verified isVerified is false.
isVerified ✅ → Tracks if user confirmed their email.
isValid 🔐 → Tracks if the refresh token is still trusted or has been revoked. If isValid is true the token exists if it false the token is invalid.

isVerified :
We use isVerified in the User model to indicate whether a user has confirmed their email address. When a user registers, they receive a verification email with a token. Until they click the link and verify, isVerified stays false. This ensures that only users who own their email can log in, adding a layer of trust and security to the system.

isValid :
On the other hand, isValid is part of the Token model and is used to track whether a refresh token is still trusted or has been revoked. For example, when a user logs out or if we suspect token misuse, we set isValid to false instead of deleting the token immediately. This makes it easy to invalidate sessions while still keeping a record for auditing or future checks. Together, isVerified and isValid help maintain the integrity and security of both user identity and active sessions.

user ref added in Token model:
We add a reference to the user in the Token model (ref: 'User') so that each refresh token is directly associated with a specific user. This makes it easy to check if a token already exists for a user using queries like Token.findOne({ user: user._id }). It helps enforce a one-to-one mapping between users and refresh tokens, which is common in many applications to avoid multiple active sessions. This reference also simplifies token management tasks such as revoking a user's tokens if their account is compromised, tracking login activities (like IP and user-agent), and enabling user-based queries or data population. In short, referencing the user in the token model is essential for secure, efficient, and scalable authentication workflows.

Adding extra data : ip, userAgent, user, isValid to the refreshToken :
Reasons :
refreshToken  The actual token stored & sent via cookies.
ip            Track from which IP the token was created — helps detect misuse.
userAgent     Tells us the browser/device info — helps identify hijacked sessions.
user	        Reference to the User in MongoDB (user._id).
isValid	      Flag to allow or block a token manually (used on logout or security).

update attachCookiesToResponse function to accept 2 cookies : accessTokenJWT & secretTokenJWT
Must remove JWT expiration from sign() because it will expire the cookie unnecessorily from createJWT()
const attachCookiesToResponse = ({ res, user, refreshToken }) => {
  const accessTokenJWT = createJWT({ payload: { user } });
  const refreshTokenJWT = createJWT({ payload: { user, refreshToken } });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("accessToken", accessTokenJWT, {
    httpOnly: true,
    // expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
    maxAge: 1000 * 60 * 15, // miliseconds
  });
  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });
};
POSTMAN : Sending request to Login route will see 2 cookies accessToken & refreshToken

Check for existing token in login controller : 
Every time a user logs in, the system checks if a token already exists in the Token schema. If it exists and is valid, it reuses the same token. However, if the user tries to tamper with the token (e.g., by modifying cookies or sending invalid data) or if the isValid flag is set to false (due to logout or admin revocation), the system rejects the login with an "Invalid Credentials" error instead of creating a new token — ensuring the old token cannot be misused.
// check for existing token
  // find a token document where the user field matches the given user._id.
  // querying the Token collection to find a document where the user field (a reference) matches that user’s _id. user._id coming from above line await User.findOne({ email });
  const existingToken = await Token.findOne({ user: user._id }); //User referenced inside Token model
  // Checking if a token already exists for the given user before issuing a new one.
  console.log(existingToken);

  if (existingToken) {
    const { isValid } = existingToken;
    if (!isValid) {
      console.log("User token is not valid. Throwing error...");
      throw new CustomError.UnauthenticatedError("Invalid Credentials");
    }
    refreshToken = existingToken.refreshToken;
    attachCookiesToResponse({ res, user: tokenUser, refreshToken });
    res.status(200).json({ user: tokenUser });
    return;
  }

upto now :  
created model Token.js > check for existing token in login controller > modified attachCookiesToResponse function for 2 cookies > 

IMP FLOW : When user logs in the login controller sets cookies with tokens (payload / user data ). Once user logs in and try to access protected routes the authenticateUser middleware runs, it sets req.user by verifying tokens.  'req.user' is used to identify the currently logged-in user in protected routes. 
In short : When user logs in & try to access protected route authenticateUser middleware runs. This middleware 1.Verify the token, 2.Extract user info from that token, 3.Attach it to req.user

When user logs out & logs in again or when user clears browser cookies a new refreshToken is created & stored in the database in Token collection.
When user comes back after some time & refresh the page or user logs in from different device the existing refreshToken in database is used  

When a user logs out, the existing refreshToken in the database is usually invalidated (by setting isValid: false). So, when the same user logs in again, a new refreshToken is created and stored in the Token collection.
If the user clears cookies but the existing token in the database is still valid, and the user logs in again, the existing refreshToken can be reused — or a new one may be issued depending on implementation (like device/IP checks).
When the user refreshes the page or returns later (while still having valid cookies), the existing refreshToken stored in the browser cookies is sent back to the server. The server checks if it matches the valid one in the database, and reuses it for authentication.
If the user logs in from a different device or browser, and your logic supports one-token-per-user, the system may either:
  Reuse the existing valid token (from DB),
  Or invalidate the old one and create a new one for the new session.

When existingToken is used :
  User is already logged in and refreshes the page or returns later, the the existing refreshToken stored in the browser cookies is sent back to the server. The server checks if it matches the valid one in the database, and reuses it for authentication.
  User logs in again from the same device/browser and an existing, valid token is found in DB.
When new refreshToken is created :
  User logs in for the first time.
  User logs out and then logs back in.
  User clears cookies (manual or browser action).
  User logs in from a different device or browser.

When user registers, it creates user document with name, email, password, role & verificationToken in the users collection in the DB & confirmation email with the link is sent to the user by calling sendVerificationEmail() function with name, email, verificationToken & origin as argument (origin is front-end url verify-email). 
Example link we send to user : https://yourfrontend.com/verify-email?token=abcd1234&email=john@example.com
When user clicks on the link from the email it is redirected to a frontend route like /verify-email. The /verify-email route reads the token and email from the query string and sends POST request to the backend route with token & email. For example axios.post("/api/v1/auth/verify-email", { token, email }). The veriy-email controller of backend finds the user by email in the database, verifies token and then set isVerified to true, verified to current date & time and reset verificationToken to empty string. Finally it save the user & send verification success message and user is redirected to the login page.
On the login page user enters email & password & submit the form, then frontend sends POST request to the backend route with email & password axios.post("/api/v1/auth/login", { email, password }). 
The login controller first verifies the user's email, then it verifies users password using comparePassword(). Next it checks if the email is verified by the user i.e isVerified is true. After that it createTokenUser with name, id & role. Then it checks for the existingToken in Token collection with user._id to see if token already exists for the user. It also checks if isValid field in Token collection is true means token is valid or not. If token exists i.e existingToken and isValid is true then it uses existingToken instead of creating new refreshToken and creates a short-lived accessToken using JWT and a long-lived refreshToken using crypto and attach both of them to seperate cookies in the response.
If there is no existingToken then it will create a new token with 1.refreshToken created using crypto, 2.user-agent using req.headers, 3.ip using req.ip & store it in the Token collection and marks it as valid.
Next both tokens are then attached to HTTP-only, signed cookies using res.cookie() and sent to the user's browser. The browser automatically stores these cookies and sends them with every subsequent request including page reloads and route changes.    
When user tries to access protected routes in the subsequent request it sends both cookies with accessToken & refreshToken. As user is accessing the protected route it will invoke the authController middleware. It extracts both accessToken & refreshToken from req.signedCookies then it first checks if accessToken is valid using isTokenValid(), if yes it puts the currently logged-in user's info (paylaod.user) (from the token) onto req.user and return next() means allows request / user to access the protected route. 
If accessToken is expired then it checks if refreshToken is valid using isTokenValid(). Then it search for the existingToken in Token collection using userId & refreshToken. Then it verifies existingToken & existingToken?.isValid if one of them or both of them are false it throws UnauthenticatedError. If both are exists & true that means refreshToken is trusted and  The server proceeds to create a new access token, attaches both the access and refresh tokens as secure cookies using attachCookiesToResponse(), and sets req.user = payload.user so that downstream routes can identify the currently logged-in user. Finally, it calls next() to allow access to the protected route.

logout :
in authRoutes change method of logout route from get to delete & import & add authenticateUser middleware before logout controller.
Set accessToken expiry to 1 day & refreshTokenJWT expiry to 30 days in attachCookiesToResponse.
const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.userId });
  res.cookie("accessToken", "logout", {
    httpOnly: true,
    // expires: new Date(Date.now() + 1000),
    expires: new Date(0),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    // expires: new Date(Date.now() + 1000),
    expires: new Date(0),
  });
  res.status(200).json({ msg: "user logged out!" });
};

Stateless means server does not store or remember anything or any information about the client between requests i.e no session stored in server memory. It does not mean the server can't have persistent data (like a database).

For protected routes, the authenticateUser middleware first checks the accessToken (since it expires quickly) and sets req.user if it's valid. If the access token has expired, it falls back to the refreshToken, verifies it against the database, and if valid, issues a new access token and resets the cookies. On logout, the corresponding token document in the database is marked as isValid: false to prevent token reuse. This design helps maintain secure, persistent sessions while preventing token misuse.

forgot password functionality :
In user : add fields - passwordToken as string & passwordTokenExpirationDate as date
In authController: create forgotPassword & resetPassword, export them, import them in authRoutes & define routes for them
User click on Reset Password, it redirected to forgot-password page of front-end then user enters email & click on 'Get reset password link' > front end sends request with email to the forgot-password route of backend ==> backend extract email from req.body, check if email exists if not BadRequestError, find user in database using email, if user exists then : create passwordToken using crypto and send email using below function sendResetPasswordEmail(), set passwordTokenExpirationDate for expiring link in 10 minutes, update the user with passwordToken & passwordTokenExpirationDate & finally save the user and send the response 

create sendResetPasswordEmail() function which is used to construct the reset password link (with origin as front-end url page of reset-password, token & email) and message & send it to the email of the user using sendEmail() function.

When user click on the reset password link of the email on the front-end, it will be redirected to the reset-password url of front-end then user provide new password & click on 'New password' button then front end will extract token, email & password from the query string & passed it to the backend reset-password url ==> backend extract the token, email & password from req.body & check for all of these values & sends BadRequestError if not found, find the user in the database using email, if the user exists then : setup currentDate, check if user.passwordToken is same as provided token and check if user.passwordTokenExpirationDate is greater than the currentDate and if both conditions are true set user.password to password and set user.passwordToken & user.passwordTokenExpirationDate to null and finally save the user

Hashing is one way street, once you hashed password you can only compare it with hashed password, there is no way to access the original value after hashed it.
create createHash function using crypto :
const createHash = (string) => crypto.createHash("md5").update(string).digest("hex");
In forgotPassword controller use createHash function while saving the token in the database : 
  user.passwordToken = createHash(passwordToken)
In resetPassword when comparing password use createHash again :
  if(user.passwordToken === createHash(token) && user.passwordTokenExpirationDate > currentDate)


const jwt = require('jsonwebtoken');

const createJWT = ({ payload }) => {
const token = jwt.sign(payload, process.env.JWT_SECRET, {
expiresIn: process.env.JWT_LIFETIME,
});
return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET);

const attachCookiesToResponse = ({ res, user }) => {
const token = createJWT({ payload: user });

const oneDay = 1000 _ 60 _ 60 \* 24;

res.cookie('token', token, {
httpOnly: true,
expires: new Date(Date.now() + oneDay),
secure: process.env.NODE_ENV === 'production',
signed: true,
});
};

Deployment : First, deploy the backend, then update the frontend to use the backend URL before deploying it.
First deploy backend on Heroku or Render or AWS ECS or AWS Elastic Beanstalk then copy the URL & paste it in front end (react) & then deploy front end on netlify or AWS S3 + CloudFront + Route53.
Deployment Steps for Backend & Frontend :
1️⃣ Deploy Backend on Heroku, Render, AWS ECS, or AWS Elastic Beanstalk.
2️⃣ Copy the Backend URL from the deployed service.
3️⃣ Update Frontend (React) by setting the backend URL in .env: REACT_APP_API_URL=https://your-backend-url.com
4️⃣ Deploy Frontend on Netlify or AWS S3 + CloudFront + Route 53.

HA for backend :
Compute (Node.js app) : AWS EC2 Auto Scaling, ECS (Fargate), or Kubernetes (EKS)
Load Balancing : AWS ALB (Application Load Balancer) or NGINX Load Balancer
Database (MongoDB, MySQL, PostgreSQL) : MongoDB Atlas (Replica Set), AWS RDS Multi-AZ
Caching : Redis (Elasticache) for session & cache
Failover : AWS Route 53 health checks to reroute traffic

HA for frontend :
Static Hosting : Netlify, Vercel, or AWS S3
CDN (Faster Delivery + HA) : AWS CloudFront, Netlify’s CDN
DNS Failover : AWS Route 53 with health checks
CI/CD (Auto Updates) : GitHub Actions, AWS CodePipeline

What is a Proxy?
A proxy is an intermediary server that sits between a client (browser/frontend) and a backend server (API/database). It forwards requests and responses between them.

Types of Proxies in Web Development :
1️⃣ Reverse Proxy (For Backend Load Balancing & Security)
Sits in front of your backend server and handles incoming client requests.
Examples: Nginx, AWS ALB, Cloudflare.
Use case:** Hides backend servers, improves performance, handles SSL/TLS.
🔹 Example:
Client → Proxy (Nginx) → Backend API
ALB → Backend instances
2️⃣ Forward Proxy (For Outgoing Requests)
Used by clients to reach the internet.
Examples: VPN, corporate proxies.
Use case:** Security, caching, or accessing restricted sites.
🔹 Example:
Your browser → VPN Proxy → Internet
3️⃣ Development Proxy (For Local API Calls)
Used in React/Vite projects to avoid CORS issues when frontend & backend run on different ports.
Example: Setting "proxy": "http://localhost:5000" in package.json.

🔹 Do You Need a Proxy?
| Scenario | Needs Proxy? | Example |
|-------------|----------------|-------------|
| Backend behind Nginx/AWS ALB | ✅ Yes, use app.set('trust proxy', true); | Requests come through a reverse proxy. |
| Frontend (React) in Dev Mode | ✅ Yes, use "proxy": "http://localhost:5000" in package.json | Prevents CORS errors. |
| Frontend + Backend on Same Domain | ❌ No | Both run under the same origin, so no CORS issues. |

🔹 Summary :
✔️ Reverse Proxy (Nginx/ALB) → Improves performance, security.
✔️ Forward Proxy (VPN) → Hides your IP, controls access.
✔️ Development Proxy (React's package.json) → Avoids CORS in local development.

IMP :
Local Dev (React + Express) :
proxy in package.json : needed (avoids CORS issues)
CORS middleware : Optional (only if testing APIs from different origins)
Production (Nginx/ALB) :
app.set('trust proxy', true) needed in app.js
CORS middleware : Optional (only if testing APIs from different origins)
🚀 For production, just use CORS + trust proxy. No proxy in package.json needed.

app.set('trust proxy', true) : trust proxy allows Express to automatically use x-forwarded-proto, x-forwarded-host, and other proxy headers to determine the correct protocol (req.protocol) and host (req.hostname).
Express will correctly detect if the request came via HTTP or HTTPS, even when behind a reverse proxy like Nginx or AWS ALB.
Dont need to use below code in app.js. Use below code for debugging or if you have a custom middleware that makes decisions based on forwarded headers
const protocol = req.protocol;
console.log(`protocol: ${protocol}`);
const host = req.get('host');
console.log(`host: ${host}`);
const forwardedHost = req.get('x-forwarded-host');
const forwardedProtocol = req.get('x-forwarded-proto');
console.log(`forwarded host: ${forwardedHost}`);
console.log(`forwarded protocol: ${forwardedProtocol}`);

Host Vs Origin :
Host :
Where the request is sent (target domain).
The Host header represents the domain name of the server handling the request.
Example: If you make a request to https://example.com/api, the Host header will be example.com
Used in reverse proxies (Nginx, AWS ALB) to route requests.
Origin :
Where the request came from (CORS security).
The Origin header represents the protocol + domain + port of the page that made the request.
Example: If a website running on https://frontend.com makes a request to https://api.example.com, the request will have https://frontend.com
Used in CORS (Cross-Origin Resource Sharing) checks, which ensures that a request comes from a trusted source.
FINAL FLOW :
🛠 Step-by-Step Flow of Query Parameters
📌 Step 1: User Registers on the Website (Frontend → Backend)
The user fills out the registration form and submits their name, email, and password.
The frontend sends this data to the backend via an API request.
fetch("https://api.example.com/auth/register", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ name, email, password })
})

📌 Step 2: Backend Generates a Verification Link (Backend)
The backend receives the request, extracts the name, email & password and creates a verification token.
It constructs a verification URL with query parameters:
const verificationToken = crypto.randomBytes(40).toString("hex");
const verificationLink = https://example.com/verify-email?token=${verificationToken}&email=${email};
? starts the query parameters.
token=... stores the verification token.
&email=... stores the user’s email.
The backend stores the token in the database with the user’s details.

📌 Step 3: Backend Sends the Verification Link via Email
The backend sends an email with the verification link.
const sendEmail = async (to, verificationLink) => {
await transporter.sendMail({
from: '"No-Reply" ',
to,
subject: "Verify Your Email",
html: Click here to verify your email.
});
};
The user receives an email with a link like:
https://example.com/verify-email?token=123abc&email=test@example.com

📌 Step 4: User Clicks the Verification Link (Frontend Reads Query Parameters)
When the user clicks the link, they are redirected to the frontend verification page (/verify-email).
The frontend extracts query parameters from the URL.
import { useLocation } from "react-router-dom";
function VerifyEmail() {
const query = new URLSearchParams(useLocation().search);
const token = query.get("token");
const email = query.get("email");
console.log("Token:", token);
console.log("Email:", email);
}
The extracted values:
Token: 123abc
Email: test@example.com
📌 Step 5: Frontend Calls the Backend to Verify Email
The frontend makes an API request to verify the email.
fetch(https://api.example.com/auth/verify?token=${token}&email=${email}, {
method: "POST"
})
The backend matches the token with the user in the database.
If the token is valid, the backend updates the user’s status to "verified."
📌 Step 6: Backend Responds with Success
If the verification is successful, the backend responds:
{ "message": "Email verified successfully!" }
The frontend displays a success message to the user.

💡 Summary of the Flow
🔹 Backend
✔ Generates a verification link with query parameters.
✔ Sends the link via email.
✔ Verifies the token when the frontend requests it.

🔹 Frontend
✔ Extracts query parameters from the URL.
✔ Sends them to the backend for verification.
✔ Displays a success message after verification.

This flow applies to other features too (password reset, filtering data, etc.). Let me know if you need more examples! 🚀


==========================================================================================================================
SEQUELIZE : Check single file code - C:\Users\Ghost\Desktop\Node-Project\sequelize\index1.js (Check commented code also)
mysql2 is a driver used for interacting with the MySQL database. We also can use ORM that is object relational mapper called Sequelize to interact with MySQL database.
Sequelize ORM provides some high level features, to simplify the development. But Sequelize also uses mysql2 driver in the background.
Sequelize is a popular NodeJS based ORM which allows developers to easily work or interact with the RDBMS like MySQL, PostgresSQL, MariaDB and many more.
The Sequelize ORM provides an abstraction layer over the traditional SQL databases, allowing us to interact with the database using JavaScript objects.
ORM is actually a tool that maps or converts the data of relational databases and represents them as an object.
Many times we encounter scenarios where we have to write complex SQL query statements to perform CRUD operations from a database and we still need to convert the data from the database into an object. This is where the ORMs come into the picture. The handling of data becomes very easy with ORM, as we can apply the object oriented concepts to manipulate the data objects. Not only that, the main benefit of using an ORM is it saves a lot of time in writing the raw SQL queries because the raw queries are written as strings and are embedded in the application logic. But ORM provides a better type-safe syntax for interacting with databases. We all know that TypeScript provides a much better type safety compared to vanilla JavaScript and Sequelize is also compatible with TypeScript syntax. So we can easily use TypeScript with Sequelize as well.
Features of Sequelize :
The Sequelize follows a promise based approach that basically supports majority of relational databases.
It provides various model hooks for interacting with the database.
It offers a powerful migration mechanism that can transform existing database schemas into new versions.
It also has excellent support for Database synchronization, Eager loading, Associations, Transactions, Database migrations while reducing development time and preventing SQL injections.

To install Sequelize : npm install sequelize -- save
When working with an ORM library like Sequelize, we need to have a database driver mysql2 to interact with the database, as the ORM is actually a wrapper over the databases. The mysql2 driver will be internally used by sequelize so we dont need to import it in the code.
To install mysql2 : npm install mysql2 -- save
connect to mysql database locally : mysql -u root -p > enter password 1234
create database test
show databases

import sequelize 
create an instance of sequelize module by providing configuration details to connect to database: 
  database name, 
  database user, 
  password, 
  options object : dialect - type of database engine to connect with select 'mysql'
                  host - server url for the database 
                  port - 3306 mysql runs on port 3306
                  Rest of the values are configured based on the dialect that we provide
  const sequelize = new Sequelize("test", "root", "1234", {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
  });
sequelize.authenticate() : method is used for checking if the connection is successfully established with the database or not. 
use finally block with sequelize.close() method which close the connection

In Sequelize, the term table is referred to as models. A model is just like a blueprint that represents a table in the database. It is like a skeleton of the table without any data in it. With models, we can define several things to sequelize such as the name of the table, column details and data types. 
await Product.sync() : 

**Validations Vs Constraints**
Validations are the checks performed by Sequelize, which are written in pure JavaScript code. Validations can either be any built in validators or custom validator functions. If a validation fails, then no SQL query will be sent to the database at all.
Constraints :
On the other hand, constraints are rules defined at SQL level. The most basic example of constraint can be the unique constraint. If a constraint check fails, an error will be thrown by the database and Sequelize will forward this error to JavaScript. 

The allowNull is a constraint determines whether a column can contain null values or not. 
To send custom validation message instead of sending error we use validate object with property "notNull". "allowNull" must be set to false to send custom validation message.
name : {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notNull: {
      msg: "Product name is required"
    }
  }
}
Since we cant set custom validation message directly in allowNull property, we use validate object for this.
"allowNull" property in Sequelize is equivalent to the SQL "NOT NULL" constraint. It enforces that a particular column cannot contain null values.
allowNull does not restrict the empty values.

To restrict empty values we need to use notEmpty property of validate object. We can send custom validation error in notEmpty property.
name : {
  type: DataTypes.STRING,
  validate: {
    notEmpty: {
      msg: "Please provide a name"
    }
  }
}

The "unique" constraint is used for making the field values unique so that duplicate values cannot be assigned to that field.
MySQL does not define the unique constraint by default for the columns, unless it's a primary key or the unique constraint is given explicitly.
Must specify the unique constraint at the time of model creation. Because later you have to drop the table & recreate it.
name : {
  type: DataTypes.STRING,
  unique: true
}
When we try to insert duplicate value in name field it will throw SequelizeUniqueConstraintError. It also returns additional information about the error like : 
  message which says "name must be unique"
  type of error : "unique violation"
  the path or field on which the error caused / happened
  the value which raised the error : value entered by user
We can send the customized validation error message with unique constraint :
name : {
  type: DataTypes.STRING,
  unique: {
    msg: "Name already taken"
  }
}
Still on executing the code we get longer version of error, to display the precise version of error we can handle this error in error handling middleware with the code below :
if (err instanceof Sequelize.UniqueConstraintError) {
  err.message = err.errors?.[0]?.message || "Unique constraint error occurred.";
}

**Validating Length of Characters**
To validate the length of the string in sequelize we use "len" property of the validate object. "len" key takes array as an value with min & max length of the string.
name : {
  type: DataTypes.STRING,
  allowNull : false,
  unique: {
    msg: "Name already taken"
  },
  validate: {
    notEmpty: {
      msg: "Please provide a name"
    },
    notNull: {
      msg: "Product name is required"
    },
    len: [3, 20]
  }
}
To pass a custom message for length validation in Sequelize :
name : {
  validate: {
    len: {
      args: [3, 20],
      msg: "Product name must be between 3 and 50 characters"
    }
  }
}
We still see longer version of error, to display the precise version of error, handle this error in error handling middleware :
// Checks directly against the class, ensuring more reliable error handling.
if (err instanceof Sequelize.ValidationError) {
  err.message = err.errors?.[0]?.message || "Validation error occurred.";
}
OR 
// Checks error name as a string, which can sometimes be less accurate.
if (err.name === "SequelizeValidationError" ) { 
  err.message = err.errors?.[0]?.message || "Validation error occurred.";
}

**Built-in min and max validator**
The "min" & "max" valldators in sequelize are used for specifying the minimum & maximum range for the numeric attributes.
price : {
  type: DataTypes.DOUBLE,
  allowNull: false,
  validate: {
    min: 1,
    max: 100000
  }
}
To send custom error message :
price : {
  type: DataTypes.DOUBLE,
  allowNull: false,
  validate: {
    min: {
      args: 1,
      msg: "Price must be greater than 1"
    },
    max: {
      args: 100000,
      msg: "Price can not exceed 100K"
    }
  }
}
Still on executing the code we get longer version of error, to display the precise version of error we can handle this error in error handling middleware with the code below :
// Since we are handling multiple errors here we need to map over the error array
app.use((err, req, res, next) => {
  if (err instanceof Sequelize.ValidationError) {
    const errorMessages = err.errors.map(e => e.message);
    return res.status(400).json({ error: errorMessages.join(", ") || "Validation error occurred." });
  }
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

**Applying Custom Validations**
When built-in validators are not enough we can define the custom validations to meet specific requirements.
To create custom validation we need to define a function in validate object & define validation logic inside it. 
For example we want to make sure that the price we enter in the field is always a multiple of five. Built in validators cannot address this particular validation. So we create custom validators for this like below :
price: {
  type: DataTypes.DOUBLE,
  allowNull: false,
  validate: {
    notNull: {
      msg: "Price is required"
    },
    validatePrice(value){
      if(value <= 0 || value % 5 !== 0){
        throw new Error("Price must be a non-zero, positive multiple of 5")
      }
    }
  }
}
validatePrice() function used for a custom validation.

**Getting the field value**
The "errors" array is an array of objects with multiple properties addressing the validation. And to display or access any of the errors property we need to traverse through the array first.
For exmaple :
if(err.name === 'SequelizeUniqueConstraintError'){
  err.errors.forEach((errItem) => {  // since error is array of object we can use forEach()
    console.log("Error: ", errItem.message);
    console.log("Entered value is: ", errItem.value);
  })
}
error object :
{
  "errors": [
    {
      "message": "Validation min on price failed",
      "type": "Validation error",
      "path": "price",
      "origin": "FUNCTION",
      "instance": "[product]", 
      "validatorKey": "min",
      "validatorName": "min",
      "validatorArgs": [1],  
      "original": "[Error]"
    }
  ]
}

**Assignment - Implementing User Validation**
For email we will be applying validation that checks the format of email. 
Use validateEmail() function in validate object with regex :
  validateEmail(value){
    const regex = /^[\w-\.]+@([\w-]+\.)[\w-]{2,4}$/
    if(!regex.test(value)){
      throw Error('Invalid Email Format')
    }
  }
For the password will check :  
  Does the password begin with an uppercase letter? 
  Does it contain a special character? 
  Does the password have a length of eight characters?
  validatePassword(value){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*]).{8,}$/
    if(!regex.test(value)){
      throw Error('Invalid Password Format')
    }
  }
IMP :
  If you are using ESM module you need to mention it in package.json : "type": "module".
  In ES modules (when using import/export), you need to include the full file extension

STEPS TO IMPLEMENT SEQUELIZE IN NODE JS PROJECT :
Install sequelize and import Sequelize class & DataTypes, QueryTypes objects from it
MySQL Database configuration : 
  create new instance of Sequelize using Sequelize class
  set following parameters in it : DB_NAME, DB_USER, DB_PASSWORD and Object that contains host, dialect, port, pool
Define User model & fields in it : using define() method with fields id, name, email, password
Database initialization functions
  Test connection
  Sync models with database
  Seed initial data
Seed data
Express middleware
Error handling middleware
API Routes : app.post, app.get, app.get, app.put, app.delete
Start server  
Add proper validations & constraints in model using : type; allowNull; validate > notNull, notEmpty, len; unique; min, max. Add validateEmail or validatePrice or validatePassword validator function in validate object.

==========================================================================================================================
MONGOOSE :
Mongoose is a very popular object data modeling library that is ODM for MongoDB. Mongoose allows developers to define a strongly typed schema containing default values and schema validations, which can be easily mapped with the MongoDB documents. 
ODM is a tool that makes working with MongoDB easier by providing a simpler way to interact with the database. 
It is a key feature in mongoose that enables developers to work with MongoDB in an object oriented way, providing a simplified and easier way to communicate or interact with the MongoDB. 
Mongoose is the ODM library it allows developers to define the data models in a schema based approach. 
A schema is nothing but a blueprint or structure that defines how the data is organized, stored, and related within a database. Basically, it is a set of rules and guidelines for how the data should be organized in a database. 
The terms schema is used in both relational databases such as MySQL or Oracle and for the NoSQL databases such as MongoDB. 
In a relational database, a schema is a collection of database objects, including tables, views, indexes, and procedures.
Create table command used to define schema. 
In NoSQL database with mongoose developers can create or define a specific schema at the application layer itself. In addition to that, mongoose also offers a variety of hooks, model validations, and other features aimed at making it easier to work with MongoDB. 
In mongodb we create a schema using createCollection() method. But in mongoose we create a schema using the new mongoose.Schema() method. 
Benefits of creating a schema with an ODM : 
We can enforce a consistent structure for the data by specifying the constraints and data types for each field. 
We can also define validations, relationships. Middleware support code integration with the schema design. 
Creates a new document using save() method.
Mongoose acts as a wrapper through which we can easily interact with the database.

Without the schema we wont be able to add proper document inside the collection.
We can directly define schema inside the model method but its not recommended as best practise. The best practise is to create schema first & then create model out of it. By defining schema we create a blueprint that defines the structure & rules for the collection.
const Product = mongoose.model('product', {
  id: Number,
  name: String,
  price: Number,
  category: String
})
IMP : Schema is the blueprint that defines the structure & rules for the collection.
type : type property or validation defines what type of data to store in the field
required constraint : default false
To pass a custom validation message with any constraint, we wrap the constraint value in an array & message next to it.
default : to set default value for any field
unique constraint : The "unique" constraint in mongoose is used for making a field unique, so that duplicate values cannot be assigned to that field.
By default mongodb creates a unique index on the _id field to ensure that each document has a unique identifier.
For the field other than _id we need to create index explicitly or manually whenever needed.
unique field violation throw error E11000 duplicate key error collection
"unique" property is not an actual validator rather it's a convenient helper for building MongoDB unique indexes, so that the field does not store duplicate values.
minLength & maxLength validators : to set the length or range for the string field, we can set optional error message also for these.
min & max validators : to set the length or range for the numeric field, we can set optional error message also for these.
Custom validators : "validate" property used to define custom validations in mongoose. For single validation we use object as value to "validate" property, but for multiple validations we use an array as as value to "validate" property.
For example :
price: {
  type: Number,
  required: [true, 'Price cannot be empty'],
  validate: [
    {
      validator: function(value){
        return value > 0 && value % 5 === 0;
      },
      message: 'Price must be a non-zero positive multiple of 5'
    },
    {
      validator: function(value){
        return value <= 100000;
      },
      message: 'Price cannot exceed 100k'
    }
  ]
}

Mongoose provide a {VALUE} placeholder which is used within custom error message to display or fetch the actual value passed in the field. It basically replaces the {VALUE} placeholder with the actual invalid value when a validation error occurs. In above code we can use {VALUE} placeholder :
    {
      validator: function(value){
        return value <= 100000;
      },
      message: 'Price cannot exceed 100k {VALUE} as a value'
    }

Example : validators for email & password 
email: {
  type: String,
  required: [true, 'Email is required'],
  unique: true,
  lowercase: true,
  trim: true,
  validate: {
    validator: (value) => /^[\w-\.]+@([\w-]+\.)[\w-]{2,4}$/.test(value),
    message: 'Invalid Email Format, got value {VALUE}'
  }
},
password: {
  type: String,
  required: [true, 'Password is required'],
  unique: true,
  lowercase: true,
  trim: true,
  validate: {
    validator: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*]).{8,}$/.test(value),
    message: 'Invalid Password Format, got value {VALUE}'
  }
}

To make sure that MongoDB considers & runs the Mongoose validators with the update queries - we have to define & set two properties: { new: true, runValidators: true }

CRUD Operation in mongoose :

==========================================================================================================================
Model Creation in Sequelize :
Scenario 1: When You HAVE Existing Tables :
// 1. Define model matching existing columns EXACTLY
const User = sequelize.define('User', {
  user_id: {  // Match existing column name
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50), // Match exact length
    allowNull: false
  }
}, {
  tableName: 'tbl_users', // Existing table name
  timestamps: false // Disable if no created_at/updated_at
});
// 2. Verification Process
(async () => {
  try {
    // 3. Test connection and schema
    const user = await User.findOne();
    console.log('Successfully connected to existing table');
    // 4. Optional: Validate column structure
    const tableInfo = await sequelize.queryInterface.describeTable('tbl_users');
    console.log('Table structure:', tableInfo);
  } catch (error) {
    console.error('Schema mismatch detected:', error);
    // 5. Handle discrepancies (either adjust model or migrate DB)
  }
})();

Scenario 2: When You DON'T Have Existing Tables :
// 1. Define model with desired structure
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: true
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    validate: { min: 0 }
  }
}, {
  paranoid: true, // Enable soft deletes
  indexes: [{ fields: ['name'] }]
});
// 2. Database synchronization
(async () => {
  if (process.env.NODE_ENV === 'development') {
    // 3. Safe schema updates (won't drop data)
    await sequelize.sync({ alter: true }); 
    // 4. Seed initial data if needed
    await Product.findOrCreate({
      where: { name: 'Demo Product' },
      defaults: { price: 9.99 }
    });
  } else {
    // 5. In production, use migrations instead
    require('./migrations/20240101000000-create-product');
  }
})();

mongoose Vs sequelize
DB Connection	: 
  await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})  
  new Sequelize('dbName', 'dbUser', 'dbPassword', {dialect: 'mysql', host: 'localhost', port: 3306})  
  await sequelize.authenticate()
Schema Definition	: 
  Uses new Schema({ fieldName1: {type: DateType, required: true}, fieldName2: {type: DateType, required: true} })	 
  mongoose.model("modelName", modelSchema)
  Uses sequelize.define({ fieldName1: {type: DateTypes.datatype, allowNull: false}, fieldName2: {type: DateType.datatype, allowNull: false} })
Table/Collection Creation	:
  Collections are Auto-created when data is inserted	
  Requires .sync() to create table : await Product.sync() // Creates table if it does not exist
                                   : await Product.sync({ force: true }); // Drops and recreates the table
Data Types :
  String, Number, Boolean, Date, Array, Object
  STRING, INTEGER, FLOAT, BOOLEAN, DATE
Primary Key :
  _id (default ObjectId)
  Requires explicit primaryKey: true
Auto-Increment :	
  _id (ObjectId) is auto-generated	
  Use autoIncrement: true in model   
Create Record	: 
  Model.create({})	or Model.create([{}, {}, {}]) or const newInstance = new Model({}) then await newInstance.save()
  Model.create({})                             
Find Record	:
  Model.find(), Model.findOne({fieldName: fieldValue})	
  Model.findAll(), Model.findOne({ where: {fieldName: fieldValue} })
Find by ID :
  Model.findById(id)	
  Model.findByPk(id)
Updating Data	:
  Model.updateOne(conditionToFindDocument, fiedsToUpdate, options), Model.findOneAndUpdate()	
  Model.update(), Model.save()
Delete Record	: 
  deleteOne(), findOneAndDelete()	
  destroy({ where: {} })
Bulk Operations :
  insertMany([]), updateMany(), deleteMany()	
  bulkCreate([]), bulkUpdate(), bulkDelete()  
Filtering	:
  { key: value } syntax	
  { where: { key: value } } syntax
Sorting	: 
  .sort({ key: 1/-1 }) (1 = ASC, -1 = DESC)	
  { order: [['key', 'ASC/DESC']] }
Aggregation	Uses :
  Uses .aggregate([]) for complex queries	
  Uses SQL queries (sequelize.query())
Relationships	:
  Uses populate() for references	
  Uses belongsTo(), hasOne(), hasMany(), belongsToMany()
Joins	: 
  No joins, uses references + populate() or aggregation pipeline
  Uses SQL joins (include: [{ model }])
Raw Queries	:
  Uses native MongoDB queries	
  Supports raw SQL (sequelize.query())
Indexes	: 
  Defined with schema.index({ key: 1 })	
  Defined with indexes: [{ fields: ['key'] }]
Validation : 
  Built-in validation in Schema	
  Uses validate: {} in model definition
Middleware/Hooks : 
  pre(), post() hooks	
  beforeCreate(), afterCreate() hooks
Caching	: 
  Requires external caching (Redis)	
  Can use DB-level caching (e.g., MySQL query cache)
Use Case : 
  Best for NoSQL, flexible schema, JSON-based data	
  Best for SQL, structured data, relational DBs


CRUD COMMANDS : MongoDB Mongoose MySQL Sequelize
Create :
  db.collection.insertOne({ name: "John" })
  Model.create({ name: "John" })
  INSERT INTO users (name) VALUES ("John");
  Model.create({ name: "John" })
Read (All) : 
  db.collection.find({})	
  Model.find({})	
  SELECT * FROM users;	
  Model.findAll()  
Read (One) :	
  db.collection.findOne({ _id: ObjectId("...") })	
  Model.findById("...")	
  SELECT * FROM users WHERE id = 1;	
  Model.findOne({ where: { id: 1 } })
Update (Single Field) :
  db.collection.updateOne({ _id: ... }, { $set: { name: "Alice" } })	
  Model.updateOne({ _id: "..." }, { $set: {name: "Alice"} })	
  UPDATE users SET name = "Alice" WHERE id = 1;	
  Model.update({ name: "Alice" }, { where: { id: 1 } })
Update (Multiple Fields) : 
  db.users.updateOne({ _id: ... }, { $set: { name: "Alice", age: 30 } })	
  User.updateOne({ _id: "..." }, { $set: { name: "Alice", age: 30 } })	
  UPDATE users SET name = "Alice", age = 30 WHERE id = 1;	
  User.update({ name: "Alice", age: 30 }, { where: { id: 1 } })
Delete One :
  db.users.deleteOne({ _id: ... })	
  User.deleteOne({ _id: "..." })	
  DELETE FROM users WHERE id = 1;	
  User.destroy({ where: { id: 1 } })
Delete Many :  
  db.users.deleteMany({ age: { $gt: 30 } })
  await User.deleteMany({ age: { $gt: 30 } })
  DELETE FROM users WHERE age > 30;
  await User.destroy({ where: { age: { [Op.gt]: 30 } } }) // Sequelize uses operators ([Op.gt]).



resource & methods : 
User : find, findOne, findOne & save, findOne & save
Product : create, find, findOne, findOneAndUpdate, findOneAndDelete, 
Order : find, findOne, find, findOne & save, 
Review : findOne & findOne & create, find, findOne, findOne & save, findOne & deleteOne, find