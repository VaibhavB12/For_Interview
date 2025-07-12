GraphQL is a query language for APIs and a runtime for executing those queries. It allows clients to request exactly the data they need—nothing more, nothing less.
Using GraphQL we can fetch the data from following sources :
    Databases   : PostgreSQL, MySQL, MongoDB, DynamoDB
    Other GraphQL : APIs	Remote GraphQL services
    REST APIs : Any RESTful service (via fetch or Axios)
    Microservices : Internal APIs from different services
    Message Queues : Kafka, RabbitMQ, AWS SQS
    File Storage : Local files, AWS S3, Google Drive
    Third-Party APIs : Stripe, OpenWeather, Google Maps
    Cached Data : Redis, Memcached
STEPS TO CREATE GRAPHQL API :
1.Define GraphQL Schema : using schema definition language (SDL), first we define type definitions
const typeDefs = `
    type Query{
        greeting: String
    }
`
Any client calling our GraphQL API will query for greeting and the server will return a string value in the response.
typeDefs describe the interface of our API.
To return string to user if he queries our GraphQL API for greeting field, we use resolvers object
const resolvers = {
    Query: {
        greeting: () => 'Hello World'
    }
}
Since schema has Query at the top level, resolvers must contain a Query object & since schema contains a greeting field we also define a property greeting. Schema simply declares that greeting is a string, the resolvers greeting field will be a function that returns the actual value which must be a string.
"resolvers are function that resolves the value of the greeting field."
Instead of returning a string we could load the value from the database or fetch the value from other the API.
Summary :
    typeDefs : represent interface for our API, it declares what our clients can request
    resolvers : are the function that returns the actual values 

To expose our GraphQL API over the HTTP we use Apollo server library. To install it : 
    npm install @apollo/server graphql
In package.json use type: "module" & private: true 
import ApolloServer class provided by the @apollo/server package. Using this class we create a new server :
    const server = new ApolloServer({ typeDefs, resolvers });
To start the server : import startStandaloneServer function from @apollo/server/Standalone package.
call startStandaloneServer() this will start Apollo server on it own without using any backend framework.
    const info = await startStandaloneServer(server, { listen: { port: 9000 }}); // Here server is an instance 
    console.log(`Server running at ${info.url}`)

When we click on link it will display the Apollo Sandbox, which is tool to make GraphQL queries. Sandbox automatically loads the schema from our server and generates documentation based on that schema. 
When we run the query in the sandbox : 
query { 
    greeting 
}
OR
{ 
    greeting 
} 
it will return a response which is JSON object that contains a data property & this data property contains actual value returned from the server. The response object also contains errors object which returns error.

How the query relates to the schema :
When we write the query keyword in the sandbox, it refers to the query field in the schema, which in turn points to the Query type in the schema.
In sandbox : 
query{

}
The query keyword refers to query: Query in the schema within the typeDefs:
schema {
    query: Query
}
type Query{

}
In short: query (sandbox) → query: Query (in schema of typeDefs) → type Query (in the Query type).

By default sandbox has "Schema Polling" enabled which keeps re-requesting the schema from the server. To turn this off click on green dot near localhost.
fetch/XHR tab shows only server calls made from JavaScript not other request like CSS files or images
By default all the GraphQL requests are sent as HTTP POST.
In request header > content-type is application/json means request body contains JSON data.
In short client POST some JSON data to the Apollo server & server sends JSON data back to the client.




npm install @apollo/server graphql 
create typeDefs schema
implement resolvers object that returns actual value for the query
create a server
start the server 

Server exposes the graphql API, so that client can call it to fetch the data from the server.

Check above project in : C:\Users\Ghost\Desktop\Node-Project\graphql 

Client : Web framework > Server : GraphQL + Auth + Data Access > Database
What we are using : 
    Web framework : React
    Server : Express
    GraphQL : Apollo Server
    Auth : JWT
    Data Access : Knex query builder / Prisma / Sequelize / Any ORM for RDBMS or ODM for NOSQL Database.
    Database : SQLite

Apollo-server includes 2 built-in integrations :
    startStandaloneServer
    expressMiddleware
Apollo provides its own "expressMiddleware" function. This expressMiddleware function expects ApolloServer instance as argument and we mount this middleware on '/graphql' path. Now express will send all requests for the /graphql path to the expressMiddleware, which will be handled by the Apollo GraphQL Engine.

cors is used to add response headers to allow cross origin requests 
express.json parses req.body into javascript object

