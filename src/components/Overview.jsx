import React from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import ChartOfBar from "./ChartOfBar";

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-heading">
        <div className="first">
          <h3>Overview</h3>
          <p>Monthly Earning</p>
        </div>

        <div className="second">
          <span>Quarterly</span>
          <UilAngleDown />
        </div>
      </div>
      <ChartOfBar />
    </div>
  );
};

export default Overview;
