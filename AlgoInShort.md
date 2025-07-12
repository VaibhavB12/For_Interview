Important Functions :
The createTokenUser function takes a user object and returns a smaller object with only the necessary information: the user's name, ID, and role. This is useful for creating a secure and clean token without including sensitive or unnecessary data like the password.

The createJWT function generates a signed JWT using the provided payload (usually user data). It uses a secret key and sets an expiration time, both of which come from environment variables. This token can then be used to securely identify the user in future requests.

The isTokenValid function checks if a given JWT token is valid and not tampered with. It uses the same secret key that was used to sign the token. If the token is valid, it returns the decoded payload; otherwise, it throws an error. This helps confirm that the request is coming from an authenticated user.

The attachCookiesToResponse function creates a JWT using the user data and attaches it to the response as a secure, HTTP-only cookie. This cookie is set to expire in one day and is signed to prevent tampering. If the app is in production, the cookie is also marked as secure so it's only sent over HTTPS. This setup helps store the token safely on the client side for authentication in future requests.

The checkPermissions function is used to control access to certain resources. It checks if the user making the request is an admin or if they are trying to access their own data. If either condition is true, the function allows the request to continue. But if the user is not an admin and is trying to access someone else’s data, it throws an unauthorized error. This helps protect user data and ensures only the right people can access specific resources.

---

Schema hooks & methods :
This pre-save middleware runs before saving a user to the database. It checks if the password field has been modified. If not, it skips hashing. If the password is new or changed, it generates a salt and hashes the password using bcrypt. This ensures that passwords are stored securely in the database, not as plain text.

The comparePassword method is used to check if the entered password (candidatePassword) matches the hashed password stored in the database. It uses bcrypt's compare function to do this securely. If the passwords match, it returns true; otherwise, it returns false. This method is commonly used during user login to verify credentials.

This virtual field called reviews is used to link products with their related reviews without storing the review data directly inside the product document. It sets up a reference to the Review model, where the product’s _id matches the product field in the review documents. Setting justOne: false means a product can have multiple reviews. This helps in populating all reviews for a product when needed, using Mongoose's .populate() method.

This pre-remove middleware runs before a product is deleted from the database. It ensures that all reviews linked to this product are also deleted by using deleteMany on the Review model. This prevents leftover (orphaned) reviews from staying in the database after the related product is removed, keeping the data clean and consistent.

This line creates a unique compound index on the product and user fields in the review schema. It ensures that each user can write only one review for a specific product. If a user tries to submit another review for the same product, MongoDB will throw a duplicate key error. This helps maintain review integrity and prevents spam or duplicate reviews.

The calculateAverageRating function calculates the average rating and total number of reviews for a given product using MongoDB’s aggregation. It first matches all reviews linked to the product, then groups them to calculate the average and count. It updates the related product with this data. If there are no reviews, the result is an empty array, so optional chaining (result?.[0]) is used to avoid errors. This method helps keep the product’s averageRating and numOfReviews up-to-date whenever reviews are added or removed.

This post-save hook runs automatically after a review is saved. It calls the calculateAverageRating method to update the related product’s average rating and number of reviews based on all existing reviews. Using this.constructor lets it access the Review model inside the hook. This ensures the product stats stay updated every time a new review is added or changed.

This post-delete hook runs after a single review is deleted using document methods like review.deleteOne(). It calls the calculateAverageRating method to update the average rating and review count of the related product. This helps keep the product’s stats accurate after a review is removed. The option { document: true, query: false } ensures the hook works on the deleted document, not on queries.

This post-update hook runs after a review is updated using findOneAndUpdate. If a document (doc) was updated, it calls calculateAverageRating to recalculate and update the product’s average rating and number of reviews. This keeps the product data accurate when a review’s rating is changed. The check if (doc) ensures the function runs only if an actual document was found and updated.

---

Middlewares :
The authenticateUser function checks if the user is logged in by looking for a token in the request — either in the Authorization header or in cookies. If no token is found, it throws an authentication error. If a token is found, it verifies it using isTokenValid. If the token is valid, it adds the user's ID and role to the req object for further use in the app and calls next() to continue. If the token is invalid, it throws an error.

