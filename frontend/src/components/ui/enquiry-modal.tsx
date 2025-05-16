"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button"; // Using AnimatedButton now
import { AnimatedButton } from "@/components/ui/animated-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  productType: z.string({ required_error: "Please select a product type." }),
  message: z.string().optional(),
});

type EnquiryFormValues = z.infer<typeof formSchema>;

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const { toast } = useToast();
  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: EnquiryFormValues) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Enquiry submitted:", values);
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you! Your submission has been received.",
    });
    form.reset();
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-background p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-semibold text-foreground">Product Enquiry</DialogTitle>
          <DialogDescription className="sr-only">Fill out the form to make a product enquiry.</DialogDescription>
        </DialogHeader>
        <div className="p-6 pt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} className="bg-card border-input" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} className="bg-card border-input" />
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
                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your company mail id" {...field} className="bg-card border-input" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Product Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-card border-input">
                          <SelectValue placeholder="Select a product type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10-100kW">10-100kW</SelectItem>
                        <SelectItem value="250-500kW">250-500kW</SelectItem>
                        <SelectItem value=">1MW">&gt; 1MW</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type in your message here"
                        className="resize-none bg-card border-input"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className="pt-4">
                <AnimatedButton type="submit" variant="primary" className="w-full"> {/* Changed to AnimatedButton and variant primary (lime) */}
                  Submit Enquiry
                </AnimatedButton>
              </DialogFooter>
            </form>
          </Form>
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
