import { Event } from "@/models/Event";

export const POST = async (req: Request) => {
  const pageOwner = req.headers.get("ping-from")?.split("/")[3];
  const url = new URL(req.url);
  //@ts-ignore
  const clickedLink = atob(url.searchParams.get("url"));
  await Event.create({ type: "click", uri: pageOwner, url: clickedLink });
  return Response.json(true);
};
