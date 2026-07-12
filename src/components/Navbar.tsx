"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";


export default function Navbar() {

    const pathname = usePathname();

    const [languageOpen, setLanguageOpen] = useState(false);


    const links = [
        {
            number: "I",
            name: "Projects",
            href: "/projects",
        },
        {
            number: "II",
            name: "Blog",
            href: "/blog",
        },
        {
            number: "III",
            name: "About",
            href: "/about",
        },
    ];


    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur">

            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">


                {/* Logo */}
                <Link
                    href="/"
                    className="font-mono text-sm tracking-widest hover:text-gray-300 transition"
                >
                    LUCIANO
                    <span className="text-orange-500">.</span>
                    BELLAVER
                </Link>



                {/* Links */}
                <div className="hidden md:flex items-center gap-8 font-mono text-sm text-gray-400">

                    {links.map((link) => {

                        const active = pathname === link.href;


                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-white transition"
                            >

                                <span
                                    className={
                                        active
                                            ? "text-orange-500"
                                            : "text-gray-400"
                                    }
                                >
                                    {link.number}
                                </span>

                                {" "}

                                {link.name}

                            </Link>
                        );

                    })}

                </div>




                {/* Direita */}
                <div className="flex items-center gap-4">


                    {/* Idioma */}
                    <div className="relative">


                        <button
                            onClick={() => setLanguageOpen(!languageOpen)}
                            className="
        flex
        items-center
        gap-2
        font-mono
        text-sm
        hover:text-orange-500
        transition
        "
                        >

                            <ReactCountryFlag
                                countryCode="BR"
                                svg
                                style={{
                                    width: "1.2em",
                                    height: "1.2em",
                                }}
                            />

                            PT

                            <span>
                                ▾
                            </span>

                        </button>



                        {languageOpen && (

                            <div
                                className="
            absolute
            right-0
            mt-4
            w-40
            border
            border-white/20
            bg-black
            rounded-md
            overflow-hidden
            "
                            >

                                <button
                                    className="
                w-full
                px-4
                py-3
                text-left
                font-mono
                text-sm
                hover:bg-white/10
                transition
                "
                                >
                                    🇧🇷 Português
                                </button>


                                <button
                                    className="
                w-full
                px-4
                py-3
                text-left
                font-mono
                text-sm
                hover:bg-white/10
                transition
                "
                                >
                                    🇺🇸 English
                                </button>


                                <button
                                    className="
                                    w-full
                                    px-4
                                    py-3
                                    text-left
                                    font-mono
                                    text-sm
                                    hover:bg-white/10
                                    transition
                                 "
                                >
                                    🇯🇵 日本語
                                </button>


                            </div>

                        )}

                    </div>

                    {/* Search */}
                    <button
                        className="
                        hidden md:block
                        border border-white/20
                        px-4 py-2
                        rounded-md
                        text-sm
                        font-mono
                        hover:border-orange-500
                        transition
                        "
                    >
                        Search
                    </button>



                    {/* Contact */}
                    <a
                        href="mailto:seuemail@email.com"
                        className="
                        border border-white/20
                        px-4 py-2
                        rounded-md
                        text-sm
                        hover:bg-orange-500
                        hover:text-black
                        transition
                        "
                    >
                        Contact
                    </a>


                </div>


            </nav>

        </header>
    );
}