import { Card } from "@/components/ui/card";
import { Briefcase, TrendingUp, MapPin, Star } from "lucide-react";

const Concierge = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Concierge Analytics</h1>
        <p className="text-muted-foreground">Local activity booking trends and conversion optimization</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Booking Conversion</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">24.6%</div>
          <div className="text-xs text-success mt-1">↑ 5.2% improvement</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Activity Revenue</span>
            <Briefcase className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">$28.4K</div>
          <div className="text-xs text-muted-foreground mt-1">This month</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Avg Booking Value</span>
            <Star className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground">$142</div>
          <div className="text-xs text-success mt-1">↑ $18 vs last month</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Bookings Today</span>
            <MapPin className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-foreground">18</div>
          <div className="text-xs text-muted-foreground mt-1">12 automated</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Activities */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Top Performing Activities</h3>
          <div className="space-y-4">
            {[
              {
                activity: "Mission Bay Sunset Cruise",
                bookings: 42,
                revenue: "$6,720",
                conversion: 28,
                rating: 4.9,
              },
              {
                activity: "SeaWorld San Diego Tickets",
                bookings: 38,
                revenue: "$5,320",
                conversion: 25,
                rating: 4.7,
              },
              {
                activity: "La Jolla Kayak + Snorkel Tour",
                bookings: 32,
                revenue: "$4,480",
                conversion: 22,
                rating: 4.8,
              },
              {
                activity: "Balboa Park Cultural Pass",
                bookings: 28,
                revenue: "$2,240",
                conversion: 19,
                rating: 4.6,
              },
              {
                activity: "Coronado Beach Bike Rental",
                bookings: 24,
                revenue: "$1,680",
                conversion: 18,
                rating: 4.5,
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-medium text-foreground block">{item.activity}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      <span className="text-xs text-muted-foreground">{item.rating} rating</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-success">{item.revenue}</span>
                </div>
                <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted mb-2">
                  <div className="bg-primary" style={{ width: `${item.conversion}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{item.bookings} bookings</span>
                  <span>{item.conversion}% conversion</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Recommendations */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🎯 AI Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Weekend Surge</div>
              </div>
              <p className="text-xs opacity-90">
                Sunset Cruise bookings spike 65% on Fri-Sun. Pre-push offer to weekend arrivals = est. $1,800 revenue.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Star className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Bundle Opportunity</div>
              </div>
              <p className="text-xs opacity-90">
                Guests booking kayak tours often add bike rentals. Create "Bay Adventure Bundle" for +$35 avg value.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Family Segment</div>
              </div>
              <p className="text-xs opacity-90">
                12 families checking in this week. Target SeaWorld + Legoland bundle via pre-arrival SMS.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Booking Channel Performance */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Booking Channel Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">AI App Recommendations</span>
              <span className="text-sm text-muted-foreground">42% conversion</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
              <div className="bg-primary" style={{ width: "42%" }}></div>
            </div>
            <div className="text-xs text-muted-foreground">
              $12,400 revenue / 88 bookings
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Front Desk Concierge</span>
              <span className="text-sm text-muted-foreground">28% conversion</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
              <div className="bg-secondary" style={{ width: "28%" }}></div>
            </div>
            <div className="text-xs text-muted-foreground">
              $9,200 revenue / 62 bookings
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Pre-Stay Email</span>
              <span className="text-sm text-muted-foreground">19% conversion</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
              <div className="bg-accent" style={{ width: "19%" }}></div>
            </div>
            <div className="text-xs text-muted-foreground">
              $6,800 revenue / 48 bookings
            </div>
          </div>
        </div>
      </Card>

      {/* Seasonal Trends */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">6-Month Activity Revenue Trend</h3>
        <div className="h-48 flex items-end justify-around gap-2">
          {[
            { month: "Aug", revenue: 22 },
            { month: "Sep", revenue: 24 },
            { month: "Oct", revenue: 21 },
            { month: "Nov", revenue: 19 },
            { month: "Dec", revenue: 26 },
            { month: "Jan", revenue: 28 },
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs font-medium text-foreground">${item.revenue}K</div>
              <div
                className="w-full bg-gradient-to-t from-primary to-accent rounded-t"
                style={{ height: `${(item.revenue / 28) * 100}%` }}
              ></div>
              <div className="text-xs text-muted-foreground">{item.month}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-sm text-success">
            ↑ 27% growth vs 6 months ago
          </div>
        </div>
      </Card>

      {/* Guest Segment Analysis */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Activity Preference by Guest Segment</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Segment</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Top Activity</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Avg Booking Value</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Conversion Rate</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Total Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-sm font-medium text-foreground">Families</td>
                <td className="py-3 text-sm text-muted-foreground">SeaWorld Tickets</td>
                <td className="py-3 text-sm text-foreground">$185</td>
                <td className="py-3 text-sm text-muted-foreground">32%</td>
                <td className="py-3 text-sm font-medium text-foreground">$9,800</td>
              </tr>
              <tr>
                <td className="py-3 text-sm font-medium text-foreground">Couples</td>
                <td className="py-3 text-sm text-muted-foreground">Sunset Cruise</td>
                <td className="py-3 text-sm text-foreground">$160</td>
                <td className="py-3 text-sm text-muted-foreground">28%</td>
                <td className="py-3 text-sm font-medium text-foreground">$6,720</td>
              </tr>
              <tr>
                <td className="py-3 text-sm font-medium text-foreground">Adventure Seekers</td>
                <td className="py-3 text-sm text-muted-foreground">Kayak + Snorkel Tour</td>
                <td className="py-3 text-sm text-foreground">$140</td>
                <td className="py-3 text-sm text-muted-foreground">26%</td>
                <td className="py-3 text-sm font-medium text-foreground">$4,480</td>
              </tr>
              <tr>
                <td className="py-3 text-sm font-medium text-foreground">Cultural Travelers</td>
                <td className="py-3 text-sm text-muted-foreground">Balboa Park Pass</td>
                <td className="py-3 text-sm text-foreground">$80</td>
                <td className="py-3 text-sm text-muted-foreground">22%</td>
                <td className="py-3 text-sm font-medium text-foreground">$2,240</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Concierge;
