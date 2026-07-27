import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <section
        className="
                    relative
                    z-10
                    mx-auto
                    flex
                    min-h-screen
                    w-full
                    max-w-6xl
                    flex-col
                    justify-center
                    px-6
                    pt-32
                    pb-16
                    text-center
                    sm:px-8
                    lg:px-10
                    lg:text-left
                "
      >

        <p className="font-mono text-sm text-orange-500">
          LABORATÓRIO DE ENGENHARIA / 001
        </p>

        <h1
          className="
                        mt-4
                        text-4xl
                        font-bold
                        tracking-tight
                        animate-fade-up
                        sm:text-5xl
                        lg:text-6xl
                    "
        >
          Site em Construção.
        </h1>

        <h2
          className="
                        mt-5
                        text-lg
                        text-gray-400
                        sm:text-xl
                        lg:text-2xl
                    "
        >
          Estudante de Engenharia da Computação
        </h2>

        <p
          className="
                        mt-8
                        max-w-2xl
                        text-base
                        leading-7
                        text-gray-300
                        sm:text-lg
                        sm:leading-8
                        lg:max-w-3xl
                    "
        >
          Desenvolvendo sistemas onde software e hardware trabalham juntos.
          Apaixonado por sistemas embarcados, robótica, desenvolvimento de
          hardware e tecnologias espaciais.
        </p>

        <div
          className="
                        mt-10
                        flex
                        flex-col
                        gap-4
                        sm:flex-row
                        lg:justify-start
                    "
        >

          <Link
            href="/projects"
            className="
                            rounded
                            border
                            border-orange-500
                            px-6
                            py-3
                            text-center
                            text-orange-500
                            transition
                            hover:bg-orange-500
                            hover:text-black
                        "
          >
            Projetos
          </Link>

          <Link
            href="/blog"
            className="
                            rounded
                            border
                            border-white/20
                            px-6
                            py-3
                            text-center
                            transition
                            hover:border-orange-500
                            hover:text-orange-500
                        "
          >
            Blog
          </Link>

        </div>

        <div
          className="
                        mt-16
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:mt-20
                        lg:grid-cols-4
                    "
        >

          {[
            "Sistemas Embarcados",
            "Robótica",
            "Impressão 3D",
            "Hardware Open Source",
          ].map((item) => (

            <div
              key={item}
              className="
                                rounded
                                border
                                border-gray-700
                                bg-black/50
                                p-6
                                transition
                                hover:border-orange-500
                            "
            >

              <p className="font-mono text-sm text-orange-500">
                MÓDULO
              </p>

              <p className="mt-3">
                {item}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}