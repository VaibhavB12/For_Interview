1 MySQL Data Types
1.1 What is the concept of data type and why do you need to define it with columns?
When you store data in a column,you need to mention which type of data will be stored in that particular column.By giving data type you are informing the database about type of value
E.g. name is a string and price of product is a number
If price is not mentioned as number, it wont be possible to perform numeric operations like total, discount etc.
2 Numeric Data Types
2.1 What are the different numeric datatypes supported by MySQL?

3 Numeric Data Types - Decimal

3.1 How will a decimal type store value if the size given is (5,2)?

4 Numeric Datatypes - Double & Float, Bool, Boolean

4.1 Explain the difference between double and float?

4.2 In which situation you choose the bool or boolean type?

5 Date and Time Datatypes- Date, DateTime, Timestamp

5.1 What is the difference between date, datetime & timestamp data type?

5.2 In which format MySQL stores the date datatype?

5.3 What will be the query to check the timezone?

5.4 How can you change the timezone?

5.5 Which is the default timezone for MySQL?

6 Date and Time Datatypes- Time

6.1 How does MySQL interpret time values? Example - 1112

7 String Data Types - Char and Varchar

7.1 What is the difference between CHAR & VARCHAR?

8 String Data Types - Blob and Text

8.1 What is the purpose of BLOB Datatype?

8.2 What is the difference between BLOB & TEXT Datatype?

9 String Data Types - ENUM

9.1 Explain the datatype ENUM.
==========================================================================================================================
Install MYSQL community GPL edition & install it with developer default.
MYSQL80 is service installed in the windows. Check it in services. Router configuration leave default.
SQLYog is IDE

A character set defines how text is stored — basically, what characters (letters, emojis, symbols) are allowed and how they are encoded into bytes.
utf8 → Can store most common characters (but only up to 3 bytes)
utf8mb4 → Can store all Unicode, including emojis (4 bytes)

A collation defines how text is sorted and compared — case sensitivity, accent sensitivity, etc.
utf8_general_ci → Case-insensitive (e.g. "A" = "a")
utf8_bin → Binary comparison (case-sensitive: "A" ≠ "a")
utf8mb4_unicode_ci → Unicode-aware, accent/case insensitive

One character set can have multiple collations.

SHOW CHARACTER SET;  To list all the available character sets with its default collation
SHOW COLLATION; To get list of collations
SHOW COLLATION WHERE CHARSET = 'utf8mb4';  To get collation for particular character set
SELECT @@character_set_database; To get default character set of the currently selected database.
SELECT @@collation_database; To get the default collation of the currently selected database.
SELECT @@character_set_server; To get the default character set of the server (used when a new database is created without specifying charset).
SELECT @@collation_server; To get the default collation of the server (used when a new database is created without specifying collation).

BEST PRACTISE : 
Use "utf8mb4" character set & utf8mb4_0900_ai_ci collation

CREATE DATABASE ecommerce
CHARACTER SET utf8mb4
COLLATE utf8mb4_0900_ai_ci ;  

utf8mb4_unicode_ci is older than utf8mb4_0900_ai_ci

To Set the Character Set & Collation :
1.At Database level :
CREATE DATABASE myshop
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
2.At Table & Column Level :
CREATE TABLE products (
  name VARCHAR(100)
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci
);
3.At Connection Level (App ↔ DB) :
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myshop',
  charset: 'utf8mb4' // 👈 this is crucial
});
4.Set encoding in HTML: 
<meta charset="UTF-8">

Usually the default collation is decided based on the regional settings of the server but in most cases it is 'utf8mb4' as it covers almost all the language support excluding Chinese, German & Russion.

Only commands :
SHOW DATABASES;
CREATE DATABASE employee;
CREATE DATABASE IF NOT EXISTS employee;
SHOW WARNINGS;
DROP DATABASE employee;
DROP DATABASE IF NOT EXISTS employee;

=========================================================================================================================

1.MySQL Data Types :
A data type is simply a type of data or values that we want to store in the column. It makes data manipulation faster, optimize the storage and restrict incorrect data insertion. 
Using data type is important for performance, storage optimization and validations.

1.1 What is the concept of data type and why do you need to define it with columns?
Answer: 
When you store data in a column, you need to mention which type of data will be stored in that particular column. By giving data type, you are informing the database about type of value. For example, name is a string and price of a product is a number. If price is not mentioned as a number, it won't be possible to perform numeric operations like total or discount. So by defining data type you make sure that type of value which the column is going to hold that needs to be properly defined with the date type.

1-Numeric data types :
1.INTEGER :
Numeric data type supports different data types like INT, DECIMAL, FLOAT.In integer we have TINYINT, SMALLINT, MEDIUMINT, BIGINT, the priority is decided on the basis of precision. Precision means value before the decimal point.
All these integer data type can be Signed or Unsigned. Signed means supporting negative values ranges from -2147483648 to 2147483647 & Unsigned means supporting only positive values ranges from 0 to 4294967295.

Data Type   Size    Signed Range												Unsigned Range
TINYINT		1 byte	–128 to 127													0 to 255
SMALLINT	2 bytes	–32,768 to 32,767											0 to 65,535
MEDIUMINT	3 bytes	–8,388,608 to 8,388,607										0 to 16,777,215
INT/INTEGER	4 bytes	–2,147,483,648 to 2,147,483,647								0 to 4,294,967,295
BIGINT		8 bytes	–9,223,372,036,854,775,808 to 9,223,372,036,854,775,807		0 to 18,446,744,073,709,551,615

CREATE DATABASE vbn;
USE vbn;
CREATE TABLE ex (
  sid TINYINT,            -- Allows values from -128 to 127
  usid TINYINT UNSIGNED   -- Allows values from 0 to 255
);
INSERT INTO ex VALUES (-10, -10)   -- this throws error as usid is unsigned and only accept positive values
INSERT INTO ex VALUES (-10, 10)    -- works
INSERT INTO ex VALUES (127, 255)   -- works
INSERT INTO ex VALUES (128, 256)   -- not work as TINYINT signed range is 127 & unsigned range is 255
INSERT INTO ex VALUES (127.5, 255) -- not work as 127.5 ~ 128
INSERT INTO ex VALUES (127.4, 255) -- work as 127.4 ~ 127

MySQL performs rounding for all the Numeric data types. For decimal point greater than equal to 5 considered as one value up.

2.1 What are the different numeric data types supported by MySQL?
Answer: MySQL supports several numeric data types, including:
	INT (Integer): Used for whole numbers without decimals.
	TINYINT, SMALLINT, MEDIUMINT, BIGINT: These are variations of integers with different storage capacities.
	DECIMAL: Used for precise fixed-point values, often used in financial calculations.
	FLOAT and DOUBLE: Used for floating-point numbers where some approximation is acceptable.

2.DECIMAL :
This data type is used to store the numeric value with exact precision. Mostly used for data like prices, salary, account balance etc.The column declaration is usually defined with precision and scale. Precision means total length of the value & scale means values after the decimal points. For example if we declare like decimal(5,2) means after decimal point there will  be 2 digits & integer part will have 5-2=3 digits. So range of values for the decimal(5,2) will be -999.99 to 999.99.
Default value for decimal is decimal(10,0). 

USE vbn;
DESC ex;
ALTER TABLE ex ADD price DECIMAL(5,2);
DESC ex;
INSERT INTO ex (price) VALUES (123.345); -- 123.35 rounding happens 
INSERT INTO ex (price) VALUES (123.3456) -- rounding happens 
INSERT INTO ex (price) VALUES (1235.3456) -- error out of range coz max 999.99 accepted for decimal(5,2)
INSERT INTO ex (price) VALUES (999.99) -- works
SELECT * FROM ex;

3.1 How will a decimal type store value if the size given is (5,2)?
Answer: A DECIMAL(5,2) type means that the total number of digits allowed is 5, and out of those, 2 digits will be to the right of the decimal point. This will be able to store any value in the range of -999.99 to 999.99. For example, a value of 123.45 can be stored, but a value like 1234.567 will cause an error because it exceeds the allowed precision.

3.Double & Float :
These are used to store approximate numeric data values. MySQL performs rounding when storing these values, so if you insert 999.00009 into a FLOAT(7,4) column, the approximate result is 999.0001.
Double are used to store more precise values as they can store larger values than Float. Double used for more accuracy.
USE vbn;
DESC ex;
ALTER TABLE ex ADD fprice FLOAT , ADD dprice DOUBLE;
DESC ex;
TRUNCATE TABLE ex;
SELECT * FROM ex;
INSERT INTO ex (price, fprice, dprice) VALUES (10.9,10.9, 10.9);  -- run it 3 times
SELECT SUM(price) AS decimalPrice, SUM(fprice) AS floatPrice, SUM(dprice) AS doublePrice FROM ex;
doublePrice 65.4, decimalPrice 65.40, floatPrice 65.39999771118164
In results we see decimal has exact precision and scale, double has same precision but less scale as compared to decimal and float has same precision but way more scale than both decimal & double.
double 65.4 < decimal 65.40 < float 65.39999771118164

Difference between Decimal, Float & double : 
When we do any mathematical functions on it the precisions are different. In decimal it will be the exact precision with scale, while in float and double it will be approximate.
The difference between float and double is just the storage - float uses 4 bytes while double 8 bytes.

Bool & Boolean :
BOOL and BOOLEAN are aliases or synonyms for TINYINT(1).
SELECT FALSE, TRUE;  -- 0 & 1

INT is the default go-to integer type.
DECIMAL is crucial for prices/monetary values where accuracy is a must.
BIGINT needed for huge numbers but less frequent.
FLOAT/DOUBLE used mostly for scientific/analytics, not typical business apps.
SMALLINT/TINYINT for optimizing space or specific cases like flags.
MEDIUMINT is rare because it’s a weird in-between size.

4.1 Explain the difference between double and float?
Answer: 
Both DOUBLE and FLOAT are used for floating-point numbers, but they differ in precision:
FLOAT has a smaller range and is less precise, typically using 4 bytes.
DOUBLE has a higher precision, using 8 bytes, making it more suitable for calculations requiring high accuracy, like scientific computations.
But mostly decimal is used for more precise calculations as it has exact precision. 

4.2 In which situation would you choose the bool or boolean type?
Answer: BOOL and BOOLEAN types are synonyms for TINYINT(1) in MySQL, where 0 is considered false and 1 is considered true. You would use BOOL or BOOLEAN when you need to store binary logic values, such as true/false flags, to represent a state like is_active or has_access.


2-Date, DateTime, Timestamp
1.Date : Only stores date part of DateTime yyyy-mm-dd. You can use different seperators like slash, dot, hyphen.
2.Date Time : Stores both date and time. Format is yyyy-mm-dd hh:mm:ss
3.Timestamp : Stores same value as Date time but has min date of 1970-01-01 00:00:01 and max date of 2038-01-19 03:14:07

DESC ex;
ALTER TABLE ex
  ADD createddate DATE,
  ADD createdtime TIME,
  ADD createddatetime DATETIME,
  ADD createdtimestamp TIMESTAMP;
SELECT * FROM ex;
INSERT INTO ex (createddate, createdtime, createddatetime, createdtimestamp) 
VALUES (NOW(),NOW(),NOW(),NOW()); -- run it twice
SELECT createddate, createdtime, createddatetime, createdtimestamp FROM ex; -- copy createdtimestamp value
SELECT @@session.time_zone;
SELECT @@session.time_zone = "-5:00";
SELECT createddate, createdtime, createddatetime, createdtimestamp FROM ex; -- copy createdtimestamp value
We see we have change in timestamp value while date time remains same. So inserted value of timestamp is getting converted as per the timezone.

5.1 What is the difference between date, datetime & timestamp data type?
Answer:
DATE: Stores only the date in YYYY-MM-DD format.
DATETIME: Stores both date and time in YYYY-MM-DD HH:MM:SS format.
TIMESTAMP: Similar to DATETIME but stored as the number of seconds since the Unix epoch (1970-01-01 00:00:00 UTC). TIMESTAMP also automatically adjusts for time zone differences. Minimum date of 1970-01-01 00:00:01 and max date of 2038-01-19 03:14:07.
Basically TIMESTAMP converts the current time zone to UTC for storage and converts back to the current time zone for retrieval. While the DATETIME is constant, once the data is stored, it remains the same.
By default the time zone is set based on the regional settings of the server or system. As long as the time zone setting remains constant, you get back the same value you store.
If you store a TIMESTAMP value, and then change the time zone and retrieve the value, the retrieved value will be different from the value that you have stored. This occurs because the same time zone was not used for conversion in both directions.

5.2 In which format does MySQL store the date data type?
Answer: MySQL stores the DATE data type in the YYYY-MM-DD format, representing the year, month, and day.

5.3 What will be the query to check the timezone?
Answer: The query to check the current MySQL timezone is:
SELECT @@global.time_zone, @@session.time_zone;

5.4 How can you change the timezone?
Answer: You can change the timezone in MySQL using:
SET time_zone = 'timezone_value';
For example, to set the timezone to UTC:
SET time_zone = '+00:00';

5.5 What is the default timezone for MySQL?
Answer: The default timezone for MySQL is usually the system's local timezone unless explicitly configured. It can be SYSTEM, meaning MySQL will use the host machine’s timezone settings.
By default the time zone is set based on the regional settings of the server or system. As long as the time zone setting remains constant, you get back the same value you store.

3-Time
It stores time part in this format HH:MM:SS. 
MySQL interprets abbreviated TIME values with colons as time of the day. For example '11:12' means '11:12:00' (11 Hours 12 minutes). But if the values are given without colons, MySQL assumes that the values are the two rightmost values of the time. For example '1112' means '00:11:12' for MySQL, i.e MySQL interprets it as 11 minutes and 12 seconds. Simillarly '1212' interpreted as '00:00:12' i.e 12 seconds.

SELECT CAST('1112' AS TIME) -- 00:11:12
SELECT CAST('11:12' AS TIME) -- 11:12:00
SELECT CAST('1212' AS TIME) -- 00:12:12

Even if we store date seperator with slash or dot, MySQL will use hyphen as seperator to store the date.

