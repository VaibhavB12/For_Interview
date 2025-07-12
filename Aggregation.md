# Video 1
### **Summary of Aggregation in MongoDB**  

Aggregation in MongoDB is a way to analyze data by grouping documents and performing operations on them. It helps get insights that are not directly stored in the database. Aggregation does **not** change the original data; it is only for analysis.  

There are **three types** of aggregation:  
1. **Aggregation Pipeline** – Uses multiple steps to process data.  
2. **Map-Reduce** – Runs JavaScript functions to transform data.  
3. **Single-Purpose Aggregation Methods** – Simple, built-in methods like `count` and `distinct`.  

### **Examples of Single-Purpose Aggregation Methods:**  
- **`count()`** – Counts the number of documents that match a condition.  
  - Example: `db.list.count({ brand: "Toyota" })` → Counts how many Toyota cars are in the collection.  
- **`distinct()`** – Finds unique values of a field.  
  - Example: `db.list.distinct("brand")` → Returns all unique car brands in the collection.  
  - Example: `db.list.distinct("engine", { brand: { $in: ["Toyota", "Lexus"] } })` → Finds unique engine types for Toyota and Lexus.  

### **Summary of Aggregation Pipeline in MongoDB**  

Single-purpose aggregation methods (`count`, `distinct`) are easy to use but have limitations. For **complex data analysis**, we use the **aggregation pipeline**.  

### **What is an Aggregation Pipeline?**  
Think of a pipeline as a series of steps where data flows through different operations. Each step (or **stage**) processes the data, and the final result is the answer we need.  

### **Example: Sales Data Analysis**  
- We have a collection that stores **sales data** for each salesperson.  
- To **find total sales for Tom**, we follow these steps:  
  1. **Filter** documents where `name` is "Tom".  
  2. **Select** the `sales` field.  
  3. **Group** all `sales` values for Tom.  
  4. **Sum** the grouped values.  

- To find **total sales for the company**, we group all `sales` values and sum them.  
- To count **how many salespeople** are in the company, we group `name` values and count them (or use `distinct` for a better solution).  

### **How to Use the Aggregation Pipeline?**  
- Use the **`aggregate()` method** with two parameters:  
  1. **Pipeline array** (contains different stages).  
  2. **Config object** (optional).  

- Each **stage** is an object that does one operation, like filtering, grouping, or summing.  
- Stages use **aggregation operators** like `$match`, `$group`, and `$sum`.  

### **Next Steps**  
Check the MongoDB manual for:  
- **Pipeline stages**: `$addFields`, `$match`, `$group`.  
- **Operators**: `$sum`.  
  
---
# Video 2
### **Key Points About the Aggregation Pipeline in MongoDB**  

1. **Single-purpose aggregation methods** like `count` and `distinct` are easy to use but limited in functionality.  
2. **For complex data analysis, we use the aggregation pipeline.**  
3. **The pipeline is like a series of steps**, where each step (or stage) processes data.  
4. **Each stage performs a specific operation,** such as filtering, grouping, or summing values.  
5. **Example: Analyzing sales data in a company.**  
   - The collection stores each salesperson’s monthly sales.  
   - To find **Tom’s total sales**, we:  
     1. **Filter** documents to include only Tom’s data.  
     2. **Select** the sales field.  
     3. **Group** all sales values for Tom.  
     4. **Sum** the grouped values.  
   - To find **total company sales**, we sum sales from all documents.  
   - To count **total salespeople**, we group by name and count unique values.  
6. **The `aggregate()` method is used to run an aggregation pipeline.**  
   - It takes two parameters:  
     1. **Pipeline array** (list of stages).  
     2. **Config object** (optional).  
7. **Each stage is an object with only one property.**  
8. **Aggregation operators** are used to perform operations.  
   - **Pipeline stages** work on documents (e.g., `$match`, `$group`).  
   - **Pipeline operators** work on field values (e.g., `$sum`).  
9. **MongoDB also has a `db.aggregate()` method,** but it is mainly for admin tasks.  
10. **Aggregation results are returned as a cursor object**, which supports limited cursor methods.  
11. **Next steps:** Check MongoDB documentation for pipeline stages like `$addFields`, `$match`, `$group`, and the `$sum` operator.
    
