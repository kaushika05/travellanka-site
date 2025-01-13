import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="min-h-screen font-inter">
            <Navbar />
            <div className="pt-24 px-4 max-w-4xl mx-auto mb-16">
                <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose">
                    <p><strong>Effective Date:</strong> 1/1/2025</p>

                    <h2 className="text-xl font-semibold mt-6">Introduction</h2>
                    <p>
                        Welcome to TravelLanka! Your privacy is critically important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our application. By using TravelLanka, you agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
                    <p>
                        TravelLanka complies with applicable data protection regulations, including the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR).
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
                    <h3 className="text-lg font-semibold mt-4">1. Personal Information You Provide</h3>
                    <p>We collect personal information when you:</p>
                    <ul className="list-disc ml-6">
                        <li>
                            <strong>Create an Account:</strong> Email address and password via Firebase Authentication.
                        </li>
                        <li>
                            <strong>Contact Us:</strong> Any information you voluntarily provide.
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">2. Location Data</h3>
                    <p>We collect precise location data to:</p>
                    <ul className="list-disc ml-6">
                        <li>Display flags relevant to your region.</li>
                        <li>Personalize your experience based on your location.</li>
                        <li>Suggest nearby cultural events and points of interest (if applicable).</li>
                    </ul>
                    <p>
                        You can disable location services in your device settings, but certain features may not function properly without location data.
                    </p>

                    <h3 className="text-lg font-semibold mt-4">3. Usage Data</h3>
                    <p>We automatically collect certain information about your device and usage, including:</p>
                    <ul className="list-disc ml-6">
                        <li>IP address.</li>
                        <li>Device type (e.g., mobile device, operating system).</li>
                        <li>App usage metrics (e.g., features accessed, session duration).</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">4. Data Stored in Firebase</h3>
                    <ul className="list-disc ml-6">
                        <li>Privacy Policy and EULA documents.</li>
                        <li>Your app preferences (e.g., flags personalization settings).</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">5. Cookies and Similar Technologies</h3>
                    <p>We use cookies or similar technologies for app functionality, analytics, and personalized services.</p>

                    <h2 className="text-xl font-semibold mt-6">How We Use Your Information</h2>
                    <ul className="list-disc ml-6">
                        <li>
                            <strong>Provide and Improve Services:</strong> Deliver core app functionality (e.g., location-based personalization) and maintain and improve our app.
                        </li>
                        <li>
                            <strong>Personalize Your Experience:</strong> Suggest regional features, flags, and cultural events.
                        </li>
                        <li>
                            <strong>Analytics and Monitoring:</strong> Analyze user behavior to improve app performance and features.
                        </li>
                        <li>
                            <strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and legal obligations.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">How We Share Your Information</h2>
                    <p>We do not sell your personal information. However, we may share your information with:</p>
                    <ul className="list-disc ml-6">
                        <li>
                            <strong>Service Providers:</strong> Trusted partners like Firebase, used for authentication and database management.
                        </li>
                        <li>
                            <strong>Legal Authorities:</strong> When required to comply with legal obligations, enforce our policies, or protect rights.
                        </li>
                        <li>
                            <strong>Aggregated Data:</strong> Non-identifiable, aggregated data may be shared for analytics or research.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Your Rights</h2>
                    <h3 className="text-lg font-semibold mt-4">Under the CCPA (California Residents)</h3>
                    <p>You have the following rights:</p>
                    <ul className="list-disc ml-6">
                        <li><strong>Right to Know:</strong> Request details about the personal data we collect, use, and disclose.</li>
                        <li><strong>Right to Delete:</strong> Request that we delete your personal data.</li>
                        <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of your personal data (we do not sell personal data).</li>
                    </ul>
                    <p>To exercise these rights, contact us at travellanka@gmail.com.</p>

                    <h3 className="text-lg font-semibold mt-4">Under the GDPR (EU Residents)</h3>
                    <p>You have the following rights:</p>
                    <ul className="list-disc ml-6">
                        <li><strong>Right to Access:</strong> Request access to your personal data.</li>
                        <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
                        <li><strong>Right to Erasure:</strong> Request deletion of your data.</li>
                        <li><strong>Right to Data Portability:</strong> Request a copy of your data in a structured format.</li>
                        <li><strong>Right to Restrict Processing:</strong> Request limitations on how your data is processed.</li>
                        <li><strong>Right to Object:</strong> Object to processing based on legitimate interests.</li>
                    </ul>
                    <p>To exercise these rights, contact us at travellanka@gmail.com.</p>

                    <h2 className="text-xl font-semibold mt-6">How We Protect Your Data</h2>
                    <p>We take reasonable and appropriate measures to protect your data, including:</p>
                    <ul className="list-disc ml-6">
                        <li><strong>Encryption:</strong> Data stored in Firebase is encrypted at rest and in transit.</li>
                        <li><strong>Access Control:</strong> Only authorized personnel have access to your personal data.</li>
                        <li><strong>Regular Security Audits:</strong> We monitor our app for potential vulnerabilities.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Data Retention</h2>
                    <p>We retain your data as long as necessary to provide our services, comply with legal obligations, or resolve disputes. You can request deletion of your data at any time.</p>

                    <h2 className="text-xl font-semibold mt-6">Third-Party Services</h2>
                    <p>We use the following third-party services:</p>
                    <ul className="list-disc ml-6">
                        <li><strong>Firebase Authentication:</strong> For user account creation and login.</li>
                        <li><strong>Firebase Firestore:</strong> For storing preferences and app data.</li>
                        <li><strong>Google Maps API:</strong> For location-based services (if applicable).</li>
                    </ul>
                    <p>Each service has its own privacy practices. Please review their respective privacy policies for more details.</p>

                    <h2 className="text-xl font-semibold mt-6">International Data Transfers</h2>
                    <p>If you are accessing our app from outside the United States, please note that your data may be transferred to and processed in the United States. By using the app, you consent to such transfers.</p>

                    <h2 className="text-xl font-semibold mt-6">Children's Privacy</h2>
                    <p>Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover we have collected data from a child without parental consent, we will delete it immediately.</p>

                    <h2 className="text-xl font-semibold mt-6">Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy periodically. Changes will be effective immediately upon posting in the app. We encourage you to review this policy regularly.</p>

                    <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:</p>
                    <ul className="list-disc ml-6">
                        <li>Email: travellanka@gmail.com</li>
                        <li>Address: 211 Grant Ave, Morgantown 26505, WV, The United States of America</li>
                        <li>Phone: +1 (304) 943-8620</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Acceptance of Policy</h2>
                    <p>By using TravelLanka, you accept the terms of this Privacy Policy. If you do not agree, please discontinue use of the app.</p>

                    <h2 className="text-xl font-semibold mt-6">Subscription and Payment Information</h2>
                    <p>
                        When you subscribe to TravelLanka Premium ($9.99/month), we collect and process payment information through our secure payment processor. For detailed terms regarding subscriptions, please refer to our <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link>.
                    </p>
                    <h3 className="text-lg font-semibold mt-4">Payment Data Collection</h3>
                    <ul className="list-disc ml-6">
                        <li>Payment method details (processed securely by our payment provider)</li>
                        <li>Billing address</li>
                        <li>Subscription status and history</li>
                        <li>Transaction records</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">Payment Data Usage</h3>
                    <p>We use payment information to:</p>
                    <ul className="list-disc ml-6">
                        <li>Process subscription payments</li>
                        <li>Manage recurring billing</li>
                        <li>Provide customer support for billing issues</li>
                        <li>Comply with financial regulations</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">Payment Security</h3>
                    <p>
                        We prioritize the security of your payment information:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>All payment processing is handled by PCI-DSS compliant providers</li>
                        <li>We never store complete credit card information on our servers</li>
                        <li>Payment data is encrypted during transmission</li>
                    </ul>

                    <p>
                        For more information about subscription terms, billing practices, and cancellation policies, please review our <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link>.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
