import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import "./ProfileButton.scss";

const ProfileButton = () => {
  const handleClick = () => {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
  };

  return (
    <button className="profile-btn">
      <Image
        src="https://github.com/shadcn.png"
        className="avatar-img"
        width={40}
        height={40}
        alt="avatar"
        onClick={handleClick}
      ></Image>
      <div className="dropdown hidden">
        <div className="dropdown-avatar-profile">
          <div className="dropdown-item-1 font-medium">
            <Image
              src="https://github.com/shadcn.png"
              className="avatar-img"
              width={30}
              height={30}
              alt="avatar"
            ></Image>
            <div className="user-infos">
              <p>mduchauf</p>
              <p>mduchauf@student.42.fr</p>
            </div>
          </div>
        </div>
        <div className="dropdown-item font-medium">
          <FaUser className="user-icon" />
          Profile
        </div>
        <div className="dropdown-item font-medium">
          <IoMdSettings />
          Settings
        </div>
        <div className="dropdown-item font-medium">
          <IoLogOut />
          Logout
        </div>
      </div>
    </button>
  );
};

export default ProfileButton;
