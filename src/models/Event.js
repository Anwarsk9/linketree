import { Schema, model, models } from "mongoose";

const eventSchema = new Schema(
  {
    type: String, // click or view
    uri: String, // /anwar | https://
  },
  { timestamps: true }
);

export const Event = models?.Event || model("Event", eventSchema);