6.1 How does MySQL interpret time values? Example - 1112
Answer: MySQL interprets TIME values in the format HH:MM:SS. If you insert 1112, MySQL will treat it as 11:12:00 (11 hours, 12 minutes, 0 seconds). Missing seconds will default to 00.

3-String Data Types - Char and Varchar
The CHAR and VARCHAR types are declared with a length that indicates the maximum number of characters you want to store For e.g CHAR(30) can hold up to 30 characters.
The length of char data type is fixed length i.e when the values are stored they are right padded with spaces to the specified length internally. For e.g char(5) When storing value 'aa' to this data type internally, it will store value as 'aa_ _ _' and will truncate the white spaces while retrieval.
Whereas varchar is variable-length strings i.e it will store the data with spaces. 
If we declare CHAR(4) and VARCHAR(4) and assign an empty string (''), then:
	CHAR(4) will still occupy 4 bytes by padding the value with spaces.
	VARCHAR(4) will occupy 0 bytes (plus 1 byte for length metadata), since no actual characters are stored.
If there are fixed number of characters always to be inserted, CHAR() is better option. 

USE vbn;
ALTER TABLE ex ADD pincode CHAR(7) , ADD zipcode VARCHAR(7);
INSERT INTO ex (pincode, zipcode) VALUES ('123   ', '123   ');
SELECT pincode,LENGTH(pincode),zipcode,LENGTH(zipcode) FROM ex; -- LENGTH(pincode) is 3 while LENGTH(zipcode) is 6

7.1 What is the difference between CHAR & VARCHAR?
Answer:
CHAR: A fixed-length string, where the defined length is always used (padded with spaces if needed). Suitable for data that has a predictable size, like country codes.
VARCHAR: A variable-length string, which only uses as much space as required by the content. It is better for storing strings of variable length, such as names or email addresses.
OR
The length of char data type is fixed length i.e when the values are stored they are right padded with spaces to the specified length internally. For e.g char(5) When storing value 'aa' to this data type internally, it will store value as 'aa_ _ _' and will truncate the white spaces while retrieval.
Whereas varchar is variable-length strings i.e it will store the data with spaces. 
If we declare CHAR(4) and VARCHAR(4) and assign an empty string (''), then:
	CHAR(4) will still occupy 4 bytes by padding the value with spaces.
	VARCHAR(4) will occupy 0 bytes (plus 1 byte for length metadata), since no actual characters are stored.

3.String Data Types - Blob and Text
A BLOB can hold a variable amount of data and are used to store large amounts of binary data, such as images or other types of files. Fields defined as TEXT also hold large amounts of data.
You do not have to specify any length with BLOB and TEXT data types.
The difference between both of them is that BLOB values are treated as binary strings and TEXT values will be treated as character strings.

USE vbn;
ALTER TABLE ex ADD essay TEXT , ADD image BLOB;
INSERT INTO ex (essay) VALUES ('<span> This is span </span> hfhfjdjssnd dndjdndnd');
SELECT essay FROM ex;
INSERT INTO ex (image) VALUES ('<span> This is span </span> hfhfjdjssnd dndjdndnd one more line');
SELECT essay, image FROM ex;
Behaviour of BLOB & TEXT is simillar, but internally they are treated differently BLOB is treated as binary while TEXT as a character.

8.1 What is the purpose of the BLOB datatype?
Answer: BLOB (Binary Large Object) is used to store large amounts of binary data, such as images, multimedia files, or encrypted data.
OR
A BLOB can hold a variable amount of data and are used to store large amounts of binary data, such as images or other types of files.

8.2 What is the difference between BLOB & TEXT Datatype?
Answer:
BLOB: Stores binary data, such as files and images.
TEXT: Stores large text data. Both types can handle large volumes of data, but TEXT is for character data, and BLOB is for binary data.
OR
Well the behaviour of both these data types are similar, only internally they are treated differently. BLOB is treated as binary while TEXT as character.

4.String Data Types - ENUM
Enum is a enumeration type where you define fixed values to the column.

USE vbn;
ALTER TABLE ex ADD priority ENUM('LOW', 'MEDIUM', 'HIGH');
INSERT INTO ex (priority) VALUES (1);
SELECT priority FROM ex; -- LOW
INSERT INTO ex (priority) VALUES (3);
SELECT priority FROM ex; -- HIGH
INSERT INTO ex (priority) VALUES ('Medium');
SELECT priority FROM ex WHERE priority = 'Medium';
SELECT priority FROM ex WHERE priority = 1;
When we use ENUM, behind the scenes MySQL manipulates the strings & encodes it in index numbers starting from '1'. So 'LOW' is considered as index 1, 'MEDIUM' considered as index 2 & 'HIGH' as index 3.

9.1 Explain the datatype ENUM.
Answer: The ENUM data type allows you to define a column with a set of predefined values. It restricts the values that can be inserted into the column, enforcing a choice from the predefined list. For example:
CREATE TABLE shirts (
    color ENUM('red', 'blue', 'green')
);
In this case, the color column can only take one of the values: 'red', 'blue', or 'green'.
OR
ENUM is basically an enumeration. Enumeration is basically the labels and there is also an internal numbering system.
Every label is given a number also, so you can either refer to the number or the label depending on the requirement.


============================= Managing Tables ============================================================================

1.Database Storage Engines - Quick Reference
1.1 What is a database storage engine?
Answer: A database storage engine is the underlying software component that a database management system (DBMS) uses to create, read, update, and delete data from a database. Different storage engines manage how data is stored, indexed, and managed internally.
OR
A database storage engine is a MySQL component that internally manages the SQL operations performed on different table types. 
Though we have few different types of storage engines: InnoDB is the default and mostly used storage engine. Prior to MySQL version 5.5 MyISAM was the default storage engine.
The main difference between lnnoDB and MyISAM is with respect to designing a table or database. They are supported for "referential integrity" and "transactions".
If we need the database to support transactions (i.e. changes made by multiple operations handled as a single unit of work, with all of the changes either applied, or all the changes reverted) then we should choose the InnoDB engine, since these features are absent from the MyISAM engine.
The other big difference is concurrency. With MyISAM, the DML statement will obtain an exclusive lock on the table, and while that lock is applied, no other session can perform a SELECT or a DML operation on that table. While lnnoDB has a row locking system rather than table locking.
So, If your applications uses tables that are never or rarely modified, you can safely change their storage engine to MyISAM.
SHOW ENGINES; -- to list all the available engines

1.2 What is the difference between InnoDB and MyISAM?
Answer:
InnoDB supports transactions, foreign keys, and provides ACID compliance, making it suitable for applications requiring data integrity.
MyISAM is faster in read-heavy operations but does not support transactions or foreign keys, making it less suitable for applications where data integrity is crucial.
OR
The main difference between InnoDB and MyISAM is with respect to designing a table or database. Both the engones supports "referential integrity" but out of them only InnoDB supports "transactions". Second difference is related to concurrency, InnoDB has row locking system while MyISAM has table locking system for DML statements.

If we need the database to support transactions (i.e. changes made by multiple operations handled as a single unit of work, with all of the changes either applied, or all the changes reverted) then we should choose the InnoDB engine, since these features are absent from the MyISAM engine.
The other big difference is concurrency. With MyISAM, the DML statement will obtain an exclusive lock on the table, and while that lock is applied, no other session can perform a SELECT or a DML operation on that table. While lnnoDB has a row locking system rather than table locking.
So, If your applications uses tables that are never or rarely modified, you can safely change their storage engine to MyISAM.

2.Creating & Understanding Tables
AUTO_INCREMENT : MySQL will automatically insert the data in this field in sequential manner
NULL : NULL means NO DATA, NULL is different from zero '0' in numeric types & empty string in strings types. 
NOT NULL : Record without this field can not be inserted into the table, its a mandatory field.
Primary key : no duplicates, no null allowed

CREATE DATABASE vbn_sampledb;
USE vbn_sampledb;
CREATE TABLE productCategory
(
	id INT AUTO_INCREMENT,  -- this will increment id automatically in sequential manner
	categoryName CHAR(20) NOT NULL,
	categoryTitle VARCHAR(30) NOT NULL,
	descriptions VARCHAR(120),
	createdOn TIMESTAMP DEFAULT NOW(), -- this will insert current date automatically if not provided 
	PRIMARY KEY (id) 	 
);
SHOW TABLES; 
DESC productCategory;
SHOW CREATE TABLE productCategory;
INSERT INTO productCategory VALUES (1, 'Mobiles', NULL, 'Some description', NOW()); -- error since we passed NULL in categoryTitle
INSERT INTO c VALUES (1, 'Mobiles', 'Motorola', 'Some description', NOW());
SELECT * FROM productCategory;

2.1 What is the use of AUTO_INCREMENT?
Answer: AUTO_INCREMENT is used to automatically generate a unique sequential value for a column, typically used for primary keys, ensuring that each new record has a unique identifier.
OR 
AUTO_INCREMENT means MySQL will insert the value automatically in that column in a sequential manner even if the column is not specified in the insert statement.
INSERT INTO productCategory (categoryName,categoryTitle,descriptions,createdOn) VALUES ('Laptops', 'Acer', 'Some description', NOW());
SELECT * FROM productCategory;
Even though we have not given value to id field it has automatically inserted the record with an incremented value following the last record.

The values must be passed in single quote except all numeric data types i.e any int, double, decimal, boolean must be passed without quotes. 

2.2 What is NULL & NOT NULL?
Answer:
NULL allows a column to have no value (empty).
NOT NULL ensures that a column must always have a value and cannot be left empty.
OR
NULL - Null values are allowed in the field.
NOT NULL — You cannot skip that field Values need to be entered in that field (You must enter value in this field)

2.3 What is the purpose of the DEFAULT column?
Answer: The DEFAULT column is used to specify a value that is automatically assigned to a column if no value is provided during insertion. It ensures that the column is not left empty if the user omits the value.
OR
When you set a column with default value, in case if you do not specify the column name in insert statement then it will automatically insert the default value in that field.

2.4 What is the Primary Key?
Answer: A Primary Key is a column (or a combination of columns) that uniquely identifies each row in a table. It ensures that no duplicate values are entered and that each row can be referenced.
OR
If you define a column as Primary Key column it means the database will put a check on that column/field. It will automatically make sure that there has to be a unique value entered & it cannot be a NULL value.

1.Introduction to Foreign Key
What is need of foreign key ?
Because we don't want data redundancy that is we don't want the same data to be entered in every table

Customer Table		Order Table
Customer_ID			Order_ID
Name				Customer_ID
Phone				Other_Details
Address
In order table we dont need to enter customer details seperately as we already have Customer table with customer details. We just need to reference that customer table's Customer_ID column in orders table. So we put the primary key on Customer_ID column of customer table & referred it as foreign key in orders table.
Suppose phone number of customer is changed then we don't have to update the phone number in order table. We just update the record in only in customer table & it will be automatically gets reflected in order table also.
When we join both the tables then we have order details with full customer information.
The main purpose of foreign keys is referential integrity i.e foreign key is used to establish the relationship between the tables.

Generally what happens is tables can form a hierarchy of relationships in such a way that if a record from one table is updated or deleted, it destroys the meaning of another record in the table.
Suppose we deleted the Customer_ID 101 from Customer table, the record with customer_id 101 in order table is useless i.e it does not have any meaning. This means "Referential Integrity is the logical dependency of foreign keys on primary keys"
By Default MySQL server, rather it is any database server does not allow us to violate referential integrity. 
However we can explicitly define different CASCADE option in ON UPDATE and ON DELETE. That means CASCADE option will execute whenever UPDATE or/and DELETE operation is performed on primary key tables.
CASCADE is when a primary key record is deleted, it will delete the child/respective records. When 101 is deleted from Customer table it will delete all associated record with customer_id 101 in orders tables also.

3.1 What is a Foreign Key?
Answer: A Foreign Key is a column (or group of columns) in one table that references the Primary Key of another table. It is used to maintain relationships between tables and enforce referential integrity.
OR
Foreign key is used to establish the relationship between tables. The main purpose of foreign keys is referential integrity i.e to define the relationship between the tables.
Referential integrity is the logical dependency of foreign keys on primary keys. (if we delete record from one table then that record is useless in other referenced tables)



3.2 What do you mean by referential integrity?
Answer: Referential Integrity ensures that the relationship between tables remains consistent. When one table references another via a foreign key, referential integrity ensures that changes in the referenced table do not lead to orphan records in the referencing table.

3.3 What is the CASCADE option?
Answer: The CASCADE option in foreign key constraints allows changes in the parent table (like deletions or updates) to automatically propagate to the child table. For example, if a row is deleted in the parent table, the corresponding rows in the child table will also be deleted.
OR
CASCADE option allows us to maintain the referential integrity. With CASCADE option set when a primary key record is deleted, it will delete the child/respective records in other referenced tables also. When 101 is deleted from Customer table it will delete all associated record with customer_id 101 in orders tables also. Basically it will not give chance to keep the orphan records.

Creating Tables with Foreign Key
SYNTAX : Foreign key 
[CONSTRAINT constraint_name]
FOREIGN KEY [foreign_key_name] (column_name, ...)
REFERENCES parent_table(column_name,...)
[ON DELETE reference_option] -- RESTRICT or SET NULL
[ON UPDATE reference_option]

ON DELETE & ON UPDATE options are CASCADE. If we dont specify these options the default option is to RESTRICT.

Constraint : A constraint limits or restrict what values can be inserted, updated, or deleted in a column or table.
Column definition order : <column name> <data type> [constraints like NOT NULL] [AUTO_INCREMENT]
Constrains used : NOT NULL, UNIQUE, PRIMARY KEY, DEFAULT, AUTo_INCREMENT, CHECK, REFERENCES

SELECT * FROM productCategory;
USE vbn_sampledb;
DESC productCategory;

We have table productCategory with columns : id, categoryName, categoryTitle, descriptions, createdOn
Now we are going to create table name products with columns : productid, productName, categoryid, createdOn & create foreign key on categoryid & reference it to the id column of productCategory table
We have referenced 'id' field of 'productCategory' to the 'categoryid' column of 'products' table. 
CREATE TABLE products (
	productid INT NOT NULL AUTO_INCREMENT,
	productName VARCHAR(30) NOT NULL,
	categoryid INT,
	createdon TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (productid),
	CONSTRAINT fk_categoryid
	FOREIGN KEY (categoryid)
	REFERENCES productCategory (id)
)
IMP :
The table being referenced is the parent.
The table that has the foreign key is the child.

