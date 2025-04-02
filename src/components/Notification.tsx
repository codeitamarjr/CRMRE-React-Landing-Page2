import React, { useState, useEffect } from 'react'

export default function Notification() {
    const [showNotification, setShowNotification] = useState(true);

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
        <div>
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