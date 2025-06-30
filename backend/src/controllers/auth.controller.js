// This is a callback to save user signup with cleark to our database,

import { User } from "../models/user.model.js";

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // check if user already exist
    const user = await User.findOne({ clerkId: id });
    if (!user) {
      // signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    // Handle duplicate key error (user already exists)
    if (error.code === 11000 && error.keyPattern && error.keyPattern.clerkId) {
      return res.status(200).json({ success: true, message: "User already exists." });
    }
    console.log("Eror in auth callback", error);
    next(error);
  }
};