INSERT INTO products (productName, categoryid) VALUES ('Samsung', 10); -- error can not add or update child row
The above error occurs because we dont have 'id' (referenced as categoryid in products table) with value 10 in productCategory. 
INSERT INTO products (productName, categoryid) VALUES ('Samsung', 1);
SELECT * FROM products;
AUTO_INCREMENT skips numbers when an insert fails : MySQL (and many other RDBMSs) pre-allocates the next auto-increment value before the row is fully inserted. If the insert fails later (e.g., due to a NOT NULL, UNIQUE, or CHECK constraint), the value is not reused.  
INSERT INTO products (productName, categoryid) VALUES ('Apple', 1);
SELECT * FROM products;
INSERT INTO products (productName, categoryid) VALUES ('HP', 1);
SELECT * FROM products;
SELECT * FROM productCategory;
DELETE FROM productCategory WHERE id = 1; -- error Can not delete or update a parent row 
UPDATE productCategory SET id = 10 WHERE id = 1; -- error Can not delete or update a parent row 
The above error happens coz the id in the productCategory table has reference to the products table & the default action of foreign key is to RESTRICT. 
MySQL does not allow direct alter of foreign key, so we have to delete & recreate the foreign key with other options like SET NULL or CASCADE.
SHOW CREATE TABLE products;  -- copy the foreign key name
Here products table is child coz it has foreign key & productCategory is parent table coz it referenced in create table query.
ALTER TABLE products DROP FOREIGN KEY fk_categoryid;
ALTER TABLE products ADD 
	CONSTRAINT fk_categoryid
	FOREIGN KEY (categoryid)
	REFERENCES productCategory (id)
		ON UPDATE SET NULL 
		ON DELETE SET NULL
UPDATE productCategory SET id = 10 WHERE id = 1; -- error Can not delete or update a parent row 
SELECT * FROM products; -- the categoryid 1 is set to null
SELECT * FROM productCategory; -- record with id 1 is updated to 10 
DELETE FROM productCategory WHERE id = 2; -- error Can not delete or update a parent row 
SELECT * FROM products; -- the record with categoryid 2 is set to null
SELECT * FROM productCategory; -- no record with id 2

CASCADE :
ALTER TABLE products DROP FOREIGN KEY fk_categoryid;
ALTER TABLE products ADD 
	CONSTRAINT fk_categoryid
	FOREIGN KEY (categoryid)
	REFERENCES productCategory (id)
		ON UPDATE CASCADE
		ON DELETE CASCADE
TRUNCATE TABLE productCategory; -- error cannot truncate a table referenced in a foreign key constraint
TRUNCATE TABLE products; -- works
Above error occurs we have foreign key reference in productCategory table of products table. This is an additional integrity check by MySQL that even if the child table is empty it will not allow us to truncate parent table records.
To override this check use below commands :
SET FOREIGN_KEY_CHECKS = 0; -- disable the foreign key check intigrity
TRUNCATE TABLE productCategory;
SET FOREIGN_KEY_CHECKS = 1; -- enable the foreign key check intigrity. Dont mess with default properties unless necessory
SELECT * FROM products;
SELECT * FROM productCategory;
INSERT INTO productCategory VALUES (1,'Mobiles', 'Mobile title', 'Some description', NOW());
INSERT INTO productCategory VALUES (2,'Laptops', 'Laptop title', 'Some description', NOW());
INSERT INTO productCategory VALUES (3,'Headphone', 'Headphone title', 'Some description', NOW());

INSERT INTO products (productName, categoryid) VALUES ('Samsung', 1);
INSERT INTO products (productName, categoryid) VALUES ('Apple', 1);
INSERT INTO products (productName, categoryid) VALUES ('Acer', 2);
INSERT INTO products (productName, categoryid) VALUES ('DELL', 2);
INSERT INTO products (productName, categoryid) VALUES ('SkullCandy',3);
INSERT INTO products (productName, categoryid) VALUES ('Boat',3);
SELECT * FROM products;
SELECT * FROM productCategory;
UPDATE productCategory SET id = 10 WHERE id = 1; -- both productCategory (parent) & products (child) records gets updated
SELECT * FROM products; -- the categoryid 1 is set to 10
SELECT * FROM productCategory; -- record with id 1 is updated to 10 
DELETE FROM productCategory WHERE id = 2; -- the record gets deleted from both productCategory (parent) & products (child)
SELECT * FROM products; -- the categoryid 2 is deleted
SELECT * FROM productCategory; -- record with id 2 is deleted 

Different options with foreign key :
1.ON UPDATE SET NULL : record updated in parent table & child table values are set to NULL (as child table is referenced)
2.ON DELETE SET NULL : record deleted from parent table & child table values are set to NULL (as child table is referenced)
3.ON UPDATE CASCADE : Automatically updates the child table's foreign key if the parent key is updated
4.ON DELETE CASCADE : Automatically deletes child rows if the parent row is 

When we see MUL it is key value : MUL means Multiple — the column is indexed, but values may repeat. Typically used for foreign keys or non-unique indexes.
Other values are : PRI, UNI
DESC products;
SHOW COLUMNS FROM products;

Alter statement is used to change or alter the structure of the table.  

4.1 How can you add/remove foreign key constraint at a later stage?
Answer:
To add a foreign key at a later stage:e
ALTER TABLE child_table ADD CONSTRAINT fk_name FOREIGN KEY (column) REFERENCES parent_table(parent_column);
To remove a foreign key:
ALTER TABLE child_table DROP FOREIGN KEY fk_name;

5. Alter Table Command - ADD, MODIFY
Alter Table Command - ADD, MODIFY

5.1 How will you add a column in the existing table?
Answer: You can add a column to an existing table using:

sql
Copy code
ALTER TABLE table_name ADD column_name datatype;
1. Alter Table Command - CHANGE, DROP, RENAME
6.1 What is the difference between CHANGE and MODIFY?
Answer:

CHANGE is used to rename a column and optionally change its data type.
MODIFY only alters the data type or other properties of an existing column without changing the column name.
6.2 In which scenarios will you use CHANGE or MODIFY?
Answer:

Use CHANGE when you want to rename a column or both rename and modify its type.
Use MODIFY when you only want to change the data type or properties (like making it NOT NULL).
6.3 Is it possible to rename a field name or a column name?
Answer: Yes, you can rename a column using the CHANGE command:

sql
Copy code
ALTER TABLE table_name CHANGE old_column_name new_column_name datatype;
6.4 How will you rename a table?
Answer: You can rename a table using the RENAME command:

sql
Copy code
RENAME TABLE old_table_name TO new_table_name;

1. Insert Query [Inserting a Record to Table]
1.1 How do you INSERT values in a table?
Answer: You can insert values into a table using the INSERT INTO statement. Example:

sql
Copy code
INSERT INTO table_name (column1, column2) VALUES (value1, value2);
1.2 Is it necessary to give column names with the INSERT statement?
Answer: No, it's not necessary if you are inserting values for all columns. However, if you're only inserting into specific columns, you must specify them. Example:

sql
Copy code
INSERT INTO table_name VALUES (value1, value2, ...); // All columns
INSERT INTO table_name (column1, column2) VALUES (value1, value2); // Specific columns
2. Insert Ignore Into Clause - INSERT IGNORE INTO & ON DUPLICATE KEY
2.1 How do we update the column value using insert statements?
Answer: You can update a column's value using the ON DUPLICATE KEY UPDATE clause with the INSERT statement. Example:

sql
Copy code
INSERT INTO table_name (column1, column2) VALUES (value1, value2)
ON DUPLICATE KEY UPDATE column2 = new_value;
This will insert the values if there's no duplicate key, or update the existing row if there is.

3. Inserting Hierarchical Data
3.1 What is the purpose of LAST_INSERT_ID function in MySQL?
Answer: LAST_INSERT_ID() returns the last automatically generated AUTO_INCREMENT value inserted by the INSERT statement for the current session. It is useful for retrieving the ID of the inserted record in hierarchical or related data operations.

4. Update Single Row
4.1 How will you update values of a column?
Answer: You can update a column’s values using the UPDATE statement. Example:

sql
Copy code
UPDATE table_name SET column_name = new_value WHERE condition;
4.2 What happens if you do not use the WHERE clause?
Answer: If you omit the WHERE clause in an UPDATE statement, all rows in the table will be updated with the specified values.

4.3 Is it possible to give expressions with the UPDATE statement instead of fixed/literal values?
Answer: Yes, you can use expressions in the UPDATE statement. For example:

sql
Copy code
UPDATE table_name SET column_name = column_name + 1 WHERE condition;
This increments the current value of column_name by 1 for the rows that match the condition.

5. Updating Multiple Records (The "IN" Operator)
5. Instead of OR, how will you use the IN operator?
Answer: You can use the IN operator to update multiple rows without having to use multiple OR conditions. Example:

sql
Copy code
UPDATE table_name SET column_name = new_value WHERE column_name IN (value1, value2, value3);
This will update all rows where column_name is either value1, value2, or value3.

1. Select Clause
1.1 What is the use of the SELECT Clause?
Answer: The SELECT clause is used to specify the columns that you want to retrieve from a database table. It allows you to fetch specific data from one or more tables. Example:

sql
Copy code
SELECT column1, column2 FROM table_name;
If you want to fetch all columns, you can use SELECT * FROM table_name;.

1.2 What is the meaning of (*) in the SELECT * FROM tablename statement?
Answer: The asterisk (*) in the statement SELECT * FROM table_name means "select all columns." It retrieves every column from the specified table without having to list them individually.

1.3 How do you terminate multiple SQL statements?
Answer: In SQL, you typically terminate multiple statements with a semicolon (;). This indicates the end of one SQL command and allows the next command to be executed. Example:

sql
Copy code
SELECT * FROM table1;
SELECT * FROM table2;
2. ORDER BY Clause
1.1 What is the use of the ORDER BY clause? Or How do you sort the data while fetching it?
Answer: The ORDER BY clause is used to sort the result set of a query based on one or more columns. You can specify the sorting order (ascending or descending). Example:

sql
Copy code
SELECT * FROM table_name ORDER BY column_name ASC;
1.2 What is the default order of the ORDER BY clause when you fetch the data?
Answer: The default order of the ORDER BY clause is ascending (ASC). If you do not specify the order, the data will be sorted in ascending order by default.

1.3 How will you fetch the data in descending order?
Answer: To fetch data in descending order, you can use the DESC keyword in the ORDER BY clause. Example:

sql
Copy code
SELECT * FROM table_name ORDER BY column_name DESC;
1.4 When you give multiple columns to sort, how does it implement the sorting?
Answer: When you specify multiple columns in the ORDER BY clause, MySQL sorts the result set based on the first column. If there are ties (i.e., identical values in the first column), it then sorts those rows by the second column, and so on. Example:

sql
Copy code
SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;
In this case, the result set is first sorted by column1 in ascending order, and for rows with the same column1 value, they are sorted by column2 in descending order

1. WHERE Clause Introduction
1.1 What is the WHERE Clause?
Answer: The WHERE clause is used in SQL to filter records that meet certain conditions. It allows you to specify criteria that must be satisfied for records to be included in the result set. Without a WHERE clause, a query returns all records from a table.

2. WHERE Clause with Equality Operator
2.1 What is equality comparison?
Answer: Equality comparison in SQL is done using the equality operator (=) to compare values in a specified column against a given value. If the values match, the row is included in the result set. Example:

sql
Copy code
SELECT * FROM table_name WHERE column_name = value;
2.2 With which data types can equality operators be used?
Answer: Equality operators can be used with various data types, including:

Numeric types (e.g., INT, DECIMAL)
String types (e.g., CHAR, VARCHAR)
Date and time types (e.g., DATE, DATETIME)
Boolean types (e.g., TRUE, FALSE)
2.3 Find records from the address table where the district name is “Ontario”.
Answer: To find records in the address table where the district name is "Ontario," you can use the following SQL query:

sql
Copy code
SELECT * FROM address WHERE district_name = 'Ontario';
3. WHERE Clause with Comparison Operators
3.1 Find records of customers whose birth date is greater than 1st JAN 2001 and then sort the data by birth date.
Answer: To find records of customers whose birth date is greater than January 1, 2001, and sort the results by birth date, you can use the following SQL query:

sql
Copy code
SELECT * FROM customers WHERE birth_date > '2001-01-01' ORDER BY birth_date;

4. AND Operator
4.1 Select records from the film table with release_year greater than 2005 and replacement_cost greater than 20 and also the length should be greater than or equal to 100.
Answer: To select records from the film table where the release_year is greater than 2005, replacement_cost is greater than 20, and length is greater than or equal to 100, you can use the following SQL query:

sql
Copy code
SELECT * FROM film 
WHERE release_year > 2005 
  AND replacement_cost > 20 
  AND length >= 100;
4.2 Select records from the film table where language_id equals 1 and release_year is smaller than 2000.
Answer: To select records from the film table where language_id is equal to 1 and release_year is less than 2000, use this SQL query:

sql
Copy code
SELECT * FROM film 
WHERE language_id = 1 
  AND release_year < 2000;
4.3 Select records from the film table with release_year between 2005 and 2010 and sort the data by release_date in descending order.
Answer: To select records from the film table where the release_year is between 2005 and 2010, sorted by release_date in descending order, you can use the following SQL query:

sql
Copy code
SELECT * FROM film 
WHERE release_year BETWEEN 2005 AND 2010 
ORDER BY release_date DESC;
4.4 What will the AND operator return if the condition is true, and what will it return if it is false?
Answer:

If the conditions combined with the AND operator are all true, the AND operator will return the record(s) that meet all specified conditions.
If any of the conditions are false, the AND operator will return no records that satisfy the query.
5. OR Operator
5.1 Select records from the film table where language_id is 1 or 6.
Answer: To select records from the film table where language_id is either 1 or 6, you can use the following SQL query:

sql
Copy code
SELECT * FROM film 
WHERE language_id = 1 
   OR language_id = 6;
