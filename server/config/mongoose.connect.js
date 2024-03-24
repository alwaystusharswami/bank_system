import mongoose from "mongoose";
main().catch((err) => console.error(`error in mongoose connection ${err}`));
async function main() {
  await mongoose.connect(
    "mongodb+srv://swamitusharjee2018:tusharswami12345678@cluster0.2h4sx8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("mongoose connected");
}
export { mongoose };
