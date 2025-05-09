import mongoose from "mongoose";
export const connnectDB = async () => {
  await mongoose.connect("mongodb+srv://rikipatande81979:n0hDy01sBIXL5aUP@cluster0.hgc6lnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("db connected"));
};
