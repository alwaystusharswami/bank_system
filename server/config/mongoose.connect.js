import mongoose from "mongoose";
main().catch((err) => console.error(`error in mongoose connection ${err}`));
async function main() {
  await mongoose.connect(
  );
  console.log("mongoose connected");
}
export { mongoose };
