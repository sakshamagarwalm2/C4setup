"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    // Simulate subscription
    console.log("Subscribing email:", email);
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Newtrace is committed to providing you with industry highlights, interviews, updates and worldwide news on the energy industry and green technology.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 h-12 bg-card border-input text-base"
                aria-label="Email for newsletter"
                />
            </div>
            <AnimatedButton type="submit" variant="primary" className="h-12 px-8">
              Subscribe
            </AnimatedButton>
          </form>
        </div>
      </div>
    </section>
  );
}
