import { Card } from "@/components/ui/card";
import { Wrench, AlertTriangle, TrendingDown, Activity } from "lucide-react";

const PredictiveMaintenance = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Use Case 1: Predictive Maintenance</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            IoT sensor data streams analyzed by AI to predict equipment failures before they occur,
            automatically generating maintenance tickets and reducing downtime.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-card shadow-card">
            <div className="text-sm font-semibold text-secondary mb-3">1. IoT Data Collection</div>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>HVAC temperature & vibration</span>
              </li>
              <li className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Elevator load sensors</span>
              </li>
              <li className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Kitchen equipment monitors</span>
              </li>
              <li className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Laundry system metrics</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
            <div className="text-sm font-semibold mb-3 text-accent">2. AI Prediction Engine</div>
            <ul className="space-y-2 text-sm">
              <li>• Pattern analysis</li>
              <li>• Failure probability scoring</li>
              <li>• MTBF calculations</li>
              <li>• Threshold alerts</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <div className="text-xs opacity-80">Real-time processing</div>
              <div className="text-lg font-bold">{'<'}2s latency</div>
            </div>
          </Card>

          <Card className="p-6 bg-card shadow-card">
            <div className="text-sm font-semibold text-secondary mb-3">3. Auto-Ticketing</div>
            <div className="space-y-3">
              <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-semibold text-destructive">HIGH PRIORITY</span>
                </div>
                <div className="text-sm text-foreground">HVAC Unit 4B</div>
                <div className="text-xs text-muted-foreground">72% failure risk</div>
              </div>
              <div className="text-xs text-muted-foreground">
                → Auto-routed to Engineering
                <br />→ Parts ordered
                <br />→ Schedule optimized
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-success/10 border-success shadow-card">
            <div className="text-sm font-semibold text-success mb-3">4. Impact Metrics</div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Downtime Reduction</span>
                  <TrendingDown className="w-4 h-4 text-success" />
                </div>
                <div className="text-2xl font-bold text-success">25%</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">MTBF Improvement</div>
                <div className="text-2xl font-bold text-success">+40%</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Cost Savings</div>
                <div className="text-lg font-bold text-success">$180K/yr</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Swim Lane Diagram */}
        <Card className="p-8 bg-card shadow-elevated">
          <h3 className="text-lg font-semibold mb-6 text-foreground">Process Flow: Sensor to Action</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-muted-foreground">IoT Sensors</div>
              <div className="flex-1 flex items-center gap-2">
                <div className="px-4 py-2 bg-primary/10 border border-primary rounded-lg text-sm">Stream data</div>
                <div className="flex-1 h-px bg-primary/30"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-muted-foreground">AI Engine</div>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-px bg-secondary/30"></div>
                <div className="px-4 py-2 bg-secondary/10 border border-secondary rounded-lg text-sm">Analyze & predict</div>
                <div className="flex-1 h-px bg-secondary/30"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-muted-foreground">CMMS</div>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-px bg-accent/30"></div>
                <div className="px-4 py-2 bg-accent/10 border border-accent rounded-lg text-sm">Create ticket</div>
                <div className="flex-1 h-px bg-accent/30"></div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-muted-foreground">Engineering</div>
              <div className="flex-1 flex items-center gap-2">
                <div className="flex-1 h-px bg-success/30"></div>
                <div className="px-4 py-2 bg-success/10 border border-success rounded-lg text-sm">Execute repair</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PredictiveMaintenance;
