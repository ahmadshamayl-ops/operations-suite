import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Maintenance from "./pages/dashboard/Maintenance";
import Finance from "./pages/dashboard/Finance";
import Energy from "./pages/dashboard/Energy";
import Inventory from "./pages/dashboard/Inventory";
import KPIs from "./pages/dashboard/KPIs";
import Vendors from "./pages/dashboard/Vendors";
import Alerts from "./pages/dashboard/Alerts";
import StaffAllocation from "./pages/dashboard/StaffAllocation";
import GuestFlow from "./pages/dashboard/GuestFlow";
import RoomTurnover from "./pages/dashboard/RoomTurnover";
import Upsell from "./pages/dashboard/Upsell";
import ServiceDelay from "./pages/dashboard/ServiceDelay";
import GuestSentiment from "./pages/dashboard/GuestSentiment";
import LostRevenue from "./pages/dashboard/LostRevenue";
import Concierge from "./pages/dashboard/Concierge";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="finance" element={<Finance />} />
            <Route path="energy" element={<Energy />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="kpis" element={<KPIs />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="staff-allocation" element={<StaffAllocation />} />
            <Route path="guest-flow" element={<GuestFlow />} />
            <Route path="room-turnover" element={<RoomTurnover />} />
            <Route path="upsell" element={<Upsell />} />
            <Route path="service-delay" element={<ServiceDelay />} />
            <Route path="guest-sentiment" element={<GuestSentiment />} />
            <Route path="lost-revenue" element={<LostRevenue />} />
            <Route path="concierge" element={<Concierge />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
