import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MeetupList = ({ meetups }) => {
    const router= useRouter();

    // const showDetailHandler=(id)=>{
    //     router.push(`/news/${id}`)
    // }
    return (
        <div className="newbox">
            {meetups.map((item, index) => {

                    return <div key={item.id || index} >
                        <div className='innerbox'>    
                        <Link href={`/news/${item.address}`}>                    
                        <h2>Serial No{item.id}- <span>{item.address}</span></h2>
                        </Link>
                        <h3>title : {item.title}</h3>
                        <p>Address {item.description}</p>
                            <button onClick={()=> router.push(`/news/${item.id}`)}>Click Here</button>
                        </div>
                    </div>

            })}
        </div>
    )
}

export default MeetupList
