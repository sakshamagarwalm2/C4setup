import { Metadata } from "next";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us | GreenTrace",
  description: "Get in touch with our team for inquiries, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Have questions about our products or services? Interested in partnering with us? 
              Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-lg font-medium mb-2">Office Address</h3>
                <p className="text-muted-foreground">
                  #23, 1st Cross, 2nd Main Road<br />
                  Doddanekundi Industrial Area 2, Phase 1<br />
                  Bangalore - 560048, KA, India
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  General Enquiries: <a href="tel:+918050887479" className="text-primary hover:underline">+91 80508 87479</a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-muted-foreground">
                  Queries: <a href="mailto:hello@newtrace.io" className="text-primary hover:underline">hello@newtrace.io</a><br />
                  Grievances: <a href="mailto:grievance@newtrace.io" className="text-primary hover:underline">grievance@newtrace.io</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                  placeholder="Your name" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                  placeholder="Your email" 
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                  placeholder="Subject" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="min-h-[120px]" 
                />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}