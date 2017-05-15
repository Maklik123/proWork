import React from "react";
import Link from "next/link"

export default({children, linkify , status})=>(
  <li><Link href={linkify}><a className={status}>{children}</a></Link></li>
)
