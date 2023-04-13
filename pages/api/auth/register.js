import User from "@/models/User";
import connectToDatabase from "@/utils/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }
  try {
    await connectToDatabase();
    const isUserExists = await User.findOne({ email: req.body.email });
    if (isUserExists) {
      return res.status(400).send("User already exists with this email.");
    }
    // Process a POST request
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hasPassword,
      phone: req.body.phone,
      gender: req.body.gender,
      image: "/files/userImg.jpg",
    });
    user = await user.save();
    res.status(200).send("ok");
  } catch (error) {
    res.status(500).send("Server Error");
  }
}
