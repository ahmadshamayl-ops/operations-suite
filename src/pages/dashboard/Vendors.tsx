import { Card } from "@/components/ui/card";
import { Users, AlertTriangle, TrendingUp, Shield } from "lucide-react";

const Vendors = () => {
  const vendors = [
    { name: "Premier Maintenance", category: "Equipment", spend: "$420K", riskScore: 9.2, issues: 0, onTimeRate: 98, status: "excellent" },
    { name: "Fresh Foods Inc.", category: "F&B", spend: "$680K", riskScore: 7.8, issues: 3, onTimeRate: 94, status: "good" },
    { name: "ABC Supply Co.", category: "Linen", spend: "$340K", riskScore: 3.4, issues: 12, onTimeRate: 82, status: "risk" },
    { name: "CleanServe LLC", category: "Housekeeping", spend: "$290K", riskScore: 4.6, issues: 8, onTimeRate: 86, status: "warning" },
    { name: "AquaTech Systems", category: "Utilities", spend: "$520K", riskScore: 7.1, issues: 2, onTimeRate: 91, status: "good" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Vendor Risk & Insights</h1>
        <p className="text-muted-foreground">Comprehensive vendor performance and risk analysis</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Active Vendors</span>
          </div>
          <div className="text-3xl font-bold text-foreground">48</div>
          <div className="text-xs text-muted-foreground mt-1">Across all categories</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground">Avg Risk Score</span>
          </div>
          <div className="text-3xl font-bold text-foreground">7.2/10</div>
          <div className="text-xs text-success mt-1">↑ 0.8 improvement</div>
        </Card>

        <Card className="p-6 bg-destructive/10 border-destructive shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-sm text-muted-foreground">High-Risk Vendors</span>
          </div>
          <div className="text-3xl font-bold text-destructive">4</div>
          <div className="text-xs text-destructive mt-1">Require attention</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-sm text-muted-foreground">On-Time Delivery</span>
          </div>
          <div className="text-3xl font-bold text-foreground">91.2%</div>
          <div className="text-xs text-success mt-1">Portfolio average</div>
        </Card>
      </div>

      {/* Vendor Performance Table */}
      <Card className="p-6 bg-card shadow-elevated">
        <h3 className="text-lg font-semibold text-foreground mb-4">Vendor Performance & Risk Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Vendor</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Category</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Annual Spend</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Risk Score</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Issues (30d)</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">On-Time Rate</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium text-foreground">{vendor.name}</td>
                  <td className="py-3 px-4 text-muted-foreground">{vendor.category}</td>
                  <td className="py-3 px-4 text-right font-semibold text-foreground">{vendor.spend}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        vendor.status === "excellent"
                          ? "bg-success/10 text-success"
                          : vendor.status === "risk"
                          ? "bg-destructive/10 text-destructive"
                          : vendor.status === "warning"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {vendor.riskScore}/10
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    {vendor.issues > 0 ? (
                      <span className="text-destructive font-semibold">{vendor.issues}</span>
                    ) : (
                      <span className="text-success">0</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center text-foreground">{vendor.onTimeRate}%</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        vendor.status === "excellent"
                          ? "bg-success/10 text-success"
                          : vendor.status === "risk"
                          ? "bg-destructive/10 text-destructive"
                          : vendor.status === "warning"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {vendor.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Risk Analysis & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Vendor Risk Distribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-success font-semibold">Excellent (9-10)</span>
                <span className="text-foreground font-bold">12 vendors</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success" style={{ width: "25%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-secondary font-semibold">Good (7-8.9)</span>
                <span className="text-foreground font-bold">24 vendors</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-secondary" style={{ width: "50%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-accent font-semibold">Moderate (5-6.9)</span>
                <span className="text-foreground font-bold">8 vendors</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-accent" style={{ width: "17%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-destructive font-semibold">High Risk ({'<'}5)</span>
                <span className="text-foreground font-bold">4 vendors</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-destructive" style={{ width: "8%" }}></div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🤖 AI-Powered Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">High-Risk Vendor Alert</div>
              </div>
              <p className="text-xs opacity-90 mb-2">
                ABC Supply Co. shows recurring quality issues and price drift patterns. Consider alternative sourcing or contract renegotiation.
              </p>
              <div className="text-xs text-accent font-bold">Impact: $8.4K/month</div>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Performance Improvement</div>
              </div>
              <p className="text-xs opacity-90 mb-2">
                Overall vendor risk score improved by 0.8 points this quarter. Strong performance from top-tier partners.
              </p>
              <div className="text-xs text-accent font-bold">Quality trend: ↑ Positive</div>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Shield className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Contract Optimization</div>
              </div>
              <p className="text-xs opacity-90">
                3 high-performing vendors eligible for preferred partner status. Potential 5-7% cost reduction through volume discounts.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Vendors;
