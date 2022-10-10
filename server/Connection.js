import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.adkgj.mongodb.net/admindatabase`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
