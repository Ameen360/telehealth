import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Apple,
    Baby,
    Brain,
    Calendar,
    FileText,
    Heart,
    Pill,
    Play,
    Shield,
    Star,
    Stethoscope,
    Users,
    Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PatientsPage() {
    return (
        <>
            <section className="relative py-24 px-6 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-balance">
                                    Feeling Unwell? See a Licensed Doctor in
                                    Minutes.
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed text-pretty">
                                    Book a secure video or audio consultation
                                    from the comfort of your home. Your health,
                                    on your schedule.
                                </p>
                            </div>

                            <div className="flex flex-row space-x-6">
                                <Link
                                    href="https://apps.apple.com/us/app/aspramed/id1603689060"
                                    target="_blank"
                                    className="bg-primary flex flex-row text-white  items-center cursor-pointer rounded-md px-4 py-2 space-x-2">
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
                                    className="bg-secondary flex flex-row text-white  items-center cursor-pointer rounded-md px-4 py-2 space-x-2">
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

                        <div className="relative">
                            <Image
                                className="w-full rounded-2xl shadow-2xl"
                                src="/lakmed1.png"
                                alt="Mother and child using telehealth app"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
                            Your Consultation is Just 3 Steps Away
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center space-y-6">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <Stethoscope className="w-10 h-10 text-blue-600" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-slate-900">
                                    Find Your Doctor
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Browse our network of licensed doctors and
                                    specialists. Filter by specialty and see
                                    their profiles and availability.
                                </p>
                            </div>
                        </div>

                        <div className="text-center space-y-6">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <Calendar className="w-10 h-10 text-green-600" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-slate-900">
                                    Book Your Time
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Choose a time that works for you and book
                                    your appointment instantly through the app.
                                </p>
                            </div>
                        </div>

                        <div className="text-center space-y-6">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                                <Video className="w-10 h-10 text-purple-600" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-slate-900">
                                    Start Your Consultation
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Connect with your doctor via a secure video
                                    or audio call. Get medical advice,
                                    prescriptions, and more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specialties */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
                            Quality Care Across a Range of Specialties
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Stethoscope,
                                name: "General Practice",
                                color: "blue",
                            },
                            {
                                icon: Brain,
                                name: "Mental Health & Therapy",
                                color: "purple",
                            },
                            {
                                icon: Baby,
                                name: "Pediatrics (Child Health)",
                                color: "pink",
                            },
                            {
                                icon: Heart,
                                name: "Dermatology (Skin Care)",
                                color: "orange",
                            },
                            {
                                icon: Shield,
                                name: "Sexual Health",
                                color: "red",
                            },
                            {
                                icon: Apple,
                                name: "Nutrition & Wellness",
                                color: "green",
                            },
                        ].map((specialty, index) => (
                            <Card
                                key={index}
                                className="p-8 text-center hover:shadow-lg transition-shadow bg-white border-0 shadow-sm">
                                <CardContent className="p-0 space-y-4">
                                    <div
                                        className={`w-16 h-16 bg-${specialty.color}-100 rounded-full flex items-center justify-center mx-auto`}>
                                        <specialty.icon
                                            className={`w-8 h-8 text-${specialty.color}-600`}
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-900">
                                        {specialty.name}
                                    </h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Features */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <Image
                                className="h-[500px] w-[311px] rounded-2xl shadow-2xl"
                                src="/p2.png"
                                alt="Screenshot from app"
                                width={500}
                                height={500}
                            />
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-slate-900 text-balance">
                                The Smart Way to Manage Your Health
                            </h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Video className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                            Secure Video Calls
                                        </h3>
                                        <p className="text-slate-600">
                                            High-quality, private consultations
                                            with licensed professionals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                            Personal Health Records
                                        </h3>
                                        <p className="text-slate-600">
                                            Access your consultation notes,
                                            medical history, and prescriptions
                                            anytime.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Pill className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                            Easy Prescriptions
                                        </h3>
                                        <p className="text-slate-600">
                                            Get prescriptions sent directly to a
                                            pharmacy of your choice after your
                                            consultation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Users className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                            Family Accounts
                                        </h3>
                                        <p className="text-slate-600">
                                            Manage appointments and health
                                            records for your children and loved
                                            ones all from one account.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Doctors */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
                            Connect with a Network of Vetted Professionals
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. Imani Bello",
                                specialty: "General Practitioner",
                                bio: "With over 10 years of experience, Dr. Bello is passionate about providing accessible family healthcare.",
                                image: "/d1.png",
                            },
                            {
                                name: "Dr. Kwame Asante",
                                specialty: "Mental Health Specialist",
                                bio: "Dr. Asante specializes in anxiety and depression treatment, helping patients achieve better mental wellness.",
                                image: "/d2.png",
                            },
                            {
                                name: "Dr. Fatima Okafor",
                                specialty: "Pediatrician",
                                bio: "A dedicated children's doctor with 8 years of experience in pediatric care and family medicine.",
                                image: "/d3.png",
                            },
                        ].map((doctor, index) => (
                            <Card
                                key={index}
                                className="bg-white border-0 shadow-sm hover:shadow-lg transition-shadow">
                                <CardContent className="p-8 text-center space-y-6">
                                    <Image
                                        src={doctor.image || "/placeholder.svg"}
                                        alt={doctor.name}
                                        width={100}
                                        height={100}
                                        className="w-24 h-24 rounded-full mx-auto object-cover"
                                    />
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-slate-900">
                                            {doctor.name}
                                        </h3>
                                        <Badge
                                            variant="secondary"
                                            className="bg-blue-100 text-blue-700">
                                            {doctor.specialty}
                                        </Badge>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {doctor.bio}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 text-balance">
                            Join Thousands of Happy Patients
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Booking an appointment was so fast and easy. I spoke to a wonderful doctor without ever leaving my house. Aspramed is a lifesaver!",
                                name: "Sarah K., Lusaka",
                            },
                            {
                                quote: "The doctors are professional and caring. I got the help I needed for my child's fever at 9 PM when no clinics were open.",
                                name: "Michael O., Lagos",
                            },
                            {
                                quote: "Finally, healthcare that fits my busy schedule. The app is simple to use and the doctors are excellent.",
                                name: "Grace M., Ndola",
                            },
                        ].map((testimonial, index) => (
                            <Card
                                key={index}
                                className="bg-slate-50 border-0 shadow-sm">
                                <CardContent className="p-8 space-y-6">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <blockquote className="text-slate-700 leading-relaxed text-pretty">
                                        &quot;{testimonial.quote}&quot;
                                    </blockquote>
                                    <p className="text-slate-600 font-medium">
                                        {testimonial.name}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-blue-600 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600"></div>
                <div className="relative container mx-auto max-w-4xl text-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance">
                            Take Control of Your Health Today.
                        </h2>
                        <p className="text-xl text-white/90 text-pretty">
                            Download the free Aspramed app to get started.
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
                </div>
            </section>

            {/* Footer */}
        </>
    );
}
