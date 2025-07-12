## **`Mongoose Hooks and Methods :`**

### **`User Model :`**

### **Algorithm: Password Hashing on Save**

**Function:** `userSchema.pre('save')`

1. When saving a user, trigger the pre-save hook.
2. If the password is not modified, exit the hook.
3. Generate a cryptographic salt with 10 rounds.
4. Hash the password using the salt.
5. Replace the plain password with the hashed password.
6. Proceed to save the document.

### **Algorithm: Compare Passwords**

**Function:** `userSchema.methods.comparePassword(candidatePassword)`

1. Accept the user-entered password as `candidatePassword`.
2. Use bcrypt to compare `candidatePassword` with the hashed password in the database.
3. Return `true` if they match; else return `false`.

---

### **`Product Model :`**

### **Algorithm: Product-Review Virtual Population**

**Purpose:** To associate reviews with a product using Mongoose virtuals.

1. Define a virtual field `reviews` on `ProductSchema`.
2. Reference the `Review` model.
3. Link `Product._id` (`localField`) to `Review.product` (`foreignField`).
4. Set `justOne: false` to retrieve an array of reviews per product.

### **Algorithm: Cascade Delete Reviews When Product is Deleted**

**Function:** `ProductSchema.pre('findOneAndDelete')`

1. Before executing `findOneAndDelete` on a product:
   - Retrieve the product being deleted using `this.getFilter()`.
2. If the product exists:
   - Use the product's `_id` to delete all `Review` documents with a matching `product` field.
3. Call `next()` to proceed with deletion.

---

### **`Review Model :`**

### **Algorithm: Enforce Unique Review per Product per User**

1. Create a compound index on `{ product, user }` with `unique: true`.
2. This ensures:
   - A user can submit only one review per product.

### **Algorithm: Calculate Average Rating & Number of Reviews**

**Static Method:** `calculateAverageRating(productId)`

1. Aggregate all reviews for a given `productId`.
2. Group results:
   - Compute average rating using `$avg`.
   - Count reviews using `$sum`.
3. Use optional chaining to handle empty result arrays.
4. Update corresponding product with:
   - Rounded `averageRating`.
   - `numOfReviews`.

### **Algorithm: Trigger Rating Calculation on Review Actions**

**Hooks:**
#### On Save
1. After a review is saved:
   - Call `calculateAverageRating` with `this.product`.

#### On Delete (`deleteOne`)
1. After a review is deleted:
   - Call `calculateAverageRating` with `this.product`.

#### On Update (`findOneAndUpdate`)
1. After a review is updated:
   - If a document (`doc`) was modified:
     - Call `calculateAverageRating` with `doc.product`.


## **`Auth Algorithm :`**

### 🧠 **Algorithm: Register User**

1. **Extract Request Data**
   - Read `name`, `email`, and `password` from `req.body`.

2. **Check If Email Exists**
   - Use `User.findOne({ email })` to check if the user already exists in the database.
   - If it exists, throw a `BadRequestError` saying `"Email ID already exists"`.

3. **Determine User Role**
   - Count all documents in the `User` collection using `User.countDocuments({})`.
   - If it's the first user (count === 0), assign role as `"admin"`.
   - Otherwise, assign role as `"user"`.

4. **Create New User**
   - Use `User.create({ name, email, password, role })` to add the new user to the database.

5. **Prepare Token Payload**
   - Extract only necessary fields to create `tokenUser`:
     ```js
     { name: user.name, userId: user._id, role: user.role }
     ```

6. **Generate JWT Token**
   - Sign the token using:
     ```js
     jwt.sign(tokenUser, "secret", { expiresIn: "1d" })
     ```

7. **Attach Token as Cookie**
   - Use `res.cookie` to send the JWT as a cookie:
     - Name: `"cookieToken"`
     - Value: JWT token
     - Options:
       - `httpOnly`: true
       - `secure`: true in production
       - `expires`: in 1 day
       - `signed`: true

8. **Respond to Client**
   - Send a success response with:
     ```js
     { user: tokenUser }
     ```

---

### 🧠 **Algorithm: Login User**

1. **Extract Input**
   - Destructure `email` and `password` from `req.body`.

