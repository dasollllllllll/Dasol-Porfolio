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
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleClick(section.id)}
          className="group flex items-center gap-3"
          title={section.label}
        >
          <span
            className="text-xs opacity-0 transition-opacity group-hover:opacity-100 text-right"
            style={{ color: activeId === section.id ? color : undefined }}
          >
            {section.label}
          </span>
          <div
            className="h-2 w-2 rounded-full transition-all"
            style={{
              background:
                activeId === section.id ? color : "rgba(255,255,255,0.2)",
              boxShadow:
                activeId === section.id ? `0 0 10px ${color}50` : "none",
              transform: activeId === section.id ? "scale(1.3)" : "scale(1)",
            }}
          />
        </button>
      ))}
    </nav>
  );
}
