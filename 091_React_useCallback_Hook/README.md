# React `useCallback`

`useCallback` is a React Hook that lets you **cache a function** so that it doesn't get re-created on every render. 

Here's a simple breakdown:

### Problem:
When a component re-renders, all the functions inside it get re-created. This can lead to performance issues if the functions are passed as **props** to child components or used in **dependencies** for other hooks like `useEffect`.

### Solution:
`useCallback` helps by **remembering** the function, so it only creates a new version of that function if its dependencies change.

### Syntax:
```jsx
const memoizedFunction = useCallback(() => {
  // Your logic here
}, [dependency1, dependency2]);
```

- `useCallback` takes two arguments:
  - A function (that you want to cache).
  - An array of dependencies (variables that, if changed, should cause the function to be re-created).

### Example:
Imagine you have a button that calls a function, but you don’t want to re-create that function every time your component re-renders.

```jsx
import React, { useState, useCallback } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Caches the function, so it's not recreated unless `count` changes
  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
```

### Why use it?
- **Performance optimization**: Prevents unnecessary re-creations of functions, which is useful when passing them as props to child components or using them in `useEffect`.
- **Works well with memoized components** (`React.memo`): If you pass a function prop to a memoized child component, the child won’t re-render unless that function changes, thanks to `useCallback`.

### Summary:
- `useCallback` **remembers** the function between renders.
- It only creates a new function if the **dependencies** change.