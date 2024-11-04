import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center text-white w-[50vw] mx-auto my-20'>
      <h1 className='text-2xl bg-[#40d6f8] font-bold py-2 px-4 rounded-lg'>Contact Us - Bhai Link de!</h1>
      <p className='text-lg'>
        Have questions, feedback, or need assistance with our Link Shortener tool? We're here to help! 
        Reach out to us, and we'll get back to you as soon as possible.
      </p>
      <p className='text-lg'>
        <strong>Email:</strong> support@bhailinkde.com
      </p>
      <p className='text-lg'>
        <strong>Phone:</strong> +1 (123) 456-7890
      </p>
      <p className='text-lg'>
        Or feel free to connect with us on social media for updates and more support options.
      </p>
      <p className='text-lg'>We look forward to hearing from you and helping make your experience better!</p>
    </div>
  );
};

export default Contact;
