import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Zap, Award } from "lucide-react";

const ROISection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proven ROI Metrics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tangible cost-efficiency gains across enterprise operations, validated through
            pilot deployments at multiple Hyatt properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 bg-gradient-enterprise text-primary-foreground shadow-elevated hover:scale-105 transition-transform">
            <TrendingUp className="w-12 h-12 text-accent mb-4" />
            <div className="text-5xl font-bold mb-2">25%</div>
            <div className="text-xl mb-4 opacity-90">Downtime Reduction</div>
            <div className="text-sm opacity-80">
              Predictive maintenance catches failures before they occur, reducing
              equipment downtime by a quarter and improving MTBF by 40%.
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <div className="text-xs opacity-70">Annual Savings Estimate</div>
              <div className="text-2xl font-bold text-accent">$180K</div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-tech text-primary-foreground shadow-elevated hover:scale-105 transition-transform">
            <DollarSign className="w-12 h-12 text-accent mb-4" />
            <div className="text-5xl font-bold mb-2">3-5%</div>
            <div className="text-xl mb-4 opacity-90">Cost Leakage Recovered</div>
            <div className="text-sm opacity-80">
              AI audit engine detects pricing anomalies, phantom deliveries, and vendor
              issues, recovering 3-5% of procurement spend annually.
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <div className="text-xs opacity-70">Annual Savings Estimate</div>
              <div className="text-2xl font-bold text-accent">$420K</div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-premium text-primary-foreground shadow-elevated hover:scale-105 transition-transform">
            <Zap className="w-12 h-12 text-accent mb-4" />
            <div className="text-5xl font-bold mb-2">15%</div>
            <div className="text-xl mb-4 opacity-90">Energy Efficiency Gain</div>
            <div className="text-sm opacity-80">
              IoT monitoring and AI optimization reduce energy consumption per guest-night,
              delivering immediate sustainability and cost benefits.
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <div className="text-xs opacity-70">Annual Savings Estimate</div>
              <div className="text-2xl font-bold text-accent">$290K</div>
            </div>
          </Card>
        </div>

        {/* Combined Impact */}
        <Card className="p-12 bg-card shadow-elevated text-center">
          <Award className="w-16 h-16 text-accent mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-foreground mb-4">Total Annual Impact</h3>
          <div className="text-6xl font-bold text-success mb-6">$890K+</div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Combined operational savings per year, based on average 250-room property portfolio.
            ROI payback period: {'<'}18 months including implementation and training costs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Implementation Timeline</div>
              <div className="text-2xl font-bold text-foreground">6-9 months</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Pilot Properties</div>
              <div className="text-2xl font-bold text-foreground">5 locations</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Data Sources Integrated</div>
              <div className="text-2xl font-bold text-foreground">12+ systems</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">AI Models Deployed</div>
              <div className="text-2xl font-bold text-foreground">8 active</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ROISection;
