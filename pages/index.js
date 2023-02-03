// only website URL, Loead this Page,


// import MeetupList from '@/components/meetups/meetuplist'
import {MongoClient} from "mongodb"
import MeetupList from "../components/meetups/meetuplist"
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import Head from "next/head"
const HomePage = (props) => {

//    const[loadMeetups, setLoadMeetups]= useState([])
//    useEffect(()=>{

//     setLoadMeetups(DUMMYDATA)
//    },[])
    return (
        <Fragment>
            <Head>
                <title>React-Meetup App</title>
                <meta name="description" content="In a Meetup app you will see the huge list of active meetups that are availble here"></meta>
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>

    )
}

export async function getStaticProps(){

    const client= await MongoClient.connect("mongodb+srv://username123:username123@cluster0.vrlrh9e.mongodb.net/nextjs-coursedb?retryWrites=true&w=majority")
    const db = client.db();
    const meetupsCollection = db.collection('meetups')
   const meetups= await meetupsCollection.find().toArray();
   
   client.close();
    return{
        props:{
            meetups: meetups.map(item=>({
                title:item.title,
                address: item.address,
                image: item.image,
                description: item.description,
                id: item._id.toString()
            }))
        },
        revalidate:1
    }
}
export default HomePage
