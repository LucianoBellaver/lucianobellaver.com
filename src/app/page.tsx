"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [boot, setBoot] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBoot(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (boot) {
    return (
      <main className="min-h-screen bg-black text-green-400 flex items-center justify-center font-mono">
        <div className="max-w-xl w-full px-6">
          <p className="text-xl mb-6 animate-pulse">
            Initializing Luciano Bellaver System...
          </p>

          <div className="space-y-2 text-sm">
            <p>[OK] Embedded Systems</p>
            <p>[OK] Hardware Engineering</p>
            <p>[OK] Robotics Research</p>
            <p>[OK] Open Source Projects</p>
            <p>[OK] Space Technology</p>
          </div>

          <p className="mt-8">
            SYSTEM ONLINE_
          </p>
        </div>
      </main>
    );
  }


  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>


      <section className="relative min-h-screen flex flex-col justify-center px-8 max-w-6xl mx-auto">

        <p className="text-green-400 font-mono mb-4">
          ENGINEERING LAB / 001
        </p>


        <h1 className="text-6xl font-bold tracking-tight">
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

          <button className="border border-green-400 text-green-400 px-6 py-3 rounded hover:bg-green-400 hover:text-black transition">
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
              className="border border-gray-700 p-5 rounded bg-black/50"
            >
              <p className="text-green-400 font-mono">
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