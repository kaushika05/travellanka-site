import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      joinBeta: false,
      marketing: false,
    },
  });

  const onSubmit = async (data: never) => {
    console.log("Form submitted:", data);
    toast.success("Message sent successfully!");
    form.reset();
  };

  return (
    <section className="py-16 px-4 bg-gradient-custom">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Join the Beta or Contact Us</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="joinBeta"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-white data-[state=checked]:bg-primary data-[state=checked]:border-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        I want to join the beta program
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketing"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-white data-[state=checked]:bg-primary data-[state=checked]:border-white"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-white">
                        I consent to receiving occasional marketing messages
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-primary py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Send Message
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;