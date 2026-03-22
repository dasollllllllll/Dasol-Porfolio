import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { projects, getProject, getAdjacentProjects } from "@/data/projects";
import { ProjectHero } from "@/components/project/ProjectHero";
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
  const imageNumbers = Array.from({ length: project.images }, (_, i) => i + 1);

  return (
    <main className="pt-16">
      <ProjectHero project={project} />

      {/* PDF 페이지 이미지 */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 space-y-2">
          {imageNumbers.map((num) => (
            <div key={num} className="relative w-full overflow-hidden rounded-lg">
              <Image
                src={`/images/${project.slug}/${num.toString().padStart(2, "0")}.png`}
                alt={`${project.title} - page ${num}`}
                width={1920}
                height={1080}
                className="w-full h-auto"
                quality={90}
                priority={num <= 2}
              />
            </div>
          ))}
        </div>
      </section>

      {/* YouTube 영상 */}
      {project.videos.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-4 space-y-6">
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
