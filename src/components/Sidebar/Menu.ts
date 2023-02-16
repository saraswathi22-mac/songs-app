import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { TiNotesOutline } from "react-icons/ti";

export const menus = [
  { name: "Home", link: "/", icon: MdOutlineDashboard },
  { name: "Discover", link: "/discover", icon: GoSearch },
  { name: "Top Artists", link: "/top-artists", icon: BiLibrary },
  { name: "My Playlist", link: "/my-playlist", icon: TbPlaylist, margin: true },
  { name: "Cart", link: "/", icon: TiNotesOutline },
  { name: "Favorites", link: "/favorites", icon: AiOutlineHeart },
  { name: "Settings", link: "/settings", icon: RiSettings4Line, margin: true }
];
