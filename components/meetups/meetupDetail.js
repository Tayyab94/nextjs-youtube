import Link from 'next/link'
import React from 'react'

const MeetupDetail = ({data}) => {
//    console.log(data)
  return (
    <div>
                    <div className='innerbox'>    
                    <Link href={`/news/${data.id}`}>                    
                     <h2>Serial No{data.id}- <span>{data.address}</span></h2>
                     </Link>
                    <h3>title : {data.title}</h3>
                    <p>Address {data.description}</p>
                        <button onClick={()=> router.push(`/news/${data.id}`)}>Click Here</button>
                    </div>
                </div>
  )
}

export default MeetupDetail
