"use client";

import {
    Facebook,
    InstagramIcon,
    Mail,
    MapPin,
    Phone,
    TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-4">
                            Aspramed
                        </h3>
                        <p className="text-white/80 mb-6">
                            Transforming healthcare delivery across Africa with
                            innovative telehealth solutions.
                        </p>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <Link
                                href="https://www.facebook.com/AspramedTelehealth/"
                                target="_blank"
                                className="text-white hover:text-[#53AADD] transition-colors">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/aspramed/?hl=en"
                                target="_blank"
                                className="text-white hover:text-[#53AADD] transition-colors">
                                <InstagramIcon className="h-6 w-6" />
                            </Link>
                            <Link
                                href="https://x.com/aspramed"
                                target="_blank"
                                className="text-white hover:text-[#53AADD] transition-colors">
                                <TwitterIcon className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-4">
                            Quick Links
                        </h3>
                        <nav className="space-y-2">
                            <Link
                                href="/about-us"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                About Us
                            </Link>
                            <Link
                                href="/for-patients"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                Patients
                            </Link>
                            <Link
                                href="/for-businesses"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                Businesses
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                Contact Us
                            </Link>
                            {/* <Link
                                href="/for-professionals"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                Professionals
                            </Link> */}
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-4">
                            Contact Info
                        </h3>
                        <div className="space-y-3 text-white/80">
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <Mail className="h-5 w-5 flex-shrink-0" />
                                <a
                                    href="mailto:support@aspramed.com"
                                    className="hover:text-white">
                                    support@aspramed.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <Phone className="h-5 w-5 flex-shrink-0" />
                                <span>+260 979991744</span>
                            </div>
                            <div className="flex items-start justify-center md:justify-start space-x-2">
                                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>Perth, Australia</span>
                            </div>
                            <div className="flex items-start justify-center md:justify-start space-x-2">
                                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>Lusaka, Zambia</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-4">
                            Legal
                        </h3>
                        <nav className="space-y-2">
                            <Link
                                href="/privacy-policy"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                Terms of Service
                            </Link>
                            <Link
                                href="/security"
                                className="block text-white/80 hover:text-white hover:underline transition-colors">
                                Security
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="border-t border-white/20 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
                        <p>
                            © {new Date().getFullYear()} Aspramed. All rights
                            reserved.
                        </p>
                        <div className="flex space-x-5 items-center">
                            <Link
                                className="underline"
                                href="https://ds-ops.com"
                                target="_blank">
                                © {new Date().getFullYear()} Decasoft
                                Operations Private Limited
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