2. **Validate Input**
   - If either `email` or `password` is missing:
     - Throw `BadRequestError("Please provide email and password")`.

3. **Check User Existence**
   - Search for user in the database using `User.findOne({ email })`.
   - If no user found:
     - Throw `UnauthenticatedError("Invalid Credentials")`.

4. **Verify Password**
   - Use `user.comparePassword(password)` to check if password is valid.
   - If invalid:
     - Throw `UnauthenticatedError("Invalid Credentials")`.

5. **Create Token Payload**
   - Call `createTokenUser(user)` to extract safe user details:
     ```js
     { name: user.name, userId: user._id, role: user.role }
     ```

6. **Attach JWT Token in Cookie**
   - Call `attachCookiesToResponse({ res, user: tokenUser })`:
     - This creates a JWT, attaches it to `res.cookie()` with secure options.

7. **Send Success Response**
   - Respond with status `200 OK` and:
     ```js
     { user: tokenUser }
     ```
---

### 🧠 **Algorithm: Logout User**

1. **Overwrite the Auth Cookie**
   - Use `res.cookie()` to reset the `token` cookie:
     - Set the value to `'logout'`
     - Mark it as `httpOnly: true` (to prevent JavaScript access)
     - Set the expiry to 1 second from now → `new Date(Date.now() + 1000)`
     - 🔒 This effectively **removes the existing JWT token** from the browser.

2. **Send Success Response**
   - Respond with:
     ```js
     { msg: "user logged out!" }
     ```
   - With HTTP status: `200 OK`
✅ Purpose: This function logs the user out by clearing the cookie storing the JWT token.


## **`Authentication middleware Algorithm :`**

### ✅ **1. `authenticateUser`**

**Purpose**:  
Ensure the request is from an authenticated user by verifying a JWT token (from headers or cookies).

#### 🧠 Algorithm:

1. **Token Extraction**:
   - If the `Authorization` header exists and starts with `'Bearer'`, extract the token from it.
     ```js
     token = authHeader.split(' ')[1];
     ```
   - Otherwise, check for `req.cookies.token`.

2. **If No Token Found**:
   - Throw `UnauthenticatedError`.

3. **Token Validation**:
   - Call `isTokenValid(token)` to decode and verify the token.
   - If invalid → go to `catch` and throw `UnauthenticatedError`.

4. **Attach Payload to Request**:
   - Attach `userId` and `role` from the payload to `req.user` so that other middlewares or controllers can use it.
     ```js
     req.user = {
       userId: payload.user.userId,
       role: payload.user.role,
     };
     ```

5. **Call `next()`**:
   - Pass control to the next middleware or controller.


### ✅ **2. `authorizeRoles(...roles)`**

**Purpose**:  
Allow only users with specific roles to access a route.

#### 🧠 Algorithm:

1. Accept a list of roles (e.g., `['admin']` or `['admin', 'moderator']`).

2. Return a middleware function.

3. In the middleware:
   - Check if `req.user.role` is included in the list of allowed roles.

4. **If Not Authorized**:
   - Throw `UnauthorizedError`.

5. **If Authorized**:
   - Call `next()` to continue to the controller.

### 💡 Example Usage

```js
router.get('/admin-route', authenticateUser, authorizeRoles('admin'), adminController);
```

### 🔁 Optional Suggestion

You can **extract permission checking logic** (like you did in `updateReview`, `deleteReview`, etc.) into a utility:

```js
// utils/checkPermissions.js
const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.role === 'admin') return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new CustomError.UnauthorizedError('Not authorized to access this route');
};
```

Use it like this:
```js
checkPermissions(req.user, review.user);
```

## **`Multer Upload Middleware Algorithm :`**

### **Step 1: Define Upload Directory**
- Get absolute path of upload folder:  
  `dir = path to '../public/uploads'`.


### **Step 2: Ensure Directory Exists**
- **IF** directory doesn't exist  
  → Create it using `fs.mkdirSync(dir, { recursive: true })`.


### **Step 3: Set Up Storage Engine**
#### a. **Destination Function**
- On file upload, store file in `dir`.

