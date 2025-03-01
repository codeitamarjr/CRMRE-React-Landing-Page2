import Image from "next/image";
import Link from "next/link";

const footerNavigation = {
    solutions: [
        { name: "Enquiries", href: "#" },
        { name: "Applications", href: "#" },
        { name: "On-boarding", href: "#" },
        { name: "Reports", href: "#" },
        { name: "Integrations", href: "#" },
    ],
    support: [
        { name: "Submit ticket", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "/blog" },
    ],
    legal: [
        { name: "Terms of service", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "License", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
            <div className="border-t border-gray-900/10 dark:border-gray-200/10 py-16 sm:py-24 lg:py-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <Link href="/">
                        <Image
                            alt="Real Enquiries"
                            src="/assets/brand/icon.svg"
                            width={48}
                            height={48}
                            className="h-9"
                        />
                    </Link>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">
                                    Solutions
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">
                                    Support
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">
                                    Company
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">
                                    Legal
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
