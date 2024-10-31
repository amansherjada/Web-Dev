# next/navigation

In Next.js 13, `next/navigation` is a new feature that offers a powerful way to handle routing and navigation within the app. Unlike traditional client-side routing, `next/navigation` allows you to handle routing more effectively with the help of several hooks. These hooks enable smooth navigation, URL updates, data fetching, and more.

Here's a simple breakdown of the hooks available in `next/navigation`, their purpose, and when to use each:

### 1. `useRouter`

https://nextjs.org/docs/app/api-reference/functions/use-router

- **Purpose**: `useRouter` provides access to the router object, which lets you programmatically navigate within the app.
- **Usage**: This hook is helpful when you need to navigate between pages based on specific conditions, such as after form submission or a button click.
- **Example**:
  ```jsx
  import { useRouter } from 'next/navigation';

  function MyComponent() {
    const router = useRouter();

    const handleNavigate = () => {
      router.push('/about'); // Navigates to the /about page
    };

    return <button onClick={handleNavigate}>Go to About</button>;
  }
  ```

### 2. `usePathname`

https://nextjs.org/docs/app/api-reference/functions/use-pathname

- **Purpose**: `usePathname` returns the current path of the URL, so you can easily access it and make decisions based on the current path.
- **Usage**: Use this hook when you need to perform actions based on the URL path, like highlighting active links or showing content conditionally based on the current route.
- **Example**:
  ```jsx
  import { usePathname } from 'next/navigation';

  function ActiveLink({ href, children }) {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
      <a href={href} style={{ color: isActive ? 'blue' : 'black' }}>
        {children}
      </a>
    );
  }
  ```

### 3. `useSearchParams`

https://nextjs.org/docs/app/api-reference/functions/use-search-params

- **Purpose**: `useSearchParams` lets you read and update URL search parameters (query strings) without reloading the page.
- **Usage**: This hook is ideal for handling filters, pagination, and dynamic content changes that rely on URL parameters.
- **Example**:
  ```jsx
  import { useSearchParams } from 'next/navigation';

  function SearchComponent() {
    const searchParams = useSearchParams();

    const query = searchParams.get('query'); // Gets the current query parameter

    return <p>Search query: {query}</p>;
  }
  ```

### 4. `useParams`

https://nextjs.org/docs/app/api-reference/functions/use-params

- **Purpose**: `useParams` retrieves route parameters, which are the dynamic segments in your URL (e.g., `/product/[id]`).
- **Usage**: Use this hook to access dynamic segments in a URL to fetch or display relevant data based on the URL.
- **Example**:
  ```jsx
  import { useParams } from 'next/navigation';

  function ProductPage() {
    const { id } = useParams();

    return <p>Product ID: {id}</p>; // Shows the dynamic product ID
  }
  ```

### 5. `useSelectedLayoutSegments`

https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment

- **Purpose**: `useSelectedLayoutSegments` returns the segments of the current layout route.
- **Usage**: Useful for when you want to know the current segment for conditionally rendering parts of a layout or applying styles to active segments.
- **Example**:
  ```jsx
  import { useSelectedLayoutSegments } from 'next/navigation';

  function Breadcrumb() {
    const segments = useSelectedLayoutSegments();

    return (
      <div>
        Current segment: {segments.join(' > ')}
      </div>
    );
  }
  ```

### 6. `useServerInsertedHTML`

https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segments

- **Purpose**: `useServerInsertedHTML` allows you to inject HTML into the server-rendered page before sending it to the client.
- **Usage**: Use this hook for SSR optimizations, such as adding critical CSS or metadata dynamically before the page loads.
- **Example**:
  ```jsx
  import { useServerInsertedHTML } from 'next/navigation';

  function MyPage() {
    useServerInsertedHTML(() => {
      return <style>{`.my-style { color: red; }`}</style>;
    });

    return <div className="my-style">Hello, styled by server HTML!</div>;
  }
  ```

### Summary
- **`useRouter`**: For programmatic navigation (ideal for button clicks or form submissions).
- **`usePathname`**: To get the current path (good for active links and conditional rendering based on the route).
- **`useSearchParams`**: For handling search parameters in the URL (great for filters or dynamic data).
- **`useParams`**: To access route parameters (useful for fetching data based on dynamic segments like an ID).
- **`useSelectedLayoutSegments`**: To know which segment of a layout route is active (useful for layout-specific rendering).
- **`useServerInsertedHTML`**: For injecting server-side HTML (useful for critical CSS or metadata).

Each of these hooks enables smoother, more flexible routing and state management within Next.js applications by making it easier to interact with the navigation system.


## When to use each of the `next/navigation` hooks:

1. **`useRouter`**:  
   Use this when you want to navigate programmatically, such as redirecting users after a form submission or navigating when a button is clicked.

2. **`usePathname`**:  
   Use this when you need the current URL path, like highlighting active links or conditionally displaying content based on the page the user is on.

3. **`useSearchParams`**:  
   Use this to read or update URL query parameters without a page reload, such as managing filters, search terms, or pagination.

4. **`useParams`**:  
   Use this to access dynamic segments in the URL (like an `id` in `/product/[id]`). It’s useful when you need to load specific data based on the URL.

5. **`useSelectedLayoutSegments`**:  
   Use this when you want to identify or style the current layout segment, such as for breadcrumb navigation or styling active sections in nested routes.

6. **`useServerInsertedHTML`**:  
   Use this when you need to inject HTML on the server side before the page loads, typically for critical CSS or adding server-rendered metadata.

Each hook is optimized for specific types of navigation and data management tasks to streamline routing in Next.js apps.