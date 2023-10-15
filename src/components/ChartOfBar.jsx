import React, { useState } from "react";
import { Bar, BarChart, Cell, XAxis } from "recharts";

const ChartOfBar = () => {
  //   const colors = [
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#7e46ff",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //     "#f4dbff97",
  //   ];
  const data = [
    {
      name: "Jan",
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 1780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 1390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sep",
      uv: 2000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Oct",
      uv: 1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Nov",
      uv: 1780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Dec",
      uv: 890,
      pv: 4800,
      amt: 2181,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  const barRadius = 10;
  return (
    <div className="chartOfBar">
      <BarChart barGap={10} width={780} height={300} data={data} barSize={50}>
        <XAxis
          dataKey="name"
          padding={{ left: 10, right: 10 }}
          tickSize="0"
          tickMargin="10"
          axisLine={false}
        />
        <Bar dataKey="uv" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              // fill={colors[index]}
              radius={[barRadius, barRadius, barRadius, barRadius]}
              fill={index === activeIndex ? "#7e46ff" : "#f4dbff97"}
              onMouseEnter={() => handleMouseEnter(entry, index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ChartOfBar;