#### b. **Filename Function**
- Rename the uploaded file as:  
  `current_timestamp + original file extension`.


### **Step 4: File Type Validation**
- Define allowed file types:  
  `/jpeg|jpg|png|gif/`.

- Extract:
  - `extname` from filename.
  - `mimetype` from file metadata.

- **IF** both `extname` & `mimetype` match allowed types  
  → Allow file upload (`cb(null, true)`).

- **ELSE**  
  → Reject file (`cb(Error, false)`).


### **Step 5: Set File Size Limit**
- Limit file size to 5MB  
  → `limits.fileSize = 5 * 1024 * 1024`.


### **Step 6: Initialize Multer**
- Create `upload` using `multer({ storage, fileFilter, limits })`.


### **Step 7: Export Middleware**
- Export `upload` for use in routes.

✅ **Result**:  
Now you can use `upload.single('image')` in routes to allow **image uploads with validation and limits**.

---

## **`Users Algorithm :`**

### ✅ **1. `getAllUsers`**

**Purpose**: Get all users with role `"user"` (not admins).

#### 🧠 Algorithm:
1. Query users from the database: `User.find({ role: 'user' })`.
2. Exclude their password using `.select('-password')`.
3. Return `200 OK` with the list of users.

---

### ✅ **2. `getSingleUser`**

**Purpose**: Get one user by ID, and allow access only if:
- The requester is **admin**, or
- The requested user is **themselves**

#### 🧠 Algorithm:
1. Extract `id` from `req.params`.
2. Find the user: `User.findOne({ _id: id })` and exclude password.
   - If not found → throw `NotFoundError`.
3. **Check Permissions**:
   - Allow if `req.user.role === 'admin'` or user is accessing their own data (`req.user.userId === user._id`)
   - Else → throw `UnauthorizedError`.
4. Return `200 OK` with user data.

---

### ✅ **3. `showCurrentUser`**

**Purpose**: Return the currently authenticated user.

#### 🧠 Algorithm:
1. Get `req.user` (this is set by the auth middleware).
2. Return `200 OK` with user info.

---

### ✅ **4. `updateUser`**

**Purpose**: Update the logged-in user’s `name` and `email`.

#### 🧠 Algorithm:
1. Extract `email` and `name` from `req.body`.
   - If either is missing → throw `BadRequestError`.
2. Find the user using `req.user.userId`.
3. Update `email` and `name`, then `save()`.
4. Create a new JWT token with updated info.
5. Set the token in a **signed, HTTP-only cookie**.
6. Return `200 OK` with updated user info and new token.

---

### ✅ **5. `updateUserPassword`**

**Purpose**: Let a user change their password securely.

#### 🧠 Algorithm:
1. Extract `oldPassword` and `newPassword` from `req.body`.
   - If either missing → throw `BadRequestError`.
2. Find the user by `req.user.userId`.
3. Use `comparePassword()` to check if `oldPassword` is correct.
   - If not → throw `UnauthenticatedError`.
4. Set `user.password = newPassword`.
5. Save the user (`user.save()` triggers hashing again).
6. Return `200 OK` with success message.

---

## **`Products Algorithm :`**

### ✅ **1. getAllProducts**

**Purpose**: Get all products from the database.

#### Algorithm:
1. Use `Product.find({})` to fetch all products.
2. Return a response with:
   - The list of products.
   - The total count using `products.length`.
3. Set status code to `200 OK`.

---

### ✅ **2. getSingleProduct**

**Purpose**: Fetch a specific product by its ID.

#### Algorithm:
1. Extract `productId` from `req.params`.
2. Use `Product.findOne({ _id: productId })` to get the product.
3. Use `.populate('reviews')` to include the product's reviews.
4. If no product is found:
   - Throw a `NotFoundError` with the product ID.
5. If found:
   - Return the product in the response.
   - Set status code to `200 OK`.

---

### ✅ **3. updateProduct**

**Purpose**: Update an existing product using its ID.

#### Algorithm:
1. Extract `productId` from `req.params`.
2. Use `Product.findOneAndUpdate({ _id: productId }, req.body)`:
   - Set `new: true` to return the updated product.
   - Set `runValidators: true` to validate input.
