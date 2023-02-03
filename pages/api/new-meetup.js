
import {MongoClient} from "mongodb"
// for this we need to install the package, npm install mongodb


async function handler(req, res){
    if(req.method==="POST")
    {
        const data = req.body;
        const{title,image, description, address}= data;

     const client= await MongoClient.connect("mongodb+srv://username123:username123@cluster0.vrlrh9e.mongodb.net/nextjs-coursedb?retryWrites=true&w=majority")
     const db = client.db();
     const meetupsCollection = db.collection('meetups')
    const result= await meetupsCollection.insertOne(data)
    
    console.log(result);
    client.close();

    res.status(201).json({message:"Record Addred"})
}
}


export default handler;