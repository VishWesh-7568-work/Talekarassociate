'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function Footer() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-primary/20">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="flex flex-col items-start">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <Image src="https://images.squarespace-cdn.com/content/v1/68514411b31e545b00603813/e7d79576-663b-441b-815a-ee0e4919cbba/TALEKAR++%26++ASSOCIATES+%281%29+%281%29.png?format=1500w" alt="Talekar & Associates Logo" width={200} height={40} className="w-48" />
            </Link>
            <p className="text-muted-foreground">
              A premier law firm committed to delivering justice and legal excellence. Our foundation is built on integrity, dedication, and unparalleled legal expertise.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-4 text-accent">Contact Us</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background" />
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
                      <FormLabel className="sr-only">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Email" {...field} className="bg-background" />
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
                      <FormLabel className="sr-only">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your Message" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full glow-on-hover">Send Message</Button>
              </form>
            </Form>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-2xl font-headline font-semibold mb-4 text-accent">Our Offices</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-bold text-foreground">Mumbai</h4>
                <p>#1,2, Business Centre, Taj Wellington Mews, Nathalal Parekh Marg, Colaba, Mumbai</p>
                <p>Phone: +91 93211 42140</p>
                <p>Email: staffmumbai@advtalekar.org</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground">Kolhapur</h4>
                <p>office #10-12 vishwakarma prestige phase-III,nagala park, kholhapur</p>
                <p>Phone: +919270210552</p>
                <p>Email: kolhapur@advtalekar.co.in</p>
              </div>
               <div>
                <h4 className="font-bold text-foreground">Chatrapati Sambhajinagar</h4>
                <p>#2, Vedant Nagar, Station Road, Chh. Sambhajinagar</p>
                <p>Phone: +91-9422210552</p>
                <p>Email: contact@advtalekar.co.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Talekar & Associates. All Rights Reserved.</p>
           <p className="text-sm mt-2">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link> | 
            <Link href="/terms-of-service" className="hover:text-primary transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
