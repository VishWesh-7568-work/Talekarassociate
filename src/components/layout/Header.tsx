'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="https://images.squarespace-cdn.com/content/v1/68514411b31e545b00603813/e7d79576-663b-441b-815a-ee0e4919cbba/TALEKAR++%26++ASSOCIATES+%281%29+%281%29.png?format=1500w" alt="Talekar & Associates Logo" width={200} height={40} className="w-48 md:w-64" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary outline-none">
              About Us <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/about">About The Firm</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/people">Our People</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/history">Our History</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/office-culture">Office Culture</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/practice-areas" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/sectors" className="transition-colors hover:text-primary">Sectors</Link>
          <Link href="/insights" className="transition-colors hover:text-primary">Insights</Link>
          <Link href="/news" className="transition-colors hover:text-primary">News</Link>
          <Link href="/careers" className="transition-colors hover:text-primary">Careers</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/login">Admin Login</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-secondary">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="font-semibold" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/about" className="font-semibold" onClick={() => setOpen(false)}>About The Firm</Link>
                <Link href="/people" className="font-semibold" onClick={() => setOpen(false)}>Our People</Link>
                <Link href="/history" className="font-semibold" onClick={() => setOpen(false)}>Our History</Link>
                 <Link href="/office-culture" className="font-semibold" onClick={() => setOpen(false)}>Office Culture</Link>
                <Link href="/practice-areas" className="font-semibold" onClick={() => setOpen(false)}>Services</Link>
                <Link href="/sectors" className="font-semibold" onClick={() => setOpen(false)}>Sectors</Link>
                <Link href="/insights" className="font-semibold" onClick={() => setOpen(false)}>Insights</Link>
                <Link href="/news" className="font-semibold" onClick={() => setOpen(false)}>News</Link>
                <Link href="/careers" className="font-semibold" onClick={() => setOpen(false)}>Careers</Link>
                <Link href="/contact" className="font-semibold" onClick={() => setOpen(false)}>Contact</Link>
                <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href="/admin/login">Admin Login</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
