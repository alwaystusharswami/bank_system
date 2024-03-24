import { User } from "../model/user.model.js";

async function allCustomer(req, res) {
  const user = await User.find();
  return res.json(user);
}
async function customerDetail(req, res) {
  const user = await User.findById(req.params.id);
  return res.status(200).json(user);
}
async function transfer(req, res) {
  const amount = +req.body.amount;
  const sender = await User.findOne({ name: req.body.user });
  sender.currentBalance = sender.currentBalance - amount;
  sender.save();
  const receiver = await User.findOne({ name: req.body.input });
  receiver.currentBalance = receiver.currentBalance + amount;
  receiver.save();
  return res.status(200).json({ message: "done" });
}
export { customerDetail, allCustomer, transfer };