The authorizeRoles function restricts access based on user roles. It takes allowed roles as arguments and returns a middleware. Inside, it checks if the logged-in user's role (from req.user.role) is included in the allowed roles. If not, it throws an unauthorized error. If the role is valid, it calls next() to continue. This is useful for protecting routes that only certain roles (like admin) should access.

The notFound function handles all requests to undefined routes. If a user tries to access a route that doesn't exist in the server, this function sends a 404 status with a message saying "Route does not exist." It helps inform the user that they've hit an invalid or missing endpoint.

The errorHandlerMiddleware is a centralized function to handle different types of errors in the app. It checks the error type and customizes the message and status code based on the error. It handles validation errors, duplicate key errors (like repeated email), and wrong ID format (CastError). If no specific error type matches, it returns a general error message. Finally, it sends the appropriate response to the client with a clear message and proper status code.

---

authController :
The register function handles new user signup. It takes the user's email, name, and password from the request body. It first checks if the email already exists using findOne() and throws BadRequestError if it does. If this is the first user, they are made an admin by using countDocuments({}); otherwise, the role is set to user. Then it creates the user with name, email, password, role. After that it generates payload with selected user info using createTokenUser. In th next step the token is created from payload & attached to the signed cookie using attachCookiesToResponse().Finally, it sends back the user info in the response with a 201 status.
email name password > emailAlreadyExists > isFirstAccount > create user > createTokenUser(payload) > attachCookiesToResponse > res(tokenUser)

The login function handles user login. It takes the email and password from the request and checks if both are provided. Then, it searches for the user in the database by email. If the user doesn't exist or the password is incorrect, it throws an authentication error. If the credentials are valid, it creates a token with basic user info using createTokenUser and sends it as a secure cookie using attachCookiesToResponse. Finally, it returns the user info in the response with a 200 status.

The logout function logs the user out by overwriting the existing token cookie with a dummy value 'logout' and setting it to expire in 1 second. This removes the valid token from the user's browser. Then it sends a success message with a 200 status to confirm the logout.

---

User :
The getAllUsers function fetches all users with the role of "user" from the database. It excludes their passwords using .select('-password') to keep the data secure. Finally, it sends the list of users in the response with a 200 OK status. The req.user is also logged to the console for debugging or tracking purposes.

The getSingleUser function fetches one user by ID from the database, excluding the password for security. If the user doesn't exist, it throws a "Not Found" error. Before sending the user data, it checks if the logged-in user has permission to access this user's details (either admin or same user). If everything is valid, it returns the user data with a 200 OK status.

The showCurrentUser function simply returns the details of the currently logged-in user. It reads the user info from req.user, which was added during authentication, and sends it back in the response with a 200 OK status. This is useful to show user profile data on the frontend.

The updateUser function updates the logged-in user’s name and email. It first checks if both values are provided—if not, it throws a Bad Request error. Then it finds the user by their ID, updates the name and email, and saves the changes. After that, it creates a new token, attaches it to the cookie, and sends back the updated user info in the response.
It can be done with : findOne & save, findOneAndUpdate, findById & save
Check other ways in : C:\Users\Ghost\Desktop\Node-Project\10-e-commerce-api\starter\controllers\userController.js

The updateUserPassword function lets a logged-in user change their password. It first checks if both old and new passwords are provided. Then it finds the user by ID and checks if the old password is correct. If it’s wrong, it throws an error. If correct, it updates the password and saves it. Finally, it sends a success message in the response.

--- 

Product:
The `createeProduct` function:
The createProduct function creates a new product. It first adds the logged-in user's ID (req.user.userId) to the product data as the product owner. Then it creates the product using Product.create() and sends a response with the newly created product and a 201 Created status.

The `getAllProducts` function:
The getAllProducts function retrieves all the products from the database using Product.find({}). Then, it sends a response with:
    the list of products, and
    the total count of products, along with a status code 200 OK.