---

### **Key Points About Calculating Total Sales with Aggregation Pipeline**  

1. **To calculate Tom’s total sales, we use three pipeline stages:**  
   - **`$match`** → Selects documents where `name = "Tom"`.  
   - **`$project`** → Selects only the `sales` field.  
   - **`$group`** → Groups `sales` values and sums them.  

2. **Step 1: Filtering Documents (`$match`)**  
   - The **`$match` stage** filters documents where `name = "Tom"`.  
   - The query format is the same as in the `find()` method.  
   - This ensures only Tom’s sales records move to the next stage.  

3. **Step 2: Selecting Fields (`$project`)**  
   - The **`$project` stage** keeps only the `sales` field.  
   - Use `1` to include a field and `0` to exclude it.  
   - The **`_id` field is excluded manually** if not needed.  

4. **Step 3: Grouping and Summing Sales (`$group` + `$sum`)**  
   - The **`$group` stage** groups documents and calculates the total sales.  
   - The `_id` field is required in `$group`.  
   - Since all documents are for Tom, we can set `_id` to `"Tom"` or `null`.  
   - The **`$sum` operator** adds all `sales` values together.  
   - The field name must have a **`$` prefix**, or it will be treated as a string.  

5. **Final Output**  
   - The aggregation **returns a cursor object** with the grouped results.  
   - If we remove the **first stage (`$match`)**, we get **total company sales**.  
   - If we remove the **second stage (`$project`)**, the result is the same, but extra fields are processed, reducing efficiency.  
   - If we replace **`$sum` with `$avg`**, we get **Tom’s average monthly sales** instead of the total.

---

### **Key Steps for Running the Aggregation Pipeline**  

1. **Download and Create the Collection**  
   - First, download the provided data file.  
   - Import it into MongoDB as a collection (e.g., `sales`).  

2. **Find Out How Many Sales Tom Has Made**  
   - Use the **`aggregate()` method** with three stages:  
     - **`$match`** → Filters documents where `name = "Tom"`.  
     - **`$project`** → Excludes `_id` and keeps only `sales`.  
     - **`$group`** → Groups sales data and calculates total.  

3. **Step 1: Filtering Tom’s Documents (`$match`)**  
   ```js
   { $match: { name: "Tom" } }
   ```
   - This selects only Tom’s sales records.  

4. **Step 2: Selecting Only the Sales Field (`$project`)**  
   ```js
   { $project: { _id: 0, sales: 1 } }
   ```
   - Excludes `_id`.  
   - Keeps only the `sales` field.  

5. **Step 3: Grouping and Calculating Total Sales (`$group` + `$sum`)**  
   ```js
   { 
     $group: { 
       _id: "Tom", 
       totalSales: { $sum: "$sales" } 
     } 
   }
   ```
   - Groups all sales records under `_id: "Tom"`.  
   - Uses `$sum` to calculate the total sales.  

6. **Step 4: Adding Average Monthly Sales Calculation (`$avg`)**  
   ```js
   { 
     $group: { 
       _id: "Tom", 
       totalSales: { $sum: "$sales" }, 
       averageSales: { $avg: "$sales" } 
     } 
   }
   ```
   - Adds a new field **`averageSales`** using `$avg`.  
   - The result now contains **total and average sales** for Tom.  

7. **Final Output**  
   - The result will return:  
     ```json
     { "_id": "Tom", "totalSales": 5000, "averageSales": 1000 }
     ```
   - This shows Tom’s **total and average monthly sales**.

---

### **Understanding `$sum` and `$avg` Operators in MongoDB Aggregation**  

In the last lesson, we used **three pipeline stages (`$match`, `$project`, `$group`)** and two **pipeline operators (`$sum`, `$avg`)**. Now, let's take a deeper look at these two operators.  

## **1️⃣ `$sum` Operator**  
💡 The **`$sum`** operator calculates and returns the total sum of numeric values. It ignores non-numeric values.  

### ✅ **Common Use Cases of `$sum`**
#### **(a) Sum of a Field Across Multiple Documents**  
- Groups documents first and sums the values of a specific field.  
- Example: **Calculate total sales from multiple documents.**  
  ```js
  {
    $group: { 
      _id: "Tom", 
      totalSales: { $sum: "$sales" } 
    }
  }
  ```
  - Groups all documents with `name: "Tom"`.  
  - **Adds up all `sales` values** from those documents.  

