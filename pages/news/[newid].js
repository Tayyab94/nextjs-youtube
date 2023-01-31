import MeetupDetail from '@/components/meetups/meetupDetail';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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
export async function getStaticPaths() {
    const paths = DUMMYDATA.map(item => ({
        params: { newid: item.id.toString() },
      }));
    return {
      paths:paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
export async function getStaticProps(context){
    console.log(context)
    const id = context.params.newid;
    const result= DUMMYDATA.find(item=> item.id==id)
    console.log(result)
    return{
        props:{
            meetup:result
        }
    }
}
const NewsDetailPage = (props) => {
   console.log(props.meetup)
    const router= useRouter();
    // const newsid= router.query.newid
    // const [dnew, setDnew]= useState({})
    // const [loading, setLoading]= useState(false)
    // useEffect(() => {
    //     const item = DUMMYDATA.find(item => item.id === newsid);
    //     if (item) {
    //       setDnew(item);
    //     }
    //   }, [newsid]);

    // if(!dnew) return <p>No data</p>
    return (
    <div>
        <MeetupDetail data={props.meetup} />
    </div>
  )
}

export default NewsDetailPage
