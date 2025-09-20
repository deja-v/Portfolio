import React from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiVite,
  SiGooglegemini,
  SiFirebase,
  SiNpm,
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiSass,
  SiExpress,
  SiGit,
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiRedux,
  SiGithub,
} from "react-icons/si";
import type { IconType } from 'react-icons';
import "./styles.css";

export type Tech = {
  id: string; // unique id / slug
  name: string; // display name
  color?: string; // preferred icon color (hex or css color)
  Icon?: IconType; // react-icon component (now optional)
};

export const techs: Tech[] = [
  { id: "react", name: "React", color: "#61dafb", Icon: SiReact },
  {
    id: "typescript",
    name: "TypeScript",
    color: "#3178C6",
    Icon: SiTypescript,
  },
  {
    id: "javascript",
    name: "JavaScript",
    color: "#f7df1e",
    Icon: SiJavascript,
  },
  { id: "html5", name: "HTML5", color: "#E34F26", Icon: SiHtml5 },
  { id: "html", name: "HTML", color: "#E34F26", Icon: SiHtml5 }, // Added HTML alias
  { id: "css3", name: "CSS3", color: "#1572B6", Icon: SiCss3 },
  {id: "expressjs", name: "ExpressJs", color: "#000000", Icon: SiExpress}, // Added ExpressJs with no icon
  { id: "css", name: "CSS", color: "#1572B6", Icon: SiCss3 }, // Added CSS alias
  { id: "scss", name: "SCSS", color: "#CC6699", Icon: SiSass },
  {id: "git", name: "Git", color: "#F05032", Icon: SiGit}, 
  { id: "materialui", name: "Material UI", color: "#0081CB", Icon: SiMui },  
  { id: "googlegemini", name: "Google Gemini API", color: "#4285F4", Icon: SiGooglegemini },
  {id: "npm", name: "npm", color: "#CB3837", Icon: SiNpm},
  {
    id: "tailwind",
    name: "Tailwind CSS",
    color: "#38B2AC",
    Icon: SiTailwindcss,
  },
  { id: "next", name: "Next.js", color: "#000000", Icon: SiNextdotjs },
  { id: "vite", name: "Vite", color: "#646CFF", Icon: SiVite },
  { id: "node", name: "Node.js", color: "#339933", Icon: SiNodedotjs },
  { id: "mongodb", name: "MongoDB", color: "#47A248", Icon: SiMongodb },
  { id: "firebase", name: "Firebase", color: "#FFCA28", Icon: SiFirebase },
  { id: "redux", name: "Redux", color: "#764ABC", Icon: SiRedux },
  { id: "github", name: "GitHub", color: "#181717", Icon: SiGithub },
  { id: "python", name: "Python", color: "#3776AB", Icon: SiPython },
  { id: "fastapi", name: "FastAPI", color: "#009688", Icon: SiFastapi },
  { id: "postgresql", name: "PostgreSQL", color: "#336791", Icon: SiPostgresql },
  { id: "sql", name: "SQL", color: "#336791", Icon: SiPostgresql }, 
];

export interface BadgeProps {
  techName?: string; // Just the tech name as string
  tech?: Tech; // Or full tech object
  size?: "sm" | "md" | "lg" | number; // predefined sizes or a number in px
  showName?: boolean; // show the label next to icon
  className?: string; // extra classes
  variant?: "solid" | "outline" | "ghost";
}

export const Badge: React.FC<BadgeProps> = ({
  techName,
  tech: providedTech,
  size = "md",
  showName = true,
  className = "",
  variant = "solid",
}) => {
  // If techName is provided, try to find matching tech
  const tech = providedTech || (techName ? techs.find(t => 
    t.name.toLowerCase() === techName.toLowerCase() || 
    t.id.toLowerCase() === techName.toLowerCase()
  ) : null);

  // Get the display name
  const displayName = tech?.name || techName || 'Unknown';
  
  // Check if we have an icon
  const Icon = tech?.Icon;
  const hasIcon = !!Icon;

  const sizePx =
    typeof size === "number"
      ? size
      : size === "sm"
      ? 16
      : size === "lg"
      ? 28
      : 20;
  const sizeClass =
    typeof size === "number"
      ? ""
      : size === "sm"
      ? "badge--sm"
      : size === "lg"
      ? "badge--lg"
      : "badge--md";

  const variantClass =
    variant === "solid"
      ? "badge--solid"
      : variant === "outline"
      ? "badge--outline"
      : "badge--ghost";

  // If no icon is available, render only text
  if (!hasIcon) {
    return (
      <span
        role="img"
        aria-label={displayName}
        title={displayName}
        className={`badge badge--text-only ${sizeClass} ${variantClass} ${className}`}
      >
        <span className="badge__name">{displayName}</span>
      </span>
    );
  }

  // Render with icon
  return (
    <span
      role="img"
      aria-label={displayName}
      title={displayName}
      className={`badge ${sizeClass} ${variantClass} ${className}`}
    >
      <span className="badge__icon" style={{ width: sizePx, height: sizePx }}>
        <Icon
          style={{ width: "100%", height: "100%", color: tech?.color }}
          aria-hidden="true"
        />
      </span>
      {showName && <span className="badge__name">{displayName}</span>}
    </span>
  );
};