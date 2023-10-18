import React from "react";
import { BiSearch } from "react-icons/bi";
import { UilAngleDown } from "@iconscout/react-unicons";
import TableProduct from "./TableProduct";

const ProductSell = () => {
  return (
    <div className="product-sell">
      <div className="product-heading">
        <h2>Product Sell</h2>
        <div className="right-heading">
          <div className="searchbox">
            <BiSearch />
            <input type="text" name="" id="searchbox" placeholder="Search" />
          </div>
          <div className="second">
            <span>Last 30 days</span>
            <UilAngleDown />
          </div>
        </div>
      </div>

      <TableProduct />
    </div>
  );
};

export default ProductSell;
