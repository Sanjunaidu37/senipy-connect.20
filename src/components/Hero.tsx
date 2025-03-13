
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Voicemail, Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 lg:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_80%)]"></div>
      </div>
      
      <div className="section-container lg:pt-8 pb-0">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-primary mb-6 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Transforming care for elderly
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight text-balance mb-6 animate-fade-in">
            Empowering seniors<br />through <span className="text-primary">technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 animate-fade-in delay-75">
            Senipy makes technology accessible for elderly with voice commands, 
            health monitoring, and interactive games to enhance daily living.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in delay-150">
            <Link to="/register">
              <Button size="lg" className="hero-button bg-primary hover:bg-primary/90 text-white">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/#features">
              <Button size="lg" variant="outline" className="hero-button">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto mt-8 animate-scale-in delay-300">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-100 to-white/70 border border-blue-100/80 shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                    <Voicemail className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                  </div>
                  <p className="text-sm md:text-base font-medium">Voice Control</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                    <Heart className="h-8 w-8 md:h-10 md:w-10 text-accent" />
                  </div>
                  <p className="text-sm md:text-base font-medium">Health Insights</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                    <Bell className="h-8 w-8 md:h-10 md:w-10 text-green-500" />
                  </div>
                  <p className="text-sm md:text-base font-medium">Smart Alerts</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-5/6 h-12 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
