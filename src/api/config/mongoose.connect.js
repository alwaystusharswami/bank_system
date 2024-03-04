import mongoose from "mongoose";
main().catch((err) => console.error(`error in mongoose connection ${err}`));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/bankingSystem");
  console.log("mongoose connected");
}
export { mongoose };