5.2 Select records from the film table whose rating should be ‘NC-17’ or ‘PG-13’ and the release year should be greater than 2015 and then sort the result by rating and release_year in descending order.
Answer: To select records from the film table where the rating is either 'NC-17' or 'PG-13' and the release_year is greater than 2015, sorted by rating and release_year in descending order, use the following SQL query:

sql
Copy code
SELECT * FROM film 
WHERE (rating = 'NC-17' OR rating = 'PG-13') 
  AND release_year > 2015 
ORDER BY rating DESC, release_year DESC;
6. IN Operator
6.1 Fetch records from the film table where release year is 2000, 2005, and 2010, and also it should not include ‘PG’ and ‘G’ rating and then sort the data by release year ascending and rating in descending order.
Answer: To fetch records from the film table where the release_year is 2000, 2005, or 2010, and the rating is neither 'PG' nor 'G', sorted by release_year in ascending order and rating in descending order, use the following SQL query:

sql
Copy code
SELECT * FROM film 
WHERE release_year IN (2000, 2005, 2010) 
  AND rating NOT IN ('PG', 'G') 
ORDER BY release_year ASC, rating DESC;

QUERIES :
create database db_name
use db_name
show tables
DESC table_name
show create table table_name  // gives create statement of the table



==========================================================================================================================

1 Database Storage Engines - Quick Reference

1.1 What is a database storage engine?
A database storage engine is a MySQL component that internally manages the SQL operations performed on different table types. InnoDB is default & mostly used storage engine.Versions before mysql 5.5 uses MyISAM storage engine.

1.2 What is the difference between InnoDB and MyISAM?
The main difference between lnnoDB and MyISAM is with respect to designing a table or database, they are supported for "referential integrity" and "transactions". If we need the database that supports transactions like multiple operations handled as a single unit of work then we should use InnoDB engine.
The other big difference is concurrency — with MyISAM, the DML statement will obtain an exclusive lock on the table, and while that lock is applied, no other session can perform a SELECT or a DML operation on that table. While InnoDB has row locking system rather than table locking like MyISAM.
So, If your applications uses tables that are never or rarely modified, you can safely change their storage engine to MyISAM.

2 Creating & Understanding Tables
CREATE DATABASE nj_sampledb;
USE nj_sampledb;
NOT NULL means record without this field can not be inserted into the table, its a mandatory field.
CREATE TABLE productcategory(
	id INT AUTO_INCREMENT,
	categoryname CHAR(20) NOT NULL,
	categorytitle VARCHAR(30) NOT NULL,
	`description` VARCHAR(150),
	createdon TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (id)
)
SHOW TABLES;
DESC productcategory;  // details of the table
SHOW CREATE TABLE productcategory; // get create table statement
INSERT INTO productcategory VALUES (1, 'Mobiles', NULL, 'Some description', NOW());
// this will throw error Error Code: 1048 Column 'categorytitle' cannot be null
INSERT INTO productcategory VALUES (1, 'Mobiles', 'Mobile title', 'Some description', NOW());
SELECT * FROM productcategory;
INSERT INTO productcategory
(categoryname, categorytitle, `description`, createdon) 
VALUES ('Laptops', 'Laptops FOR a pro gamer', '', NOW());
INSERT INTO productcategory
(categoryname, categorytitle, `description`) 
VALUES ('Laptops-1', 'Laptops FOR a pro gamer', '');
SELECT * FROM productcategory;
SELECT * FROM productcategory;

2.1 What is the use of AUTO_INCREMENT?
MySQL will insert the value automatically in that column in a sequential manner even if the column is not specified in the insert statement.

2.2 What is NULL & NOT NULL
NULL - Null values are allowed in the field
NOT NULL - You cannot skip that field values must need entered in that field

2.3 What is the purpose of DEFAULT column?
When there is no value specified by the user for particular column then it will automatically insert the default value.

2.4 What is the Primary Key?
If you define a column as Primary Key column - the database will put a check on that column/field. It will automatically make sure that there has to be a unique value entered & it cannot be a NULL value.
Primary key means values inserted in that column must be unique & not null

3 Introduction to Foreign Key
We have column limit of 4000 for single table. 
We dont want data redundancy (no duplicates) & 
There are two main reasons to use foreign keys :
	1. To avoid data redundancy
	2. Maintain referential integrity i.e to define relationship between tables 
CASCADE option will execute whenever UPDATE or DELETE operation is performed on primary key tables. CASCADE is when a primary key record is deleted, it will delete the child/respective records

3.1 What is Foreign Key?
Used to establish the relationship between the tables & the main purpose of foreign key is to maintain referential integrity.
3.2 What do you mean by referential integrity?
Referential integrity is the logical dependency of foreign keys on primary keys.
3.3 What is the CASCADE option?
CASCADE is when a primary key record is deleted, it will delete the child/respective records

4 Creating tables with foreign key
Syntax :
	<code>
	[CONSTRAINT constraint_name]
	FOREIGN KEY [foreign_key_name] (column_name, ...)  
	REFERENCES parent_table(column_name,...)
	[ON DELETE reference_option]
	[ON UPDATE reference_option]
	<code>
FOREIGN KEY [foreign_key_name] (column_name, ...) : is for current table column name
REFERENCES parent_table(column_name,...) : for parent table column name
reference_option are CASCADE, SET NULL, RESTRICT. Default is RESTRICT

CREATE TABLE product(
	productid INT NOT NULL AUTO_INCREMENT,
	productname VARCHAR(30) NOT NULL,
	categoryid INT,
	createdon TIMESTAMP DEFAULT NOW(),
	PRIMARY KEY (productid),
	CONSTRAINT fk_categoryid
	FOREIGN KEY (categoryid)
	REFERENCES productcategory(id)
)
// foreign key in the product table is referenced to the id column in productcategory
// To create a foreign key, the referenced column in the parent table (the table being referenced) must be either a primary key or a unique key.
INSERT INTO product (productname, categoryid ) VALUES ('Samsung', 10);
// this will throw error as there is no id in productcategory with value 10

INSERT INTO product (productname, categoryid ) VALUES ('Samsung', 1);
INSERT INTO product (productname, categoryid ) VALUES ('Apple', 1);
INSERT INTO product (productname, categoryid ) VALUES ('Nokia', 1);
INSERT INTO product (productname, categoryid ) VALUES ('MACBook', 2);
INSERT INTO product (productname, categoryid ) VALUES ('Surface', 2);
SELECT * FROM productcategory;
SELECT * FROM product;

DELETE FROM productcategory WHERE id = 1;
// this will show error coz the default reference_option is to RESTRICT & id that we try to delete is having reference in the product table 
UPDATE productcategory SET id = 10 WHERE id = 1;
we get same error like above as we have set default reference_option RESTRICT
To make this work we have to change the reference_option, we can not update foreign_key directly so we have to delete it & recreate it. 

Lets set reference_option RESTRICT to SET NULL :
	SHOW CREATE TABLE product;  // copy foreign_key name from CONSTRAINT which is fk_categoryid
	ALTER TABLE product DROP FOREIGN KEY fk_categoryid;
	ALTER TABLE product ADD 
		CONSTRAINT fk_categoryid
		FOREIGN KEY (categoryid)
		REFERENCES productcategory (id)
			ON UPDATE SET NULL
			ON DELETE SET NULL
	UPDATE productcategory SET id = 10 WHERE id = 1;
	SELECT * FROM productcategory;
	SELECT * FROM product;	
// we see in productcategory table record with id 1 has been updated with record 10 & in product table whose categoryid was 1 is now set to NULL.
	DELETE FROM productcategory WHERE id=2;
	SELECT * FROM productcategory;
	SELECT * FROM product;	
// we see no record with id 2 in productcategory & in product table record with categoryid 2 has been set to NULL

Lets set reference_option RESTRICT to CASCADE :
	SHOW CREATE TABLE product;  // copy foreign_key name from CONSTRAINT which is fk_categoryid
	ALTER TABLE product DROP FOREIGN KEY fk_categoryid;
	ALTER TABLE product ADD 
		CONSTRAINT fk_categoryid
		FOREIGN KEY (categoryid)
		REFERENCES productcategory (id)
			ON UPDATE CASCADE
			ON DELETE CASCADE
	TRUNCATE TABLE productcategory;
	TRUNCATE TABLE product;
	// Shows error coz of integrity check, even if child table(product) is empty it will not allow us to truncate parent table(productcategory) records
	SET FOREIGN_KEY_CHECKS=0; // this will override the integrity check
	TRUNCATE TABLE productcategory;
	SET FOREIGN_KEY_CHECKS=1;
	// Now both the tables are empty, insert records in both the tables 
	INSERT INTO productcategory VALUES (1, 'Mobiles', 'Mobile title', 'Some description', NOW());
	INSERT INTO productcategory
	(categoryname, categorytitle, `description`, createdon) 
	VALUES ('Laptops', 'Laptops FOR a pro gamer', '', NOW());
	INSERT INTO productcategory
	(categoryname, categorytitle, `description`) 
	VALUES ('Laptops-1', 'Laptops FOR a pro gamer', '');
	
	INSERT INTO product (productname, categoryid ) VALUES ('Samsung', 1);
	INSERT INTO product (productname, categoryid ) VALUES ('Apple', 1);
	INSERT INTO product (productname, categoryid ) VALUES ('Nokia', 1);
	INSERT INTO product (productname, categoryid ) VALUES ('MACBook', 2);
	INSERT INTO product (productname, categoryid ) VALUES ('Surface', 2);

	UPDATE productcategory SET id = 10 WHERE id = 1;
	// we see in productcategory table record with id 1 has been updated with record 10 & in product table whose categoryid was 1 is also updated to 10.
	SELECT * FROM productcategory;
	SELECT * FROM product;		
	
	DELETE FROM productcategory WHERE id=2;
	SELECT * FROM productcategory;
	SELECT * FROM product;	
	// we see no record with id 2 is deleted from productcategory table & from product table also
	
4.1 How can you add/remove foreign key constraint at a later stage?
we can not update foreign_key constraint directly we have to delete foreign_key & recreate it with new constraint.
for that we have to get foreign key, then delete that foreign_key & add it again with new constraint

5 Alter Table Command - ADD, MODIFY
With alter table we can
	=> Add Columns to table
	=> Change the Datatype of an existing column
	=> Rename column
	=> Change column position (i.e Reorder columns)
	=> Delete column
	=> Rename... Table
1.ADD keyword: used to add one or more columns to the table
syntax : 
	ALTER TABLE <talole_name>
	ADD
	<new_column_name> <column_definition>
	[FIRST | AFTER column_name];

DESCRIBE product;
ALTER TABLE product ADD productimage BLOB; 
// this will add productimage column as the last column
ALTER TABLE product 
ADD price DECIMAL(7,2) FIRST,
ADD sellingprice DECIMAL(8,2) AFTER categoryid;
// this will add price column as the first column & add sellingprice column after categoryid column
DESCRIBE product;
2.MODIFY keyword : used to change the column definition i.e. datatype of the column
syntax :
	ALTER TABLE <table_name>
	MODIFY
	<new_column_name><column_definition>
	[FIRST | AFTER oolumn_name];
DESCRIBE product;
ALTER TABLE product
MODIFY price DECIMAL(10,2) AFTER sellingprice,
MODIFY createdon TIMESTAMP DEFAULT NOW() AFTER productimage
DESCRIBE product;

5.1 How will you add a column in the existing table?
3.CHANGE keyword : does all the functions that MODIFY does additionaly it can also rename the column
syntax :
	ALTER TABLE <table_name>
	CHANGE <original_name> <new_name> <column_definition>
	[FIRST | AFTER column_name];
DESCRIBE product;
ALTER TABLE product
MODIFY price productprice DECIMAL(10,2) AFTER categoryid
DESCRIBE product;
4.DROP keyword : delete the column from the table
ALTER TABLE product DROP productimage; 
DESCRIBE product;
5.RENAME keyword :
ALTER TABLE product RENAME products_table; 
DESCRIBE products_table

6 Alter Table Command - CHANGE, DROP, RENAME
6.1 What is the difference between CHANGE and MODIFY ?
OR
6.2 In which scenarios you will use CHANGE or MODIFY ?
CHANGE has the additional ability to change the column along with all the functions that MODIFY can do.If we want to rename the column in the table, we will use CHANGE instead of MODIFY
6.3 Is it possible to rename a field name or a column name?
ALTER TABLE <table_name>
	CHANGE <original_name> <new_name> <column_definition>
	[FIRST | AFTER column_name];
6.4 How will you rename a table?
ALTER TABLE product RENAME products_table; 
1 Insert Query [inserting a record to table]
To add new records to the table we use INSERT 
Syntax :
	INSERT INTO <tablename> ( col1, co12, col3)
	VALUES
	(val1, val2, val3);
If we dont specify the column name then we have to provides values for all the columns in the insert statement. 
Any data type other than numeric data type has to be written in single quotes.
INSERT INTO productcategory VALUES (DEFAULT, 'Category 1', 'Category 1 Title', DEFAULT, DEFAULT);
// DEFAULT is used to insert default values from column, as id column has auto_increment we use DEFAULT for it
SELECT * FROM productcategory
// OR 
INSERT INTO productcategory (categoryname, categorytitle) 
VALUES ('Category 2', 'Category 2 Title');
SELECT * FROM productcategory
// for bulk insert 
INSERT INTO productcategory (categoryname, categorytitle) VALUES 
('Category 3', 'Category 3 Title'),
('Category 4', 'Category 4 Title'),
('Category 5', 'Category 5 Title'),
('Category 6', 'Category 6 Title');
SELECT * FROM productcategory;
1.1 How do you INSERT values in a table?
INSERT INTO <tablename> ( col1, co12, col3) VALUES (val1, val2, val3);
1.2 Is it necessary to give column names with the INSERT statement?
No, if you need to specify columns in specific sequence, then only you give the column names in the INSERT statement.But if you want to add values for the specific columns only then you have to specify column names in the insert statement.

To check if a particular column in a MySQL table has a NOT NULL constraint :
1.SHOW CREATE TABLE your_table_name;
2.SELECT COLUMN_NAME, IS_NULLABLE FROM INFORMATION_SCHEMA.COLUMNS WHERE 
TABLE_NAME = 'your_table_name' AND TABLE_SCHEMA = 'your_database_name' AND COLUMN_NAME = 'your_column_name';

