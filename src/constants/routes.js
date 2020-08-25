export const ROUTES = {
  LANDING_PAGE: "/",
  HOME: "/home",
  HOUSEHOLD : "/household"

};

export const MAIN_MENU = [
  {
    label: "Setup Household",
    iconsrc: "home",
    path: ROUTES.HOME,
    hideMenuForMobileMvp: false,
    children: [],
    disabled: false
  },
  {
    label: "Communication",
    iconsrc: "safety",
    path: ROUTES.HOME,
    hideMenuForMobileMvp: false,
    children: [],
    disabled: false
  },
  {
    label: "My Profile",
    iconsrc: "dollar",
    path: ROUTES.HOME,
    hideMenuForMobileMvp: false,
    children: [],
    disabled: false
  }
];
