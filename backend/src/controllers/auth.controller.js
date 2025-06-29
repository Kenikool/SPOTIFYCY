// This is a callback to save user signup with cleark to our database,

import { User } from "../models/user.model";

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;

    // check if user already exist
    const user = await User.findOne({ clearkId: id });
    if (!user) {
      // signup
      await User.create({
        clearkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log("Error in auth callback", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
