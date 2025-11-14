import { Card } from "@/components/ui/card";
import { Package, TrendingUp, AlertCircle } from "lucide-react";

const Inventory = () => {
  const items = [
    { item: "Linen (Sheets)", stock: 2400, reorder: "Nov 18", utilization: 87, trend: "stable" },
    { item: "Towels (Bath)", stock: 1850, reorder: "Nov 22", utilization: 92, trend: "up" },
    { item: "Toiletries Kit", stock: 980, reorder: "Nov 15", utilization: 78, trend: "down" },
    { item: "Coffee Pods", stock: 5200, reorder: "Nov 25", utilization: 85, trend: "stable" },
    { item: "Cleaning Supplies", stock: 450, reorder: "Nov 12", utilization: 94, trend: "up" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Inventory Optimization</h1>
        <p className="text-muted-foreground">AI-driven inventory management and waste reduction</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Stock Turnover</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">12.4x</div>
          <div className="text-xs text-success mt-1">↑ 5% improvement</div>
        </Card>

        <Card className="p-6 bg-success/10 border-success shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Waste Reduction</div>
          <div className="text-3xl font-bold text-success">↓ 9%</div>
          <div className="text-xs text-muted-foreground mt-1">vs previous quarter</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Auto-POs Triggered</div>
          <div className="text-3xl font-bold text-foreground">114</div>
          <div className="text-xs text-muted-foreground mt-1">This month</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="text-sm text-muted-foreground mb-1">Avg Utilization Rate</div>
          <div className="text-3xl font-bold text-foreground">87.4%</div>
          <div className="text-xs text-success mt-1">↑ 3.2% optimization</div>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card className="p-6 bg-card shadow-elevated">
        <h3 className="text-lg font-semibold text-foreground mb-4">Inventory Items & Predicted Reorder Dates</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Item</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Current Stock</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Predicted Reorder</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Utilization</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Trend</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{item.item}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right text-foreground font-semibold">{item.stock.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">{item.reorder}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex items-center gap-2">
                      <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            item.utilization >= 90 ? "bg-success" : item.utilization >= 80 ? "bg-accent" : "bg-secondary"
                          }`}
                          style={{ width: `${item.utilization}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-foreground">{item.utilization}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        item.trend === "up"
                          ? "bg-accent/10 text-accent"
                          : item.trend === "down"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.trend === "up" ? "↑" : item.trend === "down" ? "↓" : "→"} {item.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card shadow-card">
          <h3 className="text-lg font-semibold text-foreground mb-4">Inventory Value vs Utilization Rate</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            {[
              { value: 180, util: 82 },
              { value: 195, util: 85 },
              { value: 175, util: 88 },
              { value: 210, util: 87 },
              { value: 190, util: 90 },
              { value: 185, util: 87 },
            ].map((data, i) => (
              <div key={i} className="flex-1 flex flex-col gap-1">
                <div className="flex-1 flex items-end gap-1">
                  <div className="flex-1 bg-primary/80 rounded-t" style={{ height: `${(data.value / 220) * 100}%` }}></div>
                  <div className="flex-1 bg-success rounded-t" style={{ height: `${data.util}%` }}></div>
                </div>
                <div className="text-xs text-center text-muted-foreground">M{i + 1}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span className="text-muted-foreground">Value ($K)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-success rounded"></div>
              <span className="text-muted-foreground">Utilization %</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">Inventory Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Waste Reduction Achievement</div>
              </div>
              <p className="text-xs opacity-90 mb-2">
                9% reduction in inventory waste achieved through AI-optimized reorder predictions and usage tracking.
              </p>
              <div className="text-xs text-accent font-bold">Annual savings: $48K</div>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Automated Ordering</div>
              </div>
              <p className="text-xs opacity-90 mb-2">
                114 purchase orders automatically triggered this month based on predictive consumption models, eliminating stockouts.
              </p>
              <div className="text-xs text-accent font-bold">100% on-time fulfillment</div>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Package className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Stock Turnover Optimization</div>
              </div>
              <p className="text-xs opacity-90">
                12.4x annual turnover rate achieved, up 5% from previous period through optimized inventory levels.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Inventory;
