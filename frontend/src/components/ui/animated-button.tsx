import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'onCard' | 'onCardLime' | 'primaryBlue';
  className?: string;
  icon?: LucideIcon;
  target?: string;
  rel?: string;
}

export function AnimatedButton({ 
  href, 
  children, 
  variant = 'primary', 
  className,
  icon: Icon,
  ...props 
}: AnimatedButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-md text-sm font-medium transition-all duration-300 ease-out";
  
  const variantClasses = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-primary ", // Main CTA: Lime green with 2px blue border
    secondary: "bg-transparent text-primary border-2 border-primary hover:bg-primary/10", // Blue outline with 2px border
    onCard: "bg-background text-foreground hover:bg-muted border-2 border-primary", // Default on-card button with 2px blue border
    onCardLime: "bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-primary", // Lime green button on a card with 2px blue border
    primaryBlue: "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] border-2 border-primary", // Blue button with 2px blue border
  };

  const content = (
    <>
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses[variant], className)} target={props.target} rel={props.rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {content}
    </button>
  );
}
