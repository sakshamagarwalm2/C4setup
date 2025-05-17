'use client'

import { Button } from "@/components/ui/button";

export function ProductEnquiryButton() {
  const handleClick = () => {
    console.log('Product enquiry clicked');
    // Your product enquiry logic here
  };

  return (
    <Button onClick={handleClick}>Product Enquiry</Button>
  );
}