3. If no product is found:
   - Throw a `NotFoundError`.
4. If updated:
   - Return the updated product.
   - Set status code to `200 OK`.

---

### ✅ **4. deleteProduct**

**Purpose**: Delete a product by ID.

#### Algorithm:
1. Extract `productId` from `req.params`.
2. Use `Product.findOne({ _id: productId })` to find the product.
3. If not found:
   - Throw a `NotFoundError`.
4. If found:
   - Call `product.remove()` to delete it.
   - Return success message.
   - Set status code to `200 OK`.

---

### ✅ **5. createProduct**

**Purpose**: This function allows a logged-in user to create a new product and stores who created it by saving their user ID with the product.

1. **Attach User ID to the Product Data**
   - Extract the logged-in user's ID from `req.user.userId`
   - Assign it to `req.body.user` to associate the product with the current user

2. **Create the Product in the Database**
   - Call `Product.create(req.body)` to store the product
   - This includes all fields from the request body plus the `user` field

3. **Send the Response**
   - Respond with:
     ```js
     { product }
     ```
   - Set HTTP status code to `201 Created`

---

### ✅ **6. `uploadImage` (Using `express-fileupload`)**

**Purpose**: Upload a **single image file** using `express-fileupload`.

#### 🧠 Algorithm:
1. Check if `req.files` exists.  
   - If not, throw a `BadRequestError("No file uploaded")`.
2. Get the file: `req.files.image`.
3. Check if file type is an image using `.mimetype.startsWith('image')`.  
   - If not, throw a `BadRequestError("Please upload image in jpeg format")`.
4. Set a size limit: `1MB`.  
   - If the image is larger, throw a `BadRequestError("Please upload image smaller than 1MB")`.
5. Define the path to save the image in `public/uploads` folder.
6. Move the image to the server using `.mv()`.
7. Send a success response with the path: `/uploads/filename`.

---

### ✅ **7. `uploadFile` (Using `multer` middleware for single file)**

**Purpose**: Upload a **single file** using `multer`.

#### 🧠 Algorithm:
1. `uploadMiddleware` (from `multer`) must run before this controller.
2. Check if `req.file` exists.
   - If not, return `400 Bad Request` with message: "No file uploaded."
3. If file is present, return:
   - Status `200 OK`.
   - Message: "File uploaded successfully!" and file info in `req.file`.

---

### ✅ **8. `uploadMultipleFiles` (Using `multer` middleware for multiple files)**

**Purpose**: Upload **multiple files** using `multer`.

#### 🧠 Algorithm:
1. Check if `req.files` exists and is not empty.
   - If empty, return `400 Bad Request` with message: "No files uploaded."
2. Extract filenames from `req.files` using `.map(file => file.filename)`.
3. Return:
   - Status `200 OK`.
   - Message: "Files uploaded successfully!" with list of filenames.

---

## **`Orders Algorithm :`**

### ✅ **1. `createOrder`**

**Purpose**: Validate cart items, calculate totals, mock Stripe payment, and create the order.

#### 🧠 Algorithm:
1. **Extract & Validate Input**: Get `cartItems`, `tax`, and `shippingFee` from `req.body`.
   - If cart is empty or tax/shipping is missing → throw `BadRequestError`.
2. **Initialize**:
   - Create an empty array `orderItems`.
   - Set `subtotal = 0`.
3. **Loop Through Cart Items**:
   - For each item, find the product in DB using `item.product`.
   - If not found → throw `NotFoundError`.
   - Extract `name`, `price`, `image`, `_id` from the product.
   - Create `singleOrderItem` object and push to `orderItems`.
   - Add to `subtotal`: `subtotal += price * item.amount`.
4. **Calculate Final Total**:  
   `total = subtotal + tax + shippingFee`.
5. **Fake Stripe Payment Intent**:
   - Call `fakeStripeAPI({ amount: total, currency: 'usd' })`.
   - Get `client_secret`.
6. **Create Order** in DB with:
   - All order fields + `user: req.user.userId`
7. **Send Response**:  
   - Status `200 OK`  
   - JSON with `order` and `clientSecret`.

---

### ✅ **2. `getAllOrders`**

