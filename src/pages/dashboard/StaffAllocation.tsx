import { Card } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, Clock } from "lucide-react";

const StaffAllocation = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Smart Staff Allocation</h1>
        <p className="text-muted-foreground">AI-powered staffing optimization based on predicted guest flow</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Today's Check-ins</span>
            <Users className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">142</div>
          <div className="text-xs text-muted-foreground mt-1">Peak: 4:30-6:00 PM</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Check-outs</span>
            <Users className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-foreground">98</div>
          <div className="text-xs text-muted-foreground mt-1">Peak: 10:00-11:30 AM</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Recommended Staff</span>
            <Calendar className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground">8</div>
          <div className="text-xs text-success mt-1">↓ 2 vs yesterday</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Idle Hours Saved</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">3.2 hrs</div>
          <div className="text-xs text-success mt-1">$96 cost savings</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lobby Traffic Heatmap */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Predicted Lobby Traffic Heatmap</h3>
          <div className="space-y-2">
            {[
              { hour: "7:00 AM", intensity: 25, staff: 2 },
              { hour: "9:00 AM", intensity: 45, staff: 3 },
              { hour: "11:00 AM", intensity: 85, staff: 5 },
              { hour: "1:00 PM", intensity: 40, staff: 3 },
              { hour: "3:00 PM", intensity: 55, staff: 4 },
              { hour: "5:00 PM", intensity: 95, staff: 6 },
              { hour: "7:00 PM", intensity: 60, staff: 4 },
              { hour: "9:00 PM", intensity: 30, staff: 2 },
            ].map((slot, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-sm text-muted-foreground">{slot.hour}</div>
                <div className="flex-1 h-8 bg-muted rounded-lg overflow-hidden flex items-center">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent flex items-center justify-end pr-3"
                    style={{ width: `${slot.intensity}%` }}
                  >
                    <span className="text-xs text-primary-foreground font-medium">{slot.intensity}%</span>
                  </div>
                </div>
                <div className="w-32 text-sm text-foreground">
                  <Users className="w-4 h-4 inline mr-1" />
                  {slot.staff} staff
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Recommendations */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🤖 AI Recommendations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Peak Traffic Alert</div>
              </div>
              <p className="text-xs opacity-90">
                Add 2 front desk associates at 4:00 PM. Expected 142 check-ins with 90% arriving between 4:30-6:00 PM.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Users className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Staffing Efficiency</div>
              </div>
              <p className="text-xs opacity-90">
                Morning shift optimized. 3 fewer idle hours vs yesterday = $96 savings. Maintain 2-associate minimum.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Calendar className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Weekly Forecast</div>
              </div>
              <p className="text-xs opacity-90">
                Weekend surge expected. Saturday check-ins +45% vs baseline. Pre-schedule 2 additional staff.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Staff Schedule Table */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Optimized Staff Schedule - Today</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Shift</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Time</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Assigned Staff</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Expected Traffic</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 text-sm text-foreground">Morning</td>
                <td className="py-3 text-sm text-muted-foreground">7:00 AM - 3:00 PM</td>
                <td className="py-3 text-sm text-foreground">3 associates</td>
                <td className="py-3 text-sm text-muted-foreground">Medium (98 check-outs)</td>
                <td className="py-3"><span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Optimal</span></td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">Afternoon</td>
                <td className="py-3 text-sm text-muted-foreground">3:00 PM - 11:00 PM</td>
                <td className="py-3 text-sm text-foreground">6 associates</td>
                <td className="py-3 text-muted-foreground">High (142 check-ins)</td>
                <td className="py-3"><span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Peak Shift</span></td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-foreground">Night</td>
                <td className="py-3 text-sm text-muted-foreground">11:00 PM - 7:00 AM</td>
                <td className="py-3 text-sm text-foreground">2 associates</td>
                <td className="py-3 text-sm text-muted-foreground">Low</td>
                <td className="py-3"><span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Minimal</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default StaffAllocation;
