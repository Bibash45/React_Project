import express from "express";
import Form from "../models/formSchema.js";

const router = express.Router();

router.post("/form", async (req, res) => {
  const { fname, lname, email, phone } = req.body;
  try {
    // Create a new user
    const form = new Form({ fname, lname, email, phone });

    // Save the user to the database
    await form.save();

    res
      .status(201)
      .json({
        _id: form._id,
        fname: form.fname,
        lname: form.lname,
        email: form.email,
        phone: form.phone,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
