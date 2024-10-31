# SSR, SSG & ISR

In Next.js, there are several ways to render content for your pages. The three main methods are **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, and **Incremental Static Regeneration (ISR)**. Each method has different characteristics, benefits, and best-use cases.

Let’s break down each one in simple terms:

---

### 1. Server-Side Rendering (SSR)
**SSR** means that each time a user requests a page, the server generates the HTML for that page in real time, based on the latest data available. This ensures that the user always gets the most current version of the page.

- **How It Works**: When a request is made, Next.js fetches the data on the server, generates the HTML, and sends it to the browser. This happens every time someone visits that page.
- **Benefits**: Since the data is fetched and rendered on the server for each request, the user always sees the latest content. SSR is ideal for pages where content changes frequently or is user-specific.
- **Example Use Cases**: News feeds, user dashboards, e-commerce product listings.


---

### 2. Static Site Generation (SSG)
**SSG** generates the HTML for the page at **build time** (when you deploy your app). This means the HTML is pre-generated, saved as static files, and served to all users. This approach is very fast because the server doesn’t need to fetch or calculate anything at the time of the request.

- **How It Works**: Next.js generates the page once during the build process and stores it as a static HTML file. This file is then served to all users immediately upon request.
- **Benefits**: Since the page is pre-generated, it loads very quickly. SSG is ideal for content that doesn’t change often, like blog posts, documentation, or marketing pages.
- **Example Use Cases**: Blog posts, landing pages, documentation.
- **How to Use in Next.js**: You can use `getStaticProps` in your page component to enable SSG.
  ```jsx
  export async function getStaticProps() {
    const data = await fetchSomeData();
    return { props: { data } };
  }
  ```

---

### 3. Incremental Static Regeneration (ISR)
**ISR** combines the speed of SSG with the ability to keep content up-to-date. With ISR, you can tell Next.js to regenerate a page on the server at specified intervals or when a request is made after a set period of time.

- **How It Works**: Next.js generates a static page at build time, but you can set a revalidation time. For example, if you set the revalidate time to 60 seconds, the page will be regenerated on the server if a user requests it after 60 seconds have passed since the last regeneration. This keeps the content fresh without needing full SSR.
- **Benefits**: ISR combines the speed of SSG with the flexibility to update content periodically. It’s ideal for pages that don’t need to update with every request but still need occasional updates.
- **Example Use Cases**: E-commerce product listings, blog posts with frequent updates, landing pages with changing offers.
- **How to Use in Next.js**: Use `getStaticProps` with the `revalidate` property.
  ```jsx
  export async function getStaticProps() {
    const data = await fetchSomeData();
    return {
      props: { data },
      revalidate: 60, // Regenerate every 60 seconds
    };
  }
  ```

---

### Summary
- **SSR** (Server-Side Rendering): Renders the page on each request, always shows fresh data, good for dynamic and frequently updated pages.
- **SSG** (Static Site Generation): Pre-builds the page at deploy time, very fast to load, good for content that rarely changes.
- **ISR** (Incremental Static Regeneration): Pre-builds the page but can refresh at set intervals, ideal for mostly static pages that need periodic updates.

These rendering methods let you optimize the user experience and performance based on how often your page’s content changes.