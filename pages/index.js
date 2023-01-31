// only website URL, Loead this Page,


// import MeetupList from '@/components/meetups/meetuplist'

import MeetupList from "../components/meetups/meetuplist"
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
const DUMMYDATA=[
    {
        id:1,
        title:"This is first Meetup",
        address:"Some Address 123",
        description:"this is the defail description of this blog.. please read this adll. "
    },
    {
        id:2,
        title:"This is Second Demo Meetup",
        address:"Some Address demo Address",
        description:"this is the defail description of this blog.. please read this adll. "
    },
    {
        id:3,
        title:"The best mobile ever",
        address:"Some Address 123",
        description:"this is the defail description of this blog.. please read this adll. "
    },
    {
        id:4,
        title:"Use Lenove laptop for Gamming.",
        address:"Some Address demo Address",
        description:"this is the defail description of this blog.. please read this adll. "
    },
    

    {
        id:5,
        title:"How to Learn the Nextjs",
        address:"Some Address 123",
        description:"this is the defail description of this blog.. please read this adll. "
    },
    {
        id:6,
        title:"Meetup is the best dmeo title",
        address:"Some Address demo Address",
        description:"this is the defail description of this blog.. please read this adll. "
    }
    
]
const HomePage = (props) => {

//    const[loadMeetups, setLoadMeetups]= useState([])
//    useEffect(()=>{

//     setLoadMeetups(DUMMYDATA)
//    },[])
    return (
        <Fragment>
            <MeetupList meetups={props.meetups} />
        </Fragment>

    )
}

export async function getStaticProps(){
    return{
        props:{
            meetups: DUMMYDATA
        },
        revalidate:10
    }
}
export default HomePage
