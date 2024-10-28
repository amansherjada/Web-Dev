# **React Router**
https://reactrouter.com/en/main/start/tutorial

**React Router** is a standard library for routing in React. It enables navigation between different views of various components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router simplifies the implementation of dynamic routing in React applications by providing declarative routing components.

Here's a breakdown of key concepts and features of React Router:

### Key Concepts of React Router:

1. **Routes**: A `<Route>` component is used to define a path in your app that should render a particular component. For example:
   ```jsx
   <Route path="/home" element={<Home />} />
   ```
   This means that when the URL is `/home`, the `Home` component will be rendered.

2. **Switch/Routes Component**: React Router v6 uses `<Routes>` instead of `<Switch>` to wrap all `<Route>` elements. It checks for the best match and renders the corresponding component. Example:
   ```jsx
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/contact" element={<Contact />} />
   </Routes>
   ```

3. **Link**: The `<Link>` component is used to navigate between routes without reloading the page. It’s an alternative to using an anchor `<a>` tag to prevent full-page reloads.
   ```jsx
   <Link to="/home">Home</Link>
   ```

4. **NavLink**: The `<NavLink>` component works similarly to `<Link>` but provides additional styling or classes for active links. It helps indicate which route is currently active.
   ```jsx
   <NavLink to="/home" className={({ isActive }) => (isActive ? 'active-link' : '')}>
     Home
   </NavLink>
   ```

5. **Outlet**: The `<Outlet>` component is a placeholder for nested routes. It indicates where the child components should be rendered inside the parent component.
   ```jsx
   <Route path="/dashboard" element={<Dashboard />}>
     <Route path="analytics" element={<Analytics />} />
     <Route path="reports" element={<Reports />} />
   </Route>
   ```

6. **useNavigate**: This hook allows you to programmatically navigate to different routes. It can be useful for redirects based on user actions.
   ```jsx
   import { useNavigate } from 'react-router-dom';
   const navigate = useNavigate();
   const goToHome = () => {
     navigate('/home');
   };
   ```

7. **useParams**: This hook helps in extracting route parameters. For example, in a URL like `/product/123`, `useParams` can fetch `123` as a parameter.
   ```jsx
   const { id } = useParams();
   ```

8. **useLocation**: This hook returns the current location object, which contains information about the current path, hash, search parameters, and more.
   ```jsx
   const location = useLocation();
   console.log(location.pathname); // Outputs the current path
   ```

### Example:

Here’s a basic example to demonstrate the usage of React Router:

#### Step 1: Install React Router
```bash
npm install react-router-dom
```

#### Step 2: Basic Routing Example
```jsx
// App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Features and Benefits:

1. **Nested Routes**: You can organize routes in a hierarchical way, allowing for deeply nested views.
2. **Dynamic Routing**: Routes can be dynamic, supporting path parameters for accessing dynamic content.
3. **Programmatic Navigation**: Use hooks to redirect users based on events or application state.
4. **Declarative**: The declarative nature of defining routes makes it easy to understand and maintain.
5. **Route Guards and Redirects**: React Router allows redirecting users based on conditions such as authentication.

React Router provides a powerful and flexible way to handle routing and navigation within React applications, enabling seamless and smooth navigation experiences for users.