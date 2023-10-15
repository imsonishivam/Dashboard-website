import React, { useState } from "react";
import { Cell, Pie, PieChart } from "recharts";

const CardOfCustomers = () => {
  const data = [
    { name: "New Customers", value: 35 },
    { name: "Old Customers", value: 50 },
    { name: "Visiting Daily", value: 15 },
  ];
  const COLORS = ["#f4dbff97", "#ba88fb", "#ff4343"];
  const startAngle = 90;
  const endAngle = 450;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (data, index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  return (
    <div className="cardOfCustomers">
      <h3>Customers</h3>
      <p>Customers that buy products</p>
      <div className="pip">
        <PieChart width={250} height={300}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={50}
            outerRadius={90}
            fill="#8884d8"
            startAngle={startAngle}
            endAngle={endAngle}
            // paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                onMouseEnter={() => handleMouseEnter(entry, index)}
                onMouseLeave={handleMouseLeave}
                // style={{
                //   transform: activeIndex === index ? "scale(1.1)" : "scale(1)",
                // }}
              />
            ))}
          </Pie>
          <text
            x={125}
            y={200}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="25"
            fontWeight={700}
          >
            {activeIndex !== null ? data[activeIndex].value + "%" : "35%"}
          </text>
          <text
            x={125}
            y={230}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="11"
          >
            {activeIndex !== null ? data[activeIndex].name : "New Customers"}
          </text>
        </PieChart>
      </div>
    </div>
  );
};

export default CardOfCustomers;
