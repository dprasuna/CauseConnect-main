import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event must have a title"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Event must have a description"],
    },
    date: {
      type: Date,
      required: [true, "Event must have a date"],
    },
    location: {
      type: String,
      required: [true, "Event must have a location"],
    },
    image: {
      type: String,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      enum: [
        "cleaning",
        "education",
        "healthcare",
        "environment",
        "social",
        "other",
      ],
      required: true,
    },
    requiredVolunteers: {
      type: Number,
      required: true,
    },
    registeredVolunteers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Event must have a registered volunteer"],
      },
    ],
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "cancelled"],
      default: "upcoming",
    },
    impact: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
