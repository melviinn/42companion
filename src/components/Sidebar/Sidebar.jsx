import { FaCog, FaHome } from "react-icons/fa";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h1>
          42<span>companion</span>
        </h1>
      </div>
      <div className="items-container">
        <div className="item">
          <FaHome className="icon" />
        </div>
        <div className="item">
          <FaCog className="icon" />
        </div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Sidebar;
