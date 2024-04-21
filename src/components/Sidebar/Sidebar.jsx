import { BookCopy, GanttChart, Home, Settings, UsersRound } from "lucide-react";
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
          <Home size={18} strokeWidth={2} />
          Home
        </div>
        <div className="item">
          <UsersRound size={18} strokeWidth={2} />
          Students
        </div>
        <div className="item">
          <GanttChart size={18} strokeWidth={2} />
          Projects
        </div>
        <div className="item">
          <BookCopy size={18} strokeWidth={2} />
          Guides
        </div>
        <div className="item">
          <Settings size={18} strokeWidth={2} />
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