The `getSingleProduct` function:
    Gets the product ID from the route parameters (`req.params`).
    Finds the product in the database using `Product.findOne({ _id: productId })`.
    Uses `.populate('reviews')` to also fetch all reviews related to that product.
    If no product is found, it throws a `NotFoundError`.
    If found, it sends back the product (along with its reviews) and a `200 OK` status.

The `updateProduct` function:
1. Gets the product ID from the route parameters (`req.params`).
2. Uses `Product.findOneAndUpdate()` to update the product in the database:
   - `{ _id: productId }`: Finds the product by ID.
   - `req.body`: Contains the fields to update.
   - `{ new: true, runValidators: true }`: 
     - `new: true` returns the updated document.
     - `runValidators: true` ensures Mongoose validations are applied during update.
3. If no product is found, it throws a `NotFoundError`.
4. If the update is successful, it sends back the updated product with a `200 OK` response.

The `deleteProduct` function:
1. Extracts the `productId` from the URL parameters.
2. Uses `Product.findOne()` to check if the product exists in the database.
3. If no product is found, it throws a `NotFoundError`.
4. If the product exists:
   - Calls `product.remove()` to delete the product.
   - This triggers any Mongoose **pre-remove hooks**, like deleting associated reviews.
5. Sends a response with `200 OK` and a success message:  
   ✅ `'Success! Product removed.'`

The `uploadImage` function:
Uploads a product image to the server after validating the file.

1. **Check if file exists**  
   If `req.files` is missing, throw:  
   ❌ `No File Uploaded`

2. **Extract the file**  
   `const productImage = req.files.image`

3. **Validate file type**  
   If it’s not an image (`!mimetype.startsWith('image')`), throw:  
   ❌ `Please Upload Image`

4. **Validate file size**  
   Max size allowed is `1MB`. If file is larger, throw:  
   ❌ `Please upload image smaller than 1MB`

5. **Generate file path**  
   Save image to:  
   `../public/uploads/<image-name>`

6. **Move the file**  
   Use `productImage.mv(imagePath)` to move the file.

7. **Send response**  
   Returns:  
   ✅ `{ image: '/uploads/<image-name>' }`

✅ Steps to Set Up Multer for Image Uploads:
    Create an uploads directory if it doesn't exist (e.g., public/uploads).
    Configure storage to save files in the uploads directory and rename them with a timestamp.
    Define allowed file types (jpeg, jpg, png, gif) using a file filter.
    Set a file size limit, e.g., 5MB, to prevent large uploads.
    Initialize Multer with the custom storage, file filter, and limits.
    Export the Multer instance for use in routes.
    Use Multer middleware in your route to handle file uploads.
    In your controller, access the uploaded file and respond with the file path or URL.

The `uploadFile` function:  
1. Is used **after** applying the `upload.single('file')` Multer middleware in the route.  
2. Checks if `req.file` exists to verify if a file was uploaded.  
3. If no file is found:  
   - Sends a `400 Bad Request` response.  
   - ❌ `'No file uploaded.'`  
4. If a file is present:  
   - Sends a `200 OK` response with a success message and file details.  
   ✅ `'File uploaded successfully!'`  
5. If an error occurs during the upload process:  
   - Catches the error.  
   - Sends a `500 Internal Server Error` response.  
   ❌ `'Error uploading file.'`


The `uploadMultipleFiles` function:  
1. Is used **after** applying the `upload.array('files')` Multer middleware in the route.  
2. Checks if `req.files` exists and contains files.  
3. If no files are found:  
   - Sends a `400 Bad Request` response.  
   ❌ `'No files uploaded.'`  
4. If files are present:  
   - Maps the uploaded files to extract their filenames.  
   - Sends a `200 OK` response with a success message and filenames.  
   ✅ `'Files uploaded successfully!'`  
5. If an error occurs during the upload process:  
   - Catches the error.  
   - Sends a `500 Internal Server Error` response.  
   ❌ `'Error uploading files.'`

---

Order :
The `fakeStripeAPI` function:  
1. Is a **mock function** used to simulate a Stripe payment API call.  
2. Accepts an object with two parameters:  
   - `amount`: The payment amount.  
   - `currency`: The currency type (e.g., USD, INR).  
