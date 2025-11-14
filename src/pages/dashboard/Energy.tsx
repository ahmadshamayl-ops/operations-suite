import { Card } from "@/components/ui/card";
import { Zap, TrendingDown, MapPin } from "lucide-react";

const Energy = () => {
  const properties = [
    { name: "Hyatt Boston", efficiency: 92, consumption: 24.2, status: "optimal" },
    { name: "Hyatt NYC", efficiency: 88, consumption: 26.8, status: "good" },
    { name: "Hyatt Chicago", efficiency: 71, consumption: 32.4, status: "alert" },
    { name: "Hyatt LA", efficiency: 85, consumption: 27.1, status: "good" },
    { name: "Hyatt Dallas", efficiency: 79, consumption: 29.8, status: "moderate" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Energy & Asset Analytics</h1>
        <p className="text-muted-foreground">Portfolio-wide energy optimization and sustainability metrics</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-success/10 border-success shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Energy Efficiency Gain</span>
            <TrendingDown className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-success">15%</div>
          <div className="text-xs text-muted-foreground mt-1">vs last year</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Avg Energy / Guest-Night</div>
          <div className="text-3xl font-bold text-foreground">28 kWh</div>
          <div className="text-xs text-success mt-1">↓ 12% improvement</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Annual Cost Savings</div>
          <div className="text-2xl font-bold text-foreground">$290K</div>
          <div className="text-xs text-muted-foreground mt-1">Energy optimization</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Properties Monitored</div>
          <div className="text-3xl font-bold text-foreground">42</div>
          <div className="text-xs text-muted-foreground mt-1">Real-time IoT tracking</div>
        </Card>
      </div>

      {/* Property Efficiency Map */}
      <Card className="p-6 bg-card shadow-elevated">
        <h3 className="text-lg font-semibold text-foreground mb-4">Property Energy Efficiency Scores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div
              key={property.name}
              className={`p-4 rounded-lg border ${
                property.status === "optimal"
                  ? "bg-success/10 border-success"
                  : property.status === "alert"
                  ? "bg-destructive/10 border-destructive"
                  : "bg-accent/10 border-accent"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold text-foreground">{property.name}</span>
                </div>
                <span
                  className={`text-2xl font-bold ${
                    property.status === "optimal"
                      ? "text-success"
                      : property.status === "alert"
                      ? "text-destructive"
                      : "text-accent"
                  }`}
                >
                  {property.efficiency}%
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-1">Energy Consumption</div>
              <div className="text-lg font-semibold text-foreground">{property.consumption} kWh/guest</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Energy Consumption per Occupied Room (6 months)</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            {[32, 30, 29, 28, 27, 28].map((value, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className="flex-1 flex items-end">
                  <div className="w-full bg-gradient-tech rounded-t" style={{ height: `${(value / 35) * 100}%` }}></div>
                </div>
                <div className="text-xs text-center text-muted-foreground">{value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-muted-foreground">Monthly trend (kWh/room)</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Top 5 Most Efficient Properties</h3>
          <div className="space-y-3">
            {properties
              .sort((a, b) => b.efficiency - a.efficiency)
              .slice(0, 5)
              .map((property, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 text-sm font-bold text-accent">#{i + 1}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{property.name}</div>
                    <div className="text-xs text-muted-foreground">{property.consumption} kWh/guest</div>
                  </div>
                  <div className="text-lg font-bold text-success">{property.efficiency}%</div>
                </div>
              ))}
          </div>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card className="p-6 bg-gradient-premium text-primary-foreground shadow-elevated">
        <h3 className="text-lg font-semibold mb-4">🤖 AI Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
            <div className="flex items-start gap-2 mb-2">
              <Zap className="w-5 h-5 text-accent mt-0.5" />
              <div className="text-sm font-semibold">HVAC Filter Cycle Optimization</div>
            </div>
            <p className="text-xs opacity-90 mb-2">
              Replace HVAC filter cycle at Hyatt Dallas from 90-day to 75-day intervals based on usage patterns.
            </p>
            <div className="text-xs text-accent font-bold">Potential: 7% energy reduction</div>
          </div>

          <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
            <div className="flex items-start gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-accent mt-0.5" />
              <div className="text-sm font-semibold">Cost Trend Analysis</div>
            </div>
            <p className="text-xs opacity-90 mb-2">
              Energy cost per guest-night is trending 15% lower vs last year across all properties.
            </p>
            <div className="text-xs text-accent font-bold">Annual savings: $290K</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Energy;