2 Insert Ignore Into Clause - INSERT IGNORE INTO & ON DUPLICATE KEY
INSERT IGNORE INTO and INSERT ON DUPLICATE KEY UPDATE are MySQL's extension over the standard INSERT statement.
Suppose, if we try to enter the value in the primary key with the value that already exists in the table, MySQL will throw us an error. To overcome such a situation we have INSERT IGNORE INTO CLAUSE.
SELECT * FROM productcategory;
INSERT INTO productcategory (id, categoryname, categorytitle)
VALUES
(11, 'New category', 'IGNORE TEST');
// Run above query two times, for the second time it shows error of Duplicate entry 11
// To avoid this error we use IGNORE keyword after the INSERT
INSERT IGNORE INTO productcategory (id, categoryname, categorytitle)
VALUES
(11, 'New category', 'IGNORE TEST');
SHOW WARNINGS;
// now it does not show error instead it shows warning with 0 rows affected 
INSERT IGNORE INTO productcategory (id, categoryname, categorytitle)
VALUES
(12, 'New category', 'IGNORE TEST');
// insert statement with ignore works as standard insert statement 

We also have an on ON DUPLICATE KEY UPDATE clause which updates the value if any Primary key Constraints fail i.e., if any duplicate key is found it will update the column provided in ON DUPLICATE KEY UPDATE Clause
INSERT INTO productcategory (id, categoryname, categorytitle)
VALUES
(12, 'New category', 'IGNORE TEST');
ON DUPLICATE KEY UPDATE categoryname="Updated category"
INSERT ... ON DUPLICATE KEY UPDATE statement in MySQL is designed to handle scenarios where you want to insert a new row, but if a row with the same unique key (or primary key) already exists, you want to update it instead. This behavior ensures that the operation is atomic, meaning it will either insert a new row or update an existing one without causing errors.
If the new value is inserted which means provided id in insert statment is is unique and not currently present in the table which will return "1 row affected" but if the id is already exists in table it will not throw error instead it will update existing id with new values & returns "2 rows affected"
2.1 How do we update the column value using insert statements?
INSERT INTO <table_name> VALUES
(val1, val2)
ON DUPLICATE KEY UPDATE colName= value

3 Inserting Hierarchical Data : Insert data into multiple tables
So here comes in action the parent child relation table where orders table is the parent table with "orderid","customerid", "orderdate" & "addressid" information but we dont have actual product for the order which is present in order_details table (id, orderid, productid, qty, price) orderid column is reference of orderid column from orders table with the product details with reference to the parent "orderid"
orders table -  orderid, customerid, orderdate addressid
order_details - id, orderid, productid, qty, price

INSERT INTO orders
VALUES (DEFAULT, 1, NOW(), 1)
We have inserted one record in orders table, but we need to insert the orderid generated from this query into orderid of order_details table. So to retrieve the last inserted id we use built in function LAST_INSERT_ID which returns id of last inserted row.
INSERT INTO order_details
VALUES 
	(DEFAULT, LAST_INSERT_ID(), 1, 2, 10),
	(DEFAULT, LAST_INSERT_ID(), 3, 1, 15.12)
SELECT * FROM order_details;
// we see orderid same as last inserted value of orders table
3.1 What is the purpose of LAST_INSERT_ID function in MySQL?
LAST_INSERT_ID helps us in retrieving the id that was lastly inserted.It is a built-in MySQL function which will return us the id of the last inserted row.

4 Update Single Row
UPDATE statement allows you to change values in one or more columns of a single or multiple rows.
Syntax :
	UPDATE <table_name>
	SET
		col_namel = vall,
		col_name2 = val2,
	WHERE <condition>
Must use where clause with update query if you do not use it will all the records from that table. With where clause we identify which record particularly we want to update.
	UPDATE product
	SET productprice = 10,
		sellingprice = 12
	WHERE productid = 1
We can add expression instead of values
	UPDATE product
	SET productprice = 13,
		sellingprice = productprice + (productprice*0.2)
	WHERE productid = 2
4.1 How will you update values of column?

4.2 What happens if you do not use the WHERE clause?
whatever UPDATE statement you have given it is applied to the entire table
4.3 Is it possible to give expressions with the UPDATE statement instead of fixed/literal values?
yes we can use expressions

5 Updating Multiple Records (The “IN” Operator)
Where clause used to update single record, where clause with IN operator used to update multiple records
Syntax :
	UPDATE <tablename>
	SET column_name = value_name
	WHERE column_name IN (values);
UPDATE product
SET categoryid = 1,
WHERE categoryid = 10

UPDATE product
SET productprice=100,
WHERE categoryid IN (3,4)

5. Instead of OR, how will you use the IN operator?
Instead of multiple or operators we can use IN operator.
SELECT * FROM product WHERE categoryid = 1 OR categoryid = 2 OR categoryid = 3;
SELECT * FROM product WHERE categoryid IN (1, 2, 3);

1 Select Clause : retrieve data from the table. We can specify particular column names also, asterik will return all the columns.Using asterik will consume more memory so better use selected column names.
We can use select statement without from clause :
SELECT 'some value', 1, 10+10
1.1 What is the use of SELECT Clause?
SELECT clause is used to fetch/retrieve data from table or return static data or expressions
1.2 What is the meaning of (*) in SELECT * FROM tablename statement?
*(star) means you are trying to fetch ALL the columns i.e it will return all the columns in the table.Its better to specify the specific columns rather than using asterik or star in the select statement.
1.3 How do you terminate multiple SQL statements?
To terminate multiple SQL statements, you use a semicolon (;) after each statement

1 ORDER BY Clause
To sort the result of SELECT statement we use ORDER BY clause.
Syntax :
	SELECT <columns_list>
	FROM <tablename>
	ORDER BY column_name_l ASC/DESC,
			 column_name_2 ASC/DESC
1.1 What is the use of the ORDER BY clause? OR How do you sort the data while fetching it?
1.2 What is the default order of ORDER BY clause when you fetch the data?
Ascending
1.3 How will you fetch the data in descending order?
using DESC
1.4 When you give multiple columns to sort, how does it implement the sorting?
When you have more than one column, first column is the main priority(that column data is sorted first), and then the second/subsequent columns are sorted

1 WHERE Clause Introduction
To filter data we use where clause by specifying search condition for the result set that is returned by the query
	SELECT <column_list>
	FROM <table_name>
	WHERE <search_condition>
We can use logical operators like AND OR IN with search_condition.
1.1 What is the WHERE Clause?
2.WHERE Clause with equality operator
We use equal to sign to compare
2.1 What is equality comparison?
2.2 With which data types can equality operators be used ?
Any data type strings names datetime
2.3 Find records from the address table where the district name is “Ontario”.

3 WHERE Clause with comparison operators
> < >= <= != or <> used with numbers & datetime
3.1 Find records of customers whose birth date is greater than 1st JAN 2001 and then sort the data by birth date.
MySQL understand date format in 'YYYY-MM-DD' format
select * from customer where birth_date >= '2001-10-10' order by birth_date;

4 AND operator
Basically AND operator is a logical operator which combines two or more conditions/expressions and returns 1,0 or NULL. Because MySQL doesn't have any built-in boolean type, it treats 0 as FALSE and non-zero values as TRUE.
The AND operator returns 1 i.e true if all the expressions are true and it returns 0 if any of the expression fails, otherwise it returns NULL
Generally you'll use the AND operator in the WHERE clause of the SELECT, UPDATE or DELETE statements to form a condition

4.1 Select records from the film table with release_year greater than 2005 and replacement_cost greater than 20 and also the length should be greater than equals to 100.
4.2 Select records from film table where language_id equals to 1 and release_year smaller than 2000
4.3 Select records from the film table with release_year between 2005 and 2010 and sort the data by release_date in descending order.
4.4 What will the AND operator return if the condition is true & what will it return if it is false?

5 OR operator
OR operator is a logical operator which combines two or more conditions/expressions and returns 1,0 or NULL.
The OR operator returns 1 i.e true if any one of the expressions is true and it returns 0 or false if none of the expressions are true otherwise it returns NULL.
Like the AND operator, OR operator also stops evaluating the remaining parts of the expression as soon as it can determine the result i.e if the first expression returns true MySQL will stop evaluating the second expression.
IMP : AND operator has higher precedance over OR operator.
SELECT * FROM film WHERE release_year = 2000 OR release_year = 2005 AND language_id = 1 ORDER BY release_year
In this query "release_year = 2005 AND language_id = 1" is executed first & then "release_year = 2000 OR release_year = 2005" is executed as AND has higher precedance over OR.
To get correct results we need to use paranthesis
SELECT * FROM film WHERE (release_year = 2000 OR release_year = 2005) AND language_id = 1 ORDER BY release_year
IMP :Remember BODMAS rule bracket has higher priority than AND : Brackets > AND > OR

5.1 Select records from the film table where language id is 1 or 6.
5.2 Select records from the film table whose rating should be ‘NC-17’ or ‘PG-13’ and the release year should be greater than 2015 and then sort the result by rating and release_year in desc order.

6 IN Operator
The IN operator allows to determine if the values are present in the given list of values
IN operator is functionally equivalent to the multiple OR operators.Other than SELECT, UPDATE and DELETE, IN operators are also used in subqueries.
IN has higher precedence than AND and OR. Use parentheses to control or change the order of evaluation if needed.
If you want to exclude the values use NOT IN operator.

6.1 Fetch records from the film table where release year is 2000, 2005 and 2010 and also it should not include ‘PG’ and ‘G’ rating and then sort the data by release year ascending and rating in descending order.

7 BETWEEN Operator : BETWEEN-AND ... NOT BETWEEN-AND
So basically, BETWEEN operator is a logical operator that specifies if a value exists between two given values BETWEEN operator is generally used with Numeric and DateTime data types
We want to get the records that don't fall between the given range then we can add NOT prefix with BETWEEN

7.1 Fetch customers whose birth date falls between 1st Jan 2000 and 31st Dec 2001 from the customer table.

8 LIKE Operator
LIKE operator is basically used to test if a "string" contains a specified pattern or not
and to do this there is a wildcard pattern, and that is percentage sign "%"
For example : "m%" means any string starts with 'm'
When to use like operator :
Assume you want to find some records but you don't know the exact value of what you are finding
You just have some basic idea of the value E.g., You want to find records whose title is starting with "A" or ending with "A" => select * from customer where first_name LIKE 'A%'
IMP : For number or datetime data type use IN or AND operator for strings data type use LIKE operator
We can use NOT with LIKE :
select * from customer where first_name NOT LIKE 'A%'
Underscore is also used with LIKE operator : It only matches single character
select * from customer where first_name LIKE '_Y'
This will match only word with 2 characters ending with letter Y
single underscore means it matches one character, two underscores means it matches 2 characters and so on
So the percentage (% ) and underscore (_) both are used with LIKE operator.Percentage ( %) represents any number of characters, whereas underscore (_) represents a single character   
8.1 Get the records from customer table where first name contains “ON” like tony, sony etc.

9 REGEX Operator
for pattern matching use LIKE or REGEX
REGEX 'do' is same LIKE '%d%'
REGEX '^do' name must start with word 'do'
REGEX 'do$' name must end with word 'do'
REGEX 'do|lot|tin' name contains do or lot or tin word
REGEX 'do$|lot|^tin'
REGEX '[iou]e' find word with ie, oe, ue
REGEX 'e[iou]' find word with ei, eo, eu
9.1 What is the difference between LIKE and the REGEX operator?
The LIKE operator can help for pattern matching search but if we compare it with REGEX, then REGEX operator is a far advanced approach with more functionalities with various types of pattern matching.
Like operator has a very limited approach whereas Regular Expression is a vast variety of pattern matching.
9.2 Get records where the first name should start from a letter between A to F and should contain exactly four letters.
REGEX '^[a-f].{3}$'
3. Get records where the first name should not contain letter "e", "n" or "a"
NOT REGEX 'e|n|a'

10 LIMIT Operator
Basically the LIMIT clause accepts one or two arguments and the arguments must be positive number
The first argument is [offset] that is how many rows to skip (Optional).The second argument is the number of rows returned, i.e., how many rows we want in the resultset.
If wejust use the LIMIT clause with only one argument, MySQL will treat this as the number of rows to be returned.
For example In pagination we want 5 record on one page  
SELECT * from film 10, 5  // 11-15
//OR
SELECT * from film 5 OFFSET 10 // 11-15
10.1 What is offset in the LIMIT clause and how do we use it.
Offset means from where to start fetching the records from the resultset. Basically how many records do we want to skip before getting the actual data.
To use the offset, we can pass it as a first argument in the LIMIT clause with the number of rows to be returned "LIMIT 2,4" where 2 is offset and 4 is the number of rows returned.Alternatively we can use the offset keyword this way — LIMIT 4 OFFSET 2
10.2 Get the 5th highest record from the film table by its length and replacement_cost.
SELECT film_id, title, LENGTH, replacement_cost
FROM film 
ORDER BY LENGTH DESC, replacement_cost DESC LIMIT 4,1
LIMIT 4,1 means skip 4 records & get 5th record
Order of clauses : WHERE ORDER BY LIMIT

11 IS NULL Operator
is used to check if the value is NULL or not. Now, we have already learned that NULL is different from an empty string or 0.
SELECT 1 IS NULL // returns 0 means false
SELECT 'NULL' IS NULL // returns 0 means false
SELECT NULL IS NULL // returns 1 means true
SELECT * FROM address WHERE address2 = NULL;  // wrong it will not give result
SELECT * FROM address WHERE address2 IS NULL;
SELECT * FROM address WHERE address2 IS NOT NULL
11.2 Find records from the customer table where the birthdate is null.
SELECT * EROM customer WHERE birth date IS NULL;
11.3 With which data types can we use the IS NULL operator?
We can use the IS NULL operator with any data type IS NULL is going to check whether there is any value which may be a string, a number, a date etc or else it might be NULL so if it is NULL then the operator will work on that field.

