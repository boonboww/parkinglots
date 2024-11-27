// eslint-disable-next-line no-unused-vars
import React from "react"

// eslint-disable-next-line react/prop-types
const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className="back relative">
        <div className="container mx-auto p-4 text-4xl font-bold z-10  absolute inset-0 items-center justify-center text-white  ">
          <span >{name}</span>
          <h1>
            {title}
          </h1>
        </div>
        <img
          className="w-full h-64 object-cover"
          src={cover}
          alt=""
        />
      </div>
    </>
  )
}

export default Back
