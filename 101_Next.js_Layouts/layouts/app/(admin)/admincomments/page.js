import React from 'react'

const page = () => {
  return (
    <div>
      Comments
    </div>
  )
}

export default page


// Wrapping the admin folder in () like (admin) allows us to access admincomments at
// http://localhost:3000/admincomments instead of http://localhost:3000/admin/admincomments
// while still applying the group layout to all admin-related routes.
