import Volunteer from "../models/volunteerModel.js";
import Event from "../models/eventModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

export const registerVolunteer = catchAsync(async (req, res, next) => {
  const eventId = req.params.id;
  const userId = req.user._id;

  const event = await Event.findById(eventId);
  if (!event) {
    return next(new AppError("Event not found", 404));
  }

  const existingApplication = await Volunteer.findOne({
    eventId,
    userId,
  });

  if (existingApplication) {
    return next(
      new AppError("You have already volunteered for this event", 400)
    );
  }

  const volunteer = await Volunteer.create({
    eventId,
    userId,
    ...req.body,
  });

  await Event.findByIdAndUpdate(eventId, {
    $push: { registeredVolunteers: userId },
  });

  res.status(201).json({
    status: "success",
    data: volunteer,
  });
});

export const getEventVolunteers = catchAsync(async (req, res, next) => {
  const eventId = req.params.id;

  const volunteers = await Volunteer.find({ eventId })
    .populate("userId", "name email")
    .select("-__v");

  res.status(200).json({
    status: "success",
    results: volunteers.length,
    data: volunteers,
  });
});

export const updateVolunteerStatus = catchAsync(async (req, res, next) => {
  const { id, volunteerId } = req.params;
  const { status } = req.body;

  const volunteer = await Volunteer.findOneAndUpdate(
    { _id: volunteerId, eventId: id },
    { status },
    { new: true }
  );

  if (!volunteer) {
    return next(new AppError("Volunteer application not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: volunteer,
  });
});
