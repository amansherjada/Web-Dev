# React `useRef`
#### https://react.dev/reference/react/useRef

The `useRef` hook in React is like a special container that can hold a **value** or a **reference** to a DOM element. It lets you keep track of something across renders **without causing the component to re-render**.

### Why use `useRef`?

1. **Access a DOM element** (like an input or button) to focus, scroll, or perform other actions.
2. **Store a value** (like a timer ID or previous state) without affecting the component’s rendering.

### How to use `useRef`

You create a reference using `useRef`, and it returns an object with a `.current` property where the value is stored. Here's the basic syntax:

```jsx
const myRef = useRef(initialValue);
```

### Example 1: Focusing an Input Field

Imagine you want to focus on an input field when the user clicks a button:

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null); // Create a ref to store the input element

  const handleClick = () => {
    inputRef.current.focus(); // Use the ref to focus the input
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click button to focus" />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
}
```

### What’s happening?

- **`useRef(null)`** creates a reference called `inputRef`.
- The `<input ref={inputRef} />` connects the reference to the input element.
- On button click, `inputRef.current.focus()` is called to focus the input.

### Example 2: Storing a Mutable Value (like a Timer ID)

Suppose you want to start and stop a timer without causing re-renders each second:

```jsx
import React, { useState, useRef } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const timerIdRef = useRef(null); // Store the interval ID

  const startTimer = () => {
    if (!timerIdRef.current) {
      timerIdRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  return (
    <div>
      <p>Time: {seconds} seconds</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

### What’s happening?

- **`useRef(null)`** creates a reference called `timerIdRef`.
- When the timer starts, the interval ID is saved in `timerIdRef.current` without causing re-renders.
- This value persists even if the component re-renders.

### Key Points:

- `useRef` does **not** trigger re-renders when its `.current` value changes.
- It **persists** across re-renders, so it’s great for storing things like DOM elements or timers.
- It’s like a way to keep a reference to something **without React caring** about it in terms of re-rendering.

In simple words, `useRef` is like a sticky note where you can write down something and keep it for later, and React won’t react to it changing. 😊