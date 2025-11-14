import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

interface DashboardHeaderProps {
  user: any;
  onSignOut: () => void;
}

export function DashboardHeader({ user, onSignOut }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Operations Command Center / <span className="text-foreground font-medium">Ashlar Intelligent Operations Suite</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">{user?.email}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onSignOut}
          className="gap-2"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>
    </header>
  );
}
