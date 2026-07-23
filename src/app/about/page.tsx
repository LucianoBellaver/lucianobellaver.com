import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white pt-32">

            <section className="max-w-6xl mx-auto px-8">


                {/* Cabeçalho */}
                <div className="mb-20">

                    <p className="font-mono text-orange-500 mb-4">
                        III SOBRE
                    </p>

                </div>





                {/* Perfil */}
                <div className="grid md:grid-cols-[300px_1fr] gap-32 items-start">



                    {/* Foto */}
                    <div>

                        <div
                            className="
                                relative
                                w-full
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
                                sizes="300px"
                                priority
                                className="object-cover"
                            />

                        </div>





                        {/* Informações */}
                        <div className="mt-10 border-t border-white/10 font-mono text-sm">


                            <div className="flex justify-between py-4 border-b border-white/10">

                                <span className="text-gray-500 tracking-widest">
                                    LOCALIZAÇÃO
                                </span>

                                <span className="text-gray-200">
                                    Brasil
                                </span>

                            </div>




                            <div className="flex justify-between py-4 border-b border-white/10 gap-4">

                                <span className="text-gray-500 tracking-widest">
                                    ATUALMENTE
                                </span>

                                <span className="text-gray-200 text-right">
                                    Estudante de Engenharia da Computação
                                </span>

                            </div>




                            <div className="flex justify-between py-4 border-b border-white/10">

                                <span className="text-gray-500 tracking-widest">
                                    CURSANDO
                                </span>

                                <span className="text-gray-200 text-right">
                                    Engenharia de Computação
                                </span>

                            </div>




                            <div className="flex justify-between py-4 gap-4">

                                <span className="text-gray-500 tracking-widest">
                                    FOCO
                                </span>

                                <span className="text-gray-200 text-right">
                                    Sistemas Embarcados
                                    <br />
                                    Hardware
                                    <br />
                                    Robótica
                                </span>

                            </div>


                        </div>


                    </div>









                    {/* Bio */}
                    <div className="max-w-3xl pt-2">

                        <div className="space-y-10 text-gray-300 text-xl leading-9">

                            <p>
                                Sou estudante de Engenharia da Computação e tenho como principal objetivo desenvolver sistemas que unem software e hardware para resolver problemas do mundo real.
                            </p>

                            <p>
                                Meus principais interesses estão em sistemas embarcados, desenvolvimento de hardware, robótica e projetos open source. Tenho grande curiosidade em compreender o funcionamento da tecnologia em seus níveis mais fundamentais, desde eletrônica e firmware até sistemas completos.
                            </p>

                            <p>
                                Atualmente desenvolvo projetos pessoais envolvendo impressão 3D, automação, plataformas embarcadas e experimentação com hardware, buscando constantemente expandir meus conhecimentos por meio da prática.
                            </p>

                            <p>
                                Meu objetivo de longo prazo é atuar no desenvolvimento de tecnologias avançadas voltadas para robótica e sistemas espaciais, contribuindo para projetos que ampliem os limites da engenharia e da exploração tecnológica.
                            </p>

                        </div>

                    </div>


                </div>









                {/* Áreas */}
                <div className="mt-32">

                    <h2 className="font-mono text-orange-500 mb-8">
                        ÁREAS DE INTERESSE
                    </h2>

                    <div className="grid md:grid-cols-4 gap-4">

                        {[
                            "Sistemas Embarcados",
                            "Projeto de Hardware",
                            "Robótica",
                            "Tecnologias Espaciais",
                        ].map((item) => (

                            <div
                                key={item}
                                className="
                                    border
                                    border-white/20
                                    p-5
                                    rounded
                                    hover:border-orange-500
                                    transition
                                "
                            >

                                <p className="text-sm text-gray-300">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>


            </section>

        </main>
    );
}