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
            <main className="min-h-screen bg-black text-white pt-32">

                <section className="max-w-6xl mx-auto px-8">

                    <h1 className="text-4xl">
                        Projeto não encontrado
                    </h1>

                    <Link
                        href="/projects"
                        className="
                            inline-block
                            mt-8
                            text-orange-500
                            hover:text-orange-400
                        "
                    >
                        ← Voltar para projetos
                    </Link>

                </section>

            </main>
        );

    }





    return (
        <main className="min-h-screen bg-black text-white pt-32">


            <section className="max-w-6xl mx-auto px-8">



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

                <div className="mt-16">


                    <p className="font-mono text-orange-500 mb-6">
                        PROJECT / {project.category.toUpperCase()}
                    </p>



                    <h1 className="text-6xl font-bold tracking-tight">
                        {project.title}
                    </h1>



                    <p className="mt-8 max-w-3xl text-xl text-gray-300 leading-relaxed">
                        {project.description}
                    </p>


                </div>






                {/* Informações */}

                <div className="grid md:grid-cols-3 gap-6 mt-16">


                    <div
                        className="
                            border
                            border-white/20
                            rounded-lg
                            p-6
                        "
                    >

                        <p className="font-mono text-gray-500 text-sm">
                            STATUS
                        </p>

                        <p className="mt-3 text-lg">
                            {project.status}
                        </p>

                    </div>





                    <div
                        className="
                            border
                            border-white/20
                            rounded-lg
                            p-6
                        "
                    >

                        <p className="font-mono text-gray-500 text-sm">
                            ANO
                        </p>

                        <p className="mt-3 text-lg">
                            {project.year}
                        </p>

                    </div>





                    <div
                        className="
                            border
                            border-white/20
                            rounded-lg
                            p-6
                        "
                    >

                        <p className="font-mono text-gray-500 text-sm">
                            TIPO
                        </p>

                        <p className="mt-3 text-lg">
                            {project.category}
                        </p>

                    </div>


                </div>








                {/* Tecnologias */}

                <div className="mt-16">


                    <h2 className="font-mono text-orange-500 mb-6">
                        TECNOLOGIAS
                    </h2>



                    <div className="flex flex-wrap gap-3">


                        {project.technologies.map((tech) => (

                            <span
                                key={tech}
                                className="
                                    border
                                    border-white/20
                                    px-4
                                    py-2
                                    rounded
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







                {/* Espaço futuro */}

                <div
                    className="
                        mt-20
                        border-t
                        border-white/10
                        pt-10
                    "
                >

                    <p className="font-mono text-gray-500">
                        PROJECT DOCUMENTATION
                    </p>

                    <p className="mt-4 text-gray-400">
                        Mais informações, imagens e documentação serão adicionadas futuramente.
                    </p>


                </div>




            </section>


        </main>
    );
}