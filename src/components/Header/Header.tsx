"use client";

import ProfileButton from "../ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <SearchBar />
        <div className="profile-container">
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