**Purpose**: Get all orders (usually for admin).

#### 🧠 Algorithm:
1. Fetch all orders using `Order.find({})`.
2. Return `200 OK` with orders and their count.

---

### ✅ **3. `getSingleOrder`**

**Purpose**: Fetch a specific order and check if the user has access.

#### 🧠 Algorithm:
1. Extract `orderId` from `req.params`.
2. Find the order using `Order.findOne({ _id: orderId })`.
   - If not found → throw `NotFoundError`.
3. **Check Permissions**:
   - Allow if `req.user.role === 'admin'` OR if the order belongs to `req.user.userId`.
   - Else → throw `UnauthorizedError`.
4. Return `200 OK` with the order.

---

### ✅ **4. `getCurrentUserOrders`**

**Purpose**: Fetch all orders placed by the current logged-in user.

#### 🧠 Algorithm:
1. Get the user’s ID from `req.user.userId`.
2. Query orders with `Order.find({ user: req.user.userId })`.
3. Return `200 OK` with the list and count.

---

### ✅ **5. `updateOrder`**

**Purpose**: Update an order's payment status to "paid".

#### 🧠 Algorithm:
1. Extract `orderId` from `req.params`, and `paymentIntentId` from `req.body`.
2. Find the order using `Order.findOne({ _id: orderId })`.
   - If not found → throw `NotFoundError`.
3. **Check Permissions**:
   - Allow if admin or the order belongs to current user.
   - Else → throw `UnauthorizedError`.
4. Update:
   - `order.paymentIntentId = paymentIntentId`
   - `order.status = 'paid'`
   - Save order to DB.
5. Return `200 OK` with updated order.

---

## **`Reviews Algorithm :`**

### ✅ **1. `createReview`**

**Purpose**: Allow a logged-in user to submit a review on a product (only once).

#### 🧠 Algorithm:
1. Extract `productId` from `req.body.product`.
2. Check if the product exists:
   - `Product.findOne({ _id: productId })`
   - If not → throw `NotFoundError`.
3. Check if the user already submitted a review:
   - Find by both `product` and `user`.
   - If exists → throw `BadRequestError`.
4. Add `user` to `req.body` using `req.user.userId`.
5. Create the review with `Review.create(req.body)`.
6. Return `201 Created` with the review.

---

### ✅ **2. `getAllReviews`**

**Purpose**: Get all reviews and include selected product details.

#### 🧠 Algorithm:
1. Fetch all reviews: `Review.find({})`.
2. Use `.populate()` to include `product` fields: `name`, `company`, and `price`.
3. Return `200 OK` with the reviews and their count.

---

### ✅ **3. `getSingleReview`**

**Purpose**: Get one review by ID.

#### 🧠 Algorithm:
1. Extract `reviewId` from `req.params.id`.
2. Find the review: `Review.findOne({ _id: reviewId })`.
   - If not found → throw `NotFoundError`.
3. Return `200 OK` with the review.

---

### ✅ **4. `updateReview`**

**Purpose**: Allow users to update their own review or allow admins.

#### 🧠 Algorithm:
1. Extract `reviewId` from `req.params`.
2. Extract `rating`, `title`, and `comment` from `req.body`.
3. Find the review: `Review.findOne({ _id: reviewId })`.
   - If not found → throw `NotFoundError`.
4. Check permission:
   - If user is `admin` or review’s `user` matches `req.user.userId`, allow update.
   - Else → throw `UnauthorizedError`.
5. Update fields and `save()` the review.
6. Return `200 OK` with updated review.

---

### ✅ **5. `deleteReview`**

**Purpose**: Allow the owner of a review or an admin to delete it.

#### 🧠 Algorithm:
1. Extract `reviewId` from `req.params`.
2. Find the review by ID.
   - If not found → throw `NotFoundError`.
3. Check permission:
   - Allow if `admin` or user owns the review.
   - Else → throw `UnauthorizedError`.
4. Delete the review.
5. Return `200 OK` with success message.

---

### ✅ **6. `getSingleProductReviews`**

**Purpose**: Get all reviews for a specific product.

