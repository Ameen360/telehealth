import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowRight,
    BarChart3,
    Brain,
    Building2,
    Calendar,
    CheckCircle,
    CreditCard,
    Shield,
    Smartphone,
    Star,
    Stethoscope,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-[#181F59]/5 to-[#43D6D6]/10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-6xl font-bold text-[#181F59] leading-tight text-balance">
                                    The Future of Clinic Management is Here
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed text-pretty">
                                    Streamline Operations, Enhance Patient Care.
                                    An all-in-one platform combining patient
                                    management, telehealth, billing, and a
                                    custom-branded app for your clients.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-[#181F59] hover:bg-[#181F59]/90 text-white px-6 py-3 text-lg rounded-lg flex flex-row items-center justify-center transition-colors">
                                    Request a Free Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                className="w-full aspect-auto rounded-2xl shadow-2xl"
                                src="/b1.png"
                                alt="Clinic management dashboard"
                                width={600}
                                height={400}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-4xl font-bold text-[#181F59] text-balance">
                            A Flexible Platform for Every Healthcare Provider
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Card 1 - Private Clinics */}
                        <Card className="border-slate-200 hover:shadow-lg transition-shadow overflow-hidden rounded-2xl p-0">
                            {/* Image Area */}
                            <div className="relative w-full h-48">
                                <Image
                                    src="/biz1.jpg"
                                    alt="Private clinic room"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold text-[#181F59] mb-3">
                                    Private Clinics
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Manage appointments, billing, and patient
                                    records with ease. Perfect for growing
                                    practices.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Card 2 - Multi-site Hospitals */}
                        <Card className="border-slate-200 hover:shadow-lg transition-shadow overflow-hidden rounded-2xl p-0">
                            {/* Image Area */}
                            <div className="relative w-full h-48">
                                <Image
                                    src="/biz2.jpg"
                                    alt="Hospital facility"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold text-[#181F59] mb-3">
                                    Multi-site Hospitals
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Centralize operations, analyze data across
                                    locations, and deploy a unified patient
                                    experience.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Card 3 - Specialist Practices */}
                        <Card className="border-slate-200 hover:shadow-lg transition-shadow overflow-hidden rounded-2xl p-0">
                            {/* Image Area */}
                            <div className="relative w-full h-48">
                                <Image
                                    src="/biz3.png"
                                    alt="Specialist doctor"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <CardContent className="p-8 text-center">
                                <h3 className="text-xl font-bold text-[#181F59] mb-3">
                                    Specialist Practices
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Customizable workflows for therapists,
                                    specialists, and labs with tailored
                                    features.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Core Platform Features */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-6 mb-20">
                        <h2 className="text-4xl font-bold text-[#181F59] text-balance">
                            Everything You Need in One Powerful Dashboard
                        </h2>
                    </div>

                    <div className="space-y-24">
                        {/* Feature 1 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-[#181F59]/10 rounded-lg flex items-center justify-center">
                                        <BarChart3 className="h-6 w-6 text-[#181F59]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#181F59]">
                                        Your Central Command Center
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Effortlessly manage patient records, staff
                                    schedules, appointments, and inventory for
                                    your pharmacy and labs. Reduce
                                    administrative overhead and focus on what
                                    matters most—your patients.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Complete patient record management
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Staff scheduling and resource
                                            allocation
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Inventory management for pharmacy & labs
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-[#181F59]">
                                            Patient Management
                                        </h4>
                                        <Calendar className="h-5 w-5 text-[#43D6D6]" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-[#181F59] rounded-full"></div>
                                                <div>
                                                    <div className="font-medium text-slate-900">
                                                        Sarah Johnson
                                                    </div>
                                                    <div className="text-sm text-slate-500">
                                                        Cardiology - 2:30 PM
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-[#43D6D6] text-sm font-medium">
                                                Confirmed
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-[#43D6D6] rounded-full"></div>
                                                <div>
                                                    <div className="font-medium text-slate-900">
                                                        Michael Chen
                                                    </div>
                                                    <div className="text-sm text-slate-500">
                                                        General - 3:00 PM
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-yellow-600 text-sm font-medium">
                                                Waiting
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="lg:order-2 space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-[#43D6D6]/20 rounded-lg flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-[#43D6D6]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#181F59]">
                                        Integrated Telehealth
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Provide secure, high-quality video and audio
                                    consultations directly from the platform.
                                    Our integrated solution means no more
                                    juggling third-party apps. Your doctors can
                                    consult from anywhere using our dedicated
                                    web portal or doctor app.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            HD video and crystal-clear audio
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            End-to-end encryption for security
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Cross-platform compatibility
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:order-1 bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-[#181F59]">
                                            Video Consultation
                                        </h4>
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-[#43D6D6] rounded-full animate-pulse"></div>
                                            <span className="text-sm text-[#43D6D6]">
                                                Live
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-[#181F59] rounded-lg aspect-video flex items-center justify-center">
                                        <div className="text-center space-y-2">
                                            <div className="w-16 h-16 bg-[#43D6D6] rounded-full mx-auto flex items-center justify-center">
                                                <Users className="h-8 w-8 text-[#181F59]" />
                                            </div>
                                            <div className="text-white text-sm">
                                                Dr. Smith & Patient
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-[#181F59]/10 rounded-lg flex items-center justify-center">
                                        <CreditCard className="h-6 w-6 text-[#181F59]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#181F59]">
                                        Billing, Payments & Insurance
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Generate invoices, manage co-pays, process
                                    payments, and handle insurance claims
                                    seamlessly. Offer coupons and flexible
                                    billing options to improve the patient
                                    financial experience.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Automated invoice generation
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Insurance claim processing
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Flexible payment options
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-[#181F59]">
                                            Financial Overview
                                        </h4>
                                        <CreditCard className="h-5 w-5 text-[#43D6D6]" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#43D6D6]/10 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-[#43D6D6]">
                                                $24.8k
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                This Month
                                            </div>
                                        </div>
                                        <div className="bg-[#181F59]/10 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-[#181F59]">
                                                156
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                Invoices Sent
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">
                                                Payment Success Rate
                                            </span>
                                            <span className="text-[#181F59] font-medium">
                                                94%
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className="bg-[#43D6D6] h-2 rounded-full"
                                                style={{ width: "94%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="lg:order-2 space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-[#43D6D6]/20 rounded-lg flex items-center justify-center">
                                        <Smartphone className="h-6 w-6 text-[#43D6D6]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#181F59]">
                                        White-Label Patient App
                                    </h3>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Elevate your brand with a custom mobile app
                                    for your patients. Published on the Apple
                                    App Store and Google Play Store with your
                                    logo and branding, allowing your patients to
                                    book appointments and interact directly with
                                    your clinic.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Custom branding and logo
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            App Store & Play Store publishing
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-[#43D6D6]" />
                                        <span className="text-slate-700">
                                            Direct patient engagement
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:order-1 flex justify-center space-x-8">
                                <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-200 transform rotate-3">
                                    <div className="w-48 h-96 bg-gradient-to-b from-[#181F59] to-[#181F59]/80 rounded-2xl p-6 text-white">
                                        <div className="text-center space-y-4">
                                            <div className="w-12 h-12 bg-white rounded-xl mx-auto flex items-center justify-center">
                                                <span className="text-[#181F59] font-bold">
                                                    CH
                                                </span>
                                            </div>
                                            <h4 className="font-bold">
                                                City Hospital
                                            </h4>
                                            <div className="space-y-3 text-left">
                                                <div className="bg-white/20 rounded-lg p-3">
                                                    <div className="text-sm opacity-90">
                                                        Next Appointment
                                                    </div>
                                                    <div className="font-medium">
                                                        Dr. Johnson - 2:30 PM
                                                    </div>
                                                </div>
                                                <div className="bg-white/20 rounded-lg p-3">
                                                    <div className="text-sm opacity-90">
                                                        Quick Actions
                                                    </div>
                                                    <div className="font-medium">
                                                        Book • Reschedule • Call
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-200 transform -rotate-3">
                                    <div className="w-48 h-96 bg-gradient-to-b from-[#43D6D6] to-[#43D6D6]/80 rounded-2xl p-6 text-[#181F59]">
                                        <div className="text-center space-y-4">
                                            <div className="w-12 h-12 bg-white rounded-xl mx-auto flex items-center justify-center">
                                                <span className="text-[#43D6D6] font-bold">
                                                    L
                                                </span>
                                            </div>
                                            <h4 className="font-bold">
                                                Lakmed
                                            </h4>
                                            <div className="space-y-3 text-left">
                                                <div className="bg-white/30 rounded-lg p-3">
                                                    <div className="text-sm opacity-90">
                                                        Standard App
                                                    </div>
                                                    <div className="font-medium">
                                                        Generic Branding
                                                    </div>
                                                </div>
                                                <div className="bg-white/30 rounded-lg p-3">
                                                    <div className="text-sm opacity-90">
                                                        vs Custom
                                                    </div>
                                                    <div className="font-medium">
                                                        Your Brand Here
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI & Analytics */}
            <section className="py-24 bg-[#181F59] text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#43D6D6] to-[#181F59] rounded-2xl flex items-center justify-center border border-[#43D6D6]/30">
                                <Brain className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold text-balance">
                            Unlock Actionable Insights with AI & Advanced
                            Analytics
                        </h2>
                        <p className="text-xl text-white/70 leading-relaxed text-pretty">
                            Our upcoming MCP server and AI features will
                            transform your data into a strategic asset. Generate
                            deep analytical reports, predict patient trends,
                            optimize resource allocation, and improve patient
                            outcomes. Future-proof your practice with Lakmed.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center space-y-3">
                                <div className="text-3xl font-bold text-[#43D6D6]">
                                    95%
                                </div>
                                <div className="text-white/70">
                                    Prediction Accuracy
                                </div>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="text-3xl font-bold text-[#43D6D6]">
                                    40%
                                </div>
                                <div className="text-white/70">
                                    Efficiency Increase
                                </div>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="text-3xl font-bold text-[#43D6D6]">
                                    24/7
                                </div>
                                <div className="text-white/70">
                                    AI Monitoring
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-4xl font-bold text-[#181F59] text-balance">
                            Trusted by Growing Practices Across Africa
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-slate-200">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 fill-[#43D6D6] text-[#43D6D6]"
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-slate-700 leading-relaxed">
                                    &quot;Lakmed has revolutionized how we manage
                                    our multi-location practice. The centralized
                                    dashboard gives us insights we never had
                                    before.&quot;
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#181F59] rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            CM
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#181F59]">
                                            Dr. Chanda Mwila
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Clinic Director, Lusaka Medical
                                            Center
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 fill-[#43D6D6] text-[#43D6D6]"
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-slate-700 leading-relaxed">
                                    &quot;The telehealth integration is seamless. Our
                                    patients love the convenience, and we&apos;ve
                                    seen a 40% increase in consultation
                                    bookings.&quot;
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#43D6D6] rounded-full flex items-center justify-center">
                                        <span className="text-[#181F59] font-medium">
                                            AO
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#181F59]">
                                            Dr. Adaora Okafor
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Medical Director, Lagos Health Hub
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 fill-[#43D6D6] text-[#43D6D6]"
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-slate-700 leading-relaxed">
                                    &quot;The custom-branded app has elevated our
                                    practice&apos;s professional image. Patients feel
                                    more connected to our brand than ever.&quot;
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#181F59] rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            JM
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-[#181F59]">
                                            Dr. Joseph Mulenga
                                        </div>
                                        <div className="text-sm text-slate-600">
                                            Founder, Ndola Specialist Clinic
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Lead Generation Form */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-[#181F59] text-balance">
                                See Lakmed in Action
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Let us show you how our platform can be
                                customized to meet your exact needs. Schedule a
                                free, no-obligation demo with one of our
                                specialists today.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-[#43D6D6]" />
                                    <span className="text-lg text-slate-700">
                                        A personalized walkthrough of the
                                        platform
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-[#43D6D6]" />
                                    <span className="text-lg text-slate-700">
                                        Answering your specific questions
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-[#43D6D6]" />
                                    <span className="text-lg text-slate-700">
                                        A discussion about custom branding and
                                        features
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <Card className="border-slate-200 shadow-xl rounded-2xl overflow-hidden">
                            <CardContent className="p-0">
                                {/* Header */}
                                <div className="bg-[#181F59] p-6 text-center">
                                    <h3 className="text-2xl font-bold text-white">
                                        Schedule Your Free Demo
                                    </h3>
                                    <p className="text-white/70 text-sm mt-1">
                                        Fill out the form below and we'll get back to you within 24 hours
                                    </p>
                                </div>

                                {/* Form */}
                                <div className="p-8">
                                    <form className="space-y-5">
                                        {/* Name & Email Row */}
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName" className="text-sm font-medium text-[#181F59]">
                                                    Full Name <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="fullName"
                                                    placeholder="Dr. John Smith"
                                                    className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="text-sm font-medium text-[#181F59]">
                                                    Work Email <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@clinic.com"
                                                    className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone & Country Row */}
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone" className="text-sm font-medium text-[#181F59]">
                                                    Phone Number <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+234 801 234 5678"
                                                    className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="country" className="text-sm font-medium text-[#181F59]">
                                                    Country <span className="text-red-500">*</span>
                                                </Label>
                                                <Select>
                                                    <SelectTrigger className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]">
                                                        <SelectValue placeholder="Select your country" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="nigeria">Nigeria</SelectItem>
                                                        <SelectItem value="ghana">Ghana</SelectItem>
                                                        <SelectItem value="kenya">Kenya</SelectItem>
                                                        <SelectItem value="south-africa">South Africa</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        {/* Clinic Name - Full Width */}
                                        <div className="space-y-2">
                                            <Label htmlFor="clinicName" className="text-sm font-medium text-[#181F59]">
                                                Clinic / Hospital Name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="clinicName"
                                                placeholder="City Medical Center"
                                                className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]"
                                            />
                                        </div>

                                        {/* Clinic Size */}
                                        <div className="space-y-2">
                                            <Label className="text-sm font-medium text-[#181F59]">
                                                Clinic Size (Number of Staff)
                                            </Label>
                                            <div className="flex flex-wrap gap-3">
                                                {['1-5', '6-20', '21-50', '50+'].map((size) => (
                                                    <label key={size} className="cursor-pointer">
                                                        <input type="radio" name="clinicSize" value={size} className="peer sr-only" />
                                                        <span className="inline-block px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 peer-checked:bg-[#181F59] peer-checked:text-white peer-checked:border-[#181F59] transition-colors hover:border-[#43D6D6]">
                                                            {size}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-sm font-medium text-[#181F59]">
                                                Tell us about your needs <span className="text-slate-400 font-normal">(optional)</span>
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="We're looking for a solution to manage our 3 locations..."
                                                rows={4}
                                                className="rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6] resize-none"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <Button className="w-full bg-[#181F59] hover:bg-[#181F59]/90 text-white h-12 rounded-lg font-semibold text-base transition-colors">
                                            Submit Request
                                        </Button>

                                        {/* Privacy Note */}
                                        <p className="text-xs text-slate-500 text-center leading-relaxed">
                                            We respect your privacy. By submitting this form, you agree to our{' '}
                                            <Link href="/privacy-policy" className="text-[#43D6D6] hover:underline font-medium">
                                                Privacy Policy
                                            </Link>{' '}
                                            and{' '}
                                            <Link href="/terms-of-service" className="text-[#43D6D6] hover:underline font-medium">
                                                Terms of Service
                                            </Link>.
                                        </p>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
