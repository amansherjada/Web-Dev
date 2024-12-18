"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setUrl("")
                setShorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='text-white mx-auto max-w-lg bg-[#40d6f8] my-20 py-10 px-10 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URL</h1>

            <div className='flex flex-col gap-2'>

                <input
                    className='text-black px-4 py-2 focus:outline-[#40d6f8]'
                    type="text"
                    value={url}
                    placeholder='Enter your URL'
                    onChange={e => { setUrl(e.target.value) }}
                />

                <input
                    className='text-black px-4 py-2 focus:outline-[#40d6f8]'
                    type="text"
                    value={shorturl}
                    placeholder='Enter your preferred short URL'
                    onChange={e => { setShorturl(e.target.value) }}
                />

                <button
                    className=' bg-[#000000] rounded-lg shadow-lg p-3 py-1 my-4 font-bold text-white'
                    onClick={generate}>
                    Generate
                </button>
            </div>

            {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link>
            </code></>}
        </div>
    )
}

export default shorten