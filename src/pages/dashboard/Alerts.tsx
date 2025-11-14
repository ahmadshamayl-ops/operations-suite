import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, AlertCircle, CheckCircle, Bell, Filter } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      severity: "high",
      title: "HVAC Energy Spike Detected",
      description: "Hyatt San Francisco showing 22% increase in energy consumption vs baseline",
      property: "Hyatt San Francisco",
      department: "Engineering",
      timestamp: "2 hours ago",
      status: "active",
    },
    {
      id: 2,
      severity: "high",
      title: "Vendor Price Anomaly",
      description: "CleanServe LLC – repeated invoice mismatch pattern detected across 3 properties",
      property: "Multiple",
      department: "Finance",
      timestamp: "4 hours ago",
      status: "active",
    },
    {
      id: 3,
      severity: "medium",
      title: "Elevator Maintenance Alert",
      description: "Elevator #24 vibration threshold exceeded – 68% failure probability in 14 days",
      property: "Hyatt Chicago",
      department: "Engineering",
      timestamp: "6 hours ago",
      status: "active",
    },
    {
      id: 4,
      severity: "low",
      title: "Preventive Maintenance Completed",
      description: "17 assets completed scheduled maintenance this week",
      property: "All Properties",
      department: "Engineering",
      timestamp: "1 day ago",
      status: "resolved",
    },
    {
      id: 5,
      severity: "medium",
      title: "Inventory Reorder Triggered",
      description: "Automated PO generated for linen supplies – stock reaching threshold",
      property: "Hyatt Boston",
      department: "Operations",
      timestamp: "1 day ago",
      status: "resolved",
    },
    {
      id: 6,
      severity: "high",
      title: "Cost per Guest Anomaly",
      description: "Downtown Location #42 showing 22% increase in labor costs vs occupancy",
      property: "Hyatt NYC Downtown",
      department: "Finance",
      timestamp: "2 days ago",
      status: "investigating",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Reports / Alerts Center</h1>
        <p className="text-muted-foreground">AI-generated alerts and system notifications</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-destructive/10 border-destructive shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-sm text-muted-foreground">Critical Alerts</span>
          </div>
          <div className="text-3xl font-bold text-destructive">3</div>
          <div className="text-xs text-destructive mt-1">Require immediate action</div>
        </Card>

        <Card className="p-6 bg-accent/10 border-accent shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-accent" />
            <span className="text-sm text-muted-foreground">Medium Priority</span>
          </div>
          <div className="text-3xl font-bold text-accent">2</div>
          <div className="text-xs text-accent mt-1">Under investigation</div>
        </Card>

        <Card className="p-6 bg-success/10 border-success shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-sm text-muted-foreground">Resolved (24h)</span>
          </div>
          <div className="text-3xl font-bold text-success">12</div>
          <div className="text-xs text-success mt-1">Successfully closed</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Total Alerts (7d)</span>
          </div>
          <div className="text-3xl font-bold text-foreground">47</div>
          <div className="text-xs text-muted-foreground mt-1">Past week</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4 bg-card shadow-card">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Filter className="w-4 h-4" />
            Filter by:
          </div>
          <Button variant="outline" size="sm">
            All Severities
          </Button>
          <Button variant="outline" size="sm">
            All Departments
          </Button>
          <Button variant="outline" size="sm">
            All Properties
          </Button>
          <Button variant="outline" size="sm">
            All Status
          </Button>
        </div>
      </Card>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card
            key={alert.id}
            className={`p-6 shadow-card border-l-4 ${
              alert.severity === "high"
                ? "border-l-destructive bg-destructive/5"
                : alert.severity === "medium"
                ? "border-l-accent bg-accent/5"
                : "border-l-success bg-success/5"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  {alert.severity === "high" ? (
                    <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  ) : alert.severity === "medium" ? (
                    <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{alert.title}</h3>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                          alert.severity === "high"
                            ? "bg-destructive/10 text-destructive"
                            : alert.severity === "medium"
                            ? "bg-accent/10 text-accent"
                            : "bg-success/10 text-success"
                        }`}
                      >
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">Property:</span>
                        <span>{alert.property}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">Department:</span>
                        <span>{alert.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">Time:</span>
                        <span>{alert.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    alert.status === "active"
                      ? "bg-primary/10 text-primary"
                      : alert.status === "investigating"
                      ? "bg-accent/10 text-accent"
                      : "bg-success/10 text-success"
                  }`}
                >
                  {alert.status}
                </span>
                {alert.status === "active" && (
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* AI Summary */}
      <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
        <h3 className="text-lg font-semibold mb-4">🤖 AI Alert Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
            <div className="text-sm font-semibold mb-2">Most Common Alert Type</div>
            <p className="text-xs opacity-90 mb-1">Energy consumption anomalies (32% of all alerts)</p>
            <p className="text-xs text-accent font-bold">Recommendation: Review HVAC maintenance schedules</p>
          </div>

          <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
            <div className="text-sm font-semibold mb-2">Resolution Time Trend</div>
            <p className="text-xs opacity-90 mb-1">Average resolution time: 4.2 hours (↓ 18% vs last month)</p>
            <p className="text-xs text-accent font-bold">Performance: Excellent response rate</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Alerts;
