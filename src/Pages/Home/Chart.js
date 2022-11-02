import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Member A",
      member_id: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Member B",
      member_id: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Member C",
      member_id: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Member D",
      member_id: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Member E",
      member_id: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Member F",
      member_id: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Member G",
      member_id: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <div className="w-[50%] mx-auto my-10">
        <LineChart width={800} height={400} data={data}>
          <Line dataKey="member_id"></Line>
          <Line dataKey="pv"></Line>
          <XAxis dataKey="name"></XAxis>
          <Tooltip></Tooltip>
          <YAxis></YAxis>
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
