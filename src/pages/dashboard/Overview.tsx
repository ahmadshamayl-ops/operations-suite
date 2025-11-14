import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, DollarSign, Wrench, Zap, AlertTriangle } from "lucide-react";

const Overview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Enterprise-wide operational intelligence and AI insights</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Cost per Occupied Room</span>
            <TrendingDown className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">$167</div>
          <div className="text-xs text-success mt-1">↓ 8% vs target</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Revenue per Employee</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">$12.4K</div>
          <div className="text-xs text-success mt-1">↑ 4% vs target</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Energy per Guest-Night</span>
            <Zap className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">28 kWh</div>
          <div className="text-xs text-success mt-1">↓ 12% efficiency</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Maintenance Downtime</span>
            <Wrench className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-foreground">2.3 hrs</div>
          <div className="text-xs text-success mt-1">↓ 25% improvement</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Leakage Recovered YTD</span>
            <DollarSign className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">$184K</div>
          <div className="text-xs text-success mt-1">3.8% of procurement</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Operational Trends Chart */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Operational Cost vs Revenue vs Occupancy Trend</h3>
          <div className="h-80 flex items-end justify-around gap-2">
            {[85, 92, 88, 95, 89, 97, 94, 98, 91, 96, 93, 99].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className="flex-1 flex items-end gap-0.5">
                  <div className="flex-1 bg-primary/80 rounded-t" style={{ height: `${height}%` }}></div>
                  <div className="flex-1 bg-secondary/80 rounded-t" style={{ height: `${height - 10}%` }}></div>
                  <div className="flex-1 bg-accent/80 rounded-t" style={{ height: `${height - 5}%` }}></div>
                </div>
                <div className="text-xs text-center text-muted-foreground">M{i + 1}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span className="text-muted-foreground">Cost</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-secondary rounded"></div>
              <span className="text-muted-foreground">Revenue</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-accent rounded"></div>
              <span className="text-muted-foreground">Occupancy</span>
            </div>
          </div>
        </Card>

        {/* AI Insights Panel */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🤖 AI Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Zap className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Energy Anomaly Detected</div>
              </div>
              <p className="text-xs opacity-90">
                Energy intensity at Chicago property is 15% higher than benchmark. HVAC optimization recommended.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Finance Anomaly</div>
              </div>
              <p className="text-xs opacity-90">
                3 vendor invoices exceed contract price by avg 12%. Estimated impact: $18K/month.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Predictive Alert</div>
              </div>
              <p className="text-xs opacity-90">
                Elevator #24 showing vibration pattern consistent with bearing wear. 68% failure probability in 14 days.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
