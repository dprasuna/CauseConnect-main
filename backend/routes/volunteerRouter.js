import express from "express";
import {
  registerVolunteer,
  getEventVolunteers,
  updateVolunteerStatus,
} from "../controllers/volunteerController.js";

import protectedRoute from "../middleware/protected.js";
const router = express.Router({ mergeParams: true });

router.use(protectedRoute);

router.route("/").post(registerVolunteer).get(getEventVolunteers);

export default router;