#### **(b) Count the Number of Documents in a Group**  
- If we pass `1` instead of a field name, it **counts the documents**.  
  ```js
  {
    $group: { 
      _id: "Tom", 
      count: { $sum: 1 }
    }
  }
  ```
  - Returns `{ "_id": "Tom", "count": 5 }` (if 5 documents exist).  

#### **(c) Sum of Multiple Fields in a Single Document**  
- Example: **Calculate the total cost (price + tax + shipping).**  
  ```js
  {
    $project: {
      totalCost: { $sum: ["$price", "$tax", "$shipping"] }
    }
  }
  ```
  - If `price = 100`, `tax = 10`, `shipping = 5`, result → `{ totalCost: 115 }`.  

#### **(d) Sum of Array Elements**  
- Example: **Calculate total user ratings stored in an array.**  
  ```js
  {
    $project: {
      totalRatings: { $sum: "$ratings" }
    }
  }
  ```
  - If `ratings: [5, 4, 3, 5]`, the result → `{ totalRatings: 17 }`.  

## **2️⃣ `$avg` Operator**  
💡 The **`$avg`** operator calculates the average of numeric values, ignoring non-numeric ones.  

### ✅ **Common Use Cases of `$avg`**
#### **(a) Average of a Field Across Multiple Documents**  
- Example: **Calculate average sales per month for Tom.**  
  ```js
  {
    $group: { 
      _id: "Tom", 
      averageSales: { $avg: "$sales" } 
    }
  }
  ```
  - Returns `{ "_id": "Tom", "averageSales": 1000 }`.  

#### **(b) Average of Multiple Fields in a Single Document**  
- Example: **Calculate average of price, tax, and shipping.**  
  ```js
  {
    $project: {
      avgCost: { $avg: ["$price", "$tax", "$shipping"] }
    }
  }
  ```
  - If `price = 100`, `tax = 10`, `shipping = 5`, result → `{ avgCost: 38.33 }`.  

#### **(c) Average of Array Elements**  
- Example: **Find the average rating of a product.**  
  ```js
  {
    $project: {
      avgRating: { $avg: "$ratings" }
    }
  }
  ```
  - If `ratings: [5, 4, 3, 5]`, the result → `{ avgRating: 4.25 }`.  

---

### **🚀 Summary**
| Operator | Purpose | Example |
|----------|---------|---------|
| `$sum` | Adds numeric values | `totalSales: { $sum: "$sales" }` |
| `$sum` | Counts documents | `count: { $sum: 1 }` |
| `$sum` | Sums multiple fields | `totalCost: { $sum: ["$price", "$tax"] }` |
| `$sum` | Sums array elements | `totalRatings: { $sum: "$ratings" }` |
| `$avg` | Finds the average value | `averageSales: { $avg: "$sales" }` |
| `$avg` | Averages multiple fields | `avgCost: { $avg: ["$price", "$tax"] }` |
| `$avg` | Averages array elements | `avgRating: { $avg: "$ratings" }` |

These operators **reduce the need for looping manually** and **optimize calculations inside MongoDB**. 🚀

# Video 1
































# My Notes : Check new.js
Aggregation operations group field values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.
data analysis tool retrieving information that is not directly stored in any fields.
data analysis ONLY, does NOT affect the original collection
3 Types of aggregation :
    aggregation pipeline
    map-reduce function
    single purpose aggregation methods

aggregate method has two parameters : pipeline array & config object
Each element of pipeline array is the object, we call them stage spec object. Each stage spec object can only have one property. 
aggregate method returns us a cursor object, this cursor object only supports cursor methods that operates on evaluated cursors.

To start or stop mongo db server : net start mongoDB, net stop mongoDB
We can nest upto 100 levels & each document has max size of 16 mb

To search nested document : 'key.key' : value

find method retrieve all the documents & a cursor allows you to iterate over the documents in the collection. You can use count(), forEach()
db.students.find().forEach((x) => { printjson(x)})
db.students.find().limit(2);
findOne retrieves the first document that matches the query, typically in the order of insertion unless an index changes the order.

