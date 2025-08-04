const Problem = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-12">The Critical Problem We're Solving</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Problem 1 */}
            <div className="bg-card rounded-xl p-8 shadow-medical hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-destructive text-2xl font-bold">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Massive Wait Times</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Millions wait weeks to months</strong> for scans, delaying critical 
                treatment and worsening patient outcomes.
              </p>
            </div>
            
            {/* Problem 2 */}
            <div className="bg-card rounded-xl p-8 shadow-medical hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-destructive text-2xl font-bold">⚠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Safety & Comfort Issues</h3>
              <p className="text-muted-foreground leading-relaxed">
                MRI scans are slow and uncomfortable, while <strong>CT scans carry 
                radiation risks</strong> from prolonged exposure.
              </p>
            </div>
            
            {/* Problem 3 */}
            <div className="bg-card rounded-xl p-8 shadow-medical hover:shadow-elegant transition-smooth">
              <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <span className="text-destructive text-2xl font-bold">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Healthcare System Strain</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hospitals face <strong>crippling imaging backlogs</strong> that cost 
                lives and overwhelm medical staff.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-accent-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              We are fixing this by making MRI/CT scans faster, safer, and globally accessible.
            </h3>
            <p className="text-lg text-muted-foreground">
              Revolutionary AI technology that transforms medical imaging from the ground up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;