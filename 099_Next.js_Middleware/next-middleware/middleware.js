// https://nextjs.org/docs/app/building-your-application/routing/middleware

// Importing the NextResponse object from 'next/server'
// NextResponse provides utilities to handle server-side responses, like redirects, rewrites, etc.
// import { NextResponse } from 'next/server'
 
// Middleware function that will run on incoming requests matching the configured paths
// The request parameter contains information about the incoming HTTP request.

// export function middleware(request) {

  // Redirect any incoming request that matches the `matcher` path to the '/aboutme' page
  // Creates a redirect response using NextResponse.redirect and sends the user to '/aboutme'

  //   return NextResponse.redirect(new URL('/aboutme', request.url))
// }
 
// Configuration object specifying which paths should trigger this middleware
// The matcher here specifies that this middleware will run for all paths starting with '/about'
// The ':path*' part means it will also match any sub-paths under '/about', such as '/about/team' or '/about/us'.
// export const config = {
//   matcher: '/about/:path*',
// }


// Importing the NextResponse object from 'next/server'
// NextResponse is used to create and return responses such as redirects or rewrites.
import { NextResponse } from 'next/server'
 
// Middleware function that checks the request's pathname and performs specific actions based on it
export function middleware(request) {
  // Check if the request URL starts with '/about'
  // If it does, rewrite the request to '/aboutme', effectively showing the content of '/aboutme' instead of '/about'
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/aboutme', request.url))
  }
 
  // Check if the request URL starts with '/dashboard'
  // If it does, rewrite the request to the homepage ('/'), effectively displaying the homepage content
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}
