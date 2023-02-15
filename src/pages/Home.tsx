import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiPlayListFill, RiSettings4Line} from "react-icons/ri";
import { TbPlaylist, TbReportAnalytics } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import {GoSearch} from "react-icons/go"
import { TiNotesOutline } from "react-icons/ti";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Discover", link: "/", icon: GoSearch },
    { name: "Top Charts", link: "/", icon: FiMessageSquare },
    { name: "Top Artists", link: "/", icon: BiLibrary },  // IoStatsChartSharp
    { name: "My Playlist", link: "/", icon: TbPlaylist, margin: true },
    // { name: "File Manager", link: "/", icon: ImHeadphones },
    { name: "Cart", link: "/", icon: TiNotesOutline },
    { name: "Liked", link: "/", icon: AiOutlineHeart, margin: true },  //CgCircleci, CgSun, CgStack, CgShare, CgReadme, CgPushDown, CgPoll, CgProfile, CgPlayTrackPrevR, CgPlayTrackNextR, CgPlayListAdd, CgPlayListCheck, CgMusic, CgMusicNote, CgMoreVertical, CgMediaLive, CgLogOff, CgHeadset, CgHeart, CgAlarm, CgUserAdd, CgTikcode, CgVolume(cg)
    // VscUnmute, VscPinned, VscOrganization, VscNewFile, VscGraph (vsc)
    // TiWiFi, TiVolumeUp, TiThSmallOutline (ti)
    { name: "Settings", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT TAILWIND
      </div>
    </section>
  );
};

export default Home;
