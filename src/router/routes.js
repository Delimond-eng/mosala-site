import HomePage from "@/pages/home-page";
import SubscriptionPage from "@/pages/subscribe-page";
const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/subscription",
    component: SubscriptionPage,
    name: "subscription",
  },
];
export default routes;