'$' sign before a field name is used to reference the field's value rather than treating it as a string.
db.students.find().toArray() : retrieve all the documents

When use 


==========================================================================================================================
Maxmillan : Aggregation framework : Check new.js
Alternative to find method. It is all about building a pipeline of stages that runs on the data that is received from your collection & gives you the output in the form you needed.
Every stage in the pipeline receives output from the previous stage.
As find() method Aggregate method also executes on the mongo db server & therefore it can take advantages of things like indexes. 
Just like find() method, aggregate the method returns a cursor.
_id in group stage defined by which field you wanna group. Always use value document {} as value for the _id.
'$sum: 1' means 1 is the value we want to add for every document that is grouped in group stage 
group stage merge multiple documents in one 


Count total number of females :
1.
db.persons.aggregate([
    { $match: { gender: 'female' } },
    { $count: "totalFemales" }
])
2.
db.persons.find({ gender: 'female' }).count()
3.
db.persons.aggregate([
    { $match: { gender: 'female' } },
    { $group: { _id: null, totalFemales: { $sum: 1 } } }
])



Syntax :
db.collection.aggregate([
    { <stage1>: { <field1>: <expression>, <field2>: <expression> } },
    { <stage2>: { <field1>: <expression>, <field2>: <expression> } },
    ...
]);

1️⃣ Filtering & Selection (Extract specific data)
$match – This stage filters documents based on conditions, similar to the find query.
📌 Example: Get all products with price greater than $100.
$project – This stage selects specific fields or creates new fields.
📌 Example: Show only the name and price fields of products.
$unset – Remove Fields from Documents. This stage removes specified fields from documents. It is useful when you don’t want to include certain fields in the output.
📌 Example: Remove the password field when retrieving user data.

2️⃣ Sorting & Pagination (Arrange and limit results)
$sort – This stage arranges documents in ascending or descending order.
📌 Example: Sort products by price from highest to lowest.
$limit – This stage restricts the number of documents in the output.
📌 Example: Get the top 5 most expensive products.
$skip – This stage skips a certain number of documents before returning results.
📌 Example: Skip the first 10 products and get the next 10.

3️⃣ Grouping & Aggregation (Summarize and analyze data)
$group – This stage groups documents based on a field and applies aggregate functions like sum, count, and average.
📌 Example: Get the total sales amount for each product category.
$bucket – This stage groups documents into fixed-size ranges, like a histogram.
📌 Example: Categorize products into price ranges: $0-$50, $51-$100, etc.
$bucketAuto – This stage automatically determines the bucket ranges based on data distribution.
📌 Example: Group customers into age ranges without manually defining the ranges.
$sortByCount – This stage counts occurrences of a value and sorts them.
📌 Example: Count and sort products by category.
$count – This stage counts the number of documents in the pipeline.
📌 Example: Count how many products have a stock of more than 50.

4️⃣ Joining & Merging Data
$lookup – This stage performs a left join with another collection.
📌 Example: Get order details with customer information by joining the orders and customers collections.
$unionWith – This stage combines results from multiple collections into one output.
📌 Example: Merge user data from customers and vendors collections.	
$graphLookup – Recursive Lookup (Like Self-Join). This stage performs a recursive search in the same or another collection, like a self-join. It is useful for hierarchical data, such as categories, employees, or social network connections.
📌 Example: Find all employees who report (directly or indirectly) to a specific manager.
$out – This stage writes the output to a new collection.
📌 Example: Save the aggregated results into a summary collection.
$merge – This stage merges the output into an existing collection, either updating or inserting documents.
📌 Example: Update an analytics collection with the latest sales data.

5️⃣ Transforming & Modifying Data
$addFields – This stage adds new fields or modifies existing fields in documents.
📌 Example: Add a discountedPrice field by subtracting a discount from price.
$set – This stage is an alias for $addFields.
📌 Example: Same as $addFields, used for modifying or adding fields.
$replaceRoot – This stage replaces the entire document with a nested field.
📌 Example: If a document has a details object, replace the document with its details field.
$replaceWith – This stage is an alias for $replaceRoot.
📌 Example: Similar to $replaceRoot, used to reshape documents.
$unwind – This stage breaks down an array field into multiple documents, one for each array element.
📌 Example: If a document has an array of tags, each tag becomes a separate document.

