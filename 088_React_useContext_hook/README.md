# React `useContext`

The `useContext` hook in React allows you to share state or data between components without having to pass props manually at every level. It is part of React's Context API and makes it easier to manage global state in your app.

### Why use `useContext`?

When you have a deeply nested component tree, passing props from one component to another can get messy. With `useContext`, you can create a "context" that holds data, and any component within the context can access it directly without needing prop drilling.

### How does `useContext` work?

1. **Create a Context**: Use `React.createContext()` to create a context object that will hold your shared data.
2. **Provide the Context**: Use the `Context.Provider` component to wrap the components that need access to the context.
3. **Consume the Context**: Use `useContext` inside any component that needs to access the context.

### Step-by-Step Example:

#### 1. **Creating a Context**
```jsx
import React, { createContext, useState } from 'react';

// Create a context
const UserContext = createContext();
```

#### 2. **Providing the Context**
You use the `UserContext.Provider` component to wrap your components. Inside the `Provider`, you pass a `value` prop containing the data you want to share.

```jsx
// App.js
import React, { useState } from 'react';
import { UserContext } from './UserContext';
import ComponentA from './ComponentA';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', age: 30 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ComponentA />
    </UserContext.Provider>
  );
}

export default App;
```

#### 3. **Consuming the Context**
In any component inside the provider, you can use `useContext` to access the context value.

```jsx
// ComponentA.js
import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import ComponentB from './ComponentB';

function ComponentA() {
  const { user, setUser } = useContext(UserContext);

  const changeName = () => {
    setUser({ ...user, name: 'Jane Doe' });
  };

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <button onClick={changeName}>Change Name</button>
      <ComponentB />
    </div>
  );
}

export default ComponentA;
```

### Summary of How It Works:

- **Creating a Context** using `createContext()`: Creates a container to hold and share data.
- **Providing the Context** using `UserContext.Provider`: Wraps the components that need access to shared data.
- **Consuming the Context** using `useContext(UserContext)`: Fetches the data inside the wrapped components.

### Example Breakdown:

1. In the `App` component, we created a context and provided a value `{ user, setUser }` through the `UserContext.Provider`.
2. `ComponentA` uses `useContext` to access the context value.
3. We can also pass the context down to `ComponentB` without manually passing props, and `ComponentB` can access it directly if needed.

### Benefits of `useContext`:

- **Avoids Prop Drilling**: No need to pass props through every component layer.
- **Simpler Code**: Cleaner and more maintainable code structure.
- **Shared State**: Allows state sharing between components that are not directly connected in the component tree.

In simple words, `useContext` is like a box where you store some data, and any component inside that box can take the data out whenever it needs it.