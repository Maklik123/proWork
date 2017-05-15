import React from "react"

export default({anchorname, Linkify, property})=>(
  <a href={Linkify} className={property}> {anchorname}</a>
)
