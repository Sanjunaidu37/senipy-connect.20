
import React from 'react';
import { Voicemail, Gamepad, Puzzle, Heart, User, ShoppingCart, Bell, Check, Info } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
  <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border card-hover animate-fade-in ${className}`}>
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="section-container bg-secondary/50">
      <div className="text-center mb-16">
        <h2 className="section-title">Designed for Simplicity</h2>
        <p className="section-subtitle mx-auto">
          Senipy makes technology accessible and enjoyable for elderly users with intuitive features designed specifically for their needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <FeatureCard 
          icon={Voicemail}
          title="Voice Integration"
          description="Effortlessly control the app with natural voice commands for a hands-free experience."
          className="lg:translate-y-4 delay-[50ms]"
        />
        
        <FeatureCard 
          icon={Heart}
          title="Health Monitoring"
          description="Track vital health metrics and share insights with caregivers and healthcare providers."
          className="delay-[100ms]"
        />
        
        <FeatureCard 
          icon={Gamepad}
          title="Interactive Games"
          description="Engage with fun, cognitively stimulating games designed to keep the mind active."
          className="lg:translate-y-4 delay-[150ms]"
        />
        
        <FeatureCard 
          icon={ShoppingCart}
          title="Voice Shopping"
          description="Order essentials using simple voice commands with built-in safety verification."
          className="delay-[200ms]"
        />
        
        <FeatureCard 
          icon={Bell}
          title="Smart Reminders"
          description="Never miss important medication or appointments with gentle, timely reminders."
          className="delay-[250ms]"
        />
        
        <FeatureCard 
          icon={User}
          title="Guardian Connect"
          description="Stay connected with family and caregivers for peace of mind and security."
          className="lg:translate-y-4 delay-[300ms]"
        />
      </div>

      <div className="mt-16 md:mt-24 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Cognitive Engagement Games</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our specially designed puzzles and games help maintain cognitive function and provide enjoyable entertainment.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mr-2">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium">Word Puzzles</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 mr-2">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="font-medium">Memory Games</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-xl bg-white p-4 flex items-center justify-center shadow-sm border border-border">
              <Puzzle className="h-12 w-12 text-primary" />
            </div>
            <div className="aspect-square rounded-xl bg-white p-4 flex items-center justify-center shadow-sm border border-border">
              <Gamepad className="h-12 w-12 text-accent" />
            </div>
            <div className="aspect-square rounded-xl bg-white p-4 flex items-center justify-center shadow-sm border border-border">
              <Info className="h-12 w-12 text-blue-500" />
            </div>
            <div className="aspect-square rounded-xl bg-white p-4 flex items-center justify-center shadow-sm border border-border">
              <Heart className="h-12 w-12 text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
