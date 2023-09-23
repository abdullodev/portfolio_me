import Boot from "../assets/bootstrap.avif";
import Css from "../assets/cssLogo.png";
import Html from "../assets/htmlLogo.png";
import Js from "../assets/javascript.png";
import MUILOGO from "../assets/mui.png";
import ReactQuery from "../assets/querys.jpg";
import ReactLogo from "../assets/react.jpg";
import SQLImg from "../assets/sql.png";
import Typescript from "../assets/typescript.webp";
import AntD from "../assets/ant-design.jpg";

interface ISkills {
  title: string;
  img: any;
}
export const SKILLS: ISkills[] = [
  {
    title: "HTML",
    img: Html,
  },
  {
    title: "CSS",
    img: Css,
  },
  {
    title: "Javascript",
    img: Js,
  },
  {
    title: "React",
    img: ReactLogo,
  },
  {
    title: "Typescript",
    img: Typescript,
  },
  {
    title: "React Query",
    img: ReactQuery,
  },
  {
    title: "SQL",
    img: SQLImg,
  },
  {
    title: "Material-UI",
    img: MUILOGO,
  },
  {
    title: "Bootstrap",
    img: Boot,
  },
  {
    title: "Ant Design",
    img: AntD,
  },
];
