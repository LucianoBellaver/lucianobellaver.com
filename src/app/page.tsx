import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1f1f23] text-white">

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
          pb-24
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
            max-w-4xl
            text-4xl
            font-bold
            tracking-tight
            animate-fade-up
            sm:text-5xl
            lg:text-6xl
          "
        >
          Construindo sistemas entre software e mundo físico.
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
          Engenharia da Computação • Sistemas Embarcados • Robótica
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
          Sou estudante de Engenharia da Computação e uso este espaço para
          documentar projetos, experimentos e aprendizados em hardware,
          automação, infraestrutura e tecnologias que conectam código ao mundo
          real.
        </p>

        {/* Botão */}
        <div
          className="
            mt-10
            flex
            justify-center
            lg:justify-start
          "
        >

          <Link
            href="/about"
            className="
              rounded
              border
              border-orange-500
              px-6
              py-3
              text-orange-500
              transition
              hover:bg-orange-500
              hover:text-black
            "
          >
            Sobre mim
          </Link>

        </div>

        {/* Portfólio */}
        <div className="mt-24">

          <p className="font-mono text-sm tracking-widest text-orange-500 mb-8">
            PORTFÓLIO
          </p>

          <div
            className="
              grid
              gap-5
              md:grid-cols-2
              max-w-4xl
            "
          >

            {/* Projetos */}

            <Link
              href="/projects"
              className="
                group
                rounded-lg
                border
                border-gray-700
                bg-black/40
                p-8
                transition-all
                duration-300
                hover:border-orange-500
                hover:-translate-y-1
              "
            >

              <div className="flex justify-between items-start">

                <div>

                  <p className="text-6xl font-bold">
                    {projects.length}
                  </p>

                  <p className="mt-5 font-mono text-sm tracking-widest text-orange-500">
                    PROJETOS
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    Publicados
                  </p>

                </div>

                <span
                  className="
                    text-3xl
                    text-gray-500
                    transition
                    group-hover:text-orange-500
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </div>

            </Link>

            {/* Blog */}

            <Link
              href="/blog"
              className="
                group
                rounded-lg
                border
                border-gray-700
                bg-black/40
                p-8
                transition-all
                duration-300
                hover:border-orange-500
                hover:-translate-y-1
              "
            >

              <div className="flex justify-between items-start">

                <div>

                  <p className="text-6xl font-bold">
                    0
                  </p>

                  <p className="mt-5 font-mono text-sm tracking-widest text-orange-500">
                    ARTIGOS
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    Publicados
                  </p>

                </div>

                <span
                  className="
                    text-3xl
                    text-gray-500
                    transition
                    group-hover:text-orange-500
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}