# React `useMemo`

The `useMemo` hook in React helps improve performance by "memoizing" a value. This means that it only recalculates that value when its dependencies change, instead of recalculating it every time a component renders.

### Why use `useMemo`?

When you have a calculation or function that is expensive (takes a lot of time or resources) to run, you can use `useMemo` to prevent it from running unnecessarily on every render. It’s like telling React, “Hey, only do this calculation if these specific values change.”

### How `useMemo` works

1. **Memoization**: It caches the result of a calculation until the dependencies change.
2. **Dependencies Array**: It checks an array of dependencies, and if none of them change, it returns the cached value.

### Syntax:
```jsx
const memoizedValue = useMemo(() => {
  // Calculation or function that returns a value
  return expensiveCalculation(a, b);
}, [a, b]);
```

### Simple Example:
Imagine you have a component that calculates the square of a number, but the calculation is heavy and unnecessary if the input number hasn't changed.

```jsx
import React, { useState, useMemo } from 'react';

function SquareCalculator() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // Only recalculates if `number` changes
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Square Calculator</h1>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />
      <p>Squared Value: {squaredNumber}</p>

      <input 
        type="text" 
        placeholder="Type something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default SquareCalculator;
```

### How It Works:

- **Without `useMemo`**: The `squaredNumber` calculation would run on every render, even if you only change the text input. This is unnecessary and inefficient.
- **With `useMemo`**: The `squaredNumber` calculation runs only when `number` changes. It caches the result, so it doesn't have to recalculate every time you type in the other input.

### Summary of `useMemo`:

- **Purpose**: To optimize performance by preventing unnecessary calculations.
- **Use case**: When you have expensive calculations or derived values that should only update when certain dependencies change.
- **How it works**: Caches a calculated value until its dependencies change.

In simple terms, `useMemo` is like a smart helper that remembers the result of a calculation and only does the math again if the numbers involved change!