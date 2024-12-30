import Event from "../models/eventModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import User from "../models/userModel.js";

export const createEvent = catchAsync(async (req, res, next) => {
  try {
    // Debug log
    console.log('Received request body:', req.body);
    console.log('Received files:', req.file);

    // Validate required fields
    const requiredFields = ['title', 'description', 'date', 'location', 'category', 'requiredVolunteers', 'impact'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        console.log(`Missing field: ${field}`); // Debug log
        return next(new AppError(`Please provide ${field}`, 400));
      }
    }

    // Create event data object
    const eventData = {
      ...req.body,
      organizer: req.user.id,
      image: req.file ? req.file.path : undefined
    };

    console.log('Event data to be saved:', eventData); // Debug log

    const event = await Event.create(eventData);

    // Update user's createdEvents array
    await User.findByIdAndUpdate(
      req.user.id,
      { $push: { createdEvents: event._id } },
      { new: true }
    );

    const populatedEvent = await Event.findById(event._id).populate(
      "organizer",
      "username email"
    );

    await User.findByIdAndUpdate(req.user.id, {
      $push: { eventsOrganized: event._id },
    });

    res.status(201).json({
      status: "success",
      data: {
        event: populatedEvent,
      },
    });
  } catch (error) {
    console.error('Error in createEvent:', error);
    return next(new AppError(error.message, 500));
  }
});

export const getAllEvents = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);

  let query = Event.find(queryObj);

  if (req.query.sort) {
    query = query.sort(req.query.sort);
  } else {
    query = query.sort("-date");
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 100;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  const events = await query.populate("organizer", "name email");

  res.status(200).json({
    status: "success",
    results: events.length,
    data: events,
  });
});

export const getEventById = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.id)
    .populate("organizer", "username email")
    .populate("registeredVolunteers", "username email");

  if (!event) {
    return next(new AppError("No event found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: event,
  });
});

export const updateEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    return next(new AppError("No event found with that ID", 404));
  }

  if (event.organizer.toString() !== req.user.id) {
    return next(
      new AppError("You are not authorized to update this event", 403)
    );
  }
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: updatedEvent,
  });
});

export const deleteEvent = catchAsync(async (req, res, next) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    return next(new AppError("No event found with that ID", 404));
  }

  if (event.organizer.toString() !== req.user.id) {
    return next(
      new AppError("You are not authorized to delete this event", 403)
    );
  }
  await Event.findByIdAndDelete(req.params.id);

  await User.findByIdAndUpdate(req.user.id, {
    $pull: { eventsOrganized: req.params.id },
  });

  res.status(204).json({
    status: "success",
  });
});

// Register for Event
// export const registerForEvent = catchAsync(async (req, res, next) => {
//   const event = await Event.findById(req.params.id);

//   if (!event) {
//     return next(new AppError("No event found with that ID", 404));
//   }

//   if (event.registeredVolunteers.length >= event.requiredVolunteers) {
//     return next(
//       new AppError("Event is already full, cannot register for it", 400)
//     );
//   }

//   if (event.registeredVolunteers.includes(req.user.id)) {
//     return next(new AppError("You are already registered for this event", 400));
//   }
//   event.registeredVolunteers.push(req.user.id);
//   await event.save();
//   // Add event to user's participated events
//   await User.findByIdAndUpdate(req.user.id, {
//     $push: { eventsParticipated: event._id },
//   });

//   res.status(200).json({
//     status: "success",
//     data: {
//       event,
//     },
//   });
// });

// for organizer dashboard ...

export const getEventsByOrganizer = catchAsync(async (req, res, next) => {
  const events = await Event.find({ organizer: req.user.id })
    .sort("-date")
    .populate("registeredVolunteers", "username email");

  res.status(200).json({
    status: "success",
    results: events.length,
    data: events,
  });
});

// All events the user has volunteered or registered for
export const getEventsByVolunteer = catchAsync(async (req, res, next) => {
  const events = await Event.find({
    registeredVolunteers: req.user.id,
  }).sort("-date");
  
  res.status(200).json({
    status: "success",
    results: events.length,
    data: events,
  });
});

