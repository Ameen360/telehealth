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
import { Briefcase, Headphones, Mail, MapPin, Newspaper, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Image */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#181F59]/5 to-[#43D6D6]/10"></div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Left - Text Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#181F59] mb-6 text-balance leading-tight">
                                We're Here to Help
                            </h1>
                            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                                Whether you're a patient with a question or a business
                                interested in our platform, find the right way to
                                connect with us below.
                            </p>
                        </div>
                        
                        {/* Right - Image */}
                        <div className="relative h-[300px] lg:h-[400px]">
                            <Image
                                src="/contact1.png"
                                alt="Lakmed support team"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Segmentation */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#181F59] mb-16">
                        How Can We Help You Today?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Patient Support Card */}
                        <Card className="border border-slate-200 hover:border-[#43D6D6] hover:shadow-lg transition-all duration-300 rounded-2xl">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-[#181F59]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Headphones className="w-8 h-8 text-[#181F59]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#181F59] mb-4">
                                    For Patients & App Users
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Have a question about the Lakmed app, your
                                    account, or a recent consultation? Visit our
                                    help center or get in touch with our support
                                    team.
                                </p>
                                <div className="space-y-4">
                                    <Button
                                        variant="outline"
                                        className="w-full border-[#181F59] text-[#181F59] hover:bg-[#181F59] hover:text-white transition-colors rounded-lg">
                                        Visit our FAQ
                                    </Button>
                                    <div className="space-y-2 pt-2">
                                        <div className="flex items-center justify-center gap-2 text-[#43D6D6]">
                                            <Mail className="w-4 h-4" />
                                            <a
                                                href="mailto:support@lakmed.com"
                                                className="hover:underline font-medium">
                                                info@lakmed.com.ng
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-[#43D6D6]">
                                            <Phone className="w-4 h-4" />
                                            <span className="font-medium">+234 816 455 4447</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 italic pt-2">
                                        For the fastest response, please use the
                                        support feature within the Lakmed app.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Business Inquiries Card */}
                        <Card className="border border-slate-200 hover:border-[#43D6D6] hover:shadow-lg transition-all duration-300 rounded-2xl">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-[#43D6D6]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Briefcase className="w-8 h-8 text-[#43D6D6]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#181F59] mb-4">
                                    For Clinics & Hospitals
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Interested in learning how our clinic
                                    management platform can transform your
                                    practice? Schedule a demo with our sales
                                    team.
                                </p>
                                <div className="space-y-4">
                                    <Button className="w-full bg-[#181F59] hover:bg-[#181F59]/90 text-white rounded-lg transition-colors">
                                        Request a Free Demo
                                    </Button>
                                    <div className="space-y-2 pt-2">
                                        <div className="flex items-center justify-center gap-2 text-[#43D6D6]">
                                            <Mail className="w-4 h-4" />
                                            <a
                                                href="mailto:support@lakmed.com"
                                                className="hover:underline font-medium">
                                                info@lakmed.com.ng
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-[#43D6D6]">
                                            <Phone className="w-4 h-4" />
                                            <span className="font-medium">+234 816 455 4447</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* General Inquiries Card */}
                        <Card className="border border-slate-200 hover:border-[#43D6D6] hover:shadow-lg transition-all duration-300 rounded-2xl">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-[#181F59]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Newspaper className="w-8 h-8 text-[#181F59]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#181F59] mb-4">
                                    For Partnerships & Media
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    For partnership opportunities, media
                                    inquiries, or other general questions,
                                    please reach out to our corporate office.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-[#43D6D6] pt-4">
                                        <Mail className="w-4 h-4" />
                                        <a
                                            href="mailto:tommy@lakmed.com"
                                            className="hover:underline font-medium">
                                            info@lakmed.com.ng
                                        </a>
                                    </div>
                                    <div className="flex items-start justify-center gap-2 text-slate-500 text-sm pt-4">
                                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                        <span>1, Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* General Contact Form */}
            <section className="py-24 px-4 bg-slate-50">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#181F59] mb-8">
                        Send Us a Message
                    </h3>

                    <Card className="border-slate-200 shadow-xl rounded-2xl overflow-hidden">
                        {/* Form Header */}
                        <div className="bg-[#181F59] p-6 text-center">
                            <p className="text-white/80 text-sm">
                                We'll get back to you within 24 hours
                            </p>
                        </div>
                        
                        <CardContent className="p-8">
                            <div className="space-y-6">
                                <form className="space-y-5">
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
                                                Email <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@clinic.com"
                                                className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-sm font-medium text-[#181F59]">
                                                Phone Number
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
                                                Country
                                            </Label>
                                            <Select>
                                                <SelectTrigger className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]">
                                                    <SelectValue placeholder="Select country" />
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
                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-sm font-medium text-[#181F59]">
                                            Subject <span className="text-red-500">*</span>
                                        </Label>
                                        <Select>
                                            <SelectTrigger className="h-12 rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6]">
                                                <SelectValue placeholder="Select inquiry type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="general">General Inquiry</SelectItem>
                                                <SelectItem value="support">Patient Support</SelectItem>
                                                <SelectItem value="demo">Business Demo</SelectItem>
                                                <SelectItem value="partnership">Partnership</SelectItem>
                                                <SelectItem value="media">Media Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-sm font-medium text-[#181F59]">
                                            Message <span className="text-red-500">*</span>
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder="How can we help you today?"
                                            rows={5}
                                            className="rounded-lg border-slate-200 focus:border-[#43D6D6] focus:ring-[#43D6D6] resize-none"
                                        />
                                    </div>
                                    <Button className="w-full bg-[#181F59] hover:bg-[#181F59]/90 text-white h-12 rounded-lg font-semibold text-base transition-colors">
                                        Send Message
                                    </Button>
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
            </section>
        </div>
    );
}