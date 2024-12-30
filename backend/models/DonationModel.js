import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
    eventID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    donorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now 
    },
})

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;