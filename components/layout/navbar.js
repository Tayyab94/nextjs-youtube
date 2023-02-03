import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/news"}>News</Link></li>
        <li><Link href={"/news/What-new"}>News Details</Link></li>
        <li><Link href={"/createMeetup"}>Create MeetUp</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
