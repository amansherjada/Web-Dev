import React from 'react'
import Script from 'next/script'
// https://nextjs.org/docs/pages/api-reference/components/script

const contact = () => {
  return (
    <div>How can we help you?
      <Script>
        {`alert("DANGER")`}
      </Script>
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook",
  description: "HEHE",
};