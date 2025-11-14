import { Card } from "@/components/ui/card";
import { DollarSign, AlertCircle, ShieldAlert, TrendingUp } from "lucide-react";

const FinanceLeakage = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold text-foreground">Use Case 2: Finance Leakage Detection</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            AI-powered audit engine cross-checks procurement, invoices, and inventory to detect pricing anomalies,
            phantom deliveries, and vendor risk patterns.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 bg-card shadow-card">
            <div className="text-sm font-semibold text-secondary mb-3">1. Data Integration</div>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">→</span>
                <span>Purchase orders (SAP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">→</span>
                <span>Delivery receipts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">→</span>
                <span>Vendor invoices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">→</span>
                <span>Inventory consumption</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
            <div className="text-sm font-semibold mb-3 text-accent">2. AI Audit Engine</div>
            <ul className="space-y-2 text-sm">
              <li>• Cross-reference validation</li>
              <li>• Price drift detection</li>
              <li>• Phantom delivery checks</li>
              <li>• Pattern anomalies</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <div className="text-xs opacity-80">Daily batch processing</div>
              <div className="text-lg font-bold">100K+ transactions</div>
            </div>
          </Card>

          <Card className="p-6 bg-card shadow-card">
            <div className="text-sm font-semibold text-secondary mb-3">3. Exception Alerts</div>
            <div className="space-y-3">
              <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-semibold text-destructive">PRICING ANOMALY</span>
                </div>
                <div className="text-sm text-foreground mb-1">Vendor: ABC Supply Co.</div>
                <div className="text-xs text-muted-foreground">
                  Linen costs +18% vs contract
                  <br />Expected: $2.50/unit
                  <br />Actual: $2.95/unit
                </div>
              </div>
              <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldAlert className="w-4 h-4 text-destructive" />
                  <span className="text-xs font-semibold text-destructive">PHANTOM DELIVERY</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Invoice #4829 - No receipt match
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-success/10 border-success shadow-card">
            <div className="text-sm font-semibold text-success mb-3">4. Financial Impact</div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">Cost Leakage Detected</span>
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <div className="text-2xl font-bold text-success">3-5%</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Recovered Value (Annual)</div>
                <div className="text-2xl font-bold text-success">$420K</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Anomaly Detection Rate</div>
                <div className="text-lg font-bold text-success">98.7%</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Dashboard Mockup */}
        <Card className="p-8 bg-card shadow-elevated">
          <h3 className="text-lg font-semibold mb-6 text-foreground">Finance Control Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Anomalies Detected (30d)</div>
              <div className="text-3xl font-bold text-destructive">147</div>
              <div className="text-xs text-success mt-1">↓ 12% vs prior month</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Potential Recovery Value</div>
              <div className="text-3xl font-bold text-accent">$38.2K</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-xs text-muted-foreground mb-1">Vendor Risk Score (Avg)</div>
              <div className="text-3xl font-bold text-secondary">7.2/10</div>
              <div className="text-xs text-success mt-1">↑ 0.8 improvement</div>
            </div>
          </div>

          {/* Vendor Risk Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Vendor</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Category</th>
                  <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Risk Score</th>
                  <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Issues (30d)</th>
                  <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Value at Risk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 text-foreground">ABC Supply Co.</td>
                  <td className="py-3 px-4 text-muted-foreground">Linen</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-destructive/10 text-destructive">
                      3.2/10
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-foreground">12</td>
                  <td className="py-3 px-4 text-right text-foreground font-semibold">$8,400</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 text-foreground">Fresh Foods Inc.</td>
                  <td className="py-3 px-4 text-muted-foreground">F&B</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent">
                      6.8/10
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-foreground">3</td>
                  <td className="py-3 px-4 text-right text-foreground font-semibold">$2,100</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4 text-foreground">Premier Maintenance</td>
                  <td className="py-3 px-4 text-muted-foreground">Equipment</td>
                  <td className="py-3 px-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">
                      9.1/10
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-foreground">0</td>
                  <td className="py-3 px-4 text-right text-foreground font-semibold">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FinanceLeakage;
