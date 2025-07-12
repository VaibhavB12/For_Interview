React is a javascript library used to simplify the creation SPA by using the reusable components.
React is an open source Javascript Library. 
React is used for building user interfaces(UI). 
React simplifies the creation of SPA by using reusable components. 

Features of react :
   Virtual DOM 
   Component Based Architecture
   Reusability & Composition
   JSX(JavaScript XML)
   Declarative Syntax
   Community & Ecosystem
   React Hooks
 
DOM : 
DOM is a tree like representation of a web papge or HTML code in the memory. Each elements in this tree is called as a node. The document object is the root node of the DOM tree & all other html elements are the child nodes. Using javascript functions like getelementbyid, getElementsByClassName, querySelector, querySelectorAll we interact with these nodes & modify them. Every time we make changes to any of the node the browser will re-render whole layout of the web page & which in turn refresh the entire DOM tree. This will increase the load time of the web page & leads to performance issue for the application. 
When we use react library, the react will make copy of the DOM  
DOM(Document Object Model) represents the web page as a tree-like structure which allows JavaScript to dynamically access and manipulate the content and structure of a web page.

Component is a reusable basic building block of the react which is used for creating user interfaces UIs. First we import react library & then functional component is defined which returns JSX. This JSX is then rendered in the UI. And finally the component is exported to reuse in other parts of the application.
```javascript
import React from "react";
function Component(){
   return (
      <div>
         <h1> I am React Component </h1>
      </div>
   )
}
```

A Single Page Application (SPA) is a web application that have only one single web page. Whenever user do some action on the website, then in response content is dynamically updated without refreshing or loading a new page.

React Advantages :
1.Simple to build Single Page Application (by using Components) : React follows component based architecture which allows us to create reusable components. This makes the development process faster & efficient.
2.React is cross platform and open source(Free to use) : React can be used to create application for different platforms like web, mobile & desktops. React can be easily integrated with other frameworks like express for node js.
3.Lightweight and very fast (Virtual DOM) : As react uses virtual DOM instead of re-rendering real DOM everytime changes happens, it eventually increase the performance of the application.
4.Large Community and Ecosystem : React has big community support.
5.Testing is easy : Automated testing

Dis-advantage : React is not a good choice for very small applications like for static website.

JSX : It stands for Javascript XML. JSX is used by React to write HTML-like code within the components. Since browsers understand javascript only, react uses babel transpiler to convert JSX code into javascript code which the browser can then render.
JSX code is simple to write, it is like basic HTML, which makes development process easier.

Imperative Vs Declarative Syntax :
Imperative syntax involves step by step process to achieve a particular result or output. JavaScript has an imperative syntax. 
Declarative syntax focuses on describing the desired result or output without specifying the step-by-step process. JSX in React is used to write declarative syntax. 
Declarative syntax are simple to write as compared to the imperative syntax, because we dont need to write each & every step in declarative syntax.
For example : Check below code, for one line of JSX code (declarative syntax) we need to write 4 lines of javascript code (imperative syntax).
```javaScript
// Declarative syntax :
function App() {
   return <h1> React JS</h1>
}
// Imperative Syntax :
function App() {
   const element = document.createElement("h1");
   element.textContent = "React JS"
   document.body.appendChild(element)
}
```

Arrow Function Expression : It is consise or shorter way to define function. Arrow function is a function expression with a concise syntax and lexical this binding.

Setup react project :
Install node js
Install vscode & open it
In vscode terminal : npx create-react-app myApp
cd myApp > npm start : this will open react app on path localhost: 3000

React App flow : 
When we open react based website in a browser :
1.First request goes to the react server & finds index.html page, which is only single page react have.
2.Next with the help of react libraries index.html loads the index.js files. It is javascript entrypoint for the application. Without it javascript will not work
3.Next index.js calls the App.js file which is the root component of the application. Root component is the placeholder for all the child components.

First Request:
When you open a React website, the browser makes a request to the server, which sends back the index.html page.
Loading JavaScript:
The index.html page loads the index.js file, which is the main JavaScript file for the app.
Root Component:
The index.js file loads the App.js file, which is the root component of the app. This component is the starting point for all other components.
Rendering the UI:
React uses the components to create the UI, and only updates the parts that change when the state or data changes.
User Interaction:
When a user interacts with the page (like clicking a button), React updates the UI by changing the state and re-rendering the affected parts.

1.index.html (Static HTML file) : This file is served by the server and is the base HTML structure of the page.
2.index.js (Entry Point for React) : This file is the entry point for the React app. It connects React to the root div inside index.html.
3.App.js (Root Component) : This is the root component where the main UI logic happens. It includes state and renders UI based on user interactions.

1.Initial Rendering:
index.html (Static HTML):
   The browser loads the index.html file.
   The file contains a <div id="root"></div> where React will render the app.
   It also includes a script tag linking to index.js to load the React app.
   ```javascript
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>React App</title>
      </head>
      <body>
         <!-- React will inject the app into this div -->
         <div id="root"></div>
         <!-- React JavaScript entry point -->
         <script src="index.js"></script>
      </body>
      </html>
   ```
   The browser loads the index.html file, and React starts by reading index.js to begin rendering the application.
2.index.js (Entry Point):
   index.js is the entry point for the React app, and it connects React to the HTML file by targeting the root div.
   React uses ReactDOM.createRoot to render the App.js component inside the root div.
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';  // Import the root component

   // This is where React starts rendering. It renders `App` into the `root` div in index.html.
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(<App />);   
   ```
   React renders the App component to the <div id="root"></div> inside index.html.
3.App.js (Root Component):
   App.js is the root component where the UI elements and logic are defined.
   The component may have states that control the UI. For example, in this case, a button and a click counter.
```javascript
   import React, { useState } from 'react';
   function App() {
   const [count, setCount] = useState(0);
   const handleClick = () => {
      setCount(count + 1);  // Update state on button click
   };
   return (
      <div>
         <h1>Welcome to React!</h1>
         <p>You clicked {count} times</p>
         <button onClick={handleClick}>Click Me</button>
      </div>
   );
   }
   export default App;
