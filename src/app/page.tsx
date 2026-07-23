import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <section className="relative min-h-screen flex flex-col justify-center px-8 max-w-6xl mx-auto">

        <p className="text-orange-500 font-mono mb-4">
          LABORATÓRIO DE ENGENHARIA / 001
        </p>

        <h1 className="text-6xl font-bold tracking-tight animate-fade-up">
          Site em Construção.
        </h1>

        <h2 className="text-2xl text-gray-400 mt-4">
          Estudante de Engenharia da Computação
        </h2>

        <p className="max-w-2xl text-gray-300 mt-8 text-lg leading-8">
          Desenvolvendo sistemas onde software e hardware trabalham juntos.
          Apaixonado por sistemas embarcados, robótica, desenvolvimento de hardware
          e tecnologias espaciais.
        </p>

        <div className="flex gap-4 mt-10">

          <Link
            href="/projects"
            className="
            px-6 py-3
            border border-orange-500
            text-orange-500
            rounded
            hover:bg-orange-500
            hover:text-black
            transition
        "
          >
            Projetos
          </Link>

          <Link
            href="/blog"
            className="
            px-6 py-3
            border border-white/20
            rounded
            hover:border-orange-500
            hover:text-orange-500
            transition
        "
          >
            Blog
          </Link>

        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            "Sistemas Embarcados",
            "Robótica",
            "Impressão 3D",
            "Hardware Open Source",
          ].map((item) => (

            <div
              key={item}
              className="border border-gray-700 p-5 rounded bg-black/50 hover:border-orange-500 transition"
            >

              <p className="text-orange-500 font-mono">
                MÓDULO
              </p>

              <p className="mt-2">
                {item}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}