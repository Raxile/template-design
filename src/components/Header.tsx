import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Logo.png";
import walletIcons from "@/assets/images/icons/walletIcon.png";
import user from "@/assets/images/user1.png";

const Header = () => {
  return (
    <header className="header-container d-flex justify-content-between align-items-center w-100">
      <div className="header-logo-container">
        <Image src={Logo} alt="auctionX" className="w-100 h-100" />
      </div>
      <div className="header-navbar-container d-flex justify-content-center align-items-center gap-2">
        <button className="custom-btn-primary custom-btn">
          Wallet Connect
          <Image src={walletIcons} alt="auctionX" className="icon" />
        </button>
        <div className="profile-image-container">
          <Image src={user} alt="auctionX" className="w-100 h-100" />
        </div>
      </div>
    </header>
  );
};

export default Header;
