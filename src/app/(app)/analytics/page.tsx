import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Chart from "@/components/chart/Chart";
import { Event } from "@/models/Event";
import { Page } from "@/models/Page";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Analytics = async () => {
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
  return (
    <div className="w-full h-full p-6 bg-white">
      <Chart data={userAnalytics} />
    </div>
  );
};

export default Analytics;
