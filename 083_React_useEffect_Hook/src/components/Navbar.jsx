import React from 'react'
import { useEffect } from 'react'

const Navbar = ({ color }) => {
    // Runs when color changes
    useEffect(() => {
        alert("Color has been changed")
    }, [color])

    //Runs on every every render
    useEffect(() => {
        alert("Runs on every every render")
    })

    // Runs only on first render
    useEffect(() => {
        alert("Runs only on first render")
    }, [])

    return (
        <div>
            I am {color} navbar hehe..
        </div>
    )
}

export default Navbar