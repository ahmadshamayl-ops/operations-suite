import { Building2, Brain } from "lucide-react";

const ClosingBrand = () => {
  return (
    <section className="relative py-32 bg-gradient-premium overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="relative">
            <Building2 className="w-20 h-20 text-accent" />
            <Brain className="w-10 h-10 text-secondary absolute -bottom-2 -right-2 bg-primary rounded-full p-2" />
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
          Ashlar Intelligent<br />Operations Suite
        </h2>

        <div className="text-3xl md:text-4xl text-accent font-light mb-8">
          AI-Driven Efficiency. Insight Without Friction.
        </div>

        <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-12">
          Strategic clarity. Enterprise integration. Tangible cost-efficiency gains.
          <br />Built for executive decision-making in hospitality operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-primary-foreground/90">Enterprise System Integration</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
            <div className="text-4xl font-bold text-accent mb-2">Real-Time</div>
            <div className="text-primary-foreground/90">AI-Powered Analytics</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-8">
            <div className="text-4xl font-bold text-accent mb-2">Zero</div>
            <div className="text-primary-foreground/90">Manual Data Entry</div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/70 mb-2">
            Enterprise Architecture by Ashlar AI Systems
          </p>
          <p className="text-xs text-primary-foreground/60">
            Designed for Hyatt Hotels & Resorts | 2025 Strategic Initiative
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingBrand;
