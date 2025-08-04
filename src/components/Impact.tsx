import medicalIcons from "@/assets/medical-icons.jpg";

const Impact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section mb-8">Transformative Impact</h2>
          <p className="text-xl text-muted-foreground">
            Revolutionary improvements across the entire healthcare imaging ecosystem
          </p>
        </div>
        
        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-card rounded-xl shadow-medical hover:shadow-elegant transition-smooth">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">⏱️</span>
            </div>
            <div className="text-metric counter-animate mb-2">90%</div>
            <p className="font-semibold text-lg mb-1">Reduction in scan times</p>
            <p className="text-muted-foreground text-sm">& waitlists</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-medical hover:shadow-elegant transition-smooth">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-accent text-2xl">🏥</span>
            </div>
            <div className="text-metric counter-animate mb-2">10x</div>
            <p className="font-semibold text-lg mb-1">Increase in hospital</p>
            <p className="text-muted-foreground text-sm">throughput</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-medical hover:shadow-elegant transition-smooth">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">🛡️</span>
            </div>
            <div className="text-metric counter-animate mb-2">Lower</div>
            <p className="font-semibold text-lg mb-1">CT radiation</p>
            <p className="text-muted-foreground text-sm">exposure</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-medical hover:shadow-elegant transition-smooth">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-accent text-2xl">🌍</span>
            </div>
            <div className="text-metric counter-animate mb-2">Global</div>
            <p className="font-semibold text-lg mb-1">Democratized imaging</p>
            <p className="text-muted-foreground text-sm">for all regions</p>
          </div>
        </div>
        
        {/* Impact Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Real-World Benefits</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Patient Experience</h4>
                  <p className="text-muted-foreground">
                    Faster scans mean less time in uncomfortable positions, reduced anxiety, 
                    and quicker access to life-saving diagnoses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-accent/5 rounded-lg">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Healthcare Efficiency</h4>
                  <p className="text-muted-foreground">
                    Hospitals can serve 10x more patients with existing equipment, 
                    dramatically reducing backlogs and improving care delivery.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-primary/5 rounded-lg">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Global Health Equity</h4>
                  <p className="text-muted-foreground">
                    Making advanced imaging accessible in resource-limited regions, 
                    bringing world-class diagnostics to underserved populations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={medicalIcons} 
              alt="Medical Impact Visualization" 
              className="w-full rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-primary-foreground font-semibold text-lg text-center">
                Transforming Healthcare Imaging Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;