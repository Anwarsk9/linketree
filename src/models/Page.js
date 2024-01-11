// "use server";
import mongoose, { Schema, model, models } from "mongoose";

const main = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};
main()
  .then(() => console.log("DB Connected Successfully."))
  .catch((err) => {
    console.log("Some Error in DB" + err);
  });

const PageSchema = new Schema(
  {
    uri: {
      type: String,
      unique: true,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

export const Page = models?.Page || model("Page", PageSchema);
