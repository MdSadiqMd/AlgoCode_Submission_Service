import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User Id of Submission cannot be empty']
    },
    problemId: {
        type: String,
        required: [true, 'Problem Id of Submission cannot be empty']
    },
    code: {
        type: String,
        required: [true, 'Code of Submission cannot be empty']
    },
    language: {
        type: String,
        required: [true, 'Language of Submission cannot be empty']
    },
    status: {
        type: String,
        enum: ['Pending', 'Success', 'TLE', 'RE', 'MLE', 'WA'],
        default: 'Pending'
    }
});

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;