import { Event } from "@/models/Event";

export const POST = async (req:Request)=>{
    const url = new URL(req.url);
    //@ts-ignore
    const clickedLink = atob(url.searchParams.get('url'));
    await Event.create({type:"click",uri:clickedLink});
    return Response.json(true);
}