import mongoose from 'mongoose';
const connection=async ()=>{
    const url=`mongodb://user:Aniket@chatapp-shard-00-00.blbje.mongodb.net:27017,chatapp-shard-00-01.blbje.mongodb.net:27017,chatapp-shard-00-02.blbje.mongodb.net:27017/CHATAPP?ssl=true&replicaSet=atlas-55xid0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    await mongoose.connect(url,{useUnifiedTopology:  true ,useNewUrlParser:true });
    console.log('database connected'); 
    }
    catch(error){
        console.log("error while connedcting",error);
    }
}
export default connection;