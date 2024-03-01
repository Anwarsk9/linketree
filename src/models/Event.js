import { Schema, model, models } from "mongoose";

const eventSchema = new Schema(
  {
    type: String, // click or view
    uri: String, // /anwar
    url: String, // https://xyz.com
  },
  { timestamps: true }
);

export const Event = models?.Event || model("Event", eventSchema);
