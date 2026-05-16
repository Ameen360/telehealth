import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Aspramed",
    description:
        "Read the Terms of Service that govern your use of Aspramed’s websites, apps, and healthcare technology platform.",
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background items-center flex flex-col">
            {/* Hero */}
            <section className="border-b bg-muted/40">
                <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-balance">
                            Terms of Service
                        </h1>
                        <p className="text-muted-foreground mt-4">
                            Effective date: October 10, 2025
                        </p>
                        <p className="text-muted-foreground mt-6 text-pretty">
                            These Terms of Service (“Terms”) govern your access
                            to and use of Aspramed websites, mobile
                            applications, and related services (collectively,
                            the “Services”). By accessing or using the Services,
                            you agree to be bound by these Terms.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contents */}
            <section className="py-12 md:py-16">
                <div className="container px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        <aside className="lg:col-span-4">
                            <div className="sticky top-24 rounded-lg border bg-card p-6">
                                <h2 className="font-semibold mb-4">
                                    On this page
                                </h2>
                                <nav className="space-y-3 text-sm">
                                    {[
                                        {
                                            id: "acceptance",
                                            label: "1. Acceptance of Terms",
                                        },
                                        {
                                            id: "eligibility",
                                            label: "2. Eligibility & Accounts",
                                        },
                                        {
                                            id: "healthcare",
                                            label: "3. Healthcare Services Disclaimer",
                                        },
                                        {
                                            id: "use",
                                            label: "4. Acceptable Use",
                                        },
                                        {
                                            id: "providers",
                                            label: "5. Providers & Relationships",
                                        },
                                        {
                                            id: "payments",
                                            label: "6. Payments & Billing",
                                        },
                                        {
                                            id: "insurance",
                                            label: "7. Insurance & Claims",
                                        },
                                        {
                                            id: "privacy",
                                            label: "8. Privacy & Data",
                                        },
                                        {
                                            id: "ip",
                                            label: "9. Intellectual Property",
                                        },
                                        {
                                            id: "third-party",
                                            label: "10. Third-Party Services",
                                        },
                                        {
                                            id: "warranties",
                                            label: "11. Disclaimers",
                                        },
                                        {
                                            id: "liability",
                                            label: "12. Limitation of Liability",
                                        },
                                        {
                                            id: "indemnity",
                                            label: "13. Indemnification",
                                        },
                                        {
                                            id: "termination",
                                            label: "14. Suspension & Termination",
                                        },
                                        {
                                            id: "law",
                                            label: "15. Governing Law & Disputes",
                                        },
                                        {
                                            id: "changes",
                                            label: "16. Changes to the Terms",
                                        },
                                        {
                                            id: "contact",
                                            label: "17. Contact Us",
                                        },
                                    ].map(item => (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            className="block text-muted-foreground hover:text-foreground">
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        <article className="lg:col-span-8 space-y-12">
                            {/* 1 */}
                            <section
                                id="acceptance"
                                aria-labelledby="acceptance-heading">
                                <h2
                                    id="acceptance-heading"
                                    className="text-2xl font-semibold mb-4">
                                    1. Acceptance of Terms
                                </h2>
                                <p className="text-muted-foreground">
                                    By using the Services, you acknowledge that
                                    you have read, understood, and agree to be
                                    bound by these Terms and all referenced
                                    policies, including our{" "}
                                    <Link
                                        href="/privacy"
                                        className="underline hover:text-foreground">
                                        Privacy Policy
                                    </Link>
                                    . If you do not agree, do not use the
                                    Services.
                                </p>
                            </section>

                            {/* 2 */}
                            <section
                                id="eligibility"
                                aria-labelledby="eligibility-heading">
                                <h2
                                    id="eligibility-heading"
                                    className="text-2xl font-semibold mb-4">
                                    2. Eligibility & Accounts
                                </h2>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>
                                        You must be able to form a binding
                                        contract and meet applicable local
                                        regulations.
                                    </li>
                                    <li>
                                        If you create an account, you are
                                        responsible for maintaining the
                                        confidentiality of your login
                                        credentials and for activities under
                                        your account.
                                    </li>
                                    <li>
                                        Accounts for minors must be created and
                                        managed by a parent or legal guardian
                                        and used under the supervision of
                                        licensed healthcare professionals where
                                        applicable.
                                    </li>
                                </ul>
                            </section>

                            {/* 3 */}
                            <section
                                id="healthcare"
                                aria-labelledby="healthcare-heading">
                                <h2
                                    id="healthcare-heading"
                                    className="text-2xl font-semibold mb-4">
                                    3. Healthcare Services Disclaimer
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        Aspramed is a technology platform that
                                        enables telehealth consultations and
                                        related functionality. Aspramed does not
                                        itself provide medical care. Healthcare
                                        services are provided by independent,
                                        licensed healthcare professionals.
                                    </p>
                                    <p className="font-medium">
                                        Not for Emergencies: If you are
                                        experiencing an emergency, call your
                                        local emergency number immediately.
                                    </p>
                                </div>
                            </section>

                            {/* 4 */}
                            <section id="use" aria-labelledby="use-heading">
                                <h2
                                    id="use-heading"
                                    className="text-2xl font-semibold mb-4">
                                    4. Acceptable Use
                                </h2>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>
                                        Do not misuse, interfere with, or
                                        disrupt the Services or underlying
                                        infrastructure.
                                    </li>
                                    <li>
                                        Do not attempt to access accounts or
                                        data without authorization.
                                    </li>
                                    <li>
                                        Do not share false, misleading, or
                                        unlawful information, including
                                        information intended to obtain
                                        prescriptions or services improperly.
                                    </li>
                                </ul>
                            </section>

                            {/* 5 */}
                            <section
                                id="providers"
                                aria-labelledby="providers-heading">
                                <h2
                                    id="providers-heading"
                                    className="text-2xl font-semibold mb-4">
                                    5. Providers & Relationships
                                </h2>
                                <p className="text-muted-foreground">
                                    Healthcare professionals using the platform
                                    are independent providers responsible for
                                    clinical judgment and patient care. No
                                    provider–patient relationship is formed with
                                    Aspramed itself. Providers must comply with
                                    applicable professional and legal
                                    obligations in their jurisdictions.
                                </p>
                            </section>

                            {/* 6 */}
                            <section
                                id="payments"
                                aria-labelledby="payments-heading">
                                <h2
                                    id="payments-heading"
                                    className="text-2xl font-semibold mb-4">
                                    6. Payments & Billing
                                </h2>
                                <p className="text-muted-foreground">
                                    Payments are processed through trusted
                                    third-party processors. You authorize
                                    charges to your selected payment method for
                                    consultations and related services. Fees,
                                    taxes, and any cancellation or rescheduling
                                    policies will be displayed prior to purchase
                                    when applicable.
                                </p>
                            </section>

                            {/* 7 */}
                            <section
                                id="insurance"
                                aria-labelledby="insurance-heading">
                                <h2
                                    id="insurance-heading"
                                    className="text-2xl font-semibold mb-4">
                                    7. Insurance & Claims
                                </h2>
                                <p className="text-muted-foreground">
                                    Where insurance coverage is available, your
                                    coverage and eligibility are determined by
                                    your insurer. Any claims or reimbursement
                                    are between you and your insurer, subject to
                                    their policies.
                                </p>
                            </section>

                            {/* 8 */}
                            <section
                                id="privacy"
                                aria-labelledby="privacy-heading">
                                <h2
                                    id="privacy-heading"
                                    className="text-2xl font-semibold mb-4">
                                    8. Privacy & Data
                                </h2>
                                <p className="text-muted-foreground">
                                    Your use of the Services is subject to our{" "}
                                    <Link
                                        href="/privacy"
                                        className="underline hover:text-foreground">
                                        Privacy Policy
                                    </Link>
                                    , which explains how we collect, use, and
                                    protect information. By using the Services,
                                    you consent to our data practices as
                                    described therein.
                                </p>
                            </section>

                            {/* 9 */}
                            <section id="ip" aria-labelledby="ip-heading">
                                <h2
                                    id="ip-heading"
                                    className="text-2xl font-semibold mb-4">
                                    9. Intellectual Property
                                </h2>
                                <p className="text-muted-foreground">
                                    The Services and their contents are owned or
                                    licensed by Aspramed and are protected by
                                    intellectual property laws. You are granted
                                    a limited, non-exclusive, non-transferable
                                    license to access and use the Services for
                                    their intended purposes.
                                </p>
                            </section>

                            {/* 10 */}
                            <section
                                id="third-party"
                                aria-labelledby="third-heading">
                                <h2
                                    id="third-heading"
                                    className="text-2xl font-semibold mb-4">
                                    10. Third-Party Services
                                </h2>
                                <p className="text-muted-foreground">
                                    The Services may integrate or link to
                                    third-party services. Aspramed does not
                                    control and is not responsible for those
                                    services. Your use is subject to their terms
                                    and policies.
                                </p>
                            </section>

                            {/* 11 */}
                            <section
                                id="warranties"
                                aria-labelledby="warranties-heading">
                                <h2
                                    id="warranties-heading"
                                    className="text-2xl font-semibold mb-4">
                                    11. Disclaimers
                                </h2>
                                <p className="text-muted-foreground">
                                    The Services are provided “as is” and “as
                                    available” without warranties of any kind,
                                    whether express or implied, including
                                    merchantability, fitness for a particular
                                    purpose, title, and non-infringement. We do
                                    not guarantee continuous or error-free
                                    operation.
                                </p>
                            </section>

                            {/* 12 */}
                            <section
                                id="liability"
                                aria-labelledby="liability-heading">
                                <h2
                                    id="liability-heading"
                                    className="text-2xl font-semibold mb-4">
                                    12. Limitation of Liability
                                </h2>
                                <p className="text-muted-foreground">
                                    To the maximum extent permitted by law,
                                    Aspramed and its affiliates will not be
                                    liable for any indirect, incidental,
                                    special, consequential, or punitive damages,
                                    or for lost profits, revenues, data, or use,
                                    arising out of or related to your use of the
                                    Services.
                                </p>
                            </section>

                            {/* 13 */}
                            <section
                                id="indemnity"
                                aria-labelledby="indemnity-heading">
                                <h2
                                    id="indemnity-heading"
                                    className="text-2xl font-semibold mb-4">
                                    13. Indemnification
                                </h2>
                                <p className="text-muted-foreground">
                                    You agree to indemnify and hold harmless
                                    Aspramed and its affiliates from any claims,
                                    liabilities, damages, losses, and expenses,
                                    including reasonable legal fees, arising out
                                    of or related to your use of the Services or
                                    violation of these Terms.
                                </p>
                            </section>

                            {/* 14 */}
                            <section
                                id="termination"
                                aria-labelledby="termination-heading">
                                <h2
                                    id="termination-heading"
                                    className="text-2xl font-semibold mb-4">
                                    14. Suspension & Termination
                                </h2>
                                <p className="text-muted-foreground">
                                    We may suspend or terminate access to the
                                    Services at any time with or without notice
                                    for conduct that we believe violates these
                                    Terms, harms other users, or creates legal
                                    risk.
                                </p>
                            </section>

                            {/* 15 */}
                            <section id="law" aria-labelledby="law-heading">
                                <h2
                                    id="law-heading"
                                    className="text-2xl font-semibold mb-4">
                                    15. Governing Law & Disputes
                                </h2>
                                <p className="text-muted-foreground">
                                    These Terms are governed by the laws of
                                    Australia, without regard to conflict-of-law
                                    rules. Where applicable, local mandatory
                                    consumer protection or health regulations in
                                    Zambia or Nigeria may also apply to services
                                    delivered in those jurisdictions. Disputes
                                    will be resolved in competent courts of
                                    applicable jurisdiction subject to mandatory
                                    law.
                                </p>
                            </section>

                            {/* 16 */}
                            <section
                                id="changes"
                                aria-labelledby="changes-heading">
                                <h2
                                    id="changes-heading"
                                    className="text-2xl font-semibold mb-4">
                                    16. Changes to the Terms
                                </h2>
                                <p className="text-muted-foreground">
                                    We may update these Terms from time to time.
                                    We will post the updated Terms with a new
                                    “Effective date” and, where required,
                                    provide additional notice. Continued use
                                    signifies acceptance of the updated Terms.
                                </p>
                            </section>

                            {/* 17 */}
                            <section
                                id="contact"
                                aria-labelledby="contact-heading">
                                <h2
                                    id="contact-heading"
                                    className="text-2xl font-semibold mb-4">
                                    17. Contact Us
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                                    <div className="rounded-lg border bg-card p-6">
                                        <div className="font-semibold mb-2">
                                            General & Legal Inquiries
                                        </div>
                                        <div>
                                            Email:{" "}
                                            <a
                                                href="mailto:support@aspramed.com"
                                                className="underline hover:text-foreground">
                                                support@aspramed.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border bg-card p-6">
                                        <div className="font-semibold mb-2">
                                            Privacy
                                        </div>
                                        <div>
                                            Email:{" "}
                                            <a
                                                href="mailto:support@aspramed.com"
                                                className="underline hover:text-foreground">
                                                support@aspramed.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
