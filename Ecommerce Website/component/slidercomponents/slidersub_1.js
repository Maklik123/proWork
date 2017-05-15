import React from "react"

export default({target1, target2, status})=>(
  <li data-target={target1} data-slide-to={target2} className={status}></li>
)
