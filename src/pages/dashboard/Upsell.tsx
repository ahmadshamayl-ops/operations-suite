import { Card } from "@/components/ui/card";
import { Gift, TrendingUp, DollarSign, Users } from "lucide-react";

const Upsell = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Upsell Opportunities</h1>
        <p className="text-muted-foreground">AI-driven revenue optimization through personalized upgrades</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Upsell Conversion</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">18.4%</div>
          <div className="text-xs text-success mt-1">↑ 3.2% vs last month</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Revenue Generated</span>
            <DollarSign className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">$42.8K</div>
          <div className="text-xs text-muted-foreground mt-1">This month</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Avg Upsell Value</span>
            <Gift className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground">$87</div>
          <div className="text-xs text-success mt-1">↑ $12 improvement</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Today's Opportunities</span>
            <Users className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-foreground">28</div>
          <div className="text-xs text-muted-foreground mt-1">High-value guests</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upsell Performance Chart */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Upsell Performance by Category</h3>
          <div className="space-y-4">
            {[
              { category: "Suite Upgrades", offered: 145, accepted: 32, revenue: "$18,400", rate: 22 },
              { category: "Ocean View Upgrades", offered: 210, accepted: 35, revenue: "$12,600", rate: 17 },
              { category: "Early Check-in", offered: 88, accepted: 24, revenue: "$4,320", rate: 27 },
              { category: "Late Checkout", offered: 122, accepted: 31, revenue: "$5,580", rate: 25 },
              { category: "Spa Packages", offered: 65, accepted: 8, revenue: "$1,920", rate: 12 },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{item.category}</span>
                  <span className="text-sm font-semibold text-success">{item.revenue}</span>
                </div>
                <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
                  <div
                    className="bg-primary"
                    style={{ width: `${item.rate}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-muted-foreground">
                    {item.accepted}/{item.offered} accepted
                  </span>
                  <span className="text-primary font-medium">{item.rate}% rate</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Recommendations */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🎯 AI Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Gift className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">High-Value Target</div>
              </div>
              <p className="text-xs opacity-90">
                Guest in Room 412 (Globalist member) arriving at 4 PM. Offer ocean view suite upgrade for $125.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Optimal Timing</div>
              </div>
              <p className="text-xs opacity-90">
                28 check-ins between 4-6 PM. Recommend offering early check-in to 12 guests arriving before 2 PM.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Revenue Opportunity</div>
              </div>
              <p className="text-xs opacity-90">
                8 couples celebrating anniversaries this week. Bundle spa package + late checkout = est. $2,400 revenue.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Today's Upsell Opportunities */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Today's High-Priority Upsell Targets</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Guest</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Room</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Loyalty Tier</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Recommended Offer</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Est. Value</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">AI Confidence</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-sm text-foreground">David Chen</td>
                <td className="py-3 text-sm text-muted-foreground">412</td>
                <td className="py-3"><span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Globalist</span></td>
                <td className="py-3 text-sm text-foreground">Ocean Suite Upgrade</td>
                <td className="py-3 text-sm font-medium text-foreground">$125</td>
                <td className="py-3 text-sm text-muted-foreground">89%</td>
                <td className="py-3"><span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Pending</span></td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">Sarah Martinez</td>
                <td className="py-3 text-sm text-muted-foreground">518</td>
                <td className="py-3"><span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Explorist</span></td>
                <td className="py-3 text-sm text-foreground">Early Check-in</td>
                <td className="py-3 text-sm font-medium text-foreground">$35</td>
                <td className="py-3 text-sm text-muted-foreground">92%</td>
                <td className="py-3"><span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Offered</span></td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">Michael Johnson</td>
                <td className="py-3 text-sm text-muted-foreground">624</td>
                <td className="py-3"><span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Globalist</span></td>
                <td className="py-3 text-sm text-foreground">Spa + Late Checkout</td>
                <td className="py-3 text-sm font-medium text-foreground">$280</td>
                <td className="py-3 text-sm text-muted-foreground">76%</td>
                <td className="py-3"><span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Pending</span></td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">Emily Park</td>
                <td className="py-3 text-sm text-muted-foreground">305</td>
                <td className="py-3"><span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Member</span></td>
                <td className="py-3 text-sm text-foreground">Ocean View Upgrade</td>
                <td className="py-3 text-sm font-medium text-foreground">$45</td>
                <td className="py-3 text-sm text-muted-foreground">81%</td>
                <td className="py-3"><span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Accepted</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Monthly Trend */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">6-Month Upsell Revenue Trend</h3>
        <div className="h-48 flex items-end justify-around gap-2">
          {[
            { month: "Sep", revenue: 32 },
            { month: "Oct", revenue: 35 },
            { month: "Nov", revenue: 38 },
            { month: "Dec", revenue: 41 },
            { month: "Jan", revenue: 39 },
            { month: "Feb", revenue: 43 },
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs font-medium text-foreground">${item.revenue}K</div>
              <div
                className="w-full bg-gradient-to-t from-primary to-accent rounded-t"
                style={{ height: `${(item.revenue / 43) * 100}%` }}
              ></div>
              <div className="text-xs text-muted-foreground">{item.month}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Upsell;
