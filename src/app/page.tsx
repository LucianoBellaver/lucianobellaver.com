export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>


      <section className="relative min-h-screen flex flex-col justify-center px-8 max-w-6xl mx-auto">


        <p className="text-orange-500 font-mono mb-4">
          ENGINEERING LAB / 001
        </p>


        <h1 className="text-6xl font-bold tracking-tight animate-fade-up">
          Luciano Bellaver
        </h1>


        <h2 className="text-2xl text-gray-400 mt-4">
          Computer Engineering Student
        </h2>


        <p className="max-w-2xl text-gray-300 mt-8 text-lg">
          Building systems where software meets the physical world.
          Interested in embedded systems, robotics, hardware design
          and future space technologies.
        </p>


        <div className="flex gap-4 mt-10">

          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded hover:bg-orange-500 hover:text-black transition">
            Projects
          </button>


          <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
            Blog
          </button>

        </div>


        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            "Embedded",
            "Robotics",
            "3D Printing",
            "Open Hardware",
          ].map((item) => (

            <div
              key={item}
              className="border border-gray-700 p-5 rounded bg-black/50 hover:border-green-400 transition"
            >

              <p className="text-orange-500 font-mono">
                MODULE
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