6️⃣ Multi-Stage Processing (Perform multiple operations at once)
$facet – This stage allows multiple aggregations to run in parallel and return results in a single output.
📌 Example: Get both the top-selling products and the total number of orders in one query.
$redact – This stage controls access to document fields based on conditions.
📌 Example: Show sensitive fields only to users with admin access.

7️⃣ Randomization & Sampling
$sample – This stage selects a random set of documents.
📌 Example: Get 5 random customer reviews.

8️⃣ Geospatial Queries
$geoNear – This stage finds documents based on geographical proximity.
📌 Example: Find the 10 nearest restaurants to a given location.

9️⃣ Filling Missing Data
$densify – This stage fills in missing values within a date or numeric range.
📌 Example: Fill in missing sales data for days where no sales occurred.
$fill – This stage fills missing values with previous or default values.
📌 Example: Fill missing temperatures in a weather dataset using the last recorded value.

🔟 Window Functions (Perform calculations over a range of documents)
$setWindowFields – This stage performs calculations across a sliding window of documents.
📌 Example: Calculate a rolling average of sales over the last 7 days.

🔟 Performance & Debugging
$indexStats – Index Usage Statistics. This stage returns statistics about how indexes are being used in a collection. It helps analyze index efficiency and decide if an index should be modified or removed.
📌 Example: Check how often each index is used in a collection to optimize query performance.
$collStats – Collection Statistics. This stage provides detailed statistics about a collection, such as storage size, document count, and index details. It is useful for monitoring performance and storage usage.
📌 Example: Get the total number of documents and the average document size in a collection.
$planCacheStats – Query Plan Cache Statistics. This stage shows information about the query plan cache, which MongoDB uses to store execution plans for queries. It helps analyze query performance and caching behavior.
📌 Example: See which queries are frequently cached and how often the cache is reused.


Final Concept :
1.Aggregation stages : Aggregation stages are used inside an aggregation pipeline (db.collection.aggregate([...])). Each stage transforms the documents in some way. Check above
[
  { "$match": { "field": "value" } },         // Filters documents
  { "$group": { "_id": "$field", "total": { "$sum": 1 } } },  // Groups documents
  { "$project": { "newField": "$oldField" } }, // Reshapes documents
  { "$sort": { "field": 1 } },                // Sorts documents (1 = ascending, -1 = descending)
  { "$limit": 10 },                            // Limits output documents
  { "$skip": 5 },                             // Skips first N documents
  { "$unwind": "$arrayField" },               // Splits array elements into separate documents
  { "$lookup": { "from": "otherCollection", "localField": "id", "foreignField": "id", "as": "joinedData" } },  // Joins with another collection
  { "$facet": { "facet1": [ { "$match": { "field": "value" } } ] } }  // Runs multiple pipelines in parallel
]
2.Aggregation pipeline Operators : Aggregation pipeline operators are used inside aggregation stages like $group, $project, $addFields, etc.
{
  "$project": {
    "fullName": { "$concat": ["$firstName", " ", "$lastName"] },  // String concatenation
    "priceWithTax": { "$add": ["$price", "$tax"] },              // Arithmetic operation
    "isAvailable": { "$cond": { "if": { "$gt": ["$stock", 0] }, "then": true, "else": false } },  // Conditional
    "firstThreeItems": { "$slice": ["$items", 3] }               // Extracts elements from an array
  }
}
Operators Within Pipeline Stages :
  Arithmetic Operators: $add, $subtract, $multiply, $divide
  Array Operators: $slice, $push, $concatArrays, $filter
  Conditional Operators: $cond, $ifNull, $switch
  String Operators: $concat, $substr, $toLower, $toUpper
  Date Operators: $year, $month, $dayOfMonth, etc.
3.Query operators : Query operators are used inside find(), update(), and delete() commands to filter or modify documents.
db.collection.find({
  "age": { "$gt": 25 },            // Find documents where age > 25
  "status": { "$in": ["active", "pending"] }, // Matches multiple values
  "name": { "$regex": "^A", "$options": "i" } // Case-insensitive search for names starting with 'A'
})


