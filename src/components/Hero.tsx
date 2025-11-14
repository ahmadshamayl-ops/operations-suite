import { Building2, Brain, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-premium overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="relative">
            <Building2 className="w-16 h-16 text-accent" />
            <Brain className="w-8 h-8 text-secondary absolute -bottom-1 -right-1 bg-primary rounded-full p-1" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight animate-fade-in-up">
          Ashlar Intelligent<br />Operations Suite
        </h1>
        
        <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-light animate-fade-in-up animation-delay-200">
          AI-Driven Efficiency. Insight Without Friction.
        </p>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
          Enterprise automation and AI architecture for U.S. hospitality operations.
          <br />Seamlessly integrating with Oracle PMS, SAP Finance, Workday HR, and CMMS platforms.
        </p>

        <Link to="/auth">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 animate-fade-in-up animation-delay-600">
            <LogIn className="w-5 h-5" />
            Access Admin Portal
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 animate-fade-in-up animation-delay-800">
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
            <div className="text-accent text-4xl font-bold mb-2">25%</div>
            <div className="text-primary-foreground/90 text-sm">Downtime Reduction</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
            <div className="text-accent text-4xl font-bold mb-2">3-5%</div>
            <div className="text-primary-foreground/90 text-sm">Cost Leakage Recovered</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
            <div className="text-accent text-4xl font-bold mb-2">15%</div>
            <div className="text-primary-foreground/90 text-sm">Energy Efficiency Gain</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
