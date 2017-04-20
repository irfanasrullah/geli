import * as mongoose from "mongoose";
import {ICourse} from "./ICourse";
import {User} from "./User";
import {Lecture} from "./Lecture";

interface ICourseModel extends ICourse, mongoose.Document {
}

const courseSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        active: {
            type: Boolean
        },
        description: {
            type: String
        },
        courseAdmin: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: User
            }
        ],
        students: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: User
            }
        ],
        lectures: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: Lecture
            }
        ],
    }, {
        timestamps: true
    }
);


const Course = mongoose.model<ICourseModel>("Course", courseSchema);

export {Course, ICourseModel};