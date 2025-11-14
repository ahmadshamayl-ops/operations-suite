import { Database, Cpu, LayoutDashboard, Network } from "lucide-react";
import { Card } from "@/components/ui/card";

const ArchitectureOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Integration Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Ashlar Operations Layer acts as an intelligent middleware, connecting enterprise systems
            with AI-powered analytics and automated decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Data Sources */}
          <Card className="p-6 bg-card shadow-card border-border hover:shadow-elevated transition-shadow">
            <Database className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Data Sources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Oracle Hospitality PMS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>SAP Finance & ERP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Workday HR</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>IoT Sensors (HVAC, equipment)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>CMMS Platforms</span>
              </li>
            </ul>
          </Card>

          {/* AI Layer */}
          <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated border-secondary lg:col-span-2">
            <Cpu className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-3">Ashlar OpsBrain AI Layer</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold mb-2">Analytics Engines</div>
                <ul className="space-y-1 text-primary-foreground/90">
                  <li>• Predictive Maintenance</li>
                  <li>• Anomaly Detection</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2">Automation</div>
                <ul className="space-y-1 text-primary-foreground/90">
                  <li>• Auto-ticketing</li>
                  <li>• Alert routing</li>
                  <li>• Action triggers</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Outputs */}
          <Card className="p-6 bg-card shadow-card border-border hover:shadow-elevated transition-shadow">
            <LayoutDashboard className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-foreground">Department Views</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Engineering Dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Finance Control Center</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>GM Executive View</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                <span>Operations Analytics</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Data Flow Visualization */}
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="text-center">
            <Network className="w-6 h-6 mx-auto mb-2 text-primary" />
            <span className="text-sm">Real-time data streams</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-primary via-secondary to-accent max-w-xs"></div>
          <div className="text-center">
            <Cpu className="w-6 h-6 mx-auto mb-2 text-secondary" />
            <span className="text-sm">AI processing</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-accent via-secondary to-primary max-w-xs"></div>
          <div className="text-center">
            <LayoutDashboard className="w-6 h-6 mx-auto mb-2 text-accent" />
            <span className="text-sm">Actionable insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureOverview;
