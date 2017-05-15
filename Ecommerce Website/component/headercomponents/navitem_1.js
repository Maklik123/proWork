import React from  "react"
import Link from "next/link"

export default({children,linkify,styleA, styleB, glypicon})=>(
  <li className={styleA}><Link href={linkify} ><a className={styleB}><i className={glypicon}></i>{children}</a></Link></li>
)
