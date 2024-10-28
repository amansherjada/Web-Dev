import React from 'react'
import "./Navbar.css"
// import { Link } from 'react-router-dom' // Can be used to prevent full-page reloads
import { NavLink } from 'react-router-dom' // Importing NavLink for active link styling

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          {/* 
            The following lines are commented out examples showing different ways to create links:
            <a> tags can cause the page to refresh on click, which isn't desirable in single-page applications (SPAs). 
          */}
          {/* 
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/login"><li>Login</li></a>
          */}

          {/* 
            The <Link> component from 'react-router-dom' can be used to create navigation without refreshing the page,
            but here we are using <NavLink> for active link styling.
          */}
          {/* 
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/login"><li>Login</li></Link>
          */}

          {/* 
            Using NavLink to conditionally apply a class to indicate active links:
            - className is set based on whether the link is active (current route matches).
            - e.isActive returns true if the link is active.
          */}
          <NavLink className={(e) => { return e.isActive ? "grey" : "" }} to="/"><li>Home</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "grey" : "" }} to="/about"><li>About</li></NavLink>
          <NavLink className={(e) => { return e.isActive ? "grey" : "" }} to="/login"><li>Login</li></NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar // Exporting the Navbar component for use in other parts of the app
