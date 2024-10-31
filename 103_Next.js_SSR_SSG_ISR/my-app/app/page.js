// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       This is HomePage
//     </div>
//   );
// }

// By default Next.js is server-side rendering


/**
 * ISR
 * The Home function is an asynchronous function that fetches data from the Vercel API
 * and returns a list of blog posts.
 */
export default async function Home() { 
  
  /**
   * Fetch data from the Vercel API. The 'next' option is used to specify the revalidation time.
   * In this case, the data will be revalidated every 3600 seconds (1 hour).
   */
  let data = await fetch('https://api.vercel.app/blog',  { next: { revalidate: 3600 } })
  
  /**
   * Parse the fetched data as JSON.
   */
  let posts = await data.json()
  
  /**
   * Return a list of blog posts. Each post is represented as a list item.
   * The 'key' prop is used to uniquely identify each list item.
   */
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

/**
 * This constant determines the dynamic rendering behavior of the page.
 * 'force-dynamic' means the page will be rendered dynamically on every request,
 * bypassing Next.js's caching mechanism.
*/
// export const dynamic = 'force-dynamic'


// SSR - Server Side Rendering
// This is default behaviour

// SSG - Static Site Generation
// Any content which does not have network calls is a static page by default

// ISG or ISR
// fetch in next.js caches the response 

// To opt out use:
// export const dynamic = 'force-dynamic';

// However, there are exceptions, fetch requests are not cached when:
// Used inside a Server Action.
// Used inside a Route Handler that uses the POST method.