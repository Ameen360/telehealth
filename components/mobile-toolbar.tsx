"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SheetDemo() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div
                    className="md:hidden cursor-pointer"
                    aria-label="Toggle mobile menu">
                    <Menu className="h-8 w-8 text-slate-600" />
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <div className="flex items-center space-x-3 mt-4">
                        <Link href="/" className="flex items-center space-x-3">
                            <h3 className="text-cyan-600 font-bold text-5xl">
                                Aspramed
                            </h3>
                        </Link>
                    </div>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4 py-4">
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
                                className={`text-slate-600 hover:text-amber-600 transition-colors duration-300 font-[500] text-md ${
                                    pathname == item.link
                                        ? "underline underline-offset-4 text-primary"
                                        : ""
                                }`}>
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                <SheetFooter>
                    <Button
                        asChild
                        className="font-semibold px-6 transition-transform hover:scale-105 mb-4">
                        <Link href="/register">Donate Now</Link>
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
