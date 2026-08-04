import Link from "next/link";
import { projects } from "@/data/projects";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const project = projects.find(
        (project) => project.slug === slug
    );

    if (!project) {

        return (
            <main className="min-h-screen bg-[#1f1f23] text-white pt-32 pb-24">

                <section className="max-w-6xl mx-auto px-6 sm:px-8">

                    <h1 className="text-4xl font-bold">
                        Projeto não encontrado
                    </h1>

                    <p className="mt-4 text-gray-400">
                        O projeto solicitado não existe ou ainda não foi publicado.
                    </p>

                    <Link
                        href="/projects"
                        className="
                            inline-block
                            mt-8
                            text-orange-500
                            hover:text-orange-400
                            transition
                        "
                    >
                        ← Voltar para projetos
                    </Link>

                </section>

            </main>
        );

    }

    return (
        <main className="min-h-screen bg-[#1f1f23] text-white pt-32 pb-24">

            <section className="max-w-6xl mx-auto px-6 sm:px-8">

                {/* Voltar */}

                <Link
                    href="/projects"
                    className="
                        font-mono
                        text-sm
                        text-gray-400
                        hover:text-orange-500
                        transition
                    "
                >
                    ← Voltar para projetos
                </Link>

                {/* Cabeçalho */}

                <div className="mt-14">

                    <p className="font-mono text-sm tracking-widest text-orange-500 mb-6">
                        PROJECT / {project.category.toUpperCase()}
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        {project.title}
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-gray-300">
                        {project.description}
                    </p>

                </div>

                {/* Informações */}

                <div className="grid gap-5 md:grid-cols-3 mt-16">

                    <div
                        className="
                            rounded-lg
                            border
                            border-white/20
                            p-6
                            transition
                            hover:border-orange-500
                        "
                    >

                        <p className="font-mono text-sm tracking-widest text-gray-500">
                            STATUS
                        </p>

                        <p className="mt-4 text-lg">
                            {project.status}
                        </p>

                    </div>

                    <div
                        className="
                            rounded-lg
                            border
                            border-white/20
                            p-6
                            transition
                            hover:border-orange-500
                        "
                    >

                        <p className="font-mono text-sm tracking-widest text-gray-500">
                            ANO
                        </p>

                        <p className="mt-4 text-lg">
                            {project.year}
                        </p>

                    </div>

                    <div
                        className="
                            rounded-lg
                            border
                            border-white/20
                            p-6
                            transition
                            hover:border-orange-500
                        "
                    >

                        <p className="font-mono text-sm tracking-widest text-gray-500">
                            TIPO
                        </p>

                        <p className="mt-4 text-lg">
                            {project.category}
                        </p>

                    </div>

                </div>

                {/* Tecnologias */}

                <div className="mt-20">

                    <h2 className="font-mono text-sm tracking-widest text-orange-500 mb-6">
                        TECNOLOGIAS
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        {project.technologies.map((tech) => (

                            <span
                                key={tech}
                                className="
                                    rounded
                                    border
                                    border-white/20
                                    px-4
                                    py-2
                                    font-mono
                                    text-sm
                                    text-gray-300
                                "
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                </div>

                {/* Documentação */}

                <div
                    className="
                        mt-24
                        border-t
                        border-white/10
                        pt-10
                    "
                >

                    <p className="font-mono text-sm tracking-widest text-orange-500">
                        DOCUMENTAÇÃO
                    </p>

                    <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                        Esta página será expandida futuramente com detalhes do
                        desenvolvimento, fotografias, diagramas, aprendizados,
                        desafios encontrados e documentação técnica do projeto.
                    </p>

                </div>

            </section>

        </main>
    );
}