3. Returns a mock payment response object containing:  
   - A static `client_secret` value:  
     ✅ `'someRandomValue'`  
   - The original `amount` passed in.  
4. Helps in **testing payment flows** without calling the real Stripe API.

The `createOrder` function:  
1. **Extracts and validates** `cartItems`, `tax`, and `shippingFee` from the request body.  
   - ❌ Throws `BadRequestError` if items are missing or invalid.  
2. **Initializes** an empty array `orderItems` and a `subtotal` set to 0.  
3. **Loops through each cart item** using `for...of` to:
   - Fetch the product from the database using its ID.  
   - ❌ Throws `NotFoundError` if the product doesn't exist.  
   - Extracts `name`, `price`, `image`, and `_id` from the product.  
   - Builds a structured `singleOrderItem` object.  
   - Adds the item to `orderItems`.  
   - Increments the `subtotal` (amount × price).  
4. **Calculates the total** by adding `subtotal`, `tax`, and `shippingFee`.  
5. **Creates a payment intent** using the `fakeStripeAPI` with total amount and currency.  
6. **Saves the order** in the database with all relevant details and the `clientSecret`.  
7. **Sends a `200 OK` response** with the created `order` and `clientSecret`:  
   ✅ `{ order, clientSecret: order.clientSecret }`

The `getAllOrders` function:  
1. **Fetches all orders** from the database using `Order.find({})`.  
2. **Sends a `200 OK` response** with the list of orders and their total count:  
   ✅ `{ orders, count: orders.length }`

The `getSingleOrder` function:  
1. **Extracts the `orderId`** from the request parameters.  
2. **Finds the order** in the database using `Order.findOne({ _id: orderId })`.  
3. **If no order is found**, throws a `NotFoundError`.  
4. **Checks user permissions**:  
   - If the user is an `admin` or the `owner` of the order,  
   - Sends a `200 OK` response with the order data: ✅ `{ order }`.  
5. **If the user is not authorized**, throws an `UnauthorizedError`.

