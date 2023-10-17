import React, { useState } from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";

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
      uv: 2500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 1500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 820,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 1280,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 890,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 1990,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 2500,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Sep",
      uv: 1500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Oct",
      uv: 1700,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Nov",
      uv: 1600,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Dec",
      uv: 1800,
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
      <ResponsiveContainer width="100%" height={280}>
        <BarChart barGap={10} data={data} barSize={40}>
          <XAxis
            angle={-45}
            interval={0}
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
      </ResponsiveContainer>
    </div>
  );
};

export default ChartOfBar;
