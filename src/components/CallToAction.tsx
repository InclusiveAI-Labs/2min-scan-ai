import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 medical-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card rounded-3xl p-12 shadow-elegant">
          <h2 className="text-section mb-6">
            Join us in redefining medical imaging
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Be the first to validate <strong className="text-primary">2MinScan AI</strong> at your hospital 
            and help bring revolutionary imaging technology to patients worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="xl" className="min-w-[250px]">
              Join the Waitlist
            </Button>
            <Button variant="medical" size="xl" className="min-w-[250px]">
              Contact Us
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">🔬</span>
              </div>
              <p className="font-medium">Clinically Validated</p>
              <p className="text-sm text-muted-foreground">96-99% accuracy</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold">⚡</span>
              </div>
              <p className="font-medium">Real-Time Ready</p>
              <p className="text-sm text-muted-foreground">0.3s per MRI image</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">🏥</span>
              </div>
              <p className="font-medium">Easy Integration</p>
              <p className="text-sm text-muted-foreground">No new hardware</p>
            </div>
          </div>
          
          {/* Company Credit */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              A product of <span className="text-primary font-semibold">InclusiveAI Labs</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;