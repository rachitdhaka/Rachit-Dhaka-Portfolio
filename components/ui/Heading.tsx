"use client"
import React from "react"

export const Heading = ({children , className} :{
    children : React.ReactNode;
    className?: String;
}) => {
  return (
    <p className={("text-2xl mb-10 font-medium ")}>{children}</p>
  )
}