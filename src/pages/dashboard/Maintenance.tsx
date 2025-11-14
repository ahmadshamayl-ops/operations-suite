import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Clock, TrendingDown } from "lucide-react";

const Maintenance = () => {
  const assets = [
    { id: "HVAC-3", location: "Hyatt Boston", health: 92, risk: "Low", lastMaint: "Oct 28", status: "scheduled" },
    { id: "Elevator #24", location: "Hyatt Chicago", health: 63, risk: "High", lastMaint: "Oct 15", status: "alert" },
    { id: "Boiler-2", location: "Hyatt Dallas", health: 70, risk: "Medium", lastMaint: "Sep 30", status: "schedule" },
    { id: "HVAC-1", location: "Hyatt NYC", health: 88, risk: "Low", lastMaint: "Nov 2", status: "scheduled" },
    { id: "Chiller-A", location: "Hyatt LA", health: 75, risk: "Medium", lastMaint: "Oct 20", status: "schedule" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Predictive Maintenance</h1>
        <p className="text-muted-foreground">AI-powered asset monitoring and failure prediction</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-success/10 border-success shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Downtime Reduction</div>
          <div className="text-3xl font-bold text-success">25%</div>
          <div className="text-xs text-muted-foreground mt-1">vs previous quarter</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">MTBF Improvement</div>
          <div className="text-3xl font-bold text-foreground">+40%</div>
          <div className="text-xs text-success mt-1">Mean time between failures</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Cost Savings</div>
          <div className="text-2xl font-bold text-foreground">$180K/yr</div>
          <div className="text-xs text-muted-foreground mt-1">Estimated annual</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Assets Monitored</div>
          <div className="text-3xl font-bold text-foreground">247</div>
          <div className="text-xs text-muted-foreground mt-1">Across 42 properties</div>
        </Card>
      </div>

      {/* Asset Health Table */}
      <Card className="p-6 bg-card shadow-elevated">
        <h3 className="text-lg font-semibold text-foreground mb-4">Asset Health & Failure Probability</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Asset</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Location</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Health</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Failure Probability</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Last Maintenance</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium text-foreground">{asset.id}</td>
                  <td className="py-3 px-4 text-muted-foreground">{asset.location}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            asset.health >= 85 ? "bg-success" : asset.health >= 70 ? "bg-accent" : "bg-destructive"
                          }`}
                          style={{ width: `${asset.health}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-foreground">{asset.health}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        asset.risk === "High"
                          ? "bg-destructive/10 text-destructive"
                          : asset.risk === "Medium"
                          ? "bg-accent/10 text-accent"
                          : "bg-success/10 text-success"
                      }`}
                    >
                      {asset.risk}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{asset.lastMaint}</td>
                  <td className="py-3 px-4 text-center">
                    {asset.status === "alert" ? (
                      <Button size="sm" variant="destructive" className="gap-2">
                        <AlertTriangle className="w-3 h-3" />
                        Alert
                      </Button>
                    ) : asset.status === "schedule" ? (
                      <Button size="sm" variant="outline" className="gap-2">
                        <Clock className="w-3 h-3" />
                        Schedule Now
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" className="gap-2">
                        <CheckCircle className="w-3 h-3" />
                        Scheduled
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Predictive Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Predicted Failures vs Actual Repairs (90-day forecast)</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            {[12, 15, 10, 18, 14, 11, 16, 13, 9, 17, 12, 14].map((count, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className="flex-1 flex items-end gap-1">
                  <div className="flex-1 bg-destructive/30 rounded-t" style={{ height: `${(count / 20) * 100}%` }}></div>
                  <div className="flex-1 bg-success rounded-t" style={{ height: `${((count - 3) / 20) * 100}%` }}></div>
                </div>
                <div className="text-xs text-center text-muted-foreground">W{i + 1}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-destructive/30 rounded"></div>
              <span className="text-muted-foreground">Predicted</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-success rounded"></div>
              <span className="text-muted-foreground">Actual</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">AI Recommendations</h3>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-semibold mb-1">Optimize Maintenance Cycle</div>
              <p className="text-xs opacity-90 mb-3">
                Adjust HVAC maintenance schedule from 90 to 75 days based on usage patterns. Reduces costs while maintaining reliability.
              </p>
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold text-accent">$45K/month savings</span>
              </div>
            </div>
            <div className="pt-4 border-t border-primary-foreground/20">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                View Asset Diagnostics
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Maintenance;
