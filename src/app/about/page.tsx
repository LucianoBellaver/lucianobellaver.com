import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-black text-white pt-32">

            <section className="max-w-6xl mx-auto px-8">


                {/* Header */}
                <div className="mb-20">

                    <p className="font-mono text-orange-500 mb-4">
                        III ABOUT
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





                        {/* Status */}
                        <div className="mt-10 border-t border-white/10 font-mono text-sm">


                            <div className="flex justify-between py-4 border-b border-white/10">

                                <span className="text-gray-500 tracking-widest">
                                    BASED IN
                                </span>

                                <span className="text-gray-200">
                                    Brazil
                                </span>

                            </div>




                            <div className="flex justify-between py-4 border-b border-white/10 gap-4">

                                <span className="text-gray-500 tracking-widest">
                                    CURRENTLY
                                </span>

                                <span className="text-gray-200 text-right">
                                    Computer Engineering Student
                                </span>

                            </div>




                            <div className="flex justify-between py-4 border-b border-white/10">

                                <span className="text-gray-500 tracking-widest">
                                    STUDYING
                                </span>

                                <span className="text-gray-200 text-right">
                                    Computer Engineering
                                </span>

                            </div>




                            <div className="flex justify-between py-4 gap-4">

                                <span className="text-gray-500 tracking-widest">
                                    FOCUS
                                </span>

                                <span className="text-gray-200 text-right">
                                    Embedded Systems
                                    <br />
                                    Hardware
                                    <br />
                                    Robotics
                                </span>

                            </div>


                        </div>


                    </div>









                    {/* Bio */}
                    <div className="max-w-3xl pt-2">


                        <div className="space-y-10 text-gray-300 text-xl leading-9">


                            <p>
                                I am a Computer Engineering student focused on building
                                systems that connect software with the physical world.
                            </p>



                            <p>
                                My interests are centered around embedded systems,
                                hardware development, robotics and open-source projects.
                                I enjoy understanding how things work at the lowest level,
                                from electronics and firmware to complete systems.
                            </p>



                            <p>
                                Currently, I am developing my skills through personal
                                projects involving embedded platforms, 3D printing,
                                automation and hardware experimentation.
                            </p>



                            <p>
                                My long-term goal is to work with advanced technologies
                                related to robotics and space systems, contributing to
                                projects that push engineering beyond everyday limits.
                            </p>


                        </div>


                    </div>


                </div>









                {/* Areas */}
                <div className="mt-32">


                    <h2 className="font-mono text-orange-500 mb-8">
                        FOCUS AREAS
                    </h2>




                    <div className="grid md:grid-cols-4 gap-4">


                        {[
                            "Embedded Systems",
                            "Hardware Design",
                            "Robotics",
                            "Space Technology",
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