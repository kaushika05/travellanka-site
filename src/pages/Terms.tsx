import Navbar from '../components/Navbar';

const Terms = () => {
    return (
        <div className="min-h-screen font-inter">
            <Navbar />
            <div className="pt-24 px-4 max-w-4xl mx-auto mb-16">
                <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
                <div className="prose">
                    <p>
                        <strong>Last Updated:</strong> 1/1/2025
                    </p>

                    <h2 className="text-xl font-semibold mt-6">1. Premium Subscription</h2>
                    <p>
                        By subscribing to TravelLanka Premium for $9.99/month, you agree to the following terms:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Subscription fees are billed monthly in advance</li>
                        <li>You may cancel your subscription at any time</li>
                        <li>No refunds for partial months</li>
                        <li>Features and benefits may change with notice</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">2. Service Access</h2>
                    <p>
                        Premium features are subject to availability and may vary by region. We reserve
                        the right to modify, suspend, or discontinue any part of the service with notice.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">3. Usage Guidelines</h2>
                    <p>
                        Premium accounts are for individual use only and may not be shared. Violation
                        may result in account termination without refund.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">4. Payment Terms</h2>
                    <p>
                        Subscription fees are processed through secure payment providers. Failed payments
                        may result in service interruption until resolved.
                    </p>
                </div>
            </div>
            <footer className="bg-gray-50 py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-500 text-sm">© 2025 TravelLanka Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Terms;