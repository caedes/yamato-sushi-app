import BasketScreen from "../BasketScreen";
import HomeScreen from "../HomeScreen";
import SettingsScreen from "../SettingsScreen";

export default {
  home: {
    path: "/",
    title: "Homepage",
    component: HomeScreen,
  },
  basket: {
    path: "/basket",
    title: "Basket",
    component: BasketScreen,
  },
  settings: {
    path: "/settings",
    title: "Settings",
    component: SettingsScreen,
  },
};
