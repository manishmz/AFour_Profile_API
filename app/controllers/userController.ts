import User from "../models/User";
import response from "../helpers/responseHelper";

const addUser = async (req: any, res: any) => {
    const user = new User({ ...req.body });
    const savedUser = await user.save();
    if (savedUser) {
        res.send(response.generate(200, false, { userId: savedUser._id }, "User saved successfully"));
    } else {
        res.send(response.generate(500, true, {}, "Some error occured"));
    }
}


const getAllUser = async (req: any, res: any) => {
    const users = await User.find();
    res.send(response.generate(200, true, users, "Users List"));
}
export default {
    addUser,
    getAllUser
}