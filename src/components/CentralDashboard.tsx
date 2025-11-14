import { Card } from "@/components/ui/card";
import { BarChart3, Zap, Users, Package, DollarSign } from "lucide-react";

const CentralDashboard = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Use Case 3: Centralized AI Dashboard</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Unified data lake aggregating feeds from all enterprise systems, delivering real-time insights
            and AI-driven recommendations to executive leadership.
          </p>
        </div>

        {/* Data Lake Architecture */}
        <Card className="p-8 bg-card shadow-elevated mb-12">
          <h3 className="text-lg font-semibold mb-6 text-foreground">Unified Data Lake Architecture</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="p-4 bg-primary/10 border border-primary rounded-lg text-center">
              <div className="text-xs text-primary font-semibold mb-1">PMS</div>
              <div className="text-xs text-muted-foreground">Occupancy<br />Revenue<br />Bookings</div>
            </div>
            <div className="p-4 bg-secondary/10 border border-secondary rounded-lg text-center">
              <div className="text-xs text-secondary font-semibold mb-1">ERP</div>
              <div className="text-xs text-muted-foreground">Costs<br />Procurement<br />AP/AR</div>
            </div>
            <div className="p-4 bg-accent/10 border border-accent rounded-lg text-center">
              <div className="text-xs text-accent font-semibold mb-1">HRMS</div>
              <div className="text-xs text-muted-foreground">Labor hours<br />Productivity<br />Staffing</div>
            </div>
            <div className="p-4 bg-success/10 border border-success rounded-lg text-center">
              <div className="text-xs text-success font-semibold mb-1">IoT</div>
              <div className="text-xs text-muted-foreground">Energy use<br />Equipment<br />Sensors</div>
            </div>
            <div className="p-4 bg-destructive/10 border border-destructive rounded-lg text-center">
              <div className="text-xs text-destructive font-semibold mb-1">CMMS</div>
              <div className="text-xs text-muted-foreground">Maintenance<br />Repairs<br />Assets</div>
            </div>
          </div>

          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-tech text-primary-foreground rounded-full">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Ashlar AI Integration Layer</span>
            </div>
          </div>
        </Card>

        {/* Executive Dashboard Mockup */}
        <Card className="p-8 bg-gradient-enterprise text-primary-foreground shadow-elevated">
          <h3 className="text-xl font-semibold mb-8 text-accent">Executive Operations Dashboard</h3>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-accent" />
                <div className="text-xs opacity-80">Cost per Occupied Room</div>
              </div>
              <div className="text-3xl font-bold mb-1">$84.20</div>
              <div className="text-xs text-success">↓ 7.2% vs target</div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-accent" />
                <div className="text-xs opacity-80">Revenue per Employee</div>
              </div>
              <div className="text-3xl font-bold mb-1">$142K</div>
              <div className="text-xs text-success">↑ 4.1% vs target</div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-accent" />
                <div className="text-xs opacity-80">Energy / Guest-Night</div>
              </div>
              <div className="text-3xl font-bold mb-1">18.3 kWh</div>
              <div className="text-xs text-success">↓ 15% efficiency gain</div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-5 h-5 text-accent" />
                <div className="text-xs opacity-80">Inventory Utilization</div>
              </div>
              <div className="text-3xl font-bold mb-1">87.4%</div>
              <div className="text-xs text-success">↑ 3.2% improvement</div>
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-accent/50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-accent" />
              <h4 className="text-lg font-semibold text-accent">AI-Detected Anomalies & Recommendations</h4>
            </div>
            
            <div className="space-y-4">
              <div className="bg-destructive/20 border border-destructive/40 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm font-semibold text-destructive mb-1">Cost per Guest Spike</div>
                    <div className="text-xs opacity-90">Property: Downtown Location #42</div>
                  </div>
                  <div className="text-xl font-bold text-destructive">+22%</div>
                </div>
                <div className="text-xs opacity-90 mb-3">
                  Labor costs increased disproportionately relative to occupancy. Likely causes: overtime overages, inefficient scheduling.
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-accent">Recommended Action:</span>
                  <span className="text-xs opacity-90">Review staffing model, optimize shift patterns</span>
                </div>
              </div>

              <div className="bg-accent/20 border border-accent/40 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm font-semibold text-accent mb-1">Energy Efficiency Opportunity</div>
                    <div className="text-xs opacity-90">Property: Airport Location #18</div>
                  </div>
                  <div className="text-xl font-bold text-accent">-$12K</div>
                </div>
                <div className="text-xs opacity-90 mb-3">
                  HVAC energy consumption 18% above portfolio average. Equipment operating outside optimal parameters.
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-accent">Recommended Action:</span>
                  <span className="text-xs opacity-90">Schedule preventive maintenance, adjust setpoints</span>
                </div>
              </div>

              <div className="bg-success/20 border border-success/40 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm font-semibold text-success mb-1">Procurement Best Practice</div>
                    <div className="text-xs opacity-90">Property: Suburban Location #7</div>
                  </div>
                  <div className="text-xl font-bold text-success">-8.5%</div>
                </div>
                <div className="text-xs opacity-90 mb-3">
                  This property consistently achieves lowest cost per occupied room. Key driver: centralized purchasing, optimized vendor mix.
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-accent">Recommended Action:</span>
                  <span className="text-xs opacity-90">Replicate purchasing strategy across portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Feedback Loop */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card shadow-card">
            <h4 className="text-sm font-semibold text-foreground mb-4">Continuous Improvement Feedback Loop</h4>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 border border-primary rounded-lg">Anomaly Detected</span>
              <span>→</span>
              <span className="px-3 py-1 bg-secondary/10 border border-secondary rounded-lg">AI Insight Generated</span>
              <span>→</span>
              <span className="px-3 py-1 bg-accent/10 border border-accent rounded-lg">Action Ticket Created</span>
              <span>→</span>
              <span className="px-3 py-1 bg-success/10 border border-success rounded-lg">Performance Improves</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CentralDashboard;
