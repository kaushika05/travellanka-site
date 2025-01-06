import Navbar from '../components/Navbar';

const Eula = () => {
    return (
        <div className="min-h-screen font-inter">
            <Navbar />
            <div className="pt-24 px-4 max-w-4xl mx-auto mb-16">
                <h1 className="text-3xl font-bold mb-8">End User License Agreement</h1>
                <div className="prose">
                    <p>
                        <strong>Effective Date:</strong> 1/1/2025
                    </p>
                    <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
                    <p>
                        This End User License Agreement ("Agreement") is a legal agreement between you
                        ("User," "You," or "Your") and the developer of TravelLanka ("We," "Us," "Our") that
                        governs your use of the TravelLanka application ("App"). By downloading, installing, or
                        using the App, you agree to be bound by the terms of this Agreement. If you do not agree
                        to these terms, do not use the App.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">2. License Grant</h2>
                    <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to:</p>
                    <ul className="list-disc ml-6">
                        <li>Download, install, and use the App on a compatible device.</li>
                        <li>Access the App's features, content, and services for personal, non-commercial purposes.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">3. Restrictions</h2>
                    <p>You agree not to:</p>
                    <ul className="list-disc ml-6">
                        <li>Copy, modify, distribute, sell, or lease any part of the App.</li>
                        <li>Reverse engineer, decompile, or disassemble the App.</li>
                        <li>Use the App for any unlawful purpose or in violation of applicable laws or regulations.</li>
                        <li>Attempt to gain unauthorized access to the App, its servers, or networks connected to the App.</li>
                        <li>
                            Exploit the App's features in a way that disrupts its intended use or harms other users.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">4. Ownership</h2>
                    <p>
                        All intellectual property rights in the App, including but not limited to code, design,
                        graphics, and content, are owned by Us or Our licensors. You are granted no ownership
                        rights under this Agreement.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">5. Data Collection and Privacy</h2>
                    <p>Your use of the App is subject to our Privacy Policy. By using the App, you consent to:</p>
                    <ul className="list-disc ml-6">
                        <li>The collection, processing, and storage of your data as outlined in the Privacy Policy.</li>
                    </ul>
                    <p><strong>Collected Data Includes:</strong></p>
                    <ul className="list-disc ml-6">
                        <li>
                            <strong>Personal information:</strong> Your email address (via Firebase Authentication).
                        </li>
                        <li>
                            <strong>Location data:</strong> Used for personalization (e.g., displaying region-specific flags).
                        </li>
                        <li>
                            <strong>Usage data:</strong> Metrics such as app activity and user interaction.
                        </li>
                    </ul>
                    <p>
                        We implement appropriate security measures to protect your data. For more details, refer
                        to our <strong>Privacy Policy</strong>.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">6. Updates and Changes</h2>
                    <p>
                        <strong>App Updates:</strong> We may release updates to improve functionality, security,
                        or performance. You agree to install updates as they become available.
                    </p>
                    <p>
                        <strong>Changes to Terms:</strong> We reserve the right to modify this Agreement at any
                        time. Changes will be effective upon posting. Continued use of the App indicates
                        acceptance of the updated terms.
                    </p>

                    {/* Additional sections follow the same format */}
                </div>
            </div>
            {/* Footer */}
            <footer className="bg-gray-50 py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-500 text-sm">© 2025 TravelLanka Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Eula;
