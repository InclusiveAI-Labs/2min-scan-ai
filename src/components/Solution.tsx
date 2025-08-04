const Solution = () => {
  return (
    <section className="py-20 medical-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section mb-8">Our Revolutionary Solution</h2>
          <p className="text-xl text-muted-foreground">
            Advanced generative AI that reconstructs full diagnostic scans from minimal data
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Solution Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-medical">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Physics-Informed Generative AI</h3>
                <p className="text-muted-foreground">
                  Trained across diverse datasets with deep understanding of medical imaging physics
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-medical">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Minimal Data Requirements</h3>
                <p className="text-muted-foreground">
                  Reconstructs diagnostic-quality scans from <strong>&lt;25% raw data</strong>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-medical">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-accent-foreground font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Real-Time Processing</h3>
                <p className="text-muted-foreground">
                  <strong>One-step real-time inference (0.3s/slice)</strong> ready for clinical workflows
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-medical">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Seamless Integration</h3>
                <p className="text-muted-foreground">
                  Fully compatible with <strong>existing MRI/CT infrastructure</strong>—no new hardware required
                </p>
              </div>
            </div>
          </div>
          
          {/* Visual Process */}
          <div className="flex flex-col justify-center">
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-xl font-semibold text-center mb-8">AI Reconstruction Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <span className="font-bold text-muted-foreground">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-destructive rounded-full"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Undersampled Raw Data</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-2xl text-primary animate-pulse">↓</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">AI</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-muted rounded-full overflow-hidden scan-transition">
                      <div className="h-full w-full bg-primary rounded-full"></div>
                    </div>
                    <p className="text-sm text-foreground mt-1 font-medium">Generative AI Processing</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-2xl text-accent animate-pulse">↓</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <span className="font-bold text-accent-foreground">✓</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-full bg-accent rounded-full"></div>
                    </div>
                    <p className="text-sm text-foreground mt-1 font-medium">Diagnostic-Quality Scan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Process Visual */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-card rounded-2xl p-6 shadow-medical">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-2">
                <span className="text-muted-foreground font-bold">10%</span>
              </div>
              <p className="text-sm font-medium">Raw Data</p>
            </div>
            
            <div className="text-primary text-2xl font-bold">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-2">
                <span className="text-primary-foreground font-bold">AI</span>
              </div>
              <p className="text-sm font-medium">Processing</p>
            </div>
            
            <div className="text-accent text-2xl font-bold">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-2">
                <span className="text-accent-foreground font-bold">100%</span>
              </div>
              <p className="text-sm font-medium">Complete Scan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;