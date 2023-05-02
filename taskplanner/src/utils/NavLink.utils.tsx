import Discover from "../pages/Discover/Discover";
import DiscoverIcon from "../assets/icons/ico-search.svg";
import TVShowsIcon from "../assets/icons/ico-tv.svg";
import MyListIcon from "../assets/icons/ico-list.svg";
import WatchLaterIcon from "../assets/icons/ico-later.svg";
import RecommendedIcon from "../assets/icons/ico-recommended.svg";
import SettingsIcon from "../assets/icons/ico-settings.svg";
import LogoutIcon from "../assets/icons/ico-logout.svg";

export enum NavLinkType {
  Discover,
  Today,
  Tomorrow,
  Add,
  Favorite,
  Settings,
  Logout,
}

export interface NavLink {
  linkType: NavLinkType;
  isSelected?: boolean;
  isLastLinkInSection?: boolean;
  targetPage?: React.ReactElement;
}

export const getLinkName = (linkType: NavLinkType): string => {
  switch (linkType) {
    case NavLinkType.Discover:
      return "My Tasks";
    case NavLinkType.Today:
      return "Today";
    case NavLinkType.Tomorrow:
      return "Tomorrow";
    case NavLinkType.Add:
      return "Add Task";
    case NavLinkType.Favorite:
      return "Favorites";
    case NavLinkType.Settings:
      return "Settings";
    case NavLinkType.Logout:
      return "Logout";
    default:
      return "";
  }
};

export const getLinkIcon = (linkType: NavLinkType): string => {
  switch (linkType) {
    case NavLinkType.Discover:
      return DiscoverIcon;
    case NavLinkType.Today:
      return TVShowsIcon;
    case NavLinkType.Tomorrow:
      return MyListIcon;
    case NavLinkType.Add:
      return WatchLaterIcon;
    case NavLinkType.Favorite:
      return RecommendedIcon;
    case NavLinkType.Settings:
      return SettingsIcon;
    case NavLinkType.Logout:
      return LogoutIcon;
    default:
      return "";
  }
};

export const linkData: NavLink[] = [
  {
    linkType: NavLinkType.Discover,
    isSelected: true,
    targetPage: <Discover />,
  },
  {
    linkType: NavLinkType.Today,
  },
  {
    linkType: NavLinkType.Tomorrow,
    isLastLinkInSection: true,
  },
  {
    linkType: NavLinkType.Add,
  },
  {
    linkType: NavLinkType.Favorite,
    isLastLinkInSection: true,
  },
  {
    linkType: NavLinkType.Settings,
  },
  {
    linkType: NavLinkType.Logout,
    isLastLinkInSection: true,
  },
];
