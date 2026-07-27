"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

interface SearchProps {
    mobile?: boolean;
    onResultClick?: () => void;
}

export default function Search({ mobile = false, onResultClick }: SearchProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const normalizedQuery = query.trim().toLowerCase();

    const results = normalizedQuery
        ? projects.filter((project) => {
            const text = `
                ${project.title}
                ${project.description}
                ${project.category}
                ${project.technologies.join(" ")}
            `.toLowerCase();

            return text.includes(normalizedQuery);
        })
        : [];

    function handleResultClick() {
        setOpen(false);
        setQuery("");
        onResultClick?.();
    }

    if (mobile) {
        return (
            <div className="w-full">
                <p className="mb-3 font-mono text-xs tracking-widest text-gray-500">
                    PESQUISA
                </p>

                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Pesquisar projetos..."
                    className="
                        w-full
                        rounded-md
                        border
                        border-white/20
                        bg-transparent
                        px-4
                        py-3
                        text-sm
                        outline-none
                        transition
                        focus:border-orange-500
                    "
                />

                {normalizedQuery && (
                    <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
                        {results.length === 0 && (
                            <p className="text-sm text-gray-500">
                                Nenhum projeto encontrado.
                            </p>
                        )}

                        {results.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                onClick={handleResultClick}
                                className="
                                    block
                                    border-b
                                    border-white/10
                                    pb-3
                                    transition
                                    hover:text-orange-500
                                "
                            >
                                <p>{project.title}</p>

                                <span className="text-sm text-gray-500">
                                    {project.category}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="
                    rounded-md
                    border
                    border-white/20
                    px-4
                    py-2
                    font-mono
                    text-sm
                    transition
                    hover:border-orange-500
                "
            >
                Pesquisar
            </button>

            {open && (
                <div
                    className="
                        absolute
                        right-0
                        z-50
                        mt-4
                        w-96
                        rounded-lg
                        border
                        border-white/20
                        bg-black
                        p-4
                    "
                >
                    <input
                        autoFocus
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Pesquisar projetos..."
                        className="
                            w-full
                            rounded
                            border
                            border-white/20
                            bg-transparent
                            px-4
                            py-3
                            outline-none
                            transition
                            focus:border-orange-500
                        "
                    />

                    <div className="mt-4 max-h-80 space-y-3 overflow-y-auto">
                        {normalizedQuery && results.length === 0 && (
                            <p className="text-sm text-gray-500">
                                Nenhum projeto encontrado.
                            </p>
                        )}

                        {results.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                onClick={handleResultClick}
                                className="
                                    block
                                    border-b
                                    border-white/10
                                    pb-3
                                    transition
                                    hover:text-orange-500
                                "
                            >
                                <p>{project.title}</p>

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