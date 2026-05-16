import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Linkedin, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
                        We Believe Quality Healthcare is a Right, Not a
                        Privilege
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto text-balance">
                        Aspramed was founded to bridge the distance between
                        patients and providers, using technology to make
                        healthcare simple, accessible, and compassionate for
                        everyone.
                    </p>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                                From an Idea to a Lifeline
                            </h2>
                            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                                <p>
                                    Our journey began with a simple observation:
                                    too many people faced barriers—distance,
                                    cost, and time—to get the medical care they
                                    needed. Founded in Australia with a vision
                                    for global health equity, we set our sights
                                    on markets where technology could make the
                                    most significant impact.
                                </p>
                                <p>
                                    We established our operations in Zambia and
                                    Nigeria to bring a world-class telehealth
                                    platform tailored to the unique needs of
                                    local communities and healthcare providers.
                                    Every feature we build, every partnership we
                                    forge, is driven by our commitment to making
                                    quality healthcare accessible to all.
                                </p>
                                <p>
                                    Today, Aspramed serves thousands of patients
                                    and hundreds of healthcare professionals
                                    across two continents, but our mission
                                    remains the same: to eliminate barriers and
                                    create connections that save lives.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/about.jpg"
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
                                    To empower health and wellness by providing
                                    a seamless, secure, and accessible
                                    telehealth platform that connects patients
                                    to quality care, anytime, anywhere.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="p-12 bg-white shadow-lg border-0">
                            <CardContent className="p-0">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                    Our Vision
                                </h2>
                                <p className="text-lg text-slate-700 leading-relaxed">
                                    To be Africa&apos;s most trusted digital health
                                    partner, creating a future where every
                                    individual has the tools and access to
                                    manage their health proactively.
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
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The Team Behind the Vision
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <Card className="p-8 text-center bg-white border-0 shadow-lg">
                            <CardContent className="p-0">
                                <Image
                                    src="/akeem.jpeg"
                                    alt="Founder"
                                    width={200}
                                    height={200}
                                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                                />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Dr. Akeem Lawal
                                </h3>
                                <p className="text-blue-600 font-medium mb-4">
                                    Founder
                                </p>
                                <p className="text-slate-700 mb-4">
                                    A healthcare visionary with 25+ years in
                                    digital health, passionate about making
                                    quality care accessible to underserved
                                    communities.
                                </p>
                                <Link
                                    href="https://www.linkedin.com/in/akeem-lawal-166a149/"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </CardContent>
                        </Card>
                        <Card className="p-8 text-center bg-white border-0 shadow-lg">
                            <CardContent className="p-0">
                                <Image
                                    src="/cynthia.jpeg"
                                    alt="Founder"
                                    width={200}
                                    height={200}
                                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                                />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Cynthia Musafili Wright
                                </h3>
                                <p className="text-blue-600 font-medium mb-4">
                                    Founder
                                </p>
                                <p className="text-slate-700 mb-4">
                                    Tech innovator specializing in scalable
                                    healthcare platforms, committed to building
                                    secure, user-friendly solutions for Africa.
                                </p>
                                <Link
                                    href="https://www.linkedin.com/in/cynthia-wright-maicd/?originalSubdomain=au"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </CardContent>
                        </Card>
                        <Card className="p-8 text-center bg-white border-0 shadow-lg">
                            <CardContent className="p-0">
                                <Image
                                    src="/tommy.png"
                                    alt="Founder"
                                    width={200}
                                    height={200}
                                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                                />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    Tommy Adebayo
                                </h3>
                                <p className="text-blue-600 font-medium mb-4">
                                    Founder
                                </p>
                                <p className="text-slate-700 mb-4">
                                    Experienced entrepreneur and business
                                    strategist with a passion for leveraging
                                    technology to solve real-world healthcare
                                    challenges.
                                </p>
                                <Link
                                    href="https://www.linkedin.com/in/tommyadebayo/?originalSubdomain=au"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </CardContent>
                        </Card>
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
