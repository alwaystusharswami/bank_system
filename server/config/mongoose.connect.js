const mongoose = require("mongoose");
const password = process.env.PASSWORD;
main().catch((err) => console.error(`error in mongoose connection ${err}`));
async function main() {
  await mongoose.connect(
    `mongodb+srv://swamitusharjee2018:${password}@cluster0.2h4sx8f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
  console.log("mongoose connected");
}
module.exports = mongoose;
