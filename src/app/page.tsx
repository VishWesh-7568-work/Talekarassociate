'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DisclaimerDialog } from '@/components/DisclaimerDialog';
import { ArrowRight, Lock, Users, Award } from 'lucide-react';

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = React.useState(true);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAcknowledge = () => {
    setShowDisclaimer(false);
  };

  const acknowledged = !showDisclaimer;

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {showDisclaimer && <DisclaimerDialog onAcknowledge={handleAcknowledge} />}
      <div className={`transition-filter duration-500 ${!acknowledged ? 'blur-sm pointer-events-none' : ''}`}>
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
          <Image
            src="https://advtalekar.com/static/img/experties.jpg"
            alt="Law firm building"
            fill
            className="absolute z-0 opacity-20 object-cover"
            data-ai-hint="modern architecture"
          />
          <div className="relative z-10 p-6 bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary mb-4">
              Talekar & Associates
            </h1>
            <p className="text-lg md:text-2xl font-body max-w-3xl mx-auto text-gray-200">
              Excellence in Legal Practice. Commitment to Justice.
            </p>
            <Link href="/practice-areas" passHref>
              <Button size="lg" className="mt-8 glow-on-hover">
                Explore Our Expertise <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">A Legacy of Legal Excellence</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Talekar & Associates is a premier law firm dedicated to providing exceptional legal services across a wide spectrum of practice areas. Our team of seasoned attorneys combines deep legal knowledge with a client-centered approach to deliver effective solutions and achieve favorable outcomes.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary relative">
           <Image
            src="https://placehold.co/1920x1080.png"
            alt="Abstract background"
            fill
            className="absolute z-0 opacity-5 object-cover"
            data-ai-hint="abstract texture"
          />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-primary/20 text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Lock className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-headline text-accent">Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">We build lasting relationships based on trust, transparency, and an unwavering commitment to our clients' success.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/20 text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-headline text-accent">Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">With over four decades of experience, we bring seasoned expertise to every case, tackling complex legal challenges with intellectual rigor.</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-primary/20 text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-headline text-accent">Discipline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Our disciplined approach ensures meticulous preparation, strategic thinking, and a relentless pursuit of justice for our clients.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="practice-areas" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 text-primary">Our Practice Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {['Criminal Law', 'Commercial Law', 'Cooperative & Trust Laws', 'Caste Rights & Constitution'].map((area, index) => (
                  <Card key={index} className="bg-card border-primary/20 text-center hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardHeader>
                       <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                          <Award className="h-10 w-10 text-primary" />
                       </div>
                       <CardTitle className="text-2xl font-headline text-accent">{area}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400">Expert legal services for {area.toLowerCase()}.</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
            <div className="text-center mt-12">
                <Link href="/practice-areas" passHref>
                  <Button variant="outline">
                    View All Practice Areas
                  </Button>
                </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
                <Image src="https://i.pinimg.com/736x/d4/06/39/d406390f1b8850c85f1d6f7a93967286.jpg" alt="Client meeting" data-ai-hint="business meeting" fill className="rounded-lg object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4 text-primary">Client-Centric Philosophy</h2>
                <p className="text-lg text-gray-300">
                    We build lasting relationships based on trust, transparency, and an unwavering commitment to our clients' success.
                </p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