Types of Query Operators :
1.Comparison Operators (Compare field values) :
  $eq Matches values equal to a specified value
  $ne Matches values not equal to a specified value
  $gt Matches values greater than a specified value
  $gte Matches values greater than or equal to a value
  $lt: Matches values less than a specified value
  $1te Matches values less than or equal to a value
  $in Matches any value from an anay
  $nin Matches values not in an array
2.Logical Operators (Combine multiple conditions) :
  $and Matches all conditions
  $or Matches at least one condition
  $nor Matches none of the conditions
  $not Negates a condition
3.Element Operators (Check for field existence and type) :
  $exists Matches docs where field exists or not
  $type Matches docs where field is of specific type
4.Evaluation Operators (Regex, expression, JavaScript) :
  $expr Allows using aggregation expressions in queries
  $regex Matches string patterns using regex
  $text Full—text search
  $where Uses JavaScript expressions
5.Array Operators (Work with arrays in documents) :
  $all Matches if all values are in the array
  $size Matches arrays of a specific size
  $elemMatch Matches if at least one element satisfies condition
6.Geospatial Operators (Used for geolocation queries) :
  $geowithin Finds docs inside a region
  $geoIntersects Matches docs that intersect a geometry
  $near Finds docs closest to a point
  $nearSphere Finds docs closest to a point (spherical)
7.Bitwise Operators (Match binary values using bitwise operations) :
  $bitsAllSet Matches docs where all bits in a mask are set
  $bitsAnySet Matches docs where any bit in a mask is set
  $bitsAllClear Matches docs where all bits in a mask are clear
  $bitsAnyc1ear Matches docs where any bit in a mask is clear
Pipeline stage & operators used in stage :
1.$match Stage → (Filters documents) : Operators: These are mostly query operators (same as in find()).
  Operators: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $regex, $exists, $type, $expr, $and, $or, $nor, $not
2.$group Stage → (Groups multiple documents into one) : Operators: Used to aggregate values.
  Operators: $sum, $avg, $min, $max, $push, $addToSet, $first, $last, $stdDevPop, $stdDevSamp, $mergeObjects
3.$project Stage → (Reshapes documents, modifies fields) : Operators: Used to modify fields (add, remove, rename, transform).
  Operators:
    String: $concat, $toLower, $toUpper, $substr, $trim
    Arithmetic: $add, $subtract, $multiply, $divide, $mod
    Boolean: $gt, $lt, $eq, $ne, $gte, $lte
    Array: $slice, $arrayElemAt, $concatArrays, $size, $filter
    Conditional: $cond, $ifNull, $switch
4.$sort Stage → (Sorts documents) : Operators: None (only field names with 1 or -1)
5.$unwind Stage → (Splits array elements into separate documents) : Operators: $unwind itself is the stage; no additional operators.
6.$lookup Stage → (Joins with another collection) : Operators: None (only field mappings)
7.$addFields Stage → (Adds computed fields) : Operators: Same as $project
8.$facet Stage → (Runs multiple pipelines in parallel) : Operators: Uses any stage inside facets.
9.$bucket Stage → (Divides documents into categories) : Operators: $sum, $push, $avg, $min, $max
10.$out Stage → (Writes results to a new collection) : Operators: None
11.$merge Stage → (Writes aggregation results to a collection or updates an existing one) : The $merge stage writes the output of the aggregation pipeline into a new or existing collection. It can replace, merge, or update documents. Operators Used in $merge :
  "whenMatched"	Defines how to handle existing documents
  "whenNotMatched"	Defines what to do with new documents
  "merge"	Merges fields from the source into existing docs
  "replace"	Replaces the entire document
  "keepExisting"	Keeps the original document unchanged
  "fail"	Throws an error if a match occurs
  pipeline	Allows custom aggregation for updates

