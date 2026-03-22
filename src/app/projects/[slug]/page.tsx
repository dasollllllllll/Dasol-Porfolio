import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectSection } from "@/components/project/ProjectSection";
import { SideNav } from "@/components/project/SideNav";
import { YouTubeEmbed } from "@/components/project/YouTubeEmbed";
import { ProjectNav } from "@/components/project/ProjectNav";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} | 박다솔 Portfolio`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.subtitle,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="pt-16">
      <ProjectHero project={project} />
      <SideNav sections={project.sections} color={project.color} />

      {project.sections.map((section) => (
        <ProjectSection
          key={section.id}
          section={section}
          color={project.color}
        />
      ))}

      {project.videos.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 space-y-6">
            <p
              className="text-xs tracking-[3px] uppercase mb-8"
              style={{ color: project.color }}
            >
              Video
            </p>
            {project.videos.map((url, i) => (
              <YouTubeEmbed
                key={url}
                url={url}
                title={`${project.title} 영상 ${i + 1}`}
              />
            ))}
          </div>
        </section>
      )}

      <ProjectNav prev={prev} next={next} />
    </main>
  );
}
