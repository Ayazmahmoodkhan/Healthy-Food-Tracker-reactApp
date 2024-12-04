import React from 'react'

const ErrorMassage = ({items}) => {
  return (
    <>
    {items.length===0 && <h3>I am still hungry</h3>}
    </>
  )
}

export default ErrorMassage
