// This exports the function as the default export of this file
// export default async function Page({ params }) {
//     // Access the dynamic parameter "slug" from the URL. 
//     // "params" contains any dynamic values from the URL. 
//     // Here, we're getting the value of "slug" from params.
//     const slug = (await params).slug

//     // Render a <div> element displaying the slug value.
//     // For example, if the URL is "/posts/my-first-post", 
//     // "slug" would be "my-first-post" and the page would display "My Post: my-first-post".
//     return <div>My Post: {slug}</div>
// }

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

export default async function Page({ params }) {
    // Define a list of supported programming languages
    let languages = ["python",  "java", "c++", "javascript"];
    
    // Check if the provided slug is a supported language
    if (languages.includes(params.slug)){
        // If the slug is a supported language, render a div with the language name
        return <div>Blog: {params.slug}</div>;
    }
    else{
        // If the slug is not a supported language, render a "Blog not found" message
        return <div>Blog not found</div>;
    }
}