import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Users, Zap, Wrench } from "lucide-react";

const KPIs = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Performance KPIs</h1>
        <p className="text-muted-foreground">Executive summary of key operational metrics</p>
      </div>

      {/* Executive Summary Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">EBITDA Margin</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">32.4%</div>
          <div className="text-xs text-success">↑ 2.1% vs target</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-muted-foreground">Labor Cost % of Revenue</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">24.8%</div>
          <div className="text-xs text-success">↓ 1.4% optimization</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Wrench className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-muted-foreground">Housekeeping Efficiency</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">18.2</div>
          <div className="text-xs text-success">rooms/hour ↑ 8%</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-success" />
            <span className="text-sm font-semibold text-muted-foreground">Sustainability Index</span>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">87/100</div>
          <div className="text-xs text-success">Energy + Waste composite</div>
        </Card>
      </div>

      {/* EBITDA Trend */}
      <Card className="p-6 bg-card shadow-elevated">
        <h3 className="text-lg font-semibold text-foreground mb-4">EBITDA Margin Trend (12 months)</h3>
        <div className="h-80 flex items-end justify-around gap-2">
          {[29.2, 30.1, 29.8, 31.4, 30.9, 31.8, 32.1, 31.6, 32.4, 32.8, 32.4, 33.1].map((value, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1">
              <div className="flex-1 flex items-end">
                <div className="w-full bg-gradient-enterprise rounded-t" style={{ height: `${(value / 35) * 100}%` }}></div>
              </div>
              <div className="text-xs text-center text-muted-foreground">
                <div className="font-semibold">{value}%</div>
                <div>M{i + 1}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <TrendingUp className="w-4 h-4 text-success" />
          <span>Consistent upward trend with 10.5% YoY improvement</span>
        </div>
      </Card>

      {/* Multi-metric Correlation */}
      <Card className="p-6 bg-card shadow-elevated">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Cost per Guest vs Energy Intensity vs Maintenance Spend
        </h3>
        <div className="h-80 grid grid-cols-12 gap-2">
          {[
            { cost: 167, energy: 28, maint: 42 },
            { cost: 172, energy: 30, maint: 45 },
            { cost: 165, energy: 27, maint: 40 },
            { cost: 178, energy: 32, maint: 48 },
            { cost: 163, energy: 26, maint: 38 },
            { cost: 170, energy: 29, maint: 43 },
            { cost: 164, energy: 27, maint: 39 },
            { cost: 169, energy: 28, maint: 42 },
            { cost: 162, energy: 26, maint: 37 },
            { cost: 167, energy: 28, maint: 41 },
            { cost: 161, energy: 25, maint: 36 },
            { cost: 159, energy: 24, maint: 35 },
          ].map((data, i) => (
            <div key={i} className="flex flex-col gap-1 items-center">
              <div className="flex-1 w-full flex flex-col justify-end gap-0.5">
                <div className="w-full bg-primary rounded-t" style={{ height: `${(data.cost / 180) * 100}%` }}></div>
                <div className="w-full bg-secondary rounded-t" style={{ height: `${(data.energy / 35) * 100}%` }}></div>
                <div className="w-full bg-accent rounded-t" style={{ height: `${(data.maint / 50) * 100}%` }}></div>
              </div>
              <div className="text-xs text-center text-muted-foreground">Q{Math.floor(i / 3) + 1}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-primary rounded"></div>
            <span className="text-muted-foreground">Cost/Guest ($)</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-secondary rounded"></div>
            <span className="text-muted-foreground">Energy (kWh)</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-accent rounded"></div>
            <span className="text-muted-foreground">Maintenance ($K)</span>
          </div>
        </div>
      </Card>

      {/* Metric Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-premium text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">Revenue Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
              <span className="text-sm">Revenue per Available Room</span>
              <span className="text-xl font-bold text-accent">$142</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
              <span className="text-sm">Revenue per Employee</span>
              <span className="text-xl font-bold text-accent">$12.4K</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-primary-foreground/20">
              <span className="text-sm">Average Daily Rate</span>
              <span className="text-xl font-bold text-accent">$189</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Occupancy Rate</span>
              <span className="text-xl font-bold text-accent">78.4%</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Operational Efficiency</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Cost per Occupied Room</span>
              <span className="text-xl font-bold text-foreground">$167</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Labor Hours per Room</span>
              <span className="text-xl font-bold text-foreground">0.48</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Guest Satisfaction Score</span>
              <span className="text-xl font-bold text-foreground">4.6/5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Maintenance Response Time</span>
              <span className="text-xl font-bold text-foreground">18 min</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KPIs;
