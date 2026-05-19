import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  BsGithub,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";

type IconType =
  | "github"
  | "twitter"
  | "linkedin"
  | "nextjs"
  | "typescript"
  | "react"
  | "tailwind"
  | 'arrow'
  | "python"

const icons: Record<IconType, ReactNode> = {
  github: <BsGithub className="shrink-0" />,
  twitter: <BsTwitterX className="shrink-0" />,
  linkedin: <BsLinkedin className="shrink-0" />,
  nextjs: <SiNextdotjs className="shrink-0" />,
  typescript: <SiTypescript className="shrink-0" />,
  react: <SiReact className="shrink-0" />,
  tailwind: <SiTailwindcss className="shrink-0" />,
  arrow: <ArrowUpRight className="shrink-0 text-gray-500" />,
  python: <SiPython/>
};

export function InlineCode({
  children,
  className,
  link,
  icon,
}: {
  children: ReactNode;
  className?: string;
  link?: string;
  icon?: IconType;
}) {
  const styles = cn(
    "inline-flex items-center gap-2 rounded-none border border-[#d4d3ce]/20 bg-white/[0.04] px-1.5 py-0.5 font-mono text-sm text-[#f0efea] align-middle",
    icon === "arrow" && "flex-row-reverse",
    className
  );

  const content = (
    <>
      {icon && (
        <span className="flex mb-1 items-center justify-center text-[0.9em] leading-none">
          {icons[icon]}
        </span>
      )}

      <span>{children}</span>
    </>
  );

  return link ? (
    <Link href={link} className={styles}>
      {content}
    </Link>
  ) : (
    <span className={styles}>
      {content}
    </span>
  );
}