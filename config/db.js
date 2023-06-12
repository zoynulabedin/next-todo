import mongoose from "mongoose";

// create a connection

const mongoDBConnect = async () => {
	try {
		const connect = mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected Successfull`);
	} catch (error) {
		console.log(error.message);
	}
};
export default mongoDBConnect;
