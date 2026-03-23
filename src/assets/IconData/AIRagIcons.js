import * as FaIcons from "react-icons/fa";
import * as TbIcons from "react-icons/tb";
import FastApiIcon from "./fastapi.svg";
import OllamaIcon from "./ollama.svg";

const AIRagIconData = [
  {
    icon: <FaIcons.FaProjectDiagram />,
    name: "RAG System Design",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaSearch />,
    name: "Semantic Search",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaDatabase />,
    name: "Vector Databases (pgvector)",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaStream />,
    name: "Embedding Pipelines",
    level: "Experienced",
  },
  {
    icon: <img src={FastApiIcon} alt="FastAPI" className="iconStyle iconStyle--fastapi" />,
    name: "FastAPI",
    level: "Experienced",
  },
  {
    icon: <img src={OllamaIcon} alt="Ollama" className="iconStyle iconStyle--ollama" />,
    name: "Local LLM Serving (Ollama)",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaServer />,
    name: "On-Prem AI Deployment",
    level: "Experienced",
  },
  {
    icon: <TbIcons.TbMessageChatbot />,
    name: "Prompt Engineering",
    level: "Intermediate",
  },
  {
    icon: <FaIcons.FaBook />,
    name: "Knowledge Base Architecture",
    level: "Experienced",
  },
  {
    icon: <FaIcons.FaUserShield />,
    name: "Secure Internal AI Workflows",
    level: "Experienced",
  },
];

export default AIRagIconData;
