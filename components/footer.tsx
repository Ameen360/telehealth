"use client";

import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#181F59] text-white pt-16 pb-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Grid with Dividers */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-12">

                    {/* Column 1 - Brand */}
                    <div className="px-6 py-4 lg:pr-8">
                        {/* Logo */}
                        <div className="mb-6">
                            <Image
                                src="/logo2.png"
                                alt="Lakmed"
                                width={140}
                                height={40}
                                style={{ width: 'auto', height: '40px' }}
                            />
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-xs">
                            Transforming healthcare delivery across Africa with
                            innovative telehealth solutions.
                        </p>
                        {/* Social Icons - Circular bordered */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://www.facebook.com/AspramedTelehealth/"
                                target="_blank"
                                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#43D6D6] hover:text-[#43D6D6] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/aspramed/?hl=en"
                                target="_blank"
                                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#43D6D6] hover:text-[#43D6D6] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://x.com/aspramed"
                                target="_blank"
                                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#43D6D6] hover:text-[#43D6D6] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/lakmed"
                                target="_blank"
                                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:border-[#43D6D6] hover:text-[#43D6D6] transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Divider + Column 2 - Quick Links */}
                    <div className="px-6 py-4 lg:border-l lg:border-white/20 lg:pl-8">
                        <h3 className="text-lg font-bold mb-6">
                            Quick Links
                        </h3>
                        <nav className="space-y-4">
                            <Link
                                href="/about-us"
                                className="block text-white/70 hover:text-[#43D6D6] transition-colors text-sm">
                                About Us
                            </Link>
                            <Link
                                href="/for-patients"
                                className="block text-white/70 hover:text-[#43D6D6] transition-colors text-sm">
                                Patients
                            </Link>
                            <Link
                                href="/for-businesses"
                                className="block text-white/70 hover:text-[#43D6D6] transition-colors text-sm">
                                Businesses
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-white/70 hover:text-[#43D6D6] transition-colors text-sm">
                                Contact Us
                            </Link>
                        </nav>
                    </div>

                    {/* Divider + Column 3 - Contact Info */}
                    <div className="px-6 py-4 lg:border-l lg:border-white/20 lg:pl-8">
                        <h3 className="text-lg font-bold mb-6">
                            Contact Info
                        </h3>
                        <div className="space-y-5 text-white/70 text-sm">
                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <a
                                    href="mailto:support@Lakmed.com"
                                    className="hover:text-[#43D6D6] transition-colors">
                                    support@Lakmed.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span>+2348164554447 +61450119239</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span>1, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                <span>25, Awolowo Avenue, Bodija, Ibadan, Oyo State, Nigeria</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider + Column 4 - Legal */}
                    <div className="px-6 py-4 lg:border-l lg:border-white/20 lg:pl-8">
                        <h3 className="text-lg font-bold mb-6">
                            Legal
                        </h3>
                        <nav className="space-y-4">
                            <Link
                                href="/privacy-policy"
                                className="block text-white/70 hover:text-[#43D6D6] transition-colors text-sm">
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="block text-white/70 hover:text-[#43D6D6] transition-colors text-sm">
                                Terms of Service
                            </Link>
                            <Link
                                href="/security"
                                className="block text-white/70 hover:text-[#43D6D6] transition-colors text-sm">
                                Security
                            </Link>
                        </nav>
                    </div>

                </div>

                {/* Bottom Bar - Reduced height */}
                <div className="border-t border-white/20 pt-4 pb-0">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-2">
                        <p>
                            © {new Date().getFullYear()} Lakmed. All rights reserved.
                        </p>
                        <p>
                            © {new Date().getFullYear()} Lakmed Operations Private Limited
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}