# **Dynamic routes**

https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

In Next.js, *dynamic routes* let you create pages that automatically adjust based on the URL path, making it possible to handle multiple pages with one template. This is especially useful if you want to display different content based on a unique identifier in the URL, like a blog post’s ID, a product name, or a username.

### How Dynamic Routes Work in Next.js

1. **Creating Dynamic Route Files**:
   - Inside the `pages` folder, you create a new file with square brackets around the file name, such as `[id].js`. The name inside the brackets acts as a placeholder and represents a dynamic segment of the URL.
   - For instance, `[id].js` could be used to dynamically handle any URL ending in `/id`, such as `/posts/1`, `/posts/2`, etc.

2. **Example of a Dynamic Route**:
   - Let’s say you have a blog and want each post to have a unique URL like `/posts/my-first-post` or `/posts/my-second-post`.
   - You would create the file `pages/posts/[slug].js` where `slug` is a placeholder for the unique part of each URL.

3. **Accessing Route Parameters**:
   - Inside a dynamic route file, Next.js gives you access to the dynamic part of the URL (like `id` or `slug`) through the `params` object.
   - `params` will contain any values in the URL that correspond to the dynamic parts. For instance, if the URL is `/posts/my-first-post`, then `params.slug` would be `"my-first-post"`.

4. **Using the Parameter to Fetch Data**:
   - You can use the dynamic parameter to fetch data specific to that URL. For instance, if `slug` is `my-first-post`, you could use it to retrieve the corresponding blog post from a database.

### Example Code for a Dynamic Route Page

Here’s how a dynamic route file might look:

```javascript
// File: pages/posts/[slug].js

export default function PostPage({ params }) {
    const { slug } = params;  // Destructure 'slug' from params
    return <div>Viewing Post: {slug}</div>;
}
```

In this example, if you navigate to `/posts/my-first-post`, the page will display "Viewing Post: my-first-post".

### Putting It All Together

Dynamic routes in Next.js are powerful because:
- They let you create a single template that handles many pages.
- They make it easy to add or change content just by updating your data (e.g., blog posts, products, user profiles).
- They improve scalability since you don’t need to manually create files for every new page.

In summary, dynamic routes allow Next.js applications to efficiently create many unique pages with minimal code, adapting based on what’s in the URL.


404 page = https://nextjs.org/docs/app/api-reference/file-conventions/not-found

ERROR = https://nextjs.org/docs/app/api-reference/file-conventions/error
