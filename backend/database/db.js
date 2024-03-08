// import { connect } from "mongoose";

// const connectToMongo = async () => {
//   try {
//     await connect('mongodb+srv://Rashika:0pSO1X01uOjxKDF2@cluster0.k1lbprv.mongodb.net/enoteBook');
//     console.log("---***Database Connected Successfully***---")
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default connectToMongo;
// // 0pSO1X01uOjxKDF2 password
// // Rashika -- username 


import { connect } from 'mongoose'
import 'dotenv/config';

const connectToMongo = async () => {
    try {
        await connect(process.env.MONGO_URI);
        console.log("*** Database connected Successfully ***");
    } catch (error) {
        console.log(error)
    }
}

 
export default connectToMongo;