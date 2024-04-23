import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BarChart3,
  BookCopy,
  ChevronDown,
  FlaskConical,
  FolderOpenDot,
  LayoutDashboard,
  List,
  Settings,
  UsersRound,
} from "lucide-react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h1 className="text-neutral-600">
          42<span>companion</span>
        </h1>
      </div>
      {/* <hr className="separator" /> */}
      <div className="items-container">
        <div className="item">
          <LayoutDashboard size={18} strokeWidth={2} className="icon" />
          <span className="text-neutral-800 font-bold">Home</span>
        </div>
        <div className="item">
          <UsersRound size={18} strokeWidth={2} className="icon" />
          <span className="text-neutral-800 font-bold">Students</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="item item-dropdown">
              <FolderOpenDot size={18} strokeWidth={2} className="icon" />
              <span className="text-neutral-800 font-bold">Projects</span>
              <ChevronDown size={12} strokeWidth={2} className="icon-down" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="ml-2 w-full"
          >
            <DropdownMenuItem className="dropdown-item">
              <List size={12} />
              <span className="text">List</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="dropdown-item">
              <BarChart3 size={12} />
              <span className="text">Graph</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="dropdown-item">
              <FlaskConical size={12} />
              <span className="text">Testers</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="item">
          <BookCopy size={18} strokeWidth={2} className="icon" />
          <span className="text-neutral-800 font-bold">Guidebooks</span>
        </div>
        <div className="item">
          <Settings size={18} strokeWidth={2} className="icon" />
          <span className="text-neutral-800 font-bold">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