1 Alias
so to give the columns or tables a meaningful or short name we can use aliases. Basically alias is just a descriptive name for table or columns. Useful when dealing with the large queries. use 'AS' keyword to give alias 
SELECT 10*10 AS square;
SELECT 10*10 square;  // AS keyword is optional
SELECT 10*10 square, CONCAT('firstname','lastname') AS `Full Name`;
We can give aliases to tables also :
select `c.first_name`, `c.last_name` from customer AS c;
1.1 How to assign aliases with spaces.
We can assign aliases with spaces by wrapping it between single ( ' ' ) double ( " " ) or back quotes (‘ ‘).

2 Introduction to Joins
In RDBMS we have multiple tables that are linked with each other through some common columns which is referred as "Foreign KEY".And because of having a relational database i.e parent child relation - the data in each table is incomplete without each other.
For example an e-commerce site has complex database. We have orders, order_details & customer_details are linked with each other using some common column like orderid linked with order_details & customerid linked with customer_details.To get complete information of orders in one go we need to query from all the tables thats where we need JOINS. 
JOIN is a method of linking data between one or more tables based on values of the common columns between the tables.
Syntax :
	SELECT * FROM <table_name>
	JOIN <tabIe_name> ON <Condition>
2.1 What is a join command and when can we use join?
JOIN Command is used to join or we can say combine data of two or more tables in a single resultset.We can use JOINS when tables have at least one column in common between them

STEPS TO CREATE FOREIGN KEY :
1. Ensure both tables exist : Check if the parent table (where the primary key resides) and the child table (where the foreign key will be added) exists.
2. Create the parent table with primary key:
	CREATE TABLE address (
		addressid INT PRIMARY KEY,  -- The primary key
		street VARCHAR(255),
		city VARCHAR(100),
		country VARCHAR(100)
	);
3.Create the child table with the foreign key :
	CREATE TABLE customer (
		customerid INT PRIMARY KEY,
		name VARCHAR(100),
		addressid INT,  -- Foreign key column
		CONSTRAINT fk_address FOREIGN KEY (addressid) REFERENCES address(addressid)
	);
4. Optional - Add a foreign key to an existing table :
	ALTER TABLE customer
	ADD CONSTRAINT fk_address
	FOREIGN KEY (addressid) REFERENCES address(addressid);
5. Check data types and compatibility

IMP : A table can have multiple foreign keys. Each foreign key references the primary (or unique) key of another table, establishing relationships with multiple parent tables.

COMPOSITE KEY : A composite key is a primary key made up of two or more columns in a table. It is used when a single column cannot uniquely identify each record in the table, but a combination of columns can.
	CREATE TABLE order_items (
		orderid INT NOT NULL,
		productid INT NOT NULL,
		quantity INT,
		PRIMARY KEY (orderid, productid)  -- Composite key ensures uniqueness
	);
All columns that are part of the composite key should be NOT NULL & dont have AUTO_INCREMENT on them.
Composite keys may impact performance when used in indexes or queries, commonly used in junction (bridge) tables that represent many-to-many relationships between two tables.

Database Schema Modification and Foreign Key Management :
When to delete foreign key :
	1.Changing Data Types
	2.Changing Nullability : NOT NULL to NULL (or vice versa)
	3.Renaming Columns
	4.Changing foreign key reference
When to not delete foreign key :
	1.Updating Records
	2.Adding New Foreign Keys

Task : Changing Nullability :
	-- Step 1: Check data types
	DESC address; 
	DESC customer; 

	-- Step 2: Drop the existing foreign key constraint
	SHOW CREATE TABLE customer; 
	ALTER TABLE customer DROP FOREIGN KEY fk_customer_address; 

	-- Step 3: Modify address_id in customer table
	ALTER TABLE customer MODIFY COLUMN address_id SMALLINT UNSIGNED NULL; 

	-- Step 4: Re-add the foreign key constraint
	ALTER TABLE customer ADD CONSTRAINT fk_customer_address 
	FOREIGN KEY (address_id) 
	REFERENCES address(address_id) 
	ON DELETE RESTRICT 
	ON UPDATE CASCADE;

	-- Step 5: Update address_id to NULL for customer_id = 1
	UPDATE customer SET address_id = NULL WHERE customer_id = 1; 
=================================================================================================
                                  JOINS
=================================================================================================
Aliases :
To give columns or tables a meaningful short name we use aliases. We use AS keyword to give alias to table or column. AS keyword is optional we can give alias to table or column without AS keyword.
To give alias with spaces use backticks
select 10*10 Multiplication, CONCAT('fname', '', 'lname') AS `Full Name`;
SELECT c.`first_name`, c.`last_name` FROM customer AS c;
Aliases mostly used with JOINS
We can assign aliases with spaces by wrapping alias between single (' ') double(" ") or back quotes (``) 

JOINS : As we know in Relational Database management systems we have parent child relationship between the tables & multiple tables are linked to one another using foreign key & to query data from multiple tables we use JOINS.
For example, in our e-commerce database, if we want to retrieve information about a single order in one query, we need to pull data from multiple tables, such as customer and product.
IMP :"A JOIN allows you to retrieve data from multiple tables by using the columns they have in common".
SYNTAX : SELECT * FROM <table_name> JOIN <table_name> ON <condition>
JOIN Command is used to join or we can say combine data of two or more tables in a single resultset.We can use JOINS when tables have at least one column in common between them

IMP : NULL represents a value that is unknown, undefined, or missing. It indicates the absence of a value rather than an empty string or a zero.NULL can be assigned to any data type, including strings, numbers, and dates.

3 Inner Join
INNER JOIN compares each row from table one with every row in table two based on the condition provided. It means if both the tables have the row with common values provided in the JOIN condition, the INNER JOIN will create a new row from both the tables and return it in the resultset and "if any row value that is not present in the second table will be ignored".
SHOW CREATE TABLE customer;
copy paste column of create table > CONSTRAINTS
customer table has reference of addressid from address table & customer table addressid is referred to addressid in the address table.
The foreign key is created on the child table, which references the primary key of the parent table.We must have common column in both the tables. In this case foreign key created on customer table & referenced to addressid column of address table.
IMP: When performing a join between two tables, the child table is joined with the parent table using the foreign key from the child table and the primary key from the parent table.
INNER JOIN checks if the value of the columns provided in the condition are the same or not.

SELECT c.`customer_id`, c.`first_name`, c.`last_name`, a.`address`, a.`postal_code`, c.`address_id` AS addressincustomer, 
a.`address_id` AS idinaddress
FROM customer AS c
INNER JOIN address AS a ON c.`address_id` = a.`address_id`
We see addressInCustomer & idinaddress have same values which are common.

UPDATE customer SET address_id = NULL WHERE customer_id = 1; 
-- this will set address_id field of customer table to NULL where customer_id is 1
-- if this command show error refer above scenario of Changing Nullability
-- if this command runs successfully, run the above JOIN query again and we see we dont have data for customer_id 1 as we have set it to NULL.

SELECT c.`customer_id`, c.`first_name`, c.`last_name`, a.`address`, a.`postal_code`, c.`address_id` AS addressincustomer, 
a.`address_id` AS idinaddress
FROM customer AS c
INNER JOIN address AS a ON c.`address_id` = a.`address_id`

SELECT c.`customer_id`, c.`first_name`, c.`last_name`, a.`address`, a.`postal_code`, c.`address_id` AS addressInCustomer, 
a.`address_id` AS idInAddress
FROM customer AS c
INNER JOIN address AS a ON c.`address_id` = a.`address_id` AND a.`address_id` BETWEEN 10 AND 20;

3.1 Get the records from the customer table with address and city name and also the address2 should be null.
Ans : first check what data we want then find the table associated with that data
We want address, city name & address2 as NULL. address & address2 is in address table, city name in city table.
SELECT c.`customer_id`, c.`first_name`, c.`last_name`, a.`address`, a.`address2`
FROM customer AS c
INNER JOIN address AS a 
	ON c.`address_id` = a.`address_id` 
	AND a.`address2` IS NULL;
INNER JOIN city AS ci
	ON ci.`city_id` = a.`city_id`
3.2 What happens if I do not use the INNER keyword with JOIN?
INNER is the default JOIN. If you do not specify INNER or any keyword & just give the JOIN keyword it means it's going to perform the INNER JOIN.
3.3 Which is the default JOIN if you just give the JOIN keyword?
inner join is the default join

STEPS TO JOIN TWO TABLES :
We create foreign_key on child table & reference that to the primary key of parent table.The foreign key column name must be same as primary key column name.
1.SHOW CREATE TABLE customer;  -- copy cell & paste it Whatever written after REFERENCES is parent table & its primary key, child table contains its own primary key & foreign_key
On the basis of this identify parent & child table. 
2.Syntax : 
SELECT * FROM <childTable> AS <childTable_alias> JOIN <parentTable> AS <parentTable_alias>
ON <childTable_alias>.<common_column_name> = <parentTable_alias>.<common_column_name>;

IMP :
INNER JOIN
An INNER JOIN returns only the records that have matching values in both tables. If there are no matches, those records are excluded from the result. This join focuses on the intersection of the two tables.
LEFT JOIN
A LEFT JOIN retrieves all records from the left table and the matching records from the right table. If there are no matches in the right table, the result will include NULL values for the right table's columns. This means you get all the common records along with all records from the left table, even if there are no corresponding entries in the right table.
RIGHT JOIN
A RIGHT JOIN retrieves all records from the right table and the matching records from the left table. If there are no matches in the left table, the result will include NULL values for the left table's columns. This means you get all the records from the right table along with any matching records from the left table.
FULL JOIN
A FULL JOIN returns all records from both tables, combining the results of both left and right joins. If there are matches, the records will be combined; if there are no matches, the result will include NULL values for the columns of the table that does not have a match. This means you get all records from both tables, regardless of whether they have corresponding matches in the other table.
SELF JOIN
When you have hierachical data i.e tree structure you can use SELF JOIN on that table.
A SELF JOIN is a type of join where a table is joined with itself. This allows you to compare rows within the same table. Typically, it involves using table aliases to differentiate between the two instances of the table. The result includes records that match based on specified conditions, allowing you to analyze relationships within the same table.
When we have large queries with multiple JOINS with multiple tables, it will be hard to visualize the query if the master table sequence is not maintained.So it's better to avoid RIGHT JOIN and instead we can use the LEFT JOIN and this also is the best practice
CROSS JOIN
When you want records from the two tables without any condition.
A CROSS JOIN returns the Cartesian product of two tables, meaning it pairs each row from the first table with every row in the second table. The result set will contain all possible combinations of rows from both tables, regardless of whether they have any columns in common. This join can produce a large number of rows, especially if both tables have many entries, as there is no filtering or matching condition.


4 LEFT JOIN
The table mentioned first is the left table & the table mentioned second is the right table.
It returns all the common records between the tables as well as all the records from the left table as well. The values that are not in right table are null
SELECT * FROM <table1>
LEFT JOIN <table2> ON <condition>
LEFT JOIN <table3> ON <condition>
LEFT JOIN <table4> ON <condition>

Table 1 is LEFT table for Table 2,3 and 4
Table 2 is LEFT table for Table 3 and 4
TabIe 3 is LEFT table for Table 4

4.1 What is the difference between INNER JOIN and LEFT JOIN?
INNER JOIN returns the records which have their occurrence in all the tables that are joined, while LEFT JOIN returns all the records from the LEFT table - even if no matching records
are found in the right table.

5 RIGHT JOIN

6 SELF JOIN

6.1 How SELF JOIN is different from LEFT, RIGHT OR INNER JOIN.
The difference is, in LEFT RIGHT OR INNER JOIN, we join two different tables but in SELF JOIN we are joining only one table i.e the same table, rest all other things remain the same.
6.2 Write a query to get all the records from the product category table with or without parent category.
SELECT p.id, p.categoryname, p1.categoryname parent_category
FROM productcategory p
JOIN productcategory pl
ON p.‘parentid‘ = p1.‘id‘

IMP : it's not necessary for the columns used in a JOIN to have the same name; however, they must contain compatible data types and represent the same kind of information for the join to be meaningful. You can specify different column names in the JOIN condition.
SELECT * FROM table1 AS t1
JOIN table2 AS t2 ON t1.column_a = t2.column_b;

While joining two tables :
1.Check Data Types :
SHOW COLUMNS FROM table1;
SHOW COLUMNS FROM table2;
OR
SELECT COLUMN_NAME, DATA_TYPE 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'table1';
SELECT COLUMN_NAME, DATA_TYPE 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'table2';
2.Compare Data Types :
Integer types (e.g., INT, SMALLINT)
String types (e.g., VARCHAR, CHAR)
Date types (e.g., DATE, DATETIME)
3.Check Sample Data: 
SELECT column_a FROM table1 LIMIT 10;
SELECT column_b FROM table2 LIMIT 10;
4.Test join :
SELECT *
FROM table1 AS t1
JOIN table2 AS t2
ON t1.column_a = t2.column_b
LIMIT 10;

7 CROSS JOIN
When you want records from the two tables without any condition.
SELECT * FROM products;
SELECT * FROM productcategory;
SELECT productname, categoryname FROM products CROSS JOIN productcategory;
// OR
SELECT productname, categoryname FROM products, productcategory;

CROSS JOIN productofitegory
7.1 Find all the films released in the year 2006 and the length of the film should be greater than 50 and smaller than 65 with the combination of all the languages first using explicit and then implicit join.
explicitly : 
SELECT title, release_year, `length`, NAME AS 'language'
FROM film 
CROSS JOIN `language`
WHERE release_year = 2006 AND LENGTH BETWEEN 50 AND 65;
implicitly :
SELECT title, release_year, `length`, NAME AS 'language'
FROM film, `language`
WHERE release_year = 2006 AND LENGTH BETWEEN 50 AND 65;
CROSS JOIN will combine tables - each row from both the tables i.e each row from table 1 will have each row from table 2

1 GROUP BY
Basically the GROUP BY clause is used to group the rows that have the same set of values and return it in a summary row.
For example The total number of customers in each country OR Average salary of a particular department OR Average salary of all the employees.
Generally the GROUP BY clause is often used with aggregate functions like :- COUNT() MAX() MIN() to group the result set by one or more columns.
When using GROUP BY, we should use only the columns that is needed in the SELECT clause.

