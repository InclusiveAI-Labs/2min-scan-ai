import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mri-scanner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic MRI Scanner with AI" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-hero mb-6">
            <span className="block text-foreground">2MinScan AI</span>
            <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Generative AI for 2-Minute MRI/CT Scans
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Cut MRI and CT scan times by{" "}
            <span className="counter-animate font-bold text-2xl md:text-3xl">90%</span>{" "}
            with real-time, physics-informed generative AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              Join the Waitlist
            </Button>
            <Button variant="medical" size="xl" className="min-w-[200px]">
              Contact Us
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-count-up">
              <div className="text-metric counter-animate">0.3s</div>
              <p className="text-muted-foreground font-medium">Per Slice Inference</p>
            </div>
            <div className="text-center animate-count-up">
              <div className="text-metric counter-animate">96-99%</div>
              <p className="text-muted-foreground font-medium">Clinical Accuracy</p>
            </div>
            <div className="text-center animate-count-up">
              <div className="text-metric counter-animate">&lt;25%</div>
              <p className="text-muted-foreground font-medium">Raw Data Needed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating AI Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse hidden lg:block" />
    </section>
  );
};

export default Hero;