import React from "react";
import { BiSearch } from "react-icons/bi";
import CardOfOverview from "./CardOfOverview";
import {
  UilUsdCircle,
  UilReceipt,
  UilBalanceScale,
  UilShoppingBag,
} from "@iconscout/react-unicons";
import Overview from "./Overview";
import CardOfCustomers from "./CardOfCustomers";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <h2>Hello Shahrukh 👋🏼</h2>
        <div className="searchbox">
          <BiSearch />
          <input type="text" name="" id="searchbox" placeholder="Search" />
        </div>
      </header>
      {/* cards */}
      <div className="cartItems">
        <div className="cartItem">
          <UilUsdCircle size="95" color="#008000" />
          <CardOfOverview
            title={"Earning"}
            amount={"$198k"}
            isUp={true}
            percent={"37.8%"}
            time={"this month"}
          />
        </div>
        <div className="cartItem">
          <UilReceipt size="95" color="#7F51FD" className="second" />
          <CardOfOverview
            title={"Order"}
            amount={"$2.4k"}
            isUp={false}
            percent={"2%"}
            time={"this month"}
          />
        </div>
        <div className="cartItem">
          <UilBalanceScale size="95" color="#005FC3" className="third" />
          <CardOfOverview
            title={"Balance"}
            amount={"$2.4k"}
            isUp={false}
            percent={"2%"}
            time={"this month"}
          />
        </div>
        <div className="cartItem">
          <UilShoppingBag size="95" color="#EF072C" className="forth" />
          <CardOfOverview
            title={"Tatal Sales"}
            amount={"$89k"}
            isUp={true}
            percent={"11%"}
            time={"this week"}
          />
        </div>
      </div>

      <div className="overviewAndCustomers">
        <Overview />
        <CardOfCustomers />
      </div>
    </div>
  );
};

export default Dashboard;
