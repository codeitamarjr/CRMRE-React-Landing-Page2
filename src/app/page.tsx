'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  DocumentDuplicateIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  DocumentCheckIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
const features = [
  {
    name: 'Automated Tenant Screening',
    description:
      'Instantly check RTB disputes, bankruptcy records, and online search results to assess tenant reliability.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Batch Tenancy Renewals',
    description:
      'Easily renew multiple tenancies in bulk, ensuring compliance with RTB rules and streamlining workflows.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Smart Document Processing',
    description:
      'Automatically analyze and validate submitted documents, reducing manual workload for property managers.',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'GDPR-Compliant Data Retention',
    description:
      'Set retention rules to automatically delete or anonymize sensitive data based on legal requirements.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Seamless Xero & Yardi Integration',
    description:
      'Sync tenant balances with Xero and manage tenancy data from Yardi with ease.',
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Real-Time RTB Pack Generation',
    description:
      'Generate legally compliant RTB registration packs with just a few clicks, including comparable listings and required forms.',
    icon: DocumentCheckIcon,
  },
]
const footerNavigation = {
  solutions: [
    { name: 'Enquiries', href: '#' },
    { name: 'Applications', href: '#' },
    { name: 'On-boarding', href: '#' },
    { name: 'Reports', href: '#' },
    { name: 'Integrations', href: '#' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(darkModeQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    darkModeQuery.addEventListener("change", handleChange);

    return () => {
      darkModeQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const images = isDarkMode
    ? [
      "assets/screenshots/Real-Enquiries-Dashboard-Dark.png",
      "assets/screenshots/Real-Enquiries-Inbox Dark.png",
      "assets/screenshots/Real-Enquiries-Profile Dark.png",
      "assets/screenshots/Real-Enquiries-Term Dark.png",
    ]
    : [
      "assets/screenshots/Real-Enquiries-Dashboard.png",
      "assets/screenshots/Real-Enquiries-Inbox.png",
      "assets/screenshots/Real-Enquiries-Profile.png",
      "assets/screenshots/Real-Enquiries-Term.png",
    ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const notificationDismissed = localStorage.getItem('notificationDismissed');
    if (notificationDismissed === 'true') {
      setShowNotification(false);
    }
  }, []);

  const handleDismissNotification = () => {
    setShowNotification(false);
    localStorage.setItem('notificationDismissed', 'true');
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Real Enquiries</span>
              <Image
                alt="Real Enquiries"
                src="assets/brand/icon.svg"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="mailto:contact@realenquiries.com?subject=CRMRE: Contact&body=Tell me more about Real Enquiries!"
              className="text-sm/6 font-semibold text-gray-900 dark:text-gray-400">
              Join our waiting list <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Real Enquiries</span>
                <Image
                  alt="Real Enquiries"
                  src="assets/brand/icon.svg"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="mailto:contact@realenquiries.com?subject=CRMRE: Contact&body=Tell me more about Real Enquiries!"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Join our waiting list <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-7xl">
                  Transform your real estate <span className="text-indigo-500">workflows</span>
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-gray-500 dark:text-gray-100">
                  Revolutionize Your <span className="text-indigo-500">Real Estate Management</span> with Less Manual Input and <span className="text-indigo-500">More Time</span> for <span className="text-indigo-500">What Matters</span>.
                </p>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 relative w-full mx-auto">
                  <div className="relative w-full h-[600px] overflow-hidden rounded-md">
                    {images.map((image, index) => (
                      <Image
                        key={index}
                        alt="App screenshot"
                        src={image}
                        width={2432}
                        height={600}
                        className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        {/* Logo third parties */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              alt="Xero Accounting"
              src="assets/third/logos/xero.png"
              width={158}
              height={48}
              className="size-8 col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:filter dark:invert"
            />
            <Image
              alt="DocuSign"
              src="assets/third/logos/docusign.webp"
              width={158}
              height={48}
              className="size-6 col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:filter dark:invert"
            />
            <Image
              alt="Yardi"
              src="assets/third/logos/yardi.png"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:filter dark:invert"
            />
            <Image
              alt="RTB"
              src="assets/third/logos/rtb.png"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:filter dark:invert"
            />
            <Image
              alt="Court Ireland"
              src="assets/third/logos/court-ireland.webp"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:filter dark:invert"
            />
          </div>
          <div className="hidden sm:mb-9 sm:flex sm:justify-center mt-16">
            <div className="rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-100 ring-1 ring-gray-900/10 hover:ring-gray-500/20 dark:ring-indigo-900 md:text-xl">
              Your one stop solution to manage&nbsp;
              <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-5 text-left leading-tight">
                  <li>enquiries.</li>
                  <li>applications.</li>
                  <li>documents.</li>
                  <li>occupancy.</li>
                  <li>properties.</li>
                  <li aria-hidden="true">enquiries.</li>
                </ul>
              </span>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Reduce manual work</h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-200 sm:text-5xl lg:text-balance">
              Everything you need can be done online and in one place.
            </p>
            <p className="mt-6 text-pretty text-lg/8 text-gray-600">
              Easily manage your real estate business with Real Enquiries. Our platform is designed to help you manage all aspects of your real estate business, from lettings to accounting, sharing critical information effortlessly.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900 dark:text-gray-300">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 dark:bg-gray-800 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <Image
              alt="Itamar Junior"
              src="https://itjunior.dev/assets/images/me.webp"
              width={128}
              height={128}
              className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <Image
                alt="MD Property & Living"
                src="https://images.squarespace-cdn.com/content/v1/5cf67b964faeb100010e6dab/d29c81eb-2e74-4b9c-8383-1f0b422e99a5/FullLogo_white.png?format=1500w"
                width={500}
                height={500}
                className="h-12 w-auto"
              />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>
                    “I created Real Enquiries to simplify real estate management. It is been a game changer for me and my team. We can onboard a new client with a few clicks and get the application process flowing effortlessly.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Itamar Junior</div>
                  <div className="mt-1">Creator of Real Enquiries and Software Engineer at MD Property & Living</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
              }}
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Boost your productivity. Start using <span className="text-indigo-500 dark:text-indigo-400">Real Enquiries</span> today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600 dark:text-gray-400">
              Real Enquiries is a cloud-based platform that helps you manage all aspects of your real estate business. From lettings to accounting, sharing critical information effortlessly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="mailto:contact@realenquiries.com?subject=CRMRE: Contact&body=Tell me more about Real Enquiries!"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Join the waiting list <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-900/10 dark:border-gray-200/10 py-16 sm:py-24 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              alt="Real Enquiries"
              src="assets/brand/icon.svg"
              width={48}
              height={48}
              className="h-9"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-gray-300">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Global notification live region, render this permanently at the end of the document */}
      <div aria-live="assertive" className="pointer-events-none fixed inset-0 flex items-end justify-end px-4 py-6 sm:items-end sm:justify-end sm:p-6">

        {showNotification && (
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <div className="pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Privacy Policy Disclosures</p>
                    <p className="mt-1 text-xs text-gray-500">
                      We partner with <a href="https://clarity.microsoft.com" target='_blank' rel='noreferrer' className="hover:underline text-indigo-600">Microsoft Clarity</a> and <a href="https://www.facebook.com/business/tools/meta-pixel" target='_blank' rel='noreferrer' className="hover:underline text-indigo-600">Meta Pixel</a> to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft and Meta Pixel collect and use your data, visit the <a href='https://privacy.microsoft.com/en-us/privacystatement' target='_blank' rel='noreferrer' className="hover:underline text-indigo-600">Microsoft Privacy Statement</a> and the <a href='https://www.facebook.com/about/privacy/' target='_blank' rel='noreferrer' className="hover:underline text-indigo-600">Meta Privacy Policy</a>.
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleDismissNotification}
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
