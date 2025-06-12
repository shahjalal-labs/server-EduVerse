import { generateToken } from "./jwt";

export const loginUser = async (req, res) => {
  // after validating user credentials
  const userPayload = { email: req.query.email };
  const token = generateToken(userPayload);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only over HTTPS in prod
    // sameSite: "strict",
    // maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.status(200).json({ message: "token issued successfully" });
};
