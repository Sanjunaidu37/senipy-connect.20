
import React from 'react';

const TestimonialCard = ({ quote, author, role, className = "" }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-border animate-fade-in ${className}`}>
    <div className="mb-6">
      <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
    </div>
    <blockquote className="text-lg text-foreground mb-4">{quote}</blockquote>
    <div className="font-medium">{author}</div>
    <div className="text-sm text-muted-foreground">{role}</div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">What People Are Saying</h2>
        <p className="section-subtitle mx-auto">
          Hear from families and caregivers who have experienced the positive impact of Senipy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <TestimonialCard 
          quote="Senipy has transformed how my mother interacts with technology. The voice commands make it so easy for her."
          author="Jane Cooper"
          role="Daughter of Senipy User"
          className="delay-[50ms]"
        />
        
        <TestimonialCard 
          quote="As a geriatric physician, I recommend Senipy to my patients. The health monitoring features provide valuable insights."
          author="Dr. Robert Chen"
          role="Geriatric Specialist"
          className="delay-[100ms]"
        />
        
        <TestimonialCard 
          quote="The games keep my father mentally engaged, and we love the peace of mind the monitoring features provide our family."
          author="Michael Stevens"
          role="Son of Senipy User"
          className="delay-[150ms]"
        />
        
        <TestimonialCard 
          quote="The voice shopping feature has given my grandmother back her independence. She no longer has to wait for visits to get essentials."
          author="Lisa Johnson"
          role="Granddaughter"
          className="delay-[200ms]"
        />
        
        <TestimonialCard 
          quote="Setting up Senipy was incredibly simple. The interface is clean and my patients find it intuitive to use."
          author="Sarah Miller"
          role="Home Care Nurse"
          className="delay-[250ms]"
        />
        
        <TestimonialCard 
          quote="I was skeptical at first, but Senipy has become an essential part of my daily routine. The voice control is remarkable."
          author="William Davis"
          role="Senipy User, 78"
          className="delay-[300ms]"
        />
      </div>
    </section>
  );
};

export default Testimonials;
