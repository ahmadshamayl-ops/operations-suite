import { Building2, Brain, LayoutDashboard, Wrench, DollarSign, Zap, Package, TrendingUp, Users, Bell, Calendar, Activity, Home, Gift, AlertCircle, MessageSquare, TrendingDown, Briefcase } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const dashboardItem = { title: "Dashboard Overview", url: "/dashboard", icon: LayoutDashboard };

const backOfficeItems = [
  { title: "Predictive Maintenance", url: "/dashboard/maintenance", icon: Wrench },
  { title: "Finance Leak Detection", url: "/dashboard/finance", icon: DollarSign },
  { title: "Energy & Asset Analytics", url: "/dashboard/energy", icon: Zap },
  { title: "Inventory Optimization", url: "/dashboard/inventory", icon: Package },
  { title: "Performance KPIs", url: "/dashboard/kpis", icon: TrendingUp },
  { title: "Vendor Risk & Insights", url: "/dashboard/vendors", icon: Users },
  { title: "Reports / Alerts Center", url: "/dashboard/alerts", icon: Bell },
];

const frontOfficeItems = [
  { title: "Smart Staff Allocation", url: "/dashboard/staff-allocation", icon: Calendar },
  { title: "Guest Flow & Lobby Analytics", url: "/dashboard/guest-flow", icon: Activity },
  { title: "Room Turnover Prediction", url: "/dashboard/room-turnover", icon: Home },
  { title: "Upsell Opportunities", url: "/dashboard/upsell", icon: Gift },
  { title: "Service Delay Escalation", url: "/dashboard/service-delay", icon: AlertCircle },
  { title: "Guest Sentiment Monitor", url: "/dashboard/guest-sentiment", icon: MessageSquare },
  { title: "Lost Revenue Tracker", url: "/dashboard/lost-revenue", icon: TrendingDown },
  { title: "AI Concierge Analytics", url: "/dashboard/concierge", icon: Briefcase },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Building2 className="w-8 h-8 text-accent" />
            <Brain className="w-4 h-4 text-secondary absolute -bottom-0.5 -right-0.5 bg-primary rounded-full p-0.5" />
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <div className="text-sm font-bold text-foreground">Ashlar Suite</div>
              <div className="text-xs text-muted-foreground">Operations Platform</div>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={dashboardItem.url}
                    end={true}
                    className="hover:bg-muted/50"
                    activeClassName="bg-muted text-primary font-medium"
                  >
                    <dashboardItem.icon className="h-4 w-4" />
                    {!isCollapsed && <span>{dashboardItem.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Back Office</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {backOfficeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-muted/50"
                      activeClassName="bg-muted text-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Front Office</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {frontOfficeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className="hover:bg-muted/50"
                      activeClassName="bg-muted text-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t border-border">
        <SidebarTrigger className="w-full" />
      </div>
    </Sidebar>
  );
}