Project 2 : Jobs Board
Check C:\Users\Ghost\Desktop\ReadMe\FullArchitectureGraphQLGeneral, FullArchitectureGraphQL1, FullArchitectureGraphQL2 images for overview
Open project C:\Users\Ghost\Desktop\Node-Project\graphql\2.job-board : We already have basic express server setup in it with login functionality. SQLite database is used. data folder contains db.sqlite3 file which contains our entire database. db folder contains functions to read & write data from the database.
STEPS : 
npm install better-sqlite3 cors express express-jwt jsonwebtoken knex nanoid nodemon --save-exact
npm start
npm install @apollo/server graphql
In server.js : 
  import ApolloServer from @apollo/server 
  create instance from ApolloServer class by passing typeDefs & resolvers
  start apollo server by calling start() method on instance we created above(use await)
  import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4"
  // Apollo server provides its own middleware function, we use this middleware function to modify the request
  mount apolloMiddleware on /graphql path, pass apollo server instance in apolloMiddleware
  // When you pass apolloServer as argument to the expressMiddleware, you’re telling Apollo how to handle incoming GraphQL requests inside your Express app.
create schema.graphql for schema definition & define schema in it
create resolvers.js & write and export resolver function from it
import resolvers.js in server.js
import "readFile" function from "node:fs.promise" module to read the schema from schema.graphql file
call readFile function & pass the path of schema.graphql file to it and utf-8 character encoding & store this in typeDefs variable
utf-8 will read the content of the schema.graphql & convert it to string format.

IMP DESCRIPTION :
type Query {
  job: Job // Job is object type in graphql, which is defined below
}
type Job {
  title: String
  description: String
}
In above :
    Query is the root type that defines the entry point of the API.
    job: Job → This means that querying job will return an object of type Job.
    Job is a custom object type in graphql with two fields:
          title: String
          description: String
Defining Object type in graphql is same as defining object in javascript. We name object type in graphql in pascalCase.
IMP : In the root query, the job field returns a Job object as its value. In the resolver object, we define a function for the job field inside the Query resolver. This function assign values to the fields of the Job object & then returns it.
export const resolvers = {
  Query: {
    job: () => {
      return {
        title: "The Title",
        description: "Some Text",
      };
    },
  },
};
To query in sandbox :
we can query for the one field only or we can query both the fields. This flexibility is provided by the graphql. This allows you to query only the fields you need. This is how graphql avoids overfetching.
query {
  job {
    title,
    description
  }
}
or 
query {
  job {
    title,
  }
}
or
query {
  job {
    description
  }
}

GraphQL provides predefined "Scalar types". A scalar type is a primitive data type in GraphQL that holds a single value (not an object or list). Scalars represent the most basic data types that cannot have subfields.
It is basically like defining the data types for the fields in the object type of graphql.
Scalar types :
    id : ID // unique identifier but we write its value like regular javascript string in resolvers
    Int: A signed 32—bit integer.
    Float: A signed double precision floating-point value.
    String : A UTF—8 character sequence.
    Boolean: true or false.
We can also define custom scalar type like scalar Date

If we do not return anything from the the resolver function, then the query response set all the properties to 'null'. This means that all the fields in graphql are nullable by default means they are optional. 
To make a field non-nullable or mandatory we add exclamation mark in front of its type in object type. If we dont return a that non-nullable field from the resolver function then it will throw error.
In short we make field non-nullable by applying exclamation mark in front of its type in object type definition. And if we dont return that non-nullable field from the resolver function then it will throw an error 'can not return null for the non-nullable field'.
IMP : If a field is non-nullable this does not means that the client must request it. The client can skip the non-nullable field in the query. But if client requests the non-nullable field the server must return a non-null value. 
IMP : If field in the object type is non-nullable or mandatory we must return it from the resolver function.
IMP: To make an object type return multiple values instead of a single value, in the root query enclose the object type name in square brackets. And if you want to make it mandatory or non-nullable just add exclamation in front of object type name in the root query.
When we put an object type name in square brackets in the root query, it means the field returns a list (array) of values instead of a single value. 
type Query {
  job: [Job]
}
And we can make it mandatory or non-nullable using exclamation mark after the object type name like below.
type Query {
  job: [Job!]
}
Also from resolver function we need to return an array of objects instead of single object like below :
export const resolvers = {
  Query: {
    job: () => {
      return [
        {
          id: "test-1",
          title: "The Title",
          description: "Some Text",
        },
        {
          id: "test-2",
          title: "The Title",
          description: "Some Text",
        },
      ];
    },
  },
};


