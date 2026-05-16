import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Aspramed",
    description:
        "Learn how Aspramed collects, uses, and protects your information across our patient and provider platforms.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background items-center flex flex-col">
            <section className="border-b bg-muted/40">
                <div className="container px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl font-bold text-balance">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground mt-4">
                            Effective date: October 10, 2025
                        </p>
                        <p className="text-muted-foreground mt-6 text-pretty">
                            This Privacy Policy explains how Aspramed (“we”,
                            “our”, “us”) collects, uses, discloses, and protects
                            information when you use our websites, mobile
                            applications, and services available to patients,
                            healthcare professionals, and organizational clients
                            in Zambia and Nigeria. Aspramed Pty Ltd (Australia)
                            is the primary data controller; where applicable,
                            local affiliates may act as co-controllers or
                            processors.
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
                                            id: "information-we-collect",
                                            label: "1. Information We Collect",
                                        },
                                        {
                                            id: "how-we-use",
                                            label: "2. How We Use Information",
                                        },
                                        {
                                            id: "legal-bases",
                                            label: "3. Legal Bases",
                                        },
                                        {
                                            id: "sharing",
                                            label: "4. Sharing & Disclosures",
                                        },
                                        {
                                            id: "transfers",
                                            label: "5. International Transfers",
                                        },
                                        {
                                            id: "retention",
                                            label: "6. Data Retention",
                                        },
                                        {
                                            id: "security",
                                            label: "7. Security",
                                        },
                                        {
                                            id: "rights",
                                            label: "8. Your Privacy Rights",
                                        },
                                        {
                                            id: "children",
                                            label: "9. Children’s Privacy",
                                        },
                                        {
                                            id: "cookies",
                                            label: "10. Cookies & Similar Tech",
                                        },
                                        {
                                            id: "third-parties",
                                            label: "11. Third-Party Services",
                                        },
                                        {
                                            id: "changes",
                                            label: "12. Changes to This Policy",
                                        },
                                        {
                                            id: "contact",
                                            label: "13. Contact Us",
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
                                id="information-we-collect"
                                aria-labelledby="info-heading">
                                <h2
                                    id="info-heading"
                                    className="text-2xl font-semibold mb-4">
                                    1. Information We Collect
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        We collect information to provide safe,
                                        effective healthcare services. This may
                                        include:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>
                                            Account and Contact Information:
                                            name, email, phone number, password
                                            or authentication details.
                                        </li>
                                        <li>
                                            Patient Health Information:
                                            symptoms, medical history,
                                            consultation notes, prescriptions,
                                            lab orders/results, care plans, and
                                            related clinical data you or your
                                            providers enter into the platform.
                                        </li>
                                        <li>
                                            Professional Information
                                            (Providers): credentials,
                                            specialties, practice details,
                                            scheduling and billing information.
                                        </li>
                                        <li>
                                            Usage and Device Information: app
                                            interactions, crash logs, pages
                                            viewed, IP address, device
                                            identifiers, browser type, and
                                            coarse location derived from your
                                            device settings.
                                        </li>
                                        <li>
                                            Payment Information: limited billing
                                            details processed via trusted
                                            payment partners; we do not store
                                            full card numbers on our servers.
                                        </li>
                                        <li>
                                            Communications: messages, call
                                            metadata, and support inquiries with
                                            our team or between patients and
                                            providers.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* 2 */}
                            <section
                                id="how-we-use"
                                aria-labelledby="use-heading">
                                <h2
                                    id="use-heading"
                                    className="text-2xl font-semibold mb-4">
                                    2. How We Use Information
                                </h2>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>
                                        Deliver telehealth services
                                        (appointments, messaging, records,
                                        e-prescriptions).
                                    </li>
                                    <li>
                                        Operate and improve our apps, websites,
                                        infrastructure, and security.
                                    </li>
                                    <li>
                                        Authenticate users, prevent fraud and
                                        misuse, and comply with legal
                                        obligations.
                                    </li>
                                    <li>
                                        Provide customer support and respond to
                                        inquiries.
                                    </li>
                                    <li>
                                        Facilitate provider credentialing,
                                        scheduling, and payments.
                                    </li>
                                    <li>
                                        Generate de-identified or aggregated
                                        analytics to enhance quality and access.
                                    </li>
                                    <li>
                                        Send service-related notices. With
                                        consent where required, send updates and
                                        educational content.
                                    </li>
                                </ul>
                            </section>

                            {/* 3 */}
                            <section
                                id="legal-bases"
                                aria-labelledby="bases-heading">
                                <h2
                                    id="bases-heading"
                                    className="text-2xl font-semibold mb-4">
                                    3. Legal Bases
                                </h2>
                                <p className="text-muted-foreground">
                                    We process information based on one or more
                                    of the following: your consent; performance
                                    of a contract (e.g., providing care or
                                    platform access); compliance with legal
                                    obligations; protection of vital interests;
                                    and our legitimate interests in secure,
                                    reliable healthcare delivery, balanced
                                    against your rights and expectations.
                                </p>
                            </section>

                            {/* 4 */}
                            <section
                                id="sharing"
                                aria-labelledby="sharing-heading">
                                <h2
                                    id="sharing-heading"
                                    className="text-2xl font-semibold mb-4">
                                    4. Sharing & Disclosures
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>We may share information as follows:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>
                                            With Healthcare Professionals
                                            involved in your care, at your
                                            direction or where necessary for
                                            treatment and continuity of care.
                                        </li>
                                        <li>
                                            With Service Providers (e.g.,
                                            hosting, analytics, payments,
                                            communications) bound by
                                            confidentiality and data protection
                                            commitments.
                                        </li>
                                        <li>
                                            With Organizational Clients (e.g.,
                                            clinics/hospitals) where you receive
                                            services through them, per
                                            applicable agreements and law.
                                        </li>
                                        <li>
                                            For Legal, Safety, and Compliance
                                            requirements when required by law or
                                            to protect users.
                                        </li>
                                        <li>
                                            For Business Transitions (e.g.,
                                            merger or acquisition) in accordance
                                            with applicable data protection
                                            laws.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* 5 */}
                            <section
                                id="transfers"
                                aria-labelledby="transfers-heading">
                                <h2
                                    id="transfers-heading"
                                    className="text-2xl font-semibold mb-4">
                                    5. International Transfers
                                </h2>
                                <p className="text-muted-foreground">
                                    Information may be processed in Australia
                                    and other locations where we or our service
                                    providers operate. We implement appropriate
                                    safeguards for cross-border transfers
                                    consistent with applicable laws, and limit
                                    access to authorized personnel.
                                </p>
                            </section>

                            {/* 6 */}
                            <section
                                id="retention"
                                aria-labelledby="retention-heading">
                                <h2
                                    id="retention-heading"
                                    className="text-2xl font-semibold mb-4">
                                    6. Data Retention
                                </h2>
                                <p className="text-muted-foreground">
                                    We retain information for as long as
                                    necessary to provide services, meet legal
                                    and regulatory requirements, resolve
                                    disputes, and enforce agreements. Retention
                                    periods vary by record type and
                                    jurisdiction. We take steps to delete or
                                    de-identify information when it is no longer
                                    needed.
                                </p>
                            </section>

                            {/* 7 */}
                            <section
                                id="security"
                                aria-labelledby="security-heading">
                                <h2
                                    id="security-heading"
                                    className="text-2xl font-semibold mb-4">
                                    7. Security
                                </h2>
                                <p className="text-muted-foreground">
                                    We use administrative, technical, and
                                    organizational measures designed to protect
                                    information, such as encryption in transit,
                                    access controls, monitoring, and staff
                                    training. No system is perfectly secure;
                                    please use strong passwords and keep your
                                    account details confidential.
                                </p>
                            </section>

                            {/* 8 */}
                            <section
                                id="rights"
                                aria-labelledby="rights-heading">
                                <h2
                                    id="rights-heading"
                                    className="text-2xl font-semibold mb-4">
                                    8. Your Privacy Rights
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>
                                        Depending on your location and the
                                        services used, you may have rights to
                                        access, correct, delete, restrict, or
                                        object to certain processing, and to
                                        obtain a copy of your information. You
                                        may also withdraw consent where we rely
                                        on consent. We will honor requests
                                        consistent with applicable laws in
                                        Zambia, Nigeria, and other relevant
                                        jurisdictions.
                                    </p>
                                    <p>
                                        To exercise rights, contact us at{" "}
                                        <a
                                            href="mailto:support@aspramed.com"
                                            className="underline hover:text-foreground">
                                            support@aspramed.com
                                        </a>
                                        . We may need to verify your identity
                                        before responding.
                                    </p>
                                </div>
                            </section>

                            {/* 9 */}
                            <section
                                id="children"
                                aria-labelledby="children-heading">
                                <h2
                                    id="children-heading"
                                    className="text-2xl font-semibold mb-4">
                                    9. Children’s Privacy
                                </h2>
                                <p className="text-muted-foreground">
                                    Our services may be used to provide care to
                                    children with the authorization and
                                    involvement of a parent or legal guardian
                                    and licensed healthcare professionals. We do
                                    not knowingly allow children to create
                                    accounts without appropriate consent.
                                </p>
                            </section>

                            {/* 10 */}
                            <section
                                id="cookies"
                                aria-labelledby="cookies-heading">
                                <h2
                                    id="cookies-heading"
                                    className="text-2xl font-semibold mb-4">
                                    10. Cookies & Similar Technologies
                                </h2>
                                <p className="text-muted-foreground">
                                    We use cookies and similar technologies to
                                    enable core functionality, remember
                                    preferences, improve performance, and
                                    analyze usage. You can control cookies
                                    through your browser settings. Some features
                                    may not function properly without certain
                                    cookies.
                                </p>
                            </section>

                            {/* 11 */}
                            <section
                                id="third-parties"
                                aria-labelledby="third-heading">
                                <h2
                                    id="third-heading"
                                    className="text-2xl font-semibold mb-4">
                                    11. Third-Party Services
                                </h2>
                                <p className="text-muted-foreground">
                                    Our services may link to third-party sites
                                    or services we do not control. Their privacy
                                    practices are governed by their own
                                    policies. We encourage you to review those
                                    policies before providing information.
                                </p>
                            </section>

                            {/* 12 */}
                            <section
                                id="changes"
                                aria-labelledby="changes-heading">
                                <h2
                                    id="changes-heading"
                                    className="text-2xl font-semibold mb-4">
                                    12. Changes to This Policy
                                </h2>
                                <p className="text-muted-foreground">
                                    We may update this Privacy Policy from time
                                    to time. We will post the updated policy
                                    with a new “Effective date” and, where
                                    required, provide additional notice.
                                </p>
                            </section>

                            {/* 13 */}
                            <section
                                id="contact"
                                aria-labelledby="contact-heading">
                                <h2
                                    id="contact-heading"
                                    className="text-2xl font-semibold mb-4">
                                    13. Contact Us
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                                    <div className="rounded-lg border bg-card p-6">
                                        <div className="font-semibold mb-2">
                                            General & Privacy Inquiries
                                        </div>
                                        <div className="mt-2">
                                            Support:{" "}
                                            <a
                                                href="mailto:hello@aspramed.com"
                                                className="underline hover:text-foreground">
                                                support@aspramed.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border bg-card p-6">
                                        <div className="font-semibold mb-2">
                                            Regional Presence
                                        </div>
                                        <p>
                                            Australia (Headquarters); Zambia &
                                            Nigeria (Service Markets)
                                        </p>
                                        <p className="mt-2 text-sm">
                                            For region-specific questions,
                                            contact us and we will route your
                                            request appropriately.
                                        </p>
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
