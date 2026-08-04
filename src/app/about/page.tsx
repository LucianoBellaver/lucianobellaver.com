import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-[#1f1f23] text-white pt-32 pb-24">

            <section className="max-w-6xl mx-auto px-6 sm:px-8">

                {/* Cabeçalho */}
                <div className="mb-16">

                    <p className="font-mono text-sm tracking-widest text-orange-500">
                        III SOBRE
                    </p>

                </div>

                {/* Perfil */}
                <div className="grid lg:grid-cols-[320px_1fr] gap-16 lg:gap-32 items-start">

                    {/* Coluna Esquerda */}
                    <div>

                        {/* Foto */}
                        <div
                            className="
                                relative
                                w-full
                                max-w-[320px]
                                mx-auto
                                lg:mx-0
                                aspect-square
                                border
                                border-white/20
                                rounded-lg
                                overflow-hidden
                                bg-white/5
                            "
                        >

                            <Image
                                src="/images/luciano.jpg"
                                alt="Luciano Bellaver"
                                fill
                                priority
                                sizes="320px"
                                className="object-cover"
                            />

                        </div>

                        {/* Dados */}
                        <div className="mt-10 font-mono text-sm">

                            {/* Informações principais */}
                            <div className="border-t border-white/10">

                                <div className="flex justify-between py-4 border-b border-white/10">

                                    <span className="text-gray-500 tracking-widest">
                                        LOCALIZAÇÃO
                                    </span>

                                    <span>
                                        Brasil
                                    </span>

                                </div>

                                <div className="flex justify-between py-4 border-b border-white/10">

                                    <span className="text-gray-500 tracking-widest">
                                        CURSANDO
                                    </span>

                                    <span className="text-right">
                                        Engenharia da Computação
                                    </span>

                                </div>

                                <div className="flex justify-between py-4">

                                    <span className="text-gray-500 tracking-widest">
                                        ESPECIALIDADES
                                    </span>

                                    <span className="text-right">
                                        Sistemas Embarcados
                                        <br />
                                        Hardware
                                        <br />
                                        Robótica
                                    </span>

                                </div>

                            </div>

                            {/* Idiomas */}
                            <div className="mt-10">

                                <h3 className="mb-4 text-orange-500 tracking-widest">
                                    IDIOMAS
                                </h3>

                                <div className="space-y-3">

                                    <div className="flex justify-between">
                                        <span>Português</span>
                                        <span className="text-gray-500">
                                            Nativo
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Inglês</span>
                                        <span className="text-gray-500">
                                            Intermediário
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Japonês</span>
                                        <span className="text-gray-500">
                                            Básico
                                        </span>
                                    </div>

                                </div>

                            </div>

                            {/* Links */}
                            <div className="mt-10">

                                <h3 className="mb-4 text-orange-500 tracking-widest">
                                    LINKS
                                </h3>

                                <div className="space-y-3">

                                    <a
                                        href="https://github.com/LucianoBellaver"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-gray-300 transition hover:text-orange-500"
                                    >
                                        GitHub →
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/luciano-bellaver/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-gray-300 transition hover:text-orange-500"
                                    >
                                        LinkedIn →
                                    </a>

                                </div>

                            </div>

                            {/* Ferramentas */}
                            <div className="mt-10">

                                <h3 className="mb-4 text-orange-500 tracking-widest">
                                    FERRAMENTAS
                                </h3>

                                <div className="space-y-6">

                                    {/* Sistemas */}
                                    <div>

                                        <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                                            Sistemas
                                        </p>

                                        <div className="flex flex-wrap gap-2">

                                            {[
                                                "Linux",
                                                "Docker",
                                                "Git",
                                            ].map((tool) => (

                                                <span
                                                    key={tool}
                                                    className="
                                                        rounded
                                                        border
                                                        border-white/20
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        text-gray-300
                                                    "
                                                >
                                                    {tool}
                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                    {/* Embarcados */}
                                    <div>

                                        <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                                            Embarcados
                                        </p>

                                        <div className="flex flex-wrap gap-2">

                                            {[
                                                "C",
                                                "ESP32",
                                                "Arduino",
                                                "Raspberry Pi",
                                                "Klipper",
                                            ].map((tool) => (

                                                <span
                                                    key={tool}
                                                    className="
                                                        rounded
                                                        border
                                                        border-white/20
                                                        px-3
                                                        py-1
                                                        text-xs
                                                        text-gray-300
                                                    "
                                                >
                                                    {tool}
                                                </span>

                                            ))}

                                        </div>

                                    </div>

                                    {/* CAD */}
                                    <div>

                                        <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                                            CAD
                                        </p>

                                        <div className="flex flex-wrap gap-2">

                                            <span
                                                className="
                                                    rounded
                                                    border
                                                    border-white/20
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    text-gray-300
                                                "
                                            >
                                                Fusion 360
                                            </span>

                                        </div>

                                    </div>

                                    {/* Desenvolvimento Web */}
                                    <div>

                                        <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                                            Desenvolvimento Web
                                        </p>

                                        <div className="flex flex-wrap gap-2">

                                            <span
                                                className="
                                                    rounded
                                                    border
                                                    border-white/20
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    text-gray-300
                                                "
                                            >
                                                Next.js
                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Bio */}
                    <div className="max-w-3xl">

                        <div className="space-y-8 text-lg leading-8 text-gray-300">

                            <p>
                                Sou estudante de Engenharia da Computação e atuo profissionalmente com manutenção e reparo de impressoras 3D por meio da minha assistência técnica. Meu principal objetivo é desenvolver sistemas que integrem software e hardware para resolver problemas do mundo real.
                            </p>

                            <p>
                                Minha experiência prática envolve diagnóstico, manutenção, calibração e otimização de equipamentos de manufatura aditiva, complementando minha formação acadêmica e proporcionando contato diário com eletrônica, mecânica, firmware e sistemas embarcados.
                            </p>

                            <p>
                                Paralelamente, desenvolvo projetos pessoais envolvendo sistemas embarcados, automação, infraestrutura, impressão 3D e desenvolvimento de hardware. Utilizo este espaço para documentar experimentos, compartilhar aprendizados e registrar a evolução dos projetos que construo.
                            </p>

                            <p>
                                Meu objetivo de longo prazo é atuar no desenvolvimento de tecnologias avançadas nas áreas de sistemas embarcados, robótica e exploração espacial, contribuindo para projetos que conectem engenharia, inovação e tecnologia de ponta.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}