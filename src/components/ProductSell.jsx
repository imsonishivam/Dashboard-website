import React from "react";
import { BiSearch } from "react-icons/bi";
import { UilAngleDown } from "@iconscout/react-unicons";

const ProductSell = () => {
  const item = [
    {
      src: "https://media.licdn.com/dms/image/C4E0BAQHLSW6Ad0O6vA/company-logo_200_200/0/1622066511013?e=2147483647&v=beta&t=0Gy0LGEr9kOBJhpeDj0vbS96S0gUxcU4Mzl1bI7si2U",
      title: "Fitpeo",
      para: "Fitpeo Tech is an unlisted private company incorporated on 20 March, 2023.",
      stock: "32 in stock",
      price: "$3012.50",
      sales: "20",
    },
    {
      src: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Information Tech",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      stock: "52 in stock",
      price: "$301.50",
      sales: "10",
    },
    {
      src: "https://images.pexels.com/photos/937980/pexels-photo-937980.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Fogg Info",
      para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..",
      stock: "20 in stock",
      price: "$30122.50",
      sales: "5",
    },
  ];
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
      <div className="product-subheading">
        <div className="product-subheading-left">
          <p>Product Name</p>
        </div>
        <div className="product-subheading-right">
          <p>Stock</p>
          <p>Price</p>
          <p>Sales</p>
        </div>
      </div>

      {item.map((item, index) => (
        <ActualItem
          key={index}
          img={item.src}
          title={item.title}
          para={item.para}
          stock={item.stock}
          price={item.price}
          sales={item.sales}
        />
      ))}
    </div>
  );
};

const ActualItem = ({ img, title, para, stock, price, sales }) => {
  return (
    <div className="product-actual-item">
      <div className="img-title">
        <img src={img} alt="img" />
        <div className="title">
          <h4>{title}</h4>
          <p>{para}</p>
        </div>
      </div>
      <div className="product-actual-right">
        <p>{stock}</p>
        <p>{price}</p>
        <p>{sales}</p>
      </div>
    </div>
  );
};

export default ProductSell;
