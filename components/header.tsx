"use client";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import image1 from "../public/motto1.png";
import Container from "./container";
import { SheetDemo } from "./mobile-toolbar";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200">
            <Container>
                <div className="flex justify-between items-center py-3">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src={image1}
                            alt="Aspramed Logo"
                            width={600}
                            height={600}
                            className="h-12 w-auto"
                        />
                        {/* <h3 className="text-cyan-600 font-bold text-2xl">
                            Lakmed
                        </h3> */}
                    </Link>

                    <nav className="hidden md:flex items-center space-x-8">
                        {[
                            { title: "Home", link: "/" },
                            { title: "About Us", link: "/about-us" },
                            { title: "For Patients", link: "/for-patients" },
                            {
                                title: "For Businesses",
                                link: "/for-businesses",
                            },
                            // {
                            //     title: "For Professionals",
                            //     link: "/for-professionals",
                            // },
                            { title: "Contact", link: "/contact" },
                        ].map(item => {
                            return (
                                <Link
                                    key={item.link}
                                    href={`${item.link}`}
                                    className={`hover:text-primary transition-colors duration-300 font-[500] text-sm ${
                                        pathname == item.link
                                            ? "underline underline-offset-8 text-primary"
                                            : "text-slate-600"
                                    }`}>
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button
                            asChild
                            className="font-semibold px-6 transition-transform hover:scale-105 hidden md:inline-flex">
                            <Link href="/donate">Download</Link>
                        </Button>
                        <SheetDemo />
                    </div>
                </div>
            </Container>
        </header>
    );
}
