# Next.js **layouts**

In Next.js, **layouts** help structure and organize your pages by allowing you to define reusable page structures, like headers, footers, and sidebars. Think of layouts as templates that wrap around the main content of each page. This is especially helpful when your site has a consistent design across different pages.

Here’s a breakdown of how layouts work and how to create them in Next.js:

### 1. **Why Use Layouts?**
   - Layouts make it easy to add elements that appear across multiple pages (e.g., a header or footer).
   - They help keep code organized and reduce repetition by creating a reusable template.
   - They allow different layouts for different sections of a site, like a blog layout versus a dashboard layout.

### 2. **Creating a Basic Layout Component**
   In Next.js, a layout is just a regular React component. You can create a layout component by defining it in a new file, like `Layout.js`.

   ```javascript
   // components/Layout.js
   import React from 'react';

   const Layout = ({ children }) => {
     return (
       <div>
         <header>Header content here</header>
         <main>{children}</main>
         <footer>Footer content here</footer>
       </div>
     );
   };

   export default Layout;
   ```

   - **`children`**: The `children` prop represents the page content wrapped inside the layout. Next.js automatically injects the current page’s content here when you use this layout.
   - **header/footer**: You can add common elements (like headers or footers) outside of the `{children}`, so they appear on every page that uses this layout.

### 3. **Applying Layouts to Pages**
   You can wrap your pages with this layout component. For example, in the `pages/_app.js` file (which is the root component for all pages in Next.js), you can wrap each page with the `Layout` component.

   ```javascript
   // pages/_app.js
   import Layout from '../components/Layout';
   import '../styles/globals.css';

   function MyApp({ Component, pageProps }) {
     return (
       <Layout>
         <Component {...pageProps} />
       </Layout>
     );
   }

   export default MyApp;
   ```

   - Here, `Component` represents the current page being rendered, and `pageProps` are any additional properties that the page requires.
   - By wrapping `<Component />` in `<Layout>`, you apply this layout to every page in your app.

### 4. **Using Different Layouts on Different Pages**
   If your app needs multiple layouts (e.g., one for the main site and another for a dashboard), you can set up specific layouts by checking for a layout on each page.

   ```javascript
   // pages/_app.js
   import DefaultLayout from '../components/DefaultLayout';
   import DashboardLayout from '../components/DashboardLayout';

   function MyApp({ Component, pageProps }) {
     // Check if the page component has a `getLayout` function
     const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

     return getLayout(<Component {...pageProps} />);
   }

   export default MyApp;
   ```

   Now, on pages where you want a different layout, add a `getLayout` function:

   ```javascript
   // pages/dashboard.js
   import DashboardLayout from '../components/DashboardLayout';

   function DashboardPage() {
     return <div>Dashboard content here</div>;
   }

   DashboardPage.getLayout = function (page) {
     return <DashboardLayout>{page}</DashboardLayout>;
   };

   export default DashboardPage;
   ```

   - This way, `DashboardPage` will use the `DashboardLayout`, while other pages use `DefaultLayout`.

### 5. **Nested Layouts**
   Next.js also supports nested layouts, where a layout can contain another layout. This can be helpful if, for example, a blog page has an overarching site layout but also needs a specific blog layout.

   - Create a layout component for each level and wrap the child layout within the parent layout when rendering.

### Summary
In summary, layouts in Next.js help you:
- Reuse common elements across pages (like headers and footers).
- Customize page structures for different sections of your site.
- Keep your code organized and easy to manage by reducing repetition.

## Grouping layouts

In Next.js, **grouping layouts for specific routes** is a useful way to create organized layouts for specific parts of your application, like an `admin` section. This allows you to apply a custom layout just for routes under `/admin`, and it’s especially handy for maintaining consistent styles and components (like a sidebar or top navigation) that only apply to a certain route group. 

### 1. **Grouping Layouts Using Folders**
Next.js uses a **folder-based routing** system, so you can group routes under a specific folder to apply a layout to all routes within that group. For example, let’s say you want all pages under `/admin` to have an `AdminLayout`. You can create a folder for these pages:

```
/pages
├── index.js
├── about.js
└── admin
    ├── index.js
    ├── users.js
    └── settings.js
```

In this structure:
- `/admin/index.js` will render at the `/admin` route.
- `/admin/users.js` will render at the `/admin/users` route.
- `/admin/settings.js` will render at the `/admin/settings` route.

### 2. **Creating a Layout for the Route Group**
Next, create an `AdminLayout` component that you can wrap around all routes within the `/admin` folder.

```javascript
// components/AdminLayout.js
import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <header>Admin Dashboard Header</header>
      <nav>Admin Sidebar Navigation</nav>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
```

### 3. **Applying the Layout to All Admin Pages**
Now, you want to ensure every page under `/admin` uses `AdminLayout`. A common way to do this is by checking for a layout within `_app.js` and setting the layout conditionally.

```javascript
// pages/_app.js
import AdminLayout from '../components/AdminLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // Check if the current page is part of the /admin route group
  if (Component.routeGroup === 'admin') {
    return <AdminLayout>{getLayout(<Component {...pageProps} />)}</AdminLayout>;
  }

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
```

To set `routeGroup` for specific pages, you can add it directly on the page component. For instance:

```javascript
// pages/admin/index.js
function AdminHomePage() {
  return <div>Admin Home Page Content</div>;
}

AdminHomePage.routeGroup = 'admin';

export default AdminHomePage;
```

### 4. **Using `()` to Isolate Layouts in the Route Group**
In Next.js 13 and beyond, **parentheses in folder names** (like `(admin)`) can help you create **isolated layouts** for specific route groups. This is particularly helpful in `app`-based routing (Next.js 13+) to keep these layouts organized without adding them to the actual route path. For example:

```
/app
├── layout.js         // Default layout for the app
└── (admin)           // Grouping folder, doesn't affect URL
    ├── layout.js     // Admin-specific layout
    ├── page.js       // Route for /admin
    └── users
        └── page.js   // Route for /admin/users
```

In this setup:
- **`(admin)/layout.js`** will serve as the layout for all pages under the `(admin)` folder.
- **Route paths remain unchanged** (e.g., `(admin)/users/page.js` will map to `/admin/users`), so the `()` lets you group layouts without affecting URLs.

### 5. **Example Admin Layout with Next.js 13+ Syntax**
```javascript
// app/(admin)/layout.js
export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <header>Admin Header</header>
      <aside>Admin Sidebar</aside>
      <main>{children}</main>
    </div>
  );
}
```

With this layout file in `(admin)`, all routes under this folder will inherit the `AdminLayout` automatically.

### Why Use Grouping with `()`?
- **Keeps URL paths clean**: Wrapping folder names with `()` in Next.js 13+ lets you structure your code without affecting route paths.
- **Improves layout organization**: You can apply distinct layouts to entire sections of your app, such as `admin`, without repeating layout code.
- **Simplifies code**: Instead of setting layouts manually on every page, Next.js recognizes the group layout automatically, applying it to all routes within the group.

Using layout grouping and `()` makes managing different sections, like an `admin` area, much simpler and more efficient in Next.js. Let me know if you’d like a deeper dive into any part!