import React, { useState, useCallback, useEffect } from "react";
const UseCallbackParent = () => {
  const [count, setCount] = useState(0);
  console.log("🔄 Parent component re-rendered");

  // 1.Without useCallback (function re-creates on every render)
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };  

  // 2.With useCallback memoize the function 
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1); // Functional update
  }, []); // Empty dependency array means the function is created once
  return (
    <div>
      <p>Count: {count}</p>
      <UseCallbackChild onIncrement={handleIncrement} />
    </div>
  );
};
// Memoize the child component with React.memo
const UseCallbackChild = React.memo(({ onIncrement }) => {
  console.log("🔄 Child component re-rendered");
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
});
export default UseCallbackParent;

// When we click Increment button this, it will log "Parent component re-rendered" & "Child component re-rendered" once & then after it logs only "Parent component re-rendered". But if we comment handleIncrement with callback & uncomment handleIncrement without callback it will log both "Parent component re-rendered" & "Child component re-rendered", everytime we click on Increment button



State Management :
// state : State in React is like a memory for a component. It stores data that can change over time and helps React update the UI when the data changes. 
// for example adding items to the shopping cart : Check out below code, we have used useState() hook to manage the state of the shopping cart items. 
// useState() hook returns two values 1. StateVariable 2.stateUpdaterFunction 
// StateVariable holds the current state value which is empty array in this case. Whatever value we pass as argument to in useState([]). And stateUpdaterFunction is a function used to update the current state (array in this case). 
// The initial state value is an empty array. When the user clicks the "Add Laptop" or "Add Phone" button, it triggers the addItem() function. This function then calls setCart(), which is the state updater function from the useState() hook. The setCart() function creates a new array by spreading the current cart (state variable) and adding the newly selected item to it.
// Whatever value you pass inside useState(), the state variable (cart) takes that value as its initial state. Here we have passed array as initial value, so cart becomes an array.
import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]); // State to store cart items

  function addItem(item) {
    setCart([...cart, item]); // Adds a new item to the cart
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => addItem("Laptop")}>Add Laptop</button>
      <button onClick={() => addItem("Phone")}>Add Phone</button>
      
      <h3>Items in Cart:</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;


Unmount Component using useEffect :
In React, a component unmounts when it is removed from the UI. To handle unmounting, you can use the cleanup function in useEffect() or conditionally render the component.
import { useState, useEffect } from "react";

function AutoLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      setIsLoggedIn(false);
      console.log("User logged out due to inactivity!");
    }, 30000); // 30 seconds

    const resetTimer = () => {
      clearTimeout(logoutTimer); // Reset timer on user interaction
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    return () => {
      clearTimeout(logoutTimer); // Cleanup when component unmounts
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  return isLoggedIn ? <h2>Welcome! Stay active to remain logged in.</h2> : <h2>Session Expired! Please log in again.</h2>;
}
export default AutoLogout;

Real-world use cases of hooks :
Here are real-world examples for each of the requested React hooks:

1️⃣ useState() → Form Handling
💡 Stores and updates input values dynamically.
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (

       setEmail(e.target.value)} />
       setPassword(e.target.value)} />
      Login

  );
}

export default LoginForm;

2️⃣ useEffect() → Fetch API Data
💡 Fetches data when the component mounts.
import { useState, useEffect } from "react";

function FetchData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []); // Runs only once when the component mounts

  return (

      {users.map((user) => (
        {user.name}
      ))}

  );
}

export default FetchData;

3️⃣ useContext() → Theme Switching
💡 Shares a theme across multiple components.
import { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (

      {children}

  );
}

function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
     setTheme(theme === "light" ? "dark" : "light")}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode

  );
}

export default function App() {
  return (

  );
}

4️⃣ useRef() → Focus Input Field
💡 Keeps a reference to an input field without re-rendering.
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (

      Focus Input

  );
}

export default FocusInput;

5️⃣ useReducer() → Todo List Management
💡 Manages complex state updates efficiently.
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

function TodoApp() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  return (

       setTask(e.target.value)} />
       dispatch({ type: "ADD", payload: task })}>Add Task

        {tasks.map((t, index) => (

            {t}  dispatch({ type: "REMOVE", payload: index })}>X

        ))}

  );
}

export default TodoApp;

6️⃣ useMemo() → Expensive Calculations
💡 Prevents recalculating the total price unnecessarily.
import { useState, useMemo } from "react";

function Cart() {
  const [items, setItems] = useState([
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
  ]);

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return (

      Total Price: ${totalPrice}
       setItems([...items, { name: "Tablet", price: 700 }])}>
        Add Tablet

  );
}

export default Cart;

7️⃣ useCallback() → Optimized Event Handling
💡 Prevents re-creating functions on every render.
import { useState, useCallback } from "react";

function Button({ onClick }) {
  console.log("Button rendered");
  return Click Me;
}

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (

      Count: {count}

  );
}

export default Counter;


