import { Card } from "@/components/ui/card";
import { Activity, Users, Clock, AlertTriangle } from "lucide-react";

const GuestFlow = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Guest Flow & Lobby Analytics</h1>
        <p className="text-muted-foreground">Real-time occupancy monitoring and traffic prediction</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Current Occupancy</span>
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground">87%</div>
          <div className="text-xs text-success mt-1">429 of 492 rooms</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Arrivals Today</span>
            <Activity className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">142</div>
          <div className="text-xs text-muted-foreground mt-1">86 checked in</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Avg Check-in Time</span>
            <Clock className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-foreground">4.2 min</div>
          <div className="text-xs text-success mt-1">↓ 18% improvement</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Queue Wait Time</span>
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">2.1 min</div>
          <div className="text-xs text-muted-foreground mt-1">Current average</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Check-in Congestion Chart */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Check-in Congestion Timeline</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            {[
              { hour: "9AM", count: 8 },
              { hour: "10AM", count: 24 },
              { hour: "11AM", count: 42 },
              { hour: "12PM", count: 18 },
              { hour: "1PM", count: 12 },
              { hour: "2PM", count: 15 },
              { hour: "3PM", count: 28 },
              { hour: "4PM", count: 55 },
              { hour: "5PM", count: 78 },
              { hour: "6PM", count: 62 },
              { hour: "7PM", count: 35 },
              { hour: "8PM", count: 18 },
            ].map((slot, i) => {
              const height = (slot.count / 78) * 100;
              const isHigh = slot.count > 50;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-xs font-medium text-foreground">{slot.count}</div>
                  <div
                    className={`w-full rounded-t transition-all ${
                      isHigh ? "bg-accent" : "bg-primary/80"
                    }`}
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs text-muted-foreground">{slot.hour}</div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span className="text-muted-foreground">Normal Flow</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-accent rounded"></div>
              <span className="text-muted-foreground">High Traffic</span>
            </div>
          </div>
        </Card>

        {/* Live Alerts */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🚨 Live Traffic Alerts</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">High Traffic Forecast</div>
              </div>
              <p className="text-xs opacity-90">
                Expected 78 check-ins between 4:30-5:30 PM. Current staffing may cause 8+ min wait times.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Activity className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Arrival Pattern</div>
              </div>
              <p className="text-xs opacity-90">
                56 remaining arrivals expected. 72% will arrive in next 2 hours. Recommend express check-in queue.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Users className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">VIP Arrivals</div>
              </div>
              <p className="text-xs opacity-90">
                3 Globalist members arriving between 5:00-6:00 PM. Recommend personal greeting at entrance.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Occupancy vs Arrivals Trend */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">7-Day Occupancy vs Arrivals Trend</h3>
        <div className="h-48 flex items-end justify-around gap-4">
          {[
            { day: "Mon", occupancy: 82, arrivals: 95 },
            { day: "Tue", occupancy: 85, arrivals: 88 },
            { day: "Wed", occupancy: 79, arrivals: 110 },
            { day: "Thu", occupancy: 88, arrivals: 102 },
            { day: "Fri", occupancy: 92, arrivals: 135 },
            { day: "Sat", occupancy: 96, arrivals: 142 },
            { day: "Sun", occupancy: 87, arrivals: 98 },
          ].map((day, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1">
              <div className="flex-1 flex items-end gap-0.5">
                <div className="flex-1 bg-primary/80 rounded-t" style={{ height: `${day.occupancy}%` }}></div>
                <div className="flex-1 bg-secondary/80 rounded-t" style={{ height: `${day.arrivals}%` }}></div>
              </div>
              <div className="text-xs text-center text-muted-foreground">{day.day}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-primary rounded"></div>
            <span className="text-muted-foreground">Occupancy %</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-secondary rounded"></div>
            <span className="text-muted-foreground">Daily Arrivals</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GuestFlow;