SELECT release_year, COUNT(*) 'Total Film Released'
FROM film 
GROUP BY release_year
ORDER BY release_year;
1.1 Get Total No of films by its length and release_year
SELECT release_year, LENGTH, COUNT(*) 'Total Film Released'
FROM film 
GROUP BY release_year, LENGTH
ORDER BY release_year;
To cross check
SELECT * FROM film WHERE release_year = 2006 AND LENGTH = 49;

1.2 What is the purpose of GROUP BY clause?
// OR
1.3 How do you get the aggregate or summary result within a query?
GROUP BY clause gives you summary on a specific field You want to find total salary of all employees OR Find the sale categorized by product

2 Aggregate functions (COUNT(), SUM(), AVG(), MIN(), MAX())
In MySQL we have different types of inbuilt functions to do certain operations which are grouped into aggregate, datetime or strng functions. We might have already used some of the functions in our previous lectures like now(), count(), year() etc.
In general, aggregate functions are used to perform calculations on multiple values and return the result in a single value like:- 
	the average of all values
	the sum of all values
	maximum or minimum value among
	certain group of values
Aggregate functions are often used with GROUP BY clause, to calculate some aggregate values for each group.
COUNT() function
Basically the COUNT() function returns the number of values in the set as per the condition provided.We can use COUNT() to find the total number of records in the table.
select count(*) from film where release_year = 2006;
COUNT() can work with both numeric and non—numeric data types. So instead of * we can provide any column name like film_id or title but it is good practise to always write primary key inside the count function.
select COUNT(film_id) from film where release_year = 2006;

SUM() function
This function returns the sum of values in the set. The function ignores NULL values. We can either provide column or expression in SUM() function
select COUNT(film_id), SUM(LENGTH) from film where release_year = 2006;

AVG() function
AVG() calculates the average value in a set of values that are not null.
select COUNT(film_id), SUM(LENGTH), AVG(LENGTH) from film where release_year = 2006;

MIN() & MAX() function
We have MIN() function to find minimum and MAX() function to find maximum.
select COUNT(film_id), SUM(LENGTH), AVG(LENGTH), MIN(LENGTH), MAX(LENGTH) from film where release_year = 2006;

select language_id, COUNT(film_id), SUM(LENGTH), AVG(LENGTH), MIN(LENGTH), MAX(LENGTH) from film where release_year = 2006 GROUP BY language_id;

2.1 Get min, max, average and total number of films in all the years and languages.
select release_year, language_id, COUNT(film_id) 'Total Film', AVG(LENGTH) 'Average', MIN(LENGTH) 'Minimum', MAX(LENGTH) 'Maximum' from film 

// above query does not give clear idea about release_year & language so we add group by
select release_year, language_id, COUNT(film_id) 'Total Film', AVG(LENGTH) 'Average', MIN(LENGTH) 'Minimum', MAX(LENGTH) 'Maximum' FROM film GROUP BY release_year, language_id ORDER BY release_year, language_id

// But language_id is not clear in results so we use inner join on language table
SELECT 
    release_year, 
    l.name AS 'Language', 
    COUNT(film_id) AS 'Total Film', 
    AVG(length) AS 'Average', 
    MIN(length) AS 'Minimum', 
    MAX(length) AS 'Maximum' 
FROM 
    film f 
JOIN 
    language l ON f.language_id = l.language_id 
GROUP BY 
    release_year, f.language_id 
ORDER BY 
    release_year, f.language_id;

// In the year 2006 in the english language what were the name of the films released, for this // we have to use GROUP_CONCAT() function which concats the row values into one single column // which is separated by comma(,) 
SELECT 
    release_year, 
    l.name AS 'Language', 
    COUNT(film_id) AS 'Total Film', 
    AVG(length) AS 'Average', 
    MIN(length) AS 'Minimum', 
    MAX(length) AS 'Maximum',
	GROUP_CONCAT(f.title) 'Films'
FROM 
    film f 
JOIN 
    language l ON f.language_id = l.language_id 
GROUP BY 
    release_year, f.language_id 
ORDER BY 
    release_year, f.language_id;
// IN results we see for each language how many films are released in the year 2006 as per language

2.2 How do you get the average,minimum or maximum value?
Aggregate functions AVG( ), MIN( ), MAX().You can put a GROUP BY clause if you want the average value categorized by group of values
2.3 Explain the purpose of GROUP_CONCAT( ) function.
It helps us to get individual values for a group of results. It basically concats the row values into one single column // which is separated by comma(,) 

2 HAVING CLAUSE
HAVING clause is actually used to filter the result of grouped data. HAVING clause acts as a WHERE clause for GROUP BY clause results.
for example : If you want to find in which year and in which language more than 10 films were released
SELECT release_year, language_id, COUNT(film_id) AS total_films
FROM film
GROUP BY release_year, language_id
WHERE total_films > 10
ORDER BY release_year, language_id;

// This shows error WHERE condition should come before GROUP BY clause
SELECT release_year, language_id, COUNT(film_id) AS total_films
FROM film
GROUP BY release_year, language_id
HAVING total_films > 10
ORDER BY release_year, language_id;

// We can add multiple conditions in having clause
SELECT release_year, language_id, COUNT(film_id) AS total_films
FROM film
GROUP BY release_year, language_id
HAVING total_films > 10 AND release_year = 2006
ORDER BY release_year, language_id;

2.1 What is the use of HAVING clause?
OR
Can you use the WHERE condition with GROUP BY data ?
You cannot use the WHERE condition with the GROUP BY data because WHERE is for individual records and not for group of data. Having clause is used to filter the grouped data.

2.2 Can we use HAVING clause without group by clause.
Of Course yes, if we use HAVING clause without GROUP BY, it will behave like WHERE clause
SELECT * FROM film HAVING release_year = 2005; is same as
SELECT * FROM film WHERE release_year = 2005;
But this is not the recommended way

1 Subquery
A subquery is one that is nested within another query i.e a query inside a query.
We can nest another subquery inside the subquery. Also, subquery can be used anywhere and must be enclosed in parenthesis().
For example Assume that you want to find all the addresses from the United States
SELECT * FROM country WHERE country LIKE '%united%';
SELECT * FROM city WHERE country_id = 103;
SELECT * FROM address 
WHERE city_id 
IN (SELECT city_id FROM city WHERE country_id = 103)

In an inner query, i.e subquery, we have to provide a single column name to which we want to compare values or else MySQL engine will not be able to recognize from which value to compare

SELECT *
FROM address
WHERE city_id IN (
    SELECT city_id
    FROM city
    WHERE country_id = (
        SELECT country_id
        FROM country
        WHERE country = 'UNITED STATES'
    )
);
IMP : Subquery should return value according to the operator, so using IN or NOT IN operator a subquery should return single value or list of values where as for all other operators it should return a single value only
IN / NOT IN: Subquery should return one or multiple values (a single-column list).
= / >, <, etc.: Subquery must return a single value only.
Standalone subquery :
Correlated subquery : Subquery is dependent on the outer query
For example If we want to find if the length of the film is greater than the avg length of the films released in that year,then this is how we do it using co-related query.
SELECT * FROM film f WHERE LENGTH > ( SELECT AVG(LENGTH) FROM film WHERE release_year = f.`release_year`)
// Here inner query can not be executed indepedently as it has the reference of the outer query column. So without the outer query inner query will be of no meaning.
// We can use subquery as a column as well check below :
SELECT film_id, title, release_year, length, (SELECT AVG(LENGTH) FROM film WHERE release_year = f.`release_year`) AS 'average' FROM film f WHERE LENGTH > ( SELECT AVG(LENGTH) FROM film WHERE release_year = f.`release_year`)
We can even use the subquery in FROM clause as well, and when we use subquery in FROM clause it is known as a "derived table"
select * from (
SELECT film_id, title, release_year, length, (SELECT AVG(LENGTH) FROM film WHERE release_year = f.`release_year`) AS 'average' FROM film f WHERE LENGTH > ( SELECT AVG(LENGTH) FROM film WHERE release_year = f.`release_year`)
) a 
// Above query is derived table coz we have put subquery in FROM clause & made alias for it 'a'
Though subqueries are easier to write and understand, it is always advisable to use JOINS instead of subqueries, as subqueries might have some performance issues in the long run when having larger tables and records.
Mostly you will be using the subqueries when the condition which you give after the WHERE clause is dependent on some other value.
1.1 What is a subquery?
Subquery or Inner query or Nested query is a query inside another query. A subquery is usually used in the WHERE clause of the SQL statement but also can be used anywhere we can think of even in FROM clause.
1.2 What is a correlated subquery?
When both the inner query and the outer query are interdependent they are known as correlated subqueries
For every row processed by the inner query, the outer query is processed as well
In correlated subquery, the inner query depends on the outer query before it can be processed
1.3 What are the advantages and disadvantages of using a subquery?
Advantages :
Subqueries allow us to use the result of inner query in the outer query.
Subqueries can simplify coding and improve maintainability and also easier to understand instead of complex JOINS
Disadvantages :
The query optimization with larger results, MySQL optimizer might have to perform additional processes,
so in some cases subqueries can be less efficient than using JOINS


1 UNION Operator
Basically, the UNION operator is used to combine two or more resultsets of queries into one single resultset Only the condition is that - all the queries that we want to combine must have the same number of columns
By default, UNION operator removes the duplicates from the resultset.
For example
SELECT 1, 2
UNION
SELECT 2, 3
UNION
SELECT 1, 2
// This will show resultset of two rows with 1,2 & 2,3 coz UNION operator removes duplicates
// To include duplicate results we use UNION ALL
SELECT 1, 2
UNION ALL
SELECT 2, 3
UNION ALL
SELECT 1, 2
// This will show all the 3 rows with 1,2	2,3	  1,2
1.1 Get names from staff and customer tables and differentiate it with some labels.
SELECT first_name, last_name FROM customer 
UNION 
SELECT first_name, last_name FROM staff

SELECT first_name, email, 'Customer' AS 'Type' FROM customer
UNION
SELECT first_name, la3t_name, 'Staff' FROM staff
1.2 What is the difference between UNION and UNION ALL.
UNION operator removes the duplicates from the result whereas UNION ALL includes the duplicate values as well in the resultset
1.3 What is the basic rule of the UNION?
The basic rule to perform UNION is that, number of columns must be same in all the queries. Column names can be different but number of columns must be same.

Problem Statement:
You have a product, product stores, and orders table. There is a relation between product and orders table and store and orders table. There is no relation between product and store table. Basically, you have to assume that the product is sold in all the stores, so there is no need to create a relation between them.
Assignment: Find the total sales amount and Total quantity sold in all the stores for all the products.
Ans : 
SELECT ap.product_name, aps.store_name, ao.* FROM assignment_orders ao
JOIN assignment_products ap ON ao.product_id = ap.id JOIN 
    assignment_product_store aps ON ao.product_store_id = aps.id1;

SELECT ap.product_name, aps.store_name SUM(quantity) total_quantity, SUM(quantity * price) total_sales FROM assignment_orders ao JOIN assignment_products ap ON ao.product_id = ap.id JOIN assignment_product_store aps ON ao.product_store_id = aps.id1 GROUP BY ao.product_id, ao.product_store_id;
// Here we are not able to find which store is not having any sale for the product. We can not use LEFT JOIN as we dont have any relation between product & store table. So we need to use CROSS JOIN. 
SELECT store_name, product_name FROM assignment_product_store a
CROSS JOIN assignment products b ORDER BY a.‘id‘;
// 1st query returns combination of stores & products & 2nd query returns total sales & quantity
// We want to merge these queries, after cross join query we use another join & use 1st query
SELECT store_name, product_name FROM assignment_product_store a CROSS JOIN assignment products b JOIN 
( SELECT ap.product_name, aps.store_name SUM(quantity) total_quantity, SUM(quantity * price) total_sales FROM assignment_orders ao JOIN assignment_products ap ON ao.product_id = ap.id JOIN assignment_product_store aps ON ao.product_store_id = aps.id1 GROUP BY ao.product_id, ao.product_store_id) 
Final query :
SELECT 
    a.store_name, 
    b.product_name, 
    c.total_quantity, 
    c.total_sales
FROM 
    assignment_product_store a
CROSS JOIN 
    assignment_products b
LEFT JOIN (
    SELECT 
        product_name, 
        store_name,
        SUM(quantity) AS total_quantity,
        SUM(quantity * price) AS total_sales
    FROM 
        assignment_orders ao
    JOIN 
        assignment_products ap ON ao.product_id = ap.id
    JOIN 
        assignment_product_store aps ON ao.product_store_id = aps.id
    GROUP BY 
        ao.product_id, 
        ao.product_store_id
) c ON c.product_store_id = a.id AND c.product_id = b.id
ORDER BY 
    a.id;

1 Stored Procedures Introduction
Stored procedures are functions which can be stored in the server. It is a method to overcome repetitive tasks and above that you can implement the business logic into it. You can write multiple queries in it
So basically, at the back when SP is executed for the first time: MySQL compiles the code of SP and stores it in cache memory and then executes the SP And if this SP is invoked again: MySQL executes the SP from cache memory instead of recompiling it
MySQL can also have parameters which can be passed and the results can be sent back accordingly.
One SP can also call a different SP in it
PROs of using SP :
1.Database Security : With the use of SP's we can grant privileges to SP's instead of directly giving any privileges to tables. So in a way SP gives the ability to manipulate data instead of tables.
For eg. you have a customer table with no access and you just have access to SP which gets the list of customers So in that case you will not be able to add or update or delete any records in customer table, only you will be able to view the list of customer.
2.Network Traffic : SP's network traffic is reduced because instead of sending multiple queries to the server you just have to send the name of SP with parameters
3.Reusable code : SP reduces the effort to write the same logic multiple places, instead we can have it at one place and use it at multiple places.
CONs of using SP :
1.Increases Load on Server : As most of the operations are done on the server side, it increases the memory and CPU usage of the server
2.Debugging : Unfortunately, there is no way to debug an SP in MySQL like we have in Oracle or MSSQL
3.Maintenance : It might require some specialized skills to maintain the SP's

1.1 What is a Stored Procedure?
The group of SQL statements that are stored in the server database is known as a stored procedure
1.2 What are the advantages of Stored Procedure?
Advantages of Stored Procedure:
1) The logic applied in this application is centralized and is stored in the application
2) It can also be used as a security mechanism
3) They are used for reducing network traffic

