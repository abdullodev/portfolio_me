import Socks from "../assets/socks.jpg";
import Taxi from "../assets/taxi.jpg";
import Bestune from "../assets/bestune.jpg";
import Shopjs from "../assets/shopjs.jpg";
import Shopreact from "../assets/shopreact.jpg";

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
];
