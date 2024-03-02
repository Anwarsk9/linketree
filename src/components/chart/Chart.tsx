"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ data }: { data: object[] }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={220}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 5 }}
        >
          <CartesianGrid horizontal={false} strokeWidth="5" stroke="#f2f2f2" />
          <XAxis
            dataKey="_id"
            axisLine={false}
            tickLine={false}
            tickMargin={15}
            textLength={70}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#09f" strokeWidth={4} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
