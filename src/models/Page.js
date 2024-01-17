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
      min: 3,
    },
    owner: {
      type: String,
      required: true,
    },
    displayname: {
      type: String,
      default: "",
    },
    location: { type: String, default: "" },
    bio: { type: String, default: "" },
    bgType: { type: String, default: "color" },
    bgColor: { type: String, default: "#000" },

    bg_image: {
      url: { type: String, default: "" },
      public_id: { type: String, default: "" },
    },
    profile_image: {
      url: { type: String, default: "" },
      public_id: { type: String, default: "" },
    },
    socialMedia_Links:{type:Object,default:{}}
  },
  { timestamps: true }
);

export const Page = models?.Page || model("Page", PageSchema);
