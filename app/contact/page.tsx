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
import { Briefcase, Headphones, Mail, Newspaper, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                        We&apos;re Here to Help
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                        Whether you&apos;re a patient with a question or a business
                        interested in our platform, find the right way to
                        connect with us below.
                    </p>
                </div>
            </section>

            {/* Inquiry Segmentation */}
            <section className="py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                        How Can We Help You Today?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Patient Support Card */}
                        <Card className="border-2 hover:border-blue-200 transition-colors">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Headphones className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    For Patients & App Users
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Have a question about the Aspramed app, your
                                    account, or a recent consultation? Visit our
                                    help center or get in touch with our support
                                    team.
                                </p>
                                <div className="space-y-4">
                                    <Button
                                        variant="outline"
                                        className="w-full bg-transparent">
                                        Visit our FAQ
                                    </Button>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center gap-2 text-blue-600">
                                            <Mail className="w-4 h-4" />
                                            <a
                                                href="mailto:support@aspramed.com"
                                                className="hover:underline">
                                                support@aspramed.com
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-blue-600">
                                            <Phone className="w-4 h-4" />
                                            <span>+260 979991744</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">
                                        For the fastest response, please use the
                                        support feature within the Aspramed app.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Business Inquiries Card */}
                        <Card className="border-2 hover:border-green-200 transition-colors">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Briefcase className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    For Clinics & Hospitals
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Interested in learning how our clinic
                                    management platform can transform your
                                    practice? Schedule a demo with our sales
                                    team.
                                </p>
                                <div className="space-y-4">
                                    <Button className="w-full bg-green-600 hover:bg-green-700">
                                        Request a Free Demo
                                    </Button>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-center gap-2 text-green-600">
                                            <Mail className="w-4 h-4" />
                                            <a
                                                href="mailto:support@aspramed.com"
                                                className="hover:underline">
                                                support@aspramed.com
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-green-600">
                                            <Phone className="w-4 h-4" />
                                            <span>+260 979991744</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* General Inquiries Card */}
                        <Card className="border-2 hover:border-gray-200 transition-colors">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Newspaper className="w-8 h-8 text-gray-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    For Partnerships & Media
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    For partnership opportunities, media
                                    inquiries, or other general questions,
                                    please reach out to our corporate office.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-2 text-gray-600">
                                        <Mail className="w-4 h-4" />
                                        <a
                                            href="mailto:tommy@aspramed.com"
                                            className="hover:underline">
                                            tommy@aspramed.com
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* General Contact Form */}
            <section className="py-24 px-4">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
                        Send Us a Message
                    </h3>

                    <Card className="border-slate-200 shadow-xl">
                        <CardContent className="p-8">
                            <div className="space-y-6">
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
                                            Tell us about your needs (optional)
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
            </section>
        </div>
    );
}
