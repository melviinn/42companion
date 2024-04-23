"use client";

import ProfileButton from "../ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="w-full bg-white text-gray-900 px-8 py-4">
      <div className="w-full flex justify-between items-center">
        <SearchBar />
        <div className="flex items-center">
          <ProfileButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
