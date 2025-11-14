import { Card } from "@/components/ui/card";
import { Home, Clock, CheckCircle, AlertCircle } from "lucide-react";

const RoomTurnover = () => {
  const rooms = [
    { room: "301", floor: 3, status: "Ready", time: "10:45 AM", housekeeper: "Maria G.", delay: 0 },
    { room: "302", floor: 3, status: "Cleaning", time: "11:20 AM", housekeeper: "John D.", delay: 0 },
    { room: "305", floor: 3, status: "Delayed", time: "1:15 PM", housekeeper: "Sarah L.", delay: 45 },
    { room: "412", floor: 4, status: "Ready", time: "10:30 AM", housekeeper: "Maria G.", delay: 0 },
    { room: "415", floor: 4, status: "Cleaning", time: "11:45 AM", housekeeper: "Tom R.", delay: 0 },
    { room: "418", floor: 4, status: "Delayed", time: "12:50 PM", housekeeper: "Sarah L.", delay: 30 },
    { room: "521", floor: 5, status: "Ready", time: "9:55 AM", housekeeper: "John D.", delay: 0 },
    { room: "524", floor: 5, status: "Cleaning", time: "11:05 AM", housekeeper: "Maria G.", delay: 0 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-success/20 text-success";
      case "Cleaning":
        return "bg-secondary/20 text-secondary";
      case "Delayed":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Room Turnover Prediction</h1>
        <p className="text-muted-foreground">AI-powered room readiness tracking and late room prediction</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Rooms Ready</span>
            <CheckCircle className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">78</div>
          <div className="text-xs text-success mt-1">89% on-time rate</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">In Progress</span>
            <Home className="w-4 h-4 text-secondary" />
          </div>
          <div className="text-3xl font-bold text-foreground">14</div>
          <div className="text-xs text-muted-foreground mt-1">Expected by 2:00 PM</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Delayed Rooms</span>
            <AlertCircle className="w-4 h-4 text-destructive" />
          </div>
          <div className="text-3xl font-bold text-foreground">6</div>
          <div className="text-xs text-destructive mt-1">Avg 35 min late</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Predicted Late</span>
            <Clock className="w-4 h-4 text-accent" />
          </div>
          <div className="text-3xl font-bold text-foreground">3</div>
          <div className="text-xs text-muted-foreground mt-1">Flagged by AI</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Floor Status Cards */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">Room Status by Floor</h3>
          <div className="space-y-4">
            {[
              { floor: "3rd Floor", ready: 12, cleaning: 4, delayed: 2, total: 18 },
              { floor: "4th Floor", ready: 15, cleaning: 3, delayed: 2, total: 20 },
              { floor: "5th Floor", ready: 18, cleaning: 2, delayed: 1, total: 21 },
              { floor: "6th Floor", ready: 16, cleaning: 3, delayed: 1, total: 20 },
              { floor: "7th Floor", ready: 17, cleaning: 2, delayed: 0, total: 19 },
            ].map((floor, i) => (
              <div key={i} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{floor.floor}</span>
                  <span className="text-sm text-muted-foreground">
                    {floor.ready}/{floor.total} ready
                  </span>
                </div>
                <div className="flex gap-1 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-success"
                    style={{ width: `${(floor.ready / floor.total) * 100}%` }}
                  ></div>
                  <div
                    className="bg-secondary"
                    style={{ width: `${(floor.cleaning / floor.total) * 100}%` }}
                  ></div>
                  <div
                    className="bg-destructive"
                    style={{ width: `${(floor.delayed / floor.total) * 100}%` }}
                  ></div>
                </div>
                <div className="flex gap-4 mt-2 text-xs">
                  <span className="text-success">✓ {floor.ready} Ready</span>
                  <span className="text-secondary">○ {floor.cleaning} Cleaning</span>
                  <span className="text-destructive">! {floor.delayed} Delayed</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Insights */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🤖 AI Predictions</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Late Room Alert</div>
              </div>
              <p className="text-xs opacity-90">
                Rooms 305, 418, 524 predicted to be 25-45 min late. Recommend reassignment or guest notification.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Bottleneck Detected</div>
              </div>
              <p className="text-xs opacity-90">
                Housekeeper Sarah L. handling 4 rooms vs avg 2.5. Suggest redistributing room 524 to Maria G.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">On-Track Forecast</div>
              </div>
              <p className="text-xs opacity-90">
                92% of rooms expected ready by 2:00 PM. 14 arrivals scheduled post-3:00 PM – no conflicts predicted.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Detailed Room Table */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Real-Time Room Status</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Room</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Floor</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Status</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Completion Time</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Housekeeper</th>
                <th className="pb-3 text-sm font-semibold text-muted-foreground">Delay (min)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rooms.map((room, i) => (
                <tr key={i}>
                  <td className="py-3 text-sm font-medium text-foreground">{room.room}</td>
                  <td className="py-3 text-sm text-muted-foreground">{room.floor}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(room.status)}`}>
                      {room.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm text-muted-foreground">{room.time}</td>
                  <td className="py-3 text-sm text-foreground">{room.housekeeper}</td>
                  <td className="py-3 text-sm text-muted-foreground">
                    {room.delay > 0 ? `+${room.delay}` : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default RoomTurnover;