The `getCurrentUserOrders` function:  
1. **Fetches orders** from the database using the `userId` from the logged-in user's request object.  
2. Uses `Order.find({ user: req.user.userId })` to get all orders placed by that user.  
3. **Sends a `200 OK` response** with:  
   ✅ `orders` (array of order documents)  
   ✅ `count` (total number of user's orders)

The `updateOrder` function:  
1. **Extracts** `orderId` from the URL and `paymentIntentId` from the request body.  
2. **Looks for the order** using `Order.findOne({ _id: orderId })`.  
3. If not found, it throws a `NotFoundError`.  
4. If found, it **checks user permissions**:  
   - Only the **admin** or the **user who created the order** can update it.  
5. If authorized:  
   - It updates `paymentIntentId` and sets `status` to `'paid'`.  
   - Saves the order using `order.save()`.  
6. **Responds with `200 OK`** and the updated order.  
7. If unauthorized, throws an `UnauthorizedError`. ✅

--- 

Review :
The `createReview` function:  
1. **Extracts** `productId` from the request body.  
2. **Checks** if the product exists using `Product.findOne()`.  
   - If not found, throws a `NotFoundError`.  
3. **Checks** if the user has **already submitted a review** for this product.  
   - If yes, throws a `BadRequestError`.  
4. **Adds** `userId` from the authenticated request to the review body.  
5. **Creates** a new review using `Review.create(req.body)`.  
6. **Responds** with `201 Created` and the created review. ✅

The `getAllReviews` function:  
1. **Fetches all reviews** from the database using `Review.find({})`.  
2. **Populates** the `product` field in each review to include selected product details: `name`, `company`, and `price`.  
3. **Responds** with `200 OK`, the list of reviews, and the total count. ✅

The `getSingleReview` function:  
1. **Extracts** the `reviewId` from the request parameters.  
2. **Searches** the database for a review using `Review.findOne({_id: reviewId})`.  
3. **If not found**, it throws a `NotFoundError`.  
4. **If found**, it responds with `200 OK` and the review object. ✅

The `updateReview` function:  
1. **Extracts** `reviewId` from request parameters and `rating`, `title`, `comment` from the body.  
2. **Searches** for the review in the database using `Review.findOne`.  
3. **If not found**, throws a `NotFoundError`.  
4. **Checks permissions** — only the admin or the user who created the review can update it.  
5. **If authorized**, updates the review fields and saves it.  
6. **Responds** with `200 OK` and the updated review. ✅  
7. **If not authorized**, throws an `UnauthorizedError`.

The `deleteReview` function:  
1. **Extracts** the `reviewId` from the request parameters.  
2. **Finds** the review in the database using `Review.findOne`.  
3. **If not found**, throws a `NotFoundError`.  
4. **Checks permissions** — only the admin or the user who wrote the review can delete it.  
5. **If authorized**, calls `deleteOne()` to remove the review from the database.  
6. **Responds** with `200 OK` and a success message:  
   ✅ `'Success! Review Removed'`  
7. **If not authorized**, throws an `UnauthorizedError`.

The `getSingleProductReviews` function:  
1. **Extracts** the `productId` from the request parameters.  
2. **Fetches** all reviews in the database that match the `productId` using `Review.find`.  
3. **Sends** a response with `200 OK` and includes:  
   ✅ the list of `reviews`  
   ✅ the total `count` of reviews for the product.





Models :
User : No ref
Product : ref: 'User'
Order : We created a nested schema for orders by defining a SingleOrderItemSchema, which specifies the structure of each item in the order. This schema is then used in the main OrderSchema under the orderItems field to represent a list of purchased products.
Basically we created a subschema SingleOrderItemSchema which specifies the structure of each item in the order & embedded it inside the main orderSchema as an array.
In SingleCartItemSchema : ref: 'Product'
In orderSchema : ref: 'User'
Review : ref: 'User', ref: 'Product'


User : name email password role
Product : name price description image category company colors featured freeShipping inventory averageRating numOfReviews user(ref to User)
Order : 
    SingleOrderItemSchema : name image price amount product(ref to Product)
    orderSchema : tax shippingFee subtotal total orderItems(Array of SingleCartItemSchema) status user (ref to User) clientSecret paymentIntentId 
Review : rating title comment user(ref to User) product(ref to Product)
Cart : 
    CartItemSchema : product(ref of product) quantity 
    CartSchema : user(ref of user) items(Array of CartItemSchema)
Wishlist : user(ref of user) products(ref of product)
Address : user(ref of user) addressLine city state postalCode country phone isDefault 
Coupon : code discount expiresAt minOrderAmount usageLimit usedBy(ref of user)
Payment : order(ref of order) user(ref of user) provider paymentIntentId status amount currency
Category : name slug description
InventoryLog : product(ref of product) type quantity note updatedBy(ref of user)

Schema & ref in it :
User : None : User is the main entity; others depend on it.
Product : 
    User : To know which admin/user created the product
    Review(via virtual) : To show all reviews for this product.
Review 
    User : To identify who wrote the review.
    Product : To associate the review with the product.
Order 
    User : To know who placed the order.
    Product : orderItems.product (nested) : To link each order item to an actual product.
Cart 
    User : To link cart to a specific user.
    Product : To know which product is in the cart.
Wishlist 
    User : To link wishlist to a user.
    Product : To show which products are wishlisted.
Address : User : Each address is stored for a user.
Coupon : User : To track which users have used the coupon.
Payment 
    User : To show who made the payment.
    Order : To associate the payment with an order.
Category : None : No ref needed, just used as normalized data.
InventoryLog :
    Product : To track inventory changes for a product.
    User(optional) : To log which admin/user changed inventory. changedBy











===========================================================================================================================
### 🔐 **Register**
The `register` function is used to allow new users to sign up for the application. It handles creating a user account, assigning roles (like admin or regular user), and securely storing the user's information in the database. It's essential for giving users access to your platform.

---

### 🔑 **Login**
The `login` function is responsible for authenticating users when they try to access their accounts. It verifies the user's credentials and gives them a token or session to use the app securely. Without this, only public access would be possible—no user-specific features.

---

### 🚪 **Logout**
The `logout` function is used to end the user’s session. It removes the authentication token from the browser (usually by clearing cookies), ensuring the user is securely logged out. This helps maintain account security and privacy.

These functions are the **core of any user authentication system**—they manage how users enter, use, and exit your application securely.

---

### 👥 **getAllUsers**  
This function is used to **fetch a list of all regular users** (excluding admins). It's often used in admin dashboards to manage or monitor users.

---

### 👤 **getSingleUser**  
Fetches details of a specific user by their ID. It’s helpful when viewing or editing a user’s profile or for admin-level user management.

---

### 🙋‍♂️ **showCurrentUser**  
Returns data of the **currently logged-in user**. Useful for showing personal account details on a profile or dashboard page.

---

### ✏️ **updateUser**  
Allows a user to **update their profile info** like name or email. It also updates the authentication token so the latest info is always available.

---

### 🔒 **updateUserPassword**  
Used to **change the user's password** securely by verifying the old one first. It's a key part of account security and user trust.

---

These functions together help in managing user data, updating user profiles, and securing user access within the app. Let me know if you want a similar summary in Marathi too.

---

### ➕ **createProduct**  
Used to **add a new product** to the system. It also links the product to the user (usually the admin) who created it. Essential for managing product listings in an e-commerce app.

---

### 📦 **getAllProducts**  
Fetches a list of **all products** from the database. Useful for showing products on a public store page or admin panel.

---

### 🔍 **getSingleProduct**  
Retrieves details of **one specific product** using its ID. It also includes the product's reviews, giving complete information for product detail pages.

---

### 🛠️ **updateProduct**  
Used to **edit existing product details** such as name, price, or description. Important for keeping product data up-to-date.

---

### ❌ **deleteProduct**  
Removes a product from the database. Typically used by admins to manage inventory and remove old or incorrect listings.

---

### 🖼️ **uploadImage**  
Handles **uploading product images** securely. It checks the file type and size before saving it to a specific folder, ensuring image quality and safety.

---

Together, these functions manage the **entire lifecycle of a product** in an app — from creation and display to update, deletion, and image handling. Let me know if you want the same format for review controllers or order-related features.

---

### 🛒 **createOrder**  
Used to **place a new order** by collecting cart items, calculating total cost (with tax and shipping), and simulating a payment process. Essential in e-commerce apps to process customer purchases.

---

### 📃 **getAllOrders**  
Fetches **all orders** in the system. Usually used by **admin** to track all customer orders and manage sales records.

---

### 🔍 **getSingleOrder**  
Retrieves a **specific order** by its ID. Includes permission check to make sure users or admins only access orders they are allowed to see.

---

### 🙋‍♂️ **getCurrentUserOrders**  
Returns **orders placed by the currently logged-in user**. Important for showing customers their order history.

---

### 💳 **updateOrder**  
Updates the order status (e.g., from pending to paid) and stores the **payment ID**. It simulates payment success and finalizes the order. Crucial for managing post-payment logic.

---

### 💳 **fakeStripeAPI**  
Simulates Stripe’s payment process during development without real transactions. Helps test order creation and payment flows safely.

---

Together, these functions handle the **entire order process** — from placing to paying, tracking, and viewing history. Let me know if you want the same format for reviews or permissions next!

---

### ✍️ **createReview**
Used to **submit a review for a product**.  
- Checks if the product exists.  
- Ensures that the same user doesn’t review the product more than once.  
- Saves the review and associates it with the logged-in user.

🔗 *It helps improve product trust by letting users give feedback.*

---

### 📃 **getAllReviews**
Returns **all reviews** from all users for all products.  
- Populates basic product info (name, company, price).  
- Useful for **admin analytics**, product quality checks, or showing reviews across the platform.

---

### 🔍 **getSingleReview**
Fetches **one review by its ID**.  
- Used when a user or admin wants to **view/edit a specific review**.

---

### 🛠 **updateReview**
Allows the logged-in user to **edit their existing review**.  
- Validates ownership before editing (using `checkPermissions`).  
- Updates rating, title, and comment.

🔐 *This ensures users can only modify their own reviews.*

---

### ❌ **deleteReview**
Deletes a specific review.  
- Checks that the user owns the review (or is an admin).  
- Removes the review from the database.

📛 *Prevents unauthorized review removal.*

---

### 🛍️ **getSingleProductReviews**
Gets all reviews for a **specific product** using the product’s ID.  
- Helpful for displaying **product reviews** on product detail pages in the frontend.

---

Together, these functions enable **safe review creation, viewing, editing, and deletion**, helping users share feedback and businesses manage product reputation.

---

### 🔐 **authenticateUser**
This middleware is used to **verify if the user is logged in** before allowing access to protected routes.
✅ **Use case:** Apply to routes where login is required (e.g., creating orders, submitting reviews, accessing user profile).

---

### 🛡️ **authorizeRoles**
This middleware is used to **restrict access based on user roles** (like admin, user, manager, etc.).
✅ **Use case:** Apply to admin-only routes (e.g., adding/deleting products, viewing all users/orders).

---

### 🛠️ **errorHandlerMiddleware**
This is a **centralized error handler** in your Express app. It's used to catch and handle all errors that occur in your routes or controllers.
### ✅ **Main Purpose**
To **format and send clean error responses** to the client — instead of raw stack traces or default error messages.
It handles Custom thrown errors using classes, ValidationError, Duplicate Key Error, CastError, 
This ensures any error thrown anywhere in your app will be handled here.

---

🚫 notFound Middleware :
✅ Purpose
This middleware handles invalid routes — i.e., any request made to a route that isn't defined in your application.

### ✅ **Purpose of `checkPermissions` Function**

---

✅ Purpose of createTokenUser Function
🔧 This function extracts essential user information (like name, userId, and role) from the full user object.

---

✅ Purpose of These JWT Utility Functions
createJWT
🔐 Creates a JWT token using a payload (e.g., user info) and signs it with a secret.
👉 Used for user authentication and contains session data.

isTokenValid
✅ Verifies if a given JWT token is valid (i.e., not tampered or expired).
👉 Used to authenticate protected routes.

attachCookiesToResponse
🍪 Creates a JWT and stores it in a secure, HTTP-only cookie on the client.
👉 Helps maintain user session across requests.

---

The `checkPermissions` function ensures that:
- A **user can only access or modify their own resources** (like their own orders or reviews).
- An **admin** can access **any user's resource** without restriction.

### 💡 Used for Authorization  
It helps **protect sensitive routes** by verifying that the logged-in user (`requestUser`) is allowed to interact with a resource owned by another user (`resourceUserId`).

===========================================================================================================================
Auth work flow :
---

### ✅ `register`
**Purpose:** To register a new user and send a verification email.  
**Explanation:** It checks if the email already exists, assigns a role (admin/user), generates a verification token, saves the user, and sends a verification email to confirm their account.

---

### ✅ `verifyEmail`
**Purpose:** To verify the user’s email using a verification token.  
**Explanation:** It checks the provided token and email against the stored user, marks the user as verified, and clears the token upon success.

---

### ✅ `login`
**Purpose:** To authenticate a verified user and generate tokens for session management.  
**Explanation:** It validates credentials, checks if the user is verified, creates access and refresh tokens, and stores the token in DB or reuses an existing valid one.

---

### ✅ `logout`
**Purpose:** To log the user out by deleting their refresh token and clearing cookies.  
**Explanation:** It removes the refresh token from the database and sets the access/refresh tokens in cookies to expire immediately.

---

### ✅ `forgotPassword`
**Purpose:** To initiate password reset by sending a reset email with a token.  
**Explanation:** It generates a token, hashes it, stores it with an expiration time, and sends a reset password link to the user's email.

---

### ✅ `resetPassword`
**Purpose:** To reset the user’s password using the token sent via email.  
**Explanation:** It verifies the reset token and expiry, updates the password, and clears the token fields after saving the new password.

---