===========================================================================================================================
Data modeling : Data Modeling defines how data should be structured. It is like planning phase where we decide how to manage our data. Database Design converts the model into a working database.
MongoDB does not enforce any schema, you can have document with different structures in the same collection. 
Data types : In MongoDB, data is stored in key-value pairs, and the data type is determined by the value in these pairs. 
The following data types can be used to store values in a document : 
  Text : used to store text data as a value within the document using quotation marks 
  Boolean: Used to store true or false values in the document.
  Integer: Used to store whole numbers as a value in the document (Int32 or Int64).
  Double: Used to store floating-point numbers as a value in the document.
  Decimal128: Used to store high-precision decimal numbers in the document.
  ObjectId: ObjectId is a special MongoDB object that automatically generates a unique ID, which includes a timestamp for sorting, so you can retrieve documents in the order they were created.
  Date: Used to store date and time values in ISODate (YYYY-MM-DDTHH:MM:SSZ) format within the document.
  Timestamp: Used to store a unique timestamp value in the document.
  Embedded Document: Used to store a document inside another document as a value.
  Array: Used to store multiple values including text, numbers or other documents in the document.

MongoDB shell is built on JavaScript, and JavaScript-based commands allow us to interact with the MongoDB database efficiently.
  Numbers are stored as Double (Float) by default in the shell. Use NumberInt() or NumberLong() for integers. Normal integer JavaScript accepts is 64bit if number is more than it then it will nullify values (making them zero). To store big numbers store them as a string
  Dates and Decimal128 must be explicitly defined using new Date() or NumberDecimal()
  MongoDB automatically generates _id as an ObjectId unless specified otherwise.
  Timestamps and Binary Data require explicit handling

To check datatype of field value in mongo shell :
  var user = db.transformedPersons.findOne()
  typeof user.birthdate
  typeof user.age
  typeof user.location.coordinates
  typeof user.location.coordinates[1]
OR
  db.transformedPersons.findOne()
  typeof db.transformedPersons.findOne().age  // number

Practical for Numbers :
use companies;
db.numbers.insertOne({a: 1})  // integer
db.numbers.stats().size  // 29
db.numbers.drop()
db.numbers.insertOne({a: Double(1)})  // Double
db.numbers.stats().size  // 33
db.numbers.drop()
db.numbers.insertOne({a: Decimal128(1)}) 
db.numbers.stats().size  // 33

Storage & number :
  Int32 (NumberInt) : Max digits: 10 (e.g., 2147483647)
  Int64 (NumberLong) : Max digits: 19
  Double (Floating-Point) : Max digits: ~16 (e.g 9.999999999999999)
  Decimal128 (NumberDecimal) : Max digits: 34 significant digits (e.g., 99.99999999999999999999999999999999)
As Max digits increases the size also increases
When to use which :
  Whole numbers? ➝ Use Int32 or Int64
  General decimals? ➝ Use Double
  High precision decimals? ➝ Use Decimal128

For Data Schemas & modeling : Ask these questions 
  Which Data does my App need or generate?
  Where do I need my Data?
  Which kind of Data or Information do I want to display?
  How often do I fetch my data?
  How often do I write or change my data ?

Pratical : one-to-one : patient-diseaseSummaries
REFERENCING :
use hospital
db.patients.insertOne({name: 'Max', age: 29, diseaseSummary: 'summary-max-1'})
db.diseaseSummaries.insertOne({_id: 'summary-max-1', diseases: ['Cold', 'Fever']})
var dsid = db.patients.findOne().diseaseSummary
dsid
db.diseaseSummaries.findOne({_id: dsid})
REFERENCING IS NOT GOOD APPROACH FOR STORING one-to-one relationship. So we use embedding
EMBEDDING : When you have strong one-to-one relationship
db.patients.deleteMany({})
db.patients.insertOne( { name: 'Max', diseaseSummary: { diseases: ['Cold', 'Fever'] } } )
db.patients.find()

Choosing the Right Relation Type : Depends on application needs, data size, and update frequency.
Embedded Documents (Denormalization) :
  Best for one-to-one or one-to-many relations.
  Groups logically related data together for easier fetching.
  Avoid deep nesting (MongoDB limit: 100 levels).
  16MB document limit (includes all embedded data).
  Use when data doesn't overlap with other documents.
Reference Approach (Normalization)
  Best for many-to-many relationships.
  Used when data is shared across multiple documents.
  Prevents duplicate data and reduces the number of updates.
  Helps avoid nesting or document size limits.
Final Decision Factors
  How often is data used and updated?
  What type of relation is it? (One-to-one, one-to-many, many-to-many)
  Do you need to split data to avoid MongoDB limits?
By considering these, you can design efficient data relationships in MongoDB

