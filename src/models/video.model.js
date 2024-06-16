import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginateV2 from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default:0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: {
                type: Schema
            }
        }

    },
    {
        timestamps: true
    }
)

videoSchema

export const Video = mongoose.model("User", userSchema)