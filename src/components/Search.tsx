"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";


export default function Search() {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");



    const results = projects.filter((project) => {

        const text = `
            ${project.title}
            ${project.description}
            ${project.category}
            ${project.technologies.join(" ")}
        `.toLowerCase();


        return text.includes(query.toLowerCase());

    });



    return (
        <div className="relative">


            <button
                onClick={() => setOpen(!open)}
                className="
                    border
                    border-white/20
                    px-4
                    py-2
                    rounded-md
                    text-sm
                    font-mono
                    hover:border-orange-500
                    transition
                "
            >
                Search
            </button>



            {open && (

                <div
                    className="
                        absolute
                        right-0
                        mt-4
                        w-96
                        border
                        border-white/20
                        bg-black
                        rounded-lg
                        p-4
                    "
                >

                    <input
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Pesquisar..."
                        className="
                            w-full
                            bg-transparent
                            border
                            border-white/20
                            px-4
                            py-3
                            rounded
                            outline-none
                            focus:border-orange-500
                        "
                    />



                    <div className="mt-4 space-y-3">


                        {query && results.map((project) => (

                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="
                                    block
                                    border-b
                                    border-white/10
                                    pb-3
                                    hover:text-orange-500
                                "
                                onClick={() => setOpen(false)}
                            >

                                <p>
                                    {project.title}
                                </p>

                                <span className="text-sm text-gray-500">
                                    {project.category}
                                </span>


                            </Link>

                        ))}


                    </div>


                </div>

            )}


        </div>
    );
}