Use embedding when data is tightly related to the document and is not shared across multiple documents like user & address.
Use referencing when data is shared across multiple documents, like a product category used by many products.

How to Identify Relationship Type in Mongoose Code :
1.One-to-One (1:1) : If a single field stores one ObjectId
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" }
2.One-to-Many (1:M) : If an array stores multiple ObjectIds
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
3.Many-to-Many (M:M) : If both entities store an array of references to each other
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]




User → Cart	: One-to-One (1:1)	Embedded : 
  1 user has only 1 cart, and the cart is stored inside the user document
  user: 
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart"
    }

Order → Payment	: One-to-One (1:1)	Embedded
  1 order has only 1 payment, and payment details are stored inside the order 
   payment: {
    method: String,
    transactionId: String
  }

User → Order : One-to-Many (1:M)	Referenced : 
  1 user can have many orders, but 1 order belongs to single user
  user :
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // Referencing Orders
  order :
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User

User → Review	: One-to-Many (1:M)	Referenced
  1 user can write multiple reviews, but each review belongs to 1 user
  user: 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference User
  review:

Product → Review	: One-to-Many (1:M)	Referenced
  1 product can have multiple reviews, but each review is for 1 product
  product :
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference User
  review: 
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference Product

Order → Product	: Many-to-Many (M:M)	Referenced (with an array)
  1 order can contain multiple products, and 1 product can be in multiple orders
  order:
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  product:


user : ref order[], ref Cart{}
product : ref review[]
order : ref user{}, embedded Payment
review : ref user{}, ref product{}
cart : ref user{}, ref product{}


First we decide which entities needed for the application, like user, products, categories, order, cart etc
After that we define the relationship between these entities like 1:1, 1:M, M:M. 
To define relationship we consider 3 criaterias :
  1.
based on relationship we decide whether to embed or ref the collections


Cardinality : Ask: How many records of one entity are related to the other?
  One-to-One (1:1) → Embed if data is frequently accessed together.
  One-to-Many (1:M) → Embed if "many" side is small & static; Reference if large or frequently changing.
  Many-to-Many (M:M) → Always use referencing with a junction table (e.g., an intermediate collection).
  Example:
    User → Profile (1:1) → Embed
    User → Orders (1:M) → Reference
    Products ↔ Categories (M:M) → Reference with a separate ProductCategory collection
Data Access Patterns : Ask: Which entity is accessed more frequently?
  If child data is always needed with the parent, embed it.
  If child data is often queried independently, reference it.
  If both parent and child are frequently accessed separately, reference both.
  Example:
    Blog → Comments (1:M) → Embed if comments are always fetched with blogs.
    User → Orders (1:M) → Reference since orders are accessed separately.
Data Size & Growth : Ask: Will the data grow too large over time?
  MongoDB has a 16MB document size limit → Avoid embedding large arrays.
  If an embedded field is unbounded (can grow indefinitely), use referencing.
   Example:
    User → OrderHistory (1:M, large data) → Reference because a user can have thousands of orders.
    User → Address (1:M, small & fixed count) → Embed because users usually have a limited number of addresses.
Data Modification Frequency : Ask: Which entity changes more often?
  If child data frequently updates, reference it (to prevent document rewriting).
  If data rarely updates & is always read together, embed it.
   Example:
    User → EmailPreferences (1:1, rarely changes) → Embed
    User → Orders (1:M, frequently changing) → Reference
Relationship Strength : Ask: Is the child entity meaningful without the parent?
  If a child only makes sense with the parent, embed it.
  If a child can exist independently, reference it.
  Example:
    User → Profile (1:1, tightly coupled) → Embed
    User → Orders (1:M, orders exist even if user is deleted) → Reference
Performance & Indexing Needs : Ask: Do you need optimized queries?
  If parent and child are always fetched together → Embed (faster read).
  If frequent separate lookups are needed → Reference (better indexing & search).
Example:
  Product → Reviews (1:M, always fetched together) → Embed
  User → Orders (1:M, often queried separately) → Reference


user - profile, user - address
user - orders
orders - products
product - reviews
order - payment
User → Cart
Order → Payment
User → Order
User → Review
Product → Review
Order → Product
User → Order
Product → Inventory
Category → Product
Order → Shipment