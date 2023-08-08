import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

interface ISocials {
  icon: any;
  link: string;
}

export const SOCIALS: ISocials[] = [
  {
    icon: <GitHubIcon />,
    link: "https://github.com/abdullodev",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/abdullo_me/",
  },
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/abdullo.ergashxojayev.3?mibextid=2JQ9oc",
  },
  {
    icon: <TelegramIcon />,
    link: "https://t.me/abdullo_me",
  },
];
