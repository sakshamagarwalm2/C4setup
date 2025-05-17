"use client";

import { useApiContext } from '@/lib/api-context';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProductsSection({ onProductEnquiryClick }) {
  const { products, productsLoading, productsError } = useApiContext();

  if (productsLoading) {
    return <div className="container py-12 text-center">Loading products...</div>;
  }

  if (productsError) {
    return <div className="container py-12 text-center">Failed to load products. Please try again later.</div>;
  }

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products && products.map((product) => (
          <Card key={product._id} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{product.description}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={onProductEnquiryClick} className="w-full">
                Enquire Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}