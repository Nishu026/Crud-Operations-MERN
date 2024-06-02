import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(`mongodb://127.0.0.1:27017/merndb`);
       console.log(`\n MongoDB Connected !!`)
    } catch (error) {
        console.log("Mongodb connection error",error);
        process.exit(1)
    }
}
export default connectDB
