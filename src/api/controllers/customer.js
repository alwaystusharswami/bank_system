import { User } from "../model/user.model.js";

async function customerDetail(req, res) {
  const user = await User.findById(req.params.id);
  return res.status(200).json(user);
}
export { customerDetail };
