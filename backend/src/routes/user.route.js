import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers, getMessages } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";
const router = Router();

router.get("/", protectRoute, getAllUsers);
router.get("/messages/:userId", protectRoute, getMessages);
router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find({});
  } catch (error) {}
});
export default router;
