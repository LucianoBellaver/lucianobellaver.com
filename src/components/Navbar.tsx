"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Menu, X } from "lucide-react";
import Search from "@/components/Search";

const links = [
    {
        number: "I",
        name: "Projetos",
        href: "/projects",
    },
    {
        number: "II",
        name: "Blog",
        href: "/blog",
    },
    {
        number: "III",
        name: "Sobre",
        href: "/about",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [languageOpen, setLanguageOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    function isActive(href: string) {
        return pathname === href || pathname.startsWith(`${href}/`);
    }

    function closeMenu() {
        setMenuOpen(false);
        setLanguageOpen(false);
    }

    useEffect(() => {
        if (!menuOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                closeMenu();
            }
        }

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
                <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                    <Link
                        href="/"
                        onClick={() => setLanguageOpen(false)}
                        className="font-mono text-sm tracking-widest transition hover:text-gray-300"
                    >
                        LUCIANO
                        <span className="text-orange-500">.</span>
                        BELLAVER
                    </Link>

                    <div className="hidden items-center gap-8 font-mono text-sm text-gray-400 lg:flex">
                        {links.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="transition hover:text-white"
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

                    <div className="hidden items-center gap-4 lg:flex">
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setLanguageOpen(!languageOpen)}
                                aria-expanded={languageOpen}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    font-mono
                                    text-sm
                                    transition
                                    hover:text-orange-500
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

                                <span>▾</span>
                            </button>

                            {languageOpen && (
                                <div
                                    className="
                                        absolute
                                        right-0
                                        mt-4
                                        w-40
                                        overflow-hidden
                                        rounded-md
                                        border
                                        border-white/20
                                        bg-black
                                    "
                                >
                                    <button
                                        type="button"
                                        onClick={() => setLanguageOpen(false)}
                                        className="w-full px-4 py-3 text-left font-mono text-sm transition hover:bg-white/10"
                                    >
                                        🇧🇷 Português
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setLanguageOpen(false)}
                                        className="w-full px-4 py-3 text-left font-mono text-sm transition hover:bg-white/10"
                                    >
                                        🇺🇸 English
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setLanguageOpen(false)}
                                        className="w-full px-4 py-3 text-left font-mono text-sm transition hover:bg-white/10"
                                    >
                                        🇯🇵 日本語
                                    </button>
                                </div>
                            )}
                        </div>

                        <Search />

                        <a
                            href="mailto:lucianobellaver@gmail.com"
                            className="
                                rounded-md
                                border
                                border-white/20
                                px-4
                                py-2
                                text-sm
                                transition
                                hover:bg-orange-500
                                hover:text-black
                            "
                        >
                            Contato
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menu"
                        aria-expanded={menuOpen}
                        className="lg:hidden"
                    >
                        <Menu size={28} />
                    </button>
                </nav>
            </header>

            {menuOpen && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 z-40 bg-black/70 lg:hidden"
                />
            )}

            <aside
                aria-hidden={!menuOpen}
                className={`
                    fixed
                    right-0
                    top-0
                    z-50
                    h-full
                    w-full
                    max-w-xs
                    transform
                    border-l
                    border-white/10
                    bg-black
                    text-white
                    transition-transform
                    duration-300
                    lg:hidden
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="font-mono text-sm tracking-widest transition hover:text-gray-300"
                    >
                        LUCIANO
                        <span className="text-orange-500">.</span>
                        BELLAVER
                    </Link>

                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label="Fechar menu"
                        className="transition hover:text-orange-500"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex h-[calc(100%-5rem)] flex-col overflow-y-auto p-6">
                    <nav className="flex flex-col gap-6 font-mono text-sm">
                        {links.map((link) => {
                            const active = isActive(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="flex items-center gap-3 transition hover:text-orange-500"
                                >
                                    <span
                                        className={
                                            active
                                                ? "text-orange-500"
                                                : "text-gray-500"
                                        }
                                    >
                                        {link.number}
                                    </span>

                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="my-8 border-t border-white/10" />

                    <Search mobile onResultClick={closeMenu} />

                    <div className="my-8 border-t border-white/10" />

                    <div>
                        <p className="mb-3 font-mono text-xs tracking-widest text-gray-500">
                            IDIOMA
                        </p>

                        <div className="space-y-2 font-mono text-sm">
                            <button
                                type="button"
                                onClick={closeMenu}
                                className="flex w-full items-center gap-3 rounded-md border border-white/20 px-4 py-3 text-left"
                            >
                                <ReactCountryFlag
                                    countryCode="BR"
                                    svg
                                    style={{
                                        width: "1.2em",
                                        height: "1.2em",
                                    }}
                                />
                                Português
                            </button>

                            <button
                                type="button"
                                onClick={closeMenu}
                                className="flex w-full items-center justify-between rounded-md border border-white/10 px-4 py-3 text-left text-gray-500"
                            >
                                <span className="flex items-center gap-3">
                                    <ReactCountryFlag
                                        countryCode="US"
                                        svg
                                        style={{
                                            width: "1.2em",
                                            height: "1.2em",
                                        }}
                                    />
                                    English
                                </span>

                                <span className="text-xs">em breve</span>
                            </button>

                            <button
                                type="button"
                                onClick={closeMenu}
                                className="flex w-full items-center justify-between rounded-md border border-white/10 px-4 py-3 text-left text-gray-500"
                            >
                                <span className="flex items-center gap-3">
                                    <ReactCountryFlag
                                        countryCode="JP"
                                        svg
                                        style={{
                                            width: "1.2em",
                                            height: "1.2em",
                                        }}
                                    />
                                    日本語
                                </span>

                                <span className="text-xs">em breve</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-8">
                        <a
                            href="mailto:lucianobellaver@gmail.com"
                            onClick={closeMenu}
                            className="
                                block
                                w-full
                                rounded-md
                                border
                                border-orange-500
                                px-4
                                py-3
                                text-center
                                text-sm
                                transition
                                hover:bg-orange-500
                                hover:text-black
                            "
                        >
                            Contato
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}