```
   App.js is the first component rendered into the root div. It displays a button, a counter, and a text saying how many times the button has been clicked.
   The button has an onClick event listener, which triggers the handleClick function when clicked.
Flow :
   When the user clicks the button, the handleClick function is called, and the state (count) is updated.
   React uses useState to manage the state, and updating the state triggers a re-render of the component.
   When the count state is updated, React creates a new Virtual DOM for the updated App.js component.
   React compares the updated Virtual DOM with the previous Virtual DOM (using a process called Reconciliation).
   It finds the difference between the two, which in this case, is the change in the counter value.
   React efficiently updates only the changed part of the real DOM (the part showing the updated count).
   The rest of the DOM (like the button and the heading) remains unchanged.
   After the changes are made in the real DOM, React reflects the updated UI to the user in the browser.
   The count value displayed on the page is updated, and the UI now shows the new count.

"state" refers to the current data of the component. Stateful or state management means, "when a user
performs some actions on the UI, then the React application should be able to update and re-render that data or state on the UI".
index.html > components > stateful - state changes of component are rendered continuosly in UI

To make component stateful or to manage the state of component, we use hooks, redux, lifecycle methods.

"state" refers to the current data of the component.
props (properties) are a way to pass data from a parent component to a child component. We use props as parameter to the child functional component, 


NPM(Node Package Manager) is used to manage the dependencies for your React project, including the React library itself.
node_modules folder contains all the dependencies of the project, including the React libraries.

Public folder contains static assets that are served directly to the user's browser, such as images, fonts, and the index.html file. No API data fetching, No components, No dynamix things.

src folder is used to store all the source code of the application which is then responsible for the dynamic changes in your web application. Folder in which developer writes the code.

index.html file is the main HTML file(SPA) in React applcication. Here the div with “id=root” will be replaced by the component inside index.js file. It is placed in public folder as it is static page. All the components are going to be placed dynamically inside this page (id="root"). 

ReactDOM is a JavaScript library that renders components to the DOM or browser. The index.js file is the JavaScript file that replaces the root element of the index.html file with the newly rendered components. ReactDOM library from the index.js uses createRoot() method to get the reference of the "root" element from the index.html file. Then render method is used to render react App components. (App component has access to all the child components, so indirectly child components are rendered in index.js)

App component in App.js acts like a root container for all the child components & App component in App.js is the default root component in the react.
App.js file contain the root component(App) of React application.
App component is like a container for other components. 
App.js defines the structure, layout, and routing in the application.

The function keyword is used to define a JavaScript function that represents your React component. (name of the function is name of the component).
function is like a placeholder which contains all the code or logic of component. 
The function takes in props as its argument (if needed) and returns JSX.
return is used to return the element from the function. Whatever elements we see in the UI are returned from the return block. We can return elements as well as child components. ReactDOM package of index.js will render these returned elements in the DOM & the content will be displayed in the browser.
Whenever this component is invoked anywhere in the application, function will be automatically called & run the code inside it. You can use arrow function expression to define this function.

We can have a function without a return statement but in that case component will not render anything in UI. The common use case is for logging purpose. In real application we can have error logging component which do not return anything.

export default : Export statement is used to make a component available for import, using “import” statement in other files.

No, the file name and the component name don't have to be the same. However, it is recommended to keep them same
for easier to organize and understand your code.

JSX : It stands for Javascript XML. JSX is used by React to write HTML-like code within the components. Since browsers understand javascript only, react uses babel transpiler to convert JSX code into javascript code which the browser can then render.
JSX code is simple to write, it is like basic HTML, which makes development process easier.
{} (curly braces) are used for JSX expressions. They allow you to embed JavaScript code inside JSX.

Advantage of JSX :
1.Improve code readability and writability 
2.Error checking in advance( JSX provides Type safety) :  
3.Support JavaScript expressions : {}
4.Improved performance 
5.Code reusability

Browser understands only javascript, it does not understand JSX code directly (returned from the components). So first JSX code will be converted to javascript using babel transpiler & then browser will render this javascript code.
Babel in React is used to transpile JSX syntax into regular JavaScript which browser can understand.

In React, a fragment is a way to group multiple children's elements. Using a Fragment prevents the addition of unnecessary nodes to the DOM.
If we have two seperate JSX elements & they are not under any common root element. Then react will show you a compilation error. So all the seperate JSX elements must be enclosed inside a common root element, which can be done by using extra <div> element as the root element but this not recommended because the extra <div> element might impact layout of the page. Recommended way is to enclose the seperate JSX elements in <Fragment></Fragment> tag. It will not impact layout of the page as during the rendering the <Fragment> tag gets disabled automatically. Instead of writing <Fragment></Fragment> we can write <></> empty tags also. 
IMP : Empty tags in JSX means it is fragment tag, which is used to enclose the seperate elements together.

The spread operator (...) is used to expand or spread an array or object. Mostly used for props when passing multiple properties from parent component to the child component. We can access these properties in child component using props.propertyName.

Conditional Rendering in JSX :
1.lf/else statements
```javascript
function MyComponent(){
   if( 2 > 1 ){
      return "abc"
   }else{
      return "xyz"
   }
}
```
2.Ternary operator :
```javascript
function MyComponent(){
   return 2 > 1 ? "abc" : "xyz"
}
```
3.&& operator : It only return truthy values & will never evaluate the false condition. It returns null for false.
```javascript
function MyComponent(){
   {return 2 > 1 && "abc"}
}
```
4.Switch statement
```javascript
function MyComponent(){
   const value = 2;
   switch (value) {
      case 2:
         return 'abc';
      case 1:
         return 'xyz';
      default:
         return null;
   }
}
```

map() method allows you to iterate over an array and modify its elements using a callback function. It return new array & does not modify original array.

A Transpiler is a tool that converts source code from one high-level programming language(JSX) to another high-level programming language(JavaScript). Example: Babel
A compiler is a tool that converts high-level programming language(Java) into a lowerlevel language (machine code or bytecode).

Yes, it's possible to use JSX without React by creating your own transpiler like Babel. However, this is not recommended since JSX is tightly integrated with React and relies on many React-specific features.

Components : Component is a reusable basic building block of the react which is used for creating user interfaces UIs. First we import react library & then functional component is defined which returns JSX. This JSX is then rendered in the UI. And finally the component is exported to reuse in other parts of the application.
Two types of components :
   1.Functional components - 
      Functional components are declared as a JavaScript function.
      They are stateless component, but with the help of hooks, they can now manage state also.
      props (properties) are a way to pass data from a parent component to a child component.
      Prop drilling is the process of passing down props through multiple layers of components. Means passing data from parent component to the child component & further passing it from child component to grand child component.
      Why to avoid props drilling ?
      1.Maintenance: Prop drilling can make code harder to maintain as changes in data flow require updates across multiple components. 
      2.Complexity: It increases code complexity and reduces code readability. 
      3.Debugging: Debugging becomes challenging when props need to be traced through numerous components
      5 ways to avoid the props drilling :
         1.Using Context API 
         2.Using Redux 
         3.Using Component Composition
         4.Using Callback Functions 
         5.Using Custom Hooks         
   2.Class components - 
   Class components are defined using JavaScript classes. 
   They are stateful components by using the lifecycle methods.
   The render method in a class component is responsible for returning JSX.
   We create AppClass by extending from the Component class, which is built in react class. render() method is used to return the JSX code in class components. Finally export the class component.
   this.props can be used in child component to access properties/ data passed from parent component.
   this keyword is used to refer to the instance of the class.

functional component Vs class components :
functional component :
   Syntax: Defined as a JS function.
   State: Originally stateless but can now maintain state using hooks.
   Lifecycle methods: No
   Readability: more readable & concise
   this keyword: No
   Do not have render method.
class components :
   Syntax: Defined as a JS(ES6) class.
   State: Can manage local state with  this.state.
   Lifecycle methods: Yes 
   Readability: Verbose(complex).
   this keyword: Yes (Access props using this.props)
   Have render method.

Routing : 
Routing allows you to create a single page web application with navigation, without the need for a full-page refresh. React Router is a library for handling routing in react applications and enables navigation and rendering of different components based on the URL.

To implement routing in react : 
   First install router using command : npm install react-router-dom
   In the App component file import Routes, Route & Link components from react-router-dom library
   declare elements or components using arrow function
   Inside the App component use Link component to display navigation with the text
   And finally for each of the navigation we can fix the route by defining <Routes> for each component or element
   Inside the index.js import the App route & define it in Router comonent which is imported from Router library. 
In short :
/src
 ├── /components
 │    ├── Home.js     <-- Component
 │    ├── About.js    <-- Component
 │    ├── Contact.js  <-- Component
 ├── /routes
 │    ├── AppRoutes.js  <-- Import and use components inside Routes
 ├── index.js  <-- Import AppRoutes
 ├── App.js  

Two ways : /component/Home.js > routes/AppRoutes.js > index.js
   1.define components in component folder > in routes/AppRoutes.js import components and Routes, Route, Link from react-router-dom. Create AppRoutes arrow function & return navigation <Link> & <Routes> from it. Export AppRoutes function > in index.js import AppRoutes.js, BrowserRouter as Router from react-router-dom & render <AppRoutes/> in <Router> 
   2.Without AppRoutes.js import all of above in App.js    
   Install react-router-dom
   In AppRoutes.js define routes : 
      import react
      import Routes, Route from react-router-dom
      import child components
      define AppRoutes arrow function & return <Routes> from it :
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      export AppRoutes
   In App.js import routes :
      import react
      import BrowserRouter as Router, Link from react-router-dom
      import AppRoutes
      define App arrow function & return Link from it :
         <Router>
            <nav>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
            </nav>
            {/* Using Routes Component */}
            <AppRoutes />
         </Router>      
   Import BrowserRouter as Router and Link from react-router-dom
   Import BrowserRouter as Routes, Route, and Link
   Create navigation using Link
   Define routes inside Routes
   Wrap App in BrowserRouter in index.js

The <Routes> component is used as the root container for declaring your collection of routes.
The <Route> component is used to define a route and specify the component that should render when the route matches. For example, in this code if user enter “websitename.com/about” in url, then matching “About” component will be rendered.

Route parameters in React Router are a way to pass dynamic values(data) to the component as part of the URL path.

Switch component ensures that only the first matching <Route> is rendered and rest are ignored. 
For example, Switch is commonly used to handle 404 or "not found" routes.
Switch will execute only the first match root & ignore rest of all routes.

exact prop is used with the <Route> component to match exactly to the provided path. For example if we define Route path "/about" without exact then it can match with "/about/team" or "/about/contact", but if we use exact then it will only match for "/about"


=========================================================================================================================
HOOKS :
Hooks are used for handling side effects and managing state in React function components. They allow function components to have features that were previously only available in class components.
1.React Hooks are inbuilt functions provided by React that allow functional components to use state and lifecycle features. 
2.Before Hooks, class components lifecycle methods were used to maintain state in React applications. 
3.To use React Hook first we first have to import it from React library:
Types of hooks :

1.useState – Manages component state. Whenever you want to render something in UI use useState() hook
      const [count, setCount] = useState(0);
      setCount(count + 1);
   The useState hook enables functional components to manage state. 
   useState() working: usestate() function accept the initial state value as the parameter and returns an array with two elements:
      1.The first element is the current state value (count in this code).
      2.Second element is the function that is used to update the state (setCount in this code). ❖ The concept of assign array elements to individual variables is called array destructuring.   
   
2.useEffect – Handles side effects (API calls, subscriptions). (Its like async-await or promise for asynchronous operations)
      useEffect(() => {
         console.log("Component mounted");
      }, []); // Runs once on mount
   React component first renders initial data and then fetches or updates additional data using useEffect() hook after the initial render.
   The data that is part of the component's initial render is displayed directly in the UI. However, we can render additional data after the initial render is complete by using useEffect.
   The useEffect Hook in React is used to perform side effects in functional components. For example, data fetching from API, subscriptions or any other operation that needs to be performed after the component has been rendered.
      1.useEffect() is called after the component renders. Example, side effects. 
      2.useEffect() function will accept two parameter: (Effect function which is a callback function, dependency array).
   Dependencies arrays(optional) act as triggers for useEffect to rerun; meaning if any of dependencies values change, the code inside useEffect() will be executed again.
   For example : When the user ID value is changed (userID element of dependency array) then data will be refetched from the API & re-rendered to the UI. Means effect function is re-running on changing the element value of user ID from the dependency array.
   An empty array [] in the useEffect() indicates that the effect function(callback) should only run once.
   
3.useContext – Accesses global state using React Context.
      const user = useContext(UserContext);
   Prop drilling is the process of passing down props through multiple layers of components. useContext() is one of the ways to avoid prop drilling. useContext in React provides a way to pass data from parent to child component without using props.
   For that we call createContext() method & store it in a variable MyContext & export that variable. The createContext() method returns an object which has two properties : 1.Provide & 2.Consumer. In parent component we define the property that we want to pass to child component. Then in return statement we call Provider MyContext.Provider & set value equal to the property we defined earlier. And also we enclose the child component inside the MyContext.Provider. In child component we call useContext() hook with MyContext as argument & store it in a variable & in return statment we specify the variable in curly braces. we could use MyContext.Consumer in child component instead of useContext() hook.
      createContext() function returns an object with Provider and Consumer properties.
      The Provider property is responsible for providing the context value to all its child components.
      useContext() method or Consumer property can be used to consume or get the context value in child components from the parent component.
   Use useContext instead of props when you want to avoid prop drilling and access context values directly within deeply nested components.
   For passing data from one level of parent-child component props is good option, but for passing data for multiple components like from parent to child to grandchild useContext() is the best option.
   For example when you select the dark theme for an application then all the components of the application will be displayed in the dark theme. 
   Examples : 
   1.Theme Switching (Dark/ Light)
   You can centralize and pass the theme selection of the application from the parent to all the deep child components. 
   2.Localization (language selection)
   You can centralize and pass the language selection of the application from the parent to all the child components.  
   3.Centralize Configuration Settings
   Common configuration settings like API endpoints can be centralized and change in the parent component will pass the setting to all its child components  
   4.User Preferences 
   Any other user preferences apart from theme and localization can also be centralized. 
   5.Notification System
   Components that trigger or display notifications can access the notification state from the context.   
   
4.useRef – Creates a reference to DOM elements or stores values without re-rendering.
      const inputRef = useRef(null);
      inputRef.current.focus();
It holds the reference of the DOM elements. For example Even if the component is re-rendered the focus on the input element will not lose focus. Means after component re-rendering the input element box automatically gets selected.
The advantage is, the useRef hook persists across renders and does not trigger re-renders when it changes.

5.useMemo – Optimizes performance by memoizing expensive calculations. useMemo is a hook that memoizes a value (e.g., the result of a computation). It prevents expensive calculations from being repeated on every render. It's used to optimize value computations, not component re-renders. To prevent component re-renders we use React.memo(). 
      const result = useMemo(() => expensiveFunction(data), [data]);
The useMemo hook is a performance optimization function that memorizes the result of a computation.
The advantage is it prevent unnecessary recalculations and rendering. It is particularly useful when dealing with expensive calculations.
userMemo accept two parameters: 
   1.The first argument of useMemo() is a function that performs some expensive computation and return some result(processData). 
   2.The second argument([data]) is an array of dependencies ([data]). The memorized value will only be recalculated if this dependency will change.
useMemo returns a memorized version of the calculated value.
Use useMemo when you want to avoid recalculating an expensive value on every render.
Use it when : When you have expensive computation & the value does not change frequently.
   
6.useCallback – Memoizes functions to prevent unnecessary re-creations of functions.
   useCallback memoizes a function so it does not get recreated on every render. It optimizes performance by preventing unnecessary re-renders in child components.
      const handleClick = useCallback(() => {
          console.log("Clicked!");
      }, []);
   
   useCallback memoizes a function, meaning it returns the same function reference between renders as long as its dependencies don't change.This is useful when passing functions as props to child components, as it ensures the function reference remains stable.
   React.memo is a higher-order component that memoizes the entire component. It prevents re-renders of the child component if its props haven't changed. Without React.memo, the child component will re-render every time the parent re-renders, even if the props haven't changed.
   If you use useCallback but don't wrap the child component in React.memo, the child component will still re-render whenever the parent re-renders, even if the function reference hasn't changed.
   This happens because React re-renders all child components by default when the parent re-renders, unless you explicitly optimize them with React.memo.
   
   In Short :
   React re-renders all child components by default when the parent re-renders
   useCallback ensures that the function reference remains stable / same as long as its dependencies don't change, preventing unnecessary function recreations.
   React.memo ensures that the child component only re-renders when its props actually change. It prevents rendering of child component when parent component re-renders
   IMP : using useCallback alone is often not enough to prevent unnecessary re-renders. To fully optimize your React components and avoid unnecessary re-renders, you typically need to combine useCallback with React.memo. 
   // Check React.js in this folder for example
   
7.useReducer – Alternative to useState for complex state logic. useReducer() is an alternative to the useState() hook when dealing with complex state in your components. 
      const [state, dispatch] = useReducer(reducer, initialState);
   How it works :
   1.Component(Event Handler) : A React component contains UI and logic. Event handlers (like onClick, onChange, etc.) trigger actions inside the component.
   2.Dispatch : Dispatch is used in the useReducer hook to send an action to the reducer function. It acts as a trigger for state updates. This sends an action to the reducer to update the state.
   3.Reducer(Function) : A pure function that takes the current state and an action, then returns the new state. Used with useReducer instead of useState for complex state management. 
   4.Complex State update : When state updates involve multiple values or dependencies, useReducer helps manage them efficiently. Useful when useState becomes too complex.
   5.Component Re-render : When state changes, React re-renders the component to reflect the new UI. Only the affected components re-render (React optimizes this).
   Example flow :
      User clicks button (onClick event triggers).
      Dispatch sends an action ({ type: "INCREMENT" }).
      Reducer updates state (count + 1).
      React detects the state change and re-renders the component.
      The UI updates with the new count.   
   dispatch function is returned by the useReducer hook, and it is used to dispatch actions(type) to reducer function that trigger state updates.
   The reducer function is a function responsible for updating the state based on the action received from dispatch function. We create the body of the reducer function & pass it as a parameter to the reducer hook
   By setting initial state as an object, you can manage complex states with useReducer functions.

8.useLayoutEffect – Similar to useEffect, but runs before the browser paints the screen.
If you remember, in this case of the UseEffectHook, we have a component, first the component initial state will be rendered in the UI and then after that side effects like loading external API data will be rendered by the useEffect hook. In useEffect, the initial rendering of the UI is not blocked by these side effects. Meaning, the page with initial rendered data will be displayed to you but the side effects will load lately and independently without giving any problem to this initial rendering in UI.  
But if you use the useLayout effect, then the initial rendered data might not able to render or display until useLayoutEffectHook brings the side effect data from the external API. Okay, so meaning the initial rendering has to wait for the side effect data. 
The code for useEffect() & useLayoutEffect() is same. The difference is in execution of both. useEffect runs asynchronously & is scheduled after the UI has been rendered. Means UI initial rendering and the side effect data fetching are independent & does not block each other. Whereas useLayoutEffect hook runs synchronously means UI initial rendering and the side effect data are dependent & therefore useLayoutEffect can block the browser from rendering UI. Initial data rendering will have to wait for the side effect.
For example, below the paragraph element style(bold/ normal) is dependent on the side effect data, then we use useLayoutEffect. 
The useLayoutEffect hook in React should be used when you need to perform actions that involve manipulating the layout of the DOM based on side effects, such as data fetching. 
In other words, you want the layout changes to be reflected before the browser paints the updated UI.

Hooks Best Practises :
How to recognize component : 
   Normal function return a value but component returns JSX
Rules or Best Practices for hooks implementation in components :
   Hooks can only be called at the top level of the component & then write the remaining logic of the component.
   Never call hooks inside conditions(if-else), loops, or nested functions.
   Hooks can only be called directly inside React components. You should not call hooks inside a normal JavaScript function or inside a function declared inside a component. 
   Hooks are always called in the same order, regardless of conditions. React can correctly track their state across renders.

Custom Hooks in React are JavaScript functions developed by developers to encapsulate reusable logic for their applications. Suppose a piece of code is used in multiple places or components of your application then you could create custom hook for that piece of code & use it.

Render : In React, "render" means displaying the UI based on the component’s state and props.
When a component renders:
   React calls the component function.
   The component returns JSX (UI structure).
   React updates the DOM to match the JSX.
If a component returns JSX, React renders it. If component does not manage any state (do not have useState()), it is a stateless component. To make component stateful we must use useState() hook to store and update data, causing re-renders when the state changes.

IMP : In React, an effect is a piece of code that runs after the component renders. It allows you to run side effects in function components. Side effects like :
   Fetching data from external API.
   For managing subscriptions or event listeners.
   For manual DOM manipulations.
   For setting up timers or intervals.

conditionally running useEffect() hook using Dependency array :
To Run useEffect() conditionally we use dependency array :
   1.If we do not pass dependency array in useEffect(), it will run effect function of useEffect() on every render, which is not good for performance.
   2.If we pass empty dependency array in useEffect(), it will run effect function of useEffect() only once when the component is mounted (e.g componentDidMount). Effect function does NOT run on state updates or re-renders
   3.If we pass StateVariable of useState() in dependency array of useEffect(), it will run effect function of useEffect()only when StateVariable changes([count]).
   4.If we pass multiple StateVariables from multiple useState() in dependency array of useEffect(), it will effect function of useEffect() only for those StateVariables.
   5.In React, a component unmounts when it is removed from the UI. To handle unmounting, you can use the cleanup function in useEffect() or conditionally render the component.
   Check code of Unmount Component in React.js 
You can conditionally run effects in useEffect() by using the dependency array. 
1.Run Effect Only on Mount ([] as Dependency) :
   Runs only once when the component is mounted (like componentDidMount in class components).
   Does NOT run on state updates or re-renders.
      useEffect(() => {
         console.log("Runs only once when component mounts");
      }, []);
2.Run Effect When a Specific State Changes : 
   Runs only when count changes.
   Does NOT run when other states change.
      const [count, setCount] = useState(0);
      useEffect(() => {
         console.log(`Count changed: ${count}`);
      }, [count]);   
3.Run Effect When Multiple Dependencies Change :
   Runs when either count or name changes.
   Does NOT run if unrelated states change.
      const [count, setCount] = useState(0);
      const [name, setName] = useState("Vaibhav");
      useEffect(() => {
         console.log(`Count or Name changed: ${count}, ${name}`);
      }, [count, name]);
4.Run Effect on Every Render (No Dependency Array)
   Runs on every render (not recommended in most cases).
   Can cause performance issues if used unnecessarily.
   useEffect(() => {
      console.log("Runs on every render");
   });
5.Cleanup Effect on Unmount :
   Runs only once when mounted.
   Cleans up when the component unmounts.
   useEffect(() => {
     const interval = setInterval(() => {
       console.log("Running interval...");
   }, 1000);
  return () => {
    clearInterval(interval);
    console.log("Cleanup on unmount");
  };
}, []);


State in React is like a memory for a component. It stores data that can change over time and helps React update the UI when the data changes.
useState() hook returns : 1. StateVariable is the current state value. 2.stateUpdaterFunction is a function
that used to update the state
Check State Management in React.js file

9.useImperativeHandle – Customizes the instance value of a ref.
Custom hooks (useCustomHook) can also be created to reuse logic across components.

Similarities between useState() and useReducer() hook:
   1.Both hooks provide a way to update state and trigger a re-render of the component.
   2.Both useState and useReducer return an array with two elements:
         a.First element is current state
         b.Second element is a function that can be used to update the state
When to use useState() and useReducer() hook :
useState() :
   1.useState is simpler to use and used for managing simple state values. 
   2.It is suitable for managing a single piece of state.
   3.The useState hook takes an initial state as an argument and returns an array with two elements: the current state and a function to update the state.
useReducer() :
   1.useReducer is more appropriate for complex state logic or when the next state depends on the previous one.
   2.It is well-suited for managing multiple pieces of state that needs to be updated together.  
   3.The useReducer hook takes a reducer function and an initial state as arguments and returns the current state and a dispatch function.

Custom Hooks in React are JavaScript functions developed by developers to encapsulate reusable logic for their applications.

React Hooks solve problems related to managing state, lifecycle, and side effects in functional components

Simplicity: Hooks eliminate the need for class components, making the code more readable and reducing boilerplate.

Context API is a broader concept for the creation of context and its management. It can be achieved by using useContect Hook. (Check useContext hook explanation above)

VIMP :
Hooks real-world example :
📌 useState() → It is used for adding state to the functional component For example Form handling
📌 useEffect() → It is used to perform side effects in the functional component For example Fetch data from external API
📌 useContext() → Allows functional component to consume values from common react context. For example Theme switching
📌 useReducer() → It is used for handling complex state in functional component For example Todo list management
📌 useCallback() → It is used for memorization. It memorize a callback function to prevent unnecessory re-rendering of the child components. For example Optimized event handling
📌 useMemo() → It is used for performance improvement by memorizing the result of the function. For example Expensive calculations
📌 useRef() → It creates mutable object 'Ref' that persists across renders. Used when interacting with DOM elements. For example Focus input field
📌 useEffect() → It is simillar to useEffect() for handling the side effects, but it fires synchronously with the DOM manipulation. useEffect() is asynchronous. For example Measure DOM size or position before the screen updates.
IMP : Check real-world use cases of hooks in React.js
1️⃣ useState() → Manage Component State
💡 Stores and updates values within a component.
```javascript
   const [count, setCount] = useState(0);
   setCount(count + 1); // Updates state
```
2️⃣ useEffect() → Handle Side Effects
💡 Runs after rendering to handle effects like API calls, subscriptions, etc.
```javascript
   useEffect(() => {
   console.log("Component mounted!");
   }, []); // Runs only once when the component mounts
```
3️⃣ useContext() → Access Global Data
💡 Shares data across components without prop drilling.
```javascript
   const user = useContext(UserContext); // Get user data from context
```
4️⃣ useRef() → Access & Persist DOM Elements or Values
💡 Stores a reference to a DOM element or value without triggering re-renders.
```javascript
   const inputRef = useRef(null);
   <input ref={inputRef} />;
```
5️⃣ useReducer() → Manage Complex State Logic
💡 Works like Redux but inside a component.
```javascript
   const [state, dispatch] = useReducer(reducerFunction, initialState);
   dispatch({ type: "INCREMENT" }); // Updates state
```
6️⃣ useMemo() → Optimize Performance (Memoization)
💡 Caches values to avoid unnecessary recalculations.
```javascript
   const result = useMemo(() => expensiveCalculation(data), [data]);
```
7️⃣ useCallback() → Prevent Unnecessary Function Re-Creation
💡 Returns the same function reference unless dependencies change.
```javascript
   const memoizedCallback = useCallback(() => doSomething(value), [value]);
```
8️⃣ useLayoutEffect() → Runs Before Paint (Blocking UI Updates)
💡 Similar to useEffect() but runs before the browser paints the UI.
```javascript
   useLayoutEffect(() => {
      console.log("Runs before UI update");
   }, []);
```
9️⃣ useImperativeHandle() → Customize ref Behavior
💡 Allows parent components to control child component methods.
```javascript
   useImperativeHandle(ref, () => ({ customFunction }));
```
🔟 useId() → Generate Unique IDs
💡 Creates unique IDs for accessibility.
```javascript
   const id = useId();
   <label htmlFor={id}>Name</label>
   <input id={id} />;
