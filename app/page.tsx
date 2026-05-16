"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Apple,
    BarChart3,
    Calendar,
    FileText,
    Globe,
    Heart,
    Play,
    Shield,
    Users,
    Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
                        Simple, Secure Telehealth for Patients and Providers
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto text-balance">
                        Consult doctors online, manage your health records, and
                        power your clinic operations—on one trusted platform.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/patients">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-white">
                                I’m a Patient
                            </Button>
                        </Link>
                        <Link href="/businesses">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary text-primary bg-transparent">
                                I’m a Business
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-3 p-4">
                            <Shield className="h-6 w-6 text-blue-600 flex-shrink-0" />
                            <span className="font-medium text-slate-900">
                                Secure & Private
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4">
                            <Heart className="h-6 w-6 text-green-600 flex-shrink-0" />
                            <span className="font-medium text-slate-900">
                                Licensed Professionals
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4">
                            <Calendar className="h-6 w-6 text-blue-600 flex-shrink-0" />
                            <span className="font-medium text-slate-900">
                                Convenient Access
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Audiences */}
            <section className="py-2 pb-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-8 text-left bg-white border-slate-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                                    <Video className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                                    For Patients
                                </h2>
                                <p className="text-slate-700 mb-6">
                                    Book video visits, access your medical
                                    records, and get care from trusted
                                    doctors—anytime, anywhere.
                                </p>
                                <Link href="/patients">
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                        Get Care
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="p-8 text-left bg-white border-slate-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-6">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                                    For Businesses
                                </h2>
                                <p className="text-slate-700 mb-6">
                                    Digitize your clinic with appointments, EHR,
                                    billing, and analytics—plus white‑label apps
                                    for scale.
                                </p>
                                <Link href="/businesses">
                                    <Button
                                        variant="outline"
                                        className="border-slate-300 text-slate-800 hover:bg-slate-50 bg-transparent">
                                        Explore Solutions
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Feature Highlights */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What You Can Do with Aspramed
                        </h2>
                        <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                            Powerful, easy-to-use tools for individuals and
                            healthcare organizations.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="p-8 bg-white border-0 shadow-sm">
                            <CardContent className="p-0">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                    <Video className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Video Visits
                                </h3>
                                <p className="text-slate-700">
                                    See a doctor online from the comfort of your
                                    home.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-8 bg-white border-0 shadow-sm">
                            <CardContent className="p-0">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Easy Booking
                                </h3>
                                <p className="text-slate-700">
                                    Find specialists and schedule in just a few
                                    taps.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-8 bg-white border-0 shadow-sm">
                            <CardContent className="p-0">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Records & Prescriptions
                                </h3>
                                <p className="text-slate-700">
                                    Secure access to notes, results, and
                                    prescriptions.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-8 bg-white border-0 shadow-sm">
                            <CardContent className="p-0">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-6">
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    AI & Analytics
                                </h3>
                                <p className="text-slate-700">
                                    Insights that help clinics improve
                                    operations and care.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Global Standards, Local Care
                        </h2>
                        <p className="text-lg text-slate-700 mb-12">
                            Registered in Australia with operations in Zambia
                            and Nigeria—bringing world‑class security and
                            localized support.
                        </p>
                        <div className="mx-auto max-w-2xl">
                            <div className="relative w-full h-64 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-green-50"></div>
                                <div className="relative z-10 grid grid-cols-3 gap-16 px-4">
                                    <div className="text-center">
                                        <Heart className="h-10 w-10 text-green-600 mx-auto mb-3" />
                                        <div className="font-semibold text-slate-900">
                                            Zambia
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Service Markets
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Globe className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                                        <div className="font-semibold text-slate-900">
                                            Australia
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Headquarters
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Heart className="h-10 w-10 text-green-600 mx-auto mb-3" />
                                        <div className="font-semibold text-slate-900">
                                            Nigeria
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Service Markets
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Strip */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12">
                        Trusted by Healthcare Leaders
                    </h2>
                    <div className="grid grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
                        <Link
                            href="https://adullam.health.blog/"
                            className="rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center h-32 space-y-4">
                            <Image
                                src="/adullam.png"
                                height={80}
                                width={80}
                                alt="Adullam Logo"
                            />
                            <span className="text-primary text-sm">
                                Adullam Therapy
                            </span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/mindspace-wellness-solutions-limited/"
                            className="rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center h-32 space-y-4">
                            <Image
                                src="/mindspace.png"
                                height={80}
                                width={80}
                                alt="Mindspace Logo"
                            />
                            <span className="text-primary text-sm">
                                MindSpace Wellness
                            </span>
                        </Link>
                        <Link
                            href="https://www.facebook.com/p/Reveal-To-Heal-100082993051597/"
                            className="rounded-lg border border-slate-200 bg-white flex flex-col items-center justify-center h-32 space-y-4">
                            <Image
                                src="/reveal.png"
                                height={80}
                                width={80}
                                alt="Reveal to Heal Logo"
                            />
                            <span className="text-primary text-sm">
                                Reveal to Heal
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Download the app or request a demo and see how Aspramed
                        can support your health or your practice.
                    </p>
                    <div className="flex flex-row gap-6 justify-center">
                        <Link
                            href="https://apps.apple.com/us/app/aspramed/id1603689060"
                            target="_blank"
                            className="bg-background text-primary border-primary border-1 flex flex-row   items-center cursor-pointer rounded-md px-4 py-2 space-x-2">
                            <Apple className="w-4 h-4" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs">
                                    {" "}
                                    Download on the{" "}
                                </span>
                                <span className="text-sm font-semibold">
                                    App Store
                                </span>
                            </div>
                        </Link>

                        <Link
                            href="https://play.google.com/store/apps/details?id=com.aspramed.userapp"
                            target="_blank"
                            className="bg-background text-secondary flex flex-row border-secondary  border-1 items-center cursor-pointer rounded-md px-4 py-2 space-x-2">
                            <Play className="w-4 h-4" />
                            <div className="flex flex-col items-start">
                                <span className="text-xs">
                                    {" "}
                                    Download on the{" "}
                                </span>
                                <span className="text-sm font-semibold">
                                    Google Play
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
