import mongoose from "mongoose";

const RespondentSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Respondents", RespondentSchema);
