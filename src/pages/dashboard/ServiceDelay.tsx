import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, TrendingDown, CheckCircle } from "lucide-react";

const ServiceDelay = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Service Delay Escalation Center</h1>
        <p className="text-muted-foreground">Real-time SLA monitoring and automated escalation alerts</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">SLA Breaches Today</span>
            <AlertCircle className="w-4 h-4 text-destructive" />
          </div>
          <div className="text-3xl font-bold text-foreground">7</div>
          <div className="text-xs text-destructive mt-1">3 critical</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Open Tickets</span>
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">23</div>
          <div className="text-xs text-muted-foreground mt-1">12 approaching SLA</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Avg Response Time</span>
            <TrendingDown className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">18 min</div>
          <div className="text-xs text-success mt-1">↓ 22% improvement</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Resolved Today</span>
            <CheckCircle className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">48</div>
          <div className="text-xs text-muted-foreground mt-1">92% within SLA</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SLA Breach Tickets */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Critical SLA Breaches</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="pb-3 text-sm font-semibold text-muted-foreground">Ticket ID</th>
                  <th className="pb-3 text-sm font-semibold text-muted-foreground">Issue</th>
                  <th className="pb-3 text-sm font-semibold text-muted-foreground">Department</th>
                  <th className="pb-3 text-sm font-semibold text-muted-foreground">Room</th>
                  <th className="pb-3 text-sm font-semibold text-muted-foreground">Time Open</th>
                  <th className="pb-3 text-sm font-semibold text-muted-foreground">SLA Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-destructive/5">
                  <td className="py-3 text-sm font-medium text-foreground">TK-8821</td>
                  <td className="py-3 text-sm text-foreground">HVAC Not Cooling</td>
                  <td className="py-3"><span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Engineering</span></td>
                  <td className="py-3 text-sm text-muted-foreground">412</td>
                  <td className="py-3 text-sm text-muted-foreground">2h 15m</td>
                  <td className="py-3"><span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">Breached +45m</span></td>
                </tr>
                <tr className="bg-destructive/5">
                  <td className="py-3 text-sm font-medium text-foreground">TK-8819</td>
                  <td className="py-3 text-sm text-foreground">Room Not Ready</td>
                  <td className="py-3"><span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Housekeeping</span></td>
                  <td className="py-3 text-sm text-muted-foreground">305</td>
                  <td className="py-3 text-sm text-muted-foreground">1h 50m</td>
                  <td className="py-3"><span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">Breached +35m</span></td>
                </tr>
                <tr className="bg-destructive/5">
                  <td className="py-3 text-sm font-medium text-foreground">TK-8814</td>
                  <td className="py-3 text-sm text-foreground">Towel Request</td>
                  <td className="py-3"><span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Housekeeping</span></td>
                  <td className="py-3 text-sm text-muted-foreground">624</td>
                  <td className="py-3 text-sm text-muted-foreground">1h 25m</td>
                  <td className="py-3"><span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded">Breached +10m</span></td>
                </tr>
                <tr className="bg-accent/5">
                  <td className="py-3 text-sm font-medium text-foreground">TK-8823</td>
                  <td className="py-3 text-sm text-foreground">Toilet Leak</td>
                  <td className="py-3"><span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">Engineering</span></td>
                  <td className="py-3 text-sm text-muted-foreground">518</td>
                  <td className="py-3 text-sm text-muted-foreground">55m</td>
                  <td className="py-3"><span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">5m until SLA</span></td>
                </tr>
                <tr className="bg-accent/5">
                  <td className="py-3 text-sm font-medium text-foreground">TK-8822</td>
                  <td className="py-3 text-sm text-foreground">Minibar Restock</td>
                  <td className="py-3"><span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Front Office</span></td>
                  <td className="py-3 text-sm text-muted-foreground">721</td>
                  <td className="py-3 text-sm text-muted-foreground">42m</td>
                  <td className="py-3"><span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">18m until SLA</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* AI Alerts */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🚨 Escalation Alerts</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Critical Issue</div>
              </div>
              <p className="text-xs opacity-90">
                TK-8821: HVAC failure in Room 412. Guest is Globalist member. Recommend immediate room move + comp upgrade.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Department Bottleneck</div>
              </div>
              <p className="text-xs opacity-90">
                Housekeeping has 6 open tickets avg 1h 12m. Engineering has 2 staff available — recommend cross-assignment.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <TrendingDown className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Pattern Detected</div>
              </div>
              <p className="text-xs opacity-90">
                Room 305 has had 3 service issues this week. Recommend full maintenance inspection before next check-in.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Department Performance */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">SLA Performance by Department</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Housekeeping</span>
              <span className="text-sm text-muted-foreground">87% within SLA</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
              <div className="bg-success" style={{ width: "87%" }}></div>
              <div className="bg-destructive" style={{ width: "13%" }}></div>
            </div>
            <div className="text-xs text-muted-foreground">
              28 resolved / 32 total today
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Engineering</span>
              <span className="text-sm text-muted-foreground">92% within SLA</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
              <div className="bg-success" style={{ width: "92%" }}></div>
              <div className="bg-destructive" style={{ width: "8%" }}></div>
            </div>
            <div className="text-xs text-muted-foreground">
              11 resolved / 12 total today
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">Front Office</span>
              <span className="text-sm text-muted-foreground">96% within SLA</span>
            </div>
            <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-muted">
              <div className="bg-success" style={{ width: "96%" }}></div>
              <div className="bg-destructive" style={{ width: "4%" }}></div>
            </div>
            <div className="text-xs text-muted-foreground">
              24 resolved / 25 total today
            </div>
          </div>
        </div>
      </Card>

      {/* Response Time Trend */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">7-Day Response Time Trend</h3>
        <div className="h-48 flex items-end justify-around gap-2">
          {[
            { day: "Mon", time: 22 },
            { day: "Tue", time: 20 },
            { day: "Wed", time: 19 },
            { day: "Thu", time: 21 },
            { day: "Fri", time: 18 },
            { day: "Sat", time: 17 },
            { day: "Sun", time: 18 },
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="text-xs font-medium text-foreground">{item.time}m</div>
              <div
                className="w-full bg-primary/80 rounded-t"
                style={{ height: `${(item.time / 22) * 100}%` }}
              ></div>
              <div className="text-xs text-muted-foreground">{item.day}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-sm text-muted-foreground">
            Target SLA: 60 minutes | Current Avg: 18 minutes
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceDelay;
