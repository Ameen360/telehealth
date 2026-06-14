import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Linkedin, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <section className="relative py-24 lg:py-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/waiting_Area.png"
                        alt="Healthcare accessibility background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient overlay using your brand colors */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#181F59]/80 to-[#43D6D6]/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                        We Believe Quality Healthcare is a Right, Not a Privilege
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-balance">
                        At Lakmed, we use technology to make healthcare easier to access, helping patients
                        connect with trusted providers whenever and wherever they need care.
                    </p>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                                Building Better Access to Healthcare
                            </h2>
                            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    Our journey began with a commitment to making healthcare more accessible for everyone.
                                    We recognized that many people face challenges such as distance, limited access to
                                    providers, and time constraints when seeking quality care. Driven by a vision to improve
                                    healthcare delivery through technology, Lakmed was created to connect patients with trusted
                                    healthcare professionals, making care more convenient, efficient, and accessible whenever it
                                    is needed.
                                </p>
                                <p>
                                    We established our operations to deliver a world-class telehealth platform designed to meet
                                    the evolving needs of patients, communities, and healthcare providers. Every feature we develop
                                    and every partnership we build is guided by our commitment to expanding access to quality healthcare,
                                    improving patient outcomes, and creating a more connected healthcare experience for all.
                                </p>
                                <p>
                                    As Lakmed continues to grow, our purpose remains unchanged: empowering patients, supporting
                                    healthcare professionals, and making quality healthcare accessible whenever and wherever it is
                                    needed.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/lakmed.png"
                                alt="Healthcare team collaboration representing Aspramed's founding vision"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <Card className="p-12 bg-white shadow-lg border-0">
                            <CardContent className="p-0">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                    Our Mission
                                </h2>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    To transform healthcare access across Nigeria and Sub-Saharan Africa by providing seamless,
                                    secure, and patient-centered telehealth solutions. Our mission is to connect individuals and
                                    communities with quality healthcare services regardless of their location or circumstances,
                                    fostering healthier populations through innovation, accessibility, and continuous care.

                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-12 bg-white shadow-lg border-0">
                            <CardContent className="p-0">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    To create a future where quality healthcare is accessible to everyone, empowering individuals
                                    and communities through innovative, patient-centered digital health solutions.

                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The Principles That Guide Us
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-blue-50">
                            <CardContent className="p-0">
                                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    Accessibility
                                </h3>
                                <p className="text-slate-700">
                                    We are committed to breaking down barriers.
                                    Our platform is designed to be
                                    user-friendly, affordable, and available to
                                    all.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-green-50">
                            <CardContent className="p-0">
                                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    Trust & Integrity
                                </h3>
                                <p className="text-slate-700">
                                    We handle health with the seriousness it
                                    deserves. Security, privacy, and ethical
                                    practices are at the core of everything we
                                    do.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-purple-50">
                            <CardContent className="p-0">
                                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    Patient-Centricity
                                </h3>
                                <p className="text-slate-700">
                                    Our patients and providers are our partners.
                                    We listen to their needs and build solutions
                                    that make a real difference in their lives.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 bg-orange-50">
                            <CardContent className="p-0">
                                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    Innovation
                                </h3>
                                <p className="text-slate-700">
                                    We are constantly evolving, leveraging
                                    technology like AI and data analytics to
                                    build a smarter, more efficient future for
                                    healthcare.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#181F59] mb-4">
                            The Visionary Behind Lakmed
                        </h2>
                        <div className="max-w-3xl mx-auto">
                            <p className="text-xl md:text-2xl text-[#43D6D6] font-medium italic leading-relaxed">
                                "Getting transportation and food delivery by phone is easy. So why are patients still packed into waiting rooms to see their doctor?"
                            </p>
                        </div>
                    </div>

                    {/* Centered Grid - Single card */}
                    <div className="flex justify-center">
                        <div className="max-w-md w-full">
                            <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#43D6D6]/20 to-[#181F59]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                                        <Image
                                            src="/akeem.jpeg"
                                            alt="Founder"
                                            width={200}
                                            height={200}
                                            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#43D6D6] group-hover:border-[#181F59] transition-colors duration-300 relative z-10"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#181F59] mb-2">
                                        Dr. Akeem Lawal
                                    </h3>
                                    <p className="text-[#43D6D6] font-semibold mb-4">
                                        Founder
                                    </p>
                                    <p className="text-slate-700 mb-4 leading-relaxed">
                                        A healthcare visionary with 25+ years in
                                        digital health, passionate about making
                                        quality care accessible to underserved
                                        communities.
                                    </p>
                                    <Link
                                        href="https://www.linkedin.com/in/akeem-lawal-166a149/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#43D6D6] hover:text-[#181F59] transition-colors group/link">
                                        <Linkedin className="w-5 h-5" />
                                        <span className="text-sm font-medium">Connect on LinkedIn</span>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Our Mission Section */}
            <section className="py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Want to Help Us Reshape Healthcare?
                    </h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto text-balance">
                        We are always looking for passionate, talented
                        individuals to join our team. If you believe in our
                        mission, we&apos;d love to hear from you.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-slate-100 font-semibold px-8 py-4">
                        View Open Positions
                    </Button>
                </div>
            </section>
        </>
    );
}
