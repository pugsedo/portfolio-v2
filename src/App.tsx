import Profile from "./components/profile";
import SideBar from "./components/sidebar";
import SideBarMini from "./components/sidebar_mini";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-amber-50 min-h-screen w-full p-4 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col md:flex-row w-full sm:w-2/3 max-w-3xl gap-4">
        <div className="hidden md:block">
          <SideBar />
        </div>
        <div className="flex flex-col items-start justify-start">
          <Profile />
          <div className="block md:hidden">
            <SideBarMini />
          </div>
          <div className="w-full overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}