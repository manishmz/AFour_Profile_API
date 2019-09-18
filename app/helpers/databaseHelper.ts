const mongoose = require('mongoose');
import { dburi } from "../configs/appConfig";
export const dbConnect = () => {
    mongoose.connect(dburi, { useNewUrlParser: true }, (err: any, res: any) => {
        if (err) {
            console.log(err);
        }
        if (res) {
            console.log("Connected to Atlas DB");
        }
    });
}