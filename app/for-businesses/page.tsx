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
            <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
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
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-lg rounded-md flex flex-row items-center justify-center">
                                    Request a Free Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                className="w-full aspect-auto rounded-2xl shadow-2xl"
                                src="/b1.png"
                                alt="Mother and child using telehealth app"
                                width={10000}
                                height={10000}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 text-balance">
                            A Flexible Platform for Every Healthcare Provider
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                    <Building2 className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Private Clinics
                                </h3>
                                <p className="text-slate-600">
                                    Manage appointments, billing, and patient
                                    records with ease. Perfect for growing
                                    practices.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <Users className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Multi-site Hospitals
                                </h3>
                                <p className="text-slate-600">
                                    Centralize operations, analyze data across
                                    locations, and deploy a unified patient
                                    experience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                                    <Stethoscope className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    Specialist Practices
                                </h3>
                                <p className="text-slate-600">
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
                        <h2 className="text-4xl font-bold text-slate-900 text-balance">
                            Everything You Need in One Powerful Dashboard
                        </h2>
                    </div>

                    <div className="space-y-24">
                        {/* Feature 1 */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <BarChart3 className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
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
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Complete patient record management
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Staff scheduling and resource
                                            allocation
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Inventory management for pharmacy &
                                            labs
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-slate-900">
                                            Patient Management
                                        </h4>
                                        <Calendar className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                                                <div>
                                                    <div className="font-medium text-slate-900">
                                                        Sarah Johnson
                                                    </div>
                                                    <div className="text-sm text-slate-500">
                                                        Cardiology - 2:30 PM
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-green-600 text-sm font-medium">
                                                Confirmed
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
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
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
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
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            HD video and crystal-clear audio
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            End-to-end encryption for security
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Cross-platform compatibility
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:order-1 bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-slate-900">
                                            Video Consultation
                                        </h4>
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-sm text-green-600">
                                                Live
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-slate-900 rounded-lg aspect-video flex items-center justify-center">
                                        <div className="text-center space-y-2">
                                            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto flex items-center justify-center">
                                                <Users className="h-8 w-8 text-white" />
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
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <CreditCard className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
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
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Automated invoice generation
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Insurance claim processing
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Flexible payment options
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold text-slate-900">
                                            Financial Overview
                                        </h4>
                                        <CreditCard className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-green-600">
                                                $24.8k
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                This Month
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600">
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
                                            <span className="text-slate-900 font-medium">
                                                94%
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2">
                                            <div
                                                className="bg-green-500 h-2 rounded-full"
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
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                        <Smartphone className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">
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
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Custom branding and logo
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            App Store & Play Store publishing
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span className="text-slate-700">
                                            Direct patient engagement
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:order-1 flex justify-center space-x-8">
                                <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-200 transform rotate-3">
                                    <div className="w-48 h-96 bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                                        <div className="text-center space-y-4">
                                            <div className="w-12 h-12 bg-white rounded-xl mx-auto flex items-center justify-center">
                                                <span className="text-blue-600 font-bold">
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
                                    <div className="w-48 h-96 bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-6 text-white">
                                        <div className="text-center space-y-4">
                                            <div className="w-12 h-12 bg-white rounded-xl mx-auto flex items-center justify-center">
                                                <span className="text-slate-800 font-bold">
                                                    A
                                                </span>
                                            </div>
                                            <h4 className="font-bold">
                                                Aspramed
                                            </h4>
                                            <div className="space-y-3 text-left">
                                                <div className="bg-white/20 rounded-lg p-3">
                                                    <div className="text-sm opacity-90">
                                                        Standard App
                                                    </div>
                                                    <div className="font-medium">
                                                        Generic Branding
                                                    </div>
                                                </div>
                                                <div className="bg-white/20 rounded-lg p-3">
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
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center space-y-8 max-w-4xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                                <Brain className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold text-balance">
                            Unlock Actionable Insights with AI & Advanced
                            Analytics
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed text-pretty">
                            Our upcoming MCP server and AI features will
                            transform your data into a strategic asset. Generate
                            deep analytical reports, predict patient trends,
                            optimize resource allocation, and improve patient
                            outcomes. Future-proof your practice with Aspramed.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center space-y-3">
                                <div className="text-3xl font-bold text-blue-400">
                                    95%
                                </div>
                                <div className="text-slate-300">
                                    Prediction Accuracy
                                </div>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="text-3xl font-bold text-green-400">
                                    40%
                                </div>
                                <div className="text-slate-300">
                                    Efficiency Increase
                                </div>
                            </div>
                            <div className="text-center space-y-3">
                                <div className="text-3xl font-bold text-purple-400">
                                    24/7
                                </div>
                                <div className="text-slate-300">
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
                        <h2 className="text-4xl font-bold text-slate-900 text-balance">
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
                                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-slate-700 leading-relaxed">
                                    &quot;Aspramed has revolutionized how we manage
                                    our multi-location practice. The centralized
                                    dashboard gives us insights we never had
                                    before.&quot;
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            CM
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
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
                                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
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
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            AO
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
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
                                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <blockquote className="text-slate-700 leading-relaxed">
                                    &quot;The custom-branded app has elevated our
                                    practice&apos;s professional image. Patients feel
                                    more connected to our brand than ever.&quot;
                                </blockquote>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-medium">
                                            JM
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">
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
                            <h2 className="text-4xl font-bold text-slate-900 text-balance">
                                See Aspramed in Action
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Let us show you how our platform can be
                                customized to meet your exact needs. Schedule a
                                free, no-obligation demo with one of our
                                specialists today.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-lg text-slate-700">
                                        A personalized walkthrough of the
                                        platform
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-lg text-slate-700">
                                        Answering your specific questions
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                    <span className="text-lg text-slate-700">
                                        A discussion about custom branding and
                                        features
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <Card className="border-slate-200 shadow-xl">
                            <CardContent className="p-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-slate-900 text-center">
                                        Schedule Your Free Demo
                                    </h3>
                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName">
                                                    Full Name
                                                </Label>
                                                <Input
                                                    id="fullName"
                                                    placeholder="Dr. John Smith"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">
                                                    Work Email
                                                </Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@clinic.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">
                                                    Phone Number
                                                </Label>
                                                <Input
                                                    id="phone"
                                                    placeholder="+260 123 456 789"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="country">
                                                    Country
                                                </Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select country" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="zambia">
                                                            Zambia
                                                        </SelectItem>
                                                        <SelectItem value="nigeria">
                                                            Nigeria
                                                        </SelectItem>
                                                        <SelectItem value="other">
                                                            Other
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="clinicName">
                                                Clinic/Hospital Name
                                            </Label>
                                            <Input
                                                id="clinicName"
                                                placeholder="City Medical Center"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">
                                                Tell us about your needs
                                                (optional)
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="We're looking for a solution to manage our 3 locations..."
                                            />
                                        </div>
                                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                                            Submit Request
                                        </Button>
                                        <p className="text-sm text-slate-500 text-center">
                                            We respect your privacy.{" "}
                                            <Link
                                                href="/privacy-policy"
                                                className="text-blue-600 hover:underline">
                                                Read our policy
                                            </Link>
                                            .
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
