
import Link from 'next/link';
import { NewtraceLogo } from '@/components/icons/newtrace-logo';
import { siteConfig } from '@/config/site';
import { Linkedin, Twitter, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/80">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Column 1: Logo, Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="GreenTrace Home">
              <NewtraceLogo className="h-8 w-auto text-primary-foreground" />
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase text-primary-foreground">
              NEWTRACE PRIVATE LIMITED
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              #23, 1st Cross, 2nd Main Road, Doddanekundi Industrial Area 2, Phase 1, Bangalore - 560048, KA, India.
            </p>
            <p className="mt-2 text-sm text-primary-foreground/80">
              CIN: U31900KA2021PTC153080
            </p>
          </div>

          {/* Column 2: Electrolyzer Links */}
          <div>
            <p className="font-semibold text-primary-foreground">Electrolyzer</p>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.footerNav.electrolyzer.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources Links */}
          <div>
            <p className="font-semibold text-primary-foreground">Resources</p>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.footerNav.resources.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div>
            <p className="font-semibold text-primary-foreground">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.footerNav.company.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Social Media & Contact */}
          <div className="lg:col-span-1">
            <div className="flex space-x-4 mb-6">
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <ul className="space-y-4 text-sm"> {/* Increased spacing between phone and mail blocks slightly */}
                <li>
                    <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-2 mt-0.5 text-primary-foreground flex-shrink-0" />
                        <div className="flex items-baseline space-x-1">
                            <span className="text-xs text-primary-foreground/70">General Enquiries:</span>
                            <a href="tel:+918050887479" className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">+91 80508 87479</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-2 mt-0.5 text-primary-foreground flex-shrink-0" />
                        <div className="space-y-1"> {/* Keep Queries and Grievances vertically stacked, but their labels/values inline */}
                            <div className="flex items-baseline space-x-1">
                                <span className="text-xs text-primary-foreground/70">Queries:</span>
                                <a href="mailto:hello@newtrace.io" className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">hello@newtrace.io</a>
                            </div>
                            <div className="flex items-baseline space-x-1">
                                <span className="text-xs text-primary-foreground/70">Grievances:</span>
                                <a href="mailto:grievance@newtrace.io" className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">grievance@newtrace.io</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/30 pt-8">
          <div className="sm:flex sm:justify-between sm:items-center">
            <p className="text-xs text-primary-foreground/80">&copy; {new Date().getFullYear()} NewTrace. Made in India.</p>
            <ul className="mt-4 sm:mt-0 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              {siteConfig.footerNav.legal.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-primary-foreground/60 transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