Example : Fetching Data from an API in componentDidMount()
import React, { Component } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null }; // Initial state
  }

  componentDidMount() {
    // Fetching user data when component mounts
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data }); // Updating state triggers re-render
      });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <h2>User Profile</h2>
        {user ? (
          <p>Name: {user.name}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default UserProfile;


HOC :
// HOCLogger.js
import React from "react";
const HOCLogger = (Component) => {
  return function WithLogger(props) {
    console.log("I am from logger...");
    return <Component {...props} />;
  };
};
export default HOCLogger;
// HocUse.js
import React from "react";
import HOCLogger from "./HOCLogger"; // Import the HOC
const HocUse = () => {
  return <div>My Component Content</div>;
};
export default HOCLogger(HocUse);
// App.js
import React from "react";
import HocUse from "./HocUse"; // Import the wrapped component
function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <HocUse />
    </div>
  );
}
export default App;



// ParentComponent.jsx
const ParentComponent = () => {
  // Callback function to receive data from the child
  const callback = (data) => {
    console.log("Data from Child:", data);
  };
  return (
    <div>
      {/* Pass the callback to the child */}
      <ChildComponent fromChild={callback} />
    </div>
  );
};
export default ParentComponent;
// ChildComponent.jsx
import { useState } from "react";
const ChildComponent = ({ fromChild }) => {
  const [inputValue, setInputValue] = useState("");
  const dataToParent = () => {
    fromChild(inputValue); // Send input value to parent
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={dataToParent}>Send</button>
    </div>
  );
};
export default ChildComponent;

===========================================================================================================================

React-Redux Data Flow Explained
The data flow in a Redux-based React application follows a structured cycle:  

### **1️⃣ Component (`Component.js`)** → **User Interaction** (Click, Mouse Events, etc.)  
- The **React component** is responsible for rendering the UI and handling user interactions.  
- When the user **clicks a button** or triggers an event (e.g., typing, hovering, submitting a form), the component **needs to update the state**.  
- However, instead of updating state **directly**, it **dispatches an action**.  

🔹 **Why?**  
👉 Keeping the state in Redux ensures **centralized state management**, making it easier to track, debug, and scale the application.  

---

### **2️⃣ Action Creator (`action.js`)**  
- The **action creator** is a function that returns an **action object**.  
- The **action object** contains a `type` field (e.g., `"INCREMENT"`, `"DECREMENT"`) that tells Redux **what should happen**.  
- If additional data is needed (e.g., a user input value), the action object can also include a **payload**.  

🔹 **Why?**  
👉 This makes the code **modular and reusable**, as the same actions can be used across multiple components.  

---

### **3️⃣ Action Dispatched**  
- The **component dispatches the action** using `dispatch()`.  
- Redux then **forwards the action to the store**.  

🔹 **Why?**  
👉 Redux needs to know **what happened in the app** (e.g., increment counter, update user details, fetch data).  

---

### **4️⃣ Store (`store.js`)**  
- The **Redux store** is the single source of truth that **holds the entire application state**.  
- It receives the **dispatched action** and passes it to the **reducer**.  

🔹 **Why?**  
👉 Having a centralized store makes it easy to **access and modify state consistently** across the application.  

---

### **5️⃣ Reducer (`reducer.js`)**  
- The **reducer** is a pure function that **takes the current state and the action** and returns a **new state**.  
- It determines **how the state should change** based on the `action.type`.  
- For example:  
  - If the action is `{ type: "INCREMENT" }`, the reducer **increments the counter**.  
  - If the action is `{ type: "DECREMENT" }`, the reducer **decrements the counter**.  

🔹 **Why?**  
👉 The reducer ensures **state updates are predictable and controlled**, avoiding direct mutations.  

---

### **6️⃣ Updated State Sent Back to Store (`store.js`)**  
- After processing the action, the reducer returns the **new state** to the **Redux store**.  
- The store **updates itself** with this new state.  

🔹 **Why?**  
👉 This ensures **consistent state updates** across the application.  

---

### **7️⃣ Component (`Component.js`) Receives Updated State**  
- The **Redux store notifies the component** that the state has changed.  
- The component **re-renders with the new state**.  

🔹 **Why?**  
👉 This makes the UI **reactive**—every time the state changes, the UI updates **automatically** without manual DOM manipulation.  

---

### **🔹 Summary of Data Flow:**  
1️⃣ **User interacts** with the component →  
2️⃣ **Action creator** creates an action →  
3️⃣ **Action is dispatched** to Redux store →  
4️⃣ **Store sends the action** to reducer →  
5️⃣ **Reducer updates the state** →  
6️⃣ **New state is stored** in Redux →  
7️⃣ **Component receives the updated state** and re-renders.  

This cycle **repeats** every time a new action is dispatched.  

---

### **🔹 Why Follow This Approach?**  
✅ **Predictability** → State updates are **centralized** and **trackable**.  
✅ **Maintainability** → Code is **modular**, making debugging easier.  
✅ **Scalability** → Works well for large applications with multiple components.  
✅ **Reusability** → Action creators can be used in multiple places.  
✅ **Performance** → Only the necessary components **re-render** when the state changes.  

🚀 **Conclusion:**  
Using Redux helps manage state efficiently, keeps the application structured, and makes debugging easier in large-scale projects! 🎯