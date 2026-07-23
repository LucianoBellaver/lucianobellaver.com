import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <main className="min-h-screen bg-black text-white pt-32">
            <section className="max-w-6xl mx-auto px-8">
                <p className="font-mono text-orange-500 mb-4">
                    I PROJETOS
                </p>

                <h1 className="text-5xl font-bold mb-12">
                    Projetos
                </h1>

                <div className="grid md:grid-cols-2 gap-6">

                    {projects.map((project) => (

                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="
                                block
                                border
                                border-white/20
                                rounded-lg
                                overflow-hidden
                                hover:border-orange-500
                                transition
                            "
                        >

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={450}
                                className="
                                    w-full
                                    h-56
                                    object-cover
                                "
                            />

                            <div className="p-6">

                                <h2 className="text-2xl mb-4">
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">

                                    {project.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="
                                                px-3
                                                py-1
                                                border
                                                border-white/20
                                                rounded
                                                text-sm
                                                font-mono
                                                text-gray-300
                                            "
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </section>
        </main>
    );
}