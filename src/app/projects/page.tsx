import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <main className="min-h-screen bg-[#1f1f23] text-white pt-32 pb-24">

            <section className="max-w-6xl mx-auto px-6 sm:px-8">

                {/* Cabeçalho */}
                <div className="mb-16">

                    <p className="font-mono text-sm tracking-widest text-orange-500">
                        I PROJETOS
                    </p>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold">
                        Projetos
                    </h1>

                    <p className="mt-6 max-w-2xl text-gray-400 leading-7">
                        Uma coleção de projetos desenvolvidos para explorar
                        hardware, software, automação, sistemas embarcados e
                        infraestrutura. Cada projeto representa um desafio,
                        uma oportunidade de aprendizado e uma etapa da minha
                        evolução como engenheiro.
                    </p>

                </div>

                {/* Grid */}
                <div className="grid gap-8 md:grid-cols-2">

                    {projects.map((project) => (

                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="
                                group
                                overflow-hidden
                                rounded-lg
                                border
                                border-white/20
                                transition-all
                                duration-300
                                hover:border-orange-500
                                hover:-translate-y-1
                            "
                        >

                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={450}
                                className="
                                    h-52
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-[1.03]
                                    md:h-56
                                "
                            />

                            <div className="p-6">

                                <h2 className="text-2xl font-semibold">
                                    {project.title}
                                </h2>

                                <p className="mt-4 text-gray-400 leading-7">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">

                                    {project.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="
                                                rounded
                                                border
                                                border-white/20
                                                px-3
                                                py-1
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