#### 🧠 Algorithm:
1. Extract `productId` from `req.params.id`.
2. Query reviews with `{ product: productId }`.
3. Return `200 OK` with the list and count of reviews.

---

Sure! Here's a cleaner and well-structured version of your explanation:

---

✅ **Error Handling Strategy in Express App:**

1. **Async Errors**  
   Errors that occur inside `async` functions (e.g., during database calls) are caught using an `asyncWrapper`. This wrapper passes any error to the global error handling middleware via `next(error)`.

2. **Custom Errors**  
   We define custom error classes (extending the built-in `Error` class) to throw meaningful errors like `NotFoundError`, `BadRequestError`, etc.  
   These thrown errors are caught by the `asyncWrapper`’s catch block and forwarded to the global error middleware for consistent handling.

3. **Synchronous Errors (outside routes or wrapper)**  
   If any error occurs outside the scope of route handlers or `asyncWrapper`, it may crash the app. To handle these, we use:
   ```js
   process.on('uncaughtException', (err) => {
     console.error('Uncaught Exception 🔥', err);
     process.exit(1);
   });
   ```

4. **Unhandled Promise Rejections**  
   When a promise is rejected and not caught with `.catch()`, we handle it globally using:
   ```js
   process.on('unhandledRejection', (reason, promise) => {
     console.error('Unhandled Rejection 💥', reason);
     process.exit(1);
   });
   ```

---


In short :
Async errors caught by asyncWrapper function & forwarded to the global error handling middleware
To throw custom errors we have created different classes from Error class & when we throw error it is caught by catch block of asyncWrapper & forwarded to the global error handling middleware
When any error occurs outside the asyncWrapper function or for any synchronous error we handled it by using uncaughtException.
When any rejected promise with no catch block we used unhandledRejection 

---

### ✅ **1. Custom Error Classes**  
To throw structured errors:
- `BadRequestError`
- `NotFoundError`
- `UnauthenticatedError`
- `UnauthorizedError`

✅ You already have this.

---

### ✅ **2. asyncWrapper Utility**  
Wraps async route handlers to catch `async/await` errors and pass them to the error middleware.

✅ You have this.

---

### ✅ **3. Global Error Handling Middleware**
Receives errors via `next(error)` and sends structured responses (with status code + message).

✅ You’ve written this.

---

### ✅ **4. Handling `uncaughtException`**
For sync errors outside route handlers (e.g., invalid JSON parsing, typos, etc.). Must be placed **at the top of `app.js`**.

✅ You noted this already.

---

### ✅ **5. Handling `unhandledRejection`**
For rejected promises that were not caught with `.catch()`. Must be placed **at the bottom** of `server.js` before `process.exit()`.

✅ Covered.

---

### ✅ **6. Validation Errors (Mongoose)**  
Handled inside your error middleware:
- `ValidationError` (invalid schema values)
- `CastError` (invalid ObjectId)
- `duplicate key` (e.g., unique fields like email)

✅ Looks like you included these too.

---

### ✅ **7. File Upload Errors**
Handled explicitly in `uploadImage`, `uploadFile`, and `uploadMultipleFiles`.

✅ Present.

---

### ✅ **8. Missing Routes Handler (404)**
A `notFound` middleware (for unknown routes):
```js
const notFound = (req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
};
```

✅ You can use this as a middleware after all routes.

---

### ✅ **9. Logging the Error (optional but helpful)**
You can add a logger like `winston`, `pino`, or even `console.error(err.stack)` inside your error middleware for production debugging.

🔸 Optional — but helps in large apps.

---

### ✅ **10. Response Consistency**
Always return:
```json
{
  "success": false,
  "message": "Error message here",
  "statusCode": 400
}
```
instead of sending raw Mongoose errors to the frontend.

✅ You seem to be doing that using `CustomError` and middleware.

---

### 🟡 **BONUS (Optional Enhancements):**
- Add a custom logger middleware for request tracking.
- Add `helmet`, `express-rate-limit`, and `cors` for better security.
- Create centralized constants for error codes.

---

win 7 8 10 11 installation
ms office 
outlook configure
chrome & firefox
win format & patitioning
motherboard ram hard disk
adcc bank

excel it & teams delete
technical 
ip subnet 