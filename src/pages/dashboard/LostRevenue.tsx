import { Card } from "@/components/ui/card";
import { TrendingDown, DollarSign, AlertCircle, Clock } from "lucide-react";

const LostRevenue = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Lost Revenue Tracker</h1>
        <p className="text-muted-foreground">Identify and recover missed revenue opportunities</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Lost Revenue</span>
            <TrendingDown className="w-4 h-4 text-destructive" />
          </div>
          <div className="text-3xl font-bold text-foreground">$18.4K</div>
          <div className="text-xs text-destructive mt-1">This month</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Missed Upsells</span>
            <DollarSign className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">$12.8K</div>
          <div className="text-xs text-muted-foreground mt-1">62 opportunities</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Early Check-in Loss</span>
            <Clock className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-foreground">$3.2K</div>
          <div className="text-xs text-muted-foreground mt-1">48 unclaimed</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Activity Bookings</span>
            <AlertCircle className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground">$2.4K</div>
          <div className="text-xs text-muted-foreground mt-1">18 not offered</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Leakage Breakdown */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Revenue Leakage by Category</h3>
          <div className="space-y-4">
            {[
              {
                category: "Suite Upgrades Not Offered",
                lost: "$4,800",
                count: 24,
                percentage: 26,
                color: "bg-destructive",
              },
              {
                category: "Room Service Upsells",
                lost: "$3,600",
                count: 18,
                percentage: 20,
                color: "bg-accent",
              },
              {
                category: "Early Check-in Requests",
                lost: "$3,200",
                count: 48,
                percentage: 17,
                color: "bg-secondary",
              },
              {
                category: "Spa Package Bundles",
                lost: "$2,900",
                count: 12,
                percentage: 16,
                color: "bg-primary",
              },
              {
                category: "Local Activity Bookings",
                lost: "$2,400",
                count: 18,
                percentage: 13,
                color: "bg-muted",
              },
              {
                category: "Late Checkout Fees",
                lost: "$1,500",
                count: 22,
                percentage: 8,
                color: "bg-muted",
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{item.category}</span>
                  <span className="text-lg font-bold text-destructive">{item.lost}</span>
                </div>
                <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted mb-2">
                  <div className={item.color} style={{ width: `${item.percentage}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{item.count} missed opportunities</span>
                  <span>{item.percentage}% of total loss</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Recovery Recommendations */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">💡 Recovery Actions</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Proactive Upsell</div>
              </div>
              <p className="text-xs opacity-90">
                28 check-ins today. Train front desk to offer suite upgrades at arrival for est. $2,100 additional revenue.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Early Check-in Automation</div>
              </div>
              <p className="text-xs opacity-90">
                12 guests requesting early arrivals. Auto-send offer via app = est. $840 recovered this week.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Activity Push</div>
              </div>
              <p className="text-xs opacity-90">
                15 families arriving this weekend. Pre-send sunset cruise + aquarium offer via SMS = est. $1,350 revenue.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Detailed Missed Opportunities */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Missed Revenue Opportunities</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Date</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Guest</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Room</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Opportunity Type</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Potential Value</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Reason Missed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-sm text-muted-foreground">Jan 18</td>
                <td className="py-3 text-sm text-foreground">Emily Chen</td>
                <td className="py-3 text-sm text-muted-foreground">412</td>
                <td className="py-3 text-sm text-foreground">Suite Upgrade</td>
                <td className="py-3 text-sm font-medium text-foreground">$180</td>
                <td className="py-3 text-xs text-muted-foreground">Not offered at check-in</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-muted-foreground">Jan 18</td>
                <td className="py-3 text-sm text-foreground">David Park</td>
                <td className="py-3 text-sm text-muted-foreground">518</td>
                <td className="py-3 text-sm text-foreground">Early Check-in</td>
                <td className="py-3 text-sm font-medium text-foreground">$45</td>
                <td className="py-3 text-xs text-muted-foreground">Guest not informed</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-muted-foreground">Jan 17</td>
                <td className="py-3 text-sm text-foreground">Sarah Johnson</td>
                <td className="py-3 text-sm text-muted-foreground">624</td>
                <td className="py-3 text-sm text-foreground">Spa Package</td>
                <td className="py-3 text-sm font-medium text-foreground">$280</td>
                <td className="py-3 text-xs text-muted-foreground">No pre-stay communication</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-muted-foreground">Jan 17</td>
                <td className="py-3 text-sm text-foreground">Michael Lee</td>
                <td className="py-3 text-sm text-muted-foreground">721</td>
                <td className="py-3 text-sm text-foreground">Activity Booking</td>
                <td className="py-3 text-sm font-medium text-foreground">$150</td>
                <td className="py-3 text-xs text-muted-foreground">Concierge not consulted</td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-muted-foreground">Jan 16</td>
                <td className="py-3 text-sm text-foreground">Jessica Martinez</td>
                <td className="py-3 text-sm text-muted-foreground">305</td>
                <td className="py-3 text-sm text-foreground">Late Checkout</td>
                <td className="py-3 text-sm font-medium text-foreground">$75</td>
                <td className="py-3 text-xs text-muted-foreground">Guest not asked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Monthly Trend */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">6-Month Lost Revenue Trend</h3>
        <div className="h-48 flex items-end justify-around gap-2">
          {[
            { month: "Aug", lost: 22 },
            { month: "Sep", lost: 19 },
            { month: "Oct", lost: 21 },
            { month: "Nov", lost: 20 },
            { month: "Dec", lost: 18 },
            { month: "Jan", lost: 18 },
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs font-medium text-foreground">${item.lost}K</div>
              <div
                className="w-full bg-destructive/80 rounded-t"
                style={{ height: `${(item.lost / 22) * 100}%` }}
              ></div>
              <div className="text-xs text-muted-foreground">{item.month}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-sm text-success">
            ↓ 18% reduction in lost revenue vs 6 months ago
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LostRevenue;
