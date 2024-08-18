import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

const Form = mongoose.model("Form", formSchema);
export default Form;
