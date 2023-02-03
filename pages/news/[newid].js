import MeetupDetail from '@/components/meetups/meetupDetail';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

export async function getStaticPaths() {
    const client= await MongoClient.connect("mongodb+srv://username123:username123@cluster0.vrlrh9e.mongodb.net/nextjs-coursedb?retryWrites=true&w=majority")
    const db = client.db();
    const meetupsCollection = db.collection('meetups')
   const meetups= await meetupsCollection.find({},{_id:1}).toArray();
   client.close()
    return {
      paths:meetups.map(item=>({
        params:{newid: item._id.toString()}
      })),
      fallback: false, // can also be true or 'blocking'
    }
  }
export async function getStaticProps(context){

    const client= await MongoClient.connect("mongodb+srv://username123:username123@cluster0.vrlrh9e.mongodb.net/nextjs-coursedb?retryWrites=true&w=majority")
    const db = client.db();
    const meetupsCollection = db.collection('meetups')
   const selectedMeetup= await meetupsCollection.findOne({_id:new  ObjectId(context.params.newid)});

    client.close()
    return{
        props:{
            meetup:{
                title:selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                id: selectedMeetup._id.toString()
            }
        }
    }
}
const NewsDetailPage = (props) => {

    const router= useRouter();

    return (
    <div>
        <Head>
            <title>{props.meetup.title}</title>
            <meta name='desctiption' content={props.meetup.description}></meta>
        </Head>
        <MeetupDetail data={props.meetup} />
    </div>
  )
}

export default NewsDetailPage
