import Socks from "../assets/socks.jpg";
import Taxi from "../assets/taxi.jpg";
import Bestune from "../assets/bestune.jpg";
import Shopjs from "../assets/shopjs.jpg";
import Shopreact from "../assets/shopreact.jpg";
import FilterApp from "../assets/photo_2023-09-23_15-42-31.jpg";
import DashboardApp from "../assets/photo_2023-09-23_15-42-11.jpg";
import DCLICKS from "../assets/photo_2023-09-23_16-07-37.jpg";

interface IProjects {
  imgUrl: string;
  description: string;
  demo?: string;
}

export const PROJECTS: IProjects[] = [
  {
    imgUrl: Taxi,
    description: "Taxi project",
  },
  {
    imgUrl: Socks,
    description: "Yuksalish socks",
    demo: "https://yuksalishsocks.uz/",
  },
  {
    imgUrl: Bestune,
    description: "Bestune admin panel project",
  },
  {
    imgUrl: Shopreact,
    description: "E-commerce website",
    demo: "https://ea-store.netlify.app/",
  },
  {
    imgUrl: Shopjs,
    description: "Store maked Javascript",
    demo: "https://shoppingbyme.netlify.app/",
  },
  {
    imgUrl: DCLICKS,
    description: "Admin panel D_CLICKS",
    demo: "https://d-clinics.netlify.app/",
  },
  {
    imgUrl: DashboardApp,
    description: "Dashboard app",
    demo: "https://dashboard-app-dev.netlify.app/",
  },
  {
    imgUrl: FilterApp,
    description: "Filter app",
    demo: "https://filter-email.netlify.app/",
  },
];
