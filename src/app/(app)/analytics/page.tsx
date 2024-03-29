import { authOptions } from "@/libs/auth";
import Chart from "@/components/chart/Chart";
import { Event } from "@/models/Event";
import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isToday } from "date-fns";

const Analytics = async () => {
  //@ts-ignore
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/");
  }
  const page = await Page.findOne({ owner: session.user?.email });
  const userAnalytics = await Event.aggregate([
    {
      $match: {
        type: "view",
        uri: page.uri,
      },
    },
    {
      $group: {
        _id: {
          $dateToString: {
            date: "$createdAt",
            format: "%Y-%m-%d",
          },
        },
        count: {
          $count: {},
        },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  const allClicks = await Event.find({ type: "click", uri: page.uri });
  return (
    <>
      <div className="md:min-w-full rounded p-6 bg-white">
        <h2 className="text-xl font-bold mb-4 mt-10 text-center">Views</h2>
        <Chart data={userAnalytics} />
      </div>
      <div className="md:min-w-full rounded p-6 bg-white mt-5">
        <h2 className="text-xl font-bold mb-8 text-center">Clicks</h2>
        {page.links.map((link: any) => (
          <div
            key={link.key}
            className="flex justify-between border border-t-2 p-2 mb-2"
          >
            <div className=" ">
              <div className="text-lg font-semibold mb-1">{link.title}</div>
              <div className="text-sm">{link.subtitle}</div>
              <Link href="#" className="text-blue-400 text-xs">
                {link.url}
              </Link>
            </div>
            <div className="flex gap-2 p-2 text-center">
              <div className="rounded px-1 border border-black">
                <span className="text-2xl bold">
                  {
                    allClicks.filter(
                      (c) => c.url === link.url && isToday(c.createdAt)
                    ).length
                  }
                </span>
                <div className="text-gray-500">clicks today</div>
              </div>
              <div className="border border-black rounded px-1">
                <span className="text-2xl bold">
                  {allClicks.filter((c) => c.url === link.url).length}
                </span>
                <div className="text-gray-500">clicks total</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Analytics;
