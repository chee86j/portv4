import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import PytestIcon from "./pytest.svg";

const BackEndIconData = [
  {
    icon: <SiIcons.SiTypescript />,
    name: "TypeScript",
    level: "Intermediate",
  },
  {
    icon: <SiIcons.SiPython />,
    name: "Python",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaNodeJs />,
    name: "Node.js",
    level: "Proficient",
  },
  {
    icon: <FaIcons.FaServer />,
    name: "Express.js",
    level: "Intermediate",
  },
  {
    icon: <TbIcons.TbApi />,
    name: "RESTful API",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiPostgresql />,
    name: "PostgreSQL",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiSequelize />,
    name: "Sequelize",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiFlask />,
    name: "Flask",
    level: "Experienced",
  },
  {
    icon: <SiIcons.SiSqlite />,
    name: "SQLite",
    level: "Experienced",
  },
  {
    icon: <SiIcons.SiPrisma />,
    name: "Prisma",
    level: "Experienced",
  },

  {
    icon: <SiIcons.SiCheckmarx />,
    name: "OOP",
    level: "Proficient",
  },
  {
    icon: <FaIcons.FaDatabase />,
    name: "Database Management",
    level: "Proficient",
  },
  {
    icon: <SiIcons.SiMocha />,
    name: "Mocha",
    level: "Experienced",
  },
  {
    icon: <SiIcons.SiJasmine />,
    name: "Jasmine",
    level: "Experienced",
  },
  {
    icon: <img src={PytestIcon} alt="Pytest" className="iconStyle" />,
    name: "Pytest",
    level: "Experienced",
  },
];

export default BackEndIconData;
