# What is Middleware?

**Middleware** is like a bridge that connects two different parts of an application or system. It’s code that runs between receiving a request from the client (like a user visiting a website) and the server sending back a response (like loading a webpage). Think of it as a checkpoint that can inspect, modify, or block a request before it reaches its destination.

In simple terms, middleware:
- Checks or processes incoming requests.
- Decides whether the request should continue to the next part or if some action is needed.
- Can modify or add information to the request.

### What is Middleware in Next.js?

In **Next.js**, middleware is used to run code before a request is completed. This allows you to intercept and modify requests or responses as they’re being handled. It’s useful for adding extra logic, like **authentication checks, logging, redirects, or managing cookies**.

#### Why Use Middleware in Next.js?

- **Authentication & Authorization:** Redirect users based on their authentication state (e.g., logged in or not).
- **Redirects & Rewrites:** Dynamically route users to different pages based on conditions (e.g., language-based routing).
- **API Rate Limiting:** Limit how often users can make requests.
- **Analytics:** Log or monitor incoming requests.
- **Geolocation-based changes:** Show different pages or content based on user location.

### How to Use Middleware in Next.js?

In Next.js, you create a middleware by creating a `middleware.js` (or `middleware.ts` for TypeScript) file inside your project’s root or inside specific folders like `pages`.

Here's a simple step-by-step example:

#### 1. **Creating the Middleware:**

Create a `middleware.js` file at the root of your project:

```javascript
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Example: Check if the user is visiting a specific page
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const isUserLoggedIn = false; // replace this with real auth check

    if (!isUserLoggedIn) {
      // Redirect the user to the login page if not logged in
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Let the request continue as usual if no redirection occurs
  return NextResponse.next();
}
```

#### 2. **How It Works:**

- **`middleware` function:** This is where you define your logic. It takes the `request` object as an argument.
- **`NextResponse.next()`:** Lets the request continue without any interruptions.
- **`NextResponse.redirect()`:** Redirects the user to a different URL if a condition is met (like being not logged in).

#### 3. **Middleware Configuration (Optional):**

You can configure your middleware to apply only to specific routes by using a `matcher` property in the configuration file (`next.config.js`):

```javascript
// next.config.js
module.exports = {
  experimental: {
    middleware: {
      matcher: ['/admin/:path*', '/dashboard/:path*'],
    },
  },
};
```

### Summary

**Middleware** in Next.js allows you to run custom logic on incoming requests before the server responds. It’s like a traffic controller that can guide, redirect, or modify requests as they come in. You can use it for:
- Authentication checks
- Dynamic redirects
- Managing cookies or headers
- And more!

This makes it very flexible and powerful for creating dynamic and secure applications.

## `redirect`, `rewrite`, `next`, `matcher`,  `NextResponse`

In Next.js middleware, the terms `redirect`, `rewrite`, `next`, `matcher`, and `NextResponse` have specific roles. Let's break them down simply:

### 1. **`redirect`**:
- **Purpose:** Redirects the user to a different URL if a certain condition is met.
- **When to use:** If you want to send the user to another page based on some logic (like when they aren’t logged in or if they should be sent to a maintenance page).
- **Example:** Sending users who are not logged in to a login page.

  ```javascript
  // middleware.js
  import { NextResponse } from 'next/server';

  export function middleware(request) {
    const isLoggedIn = false; // Let's assume the user isn't logged in
    if (!isLoggedIn) {
      // Redirect to the login page
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next(); // Allow the request to continue if logged in
  }
  ```

### 2. **`rewrite`**:
- **Purpose:** Changes the URL path without changing what the user sees in the browser.
- **When to use:** If you want to keep the URL clean while serving content from a different route or page. For example, serving a product page at `/product/[id]` but displaying it as `/product-info`.
- **Example:** Rewriting all `/product-info/:id` to `/product/:id`.

  ```javascript
  // middleware.js
  import { NextResponse } from 'next/server';

  export function middleware(request) {
    // Rewrite all requests to `/product-info/:id` to `/product/:id`
    if (request.nextUrl.pathname.startsWith('/product-info')) {
      const newUrl = request.nextUrl.clone();
      newUrl.pathname = newUrl.pathname.replace('/product-info', '/product');
      return NextResponse.rewrite(newUrl);
    }
    return NextResponse.next(); // Let other requests continue as normal
  }
  ```

### 3. **`next`**:
- **Purpose:** Lets the request proceed to the next step without any changes or interruptions.
- **When to use:** When no special actions (like redirect or rewrite) are needed, and the request should continue as it would normally.
- **Example:** Allow all requests to proceed without interruption.

  ```javascript
  // middleware.js
  import { NextResponse } from 'next/server';

  export function middleware(request) {
    // Let all requests continue as they are
    return NextResponse.next();
  }
  ```

### 4. **`matcher`**:
- **Purpose:** Defines which routes should use the middleware.
- **When to use:** To limit the middleware to specific paths or groups of paths. This can be set in `next.config.js`.
- **Example:** Only apply middleware to paths like `/admin/*` or `/dashboard/*`.

  ```javascript
  // next.config.js
  module.exports = {
    experimental: {
      middleware: {
        matcher: ['/admin/:path*', '/dashboard/:path*'],
      },
    },
  };
  ```

- **How it works:** Only URLs starting with `/admin/` or `/dashboard/` will run the middleware. Other URLs will not be affected by it.

### 5. **`NextResponse`**:
- **Purpose:** A helper provided by Next.js to handle responses in middleware. It’s used to create or modify responses, like redirects, rewrites, or setting headers.
- **Methods:** Includes methods like `redirect()`, `rewrite()`, and `next()`.
- **Example:** To redirect users based on authentication:

  ```javascript
  // middleware.js
  import { NextResponse } from 'next/server';

  export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
      const isAuthenticated = false; // Check user's authentication state
      if (!isAuthenticated) {
        // Redirect to login page
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
    return NextResponse.next(); // Proceed if authenticated
  }
  ```

### **Summary**:

- **`redirect`**: Sends users to a different page.
- **`rewrite`**: Changes the backend route without changing the visible URL.
- **`next`**: Allows the request to continue as normal.
- **`matcher`**: Specifies which routes should use the middleware.
- **`NextResponse`**: A helper object to handle the response, with methods to redirect, rewrite, or continue the request.

Using these in middleware gives you more control over how users interact with your Next.js app!