2 Listing Stored Procedures
SHOW PROCEDURE STATUS;
SHOW PROCEDURE STATUS WHERE db='sakila';
SHOW PROCEDURE STATUS LIKE '%not_in%';
SELECT * FROM information_schema.`ROUTINES` WHERE routine_type = 'PROCEDURE' AND routine_schema = 'sakila'

3 Creating Stored Procedure
Syntax :
	DELIMITER $$
	CREATE PROCEDURE procedure_name (...params)
	BEGIN
	// SQL STATEMENT;
	END $$
	DELIMITER ;
DELIMITER $$ : SP can consist of multiple SQL statements or business logics, so it is obvious that we might have multiple semicolons in it to break the statement. 
So to tell MySQL engine to compile the whole SP as a single statement, first we need to change the default delimiter to something else like:- $$ or \\ or : 
By default delimiter is $$
CREATE PROCEDURE procedure_name (...params) : create sp with the given name & parameters
BEGIN & END $$ : This is place where we will write the actual query or business logic of the SP between BEGIN and END. END $$ tells MySQL that the SP ends here
DELIMITER; : change the delimiter back to its original value

For example :
Let's create one SP which gets the list of customers with complete address details
DELIMITER $$
CREATE PROCEDURE getCustomerList()
BEGIN

SELECT customer_id, CONCAT(first_name,' ',last_name) fullname, a.address, a.postal_code, a.phone, a.district, ci.city, ct.country
FROM customer c
LEFT JOIN address a ON a.`address_id` = c.`address_id`
LEFT JOIN city ci ON ci.`city_id`= a.`city_id`
LEFT JOIN country ct ON ct.`country_id`=ci.`country_id`;

END $$
DELIMITER;
// To call an SP use CALL statement
CALL getCustomerList();

3.1 Create an SP to get the list of dates with day names for the current month (i.e., current month’s calendar).
SELECT MAKEDATE(YEAR(NOW()), 1)   // get first day of the year

DELIMITER //

CREATE PROCEDURE GetCurrentMonthCalendar()
BEGIN
    SELECT 
        days, 
        MAKEDATE(YEAR(NOW()), 1) + INTERVAL (MONTH(NOW()) - 1) MONTH + INTERVAL days DAY AS new_date
    FROM (
        SELECT 
            first_digit * 10 + second_digit AS days
        FROM 
            (SELECT 0 AS first_digit UNION SELECT 1 UNION SELECT 2 UNION SELECT 3) AS a
        CROSS JOIN 
            (SELECT 0 AS second_digit UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION 
             SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) AS b
        ORDER BY 
            first_digit, second_digit
    ) AS c
    WHERE 
        MONTH(MAKEDATE(YEAR(NOW()), 1) + INTERVAL (MONTH(NOW()) - 1) MONTH + INTERVAL days DAY) = MONTH(NOW());
END //

DELIMITER ;

4 Modifying Stored Procedure
Modifying SP5 is a very common requirement in an enterprise level application. Unfortunately, we don't have any direct method to alter an SP. We have to drop the existing SP and recreate it.
Do it by using IDE i.e GUI of SQLYog or MYSQL workbench > right click on sp name > Alter Store Procedure > delete DEFINER section > make changes in sp & rerun it

5 Parameters in SP
Most of the time you will find Stored Procedures with parameters, that's because having a Stored procedure with Parameters makes it more useful and reusable. We have two types of parameters which can be used in SPs, i.e IN parameter OUT parameter
1.IN Parameters : Basically IN parameters are static values, which - when defined in an SP, it has to be passed during an SP call.These parameters can be further used in the body of SP to manipulate the query or business logic.
2.
5.1 Get the calendar for the month and year for which the date is passed and also get the name of the day for the given date.

6 Variables in SP

6.1 What are variables?

6.2 How do we declare a variable?

7 IF ELSE Statement in SP

8 Stored Function

9 MySQL Indexing

10 MySQL Transactions - COMMIT and ROLLBACK

10.1 Create an SP to insert data into ordermaster and orderdetails using transactions.


==========================================================================================================================
Mongo DB
==========================================================================================================================
1 Installing MongoDB on Windows

1.1 What is the difference between mongod and mongo files?
So both are executable files, but MongoDB basically helps you run the server, whereas MongoDB actually runs the shell where you can type the commands. That is the basic difference between MongoDB and MongoDB. One is used to run the server, while the other is used to run the shell. We will explain what it is as we proceed further.
1.2 How will you change the database path?
if you want to change the location where MongoDB stores the databases, you can use the --dbpath option when starting the MongoDB server to specify the folder where MongoDB will create the databases.

2 Creating Database
1. Compare the terminologies of RDBMS and the NoSQL MongoDB
# Tables > Collections : db.collectionName 
  Rows > Documents	   : {}
  Columns > Fields	   : key-value key is column
  RowData 			   : key-value value is 
  Collections are equivalent to tables in relational databases.
Documents are equivalent to rows.
Fields are equivalent to columns.
The values inside documents are key-value pairs, where the key is the field name (like a column) and the value is the actual data (like a row's data).
MySQL commands are case insensitive while mongodb commands are case sensitive

3 Create Collection
To create collections in mongodb we have db.createColletion command which has 2 parameters, first parameter is the name of collection & other is optional parameters like capped, size & max which can be used to define the collection property. 
To check which database is currently in use : db + Enter. Test is the default database which is used if we don't select any database. To select database : show dbs > use dbName > show collections 
Alternatively, if we create any new document, MongoDB internally creates a new collection, if the collection does not exist. For example db.dummy.insert(name: 'vbn').
But by creating collection this way we can not take advantage of optional parameters that we can have while using createColletion command.
For example : db.createColletion('testCollection', {capped:true, size:2, max:2 })
When we use capped option to true then it will create fixed size collection. 
Size parameter defines how much storage particular collection is going to use. The value of storage is specified in the bytes. Once the collection is reached to its maximum size, it will remove the older document to make space for the new document.
Max property defines total number of documents particular collection can hold.
Generally capped collections can be useful for logs only, or if we have any specific use case to use it.
	db.testCollection.insert({name:'Doc1'})
	db.testCollection.insert({name:'Doc2'})
	db.testCollection.insert({name:'Doc3'})
	db.testCollection.find()  # we see only Doc2 & Doc3 as we have set max property is 2 it will delete first document Doc1 automatically
	
1. What is the purpose of createCollection? OR 2. How can you create a collection?
So basically we have the db object which has the createCollection method in which we first specify the name of the collection & option parameters like capped, max & size.

4 MongoDB Binary JSON(BSON)
Data stored in the mongodb is in BSON format. So the data that looks like JSON is not JSON it is BSON. 
BSON is a superset of JSON which includes more advanced data types that are not present in JSON
So mongodb stores the collection in binary format which is called as BSON.

BSON data types :
1.String: Represents text data (e.g., "name": "John").
2.Integer: Represents a 32-bit integer (e.g., "age": 25).
3.Long: Represents a 64-bit integer for large values (e.g., "population": 9000000000).
4.Double: Represents a floating-point number (e.g., "price": 19.99).
5.Boolean: Represents a true or false value (e.g., "isActive": true).
6.Null: Represents a null value (e.g., "middleName": null).
7.Array: Represents an ordered list of values (e.g., "tags": ["tech", "education"]).
Object: Represents a nested document with key-value pairs (e.g., "address": { "street": "Main St" }).
8.ObjectId: Represents a unique identifier, typically for the _id field (e.g., "userId": ObjectId("507f1f77bcf86cd799439011")).
9.Date: Represents a specific date and time (e.g., "createdAt": ISODate("2024-11-29T00:00:00Z")).
10.Timestamp: Represents a timestamp, often used for replication (e.g., "timestamp": Timestamp(1609459200, 1)).
11.Binary Data: Represents data in binary format (e.g., "imageData": BinData(0, "dGVzdCBkYXRh")).
12.Regular Expression (Regex): Represents a regex pattern for string matching (e.g., "pattern": /abc/i).
13.DBRef: Represents a reference to another document in a different collection (e.g., "author": DBRef("users", ObjectId("507f1f77bcf86cd799439011"))).
14.JavaScript: Represents JavaScript code (e.g., "code": new Code("function() { return 1; }")).
15.MinKey: Represents a value lower than any other BSON type (e.g., {"key": MinKey()}).
16.MaxKey: Represents a value higher than any other BSON type (e.g., {"key": MaxKey()}).

5 Inserting Single document
MongoDB has 2 different kinds of documents :
1.Relational or Referenced Document
2.Embedded Document
In Relational or Referenced documents we have parent & child as seperate documents & reference of parent document is stored in the child document while in Embedded documents child document is embedded within the parent document its like nested document, document inside document.
To scale up any application its important to decide when to embed documents and when to use references.When there is one-to-few relationship between two data sets & read-heavy workload we chose embedding & when there is one-to-many or many-to-many relationship between two data sets & write-heavy workload or the data is frequently changing then we use referencing. While using embedding we need to consider document size limit of mongodb which is 16mb.
Each mongodb document has id field which is unique hexadecimal value for each document its like primary key in relational databases.

5.1 What is an embedded document?
An embedded document is one where we have the parent and child values in the same document. Using the embedded document, you can scale up the application without any hurdles

6 Inserting Multiple/Bulk document
6.1 How can you insert multiple/bulk records?
To insert multiple/bulk records in the database we use insertMany() method & pass array of objects in it, where each object inside an array represent a single document

7 Loading Sample Datasets

8 Updating Document

8.1 What is the difference between updateOne and updateMany?

9 Querying Document
MONGODB - MySQL :
1.
db.movies.find({title: 'One Week'})			
SELECT * FROM movies WHERE title = 'One Week'
2.
db.movies.find({title: 'One Week'}, {cast: 1, _id:0})
SELECT cast FROM movies WHERE title = 'One Week'

9.1 How to exclude “_id” fields from the document?
we have to use find command with second parameter as _id: 0 where 0 means exclude & 1 means include.
db.movies.findOne()  ## this returns first record in database
find({},{}) : first {} is filter or WHERE clause & second {} is which columns to display
db.movies.find({'imdb.rating': {$gt: 4}}, {title: 1, _id: 0, 'imdb.rating': 1})
SELECT title, imdb_rating from movies WHERE imdb_rating > 4

LIKE Operator in mysql same as regex in mongodb
find all movies whose title contains the word "Week" (like SQL WHERE title LIKE '%Week%').
	db.movies.find({ title: { $regex: /Week/ } })
case-insensitive search (like SQL LIKE '%week%')
	db.movies.find({ title: { $regex: /week/i } })
title starts with "One" (like SQL WHERE title LIKE 'One%')
	db.movies.find({ title: { $regex: /^One/ } })
title ends with "Week" (like SQL WHERE title LIKE '%Week')
	db.movies.find({ title: { $regex: /Week$/ } })
find titles containing either "One" or "Two"
	db.movies.find({ title: { $regex: /One|Two/ } })



9.2 Write a query to display the fields name and email from the comments collection.

10 Querying document with comparison operators

10.1 Write a Query to find “critic rating” from movies collection using all the operators.

11 Querying document using IN and NOT IN

11.1 Write a query to fetch documents where directors can be “Buster Keaton” or “Joe May” or “King Vidor”.

12 Querying documents - Logical Operators

12.1 Write a query to get all the documents where imdb rating is between 3 and 5 or 8 and 9.

13 Querying documents - Logical Operators ($nor and $not)

13.1 Write a query to find movies where imdb rating is greater than 5 and votes are less than 5000.

14 Limiting Records

14.1 What is the use of limit command?

14.2 Can we use skip command without a limit command?

15 Sorting Records

15.1 What is the default sort direction of the sort method?

16 Aggregate command - countDocuments()

16.1 Write a query to get count of documents where type is series and imdb rating is between 2 and 5.

17 Aggregate Command - Distinct

17.1 Write a query to get a distinct value from the rated field where imdb rating is between 3 and 5.

18 Aggregate Command - Aggregate

18.1 Write a query to find aggregate values total, average, min grouped by year and type.

19 Date Query

19.1 Write a query to get documents between 11th Sep 2015 and 13th Sep 2015.

19.2 Difference between Date() and new Date().

20 MongoDB $regex Operator

20.1 Write a query to find the documents where the title should start from a letter between A to F and should contain exactly four letters.

21 MongoDB Indexes

1 What is RDBMS? Categories & How it Works?

1.1 What is a database? & What is a DBMS?

1.2 When can any DBMS be called as RDBMS?

1.3 How does the RDBMS store the data?

1.4 Which language is used to work with RDBMS?

2 What is NoSQL?

2.1 What is a NoSQL database?

2.2 What language is used to query NoSQL?

2.3 Does NoSQL have Schema?

3 What is SQL? Purpose & How it Works?

3.1 What is SQL? & what is its syntax?

3.2 How many types of SQL commands are there & what is their purpose?

5 RDBMS or NoSQL (Which is the better choice? What to pick?)

6 RDBMS vs NoSQL Comparison






// THEORY
Charset : A character set is a set of symbols and encodings
Collation : A collation is a set of rules for comparing characters in a character set
Collation tells the database how to perform string matching and sorting. 
One character set can have multiple collations
Combination of symbol & their encoding called as character set

In real life, most character sets have many characters: whole alphabets, numbers, multiple alphabets & eastern writing systems with thousands of characters, along with many special symbols and punctuation marks.

SHOW CHARACTER SET;  show all available character set with their default collation

SHOW COLLATION;  list of collation

SHOW COLLATION WHERE CHARSET = ‘utf8mb4’;

Check default collations : SELECT @@charcter_set_database, @@collaction_database; 

utf8mb4 is default character set as it covers all the language support

show databases;

create database employee;

create database if not exists employee;  this returns warning if employee database already exists

show warnings; list down last warning

DROP DATABASE db_name;

DATA TYPES :
To store info in table we need fields & for each field we must specify its datatype. It will improve data manipulation, optimize the storage & restrict incorrect data
We define data type on the column itself. 
MySQL uses 3 main datatypes : 1.Numeric 2.Date & time 3.String types





