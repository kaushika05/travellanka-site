import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/sections/Footer';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const CancelSubscription = () => {
    const navigate = useNavigate();
    const [reason, setReason] = useState<string>("");
    const [feedback, setFeedback] = useState<string>("");

    const handleKeepSubscription = () => {
        toast.success("Thank you for staying with us!");
        navigate('/');
    };

    const handleConfirmCancellation = () => {
        console.log('Cancellation reason:', reason);
        console.log('Additional feedback:', feedback);
        toast.success("Your subscription has been cancelled. You'll have access until the end of your current billing period.");
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container max-w-2xl mx-auto px-4 pt-24 pb-16">
                <div className="space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-primary">We're Sorry to See You Go</h1>
                        <p className="text-gray-600">
                            Your subscription will remain active until the end of your current billing period.
                            You're welcome to resubscribe at any time.
                        </p>
                    </div>

                    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Would you mind telling us why you're leaving?</h2>
                            <RadioGroup onValueChange={setReason} className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="too-expensive" id="too-expensive" />
                                    <Label htmlFor="too-expensive">Too expensive</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="not-useful" id="not-useful" />
                                    <Label htmlFor="not-useful">Not using it enough</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="missing-features" id="missing-features" />
                                    <Label htmlFor="missing-features">Missing features I need</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="other" id="other" />
                                    <Label htmlFor="other">Other reason</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="feedback">Additional feedback (optional)</Label>
                            <Textarea
                                id="feedback"
                                placeholder="Tell us more about your experience..."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="min-h-[100px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleKeepSubscription}
                            className="sm:order-1"
                        >
                            No, I Want to Keep My Subscription
                        </Button>
                        <Button
                            variant="destructive"
                            size="lg"
                            onClick={handleConfirmCancellation}
                            className="sm:order-2"
                        >
                            Yes, Cancel My Subscription
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CancelSubscription;