import scanComparison from "@/assets/scan-comparison.jpg";

const About = () => {
  return (
    <section className="py-20 medical-gradient">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section mb-8">About 2MinScan AI</h2>
          
          <div className="text-lg text-foreground leading-relaxed space-y-6">
            <p>
              <strong>2MinScan AI</strong>, a product of{" "}
              <span className="text-primary font-semibold">InclusiveAI Labs</span>, 
              is building the future of fast, intelligent medical imaging. We use cutting-edge{" "}
              <span className="text-accent font-semibold">generative AI</span> to reconstruct 
              diagnostic-quality MRI and CT scans from as little as{" "}
              <span className="text-primary font-semibold">10–25% of raw data</span>.
            </p>
            
            <p>
              Our breakthrough{" "}
              <span className="text-accent font-semibold">one-step reconstruction engine</span>{" "}
              delivers <span className="text-primary font-semibold">96–99% clinical accuracy 
              in just 0.3 seconds per slice</span>, making it the first real-time-ready 
              generative imaging solution for MRI and CT.
            </p>
          </div>
        </div>
        
        {/* Demo Video Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-medical p-8">
            <h3 className="text-2xl font-semibold text-center mb-8">
              🔗 Demo Video: See 2MinScan AI in Action
            </h3>
            
            {/* Video Embed */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-elegant scan-transition mb-6">
              <iframe
                src="https://www.youtube.com/embed/pFWRpaeOhoU"
                title="2MinScan AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            
            {/* Demo Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">AI</span>
                </div>
                <p className="font-medium">Side-by-side MRI reconstruction</p>
                <p className="text-sm text-muted-foreground">Raw vs AI-reconstructed comparison</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">⚡</span>
                </div>
                <p className="font-medium">Real-time speed demonstration</p>
                <p className="text-sm text-muted-foreground">0.3s slice inference animation</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">🏥</span>
                </div>
                <p className="font-medium">Hospital PACS integration</p>
                <p className="text-sm text-muted-foreground">Seamless clinical workflow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;