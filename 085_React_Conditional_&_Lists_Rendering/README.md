# React Conditional Rendering

**Conditional rendering** in React is like making decisions in JavaScript. You show or hide parts of your UI based on certain conditions. It’s similar to how you use **`if` statements** or **ternary operators** in JavaScript.

#### Example 1: Using an `if` statement

Suppose you want to show a message based on whether a user is logged in or not:

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

In this example:
- If `isLoggedIn` is `true`, it shows **"Welcome back!"**. Otherwise, it shows **"Please sign in."**

#### Example 2: Using a Ternary Operator

You can also use the **ternary operator** to simplify conditional rendering:

```jsx
function Greeting(props) {
  return props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}
```

Here:
- If `props.isLoggedIn` is `true`, it shows "Welcome back!" otherwise, "Please sign in."

#### Example 3: Using Logical `&&` Operator

If you only want to show something based on a condition (without an `else` case), you can use the **`&&` operator**:

```jsx
function UserStatus(props) {
  return (
    <div>
      {props.isOnline && <span>User is online</span>}
    </div>
  );
}
```

Here:
- If `props.isOnline` is `true`, it shows "User is online." Otherwise, it shows nothing.

---

### React Rendering Lists

**Rendering lists** in React is used to display multiple items like a list of products, users, etc. You often loop over an array using **`map()`** and create a list of elements.

#### Example: Rendering a List of Items

Suppose you want to show a list of fruits:

```jsx
function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li> // 'key' helps React identify each item uniquely
      ))}
    </ul>
  );
}
```

Here’s what happens:
- You loop over the `fruits` array using `map()`.
- For each item in the array, you return an `<li>` element.
- **`key`** is used to help React keep track of items efficiently (especially when items are added or removed).

#### Important Points:

- **Keys** are unique identifiers for each item in the list. Use a unique identifier like an ID if available. It helps React efficiently update and re-render items.
- Never use indexes as keys unless items are static and won’t be reordered or filtered.

---

### Putting It All Together

Let’s say you want to conditionally show a list of products based on whether a user is logged in:

```jsx
function ProductList({ isLoggedIn }) {
  const products = ["Laptop", "Smartphone", "Headphones"];

  return (
    <div>
      {isLoggedIn ? (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      ) : (
        <p>Please log in to view products.</p>
      )}
    </div>
  );
}
```

Here:
- If `isLoggedIn` is `true`, it renders the list of products. Otherwise, it shows a message asking the user to log in.

### Summary:

1. **Conditional Rendering** lets you control what to show based on a condition using `if`, ternary, or `&&`.
2. **Rendering Lists** involves mapping over an array and creating an element for each item. Always use **`key`** props for unique identification.

This way, you can dynamically control and render your UI based on different conditions and arrays! 😊
