import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineDown,
  AiOutlineRight,
  AiOutlineMenu,
} from "react-icons/ai";
import { LiaProductHunt } from "react-icons/lia";
import { RxAvatar } from "react-icons/rx";
import { GiReceiveMoney } from "react-icons/gi";
import { PiHandsPrayingDuotone } from "react-icons/pi";
import { BiHelpCircle } from "react-icons/bi";
import { Avatar, WrapItem } from "@chakra-ui/react";

const Header = () => {
  return (
    <nav>
      <NavContant />
    </nav>
  );
};

const NavContant = () => {
  const headingItems = {
    forDashboard: (
      <>
        <AiOutlineDashboard /> Dashborad
      </>
    ),
    forProduct: (
      <>
        <LiaProductHunt /> Product
      </>
    ),
    forCustomers: (
      <>
        <RxAvatar /> Customers
      </>
    ),
    forIncome: (
      <>
        <GiReceiveMoney /> Income
      </>
    ),
    forPromote: (
      <>
        <PiHandsPrayingDuotone /> Promote
      </>
    ),
    forHelp: (
      <>
        <BiHelpCircle /> Help
      </>
    ),
  };

  const [currentHeader, setCurrentHeader] = useState(
    <>
      <AiOutlineDashboard size={20} /> Dashborad
    </>
  );
  return (
    <div className="header">
      <h1>{currentHeader}</h1>
      <div className="forlinks">
        <Link
          to={"/"}
          onClick={() => setCurrentHeader(headingItems.forDashboard)}
        >
          <AiOutlineDashboard /> Dashboard <AiOutlineRight className="right" />
        </Link>
        <Link
          to={"/product"}
          onClick={(e) => setCurrentHeader(headingItems.forProduct)}
        >
          <LiaProductHunt /> Product <AiOutlineRight className="right" />
        </Link>
        <Link
          to={"/customers"}
          onClick={(e) => setCurrentHeader(headingItems.forCustomers)}
        >
          <RxAvatar /> Customers <AiOutlineRight className="right" />
        </Link>
        <Link
          to={"/income"}
          onClick={(e) => setCurrentHeader(headingItems.forIncome)}
        >
          <GiReceiveMoney /> Income <AiOutlineRight className="right" />
        </Link>
        <Link
          to={"/promote"}
          onClick={(e) => setCurrentHeader(headingItems.forPromote)}
        >
          <PiHandsPrayingDuotone /> Promote <AiOutlineRight className="right" />
        </Link>
        <Link
          to={"/help"}
          onClick={(e) => setCurrentHeader(headingItems.forHelp)}
        >
          <BiHelpCircle /> Help <AiOutlineRight className="right" />
        </Link>
      </div>
      <div className="avatar">
        <WrapItem>
          <Avatar
            h={40}
            w={40}
            borderRadius={"50%"}
            src="https://bit.ly/dan-abramov"
          />
        </WrapItem>

        <div>
          <h3>Evano</h3>
          <p>Project Manager</p>
        </div>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default Header;
