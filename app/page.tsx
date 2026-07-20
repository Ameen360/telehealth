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
            {/* Hero Section with Background Image */}
            <section className="relative py-24 lg:py-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/landing page 1.png"  // Place your image in /public folder
                        alt="Healthcare background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Content - add relative and z-index */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                        Simple, Secure Telehealth for Patients and Providers
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-balance">
                        Consult doctors online, manage your health records, and
                        power your clinic operations—on one trusted platform.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/patients">
                            <Button
                                size="lg"
                                className="bg-[#43D6D6] hover:bg-[#43D6D6]/90 text-[#181F59] font-semibold rounded-lg px-8">
                                I’m a Patient
                            </Button>
                        </Link>
                        <Link href="/businesses">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white bg-transparent hover:bg-white/10 rounded-lg px-8">
                                I’m a Business
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="py-10 bg-white border-y border-slate-200/60">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto items-stretch">

                        {/* Item 1 - Convenient Access: White box with navy border */}
                        <div className="flex items-center justify-center gap-3 px-6 py-5 rounded-xl border-2 border-[#181F59] bg-white">
                            <Calendar className="h-5 w-5 text-[#181F59] shrink-0" />
                            <span className="text-[#181F59] font-medium text-sm whitespace-nowrap">
                                Convenient Access
                            </span>
                        </div>

                        {/* Item 2 - Secure & Private: Navy solid background */}
                        <div className="flex items-center justify-center gap-3 px-6 py-5 rounded-xl bg-[#181F59]">
                            <Shield className="h-5 w-5 text-white shrink-0" />
                            <span className="text-white font-medium text-sm whitespace-nowrap">
                                Secure & Private
                            </span>
                        </div>

                        {/* Item 3 - Licensed Professionals: Cyan solid background */}
                        <div className="flex items-center justify-center gap-3 px-6 py-5 rounded-xl bg-[#43D6D6]">
                            <Heart className="h-5 w-5 text-[#181F59] shrink-0" />
                            <span className="text-[#181F59] font-medium text-sm whitespace-nowrap">
                                Licensed Professionals
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Two Audiences */}
            <section className="py-16 pb-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        {/* For Patients Card */}
                        <Card className="text-left bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl p-0">
                            {/* Image Area - touches top border */}
                            <div className="relative w-full h-64">
                                <Image
                                    src="/rectangle 12.png"
                                    alt="Patient using telehealth"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                {/* Gradient overlay at bottom of image for smooth transition */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                            </div>
                            <CardContent className="p-6 pt-0 relative">
                                {/* Icon - Overlapping the image */}
                                <div className="w-14 h-14 rounded-full bg-[#181F59] flex items-center justify-center -mt-7 mb-3 shadow-lg border-4 border-white">
                                    <Video className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#181F59] mb-3">
                                    For Patients
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Book video visits, access your medical
                                    records, and get care from trusted
                                    doctors—anytime, anywhere.
                                </p>
                                <Link href="/patients">
                                    <Button className="bg-[#181F59] hover:bg-[#181F59]/90 text-white rounded-lg px-6">
                                        Get Care
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* For Businesses Card */}
                        <Card className="text-left bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl p-0">
                            {/* Image Area - touches top border */}
                            <div className="relative w-full h-64">
                                <Image
                                    src="/patient3.png"
                                    alt="Patient using telehealth"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                {/* Gradient overlay at bottom of image for smooth transition */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                            </div>
                            <CardContent className="p-6 pt-0 relative">
                                {/* Icon - Overlapping the image */}
                                <div className="w-14 h-14 rounded-full bg-[#43D6D6] flex items-center justify-center -mt-7 mb-3 shadow-lg border-4 border-white">
                                    <Users className="w-7 h-7 text-[#181F59]" />
                                </div>
                                <h2 className="text-2xl font-bold text-[#181F59] mb-3">
                                    For Businesses
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Digitize your clinic with appointments, EHR,
                                    billing, and analytics—plus white‑label apps
                                    for scale.
                                </p>
                                <Link href="/businesses">
                                    <Button
                                        variant="outline"
                                        className="border-[#181F59] text-[#181F59] hover:bg-[#181F59] hover:text-white rounded-lg px-6 transition-colors duration-300">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-[#181F59] mb-4">
                            What You Can Do with Lakmed
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Powerful, easy-to-use tools for individuals and
                            healthcare organizations.
                        </p>
                    </div>

                    {/* Main Grid: Image Left | Content Right */}
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">

                        {/* Left Side - Doctor Image */}
                        <div className="relative w-full h-[500px] lg:h-[600px]">
                            <Image
                                src="/LAKMED 2.png"
                                alt="Doctor on phone"
                                fill
                                className="object-contain object-center"
                            />
                        </div>

                        {/* Right Side - Features */}
                        <div className="flex flex-col gap-6">

                            {/* Highlighted Card - Video Visits */}
                            <Card className="p-8 bg-[#181F59] border-0 shadow-lg rounded-2xl">
                                <CardContent className="p-0">
                                    <div className="w-14 h-14 rounded-full bg-[#43D6D6] flex items-center justify-center mb-6">
                                        <Video className="w-6 h-6 text-[#181F59]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        Video Visits
                                    </h3>
                                    <p className="text-white/80 leading-relaxed">
                                        Insights that help clinics improve operations and care.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Feature List Items */}
                            <div className="flex items-start gap-4 p-4">
                                <div className="w-12 h-12 rounded-full bg-[#43D6D6]/20 flex items-center justify-center shrink-0">
                                    <Calendar className="w-5 h-5 text-[#43D6D6]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#181F59] mb-1">
                                        Easy Booking
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Find specialists and schedule in just a few taps.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4">
                                <div className="w-12 h-12 rounded-full bg-[#181F59] flex items-center justify-center shrink-0">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#181F59] mb-1">
                                        Records & Prescriptions
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Secure access to notes, results, and prescriptions.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4">
                                <div className="w-12 h-12 rounded-full bg-[#181F59] flex items-center justify-center shrink-0">
                                    <BarChart3 className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#181F59] mb-1">
                                        AI & Analytics
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        Insights that help clinics improve operations and care.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#181F59] mb-6">
                            Global Standards, Local Care
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Built for Nigeria and Africa, delivering world-class services tailored to the unique needs of local communities and organizations.
                        </p>
                    </div>

                    {/* Main Grid: Map Image Left | Content Card Right */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">

                        {/* Left Side - Map Image */}
                        <div className="relative w-full h-[500px] lg:h-[520px]">
                            <Image
                                src="/glober_2.png"
                                alt="Healthcare network across Africa"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain object-center"
                            />
                        </div>

                        {/* Right Side - Navy Card with Image */}
                        <Card className="bg-[#181F59] border-0 rounded-2xl overflow-hidden h-[500px] lg:h-[520px] flex flex-col">
                            <CardContent className="p-0 flex flex-col h-full">
                                {/* Text Header - tight padding */}
                                <div className="p-4 pb-2">
                                    <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                                        Convenient and Secured Healthcare services provided across nation.
                                    </h3>
                                </div>

                                {/* Image Area - fills remaining space */}
                                <div className="relative flex-1 m-5 mt-0">
                                    <Image
                                        src="/glober.jpg"
                                        alt="Video consultation"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover rounded-xl"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-[#181F59] to-[#43D6D6] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg mb-10 max-w-2xl mx-auto text-white/90">
                        Download the app or request a demo and see how Lakmed
                        can support your health or your practice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                        {/* App Store Button */}
                        <Link
                            href="https://apps.apple.com/us/app/aspramed/id1603689060"
                            target="_blank"
                            className="bg-black hover:bg-black/80 text-white flex items-center gap-3 rounded-xl px-5 py-3 transition-colors">
                            <Image
                                src="/applei.png"
                                alt="App Store"
                                width={120}
                                height={40}
                                style={{ width: 'auto', height: '40px' }}
                            />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-xs text-white/80">
                                    Download on the
                                </span>
                                <span className="text-lg font-semibold">
                                    App Store
                                </span>
                            </div>
                        </Link>

                        {/* Google Play Button */}
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.aspramed.userapp"
                            target="_blank"
                            className="bg-black hover:bg-black/80 text-white flex items-center gap-3 rounded-xl px-5 py-3 transition-colors">
                            <Image
                                src="/andriod.png"
                                alt="Google Play"
                                width={52}
                                height={32}
                                className="w-8 h-8 object-contain"
                            />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-xs text-white/80">
                                    GET IT ON
                                </span>
                                <span className="text-lg font-semibold">
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
