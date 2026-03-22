"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import type { ProjectSection } from "@/data/projects";

export function SideNav({
  sections,
  color,
}: {
  sections: ProjectSection[];
  color: string;
}) {
  const sectionIds = sections.map((s) => s.id);
  const activeId = useSectionInView(sectionIds);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className="group flex items-center gap-3"
          title={section.label}
        >
          <span
            className="text-[11px] opacity-0 transition-all duration-200 group-hover:opacity-100 whitespace-nowrap"
            style={{ color: activeId === section.id ? color : "rgba(255,255,255,0.5)" }}
          >
            {section.label}
          </span>
          <span
            className="block h-2 w-2 rounded-full shrink-0 transition-all duration-200"
            style={{
              background:
                activeId === section.id ? color : "rgba(255,255,255,0.2)",
              boxShadow:
                activeId === section.id ? `0 0 8px ${color}60` : "none",
              transform: activeId === section.id ? "scale(1.4)" : "scale(1)",
            }}
          />
        </button>
      ))}
    </nav>
  );
}
