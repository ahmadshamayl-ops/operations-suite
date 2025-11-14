import { Card } from "@/components/ui/card";
import { AlertCircle, ShieldAlert, TrendingUp } from "lucide-react";

const Finance = () => {
  const vendors = [
    { vendor: "ABC Supply Co.", category: "Linen", riskScore: 3.2, issues: 12, valueAtRisk: "$8,400", status: "high" },
    { vendor: "Fresh Foods Inc.", category: "F&B", riskScore: 6.8, issues: 3, valueAtRisk: "$2,100", status: "medium" },
    { vendor: "Premier Maintenance", category: "Equipment", riskScore: 9.1, issues: 0, valueAtRisk: "$0", status: "low" },
    { vendor: "CleanServe LLC", category: "Housekeeping", riskScore: 4.5, issues: 8, valueAtRisk: "$4,310", status: "high" },
    { vendor: "AquaTech", category: "Utilities", riskScore: 7.2, issues: 2, valueAtRisk: "$6,220", status: "medium" },
  ];

  const flaggedInvoices = [
    { vendor: "FreshSupply Inc", invoice: "INV-8721", property: "Chicago", issue: "Price Drift", amount: "$8,420", confidence: "96%", status: "Under Review" },
    { vendor: "CleanServe LLC", invoice: "INV-6532", property: "Boston", issue: "Phantom Delivery", amount: "$4,310", confidence: "91%", status: "Flagged" },
    { vendor: "AquaTech", invoice: "INV-9044", property: "Dallas", issue: "Overconsumption", amount: "$6,220", confidence: "88%", status: "Resolved" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Finance Leakage Detection</h1>
        <p className="text-muted-foreground">AI-powered audit engine for procurement anomalies</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Vendors Audited</div>
          <div className="text-3xl font-bold text-foreground">48</div>
          <div className="text-xs text-muted-foreground mt-1">Across all properties</div>
        </Card>

        <Card className="p-6 bg-destructive/10 border-destructive shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Anomalies Detected</div>
          <div className="text-3xl font-bold text-destructive">12</div>
          <div className="text-xs text-destructive mt-1">This month</div>
        </Card>

        <Card className="p-6 bg-success/10 border-success shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Total Savings Identified</div>
          <div className="text-3xl font-bold text-success">$212K</div>
          <div className="text-xs text-success mt-1">Potential recoverable value</div>
        </Card>
      </div>

      {/* Insight Banner */}
      <Card className="p-4 bg-accent/10 border-accent">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
          <div>
            <div className="font-semibold text-foreground mb-1">AI Insight</div>
            <p className="text-sm text-muted-foreground">
              AI detected 3 recurring price anomalies across 2 vendors — estimated annual leakage $118K.
              Pattern suggests systematic pricing drift rather than isolated errors.
            </p>
          </div>
        </div>
      </Card>

      {/* Flagged Invoices Table */}
      <Card className="p-6 bg-card shadow-elevated">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Flagged Invoices</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Vendor</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Invoice #</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Property</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Issue Type</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Amount</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">AI Confidence</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {flaggedInvoices.map((invoice, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 font-medium text-foreground">{invoice.vendor}</td>
                  <td className="py-3 px-4 text-muted-foreground">{invoice.invoice}</td>
                  <td className="py-3 px-4 text-muted-foreground">{invoice.property}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {invoice.issue === "Phantom Delivery" ? (
                        <ShieldAlert className="w-4 h-4 text-destructive" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-accent" />
                      )}
                      <span className="text-foreground">{invoice.issue}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-foreground">{invoice.amount}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-success/10 text-success">
                      {invoice.confidence}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{invoice.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Vendor Risk Table & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Vendor Risk Scoring</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
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
                {vendors.map((vendor, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/50">
                    <td className="py-3 px-4 text-foreground">{vendor.vendor}</td>
                    <td className="py-3 px-4 text-muted-foreground">{vendor.category}</td>
                    <td className="py-3 px-4 text-right">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                          vendor.status === "high"
                            ? "bg-destructive/10 text-destructive"
                            : vendor.status === "medium"
                            ? "bg-accent/10 text-accent"
                            : "bg-success/10 text-success"
                        }`}
                      >
                        {vendor.riskScore}/10
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right text-foreground">{vendor.issues}</td>
                    <td className="py-3 px-4 text-right text-foreground font-semibold">{vendor.valueAtRisk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Leakage Recovery Trend</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            {[38, 42, 35, 48, 41, 39, 52].map((amount, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className="flex-1 flex items-end">
                  <div className="w-full bg-success rounded-t" style={{ height: `${(amount / 60) * 100}%` }}></div>
                </div>
                <div className="text-xs text-center text-muted-foreground">{amount}K</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-foreground font-semibold">Monthly savings trend</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Finance;
