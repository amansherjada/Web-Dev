import React from 'react'

const about = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center text-white w-[50vw] mx-auto my-20'>

      <h1 className='text-2xl bg-[#40d6f8] font-bold py-2 px-4 rounded-lg'>About - Bhai Link de!</h1>
      <p className='text-lg'>
        This Link Shortener tool allows you to quickly and easily shorten long URLs, making them easier to share.
        Just enter your lengthy URL, and we'll provide you with a shorter version that redirects to your original link.
      </p>
      <p className='text-lg'>
        Whether you’re sharing links on social media, in emails, or anywhere else, this tool helps keep things
        clean and easy to manage.
      </p>
      <p className='text-lg'>We hope this tool makes managing your links simpler and more efficient!</p>
    </div>
  )
}

export default about