```
Bonus Hooks
✅ useDebugValue() → Custom debug info for hooks.
✅ useSyncExternalStore() → Sync state with external sources.
✅ useDeferredValue() → Defer state updates to improve performance.


COMPONENTS LIFECYCLE METHODS : Component lifecycle methods are special methods that get called at various stages of a component's life.
Component life cycle phases : Whenever component loads in react application, it goes through 3 lifecycle phases. Each of these phase has lifecycle methods which executes one by one.
   1.Mounting Phase : In this phase component created is started & an instance of the component is created and inserted into the DOM. Thats why component is first time visible on the page to the user. All the methods used in this phase will execute before the component is rendered in the DOM.
   This phase occurs when an instance of a component is being created and inserted into the DOM.
   2.Updating Phase : If we change any property (props) or state of the component then the component will be re-rendered & displayed to the UI. Its like you are refreshing the component in this phase.
   This phase occurs when a component is being rerendered as a result of changes to either its props or state.
   3.Unmounting Phase : This phase occurs when the component is being removed from the DOM. For example when we replace one component by another component on the web page. 
   This phase occurs when a component is being removed from the DOM.

1.Mounting Phase (When the component is created and inserted into the DOM)
   constructor() → 
      Initializes state and binds event handlers.
   static getDerivedStateFromProps(props, state) → 
      Updates state based on props *before** rendering.
   render() → 
      Renders the UI.
   componentDidMount() → 
      Runs after the component is mounted. Used for API calls, event listeners, etc.

2.Updating Phase (When the component updates due to state/props changes)
   static getDerivedStateFromProps(props, state) → 
      Runs before every update when props change.
   shouldComponentUpdate(nextProps, nextState) → 
      Determines if re-rendering is necessary (returns true or false).
   render() → 
      Re-renders the component with updated state/props.
   getSnapshotBeforeUpdate(prevProps, prevState) → 
      Captures DOM info before changes are committed (useful for scroll positions).
   componentDidUpdate(prevProps, prevState, snapshot) → 
      Runs after re-rendering; used for API calls or DOM updates.
3.Unmounting Phase (When the component is removed from the DOM)
   componentWillUnmount() → 
      Cleanup method for removing event listeners, canceling API calls, etc.
4.Error Handling (Bonus)
   componentDidCatch(error, info) → 
      Catches errors from child components and prevents crashes.

⚡ React Hooks Alternative
For functional components, we use Hooks instead of lifecycle methods:
useEffect() → Replaces componentDidMount, componentDidUpdate, componentWillUnmount.
useState() → Replaces state handling inside constructor().

constructor() :
The constructor() is the first method that runs in the mounting phase of a component's lifecycle. It is a special function that gets called automatically when a class component is created, so you don’t need to call it explicitly. The primary purpose of the constructor is to initialize the component's state and perform any necessary setup before the component is rendered in the UI, browser, or DOM. 
"Component" is a built-in class in React. It is provided by React and serves as the base class for creating class components.
Create class component from built-in Component class > create constructor > use super() > initialize the state of the component using this keyword > render() & return the state of the component.
Constructor method will run definitely before the rendering. Component will not load or render until the constructor code run completely.
constructor is a special method that is called when an instance of the class is created. Constructor is used for initializing the component's state or performing any setup that is needed before the component is rendered.

super() keyword is used to execute the constructor of the parent class component (Component). You must execute the constructor of the parent class using super() keyword before executing the constructor of the child class.
super keyword is used in the constructor of a class component to call the constructor of the parent class. This is necessary to ensure that the initialization logic of the parent class is executed.

render() : The render() method in the class component is responsible for displaying elements in the UI. This method is present in both mounting & updating phases of component lifecycle method. 
   In mounting phase it renders the component for the first time and displays it in the UI. 
   In updating phase it re-renders the component when there are state or prop changes, including any updates triggered by componentDidMount().
The render() method returns the React elements that will be displayed in the DOM. It defines what the UI should look like for that component.

State in class component : 
In a class component, this refers to the current instance of the class. It allows access to:
   ✅ State (this.state) → Stores component-specific data
   ✅ Props (this.props) → Holds data passed from the parent component
   ✅ Methods (this.methodName) → Calls functions within the same class
In a class component, state is maintained using the this.state object. It stores component-specific data that can change over time. To update the state, we use this.setState(), which triggers a re-render.

Two step process to maintain state:
1.this.setState() method is used to update the state. It schedules an update to the component's state and triggers a re-render.
2.this.state property is used to access the current state and display it in the UI. It holds the current state value and is used inside render() to reflect changes in the DOM.

componentDidMount() : 
   It is the last method executed in the mounting phase after render().
   Mainly used for side effects, such as fetching data from APIs, setting up event listeners, or updating the DOM.
   In the updating phase, a re-render may occur if state is updated inside componentDidMount().
componentDidMount() vs useEffect() :
componentDidMount() :
   Runs once after the initial render (mounting phase).
   Used for fetching data, setting up event listeners, or modifying the DOM.
   If setState() is called inside it, it triggers a re-render.
useEffect() :
   useEffect(() => {}, []) is equivalent to componentDidMount().
   Runs once after the first render when given an empty dependency array ([]).
   Also used for side effects like fetching data, event listeners, etc.
Both are same but only one difference : 
In class components : first runs componentWillUnmount before componentDidMount
   componentWillUnmount() is a lifecycle method in class components that runs just before the component unmounts componentDidMount() method. It is used to clean up event listeners, intervals, or any side effects.
   What happens : componentDidMount() starts a timer. componentWillUnmount() clears the timer when the component is removed.
In functional components : We must return cleanup function inside useEffect(). 
   What happens : useEffect() starts a timer. The return function inside useEffect() runs when the component is unmounted, clearing the timer.
In example of pdf : See here first we have the constructor where we state data is null. Then we use the componentdidMount method to fetch data from the API or it's like a side effect. And then we update the state data with the fetch data. At last, the render method will render the state data which was fetched by the componentdidMount method and render it to the DOM.

componentDidMount() lifecycle method in React is the part of mounting phase and is called after a component has been rendered to the DOM.
Mostly used for side effects. For example, external data fetching or setting up subscriptions.

componentDidUpdate() : last method of the component lifecycle method of the updating phase. 
   The component is first rendered after the constructor initializes the state and props.
   After the initial render, componentDidMount() executes, triggering side effects like fetching data from an API.
   If any property or state changes, the componentDidUpdate() method runs, re-fetching data if necessary and updating the DOM with the new state.
In example of pdf : 
Initially, the component renders with the data set during constructor initialization. First in the component, this data is rendered and displaying the values set in constructor initialization. Then this loading data will be rendered after the componentdidMount side effects. Now suppose that after component is rendered fully and displaying all the data here, Then, only the user is pressing this view all blocks button. Basically, the user is doing a property or state change in this component. In that case, this particular data inside the component will be re-fetched from the API and will be re-rendered here itself, right? That processing of re-fetching the data inside a component is done by this component date update method.
Here is our comDidUpdate class component. First with a constructor initializing the data to null. Then componentDidMount will fetch the data first time and render to the DOM basically the side effects. Then here is the componentDidUpdate lifecycle method which is used to refetch the data whenever there is any component state or property change. 
Here first we are checking if the property current user id and previous user id are not equal. If they are not equal, that means there is a state change or property change happened or occurred. Then we will refetching the data again and new data will be rendered in the DOM.

componentDidUpdate() lifecycle method is the part of updating phase and is called after a component has been updated(property of state change).
For example, after data is initially fetched by the componentDidMount method, if the user changes some property in the component (e.g., triggering a re-render with updated props or state), then the componentDidUpdate method can be used to refetch data again.

componentWillUnmount() : This is the only and last method of unmounting phase of the component lifecycle. 
Scenario explanation : First, the data of this component will be rendered from the constructor initialization. Then this data is coming from the side effect data which is done by componentDidMount method. Then on any state or property change by the user this data will be re-rendered after the componentDidUpdate method.Now suppose we have the option to close this component on your web page by clicking this cross icon. That means we are unmounting the component from our web page. So when we are unmounting or removing the component, we must make sure to release any resources that is occupied by the components. That cleanup code will be written inside this componentWill Unmount method.
Code explanation :
Here is the Mycomponent class component with first constructor, then we are using componentDidMount method to add one event listener to the button click event, okay. Now we can clean up or release this resource, this event handler resource in component will unmount method. We are removing the event listener here to prevent any memory leaks. Other examples of cleanup like unsubscribing for closing any open connections. Now if you do not do this cleanup task then functionality wise there will be no difference in your webpage and it might be that the react library will clean up it automatically after some time. But before that sometime, these resources will be occupying some memory for some time. And that unnecessary memory occupying is called memory leak, which can then impact the performance of your application. In web applications, performance is very important. 

componentWillUnmount() lifecycle method is called just before a component is unmounted and removed from the DOM. 
It is used for cleanup tasks, freeing up resources or canceling any ongoing processes. For example, remove event listener or unsubscribe from any external service.

In a React class component, state is initialized in the constructor function.

In the updating phase component will be re-rendered if any props or state is changed.

if you do not define a constructor in React component, that means you do not have anything to initialize. But in that case also, React will automatically create a default blank constructor for your component. This default constructor will automatically call the constructor of the base class "Component" also using the super keyword automatically.

Previously, class components were used for managing the state in React applications since functional components were stateless. However, with the introduction of hooks, functional components can also handle the state.
Why we need class component now ? If hooks of functional components can manage the state.
   1.To manage existing projects(legacy code), especially those built before the introduction of hooks.
   2.To support some third-party libraries that might still be written as class components.
   3.To support component lifecycle methods of the existing legacy code.

5 main methods of component lifecycle :
   constructor() : Initializes the component's state and automatically called when the component is being created.
   render() : Returns UI elements based on the current state and props
   componentDidMount() : Invoked after the component has been added to the DOM; used for data fetching and subscribing to external data sources.
   componentDidUpdate() : Invoked after a component's state or props have been updated and it has been re-rendered; used for handling side effects after updates.
   componentWillUnmount() : Called just before a component is unmounted and removed from the DOM; used for cleanup tasks and releasing resources.

==========================================================================================================================
Controlled & Uncontrolled components :
Controlled Component : In React, a controlled component is a form element whose value is controlled by the state. This means that React is in charge of handling the form data rather than the DOM.
Form elements are : <input type="text/password/email/number/tel/date/checkbox/radio/file/submit/reset">, <textarea>, <select>, <option>, <button>, <label, <fieldset>, <legend>, <form>
The values of all these form elements can be controlled by using useState() hook.
Example : Whenever we type text in the input box it will be automatically rendered below the input box.
Code Exaplanation from pdf : Here is the controlled component where we are using the useState hook to set the value of the inputValue by using the setInputValue method. Then below we have a handleInputChange method where we are calling the above setInputValue method. Alright now this handleInputChange function we will call from the input element when its onChange event will be fired. So every time we type a letter the input will be passed to this eTarget.value and that saved in the application state by this setInputValue  method and state and again state is assigned to this inputValue. And finally printing this input value at the bottom
input type = "text" is the form element input & it is controlled by the state of the application, and thats why this is controlled component.

 A controlled component is a component whose form elements (like input fields or checkboxes) are controlled by the state of the application.

Controlled Vs Uncontrolled components :
1.First most important point is we are using the application state to save the changes. Then we are also updating the state and whenever the event is fired for the input event handling. And finally at the bottom we are re-rendering the update state in the browser or tome. So in short in control components elements are handled by Application state. 
2.Now here is an example of the uncontrolled component. The first and most important point is here we have no state management. We are directly accessing and manipulating the element value and not updating the state. Next point is about uncontrolled is We are using the useRef to access the value of uncontrolled components. 
3.And the last point is, since the values are not controlled by state, therefore there is less re-rendering as compared to controlled components. 
4.The last point is that controlled components is a recommended and standard practices for forms handling in React. Whereas uncontrolled components are useful in certain scenarios, but very less commonly considered as a best practice.
In short :
Controlled Components :
   1.Values are controlled by React state.
   2.Event handlers update React state.
   3.Don't depend on useRef().
   4.Re-renders on state changes.
   5.A recommended and standard practice for form handling in React.
Uncontrolled Components :
   1.Values are not controlled by React state.
   2.No explicit state update; values can be accessed directly from the DOM.
   3.Commonly uses useRef() to access form element values.
   4.Less re-rendering since values are not directly tied to React state.
   5.Useful in certain scenarios but less commonly considered a best practice.

Characteristics of controlled components:
   1.State Control: The value of the form element is stored in the component's state. In example inputValue
   2.Event Handling: Changes to the form element trigger an event (e.g., onChange for input fields). 
   3.State Update: The event handler updates the component's state with the new value of the form element. In example setInputValue is updating the state.
   4.Re-rendering: The component re-renders with the updated state every time and the form element reflects the new value. 

Top 3 benefits of using controlled components in React forms:
1.Single Source of Truth
   In controlled components, the state manages the form elements’ values, ensuring a single source of truth. 
   The component’s state provides values to all form elements, and users cannot manipulate them directly.
2.Predictable and Synchronized Updates
   Since the state controls the form, updates are predictable and stay in sync with React’s reactivity.
   This makes it easier to implement features like form validation, dynamic rendering, and seamless integration with React lifecycle methods.
3.Better Control & Maintainability
   Controlled components are easier to manage and debug compared to uncontrolled components.
   This approach aligns with React’s best practices, leading to cleaner and more maintainable code.

The preferred and recommended approach for handling forms in React is by using controlled components.

Maintain separate state variables for each input field and update them individually using the onChange event.

By using conditional rendering based on the state and validate input values before updating the state. Conditional rendering means if the value is present then validate them and save the state otherwise don't so conditional rendering you can use for form validations.

Most of the times we use controlled components. But uncontrolled components can be beneficial 1.when integrating with non-React libraries or 2.when dealing with forms where controlled components are not possible.

CODE SPLITTING :
.css, .js, .png, .sass suppose these are your project files in react project. And here is the user who will open the react website, when the user enters the URL in the browser and opens the website, then by default all these files will be bundled together and then sent to the user's browser in one single request. That is the default behavior without code splitting. But if you use code splitting for the same project and same files, now when user open the website, then if the CSS is required, then only CSS will be loaded to the user browser. Similarly, if JS is required, then only JS is loaded. Same for images and for other files. 

In short, by code splitting, each file chunk will be loaded on the demand basis. We use the word chunk for each request data to be sent in code splitting. Because sometimes we combine 2 or 3 files also as per the request and that is a chunk.

Defn : code splitting is a technique to split the JavaScript bundle into smaller smaller chunks which are loaded on demand.

There are three steps for implementing code splitting in React. 
   First, use React.lazy() method to lazily import components. 
   Second, wrap components with suspense() method to handle loading. 
   Third, configure your build tool for example webpack build tool for dynamic imports. 

Imagine you have a child component called CodeSplit, but you don’t want to load it immediately when the app starts. Instead, you want to load it only when needed. This is called lazy loading.

How does it work?
   React normally loads components immediately when you import them.
   But if you use lazy(), the component is loaded only when it is used in the app.
   Until then, React shows a fallback message (like a loading spinner or text) using <Suspense>.
What Happens Here?
✅ When the app starts, CodeSplit is not loaded immediately.
✅ When React sees <CodeSplit /> inside <Suspense>, it fetches the component dynamically.
✅ Until it loads, React shows "Loading CodeSplit component...".
✅ Once loaded, the CodeSplit component appears on the screen.
Why Use Lazy Loading?
   It reduces initial load time (your app starts faster).
   It loads components only when needed, improving performance.

To implement code splitting you need to install webpack using command : npm install webpack webpack-cli --save-dev
Also you need to configure the webpack.config.js file.
If you use code splitting, in the browser under network tab you will see chunk.js file. If you do not use code splitting then you will find only the bundle.js file under network tab of the browser.

Here is the App component code that is used to apply the code splitting for this CodeSplit child component. The CodeSplit component chunk will only be loaded on demand, not before that. For that, first we used here the lazy method, which accept a function as an argument and return a dynamic import of this code split component. 

React.lazy is a function that allows you to load a component lazily. 
It enables code splitting by allowing you to import a component asynchronously or dynamically, meaning component is loaded only when needed only.
The Suspense component is used to display a fallback UI while the lazily loaded component is being fetched
Until the CodeSplit component loads, the App component displays the fallback content using <Suspense>. (Suspense will keep CodeSplit as a suspence). Once the component is fetched or loaded, the component CodeSplit will be displayed and it replace this fallback UI.

5 Pros of Code Splitting: 
It is not necessary that code splitting is good for every project and every time you should apply it. Generally good for large projects only
Advantages of Code Splitting :
1️⃣ Faster Initial Load Time
Code splitting improves performance by loading only the necessary code for the current view or feature. This reduces the initial load time, making the application start faster.
2️⃣ Optimized Bandwidth Usage
By loading only the required code for a specific page, code splitting reduces network data transfer. This is especially beneficial for slow mobile networks, where bandwidth is limited.
3️⃣ Improved Caching
Smaller and more focused code chunks enhance browser caching efficiency. Frequently visited content remains cached, reducing unnecessary reloading.
4️⃣ Parallel Loading
Multiple smaller chunks can load simultaneously, leading to faster overall performance.
5️⃣ Easier Maintenance
Code splitting makes the codebase more modular and independent, simplifying debugging and future updates.

5 Cons of Code Splitting :
1️⃣ Increased Complexity
Implementing code splitting adds extra complexity to the application, which can slow down development and require more effort to manage.
2️⃣ Tooling Dependencies
Proper code splitting relies on build tools like Webpack and Babel, which require careful configuration and maintenance.
3️⃣ Risk of Runtime Errors
Dynamically loading code at runtime increases the chance of errors, making thorough testing essential.
4️⃣ More HTTP Requests
Splitting code into multiple chunks can lead to more network requests, potentially affecting performance.
5️⃣ Steep Learning Curve
Developers new to code splitting may need time to understand its concepts and best practices, making adoption challenging.

The import() function returns a promise that allow dynamic loading of modules. For example importing CodeSplit component using lazy method.

The fallback prop displays a loading indicator in the UI while the dynamically imported component is loading.

We can dynamically load CSS files using code splitting. It allows you to load styles on-demand along with the corresponding components.

Use tools like Webpack Bundle Analyzer to analyze the size and composition of chunks.

==========================================================================================================================

15.React - Others :
A Higher-Order Component (HOC) is a function that takes a component as input and returns a new component with additional functionality. In this case, HOCLogger adds console logging whenever the wrapped component renders.
Error logging is real example of using a Higher-Order Component (HOC).
A Higher-Order Component is a component which takes another component as an argument and adds extra features to another component. 
HOC can be used for providing logging functionality to all the components in a reusable way.

5 ways to Style React components :
   1.Inline Styles
   2.CSS Stylesheets
   3.CSS-Modules
   4.Global Stylesheets
   5.CSS Frameworks like Bootstrap
Mostly we use seperate style sheets to style our components.

React Vs React Native :
React :
   1.React is a library
   2.React is used for building web interfaces / applications.
   3.Run on Web browsers.
   4.HTML and CSS are used for Ul.
   5.Deployed as web applications.
React Native :
   1.React Native is a framework.
   2.React Native is used for building mobile applications.
   3.Run on iOS and Android platforms.
   4.Native UI components (e.g., View, Text) are used for UI.
   5.Deployed through app stores(e.g., App Store, Google Play).

GraphQL : React is for rendering or displaying data in the UI. However, fetching data from a database or an API is handled by GraphQL.
GraphQL is a query language for APIs (Application Programming Interfaces) and a runtime for executing those queries with your existing data.
GraphQL and React are often used together. React components can use GraphQL queries to fetch the data required for rendering.

Top 3 ways to achieve state management :
1.useState Hook :
   When to use: When you have to manage the state Simple single component-level state.
   Reason: Ideal for applications having small components and isolated state because it is lightweight and built into React only. Isolated state means one component state does not depends on another component state.
2.Context API :
   When to use: When you need to avoid prop drilling and share global data across multiple components.
   Reason: Provides a simpler way to pass data through the component tree without manually passing props.
   It is good for small & medium scale applications only.
3.Redux :
   When to use: Best for large-scale applications with complex state management needs.
   Reason: Redux uses a centralized store with actions and reducers which makes state predictable, easier to debug, and scalable. Scalable - When you add more components application should not break.

Authentication Process in a Web Application
In a web application, the browser acts as the frontend, and the client framework used here is React. The API (backend) serves as middleware, handling authentication and data processing. The API can be built using technologies like Node.js, ASP.NET Core, Django, or Java.
The authentication process consists of 8 steps:
1️⃣ User Login:
The user opens the browser, enters their username and password, and submits them via a POST request to the API.
2️⃣ API Validates Credentials:
The API receives the credentials and authenticates them.
3️⃣ Token Generation:
If the credentials are valid, the API creates a JWT token and sends it back to the client.
If the credentials are invalid, the API returns an authentication error.
4️⃣ Client Stores Token:
The client stores the received JWT token in local storage (on the user's browser).
5️⃣ Subsequent Requests:
For future API requests, the client attaches the JWT token in the request headers.
6️⃣ API Validates Token:
The API receives the request with the token and verifies its signature using cryptographic algorithms.
7️⃣ Authorization Check:
If the token is valid, the API allows access to the requested data.
If the token is invalid or expired, access is denied.
8️⃣ Data is Sent to Client:
Once authentication is successful, the API sends the requested data to the client, which is then displayed in the browser.

React Profiler : used to analyze the performance of a React application
React Profiler is a set of tools in React that allows developers to profile(analyze) the performance of a React application. In every technology like JAVA, .NET or React the profiler has the same meaning.

If a piece of code in your React application is taking too long to execute, you can analyze its performance using the React Profiler component.
How to Use React Profiler for Performance Analysis
1️⃣ Wrap the slow code inside the <Profiler> component and set its id and onRender properties.
2️⃣ onRender is a function that automatically executes whenever the code inside the Profiler starts and stops.
3️⃣ Inside the onRender function, track the start time, execution time, and end time to measure performance.
4️⃣ This data helps in identifying performance bottlenecks and optimizing your code efficiently.

fetch Vs Axios :
These are the two ways to fetch data from the external APIs. 
fetch : 
   1.fetch is a built-in JavaScript function, so it doesn't require any additional libraries.
   2.fetch returns Promises, making it easy to work with asynchronous code using async/await syntax.
   3.If you want to keep http requests simple, fetch is a good choice.
Axios :
   1.Axios is a third-party library, that simplifies the process of making HTTP requests.
   2.Axios allows you to use interceptors, which can be good for tasks like request/response logging, authentication, and error handling.
   3.If you want to intercept http request/response, or improve error handling then Axios has more features to do it. Better for advanced features like request cancellation, automatic JSON parsing, and improved error handling.

What is an Interceptor in Axios?
An interceptor is a function that modifies HTTP requests or responses before they are sent or received. Axios provides two types of interceptors:
1️⃣ Request Interceptor – Runs before the request is sent.
   Can be used for adding authentication tokens, logging requests, or modifying headers.
2️⃣ Response Interceptor – Runs before the response is processed.
   Helps in handling errors, modifying response data, or logging responses.


The popular testing libraries for React are : Jest, Enzyme, Cypress & React testing library(built-in)

Optimize Performance in a React application :
1️⃣ Use Memoization (useMemo & useCallback) – useCallback hook cache function results & memorize functions reference and useMemo hook prevent unnecessary recalculations. Using both of these will improving performance.
2️⃣ Optimize Renders with React.Fragment – Instead of using extra <div> tags as wrappers, React.Fragment helps avoid unnecessary elements, reducing the number of extra DOM nodes and improving performance.
3️⃣ Use Lazy Loading (React.lazy) – Load components lazily to reduce the initial bundle size, improving the first-load performance.
4️⃣ Implement Code Splitting – Split your application into smaller chunks using React Lazy & Code Splitting so that only necessary code loads when required, enhancing performance.
5️⃣ Optimize Images & Assets –
   ✅ Compress & optimize images to reduce file size.
   ✅ Use responsive images for different screen sizes.
   ✅ Leverage lazy loading for images to reduce network bandwidth and speed up rendering.

Reactive Programming : 
For example when you type anything in google, it instantly suggests results based on what you type. For this Google continuously listens to your keyboard inputs and, based on those changes, fetches data from its servers in real time to display suggestions. This is a great example of reactive programming where the system reacts to user input dynamically by updating and rendering data instantly.
Defn : Reactive programming is a programming paradigm that focuses on reacting to changes and events in a declarative and asynchronous manner.
Declarative means a programming style where you write the code for what you want to achieve, rather than specifying step-by-step how to achieve it. For example, JSX in React has declarative syntax.
Asynchronously means an action that does not block other actions. Fetching the result from google server will not hang or block the UI.

Reactive Programming is focused on reacting to the changes and events. If you are using event handling, dealing with state management techniques like react hooks, redux or component lifecycle methods then most likely you are already doing reactive programming in your project.
To implement reactive programming in react project we can use following :
   1.State and Props : Reacting to changes in local component state and passing data reactively through props
   2.React Hooks : Leveraging useState and useEffect hooks for managing state and side effects in functional components.
   3.Event Handling : Reacting to user interactions through event handling and updating state accordingly.
   4.Context API : Sharing and managing global state reactively across components using the Context API.
   5.Redux : Using state management libraries like Redux for managing complex application state reactively.
   6.Component Lifecycle Methods : Using class components and lifecycle methods for handling side effects and updates.
   7.Async/Await : Utilizing async/await syntax for handling asynchronous operations reactively.
   8.RxJS and Observables : Leveraging RxJS for handling asynchronous operations and data streams in a reactive manner.

Passing data from child to parent component (reverse):
Normally we pass data from parent to child component and that is done by using props but sometimes we have to reverse the data flow that is from child to parent and that can be done with the help of callback functions. 
Parent provides a callback function to child and then child component can then invoke this callback to pass data back to the parent.
Example from pdf explanation :
   First, inside the parent component, we define a callback function that takes an argument data, which will be sent from the child component.
   Next, we call the child component inside the parent and pass this callback function as a prop.
   Inside the child component, we receive the callback function as a prop and define a new function, dataToParent, which will send data back to the parent.
   When the user clicks the send button, the value entered in the input field will be passed as an argument to the callback function.
   This callback function executes inside the parent component, receiving the child’s input value, and we log the data to the console.
In Short flow : User Types → State Updates in Child → User Clicks "Send" → dataToParent Calls fromChild → Parent Receives Data → Logs in Console

==========================================================================================================================
REDUX :
Redux is an open-source JavaScript library used for state management. It provides a centralized store that holds the entire state of an application, and allows components to access and update the state in them in a predictable manner. 
For example suppose in your application you have four components. Now you can manage the state of these components by using a centralized store.
To pass the state to the components the centralized store uses reducers, actions, dispatchers to pass the state from store to components.

To manage states in React applications, we have two options. 
   Either we can use the hooks, which are inbuilt functions in react libraries, so for them we do not have to install any extra package or dependencies. 
   Or we can use redux, which is a separate package and needs to be installed. And redux can be used with other frameworks as well, not just react.

When to use React with Hooks :
   1.Your application is small or medium (5-50 Components)
   2.Your application has simple state management.
   3.State is specific to components meaning components are not sharing states among themselves.
When to use React with Redux :
   1.Your application is big or complex (>50 Components)
   2.Your application has complex global state management.
   3.Share state among multiple components.

Flow of data in React using Redux : If you are using redux for state management in your react application, then you must must understand the flow of data in it. reducer and store are only responsible for updating storing and distributing the state to all the application components.
In short flow : Component(Component.js) → Action creator(action.js) → Store(store.js) → Reducer(reducer.js) → Store(store.js) → Component(Component.js)

Redux Flow Explained
1️⃣ User Interaction
   The user interacts with the UI inside the component (e.g., clicks a button or moves the mouse).
2️⃣ Action Triggered
   The component calls an action creator function (usually defined in actions.js).
3️⃣ Action Dispatched
   The action is dispatched to the Redux store, which holds the centralized state.
4️⃣ Reducer Processes the Action
   The store sends both the previous state and the dispatched action to the reducer.
   The reducer contains logic to process the action and generate a new state.
5️⃣ State Updated in Store
   The store updates and stores the new state.
6️⃣ Component Re-Renders if Needed
   If a component needs the updated state, Redux provides it, causing a re-render.
   If not, the state remains in the store until required.

To install redux in project : npm install redux react-redux

Action Creators :
Action creators are functions that create and return action objects.
In this example, here clicking on increment will increment the counter or state, but now the state is coming from Redux store. When implemented using hook, then it was coming from application state. Same case with decrement. 

Action Creators:
   Action creators are just functions.
   They return an action type, which tells Redux how to update the state.
   These action creators are exported so they can be used in components.
State Update Process:
   When the user clicks Increment, the action creator returns an action type: "INCREMENT".
   When clicking Decrement, it returns: "DECREMENT".
   Redux receives this action and updates the state accordingly.

Why Not Put Action Creator Logic Inside the Component? 
1️⃣ Reusability
   Action creators are often used in multiple components.
   If we define them inside a single component, we will repeat the same logic in different places.
   By keeping them in a separate file, we can import and reuse them anywhere.
2️⃣ Maintainability & Scalability
   In this simple case, we’re only dealing with an action type ("INCREMENT" or "DECREMENT").
   But in a real-world app, actions often include a payload (e.g., { type: "ADD_TO_CART", payload: product }).
   They may also involve additional logic like API calls, authentication, or conditional checks.
   Keeping them in a separate file makes the code modular, organized, and easy to manage as the application grows.

Action Creators, Action Object & Action Type :
   Action creator functions are functions that create and return action objects. These action objects are used by components later.
   Action object are plain JavaScript objects returned by action creator functions.
   An action type is a string constant that defines the type of action. Its like a property of action object that we can access using dot notation. (actionObject.propertyName)

React Component Structure while using Redux for state management :
Example: Counter Component 
   We will implement a simple increment/decrement counter inside CounterComponent.js.
🔹 Data Flow in React-Redux
   When using Redux, a component follows these two key actions:
   1️⃣ Dispatch Actions: When the user clicks the increment or decrement button, the component retrieves the action from the action creator and dispatches it to the reducer via the store.
   2️⃣ Receive Updated State: The component receives the updated state from the Redux store and re-renders accordingly.
   📝 Important: The component only dispatches actions, but the state update is handled by the reducer and store.
Step-by-Step Breakdown of CounterComponent.js
1️⃣ Import Necessary Functions
Import the connect function from react-redux.
Import increment and decrement functions from our action creators.(action.js)
2️⃣ Define the Component
The component receives three props:
   count: The current state from the Redux store.
   increment: The action creator for incrementing the count.
   decrement: The action creator for decrementing the count.
3️⃣ Dispatch Actions
When the increment button is clicked, an action object of type "INCREMENT" is created.
Similarly, when the decrement button is clicked, an action of type "DECREMENT" is created.
These actions are sent to the reducer via the store using mapDispatchToProps.
4️⃣ Receive State from Store
The function mapStateToProps retrieves the current state from the store.
This state is then assigned to the count prop and displayed inside an <h1> tag.
5️⃣ Connect Component to Redux Store
Both mapStateToProps and mapDispatchToProps are passed into the connect function.
The connect function links the CounterComponent to the Redux store.
Summary : 
✅ mapStateToProps: Retrieves state from the Redux store.
✅ mapDispatchToProps: Dispatches actions to update state.
✅ connect(): Links the component to the Redux store.

IMP FLOW TO REMEMBER :
component calls an action creator function to create an action object - the action creator function returns an action object - the component uses dispatch(action) function to send the action object to the store - then action object forwarded to the store - store passes it to reducer - reducer takes the current state and the action and returns a new state to the store - store notifies to the components about new state - component re-render new state 
Check React-Redux Data Flow Explained in React.js

Store : The Redux store is the central place where the entire application's state is stored and managed. It acts as a single source of truth and enables predictable state updates.
The store maintains the application's current state.
It stores the latest version of the state and makes it available to components. 
Components can read the state from the store using mapStateToProps (in class components) or useSelector (in functional components).
The store accepts actions (sent via dispatch()) and forwards them to the reducers. When an action is dispatched, the store forwards it to the reducer. The reducer then creates a new state based on the action type. When the state updates, the store notifies components that are subscribed to it. This ensures that components get the latest state updates.
   Redux store enables the application to update state using the defined reducer.
   Redux Store is a centralized place for holding the state of all the components in the application

Reducer : A reducer is a pure function in Redux that takes the current state and an action and returns the new state based on the action type. It does not modify the original state directly, instead, it returns a new object.(IMP : In Redux, state is immutable, meaning we never modify the existing state. Instead, we create a new object and return it)
Key Points About Reducers :
✅ Pure Functions → They do not modify the original state, only return a new one.
✅ No Side Effects → No API calls, DOM manipulation, or modifying external variables inside reducers.
✅ Handles All Actions → If an action is not recognized, it returns the current state instead of modifying anything.
   A reducer is a function that takes the previous state and an action as arguments and returns the new state of the application.

Core Principles of Redux :
1.Single Source of Truth (Store) : 
   The entire application state is stored in a single centralized store.
   This makes data management simpler and ensures a consistent view across the application.
2.State is Read-Only (Unidirectional) :
   The state cannot be modified directly. The state is immutable in react.
   Changes follow a unidirectional data flow: Dispatch Action → Store Updates State → UI Re-renders
   This makes state transitions traceable, ensuring that the previous state is never altered—instead, a new state is created.
3.State Updates via Pure Functions (Reducers) : 
   Reducers are pure functions responsible for modifying the state.
   A pure function always returns the same result when given the same input, ensuring predictability and consistency.
4.Actions Trigger State Changes(Actions) : 
   Actions are simple JavaScript objects that describe what state changes should happen.
   Actions do not modify the state directly; instead, they tell the store to invoke the reducer and update the state.
   Without an action, no state change occurs.
5.Predictable State Changes (Actions) :
   Since state updates are driven by actions, we can predict how the state will change.
   Example:
      If an INCREMENT action is dispatched, the new state will have an incremented count.
      This ensures that state changes remain clear and predictable.
Redux enforces structured, traceable, and predictable state management, making applications scalable, maintainable, and debuggable.

5 benefits of using Redux in React :
   1.Predictability & Centralization : The application state is stored in a single, predictable and centralize source (the store).
   2.Maintainability : For larger application, Redux is a structured and scalable approach for managing state.
   3.Debuggability : Redux has powerful developer tools that make it easier to trace and debug state changes. 
   4.Interoperability : Redux can be used with various JavaScript frameworks and libraries. Not just React
   5.Community & Ecosystem : Redux has a large and active community, resulting in a rich ecosystem of tools and extensions.

local component state Vs Redux state :
local component state : Scope, Management, Performance, Complexity, Testing
   1.local component state Scope is Limited to the component where the state is defined.
   2.Management: local component state State Managed internally by the component.
   3.Performance: local component state are Generally, more performant for small-scale applications.
   4.Complexity: local component state are Simpler to set up and manage.
   5.Testing: local component state are Simpler to test with component-specific state.
Redux state :
   1.Redux state Scope is Global and accessible across all the components via Redux Store.
   2.Redux State Managed externally by the Redux store.
   3.Redux state are More performant for large applications.
   4.Redux state Comparatively complex to manage.
   5.Redux state Requires more comprehensive testing due to global nature and interactions between components.

Disadvantages of Redux : 
1.Boilerplate Code: Implementing Redux requires writing extensive boilerplate code in action, reducer,
store, increasing code volume and complexity.
2.Learning Curve: Understanding Redux concepts can be challenging, posing a learning curve for
developers, especially those new to React state management.
3.Verbosity and Complexity: As projects grow, Redux code may become verbose and complex, demanding careful
management of actions and reducers
4.Overhead for Small Projects: In small projects, Redux may introduce unnecessary complexity, potentially
outweighing its benefits in development efficiency
5.Global State for Local Components: Overusing Redux for local state introduces unnecessary complexity, as not all state
requires a global scope.
6.Integration with Non-React Libraries: Integrating Redux with non-React libraries or frameworks may demand additional
effort and customization, potentially adding complexity to the project

IMP : 
   For large applications use Redux with React. 
   For small to medium scale application use :
      1.React Context API + useReducer (For Small to Medium Apps)
      2.Zustand (Minimalist & Efficient)
      3.Recoil (Lightweight & Asynchronous State Management)
      4.Jotai (Simpler Alternative to Recoil)
      5.MobX (Reactive State Management)

💡 Local State → State that belongs to a single component and is not shared with others.
💡 Global State → State that is shared across multiple components in the app.

Short Answers :
Provider component of react-redux will make the Redux store available to all connected components

The connect function is used to make the connection between a React component and the Redux store.

Important File for Redux Implementation:
   1.actions.js: Defines action creators.
   2.reducer.js: Update the state based on the action and previous state received from the store.
   3.store.js: Stores the updated state received from reducer and export it to the components.
   4.CounterComponent.js: React component connected to Redux, uses state and actions to render UI and handle user interactions.

In Redux, immutability is the principle that once an object (such as the state which is readonly) is created, it cannot be changed or modified directly. To make changes to the state, you need to dispatch an action.

2 Typical properties in most of the React-Redux project:
   1.Type: Type describes the type of action being performed.
   2.Payload: Carries data from mostly from external API’s.

mapDispatchToProps() function dispatches action to the store to update the state using a reducer. mapStateToProps() function gets the state for the component from Redux store.

In a unidirectional data flow architecture, data follows a single, clear path. Redux enforces this pattern to provide a predictable state management mechanism.

Redux handles communication between components through a centralized state management system(store).

Along with the action type, payload property in Redux actions holds the data being sent to the reducer. Payload contains information necessary for the reducer to update the state based on the action.

==========================================================================================================================
Redux - Thunk/ Middleware/ Error Handling/ Flux :

Regular Action creator Vs Thunk action creator :
A regular action creator returns a plain JavaScript object with a type property, describing the type of action to be performed. But in some complex scenarios, our application has to decide the action based on the asynchronous data fetched from the external API. So in those cases like this, we can use a Thunk Action Creator in Redux. 
In example fetchData is the thunk action creator which uses fetch method to fetch data from external API. Based on data fetched from the API, the action type will be decided. If data is received, then action type will be success. If data is not received, then action type will be failure.
3 main points about Thunks: 
   1.A Thunk action creator is a function that returns another function. It does not return an action object like a regular action creator. Like in example fetch function is returned
   2.This returned function dispatched to the Redux store. Like action object dispatched to store by action creators.
   3.Thunks are used to handle complex asynchronous operations, such as data fetching or API calls, based on which the action will be decided.

Middleware in React-Redux : 
We know flow of Data in React-Redux application. If the scenario or requirement is complex, then we can use the middleware. Middleware sits between dispatch action & the store. This middleware will only post and get the data from the API and based on the data, it can modify the existing action. So middlewares are mostly used with thunk action creators only in the complex scenarios. And then after deciding the action, it will be forwarded to the reducer with previous state to derive the new state. 
   Middleware provides a mechanism to add extra functionality to the Redux store.
   Middleware can intercept actions, modify them, or execute additional logic in actions before they reach the reducers

Use middleware and Redux Thunk action creators to handle asynchronous operations & side-effect in React-Redux.

Error handling in Redux can be done by using try-catch blocks in action creator, middleware and reducers. 

Flux Vs Redux : 
   Flux is an architecture pattern. It provides a set of design principles for organizing code to manage state in a unidirectional data flow. 
   Redux is a library that implements the Flux architecture.
   So flux is the architecture pattern & Redux is the practical way to implement that idea.

When the user clicks a button or triggers an event (e.g., typing, hovering, submitting a form), the component needs to update the state. However, instead of updating state directly, the component dispatches an action. Based on dispatched action the action creator function returns an action object which contains a type field that tells Redux what should happen. Then Redux forwards the action to the store. The store receives the dispatched action and passes it to the reducer. The reducer is a pure function that takes the current state and the action and returns a new state. It determines how the state should change based on the action.type. After processing the action, the reducer returns the new state to the Redux store. The store updates itself with this new state & notifies the component that the state has changed. Then the component re-renders with the new state.  
==========================================================================================================================
TypeScript :
Typescript is an open-source programming language. TypeScript have type system, enums, generics, interfaces and many more things. But JavaScript do not have those things. So this is the most important advantage of TypeScript over JavaScript. But the thing is browser do not understand TypeScript code. So, Angular ot typescript compiler compile or convert all the TypeScript code in JavaScript first and then run it on browser. 
1.TypeScript is a strongly typed language while JavaScript is a loosely typed language.
2.TypeScript is a superset of JavaScript which means all the JavaScript code is also a valid TypeScript code.
3.TypeScript has object-oriented features like classes, interfaces, etc., whereas JavaScript do not have object oriented features. 
4.TypeScript detect errors at compile time whereas JavaScript detect errors at runtime only.




`useState` is one of the most fundamental and commonly used hooks in React. It allows you to add **state** to functional components, enabling them to manage and react to changes in data over time. Before hooks were introduced in React 16.8, state management was only possible in class components using `this.state`.
---
### Key Features of `useState`
1. **State Management**: Allows functional components to have stateful logic.
2. **Re-renders on Update**: When the state is updated, the component re-renders to reflect the new state.
3. **Simple API**: Easy to use and integrate into functional components.
---
### Syntax
```javascript
const [state, setState] = useState(initialState);
```
- **`initialState`**: The initial value of the state. This can be a primitive (e.g., `number`, `string`, `boolean`) or an object/array.
- **`state`**: The current value of the state.
- **`setState`**: A function used to update the state. When called, it triggers a re-render of the component.
---
### Basic Example
Here’s a simple example of a counter component using `useState`:
```javascript
import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state with 0
  const increment = () => {
    setCount(count + 1); // Update the state
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Counter;
```
---
### Key Concepts
#### 1. **Initial State**
   - The `initialState` argument is only used during the **first render**. Subsequent renders ignore it.
   - Example:
     ```javascript
     const [count, setCount] = useState(0); // `count` starts at 0
     ```
#### 2. **Updating State**
   - Use the `setState` function to update the state.
   - Example:
     ```javascript
     setCount(count + 1); // Updates `count` to `count + 1`
     ```
#### 3. **Functional Updates**
   - If the new state depends on the previous state, use the **functional form** of `setState` to avoid issues with stale state.
   - Example:
     ```javascript
     setCount((prevCount) => prevCount + 1); // Uses the previous state value
     ```
#### 4. **State with Objects or Arrays**
   - When working with objects or arrays, ensure you update them immutably to avoid unexpected behavior.
   - Example:
     ```javascript
     const [user, setUser] = useState({ name: "John", age: 25 });
     const updateName = () => {
       setUser({ ...user, name: "Jane" }); // Spread the old state and update `name`
     };
     ```
---
### Advanced Examples
#### 1. **Multiple State Variables**
   - You can use multiple `useState` hooks in a single component to manage different pieces of state.
   - Example:
     ```javascript
     const [name, setName] = useState("John");
     const [age, setAge] = useState(25);
     ```
#### 2. **Complex State (Objects)**
   - Use a single `useState` hook to manage an object with multiple properties.
   - Example:
     ```javascript
     const [user, setUser] = useState({ name: "John", age: 25 });
     const updateAge = () => {
       setUser({ ...user, age: 30 }); // Update only the `age` property
     };
     ```
#### 3. **Lazy Initialization**
   - If the initial state requires an expensive computation, you can pass a function to `useState` to calculate it lazily (only during the first render).
   - Example:
     ```javascript
     const [count, setCount] = useState(() => {
       console.log("Calculating initial state");
       return 0; // This runs only once
     });
     ```
---
### Common Pitfalls
#### 1. **Stale State**
   - If you update state based on the current state (e.g., `setCount(count + 1)`), you might encounter stale state issues in asynchronous scenarios. Use the functional form instead:
     ```javascript
     setCount((prevCount) => prevCount + 1);
     ```
#### 2. **Batching Updates**
   - React batches state updates for performance reasons. If you need to perform an action after the state is updated, use `useEffect`:
     ```javascript
     useEffect(() => {
       console.log("Count updated:", count);
     }, [count]);
     ```
#### 3. **Avoid Direct Mutations**
   - Always update state immutably, especially with objects and arrays. Direct mutations won't trigger re-renders.
   - Example of **incorrect usage**:
     ```javascript
     user.name = "Jane"; // ❌ This won't trigger a re-render
     ```
   - Example of **correct usage**:
     ```javascript
     setUser({ ...user, name: "Jane" }); // ✅ Creates a new object
     ```
---
### When to Use `useState`
- When you need to manage **local component state** (e.g., form inputs, toggles, counters).
- When the state is **simple** and doesn't require complex logic or global access.
- When you want to **trigger re-renders** based on state changes.
---
### Example: Form Input with `useState`
```javascript
import React, { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
```
---
### Summary
- `useState` is the primary hook for managing state in functional components.
- It provides a simple way to declare and update state, triggering re-renders when the state changes.
- Use it for local state management, and combine it with other hooks like `useEffect` for more advanced scenarios.


`useRef` is a powerful hook in React that allows you to create a mutable object that persists across renders. Unlike state (`useState`), updating a `useRef` object does **not trigger a re-render** of the component. This makes it useful for a variety of tasks, such as:
1. **Accessing DOM elements directly**.
2. **Storing mutable values** that don't need to trigger re-renders.
3. **Keeping track of previous values** or other persistent data.
---
### Key Features of `useRef`
1. **Mutable Object**: The `useRef` object is mutable, meaning you can update its `.current` property without causing a re-render.
2. **Persists Across Renders**: The `useRef` object remains the same between renders, unlike regular variables that are re-initialized on every render.
3. **No Re-renders**: Changing the `.current` property of a `useRef` object does not trigger a re-render.
---
### Syntax
```javascript
const ref = useRef(initialValue);
```
- `initialValue`: The initial value to store in the `.current` property of the ref object.
- `ref.current`: The mutable value stored in the ref object.
---
### Common Use Cases
#### 1. **Accessing DOM Elements**
   - `useRef` is commonly used to directly access and manipulate DOM elements.
   - Example: Focusing an input field when a button is clicked.
```javascript
import React, { useRef } from "react";
const FocusInput = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus(); // Focus the input element
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
export default FocusInput;
```
---
#### 2. **Storing Mutable Values Without Re-renders**
   - `useRef` can store values that need to persist across renders but don't need to trigger re-renders when updated.
   - Example: Keeping track of a counter without re-rendering the component.
```javascript
import React, { useRef } from "react";
const CounterWithoutRerender = () => {
  const counterRef = useRef(0);
  const handleClick = () => {
    counterRef.current += 1; // Update the ref value
    console.log("Counter:", counterRef.current); // Log the updated value
  };
  return (
    <div>
      <p>Counter: {counterRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default CounterWithoutRerender;
```
---
#### 3. **Keeping Track of Previous Values**
   - `useRef` can be used to store the previous value of a state or prop.
   - Example: Displaying the previous value of a counter.
```javascript
import React, { useState, useRef, useEffect } from "react";
const PreviousValueTracker = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = count; // Update the ref with the current count
  }, [count]); // Run this effect whenever `count` changes
  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default PreviousValueTracker;
```
---
#### 4. **Storing Interval or Timeout IDs**
   - `useRef` is useful for storing IDs returned by `setInterval` or `setTimeout`, so they can be cleared later.
```javascript
import React, { useState, useRef } from "react";
const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef();
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current); // Clear the interval
  };
  return (
    <div>
      <p>Time: {time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};
export default Timer;
```
---
### Important Notes About `useRef`
1. **No Re-renders**: Updating a `useRef` object does not trigger a re-render. If you need a re-render, use `useState` instead.
2. **Initial Value**: The initial value passed to `useRef` is only used during the first render. Subsequent renders ignore it.
3. **`.current` Property**: Always access and update the `.current` property of the ref object.
4. **Not for JSX**: While you can use `useRef` to store any value, it's primarily designed for DOM access and mutable values.
---
### When to Use `useRef`
- When you need to **directly interact with a DOM element** (e.g., focus, scroll, or measure an element).
- When you need to **store mutable values** that don't need to trigger re-renders (e.g., timers, counters, or previous values).
- When you need to **persist data across renders** without causing re-renders.
---
### Summary
- `useRef` is a versatile hook for managing mutable values and interacting with DOM elements.
- It does not trigger re-renders when updated, making it ideal for performance-sensitive tasks.
- Use it alongside other hooks like `useState` and `useEffect` to build efficient and dynamic React components.



# 1.React-Basics-I
### **Q1: What is React? What is the role of React in software development?**  
**A:** React is an open-source JavaScript library used for building user interfaces.  
React simplifies the creation of single-page applications by using reusable components.  

---

### **Q2: What are the key features of React?**  
**A:** The key features of React are:  
1. Virtual DOM  
2. Component-Based Architecture  
3. Reusability and Composition  
4. JSX (JavaScript XML)  
5. Declarative Syntax  
6. Community and Ecosystem  
7. React Hooks  

---

### **Q3: What is DOM? What is the difference between HTML and DOM?**  
**A:** DOM (Document Object Model) represents the web page as a tree-like structure that allows JavaScript to dynamically access and manipulate the content and structure of a web page.  

HTML is just a markup language used for writing web pages, whereas DOM is the representation of that HTML in memory, allowing dynamic updates.  

---

### **Q4: What is Virtual DOM? What is the difference between DOM and Virtual DOM?**  
**A:** The Virtual DOM is an in-memory copy of the real DOM, used by React to improve application performance.  

React first updates the Virtual DOM and then efficiently updates only the necessary parts of the real DOM, reducing unnecessary re-renders.  

**Differences between DOM and Virtual DOM:**  
1. The DOM represents the actual web page, whereas the Virtual DOM is a lightweight copy.  
2. Updating the real DOM is slower, while updating the Virtual DOM is faster.  
3. The Virtual DOM minimizes re-renders by only updating changed elements.  
4. React uses a reconciliation process to sync the Virtual DOM with the real DOM.  

---

### **Q5: What are React components? What are the main elements of it?**  
**A:** A React component is a reusable building block for creating user interfaces in web applications.  

**Main elements of a React component:**  
1. Importing the React library  
2. Defining a functional or class-based component  
3. Returning JSX for rendering the UI  
4. Exporting the component for use in other files  

---

### **Q6: What is a Single Page Application (SPA)?**  
**A:** A Single Page Application (SPA) is a web application where only specific parts of the page update dynamically without reloading the entire page.  

**Example:** YouTube is an SPA because content loads dynamically without refreshing the page.


Here are the extracted questions and answers from your text:

---

### **Q1: What is the arrow function expression in JSX?**  
Arrow function is a way of declaring a function using the arrow (`=>`) operator. The syntax:  
```jsx
const functionName = (parameters) => { 
   // function body
};
```
- No need to use the `function` keyword.
- No need to specify a function name when assigning it to a variable.
- Used commonly to define React components.

---

### **Q2: How to set up the first React project?**  
1. Install Node.js from the official website.  
2. Install a code editor (VS Code recommended).  
3. Open VS Code → Open terminal → Run:  
   ```sh
   npx create-react-app my-app
   ```
4. Open the created project folder in VS Code.  
5. Start the project with:  
   ```sh
   npm start
   ```
---

### **Q3: How does the React app load and display components in the browser?**  
1. User requests the website in a browser.  
2. `index.html` (single-page application entry point) is loaded.  
3. `index.js` (entry point for React) is executed.  
4. `index.js` renders `App.js` (root component).  
5. `App.js` renders child components.  
6. The final UI is displayed in the browser.  

---

### **Q4: What is the difference between React and Angular?**  
| Feature           | React                     | Angular                  |
|------------------|--------------------------|--------------------------|
| Type            | Library                   | Framework                |
| DOM            | Virtual DOM (faster)      | Real DOM (slower)       |
| Size           | Lightweight                | Larger due to built-in features |
| Dependencies   | External libraries needed | Many built-in features (forms, routing) |
| Learning Curve | Easier, more jobs         | Harder, requires TypeScript |

---

### **Q5: What are five JS frameworks other than React?**  
1. Angular  
2. Vue.js  
3. Backbone.js  
4. Ember.js  
5. Svelte  

---

### **Q6: Is React a library or a framework?**  
- React is a **library** because it provides functions but does not enforce project structure.  
- Frameworks (e.g., Angular) define a strict structure for coding.  
- However, React has evolved and now provides many features like a framework.

---

### **Q7: How does React provide reusability and composition?**  
- **Reusability**: Components can be reused in multiple places in an app.  
- **Composition**: Components can be combined to form complex UIs.  
- Example:  
  ```jsx
  const Button = ({ text }) => <button>{text}</button>;
  const App = () => <Button text="Click Me" />;
  ```

# 3.React Project - Main Files & Folders

1. **What is NPM? Why do we install NPM?**  
   NPM is used to manage the dependencies for a React project, including the React library itself. In other words, NPM is the package manager that loads the `node_modules` folder. If you do not install NPM, you will have to download all the React libraries one by one manually, which may lead to missing dependencies and impact development time. NPM installs all the libraries at once, avoiding the need for separate downloads.

2. **What is the role of the `node_modules` folder?**  
   The `node_modules` folder contains all the dependencies of the project, including the React libraries themselves.

3. **What is the role of the `public` folder in React?**  
   The `public` folder contains static assets that are served directly to the user’s browser, such as images, fonts, and the `index.html` file. These assets do not involve API data fetching, components, or dynamic content.

4. **What is the role of the `src` folder in React?**  
   The `src` folder is used to store all the source code of the application, which is responsible for dynamic changes in the web application.

5. **What is the role of the `index.html` page in React?**  
   The `index.html` file is the single page in a React application where all components are dynamically placed. It is the first page loaded when a user opens the React website. The `<div>` with `id="root"` is replaced by the components from the `index.js` file.

6. **What is the role of the `index.js` file and ReactDOM in React?**  
   The `index.js` file is responsible for replacing the `<div id="root">` in `index.html` with React components using ReactDOM.  
   - ReactDOM is a JavaScript library that renders components to the DOM.  
   - The `index.js` file first uses `createRoot` to reference the root element and then uses the `render` method to render React components inside it.  
   - `React.StrictMode` is an optional wrapper that helps debug and identify issues in the code.

7. **What is the role of the `App.js` file in React?**  
   - `App.js` contains the root component (`App`) of the React application.  
   - The `App` component acts as a container for all child components.  
   - It defines the structure, layout, and routing of the application.

8. **What is the role of functions and return statements inside `App.js`?**  
   - A function in `App.js` represents a React component.  
   - The function contains the logic for the component.  
   - The function takes in `props` as arguments and returns JSX.  
   - The `return` statement is used to return elements from the function, which are then displayed in the browser.

9. **Can we have a function without a return inside `App.js`?**  
   - Yes, a function without a return statement is possible, but in that case, the component will not render anything in the UI.  
   - A common use case is for logging purposes, where error logging components may not return any UI elements.

10. **What is the role of `export default` inside `App.js`?**  
    - The `export default` statement makes a component available for import in other files.  
    - If `export` is removed, the component cannot be imported elsewhere, causing an error.

11. **Does the file name and component name have to be the same in React?**  
    - No, they do not have to be the same, but it is recommended to keep them the same for better organization and code readability.


# 4.JSX

---

### **What is the role of JSX in React?**  
JSX stands for JavaScript XML because it looks like XML or HTML and is converted to JavaScript. JSX code is internally converted into JavaScript using the React Babel library because browsers only understand JavaScript, not JSX.  

**Three key points:**  
1. JSX is syntactic sugar for `React.createElement`, making code more readable.  
2. Browsers do not understand JSX, so Babel converts it into JavaScript.  
3. JSX makes writing UI components easier, resembling HTML structure.  

---

### **What are the advantages of JSX?**  
1. **Improved readability & writability** – JSX is easier to write and understand.  
2. **Error checking & type safety** – JSX provides early error detection, highlighting syntax errors in advance.  
3. **Supports JavaScript expressions** – Allows embedding JavaScript expressions within curly braces `{}`.  
4. **Improved performance** – JSX optimizes rendering performance.  
5. **Code reusability** – JSX makes it easier to reuse UI components.  

---

### **What is Babel?**  
Babel is a JavaScript compiler that transpiles JSX into regular JavaScript, making it understandable by the browser.  

**Key points:**  
- Browsers do not understand JSX, so Babel converts JSX into JavaScript.  
- Babel is included in the `node_modules` folder when using NPM.  
- Babel enables developers to use modern JavaScript features while ensuring compatibility with older browsers.  

---

### **What is the role of fragments in React?**  
Fragments in React allow grouping multiple elements without adding extra nodes to the DOM.  

**Why use Fragments?**  
- JSX requires elements to be wrapped inside a single parent.  
- Instead of adding an unnecessary `<div>`, fragments provide a cleaner solution.  
- Fragments do not create extra DOM elements, preventing unwanted layout issues.  

**Usage:**  
```jsx
<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>
```  

---

### **What is a spread operator in JSX?**  
The spread operator (`...`) is used to pass multiple properties from an object to a component efficiently.  

**Example:**  
```jsx
const props = { name: "John", age: 25 };
<Component {...props} />
```  
This spreads `name` and `age` into the component, making it easier to pass multiple properties dynamically.  

---

### **What are the types of conditional rendering in JSX?**  
There are four main types:  

1. **If-Else Statement**  
```jsx
if (condition) { return <ComponentA />; } else { return <ComponentB />; }
```  

2. **Ternary Operator**  
```jsx
condition ? <ComponentA /> : <ComponentB />
```  

3. **Logical AND (`&&`) Operator**  
```jsx
condition && <ComponentA />
```  
(*If the condition is false, nothing is rendered.*)  

4. **Switch Statement**  
```jsx
switch (value) {
  case 1: return <ComponentA />;
  case 2: return <ComponentB />;
  default: return <ComponentC />;
}
```  

---

### **How to iterate over a list in JSX? What is the map method?**  
The `.map()` method is used to iterate over an array and transform its elements.  

**Example:**  
```jsx
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // Output: [2, 4, 6]
```  
Instead of using a `for` loop, `.map()` provides a cleaner and more efficient approach.


# 5.Components - Functional Class

1. **What are React components? What are the main elements of it?**  
   - React follows a component-based architecture. A webpage consists of multiple sections or building blocks, which are called components (e.g., header, menu, footer).  
   - A React component has the following structure:  
     - Import React library  
     - Define a functional component that returns JSX  
     - Export the component for use in other files  
   - **Definition:** In React, a component is a reusable building block for creating user interfaces in a web application.

2. **What are the types of components? What are functional components?**  
   - React has two types of components: **Functional Components** and **Class Components**.  
   - Functional components are defined using JavaScript functions or arrow functions.  
   - **Key points:**  
     - Functional components are stateless, but they can manage state using hooks.

3. **How do you pass data between functional components in React?**  
   - **Answer:** Props (short for properties) are used to pass data from a parent component to a child component.

4. **What is prop drilling in React?**  
   - **Definition:** Prop drilling is the process of passing down props through multiple layers of components.  
   - **Example:** A parent component passes data to its child, which then passes it to its child (grandchild).  

5. **Why should you avoid prop drilling? In how many ways can you avoid prop drilling?**  
   - **Problems with prop drilling:**  
     1. Difficult maintenance  
     2. Increased code complexity and reduced readability  
     3. Debugging challenges  
   - **Ways to avoid prop drilling:**  
     1. Context API  
     2. Redux  
     3. Component composition  
     4. Callback function  
     5. Custom hooks  

6. **What are class components in React?**  
   - **Definition:** Class components are declared using JavaScript classes.  
   - **Structure:**  
     - A class component extends the `Component` class from React.  
     - It contains a `render()` method that returns JSX.  
   - **Key points:**  
     1. Defined using JavaScript classes  
     2. Stateful components using lifecycle methods  
     3. Uses a `render()` method to return JSX  

7. **How to pass data between class components in React?**  
   - **Answer:** Use `this.props` in a child component to access data passed from the parent component.  

8. **What is the role of `this` keyword in class components?**  
   - **Definition:** The `this` keyword refers to the instance of the class.  
   - **Example:** When accessing properties in a class component, use `this.props` to refer to the instance.  

9. **What are the five differences between functional and class components?**  
   - **1. Syntax:** Functional components use JavaScript functions, while class components use JavaScript classes.  
   - **2. State:** Functional components were originally stateless but can manage state with hooks, whereas class components use `this.state`.  
   - **3. Lifecycle Methods:** Functional components don’t have lifecycle methods; class components do.  
   - **4. Readability:** Functional components are more concise and readable; class components can be verbose.  
   - **5. `this` Keyword:** Functional components don’t use `this`, while class components do.  
   - **Bonus:** Functional components don’t require a `render()` method, while class components do.  

# 6.React Routing  

#### 1. What is routing and router in React?  
- **Routing** allows you to create a single-page web application with navigation, without the need for a full-page refresh.  
- **React Router** is a library for handling routing in React applications. It enables navigation and rendering of different components based on the URL.  

#### 2. How to implement routing in React?  
To implement routing:  
1. Install React Router using the command.  
2. Import `Routes`, `Route`, and `Link` components from the router library in the `App` component.  
3. Use `<Link>` inside the component for navigation.  
4. Define routes using `<Route>` to specify which component should render for a given path.  
5. Wrap the root `App` component inside the `<BrowserRouter>` in `index.js`.  

#### 3. What are the roles of the Routes and Route components in React Router?  
- **`Routes`**: Acts as a container for multiple `Route` components.  
- **`Route`**: Defines a path and specifies which component should render when the URL matches that path.  

Example:  
If the user enters `website.com/about`, the `About` component will be rendered.  

#### 4. What are route parameters in routing?  
Route parameters are dynamic values passed in the URL.  

Example:  
```jsx
<Route path="/user/:userId" element={<UserProfile />} />
```  
Here, `userId` is a route parameter that passes dynamic data to the `UserProfile` component.  

#### 5. What is the role of the Switch component in React Router?  
The `Switch` component ensures that only the **first matched route** is executed, ignoring the rest.  

Example:  
```jsx
<Switch>
  <Route path="/profile" element={<Profile />} />
  <Route path="/profile/:id" element={<ProfileDetail />} />
</Switch>
```  
If `/profile` is accessed, `Profile` is rendered. If `/profile/123` is accessed, `ProfileDetail` is rendered.  

It is also used to handle 404 (Not Found) routes.  

#### 6. What is the role of the exact prop in routing?  
By default, a route matches all its extension paths.  

Example without `exact`:  
- `/about` ✅  
- `/about/team` ✅  

Example with `exact`:  
```jsx
<Route path="/about" exact element={<About />} />
```  
Now only `/about` will match, but `/about/team` won’t.  

**Definition:** `exact` ensures that a route matches exactly to the provided path.

---

# 7.Hooks -useState useEffect

### **What are React Hooks? Which are the top React Hooks?**  
First thing is, hooks are just functions only, nothing else. But these functions are present inside the React libraries, which you can use or call in your application components to manage the state or for other things.  

Proper definition is:  
React hooks are inbuilt functions provided by React that allow functional components to use state and lifecycle features.  

Second point is, before hooks, class component lifecycle methods were used to maintain state in React application. But now, hooks are getting more and more popular because they are for functional components rather than for class components, okay? And functional components are more simpler.  

The last point is simple: React Hooks, for them we have to import it from the React libraries like this.  

Second part of the question is, **which are the top React Hooks?**  
And here is the list of main hooks with their one-word use:  
- **useState**  
- **useEffect**  
- **useContext**  
- **useReducer**  
- **useCallback**  
- **useMemo**  
- **useRef**  
- **useLayoutEffect**  

These are the important ones. There are more hooks, but these are more important. I have also mentioned each hook use in just one word so that it can be very easy to remember for interviews. In the upcoming questions, I will explain these hooks and their uses in detail. After that, you can easily relate the hook with their use, which is written here.  

---

### **What are state, stateless, stateful, and state management terms?**  
Those who are new to React Hooks or state management, these terms are very important for them. If you do not understand state, then you do not understand the requirement of hooks, then you do not understand Redux. So state we must know.  

So it's like a revision, okay?  

For example, here is a component state, and inside it, we are setting the variable count equal to zero, which is data. So **state is nothing, state refers to the current data of the component, okay?**  

See, this is the initial state or initial data count in the component. Then later, when the data count is updated, the state will also be updated, right?  

Now, to make this component **stateful**, the expected browser output should be something like this. Now see, this is stateful. On clicking this button multiple times, the updated state data or state value keeps on rendering to the UI.  

Finally, two points to remember:  
1. **State refers to the current data of the component.**  
2. **Stateful or state management means when a user performs some actions on the UI, then the React application should be able to update and re-render the data or state on the UI then and there.**  

---

### **What is the role of useState hook and how it works?**  
**useState** is a hook provided by React to manage the state.  

Good, but in interviews, this answer is not enough; we should give some more details or pointers.  

- **useState function accepts a parameter (e.g., `0`), which is the initial state value.**  
- **useState function returns an array with two elements:**  
  1. **First element:** The current state value (e.g., `count`).  
  2. **Second element:** A function (e.g., `setCount`) to update the state.  
- **Updating the state with setCount will re-render the UI.**  
- **Concept of array destructuring in JavaScript is used to get these values from the array.**  
- **useState function is called only once when the component loads for the first time. After that, setCount is used to update the state, not useState.**  

---

### **What is the role of useEffect Hook? How does it work and what is its use?**  
**useEffect** is used to perform **side effects** in functional components.  

For example:  
- **Fetching data from an API**  
- **Subscribing to events**  
- **Manipulating the DOM after render**  

#### **How does it work?**  
1. **Import `useEffect` from React.**  
2. **Call the `useEffect` function inside the component.**  
3. **useEffect accepts two parameters:**  
   - **First parameter:** A callback function (effect function).  
   - **Second parameter:** A dependency array (optional).  

When useEffect runs, it executes the **effect function**, which can fetch data or perform other side effects.  

**Important points about `useEffect`:**  
1. **It runs after the component renders.**  
2. **It takes two parameters: an effect function and a dependency array.**  

---

### **What is the dependency array in the useEffect hook?**  
The **dependency array** is the second parameter in the `useEffect` hook.  

- If a value inside this array **changes**, the effect function **re-runs**.  
- Example:  
  ```jsx
  useEffect(() => {
      fetchData(userId);
  }, [userId]);  
  ```
  - Here, **if `userId` changes**, `fetchData` is called again.  
  - This helps in **re-fetching** data only when necessary.  

**Simplest definition for interviews:**  
The **dependency array** in `useEffect` allows React to run the effect function **only when the specified dependencies change**.

# 8.Hooks - useContext useReducer

### **Questions on `useContext` Hook**
1. **What is the role of the `useContext` hook?**  
   - `useContext` in React provides a way to pass data from a parent to a child component without using props. This helps avoid **prop drilling**.

2. **What is the `createContext` method? What are `Provider` and `Consumer` properties?**  
   - The `createContext` function returns an object with `Provider` and `Consumer` properties.
   - The `Provider` property is responsible for providing the context value to all its child components.
   - The `Consumer` property or the `useContext` hook can be used to access the context value in child components.

3. **When should you use the `useContext` hook instead of props in a real application?**  
   - Use the `useContext` hook when you need to avoid **prop drilling** and access context values directly in deeply nested components.
   - It is better than props for centralized data like:
     - Theme switching
     - Localization
     - Configuration settings
     - User preferences
     - Notification systems

---

### **Questions on `useReducer` Hook**
4. **What are the similarities between `useState` and `useReducer` hook?**  
   - Both hooks **update state** and trigger a **re-render** of the UI.
   - Both return an **array with two elements**:  
     - The first element is the **current state value**.
     - The second element is a **function to update the state**.

5. **What is the `useReducer` hook? When should you use `useState` vs `useReducer`?**  
   - `useReducer` is used for **complex state management**, while `useState` is for simple state values.
   - `useState` accepts **one parameter** (initial state value), while `useReducer` accepts **two parameters**:
     1. **Reducer function**
     2. **Initial state object**
   - Use `useReducer` when:
     - The state has multiple **properties** (e.g., an object with `firstName`, `lastName`, `email`).
     - State updates require **multiple conditions** (e.g., updating state based on different actions).

6. **What are the differences between `useState` and `useReducer` hook?**  
   - `useState` is **simpler**, while `useReducer` is for **complex state**.
   - `useState` updates state **directly**, while `useReducer` uses a **reducer function** to handle logic.
   - `useReducer` works well when **state updates depend on previous state values**.

7. **What are `dispatch` and `reducer` functions in `useReducer` hook?**  
   - The **`dispatch` function** is returned by `useReducer` and is used to **send an action** to the reducer.
   - The **reducer function** is a function that:
     - Takes **state** and **action** as arguments.
     - Determines **how the state should change** based on the action type.
     - Returns a **new state**.

---

# 9.Hooks - useCallback useMemo useRef useLayoutEffect
---

### 1. What is the role of the useCallback hook in React?  
**Answer:** The simple answer is useCallback hook is used to memorize functions. Remember, memorize functions in functional components, okay.  

For example, in the ButtonCountIncrement case, suppose you have a parent useCallback parent component where you are using useState to manage the state, which you already know. Then you have two options. First, like the normal way, you can define the function handleIncrement and use the setCount method to increment and update the state or count value.  

But here is the twist. In the UI, the count is present here in the parent component. But the increment button is not here. It is in the useCallbackChild component, which is another child component. So we are making things slightly complex. That's why we will use useCallbackHook.  

So basically what is happening here, when you are calling the child component at the bottom, you are passing this function reference handleIncrement from the parent component to the child component, right? The problem is, whenever this parent component is re-rendered because of any reason, then by default, a new function reference will be created and will be passed to the child component every time, and because of this, the child component will also be re-rendered because it is getting a new function reference.  

So, this unnecessary re-rendering of the child component is the problem.  

Now, listen carefully. To fix this problem, we will comment the normal code here. Then, like this, we will wrap the function logic, the whole function logic, inside the useCallback hook by passing the callback function and dependencies as the two parameters of useCallback.  

Again, like the previous hook, it is also accepting two parameters. It returns the memorized version of this callback function, which will then be assigned to this handleIncrement variable.  

So now we will pass the memorized version of the function to the child component so that the problem is solved. Because this way, whenever the parent component re-renders, the function reference will not change. It will not change until this count value is changed.  

Therefore, the re-rendering of the child component will also not happen, which is a very good point from a performance perspective.  

So, if there are multiple child components, then memorizing the callback function is a very good idea for performance. But for a single child component, for simple cases, that can be an overhead.  

Remember one thing, without useCallback also (with the commented code), things will work fine. But with useCallback, the function reference will be memorized, and the performance can be improved. That's the whole point.  

---

### 2. What parameters does the useCallback hook accept and what does it return?  
**Answer:** The useCallback hook accepts two parameters:  

1. The first parameter is the callback function that you want to memorize.  
2. The second parameter is an array of dependencies.  

So, it specifies the value when it is changed that will cause the memorized callback function to be recreated. If this dependency array is empty, the memorized callback function return will never be recreated.  

Finally, the useCallback hook returns the memorized version of this callback function.  

---

### 3. What is the role of the useMemo hook?  
**Answer:** The useMemo hook is a performance optimization function that memorizes the result of a computation.  

For example, here you can see the useMemo accepts two parameters.  

1. The first argument of useMemo is a function that performs some heavy computation and returns some result like processed data.  
2. The second argument, `data`, is an array of dependencies.  

Now, the question is, why do we use useMemo to memorize the result?  

Suppose the `processData` function is very heavy with intensive logic and algorithms, and it does not change so frequently. Therefore, if we memorize the result of this function, then on re-rendering of this component, we do not have to execute this `processData` function every time. We can directly use the memorized result returned by this useMemo hook, right?  

So that is the benefit, and it is very good from the performance perspective. But yes, if there is any dependency change like other hooks, then this `processData` function will be re-executed.  

Remember, for normal computation, memorizing the result is not a good thing—only for huge computations. Again, like useCallback, useMemo also helps in improving performance only; logically, it is doing nothing.  

---

### 4. What is the role of the useRef hook?  
**Answer:** The useRef hook is primarily used for accessing and interacting with the DOM elements.  

For example, useState hook is used to maintain the state of data, right? But useRef has nothing to do with the data—it holds the reference of DOM elements.  

For example, here is a button with an input element. Now, when you click on this button, the focus will go to the input control. Now, when this component re-renders, we do not want this input element to lose focus. Even after re-rendering the component, the focus should remain on this input DOM element.  

For that, we can use useRef.  

The useRef hook returns an object called a ref object, which we assign to the `inputRef` variable. Now, this ref object has a `current` property that can hold and persist values even after re-rendering.  

So when the button is clicked, the `focusInput` function is executed. Then the `current` property of the `inputRef` object, which is assigned to the input element, is set to `focus()`.  

As I said earlier, the `current` property of the ref object will persist and will never change even if this component is re-rendered again and again.  

Finally, the advantage is that useRef persists across renders and does not trigger re-renders when it changes. That’s why it is mostly used with DOM elements only.  

---

### 5. What is useLayoutEffect hook? Compare it with useEffect hook.  
**Answer:** If we know useEffect, then it is very easy to understand useLayoutEffect also.  

In the case of useEffect, we have a component. Then first, the component's initial state will be rendered in the UI, and after that, side effects like loading external API data will be executed by the useEffect hook, right?  

Now, the difference is:  

- In **useEffect**, the initial rendering of the UI is **not blocked** by these side effects. The page with initial rendered data will be displayed to you, but the side effects will load later and independently.  
- In **useLayoutEffect**, the initial rendered data **might not be able to render** until the useLayoutEffect hook completes executing its side effects.  

So, the initial rendering has to **wait** for the side-effect data.  

Code-wise, there is no difference. The only change is that we replace `useEffect` with `useLayoutEffect`.  

- `useEffect` runs **asynchronously** and is scheduled **after** the UI has been rendered.  
- `useLayoutEffect` runs **synchronously** with the UI rendering.  

This means `useLayoutEffect` can block the browser from rendering the UI until the effect execution is completed.  

---

### 6. When to use the useLayoutEffect hook?  
**Answer:** Simple answer—when DOM elements are dependent on the side effects.  

For example, if we need to change the style of an element **based on API data**, we should use useLayoutEffect.  

Since the DOM styling is dependent on the API response, we do not want the UI to render before receiving this data.  

Thus, useLayoutEffect ensures that the DOM manipulations happen **before** the browser paints the UI.  

---

# 10.Hooks - Best Practices Short Answer

#### What are the rules or best practices for hook implementation?
When using hooks in your components, you should follow some rules or best practices to implement them correctly.  
- The first rule is, hooks can only be called at the top level of a component like this, and then you can write the remaining logic of the component. Not like first you are writing component code at middle or bottom then you are calling hook. That is wrong.  
- Hooks must be called directly inside the React components or React functions like this. You should not call hooks from any normal or nested JS functions other than React components.  
- Order and keep the order consistent in all the components. For example, if you are using the same hook multiple times in one component, and you want the same behavior in another component, then use the same order. Do not change the order. This will create inconsistency otherwise.

#### What are custom hooks?
By the name only you can understand. Normally, hooks are inbuilt functions provided by the React library, right? But sometimes, if you are working on a very big project, there may be a need for a hook that is not provided by React.  

So in that case, as a developer, you can create a custom hook or a function like this in any JavaScript file.  
For example, this is a custom hook for managing a counter. It is accepting one initial value parameter, which default value is zero. This hook is basically just returning three things.  
Then you can use this hook in your application components. Any component can use this hook.  

Proper definition:  
**Custom hooks in React are JavaScript functions developed by developers to encapsulate reusable logic for their application.**  
So if you think that one piece of code is used in many places in your application in many components, then you can put that piece of code in the custom hook and use it.

#### Tell three scenarios in which you can use `useEffect` hook.
Sometimes, the interviewer can ask this kind of question to check your working knowledge.  

Short answer:  
**`useEffect` can be used for:**
1. Fetching data from an external API  
2. Managing subscriptions or event listeners  
3. Manual DOM manipulations  
4. Setting up timers or intervals  

#### What does `useState` hook return in React?
You already know the answer. Here is the `useState` hook structure, and it returns two elements:
1. **State variable** – The current state value  
2. **State update function** – A function used to update the state  

#### How can you conditionally run effects with `useEffect`?
Here is the code for conditionally running the effect function with `useEffect` hook.  
Inside the `useEffect`, you can use the if condition. **Remember, do not write the `useEffect` or any other hook inside an if-else block.** That is against the rules.  

Answer:  
In React, you can conditionally run effects with the `useEffect` hook by placing the if-else conditions inside the hook itself.

#### What problem do React Hooks solve?
React Hooks solve problems related to managing state, lifecycle, and side effects in functional components.

#### What is the advantage of React Hooks over lifecycle methods?
**Answer:**  
React Hooks provide simplicity. Hooks eliminate the need for class components, making the code more readable and reducing boilerplate code. This makes functional components simpler compared to class components.

#### What is a Context API?
If you remember the `useContext` hook, which I explained in previous questions, then you already know the answer.  

- The **Context API** is a concept, and `useContext` is the way to implement that concept.  
- **Definition:** The Context API is a broader concept for the creation and management of context, and we can achieve it by using the `useContext` hook.

#### What are the uses of all the important hooks in React?
Now let's quickly revise the uses of all the hooks in just one word so that you can easily remember them for interviews.

1. **`useState` Hook** – Used for adding state to functional components.  
2. **`useEffect` Hook** – Used for performing side effects in functional components (e.g., data fetching from external API).  
3. **`useContext` Hook** – Allows functional components to consume values from a common React context.  
4. **`useReducer` Hook** – Used for handling complex state. It is an alternative to `useState` when the state is more complex.  
5. **`useCallback` Hook** – Used for memoization. It memorizes a callback function to prevent unnecessary re-rendering of child components.  
6. **`useMemo` Hook** – Used for performance improvement. It memorizes the result of a function to avoid unnecessary recalculations of heavy functions.  
7. **`useRef` Hook** – Creates a mutable object ref that persists across renders. It is used when interacting with DOM elements.  
8. **`useLayoutEffect` Hook** – Similar to `useEffect`, but it fires synchronously with DOM manipulation. `useEffect` is asynchronous.

---

# 11.Components LifeCycle Methods - I
---
### **What are component lifecycle phases?**  
Before understanding component lifecycle methods, let's first understand component lifecycle phases. Whenever a component loads in a React application, it has a life. It goes through three lifecycle phases:  

1. **Mounting phase** – In this phase, component creation starts, and an instance of the component is created and inserted into the DOM. This phase ensures that the component is visible for the first time. All the methods inside this phase execute before the component is rendered in the DOM.  

2. **Updating phase** – In this phase, if you change any property or state, the component is re-rendered due to that change. After re-rendering, the component is displayed again, similar to refreshing the component.  

3. **Unmounting phase** – This phase occurs when a component is removed from the DOM. For example, when one component is replaced by another on a webpage, the first component unloads, and then only this phase method executes.  

---

### **What are component lifecycle methods?**  
There are three phases of the component lifecycle, and each phase has specific lifecycle methods that execute in sequence.  

- **Mounting phase**: Has four lifecycle methods that execute in sequence.  
- **Updating phase**: Has five lifecycle methods that execute in sequence.  
- **Unmounting phase**: Has only one method that executes when the component is removed.  

The most important lifecycle methods are:  
- `constructor`  
- `render`  
- `componentDidMount`  
- `componentDidUpdate`  
- `componentWillUnmount`  

**Definition:** Component lifecycle methods are special methods that get called at various stages of a component’s life.  

---

### **What are constructors in class components? When to use them?**  
The constructor is the first method of the mounting phase of the component lifecycle.  

**Constructor Code Example:**  
- The constructor is written using the `constructor` keyword.  
- It is a function, but a specialized one because it executes automatically when the component is called.  
- It is mainly used for:  
  - Initializing the component's state.  
  - Performing any mandatory setup before rendering.  

Example use case: Setting the initial state of `count = 0` before rendering.  

💡 **Remember:** The component will not render until the constructor runs completely.  

---

### **What is the role of the super keyword in the constructor?**  
The `super` keyword executes the constructor of the parent class.  

**Why is it needed?**  
- Before executing the child class constructor, the parent class constructor must be executed.  
- If `super` is removed, the application will not work correctly.  

**Conclusion:**  
1. The `super` keyword is used in the constructor of a class component to call the constructor of the parent class.  
2. This ensures that the initialization logic of the parent class is executed.  

---

### **What is the role of the render method in the component lifecycle?**  
The `render` method is responsible for displaying elements in the UI.  

**Lifecycle presence:**  
- **Mounting phase**: Renders the element for the first time.  
- **Updating phase**: Re-renders the UI after state or props change.  

**Definition:** The `render` method returns the React elements that will be rendered to the DOM.  

💡 **Tip for interviews:** Use technical terms like "DOM" instead of "UI" or "browser" to sound more technical.  

---

### **How can the state be maintained in a class component?**  
A **stateful component** updates and renders state changes simultaneously.  

**Steps to maintain state:**  
1. **Set initial state** inside the constructor.  
2. **Use `setState`** to update the state.  
3. **Render updated state** using `this.state.property`.  

**Example:**  
- `this.setState` updates the state.  
- `this.state.property` displays the updated value.  

**Conclusion:**  
1. `this.setState()` updates the state.  
2. `this.state` renders the updated state in the DOM.  

---

### **What is the role of the componentDidMount method in the component lifecycle?**  
`componentDidMount` is the last method of the mounting phase, executed after rendering.  

**Use case:**  
- Used for **side effects**, like fetching external data or setting up subscriptions.  

**Execution flow:**  
1. Constructor initializes state (`data = null`).  
2. `componentDidMount` fetches data and updates state.  
3. `render` method displays the updated data in the DOM.  

**Conclusion:**  
1. `componentDidMount` is called after a component is rendered.  
2. It is mainly used for side effects like data fetching or setting up subscriptions.  

---

# 12.Components LifeCycle Methods - II

1. **What is the role of componentDidUpdate method in the component lifecycle?**  
   Answer: componentDidUpdate is the last method of the updating phase. It is used to re-fetch data when there is a state or property change in the component. It ensures that the component updates its data properly when required.

2. **What is the role of componentWillUnmount method in the component lifecycle?**  
   Answer: componentWillUnmount is the only and last method in the unmounting phase. It is used to clean up resources, such as event listeners or open connections, to prevent memory leaks and improve performance.

3. **How do you initialize a state in a class component?**  
   Answer: In a React class component, the state is initialized in the constructor function.

4. **In which lifecycle phase will the component be re-rendered?**  
   Answer: In the updating phase, the component will be re-rendered if any properties or states are changed.

5. **What will happen if you do not define a constructor in your React component?**  
   Answer: If you do not define a constructor, React will automatically create a default blank constructor for your component, which will call the constructor of the base class using the `super` keyword.

6. **Why do we need class components when we already have functional components?**  
   Answer:  
   - To manage existing project legacy code (built before hooks were introduced).  
   - To support third-party libraries or components written as class components.  
   - To support component lifecycle methods in legacy projects.

7. **What are the five main methods of the component lifecycle?**  
   Answer:  
   - `componentDidMount` – Runs after the component is mounted.  
   - `componentDidUpdate` – Runs after the component updates.  
   - `componentWillUnmount` – Runs before the component unmounts.  
   - `constructor` – Initializes the component state.  
   - `render` – Returns JSX to render the component.  

---
---
# 13.Controlled & Uncontrolled Components
---

### What are controlled components in React?  
A controlled component is a component whose form elements like input fields or checkboxes are controlled by the state of the application.  

---

### What are the differences between controlled and uncontrolled components?  
1. In controlled components, elements are handled by the application state.  
2. Controlled components use state to save the changes and update the state on input event handling.  
3. Controlled components re-render when the state updates.  
4. Uncontrolled components do not use state management.  
5. Uncontrolled components access values directly using `useRef`.  
6. Uncontrolled components have less re-rendering than controlled components.  
7. Controlled components are the recommended and standard practice for handling forms in React.  
8. Uncontrolled components are useful in some scenarios but are less commonly considered best practice.  

---

### What are the characteristics of a controlled component?  
1. **State control**: The value of the form element is stored in the component’s state.  
2. **Handling changes**: Changes to form elements trigger an event.  
3. **State update**: The event handler updates the component state with the new value.  
4. **Re-rendering**: The component re-renders with the updated state, reflecting the new value.  

---

### What are the advantages of using controlled components in React Forms?  
1. **Single source of truth**: Form elements have their values managed by the React state.  
2. **Predictable and synchronized updates**: Facilitates form validation, dynamic rendering, and integration with lifecycle methods.  
3. **Better control and maintainability**: Compared to uncontrolled components, controlled components offer better management of form states.  

---

### How to handle forms in React?  
The preferred and recommended approach for handling forms in React is by using controlled components.  

---

### How can you handle multiple input fields in a controlled form?  
Maintain separate state variables for each input field and update them individually using the `onChange` event.  

---

### How do you handle form validation in a controlled component?  
By using conditional rendering based on the state and validating the input values before updating the state.  

---

### In what scenarios might using uncontrolled components be advantageous as compared to controlled components?  
Uncontrolled components can be beneficial when:  
1. Integrating with third-party React libraries.  
2. Dealing with forms where controlled components are not possible.  

---
---

# 14.Code Splitting

**Q: What is code splitting in React?**  
A: Code splitting is a technique to split the JavaScript bundle into smaller chunks which are loaded on demand.

---

**Q: How to implement code splitting in React?**  
A: In short, there are three steps for implementing code splitting in React:  
1. Use `React.lazy` method to lazily import components.  
2. Wrap components with `Suspense` method to handle loading.  
3. Configure your build tool (e.g., Webpack) for dynamic imports.

---

**Q: What is the role of lazy and suspense in React?**  
A:  
- `React.lazy`: A function that allows you to load a component lazily, meaning the component is imported or loaded only when needed.  
- `Suspense`: Used to display a fallback UI while the lazily loaded component is being fetched.

---

**Q: What are the pros and cons of code splitting?**  

**Pros:**  
1. Faster initial load time – Only necessary code is loaded for the current view.  
2. Optimized bandwidth usage – Reduces the amount of transferred data over the network.  
3. Improved caching – Smaller chunks make caching more efficient.  
4. Parallel loading – Multiple smaller chunks can load simultaneously.  
5. Easier maintenance – Modular code is easier to manage.  

**Cons:**  
1. Increased project complexity – Requires managing separate chunks.  
2. Tooling dependency – Requires Webpack, Babel, or other build tools.  
3. Potential runtime errors – More runtime errors may occur.  
4. Increased number of requests – More HTTP requests for separate chunks.  
5. Learning curve – Developers need time to understand and apply code splitting.

---

**Q: What is the role of the `import` function in code splitting?**  
A: The `import` function returns a promise that allows dynamically loading of modules.

---

**Q: What is the purpose of the `fallback` property in `Suspense`?**  
A: The `fallback` property provides a loading indicator on the UI while the dynamically imported component is being loaded.

---

**Q: Can you dynamically load CSS files using code splitting in React?**  
A: Yes, using dynamic import for CSS files allows you to load styles on demand along with the corresponding components.

---

**Q: How do you inspect and analyze the generated chunks in a React application by code splitting?**  
A: Use tools like Webpack Bundle Analyzer to analyze the size and composition of the chunks.  

---
---

# 15.React - Others

---

### **What is a higher-order component in React?**  
It is very similar to the higher-order function in JavaScript.  

A higher-order component is a component that takes another component as an argument and adds extra features to that component.  

Here is an example:  

The `HoCLogger` is a higher-order component because it takes `HoCUse` as an argument. Then, inside it, it returns the `HoCUse` main component after adding some extra features or functionalities.  

When you call the `HoCUse` component, first, some logging code by the `HoCLogger` will be executed, which are like the extra features. Then only the `HoCUse` component will execute.  

If you export `HoCUse` directly, then the extra features of `HoCLogger` will not be executed with `HoCUse`.  

Error logging is a real-world example of using higher-order components in applications.  

### **What are the 5 ways to style React components? Explain inline styles.**  
To style React components, you can use the same techniques as in JavaScript applications. Here are the 5 ways:  

1. **Inline styles**  
2. **CSS stylesheets**  
3. **CSS modules**  
4. **Global stylesheets**  
5. **CSS frameworks (e.g., Bootstrap)**  

#### **Inline Styles Example:**  
You can provide the style inline along with the element itself:  

```jsx
const MyComponent = () => {
  return <div style={{ color: 'red', fontSize: '20px' }}>Hello World</div>;
};
```  

This is called **inline styling**, but in most cases, we use separate stylesheets.  

### **What are the differences between React and React Native?**  

| Feature        | React                            | React Native                        |
|---------------|---------------------------------|-------------------------------------|
| **Type**      | Library                         | Framework                          |
| **Purpose**   | For building web applications  | For building mobile applications   |
| **Platforms** | Runs on web browsers           | Runs on iOS and Android            |
| **UI Elements** | Uses HTML and CSS             | Uses native UI components (`View`, `Text`) |
| **Deployment** | Deployed as a web app         | Deployed through app stores        |

---

### **What is GraphQL?**  
React is for rendering or displaying data in the UI, but **GraphQL** is for fetching data from the database or an API.  

**Definition:**  
GraphQL is a query language for APIs and a runtime for executing those queries with your existing data.  

Here is an example of a GraphQL query that fetches user details from a database:  

```graphql
query {
  user(id: "123") {
    name
    email
  }
}
```  

**How is GraphQL related to React?**  
GraphQL and React are often used together because both were developed by Facebook. React components can use GraphQL queries to fetch data for rendering.  

---

### **What are the top three ways to achieve state management in React, and when to use which?**  

For **functional components**, the three state management techniques are:  

1. **useState hook** – For simple, isolated component states.  
2. **Context API** – When you need to share global data across components and want to avoid prop drilling.  
3. **Redux** – For large-scale applications with complex states. It provides a predictable state management pattern and helps with scalability.  

💡 **Rule of Thumb:**  
- Use **inbuilt** React features (`useState`, Context API) for small and medium apps.  
- Use **third-party tools** (like Redux) only for large, complex applications.  

---

### **How can you implement authentication in React applications?**  

The most common authentication method is **JWT authentication**.  

#### **Authentication Flow:**
1. **User submits username & password** → sent to the API as a `POST` request.  
2. **API validates credentials** → creates a JWT token and returns it.  
3. **Client stores the JWT token** (usually in local storage).  
4. **For each future request**, the client sends the JWT token in the request headers.  
5. **API validates the token** → if valid, it returns the requested data.  
6. **Client displays the data** in the UI.  

🔹 **JWT is preferred because:**  
- The user only needs to log in once.  
- The token is sent instead of username/password for each request.  

---

### **What is the use of React Profiler?**  
In React, the **Profiler** is used to **analyze performance** and measure execution time.  

#### **Example:**
You can wrap a component inside the **Profiler** like this:  

```jsx
<Profiler id="MyComponent" onRender={(id, phase, actualDuration) => {
  console.log(`Component ${id} took ${actualDuration}ms to render.`);
}}>
  <MyComponent />
</Profiler>
```  

The `onRender` function logs performance details to the console, helping in debugging slow components.  

---

### **What is the difference between Fetch and Axios for API calls in React?**  

| Feature        | Fetch                           | Axios                              |
|---------------|---------------------------------|------------------------------------|
| **Type**      | Inbuilt JavaScript function     | Third-party library               |
| **Installation** | No installation needed        | Requires `npm install axios`       |
| **Returns**   | Promises                        | Promises with built-in interceptors |
| **Interceptors** | No built-in support           | Supports request/response interceptors |

#### **Example of Fetch:**
```jsx
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### **Example of Axios:**
```jsx
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data));
```

💡 **Use Axios when you need request/response interceptors or automatic JSON parsing. Use Fetch for a simpler approach.**  

---
# 16.Redux - Component Action Store Reducer

**Explain the core principles of Redux.**  
1. **Single Source of Truth** – The entire application state is stored in a single store, ensuring consistency and simplifying data management.  
2. **State is Read-Only** – State cannot be modified directly. It follows a unidirectional data flow, where changes occur through dispatched actions.  
3. **Changes using Pure Functions (Reducers)** – State updates are done using pure functions (reducers) to ensure predictability and consistency. A pure function always returns the same output for the same input.  
4. **Actions Trigger State Changes** – State changes are driven by actions, which describe state transitions. Without an action, no state change occurs.  
5. **Predictable State Changes with Actions** – The application state changes are determined by actions, ensuring predictability and making debugging easier.  

---

**List five benefits of using Redux in React.**  
1. **Predictability and Centralization** – The application state is stored in a single, centralized store, ensuring consistency.  
2. **Maintainability** – Redux provides a structured and scalable way to manage state, making it ideal for large applications.  
3. **Debugging** – Redux offers powerful developer tools for tracing state changes and debugging efficiently.  
4. **Interoperability** – Redux can be used with various JavaScript frameworks and libraries, not just React.  
5. **Community and Ecosystem** – Redux has a large and active community, providing support and numerous extensions.  

---

**What are the differences between local component state and Redux state?**  

| Feature                  | Local Component State           | Redux State                           |
|--------------------------|--------------------------------|--------------------------------------|
| **Scope**                | Limited to the component       | Global, accessible across components |
| **Management**           | Managed internally by the component | Managed externally by the Redux store |
| **Performance**          | More performant for small apps | Better for large-scale applications |
| **Complexity**           | Simple to set up and manage    | More complex to set up              |
| **Testing**              | Easier for component-specific testing | Requires more comprehensive testing |

---

**What are the challenges or disadvantages while using Redux?**  
1. **Boilerplate Code** – Requires writing extra code for actions, reducers, and store, increasing complexity.  
2. **Learning Curve** – Understanding Redux concepts can be challenging, especially for beginners.  
3. **Verbosity and Complexity** – Redux code can become complex as the project grows.  
4. **Overhead for Small Projects** – Unnecessary complexity for small applications.  
5. **Global State for Local Components** – Using Redux for local component state is unnecessary.  
6. **Integration with Non-React Libraries** – Can add complexity when integrating Redux with non-React frameworks.  

**Summary:** Use Redux for large applications with complex state management, but avoid it for small projects or managing local component state.

---
---

# 17.Redux - Core Principles Pros-Cons Local & Redux State

---

### **What is a provider component? How are components getting the state from the Redux store?**  
The provider component of React Redux will make the Redux store available to all connected components.  

For example, in this code, you will first import the provider component from the React Redux library into your root file or entry point of the React app. Then you will wrap all the components like the counter component and other components which want the state inside this provider component like this only.  

That way, you will be able to pass the state to all the components from the Redux state, Redux store.  

And then in the component, you can receive the state and there you can access the property as per your requirement only. So that's how basically the components are getting the state from the Redux store.  

If you remember the Context API, useContext, Provider, Consumer concepts—this is almost the same thing but used by Redux this time. That is the only difference. The concept is the same.  

---

### **What is the role of the connect function in React Redux?**  
Let's quickly revise it.  

- Here is the connect function imported from the React Redux library.  
- Then here is the function to send the action object to store.  
- Then here is the function to receive the state from the Redux store.  
- And finally, like this, we will use the connect function to pass both of the above two functions as the parameters and with the component to connect with the Redux store.  

The simplest definition of the connect function is:  
**The connect function is used to make a connection between a React component and the Redux store.**  

---

### **What are the four important files in a React Redux project?**  
Here are the important files for a React Redux project:  

- **Action.js**  
- **Reducer.js**  
- **Store.js**  

These are the new and additional files.  

Whereas files like **Component.js, App.js, Index.js** are the normal files that are normally present in every React project.  

And here is the one-line simple definition of each of them which I already explained in detail in previous questions.  

But yes, one-line definitions can be very easy when we revise them, right? Not just for understanding the concept, but for interviews, we have to **remember** the simple definition.  

So either you can pause the screen or you can revise it later from the book if you want.  

---

### **How to structure the project and maintain its state across multiple components?**  
Until now, we have seen an example of state management in a single counter component like this, and below are the files required for this implementation, right?  

But obviously, we will have to manage the state in multiple components via Redux. Otherwise, there is no point in using Redux just for one component—then just use hooks, right?  

So in that case, we will have multiple components in the application. And in this case, the file structure will be something like this:  

- We have two components.  
- Most likely, we will be using **separate action files for separate components**.  
- Also, **separate reducer functions for separate components**.  
- But **the store file will be only one for the whole project**. That is the preferred way.  

So this will be a high-level file structure for handling multiple components, and there can be many components—it depends.  

---

### **Explain the concept of immutability in the context of Redux.**  
You already know the answer, but if you are a non-native English speaker like me, then you need to recall this word: **immutable**.  

Immutable means once a thing is created, then it cannot be changed.  

The answer is:  
**In Redux, immutability is the principle that once an object (such as state) is created, it cannot be changed or modified directly.**  

If you remember the **const** principle also—state cannot be changed directly—so from there only it is immutable.  

To make changes to the state:  
- You need to dispatch an action.  
- Update the state and store the new state in the store.  
- Then you have to get the state in the components from the store only.  

The previous state no longer exists.  

So you **cannot** just update the previous state and use it.  
Every time a **new state** comes, the **previous state is gone**.  

That is **immutable**.  

This ensures the benefit that **state transactions are explicit and traceable**. You can trace them.  

Now you completely got it.  

---

### **Which are the typical properties of an action object in a React Redux project?**  
Very short question.  

In a normal application, our action creator function will be like this:  

It returns **two properties**:  
1. **Type** – describes the type of action being performed.  
2. **Payload** – mostly carries the data from external APIs in most applications.  

So we can assign this action creator to some action object like this.  

And below is the structure of the action object also. Got it?  

So these are the **two typical properties** in most applications.  

---

### **What is the difference between mapDispatchToProps and mapStateToProps in the connect function?**  
Here is **mapDispatchToProps**, and you already know the answer, but we are just revising.  

And here is **mapStateToProps**, which are passed as parameters in the **connect** function to connect with the Redux store, right?  

**Simple answer:**  
- **mapDispatchToProps** function **dispatches** the action to the store forward for updating the state using a reducer.  
- **mapStateToProps** function **gets** the Redux store state for the components.  

One is **sending**, one is **getting**.  

Because **after getting**, only you can view the updated state in the UI, right?  

That's the answer to this question.  

---

### **What is the meaning of unidirectional data flow in Redux?**  
If you remember the **flow diagram**, then you can observe that the data or state is moving in a **single direction**:  
- From the **component** → **action** → **store** → back to **component**.  

This means data is flowing in a **single** or **unidirectional** way.  

A proper explanation is:  
**In a unidirectional data flow architecture, data flows in a single clear path. Redux enforces this pattern to provide a predictable state management.**  

That is very good for **predictability**.  

---

### **How does Redux handle communication between components?**  
In the case of **multiple components**, communication between components **will happen through the centralized store**, right? Simple.  

**Answer:**  
**Redux handles communication between components through a centralized state management system, which is the Store.**  

---

### **What is the Payload property in Redux?**  
Short answer question.  

Here is the **example** of the Payload property in an Action Creator function.  

Two points only:  
1. **Along with the action type, the Payload property in Redux action holds the data being sent to the reducers.**  
2. **Payload contains information as necessary for the reducer to update the state based on the action.**  

So, it can also help you in **updating the action** as well as the payload.  

---
# 19.Redux - Thunk Middleware Error Handling Flux

**Q: What is the difference between a regular action creator and a Thunk action creator in a React Redux project?**  

A: Normally, regular action creators return a plain JavaScript object with a `type` property describing the type of action to be performed. However, in some complex scenarios where an application has to decide the action based on asynchronous data fetched from an external API, we use a Thunk action creator.  

A Thunk action creator is a function that returns another function instead of an action object. This returned function is dispatched to the Redux store, allowing us to handle asynchronous operations like data fetching.  

Three key points about Thunks:  
1. A Thunk action creator returns another function instead of an action object.  
2. The returned function is dispatched to the Redux store, just like an action object.  
3. Thunks are used to handle complex asynchronous operations, such as API calls that determine the action type (e.g., success or failure).  

---

**Q: Explain the concept of middleware in React Redux.**  

A: Middleware acts as a layer between the action dispatch and the Redux store. It intercepts actions, modifies them if needed, and can perform additional logic before passing the action to the reducer.  

Middleware is mostly used with Thunk action creators in complex scenarios. For example, middleware can fetch data from an API, modify the action accordingly, and then pass it to the reducer.  

Two key points about middleware:  
1. Middleware provides a mechanism to add extra functionality to the Redux store.  
2. Middleware can intercept actions, modify them, or execute additional logic before they reach the reducer.  

---

**Q: How can you handle asynchronous operations and side effects in React Redux?**  

A: Side effects, such as API data fetching, can be handled using middleware and Redux Thunk action creators.  

---

**Q: How does error handling work in Redux?**  

A: Error handling in Redux is done using `try-catch` blocks in action creators, middleware, and reducers.  

---

**Q: What is the difference between Flux and Redux?**  

A:  
- **Flux** is an **architecture pattern** that provides design principles for managing state in a **unidirectional data flow**.  
- **Redux** is a **library** that **implements the Flux architecture** in a practical way.  

Flux is the concept, and Redux is its implementation.

---

# 20.TypeScript

### 1. What is TypeScript? What are the advantages of TypeScript over JavaScript?
**Answer:**
- TypeScript is a strongly typed language while JavaScript is a loosely typed language.
- TypeScript is a superset of JavaScript, meaning all JavaScript code is also valid TypeScript code.
- TypeScript has object-oriented features like classes, interfaces, etc., whereas JavaScript does not.
- TypeScript detects errors at compile time, whereas JavaScript detects errors at runtime.

---

### 2. How to install TypeScript and check its version?
**Answer:**
- TypeScript is an independent language created by Microsoft and can be installed separately.
- **Installation command:**  
  ```bash
  npm install -g typescript
  ```
  *(For Mac, use `sudo` before the command).*
- **Check TypeScript version:**  
  ```bash
  tsc --version
  ```
  *(Here, `tsc` means TypeScript Compiler).*

---

### 3. What is the difference between `let` and `var` keyword?
**Answer:**
- `var` has a function scope, but it is accessible outside a block.
- `let` has block scope, meaning it is limited to the block where it is declared.
- Example:
  ```typescript
  function test() {
      for (var i = 0; i < 5; i++) {
          console.log(i);
      }
      console.log(i); // No error, because `var` is function-scoped
  }
  test();
  ```
  ```typescript
  function test() {
      for (let i = 0; i < 5; i++) {
          console.log(i);
      }
      console.log(i); // Error, because `let` is block-scoped
  }
  test();
  ```
- Conclusion: `let` is the better version of `var`.

---

### 4. What is type annotation in TypeScript?
**Answer:**
- Type annotation means explicitly assigning a type to a variable or object.
- Example:
  ```typescript
  let age: number = 25;
  age = "twenty-five"; // Compile-time error
  ```
- This helps catch errors at compile time and improves code safety.

---

### 5. What are built-in (primitive) and user-defined (non-primitive) types in TypeScript?
**Answer:**
- **Built-in (primitive) types:** `string`, `number`, `boolean`, etc.
- **User-defined (non-primitive) types:** `array`, `enum`, `tuple`, `class`, etc.

**Example:**
```typescript
let isDone: boolean = true;
let count: number = 10;
let name: string = "TypeScript";
let numbers: number[] = [1, 2, 3];
let person: [string, number] = ["John", 25]; // Tuple
```
- Tuples enforce a specific order and type.

---

