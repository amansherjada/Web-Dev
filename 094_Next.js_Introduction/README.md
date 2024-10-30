# Introduction to Next.js 

### What is Next.js?

**Next.js** is a **React framework** for building modern web applications with **server-side rendering** (SSR) and **static site generation** (SSG). It simplifies the process of creating dynamic and static websites, offering features such as file-based routing, pre-rendering, API routes, and much more.

### Key Features of Next.js

1. **Server-Side Rendering (SSR)**: Fetch data on the server at request time and render it to HTML before delivering it to the client.
2. **Static Site Generation (SSG)**: Pre-generate pages at build time and serve them as static assets.
3. **API Routes**: Create serverless API endpoints using built-in functions.
4. **File-Based Routing**: Automatically creates routes based on the files in your project.
5. **Image Optimization**: Optimize and serve images with modern formats for better performance.
6. **CSS and Styling Options**: Supports CSS modules, Sass, and CSS-in-JS solutions like styled-components.

### Core Concepts in Next.js

#### 1. **Pages and Routing**

In Next.js, the `pages` folder determines the routes. Any file you create inside `pages` automatically becomes a route.

- **Example:** Create an `about.js` file inside `pages`:

  ```jsx
  // pages/about.js
  export default function About() {
    return <h1>About Page</h1>;
  }
  ```

  Now you can visit the **About** page at [http://localhost:3000/about](http://localhost:3000/about).

#### 2. **Pre-rendering Modes: SSG and SSR**

Next.js pre-renders pages to improve performance and SEO. There are two main ways:

- **Static Site Generation (SSG)**: Pre-generates HTML during build time.
  
  ```jsx
  // pages/ssg.js
  export async function getStaticProps() {
    return {
      props: {
        data: 'This page was generated at build time!',
      },
    };
  }

  export default function SSG({ data }) {
    return <h1>{data}</h1>;
  }
  ```

- **Server-Side Rendering (SSR)**: Pre-renders HTML on each request.

  ```jsx
  // pages/ssr.js
  export async function getServerSideProps() {
    return {
      props: {
        data: 'This page was generated at request time!',
      },
    };
  }

  export default function SSR({ data }) {
    return <h1>{data}</h1>;
  }
  ```

#### 3. **Dynamic Routes**

You can create dynamic routes by using brackets (`[ ]`) in file names. For example, to create a dynamic route for blog posts:

- Create a file `pages/blog/[id].js`:

  ```jsx
  import { useRouter } from 'next/router';

  export default function BlogPost() {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Blog Post ID: {id}</h1>;
  }
  ```

  Now you can navigate to `/blog/123`, `/blog/456`, etc., and see the dynamic route in action.

#### 4. **API Routes**

Next.js lets you create serverless functions to handle backend tasks like database interactions or API requests. You can create API endpoints in the `pages/api` folder.

- Create a file `pages/api/hello.js`:

  ```js
  // pages/api/hello.js
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from Next.js API!' });
  }
  ```

  You can access this endpoint at [http://localhost:3000/api/hello](http://localhost:3000/api/hello).

#### 5. **Styling**

You can use plain CSS, **CSS Modules**, **Sass**, or third-party libraries like **styled-components**.

- **Example with CSS Modules**:

  ```jsx
  // pages/index.js
  import styles from '../styles/Home.module.css';

  export default function Home() {
    return <h1 className={styles.title}>Welcome to Next.js!</h1>;
  }
  ```

  ```css
  /* styles/Home.module.css */
  .title {
    color: blue;
  }
  ```

### Basic Deployment

Next.js apps can be easily deployed on [Vercel](https://vercel.com/) (the creator of Next.js). You can do this with one click after creating a Vercel account or via command line:

1. Push your project to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/), import your GitHub repo, and deploy.

### Summary

- **Next.js** is a powerful framework built on top of React, offering easy SSR and SSG.
- It provides an automatic routing system based on file structure.
- You can create dynamic routes, API endpoints, and manage data-fetching methods.
- Offers great flexibility with styling and deployment options.