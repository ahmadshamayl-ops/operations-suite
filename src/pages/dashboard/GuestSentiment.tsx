import { Card } from "@/components/ui/card";
import { MessageSquare, TrendingUp, AlertTriangle, Smile, Frown, Meh } from "lucide-react";

const GuestSentiment = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Guest Sentiment Monitor</h1>
        <p className="text-muted-foreground">AI-powered sentiment analysis and satisfaction tracking</p>
      </div>

      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Overall Sentiment</span>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">8.4/10</div>
          <div className="text-xs text-success mt-1">↑ 0.3 vs last week</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Positive Feedback</span>
            <Smile className="w-4 h-4 text-success" />
          </div>
          <div className="text-3xl font-bold text-foreground">76%</div>
          <div className="text-xs text-muted-foreground mt-1">218 comments</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Negative Alerts</span>
            <Frown className="w-4 h-4 text-destructive" />
          </div>
          <div className="text-3xl font-bold text-foreground">12</div>
          <div className="text-xs text-destructive mt-1">3 high-risk</div>
        </Card>

        <Card className="p-6 bg-card shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Response Rate</span>
            <MessageSquare className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold text-foreground">94%</div>
          <div className="text-xs text-success mt-1">Within 2 hours</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sentiment Timeline */}
        <Card className="p-6 bg-card shadow-card lg:col-span-2">
          <h3 className="text-lg font-semibold text-foreground mb-4">30-Day Sentiment Trend</h3>
          <div className="h-64 flex items-end justify-around gap-1">
            {[
              { score: 8.1, pos: 72, neu: 20, neg: 8 },
              { score: 8.2, pos: 74, neu: 18, neg: 8 },
              { score: 8.0, pos: 71, neu: 22, neg: 7 },
              { score: 8.3, pos: 75, neu: 19, neg: 6 },
              { score: 8.1, pos: 73, neu: 20, neg: 7 },
              { score: 8.4, pos: 76, neu: 18, neg: 6 },
              { score: 8.5, pos: 77, neu: 17, neg: 6 },
              { score: 8.2, pos: 74, neu: 19, neg: 7 },
              { score: 8.4, pos: 76, neu: 18, neg: 6 },
              { score: 8.6, pos: 78, neu: 16, neg: 6 },
            ].map((day, i) => (
              <div key={i} className="flex-1 flex flex-col gap-0.5">
                <div className="flex-1 flex flex-col gap-0">
                  <div className="bg-success rounded-t" style={{ height: `${day.pos}%` }}></div>
                  <div className="bg-muted" style={{ height: `${day.neu}%` }}></div>
                  <div className="bg-destructive" style={{ height: `${day.neg}%` }}></div>
                </div>
                <div className="text-xs text-center text-muted-foreground">{i + 1}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-success rounded"></div>
              <span className="text-muted-foreground">Positive</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-muted rounded"></div>
              <span className="text-muted-foreground">Neutral</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 bg-destructive rounded"></div>
              <span className="text-muted-foreground">Negative</span>
            </div>
          </div>
        </Card>

        {/* AI Risk Alerts */}
        <Card className="p-6 bg-gradient-tech text-primary-foreground shadow-elevated">
          <h3 className="text-lg font-semibold mb-4">🚨 High-Risk Guests</h3>
          <div className="space-y-4">
            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Early Checkout Risk</div>
              </div>
              <p className="text-xs opacity-90">
                Guest in Room 412 mentioned "delayed housekeeping" 2x. Predict 68% chance of early checkout. Recommend personal follow-up.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <Frown className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Negative Pattern</div>
              </div>
              <p className="text-xs opacity-90">
                Room 518: Guest complained about noise twice in 24 hours. Move to quieter floor or offer comp amenity.
              </p>
            </div>

            <div className="p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
              <div className="flex items-start gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm font-semibold">Service Recovery</div>
              </div>
              <p className="text-xs opacity-90">
                Room 624: AC issue resolved in 45m. Guest sentiment improved from 3/10 to 7/10 after follow-up call.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Feedback */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Guest Comments (AI-Categorized)</h3>
        <div className="space-y-3">
          {[
            {
              room: "412",
              sentiment: "Negative",
              comment: "Housekeeping was 2 hours late. Still waiting for towels.",
              category: "Housekeeping",
              time: "15 min ago",
              icon: Frown,
              color: "text-destructive",
            },
            {
              room: "518",
              sentiment: "Positive",
              comment: "Beautiful ocean view! Check-in staff were incredibly welcoming.",
              category: "Front Office",
              time: "1 hour ago",
              icon: Smile,
              color: "text-success",
            },
            {
              room: "624",
              sentiment: "Neutral",
              comment: "Room is nice but minibar prices are high.",
              category: "F&B",
              time: "2 hours ago",
              icon: Meh,
              color: "text-muted-foreground",
            },
            {
              room: "721",
              sentiment: "Positive",
              comment: "Loved the spa package! Staff made our anniversary special.",
              category: "Spa",
              time: "3 hours ago",
              icon: Smile,
              color: "text-success",
            },
            {
              room: "305",
              sentiment: "Negative",
              comment: "AC not working properly. Room is too warm.",
              category: "Engineering",
              time: "4 hours ago",
              icon: Frown,
              color: "text-destructive",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <Icon className={`w-5 h-5 ${item.color} mt-0.5`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-foreground">Room {item.room}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        item.sentiment === "Positive"
                          ? "bg-success/20 text-success"
                          : item.sentiment === "Negative"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.sentiment}
                      </span>
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mb-1">{item.comment}</p>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Category Breakdown */}
      <Card className="p-6 bg-card shadow-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Sentiment by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { category: "Housekeeping", score: 7.8, comments: 45 },
            { category: "Front Office", score: 9.1, comments: 62 },
            { category: "Engineering", score: 8.2, comments: 18 },
            { category: "F&B", score: 8.6, comments: 38 },
          ].map((cat, i) => (
            <div key={i} className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{cat.category}</span>
                <span className="text-2xl font-bold text-primary">{cat.score}</span>
              </div>
              <div className="text-xs text-muted-foreground">{cat.comments} comments</div>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden bg-muted mt-2">
                <div className="bg-primary" style={{ width: `${cat.score * 10}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default GuestSentiment;
