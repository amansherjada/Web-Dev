import React, { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
    console.log("Navbar is rendered")
    return (
        <div>
            I am a {adjective} navbar
            <button onClick={() => { getAdjective() }}>{getAdjective()}</button>
        </div>
    )
}

// Using memo to wrap the Navbar component
// This ensures that the Navbar only re-renders if the props `adjective` or `getAdjective` change
export default memo(Navbar)